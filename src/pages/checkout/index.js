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
  getSplitString,
  getSplitStringCapital,
} from '@lib/helper/Configuration';
import { getTotalCart } from '@lib/helper/CartContext';

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
import Card from '@components/UI/Card/Card';

// @layouts
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

  const [isIpAddress, setIpAddress] = useState(ipAddress);
  const [isFormCheckouts, setFormCheckouts] = useState({
    fields: formCheckout.formFieldGroups,
    message: '',
  });
  const [isCountry, setCountry] = useState(country);

  // @cart
  const [isCartProduct, setCartProducts] = useState();
  const [isProducts, setProducts] = useState(
    getCookie('_cart') ? JSON.parse(getCookie('_cart')).data : []
  );

  // @merge-updated(Cart)
  const combineData = () => {
    const mergedData = isCart?.map((gtRslt, i) => {
      const productDetail = isCartProduct?.find(
        (i) => i.data.documentId === gtRslt.id_product
      );

      return {
        ...gtRslt,
        ...productDetail?.data,
      };
    });

    setProducts(mergedData);
  };

  useEffect(() => {
    combineData();

    return () => {
      undefined;
    };
  }, [isCart, isCartProduct]);

  // @hook-products
  const fetchHookProducts = async () => {
    try {
      const productsPromises = isCart?.map(async (data) => {
        const isHookProducts = await getFetch(
          `/api/products/${data.id_product}`
        );
        return isHookProducts;
      });

      const allProducts = await Promise.all(productsPromises);

      if (allProducts) {
        setCartProducts(allProducts);
      }
    } catch (err) {
      return;
    }
  };

  useEffect(() => {
    fetchHookProducts();

    const handleRouteChange = async () => {
      await fetchHookProducts();
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  // @hook-attendee(with qty)
  const [isTotalQty, setTotalQty] = useState(0);

  const calculateTotalQty = () => {
    const total = isCart.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);

    if (total >= 5) {
      setTotalQty(5);
    } else {
      setTotalQty(total);
    }
  };

  useEffect(() => {
    calculateTotalQty();

    return () => {
      undefined;
    };
  }, [isCart]);

  // @get-total(currency: IDR)
  const isTotalCart = getTotalCart(isProducts);

  // @hook-attendee(with qty)
  const arrAttendee = Array.from({ length: isTotalQty }, (_, index) => index);

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

  // @form-hook
  const {
    watch,
    register,
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
  const companyBilling = watch('company');

  // @init(billing)
  const [isBillingDetails, setBillingDetails] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    company: '',
  });

  // @hook-preline
  const handleButtonClick = async () => {
    await import('@preline/select');

    if (typeof window !== 'undefined' && window.HSSelect) {
      window.HSSelect.autoInit();
    }
  };

  useEffect(() => {
    if (isTotalQty) {
      handleButtonClick();
    }

    return () => {
      undefined;
    };
  }, [isTotalQty]);

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
  const handleBillingChange = (getVar, getValue) => {
    setBillingDetails({
      ...isBillingDetails,
      [getVar]: getValue,
    });
  };

  // @handle-copydata(billing)
  const handleCopyBillingToAttendee = (e) => {
    e.preventDefault();

    // @debug-data(Billing)
    // console.log(isBillingDetails);

    setValue('firstnameAttndee1', firstnameBilling);
    setValue('lastnameAttndee1', lastnameBilling);
    setValue('emailAttndee1', emailBilling);
    setValue('companyAttndee1', companyBilling);
  };

  // @submit
  const onSubmitForm = async (data) => {
    if (!isValid === false) {
      // @billing
      const setBillingId =
        data.firstname.toLowerCase() +
          getSplitStringCapital(data.company) +
          '_' +
          getRandomCharacters(5).data || '';

      const setBillingConfigs = {
        data: {
          customerId: setBillingId,
          firstName: DOMPurify.sanitize(data.firstname),
          lastName: DOMPurify.sanitize(data.lastname),
          email: DOMPurify.sanitize(data.email.toLowerCase()),
          phone: DOMPurify.sanitize(data.phone),
          // company: DOMPurify.sanitize(data.company),
          websiteUrl: DOMPurify.sanitize(data.websiteUrl),
        },
      };

      // @hubspot
      const hbSptBillingConfigs = {
        fields: [
          {
            objectTypeId: '0-1',
            name: 'firstname',
            value: DOMPurify.sanitize(data.firstname),
          },
          {
            objectTypeId: '0-1',
            name: 'lastname',
            value: DOMPurify.sanitize(data.lastname),
          },
          {
            objectTypeId: '0-1',
            name: 'email',
            value: DOMPurify.sanitize(data.email),
          },
          {
            objectTypeId: '0-1',
            name: 'phone',
            value: DOMPurify.sanitize(data.phone),
          },
          {
            objectTypeId: '0-2',
            name: 'name',
            value: DOMPurify.sanitize(data.company),
          },
          {
            objectTypeId: '0-2',
            name: 'website',
            value: DOMPurify.sanitize(data.websiteUrl),
          },
        ],
        context: {
          pageUri: 'https://coinfest.asia/checkout',
          pageName: 'Checkout | Coinfest Asia 2025',
          ipAddress: isIpAddress.ip,
        },
      };

      const hbSptKey = '96572ab0-5958-4cc4-8357-9c65de42cab6';

      // @customers(submit)
      // const getCustomerRes = await pushSubmitData(
      //   '/api/customers',
      //   setBillingConfigs
      // );

      // const hbSptRes = await HbSptSubmitForm(hbSptBillingConfigs, hbSptKey);

      // if (isCart && getCustomerRes) {
      if (isCart) {
        // if (isCart) {
        // const getIdCustomer = getCustomerRes.data.documentId;
        // const isIdProducts = isCartProduct[0].data.documentId;
        const isQtyProducts = isTotalQty;

        // @customer
        try {
          // const isRes = await getFetch(`/api/customers/${getIdCustomer}`);
          // if (isRes) {
          //   const isIdCustomers = isRes.data.documentId;

          // @create(New Order)
          // const setCreateOrderConfigs = {
          //   data: {
          //     paymentStatus: 'Pending',
          //     orderTotal: isTotalCart,
          //     customer: {
          //       connect: [
          //         {
          //           documentId: isIdCustomers,
          //         },
          //       ],
          //     },
          //     products: {
          //       connect: [
          //         {
          //           documentId: isIdProducts,
          //         },
          //       ],
          //     },
          //   },
          // };
          // const isResCreate_Order = await pushSubmitData(
          //   '/api/orders',
          //   setCreateOrderConfigs
          // );

          // @attendee
          // if (isResCreate_Order) {
          for (let i = 0; i < isQtyProducts; i++) {
            const setAttendeeId =
              data[`firstnameAttndee${i + 1}`]?.toLowerCase() +
                getSplitStringCapital(data[`companyAttndee${i + 1}`]) +
                '_' +
                getRandomCharacters(5).data || '';

            const awdwad = ` + i + 1}`;

            const setAttendeeConfigs = {
              data: {
                attendeeId: setAttendeeId,
                firstName:
                  DOMPurify.sanitize(data[`firstnameAttndee${i + 1}`]) || '',
                lastName:
                  DOMPurify.sanitize(data[`lastnameAttndee${i + 1}`]) || '',
                email:
                  DOMPurify.sanitize(
                    data[`emailAttndee${i + 1}`]?.toLowerCase()
                  ) || '',
                telephone: DOMPurify.sanitize(data[`phone${i + 1}`] || []),
                telegramAccount:
                  DOMPurify.sanitize(
                    data[`telegramAccountAttndee${i + 1}`]?.toLowerCase()
                  ) || '',
                country:
                  DOMPurify.sanitize(data[`countryAttndee${i + 1}`]) || '',
                company:
                  DOMPurify.sanitize(data[`companyAttndee${i + 1}`]) || '',
                position: DOMPurify.sanitize(data[`jobPosition${i + 1}`]) || '',
                // companyFocus:
                //   DOMPurify.sanitize(data[`companyFocus${i + 1}`]) || '',
                // companySize:
                //   DOMPurify.sanitize(data[`companySize${i + 1}`]) || '',
                // whatTypeOfConnectionsAndNetworkingDoYouHopeToAchieveAtTheEvent:
                //   DOMPurify.sanitize(
                //     data[`whatTypeConnectionNetworking${i + 1}`]
                //   ) || '',
                // whereDidYouHearAboutCoinfestAsia2024:
                //   DOMPurify.sanitize(data[`didYouHearAbout${i + 1}`]) || '',
                // customer: {
                //   connect: [
                //     {
                //       documentId: isIdCustomers,
                //     },
                //   ],
                // },
                // product: {
                //   connect: [
                //     {
                //       documentId: isIdProducts,
                //     },
                //   ],
                // },
              },
            };

            // @debug
            console.log(setBillingConfigs);
            console.log(setAttendeeConfigs);

            // try {
            //   const isRes = await pushSubmitData(
            //     '/api/attendees',
            //     setAttendeeConfigs
            //   );
            //   if (isRes) {
            //     const isIdAttendee = isRes.data.documentId;

            //     // @updated(order)
            //     setFormCheckouts({ message: 'Berhasil Terkirim' });
            //   }
            // } catch (error) {
            //   console.error(`Error submitting attendee ${i + 1}:`, error);
            // }
            // reset();
          }
          // }
          // }
        } catch (error) {
          console.error(`Error submitting attende`, error);
        }
      }
    }
  };

  return (
    <>
      {/* @head */}
      <HeadGraphSeo title={`Checkout`} otherPage={true} />

      {/* @main */}
      <Main className="flex flex-col pb-12">
        <header className="flex flex-col items-start bg-primary pb-28 pt-[148px]">
          <Container>
            <div className="flex flex-col items-start justify-start">
              <h1 className="text-base font-semibold text-white sm:text-3xl">
                Checkout
              </h1>
              <div className="mt-2 block">
                <Breadcrumb
                  theme="light"
                  listBreadcrumb={[
                    {
                      label: 'Home',
                      url: '/',
                    },
                    {
                      label: 'Cart',
                      url: '/cart',
                    },
                    {
                      label: 'Checkout',
                      url: '/checkout',
                    },
                  ]}
                />
              </div>
            </div>
          </Container>
        </header>

        <div className="relative -mt-[86px] inline-flex flex-col">
          <Container>
            <form
              id="tktCAForm_Checkout"
              method="POST"
              onSubmit={handleSubmit(onSubmitForm)}
            >
              <div className="grid-cols-1 gap-x-6 gap-y-6 rounded-[18px] border border-gray-200 bg-white px-4 py-4 supports-grid:grid sm:grid-cols-12 sm:gap-y-10 sm:px-6 sm:py-6 lg:px-8 lg:pb-10 lg:pt-8">
                <div className="col-span-full pr-0 xl:col-span-7 xl:pr-8">
                  <div className="block w-full space-y-14">
                    {/* @notification */}
                    <div className="block w-full">
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
                      <div className="mt-6 flex flex-col items-start gap-y-8">
                        <div className="flex w-full flex-col items-start justify-start">
                          <h2 className="text-xl font-medium capitalize">
                            Billing details
                          </h2>
                          <span className="mt-1.5 text-sm font-light text-gray-400">
                            Complate your purchase item by providing your
                            payment detail order.
                          </span>
                        </div>
                        <div className="inline-flex w-full flex-col">
                          <BillingDetailCheckout
                            ipAddress={
                              isIpAddress.country.toLowerCase() || 'id'
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
                        {arrAttendee?.map((gtRslt, i) => {
                          const attendeeNumber = i + 1;

                          return (
                            <div className="blcok w-full" key={attendeeNumber}>
                              <>
                                <div className="mb-4 flex w-full flex-row items-start justify-between">
                                  <div className="flex flex-col items-start justify-start">
                                    <h2 className="text-xl font-medium capitalize">
                                      Attendees {i + 1}
                                    </h2>
                                    <span className="mt-1.5 text-sm font-light text-gray-400">
                                      Please fill out the form below, Enter your
                                      account details.
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
                                <Card>
                                  <AttendeeDetailCheckouts
                                    ipAddress={
                                      isIpAddress.country.toLowerCase() || 'id'
                                    }
                                    country={isCountry}
                                    fieldForm={isFormCheckouts.fields}
                                    register={register}
                                    setValue={setValue}
                                    getValues={getValues}
                                    errors={errors}
                                    arrIndex={i + 1}
                                  />
                                </Card>
                              </>
                            </div>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="col-span-full xl:col-span-5">
                  {/* @order-details */}
                  <OrderDetailCheckouts
                    products={isProducts}
                    items={isCartProduct}
                    totalCart={isTotalCart}
                  >
                    <Card>
                      {/* @board-submit */}
                      <BoardSubmitCheckout
                        register={register}
                        errors={errors}
                      />

                      {/* @submit-form */}
                      <button
                        id="tktCAForm_SubmitCheckout"
                        type="submit"
                        aria-label="Ticket Coinfest Asia - Submit (Checkout)"
                        className={`inline-flex flex-row items-center justify-center rounded-lg ${
                          isValid
                            ? 'bg-black-900 text-white'
                            : 'cursor-default bg-gray-200 text-black-900'
                        } w-full cursor-pointer px-8 py-4 text-sm font-normal capitalize leading-inherit outline-none focus-visible:outline-none`}
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
                            Submitting...
                          </span>
                        ) : (
                          <span>Proceed To Checkout</span>
                        )}
                      </button>
                      <p className="mt-4 block">{isFormCheckouts.message}</p>
                    </Card>
                  </OrderDetailCheckouts>
                </div>
              </div>
            </form>
          </Container>
        </div>
      </Main>

      {/* @footer */}
      <Footer />

      {/* @script */}
      <PrelineScript />
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
