import React from 'react';
import { Toaster } from 'sonner';
import getConfig from 'next/config';
import Head from 'next/head';

// @get .config
const { publicRuntimeConfig } = getConfig();

// @style-css
import '@styles/globals.css';

// @redux
import { Provider } from 'react-redux';
import store from '@reduxState/store';

// @script
import PrelineScript from '@components/Script/PrelineScript';

// @layouts
import LayoutDefaults from '@layouts/Layouts';

const App = ({ Component, pageProps }) => {
  // @with-layouts
  const getLayout =
    Component.getLayout ||
    ((page) => {
      return (
        <>
          <LayoutDefaults>
            <Component {...pageProps} />
          </LayoutDefaults>
        </>
      );
    });
  // @default(layouts)
  return (
    <>
      <Provider store={store}>
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
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
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="#F8FAFC"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@100;200;300;400;500;600;700;800;900&display=swap"
          />
          <link rel="manifest" href="/manifest.json" />
        </Head>

        {/* @layouts */}
        {getLayout(<Component {...pageProps} />, {
          pageProps: pageProps || {},
        })}

        {/* @alert(Toast)  */}
        <Toaster
          position="bottom-left"
          richColors
          gap="10"
          dismissible={false}
          pauseWhenPageIsHidden={true}
        />

        {/* @script */}
        <PrelineScript />
      </Provider>
    </>
  );
};

export default App;
