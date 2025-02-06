import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { twMerge } from 'tailwind-merge';
import QRCode from 'qrcode';
import { Toaster } from 'sonner';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import getConfig from 'next/config';
import dynamic from 'next/dynamic';

// # @get .config
const { serverRuntimeConfig } = getConfig();

// @redux
import { useSelector, useDispatch } from 'react-redux';
import { order } from '@reduxState/slices';

// @lib/controller & helper
import {
  getFetch,
  getFetchUrl,
  updateData,
  pushSubmitData,
} from '@lib/controller/API';
import { getFecthHbSpt, submitFormHbSpt } from '@lib/controller/HubSpot';
import {
  smoothLeftScroll,
  getJoinString,
  getCombineMerged,
  encodeData,
  convertQrCodeToBlob,
} from '@lib/helper/Configuration';
import {
  getTotalCart,
  calculateDiscount,
  calculateDiscountCheckout,
  setBillingData,
  setHbSptCustomerData,
  setHbSptAttendeeData,
  setAttendeeData,
  getCreateOrder,
} from '@lib/helper/CartContext';

// @components
import HeadGraphSeo from '@components/Head';
import Main from '@components/Main';
import Container from '@components/Container';
import ToastAlerts from '@components/UI/Alerts/ToastAlert';
import Breadcrumb from '@components/UI/Breadcrumb';
import Notifications from '@components/UI/Alerts/Notifications';
import Badge from '@components/UI/Badge';
import OrderProcessModal from '@components/UI/Modal/OrderProcessModal';
const CopyOtherDetailBtn = dynamic(
  () => import('@components/UI/Button/CopyOtherDetailBtn'),
  {
    loading: () => '',
    ssr: false,
  }
);

// @layouts
import LayoutDefaults from '@layouts/Layouts';
import Header from '@layouts/Checkouts/Header';
import AttendeeDetailCheckouts from '@layouts/Checkouts/Card/AttendeeDetailCheckouts';
import OrderDetailCheckouts from '@layouts/Checkouts//Card/OrderDetailCheckouts';
import BoardSubmitCheckout from '@layouts/Checkouts/Card/BoardSubmitCheckout';

