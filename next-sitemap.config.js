/** @type {import('next-sitemap').IConfig} */

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

const nextSitemapConfig = {
  siteUrl: baseUrl,
  changefreq: 'daily',
  priority: 0.7,
  generateRobotsTxt: true,
  sitemapSize: 1000,
  robotsTxtOptions: {
    additionalSitemaps: [`${baseUrl}server-sitemap.xml`],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};

module.exports = nextSitemapConfig;
