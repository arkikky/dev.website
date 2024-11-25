import React from 'react';
import getConfig from 'next/config';
import Head from 'next/head';

// @get .config
const { publicRuntimeConfig } = getConfig();

// @layouts
import NavbarTop from '@layouts/Navbar/NavbarTop';
import Footer from '@layouts/Footer';

const Layouts = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <meta name="description" content={publicRuntimeConfig.siteDesc} />
        <meta name="author" content={'Coinfest Asia'} />
        <link rel="mask-icon" href="/favicon.ico" color="#015AFD" />
        <meta name="msapplication-TileColor" content="#015AFD" />
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
      <NavbarTop />

      {/* @main */}
      {children}

      {/* @footer */}
      <Footer />
    </>
  );
};

export default Layouts;