const Checkout = ({ ipAddress, country, coupons, formCheckout }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    data: isCart,
    coupon: isCoupon,
    order: isOrder,
    orderSession: isOrderPayment_Session,
  } = useSelector((state) => state.cart);
  const [isFormCheckouts, setFormCheckouts] = useState({
    isIpAddress: ipAddress,
    isFields: [],
    fields: formCheckout,
    isCountry: country,
    isToggleCompany: false,
    firstToggleCompany: {
      product: 0,
      attendee: 0,
    },
    isSubmited: false,
  });
  const [isStore, setStore] = useState({
    products: [],
    isCoupons: coupons,
    totalQty: 0,
    discntAmount: 0,
    totalOrder: 0,
    isPaymentProcess: false,
    isOrderProcess: false,
  });
  const [currentStepAttendee, setCurrentStepAttendee] = useState(
    isCart?.map(() => 0)
  );
  const [isStepToggledCompany, setIsStepToggledCompany] = useState(
    isCart?.map((gtRslt) =>
      Array.from({ length: gtRslt?.quantity || 0 }, () => false)
    )
  );
  // @card(theme)
  const style = {
    rc33x0dgm6tm707jghffuip4: 'bg-vip45',
  };

  // @btn-step(Attendee)
  const handleTabClick = (e, productIdx, tabIdx) => {
    const btnAttendeeTabs = e?.currentTarget;
    const containerTabs = btnAttendeeTabs?.parentElement;
    if (btnAttendeeTabs && containerTabs) {
      setCurrentStepAttendee((prev) =>
        prev?.map((attendee, idx) => (idx === productIdx ? tabIdx : attendee))
      );
      const targetScroll =
        btnAttendeeTabs.offsetLeft -
        (containerTabs.clientWidth - btnAttendeeTabs?.clientWidth) / 2;
      smoothLeftScroll(containerTabs, targetScroll);
    }
  };
  // @btn-toggle(Attendee)
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
  const findFirstTrue = () => {
    for (
      let productIdx = 0;
      productIdx < isStepToggledCompany?.length;
      productIdx++
    ) {
      const attendeeIdx = isStepToggledCompany[productIdx]?.findIndex(
        (toggle) => toggle === true
      );
      if (attendeeIdx !== -1) {
        return { product: productIdx, attendee: attendeeIdx, status: true };
      }
    }
    return null;
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
  }, [isStepToggledCompany]);

  // @handle(Button Prev & Next)
  const handlePrevAttendee = async (prdctIdx) => {
    setCurrentStepAttendee((prev) =>
      prev?.map((a, idx) => (idx === prdctIdx ? Math.max(a - 1, 0) : a))
    );
  };
  const handleNextAttendee = async (prdctIdx, attnde, maxQty) => {
    setCurrentStepAttendee((prev) =>
      prev?.map((a, idx) =>
        idx === prdctIdx ? Math.min(a + 1, maxQty - 1) : a
      )
    );
  };

  // @hook(Preline)
  const handleIntzPreline = useCallback(async () => {
    await import('preline/preline');
    if (window.HSStaticMethods) {
      window.HSStaticMethods.autoInit();
    }
  }, [isCart]);
  // @hook(store)
  const hndleHookProducts = useCallback(async () => {
    try {
      const allProducts = await Promise.all(
        isCart?.map(async (data) => {
          const rsHook = await fetch('/api/data/products?sv=coinfestasia', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: encodeData(data?.id_product) }),
          }).then((res) => res.json());
          return {
            id: rsHook?.id,
            documentId: rsHook?.documentId,
            productId: rsHook?.productId,
            name: rsHook?.name,
            price: rsHook?.price,
            priceSale: rsHook?.priceSale,
            stock: parseInt(rsHook?.stock),
          };
        })
      );
      // @hook(combine merged)
      if (allProducts) {
        const setMerged = getCombineMerged(allProducts.slice(0, 3), isCart);
        if (setMerged) {
          setStore((prev) => ({ ...prev, products: setMerged }));
        }
      }
    } catch (err) {
      return;
    }
  }, [isCart]);
  useEffect(() => {
    hndleHookProducts();
  }, [isCart]);
  // @hook(Calculate Total Order)
  const calculateTotalOrder = useCallback(
    async (data) => {
      const isTotalCart = getTotalCart(data);
      const getCoupon = await fetch('/api/data/coupons?sv=coinfestasia', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: encodeData(isCoupon) }),
      }).then((res) => res.json());
      const setCoupon = getCoupon !== null ? getCoupon : null;

      const checkCoupon =
        setCoupon !== null && setCoupon !== 'null' && setCoupon !== undefined;
      if (checkCoupon) {
        const includedProductIds = setCoupon?.includedProducts?.map(
          (product) => product?.documentId
        );
        const validProducts = data?.filter((product) =>
          includedProductIds?.includes(product?.documentId)
        );
        const setPrice = validProducts[0]?.priceSale ?? validProducts[0]?.price;

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
        setStore((prev) => ({
          ...prev,
          discntAmount: totalDiscount,
          totalOrder: totalAfterDiscount,
        }));
      } else {
        const setTax_Rate = 0.11;
        const taxAmount = isTotalCart * setTax_Rate;
        const totalWithTax = isTotalCart + taxAmount;

        setStore((prev) => ({
          ...prev,
          discntAmount: 0,
          totalOrder: totalWithTax,
        }));
      }
    },
    [isCart, isCoupon]
  );
  // @hook(Product)
  useEffect(() => {
    calculateTotalOrder(isStore?.products);
  }, [isStore?.products, isCoupon]);
  useEffect(() => {
    handleIntzPreline();
    // @hook-toogle(company)
    setIsStepToggledCompany((prev) =>
      isCart?.map((gtRslt, productIdx) => {
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
  }, [isStore?.products]);
  useEffect(() => {
    handleIntzPreline();
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
    defaultValues: {},
  });

  // @handle-copy(other detail attendee)
  const hndleCopyOtherDetail = (
    el = [],
    items = {
      firstItems: null,
      attendee: 1,
      group: null,
    }
  ) => {
    const slctrs = [
      `#ca25Form_CountryAttndee${items?.attendee}_${items?.group}CheckoutToggleTags`,
      `#ca25Form_WhatTypeOfConnectionsAttndee${items?.attendee}_${items?.group}CheckoutToggleTags`,
      `#ca25Form_DidYouHearAboutAttndee${items?.attendee}_${items?.group}CheckoutToggleTags`,
    ];
    const addSelectedClass = (slctr) => {
      const elmnt = document.querySelector(slctr);
      if (elmnt && !elmnt.classList.contains('selected')) {
        elmnt?.classList.add('selected');
      }
    };
    slctrs?.forEach(addSelectedClass);

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
    setValue(
      `dialcode-phoneAttende${items?.attendee}_${items?.group}`,
      getValues(`phoneAttndee1_${items?.firstItems}`),
      { shouldValidate: true }
    );
    setValue(
      `phoneAttndee${items?.attendee}_${items?.group}`,
      getValues(`phoneAttndee1_${items?.firstItems}`),
      { shouldValidate: true }
    );
    if (el.length > 0) {
      el?.forEach((id, i) => {
        const elmntInstance = window.HSSelect.getInstance(id);
        if (elmntInstance) {
          elmntInstance?.setValue(vals[i]);
          setValue(reg[i], vals[i], { shouldValidate: true });
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
      `companyFocusAttndee${items?.attendee}_${items?.group}`,
      `companySizeAttndee${items?.attendee}_${items?.group}`,
    ];
    const vals = [
      getValues(
        `companyFocusAttndee${values?.activeToggle}_${values?.activeGroup}`
      ),
      getValues(
        `companySizeAttndee${values?.activeToggle}_${values?.activeGroup}`
      ),
    ];
    setValue(
      `companyAttndee${items?.attendee}_${items?.group}`,
      getValues(`companyAttndee${values?.activeToggle}_${values?.activeGroup}`),
      { shouldValidate: true }
    );
    setValue(
      `websiteUrlAttndee${items?.attendee}_${items?.group}`,
      getValues(
        `websiteUrlAttndee${values?.activeToggle}_${values?.activeGroup}`
      ),
      { shouldValidate: true }
    );
    if (el.length > 0) {
      el?.forEach((id, i) => {
        const elmntInstance = window.HSSelect.getInstance(id);
        if (elmntInstance) {
          elmntInstance.setValue(vals[i]);
          setValue(reg[i], vals[i], { shouldValidate: true });
        } else {
          // console.warn(`[Warning] HSSelect instance not found for id: ${id}`);
        }
      });
    }
  };

  // @hash-validation(attendees)
  function hashValidateAttendees(groupedData) {
    const products = groupedData?.products;
    if (!products || Object.keys(products)?.length === 0) {
      return false;
    }
    const invalidAttendees = {};
    let isDataFound = false;
    Object.entries(products)?.forEach(([productName, attendees]) => {
      if (attendees && attendees.length > 0) {
        isDataFound = true;
        attendees.forEach((attendee, index) => {
          const isValid = validateFields(attendee, productName, index + 1);
          if (!isValid) {
            if (!invalidAttendees[productName]) {
              invalidAttendees[productName] = [];
            }
            invalidAttendees[productName].push(`${index + 1}`);
          }
        });
      }
    });
    if (!isDataFound) {
      return false;
    }
    let hasInvalid = false;
    Object.entries(invalidAttendees)?.forEach(([productName, attendees]) => {
      if (attendees?.length > 0) {
        hasInvalid = true;
        toast.custom(
          (t) => (
            <ToastAlerts
              id={t}
              position="top-[0px] inset-x-2.5 sm:inset-x-3 bottom-auto"
              type="error"
              visible={true}
              label={`Attendees <strong>${attendees.join(', ')}</strong> in <strong>${productName} Tickets</strong>,<br> Still have incomplete information.`}
            />
          ),
          { unstyled: true, duration: 123000 }
        );
      }
    });
    if (hasInvalid) {
      return false;
    }
    return true;
  }
  function validateFields(att, products, attIdx) {
    const haveCompanyField = `haveCompanyAttndee${attIdx}_${products}Tickets`;
    const hasCompany = att[haveCompanyField] === true;
    const requiredFields = hasCompany
      ? [
          `firstname`,
          `lastname`,
          `email`,
          `country`,
          `whatTypeConnectionNetworking`,
          `didYouHearAbout`,
          `phone`,
          `websiteUrl`,
          `company`,
          `jobPosition`,
          `companyFocus`,
          `companySize`,
        ]
      : [
          `firstname`,
          `lastname`,
          `email`,
          `country`,
          `whatTypeConnectionNetworking`,
          `didYouHearAbout`,
          `phone`,
        ];
    let rsAllFields = true;
    const missingFields = [];
    for (const field of requiredFields) {
      const fieldName = `${field}Attndee${attIdx}_${products}Tickets`;
      if (!att[fieldName] || att[fieldName].trim() === '') {
        missingFields.push(field);
        rsAllFields = false;
      }
    }
    if (missingFields.length > 0) {
      const errorMessage = `Fields (${missingFields.join(',')}) are required for Attendee ${attIdx} at the ${products} Tickets!`;
      // toast.error(errorMessage, {
      //   duration: 6000,
      //   style: { maxWidth: '500px', fontSize: '0.875rem' },
      // });
    }
    return rsAllFields;
  }

  // @validation(error form)
  const onErrorSubmit = async (errors, e) => {
    const data = getValues();
    const groupedData = {
      personalData: {},
      products: {},
    };
    const companyKeys = [
      'websiteUrlAttndee',
      'companyAttndee',
      'jobPositionAttndee',
      'companyFocusAttndee',
      'companySizeAttndee',
    ];
    const excludeKeys = [...companyKeys];
    for (let key in data) {
      if (key.includes('Attndee')) {
        const matches = key.match(/Attndee(\d+)_(\w+)Tickets/);
        if (!matches) {
          // console.warn(`Key ${key} tidak cocok dengan pola yang diharapkan.`);
          continue;
        }
        const attendeeIndex = matches[1];
        const productName = matches[2];
        // @skip(telegramAccount{attendee}_{product})
        if (
          key.includes(
            `telegramAccountAttndee${attendeeIndex}_${productName}Tickets`
          )
        ) {
          continue;
        }
        // @find(product)
        const product = isStore?.products.find(
          (p) =>
            p.name.replace(/\s+/g, '').replace(/Tickets$/i, '') === productName
        );
        if (!product) {
          // console.warn(`${productName} Products not found!.`);
          continue;
        }
        const cleanedProductName = product.name
          .replace(/\s*Tickets$/i, '')
          .replace(/\s+/g, '');
        if (!groupedData.products[cleanedProductName]) {
          groupedData.products[cleanedProductName] = [];
        }
        if (!groupedData.products[cleanedProductName][attendeeIndex - 1]) {
          groupedData.products[cleanedProductName][attendeeIndex - 1] = {};
        }
        const attendeeData =
          groupedData.products[cleanedProductName][attendeeIndex - 1];
        if (
          key.includes(
            `haveCompanyAttndee${attendeeIndex}_${productName}Tickets`
          ) &&
          data[key] === false
        ) {
          // @remove-company
          companyKeys.forEach((companyKey) => {
            delete attendeeData[`${companyKey}${attendeeIndex}`];
          });
        }

        // @excludeKeys
        const isExcludedKey = excludeKeys.some((excludeKey) =>
          key.startsWith(excludeKey)
        );
        // @skip(telegramAccountAttndee or haveCompany)
        if (
          isExcludedKey &&
          !data[`haveCompanyAttndee${attendeeIndex}_${productName}Tickets`]
        ) {
          continue;
        }
        // @original-data
        attendeeData[key] = data[key];
      } else {
        groupedData.personalData[key] = data[key];
      }
    }

    // @validasi-attendee(products)
    isStore?.products.forEach((product) => {
      const cleanedProductName = product.name.replace(/\s*Tickets$/i, '');
      const attendees = groupedData.products[cleanedProductName] || [];
      if (attendees.length > product?.quantity) {
        groupedData.products[cleanedProductName] = attendees.slice(
          0,
          product?.quantity
        );
      }
    });
    // console.log('Grouped Data:', groupedData);
    hashValidateAttendees(groupedData);
  };

  // @submit(Checkout)
  const onSubmitForm = async (data) => {
    const isFirstItems = getJoinString(isStore?.products[0]?.name);
    if (isValid === true && isCart) {
      if (Math.abs(isStore?.totalOrder) > 1e-10) {
        setStore((prev) => ({ ...prev, isPaymentProcess: true }));
      } else if (Math.abs(isStore?.totalOrder) < 1e-10) {
        setStore((prev) => ({ ...prev, isOrderProcess: true }));
      }
      setFormCheckouts((prev) => ({
        ...prev,
        isFields: data,
        isSubmited: true,
      }));
      // @hubspot(customer & attendee)
      const hbSptKey = '96572ab0-5958-4cc4-8357-9c65de42cab6';
      const hbSptAttndeeKey = 'c9347ef6-664d-4b7a-892b-a1cabaa2bc30';

      try {
        // @customer
        const rsCustomer = await pushSubmitData(
          '/api/customers',
          setBillingData(data, isFirstItems)
        );
        const setIdCustomer = rsCustomer?.data.documentId;

        // @discount
        const [getCoupon, rsCustomerDtl] = await Promise.all([
          fetch('/api/data/coupons?sv=coinfestasia', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: encodeData(isCoupon) }),
          }).then((res) => res.json()),
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

        if (rsCustomerDtl) {
          // @get(key)
          const { key } = await fetch('/api/env/note', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
          }).then((res) => res.json());
          // @coupon
          const setIsCoupon = getCoupon !== null ? getCoupon : null;

          const checkCoupon =
            setIsCoupon !== null &&
            setIsCoupon !== 'null' &&
            setIsCoupon !== undefined;
          // @create(order)
          const createOrder = getCreateOrder(
            Math.floor(isStore?.totalOrder),
            setIdCustomer,
            isStore?.products,
            setIsCoupon
          );
          const rsCreateOrder = await pushSubmitData(
            '/api/orders?populate[customer][fields]=*&populate[products][fields][0]=name&populate[products][fields][1]=price&populate[products][fields][2]=priceSale&populate[coupons][fields][0]=couponCode&populate[coupons][fields][1]=amount',
            createOrder
          );
          const setIdOrderRecived = rsCreateOrder?.data.documentId;
          const arrAttendees = [];

          for (let i = 0; i < isStore?.products?.length; i++) {
            const gtRslt = isStore?.products[i];
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
            // @attendee(with qty)
            if (gtRslt?.quantity) {
              if (gtRslt?.quantity > 15) {
                break;
              }
              try {
                for (
                  let attndIdx = 0;
                  attndIdx < gtRslt?.quantity;
                  attndIdx++
                ) {
                  const rsAttendee = await pushSubmitData(
                    '/api/attendees?populate=*',
                    {
                      data: setAttendeeData(
                        data,
                        attndIdx + 1,
                        groupName,
                        setIdCustomer,
                        isIdProducts
                      ),
                    }
                  );
                  if (rsAttendee) {
                    const isFullname = `${rsAttendee?.data.firstName} ${rsAttendee?.data.lastName}`;
                    const tickets =
                      rsAttendee?.data.product.documentId ===
                        'sn4ujm0d1ebbc8lme1ihzsa9' ||
                      rsAttendee?.data.product.documentId ===
                        'g1ukadil4n4a3r0ndly7jl42'
                        ? `Festival Tickets`
                        : `${rsAttendee?.data.product?.name}`;

                    arrAttendees.push({
                      attendee: rsAttendee?.data,
                      // blobQrCode: rsBlobQrCode,
                      fullname: isFullname,
                      ticketProducts: tickets,
                      group: groupName,
                    });
                  }
                }
              } catch (error) {
                // console.error(
                //   `[error] submitting attendee ${i + 1}:`,
                //   error
                // );
                break;
              }
            }
          }

          // @processing(payment)
          if (rsCreateOrder && Math.abs(isStore?.totalOrder) > 1e-10) {
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
                amount: isStore?.totalOrder,
                payerEmail: rsCreateOrder?.data?.customer?.email,
                fullname: `${rsCreateOrder?.data?.customer?.firstName} ${rsCreateOrder?.data?.customer?.lastName}`,
                phone: rsCreateOrder?.data?.customer?.phone,
                order: setIdOrderRecived,
              }),
            }).then((res) => res.json());
            if (rsPayment?.data?.invoice_url) {
              dispatch(order(setIdOrderRecived));
              // dispatch(orderSession(rsPayment?.data?.id));
              // @update(order)
              const updateStatusOrder = await updateData(
                `/api/orders/${rsCreateOrder?.data?.documentId}`,
                {
                  data: {
                    order_session: rsPayment?.data?.id,
                  },
                }
              );
              reset();
              router.replace(rsPayment?.data?.invoice_url);
            } else {
              // console.error('Failed to get invoice URL');
              return;
            }
          }

          // @processing(order)
          if (rsCreateOrder && Math.abs(isStore?.totalOrder) < 1e-10) {
            // @update(order)
            const updateStatusOrder = await updateData(
              `/api/orders/${rsCreateOrder?.data?.documentId}?populate[customer][fields]=*&populate[products][fields][0]=name&populate[products][fields][1]=price&populate[products][fields][2]=priceSale&populate[coupons][fields][0]=couponCode&populate[coupons][fields][1]=amount`,
              {
                data: {
                  paymentStatus: 'Success',
                  order_session: 'free',
                },
              }
            );
            // @save-to(hubspot)
            const [updateStatusCustomer, rsHbSptCustomer] = await Promise.all([
              updateData(
                `/api/customers/${updateStatusOrder?.data?.customer?.documentId}`,
                {
                  data: {
                    isApproved: true,
                  },
                }
              ),
              submitFormHbSpt(
                setHbSptCustomerData(
                  updateStatusOrder?.data?.customer,
                  isFormCheckouts?.isIpAddress?.ip
                ),
                hbSptKey
              ),
            ]);
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
            // @send(invoice)
            const rsInvoice = await fetch('/api/invoice/send-invoice', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'x-api-key': key,
              },
              body: JSON.stringify({
                toEmail: updateStatusOrder?.data?.customer?.email,
                attId: updateStatusOrder?.data?.customer?.customerId,
                createDate: updateStatusOrder?.data.createdAt,
                fullname: `${updateStatusOrder?.data?.customer?.firstName} ${updateStatusOrder?.data?.customer?.lastName}`,
                company: `${updateStatusOrder?.data?.customer?.company}`,
                products: isStore?.products,
                coupon:
                  updateStatusOrder?.data.coupons.length > 0
                    ? updateStatusOrder?.data?.coupons[0]
                    : null,
              }),
            }).then((rs) => rs?.json());

            // @processed-attendee
            const procssdEmails = new Set();
            const arrBlobAttendees = [];

            for (let i = 0; i < arrAttendees?.length; i++) {
              const gtRslt = arrAttendees[i];

              const rsQrCodeUrl = await QRCode.toDataURL(
                `${gtRslt?.attendee?.attendeeId}`,
                {
                  width: 256,
                }
              );
              const rsBlobQrCode = await convertQrCodeToBlob(
                rsQrCodeUrl,
                gtRslt?.attendee?.id,
                gtRslt?.attendee?.attendeeId,
                gtRslt?.attendee?.documentId,
                gtRslt?.fullname
              );
              // @save-to(hubspot) & @convert-url(to blob)
              const [updateStatusAttendee, rsHbSptAttendee] = await Promise.all(
                [
                  updateData(`/api/attendees/${gtRslt?.attendee?.documentId}`, {
                    data: {
                      isApproved: true,
                    },
                  }),
                  submitFormHbSpt(
                    setHbSptAttendeeData(
                      gtRslt?.attendee,
                      isFormCheckouts?.isIpAddress?.ip
                    ),
                    hbSptAttndeeKey
                  ),
                ]
              );
              if (!procssdEmails?.has(gtRslt?.attendee?.email)) {
                procssdEmails.add(gtRslt?.attendee?.email);
                // @send(email)
                const rsEmail = await fetch('/api/email/send-attendee-ticket', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': key,
                  },
                  body: JSON.stringify({
                    toEmail: gtRslt?.attendee?.email,
                    qrCode: rsBlobQrCode?.url,
                    docId: gtRslt?.attendee?.product.documentId,
                    attId: gtRslt?.attendee?.attendeeId,
                    fullname: gtRslt?.fullname,
                    company: gtRslt?.attendee?.company,
                    productTickets: gtRslt?.ticketProducts,
                  }),
                }).then((res) => res.json());
              }
              arrBlobAttendees.push({
                blobQrCodeUrl: rsBlobQrCode?.url,
              });
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
                    toEmail: updateStatusOrder?.data?.customer?.email,
                    attId: updateStatusOrder?.data?.customer?.customerId,
                    fullname: `${updateStatusOrder?.data?.customer?.firstName} ${updateStatusOrder?.data?.customer?.lastName}`,
                    attendee: arrAttendees,
                    blobQrCode: arrBlobAttendees,
                  }),
                }
              ).then((res) => res.json());
            }
            // @last(proccesing)
            reset();
            router.replace(
              `/checkout/order-received?process=${setIdOrderRecived}`
            );
          }
        }
      } catch (error) {
        // console.error('[error] processing submission:', error);
      }
    }
  };
  const isDisabled =
    !isStore?.products?.length > 0 || isFormCheckouts?.isSubmited === true;

  return (
    <>
      {/* @head */}
      <HeadGraphSeo title={`Checkout`} otherPage={true} />

      {/* @main */}
      <Main className="relative pb-19 pt-6 sm:pb-19 sm:pt-8 lg:pt-10">
        <Container className={'sm:px-auto px-0'}>
          <form
            id="ca25Form_Checkout"
            className="relative grid-cols-1 gap-x-6 gap-y-12 supports-grid:grid sm:grid-cols-12 sm:gap-y-14 lg:gap-y-20"
            method="POST"
            onSubmit={handleSubmit(onSubmitForm, onErrorSubmit)}
          >
            <div className="order-last col-span-full px-2.5 sm:px-0 xl:order-first xl:col-span-7 xl:pr-10">
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
                  label={`<p><strong>Attendee's details must match government-issued ID.</strong></p>`}
                  type="info"
                />
              </div>
              {/* @attendee(Detail) */}
              <div
                className={`relative mt-6 block w-full space-y-6 ${isDisabled ? '!pointer-events-none !select-none' : '!pointer-events-auto !select-auto'}`}
              >
                {isDisabled ? (
                  <div
                    className={`absolute inset-x-0 inset-y-0 bg-white/60 backdrop-blur-[2px] ${
                      !isStore?.products?.length > 0 ||
                      isFormCheckouts?.isSubmited === true
                        ? 'z-[255] opacity-100'
                        : '-z-px opacity-0'
                    }`}
                  ></div>
                ) : null}

                {isStore?.products?.map((gtRslt, i) => {
                  let groupName = getJoinString(gtRslt?.name);
                  return (
                    <div
                      className={twMerge(
                        `relative mt-8 flex flex-col items-end rounded-[14px] px-1.5 pb-1.5 transition-[height] duration-300 ease-in-out first:mt-0 sm:rounded-2xl sm:px-2 sm:pb-2 ${isDisabled ? '!pointer-events-none !select-none' : '!pointer-events-auto !select-auto'}`,
                        style[gtRslt?.documentId] || 'bg-regular45'
                      )}
                      key={gtRslt?.documentId}
                    >
                      <div
                        className={`relative flex w-full flex-col ${isDisabled ? '!pointer-events-none !select-none' : '!pointer-events-auto !select-auto'}`}
                      >
                        <div
                          id={`ca25StoreProductSticky_${groupName}`}
                          className={twMerge(
                            `ca25StoreProductSticky sticky inset-x-0 top-0 mt-1 ${gtRslt?.quantity > 1 ? 'h-[78px] sm:h-[94px]' : 'h-[45px] sm:h-[59px]'} z-60 flex w-full flex-col items-start justify-between transition-[height] duration-300 ease-in-out sm:top-0`,
                            gtRslt?.documentId === 'rc33x0dgm6tm707jghffuip4'
                              ? 'bg-vip45_Sticky'
                              : 'bg-regular45_Sticky'
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
                                      onClick={(e) => {
                                        e.preventDefault();
                                        handleTabClick(e, i, tabIdx);
                                      }}
                                      key={tabIdx}
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
                          className={`relative inline-flex w-full flex-col ${gtRslt?.quantity > 1 ? 'rounded-t-lg sm:rounded-t-xl' : 'rounded-lg sm:rounded-xl'} bg-white px-3 py-3 sm:px-4 sm:py-4 ${isDisabled ? '!pointer-events-none !select-none' : '!pointer-events-auto !select-auto'}`}
                        >
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
                              return (
                                <div
                                  className={`flex flex-col space-y-4 ${attndIdx === currentStepAttendee[i] ? '!pointer-events-auto' : '!pointer-events-none hidden'}`}
                                  key={attndIdx}
                                >
                                  <>
                                    <div className="flex w-full flex-col items-start justify-between lg:flex-row">
                                      <div className="flex w-full max-w-[420px] flex-col items-start justify-start">
                                        <h3 className="text-xl font-medium capitalize">
                                          {`Attendees ${attndIdx + 1}`}{' '}
                                        </h3>
                                        <span className="mt-1 text-sm font-light text-gray-500">
                                          {`Person attending the event.`}
                                        </span>
                                      </div>
                                      {isFormCheckouts?.isSubmited === false &&
                                      i === 0 &&
                                      attndIdx > 0 ? (
                                        <CopyOtherDetailBtn
                                          items={{
                                            firstItems: getJoinString(
                                              isStore?.products[0]?.name
                                            ),
                                            attendee: attndIdx + 1,
                                            group: groupName,
                                          }}
                                          onEventClick={hndleCopyOtherDetail}
                                        />
                                      ) : isFormCheckouts?.isSubmited ===
                                          false &&
                                        i >= 1 &&
                                        attndIdx >= 0 ? (
                                        <CopyOtherDetailBtn
                                          items={{
                                            firstItems: getJoinString(
                                              isStore?.products[0]?.name
                                            ),
                                            attendee: attndIdx + 1,
                                            group: groupName,
                                          }}
                                          onEventClick={hndleCopyOtherDetail}
                                        />
                                      ) : null}
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
                                        isSubmited: isFormCheckouts?.isSubmited,
                                      }}
                                      items={{
                                        isToggle: isStepToggledCompany ?? [],
                                        product: i,
                                        productItems: attndIdx,
                                        attendee: attndIdx + 1,
                                        group: groupName,
                                      }}
                                      watchFields={watch}
                                      register={register}
                                      control={control}
                                      setValue={setValue}
                                      getValues={getValues}
                                      errors={errors}
                                      onChangeToggle={handleToggleChange}
                                    >
                                      {!isFirstToggleTrue && (
                                        <div
                                          className={`mr-0 mt-3 sm:mt-0 ${
                                            getValues(
                                              `haveCompanyAttndee${attndIdx + 1}_${groupName}`
                                            ) === true
                                              ? '!pointer-events-auto opacity-100'
                                              : 'pointer-events-none opacity-0'
                                          } transition-[opacity] duration-300 ease-in-out`}
                                        >
                                          <button
                                            id={`ca25Btn_CopyCompany${attndIdx + 1}DetailCheckout`}
                                            type="button"
                                            aria-label={`Coinfest Asia 2025 Button Copy Company ${attndIdx + 1} Detail`}
                                            aria-labelledby={`Coinfest Asia 2025 Button Copy Company ${attndIdx + 1} Detail`}
                                            onClick={(e) => {
                                              e.preventDefault();
                                              hndleCopyCompany(
                                                [
                                                  `#ca25Form_CompanyFocusAttndee${attndIdx + 1}_${groupName}Checkout`,
                                                  `#ca25Form_CompanySizeAttndee${attndIdx + 1}_${groupName}Checkout`,
                                                ],
                                                {
                                                  attendee: attndIdx + 1,
                                                  group: groupName,
                                                },
                                                {
                                                  activeGroup: getJoinString(
                                                    isStore?.products[
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
                                          >
                                            <Badge
                                              label="Same As above"
                                              type="secondary"
                                              withHover={true}
                                              icons={
                                                <svg
                                                  className="size-4 shrink-0"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  viewBox="0 0 24 24"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeWidth="2"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                >
                                                  <rect
                                                    width="14"
                                                    height="14"
                                                    x="8"
                                                    y="8"
                                                    rx="2"
                                                    ry="2"
                                                  />
                                                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                                                </svg>
                                              }
                                            />
                                          </button>
                                        </div>
                                      )}
                                    </AttendeeDetailCheckouts>
                                  </>
                                </div>
                              );
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
                                style[gtRslt?.documentId] || 'bg-regular45'
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
                              {'Prev'}
                            </button>
                            <button
                              id={`ca25BtnStepForm_Next${groupName}Checkout`}
                              className={twMerge(
                                `inline-flex items-center gap-x-1 rounded-lg border border-transparent bg-white py-2 pl-3 pr-2 text-sm font-normal text-white transition duration-300 ease-in-out focus:outline-none disabled:pointer-events-none disabled:opacity-60`,
                                style[gtRslt?.documentId] || 'bg-regular45'
                              )}
                              type="button"
                              aria-label={`Coinfest Asia 2025 Button for Next Step Form ${groupName}`}
                              disabled={
                                currentStepAttendee[i] === gtRslt?.quantity - 1
                              }
                              onClick={(e) => {
                                e.preventDefault();
                                handleNextAttendee(
                                  i,
                                  currentStepAttendee[i],
                                  gtRslt?.quantity
                                );
                              }}
                            >
                              {'Next'}
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

              {/* @submit(mobile) */}
              {isStore?.products?.length > 0 ? (
                <div
                  className={`relative mt-10 block w-full rounded-2xl border border-gray-200 bg-white px-4 py-4 ${
                    isDisabled
                      ? '!pointer-events-none !select-none'
                      : '!pointer-events-auto !select-auto'
                  } sm:px-5 sm:py-5 xl:hidden`}
                >
                  <BoardSubmitCheckout
                    register={register}
                    setValue={setValue}
                    getValues={getValues}
                    errors={errors}
                  />

                  {/* @submit(Form) */}
                  <button
                    id="ca25Form_SubmitMobileCheckout"
                    className={`!pointer-events-auto inline-flex w-full cursor-pointer flex-row items-center justify-center rounded-xl bg-primary px-8 py-5 text-sm font-normal capitalize leading-inherit text-white disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-black-900 sm:text-base`}
                    type="submit"
                    role="button"
                    aria-label="Coinfest Asia 2025 Submit Mobile Checkout"
                    disabled={isDisabled}
                  >
                    {isFormCheckouts?.isSubmited === false ? (
                      <>
                        {isStore?.totalOrder <= 1e-10
                          ? 'Proceed Order'
                          : 'Proceed To Payment'}
                      </>
                    ) : null}
                    {isFormCheckouts?.isSubmited === true ? (
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
                    ) : null}
                  </button>
                </div>
              ) : null}
            </div>

            {/* @order-summary */}
            <div className="col-span-full pl-0 xl:col-span-5 xl:pl-6">
              <div className="px-3 sm:px-0">
                <header
                  className={`mb-5 block w-full rounded-xl bg-dark px-4 py-3.5 sm:rounded-2xl sm:px-6 sm:py-6 xl:hidden`}
                >
                  <h1 className="text-xl font-semibold text-white sm:text-3xl">
                    {`Checkout`}
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
                          label: 'Tickets',
                          url: '/tickets',
                        },
                        {
                          label: 'Checkout',
                          url: '/checkout',
                        },
                      ]}
                    />
                  </div>
                </header>
              </div>
              <OrderDetailCheckouts
                items={{
                  products: isStore?.products,
                  coupons: isStore?.isCoupons,
                  totalQty: isStore?.totalQty,
                  isSubmited: isFormCheckouts?.isSubmited,
                }}
                stepForm={currentStepAttendee}
                register={register}
                setValue={setValue}
                getValues={getValues}
                errors={errors}
              >
                <div
                  className={`relative hidden w-full rounded-2xl border border-gray-200 bg-white ${isDisabled ? '!pointer-events-none !select-none' : '!pointer-events-auto !select-auto'} px-4 py-4 sm:px-5 sm:py-5 xl:block`}
                >
                  <BoardSubmitCheckout
                    register={register}
                    setValue={setValue}
                    getValues={getValues}
                    errors={errors}
                  />

                  {/* @submit(Form) */}
                  <button
                    id="ca25Form_SubmitDesktopCheckout"
                    className={`!pointer-events-auto inline-flex w-full cursor-pointer flex-row items-center justify-center rounded-xl bg-primary px-8 py-5 text-base font-normal capitalize leading-inherit text-white disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-black-900`}
                    type="submit"
                    role="button"
                    aria-label="Coinfest Asia 2025 Submit Desktop Checkout"
                    disabled={isDisabled}
                  >
                    {isFormCheckouts?.isSubmited === false ? (
                      <>
                        {isStore?.totalOrder <= 1e-10
                          ? 'Proceed Order'
                          : 'Proceed To Payment'}
                      </>
                    ) : null}
                    {isFormCheckouts?.isSubmited === true ? (
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
                    ) : null}
                  </button>
                </div>
              </OrderDetailCheckouts>
            </div>
          </form>
        </Container>
      </Main>

      {/* @alert(Toast)  */}
      <Toaster
        richColors
        gap="10"
        dismissible={false}
        pauseWhenPageIsHidden={true}
        toastOptions={{
          className: 'ca25ToastCheckoutAlert',
        }}
      />

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
      {isStore?.isOrderProcess === true ? (
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
          label={`Order in Progress...`}
          shortDesc={`This may take a moment. Please wait while we process your order.`}
        />
      ) : null}
    </>
  );
};

Checkout.getLayout = (page, { pageProps }) => {
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
export const getServerSideProps = async (context) => {
  // if (Object.keys(context?.query).length > 0) {
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: true,
  //     },
  //   };
  // }
  try {
    const isLayouts = true;
    const [rsIpAddress, rsCountry, rsCoupons, rsCheckoutHbSpt] =
      await Promise.all([
        getFetchUrl(
          `https://ipinfo.io/json?token=${serverRuntimeConfig?.ipAddress_token}`
        ),
        getFetchUrl(`https://restcountries.com/v3.1/all?fields=name,flags`),
        getFetch(`/api/coupons?filters[category][$eq]=promo&populate=*`),
        getFecthHbSpt(`/forms/v2/forms/${serverRuntimeConfig?.hbSptCheckout}`),
      ]);
    const sortedCountries = rsCountry.sort((a, b) =>
      a?.name.common.localeCompare(b?.name.common)
    );
    return {
      props: {
        mode: 'light',
        layouts: isLayouts || false,
        withoutNavbar: false,
        ipAddress: rsIpAddress || [],
        country: sortedCountries || [],
        coupons: rsCoupons || [],
        formCheckout: rsCheckoutHbSpt?.formFieldGroups || [],
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
