import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { getCookie, hasCookie, deleteCookie } from 'cookies-next';
import { useForm } from 'react-hook-form';
import DOMPurify from 'dompurify';

// @redux
import { useSelector } from 'react-redux';

// @lib/controller & helper
import { getFetch, getFetchUrl, pushSubmitData } from '@lib/controller/API';
import { getHbSptFetch, HbSptSubmitForm } from '@lib/controller/HubSpot';
// import { verifySession_Token } from '@lib/helper/CartContext';
import {
  getRandomCharacters,
  getSplitStringCapital,
  getCombineArr,
} from '@lib/helper/Configuration';
import {
  getTotalCart,
  calculateDiscountCheckout,
} from '@lib/helper/CartContext';

// @script
const PrelineScript = dynamic(() => import('@components/Script/PrelineScript'));

// @components
const HeadGraphSeo = dynamic(() => import('@components/Head'));
import Main from '@components/Main';
import Container from '@components/Container';
import Breadcrumb from '@components/UI/Breadcrumb';
const Notifications = dynamic(
  () => import('@components/UI/Alerts/Notifications')
);
const Alerts = dynamic(() => import('@components/UI/Alerts/Alerts'));
import Card from '@components/UI/Card/Card';

// @layouts
import NavbarCheckout from '@layouts/Navbar/NavbarCheckout';
import BillingDetailCheckout from '@layouts/Checkouts/BillingDetailCheckout';
const AttendeeDetailCheckouts = dynamic(
  () => import('@layouts/Checkouts/AttendeeDetailCheckouts'),
  {
    loading: () => <p>Loading...</p>,
  }
);
const OrderDetailCheckouts = dynamic(
  () => import('@layouts/Checkouts/OrderDetailCheckouts'),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
);
import BoardSubmitCheckout from '@layouts/Checkouts/BoardSubmitCheckout';
import Footer from '@layouts/Footer';

