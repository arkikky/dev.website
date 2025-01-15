import React, { useState, useEffect, useCallback } from 'react';
import { twMerge } from 'tailwind-merge';
import { useRouter } from 'next/router';
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
  getFetchUrl_FormData,
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
import PaymentProcessModal from '@components/UI/Modal/PaymentProcess';
import OrderProcessModal from '@components/UI/Modal/OrderProcess';
import ExpiredOrderModal from '@components/UI/Modal/ExpiredOrder';
// const CopyBillingAttendeeBtn = dynamic(
//   () => import('@components/UI/Button/CopyBillingAttendeeBtn'),
//   {
//     loading: () => '',
//     ssr: false,
//   }
// );
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
// const BillingDetailCheckout = dynamic(
//   () => import('@layouts/Checkouts//Card/BillingDetailCheckout'),
//   {
//     loading: () => <p>Loading...</p>,
//     ssr: false,
//   }
// );
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
    isExpiredPayment: false,
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
    return () => {
      undefined;
    };
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
      const setCoupon = getCoupon?.data?.length > 0 ? getCoupon?.data[0] : null;
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
      // toast.error('Tidak ada data produk ditemukan!', {
      //   position: 'top-right',
      // });
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
      // toast.error('Tidak ada attendee ditemukan dalam produk!', {
      //   position: 'top-right',
      // });
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
      //   style: { maxWidth: '500px', fontSize: '0.875rem' }, // Font kecil untuk tampilan rapi
      // });
    }
    return rsAllFields;
  }

  // @validation(error form)
  const onErrorSubmit = async (errors, e) => {
    console.log(errors);

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
          const setIsCoupon =
            getCoupon?.data?.length > 0 ? getCoupon?.data[0] : null;
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
                    const rsQrCodeUrl = await QRCode.toDataURL(
                      `${process.env.NEXT_PUBLIC_SITE_URL}/perview?att=${rsAttendee?.data.documentId}`,
                      {
                        width: 256,
                      }
                    );
                    const isFullname = `${rsAttendee?.data.firstName} ${rsAttendee?.data.lastName}`;
                    const tickets =
                      rsAttendee?.data.product.documentId ===
                      'sn4ujm0d1ebbc8lme1ihzsa9'
                        ? `Festival Tickets`
                        : `${rsAttendee?.data.product?.name}`;

                    const rsBlobQrCode = convertQrCodeToBlob(
                      rsQrCodeUrl,
                      rsAttendee?.data.id,
                      rsAttendee?.data.attendeeId,
                      isFullname
                    );
                    arrAttendees.push({
                      attendee: rsAttendee?.data,
                      blobQrCode: rsBlobQrCode,
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
              // @save-to(hubspot) & @convert-url(to blob)
              const [updateStatusAttendee, rsHbSptAttendee, rsQrCodeGenerate] =
                await Promise.all([
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
                  getFetchUrl_FormData(
                    'https://api.coinfest.asia/api/upload?',
                    gtRslt?.blobQrCode
                  ),
                ]);
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
                    qrCode: rsQrCodeGenerate[0]?.url,
                    docId: gtRslt?.attendee?.product.documentId,
                    attId: gtRslt?.attendee?.attendeeId,
                    fullname: gtRslt?.fullname,
                    company: gtRslt?.attendee?.company,
                    productTickets: gtRslt?.ticketProducts,
                  }),
                }).then((res) => res.json());
              }
              arrBlobAttendees.push({
                blobQrCodeUrl: rsQrCodeGenerate[0]?.url,
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
            // setFormCheckouts((prev) => ({
            //   ...prev,
            //   isSubmited: false,
            // }));
            // setStore((prev) => ({ ...prev, isOrderProcess: false }));
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
      <Main className="relative pb-8 pt-6 sm:pb-12 sm:pt-8 lg:pt-10">
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
                    className={`absolute inset-x-0 inset-y-0 bg-white/40 ${
                      !isStore?.products?.length > 0 ||
                      isFormCheckouts?.isSubmited === true
                        ? '!pointer-events-none z-[255] !select-none opacity-100 backdrop-blur-[2px]'
                        : '!pointer-events-auto -z-px !select-auto opacity-0'
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
                                      <div
                                        className={`mr-0 mt-3 sm:mt-0 ${
                                          getValues(
                                            `haveCompanyAttndee${attndIdx + 1}_${groupName}`
                                          ) === true && !isFirstToggleTrue
                                            ? '!pointer-events-auto opacity-100'
                                            : 'pointer-events-none opacity-0'
                                        } transition-[opacity] duration-300 ease-in-out`}
                                      >
                                        <button
                                          id="ca25Btn_CopyCompanyDetailCheckout"
                                          type="button"
                                          aria-label="Button Copy Company Detail"
                                          aria-labelledby="Button Copy Company Detail"
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
      {isStore?.isPaymentProcess === true ? <PaymentProcessModal /> : null}
      {isStore?.isOrderProcess === true ? <OrderProcessModal /> : null}
      {isStore?.isExpiredPayment === true ? <ExpiredOrderModal /> : null}
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
        getFetch(`/api/coupons?filters[isPublic][$eq]=true&populate=*`),
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
