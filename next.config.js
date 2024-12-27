/** @type {import('next').NextConfig} */

const CryptoJS = require('crypto-js');

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'http://localhost:3001',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_DOMAIN,
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'https://api.coinfest.asia/',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'https://flagcdn.com/',
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

    // @form(HubSpot)
    hbSptCheckout: process.env.FORM_CHECKOUT,

    // @currency
    currencyUSD: process.env.NEXT_SECRET_CURRENCY_USD,

    // @token
    token_api: process.env.API_TOKEN_KEY,
    hbspot_token_api: process.env.API_TOKEN_HUBSPOT,
    ipAddress_token: process.env.API_IPADDRESS_TOKEN,

    secretToken: process.env.SECRET_TOKEN,
    secretTokenEncrypt: process.env.SECRET_TOKEN_ENCRYPT,
    secretXenditToken: process.env.SECRET_XENDIT_TOKEN,
    devNode: process.env.NODE_ENV,
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
    const nonce = CryptoJS.lib.WordArray.random(20).toString(
      CryptoJS.enc.Base64
    );
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE',
          },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE',
          },
          {
            key: 'Cache-Control',
            value: 'private, stale-while-revalidate=59',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
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
            key: 'Content-Security-Policy',
            value: `script-src 'self' http: https:;object-src 'none';frame-src 'none';base-uri 'none';require-trusted-types-for 'script';report-uri http://localhost:3001;`,
          },
          {
            key: 'Permissions-Policy',
            value:
              'display-capture=(self), microphone=(), payment=(self), geolocation=(self)',
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
            key: 'Cross-Origin-Resource-Policy',
            value: 'same-site',
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'same-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Expect-CT',
            value: 'enforce, max-age=86400',
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
