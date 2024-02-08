import React, { useEffect } from "react";
import getConfig from "next/config";
import Head from "next/head";

// @get .config
const { publicRuntimeConfig } = getConfig();

// @css-style (Global)
import "@styles/globals.css";

// @head
const isHead = () => {
  <Head>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" type="image/x-icon" href="/favicon.svg" />
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon.svg" />
    <meta name="description" content={publicRuntimeConfig.siteDesc} />

    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="true"
    />

    <meta name="author" content={publicRuntimeConfig.author} />
    <link rel="mask-icon" href="/favicon.svg" color="#2458F4" />
    <meta name="msapplication-TileColor" content="#2458F4" />
    <meta name="theme-color" content="#2458F4" />
    <meta name="msapplication-navbutton-color" content="#2458F4" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="#2458F4" />
    <link rel="manifest" href="/manifest.json" />
  </Head>;
};

export default function App({ Component, pageProps }) {
  // @layouts wihtout (Navbar & Footer)
  if (Component.getLayout) {
    // @preline (Add Plugins)
    // useEffect(() => {
    //   import("preline");
    //   return () => {
    //     undefined;
    //   };
    // }, []);

    return Component.getLayout(
      <>
        {/* @head */}
        {isHead()}

        <Component {...pageProps} />
      </>
    );
  }
  return (
    <>
      {/* @head */}
      {isHead()}

      <Component {...pageProps} />
    </>
  );
}
