import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import Link from 'next/link';

// @lib/controller & helper
import { getFetch } from '@lib/controller/API';
import {
  currencyConverter,
  converterTotalCart,
} from '@lib/helper/CalculateCartContext';

// @script
import PrelineScript from '@components/Script/PrelineScript';

// @components
import HeadGraphSeo from '@components/Head';
import Main from '@components/Main';
import Container from '@components/Container';
import Badge from '@components/UI/Badge';

// @layouts
import NavbarOther from '@layouts/Navbar/NavbarTop';
import Footer from '@layouts/Footer';

const OrderReceived = ({ orderReceived, orderCustomer }) => {
  const [isOrderRecived, setOrderRecived] = useState({
    order: orderReceived ? orderReceived.data : [],
    customer: orderCustomer?.data?.attendees.length,
    discount: 0,
  });
  const isCustomer = {
    orderId: `${isOrderRecived ? isOrderRecived?.order?.customer.customerId : '#A-000000000'}`,
    fullname: `${isOrderRecived ? isOrderRecived?.order?.customer.firstName : ''} ${isOrderRecived ? isOrderRecived?.order?.customer.lastName : ''}`,
    company: `${isOrderRecived ? isOrderRecived?.order?.customer.company : 'N/A'}`,
  };

  const hndleIntzCoupon = async () => {
    const isPrice =
      isOrderRecived?.order?.products[0].priceSale ??
      isOrderRecived?.order?.products[0].price;

    const discntAmount =
      parseFloat(
        isOrderRecived?.order?.coupons.length > 0
          ? isOrderRecived?.order?.coupons[0].amount
          : 0
      ) || 0;

    const calculatedDiscount =
      parseInt(
        isOrderRecived?.order?.coupons.length > 0
          ? isOrderRecived?.order?.coupons[0].amount
          : 0
      ) === 100
        ? isPrice * isOrderRecived?.customer
        : isPrice * (discntAmount / 100);

    setOrderRecived({ ...isOrderRecived, discount: calculatedDiscount });
  };
  useEffect(() => {
    hndleIntzCoupon();

    return () => {
      undefined;
    };
  }, []);

  const isDiscount =
    parseInt(
      isOrderRecived?.order?.coupons.length > 0
        ? isOrderRecived?.order?.coupons[0].amount
        : 0
    ) === 100
      ? converterTotalCart(isOrderRecived?.discount)
      : currencyConverter(isOrderRecived?.discount);

  // @btn(Share)
  const elBtnShareWin = () => {
    return (
      <Link
        className="inline-flex w-max flex-row items-center justify-center rounded-xl bg-primary px-6 py-5 text-base leading-initial text-white sm:px-8 sm:py-6"
        title="Button for Share & Win Competition Coinfest Asia 2025"
        href="/"
      >
        Share & Win $1000
      </Link>
    );
  };

  return (
    <>
      {/* @head */}
      <HeadGraphSeo title={`Order Received`} otherPage={true} />

      {/* @navbar */}
      <NavbarOther />

      {/* @main */}
      <Main className="flex flex-col pb-12 pt-[141px] sm:pb-4 sm:pt-[151px]">
        <Container>
          <div className="grid-cols-1 gap-x-6 gap-y-6 supports-grid:grid sm:grid-cols-12 sm:gap-y-10 lg:gap-y-16">
            <div className="col-span-full flex flex-col items-start justify-between pl-0 xl:col-span-6 xl:pr-[134px]">
              <div className="block w-full">
                <div className="inline-flex flex-row items-center space-x-2">
                  <svg
                    className="h-12 w-12 sm:h-16 sm:w-16"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.5"
                      d="M37.0428 45.4706L37.4639 45.1792C38.7823 44.2678 39.4417 43.8118 40.0313 43.323C43.2354 40.6674 45.3877 36.9656 46.104 32.8778C46.2359 32.1256 46.3042 31.3299 46.4412 29.7381L46.5121 28.9151C46.7389 26.2808 46.7163 23.6308 46.4447 21.0005L46.3605 20.1866C45.8852 15.5836 43.0593 11.5493 38.8838 9.51214C32.0184 6.16262 23.9819 6.16262 17.1165 9.51214C12.941 11.5493 10.1152 15.5836 9.63978 20.1866L9.55571 21.0005C9.28402 23.6308 9.26141 26.2808 9.48819 28.9151L9.55903 29.7381C9.69602 31.3299 9.76452 32.1256 9.89636 32.8778C10.6126 36.9656 12.7648 40.6674 15.969 43.323C16.5587 43.8118 17.2181 44.2678 18.5363 45.1794L18.9576 45.4706C20.7499 46.7098 21.6461 47.3298 22.5442 47.7603C25.9919 49.4132 30.0085 49.4132 33.456 47.7603C34.3543 47.3298 35.2505 46.7101 37.0428 45.4706Z"
                      stroke="#00A725"
                      strokeWidth="5.25"
                    ></path>
                    <path
                      d="M46.4412 29.7381L46.5121 28.9151C46.7389 26.2808 46.7163 23.6308 46.4447 21.0005L46.3605 20.1866C45.8852 15.5836 43.0593 11.5493 38.8838 9.51214C32.0184 6.16262 23.9819 6.16262 17.1165 9.51214C12.941 11.5493 10.1152 15.5836 9.63978 20.1866L9.55571 21.0005C9.28402 23.6308 9.26141 26.2808 9.48819 28.9151L9.55903 29.7381C9.69602 31.3299 9.76452 32.1256 9.89636 32.8778C10.6126 36.9656 12.7648 40.6674 15.969 43.323C16.5587 43.8118 17.2181 44.2678 18.5363 45.1794L18.9576 45.4706C20.7499 46.7098 21.6461 47.3298 22.5442 47.7603"
                      stroke="#00A725"
                      strokeWidth="5.25"
                      strokeLinecap="round"
                    ></path>
                    <path
                      opacity="0.5"
                      d="M21.5835 27.4152L26.2502 32.0819L34.4168 23.3319"
                      stroke="#00A725"
                      strokeWidth="5.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <h1 className="text-xl font-bold sm:text-2xl">
                    YOUR ORDER IS COMPLETE!
                  </h1>
                </div>
                <div className="mt-4 text-base font-light text-gray-500 prose-a:text-primary prose-a:underline">
                  <p>
                    Your payment was successful!, and your order is now
                    complete. A receipt & E-ticket are on their way to your
                    email. If you haven't received them within 24 hours after
                    completion, please reach out to{' '}
                    <Link
                      href="mailto:support@coinfest.asia"
                      title="Link to contact Coinfest Asia 2025 support"
                    >
                      support@coinfest.asia
                    </Link>
                  </p>
                </div>
                <div className="mt-6 hidden w-full flex-row gap-x-4 xl:inline-flex">
                  {elBtnShareWin()}
                </div>
              </div>
              <div className="hidden w-max xl:block">
                <Link
                  className="inline-flex w-max flex-row items-center justify-start gap-x-3.5 rounded-xl pr-4 underline"
                  title="Button for Back to Home Coinfest Asia 2025"
                  href="/"
                >
                  <Badge
                    type="light"
                    icons={
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
                    }
                  />
                  <span className="inline-flex flex-row">
                    Back
                    <span className="ml-1 hidden w-max sm:flex">to Home</span>
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-span-full pr-0 xl:col-span-6 xl:pl-6">
              <div className="mt-4 flex flex-col items-start rounded-2xl border border-solid border-gray-200 bg-gray-100 px-2 pb-2 pt-2 sm:mt-0 sm:pt-4">
                <div className="mb-3 flex w-full flex-row items-start justify-between px-2 sm:px-4">
                  <div className="block w-max">
                    <span className="mb-1 text-sm text-gray-600">
                      {'Order ID : '}
                    </span>
                    {isOrderRecived && (
                      <h2 className="text-lg font-medium capitalize leading-initial sm:text-base sm:leading-initial">
                        {`#${isCustomer?.orderId}`}
                      </h2>
                    )}
                  </div>
                  {/* <div className="flex w-max flex-col items-end">
                    <span className="mb-1 text-sm text-gray-600">Status</span>
                    <Badge
                      label={`Paid`}
                      type="success"
                      size="xs"
                      icons={
                        <span className="flex shrink-0 items-center justify-center text-green-700">
                          <svg
                            className="block size-3 shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                      }
                    />
                  </div> */}
                </div>
                <div className="inline-flex w-full flex-col space-y-7 rounded-xl bg-white px-4 py-4">
                  <div className="block w-full space-y-5">
                    <div className="grid-cols-1 gap-y-1 supports-grid:grid sm:grid-cols-3 sm:gap-y-0">
                      <div className="self-center text-start text-sm font-normal text-gray-600">{`Transaction Date`}</div>
                      <div className="col-span-full flex flex-row pl-0 text-start text-base font-light text-black-900 sm:col-span-2 sm:text-start xl:pl-8">
                        <span className="mr-2.5 hidden w-max sm:block">:</span>
                        <span>
                          {dayjs(isOrderRecived?.order?.createdAt).format(
                            'ddd, MMMM D, YYYY'
                          )}
                        </span>
                      </div>
                    </div>
                    <div className="grid-cols-1 gap-y-1 supports-grid:grid sm:grid-cols-3 sm:gap-y-0">
                      <div className="self-center text-start text-sm font-normal text-gray-600">{`Name`}</div>
                      <div className="col-span-full flex flex-row pl-0 text-start text-base font-light capitalize text-black-900 sm:col-span-2 sm:text-start xl:pl-8">
                        <span className="mr-2.5 hidden w-max sm:block">:</span>
                        <span>{isCustomer?.fullname}</span>
                      </div>
                    </div>
                    <div className="grid-cols-1 gap-y-1 supports-grid:grid sm:grid-cols-3 sm:gap-y-0">
                      <div className="self-center text-start text-sm font-normal text-gray-600">{`Email`}</div>
                      <div className="col-span-full flex flex-row pl-0 text-start text-base font-light text-black-900 sm:col-span-2 sm:text-start xl:pl-8">
                        <span className="mr-2.5 hidden w-max sm:block">:</span>
                        <span className="overflow-hidden text-ellipsis lowercase">
                          {isOrderRecived?.order?.customer.email}
                        </span>
                      </div>
                    </div>
                    <div className="grid-cols-1 gap-y-1 supports-grid:grid sm:grid-cols-3 sm:gap-y-0">
                      <div className="self-center text-start text-sm font-normal text-gray-600">{`Company`}</div>
                      <div className="col-span-full flex flex-row pl-0 text-start text-base font-light text-black-900 sm:col-span-2 sm:text-start xl:pl-8">
                        <span className="mr-2.5 hidden w-max sm:block">:</span>
                        <span className="overflow-hidden text-ellipsis capitalize">
                          {isOrderRecived?.order?.customer.company}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="my-2 border-t border-dashed border-gray-200"></div>

                  <div className="block w-full space-y-4">
                    <div className="grid-cols-1 gap-y-1 supports-grid:grid sm:grid-cols-3 sm:gap-y-0">
                      <div className="self-center text-start text-sm font-normal text-gray-600">{`Ticket`}</div>
                      <div className="col-span-full flex flex-row pl-0 text-start text-base font-light text-black-900 sm:col-span-2 sm:text-start xl:pl-8">
                        <span className="mr-2.5 hidden w-max sm:block">:</span>
                        <span className="font-medium">
                          {`${isOrderRecived?.customer} ${isOrderRecived?.order?.products[0].name}`}
                        </span>
                      </div>
                    </div>
                    <div className="grid-cols-1 gap-y-2.5 supports-grid:grid sm:grid-cols-3 sm:gap-y-0">
                      <div className="self-center text-start text-sm font-normal text-gray-600">{`Payment Method`}</div>
                      <div className="col-span-full flex flex-row items-center pl-0 text-start text-base font-light text-black-900 sm:col-span-2 sm:text-start xl:pl-8">
                        <span className="mr-2.5 hidden w-max sm:block">:</span>
                        {isOrderRecived?.order?.paymentStatus === 'Success' ||
                          (isOrderRecived?.order?.paymentStatus ===
                            'Pending' && (
                            <Badge label={`All Support Payment`} type="light" />
                          ))}
                      </div>
                    </div>
                    {isOrderRecived?.order?.coupons.length > 0 && (
                      <div className="grid-cols-1 items-start gap-y-1 supports-grid:grid sm:grid-cols-3 sm:gap-y-0">
                        <div className="flex flex-col self-center text-start text-sm font-normal text-gray-600">
                          {`Discount Coupon`}
                          <span className="font-semibold uppercase text-primary">
                            ({isOrderRecived?.order?.coupons[0].couponCode})
                          </span>
                        </div>
                        <div className="col-span-full flex flex-row items-center pl-0 text-start text-base font-light sm:col-span-2 sm:text-start xl:pl-8">
                          <span className="mr-2.5 hidden w-max text-black-900 sm:block">
                            :
                          </span>
                          <span className="font-medium text-gray-400">
                            -{isDiscount}
                          </span>
                        </div>
                      </div>
                    )}
                    <div className="grid-cols-1 gap-y-1 supports-grid:grid sm:grid-cols-3 sm:gap-y-0">
                      <div className="self-center text-start text-sm font-normal text-gray-600">{`Total (inc. Tax)`}</div>
                      <div className="col-span-full flex flex-row items-center pl-0 text-start text-base font-light text-black-900 sm:col-span-2 sm:text-start xl:pl-8">
                        <span className="mr-2.5 hidden w-max sm:block">:</span>
                        <span className="font-medium">
                          {currencyConverter(isOrderRecived?.order?.orderTotal)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex w-full flex-row items-start justify-between sm:mt-8 xl:hidden">
                <Link
                  className="inline-flex w-max flex-row items-center justify-start gap-x-3.5 rounded-xl pr-4 underline"
                  title="Button for Back to Home Coinfest Asia 2025"
                  href="/"
                >
                  <Badge
                    type="light"
                    icons={
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
                    }
                  />
                  <span className="inline-flex flex-row">
                    Back
                    <span className="ml-1 hidden w-max sm:flex">to Home</span>
                  </span>
                </Link>
                {elBtnShareWin()}
              </div>
            </div>
          </div>
        </Container>
      </Main>

      {/* @footer */}
      <Footer />

      {/* @script */}
      <PrelineScript />
    </>
  );
};

OrderReceived.getLayout = function PageLayout(page) {
  return <>{page}</>;
};

export const getServerSideProps = async (context) => {
  const { process } = context.query;

  const isValid_Process =
    typeof process === 'string' &&
    /^[a-zA-Z0-9]+$/.test(process.trim()) &&
    process.trim().length <= 31;
  if (!isValid_Process) {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    };
  }

  try {
    const rsOrderRecived = await getFetch(
      `/api/orders/${process}?populate[customer][fields]=*&populate[products][fields][0]=name&populate[products][fields][1]=price&populate[products][fields][2]=priceSale&populate[coupons][fields][0]=couponCode&populate[coupons][fields][1]=amount`
    );

    // @check-res(Order Recived)
    if (!rsOrderRecived) {
      return {
        redirect: {
          destination: '/',
          permanent: true,
        },
      };
    }

    // @check-res(Customer)
    const rsCustmrId = rsOrderRecived?.data?.customer.documentId;
    const rsCustmr = await getFetch(
      `/api/customers/${rsCustmrId}?fields[0]=customerId&populate[attendees][fields][0]=id&populate[attendees][fields][1]=firstName&populate[attendees][fields][2]=firstName&populate[attendees][fields][3]=lastName`
    );

    if (!rsCustmr) {
      return {
        redirect: {
          destination: '/',
          permanent: true,
        },
      };
    }

    return {
      props: {
        orderReceived: rsOrderRecived || [],
        orderCustomer: rsCustmr || [],
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

export default OrderReceived;
