import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import DOMPurify from 'dompurify';
import getConfig from 'next/config';
import dynamic from 'next/dynamic';

// # @get .config
const { serverRuntimeConfig } = getConfig();

// @redux
import { useSelector, useDispatch } from 'react-redux';

// @script
import PrelineScript from '@components/Script/PrelineScript';

// @lib/controller & helper
import { getFetch, getFetchUrl, pushSubmitData } from '@lib/controller/API';
import { getFecthHbSpt, submitFormHbSpt } from '@lib/controller/HubSpot';
import {
  generateCreateOrderCode,
  generateTicketAttendeeCode,
  getCombineMerged,
} from '@lib/helper/Configuration';
import {
  getTotalCart,
  calculateDiscountCheckout,
} from '@lib/helper/CartContext';

// @components
import HeadGraphSeo from '@components/Head';
import Main from '@components/Main';
import Container from '@components/Container';
import Badge from '@components/UI/Badge';
import Alerts from '@components/UI/Alerts/Alerts';
import Card from '@components/UI/Card/Card';

// @layouts
import NavbarCheckout from '@layouts/Navbar/NavbarCheckout';
import Header from '@layouts/Checkouts/Header';
const BillingDetailCheckout = dynamic(
  () => import('@layouts/Checkouts//Card/BillingDetailCheckout'),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
);
const AttendeeDetailCheckouts = dynamic(
  () => import('@layouts/Checkouts/Card/AttendeeDetailCheckouts'),
  {
    loading: () => <p>Loading...</p>,
  }
);
const CompnayDetailCheckouts = dynamic(
  () => import('@layouts/Checkouts/Card/CompanyDetailCheckout'),
  {
    loading: () => <p>Loading...</p>,
  }
);

// import OrderDetailCheckouts from '@layouts/Checkouts//Card/OrderDetailCheckouts';

const OrderDetailCheckouts = dynamic(
  () => import('@layouts/Checkouts//Card/OrderDetailCheckouts'),
  {
    loading: () => <p>Loading...</p>,
  }
);
import BoardSubmitCheckout from '@layouts/Checkouts/Card/BoardSubmitCheckout';
import Footer from '@layouts/Footer';

