import React, { useState, useEffect, useCallback } from 'react';
import dayjs from 'dayjs';

// @redux
import { useSelector, useDispatch } from 'react-redux';
import {
  updateQuantity,
  applyCoupon,
  removeCoupon,
  removeCart,
} from '@reduxState/slices';

// @lib/controller & helper
import { getFetch } from '@lib/controller/API';
import {
  currencyConverter,
  converterTotalCart,
} from '@lib/helper/CalculateCartContext';
import { getTotalCart } from '@lib/helper/CartContext';

const OrderDetailCheckouts = ({
  products,
  stepForm,
  register,
  setValue,
  getValues,
  errors,
  onAlert,
  children,
}) => {
  const dispatch = useDispatch();
  const { data: isCart, coupon: isCoupon } = useSelector((state) => state.cart);
  const [isUseCoupon, setUseCoupon] = useState({
    discount: 0,
    totalWithDiscount: 0,
  });

  // @hook(Preline)
  // const hndleIntzPreline = useCallback(async () => {
  //   await import('preline/preline');

  //   if (window.HSStaticMethods) {
  //     window.HSStaticMethods.autoInit();
  //   }
  // }, [isCart]);

  const hndleIntzCoupon = async () => {
    try {
      const getDataCoupon = await getFetch(
        `/api/coupons?populate=*&filters[couponCode][$eq]=${isCoupon}`
      );
      const isDataCoupon = getDataCoupon?.data[0];

      if (isDataCoupon && products.length > 0) {
        const isPrice = products[0].priceSale;
        const isSubTotal = getTotalCart(products);
        const discntAmount = parseFloat(isDataCoupon.amount) || 0;

        const calculatedDiscount =
          parseInt(isDataCoupon.amount) === 100
            ? isSubTotal * (discntAmount / 100)
            : isPrice * (discntAmount / 100);
        const totalAfterDiscount = isSubTotal - calculatedDiscount;

        setUseCoupon({
          discount: calculatedDiscount,
          totalWithDiscount: totalAfterDiscount,
        });
      }
    } catch (error) {
      console.error('[Error] fetching coupon data:', error);
    }
  };

  // @hook(Init)
  useEffect(() => {
    hndleIntzCoupon();

    return () => {
      undefined;
    };
  }, [products]);

  // @quantity
  const updateCartQuantity = async (cartItems, isIncrease) => {
    try {
      let newQty = cartItems?.quantity;

      if (isIncrease) {
        newQty = Math.min(cartItems?.quantity + 1, 5);
      } else {
        if (!(stepForm >= cartItems?.quantity)) {
          newQty = Math.max(cartItems?.quantity - 1, 1);
        } else {
          onAlert('error', `Sorry, reduce steps to change the quantity!`);
        }
      }

      if (newQty > Number(cartItems?.stock)) return;

      dispatch(updateQuantity({ products: cartItems, qty: newQty }));
    } catch (error) {
      console.error('[Error] fetching:', error);
    }
  };
  const decreaseQty = (cartItems) => updateCartQuantity(cartItems, false);
  const increaseQty = (cartItems) => updateCartQuantity(cartItems, true);

  // // @event(change - coupon)
  const handleCoupon = async () => {
    try {
      const getCouponCode = getValues('coupon').trim();
      if (!getCouponCode) return;

      if (isCoupon !== null) {
        return onAlert('error', 'Sorry, you already have a coupon in use!');
      }

      // @check(coupon)
      const { data } = await getFetch(
        `/api/coupons?populate=*&filters[couponCode][$eq]=${getCouponCode}`
      );
      const coupon = data?.[0];

      if (!coupon) {
        return onAlert('error', 'Sorry, coupon not found or invalid!');
      }

      const { expirationDate, includedProducts = [], type, amount } = coupon;
      const idProducts = products[0].documentId;
      const isSubTotal = getTotalCart(products);

      if (dayjs().isAfter(dayjs(expirationDate))) {
        return onAlert(getCouponCode, 'error', 'Sorry, coupon has expired!');
      }

      if (
        !includedProducts.some((product) => product.documentId === idProducts)
      ) {
        return onAlert('error', 'Sorry, coupon is not valid for this product!');
      }

      const discntAmount = parseFloat(amount) || 0;
      let calculatedDiscount = 0;

      if (type === 'percentage') {
        calculatedDiscount =
          discntAmount === 100
            ? isSubTotal
            : products[0].priceSale * (discntAmount / 100);

        setUseCoupon({
          discount: calculatedDiscount,
          totalWithDiscount: isSubTotal - calculatedDiscount,
        });

        dispatch(applyCoupon(getCouponCode));
        onAlert(
          'success',
          `<strong>Coupon applied!</strong>, You saved ${discntAmount}%`
        );
      } else {
        // @implement logic for non-percentage coupons if needed
      }

      setValue('coupon', '');
    } catch (error) {
      console.error('[Error] fetching coupons:', error);
      onAlert('error', 'An error occurred. Please try again.');
    }
  };

  // // @event(remove - coupon)
  const clearCoupon = () => dispatch(removeCoupon());

  return (
    <>
      <section className="relative block h-full min-h-full w-full">
        <div className="mb-4 block w-full">
          <h2 className="text-xl font-medium capitalize">Order summary</h2>
          <span className="mt-1.5 text-sm font-light text-gray-400">
            Checkout your ticket for better experience order item.
          </span>
        </div>

        {products.length >= 1 && (
          <div className="mb-6 flex w-full flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-start">
              <div className="flex h-10 w-10 flex-col items-center justify-center rounded-lg bg-primary/20">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 5V7V5ZM15 11V13V11ZM15 17V19V17ZM5 5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V10C3.53043 10 4.03914 10.2107 4.41421 10.5858C4.78929 10.9609 5 11.4696 5 12C5 12.5304 4.78929 13.0391 4.41421 13.4142C4.03914 13.7893 3.53043 14 3 14V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V14C20.4696 14 19.9609 13.7893 19.5858 13.4142C19.2107 13.0391 19 12.5304 19 12C19 11.4696 19.2107 10.9609 19.5858 10.5858C19.9609 10.2107 20.4696 10 21 10V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5Z"
                    stroke="#2458F1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <span className="ms-3 text-sm font-normal text-black-900">{`Have a coupon code?`}</span>
            </div>
            <div className="hs-dropdown relative inline-flex [--auto-close:inside] [--placement:bottom-right] [--strategy:absolute]">
              <button
                id="hsCA25Dropdown_EnterCouponCode"
                type="button"
                className="hs-dropdown-toggle inline-flex items-center gap-x-2 text-sm font-normal text-primary underline focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                aria-haspopup="menu"
                aria-label="Coinfest Asia 2025 (Dropdown - Coupon Code)"
                aria-labelledby="Coinfest Asia 2025 (Dropdown - Coupon Code)"
                aria-roledescription="Dropdown"
                aria-expanded="false"
              >
                Enter code
              </button>

              <div
                className="hs-dropdown-menu duration mt-2.5 hidden rounded-xl border border-gray-200 bg-white px-1 py-1 opacity-0 transition-[opacity,margin] hs-dropdown-open:z-[5] hs-dropdown-open:opacity-100"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="hsCA25Dropdown_EnterCouponCode"
              >
                <div className="inline-flex flex-row gap-x-1.5">
                  <input
                    className={`w-[189px] cursor-default border-0 ${errors[`coupon`] && 'bg-red-500'} bg-transparent p-0 px-2.5 py-2.5 pr-4 text-start text-sm font-normal text-black-900 focus:ring-0 focus-visible:outline-none focus-visible:ring-0`}
                    type="text"
                    aria-label="Coinfest Asia 2025 (Coupon Code)"
                    aria-labelledby="Coinfest Asia 2025 (Coupon Code)"
                    aria-roledescription="Coinfest Asia 2025 (Coupon Code)"
                    placeholder="Enter a coupon code..."
                    tabIndex="-1"
                    minLength={1}
                    {...register(`coupon`, {
                      required: false,
                      maxLength: 255,
                      pattern: {
                        value: /^[A-Za-z0-9]+$/,
                      },
                    })}
                  />
                  <button
                    id="tcktCa25Btn_MaxQtyCheckouts"
                    className={`tktCA25Btn_Coupon flex w-24 flex-col items-center justify-center rounded-lg bg-primary px-1 py-1 text-sm font-normal text-white`}
                    type="button"
                    aria-label="Button Coupon(Checkouts)"
                    onClick={(e) => {
                      e.preventDefault();
                      handleCoupon();
                    }}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* @group(sticky) */}
        <div className="sticky top-[120px] z-[2] block">
          <div className="mb-10 block w-full sm:mb-8">
            <h2 className="mb-3 text-start text-base font-medium">
              {`Your Tickets`}
            </h2>

            {products?.slice(0, 1).map((gtRslt, i) => (
              <div
                className="mt-4 flex w-full flex-col items-start justify-start first:mt-0 sm:flex-row"
                key={i}
              >
                <div className="mb-3 inline-flex h-[134px] w-full min-w-full flex-col items-center justify-center rounded-lg bg-gray-400/20 sm:mb-0 sm:h-[82px] sm:w-[134px] sm:min-w-[134px]"></div>

                <div className="ms-0 block w-fill space-y-1.5 pt-1.5 sm:ms-5">
                  <div className="inline-flex w-full flex-row items-start justify-between">
                    <h3 className="text-base font-medium">{gtRslt.name}</h3>
                    <span className="text-base font-medium">
                      {currencyConverter(gtRslt.priceSale)}
                    </span>
                  </div>
                  <div className="relative flex w-full flex-row items-start justify-between gap-y-0.5">
                    <span className="me-3 text-sm font-light">
                      Qty: {gtRslt.quantity}
                    </span>

                    {gtRslt.documentId !== 'sn4ujm0d1ebbc8lme1ihzsa9' ? (
                      // <div className="hs-dropdown relative inline-flex [--auto-close:inside] [--placement:bottom-right] [--strategy:absolute]">
                      //   <button
                      //     id="hsCA25Dropdown_UpdatedQty"
                      //     type="button"
                      //     className="hs-dropdown-toggle inline-flex items-center gap-x-2 text-sm font-normal text-primary underline focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                      //     aria-haspopup="menu"
                      //     aria-label="Coinfest Asia 2025 (Dropdown - Quantity)"
                      //     aria-roledescription="Dropdown"
                      //     aria-expanded="false"
                      //   >
                      //     Add more
                      //   </button>

                      //   </div>
                      // </div>
                      <div
                        className="hs-dropdown-menu duration mt-1.5 flex rounded-[10px] border border-gray-200 bg-gray-50 px-1 py-1 opacity-100 transition-[opacity,margin] hs-dropdown-open:opacity-100"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="hsCA25Dropdown_UpdatedQty"
                      >
                        <div className="inline-flex flex-row gap-x-1.5">
                          <button
                            id="tcktCa25Btn_MinQtyCheckouts"
                            className="tktCA25Btn_Qty"
                            type="button"
                            aria-label="Button for Quantity(Min - Checkouts)"
                            aria-labelledby="Button for Quantity(Min - Checkouts)"
                            disabled={
                              gtRslt.quantity >= 1 && gtRslt.quantity <= 1
                            }
                            onClick={(e) => {
                              e.preventDefault();
                              decreaseQty(gtRslt);
                            }}
                          >
                            <svg
                              className="size-3.5 shrink-0"
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
                              <path d="M5 12h14"></path>
                            </svg>
                          </button>
                          <input
                            className={`w-5 cursor-default border-0 bg-transparent p-0 text-center text-sm font-light text-gray-800 focus:ring-0 focus-visible:outline-none focus-visible:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`}
                            type="number"
                            aria-roledescription="Number field"
                            value={gtRslt.quantity}
                            tabIndex="-1"
                            maxLength="5"
                            minLength={gtRslt.quantity || 1}
                            readOnly={true}
                            disabled={true}
                          />
                          <button
                            id="tcktCa25Btn_MaxQtyCheckouts"
                            className={`tktCA25Btn_Qty`}
                            type="button"
                            aria-label="Button for Quantity(Max - Checkouts)"
                            aria-labelledby="Button for Quantity(Max - Checkouts)"
                            disabled={gtRslt.quantity >= 5}
                            onClick={(e) => {
                              e.preventDefault();
                              increaseQty(gtRslt, gtRslt.quantity);
                            }}
                          >
                            <svg
                              className="size-3.5 shrink-0"
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
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* @order-summary */}
          <div className="mb-8 block space-y-4">
            {/* @subtotal */}
            <div className="grid-cols-2 supports-grid:grid">
              <span className="text-start text-sm font-normal">{`Subtotal`}</span>
              <span className="text-end text-base font-medium">
                {currencyConverter(getTotalCart(products))}
              </span>
            </div>

            {/* @coupon */}
            {isCoupon && (
              <div className="grid-cols-2 justify-between supports-grid:grid">
                <div className="flex flex-col text-start text-sm font-medium">
                  <span>Coupon:</span>
                  <span className="font-semibold uppercase text-primary">
                    ({isCoupon})
                  </span>
                </div>
                <div className="inline-flex items-start justify-end pt-0.5">
                  <div className="text-base font-medium text-gray-400">
                    {`-${currencyConverter(isUseCoupon.discount)}`}
                  </div>
                  <button
                    className="ms-3 flex h-8 w-8 flex-col items-center justify-center rounded-lg border border-solid border-red-500 bg-red-500/10 focus-visible:outline-none"
                    type="button"
                    tabIndex={-1}
                    aria-label="Coinfest Asia 2025 (Remove - Coupon)"
                    aria-roledescription="Coinfest Asia 2025 (Remove - Coupon)"
                    onClick={(e) => {
                      e.preventDefault();
                      clearCoupon();
                    }}
                  >
                    <svg
                      className="h-4 w-4 stroke-red-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 6h18" />
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                      <line x1="10" x2="10" y1="11" y2="17" />
                      <line x1="14" x2="14" y1="11" y2="17" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* @total with tax (11%) */}
            <div className="grid-cols-2 supports-grid:grid">
              <span className="text-start text-sm font-normal">{`Total (inc. Tax)`}</span>
              <span className="text-end text-base font-medium">
                {isCoupon
                  ? converterTotalCart(isUseCoupon.totalWithDiscount)
                  : converterTotalCart(getTotalCart(products))}
              </span>
            </div>
          </div>

          {/* @sub-component's */}
          {children}
        </div>
      </section>
    </>
  );
};

export default OrderDetailCheckouts;
