import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import QRCode from 'qrcode';
import dayjs from 'dayjs';
import Link from 'next/link';
import getConfig from 'next/config';

// # @get .config
const { serverRuntimeConfig } = getConfig();

// @redux
import { useDispatch } from 'react-redux';
import { removeCart } from '@reduxState/slices';

// @lib
import { useTrackingStore } from '@lib/hooks/tracking-store/TrackingStore';
import { getFetch, getFetchUrl, updateData } from '@lib/controller/API';
import { submitFormHbSpt } from '@lib/controller/HubSpot';
import { currencyConverter } from '@lib/helper/CalculateCart';
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
import Badge from '@components/UI/Badge';
import OrderProcessLoadingModal from '@components/UI/Modal/OrderProcessLoading';

// @layouts
import LayoutDefaults from '@layouts/Layouts';

const OrderReceived = ({ ipAddress, orderReceived, orderCustomer }) => {
  const router = useRouter();
  const { trackingPurchase, handlePurchase } = useTrackingStore();
  const dispatch = useDispatch();
  const [isOrderRecived, setOrderRecived] = useState({
    isIpAddress: ipAddress,
    order: orderReceived ? orderReceived.data : [],
    customer: orderCustomer?.data,
    isCoupon: [],
    discount: 0,
  });
  const isCustomer = {
    orderId: `${isOrderRecived ? isOrderRecived?.order?.customer.customerId : '#A-000000000'}`,
    fullname: `${isOrderRecived ? isOrderRecived?.order?.customer.firstName : ''} ${isOrderRecived ? isOrderRecived?.order?.customer.lastName : ''}`,
    company: `${isOrderRecived ? isOrderRecived?.order?.customer.company : 'N/A'}`,
  };

  const hndleIntzCoupon = async () => {
    if (isOrderRecived?.order?.coupons.length > 0) {
      const isDataCoupon = await fetch('/api/data/coupons?sv=coinfestasia', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: encodeData(isOrderRecived?.order?.coupons[0]?.couponCode),
        }),
      }).then((res) => res.json());
      const { type, amount } = isDataCoupon;
      // @check(includes product)
      const incldProsductIds = isDataCoupon?.includedProducts?.map(
        (p) => p?.documentId
      );
      const validProducts = isOrderRecived?.order?.products?.filter((p) =>
        incldProsductIds.includes(p?.documentId)
      );

      // @check(valid Product)
      const discntAmounts = parseFloat(amount) || 0;
      const isPrices = validProducts[0]?.priceSale ?? validProducts[0]?.price;
      let calculatedDiscounts = 0;
      if (type === 'percentage') {
        calculatedDiscounts =
          parseInt(discntAmounts) >= 100
            ? isPrices
            : (validProducts[0]?.priceSale ?? validProducts[0]?.price) *
              (discntAmounts / 100);
      } else if (type === 'fix') {
        calculatedDiscounts = Math.min(discntAmounts, isPrices);
      } else {
        // @implement logic for non-percentage coupons if needed
      }

      setOrderRecived({
        ...isOrderRecived,
        discount: calculatedDiscounts,
        isCoupon: isDataCoupon,
      });
    }
  };

  // @initialize(store)
  useEffect(() => {
    dispatch(removeCart());
    hndleIntzCoupon();
  }, []);

  // @initialize(tracking-purchase)
  // useEffect(() => {
  //   trackingPurchase({
  //     transID: isOrderRecived?.order?.documentId,
  //     transValue: isOrderRecived?.order?.orderTotal,
  //   });
  // }, [trackingPurchase]);
  useEffect(() => {
    console.log('Tracking...');

    handlePurchase(isOrderRecived?.order);
  }, [handlePurchase]);

  // @check-payment
  useEffect(() => {
    if (isOrderRecived?.order?.paymentStatus !== 'Success') {
      const fetchOrderPayment = async () => {
        try {
          // @hubspot(customer & attendee)
          const hbSptKey = '96572ab0-5958-4cc4-8357-9c65de42cab6';
          const hbSptAttndeeKey = 'c9347ef6-664d-4b7a-892b-a1cabaa2bc30';
          // @get(key)
          const { key } = await fetch('/api/env/note', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
          }).then((res) => res.json());

          // @webhook-callback
          const rsPaymentWebhook = await fetch('/api/payment/webhook', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-api-key': key,
            },
            body: JSON.stringify({
              paymentId: isOrderRecived?.order?.order_session,
            }),
          }).then((res) => res.json());

          // @process(payment)
          if (
            rsPaymentWebhook?.status === 'PAID' ||
            rsPaymentWebhook?.status === 'SETTLED'
          ) {
            clearInterval(pollingInterval);
            // @update(order)
            const updateStatusOrder = await updateData(
              `/api/orders/${isOrderRecived?.order?.documentId}`,
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
                  isOrderRecived?.order?.coupons.length > 0
                    ? isOrderRecived?.order?.coupons[0]?.couponCode
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
              const isLimitUsageCoupon = parseInt(setIsCoupon?.limitUsage) - 1;
              const isUsageCoupon = parseInt(setIsCoupon?.usage) + 1;
              const rsUpdateCouponData = await updateData(
                `/api/coupons/${setIsCoupon?.documentId}`,
                {
                  data: {
                    limitUsage: isLimitUsageCoupon?.toString(),
                    usage: isUsageCoupon?.toString(),
                  },
                }
              );
            }

            if (isOrderRecived?.customer?.isApproved === null) {
              const isProducts = isOrderRecived?.order?.products;
              const isCustomerAttendee = isOrderRecived?.customer;

              // @save-to(hubspot)
              const [updateStatusCustomer, rsHbSptCustomer] = await Promise.all(
                [
                  updateData(
                    `/api/customers/${isOrderRecived?.customer?.documentId}`,
                    {
                      data: {
                        isApproved: true,
                      },
                    }
                  ),
                  submitFormHbSpt(
                    setHbSptCustomerData(
                      isOrderRecived?.customer,
                      isOrderRecived?.isIpAddress?.ip
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
                      isOrderRecived?.order?.coupons.length > 0
                        ? isOrderRecived?.order?.coupons[0]
                        : null,
                  }),
                }).then((rs) => rs?.json());

                for (let i = 0; i < grpAttendee?.length; i++) {
                  const isGrpdAttendee = grpAttendee[i];
                  const tickets =
                    isGrpdAttendee?.documentId === 'sn4ujm0d1ebbc8lme1ihzsa9' ||
                    isGrpdAttendee?.documentId === 'g1ukadil4n4a3r0ndly7jl42'
                      ? `Festival Ticket`
                      : `${isGrpdAttendee?.name}`;
                  for (let a = 0; a < isGrpdAttendee?.attendees?.length; a++) {
                    const rsAttendee = isGrpdAttendee?.attendees[a];
                    if (rsAttendee?.isApproved === null) {
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
                            setHbSptAttendeeData(
                              rsAttendee,
                              isOrderRecived?.isIpAddress?.ip
                            ),
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
              window.location.reload();
            }
          } else if (
            rsPaymentWebhook?.status === 'FAILED' ||
            rsPaymentWebhook?.status === 'EXPIRED'
          ) {
            clearInterval(pollingInterval);
            router.replace(
              `/checkout/order-failed?process=${isOrderRecived?.order?.documentId}`
            );
          }
        } catch (error) {
          // console.error('Error during payment processing:', error);
          return;
        }
      };
      const pollingInterval = setInterval(fetchOrderPayment, 15000);
      return () => {
        clearInterval(pollingInterval);
      };
    }
  }, []);

  // @btn(share)
  const elBtnShareWin = () => {
    return (
      <Link
        className="group relative inline-flex w-[178px] flex-row items-center justify-center rounded-xl bg-primaryRed px-3.5 py-3.5 text-base leading-initial text-white sm:w-max sm:px-8 sm:py-6"
        title="Button for Share & Win Competition Coinfest Asia 2025"
        href="https://drive.google.com/uc?export=download&id=1kBt7oGSI0j-1yvAXXavjTK3Ca1QMbVKZ"
      >
        {`Share your Coinfest badge!`}

        <div className="absolute inset-0 flex h-full w-full justify-center blur-md [transform:skew(-13deg)_translateX(-100%)] group-hover:transition-[transform] group-hover:duration-[1.6s] group-hover:[transform:skew(-13deg)_translateX(100%)]">
          <div className="relative h-full w-12 bg-white/40"></div>
        </div>
      </Link>
    );
  };
  return (
    <>
      {/* @head */}
      <HeadGraphSeo title={`Order Received`} otherPage={true} />

      {/* @main */}
      <Main className="flex flex-col pb-20 pt-[141px] sm:pb-24 sm:pt-[185px]">
        <Container>
          <div className="grid-cols-1 gap-x-6 gap-y-6 supports-grid:grid sm:grid-cols-12 sm:gap-y-10 lg:gap-y-16">
            {/* @sidebar(left) */}
            <div className="col-span-full flex flex-col items-start justify-between pl-0 xl:col-span-6 xl:pr-[114px]">
              <div className="block w-full">
                {isOrderRecived?.order?.paymentStatus === 'Success' ? (
                  <>
                    <div className="inline-flex flex-row items-center space-x-2">
                      <svg
                        className="-ml-[5px] h-12 w-12 sm:ml-0 sm:h-16 sm:w-16"
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
                        {`YOUR ORDER IS COMPLETE!`}
                      </h1>
                    </div>
                    <div className="mt-4 text-base font-light text-gray-500 prose-a:text-primary prose-a:underline">
                      <p>
                        Your payment was successful, and your order is complete!
                        Check your email for the invoice and e-ticket. If you
                        don't receive them within 24 hours, please contact{' '}
                        <Link
                          href="mailto:support@coinfest.asia"
                          title="Coinfest Asia 2025 Email Support"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {`support@coinfest.asia`}
                        </Link>
                      </p>
                    </div>
                    <div className="mt-6 hidden w-full flex-row gap-x-4 xl:inline-flex">
                      {elBtnShareWin()}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="inline-flex flex-row items-center space-x-2">
                      <h1 className="text-xl font-bold sm:text-2xl">
                        {`YOUR ORDER IN PROGRESS...`}
                      </h1>
                    </div>
                    <div className="mt-4 text-base font-light text-gray-500 prose-a:text-primary prose-a:underline">
                      <p>
                        This may take a moment. Please wait while we process
                        your order. If you don't receive them within 24 hours,
                        please contact{' '}
                        <Link
                          href="mailto:support@coinfest.asia"
                          title="Coinfest Asia 2025 Email Support"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {`support@coinfest.asia`}
                        </Link>
                      </p>
                    </div>
                  </>
                )}
              </div>
              <div className="hidden w-max xl:block">
                <Link
                  className="inline-flex w-max flex-row items-center justify-start gap-x-3.5 rounded-xl pr-4 underline"
                  title="Coinfest Asia 2025 Back to Home"
                  href="/"
                >
                  <Badge
                    type="dark"
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

            {/* @sidebar(right) */}
            <div className="col-span-full pr-0 xl:col-span-6 xl:pl-6">
              <div className="mt-4 flex flex-col items-start rounded-2xl px-1.5 pb-1.5 pt-2 bg-gradient-primary45 sm:mt-0 sm:px-2 sm:pb-2 sm:pt-4">
                <div className="mb-3 mt-1.5 flex w-full flex-row items-start justify-between px-2 sm:mb-4.5 sm:mt-1 sm:px-4">
                  <div className="flex w-max">
                    <h2 className="text-base text-white">{'Order ID : '}</h2>
                  </div>
                  <div className="flex w-max flex-col items-end">
                    {isOrderRecived && (
                      <span className="text-lg font-medium capitalize leading-initial text-white sm:text-base sm:leading-initial">
                        {`#${isCustomer?.orderId}`}
                      </span>
                    )}
                  </div>
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
                    {isOrderRecived?.order?.paymentStatus && (
                      <div className="grid-cols-1 gap-y-2.5 supports-grid:grid sm:grid-cols-3 sm:gap-y-0">
                        <div className="self-center text-start text-sm font-normal text-gray-600">{`Payment Method`}</div>
                        <div className="col-span-full flex flex-row items-center pl-0 text-start text-base font-light text-black-900 sm:col-span-2 sm:text-start xl:pl-8">
                          <span className="mr-2.5 hidden w-max sm:block">
                            :
                          </span>
                          <Badge label={`All Support Payment`} type="dark" />
                        </div>
                      </div>
                    )}
                    {isOrderRecived?.order?.coupons.length > 0 && (
                      <div className="grid-cols-1 items-start gap-y-1 supports-grid:grid sm:grid-cols-3 sm:gap-y-0">
                        <div className="flex flex-col self-center text-start text-sm font-normal text-gray-600">
                          {`Discount Coupon :`}
                          <span className="font-semibold uppercase text-primary">
                            {isOrderRecived?.isCoupon?.type === 'percentage' &&
                              `${isOrderRecived?.order?.coupons[0].amount}%`}{' '}
                            ({isOrderRecived?.order?.coupons[0].couponCode})
                          </span>
                        </div>
                        <div className="col-span-full flex flex-row items-center pl-0 text-start text-base font-light sm:col-span-2 sm:text-start xl:pl-8">
                          <span className="mr-2.5 hidden w-max text-black-900 sm:block">
                            :
                          </span>
                          <span className="font-medium text-gray-400">
                            {`-${currencyConverter(isOrderRecived?.discount)}`}
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
                  href="/"
                  title="Coinfest Asia 2025 Back to Home"
                >
                  <Badge
                    type="dark"
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
                {isOrderRecived?.order?.paymentStatus === 'Success' &&
                  elBtnShareWin()}
              </div>
            </div>
          </div>
        </Container>
      </Main>

      {/* @modal */}
      {isOrderRecived?.order?.paymentStatus !== 'Success' && (
        <OrderProcessLoadingModal />
      )}
    </>
  );
};

OrderReceived.getLayout = (page, { pageProps }) => {
  const { mode, layouts } = pageProps;
  if (layouts) {
    return (
      <LayoutDefaults isTheme={mode} layoutStore={layouts}>
        {page}
      </LayoutDefaults>
    );
  }
  return page;
};
export const getServerSideProps = async (context) => {
  const { process } = context?.query;
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
    const isLayouts = true;
    const rsIpAddress = await getFetchUrl(
      `https://ipinfo.io/json?token=${serverRuntimeConfig?.ipAddress_token}`
    );
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
      `/api/customers/${rsCustmrId}?populate[attendees]=*`
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
        mode: 'light',
        layouts: isLayouts || false,
        ipAddress: rsIpAddress,
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
