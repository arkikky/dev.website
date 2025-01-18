import { Html, Head, Main, NextScript } from 'next/document';
import CryptoJS from 'crypto-js';
import Script from 'next/script';

// @lib
import { gtagUrl, gtagScript } from '@lib/helper/GoogleTags';

export default function Document() {
  const hashNonce = CryptoJS.lib.WordArray.random(16).toString(
    CryptoJS.enc.Base64
  );
  return (
    <Html lang="en">
      <Head>
        {/* @content-security-policy */}
        <meta
          httpEquiv="Content-Security-Policy"
          content={`default-src 'self';script-src 'self' https://www.googletagmanager.com https://www.google-analytics.com 'unsafe-eval' 'nonce-${hashNonce}';style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;font-src 'self' https://fonts.gstatic.com;connect-src 'self' https://coinfest.asia https://api.coinfest.asia https://api.hsforms.com https://hub.coinvestasi.com https://www.googletagmanager.com https://www.google-analytics.com https://checkout-staging.xendit.co https://vercel.live;img-src 'self' https://coinfest.asia https://upload.wikimedia.org https://api.coinfest.asia https://hub.coinvestasi.com https://flagcdn.com https://www.googletagmanager.com https://www.google-analytics.com https://checkout-staging.xendit.co https://vercel.live data:;frame-src 'none';form-action 'self';worker-src 'self';base-uri 'self';`}
        />
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

        {/* @google-tag (gtag.js) */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              src={gtagUrl}
              nonce={hashNonce}
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: gtagScript,
              }}
              nonce={hashNonce}
            />
          </>
        )}
      </Head>
      <body>
        <Main />
        <NextScript nonce={hashNonce} />
      </body>
    </Html>
  );
}
