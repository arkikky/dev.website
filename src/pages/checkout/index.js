import React, { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import DOMPurify from 'dompurify';

// @redux
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart } from '@reduxState/slices';

// @lib/controller & helper
import { getFetch, getFetchUrl, pushSubmitData } from '@lib/controller/API';
import { getFecthHbSpt, submitFormHbSpt } from '@lib/controller/HubSpot';
import {
  getRandomCharacters,
  getSplitStringCapital,
  getCombineMerged,
} from '@lib/helper/Configuration';
// import {
//   getTotalCart,
//   calculateDiscountCheckout,
// } from '@lib/helper/CartContext';

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

  // @hook(Reload)
  useEffect(() => {
    handleIntzPreline();

    return () => {
      undefined;
    };
  }, [router.reload]);

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
    mode: 'all',
    defaultValues: {
      phone: '',
    },
  });

  // @watch
  const iHaveReadAgree = watch('i_have_read_and_agree');
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
    setValue('companyAttndee1', companyBilling);
  };

  // @submit(Checkout)
  const onSubmitForm = async (data) => {
    console.log(data);
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

                        {isFormCheckouts.stepForm > 1 ? (
                          <div className="mr-0 mt-3 sm:-mr-2 sm:mt-0">
                            <button
                              id="ca25Btn_CopyBillingDetailCheckout"
                              type="button"
                              aria-label="Button for Copy Billing Detail(Checkouts)"
                              aria-labelledby="Button for Copy Billing Detail(Checkouts)"
                              // onClick={(e) => hndleCopy_BillingToAttendee(e)}
                              className="text-black-900"
                            >
                              <Badge
                                label="Same Company Details"
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
                      <div className="inline-flex w-full flex-col rounded-xl bg-white px-4 py-4">
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
                        Back
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
                        Submitting ...
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
    </>
  );
};

Checkout.getLayout = function PageLayout(page) {
  return <>{page}</>;
};

export const getStaticProps = async () => {
  const [rsIpAddress, rsCountry, rsCheckoutHbSpt] = await Promise.all([
    getFetchUrl(`https://ipinfo.io/json?token=135855871d1f46`),
    getFetchUrl(`https://restcountries.com/v3.1/all?fields=name,flags`),
    getFecthHbSpt(`/forms/v2/forms/c9347ef6-664d-4b7a-892b-a1cabaa2bc30`),
  ]);

  try {
    return {
      props: {
        ipAddress: rsIpAddress || [],
        country: rsCountry || [],
        formCheckout: rsCheckoutHbSpt.formFieldGroups || [],
      },

      revalidate: 900,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

export default Checkout;
