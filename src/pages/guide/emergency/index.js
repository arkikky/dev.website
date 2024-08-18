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
        <title>{`Medical Emergency | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta name="title" content={`Medical Emergency | ${publicRuntimeConfig.siteTitle}`} />
        <meta name="description" content={publicRuntimeConfig.siteDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta property="og:title" content={`Medical Emergency | ${publicRuntimeConfig.siteTitle}`} />
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

      <GuideLayout title="Medical Emergency" className="pb-32 text-[#303030]">
        <div className="px-7 lg:px-14">
          <p className="text-base lg:text-xl leading-6 lg:leading-[30px]">
            Medical Units are stand-by around the venue marked{' '}
            <span className="inline-block align-middle">
              <Image className="w-[14px] lg:w-6" src={"/assets/images/icons/ca2024-Medical.svg"} width={24} height={24} alt="Coinfest Asia 2024 (Medical Icon)" />
            </span>{' '}
            in case of a medical emergency. Please find the nearest Coinfest Asia team for further assistance.
          </p>
          <div className="w-full p-4 rounded-[11px] border border-[#EFEFEF] flex items-center gap-2 mt-2 lg:mt-4">
            <Image
              src={"/assets/images/icons/ca2024-Medical.svg"}
              width={32}
              height={32}
              alt="Coinfest Asia 2024 (Medical Icon)"
            />
            Medic Area
          </div>
        </div>
        <div className="px-0 sm:px-7 lg:px-14 mt-6">
          <div className="aspect-[1.16/1] sm:aspect-[1.87/1] bg-[url('/assets/images/guide/ca2024MedicalMap.jpg')] bg-cover bg-center">
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
