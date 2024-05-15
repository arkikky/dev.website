import React, { useEffect } from "react";
import getConfig from "next/config";
import Head from "next/head";
import Image from "next/image";

// @get .config
const { publicRuntimeConfig } = getConfig();

// @components
import Container from "@components/Container";

// @layouts
// import NavbarTop from "@layouts/Navbar/NavbarTop";
// import NavbarBottom from "@layouts/Navbar/NavbarBottom";

const Venue = () => {
  return (
    <>
      {/* @head */}
      <Head>
        <title>{`Venue | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta
          name="title"
          content={`Venue | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta name="description" content={publicRuntimeConfig.siteDesc} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="og:title"
          content={`Venue | ${publicRuntimeConfig.siteTitle}`}
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
          content={`Venue | ${publicRuntimeConfig.siteTitle}`}
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

      {/* @navbar(top) */}
      {/* <NavbarTop /> */}

      {/* @navbar(bottom) */}
      {/* <NavbarBottom /> */}

      {/* @main */}
      <main className="relative flex flex-col pb-[226px] pt-[129px] xl:pt-[139px] 2xl:pt-[229px]">
        <Container>
          <div className="flex flex-col">
            <h2 className="font-staraExtraBold text-2xl uppercase text-black-900 xs:text-[42px] xs:leading-[50px] sm:text-[58px] sm:leading-[74px]">
              Venue map
            </h2>
            <p className="text-base font-light sm:text-xl">
              6 areas connected by walking & golf buggies
            </p>
          </div>
        </Container>

        {/* @maps */}
        <div className="relative mt-8 h-[100svh] w-full sm:mt-20 sm:h-[900px]">
          <Image
            className=" object-[55% bottom] z-10 mx-auto h-full w-full object-cover sm:object-center"
            src={"/assets/images/ca2024VenueMaps.jpg"}
            alt={`Coinfest Asia 2024 (Background Venue)`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            height={1800}
            width={2880}
            quality="89"
          />
        </div>

        <div className="z-10 mx-auto mt-0 grid w-full max-w-[1248px] grid-cols-1 flex-row rounded-none bg-white px-7 py-8 shadow-none sm:grid-cols-2 xl:-mt-[89px] xl:grid-cols-4 xl:rounded-2xl xl:px-19 xl:shadow-2xl">
          <div>
            <div className="ca2024LabelVenue mb-3.5 flex w-fit flex-row items-center justify-center">
              <div className="mr-2 flex h-6 w-6 flex-col items-center justify-center rounded-full bg-secondary font-bevietnamPro text-[10px] text-white">
                1
              </div>
              <h3 className="text-base font-semibold text-black-900">
                Venue 1
              </h3>
            </div>
            <ul className="flex flex-col pl-8 prose-li:mb-2 prose-li:font-bevietnamPro prose-li:text-base prose-li:font-light prose-li:text-[#5D5D5D] last:prose-li:mb-0">
              <li>Sea Village</li>
              <li>Community Stage</li>
              <li>Goverment Stage</li>
            </ul>
          </div>
          <div>
            <div className="ca2024LabelVenue mb-3.5 flex w-fit flex-row items-center justify-center">
              <div className="mr-2 flex h-6 w-6 flex-col items-center justify-center rounded-full bg-secondary font-bevietnamPro text-[10px] text-white">
                2
              </div>
              <h3 className="text-base font-semibold text-black-900">
                Venue 2
              </h3>
            </div>
            <ul className="flex flex-col pl-8 prose-li:mb-2 prose-li:font-bevietnamPro prose-li:text-base prose-li:font-light prose-li:text-[#5D5D5D] last:prose-li:mb-0">
              <li>Sea Village</li>
              <li>Community Stage</li>
              <li>Goverment Stage</li>
            </ul>
          </div>
          <div>
            <div className="ca2024LabelVenue mb-3.5 flex w-fit flex-row items-center justify-center">
              <div className="mr-2 flex h-6 w-6 flex-col items-center justify-center rounded-full bg-secondary font-bevietnamPro text-[10px] text-white">
                3
              </div>
              <h3 className="text-base font-semibold text-black-900">
                Venue 3
              </h3>
            </div>
            <ul className="flex flex-col pl-8 prose-li:mb-2 prose-li:font-bevietnamPro prose-li:text-base prose-li:font-light prose-li:text-[#5D5D5D] last:prose-li:mb-0">
              <li>Sea Village</li>
              <li>Community Stage</li>
              <li>Goverment Stage</li>
            </ul>
          </div>
          <div>
            <div className="ca2024LabelVenue mb-3.5 flex w-fit flex-row items-center justify-center">
              <div className="mr-2 flex h-6 w-6 flex-col items-center justify-center rounded-full bg-secondary font-bevietnamPro text-[10px] text-white">
                4
              </div>
              <h3 className="text-base font-semibold text-black-900">
                Venue 4
              </h3>
            </div>
            <ul className="flex flex-col pl-8 prose-li:mb-2 prose-li:font-bevietnamPro prose-li:text-base prose-li:font-light prose-li:text-[#5D5D5D] last:prose-li:mb-0">
              <li>Sea Village</li>
              <li>Community Stage</li>
              <li>Goverment Stage</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default Venue;
