import React from "react";
import getConfig from "next/config";
import { useRouter } from "next/router";
import Head from "next/head";

// # Get .config
const { publicRuntimeConfig } = getConfig();

import "@styles/globals.css";

// Layouts - Components
import Layouts from "@layouts/Layout";

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const setPath = router.pathname;
  const arrPath = setPath.split("/");
  const getPath = arrPath[1];

  // Wihtout (Navbar & Footer)
  if (Component.getLayout) {
    return Component.getLayout(
      <>
        <Component {...pageProps} />
      </>
    );
  }

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <meta
          name="keywords"
          content="coinfestasia 2022, coinfestasia 2023, coinfestasia event, bigges crypto event, big crypto event, crypto event 2022, crypto event 2023, event, event website, website event, event planner, party planner, event planner website, planner conference, bali, web3, web3 news, web3 technology, crypto, crypto market, cryptonomics, blockchain, what is blockchain, blockchain technology, blockchain explained, blockchain news, metaverse, metaverse explained, metaverse expansion, metaverse news, nft, nft explained, nft meaning, nft art, nft crypto, nft crypto, how to sell nft art, nft exhibition"
        />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        <meta name="author" content={`${publicRuntimeConfig.author}`} />
        <link rel="mask-icon" href="/favicon.svg" color="#015AFD" />
        <meta name="msapplication-TileColor" content="#015AFD" />
        <meta name="theme-color" content="#015AFD" />
        <meta name="msapplication-navbutton-color" content="#015AFD" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#015AFD" />

        <link rel="canonical" href={publicRuntimeConfig.siteUrl} />
      </Head>

      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </>
  );
};

export default App;
