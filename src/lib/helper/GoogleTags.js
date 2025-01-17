export const GA_TRACKING_ID_1 = 'G-HC7BZC18HB';
export const GOOGLE_ADS_ID = 'AW-11152021529';

export const gtagAdsUrl = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}&l=CoinfestAsia2024&cx=c`;
export const gtagUrl = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID_1}`;

export const gtagScript = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${GA_TRACKING_ID_1}');
  gtag('config', '${GOOGLE_ADS_ID}');
`;
