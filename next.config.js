/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
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
        hostname: 'flagcdn.com/',
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
    // @currency
    currencyUSD: process.env.CURRENCY_USD,
    // @token
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
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET',
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
            value: 'GET',
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
            value: `default-src 'self';script-src 'self' 'unsafe-eval';style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;font-src 'self' https://fonts.gstatic.com;connect-src 'self' https://api.coinfest.asia http://coinfest-2025.vercel.app https://api.hsforms.com https://hub.coinvestasi.com;img-src 'self' https://upload.wikimedia.org https://hub.coinvestasi.com http://coinfest-2025.vercel.app https://flagcdn.com data:;frame-src 'none';frame-ancestors 'self';form-action 'self';worker-src 'self';base-uri 'self';`,
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
      {
        source: '/checkout',
        headers: [
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,POST,PUT',
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
