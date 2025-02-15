import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { toast } from 'sonner';

// @redux
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '@reduxState/slices';

// @lib
import { getCombineMerged, encodeData } from '@lib/helper/Configuration';

// @context(global)
const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { data: isCart } = useSelector((state) => state.cart);
  const [isStore, setStore] = useState({
    cart: [],
    products: isCart,
    totalQty: 0,
    discntAmount: 0,
    totalOrder: 0,
  });
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
      if (setMerged) setStore((prev) => ({ ...prev, cart: setMerged }));
    } catch (err) {
      return;
    }
  }, [isCart]);
  //  @hook(store)
  useEffect(() => {
    hndleHookProducts();
  }, [isCart]);

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
  const totalOrder = (data) => {
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

  return (
    <StoreContext.Provider
      value={{
        getStore: isStore?.cart,
        sessionsProducts: isProductsSession,
        handleAddProductCart,
        checkTotalQty,
        quantity: { totalQty: isStore.totalQty },
        totalOrder,
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
