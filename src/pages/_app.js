import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
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
  const router = useRouter();
  // @hndle(change route navbar)
  useEffect(() => {
    const hndlChangeRoute = () => {
      const toggleClass = (selector, className, action = 'remove') => {
        const el = document.querySelector(selector);
        if (el) {
          el.classList[action](className);
        }
        return el;
      };
      toggleClass('.cs-button-nav', 'deactive', 'remove');
      toggleClass('[data-nav-mobile]', 'active', 'remove');

      const backdrop = toggleClass('.cs-backdrop', 'active', 'remove');
      if (backdrop) {
        setTimeout(() => backdrop.remove(), 300);
      }
    };
    router.events.on('routeChangeComplete', hndlChangeRoute);
    hndlChangeRoute();
    return () => {
      router.events.off('routeChangeComplete', hndlChangeRoute);
    };
  }, [router.events]);

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
          <link rel="manifest" href="/manifest.json" />
        </Head>

        {/* @layouts */}
        {getLayout(<Component {...pageProps} />, {
          pageProps: pageProps || {},
        })}

        {/* @script */}
        <PrelineScript />
      </Provider>
    </>
  );
};

export default App;