const Checkout = ({ ipAddress, country, formCheckout }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { data: isCart, coupon: isCoupon } = useSelector((state) => state.cart);

  // @data
  const [isIpAddress, setIpAddress] = useState(ipAddress);
  const [isCountry, setCountry] = useState(country);
  const [isFormCheckouts, setFormCheckouts] = useState({
    fields: formCheckout,
    stepForm: 1,
    totalQty: 1,
    message: null,
  });

  // @cart
  const [isProducts, setProducts] = useState([]);

  // @hook(Preline)
  const handleIntzPreline = useCallback(async () => {
    if (!window.HSStaticMethods) {
      try {
        const { HSStaticMethods } = await import('preline/preline');
        HSStaticMethods.autoInit();
      } catch (error) {
        console.error('[Error] loading Preline:', error);
      }
    }
  }, [isCart]);

  // @hook(Product)
  const hndleHookProducts = useCallback(async () => {
    try {
      const allProducts = await Promise.all(
        isCart?.map(async (data) => {
          const rsHook = await getFetch(`/api/products/${data.id_product}`);
          return {
            id: rsHook.data.id,
            documentId: rsHook.data.documentId,
            productId: rsHook.data.productId,
            name: rsHook.data.name,
            price: rsHook.data.price,
            priceSale: rsHook.data.priceSale,
            qty: rsHook.data.qty,
          };
        })
      );
      // @hook(Combine Merged)
      if (allProducts) {
        const setMerged = getCombineMerged(allProducts.slice(0, 1), isCart);

        if (setMerged) {
          setProducts(setMerged);
        }
      }
    } catch (err) {
      return;
    }
  }, [isCart]);

  // @hook(Attendee with Qty)
  const calculateTotalQty = useCallback(() => {
    const totalQ = isCart?.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);

    if (totalQ >= 5) {
      const newQty = 5;
      setFormCheckouts((prev) => ({ ...prev, totalQty: newQty }));
    } else {
      setFormCheckouts((prev) => ({ ...prev, totalQty: totalQ }));
    }
  }, [isCart]);

  // @hook(Attendee with Qty)
  const isAttendee = [
    ...Array(isFormCheckouts.totalQty ? isFormCheckouts.totalQty : 1).keys(),
  ];

  // @hook(Product)
  useEffect(() => {
    hndleHookProducts();
    calculateTotalQty();

    return () => {
      undefined;
    };
  }, [hndleHookProducts]);

  useEffect(() => {
    handleIntzPreline();

    if (isFormCheckouts.totalQty < isFormCheckouts.stepForm) {
      setFormCheckouts((prev) => ({
        ...prev,
        stepForm: isFormCheckouts.stepForm - 1,
      }));
    }

    return () => {
      undefined;
    };
  }, [isFormCheckouts.stepForm, isFormCheckouts.totalQty]);

  // @hook(Alert)
  const [isAlert, setAlert] = useState({
    status: false,
    type: 'default',
    message: '',
  });

  // @handle(Alert)
  const hndleAlert_Change = (model, mess) => {
    setAlert({ status: true, type: model, message: mess });
  };

  // @handle(Close Alert)
  const handleCloseAlert = () =>
    setAlert((prev) => ({ ...prev, status: false }));

  // @form-hook(Checkout)
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
    mode: 'onTouched',
    defaultValues: {
      phone: '',
      company: 'N/A',
      companyAttndee1: 'N/A',
    },
  });

  // @watch
  const firstnameBilling = watch('firstname');
  const lastnameBilling = watch('lastname');
  const emailBilling = watch('email');
  const phone = watch('phone');
  const haveCompantAttendee = watch(`haveCompany`);
  const haveCompantAttendee1 = watch(`haveCompanyAttndee1`);
  const companyBilling = watch('company');

  // @init(billing)
  const [isBillingDetails, setBillingDetails] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    company: 'N/A',
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
  const hndleBilling_Change = (vr, val) => {
    setBillingDetails({
      ...isBillingDetails,
      [vr]: val,
    });
  };

  // @handle-copydata(billing)
  const hndleCopy_BillingToAttendee = (e) => {
    e.preventDefault();
    setValue('firstnameAttndee1', firstnameBilling);
    setValue('lastnameAttndee1', lastnameBilling);
    setValue('emailAttndee1', emailBilling);
    setValue('dialcode-phone1', phone);
    setValue('phone1', phone);
    if (haveCompantAttendee === true && haveCompantAttendee1) {
      setValue('companyAttndee1', companyBilling);
    }
  };

  const hndleCopy_CompanyDetail = (el = [], attendee = 1) => {
    const reg = [
      `countryAttndee${attendee}`,
      `jobPositionAttndee${attendee}`,
      `companyFocusAttndee${attendee}`,
      `companySizeAttndee${attendee}`,
    ];

    const vals = [
      getValues('countryAttndee1'),
      getValues('jobPositionAttndee1'),
      getValues('companyFocusAttndee1'),
      getValues('companySizeAttndee1'),
    ];

    if (el.length > 0) {
      el?.forEach((id, i) => {
        const elmntInstance = window.HSSelect.getInstance(id);

        if (elmntInstance) {
          elmntInstance.setValue(vals[i]);
          setValue(reg[i], vals[i]);
        } else {
          console.warn(`[Warning] HSSelect instance not found for id: ${id}`);
        }
      });
    }
  };

  // @submit(Sanitize)
  const sntzeFld = (field) => DOMPurify.sanitize(field || '').trim();

  // @biling
  const setBilling = (data) => ({
    data: {
      customerId: sntzeFld(generateCreateOrderCode()),
      firstName: sntzeFld(data.firstname),
      lastName: sntzeFld(data.lastname),
      email: sntzeFld(data.email.toLowerCase()),
      phone: sntzeFld(data.phone),
      company: sntzeFld(data.company),
      websiteUrl: sntzeFld(
        data.haveCompany ? (data.websiteUrl ? data.websiteUrl : '-') : '-'
      ),
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
      {
        objectTypeId: '0-2',
        name: 'name',
        value: sntzeFld(
          data.haveCompany ? (data.company ? data.company : 'N/A') : 'N/A'
        ),
      },
      {
        objectTypeId: '0-2',
        name: 'website',
        value: sntzeFld(
          data.haveCompany ? (data.websiteUrl ? data.websiteUrl : '-') : '-'
        ),
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
        {
          objectTypeId: '0-2',
          name: 'name',
          value: data.haveCompany ? getField('company') : 'N/A',
        },
        {
          objectTypeId: '0-1',
          name: 'job_title_position',
          value: data.haveCompany ? getField('jobPosition') : '-',
        },
        {
          objectTypeId: '0-2',
          name: 'company_focus',
          value: data.haveCompany ? getField('companyFocus') : '-',
        },
        {
          objectTypeId: '0-1',
          name: 'company_size',
          value: data.haveCompany ? getField('companySize') : '-',
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

  // @submit(Checkout)
  const onSubmitForm = async (data) => {
    if (!isValid === false) {
      const isTotalCart = getTotalCart(isProducts);

      // @hubspot(Customer)
      const hbSptKey = '96572ab0-5958-4cc4-8357-9c65de42cab6';

      // @hubspot(Attendee)
      const hbSptAttndeeKey = 'c9347ef6-664d-4b7a-892b-a1cabaa2bc30';

      try {
        const [rsCustomer, rsHbSpt] = await Promise.all([
          pushSubmitData('/api/customers', setBilling(data)),
          submitFormHbSpt(setHbSpt_Customer(data, isIpAddress.ip), hbSptKey),
        ]);

        if (isCart && rsCustomer && rsHbSpt) {
          //   // if (isCart) {
          const setIdCustomer = rsCustomer.data.documentId;
          const setIdProducts = isProducts[0].documentId;
          const setPrice = isProducts[0].priceSale;
          const qtyProducts = isFormCheckouts.totalQty;

          const [getCoupon, rsCustomerDtl] = await Promise.all([
            getFetch(
              `/api/coupons?populate=*&filters[couponCode][$eq]=${isCoupon}`
            ),
            getFetch(`/api/customers/${setIdCustomer}`),
          ]);

          const setCoupon =
            getCoupon.data.length > 0 ? getCoupon.data[0] : null;

          if (rsCustomerDtl) {
            let totalWithDiscount;
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
              const setTax_Rate = 0.11;
              const taxAmount = isTotalCart * setTax_Rate;
              const totalWithTax = isTotalCart + taxAmount;
              totalWithDiscount = totalWithTax;
            }

            const createOrder = setCreateOrder(
              Math.floor(totalWithDiscount),
              setIdCustomer,
              setIdProducts,
              setCoupon
            );

            const rsCreateOrder = await pushSubmitData(
              '/api/orders',
              createOrder
            );

            if (rsCreateOrder) {
              const setIdOrderRecived = rsCreateOrder.data.documentId;

              for (let i = 0; i < qtyProducts; i++) {
                const attendeeData = {
                  attendeeId: sntzeFld(generateTicketAttendeeCode()),
                  firstName: sntzeFld(data[`firstnameAttndee${i + 1}`]),
                  lastName: sntzeFld(data[`lastnameAttndee${i + 1}`]),
                  email: sntzeFld(data[`emailAttndee${i + 1}`].toLowerCase()),
                  telephone: sntzeFld(data[`phone${i + 1}`]),
                  telegramAccount: sntzeFld(
                    data[`telegramAccountAttndee${i + 1}`]
                  ),
                  country: sntzeFld(data[`countryAttndee${i + 1}`]),
                  company: sntzeFld(
                    data[`haveCompanyAttndee${i + 1}`]
                      ? data[`companyAttndee${i + 1}`]
                      : 'N/A'
                  ),
                  position: sntzeFld(
                    data[`haveCompanyAttndee${i + 1}`]
                      ? data[`jobPositionAttndee${i + 1}`]
                      : '-'
                  ),
                  companyFocus: sntzeFld(
                    data[`haveCompanyAttndee${i + 1}`]
                      ? data[`companyFocusAttndee${i + 1}`]
                      : '-'
                  ),
                  companySize: sntzeFld(
                    data[`haveCompanyAttndee${i + 1}`]
                      ? data[`companySizeAttndee${i + 1}`]
                      : '-'
                  ),
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

                try {
                  const [rsAttendee, rsHbSptAttendee] = await Promise.all([
                    pushSubmitData('/api/attendees', {
                      data: attendeeData,
                    }),
                    submitFormHbSpt(hbSptAttendee, hbSptAttndeeKey),
                  ]);
                } catch (error) {
                  console.error(`[error] submitting attendee ${i + 1}:`, error);
                  break;
                }
              }

              setFormCheckouts({
                ...isFormCheckouts,
                message: 'Berhasil Terkirim',
              });
              sessionStorage.removeItem('_cart');
              reset();
              router.replace(
                `/checkout/order-received?process=${setIdOrderRecived}`
              );
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

      {/* @navbar */}
      <NavbarCheckout progress="first" />

      {/* @main */}
      <Main className="pb-8 pt-[178px] sm:pb-12 sm:pt-[138px]">
        <Container>
          <form
            id="tktCA25Form_Checkout"
            method="POST"
            onSubmit={handleSubmit(onSubmitForm)}
            className="relative grid-cols-1 gap-x-6 gap-y-12 supports-grid:grid sm:grid-cols-12 sm:gap-y-20"
          >
            <div className="col-span-full pr-0 xl:col-span-7 xl:pr-10">
              <Header />

              {/* @biling(Details) */}
              <div className="mt-8 flex flex-col items-start rounded-2xl border border-solid border-gray-200 bg-gray-100 px-2 pb-2 pt-4">
                <div className="mb-6 flex w-full flex-col items-start justify-start px-4 sm:mb-4">
                  <h2 className="text-xl font-medium capitalize">
                    {`Billing details`}
                  </h2>
                  <span className="mt-1 text-sm font-light text-gray-500">
                    {`Please complete your purchase by providing your billing and
                    payment details.`}
                  </span>
                </div>
                <div className="inline-flex w-full flex-col rounded-xl bg-white px-4 py-4">
                  <BillingDetailCheckout
                    ipAddress={
                      isIpAddress.country !== undefined
                        ? isIpAddress.country.toLowerCase()
                        : 'id'
                    }
                    watch={haveCompantAttendee}
                    register={register}
                    setValue={setValue}
                    getValues={getValues}
                    errors={errors}
                    onValueChange={hndleBilling_Change}
                  />
                </div>
              </div>

              {/* @attendee(Detail) */}
              <div className={`mt-10 block w-full space-y-6`}>
                {isAttendee?.map((gtRslt, i) => {
                  const haveCompantAttendee = watch(
                    `haveCompanyAttndee${i + 1}`
                  );

                  return isFormCheckouts.stepForm === i + 1 ? (
                    <div
                      className="mt-8 flex flex-col items-start rounded-2xl border border-solid border-gray-200 bg-gray-100 px-2 pb-2 pt-4 first:mt-0"
                      key={i}
                    >
                      <div className="mb-6 flex w-full flex-col items-start justify-between px-4 sm:mb-4 sm:flex-row">
                        <div className="flex w-full max-w-[420px] flex-col items-start justify-start">
                          <h2 className="text-xl font-medium capitalize">
                            {`Attendees ${i + 1}`}
                          </h2>
                          <span className="mt-1 text-sm font-light text-gray-500">
                            {`Please complete the form with your attendee details.`}
                          </span>
                        </div>
                        {isBillingFilled && i <= 0 ? (
                          <div className="mr-0 mt-3 sm:-mr-2 sm:mt-0">
                            <button
                              id="ca25Btn_CopyBillingDetailCheckout"
                              type="button"
                              aria-label="Button for Copy Billing Detail(Checkouts)"
                              aria-labelledby="Button for Copy Billing Detail(Checkouts)"
                              onClick={(e) => hndleCopy_BillingToAttendee(e)}
                              className="text-black-900"
                            >
                              <Badge
                                label="Same as a Billing Details"
                                type="dark"
                                withHover={true}
                                withUnderline={true}
                                icons={
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <rect
                                      width="8"
                                      height="4"
                                      x="8"
                                      y="2"
                                      rx="1"
                                      ry="1"
                                    />
                                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                                    <path d="M12 11h4" />
                                    <path d="M12 16h4" />
                                    <path d="M8 11h.01" />
                                    <path d="M8 16h.01" />
                                  </svg>
                                }
                              />
                            </button>
                          </div>
                        ) : null}
                      </div>
                      <div className="inline-flex w-full flex-col space-y-4 rounded-xl bg-white px-4 py-4">
                        <AttendeeDetailCheckouts
                          ipAddress={
                            isIpAddress.country !== undefined
                              ? isIpAddress.country.toLowerCase()
                              : 'id'
                          }
                          fieldForm={isFormCheckouts.fields}
                          country={isCountry}
                          register={register}
                          control={control}
                          setValue={setValue}
                          getValues={getValues}
                          errors={errors}
                          arrIndex={i + 1}
                        />
                      </div>

                      <div className="my-4 flex w-full flex-col items-start justify-between px-4 sm:flex-row">
                        <div className="flex w-full max-w-[399px] flex-col items-start justify-start">
                          <h2 className="text-lg font-medium capitalize">
                            {`Company`}
                          </h2>
                          <span className="mt-1 text-sm font-light text-gray-500">
                            {`Please enter the company information to match the
                          details of the participants in attendance.`}
                          </span>
                        </div>
                        {isFormCheckouts.stepForm > 1 &&
                        haveCompantAttendee === true ? (
                          <div className="mr-0 mt-3 sm:-mr-4 sm:mt-0">
                            <button
                              id="ca25Btn_CopyBillingDetailCheckout"
                              type="button"
                              aria-label="Button for Copy Billing Detail(Checkouts)"
                              aria-labelledby="Button for Copy Billing Detail(Checkouts)"
                              onClick={(e) => {
                                e.preventDefault();
                                hndleCopy_CompanyDetail(
                                  [
                                    `#tktCAForm_CountryAttndee${isFormCheckouts.stepForm}Checkout`,
                                    `#tktCAForm_JobPositionAttndee${isFormCheckouts.stepForm}Checkout`,
                                    `#tktCAForm_CompanyFocusAttndee${isFormCheckouts.stepForm}Checkout`,
                                    `#tktCAForm_CompanySizeAttndee${isFormCheckouts.stepForm}Checkout`,
                                  ],
                                  isFormCheckouts.stepForm
                                );
                              }}
                              className="text-black-900"
                            >
                              <Badge
                                label="Same Company Details"
                                type="dark"
                                withHover={true}
                                withUnderline={true}
                                icons={
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <rect
                                      width="8"
                                      height="4"
                                      x="8"
                                      y="2"
                                      rx="1"
                                      ry="1"
                                    />
                                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                                    <path d="M12 11h4" />
                                    <path d="M12 16h4" />
                                    <path d="M8 11h.01" />
                                    <path d="M8 16h.01" />
                                  </svg>
                                }
                              />
                            </button>
                          </div>
                        ) : null}
                      </div>
                      <div
                        className={`${haveCompantAttendee === true ? 'pointer-events-auto' : 'pointer-events-none'} inline-flex w-full flex-col space-y-4 rounded-xl bg-white px-4 py-4`}
                      >
                        <CompnayDetailCheckouts
                          fieldForm={isFormCheckouts.fields}
                          watch={haveCompantAttendee}
                          register={register}
                          setValue={setValue}
                          getValues={getValues}
                          errors={errors}
                          arrIndex={i + 1}
                        />
                      </div>
                    </div>
                  ) : null;
                })}

                {isCart && isFormCheckouts.totalQty >= 2 && (
                  <div className={`flex items-start justify-between`}>
                    <div className="block w-max">
                      {isFormCheckouts.stepForm < isFormCheckouts.totalQty ? (
                        <Badge
                          label={`Next Attendee: ${isFormCheckouts.stepForm + 1}`}
                          type="light"
                          size="sm"
                          icons={
                            <span className="mr-0.5 inline-block size-1.5 rounded-full bg-gray-800"></span>
                          }
                        />
                      ) : (
                        <Badge
                          label={`Last Attendee`}
                          type="light"
                          size="sm"
                          icons={
                            <span className="mr-0.5 inline-block size-1.5 rounded-full bg-gray-800"></span>
                          }
                        />
                      )}
                    </div>
                    <div
                      className={`${isFormCheckouts.totalQty > 1 ? 'inline-flex' : 'hidden'} flex-row items-center gap-x-2`}
                    >
                      <button
                        id="ca25BtnStepForm_BackCheckout"
                        type="button"
                        className="inline-flex items-center gap-x-1 rounded-lg border border-gray-200 py-2 pl-2 pr-3 text-sm font-normal text-gray-800 transition duration-300 ease-in-out hover:bg-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                        aria-label="Button for Back Step Form Coinfest Asia 2025"
                        disabled={
                          isFormCheckouts.stepForm
                            ? isFormCheckouts.stepForm <= 1
                            : false
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          if (isFormCheckouts.stepForm > 1) {
                            setFormCheckouts((prev) => ({
                              ...prev,
                              stepForm: isFormCheckouts.stepForm - 1,
                            }));
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
                        Prev
                      </button>
                      <button
                        id="ca25BtnStepForm_NextCheckout"
                        type="button"
                        className="inline-flex items-center gap-x-1 rounded-lg border border-transparent bg-primary py-2 pl-3 pr-2 text-sm font-normal text-white transition duration-300 ease-in-out focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                        aria-label="Button for Next Step Form Coinfest Asia 2025"
                        disabled={
                          isFormCheckouts.stepForm
                            ? isFormCheckouts.stepForm >=
                              isFormCheckouts.totalQty
                            : false
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          if (
                            isFormCheckouts.stepForm < isFormCheckouts.totalQty
                          ) {
                            setFormCheckouts((prev) => ({
                              ...prev,
                              stepForm: isFormCheckouts.stepForm + 1,
                            }));
                          }
                        }}
                      >
                        Next
                        <svg
                          className={'ml-0.5 size-4.5 shrink-0 text-current'}
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
                  </div>
                )}
              </div>
            </div>
            <div className="col-span-full pl-0 xl:col-span-5 xl:pl-6">
              <OrderDetailCheckouts
                products={isProducts}
                stepForm={isFormCheckouts.stepForm}
                register={register}
                setValue={setValue}
                getValues={getValues}
                errors={errors}
                onAlert={hndleAlert_Change}
              >
                <Card>
                  <BoardSubmitCheckout register={register} errors={errors} />

                  {/* @submit(Form) */}
                  <button
                    id="tktCA25Form_SubmitCheckout"
                    className={`inline-flex w-full cursor-pointer flex-row items-center justify-center rounded-xl bg-black-900 px-8 py-5 text-base font-normal capitalize leading-inherit text-white disabled:bg-gray-200 disabled:text-black-900`}
                    type="submit"
                    role="button"
                    aria-label="Submit Checkout for Coinfest Asia 2025"
                    // disabled={!isValid}
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
                      'Proceed To Payment'
                    )}
                  </button>
                </Card>
              </OrderDetailCheckouts>
            </div>
          </form>
        </Container>
      </Main>

      {/* @footer */}
      <Footer />

      {/* @alert */}
      <Alerts
        type={isAlert.type}
        label={isAlert.message}
        visible={isAlert.status}
        onClose={handleCloseAlert}
      />

      {/* @script */}
      <PrelineScript />
    </>
  );
};

Checkout.getLayout = function PageLayout(page) {
  return <>{page}</>;
};

export const getServerSideProps = async (context) => {
  if (Object.keys(context.query).length > 0) {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    };
  }

  try {
    const [rsIpAddress, rsCountry, rsCheckoutHbSpt] = await Promise.all([
      getFetchUrl(
        `https://ipinfo.io/json?token=${serverRuntimeConfig.ipAddress_token}`
      ),
      getFetchUrl(`https://restcountries.com/v3.1/all?fields=name,flags`),
      getFecthHbSpt(`/forms/v2/forms/${serverRuntimeConfig.hbSptCheckout}`),
    ]);

    return {
      props: {
        ipAddress: rsIpAddress || [],
        country: rsCountry || [],
        formCheckout: rsCheckoutHbSpt.formFieldGroups || [],
      },
    };
  } catch (err) {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    };
  }
};

export default Checkout;
