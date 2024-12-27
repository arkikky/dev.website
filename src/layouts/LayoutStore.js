import React, { useState, useEffect, useCallback } from 'react';
import getConfig from 'next/config';
import Head from 'next/head';

// @get .config
const { publicRuntimeConfig } = getConfig();

// @redux
import { useSelector } from 'react-redux';

// @lib/controller & helper
import { getFetch } from '@lib/controller/API';
import { getCombineMerged } from '@lib/helper/Configuration';

// @layouts
import NavbarTop from '@layouts/Navbar/NavbarTopStore';
import NavbarBottom from './Navbar/NavbarBottomStore';
import Footer from '@layouts/Footer/Footer';

const LayoutStore = ({
  cartStore,
  isLayouts = false,
  isTheme = 'light',
  children,
}) => {
  const { data: isCart } = useSelector((state) => state.cart);
  // const [isCartProducts, setCartProducts] = useState({
  //   products: cartStore?.data,
  //   cart: [],
  // });

  // // @initialize(Cart)
  // const hndleHookProducts = useCallback(async () => {
  //   if (!isCart || isCart.length > 3) return;
  //   try {
  //     const allProducts = await Promise.all(
  //       isCart?.map(async (data) => {
  //         const rsHook = await getFetch(`/api/products/${data.id_product}`);
  //         return {
  //           id: rsHook?.data.id,
  //           documentId: rsHook?.data.documentId,
  //           productId: rsHook?.data.productId,
  //           name: rsHook?.data.name,
  //           price: rsHook?.data.price,
  //           priceSale: rsHook?.data.priceSale,
  //           stock: parseInt(rsHook?.data.stock),
  //         };
  //       })
  //     );
  //     // @hook(Combine Merged)
  //     const setMerged = getCombineMerged(allProducts, isCart);
  //     if (setMerged) setCartProducts((prev) => ({ ...prev, cart: setMerged }));
  //   } catch (err) {
  //     return;
  //   }
  // }, [isCart]);

  // // @hook(Product)
  // useEffect(() => {
  //   hndleHookProducts();
  //   return () => {
  //     undefined;
  //   };
  // }, [isCart]);

  return (
    <>
      {/* @navbar */}
      <NavbarTop nonStore={true} />

      {/* @main */}
      {children}

      {/* @navbar */}
      {/* <NavbarBottom cartProducts={isCartProducts?.cart} /> */}

      {/* @footer */}
      <Footer nonStore={isLayouts} theme={isTheme} />
    </>
  );
};

export default LayoutStore;
