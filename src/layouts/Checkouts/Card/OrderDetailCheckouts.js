import React, { useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { toast } from 'sonner';
import dayjs from 'dayjs';

// @redux
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, applyCoupon, removeCoupon } from '@reduxState/slices';

// @lib/controller & helper
import { getFetch } from '@lib/controller/API';
import {
  currencyConverter,
  converterTotalCart,
} from '@lib/helper/CalculateCartContext';
import { getTotalProduct, getTotalCart } from '@lib/helper/CartContext';
import { useCart } from '@lib/hooks/Cart';

// @components
import ToastAlerts from '@components/UI/Alerts/ToastAlert';
import EmptyCheckouts from '@components/UI/Cards/EmptyCheckout';

// @layouts
import PromoCouponCode from '@layouts/Checkouts/PromoCouponCode/PromoCouponCode';

// @card(theme)
const style = {
  sn4ujm0d1ebbc8lme1ihzsa9: 'bg-cyan-400',
  rc33x0dgm6tm707jghffuip4: 'bg-black-800',
};

const OrderDetailCheckouts = ({
  products,
  coupons,
  stepForm,
  register,
  setValue,
  getValues,
  errors,
  children,
}) => {
  const dispatch = useDispatch();
  const { coupon: isCoupon } = useSelector((state) => state.cart);
  const { checkTotalQtyCart } = useCart();
  const [isUseCoupon, setUseCoupon] = useState({
    coupon: null,
    discount: 0,
    totalWithDiscount: 0,
    loading: false,
  });
  const [isTotalCart, setTotalCart] = useState(0);

  const hndleIntzCoupon = async () => {
    try {
      if (isCoupon !== null) {
        const getDataCoupon = await getFetch(
          `/api/coupons?populate=*&filters[couponCode][$eq]=${isCoupon}`
        );
        const isDataCoupon = getDataCoupon?.data[0];
        // @check(Limit Coupon)
        if (
          parseInt(isDataCoupon?.usage, 10) >=
          parseInt(isDataCoupon?.limitUsage, 10)
        ) {
          toast.custom(
            (t) => (
              <ToastAlerts
                id={t}
                position="bottom-[78px] inset-x-2.5 sm:inset-x-3 top-auto"
                type="error"
                visible={true}
                label={`<strong>Sorry</strong>, <br/>Coupon usage limit reached!`}
              />
            ),
            { duration: 5000 }
          );
          setValue('coupon', '');
          return;
        }
        // @check(includes Product)
        const includedProductIds = isDataCoupon?.includedProducts?.map(
          (product) => product.documentId
        );
        const validProducts = products?.filter((product) =>
          includedProductIds?.includes(product.documentId)
        );
        if (validProducts?.length > 0) {
          const isPrice =
            validProducts[0]?.priceSale ?? validProducts[0]?.price;
          const isSubTotal = getTotalCart(products);
          const discntAmount = parseFloat(isDataCoupon?.amount) || 0;
          const calculatedDiscount =
            parseInt(isDataCoupon?.amount) >= 100
              ? isSubTotal * (discntAmount / 100)
              : isPrice * (discntAmount / 100);
          const totalAfterDiscount = isSubTotal - calculatedDiscount;
          setUseCoupon({
            ...isUseCoupon,
            discount: calculatedDiscount,
            totalWithDiscount: totalAfterDiscount,
          });
        }
      }
    } catch (error) {
      console.error('[Error] fetching coupon data:', error);
    }
  };
  // @hook(Init)
  useEffect(() => {
    hndleIntzCoupon();
    setTotalCart(getTotalCart(products));
    return () => {
      undefined;
    };
  }, [products]);

  // @quantity
  const updateCartQuantity = async (cartItems, idx, isIncrease) => {
    try {
      let newQty = cartItems?.quantity;
      if (isIncrease) {
        newQty = Math.min(cartItems?.quantity + 1, 15);
      } else {
        if (!(stepForm[idx] + 1 >= cartItems?.quantity)) {
          // @check(coupon)
          if (isCoupon !== null) {
            const getDataCoupon = await getFetch(
              `/api/coupons?populate=*&filters[couponCode][$eq]=${isCoupon}`
            );
            const isDataCoupon = getDataCoupon?.data[0];
            if (isTotalCart < isDataCoupon?.minQtyPromo) {
              dispatch(removeCoupon());
            }
          }
          newQty = Math.max(cartItems?.quantity - 1, 1);
        } else {
          toast.custom(
            (t) => (
              <ToastAlerts
                id={t}
                position="bottom-[78px] inset-x-2.5 sm:inset-x-3 top-auto"
                type="error"
                visible={true}
                label={`<strong>Sorry</strong>, reduce steps to change the quantity!`}
              />
            ),
            { duration: 5000 }
          );
        }
      }

      if (newQty > Number(cartItems?.stock)) {
        toast.custom(
          (t) => (
            <ToastAlerts
              id={t}
              position="bottom-[78px] inset-x-2.5 sm:inset-x-3 top-auto"
              type="error"
              visible={true}
              label={`The product has reached its stock limit!`}
            />
          ),
          { duration: 5000 }
        );
        return;
      }
      dispatch(updateQuantity({ products: cartItems, qty: newQty }));
    } catch (error) {
      console.error('[Error] fetching:', error);
    }
  };
  const decreaseQty = (cartItems, i) => updateCartQuantity(cartItems, i, false);
  const increaseQty = (cartItems, i) => updateCartQuantity(cartItems, i, true);

  // // @handle(change - coupon)
  const handleCoupon = async (data) => {
    const getData = data;
    try {
      const getCouponCode =
        getData !== undefined ? getData : getValues('coupon').trim();
      if (!getCouponCode) return;
      setUseCoupon({ ...isUseCoupon, loading: true });

      const isSubTotal = getTotalCart(products);
      if (isCoupon !== null) {
        setUseCoupon({ ...isUseCoupon, loading: false });
        toast.custom(
          (t) => (
            <ToastAlerts
              id={t}
              position="bottom-[78px] inset-x-2.5 sm:inset-x-3 top-auto"
              type="error"
              visible={true}
              label={`<strong>Sorry</strong>, you already have a coupon in use!`}
            />
          ),
          { duration: 5000 }
        );
        return;
      }

      // @check(coupon)
      const { data } = await getFetch(
        `/api/coupons?populate=*&filters[couponCode][$eq]=${getCouponCode}`
      );
      const coupon = data?.[0];
      if (!coupon) {
        setUseCoupon({ ...isUseCoupon, loading: false });
        toast.custom(
          (t) => (
            <ToastAlerts
              id={t}
              position="bottom-[78px] inset-x-2.5 sm:inset-x-3 top-auto"
              type="error"
              visible={true}
              label={`<strong>Sorry</strong>, coupon not found or invalid!`}
            />
          ),
          { duration: 5000 }
        );
        return;
      }
      // @check(Expiration Product)
      const { expirationDate = [], type, amount } = coupon;
      if (dayjs().isAfter(dayjs(expirationDate))) {
        setUseCoupon({ ...isUseCoupon, loading: false });
        toast.custom(
          (t) => (
            <ToastAlerts
              id={t}
              position="bottom-[78px] inset-x-2.5 sm:inset-x-3 top-auto"
              type="error"
              visible={true}
              label={`<strong>Sorry</strong>, coupon has expired!`}
            />
          ),
          { duration: 5000 }
        );
        return;
      }
      // @check(Limit Coupon)
      if (parseInt(coupon?.usage, 10) >= parseInt(coupon?.limitUsage, 10)) {
        setUseCoupon({ ...isUseCoupon, loading: false });
        toast.custom(
          (t) => (
            <ToastAlerts
              id={t}
              position="bottom-[78px] inset-x-2.5 sm:inset-x-3 top-auto"
              type="error"
              visible={true}
              label={`<strong>Sorry</strong>, <br/>Coupon usage limit reached!`}
            />
          ),
          { duration: 5000 }
        );
        return;
      }
      // @check(includes Product)
      const includedProductIds = coupon?.includedProducts?.map(
        (product) => product?.documentId
      );
      const validProducts = products?.filter((product) =>
        includedProductIds.includes(product?.documentId)
      );
      if (validProducts?.length === 0) {
        setUseCoupon({ ...isUseCoupon, loading: false });
        toast.custom(
          (t) => (
            <ToastAlerts
              id={t}
              position="bottom-[78px] inset-x-2.5 sm:inset-x-3 top-auto"
              type="error"
              visible={true}
              label={`<strong>Sorry</strong>, coupon is not valid for this product!`}
            />
          ),
          { duration: 5000 }
        );
        return;
      }
      // Hitung total kuantitas produk yang termasuk
      if (isTotalCart < coupon?.minQtyPromo) {
        setUseCoupon({ ...isUseCoupon, loading: false });
        toast.custom(
          (t) => (
            <ToastAlerts
              id={t}
              position="bottom-[78px] inset-x-2.5 sm:inset-x-3 top-auto"
              type="error"
              visible={true}
              label={`<strong>Sorry</strong>, Minimum quantity <br/>of <strong>${coupon?.minQtyPromo}</strong> required for this coupon!`}
            />
          ),
          { duration: 5000 }
        );
        return;
      }

      // @check(valid Product)
      const discntAmount = parseFloat(amount) || 0;
      let calculatedDiscount = 0;
      if (type === 'percentage') {
        calculatedDiscount =
          parseInt(discntAmount) >= 100
            ? isSubTotal
            : (validProducts[0]?.priceSale ?? validProducts[0]?.price) *
              (discntAmount / 100);
        setTotalCart(isSubTotal - calculatedDiscount);
        setUseCoupon({
          ...isUseCoupon,
          discount: calculatedDiscount,
          totalWithDiscount: isSubTotal - calculatedDiscount,
          loading: false,
        });

        dispatch(applyCoupon(getCouponCode));
        toast.custom(
          (t) => (
            <ToastAlerts
              id={t}
              position="bottom-[78px] inset-x-2.5 sm:inset-x-3 top-auto"
              type="success"
              visible={true}
              label={`<strong>Coupon applied!</strong>, <br/> You saved ${discntAmount}%`}
            />
          ),
          { duration: 5000 }
        );
      } else {
        // @implement logic for non-percentage coupons if needed
      }

      setValue('coupon', '');
      // setUseCoupon({ ...isUseCoupon, loading: false });
    } catch (error) {
      // setUseCoupon({ ...isUseCoupon, loading: false });
      toast.custom(
        (t) => (
          <ToastAlerts
            id={t}
            position="bottom-[78px] inset-x-2.5 sm:inset-x-3 top-auto"
            type="success"
            visible={true}
            label={`<strong>Sorry</strong>, An error occurred. Please try again...`}
          />
        ),
        { duration: 5000 }
      );
      // console.error('[Error] fetching coupons:', error);
    }
    // setUseCoupon({ ...isUseCoupon, loading: false });
  };

  // // @event(remove - coupon)
  const clearCoupon = () => dispatch(removeCoupon());

  return (
    <>
      <section className="relative block h-auto min-h-[auto] w-full xl:h-full xl:min-h-full">
        <div className="mb-4 block w-full">
          <h2 className="text-xl font-medium capitalize">{`Order summary`}</h2>
          <span className="mt-1.5 text-sm font-light text-gray-400">
            {`Checkout your ticket for better experience.`}
          </span>
        </div>

        {/* @group(sticky) */}
        <div className="relative top-auto z-[2] block xl:sticky xl:top-[109px]">
          <div className="my-3 flex w-full border-t border-dashed border-gray-200"></div>
          <div className="mb-7 block w-full sm:mb-6">
            <div
              className={`mb-4 flex w-full flex-row items-center justify-between`}
            >
              <h2 className="text-start text-base font-medium">
                {`Your Tickets`}
              </h2>
              <span className="text-end text-base font-medium">{`Total`}</span>
            </div>

            {/* @products */}
            {products?.slice(0, 3).map((gtRslt, i) => (
              <div
                className="mb-3 flex w-full flex-row justify-between last:mb-0"
                key={i}
              >
                <div
                  className={twMerge(
                    `flex w-full max-w-[245px] flex-row space-x-3 rounded-xl bg-primary px-3 py-2`,
                    style[gtRslt.documentId] || 'bg-primary'
                  )}
                >
                  {/* <div className="h-full w-4.5 rounded-md bg-primary"></div> */}
                  <div className="mb-1 flex w-full flex-col">
                    <h3 className="mb-2.5 text-lg font-medium text-white">
                      {gtRslt.name}
                    </h3>
                    <div className="flex flex-row items-center justify-between gap-x-3">
                      <span className="text-lg font-medium text-white">
                        {currencyConverter(gtRslt.priceSale ?? gtRslt.price)}
                      </span>
                      <div className="flex flex-row items-center">
                        {gtRslt.documentId === 'sn4ujm0d1ebbc8lme1ihzsa9' && (
                          <span className="mr-2.5 text-sm text-white">
                            Qty :{' '}
                          </span>
                        )}
                        <div
                          className="hs-dropdown-menu duration mt-0 rounded-[10px] border border-gray-200 bg-gray-50 px-1 py-1 opacity-100 *:flex"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="hsCA25Dropdown_UpdatedQty"
                        >
                          <div className="inline-flex flex-row gap-x-1.5">
                            {gtRslt.documentId !==
                            'sn4ujm0d1ebbc8lme1ihzsa9' ? (
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
                                  decreaseQty(gtRslt, i);
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
                            ) : null}
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
                            {gtRslt.documentId !==
                            'sn4ujm0d1ebbc8lme1ihzsa9' ? (
                              <button
                                id="tcktCa25Btn_MaxQtyCheckouts"
                                className={`tktCA25Btn_Qty`}
                                type="button"
                                aria-label="Button for Quantity(Max - Checkouts)"
                                aria-labelledby="Button for Quantity(Max - Checkouts)"
                                disabled={
                                  gtRslt.quantity >= 15
                                }
                                onClick={(e) => {
                                  e.preventDefault();
                                  increaseQty(gtRslt, i);
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
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between pt-1.5">
                  <span className="text-base font-medium sm:text-lg">
                    {currencyConverter(
                      getTotalProduct(
                        gtRslt.quantity,
                        gtRslt.priceSale ?? gtRslt.price
                      )
                    )}
                  </span>
                  {/* {products?.length > 1 && (
                    <button
                      className="mb-1 ms-3 flex h-8 w-8 flex-col items-center justify-center rounded-lg border border-solid border-red-500 bg-red-500/20 focus-visible:outline-none"
                      type="button"
                      tabIndex={-1}
                      aria-label="Coinfest Asia 2025 (Remove - Coupon)"
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(removeItemCart(gtRslt?.documentId));
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
                  )} */}
                </div>
              </div>
            ))}

            {/* @products(Empty) */}
            {products.length <= 0 && <EmptyCheckouts />}
          </div>
          {products.length > 0 && (
            <>
              <div className="my-4 flex w-full border-t border-dashed border-gray-200"></div>
              <div className="relative mb-6 block w-full">
                <h2 className="mb-3 text-start text-base font-medium">
                  {`Save More`}
                </h2>
                <PromoCouponCode
                  coupons={coupons?.data}
                  totalCart={isTotalCart}
                  onEventClick={handleCoupon}
                />
              </div>
            </>
          )}

          {/* @coupon */}
          <div
            className={`mb-4 w-full flex-row items-center justify-between ${products?.length <= 0 ? 'hidden' : 'flex'}`}
          >
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
            <button
              id="hsCA25Dropdown_CouponCodeCheckouts"
              className="hs-collapse-toggle inline-flex items-center gap-x-2 text-sm font-normal text-primary underline focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              type="button"
              aria-expanded="false"
              aria-label="Coinfest Asia 2025 (Dropdown - Coupon Code)"
              data-hs-collapse="#hsCA25CollapseCouponCodeCheckouts"
            >
              Enter code
            </button>
          </div>

          <div
            id="hsCA25CollapseCouponCodeCheckouts"
            className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300 hs-collapse-open:mb-4.5"
            aria-label="Coinfest Asia 2025 Group (Dropdown - Coupon Code)"
          >
            <div className="h-14 rounded-[10px] border border-gray-200 bg-gray-50 px-1 py-1 opacity-100">
              <div className="inline-flex w-full flex-row gap-x-1.5">
                <input
                  className={`w-fill cursor-default border-0 ${errors[`coupon`] && 'bg-red-500'} bg-transparent p-0 px-3.5 py-3 pr-4 text-start text-sm font-normal text-black-900 focus:ring-0 focus-visible:outline-none focus-visible:ring-0`}
                  type="text"
                  aria-label="Coinfest Asia 2025 Coupon Code Input"
                  aria-roledescription="Coinfest Asia 2025 Coupon Code Input"
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
                  id="tcktCa25SubmitCouponCheckouts"
                  className={`tktCA25Btn_Coupon flex w-[159px] flex-col items-center justify-center rounded-lg bg-primary px-1 py-1 text-sm font-normal text-white`}
                  type="button"
                  aria-label="Coinfest Asia 2025 Button Coupon Submit Checkouts"
                  onClick={(e) => {
                    e.preventDefault();
                    handleCoupon();
                  }}
                >
                  {isUseCoupon.loading === false ? (
                    'Apply'
                  ) : (
                    <div
                      className="block size-5 animate-spin items-center justify-center rounded-full border-[2.5px] border-current border-t-transparent font-medium text-white opacity-80"
                      role="status"
                      aria-label="Coinfest Asia 2025 (Loading - Coupon Usage)"
                      aria-labelledby="Coinfest Asia 2025 (Loading - Coupon Usage)"
                    >
                      <span className="sr-only">Loading...</span>
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* @order-summary */}
          <div className="mb-0 block space-y-3 xl:mb-8">
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
                  <span>Discount:</span>
                  <span className="font-semibold uppercase text-primary">
                    ({isCoupon})
                  </span>
                </div>
                <div className="inline-flex items-start justify-end">
                  <div className="text-base font-medium leading-initial text-gray-400">
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
                  ? converterTotalCart(isUseCoupon?.totalWithDiscount)
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
