import React from 'react';
import getConfig from 'next/config';
import Head from 'next/head';

// @get .config
const { publicRuntimeConfig } = getConfig();

// @style-css
import '@styles/globals.css';

// @redux
import { Provider } from 'react-redux';
import store from '@reduxState/store';

// @layouts
import Layouts from '@layouts/Layouts';

const initHead = () => {
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
        <meta name="theme-color" content="#015AFD" />
        <meta name="msapplication-navbutton-color" content="#015AFD" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#015AFD" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>
    </>
  );
};

const App = ({ Component, pageProps }) => {
  // @with-layouts
  const getLayout =
    Component.getLayout ||
    ((page) => (
      <>
        {/* @head */}
        {initHead()}

        {/* @main */}
        <Provider store={store}>
          <Layouts>
            <Component {...pageProps} />
          </Layouts>
        </Provider>
      </>
    ));

  // @without-layouts
  return getLayout(
    <>
      {/* @head */}
      {initHead()}

      {/* @main */}
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

export default App;
