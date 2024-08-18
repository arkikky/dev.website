import React from "react";
import Head from "next/head";
import getConfig from "next/config";

// @lib
import engageToWinData from "@lib/json/engage.json";

// @components
import EngageToWinCard from "@components/UI/Card/EngageToWinCard";

// @layout
import GuideLayout from "@layouts/GuideLayout";

// @get .config
const { publicRuntimeConfig } = getConfig();

const WeatherAttire = () => {

  return (
    <>
      <Head>
        <title>{`Engage to Win | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta name="title" content={`Engage to Win | ${publicRuntimeConfig.siteTitle}`} />
        <meta name="description" content={publicRuntimeConfig.siteDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta property="og:title" content={`Engage to Win | ${publicRuntimeConfig.siteTitle}`} />
        <meta property="og:description" content={publicRuntimeConfig.siteDesc} />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_UPLOAD}/uploads/ca2024_Thumbnails_Share_Link_App_9964b5c353.png`}
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="twitter:title"
          content={`Page Not Found! | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta
          property="twitter:description"
          content={publicRuntimeConfig.siteDesc}
        />
        <meta
          property="twitter:image"
          content={`${process.env.NEXT_PUBLIC_UPLOAD}/uploads/ca2024_Thumbnails_Share_Link_App_9964b5c353.png`}
        />
      </Head>

      <GuideLayout title="Engage to Win" className="px-6 lg:px-14 pb-32 text-[#303030] !mt-2">
        <p className="text-[#303030]">Total $1000 worth of Prizes</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-11 sm:gap-8 mt-12 lg:mt-12">
          {engageToWinData.map(engageData => (
            <EngageToWinCard data={engageData}/>
          ))}
        </div>
      </GuideLayout>
    </>
  );
};

export default WeatherAttire;

WeatherAttire.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
