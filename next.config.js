/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: true,
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
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=900, immutable',
          },
        ],
      },
    ];
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: '/api/:path*',
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
