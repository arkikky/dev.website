import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { twMerge } from 'tailwind-merge';
import { useForm } from 'react-hook-form';
import DOMPurify from 'dompurify';
import getConfig from 'next/config';

// @get .config
const { serverRuntimeConfig } = getConfig();

// @lib
import {
  getFetch,
  getFetchUrl,
  updateSubmitData,
  updateData,
  pushSubmitData,
  deleteData,
} from '@lib/controller/API';
import { getFecthHbSpt } from '@lib/controller/HubSpot';
import { getJoinString, encodeData } from '@lib/helper/Configuration';
import {
  setUpgradeBillingDetailData,
  getUpgradeCreateOrder,
  setAttendeeDataDetail,
} from '@lib/helper/Store';
import {
  currencyConverter,
  converterTotalCart,
} from '@lib/helper/CalculateCart';

// @components
import HeadGraphSeo from '@components/Head';
import Main from '@components/Main';
import Container from '@components/Container';
import OrderProcessModal from '@components/UI/Modal/OrderProcessModal';

// @layouts
import LayoutDefaults from '@layouts/Layouts';

import HeaderUpgrade from '@layouts/Attendee/Update/Card/HeaderUpgrade';
import AttendeeDetailUpdate from '@layouts/Attendee/Update/Card/AttendeeDetailUpdate';
import BoardSubmitAttendee from '@layouts/Attendee/Update/Card/BoardSubmitAttendee';

