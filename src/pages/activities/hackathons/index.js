import React from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
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

const Hackathons = () => {
  gsap.registerPlugin(ScrollToPlugin);

  const isScrollToCard = (e) => {
    e.preventDefault();

    gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: "#ca2024BtnETHSEAHackathons", offsetY: 540 },
      ease: "power2",
    });
  };

  return (
    <>
      {/* @head */}
      <Head>
        <title>{`Hackathons | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta
          name="title"
          content={`Hackathons | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta name="description" content={publicRuntimeConfig.siteDesc} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="og:title"
          content={`Hackathons | ${publicRuntimeConfig.siteTitle}`}
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
          content={`Hackathons | ${publicRuntimeConfig.siteTitle}`}
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
          <header className="ca2024BgLineBlack relative mx-2 mt-2 flex h-[796px] flex-col items-center justify-center overflow-hidden rounded-[20px] bg-[#2B2B2B] sm:mx-2.5 sm:mt-3.5 sm:rounded-[26px] lg:mx-5 lg:mt-5 lg:h-[770px]">
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

            <div className="relative z-[5] mt-1.5 flex w-full max-w-full flex-col text-center sm:max-w-[677px] lg:max-w-[867px]">
              <span className="mx-auto mb-4 inline-flex w-max flex-row items-center justify-center rounded-full border border-solid border-white bg-white/[0.07] px-3 py-2 font-bevietnamPro text-sm font-light text-white sm:mb-6">
                Hackathons
              </span>
              <h1 className="font-staraExtraBold text-[36px] uppercase leading-[40px] text-white sm:text-[48px] sm:leading-[60px]">
                BUILD ON TOP OF PROTOCOLS AND WIN A TOTAL $50,000 PRIZE POOL
              </h1>
              <p className="mt-1 px-0 font-bevietnamPro text-base font-light text-white/80 sm:px-12 lg:px-32 lg:text-xl">
                Engage directly with fellow builders, project founders, and
                creators in Coinfest Asia’s official hackathons
              </p>
              <div className="mx-auto mt-6 inline-flex w-full flex-col items-center justify-between px-4 sm:w-max sm:flex-row sm:px-0">
                <button
                  className={`relative mb-2 mr-0 inline-flex w-full items-center justify-center rounded-[14px] bg-white px-4 py-4 font-bevietnamPro text-base font-normal text-black-900 outline-none last:mr-0 focus-visible:outline-none sm:mb-0 sm:mr-4 sm:w-max sm:px-6`}
                  onClick={(e) => {
                    isScrollToCard(e);
                  }}
                >
                  Explore Hackathons
                </button>
                <Link
                  className={`relative inline-flex w-full items-center justify-center rounded-[14px] border border-solid border-white bg-white/[0.07] px-4 py-4 font-bevietnamPro text-base font-normal text-white outline-none last:mr-0 focus-visible:outline-none sm:w-max sm:px-6`}
                  title="Coinfest Asia 2024 (Header Hackathons)"
                  href={"/get-involved/sponsorship"}
                >
                  Host your own track
                </Link>
              </div>
            </div>
          </header>

          <div className="mx-2 sm:mx-2.5 lg:mx-5">
            <div className="relative mt-4 grid-cols-4 gap-x-4 gap-y-4 pb-20 supports-grid:grid sm:mt-6 sm:grid-cols-12 sm:pb-0 lg:grid-cols-12 xl:pb-20">
              <div className="col-span-full sm:col-span-6">
                <HackathonCard
                  title="ETHSEA"
                  date="July - August"
                  meet="Online"
                  images="/assets/images/activities/hackathon/ca2024BgETH_HackathonCard.png"
                  colorButton="bg-black-900"
                  labelButton="Submit your Project"
                  price="$50,000"
                  url="https://www.ethsea.com/"
                  tracks={[
                    {
                      label: "Aptos",
                      images:
                        "/assets/images/activities/hackathon/ca2024Hackathon_Aptos.svg",
                    },
                    {
                      label: "Haqq",
                      images:
                        "/assets/images/activities/hackathon/ca2024Hackathon_Haqq.svg",
                    },
                    {
                      label: "Lisk",
                      images:
                        "/assets/images/activities/hackathon/ca2024Hackathon_Lisk.png",
                    },
                    {
                      label: "Manta Network",
                      images:
                        "/assets/images/activities/hackathon/ca2024Hackathon_MantaNetwork.png",
                    },
                    {
                      label: "AnyManyMore",
                      images:
                        "/assets/images/activities/hackathon/ca2024Hackathon_AnyManyMore.svg",
                    },
                  ]}
                />
              </div>
              <div className="col-span-full sm:col-span-6">
                <HackathonCard
                  title="Chain Fusion"
                  date="22 Aug — 23 August"
                  meet="Offline"
                  images="/assets/images/activities/hackathon/ca2024BgChainFusion_HackathonCards.png"
                  labelButton="Register"
                  price="$50,000"
                  url="https://lu.ma/1rg40k2f"
                  tracks={[
                    {
                      label: "ICP",
                      images:
                        "/assets/images/activities/hackathon/ca2024HackathonChainFusion_ICP.svg",
                    },
                  ]}
                />
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

export default Hackathons;

export const getStaticProps = async () => {
  try {
    return {
      props: {},

      revalidate: 3600,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

Hackathons.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