const Checkouts = ({ ipAddress, country, formCheckout }) => {
  const router = useRouter();
  const isCart = useSelector((state) => state.cart.data);
  const isCoupon = useSelector((state) => state.cart.coupon);
  const [isStepForm, setStepForm] = useState(1);

  // @data
  const [isIpAddress, setIpAddress] = useState(ipAddress);
  const [isFormCheckouts, setFormCheckouts] = useState({
    fields: formCheckout.formFieldGroups,
    message: '',
  });
  const [isCountry, setCountry] = useState(country);

  // @cart
  const [isCartProduct, setCartProducts] = useState([]);
  const [isProducts, setProducts] = useState([]);

  // @hook-verify(token)
  // const authToken = getCookie('_athutkca25') ? getCookie('_athutkca25') : null;

  // const verifySessionToken = async () => {
  //   const verifyToken = await verifySession_Token(authToken);

  //   if (verifyToken === false) {
  //     deleteCookie('_athutkca25');
  //     deleteCookie('_cart');
  //   }
  // };

  // useEffect(() => {
  //   verifySessionToken();

  //   return () => {
  //     undefined;
  //   };
  // }, [authToken]);

  // @hook-products
  const fetchHookProducts = async () => {
    try {
      const productsPromises = isCart?.map(async (data) => {
        const isHookProducts = await getFetch(
          `/api/products/${data.id_product}`
        );
        return isHookProducts.data;
      });

      const allProducts = await Promise.all(productsPromises);

      if (allProducts) {
        setCartProducts(allProducts);
      }
    } catch (err) {
      return;
    }
  };

  // @handle-qty
  const [isTotalQty, setTotalQty] = useState(1);

  // @hook-preline
  const handleIntzPreline = async () => {
    // await import('preline/preline');

    // if (window.HSStaticMethods) {
    //   window.HSStaticMethods.autoInit();
    // }
    await import('preline/preline');

    if (window.HSStaticMethods) {
      window.HSStaticMethods.autoInit();
    }
  };

  useEffect(() => {
    if (isTotalQty) {
      handleIntzPreline();
    }

    return () => {
      undefined;
    };
  }, [isTotalQty, isStepForm]);

  useEffect(() => {
    fetchHookProducts();
    handleIntzPreline();

    const handleRouteChange = () => {
      fetchHookProducts();
      handleIntzPreline();
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  // @hook-attendee(with qty)
  const calculateTotalQty = () => {
    const total = isCart?.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);

    if (total >= 5) {
      const newQty = 5;
      setTotalQty(newQty);
    } else {
      setTotalQty(total);
    }
  };

  useEffect(() => {
    handleIntzPreline();

    // @calculate-total(qty)
    calculateTotalQty();

    // @merge-updated(Cart)
    const isMerged = getCombineArr(isCartProduct, isCart);
    setProducts(isMerged);

    return () => {
      undefined;
    };
  }, [isCart, isCartProduct]);

  // @hook-attendee(with qty)
  const isAttendee = Array.from({ length: isTotalQty }, (_, index) => index);

  // @form-hook
  const {
    watch,
    register,
    control,
    formState: { errors, isValid, isSubmitting },
    handleSubmit,
    setValue,
    getValues,
    reset,
  } = useForm({
    mode: 'all',
    defaultValues: {
      phone: '',
    },
  });

  // @watch
  const firstnameBilling = watch('firstname');
  const lastnameBilling = watch('lastname');
  const emailBilling = watch('email');
  const phone = watch('phone');
  const companyBilling = watch('company');

  // @init(billing)
  const [isBillingDetails, setBillingDetails] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    company: '',
  });

  // @handle-billing(validation)
  const [isBillingFilled, setIsBillingFilled] = useState(false);

  useEffect(() => {
    const allBillingFilled = Object.values(isBillingDetails).every(
      (value) => value !== ''
    );

    setIsBillingFilled(allBillingFilled);

    return () => {
      undefined;
    };
  }, [isBillingDetails]);

  // @handle-event-onChange(components)
  const handleBillingChange = (vr, val) => {
    setBillingDetails({
      ...isBillingDetails,
      [vr]: val,
    });
  };

  // @handle-copydata(billing)
  const handleCopyBillingToAttendee = (e) => {
    e.preventDefault();

    setValue('firstnameAttndee1', firstnameBilling);
    setValue('lastnameAttndee1', lastnameBilling);
    setValue('emailAttndee1', emailBilling);
    setValue('dialcode-phone1', phone);
    setValue('phone1', phone);
    setValue('companyAttndee1', companyBilling);
  };

  // @handle-coupon
  const [isAlertCoupon, setAlertCoupon] = useState({
    status: false,
    type: 'default',
    message: '',
  });

  const handleCouponChange = (val, model, mess) => {
    setAlertCoupon({ status: true, type: model, message: mess });
  };

  const handleCloseAlert = () => {
    setAlertCoupon({ ...isAlertCoupon, status: false });
  };

  // @submit-init
  const sntzeFld = (field) => DOMPurify.sanitize(field || '').trim();

  // @biling
  const setBilling = (data) => ({
    data: {
      customerId:
        `${data.firstname.toLowerCase()}${getSplitStringCapital(data.company)}_${getRandomCharacters(5).data}`.replace(
          /\s/g,
          ''
        ),
      firstName: sntzeFld(data.firstname),
      lastName: sntzeFld(data.lastname),
      email: sntzeFld(data.email.toLowerCase()),
      phone: sntzeFld(data.phone),
      company: sntzeFld(data.company),
      websiteUrl: sntzeFld(data.websiteUrl),
    },
  });

  // @hbspot(customer)
  const setHbSpt_Customer = (data, ipA) => ({
    fields: [
      {
        objectTypeId: '0-1',
        name: 'firstname',
        value: sntzeFld(data.firstname),
      },
      {
        objectTypeId: '0-1',
        name: 'lastname',
        value: sntzeFld(data.lastname),
      },
      { objectTypeId: '0-1', name: 'email', value: sntzeFld(data.email) },
      { objectTypeId: '0-1', name: 'phone', value: sntzeFld(data.phone) },
      { objectTypeId: '0-2', name: 'name', value: sntzeFld(data.company) },
      {
        objectTypeId: '0-2',
        name: 'website',
        value: sntzeFld(data.websiteUrl),
      },
    ],
    context: {
      pageUri: 'https://coinfest.asia/checkout',
      pageName: 'Checkout | Coinfest Asia 2025',
      ipAddress: ipA,
    },
  });

  // @hbspot(attende)
  const setHbSpt_Attendee = (data, i, ipA) => {
    const prefix = `Attndee${i + 1}`;
    const getField = (field) => sntzeFld(data[`${field}${prefix}`]);

    return {
      fields: [
        {
          objectTypeId: '0-1',
          name: 'firstname',
          value: getField('firstname'),
        },
        { objectTypeId: '0-1', name: 'lastname', value: getField('lastname') },
        {
          objectTypeId: '0-1',
          name: 'email',
          value: getField('email').toLowerCase(),
        },
        {
          objectTypeId: '0-1',
          name: 'phone',
          value: sntzeFld(data[`phone${i + 1}`]),
        },
        {
          objectTypeId: '0-1',
          name: 'telegram_account',
          value: getField('telegramAccount'),
        },
        { objectTypeId: '0-1', name: 'country', value: getField('country') },
        { objectTypeId: '0-2', name: 'name', value: getField('company') },
        {
          objectTypeId: '0-1',
          name: 'job_title_position',
          value: getField('jobPosition'),
        },
        {
          objectTypeId: '0-2',
          name: 'company_focus',
          value: getField('companyFocus'),
        },
        {
          objectTypeId: '0-1',
          name: 'company_size',
          value: getField('companySize'),
        },
        {
          objectTypeId: '0-1',
          name: 'what_type_of_connections_and_networking_do_you_hope_to_achieve_at_coinfest_asia_',
          value: getField('whatTypeConnectionNetworking'),
        },
        {
          objectTypeId: '0-1',
          name: 'where_did_you_hear_about_coinfest_asia_2024_',
          value: Array.isArray(data[`didYouHearAbout${prefix}`])
            ? data[`didYouHearAbout${prefix}`].join(';')
            : getField('didYouHearAbout'),
        },
      ],
      context: {
        pageUri: 'https://coinfest.asia/checkout',
        pageName: 'Attendee | Coinfest Asia 2025',
        ipAddress: ipA,
      },
    };
  };

  // @order
  const setCreateOrder = (
    totalWithDiscount,
    setIdCustomer,
    setIdProducts,
    setCoupon
  ) => ({
    data: {
      paymentStatus: 'Pending',
      orderTotal: totalWithDiscount,
      customer: { connect: [{ documentId: setIdCustomer }] },
      products: { connect: [{ documentId: setIdProducts }] },
      coupons: setCoupon
        ? { connect: [{ documentId: setCoupon.documentId }] }
        : null,
    },
  });

  // @submit
  const onSubmitForm = async (data) => {
    if (!isValid === false) {
      const isTotalCart = getTotalCart(isProducts);

      // @billing
      const billingConfig = setBilling(data);

      // @hubspot(Customer)
      const hbSptCustomer = setHbSpt_Customer(data, isIpAddress.ip);
      const hbSptKey = '96572ab0-5958-4cc4-8357-9c65de42cab6';

      // @hubspot(Attendee)
      const hbSptAttndeeKey = 'c9347ef6-664d-4b7a-892b-a1cabaa2bc30';

      try {
        const [rsCustomer, rsHbSpt] = await Promise.all([
          pushSubmitData('/api/customers', billingConfig),
          HbSptSubmitForm(hbSptCustomer, hbSptKey),
        ]);

        if (isCart && rsCustomer && rsHbSpt) {
          //   // if (isCart) {
          const setIdCustomer = rsCustomer.data.documentId;
          const setIdProducts = isCartProduct[0].documentId;
          const setPrice = isCartProduct[0].priceSale;
          const qtyProducts = isTotalQty;

          const [getCoupon, rsCustomerDtl] = await Promise.all([
            getFetch(
              `/api/coupons?populate=*&filters[couponCode][$eq]=${isCoupon}`
            ),
            getFetch(`/api/customers/${setIdCustomer}`),
          ]);

          const setCoupon =
            getCoupon.data.length > 0 ? getCoupon.data[0] : null;

          let totalWithDiscount;

          if (rsCustomerDtl) {
            if (
              setCoupon !== null &&
              setCoupon !== 'null' &&
              setCoupon !== undefined
            ) {
              const totalAfterDiscount = calculateDiscountCheckout(
                setCoupon,
                isTotalCart,
                setPrice
              );

              totalWithDiscount = totalAfterDiscount;
            } else {
              totalWithDiscount = isTotalCart;
            }

            const createOrder = setCreateOrder(
              totalWithDiscount,
              setIdCustomer,
              setIdProducts,
              setCoupon
            );

            const rsCreateOrder = await pushSubmitData(
              '/api/orders',
              createOrder
            );

            if (rsCreateOrder) {
              for (let i = 0; i < qtyProducts; i++) {
                const attendeeData = {
                  attendeeId:
                    `${data[`firstnameAttndee${i + 1}`].toLowerCase()}${getSplitStringCapital(data[`companyAttndee${i + 1}`])}_${getRandomCharacters(5).data}`.replace(
                      /\s/g,
                      ''
                    ),
                  firstName: sntzeFld(data[`firstnameAttndee${i + 1}`]),
                  lastName: sntzeFld(data[`lastnameAttndee${i + 1}`]),
                  email: sntzeFld(data[`emailAttndee${i + 1}`].toLowerCase()),
                  telephone: sntzeFld(data[`phone${i + 1}`]),
                  telegramAccount: sntzeFld(
                    data[`telegramAccountAttndee${i + 1}`]
                  ),
                  country: sntzeFld(data[`countryAttndee${i + 1}`]),
                  company: sntzeFld(data[`companyAttndee${i + 1}`]),
                  position: sntzeFld(data[`jobPositionAttendee${i + 1}`]),
                  companyFocus: sntzeFld(data[`companyFocusAttndee${i + 1}`]),
                  companySize: sntzeFld(data[`companySizeAttndee${i + 1}`]),
                  whatTypeOfConnectionsAndNetworkingDoYouHopeToAchieveAtTheEvent:
                    sntzeFld(
                      data[`whatTypeConnectionNetworkingAttndee${i + 1}`]
                    ),
                  whereDidYouHearAboutCoinfestAsia2024: sntzeFld(
                    data[`didYouHearAboutAttndee${i + 1}`]
                  ),
                  customer: { connect: [{ documentId: setIdCustomer }] },
                  product: { connect: [{ documentId: setIdProducts }] },
                };

                const hbSptAttendee = setHbSpt_Attendee(
                  data,
                  i,
                  isIpAddress.ip
                );

                console.log(hbSptAttendee);

                try {
                  await pushSubmitData('/api/attendees', {
                    data: attendeeData,
                  });
                  const [rsAttendee, rsHbSptAttendee] = await Promise.all([
                    pushSubmitData('/api/attendees', {
                      data: attendeeData,
                    }),
                    HbSptSubmitForm(hbSptAttendee, hbSptAttndeeKey),
                  ]);
                } catch (error) {
                  console.error(`[error] submitting attendee ${i + 1}:`, error);
                  break;
                }
              }

              setFormCheckouts({ message: 'Berhasil Terkirim' });
              setTimeout(() => {
                deleteCookie('_cart');
                router.replace('/checkout/order-received');
              }, 100);
            }
          }
        }
      } catch (error) {
        console.error('[error] processing submission:', error);
      }
    }
  };

  return (
    <>
      {/* @head */}
      <HeadGraphSeo title={`Checkout`} otherPage={true} />

      {/* @script */}
      <PrelineScript />

      {/* @navbar */}
      <NavbarCheckout progress="first" />

      {/* @main */}
      <Main className="flex flex-col pb-8 sm:pb-12">
        <Container className={'pt-[178px] sm:pt-[138px]'}>
          <form
            id="tktCAForm_Checkout"
            method="POST"
            onSubmit={handleSubmit(onSubmitForm)}
          >
            <div className="grid-cols-1 gap-x-6 gap-y-12 supports-grid:grid sm:grid-cols-12 sm:gap-y-20">
              <div className="col-span-full pr-0 xl:col-span-7 xl:pr-10">
                <div className="block w-full space-y-8">
                  <div className="block w-full">
                    {/* @header */}
                    <div className="mb-5 flex flex-col items-start justify-start">
                      <h1 className="text-2xl font-semibold text-black-900 sm:text-3xl">
                        Checkout
                      </h1>
                      <div className="mt-2 block">
                        <Breadcrumb
                          theme="dark"
                          listBreadcrumb={[
                            {
                              label: 'Home',
                              url: '/',
                            },
                            {
                              label: 'Checkout',
                              url: '/checkout',
                            },
                          ]}
                        />
                      </div>
                    </div>

                    {/* @notification */}
                    <Notifications
                      icons={
                        <svg
                          className="mt-0.5 size-4 lg:size-5"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                      }
                      label={`<p><strong>Please fill in the attendee</strong> details with the actual data of the person attending the Event. Ticket transfers are not allowed once the purchase is finalized.</p>`}
                      type="info"
                    />

                    {/* @biling-details */}
                    <div className="mt-8 flex flex-col items-start rounded-2xl border border-solid border-gray-200 bg-gray-100 px-2 pb-2 pt-4">
                      <div className="mb-4 flex w-full flex-col items-start justify-start px-4">
                        <h2 className="text-xl font-medium capitalize">
                          Billing details
                        </h2>
                        <span className="mt-1 text-sm font-light text-gray-500">
                          Complate your purchase item by providing your payment
                          detail order.
                        </span>
                      </div>
                      <div className="inline-flex w-full flex-col rounded-xl bg-white px-4 py-4">
                        <BillingDetailCheckout
                          ipAddress={
                            isIpAddress.country !== undefined
                              ? isIpAddress.country.toLowerCase()
                              : 'id'
                          }
                          register={register}
                          setValue={setValue}
                          getValues={getValues}
                          errors={errors}
                          onValueChange={handleBillingChange}
                        />
                      </div>
                    </div>
                  </div>

                  {/* @attendee-detail */}
                  {isProducts ? (
                    <div className="block w-full space-y-6">
                      {isAttendee?.map((gtRslt, i) => {
                        const arrIndex = i + 1;

                        return (
                          <div key={arrIndex}>
                            <>
                              {isStepForm === arrIndex ? (
                                <div className="mt-8 flex flex-col items-start rounded-2xl border border-solid border-gray-200 bg-gray-100 px-2 pb-2 pt-4 first:mt-0">
                                  <div className="mb-4 flex w-full flex-row items-start justify-between px-4">
                                    <div className="sticky top-10 flex flex-col items-start justify-start">
                                      <h2 className="text-xl font-medium capitalize">
                                        Attendees {i + 1}
                                      </h2>
                                      <span className="mt-1 text-sm font-light text-gray-500">
                                        Please fill out the form with your
                                        attendee details.
                                      </span>
                                    </div>
                                    <div>
                                      {isBillingFilled && i <= 0 ? (
                                        <>
                                          <button
                                            onClick={(e) =>
                                              handleCopyBillingToAttendee(e)
                                            }
                                            variant="outline"
                                            size="sm"
                                            className="text-sm text-black-900 underline hover:text-primary"
                                          >
                                            Same as a Billing Details
                                          </button>
                                        </>
                                      ) : null}
                                    </div>
                                  </div>
                                  <div className="inline-flex w-full flex-col rounded-xl bg-white px-4 py-4">
                                    <AttendeeDetailCheckouts
                                      ipAddress={
                                        isIpAddress.country !== undefined
                                          ? isIpAddress.country.toLowerCase()
                                          : 'id'
                                      }
                                      country={isCountry}
                                      fieldForm={isFormCheckouts.fields}
                                      register={register}
                                      control={control}
                                      setValue={setValue}
                                      getValues={getValues}
                                      errors={errors}
                                      arrIndex={i + 1}
                                    />
                                  </div>
                                </div>
                              ) : null}
                            </>
                          </div>
                        );
                      })}

                      {/* @controller(Step Form) */}
                      {isCart && isTotalQty >= 2 && (
                        <div
                          className={`mt-5 flex items-start justify-between`}
                        >
                          <div className="block w-max">
                            {isStepForm < isTotalQty ? (
                              <span className="text-base font-medium">
                                Next Attendee : {isStepForm + 1}
                              </span>
                            ) : (
                              <span className="text-base font-medium">
                                Last Attendee
                              </span>
                            )}
                          </div>
                          {isStepForm !== 0 && (
                            <div
                              className={`${isTotalQty > 1 ? 'inline-flex' : 'hidden'} flex-row items-center gap-x-2`}
                            >
                              <button
                                type="button"
                                className="inline-flex items-center gap-x-1 rounded-lg border border-gray-200 py-2 pl-2 pr-3 text-sm font-normal text-gray-800 transition duration-300 ease-in-out hover:bg-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                                disabled={isStepForm ? isStepForm <= 1 : false}
                                onClick={(e) => {
                                  e.preventDefault();

                                  if (isStepForm > 1) {
                                    setStepForm(isStepForm - 1);
                                  }
                                }}
                              >
                                <svg
                                  className={
                                    'mr-0.5 size-4.5 shrink-0 rotate-180 transform text-current'
                                  }
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="m9 18 6-6-6-6"></path>
                                </svg>
                                Back
                              </button>
                              <button
                                type="button"
                                className="inline-flex items-center gap-x-1 rounded-lg border border-transparent bg-primary py-2 pl-3 pr-2 text-sm font-normal text-white transition duration-300 ease-in-out focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                                disabled={
                                  isStepForm ? isStepForm >= isTotalQty : false
                                }
                                onClick={(e) => {
                                  e.preventDefault();

                                  if (isStepForm < isTotalQty) {
                                    setStepForm(isStepForm + 1);
                                  }
                                }}
                              >
                                Next
                                <svg
                                  className={
                                    'ml-0.5 size-4.5 shrink-0 text-current'
                                  }
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="m9 18 6-6-6-6"></path>
                                </svg>
                              </button>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="col-span-full pl-0 xl:col-span-5 xl:pl-6">
                {/* @order-details */}
                <OrderDetailCheckouts
                  products={isProducts}
                  register={register}
                  setValue={setValue}
                  getValues={getValues}
                  errors={errors}
                  onEvents={handleCouponChange}
                >
                  <Card>
                    {/* @board-submit */}
                    <BoardSubmitCheckout register={register} errors={errors} />

                    {/* @submit-form */}
                    <button
                      id="tktCAForm_SubmitCheckout"
                      type="submit"
                      aria-label="Ticket Coinfest Asia - Submit (Checkout)"
                      className={`inline-flex w-full cursor-pointer flex-row items-center justify-center rounded-lg ${!hasCookie('_cart') ? 'cursor-not-allowed bg-gray-200 text-black-900' : 'cursor-pointer bg-black-900 text-white'} px-8 py-4 text-sm font-normal capitalize leading-inherit outline-none focus-visible:outline-none`}
                      // disabled={!isValid}
                      disabled={!hasCookie('_cart')}
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
                          Submitting...
                        </span>
                      ) : (
                        <span>Proceed To Payment</span>
                      )}
                    </button>
                  </Card>
                </OrderDetailCheckouts>
              </div>
            </div>
          </form>
        </Container>
      </Main>

      {/* @footer */}
      <Footer />

      {/* @alert */}
      <Alerts
        label={isAlertCoupon.message}
        type={isAlertCoupon.type}
        visible={isAlertCoupon.status}
        onClose={handleCloseAlert}
      />
    </>
  );
};

Checkouts.getLayout = function PageLayout(page) {
  return <>{page}</>;
};

export const getStaticProps = async () => {
  const isIpAddress = await getFetchUrl(
    `https://ipinfo.io/json?token=135855871d1f46`
  );

  const isCountry = await getFetchUrl(
    `https://restcountries.com/v3.1/all?fields=name,flags`
  );

  const isHbSptCheckout = await getHbSptFetch(
    `/forms/v2/forms/c9347ef6-664d-4b7a-892b-a1cabaa2bc30`
  );

  try {
    return {
      props: {
        ipAddress: isIpAddress || [],
        country: isCountry || [],
        formCheckout: isHbSptCheckout || [],
      },

      revalidate: 900,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

export default Checkouts;
