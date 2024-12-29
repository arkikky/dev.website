import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

// @redux
import { useSelector } from 'react-redux';

// @lib/controller & helper
import { getCombineMerged, encodeData } from '@lib/helper/Configuration';
import { useMethod } from '@lib/hooks/Method';

// @layouts
import NavbarTop from '@layouts/Navbar/NavbarTopStore';
import NavbarBottom from '@layouts/Navbar/NavbarBottomStore';
import Footer from '@layouts/Footer';

const LayoutStore = ({
  isTheme = 'light',
  isLayouts = false,
  cartStore = [],
  children,
}) => {
  const router = useRouter();
  const { toggleOverlayPopUp } = useMethod();
  const { data: isCart } = useSelector((state) => state.cart);
  const [isStore, setCartProducts] = useState({
    products: cartStore,
    cart: [],
  });

  // @hndle(background change)
  useEffect(() => {
    const hndlChangeTheme = () => {
      const b = document.body;
      if (isTheme === 'light') {
        b?.classList.remove('bg-dark');
        b?.classList.add('bg-white');
      } else if (isTheme === 'dark') {
        b?.classList.remove('bg-white');
        b?.classList.add('bg-dark');
      } else {
        b?.classList.remove('bg-white');
        b?.classList.add('bg-dark');
      }
    };
    router?.events.on('routeChangeStart', hndlChangeTheme);
    hndlChangeTheme();
    return () => {
      router?.events.off('routeChangeStart', hndlChangeTheme);
      document.body.classList.remove('bg-white');
      document.body.classList.add('bg-dark');
    };
  }, [isTheme, router?.events]);

  // @initialize(store)
  const hndleHookProducts = useCallback(async () => {
    if (!isCart || isCart.length > 3) return;
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
      if (setMerged) setCartProducts((prev) => ({ ...prev, cart: setMerged }));
    } catch (err) {
      return;
    }
  }, [isCart]);
  //  @hook(store)
  useEffect(() => {
    hndleHookProducts();
    return () => {
      undefined;
    };
  }, [isCart]);

  return (
    <>
      {/* @navbar */}
      <NavbarTop
        isTheme={isTheme}
        nonStore={false}
        cartProducts={isStore?.cart}
      />
      <NavbarBottom cartProducts={isStore?.cart} />

      {/* @main */}
      {children}

      {/* @footer */}
      <Footer nonStore={isLayouts} theme={isTheme} />

      {/* @pop-up(backcover) */}
      <div
        id="ca2025BckdrpOverflay_PopUpGeneral"
        className="ca2025BckdrpOverflay_PopUpGeneral nonActive fixed inset-x-0 inset-y-0 z-[80] block h-svh cursor-pointer bg-black-900/60 backdrop-blur-[3px] transition-[opacity,backdrop-filter] duration-[0.3s] ease-in-out"
        onClick={(e) => {
          e.preventDefault();
          toggleOverlayPopUp(
            '.ca2025BckdrpOverflay_PopUpGeneral',
            e?.target.getAttribute('data-target')
          );
        }}
      ></div>
      <div
        id="ca2025BckdrpOverflay_PopUpMobile"
        className="ca2025BckdrpOverflay_PopUpMobile nonActive fixed inset-x-0 inset-y-0 z-[80] block h-svh cursor-pointer bg-black-900/60 backdrop-blur-[3px] transition-[opacity,backdrop-filter] duration-[0.3s] ease-in-out"
        onClick={(e) => {
          e.preventDefault();
          toggleOverlayPopUp(
            '.ca2025BckdrpOverflay_PopUpMobile',
            e?.target.getAttribute('data-target')
          );
        }}
      ></div>
    </>
  );
};

export default LayoutStore;
