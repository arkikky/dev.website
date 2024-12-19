import React, { useState, useEffect, useCallback } from 'react';
import DOMPurify from 'dompurify';
import { twMerge } from 'tailwind-merge';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import getConfig from 'next/config';
import dynamic from 'next/dynamic';

// # @get .config
const { serverRuntimeConfig } = getConfig();

// @redux
import { useSelector } from 'react-redux';

// @lib/controller & helper
import {
  getFetch,
  getFetchUrl,
  updateData,
  pushSubmitData,
} from '@lib/controller/API';
import { getFecthHbSpt, submitFormHbSpt } from '@lib/controller/HubSpot';
import {
  getJoinString,
  generateTicketAttendeeCode,
  getCombineMerged,
} from '@lib/helper/Configuration';
import {
  getTotalCart,
  calculateDiscount,
  calculateDiscountCheckout,
  setBillingData,
  setHbSptCustomerData,
  setHbSptAttendeeData,
  getCreateOrder,
} from '@lib/helper/CartContext';
import { useMethod } from '@lib/hooks/Method';

// @components
import HeadGraphSeo from '@components/Head';
import Main from '@components/Main';
import Container from '@components/Container';
import Breadcrumb from '@components/UI/Breadcrumb';
import Notifications from '@components/UI/Alerts/Notifications';
import Badge from '@components/UI/Badge';
import CopyBillingAttendeeBtn from '@components/UI/Button/CopyBillingAttendeeBtn';
import CopyOtherDetailBtn from '@components/UI/Button/CopyOtherDetailBtn';

// @layouts
import NavbarTop from '@layouts/Navbar/NavbarTop';
import Header from '@layouts/Checkouts/Header';
const BillingDetailCheckout = dynamic(
  () => import('@layouts/Checkouts//Card/BillingDetailCheckout'),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
);
import AttendeeDetailCheckouts from '@layouts/Checkouts/Card/AttendeeDetailCheckouts';
import OrderDetailCheckouts from '@layouts/Checkouts//Card/OrderDetailCheckouts';
import BoardSubmitCheckout from '@layouts/Checkouts/Card/BoardSubmitCheckout';
import Footer from '@layouts/Footer';

