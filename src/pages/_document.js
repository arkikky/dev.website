import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

// @lib
import { gtagUrl, gtagScript } from '@lib/helper/GoogleTags';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
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
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          src={gtagUrl}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: gtagScript,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
