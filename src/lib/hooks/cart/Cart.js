import { useState, useEffect, useCallback } from 'react';

// @redux
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity } from '@reduxState/slices';

// @lib
import { getCombineMerged, encodeData } from '@lib/helper/Configuration';

export function useCart() {
  const dispatch = useDispatch();
  const { data: isCart, coupon: isCoupon } = useSelector((state) => state.cart);
  const [isStore, setStore] = useState({
    cart: [],
    totalQty: 0,
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
      if (setMerged) setStore((prev) => ({ ...prev, cart: setMerged }));
    } catch (err) {
      return;
    }
  }, [isCart]);

  // @total(Cart)
  const checkTotalQtyCart = (items, type) => {
    const totalQty = items?.reduce((acc, i) => acc + i?.quantity, 0);
    if (type === 'submit') {
      return totalQty >= 16;
    } else if (type === 'products') {
      return totalQty >= 15;
    }
    return false;
  };

  // @quantity
  const updateCartQuantity = async (items, store, is) => {
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
      // console.error('[Error] fetching:', error);
      return;
    }
  };

  // @calculate(total qty)
  const calculateTotalQty = useCallback(() => {
    const toQty = isCart?.reduce((acc, item) => {
      return acc + item?.quantity;
    }, 0);
    if (toQty >= 15) {
      const newQty = 15;
      setStore((prev) => ({ ...prev, totalQty: newQty }));
    } else {
      setStore((prev) => ({ ...prev, totalQty: toQty }));
    }
  }, [isCart]);

  //  @hook(store)
  useEffect(() => {
    hndleHookProducts();
    calculateTotalQty();
  }, [isCart]);

  // @total(store)
  const getTotalCart = (data) => {
    const total = data?.reduce((acc, i) => {
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

  return {
    getStore: isStore?.cart,
    checkTotalQtyCart,
    updateCartQuantity,
    getTotalItems: isStore?.totalQty,
    getTotalCart,
  };
}