const Checkout = ({ ipAddress, country, coupons, formCheckout }) => {
  const router = useRouter();
  const { toggleOverlayPopUp } = useMethod();
  const { data: isCart, coupon: isCoupon } = useSelector((state) => state.cart);
  const [isFormCheckouts, setFormCheckouts] = useState({
    isIpAddress: ipAddress,
    fields: formCheckout,
    isCountry: country,
    isCoupons: coupons,
    isToggleCompany: false,
    firstToggleCompany: {
      product: 0,
      attendee: 0,
    },
    totalQty: 1,
    message: null,
  });
  const [isProducts, setProducts] = useState([]);
  const [isStepToggledCompany, setIsStepToggledCompany] = useState(
    isCart?.map((gtRslt) =>
      Array.from({ length: gtRslt?.quantity || 0 }, () => false)
    )
  );
  const [currentStepAttendee, setCurrentStepAttendee] = useState(
    isCart?.map(() => 0)
  );

  // @card(theme)
  const style = {
    sn4ujm0d1ebbc8lme1ihzsa9: 'bg-cyan-400',
    rc33x0dgm6tm707jghffuip4: 'bg-black-800',
  };
  const findFirstTrue = () => {
    for (
      let productIdx = 0;
      productIdx < isStepToggledCompany.length;
      productIdx++
    ) {
      const attendeeIdx = isStepToggledCompany[productIdx].findIndex(
        (toggle) => toggle === true
      );
      if (attendeeIdx !== -1) {
        return { product: productIdx, attendee: attendeeIdx, status: true };
      }
    }
    return null;
  };

  // @sticky(Scroll)
  useEffect(() => {
    const handleScroll = () => {
      const stickyScroll = document.querySelectorAll('.ca25StoreProductSticky');
      const scrollPosition = window.scrollY;

      stickyScroll.forEach((el) => {
        const targetOffsetTop = el.getBoundingClientRect().top + window.scrollY;
        if (scrollPosition > targetOffsetTop) {
          el.classList.add('isStickyActive');
        } else {
          el.classList.remove('isStickyActive');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // @btn-step(Attendee)
  const handleTabClick = (productIdx, tabIdx) => {
    setCurrentStepAttendee((prev) =>
      prev?.map((attendee, idx) => (idx === productIdx ? tabIdx : attendee))
    );
  };
  const handleToggleChange = async (productIdx, attendeeIdx) => {
    setIsStepToggledCompany((prev) =>
      prev.map((product, pIdx) =>
        pIdx === productIdx
          ? product.map((toggle, aIdx) =>
              aIdx === attendeeIdx ? !toggle : toggle
            )
          : product
      )
    );
  };
  useEffect(() => {
    const result = findFirstTrue();
    if (result) {
      if (isFormCheckouts?.isToggleCompany === false) {
        setFormCheckouts((prev) => ({
          ...prev,
          firstToggleCompany: {
            product: result.product,
            attendee: result.attendee,
          },
          isToggleCompany: result.status,
        }));
      }
    } else {
      setFormCheckouts((prev) => ({
        ...prev,
        firstToggleCompany: {
          product: 0,
          attendee: 0,
        },
        isToggleCompany: false,
      }));
    }
    return () => {
      undefined;
    };
  }, [isStepToggledCompany]);
  const handlePrevAttendee = (prdctIdx) => {
    setCurrentStepAttendee((prev) =>
      prev?.map((a, idx) => (idx === prdctIdx ? Math.max(a - 1, 0) : a))
    );
  };
  const handleNextAttendee = (prdctIdx, maxQty) => {
    setCurrentStepAttendee((prev) =>
      prev?.map((a, idx) =>
        idx === prdctIdx ? Math.min(a + 1, maxQty - 1) : a
      )
    );
  };

  // @handle(Auto Close PopUp)
  useEffect(() => {
    const elBckdrp = document.querySelector(
      '.ca2025BckdrpOverflay_PopUpMobile'
    );
    if (elBckdrp.classList.contains('active')) {
      toggleOverlayPopUp(
        '.ca2025BckdrpOverflay_PopUpMobile',
        '.ca2025CartPopUp_Mobile'
      );
    }
    return () => {};
  }, []);

  // @hook(Preline)
  const handleIntzPreline = useCallback(async () => {
    await import('preline/preline');
    if (window.HSStaticMethods) {
      window.HSStaticMethods.autoInit();
    }
  }, [isCart]);

  // @hook(Product)
  const hndleHookProducts = useCallback(async () => {
    try {
      const allProducts = await Promise.all(
        isCart?.map(async (data) => {
          const rsHook = await getFetch(`/api/products/${data.id_product}`);
          return {
            id: rsHook?.data.id,
            documentId: rsHook?.data.documentId,
            productId: rsHook?.data.productId,
            name: rsHook?.data.name,
            price: rsHook?.data.price,
            priceSale: rsHook?.data.priceSale,
            stock: parseInt(rsHook?.data.stock),
          };
        })
      );
      // @hook(Combine Merged)
      if (allProducts) {
        const setMerged = getCombineMerged(allProducts.slice(0, 3), isCart);
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
    // @hook-toogle(Company)
    setIsStepToggledCompany((prev) =>
      isCart.map((gtRslt, productIdx) => {
        const currentToggles = prev[productIdx] || [];
        const newQuantity = gtRslt?.quantity || 0;
        return currentToggles
          .slice(0, newQuantity)
          .concat(
            Array?.from(
              { length: Math.max(newQuantity - currentToggles?.length, 0) },
              () => false
            )
          );
      })
    );
    return () => {
      undefined;
    };
  }, [isProducts]);
  useEffect(() => {
    handleIntzPreline();
    return () => {
      undefined;
    };
  }, [currentStepAttendee]);

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
    mode: 'all',
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
  const haveCompanyAttendee = watch(`haveCompany`);
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
  // @handle-copy(Billing)
  const hndleCopy_BillingToAttendee = (group) => {
    setValue(`firstnameAttndee1_${group}`, firstnameBilling);
    setValue(`lastnameAttndee1_${group}`, lastnameBilling);
    setValue(`emailAttndee1_${group}`, emailBilling);
    setValue(`dialcode-phone1_${group}`, phone);
    setValue(`phone1_${group}`, phone);
    if (haveCompanyAttendee === true) {
      setValue(`companyAttndee1_${group}`, companyBilling);
    }
  };

  // @handle-copy(Other Detail - Attendee)
  const hndleCopyOtherDetail = (
    el = [],
    items = {
      firstItems: null,
      attendee: 1,
      group: null,
    }
  ) => {
    const reg = [
      `countryAttndee${items?.attendee}_${items?.group}`,
      `whatTypeConnectionNetworkingAttndee${items?.attendee}_${items?.group}`,
      `didYouHearAboutAttndee${items?.attendee}_${items?.group}`,
    ];
    const vals = [
      getValues(`countryAttndee1_${items?.firstItems}`),
      getValues(`whatTypeConnectionNetworkingAttndee1_${items?.firstItems}`),
      getValues(`didYouHearAboutAttndee1_${items?.firstItems}`),
    ];
    if (el.length > 0) {
      el?.forEach((id, i) => {
        const elmntInstance = window.HSSelect.getInstance(id);
        if (elmntInstance) {
          elmntInstance?.setValue(vals[i]);
          setValue(reg[i], vals[i]);
        } else {
          // console.warn(`[Warning] HSSelect instance not found for id: ${id}`);
        }
      });
    }
  };

  // @handle-copy(Company - Attendee)
  const hndleCopyCompany = (
    el = [],
    items = {
      attendee: 1,
      group: null,
    },
    values = {
      activeGroup: null,
      activeToggle: 1,
    }
  ) => {
    const reg = [
      `jobPositionAttndee${items?.attendee}_${items?.group}`,
      `companyFocusAttndee${items?.attendee}_${items?.group}`,
      `companySizeAttndee${items?.attendee}_${items?.group}`,
    ];
    const vals = [
      getValues(
        `jobPositionAttndee${values?.activeToggle}_${values?.activeGroup}`
      ),
      getValues(
        `companyFocusAttndee${values?.activeToggle}_${values?.activeGroup}`
      ),
      getValues(
        `companySizeAttndee${values?.activeToggle}_${values?.activeGroup}`
      ),
    ];
    setValue(
      `companyAttndee${items?.attendee}_${items?.group}`,
      getValues(`companyAttndee${values?.activeToggle}_${values?.activeGroup}`)
    );
    if (el.length > 0) {
      el?.forEach((id, i) => {
        const elmntInstance = window.HSSelect.getInstance(id);
        if (elmntInstance) {
          elmntInstance.setValue(vals[i]);
          setValue(reg[i], vals[i]);
        } else {
          // console.warn(`[Warning] HSSelect instance not found for id: ${id}`);
        }
      });
    }
  };

  // @submit(Checkout)
  const sntzeFld = (field) => DOMPurify.sanitize(field || '').trim();
  const onSubmitForm = async (data) => {
    if (!isValid === false) {
      const isTotalCart = getTotalCart(isProducts);
      // @hubspot(Customer , Attendee)
      const hbSptKey = '96572ab0-5958-4cc4-8357-9c65de42cab6';
      const hbSptAttndeeKey = 'c9347ef6-664d-4b7a-892b-a1cabaa2bc30';

      try {
        const rsCustomer = await pushSubmitData(
          '/api/customers',
          setBillingData(data)
        );
        if (isCart && rsCustomer) {
          const setIdCustomer = rsCustomer.data.documentId;
          const setIdProducts = isProducts[0].documentId;
          const qtyProducts = isFormCheckouts?.totalQty;

          // @discount
          const [getCoupon, rsCustomerDtl] = await Promise.all([
            getFetch(
              `/api/coupons?populate=*&filters[couponCode][$eq]=${isCoupon}`
            ),
            getFetch(`/api/customers/${setIdCustomer}`),
          ]);

          const setCoupon =
            getCoupon?.data?.length > 0 ? getCoupon?.data[0] : null;
          if (rsCustomerDtl) {
            let totalWithDiscount, discntAmount;

            if (
              setCoupon !== null &&
              setCoupon !== 'null' &&
              setCoupon !== undefined
            ) {
              const includedProductIds = setCoupon?.includedProducts?.map(
                (product) => product.documentId
              );
              const validProducts = isProducts?.filter((product) =>
                includedProductIds?.includes(product.documentId)
              );
              const setPrice =
                validProducts[0].priceSale ?? validProducts[0].price;
              const totalDiscount = calculateDiscount(
                setCoupon,
                isTotalCart,
                setPrice
              );
              const totalAfterDiscount = calculateDiscountCheckout(
                setCoupon,
                isTotalCart,
                setPrice
              );
              discntAmount = totalDiscount;
              totalWithDiscount = totalAfterDiscount;
            } else {
              const setTax_Rate = 0.11;
              const taxAmount = isTotalCart * setTax_Rate;
              const totalWithTax = isTotalCart + taxAmount;
              discntAmount = 0;
              totalWithDiscount = totalWithTax;
            }

            // @create(Order)
            const createOrder = getCreateOrder(
              Math.floor(totalWithDiscount),
              setIdCustomer,
              isProducts,
              setCoupon
            );
            const rsCreateOrder = await pushSubmitData(
              '/api/orders?populate[customer][fields]=*&populate[products][fields][0]=name&populate[products][fields][1]=price&populate[products][fields][2]=priceSale&populate[coupons][fields][0]=couponCode&populate[coupons][fields][1]=amount',
              createOrder
            );

            // @processing(Order & Ticket)
            if (rsCreateOrder) {
              const setIdOrderRecived = rsCreateOrder?.data.documentId;
              const arrAttendees = [];

              // @get(Key)
              const { key } = await fetch('/api/env/note', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
              }).then((res) => res.json());

              // @send(Invoice)
              const rsInvoice = await fetch('/api/invoice/send-invoice', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'x-api-key': key,
                },
                body: JSON.stringify({
                  toEmail: rsCustomerDtl?.data.email,
                  attId: rsCustomerDtl?.data.customerId,
                  createDate: rsCreateOrder?.data.createdAt,
                  fullname: `${rsCustomerDtl?.data.firstName} ${rsCustomerDtl?.data.lastName}`,
                  company: `${rsCustomerDtl?.data.company}`,
                  products: isProducts,
                  subtotal: getTotalCart(isProducts),
                  discountAmount: parseInt(discntAmount),
                  total: Math.floor(totalWithDiscount),
                }),
              }).then((res) => res.json());

              // @attendee
              for (let i = 0; i < isProducts?.length; i++) {
                const gtRslt = isProducts[i];
                const isIdProducts = gtRslt?.documentId;
                let groupName = getJoinString(gtRslt?.name);
                const isStock = gtRslt?.stock - gtRslt?.quantity;
                // @update-stock(Product)
                const rsUpdateData = await updateData(
                  `/api/products/${isIdProducts}`,
                  {
                    data: {
                      stock: isStock?.toString(),
                    },
                  }
                );
                // @update-stock(Coupon)
                const isLimitUsageCoupon = parseInt(setCoupon?.limitUsage) - 1;
                const isUsageCoupon = parseInt(setCoupon?.usage) + 1;
                const rsUpdateCouponData = await updateData(
                  `/api/coupons/${setCoupon?.documentId}`,
                  {
                    data: {
                      limitUsage: isLimitUsageCoupon?.toString(),
                      usage: isUsageCoupon?.toString(),
                    },
                  }
                );
                // @attendee(with qty)
                if (gtRslt?.quantity) {
                  if (gtRslt?.quantity > 15) {
                    break;
                  }
                  for (
                    let attndIdx = 0;
                    attndIdx < gtRslt.quantity;
                    attndIdx++
                  ) {
                    const attendeeData = {
                      attendeeId: sntzeFld(generateTicketAttendeeCode()),
                      firstName: sntzeFld(
                        data[`firstnameAttndee${attndIdx + 1}_${groupName}`]
                      ),
                      lastName: sntzeFld(
                        data[`lastnameAttndee${attndIdx + 1}_${groupName}`]
                      ),
                      email: sntzeFld(
                        data[
                          `emailAttndee${attndIdx + 1}_${groupName}`
                        ].toLowerCase()
                      ),
                      telephone: sntzeFld(
                        data[`phone${attndIdx + 1}_${groupName}`]
                      ),
                      telegramAccount: sntzeFld(
                        data[
                          `telegramAccountAttndee${attndIdx + 1}_${groupName}`
                        ]
                      ),
                      country: sntzeFld(
                        data[`countryAttndee${attndIdx + 1}_${groupName}`]
                      ),
                      company: sntzeFld(
                        data[`haveCompanyAttndee${attndIdx + 1}_${groupName}`]
                          ? data[`companyAttndee${attndIdx + 1}_${groupName}`]
                          : 'N/A'
                      ),
                      position: sntzeFld(
                        data[`haveCompanyAttndee${attndIdx + 1}_${groupName}`]
                          ? data[
                              `jobPositionAttndee${attndIdx + 1}_${groupName}`
                            ]
                          : '-'
                      ),
                      companyFocus: sntzeFld(
                        data[`haveCompanyAttndee${attndIdx + 1}_${groupName}`]
                          ? data[
                              `companyFocusAttndee${attndIdx + 1}_${groupName}`
                            ]
                          : '-'
                      ),
                      companySize: sntzeFld(
                        data[`haveCompanyAttndee${attndIdx + 1}_${groupName}`]
                          ? data[
                              `companySizeAttndee${attndIdx + 1}_${groupName}`
                            ]
                          : '-'
                      ),
                      whatTypeOfConnectionsAndNetworkingDoYouHopeToAchieveAtTheEvent:
                        sntzeFld(
                          data[
                            `whatTypeConnectionNetworkingAttndee${attndIdx + 1}_${groupName}`
                          ]
                        ),
                      whereDidYouHearAboutCoinfestAsia2024: sntzeFld(
                        data[
                          `didYouHearAboutAttndee${attndIdx + 1}_${groupName}`
                        ]
                      ),
                      customer: { connect: [{ documentId: setIdCustomer }] },
                      product: { connect: [{ documentId: isIdProducts }] },
                    };
                    // @hubspot(Attendee)
                    try {
                      const [rsAttendee, rsHbSptAttendee] = await Promise.all([
                        pushSubmitData('/api/attendees?populate=*', {
                          data: attendeeData,
                        }),
                        submitFormHbSpt(
                          setHbSptAttendeeData(
                            data,
                            attndIdx,
                            groupName,
                            isFormCheckouts?.isIpAddress?.ip
                          ),
                          hbSptAttndeeKey
                        ),
                      ]);
                      arrAttendees.push(rsAttendee?.data);
                      if (rsAttendee) {
                        // @send(Email)
                        const rsEmail = await fetch(
                          '/api/email/send-attendee-ticket',
                          {
                            method: 'POST',
                            headers: {
                              'Content-Type': 'application/json',
                              'x-api-key': key,
                            },
                            body: JSON.stringify({
                              toEmail: rsAttendee?.data.email,
                              docId: rsAttendee?.data.product.documentId,
                              attId: rsAttendee?.data.attendeeId,
                              fullname: `${rsAttendee?.data.firstName} ${rsAttendee?.data.lastName}`,
                              company: `${rsAttendee?.data.company}`,
                              productTickets: `${rsAttendee?.data.product?.name}`,
                            }),
                          }
                        ).then((res) => res.json());
                        // @debug(Email)
                        // if (rsEmail.message === 'Email sent successfully!') {
                        //   console.log('Email sent successfully!');
                        // } else {
                        //   console.log('Sorry, failed to send email!');
                        // }
                      }
                    } catch (error) {
                      console.error(
                        `[error] submitting attendee ${i + 1}:`,
                        error
                      );
                      break;
                    }
                  }
                }
              }

              // @send(Ticket Customer)
              if (isProducts?.length > 1 || isProducts[0]?.quantity > 1) {
                const rsCustomerEmail = await fetch(
                  '/api/customer/send-customer-ticket',
                  {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      'x-api-key': key,
                    },
                    body: JSON.stringify({
                      toEmail: rsCustomerDtl?.data.email,
                      attId: rsCustomerDtl?.data.customerId,
                      fullname: `${rsCustomerDtl?.data.firstName} ${rsCustomerDtl?.data.lastName}`,
                      attendee: arrAttendees,
                    }),
                  }
                ).then((res) => res.json());
              }

              // @last(Proccesing Point)
              const [rsHbSptCustomer, rsUpdateStatusOrder] = await Promise.all([
                submitFormHbSpt(
                  setHbSptCustomerData(data, isFormCheckouts?.isIpAddress?.ip),
                  hbSptKey
                ),
                updateData(`/api/orders/${rsCreateOrder?.data?.documentId}`, {
                  data: {
                    paymentStatus: 'Success',
                  },
                }),
              ]);
              setFormCheckouts({
                ...isFormCheckouts,
                message: 'Berhasil Terkirim',
              });
              reset();
              router.replace(
                `/checkout/order-received?process=${setIdOrderRecived}`
              );
            }
          }
        }
      } catch (error) {
        // console.error('[error] processing submission:', error);
      }
    }
  };

  return (
    <>
      {/* @head */}
      <HeadGraphSeo title={`Checkout`} otherPage={true} />

      {/* @navbar */}
      <NavbarTop nonStore={true} />

      {/* @main */}
      <Main className="relative pb-8 pt-[101px] sm:pb-12 sm:pt-[118px] lg:pt-[138px]">
        <Container>
          <form
            id="tktCA25Form_Checkout"
            className="relative grid-cols-1 gap-x-6 gap-y-12 supports-grid:grid sm:grid-cols-12 sm:gap-y-20"
            method="POST"
            onSubmit={handleSubmit(onSubmitForm)}
          >
            <div className="order-last col-span-full pr-0 xl:order-first xl:col-span-7 xl:pr-10">
              <Header media="xl" />
              <div className="block xl:hidden">
                {/* @notification */}
                <Notifications
                  icons={
                    <svg
                      className="mt-0.5 size-4 shrink-0 lg:size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 16h.01" />
                      <path d="M12 8v4" />
                      <path d="M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z" />
                    </svg>
                  }
                  label={`<p><strong>Please fill in the attendee's details with their actual information.</strong> Ticket transfers are not allowed once the purchase is finalized.</p>`}
                  type="info"
                />
              </div>
              {/* @biling(Details) */}
              <div className="mt-8 flex flex-col items-start rounded-2xl border border-solid border-gray-200 bg-gray-100 px-1.5 pb-1.5 pt-4 sm:px-2 sm:pb-2">
                <div className="mb-6 flex w-full flex-col items-start justify-start px-4 sm:mb-4">
                  <h2 className="text-xl font-medium capitalize">
                    {`Billing details`}
                  </h2>
                  <span className="mt-1 text-sm font-light text-gray-500">
                    {`Please complete your purchase by providing your billing and
                    payment details.`}
                  </span>
                </div>
                <div
                  className={`relative inline-flex w-full flex-col rounded-xl bg-white ${!isProducts?.length > 0 || isSubmitting ? 'pointer-events-none select-none' : 'pointer-events-auto select-auto'} px-3 py-3 sm:px-4 sm:py-4`}
                >
                  <div
                    className={`absolute inset-x-0 inset-y-0 bg-white/40 ${!isProducts?.length > 0 || isSubmitting ? 'pointer-events-none z-10 select-none opacity-100 backdrop-blur-[2px]' : 'pointer-events-auto -z-px select-auto opacity-0'}`}
                  ></div>
                  <BillingDetailCheckout
                    ipAddress={
                      isFormCheckouts?.isIpAddress?.country !== undefined
                        ? isFormCheckouts?.isIpAddress?.country.toLowerCase()
                        : 'id'
                    }
                    watch={haveCompanyAttendee}
                    register={register}
                    control={control}
                    setValue={setValue}
                    getValues={getValues}
                    errors={errors}
                    onValueChange={hndleBilling_Change}
                  />
                </div>
              </div>
              {/* @attendee(Detail) */}
              <div className={`mt-10 block w-full space-y-6`}>
                {isProducts?.map((gtRslt, i) => {
                  let groupName = getJoinString(gtRslt?.name);
                  return (
                    <div
                      className={twMerge(
                        `relative mt-8 flex flex-col items-end rounded-[14px] px-1.5 pb-1.5 transition-[height] duration-300 ease-in-out first:mt-0 sm:rounded-2xl sm:px-2 sm:pb-2`,
                        style[gtRslt?.documentId] || 'bg-primary'
                      )}
                      key={gtRslt?.documentId}
                    >
                      <div className="relative flex w-full flex-col">
                        <div
                          id={`ca25StoreProductSticky_${groupName}`}
                          className={twMerge(
                            `ca25StoreProductSticky sticky inset-x-0 top-[75px] mt-1 ${gtRslt?.quantity > 1 ? 'h-[78px] sm:h-[94px]' : 'h-[45px] sm:h-[59px]'} z-60 flex w-full flex-col items-start justify-between transition-[height] duration-300 ease-in-out sm:top-[88px]`,
                            style[gtRslt?.documentId] || 'bg-primary'
                          )}
                        >
                          <div className="ca25StoreProductSticky_Cards item-start flex w-full flex-col justify-start text-center">
                            <div className="absolute inset-x-0 -top-0.5 flex flex-col pb-5.5 pt-3 sm:-top-1 sm:pt-4.5">
                              <h2 className="ca25StoreProductSticky_TitleCards mb-2 w-full font-medium capitalize text-white">
                                {gtRslt?.name}
                              </h2>
                              {/* @tabs */}
                              {gtRslt?.quantity > 1 && (
                                <div className="ca25Tabs scrollbar-x mt-0.5 inline-flex flex-row gap-x-1.5 overflow-x-auto scrollbar-hide sm:mt-1">
                                  {Array.from({
                                    length: gtRslt?.quantity || 0,
                                  }).map((_, tabIdx) => (
                                    <button
                                      id={`ca25TabAttendee${tabIdx}_${groupName}`}
                                      className={`ca25TabAttendee ${
                                        currentStepAttendee[i] === tabIdx
                                          ? 'isActive'
                                          : 'nonActive'
                                      }`}
                                      key={tabIdx}
                                      onClick={(e) => {
                                        e.preventDefault();
                                        handleTabClick(i, tabIdx);
                                      }}
                                    >
                                      {`Attendee ${tabIdx + 1}`}
                                    </button>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <div
                          className={`relative inline-flex w-full flex-col ${gtRslt?.quantity > 1 ? 'rounded-t-lg sm:rounded-t-xl' : 'rounded-lg sm:rounded-xl'} bg-white px-3 py-3 sm:px-4 sm:py-4 ${isSubmitting ? 'pointer-events-none select-none' : 'pointer-events-auto select-auto'}`}
                        >
                          <div
                            className={`absolute inset-x-0 inset-y-0 bg-white/40 ${isSubmitting ? 'pointer-events-none z-10 select-none opacity-100 backdrop-blur-[2px]' : 'pointer-events-auto -z-px select-auto opacity-0'}`}
                          ></div>
                          {Array?.from({ length: gtRslt?.quantity || 0 }).map(
                            (_, attndIdx) => {
                              const haveCompanyAttendeeGroup = watch(
                                `haveCompanyAttndee${attndIdx + 1}_${getJoinString(gtRslt?.name)}`
                              );
                              const isFirstToggleTrue =
                                isFormCheckouts?.firstToggleCompany &&
                                isFormCheckouts?.firstToggleCompany?.product ===
                                  i &&
                                isFormCheckouts?.firstToggleCompany
                                  ?.attendee === attndIdx;
                              if (attndIdx === currentStepAttendee[i]) {
                                return (
                                  <div
                                    className="flex flex-col space-y-4"
                                    key={attndIdx}
                                  >
                                    <>
                                      <div className="flex w-full flex-col items-start justify-between lg:flex-row">
                                        <div className="flex w-full max-w-[420px] flex-col items-start justify-start">
                                          <h2 className="text-xl font-medium capitalize">
                                            {`Attendees ${attndIdx + 1}`}{' '}
                                          </h2>
                                          <span className="mt-1 text-sm font-light text-gray-500">
                                            {`Please complete the form with your attendee details.`}
                                          </span>
                                        </div>
                                        {isBillingFilled && attndIdx <= 0 && (
                                          <CopyBillingAttendeeBtn
                                            group={groupName}
                                            onEventClick={
                                              hndleCopy_BillingToAttendee
                                            }
                                          />
                                        )}
                                        {attndIdx + 1 > 1 && (
                                          <CopyOtherDetailBtn
                                            items={{
                                              firstItems: getJoinString(
                                                isProducts[0]?.name
                                              ),
                                              attendee: attndIdx + 1,
                                              group: groupName,
                                            }}
                                            onEventClick={hndleCopyOtherDetail}
                                          />
                                        )}
                                      </div>
                                      <div className="mb-5 mt-4 flex w-full border-t border-dashed border-gray-200"></div>
                                      <AttendeeDetailCheckouts
                                        watch={haveCompanyAttendeeGroup}
                                        forms={{
                                          ipAddress:
                                            isFormCheckouts?.isIpAddress
                                              ?.country !== undefined
                                              ? isFormCheckouts?.isIpAddress?.country.toLowerCase()
                                              : 'id',
                                          fieldForm: isFormCheckouts?.fields,
                                          country: isFormCheckouts?.isCountry,
                                        }}
                                        items={{
                                          isToggle: isStepToggledCompany ?? [],
                                          product: i,
                                          productItems: attndIdx,
                                          attendee: attndIdx + 1,
                                          group: groupName,
                                        }}
                                        register={register}
                                        control={control}
                                        setValue={setValue}
                                        getValues={getValues}
                                        errors={errors}
                                        onChangeToggle={handleToggleChange}
                                      >
                                        {getValues(
                                          `haveCompanyAttndee${attndIdx + 1}_${groupName}`
                                        ) === true && !isFirstToggleTrue ? (
                                          <div
                                            className={`mr-0 mt-3 sm:mt-0 ${!isFirstToggleTrue ? 'opacity-100' : 'opacity-0'} transition-[opacity] duration-300`}
                                          >
                                            <button
                                              id="ca25Btn_CopyCompanyDetailCheckout"
                                              type="button"
                                              aria-label="Button for Copy Company Detail(Checkouts)"
                                              aria-labelledby="Button for Copy Company Detail(Checkouts)"
                                              onClick={(e) => {
                                                e.preventDefault();
                                                hndleCopyCompany(
                                                  [
                                                    `#tktCAForm_JobPositionAttndee${attndIdx + 1}_${groupName}Checkout`,
                                                    `#tktCAForm_CompanyFocusAttndee${attndIdx + 1}_${groupName}Checkout`,
                                                    `#tktCAForm_CompanySizeAttndee${attndIdx + 1}_${groupName}Checkout`,
                                                  ],
                                                  {
                                                    attendee: attndIdx + 1,
                                                    group: groupName,
                                                  },
                                                  {
                                                    activeGroup: getJoinString(
                                                      isProducts[
                                                        isFormCheckouts
                                                          ?.firstToggleCompany
                                                          ?.product
                                                      ]?.name
                                                    ),
                                                    activeToggle:
                                                      isFormCheckouts
                                                        ?.firstToggleCompany
                                                        ?.attendee + 1,
                                                  }
                                                );
                                              }}
                                              className="text-black-900"
                                            >
                                              <Badge
                                                label="Same as Company Details"
                                                type="light"
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
                                      </AttendeeDetailCheckouts>
                                    </>
                                  </div>
                                );
                              }
                              return null;
                            }
                          )}
                        </div>
                      </div>
                      {gtRslt?.quantity > 1 && (
                        <div
                          className={`flex w-full items-start justify-end rounded-b-lg bg-white pb-3 pr-3 pt-4 sm:rounded-b-xl sm:pb-4 sm:pr-4 sm:pt-5`}
                        >
                          <div
                            className={`${currentStepAttendee[i] + 2 > 1 ? 'inline-flex' : 'hidden'} flex-row items-center gap-x-2`}
                          >
                            <button
                              id={`ca25BtnStepForm_Prev${groupName}Checkout`}
                              className={twMerge(
                                `inline-flex items-center gap-x-1 rounded-lg border border-transparent bg-white py-2 pl-2 pr-3 text-sm font-normal text-white transition duration-300 ease-in-out focus:outline-none disabled:pointer-events-none disabled:opacity-60`,
                                style[gtRslt?.documentId] || 'bg-primary'
                              )}
                              type="button"
                              aria-label={`Coinfest Asia 2025 Button for Next Step Form ${groupName}`}
                              disabled={currentStepAttendee[i] === 0}
                              onClick={(e) => {
                                e.preventDefault();
                                handlePrevAttendee(i);
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
                              id={`ca25BtnStepForm_Next${groupName}Checkout`}
                              className={twMerge(
                                `inline-flex items-center gap-x-1 rounded-lg border border-transparent bg-white py-2 pl-3 pr-2 text-sm font-normal text-white transition duration-300 ease-in-out focus:outline-none disabled:pointer-events-none disabled:opacity-60`,
                                style[gtRslt?.documentId] || 'bg-primary'
                              )}
                              type="button"
                              aria-label={`Coinfest Asia 2025 Button for Next Step Form ${groupName}`}
                              disabled={
                                currentStepAttendee[i] === gtRslt?.quantity - 1
                              }
                              onClick={(e) => {
                                e.preventDefault();
                                handleNextAttendee(i, gtRslt?.quantity);
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
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* @submit(Mobile) */}
              <div
                className={`mt-10 block w-full rounded-2xl border border-gray-200 bg-white px-4 py-4 ${!isProducts?.length > 0 || isSubmitting ? 'pointer-events-none select-none' : 'pointer-events-auto select-auto'} sm:px-5 sm:py-5 xl:hidden`}
              >
                <BoardSubmitCheckout register={register} errors={errors} />

                {/* @submit(Form) */}
                <button
                  id="tktCA25Form_SubmitMobileCheckout"
                  className={`pointer-events-auto inline-flex w-full cursor-pointer flex-row items-center justify-center rounded-xl bg-black-900 px-8 py-5 text-sm font-normal capitalize leading-inherit text-white disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-black-900 sm:text-base`}
                  type="submit"
                  role="button"
                  aria-label="Coinfest Asia 2025 Submit Mobile Checkout"
                  disabled={!isProducts?.length > 0 || isSubmitting}
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
                    'Proceed To Payment'
                  )}
                </button>
              </div>
            </div>

            {/* @order-summary */}
            <div className="col-span-full pl-0 xl:col-span-5 xl:pl-6">
              <header
                className={`mb-5 block w-full rounded-xl bg-primary px-3 py-4 xl:hidden`}
              >
                <div className="mb-0 block w-full">
                  <h1 className="text-xl font-semibold text-white sm:text-3xl">
                    Checkout
                  </h1>
                  <div className="mt-1.5 block">
                    <Breadcrumb
                      theme="light"
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
              </header>

              <OrderDetailCheckouts
                products={isProducts}
                coupons={isFormCheckouts?.isCoupons}
                stepForm={currentStepAttendee}
                register={register}
                setValue={setValue}
                getValues={getValues}
                errors={errors}
              >
                <div
                  className={`hidden w-full rounded-2xl border border-gray-200 bg-white ${!isProducts?.length > 0 || isSubmitting ? 'pointer-events-none select-none' : 'pointer-events-auto select-auto'} px-4 py-4 sm:px-5 sm:py-5 xl:block`}
                >
                  <BoardSubmitCheckout register={register} errors={errors} />
                  {/* @submit(Form) */}
                  <button
                    id="tktCA25Form_SubmitDesktopCheckout"
                    className={`pointer-events-auto inline-flex w-full cursor-pointer flex-row items-center justify-center rounded-xl bg-black-900 px-8 py-5 text-base font-normal capitalize leading-inherit text-white disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-black-900`}
                    type="submit"
                    role="button"
                    aria-label="Coinfest Asia 2025 Submit Desktop Checkout"
                    disabled={!isProducts?.length > 0 || isSubmitting}
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
                      'Proceed To Payment'
                    )}
                  </button>
                </div>
              </OrderDetailCheckouts>
            </div>
          </form>
        </Container>
      </Main>

      {/* @footer */}
      <Footer nonStore={true} />
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
    const [rsIpAddress, rsCountry, rsCoupons, rsCheckoutHbSpt] =
      await Promise.all([
        getFetchUrl(
          `https://ipinfo.io/json?token=${serverRuntimeConfig.ipAddress_token}`
        ),
        getFetchUrl(`https://restcountries.com/v3.1/all?fields=name,flags`),
        getFetch(`/api/coupons?filters[isPublic][$eq]=true&populate=*`),
        getFecthHbSpt(`/forms/v2/forms/${serverRuntimeConfig.hbSptCheckout}`),
      ]);

    const sortedCountries = rsCountry.sort((a, b) =>
      a.name.common.localeCompare(b.name.common)
    );

    return {
      props: {
        ipAddress: rsIpAddress || [],
        country: sortedCountries || [],
        coupons: rsCoupons || [],
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
