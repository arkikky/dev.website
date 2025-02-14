/** @type {import('next-sitemap').IConfig} */

const baseUrl = 'https://coinfest.asia/';

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
  },
};

module.exports = nextSitemapConfig;
