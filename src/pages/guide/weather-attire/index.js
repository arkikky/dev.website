import React from "react";
import getConfig from "next/config";
import Head from "next/head";
import Image from "next/image";

// @layout
import GuideLayout from "@layouts/GuideLayout";

// @get .config
const { publicRuntimeConfig } = getConfig();

const WeatherAttire = () => {

  return (
    <>
      <Head>
        <title>{`Weather & Attire | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta name="title" content={`Weather & Attire | ${publicRuntimeConfig.siteTitle}`} />
        <meta name="description" content={publicRuntimeConfig.siteDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta property="og:title" content={`Weather & Attire | ${publicRuntimeConfig.siteTitle}`} />
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

      <GuideLayout title="Weather And Attire" className="px-6 lg:px-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full text-base lg:text-[19px] text-[#303030]">
          <div className="flex flex-col gap-2 bg-white border border-[#D3D3D3] rounded-[10px] p-6">
            <Image
              src={"/assets/images/icons/ca2024-Sun.svg"}
              width={24}
              height={24}
              alt="Coinfest Asia 2024 (Sun Icon)"
            />
            <p className="leading-6 lg:leading-[28.5px]">
              The average temperature in Bali during
              August is <span className="text-[#2458F1]">28°C</span>. Given that the event is
              largely outdoors, please be mindful of
              potential weather-related impacts, which
              are outside the organizers' control.
            </p>
          </div>
          <div className="flex flex-col gap-2 bg-white border border-[#D3D3D3] rounded-[10px] p-6">
            <Image
              src={"/assets/images/icons/ca2024-Clothes.svg"}
              width={24}
              height={24}
              alt="Coinfest Asia 2024 (Clothes Icon)"
            />
            <p className="leading-6 lg:leading-[28.5px]">
              Light summer clothing is encouraged,
              except for tank tops, flip-flops, and
              sleeveless shirts. Comfortable footwear is
              advised due to uneven surfaces at the
              venue, with high heels being discouraged.
            </p>
          </div>
        </div>
      </GuideLayout>
    </>
  );
};

export default WeatherAttire;

WeatherAttire.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
