/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hub.coinvestasi.com",
        port: "",
        pathname: "/**",
      },
    ],
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
    siteDesc:
      "Asia's largest Web3 festival. Where innovation meets adoption. BALI ☀️ 22-23 AUGUST 2024",
    author: process.env.NEXT_PUBLIC_AUTHOR,
    tags: process.env.NEXT_PUBLIC_TAGS,
    version: process.env.NEXT_PUBLIC_SITE_APP_VERSION,
  },
  async redirects() {
    return [
      {
        source: "/deck",
        destination: "https://hubs.ly/Q02hGy2g0",
        permanent: true, // 301 Moved Permanently or false for temporary redirect (302 Found)
      },
      {
        source: "/ticket",
        destination: "https://ticket.coinfest.asia/",
        permanent: true, // 301 Moved Permanently or false for temporary redirect (302 Found)
      },
      {
        source: "/get-involved/speakers",
        destination: "/get-involved",
        permanent: true, // 301 Moved Permanently or false for temporary redirect (302 Found)
      },
    ];
  },
};

export default nextConfig;
