import React, { useEffect } from "react";
import TagManager from "react-gtm-module";
import getConfig from "next/config";
import Head from "next/head";
import Script from "next/script";

// @get .config
const { publicRuntimeConfig } = getConfig();

// @css-style (Global)
import "@styles/globals.css";

// @libs/helper
import {
  GOOGLE_ADS_ID,
  gtagUrl,
  gtagAdsUrl,
  gtagScript,
} from "@lib/helper/googleTags";

// @components
import SuccessModal from "@components/UI/Modal/SuccessModal";
import OpenGmailSuccessModal from "@components/UI/Modal/OpenGmailSuccessModal";

// @layouts
import Layouts from "@layouts/Layouts";

const ca2024Head = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <meta name="description" content={publicRuntimeConfig.siteDesc} />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        <meta name="author" content={publicRuntimeConfig.siteTitle} />
        <link rel="mask-icon" href="/favicon.ico" color="#2458F4" />
        <meta name="msapplication-TileColor" content="#2458F4" />
        <meta name="theme-color" content="#2458F4" />
        <meta name="msapplication-navbutton-color" content="#2458F4" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#2458F4" />
        <link rel="manifest" href="/manifest.json" />

        {/* @google-tags */}
        <Script id="google-ads" strategy="afterInteractive" src={gtagAdsUrl} />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          src={gtagUrl}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: gtagScript,
          }}
        />
        <Script
          id="google-ads-remarketing"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            gtag('config', ${GOOGLE_ADS_ID});
          `,
          }}
        />
      </Head>
    </>
  );
};

const App = ({ Component, pageProps }) => {
  // @add(google-tags-manager) */
  const intTagManager = {
    gtmId: "GTM-TMLM3MB",
    dataLayerName: "CoinfestAsia2024",
  };

  // @import-smoothscroll(module)
  useEffect(() => {
    import("locomotive-scroll").then((locomotiveModule) => {
      const locoScroll = new locomotiveModule.default({
        smooth: true,
      });
    });

    return () => {
      undefined;
    };
  }, []);

  // @preline (Add Plugins)
  useEffect(() => {
    import("preline");

    return () => {
      undefined;
    };
  }, []);

  // @add(google-tags-manager) */
  useEffect(() => {
    TagManager.initialize(intTagManager);

    return () => {
      undefined;
    };
  }, []);

  // @modal
  // useEffect(() => {
  //   window.addEventListener("open.hs.overlay", (e) => {
  //     const elmntBody = document.body;

  //     if (elmntBody) {
  //       elmntBody.classList.add("mdlActive");
  //     }
  //   });

  //   window.addEventListener("close.hs.overlay", (e) => {
  //     const elmntBody = document.body;

  //     if (elmntBody) {
  //       elmntBody.classList.remove("mdlActive");
  //     }
  //   });

  //   return () => {
  //     undefined;
  //   };
  // }, []);

  // @wihtout (navbar & footer)
  if (Component.getLayout) {
    return Component.getLayout(
      <>
        {/* @head */}
        {ca2024Head()}

        {/* @main */}
        <Component {...pageProps} />

        {/* @modal */}
        <SuccessModal />
        <OpenGmailSuccessModal />

        {/* @backdrop (modal) */}
        <div id="bckdrpModalActve"></div>
      </>,
    );
  }

  return (
    <>
      {/* @head */}
      {ca2024Head()}

      {/* @main */}
      <Layouts>
        <Component {...pageProps} />

        {/* @modal */}
        <SuccessModal />
        <OpenGmailSuccessModal />

        {/* @backdrop (modal) */}
        <div id="bckdrpModalActve"></div>
      </Layouts>
    </>
  );
};

export default App;