const AttendeeUpdateToBull = ({
  attendee,
  country,
  formCheckout,
  products,
}) => {
  const router = useRouter();
  const [isAttendee, setAttendee] = useState(attendee.data ?? []);
  const [isFormAttendee, setFormAttendee] = useState({
    isProducts: isAttendee?.product,
    isCountry: country,
    fields: formCheckout,
    selfEdited: isAttendee?.selfEdited ?? false,
    message: null,
  });
  const [isStore, setStore] = useState({
    isPaymentProcess: false,
    totalItems:
      products?.bullTickets?.priceSale ?? products?.bullTickets?.price,
    isTotal:
      (products?.bullTickets?.priceSale ?? products?.bullTickets?.price) -
      (products?.festivalTickets?.priceSale ??
        products?.festivalTickets?.price),
  });

  // @card(theme)
  const style = {
    rc33x0dgm6tm707jghffuip4: 'bg-primaryDark',
  };

  // @form-hook(attendee)
  const {
    watch,
    register,
    control,
    formState: { errors, isValid, isSubmitting },
    handleSubmit,
    setValue,
    getValues,
  } = useForm({
    mode: 'all',
    defaultValues: {
      firstnameAttndeeDetail: isAttendee['firstName'],
      lastnameAttndeeDetail: isAttendee['lastName'],
      emailAttndeeDetail: isAttendee['email'],
      ['dialcode-phoneAttendeDetail']: isAttendee['telephone'],
      phoneAttndeeDetail: isAttendee['telephone'],
      telegramAccountAttndeeDetail: isAttendee['telegramAccount'],
      countryAttndeeDetail: isAttendee['country'],
      whatTypeConnectionNetworkingAttndeeDetail:
        isAttendee[
          'whatTypeOfConnectionsAndNetworkingDoYouHopeToAchieveAtTheEvent'
        ],
      didYouHearAboutAttndeeDetail:
        isAttendee['whereDidYouHearAboutCoinfestAsia2024'],
      haveCompanyAttndeeDetail: isAttendee['company'] === 'N/A' ? false : true,
      companyAttndeeDetail:
        isAttendee['company'] ?? isAttendee?.customer['company'],
      websiteUrlAttndeeDetail: isAttendee?.customer['websiteUrl'],
      jobPositionAttndeeDetail: isAttendee['position'],
      companyFocusAttndeeDetail: isAttendee['companyFocus'],
      companySizeAttndeeDetail: isAttendee['companySize'],
      websiteUrlAttndeeDetail:
        isAttendee['websiteUrl'] === null ? '-' : isAttendee['websiteUrl'],
    },
  });

  // @submit(sanitize)
  const sntzeFld = (field) => DOMPurify.sanitize(field || '').trim();
  const setAttendeeDetail = (status, data) => {
    if (!status) {
      return {
        data: {
          firstName: sntzeFld(data?.firstnameAttndeeDetail),
          lastName: sntzeFld(data?.lastnameAttndeeDetail),
          email: sntzeFld(data?.emailAttndeeDetail),
          telephone: sntzeFld(data?.phoneAttndeeDetail),
          telegramAccount: sntzeFld(data?.telegramAccountAttndeeDetail),
          company: sntzeFld(data?.companyAttndeeDetail),
          selfEdited: true,
        },
      };
    } else {
      return {
        data: {
          firstName: sntzeFld(data?.firstnameAttndeeDetail),
          lastName: sntzeFld(data?.lastnameAttndeeDetail),
          email: sntzeFld(data?.emailAttndeeDetail),
          telephone: sntzeFld(data?.phoneAttndeeDetail),
          telegramAccount: sntzeFld(data?.telegramAccountAttndeeDetail),
          company: sntzeFld(data?.companyAttndeeDetail),
          position: sntzeFld(data?.jobPositionAttndeeDetail),
          companyFocus: sntzeFld(data?.companyFocusAttndeeDetail),
          companySize: sntzeFld(data?.companySizeAttndeeDetail),
          websiteUrl: sntzeFld(data?.websiteUrlAttndeeDetail),
          selfEdited: true,
        },
      };
    }
  };

  // @submit(attendee)
  const onSubmitForm = async (data) => {
    if (!isValid === false) {
      try {
        setStore((prev) => ({ ...prev, isPaymentProcess: true }));
        const isChangeCompany = watch(`haveCompanyAttndeeDetail`);

        // @get(key)
        const { key } = await fetch('/api/env/note', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', cache: 'no-store' },
        }).then((res) => res.json());

        // @upgrade-bull-price
        const isTotalUpgradeBull = isStore?.isTotal * 1.11;
        const isBullProduct = products?.bullTickets?.documentId;

        const [rsAttendee, rsCustomer] = await Promise.all([
          updateSubmitData(
            `/api/attendees/${isAttendee?.documentId}?populate=*`,
            setAttendeeDetail(isChangeCompany, data)
          ),
          pushSubmitData('/api/customers', setUpgradeBillingDetailData(data)),
        ]);
        setFormAttendee({ ...isFormAttendee, selfEdited: true });
        const setIdCustomer = rsCustomer?.data.documentId;

        // @customer
        const [rsCustomerDtl] = await Promise.all([
          fetch('/api/data/customer?sv=coinfestasia', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              url: `/api/customers/`,
              data: encodeData(setIdCustomer),
            }),
          }).then((res) => res.json()),
        ]);

        // @create(order)
        const createOrder = getUpgradeCreateOrder(
          Math.floor(isTotalUpgradeBull),
          setIdCustomer,
          isBullProduct
        );

        if (rsCustomerDtl) {
          const rsCreateOrder = await pushSubmitData(
            '/api/orders?populate[customer][fields]=*&populate[products][fields][0]=name&populate[products][fields][1]=price&populate[products][fields][2]=priceSale&populate[coupons][fields][0]=couponCode&populate[coupons][fields][1]=amount',
            createOrder
          );
          const setIdOrderRecived = rsCreateOrder?.data.documentId;
          const arrAttendees = [];
          const isStock = parseInt(products?.bullTickets?.stock) - 1;

          if (rsCreateOrder?.data !== null) {
            // @update-stock(Product)
            const rsUpdateData = await updateData(
              `/api/products/${isBullProduct}`,
              {
                data: {
                  stock: isStock?.toString(),
                },
              }
            );

            // @attendee(with qty)
            const rsAttendee = await pushSubmitData(
              '/api/attendees?populate=*',
              {
                data: setAttendeeDataDetail(data, setIdCustomer, isBullProduct),
              }
            );
            if (rsAttendee) {
              const isFullname = `${rsAttendee?.data.firstName} ${rsAttendee?.data.lastName}`;
              const tickets =
                rsAttendee?.data.product.documentId !==
                'rc33x0dgm6tm707jghffuip4'
                  ? `Festival Ticket`
                  : `${rsAttendee?.data.product?.name}`;
              arrAttendees.push({
                attendee: rsAttendee?.data,
                fullname: isFullname,
                ticketProducts: tickets,
              });
            }
          }

          // @processing(payment)
          if (rsCreateOrder && Math.abs(isTotalUpgradeBull) > 1e-10) {
            const rsPayment = await fetch('/api/payment/create-payment', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'x-api-key': key,
              },
              body: JSON.stringify({
                extrnlId: rsCreateOrder?.data?.customer?.customerId.replace(
                  /^C-/,
                  ''
                ),
                amount: Math.floor(isTotalUpgradeBull),
                payerEmail: rsCreateOrder?.data?.customer?.email,
                fullname: `${rsCreateOrder?.data?.customer?.firstName} ${rsCreateOrder?.data?.customer?.lastName}`,
                phone: rsCreateOrder?.data?.customer?.phone,
                order: setIdOrderRecived,
              }),
            }).then((res) => res.json());
            if (rsPayment?.data?.invoice_url) {
              // @update(order)
              const updateStatusOrder = await updateData(
                `/api/orders/${rsCreateOrder?.data?.documentId}`,
                {
                  data: {
                    order_session: `isUpgradeBull-${isAttendee?.documentId}_${rsPayment?.data?.id}`,
                  },
                }
              );
              router.replace(rsPayment?.data?.invoice_url);
            } else {
              // console.error('Failed to get invoice URL');
              return;
            }
            return;
          }
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
      <HeadGraphSeo title={`Attendee Upgrade to Bull`} otherPage={true} />

      {/* @main */}
      <Main className="relative pb-19 pt-6 sm:pb-19 sm:pt-8 lg:pt-10">
        <Container className={'sm:px-auto px-0'}>
          <form
            id="ca25Form_AttendeeDetail"
            className="relative grid-cols-1 gap-x-6 gap-y-2 supports-grid:grid sm:grid-cols-12 sm:gap-y-2 lg:gap-y-20"
            method="POST"
            onSubmit={handleSubmit(onSubmitForm)}
          >
            <div className="order-last col-span-full px-2.5 sm:px-0 xl:order-first xl:col-span-7 xl:pr-10">
              <HeaderUpgrade attendeeId={isAttendee?.documentId} media="xl" />

              <div
                className={`relative mt-6 block w-full space-y-6 ${isFormAttendee?.selfEdited ? 'pointer-events-none select-none' : 'pointer-events-auto select-auto'}`}
              >
                <div
                  className={twMerge(
                    `relative mt-8 flex flex-col items-end rounded-[14px] bg-primaryDark px-1.5 pb-1.5 transition-[height] duration-300 ease-in-out first:mt-0 sm:rounded-2xl sm:px-2 sm:pb-2 ${isFormAttendee?.selfEdited ? 'pointer-events-none select-none' : 'pointer-events-auto select-auto'}`
                  )}
                >
                  <div
                    className={`relative flex w-full flex-col ${isFormAttendee?.selfEdited ? 'pointer-events-none select-none' : 'pointer-events-auto select-auto'}`}
                  >
                    <div
                      id={`ca25StoreProductSticky_${getJoinString(isFormAttendee?.isProducts?.name)}`}
                      className={twMerge(
                        `ca25StoreProductSticky relative inset-x-0 top-0 z-60 mt-1 flex h-[45px] w-full flex-col items-start justify-between bg-primaryDark transition-[height] duration-300 ease-in-out sm:top-0 sm:h-[59px]`
                      )}
                    >
                      <div className="ca25StoreProductSticky_Cards item-start flex w-full flex-col justify-start text-center">
                        <div className="absolute inset-x-0 -top-0.5 flex flex-col pb-5.5 pt-3 sm:-top-1 sm:pt-4.5">
                          <h2 className="ca25StoreProductSticky_TitleCards mx-auto mb-2 flex w-max flex-row items-center font-medium capitalize text-white">
                            Pre-Sale Festival Ticket{' '}
                            <svg
                              className="mx-2 h-5.5 w-5.5 shrink-0 rotate-180 transform"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m12 19-7-7 7-7" />
                              <path d="M19 12H5" />
                            </svg>{' '}
                            Bull Ticket
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`relative inline-flex w-full flex-col rounded-lg bg-white px-3 py-3 sm:rounded-xl sm:px-4 sm:py-4`}
                    >
                      <div className={`flex flex-col space-y-4`}>
                        <AttendeeDetailUpdate
                          watch={watch(`haveCompanyAttndeeDetail`)}
                          forms={{
                            ipAddress: 'id',
                            fieldForm: isFormAttendee?.fields,
                            country: isFormAttendee?.isCountry,
                            selfEdited: isFormAttendee?.selfEdited,
                          }}
                          haveCompany={
                            isAttendee['company'] === 'N/A' ? false : true
                          }
                          register={register}
                          control={control}
                          setValue={setValue}
                          getValues={getValues}
                          errors={errors}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* @submit(form mobile) */}
              <div
                className={`relative mt-10 block w-full rounded-2xl border border-gray-200 bg-white px-4 py-4 sm:px-5 sm:py-5 xl:hidden`}
              >
                <BoardSubmitAttendee
                  register={register}
                  setValue={setValue}
                  getValues={getValues}
                  errors={errors}
                />

                <button
                  id="tktCA25Form_SubmitMobileAttendeeDetail"
                  className={`inline-flex w-full cursor-pointer flex-row items-center justify-center rounded-xl bg-primaryDark px-8 py-5 text-base font-normal capitalize leading-inherit text-white disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500`}
                  type="submit"
                  role="button"
                  aria-label="Submit Attendee for Coinfest Asia 2025"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex flex-row items-center">
                      <svg
                        className="mr-3 h-5 w-5 animate-spin text-black-900"
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
                    `Upgrade to Bull Ticket`
                  )}
                </button>
              </div>
            </div>
            <div className="col-span-full px-4 xl:col-span-5 xl:pl-6">
              <HeaderUpgrade attendee={isAttendee[`documentId`]} media="sm" />

              {/* @purchase */}
              <div className="mb-4 mt-6 flex w-full flex-col px-0 xl:mt-0">
                <h2 className="text-xl font-semibold capitalize">{`Order summary`}</h2>
                <div className="my-5 flex w-full border-t border-dashed border-gray-200 px-2.5"></div>
                <div
                  className={`mb-3 flex w-full flex-row items-center justify-between`}
                >
                  <h2 className="text-start text-base font-medium">
                    {`Your Tickets`}
                  </h2>
                  <span className="text-end text-base font-medium">{`Total`}</span>
                </div>

                <div className="mb-3 flex w-full flex-row justify-between last:mb-0">
                  <div
                    className={twMerge(
                      `flex h-[107px] w-full max-w-[245px] flex-col justify-between rounded-xl px-3 py-3`,
                      style[products?.bullTickets?.documentId] || 'bg-regular45'
                    )}
                  >
                    <h3 className="mb-2.5 text-base font-bold uppercase leading-initial text-white">
                      {products?.bullTickets?.name}
                    </h3>
                  </div>
                  <div className="flex flex-col items-end justify-between pt-1.5">
                    <span className="text-base font-medium sm:text-lg">
                      {currencyConverter(isStore?.totalItems)}
                    </span>
                  </div>
                </div>
              </div>

              {/* @order-summary */}
              <div className="relative mb-0 block space-y-3 px-2.5 sm:px-0 xl:mb-8">
                {/* @subtotal */}
                <div className="grid-cols-2 supports-grid:grid">
                  <span className="text-start text-sm font-normal">{`Subtotal`}</span>
                  <span className="text-end text-base font-medium">
                    {currencyConverter(isStore?.totalItems)}
                  </span>
                </div>
                {/* @discount */}
                <div className="grid-cols-2 supports-grid:grid">
                  <span className="text-start text-sm font-normal">{`Discount:`}</span>
                  <span className="text-end text-base font-medium text-gray-400">
                    {`-${currencyConverter(
                      products?.festivalTickets?.priceSale ??
                        products?.festivalTickets?.price
                    )}`}
                  </span>
                </div>
                {/* @total */}
                <div className="grid-cols-2 supports-grid:grid">
                  <span className="text-start text-sm font-normal">{`Total (inc. Tax)`}</span>
                  <span className="text-end text-base font-medium">
                    {converterTotalCart(isStore?.isTotal)}
                  </span>
                </div>
              </div>

              {/* @submit(Form) */}
              <div
                className={`relative mt-10 hidden w-full rounded-2xl border border-gray-200 bg-white px-4 py-4 sm:px-5 sm:py-5 xl:block`}
              >
                <BoardSubmitAttendee
                  register={register}
                  setValue={setValue}
                  getValues={getValues}
                  errors={errors}
                />

                <button
                  id="ca25Form_SubmitAttendeeDetail"
                  className={`inline-flex w-full cursor-pointer flex-row items-center justify-center rounded-xl bg-primaryDark px-8 py-5 text-base font-normal capitalize leading-inherit text-white disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500`}
                  type="submit"
                  role="button"
                  aria-label="Submit Attendee for Coinfest Asia 2025"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex flex-row items-center">
                      <svg
                        className="mr-3 h-5 w-5 animate-spin text-black-900"
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
                    `Upgrade to Bull Ticket`
                  )}
                </button>
              </div>
            </div>
          </form>
        </Container>

        {/* @modal */}
        {isStore?.isPaymentProcess === true ? (
          <OrderProcessModal
            icons={
              <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-primary/20 sm:h-22 sm:w-22">
                <svg
                  className="h-11 w-11 fill-[#2458F1] sm:h-14 sm:w-14"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="current"
                >
                  <path d="M1.25 4.5C1.25 4.08579 1.58579 3.75 2 3.75H8.75736C9.75192 3.75 10.7057 4.14509 11.409 4.84835L14.5303 7.96967C14.8232 8.26256 14.8232 8.73744 14.5303 9.03033C14.2374 9.32322 13.7626 9.32322 13.4697 9.03033L10.3483 5.90901C9.92639 5.48705 9.3541 5.25 8.75736 5.25H2C1.58579 5.25 1.25 4.91421 1.25 4.5Z" />
                  <path d="M1.25 13.5C1.25 13.0858 1.58579 12.75 2 12.75H5C5.41421 12.75 5.75 13.0858 5.75 13.5C5.75 13.9142 5.41421 14.25 5 14.25H2C1.58579 14.25 1.25 13.9142 1.25 13.5Z" />
                  <path d="M7.96971 6.96967C8.26261 6.67678 8.73748 6.67678 9.03037 6.96967L11.0304 8.96967C11.8756 9.81485 11.8756 11.1852 11.0304 12.0303C10.1852 12.8755 8.81489 12.8755 7.96972 12.0303L6.93726 10.9979C5.84236 11.6676 4.41926 11.6269 3.35299 10.8272L3.05004 10.6C2.71867 10.3515 2.65152 9.88137 2.90004 9.55C3.14857 9.21863 3.61867 9.15147 3.95004 9.4L4.25299 9.62721C4.92816 10.1336 5.87294 10.0664 6.46971 9.46967C6.76261 9.17678 7.23748 9.17678 7.53037 9.46967L9.03038 10.9697C9.28977 11.2291 9.71032 11.2291 9.96972 10.9697C10.2291 10.7103 10.2291 10.2897 9.96971 10.0303L7.96971 8.03033C7.67682 7.73744 7.67682 7.26256 7.96971 6.96967Z" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.9445 8.55546C21.4891 8.09999 20.9223 7.91432 20.2945 7.82992C19.6997 7.74995 18.9505 7.74997 18.0521 7.75H18.052H18.052L9.5 7.75C9.19666 7.75 8.92318 7.93274 8.80709 8.21299C8.69101 8.49325 8.75518 8.81584 8.96967 9.03033L9.96967 10.0303C10.2291 10.2897 10.2291 10.7103 9.96968 10.9697C9.71028 11.2291 9.28973 11.2291 9.03034 10.9697L7.53033 9.46967C7.23744 9.17678 6.76257 9.17678 6.46967 9.46967C6.0943 9.84505 5.58133 10.0113 5.08251 9.95609C4.87053 9.93263 4.65858 10.0005 4.4997 10.1428C4.34081 10.2851 4.25 10.4883 4.25 10.7015L4.25 15.552V15.552V15.5521C4.24997 16.4505 4.24995 17.1997 4.32992 17.7945C4.41432 18.4223 4.59999 18.9891 5.05546 19.4445C5.51093 19.9 6.07773 20.0857 6.70552 20.1701C7.3003 20.2501 8.04951 20.25 8.94798 20.25H8.94801L18.052 20.25H18.052C18.9505 20.25 19.6997 20.2501 20.2945 20.1701C20.9223 20.0857 21.4891 19.9 21.9445 19.4445C22.4 18.9891 22.5857 18.4223 22.6701 17.7945C22.7501 17.1997 22.75 16.4505 22.75 15.552L22.75 12.448C22.75 11.5495 22.7501 10.8003 22.6701 10.2055C22.5857 9.57773 22.4 9.01093 21.9445 8.55546ZM13.5 16C14.6046 16 15.5 15.1045 15.5 14C15.5 12.8954 14.6046 12 13.5 12C12.3954 12 11.5 12.8954 11.5 14C11.5 15.1045 12.3954 16 13.5 16Z"
                  />
                </svg>
              </div>
            }
            label={`Processing Your Order...`}
            shortDesc={`If nothing happens, check your email to complete the payment.`}
          />
        ) : null}
      </Main>
    </>
  );
};

