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
        {/* @content-security-policy */}
        {/* <meta
          httpEquiv="Content-Security-Policy"
          content={``}
        /> */}
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

        {/* @meta-pixel */}
        <Script
          id={`meta-pixel`}
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: metaPixelScript,
          }}
          nonce={hashMetaPixelScript}
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
            // __html: gTagsAnalyticsScript,
            __html: `window.dataLayer = window.dataLayer || []; function gtag() { window.dataLayer.push(arguments); } gtag('js', new Date()); gtag('config', 'G-HC7BZC18HB');`,
          }}
          nonce={hashGTagAnalytics}
        />
        {/* @google-tag-manager */}
        <Script
          id={`gtag-manager`}
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            // __html: gTagsScript,
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TMLM3MB');`,
          }}
          nonce={hashGTagManager}
        />
      </Head>
      <body>
        {/* @meta-pixel */}
        <noscript>
          <Image
            className={`!hidden !h-0 !w-0`}
            src="https://www.facebook.com/tr?id=534460966120098&ev=PageView&noscript=1"
            height="1"
            width="1"
          />
        </noscript>

        {/* @google-tag-manager(noscript) */}
        <noscript>
          <iframe
            className={`!hidden !h-0 !w-0`}
            src={`https://www.googletagmanager.com/ns.html?id=GTM-TMLM3MB`}
            height="0"
            width="0"
            nonce={hashGTagManager}
          ></iframe>
        </noscript>

        <Main />
        <NextScript nonce={hashNonce256} />
      </body>
    </Html>
  );
}
