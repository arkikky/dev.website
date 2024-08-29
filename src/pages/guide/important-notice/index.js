import React from "react";
import getConfig from "next/config";
import Head from "next/head";
import Image from "next/image";

// @layout
import GuideLayout from "@layouts/GuideLayout";

// @lib
import notEncouraged from "@lib/json/not-encouraged.json";
import strictlyProhibited from "@lib/json/strictly-prohibited.json";

// @get .config
const { publicRuntimeConfig } = getConfig();

const WeatherAttire = () => {

  return (
    <>
      <Head>
        <title>{`Important Notice | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta name="title" content={`Important Notice | ${publicRuntimeConfig.siteTitle}`} />
        <meta name="description" content={publicRuntimeConfig.siteDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta property="og:title" content={`Important Notice | ${publicRuntimeConfig.siteTitle}`} />
        <meta property="og:description" content={publicRuntimeConfig.siteDesc} />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_UPLOAD}/uploads/ca2024_Thumbnails_Share_Link_App_9964b5c353.png`}
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="twitter:title"
          content={`Important Notice | ${publicRuntimeConfig.siteTitle}`}
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

      <GuideLayout title="Important Notice" className="px-6 lg:px-14 pb-32 text-[#303030]">
      <p className="text-base lg:text-xl leading-6 lg:leading-[30px] mt-6">To avoid any inconvenience. The following items and actions are NOT ENCOURAGED</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-2 mt-4">
          {notEncouraged.map(data => (
            <div className="flex flex-col items-center gap-2 p-6 rounded-[11px] border border-[#E2E2E2] text-center">
              <Image
                src={data.logo}
                width={48}
                height={48} 
                alt={`Coinfest Asia 2024 (${data.label})`}
                />
              <span className="h-[66px] flex items-center justify-center">{data.label}</span>
            </div>
          ))}
        </div>

        <p className="text-base lg:text-xl leading-6 lg:leading-[30px] mt-6">We conduct a security check upon check-in. The following items and actions are <span className="text-[#DB000D] font-bold">STRICTLY PROHIBITED</span></p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-2 mt-4">
          {strictlyProhibited.map(data => (
            <div className="flex flex-col items-center gap-2 p-6 rounded-[11px] border border-[#E2E2E2] text-center">
              <Image
                src={data.logo}
                width={48}
                height={48} 
                alt={`Coinfest Asia 2024 (${data.label})`}
                />
              <span className="h-[66px] flex items-center justify-center">{data.label}</span>
            </div>
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
