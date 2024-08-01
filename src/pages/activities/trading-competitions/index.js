import React from "react";
import getConfig from "next/config";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

// @get .config
const { publicRuntimeConfig } = getConfig();

// @components
import TradingCompetitionCard from "@components/UI/Card/TradingCompetitionCard";

// @layouts
import BentoGridLayouts from "@layouts/BentoLayouts";
import BannerFooter from "@layouts/Banner/BannerFooter";

const TradingCompetitions = () => {
  gsap.registerPlugin(ScrollToPlugin);

  const isScrollToCard = (e) => {
    e.preventDefault();

    gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: "#ca2024BtnBitwyreTradingCompetition", offsetY: 540 },
      ease: "power2",
    });
  };

  return (
    <>
      {/* @head */}
      <Head>
        <title>{`Trading Competitions | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta
          name="title"
          content={`Trading Competitions | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta name="description" content={publicRuntimeConfig.siteDesc} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="og:title"
          content={`Trading Competitions | ${publicRuntimeConfig.siteTitle}`}
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
          content={`Trading Competitions | ${publicRuntimeConfig.siteTitle}`}
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
          <header className="ca2024BgLine relative mx-2 mb-10 mt-2 flex h-[796px] flex-col items-center justify-center overflow-hidden rounded-[20px] bg-secondary sm:mx-2.5 sm:mb-15 sm:mt-3.5 sm:rounded-[26px] lg:mx-5 lg:mb-[88px] lg:mt-5 lg:h-[750px]">
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
                Trading competition
              </span>
              <h1 className="font-staraExtraBold text-[36px] uppercase leading-[40px] text-white sm:text-[48px] sm:leading-[60px]">
                Trading Competition With $15,000+ Prize Pool
              </h1>
              <p className="mt-1 px-0 font-bevietnamPro text-base font-light text-white/80 sm:px-12 lg:px-32 lg:text-xl">
                Show off your chart reading skills in Trading Competition at Coinfest Asia 2024
              </p>
              <div className="mx-auto mt-6 inline-flex w-full flex-col items-center justify-between px-4 sm:w-max sm:flex-row sm:px-0">
                <button
                  className={`relative mb-2 mr-0 inline-flex w-full items-center justify-center rounded-[14px] bg-white px-4 py-4 font-bevietnamPro text-base font-normal text-black-900 outline-none last:mr-0 focus-visible:outline-none sm:mb-0 sm:mr-4 sm:w-max sm:px-6`}
                  title="Coinfest Asia 2024 (Header Treding Competition)"
                  onClick={(e) => {
                    isScrollToCard(e);
                  }}
                >
                  Explore Trading Competitions
                </button>
                <Link
                  className={`relative inline-flex w-full items-center justify-center rounded-[14px] border border-solid border-white bg-white/[0.07] px-4 py-4 font-bevietnamPro text-base font-normal text-white outline-none last:mr-0 focus-visible:outline-none sm:w-max sm:px-6`}
                  title="Coinfest Asia 2024 (Header Treding Competition)"
                  href={"/get-involved/sponsorship"}
                >
                  Host a competition
                </Link>
              </div>
            </div>
          </header>

          <div className="mx-2 sm:mx-2.5 lg:mx-5">
            <div className="relative mt-4 grid-cols-4 gap-x-4 gap-y-4 pb-6 supports-grid:grid sm:mt-6 sm:grid-cols-12 sm:pb-6 lg:grid-cols-12 xl:pb-6">
              <div className="col-span-full sm:col-span-6">
                <TradingCompetitionCard
                  title="Bitwyre"
                  date="17 August — 23 August"
                  labelButton="See Details"
                  description="Bitwyre is a crypto spot exchange with the upcoming BAPPEBTI license."
                  images="/assets/images/activities/trading-competition/ca2024BgBitwyre_TradingCard.png"
                  price="$10,000"
                  url="https://bitwyre.id/event/coinfest-2024"
                  tracks={[
                    {
                      label: "Bitwyre",
                      images:
                        "/assets/images/activities/trading-competition/ca2024Trading_Bitwyre.svg",
                    },
                  ]}
                />
              </div>
              <div className="col-span-full sm:col-span-6">
                <TradingCompetitionCard
                  title="Coin Tech 2U"
                  date="17 August — 23 August"
                  labelButton="See Details"
                  description="CoinTech2u is a trading tool built for optimizing strategies."
                  images="/assets/images/activities/trading-competition/ca2024BgCoinTech2u_TradingCard.png"
                  price="$5,000"
                  url="https://cointech2u.com/event/coinfest-2024.html"
                  tracks={[
                    {
                      label: "CoinTech2u",
                      images:
                        "/assets/images/activities/trading-competition/ca2024Trading_CoinTech2u.svg",
                    },
                  ]}
                />
              </div>
            </div>

            {/* @disclaimer */}
            <div className="p-6 lg:p-8 rounded-3xl bg-[#F8EAD7] text-base lg:text-xl">
              <h2 className="font-bold">Disclaimer</h2>
              <p className="text-black-900/[0.7] mt-2 leading-[26px]">Participation in this trading competition involves significant risk. Please ensure you fully understand the terms and conditions, and only trade with funds you can afford to lose. Past performance is not indicative of future results. We encourage you to use licensed exchanges.</p>
            </div>
          </div>
        </main>
      </BentoGridLayouts>
    </>
  );
};

export default TradingCompetitions;

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

TradingCompetitions.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
