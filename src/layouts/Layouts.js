import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

// @layouts
import NavbarTopDefault from '@layouts/Navbar/NavbarTopDefault';
import Footer from '@layouts/Footer';

const LayoutDefaults = ({
  isTheme = 'dark',
  isLayouts = true,
  withNavbar = true,
  isFooterMenu = true,
  children,
}) => {
  const router = useRouter();
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
    hndlChangeTheme();
    router?.events.on('routeChangeStart', hndlChangeTheme);
    return () => {
      router?.events.off('routeChangeStart', hndlChangeTheme);
      document.body.classList.remove('bg-white', 'ca25MainApps-Light');
      document.body.classList.add('bg-dark', 'ca25MainApps-Dark');
    };
  }, [isTheme, router?.events]);

  return (
    <>
      {/* @navbar */}
      {withNavbar ? <NavbarTopDefault theme={isTheme} /> : null}

      {/* @main */}
      {children}

      {/* @footer */}
      <Footer nonStore={isLayouts} theme={isTheme} menuUsage={isFooterMenu} />
    </>
  );
};

export default LayoutDefaults;
