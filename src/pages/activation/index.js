import React, { useState } from 'react';
import { useRouter } from 'next/router';
import QRCode from 'qrcode';
import { Toaster, toast } from 'sonner';
import { useForm } from 'react-hook-form';
import getConfig from 'next/config';
import Image from 'next/image';
import Link from 'next/link';

// @get .config
const { publicRuntimeConfig, serverRuntimeConfig } = getConfig();

// @lib
import { useTrackingStore } from '@lib/hooks/tracking-store/TrackingStore';
import { getFetch, getFetchUrl, updateData } from '@lib/controller/API';
import { submitFormHbSpt } from '@lib/controller/HubSpot';
import { encodeData, convertQrCodeToBlob } from '@lib/helper/Configuration';
import {
  setHbSptCustomerData,
  setHbSptAttendeeData,
  setGroupedAttendees,
} from '@lib/helper/Store';

// @components
import HeadGraphSeo from '@components/Head';
import Main from '@components/Main';
import Container from '@components/Container';
import ToastAlerts from '@components/UI/Alerts/ToastAlert';

// @form
import Label from '@components/UI/Form/Label';
import Input from '@components/UI/Form/Input';

const Activation = ({ ipAddress }) => {
  const router = useRouter();
  const { trackingPurchase } = useTrackingStore();
  const [isSessionAttendee, setSessionAttendee] = useState(false);

  // @form-hook(activation)
  const {
    register,
    formState: { errors, isValid, isSubmitting },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'all',
    defaultValues: {},
  });

  // @submit(checkout)
  const onSubmitForm = async (data) => {
    if (!isValid === false) {
      try {
        const rsCustomer = await getFetch(
          `/api/customers?filters[customerId][$eq]=${data?.orderCustomer}&filters[email][$eq]=${data?.emailCustomer}&populate=*`
        );
        // @check(customers)
        if (!rsCustomer?.data?.length > 0) {
          toast.custom(
            (t) => (
              <ToastAlerts
                id={t}
                position="bottom-[78px] inset-x-2.5 sm:inset-x-3 top-auto"
                type="info"
                visible={true}
                label={`<strong>Invalid customer data</strong>,<br/> Please review the information and try again.`}
              />
            ),
            { duration: 5000 }
          );
          return;
        }

        if (rsCustomer?.data[0]?.orders[0]?.paymentStatus !== 'Success') {
          // @hubspot(customer & attendee)
          const hbSptKey = '96572ab0-5958-4cc4-8357-9c65de42cab6';
          const hbSptAttndeeKey = 'c9347ef6-664d-4b7a-892b-a1cabaa2bc30';
          const { key } = await fetch('/api/env/note', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
          }).then((res) => res.json());
          // @order
          const rsOrderRecived = await getFetch(
            `/api/orders/${rsCustomer?.data[0]?.orders[0]?.documentId}?populate[customer][fields]=*&populate[products][fields][0]=name&populate[products][fields][1]=price&populate[products][fields][2]=priceSale&populate[coupons][fields][0]=couponCode&populate[coupons][fields][1]=amount`
          );

          // @webhook-callback
          const rsPaymentWebhook = await fetch('/api/payment/webhook', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-api-key': key,
            },
            body: JSON.stringify({
              paymentId: rsCustomer?.data[0]?.orders[0]?.order_session,
            }),
          }).then((res) => res.json());

          // @process(payment)
          if (
            rsPaymentWebhook?.status === 'PAID' ||
            rsPaymentWebhook?.status === 'SETTLED'
          ) {
            // @update(order)
            const updateStatusOrder = await updateData(
              `/api/orders/${rsCustomer?.data[0]?.orders[0]?.documentId}`,
              {
                data: {
                  paymentStatus: 'Success',
                },
              }
            );

            const getCoupon = await fetch('/api/data/coupons?sv=coinfestasia', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                data: encodeData(
                  rsOrderRecived?.data?.coupons.length > 0
                    ? rsOrderRecived?.data?.coupons[0]?.couponCode
                    : null
                ),
              }),
            }).then((res) => res.json());
            // @coupon
            const setIsCoupon = getCoupon !== null ? getCoupon : null;
            const checkCoupon =
              setIsCoupon !== null &&
              setIsCoupon !== 'null' &&
              setIsCoupon !== undefined;

            // @update-stock(coupon)
            if (checkCoupon) {
              const isUsageCoupon = parseInt(setIsCoupon?.usage) + 1;
              const rsUpdateCouponData = await updateData(
                `/api/coupons/${setIsCoupon?.documentId}`,
                {
                  data: {
                    usage: isUsageCoupon?.toString(),
                  },
                }
              );
            }

            if (rsOrderRecived?.data?.customer?.isApproved !== true) {
              const isProducts = rsOrderRecived?.data?.products;
              const isCustomerAttendee = rsCustomer?.data[0];

              // @save-to(hubspot)
              const [updateStatusCustomer, rsHbSptCustomer] = await Promise.all(
                [
                  updateData(
                    `/api/customers/${isCustomerAttendee?.documentId}`,
                    {
                      data: {
                        isApproved: true,
                      },
                    }
                  ),
                  submitFormHbSpt(
                    setHbSptCustomerData(
                      rsOrderRecived?.data?.customer,
                      ipAddress?.ip
                    ),
                    hbSptKey
                  ),
                ]
              );

              // @processed-attendee
              const procssdEmails = new Set();
              const arrAttendees = [];
              const arrBlobAttendees = [];
              for (let i = 0; i < isCustomerAttendee?.attendees?.length; i++) {
                const isAttendee = isCustomerAttendee?.attendees[i];
                const rsAttendee = await getFetch(
                  `/api/attendees/${isAttendee?.documentId}?populate=*`
                );
                arrAttendees.push({ attendee: rsAttendee?.data });
              }

              if (isProducts && arrAttendees) {
                const grpAttendee = setGroupedAttendees(
                  isProducts,
                  arrAttendees
                );
                const isOrderTotal = Number(
                  rsCustomer?.data[0]?.orders[0]?.orderTotal
                );

                // @add-tracking-purchase
                trackingPurchase(
                  rsCustomer?.data[0]?.orders[0]?.documentId,
                  grpAttendee,
                  setIsCoupon,
                  isOrderTotal
                );

                // @send(invoice)
                const rsInvoice = await fetch('/api/invoice/send-invoice', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': key,
                  },
                  body: JSON.stringify({
                    toEmail: isCustomerAttendee?.email,
                    attId: isCustomerAttendee?.customerId,
                    createDate: isCustomerAttendee?.createdAt,
                    fullname: `${isCustomerAttendee?.firstName} ${isCustomerAttendee?.lastName}`,
                    company: `${isCustomerAttendee?.company}`,
                    products: grpAttendee,
                    coupon:
                      rsOrderRecived?.data?.coupons.length > 0
                        ? rsOrderRecived?.data?.coupons[0]
                        : null,
                  }),
                }).then((rs) => rs?.json());
                for (let i = 0; i < grpAttendee?.length; i++) {
                  const isGrpdAttendee = grpAttendee[i];
                  const tickets =
                    isGrpdAttendee?.documentId !== 'rc33x0dgm6tm707jghffuip4'
                      ? `Festival Ticket`
                      : `${isGrpdAttendee?.name}`;
                  for (let a = 0; a < isGrpdAttendee?.attendees?.length; a++) {
                    const rsAttendee = isGrpdAttendee?.attendees[a];

                    if (rsAttendee?.isApproved !== true) {
                      const rsQrCodeUrl = await QRCode.toDataURL(
                        `${rsAttendee?.attendeeId}`,
                        {
                          width: 256,
                        }
                      );
                      const isFullname = `${rsAttendee?.firstName} ${rsAttendee?.lastName}`;
                      const rsBlobQrCode = await convertQrCodeToBlob(
                        rsQrCodeUrl,
                        rsAttendee?.id,
                        rsAttendee?.attendeeId,
                        rsAttendee?.documentId,
                        isFullname
                      );
                      const [updateStatusAttendee, rsHbSptAttendee] =
                        await Promise.all([
                          updateData(
                            `/api/attendees/${rsAttendee?.documentId}`,
                            {
                              data: {
                                isApproved: true,
                              },
                            }
                          ),
                          submitFormHbSpt(
                            setHbSptAttendeeData(rsAttendee, ipAddress?.ip),
                            hbSptAttndeeKey
                          ),
                        ]);

                      if (!procssdEmails?.has(rsAttendee?.email)) {
                        procssdEmails.add(rsAttendee?.email);
                        // @send(email)
                        const rsEmail = await fetch(
                          '/api/email/send-attendee-ticket',
                          {
                            method: 'POST',
                            headers: {
                              'Content-Type': 'application/json',
                              'x-api-key': key,
                            },
                            body: JSON.stringify({
                              toEmail: rsAttendee?.email,
                              qrCode: rsBlobQrCode?.url,
                              docId: isGrpdAttendee?.documentId,
                              attId: rsAttendee?.attendeeId,
                              fullname: isFullname,
                              company: rsAttendee?.company,
                              productTickets: tickets,
                            }),
                          }
                        ).then((res) => res.json());
                      }
                      arrBlobAttendees.push({
                        blobQrCodeUrl: rsBlobQrCode?.url,
                      });
                    }
                  }
                }
                // @send(ticket-customer)
                if (arrAttendees?.length > 1) {
                  const rsCustomerEmail = await fetch(
                    '/api/customer/send-customer-ticket',
                    {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                        'x-api-key': key,
                      },
                      body: JSON.stringify({
                        toEmail: isCustomerAttendee?.email,
                        attId: isCustomerAttendee?.customerId,
                        fullname: `${isCustomerAttendee?.firstName} ${isCustomerAttendee?.lastName}`,
                        attendee: arrAttendees,
                        blobQrCode: arrBlobAttendees,
                      }),
                    }
                  ).then((res) => res.json());
                }
              }
            }

            router.replace(`/activation/success`);
          } else if (
            rsPaymentWebhook?.status === 'FAILED' ||
            rsPaymentWebhook?.status === 'EXPIRED'
          ) {
            toast.custom(
              (t) => (
                <ToastAlerts
                  id={t}
                  type="info"
                  visible={true}
                  label={`<strong>Sorry, Your activation is not valid</strong>, as the payment has not been completed`}
                />
              ),
              {
                duration: 5000,
              }
            );
          } else {
            toast.custom(
              (t) => (
                <ToastAlerts
                  id={t}
                  type="info"
                  visible={true}
                  label={`<strong>Sorry, Your activation is not valid</strong>, as the payment has not been completed`}
                />
              ),
              {
                duration: 5000,
              }
            );
          }
        } else {
          toast.custom(
            (t) => (
              <ToastAlerts
                id={t}
                type="info"
                visible={true}
                label={`<strong>Sorry, Your data has already been activated</strong>,<br/> Please return to the homepage.`}
              />
            ),
            {
              duration: 5000,
            }
          );
        }
      } catch (error) {
        // console.error('[error] processing submission:', error);
        return;
      }
    }
  };

  return (
    <>
      {/* @head */}
      <HeadGraphSeo title={`Activation`} otherPage={true} />

      {/* @main */}
      <Main className="fixed inset-x-0 inset-y-0 flex h-svh min-h-svh flex-col items-center justify-center self-center">
        <Container>
          <form
            id="ca25Form_CustomerActivationConfrim"
            method="POST"
            onSubmit={handleSubmit(onSubmitForm)}
            className="relative block w-full"
          >
            <div className="flex w-full flex-col items-center justify-center">
              <div className="flex w-full max-w-[568px] flex-col items-start rounded-2xl border-[3px] border-solid border-black-700 px-2 pb-2 pt-4 bg-gradient-primary45 sm:mt-0">
                <div className="mb-4 flex w-full flex-row items-start justify-between px-2 sm:px-4">
                  <div className="block w-max">
                    <h1 className="text-lg font-normal capitalize leading-initial text-white sm:text-xl">
                      {`Receive Ticket`}
                    </h1>
                  </div>
                  <div>
                    <Image
                      className="mx-auto my-auto h-8.5 w-auto sm:h-10"
                      src={'/assets/images/ca2025BrandLight.svg'}
                      alt={`${publicRuntimeConfig?.siteAppName} Primary Brand`}
                      height={58}
                      width={170}
                      quality="87"
                      fetchPriority="auto"
                    />
                  </div>
                </div>
                <div className="mb-4 inline-flex w-full flex-col space-y-4 rounded-xl bg-white px-4 py-4">
                  <div className="block">
                    <Label
                      forId={`ca25Form_TicketCustomerConfrim`}
                      label="Order Information"
                      helpText={`Look for your order number under "Description" in Xendit's email`}
                      required={true}
                    />
                    <Input
                      id={`ca25Form_TicketCustomerConfrim`}
                      type="text"
                      placeholder="Eg: 'C-25234...'"
                      ariaLabel={`Customer ID`}
                      config={{
                        ...register(`orderCustomer`, {
                          required: true,
                          maxLength: 14,
                          pattern: {
                            value: /^[A-T]-\d{8,12}$/,
                          },
                        }),
                      }}
                      errors={errors[`orderCustomer`]}
                    />
                  </div>
                  <div className="block">
                    <Label
                      forId={`ca25Form_EmailCustomerConfrim`}
                      label="Email"
                      required={true}
                    />
                    <Input
                      id={`ca25Form_EmailCustomerConfrim`}
                      type="email"
                      placeholder="Eg: example@email.com"
                      ariaLabel={`Email Customer Confrim`}
                      config={{
                        ...register(`emailCustomer`, {
                          required: true,
                          maxLength: 255,
                          pattern: {
                            value:
                              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          },
                        }),
                      }}
                      errors={errors[`emailCustomer`]}
                    />
                  </div>
                </div>

                <div className="inline-flex w-full items-start justify-between">
                  <Link
                    className="ml-0.5 mt-0.5 flex flex-row items-center gap-x-2 text-sm text-black-900 underline transition duration-300 ease-in-out sm:gap-x-2"
                    href={'/'}
                    title="Coinfest Asia 2025 Button for Back to Home"
                  >
                    <svg
                      className="h-4.5 w-4.5 shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m12 19-7-7 7-7" />
                      <path d="M19 12H5" />
                    </svg>
                    Back
                    <span className="-ml-1 hidden w-max sm:flex">to Home</span>
                  </Link>
                  <button
                    id="tktCA25Form_SubmitAttendeeConfrim"
                    className={`pointer-events-auto inline-flex w-[169px] cursor-pointer flex-row items-center justify-center rounded-xl bg-black-900 px-4 py-4 text-sm font-normal capitalize leading-inherit text-white disabled:cursor-not-allowed disabled:bg-black-900/60 disabled:text-white/50 sm:w-[199px] sm:px-6 sm:py-4 sm:text-base`}
                    type="submit"
                    role="button"
                    tabIndex={-1}
                    aria-label="Submit Attendee Confrim for Coinfest Asia 2025"
                    disabled={!isValid || isSubmitting || isSessionAttendee}
                  >
                    {isSubmitting ? (
                      <span className="flex flex-row items-center">
                        <svg
                          className="mr-3 h-5 w-5 animate-spin text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="3"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          ></path>
                        </svg>
                        Processing ...
                      </span>
                    ) : (
                      'Submit'
                    )}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </Container>
      </Main>

      {/* @alert(Toast)  */}
      <Toaster
        position="bottom-left"
        richColors
        expand={false}
        pauseWhenPageIsHidden={true}
        dismissible={false}
        gap="10"
        offset={'24px'}
        toastOptions={{
          className: 'ca25ToastAlert',
        }}
      />
    </>
  );
};

Activation.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
export const getServerSideProps = async (context) => {
  try {
    const rsIpAddress = await getFetchUrl(
      `https://ipinfo.io/json?token=${serverRuntimeConfig?.ipAddress_token}`
    );

    return {
      props: {
        ipAddress: rsIpAddress,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    };
  }
};
export default Activation;
