import React from "react";
import getConfig from "next/config";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// @get .config
const { publicRuntimeConfig } = getConfig();

// @components
import HackathonCard from "@components/UI/Card/HackathonCard";

// @layouts
import BentoGridLayouts from "@layouts/BentoLayouts";
import BannerFooter from "@layouts/Banner/BannerFooter";

const Hackathon = () => {
  return (
    <>
      {/* @head */}
      <Head>
        <title>{`Hackathon | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta
          name="title"
          content={`Hackathon | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta name="description" content={publicRuntimeConfig.siteDesc} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="og:title"
          content={`Hackathon | ${publicRuntimeConfig.siteTitle}`}
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
          content={`Hackathon | ${publicRuntimeConfig.siteTitle}`}
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
      <BentoGridLayouts>
        <main className="relative">
          <header className="ca2024BgLineBlack relative mx-2 mt-2 flex h-[796px] flex-col items-center justify-center overflow-hidden rounded-[20px] bg-[#2B2B2B] sm:mx-5 sm:mt-5 sm:rounded-[26px] lg:h-[770px]">
            {/* @points(flower) */}
            <div className="absolute -left-[34px] bottom-0 right-auto top-auto z-px h-[201px] w-auto sm:-left-10 sm:h-[319px] lg:left-0 lg:h-[396px] xl:h-[576px]">
              <Image
                className="mx-auto h-full w-auto object-cover object-center"
                src="/assets/images/backdrop/points/ca2024Points-BFlowerLeft.png"
                alt={`Coinfest Asia 2024 (Points B Flower Left)`}
                height={576}
                width={532}
                quality="87"
              />
            </div>
            <div className="absolute -right-10 bottom-0 left-auto top-auto z-px h-[201px] w-auto sm:-right-[47px] sm:h-[319px] lg:right-0 lg:h-[396px] xl:h-[576px]">
              <Image
                className="mx-auto h-full w-auto object-cover object-center"
                src="/assets/images/backdrop/points/ca2024Points-BFlowerRight.png"
                alt={`Coinfest Asia 2024 (Points B Flower Right)`}
                height={576}
                width={532}
                quality="87"
              />
            </div>

            <div className="relative z-[5] -mt-[125px] flex w-full max-w-full flex-col text-center sm:max-w-[551px] lg:max-w-[711px]">
              <span className="mx-auto mb-4 inline-flex w-max flex-row items-center justify-center rounded-full border border-solid border-white bg-white/[0.07] px-3 py-2 font-bevietnamPro text-sm font-light text-white sm:mb-6">
                Hackathon
              </span>
              <h1 className="font-staraExtraBold text-[40px] uppercase leading-[48px] text-white sm:text-[48px] sm:leading-[60px]">
                Win a total prize of 1eth
              </h1>
              <p className="mt-1 font-bevietnamPro text-base font-light text-white/80 lg:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna
              </p>
              <div className="mx-auto mt-6 inline-flex w-full flex-col items-center justify-between px-4 sm:w-max sm:flex-row sm:px-0">
                <Link
                  className={`relative mb-2 mr-0 inline-flex w-full items-center justify-center rounded-[14px] bg-white px-4 py-4 font-bevietnamPro text-base font-normal text-black-900 outline-none last:mr-0 focus-visible:outline-none sm:mb-0 sm:mr-4 sm:w-max sm:px-6`}
                  title="Coinfest Asia 2024 (Header Treding Competition)"
                  href={""}
                >
                  Join trade
                </Link>
                <Link
                  className={`relative inline-flex w-full items-center justify-center rounded-[14px] border border-solid border-white bg-white/[0.07] px-4 py-4 font-bevietnamPro text-base font-normal text-white outline-none last:mr-0 focus-visible:outline-none sm:w-max sm:px-6`}
                  title="Coinfest Asia 2024 (Header Treding Competition)"
                  href={""}
                >
                  Lorem ipsum dolor sit amet
                </Link>
              </div>
            </div>
          </header>

          <div className="mx-4 sm:mx-5">
            <div className="relative mt-6 grid-cols-4 gap-x-4 gap-y-4 pb-0 lg:pb-20 supports-grid:grid sm:grid-cols-12 lg:grid-cols-12">
              <div className="col-span-full sm:col-span-6">
                <HackathonCard />
              </div>
              <div className="col-span-full sm:col-span-6">
                <HackathonCard />
              </div>
            </div>
          </div>

          {/* @banner-footer */}
          <BannerFooter />
        </main>
      </BentoGridLayouts>
    </>
  );
};

export default Hackathon;

export const getStaticProps = async () => {
  try {
    return {
      props: {},

      revalidate: 60,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

Hackathon.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
