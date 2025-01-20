import { Html, Head, Main, NextScript } from 'next/document';
import CryptoJS from 'crypto-js';
import Script from 'next/script';
import Image from 'next/image';

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
          content={`default-src 'self';script-src 'self' https://connect.facebook.net https://www.googletagmanager.com https://static.ads-twitter.com https://ads-twitter.com https://ads-api.twitter.com https://analytics.twitter.com https://www.google-analytics.com https://static.hotjar.com https://script.hotjar.com 'unsafe-eval' 'nonce-${hashNonce}';style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;font-src 'self' https://fonts.gstatic.com;connect-src 'self' https://coinfest.asia https://api.coinfest.asia https://api.hsforms.com https://hub.coinvestasi.com https://www.google.com https://www.google.com/ccm/collect https://connect.facebook.net https://www.facebook.com https://static.ads-twitter.com https://ads-twitter.com https://ads-api.twitter.com https://analytics.twitter.com https://www.googletagmanager.com https://www.google-analytics.com https://static.hotjar.com https://script.hotjar.com https://metrics.hotjar.io https://content.hotjar.io wss://ws.hotjar.com https://checkout-staging.xendit.co https://vercel.live;img-src 'self' https://coinfest.asia https://upload.wikimedia.org https://api.coinfest.asia https://hub.coinvestasi.com https://flagcdn.com https://www.google.com https://www.google.co.id https://connect.facebook.net https://www.facebook.com https://t.co https://static.ads-twitter.com https://ads-twitter.com https://ads-api.twitter.com https://analytics.twitter.com https://www.googletagmanager.com https://www.google-analytics.com https://checkout-staging.xendit.co https://vercel.live data:;frame-src 'self' https://td.doubleclick.net https://www.googletagmanager.com;form-action 'self';worker-src 'self';base-uri 'self';`}
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
          src={`https://www.googletagmanager.com/gtag/js?id=G-HC7BZC18HB`}
          nonce={hashNonce}
        />
        <Script
          id={`gtag-init`}
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag() { window.dataLayer.push(arguments); } gtag('js', new Date()); gtag('config', 'G-HC7BZC18HB')`,
          }}
          nonce={hashNonce}
        />
        {/* @google-tag-manager */}
        <Script
          id={`google-tag-manager`}
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TMLM3MB');
            `,
          }}
          nonce={hashNonce}
        />
      </Head>
      <body>
        {/* @google-tag-manager(noscript) */}
        <noscript>
          <iframe
            className={`!hidden !h-0 !w-0`}
            src={`https://www.googletagmanager.com/ns.html?id=GTM-TMLM3MB`}
            height="0"
            width="0"
            nonce={hashNonce}
          ></iframe>
        </noscript>

        <Main />
        <NextScript nonce={hashNonce} />
      </body>
    </Html>
  );
}
