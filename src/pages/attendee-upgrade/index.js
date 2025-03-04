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

// @layouts
import LayoutDefaults from '@layouts/Layouts';

import HeaderUpgrade from '@layouts/Attendee/Update/Card/HeaderUpgrade';
import AttendeeDetailUpdate from '@layouts/Attendee/Update/Card/AttendeeDetailUpdate';
import BoardSubmitAttendee from '@layouts/Attendee/Update/Card/BoardSubmitAttendee';

const AttendeeUpdateToBull = ({
  ipAddress,
  attendee,
  country,
  formCheckout,
  products,
}) => {
  const router = useRouter();
  const [isAttendee, setAttendee] = useState(attendee.data ?? []);
  const [isFormAttendee, setFormAttendee] = useState({
    isProducts: isAttendee?.product,
    isIpAddress: ipAddress,
    isCountry: country,
    fields: formCheckout,
    selfEdited: isAttendee?.selfEdited ?? false,
    message: null,
  });
  const [isStore, setStore] = useState({
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
          company: sntzeFld(data?.companyAttndeeDetail),
          qrCodeUID: sntzeFld(''),
          isApproved: false,
          selfEdited: true,
          isUpgrade: true,
        },
      };
    } else {
      return {
        data: {
          firstName: sntzeFld(data?.firstnameAttndeeDetail),
          lastName: sntzeFld(data?.lastnameAttndeeDetail),
          company: sntzeFld(data?.companyAttndeeDetail),
          position: sntzeFld(data?.jobPositionAttndeeDetail),
          companyFocus: sntzeFld(data?.companyFocusAttndeeDetail),
          companySize: sntzeFld(data?.companySizeAttndeeDetail),
          websiteUrl: sntzeFld(data?.websiteUrlAttndeeDetail),
          qrCodeUID: sntzeFld(''),
          isApproved: false,
          selfEdited: true,
          isUpgrade: true,
        },
      };
    }
  };

  // @submit(attendee)
  const onSubmitForm = async (data) => {
    if (!isValid === false && isAttendee?.selfEdited === false) {
      try {
        const isChangeCompany = watch(`haveCompanyAttndeeDetail`);
        const qrCodeId = isAttendee?.qrCode?.id;

        // @get(key)
        const { key } = await fetch('/api/env/note', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', cache: 'no-store' },
        }).then((res) => res.json());

        // @upgrade-bull-price
        const isTotalUpgradeBull = isStore?.isTotal * 1.11;
        const isBullProduct = products?.bullTickets?.documentId;

        const [rsAttendee] = await Promise.all([
          updateSubmitData(
            `/api/attendees/${isAttendee?.documentId}?populate=*`,
            setAttendeeDetail(isChangeCompany, data)
          ),
        ]);

        // setFormAttendee({ ...isFormAttendee, selfEdited: true });
        // @customer
        const rsCustomer = await pushSubmitData(
          '/api/customers',
          setUpgradeBillingDetailData(data)
        );
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
          const [rsDeleteQrCode, rsCreateOrder] = await Promise.all([
            deleteData(`/api/upload/files/${qrCodeId}`),
            pushSubmitData(
              '/api/orders?populate[customer][fields]=*&populate[products][fields][0]=name&populate[products][fields][1]=price&populate[products][fields][2]=priceSale&populate[coupons][fields][0]=couponCode&populate[coupons][fields][1]=amount',
              createOrder
            ),
          ]);
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
                    order_session: `isUpgradeBull_${rsPayment?.data?.id}`,
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
              <HeaderUpgrade media="xl" />

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
                          <h2 className="ca25StoreProductSticky_TitleCards mb-2 w-full font-medium capitalize text-white">
                            Pre-Sale Festival Ticket Bull Ticket
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
                            ipAddress:
                              isFormAttendee?.isIpAddress?.country !== undefined
                                ? isFormAttendee?.isIpAddress?.country.toLowerCase()
                                : 'id',
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
                className={`relative mt-10 block w-full rounded-2xl border border-gray-200 bg-white px-4 py-4 xl:hidden ${
                  isFormAttendee?.selfEdited
                    ? 'pointer-events-none select-none'
                    : 'pointer-events-auto select-auto'
                } sm:px-5 sm:py-5`}
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
                  disabled={isFormAttendee?.selfEdited || isSubmitting}
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
                      {currencyConverter(isStore?.isTotal)}
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
                    {currencyConverter(isStore?.isTotal)}
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
                className={`relative mt-10 hidden w-full rounded-2xl border border-gray-200 bg-white px-4 py-4 xl:block ${
                  isFormAttendee?.selfEdited
                    ? 'pointer-events-none select-none'
                    : 'pointer-events-auto select-auto'
                } sm:px-5 sm:py-5`}
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
                  disabled={isFormAttendee?.selfEdited || isSubmitting}
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
  if (!vw || typeof vw !== 'string') {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    };
  }
  const isValid_Process =
    /^[a-zA-Z0-9]+$/.test(vw.trim()) && vw.trim().length <= 43;
  if (!isValid_Process) {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    };
  }

  try {
    const isLayouts = true;
    const [rsIpAddress, rsAttendee, rsCountry, rsCoupons, rsCheckoutHbSpt] =
      await Promise.all([
        getFetchUrl(
          `https://ipinfo.io/json?token=${serverRuntimeConfig?.ipAddress_token}`
        ),
        getFetch(`/api/attendees/${vw}?sort[0]=createdAt:desc&populate=*`),
        getFetchUrl(`https://restcountries.com/v3.1/all?fields=name,flags`),
        getFetch(`/api/coupons?filters[isPublic][$eq]=true&populate=*`),
        getFecthHbSpt(`/forms/v2/forms/${serverRuntimeConfig?.hbSptCheckout}`),
      ]);
    const [rsBullTickets, rsFestivalTickets] = await Promise.all([
      getFetch(`/api/products/rc33x0dgm6tm707jghffuip4`),
      getFetch(`/api/products/g1ukadil4n4a3r0ndly7jl42`),
    ]);
    const sortedCountries = rsCountry.sort((a, b) =>
      a?.name.common.localeCompare(b?.name.common)
    );
    // @check(attendee)
    const isApproved = rsAttendee?.data?.isApproved ?? null;
    const isProducts =
      rsAttendee?.data?.product?.documentId === 'rc33x0dgm6tm707jghffuip4' ??
      true;

    if (
      (rsAttendee?.data === null && !isApproved) ||
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
        ipAddress: rsIpAddress || [],
        country: sortedCountries || [],
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
