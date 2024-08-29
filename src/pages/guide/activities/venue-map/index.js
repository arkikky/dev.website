import React, { useState } from "react";
import getConfig from "next/config";
import Head from "next/head";
import Image from "next/image";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

// @layout
import GuideLayout from "@layouts/GuideLayout";

// @lib
import mapLegenda from "@lib/json/map-legenda.json";

const { publicRuntimeConfig } = getConfig();

const VenueMap = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Head>
        <title>{`Venue Map | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta name="title" content={`Venue Map | ${publicRuntimeConfig.siteTitle}`} />
        <meta name="description" content={publicRuntimeConfig.siteDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta property="og:title" content={`Venue Map | ${publicRuntimeConfig.siteTitle}`} />
        <meta property="og:description" content={publicRuntimeConfig.siteDesc} />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_UPLOAD}/uploads/ca2024_Thumbnails_Share_Link_App_9964b5c353.png`}
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="twitter:title"
          content={`Venue Map | ${publicRuntimeConfig.siteTitle}`}
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

      <GuideLayout title="Venue Map" className="pb-32">
        <div className="px-0 sm:px-7 lg:px-14">
          <Image
            className="h-full w-full object-cover cursor-pointer sm:rounded-2xl"
            src={"/assets/images/guide/ca2024VenueMap.png"}
            alt={`Coinfest Asia 2024 (Background Venue Maps)`}
            height={900}
            width={1440}
            quality="90"
            onClick={openModal}
          />
        </div>

        {/* Legenda - Mobile Only */}
        <div className="p-4 block sm:hidden">
          <div className="p-3 flex flex-row gap-2 rounded-[10px] border border-[#DCDCDC]">
            <Image
              src={"/assets/images/guide/venue-map/ca2024-MainEvent.svg"}
              alt={`Coinfest Asia 2024 (Main Event)`}
              height={48}
              width={48}
              quality="90"
            />
            <div className="flex flex-col justify-center">
              <h2 className="text-base font-extrabold leading-6">Main Event</h2>
              <span className="text-xs leading-4 text-[#9D9D9D]">in Luna Beachclub</span>
            </div>
          </div>
          <div className="px-1 grid grid-cols-2 gap-x-1 gap-y-8 text-sm text-[#3F3F3F] mt-4">
            {mapLegenda.map(data => (
              <div className="flex items-center gap-1 font-medium">
                <Image
                  src={data.logo}
                  alt={`Coinfest Asia 2024 (${data.label})`}
                  height={32}
                  width={32}
                  quality="90"
                  onClick={openModal}
                />
                {data.label}
              </div>
            ))}
          </div>
        </div>

        {isOpen && (
          <div className="fixed top-0 left-0 right-0 bottom-0 inset-0 z-90 flex items-center justify-center bg-black-900">
            <button
              className="absolute top-4 right-4 z-50 text-white p-2 rounded-full bg-black-900/40"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative w-full h-screen flex items-center justify-center max-w-5xl">

              <TransformWrapper>
                <TransformComponent>
                  <Image
                    src={"/assets/images/guide/ca2024VenueMap.jpg"}
                    alt="Coinfest Asia 2024 Fullscreen Map"
                    width={1440}
                    height={900}
                  />
                </TransformComponent>
              </TransformWrapper>
            </div>
          </div>
        )}
      </GuideLayout>
    </>
  );
};

export default VenueMap;

VenueMap.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
