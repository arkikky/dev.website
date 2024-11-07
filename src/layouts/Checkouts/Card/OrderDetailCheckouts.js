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

  // @hook(Preline)
  const handleIntzPreline = useCallback(async () => {
    await import('preline/preline');

    if (window.HSStaticMethods) {
      window.HSStaticMethods.autoInit();
    }
  }, [isCart]);

  useEffect(() => {
    handleIntzPreline();

    return () => {
      undefined;
    };
  }, [products]);

  // useEffect(() => {
  //   console.log(isCart);

  //   //   // @hook(Combine Merged)
  //   //   const isMerged = getCombineMerged(isProducts.cartProduct, isCart);

  //   //   // setProducts(isMerged);
  //   //   setProducts((prev) => ({
  //   //     ...prev,
  //   //     products: isMerged,
  //   //   }));

  //   //   console.log(isProducts);

  //   return () => {
  //     undefined;
  //   };
  // }, [isCart]);

  // const [isUseCoupon, setUseCoupon] = useState({
  //   discount: 0,
  //   totalWithDiscount: 0,
  // });

  // // coupon
  // useEffect(() => {
  //   if (isCoupon) {
  //     (async () => {
  //       try {
  //         const getDataCoupon = await getFetch(
  //           `/api/coupons?populate=*&filters[couponCode][$eq]=${isCoupon}`
  //         );
  //         const isDataCoupon = getDataCoupon?.data[0];

  //         if (isDataCoupon && products.length > 0) {
  //           const isPrice = products[0].priceSale;
  //           const isSubTotal = getTotalCart(products);
  //           const discntType = isDataCoupon.type;
  //           const discntAmount = parseFloat(isDataCoupon.amount) || 0;

  //           if (discntType === 'percentage') {
  //             const calculatedDiscount =
  //               parseInt(isDataCoupon.amount) === 100
  //                 ? isSubTotal * (discntAmount / 100)
  //                 : isPrice * (discntAmount / 100);

  //             const totalAfterDiscount = isSubTotal - calculatedDiscount;

  //             setUseCoupon({
  //               discount: calculatedDiscount,
  //               totalWithDiscount: totalAfterDiscount,
  //             });
  //           }
  //         }
  //       } catch (error) {
  //         console.error('Error fetching coupon data:', error);
  //       }
  //     })();
  //   }

  //   return () => {
  //     undefined;
  //   };
  // }, [isCoupon, products]);

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
          onAlert(
            'error',
            `You’re at the step limit. Reduce steps to change the quantity!`
          );
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
  // const handleCoupon = async () => {
  //   try {
  //     const getCouponCode = getValues('coupon').trim();
  //     if (!getCouponCode) return;

  //     const currentCoupon = hasCookie('_cart')
  //       ? JSON.parse(getCookie('_cart')).coupon
  //       : isCoupon;

  //     if (currentCoupon) {
  //       return onAlert(
  //         getCouponCode,
  //         'error',
  //         'Sorry, you already have a coupon in use!'
  //       );
  //     }

  //     // @check(coupon)
  //     const { data } = await getFetch(
  //       `/api/coupons?populate=*&filters[couponCode][$eq]=${getCouponCode}`
  //     );
  //     const coupon = data?.[0];

  //     if (!coupon) {
  //       return onAlert(
  //         getCouponCode,
  //         'error',
  //         'Sorry, coupon not found or invalid!'
  //       );
  //     }

  //     const { expirationDate, includedProducts = [], type, amount } = coupon;
  //     const idProducts = products[0].documentId;
  //     const isSubTotal = getTotalCart(products);

  //     if (dayjs().isAfter(dayjs(expirationDate))) {
  //       return onAlert(getCouponCode, 'error', 'Sorry, coupon has expired!');
  //     }

  //     if (
  //       !includedProducts.some((product) => product.documentId === idProducts)
  //     ) {
  //       return onAlert(
  //         getCouponCode,
  //         'error',
  //         'Sorry, coupon is not valid for this product!'
  //       );
  //     }

  //     const discntAmount = parseFloat(amount) || 0;
  //     let calculatedDiscount = 0;

  //     if (type === 'percentage') {
  //       calculatedDiscount =
  //         discntAmount === 100
  //           ? isSubTotal
  //           : products[0].priceSale * (discntAmount / 100);

  //       setUseCoupon({
  //         discount: calculatedDiscount,
  //         totalWithDiscount: isSubTotal - calculatedDiscount,
  //       });

  //       dispatch(applyCoupon(getCouponCode));
  //       onAlert(
  //         getCouponCode,
  //         'success',
  //         `<strong>Coupon applied!</strong> You saved ${discntAmount}%`
  //       );
  //     } else {
  //       // @implement logic for non-percentage coupons if needed
  //     }

  //     setValue('coupon', '');
  //   } catch (error) {
  //     console.error('[error] fetching coupons:', error);
  //     onAlert(null, 'error', 'An error occurred. Please try again.');
  //   }
  // };

  // // @event(remove - coupon)
  // const clearCoupon = () => dispatch(removeCoupon());
  // const clearCart = () => dispatch(removeCart());

  return (
    <>
      <section className="relative block h-full min-h-full w-full">
        <div className="mb-4 block w-full">
          <h2 className="text-xl font-medium capitalize">Order summary</h2>
          <span className="mt-1.5 text-sm font-light text-gray-400">
            Checkout your ticket for better experience order item.
          </span>
        </div>

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
                  <div className="relative flex w-full flex-row items-center justify-between gap-y-0.5">
                    <span className="me-3 text-sm font-light">
                      Qty: {gtRslt.quantity}
                    </span>

                    {gtRslt.documentId !== 'sn4ujm0d1ebbc8lme1ihzsa9' ? (
                      <div className="hs-dropdown relative inline-flex [--auto-close:inside] [--placement:bottom-right] [--strategy:absolute]">
                        <button
                          id="hsCA25Dropdown_UpdatedQty"
                          type="button"
                          className="hs-dropdown-toggle inline-flex items-center gap-x-2 text-sm font-normal text-primary underline focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                          aria-haspopup="menu"
                          aria-label="Coinfest Asia 2025 (Dropdown - Quantity)"
                          aria-roledescription="Dropdown"
                          aria-expanded="false"
                        >
                          Add more
                        </button>

                        <div
                          className="hs-dropdown-menu duration mt-1.5 hidden rounded-[10px] border border-gray-200 bg-gray-50 px-1 py-1 opacity-0 transition-[opacity,margin] hs-dropdown-open:opacity-100"
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

            {/* @total with tax (11%) */}
            <div className="grid-cols-2 supports-grid:grid">
              <span className="text-start text-sm font-normal">{`Total (inc. Tax)`}</span>
              <span className="text-end text-base font-medium">
                {/* {isCoupon
                  ? converterTotalCart(isUseCoupon.totalWithDiscount)
                  : converterTotalCart(getTotalCart(products))} */}
                {converterTotalCart(getTotalCart(products))}
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
