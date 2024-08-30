/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.NEXT_PUBLIC_DOMAIN,"ticket.coinfest.asia", "hub.coinvestasi.com"],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  publicRuntimeConfig: {
    domain: process.env.NEXT_PUBLIC_DOMAIN,
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
    siteAppName: process.env.NEXT_PUBLIC_SITE_APP_NAME,
    siteTitle: process.env.NEXT_PUBLIC_SITE_TITLE,
    siteDesc: process.env.NEXT_PUBLIC_SITE_DESC,
    author: process.env.NEXT_PUBLIC_AUTHOR,
    tags: process.env.NEXT_PUBLIC_TAGS,
    version: process.env.NEXT_PUBLIC_SITE_APP_VERSION,

    // Api
    caApi: process.env.NEXT_PUBLIC_API,
    caUpload: process.env.NEXT_PUBLIC_UPLOAD,

    // Assets
    staticFolderImgs: process.env.NEXT_PUBLIC_STATIC_FOLDER_IMAGES,
    staticThumbnailsApp: process.env.NEXT_PUBLIC_STATIC_THUMBNAILS_APP,

    // Google Tag Manager
    gtmId: process.env.NEXT_PUBLIC_GTM_ID,
  },
  async redirects() {
    return [
      {
        source: "/handbook2023",
        destination: "https://docs.google.com/presentation/d/e/2PACX-1vRSQdmoRL_6UvaKfZ4dKCKRvRwYjMVDDena_44K08C8aeP9ClwGvbldjf4IoLCPC14ZHQuvvXHPHqcp/pub?start=false&loop=false&delayms=60000",
        permanent: true,
      },
      {
        source: "/airdrop",
        destination: "https://coinfest.asia/",
        permanent: true,
      },
      {
        source: "/card",
        destination: "https://ticket.coinfest.asia/product/sleek-card/",
        permanent: true,
      },
      {
        source: "/bestpost",
        destination: "https://coinfest.asia/",
        permanent: true,
      },
      {
        source: "/mostengaged",
        destination: "https://coinfest.asia/",
        permanent: true,
      },
      {
        source: "/order-csv",
        destination: "https://docs.google.com/spreadsheets/d/1KOegfpomw1uG5st5KgJ0Ez1PQ8IQ22sG/edit?usp=sharing&ouid=111175809507917122736&rtpof=true&sd=true",
        permanent: true,
      },
      {
        source: "/admin-coupon",
        destination: "https://ticket.coinfest.asia/wp-admin/edit.php?post_type=shop_coupon",
        permanent: true,
      },
      {
        source: "/admin-order",
        destination: "https://ticket.coinfest.asia/wp-admin/edit.php?post_type=shop_order",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
