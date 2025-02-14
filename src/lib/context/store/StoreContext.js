import React, { createContext, useContext, useState } from 'react';
import { toast } from 'sonner';

// @redux
import { useDispatch } from 'react-redux';
import { addItemToCart } from '@reduxState/slices';

// @context(global)
const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [isStore, setStore] = useState({
    products: [],
    totalQty: 0,
    discntAmount: 0,
    totalOrder: 0,
  });
  const [isProductsSession, setProductsSession] = useState({
    id_product: null,
    loading: false,
  });

  // @add-items(Cart)
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
      // dispatch(addItemToCart({ id_product: items?.documentId, quantity: qty }));
      setProductsSession({ id_product: null, loading: false });
    }, 700);
  };

  return (
    <StoreContext.Provider
      value={{
        sessionsProducts: isProductsSession,
        handleAddProductCart,
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
