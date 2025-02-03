/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_DOMAIN,
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.coinfest.asia',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'hub.coinvestasi.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.facebook.com',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  serverRuntimeConfig: {
    version: process.env.SITE_APP_VERSION,
    hbSptCheckout: process.env.FORM_CHECKOUT,
    token_api: process.env.API_TOKEN_KEY,
    hbspot_token_api: process.env.API_TOKEN_HUBSPOT,
    ipAddress_token: process.env.API_IPADDRESS_TOKEN,
    secretToken: process.env.SECRET_TOKEN,
    secretTokenEncrypt: process.env.SECRET_TOKEN_ENCRYPT,
    secretXenditToken: process.env.SECRET_XENDIT_TOKEN,
  },
  publicRuntimeConfig: {
    domain: process.env.NEXT_PUBLIC_DOMAIN,
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
    siteAppName: process.env.NEXT_PUBLIC_SITE_APP_NAME,
    siteTitle: process.env.NEXT_PUBLIC_SITE_TITLE,
    siteDesc: process.env.NEXT_PUBLIC_SITE_DESC,
    author: process.env.NEXT_PUBLIC_AUTHOR,
    tags: process.env.NEXT_PUBLIC_TAGS,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: process.env.NEXT_PUBLIC_SITE_URL || '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=15552000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value:
              'display-capture=(self), microphone=(), payment=(self), geolocation=(self)',
          },
          {
            key: 'Content-Security-Policy',
            value: `default-src 'self'; base-uri 'self'; script-src 'self' 'unsafe-eval' https: https://www.googletagmanager.com https://www.google-analytics.com wss: wss://*.hotjar.com wss://ws.hotjar.com ws.hotjar.com 'sha256-+VpH0Cw80OuFaR+X1lmYjLkKsip/F2dDslL0JAvwlFA=' 'sha256-+kTPHgSOsYwYaXhSf2xTyBaBK4uVBsD6sgRbu0UKIYU=' 'sha256-h8qdr28t37PRaTPEFJ1DmRLJKbfRzrtcJDuEJUp1FBw=' 'sha256-lH5mF7jetR73rDA8fhru5w2+2TLgjsr3PXRS16nwqpY=' 'sha256-xm8N0GZArBHm4p9Zsd98vsHWVLP7knjZklGdLDzn35M=' 'sha256-63SgcioJg3SzunjNOZishsGbCME4jf2tExf3FX51aAA=' 'sha256-2kGECM9NFHBAhlNMIbyAm0Lu6VdF7TvhbzT9WW86kUI=' 'sha256-ANMpmVf8PLjCGynCggIAiTArAnaTMInBshu95qRJPzg=' 'sha256-BawaB+1tlg+I0FG2NG2/30p/CM96DWlvld7LzrS5/6M=' 'sha256-BzokaaX+EWQs7wVvCr0hpX7jNoWu847XT8ay8gsQVHA=' 'sha256-ciempzB86lmZWo8K/uPbojn0/dfNxls6k0PSaNLRvow=' 'sha256-n/RMhdYdR3bw+fP3SraQjHyjwYYKf9PKqEjbgGfhn+0=' 'sha256-eUnp2iVRt/owvyEacOFIV+gGEV6vsK65zTx3zVwaP7o=' 'sha256-DtxIxVxxirVV7lmJdKrGO2JEAskZPNSx7uZcXvTalWg=' 'sha256-ATLVdlL7dm0+nH5N56U4mqJ2hTLoPfU0SOGf4CSQsRg=' 'sha256-ZPfOsj5SKj5ldrOcWOWm2a5wUFeaCTcpC6Kg+D0A2+w=' 'sha256-9OW5aXYYSnZX5Dvg+19bDiia2eOhw0LCwR4r+V3V5d0=' 'sha256-hMTlXvm+Ql/aRmzjpffxtisA0FskENp0fgY/0O/63Qk=' 'sha256-WnXrrRzgpTOaoj+/CEeJjeYDfYu6qkeJB44k68IPQbs=' 'report-sample'; style-src 'self' 'unsafe-inline' https:* https://fonts.googleapis.com; font-src 'self' https:* https://fonts.gstatic.com; connect-src 'self' https: https://coinfest.asia https://api.coinfest.asia https://api.hsforms.com https://hub.coinvestasi.com https://www.googletagmanager.com https://www.google-analytics.com https://td.doubleclick.net https://*.hotjar.com https://checkout-staging.xendit.co https://vercel.live wss: wss://*.hotjar.com wss://ws.hotjar.com ws.hotjar.com; img-src 'self' https: https://coinfest.asia https://upload.wikimedia.org https://api.coinfest.asia https://hub.coinvestasi.com https://flagcdn.com https://*.hotjar.com https://td.doubleclick.net https://checkout-staging.xendit.co https://vercel.live data: blob:; frame-src 'self' https: https://*.facebook.com https://*.doubleclick.net https://www.googletagmanager.com https://td.doubleclick.net; form-action 'self' https: https://*.facebook.com https://*.facebook.com/*; object-src 'none'; worker-src 'self';`,
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups',
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'same-site',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Cache-Control',
            value: 'private, stale-while-revalidate=59',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Expect-CT',
            value: 'enforce, max-age=86400',
          },
          {
            key: 'X-Permitted-Cross-Domain-Policies',
            value: 'none',
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
