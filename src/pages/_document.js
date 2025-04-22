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

        {/* @twitter(conversion-tracking) */}
        <Script
          id={`twitter-conversion-tracking`}
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: twtrConversionScript,
          }}
          nonce={hashTwtrConversionScript}
        />

        {/* @google-tag (gtag.js) */}
        <Script
          id={`google-analytics`}
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-HC7BZC18HB`}
          nonce={hashGTagAnalytics}
        />
        <Script
          id={`gtag-analytics`}
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: gTagsAnalyticsScript,
          }}
          nonce={hashGTagAnalytics}
        />
        {/* @google-tag-manager */}
        <Script
          id={`gtag-manager`}
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: gTagsScript,
          }}
          nonce={hashGTagManager}
        />
        {/* @meta-pixel */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: metaPixelScript,
          }}
          nonce={hashMetaPixelScript}
        />
        <noscript>
          <Image
            className={`!hidden`}
            src="https://www.facebook.com/tr?id=534460966120098&ev=PageView&noscript=1"
            height="1"
            width="1"
          />
        </noscript>
      </Head>
      <body>
        <Main />

        {/* @google-tag-manager(noscript) */}
        <iframe
          className={`!hidden !h-0 !w-0`}
          src={`https://www.googletagmanager.com/ns.html?id=GTM-TMLM3MB`}
          height="0"
          width="0"
          nonce={hashGTagManager}
        ></iframe>
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
