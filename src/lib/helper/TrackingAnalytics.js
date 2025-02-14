import CryptoJS from 'crypto-js';

export const nonceSha256 = `console.log("This Script is allowed!");`;

// @meta-pixel
export const metaPixelScript = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '534460966120098');fbq('track', 'PageView');`;
export const hashMetaPixelScript = CryptoJS.SHA256(metaPixelScript).toString(
  CryptoJS.enc.Base64
);

// @twitter-conversion
export const twtrConversionScript = `!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments); },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js', a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script'); twq('config','o9kyj');`;
export const hashTwtrConversionScript = CryptoJS.SHA256(
  twtrConversionScript
).toString(CryptoJS.enc.Base64);

// @google-tags-analytics
export const gTagsAnalyticsScript = `window.dataLayer = window.dataLayer || []; function gtag() { window.dataLayer.push(arguments); } gtag('js', new Date()); gtag('config', 'G-HC7BZC18HB', { 'debug_mode': true });`;
export const hashGTagAnalytics = CryptoJS.SHA256(gTagsAnalyticsScript).toString(
  CryptoJS.enc.Base64
);

export const gTagsScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TMLM3MB');`;
export const hashGTagManager = CryptoJS.SHA256(gTagsScript).toString(
  CryptoJS.enc.Base64
);
