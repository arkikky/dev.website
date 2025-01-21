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
        <meta
          httpEquiv="Content-Security-Policy"
          content={`default-src 'self';
script-src 'self' 
  https://connect.facebook.net 
  https://www.googletagmanager.com 
  https://static.ads-twitter.com 
  https://ads-twitter.com 
  https://ads-api.twitter.com 
  https://analytics.twitter.com 
  https://www.google-analytics.com 
  https://googleads.g.doubleclick.net 
  https://googleadservices.com/pagead 
  https://static.hotjar.com 
  https://script.hotjar.com 
  'unsafe-eval'
  'sha256-+VpH0Cw80OuFaR+X1lmYjLkKsip/F2dDslL0JAvwlFA='
  'sha256-+kTPHgSOsYwYaXhSf2xTyBaBK4uVBsD6sgRbu0UKIYU='
  'sha256-h8qdr28t37PRaTPEFJ1DmRLJKbfRzrtcJDuEJUp1FBw='
  'sha256-lH5mF7jetR73rDA8fhru5w2+2TLgjsr3PXRS16nwqpY='
  'sha256-xm8N0GZArBHm4p9Zsd98vsHWVLP7knjZklGdLDzn35M='
  'sha256-63SgcioJg3SzunjNOZishsGbCME4jf2tExf3FX51aAA='
  'sha256-2kGECM9NFHBAhlNMIbyAm0Lu6VdF7TvhbzT9WW86kUI='
  'sha256-ANMpmVf8PLjCGynCggIAiTArAnaTMInBshu95qRJPzg='
  'sha256-BawaB+1tlg+I0FG2NG2/30p/CM96DWlvld7LzrS5/6M='
  'sha256-BzokaaX+EWQs7wVvCr0hpX7jNoWu847XT8ay8gsQVHA='
  'sha256-ciempzB86lmZWo8K/uPbojn0/dfNxls6k0PSaNLRvow='
  'sha256-n/RMhdYdR3bw+fP3SraQjHyjwYYKf9PKqEjbgGfhn+0='
  'sha256-eUnp2iVRt/owvyEacOFIV+gGEV6vsK65zTx3zVwaP7o='
  'sha256-DtxIxVxxirVV7lmJdKrGO2JEAskZPNSx7uZcXvTalWg='
  'sha256-ATLVdlL7dm0+nH5N56U4mqJ2hTLoPfU0SOGf4CSQsRg='
  'sha256-ZPfOsj5SKj5ldrOcWOWm2a5wUFeaCTcpC6Kg+D0A2+w='
  'sha256-9OW5aXYYSnZX5Dvg+19bDiia2eOhw0LCwR4r+V3V5d0='
  'sha256-hMTlXvm+Ql/aRmzjpffxtisA0FskENp0fgY/0O/63Qk='
  'sha256-WnXrrRzgpTOaoj+/CEeJjeYDfYu6qkeJB44k68IPQbs=';
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
font-src 'self' https://fonts.gstatic.com;
connect-src 'self'
  https://coinfest.asia
  https://api.coinfest.asia
  https://api.hsforms.com
  https://hub.coinvestasi.com
  https://www.google.com
  https://www.google.com/ccm
  https://connect.facebook.net
  https://www.facebook.com
  https://www.facebook.com/tr
  https://static.ads-twitter.com
  https://ads-twitter.com
  https://ads-api.twitter.com
  https://analytics.twitter.com
  https://www.googletagmanager.com
  https://www.google-analytics.com
  https://googleads.g.doubleclick.net
  https://www.googleadservices.com/pagead
  https://static.hotjar.com
  https://script.hotjar.com
  https://metrics.hotjar.io
  https://content.hotjar.io
  wss://ws.hotjar.com
  https://checkout-staging.xendit.co
  https://vercel.live;
img-src 'self' 
  https://coinfest.asia
  https://upload.wikimedia.org
  https://api.coinfest.asia
  https://hub.coinvestasi.com
  https://flagcdn.com
  https://www.google.com
  https://www.google.co.id
  https://www.google.co.id/pagead
  https://connect.facebook.net
  https://www.facebook.com
  https://www.facebook.com/tr
  https://t.co
  https://static.ads-twitter.com
  https://ads-twitter.com
  https://ads-api.twitter.com
  https://analytics.twitter.com
  https://www.googletagmanager.com
  https://www.google-analytics.com
  https://checkout-staging.xendit.co
  https://vercel.live
  data:;
frame-src 'self' https://td.doubleclick.net https://www.googletagmanager.com;
form-action 'self';
worker-src 'self';
base-uri 'self';`}
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
            __html: metaPixelScript,
          }}
          nonce={hashMetaPixelScript}
        />
        <noscript>
          <Image
            className={`!hidden !h-0 !w-0`}
            src="https://www.facebook.com/tr?id=534460966120098&ev=PageView&noscript=1"
            height="1"
            width="1"
          />
        </noscript>

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
      </Head>
      <body>
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
