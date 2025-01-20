import { Html, Head, Main, NextScript } from 'next/document';
import CryptoJS from 'crypto-js';
import Script from 'next/script';
import Image from 'next/image';

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
          content={`default-src 'self';script-src 'self' https://connect.facebook.net https://www.googletagmanager.com https://static.ads-twitter.com https://ads-twitter.com https://ads-api.twitter.com https://analytics.twitter.com https://www.google-analytics.com 'unsafe-eval' 'nonce-${hashNonce}';style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;font-src 'self' https://fonts.gstatic.com;connect-src 'self' https://coinfest.asia https://api.coinfest.asia https://api.hsforms.com https://hub.coinvestasi.com https://connect.facebook.net https://www.facebook.com https://static.ads-twitter.com https://ads-twitter.com https://ads-api.twitter.com https://analytics.twitter.com https://www.googletagmanager.com https://www.google-analytics.com https://checkout-staging.xendit.co https://vercel.live;img-src 'self' https://coinfest.asia https://upload.wikimedia.org https://api.coinfest.asia https://hub.coinvestasi.com https://flagcdn.com https://connect.facebook.net https://www.facebook.com https://t.co https://static.ads-twitter.com https://ads-twitter.com https://ads-api.twitter.com https://analytics.twitter.com https://www.googletagmanager.com https://www.google-analytics.com https://checkout-staging.xendit.co https://vercel.live data:;frame-src 'none';form-action 'self';worker-src 'self';base-uri 'self';`}
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

        {/* @meta-pixel */}
        <Script
          id={`meta-pixel`}
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '534460966120098');
              fbq('track', 'PageView');
            `,
          }}
          nonce={hashNonce}
        />
        <noscript>
          <Image
            className={`!hidden`}
            src="https://www.facebook.com/tr?id=534460966120098&ev=PageView&noscript=1"
            height="1"
            width="1"
          />
        </noscript>

        {/* @twitter(conversion-tracking) */}
        <script
          id={`twitter-conversion-tracking`}
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
              },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
              a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
              twq('config','o9kyj');
            `,
          }}
          nonce={hashNonce}
        />

        {/* @google-tag (gtag.js) */}
        <Script
          id={`google-analytics`}
          strategy="afterInteractive"
          src={gtagUrl}
          nonce={hashNonce}
        />
        <Script
          id={`gtag-init`}
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: gtagScript,
          }}
          nonce={hashNonce}
        />
      </Head>
      <body>
        <Main />
        <NextScript nonce={hashNonce} />
      </body>
    </Html>
  );
}
