/** @type {import('next-sitemap').IConfig} */

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.NODE_ENV === 'development'
    ? 'https://arkikky-dev0.vercel.app/'
    : 'https://coinfest.asia/');


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
