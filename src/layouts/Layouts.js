import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

// @layouts
import NavbarTopDefault from '@layouts/Navbar/NavbarTopDefault';
import Footer from '@layouts/Footer';

const LayoutDefaults = ({
  isTheme = 'dark',
  isLayouts = true,
  isFooterMenu = true,
  children,
}) => {
  const router = useRouter();
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

  return (
    <>
      {/* @navbar */}
      <NavbarTopDefault theme={isTheme} />

      {/* @main */}
      {children}

      {/* @footer */}
      <Footer nonStore={isLayouts} theme={isTheme} menuUsage={isFooterMenu} />
    </>
  );
};

export default LayoutDefaults;
