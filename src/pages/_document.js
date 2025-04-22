import { Html, Head, Main, NextScript } from 'next/document';
import CryptoJS from 'crypto-js';
import Script from 'next/script';
import Image from 'next/image';

// @lib
import {
  nonceSha256,
  metaPixelScript,
  hashMetaPixelScript,
  twtrConversionScript,
  hashTwtrConversionScript,
  gTagsAnalyticsScript,
  hashGTagAnalytics,
  gTagsScript,
  hashGTagManager,
} from '@lib/helper/TrackingAnalytics';

export default function Document() {
  const hashNonce256 = CryptoJS.SHA256(nonceSha256).toString(
    CryptoJS.enc.Base64
  );
  return (
    <Html lang="en">
      <Head>
        {/* @google-fonts */}
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
      </Head>
      <body>
        <Main />
        {/* @hubSpot */}
        <Script
          id="hs-loader"
          strategy="afterInteractive"
          src="https://js-na1.hs-scripts.com/21063184.js"
        ></Script>
        <NextScript nonce={hashNonce256} />
      </body>
    </Html>
  );
}
