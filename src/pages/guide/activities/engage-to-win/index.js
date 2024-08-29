import React from "react";
import getConfig from "next/config";
import Head from "next/head";
import Image from "next/image";

// @layout
import GuideLayout from "@layouts/GuideLayout";

// @lib
import exhibitorsData from "@lib/json/exhibitors-data.json";

// @components
import EngageToWinCard from "@components/UI/Card/EngageToWinCard";

// @get .config
const { publicRuntimeConfig } = getConfig();

const EngageToWin = () => {

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
          content={`Engage to Win | ${publicRuntimeConfig.siteTitle}`}
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
        <p className="text-base lg:text-xl leading-6 lg:leading-[30px]">Total $1000 worth of Prizes</p>
        <Image
          src={"/assets/images/guide/engage-to-win/ca2024-Engage.png"}
          width={914}
          height={500}
          quality="100"
          className="w-full mb-2"
        />
        <EngageToWinCard />

        <div className="mt-10">
          <h2 className="text-[#202020] text-base sm:text-lg md:text-xl lg:text-2xl font-bold">Visit Our Exhibitors</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-4 gap-2">
            {exhibitorsData.map(data => (
              <div className="flex flex-col gap-1 items-center pt-2 pb-6 px-2 lg:py-6 border border-[#DBDBDB] rounded-[10px]">
                <Image
                  src={data.logo}
                  width={204}
                  height={80}
                  quality={95}
                  className="w-full"
                />
                <p className="text-xs xl:text-sm text-center text-[#303030]">{data.description}</p>
              </div>
            ))}
          </div>
        </div>
      </GuideLayout>
    </>
  );
};

export default EngageToWin;

EngageToWin.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
