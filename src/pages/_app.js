import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
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

// @lib/controller & helper
import { useMethod } from '@lib/hooks/Method';

// @script
import PrelineScript from '@components/Script/PrelineScript';

// @layouts
import Layouts from '@layouts/Layouts';

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const { toggleOverlayPopUp } = useMethod();

  // @default(Body)
  // useEffect(() => {
  //   const footr = document.querySelector('.ca2024Footer');
  //   if (router.pathname === '/') {
  //     if (footr) {
  //       footr.classList.remove('ca2024Footer_Dark', 'text-black-900');
  //       footr.classList.add('ca2024Footer_Light', 'text-white');
  //     }
  //     document.body.style.backgroundColor = '#1F1F1F';
  //   } else {
  //     if (footr) {
  //       footr.classList.remove('ca2024Footer_Light', 'text-white');
  //       footr.classList.add('ca2024Footer_Dark', 'text-black-900');
  //     }
  //     document.body.style.backgroundColor = '#FFFFFF';
  //   }
  //   return () => {
  //     if (footr) {
  //       footr.classList.remove('ca2024Footer_Light', 'text-white');
  //       footr.classList.add('ca2024Footer_Dark', 'text-black-900');
  //     }
  //     document.body.style.backgroundColor = '';
  //   };
  // }, [router.pathname]);

  // @with-layouts
  const getLayout =
    Component.getLayout ||
    ((page) => {
      return (
        <>
          <Layouts>
            <Component {...pageProps} />
          </Layouts>
        </>
      );
    });
  // @without-layouts
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
          <meta name="description" content={publicRuntimeConfig.siteDesc} />
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
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link rel="manifest" href="/manifest.json" />
        </Head>

        {/* @layouts */}
        {getLayout(
          <>
            <Component {...pageProps} />
          </>,
          {
            pageProps: pageProps || {},
          }
        )}

        {/* @alert(Toast)  */}
        <Toaster
          position="bottom-left"
          richColors
          gap="10"
          dismissible={false}
          pauseWhenPageIsHidden={true}
        />

        {/* @pop-up(backcover) */}
        <div
          id="ca2025BckdrpOverflay_PopUpGeneral"
          className="ca2025BckdrpOverflay_PopUpGeneral nonActive fixed inset-x-0 inset-y-0 z-[80] block h-svh cursor-pointer bg-black-900/60 backdrop-blur-[3px] transition-[opacity,backdrop-filter] duration-[0.3s] ease-in-out"
          onClick={(e) => {
            e.preventDefault();
            toggleOverlayPopUp(
              '.ca2025BckdrpOverflay_PopUpGeneral',
              e.target.getAttribute('data-target')
            );
          }}
        ></div>
        {/* @pop-up(backcover) */}
        <div
          id="ca2025BckdrpOverflay_PopUpMobile"
          className="ca2025BckdrpOverflay_PopUpMobile nonActive fixed inset-x-0 inset-y-0 z-[80] block h-svh cursor-pointer bg-black-900/60 backdrop-blur-[3px] transition-[opacity,backdrop-filter] duration-[0.3s] ease-in-out"
          onClick={(e) => {
            e.preventDefault();
            toggleOverlayPopUp(
              '.ca2025BckdrpOverflay_PopUpMobile',
              e.target.getAttribute('data-target')
            );
          }}
        ></div>

        {/* @script */}
        <PrelineScript />
      </Provider>
    </>
  );
};

export default App;
