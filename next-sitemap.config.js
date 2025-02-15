/** @type {import('next-sitemap').IConfig} */

const baseUrl =
  process.env.NODE_ENV === 'development'
    ? process.env.NEXT_PUBLIC_SITE_URL || 'https://arkikky-dev0.vercel.app/'
    : process.env.NEXT_PUBLIC_SITE_URL || 'https://coinfest.asia/';

const nextSitemapConfig = {
  siteUrl: baseUrl,
  changefreq: 'daily',
  priority: 0.7,
  generateRobotsTxt: true,
  sitemapSize: 1000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [`${baseUrl}sitemap.xml`],
  },
};

module.exports = nextSitemapConfig;
