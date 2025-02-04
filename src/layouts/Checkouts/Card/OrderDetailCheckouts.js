import React, { useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { toast } from 'sonner';
import dayjs from 'dayjs';

// @redux
import { useSelector, useDispatch } from 'react-redux';
import {
  updateQuantity,
  removeItemCart,
  applyCoupon,
  removeCoupon,
} from '@reduxState/slices';

// @lib/controller & helper
import { useCart } from '@lib/hooks/cart/Cart';
import {
  currencyConverter,
  converterTotalCart,
} from '@lib/helper/CalculateCartContext';
import { encodeData } from '@lib/helper/Configuration';
import { getTotalProduct, getTotalCart } from '@lib/helper/CartContext';

// @components
import ToastAlerts from '@components/UI/Alerts/ToastAlert';
import EmptyCheckouts from '@components/UI/Cards/EmptyCheckout';

// @layouts
// import PromoCouponCode from '@layouts/Checkouts/PromoCouponCode/PromoCouponCode';

// @card(theme)
const style = {
  rc33x0dgm6tm707jghffuip4: 'bg-vip45',
};

const OrderDetailCheckouts = ({
  items: { products, coupons, isSubmited },
  stepForm,
  register,
  setValue,
  getValues,
  errors,
  children,
}) => {
  const dispatch = useDispatch();
  const { coupon: isCoupon } = useSelector((state) => state.cart);
  const { getTotalItems } = useCart();
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
        const getDataCoupon = await fetch('/api/data/coupons?sv=coinfestasia', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ data: encodeData(isCoupon) }),
        }).then((res) => res.json());
        const isDataCoupon = getDataCoupon !== null ? getDataCoupon : null;

        if (isDataCoupon !== null) {
          // @check(limit Coupon)
          if (
            parseInt(isDataCoupon?.usage, 10) >=
            parseInt(isDataCoupon?.limitUsage, 10)
          ) {
            toast.custom(
              (t) => (
                <ToastAlerts
                  id={t}
                  position="bottom-0 inset-x-2.5 sm:inset-x-3 top-auto"
                  type="error"
                  visible={true}
                  label={`<strong>Sorry</strong>, <br/>Coupon usage limit reached!`}
                />
              ),
              { unstyled: true, duration: 5000 }
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
        } else {
          setValue('coupon', '');
          dispatch(removeCoupon());
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
            const getDataCoupon = await fetch(
              '/api/data/coupons?sv=coinfestasia',
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data: encodeData(isCoupon) }),
              }
            ).then((res) => res.json());
            const isDataCoupon = getDataCoupon;
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
                position="bottom-0 inset-x-2.5 sm:inset-x-3 top-auto"
                type="error"
                visible={true}
                label={`<strong>Sorry</strong>, reduce steps to change the quantity!`}
              />
            ),
            { unstyled: true, duration: 5000 }
          );
        }
      }

      if (newQty > Number(cartItems?.stock)) {
        toast.custom(
          (t) => (
            <ToastAlerts
              id={t}
              position="bottom-0 inset-x-2.5 sm:inset-x-3 top-auto"
              type="error"
              visible={true}
              label={`The product has reached its stock limit!`}
            />
          ),
          { unstyled: true, duration: 5000 }
        );
        return;
      }
      dispatch(updateQuantity({ products: cartItems, qty: newQty }));
    } catch (error) {
      // console.error('[Error] fetching:', error);
    }
  };
  const decreaseQty = (cartItems, i) => updateCartQuantity(cartItems, i, false);
  const increaseQty = (cartItems, i) => updateCartQuantity(cartItems, i, true);

  // @handle(change - coupon)
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
              position="bottom-0 inset-x-2.5 sm:inset-x-3 top-auto"
              type="error"
              visible={true}
              label={`<strong>Sorry</strong>, you already have a coupon in use!`}
            />
          ),
          { unstyled: true, duration: 5000 }
        );
        return;
      }

      // @check(coupon)
      const checkDataCoupon = await fetch('/api/data/coupons?sv=coinfestasia', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: encodeData(getCouponCode) }),
      }).then((res) => res.json());
      const coupon = checkDataCoupon;
      if (!coupon) {
        setUseCoupon({ ...isUseCoupon, loading: false });
        toast.custom(
          (t) => (
            <ToastAlerts
              id={t}
              position="bottom-0 inset-x-2.5 sm:inset-x-3 top-auto"
              type="error"
              visible={true}
              label={`<strong>Sorry</strong>, coupon not found or invalid!`}
            />
          ),
          { unstyled: true, duration: 5000 }
        );
        return;
      }
      // @check(expiration product)
      const { expirationDate = [], type, amount } = coupon;
      if (dayjs().isAfter(dayjs(expirationDate))) {
        setUseCoupon({ ...isUseCoupon, loading: false });
        toast.custom(
          (t) => (
            <ToastAlerts
              id={t}
              position="bottom-0 inset-x-2.5 sm:inset-x-3 top-auto"
              type="error"
              visible={true}
              label={`<strong>Sorry</strong>, coupon has expired!`}
            />
          ),
          { unstyled: true, duration: 5000 }
        );
        return;
      }
      // @check(limit coupon)
      if (parseInt(coupon?.usage, 10) >= parseInt(coupon?.limitUsage, 10)) {
        setUseCoupon({ ...isUseCoupon, loading: false });
        toast.custom(
          (t) => (
            <ToastAlerts
              id={t}
              position="bottom-0 inset-x-2.5 sm:inset-x-3 top-auto"
              type="error"
              visible={true}
              label={`<strong>Sorry</strong>, <br/>Coupon usage limit reached!`}
            />
          ),
          { unstyled: true, duration: 5000 }
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
              position="bottom-0 inset-x-2.5 sm:inset-x-3 top-auto"
              type="error"
              visible={true}
              label={`<strong>Sorry</strong>, coupon is not valid for this product!`}
            />
          ),
          { unstyled: true, duration: 5000 }
        );
        return;
      }
      if (isTotalCart < coupon?.minQtyPromo) {
        setUseCoupon({ ...isUseCoupon, loading: false });
        toast.custom(
          (t) => (
            <ToastAlerts
              id={t}
              position="bottom-0 inset-x-2.5 sm:inset-x-3 top-auto"
              type="error"
              visible={true}
              label={`<strong>Sorry</strong>, Minimum quantity <br/>of <strong>${coupon?.minQtyPromo}</strong> required for this coupon!`}
            />
          ),
          { unstyled: true, duration: 5000 }
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
              position="bottom-0 inset-x-2.5 sm:inset-x-3 top-auto"
              type="success"
              visible={true}
              label={`<strong>Coupon applied!</strong>, <br/> You saved ${discntAmount}%`}
            />
          ),
          { unstyled: true, duration: 5000 }
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
            position="bottom-0 inset-x-2.5 sm:inset-x-3 top-auto"
            type="success"
            visible={true}
            label={`<strong>Sorry</strong>, An error occurred. Please try again...`}
          />
        ),
        { unstyled: true, duration: 5000 }
      );
      // console.error('[Error] fetching coupons:', error);
    }
    // setUseCoupon({ ...isUseCoupon, loading: false });
  };

  const handleKeyDown = (e) => {
    if (e?.key === 'Enter') {
      e?.preventDefault();
      handleCoupon();
    }
  };

  // @event(remove - coupon)
  const clearCoupon = () => dispatch(removeCoupon());

  return (
    <>
      <section
        className={`relative block h-auto min-h-[auto] w-full xl:h-full xl:min-h-full ${isSubmited === true ? '!pointer-events-none !select-none' : '!pointer-events-auto !select-auto'}`}
      >
        {/* @group(sticky) */}
        <div
          className={`relative top-auto z-[2] block xl:sticky xl:top-4.5 ${isSubmited === true ? '!pointer-events-none !select-none' : '!pointer-events-auto !select-auto'}`}
        >
          <div className="mb-4 block w-full px-2.5 sm:px-0">
            <h2 className="text-xl font-medium capitalize">{`Order summary`}</h2>
          </div>
          <div className="my-3 flex w-full border-t border-dashed border-gray-200 px-2.5"></div>
          <div className="relative mb-7 block w-full px-2.5 sm:mb-6 sm:px-0">
            <div
              className={`absolute inset-x-0 inset-y-0 bg-white/40 ${isSubmited === true ? '!pointer-events-none z-50 !select-none opacity-100 backdrop-blur-[2px]' : '!pointer-events-auto -z-px !select-auto opacity-0'}`}
            ></div>
            <div
              className={`mb-3 flex w-full flex-row items-center justify-between`}
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
                    `flex h-[113px] w-full max-w-[245px] flex-col justify-between rounded-xl px-3 py-2`,
                    style[gtRslt.documentId] || 'bg-regular45'
                  )}
                >
                  <h3 className="mb-2.5 text-lg font-medium leading-initial text-white">
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
                          {gtRslt.documentId !== 'sn4ujm0d1ebbc8lme1ihzsa9' ? (
                            <button
                              id="tcktCa25Btn_MinQtyCheckouts"
                              className={`ca25BtnQtyDark`}
                              type="button"
                              aria-label="Button for Quantity(Min - Checkouts)"
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
                            value={gtRslt?.quantity}
                            tabIndex="-1"
                            maxLength="5"
                            minLength={gtRslt?.quantity || 1}
                            readOnly={true}
                            disabled={true}
                          />
                          {gtRslt?.documentId !== 'sn4ujm0d1ebbc8lme1ihzsa9' ? (
                            <button
                              id="tcktCa25Btn_MaxQtyCheckouts"
                              className={`ca25BtnQtyDark`}
                              type="button"
                              aria-label="Button for Quantity(Max - Checkouts)"
                              disabled={
                                gtRslt?.quantity >= 15 || getTotalItems >= 15
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
                <div className="flex flex-col items-end justify-between pt-1.5">
                  {gtRslt?.documentId === 'sn4ujm0d1ebbc8lme1ihzsa9' ? (
                    <span className="text-base font-medium sm:text-lg">
                      {currencyConverter(gtRslt?.priceSale ?? gtRslt?.price)}
                    </span>
                  ) : (
                    <span className="text-base font-medium sm:text-lg">
                      {currencyConverter(
                        getTotalProduct(
                          gtRslt?.quantity,
                          gtRslt?.priceSale ?? gtRslt?.price
                        )
                      )}
                    </span>
                  )}
                  {products?.length > 1 && (
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
                  )}
                </div>
              </div>
            ))}

            {/* @products(Empty) */}
            {products?.length <= 0 && <EmptyCheckouts />}
          </div>
          {/* {products?.length > 0 && (
            <>
              <div className="mx-0 my-4 flex w-full border-t border-dashed border-gray-200"></div>
              <div className="relative mb-6 block w-full">
                <div
                  className={`absolute inset-x-0 inset-y-0 bg-white/40 ${isSubmited === true ? '!pointer-events-none z-50 !select-none opacity-100 backdrop-blur-[2px]' : '!pointer-events-auto -z-px !select-auto opacity-0'}`}
                ></div>
                <h2 className="mb-3 px-2.5 text-start text-base font-medium sm:px-0">
                  {`Save More`}
                </h2>
                <PromoCouponCode
                  items={{
                    productsStore: products,
                    couponsStore: coupons?.data,
                    couponCart: isCoupon,
                  }}
                  onEventClick={handleCoupon}
                />
              </div>
            </>
          )} */}

          {/* @coupon */}
          <div
            className={`relative mb-4 w-full flex-row items-center justify-between px-2.5 sm:px-0 ${products?.length <= 0 ? 'hidden' : 'flex'}`}
          >
            <div
              className={`absolute inset-x-0 inset-y-0 bg-white/40 ${isSubmited === true ? '!pointer-events-none z-50 !select-none opacity-100 backdrop-blur-[2px]' : '!pointer-events-auto -z-px !select-auto opacity-0'}`}
            ></div>
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
              {`Enter code`}
            </button>
          </div>

          <div
            id="hsCA25CollapseCouponCodeCheckouts"
            className="hs-collapse hidden w-full overflow-hidden px-2.5 transition-[height] duration-300 hs-collapse-open:mb-4.5 sm:px-0"
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
                  onKeyDown={handleKeyDown}
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
                  {isUseCoupon?.loading === false ? (
                    'Apply'
                  ) : (
                    <div
                      className="block size-5 animate-spin items-center justify-center rounded-full border-[2.5px] border-current border-t-transparent font-medium text-white opacity-80"
                      role="status"
                      aria-label="Coinfest Asia 2025 Loading Coupon Usage)"
                      aria-labelledby="Coinfest Asia 2025 Loading Coupon Usage)"
                    >
                      <span className="sr-only">Loading...</span>
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* @order-summary */}
          <div className="relative mb-0 block space-y-3 px-2.5 sm:px-0 xl:mb-8">
            <div
              className={`absolute inset-x-0 inset-y-0 bg-white/40 ${isSubmited === true ? '!pointer-events-none z-50 !select-none opacity-100 backdrop-blur-[2px]' : '!pointer-events-auto -z-px !select-auto opacity-0'}`}
            ></div>

            {/* @subtotal */}
            <div className="grid-cols-2 supports-grid:grid">
              <span className="text-start text-sm font-normal">{`Subtotal`}</span>
              <span className="text-end text-base font-medium">
                {currencyConverter(getTotalCart(products))}
              </span>
            </div>

            {/* @coupon */}
            {products.length > 0 && isCoupon ? (
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
                    aria-label="Coinfest Asia 2025 Remove - Coupon"
                    aria-roledescription="Coinfest Asia 2025 Remove - Coupon"
                    onClick={(e) => {
                      e.preventDefault();
                      clearCoupon();
                    }}
                    disabled={isSubmited}
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
            ) : null}

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
