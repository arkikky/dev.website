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
import NavbarTop from '@layouts/Navbar/NavbarTop';
import NavbarBottom from './Navbar/NavbarBottom';
import Footer from '@layouts/Footer';

const Layouts = ({ cartStore, children }) => {
  const { data: isCart } = useSelector((state) => state.cart);
  const [isCartProducts, setCartProducts] = useState({
    products: cartStore?.data,
    cart: [],
  });

  // @initialize(Cart)
  const hndleHookProducts = useCallback(async () => {
    if (!isCart || isCart.length > 3) return;
    try {
      const allProducts = await Promise.all(
        isCart?.map(async (data) => {
          const rsHook = await getFetch(`/api/products/${data.id_product}`);
          return {
            id: rsHook?.data.id,
            documentId: rsHook?.data.documentId,
            productId: rsHook?.data.productId,
            name: rsHook?.data.name,
            price: rsHook?.data.price,
            priceSale: rsHook?.data.priceSale,
            stock: parseInt(rsHook?.data.stock),
          };
        })
      );
      // @hook(Combine Merged)
      const setMerged = getCombineMerged(allProducts, isCart);
      if (setMerged) setCartProducts((prev) => ({ ...prev, cart: setMerged }));
    } catch (err) {
      return;
    }
  }, [isCart]);

  // @hook(Product)
  useEffect(() => {
    hndleHookProducts();
    return () => {
      undefined;
    };
  }, [isCart]);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <meta name="description" content={publicRuntimeConfig?.siteDesc} />
        <meta name="author" content={'Coinfest Asia'} />
        <link rel="mask-icon" href="/favicon.ico" color="#1F1F1F" />
        <meta name="msapplication-TileColor" content="#1F1F1F" />
        <meta name="theme-color" content="#F8FAFC" />
        <meta name="msapplication-navbutton-color" content="#F8FAFC" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#F8FAFC" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      {/* @navbar */}
      <NavbarTop cartProducts={isCartProducts?.cart} nonStore={false} />

      {/* @main */}
      {children}

      {/* @navbar */}
      <NavbarBottom cartProducts={isCartProducts?.cart} />

      {/* @footer */}
      <Footer />
    </>
  );
};

export default Layouts;
