import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import getConfig from "next/config";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// @get .config
const { publicRuntimeConfig } = getConfig();

// @layouts
import BannerFooter from "@layouts/Banner/BannerFooter";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

const Venue = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "10% 0% -40% 0%",
  });
  const [isLoading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // @intersection-observer
  useEffect(() => {
    if (inView) {
      setLoading(true);
    }

    return () => {
      undefined;
    };
  }, [inView]);

  return (
    <>
      {/* @head */}
      <Head>
        <title>{`Main Event Map | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta
          name="title"
          content={`Main Event Map | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta name="description" content={publicRuntimeConfig.siteDesc} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="og:title"
          content={`Main Event Map | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta
          property="og:description"
          content={publicRuntimeConfig.siteDesc}
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_UPLOAD}/uploads/ca2024_Thumbnails_Share_Link_App_9964b5c353.png`}
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="twitter:title"
          content={`Main Event Map | ${publicRuntimeConfig.siteTitle}`}
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

      {/* @main */}
      <main className="relative flex flex-col pt-[149px] xl:pt-[159px]">
        {/* @maps */}
        <div className="mb-20" ref={ref}>
          {isLoading ? (

            <Image
              className="z-10 mx-auto h-full w-full object-cover bg-black-900 cursor-pointer"
              src={"/assets/images/ca2024MainEventMap.png"}
              alt={`Coinfest Asia 2024 (Background Venue Maps)`}
              height={900}
              width={1440}
              quality="90"
              onClick={openModal}
            />
          ) : (
            <div className="z-[13] flex h-full w-full animate-pulse flex-col items-center justify-center bg-gray-400">
              <div
                className="inline-block size-8 animate-spin rounded-full border-2 border-current border-t-transparent text-white"
                role="status"
                aria-label="loading"
              >
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
        </div>

        {isOpen && (
          <div className="fixed top-0 left-0 right-0 bottom-0 inset-0 flex items-center justify-center bg-black-900 z-[9999]">
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
                    src={"/assets/images/ca2024MainEventMap.png"}
                    alt="Coinfest Asia 2024 Fullscreen Map"
                    width={1440}
                    height={900}
                  />
                </TransformComponent>
              </TransformWrapper>
            </div>
          </div>
        )}

        {/* @banner-footer */}
        <BannerFooter />
      </main >
    </>
  );
};

export default Venue;
