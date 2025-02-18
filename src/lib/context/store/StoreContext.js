import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { toast } from 'sonner';
import dayjs from 'dayjs';

// @redux
import { useDispatch, useSelector } from 'react-redux';
import {
  updateQuantity,
  applyCoupon,
  removeCoupon,
  addItemToCart,
} from '@reduxState/slices';

// @lib
import { currencyConverter } from '@lib/helper/CalculateCart';
import { getCombineMerged, encodeData } from '@lib/helper/Configuration';

// @components
import ToastAlerts from '@components/UI/Alerts/ToastAlert';

// @context(global)
const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { data: isCart, coupon: isCoupon } = useSelector((state) => state.cart);
  const [isStore, setStore] = useState({
    coupon: null,
    cart: [],
    products: isCart,
    totalQty: 0,
    totalOrder: 0,
    typeDiscnt: null,
    discntAmount: 0,
    discntAmountTotal: 0,
    totalWithDiscount: 0,
  });
  const [isUseCoupon, setUseCoupon] = useState(false);
  const [isProductsSession, setProductsSession] = useState({
    id_product: null,
    loading: false,
  });

  // @initialize(store)
  const hndleHookProducts = useCallback(async () => {
    if (!isCart || isCart?.length > 3) return;
    try {
      const allProducts = await Promise.all(
        isCart?.map(async (data) => {
          const rsHook = await fetch('/api/data/products?sv=coinfestasia', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: encodeData(data?.id_product) }),
          }).then((res) => res?.json());
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
      const setMerged = getCombineMerged(allProducts, isCart);
      if (setMerged) {
        setStore((prev) => ({
          ...prev,
          cart: setMerged,
          totalOrder: 0,
        }));
      }
    } catch (err) {
      return;
    }
  }, [isCart]);
  //  @hook(store)
  useEffect(() => {
    hndleHookProducts();
  }, [isCart]);

  const hndleHookIntzCoupon = useCallback(
    async (items, total) => {
      if (isCoupon !== null) {
        try {
          const isDataCoupon = await fetch(
            '/api/data/coupons?sv=coinfestasia',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ data: encodeData(isCoupon) }),
            }
          ).then((res) => res.json());
          const isSubTotal = total;
          if (isDataCoupon !== null && isSubTotal > 0) {
            // @check(expiration product)
            const { expirationDate = [], type, amount } = isDataCoupon;
            if (dayjs().isAfter(dayjs(expirationDate))) {
              dispatch(removeCoupon());
              toast.custom(
                (t) => (
                  <ToastAlerts
                    id={t}
                    type="error"
                    visible={true}
                    label={`<strong>Sorry</strong>, coupon has expired!`}
                  />
                ),
                { duration: 5000 }
              );
              return;
            }
            // @check(limit coupon)
            if (
              parseInt(isDataCoupon?.usage, 10) >=
              parseInt(isDataCoupon?.limitUsage, 10)
            ) {
              dispatch(removeCoupon());
              toast.custom(
                (t) => (
                  <ToastAlerts
                    id={t}
                    type="error"
                    visible={true}
                    label={`<strong>Sorry</strong>, <br/>Coupon usage limit reached!`}
                  />
                ),
                { duration: 5000 }
              );
              return;
            }
            // @check(includes product)
            const incldProsductIds = isDataCoupon?.includedProducts?.map(
              (p) => p?.documentId
            );
            const validProducts = items?.filter((p) =>
              incldProsductIds.includes(p?.documentId)
            );
            if (validProducts?.length === 0) {
              dispatch(removeCoupon());
              toast.custom(
                (t) => (
                  <ToastAlerts
                    id={t}
                    type="error"
                    visible={true}
                    label={`<strong>Sorry</strong>, coupon is not valid for this product!`}
                  />
                ),
                { duration: 5000 }
              );
              return;
            }
            // @check(valid Product)
            const discntAmount = parseFloat(amount) || 0;
            const isPrice =
              validProducts[0]?.priceSale ?? validProducts[0]?.price ?? 0;
            let calculatedDiscount = 0;
            if (type === 'percentage') {
              calculatedDiscount =
                parseInt(discntAmount) >= 100
                  ? Math.min(isSubTotal, isPrice)
                  : isPrice * (discntAmount / 100);
            } else if (type === 'fix') {
              calculatedDiscount = Math.min(discntAmount, isSubTotal);
            } else {
              // @implement logic for non-percentage coupons if needed
            }

            setStore((prev) => ({
              ...prev,
              coupon: isCoupon,
              typeDiscnt: type,
              discntAmount: discntAmount,
              discntAmountTotal: calculatedDiscount,
              totalWithDiscount: isSubTotal - calculatedDiscount,
            }));
            dispatch(applyCoupon(isCoupon));
            setUseCoupon(false);
            // @alert
            // toast.custom(
            //   (t) => (
            //     <ToastAlerts
            //       id={t}
            //       type="success"
            //       visible={true}
            //       label={`<strong>Coupon applied!</strong>, <br/> You saved ${discntAmount}%`}
            //     />
            //   ),
            //   { duration: 5000 }
            // );

            // return;
            // @check(minimum purchase)
            // if (total < isDataCoupon?.minQtyPromo) {
            //   setUseCoupon(false);
            //   dispatch(removeCoupon());
            //   toast.custom(
            //     (t) => (
            //       <ToastAlerts
            //         id={t}
            //         type="error"
            //         visible={true}
            //         label={`<strong>Sorry</strong>, Minimum purchase of <br/>of <strong>${currencyConverter(checkCouponUsed?.minQtyPromo)}</strong> is required to apply this coupon!`}
            //       />
            //     ),
            //     { duration: 5000 }
            //   );
            //   return;
            // }
          }
        } catch (error) {
          dispatch(removeCoupon());
          toast.custom(
            (t) => (
              <ToastAlerts
                id={t}
                type="error"
                visible={true}
                label={`<strong>Sorry</strong>, An error occurred. Please try again...`}
              />
            ),
            { duration: 5000 }
          );
          // console.error('[error] fetching coupons:', error);
          return;
        }
      }
    },
    [isCoupon]
  );

  // @hook(Calculate Total Order)
  const calculateTotalOrder = (total) => {
    const taxAmount = total * 0.11;
    const totalWithTax = total + taxAmount;
    return Number(totalWithTax.toFixed(2));
  };

  // @handle(used - coupon)
  const handleUseCoupon = async ({ items, total }, setValue) => {
    try {
      setUseCoupon(true);
      if (!items && !total) return;
      const isSubTotal = total;
      if (isCoupon !== null) {
        setUseCoupon(false);
        toast.custom(
          (t) => (
            <ToastAlerts
              id={t}
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
      const checkCouponUsed = await fetch('/api/data/coupons?sv=coinfestasia', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: encodeData(items) }),
      }).then((res) => res.json());
      if (!checkCouponUsed) {
        setUseCoupon(false);
        toast.custom(
          (t) => (
            <ToastAlerts
              id={t}
              type="error"
              visible={true}
              label={`<strong>Sorry</strong>, coupon not found or invalid!`}
            />
          ),
          { duration: 5000 }
        );
        return;
      }
      // @check(expiration product)
      const { expirationDate = [], type, amount } = checkCouponUsed;
      if (dayjs().isAfter(dayjs(expirationDate))) {
        setUseCoupon(false);
        toast.custom(
          (t) => (
            <ToastAlerts
              id={t}
              type="error"
              visible={true}
              label={`<strong>Sorry</strong>, coupon has expired!`}
            />
          ),
          { duration: 5000 }
        );
        return;
      }
      // @check(limit coupon)
      if (
        parseInt(checkCouponUsed?.usage, 10) >=
        parseInt(checkCouponUsed?.limitUsage, 10)
      ) {
        setUseCoupon(false);
        toast.custom(
          (t) => (
            <ToastAlerts
              id={t}
              type="error"
              visible={true}
              label={`<strong>Sorry</strong>, <br/>Coupon usage limit reached!`}
            />
          ),
          { duration: 5000 }
        );
        return;
      }

      // @check(includes product)
      const includedProductIds = checkCouponUsed?.includedProducts?.map(
        (product) => product?.documentId
      );
      const validProducts = isStore?.cart?.filter((product) =>
        includedProductIds.includes(product?.documentId)
      );
      if (validProducts?.length === 0) {
        setUseCoupon(false);
        toast.custom(
          (t) => (
            <ToastAlerts
              id={t}
              type="error"
              visible={true}
              label={`<strong>Sorry</strong>, coupon is not valid for this product!`}
            />
          ),
          { duration: 5000 }
        );
        return;
      }
      // @check(minimum purchase)
      if (total < checkCouponUsed?.minQtyPromo) {
        setUseCoupon(false);
        toast.custom(
          (t) => (
            <ToastAlerts
              id={t}
              type="error"
              visible={true}
              label={`<strong>Sorry</strong>, Minimum purchase of <br/>of <strong>${currencyConverter(checkCouponUsed?.minQtyPromo)}</strong> is required to apply this coupon!`}
            />
          ),
          { duration: 5000 }
        );
        return;
      }
      // @check(valid Product)
      const discntAmount = parseFloat(amount) || 0;
      const isPrice =
        validProducts[0]?.priceSale ?? validProducts[0]?.price ?? 0;
      let calculatedDiscount = 0;
      if (type === 'percentage') {
        calculatedDiscount =
          parseInt(discntAmount) >= 100
            ? Math.min(total, isPrice)
            : isPrice * (discntAmount / 100);
      } else if (type === 'fix') {
        calculatedDiscount = Math.min(discntAmount, total);
      } else {
        // @implement logic for non-percentage coupons if needed
      }

      setStore((prev) => ({
        ...prev,
        coupon: items,
        typeDiscnt: type,
        discntAmount: discntAmount,
        discntAmountTotal: calculatedDiscount,
        totalWithDiscount: isSubTotal - calculatedDiscount,
      }));
      dispatch(applyCoupon(items));
      setValue('coupon', '');
      setUseCoupon(false);

      // @trigger
      const triggerBtnEnterCoupon = document.querySelector(
        '#hsCa25Dropdown_CouponCodeCheckouts.hs-collapse-toggle'
      );
      const elEnterCoupon = document.querySelector(
        '#hsCa25CollapseCouponCodeCheckouts.hs-collapse'
      );
      if (elEnterCoupon) {
        elEnterCoupon.classList.contains('open')
          ? triggerBtnEnterCoupon.click()
          : false;
      }

      // @alert
      toast.custom(
        (t) => (
          <ToastAlerts
            id={t}
            type="success"
            visible={true}
            label={`<strong>Coupon applied!</strong>, <br/> You saved ${type === 'percentage' ? `${discntAmount}%` : currencyConverter(discntAmount)}`}
          />
        ),
        { duration: 5000 }
      );
      return;
    } catch (error) {
      setValue('coupon', '');
      setUseCoupon(false);
      toast.custom(
        (t) => (
          <ToastAlerts
            id={t}
            type="error"
            visible={true}
            label={`<strong>Sorry</strong>, An error occurred. Please try again...`}
          />
        ),
        { duration: 5000 }
      );
      // console.error('[error] fetching coupons:', error);
      return;
    }
  };

  // @remove-coupon(cart)
  const handleRemoveCoupon = () => {
    dispatch(removeCoupon());
    setStore((prev) => ({
      ...prev,
      coupon: null,
    }));
  };

  // @quantity
  const updateQuantityProducts = async (cartItems, idx, isIncrease) => {
    try {
      let newQty = cartItems?.quantity;
      if (isIncrease) {
        newQty = Math.min(cartItems?.quantity + 1, 15);
      } else {
        if (!(stepForm[idx] + 1 >= cartItems?.quantity)) {
          // @check(coupon)
          if (isCoupon !== null) {
            const isDataCoupon = await fetch(
              '/api/data/coupons?sv=coinfestasia',
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data: encodeData(isCoupon) }),
              }
            ).then((res) => res.json());
            if (totalOrder < isDataCoupon?.minQtyPromo) {
              handleRemoveCoupon();
            }
          }
          newQty = Math.max(cartItems?.quantity - 1, 1);
        } else {
          toast.custom(
            (t) => (
              <ToastAlerts
                id={t}
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
      // console.error('[Error] fetching:', error);
    }
  };

  // @add-items(cart)
  const handleAddProductCart = async (items, qty) => {
    if (isProductsSession.loading) return;
    setProductsSession({
      id_product: items?.documentId,
      loading: true,
    });
    const stock = Number(items?.stock);
    if (isNaN(stock) || stock <= 0) {
      setTimeout(() => {
        setProductsSession({ id_product: null, loading: false });
        toast.error('Product stock is invalid or out of stock!');
      }, 700);
      return;
    }
    setTimeout(() => {
      dispatch(addItemToCart({ id_product: items?.documentId, quantity: qty }));
      setProductsSession({ id_product: null, loading: false });
    }, 700);
  };

  // @quantity-push
  const updateQuantityCart = async (items, store, is) => {
    try {
      const toQty = items?.reduce((acc, i) => acc + i?.quantity, 0);
      var newQty = store?.quantity;
      if (newQty > Number(store?.stock)) return;
      if (is) {
        if (toQty <= 15) {
          newQty = Math.min(store?.quantity + 1, 15);
        }
      } else {
        newQty = Math.max(store?.quantity - 1, 1);
      }
      if (toQty + (is ? 1 : -1) <= (toQty <= 15 ? 15 : toQty)) {
        dispatch(updateQuantity({ products: store, qty: newQty }));
      }
    } catch (error) {
      // console.error('[error] fetching:', error);
      return;
    }
  };

  // @total-quantity
  useEffect(() => {
    const totalQty = isCart?.reduce((sum, i) => sum + i.quantity, 0);
    setStore((prev) => ({
      ...prev,
      totalQty: totalQty,
    }));
  }, [isCart]);
  const checkTotalQty = () => {
    const totalQty = isCart?.reduce((sum, i) => sum + i.quantity, 0);
    if (totalQty >= 15) {
      return true;
    }
    return false;
  };

  // @total(store)
  const totalOrder = () => {
    const total = isStore?.cart?.reduce((acc, i) => {
      const price = i.priceSale ?? i.price ?? 0;
      return (
        acc +
        (i?.documentId === 'sn4ujm0d1ebbc8lme1ihzsa9'
          ? parseInt(price, 10)
          : i?.quantity * parseInt(price, 10))
      );
    }, 0);
    return total;
  };

  return (
    <StoreContext.Provider
      value={{
        getStore: isStore?.cart,
        setStore,
        hndleHookIntzCoupon,
        calculateTotalOrder,
        getCoupon: isStore?.coupon,
        usedCoupon: isUseCoupon,
        handleUseCoupon,
        handleRemoveCoupon,
        sessionsProducts: isProductsSession,
        handleAddProductCart,
        updateQuantityCart,
        updateQuantityProducts,
        checkTotalQty,
        totalQty: isStore.totalQty,
        isDiscount: {
          type: isStore?.typeDiscnt,
          amount: isStore?.discntAmount,
          amountTotal: isStore?.discntAmountTotal,
          totalWithDiscount: isStore?.totalWithDiscount,
        },
        subTotal: totalOrder(),
        totalOrder: totalOrder(),
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

// @hook (global-context)
export const useStoreContext = () => {
  return useContext(StoreContext);
};
