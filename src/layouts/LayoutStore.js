import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

// @lib
import { useStoreContext } from '@lib/context/store/StoreContext';
import { useMethod } from '@lib/hooks/Method';

// @layouts
import NavbarStore from '@layouts/Navbar/NavbarStore';
import Footer from '@layouts/Footer';

const LayoutStore = ({
  isTheme = 'light',
  isMenu = true,
  isLayouts = false,
  children,
}) => {
  const router = useRouter();
  const { getStore } = useStoreContext();
  const { toggleOverlayPopUp } = useMethod();

  // @hndle(background change)
  useEffect(() => {
    const hndlChangeTheme = () => {
      const theme =
        isTheme === 'light'
          ? ['bg-white', 'ca25MainApps-Light']
          : ['bg-dark', 'ca25MainApps-Dark'];

      document.body.classList.remove(
        'bg-white',
        'ca25MainApps-Light',
        'bg-dark',
        'ca25MainApps-Dark'
      );
      document.body.classList.add(...theme);
    };
    router?.events.on('routeChangeStart', hndlChangeTheme);
    hndlChangeTheme();
    return () => {
      router?.events.off('routeChangeStart', hndlChangeTheme);
      document.body.classList.remove('bg-white', 'ca25MainApps-Light');
      document.body.classList.add('bg-dark', 'ca25MainApps-Dark');
    };
  }, [isTheme, router?.events]);

  return (
    <>
      {/* @navbar */}
      <NavbarStore isTheme={isTheme} navMenu={isMenu} nonStore={false} />
      {/* <NavbarBottom /> */}

      {/* @main */}
      {children}

      {/* @footer */}
      <Footer nonStore={isLayouts} theme={isTheme} />

      {/* @pop-up(backcover) */}
      {getStore?.length > 0 && (
        <>
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
      )}
    </>
  );
};

export default LayoutStore;