AttendeeUpdateToBull.getLayout = (page, { pageProps }) => {
  const { mode, layouts, withoutNavbar } = pageProps;
  if (layouts) {
    return (
      <LayoutDefaults
        isTheme={mode}
        layoutStore={layouts}
        withNavbar={withoutNavbar}
        isFooterMenu={false}
      >
        {page}
      </LayoutDefaults>
    );
  }
  return page;
};
export async function getServerSideProps(context) {
  const { vw } = context.query;
  try {
    const baseUrl = process.env.NEXT_PUBLIC_URL;
    const isLayouts = true;
    const [
      rsAttendee,
      rsCountry,
      rsCoupons,
      rsCheckoutHbSpt,
      rsBullTickets,
      rsFestivalTickets,
    ] = await Promise.all([
      getFetch(`/api/attendees/${vw}?sort[0]=createdAt:desc&populate=*`),
      getFetchUrl(`${baseUrl}/api/v1/countries?sv=coinfestasia`),
      getFetch(`/api/coupons?filters[isPublic][$eq]=true&populate=*`),
      getFecthHbSpt(`/forms/v2/forms/${serverRuntimeConfig?.hbSptCheckout}`),
      getFetch(`/api/products/rc33x0dgm6tm707jghffuip4`),
      getFetch(`/api/products/g1ukadil4n4a3r0ndly7jl42`),
    ]);
    const rsSortCountry = rsCountry?.data?.sort((a, b) =>
      a?.name?.common?.localeCompare(b.name.common)
    );
    // @check(attendee)
    const isApproved = rsAttendee?.data?.isApproved ?? null;
    const isProducts =
      rsAttendee?.data?.product?.documentId === 'rc33x0dgm6tm707jghffuip4' ??
      true;
    if (
      !rsAttendee?.data === undefined ||
      isApproved === false ||
      isApproved === null ||
      isProducts
    ) {
      return {
        redirect: {
          destination: '/',
          permanent: true,
        },
      };
    }

    return {
      props: {
        mode: 'light',
        layouts: isLayouts || false,
        withoutNavbar: false,
        country: rsSortCountry || [],
        coupons: rsCoupons || [],
        attendee: rsAttendee || [],
        formCheckout: rsCheckoutHbSpt?.formFieldGroups || [],
        products: {
          bullTickets: rsBullTickets?.data || [],
          festivalTickets: rsFestivalTickets?.data || [],
        },
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
}

export default AttendeeUpdateToBull;
