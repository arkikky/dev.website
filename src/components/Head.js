import React from 'react';
import getConfig from 'next/config';
import Head from 'next/head';

// @get .config
const { publicRuntimeConfig } = getConfig();

const HeadGraphSeo = ({
  title = publicRuntimeConfig?.siteTitle,
  desc = publicRuntimeConfig?.siteDesc,
  siteUrl = publicRuntimeConfig?.siteUrl,
  siteThunbnails = `${process.env.NEXT_PUBLIC_UPLOAD}uploads/ca25_Thumbnails_Full_The_Moon_64a7262311.png`,
  otherPage = false,
}) => {
  return (
    <>
      {/* @head */}
      <Head>
        <title>{`${
          otherPage === true
            ? `${title} | ${publicRuntimeConfig?.siteTitle}`
            : title
        }`}</title>
        <meta name="title" content={title} />
        <meta name="description" content={desc} />

        {/* @open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={siteThunbnails} />
        <meta property="og:site_name" content={title} />

        {/* @twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={siteUrl} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={desc} />
        <meta property="twitter:image" content={siteThunbnails} />
      </Head>
    </>
  );
};

export default HeadGraphSeo;
