import React, { useEffect } from "react";
import getConfig from "next/config";
import Head from "next/head";

// @get .config
const { publicRuntimeConfig } = getConfig();

// @css-style (Global)
import "@styles/globals.css";

// @components
import SuccessedModal from "@components/UI/Modals/Success";

// @layouts
import Layouts from "@layouts/Layouts";

export default function App({ Component, pageProps }) {
  // @layouts wihtout (Navbar & Footer)
  if (Component.getLayout) {
    return Component.getLayout(
      <>
        {/* @head */}
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
          <meta name="description" content={publicRuntimeConfig.siteDesc} />

          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />

          <meta name="author" content={publicRuntimeConfig.author} />
          <link rel="mask-icon" href="/favicon.ico" color="#0000000" />
          <meta name="msapplication-TileColor" content="#0000000" />
          <meta name="theme-color" content="#0000000" />
          <meta name="msapplication-navbutton-color" content="#0000000" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="#0000000"
          />
          <link rel="manifest" href="/manifest.json" />
        </Head>

        {/* @main */}
        <Component {...pageProps} />

        {/* @modal */}
        <SuccessedModal />

        {/* @backdrop (modal) */}
        <div id="bckdrpModalActve"></div>
      </>
    );
  }
  return (
    <>
      {/* @head */}
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <meta name="description" content={publicRuntimeConfig.siteDesc} />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        <meta name="author" content={publicRuntimeConfig.author} />
        <link rel="mask-icon" href="/favicon.ico" color="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-navbutton-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      {/* @main */}
      <Layouts>
        <Component {...pageProps} />
      </Layouts>

      {/* @modal */}
      <SuccessedModal />

      {/* @backdrop (modal) */}
      <div id="bckdrpModalActve"></div>
    </>
  );
}
