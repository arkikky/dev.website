import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import getConfig from "next/config";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// @get .config
const { publicRuntimeConfig } = getConfig();

// @components
import Container from "@components/Container";
import ListVenueCard from "@components/UI/Card/ListVenueCard";

// @layouts
import BannerFooter from "@layouts/Banner/BannerFooter";

const Venue = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "10% 0% -40% 0%",
  });
  const [isLoading, setLoading] = useState(false);

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

      {/* @main */}
      <main className="relative flex flex-col pt-[149px] xl:pt-[159px]">
        <Container>
          <div className="flex flex-col items-start justify-start sm:flex-row sm:justify-between">
            <div className="flex flex-col pr-0 sm:pr-10 lg:pr-28 xl:pr-0">
              <h1 className="font-staraExtraBold text-2xl uppercase text-black-900 xs:text-[42px] xs:leading-[50px] sm:text-[58px] sm:leading-[74px]">
                Venue map
              </h1>
              <p className="text-base font-light sm:text-xl">
                8 areas connected by walking & golf buggies
              </p>
            </div>

            <div className="mt-4 sm:mt-0">
              <Link
                className={`ca2024BgOverflayBlue relative mr-3 inline-flex w-max cursor-pointer items-center justify-center rounded-[14px] bg-secondary px-4 py-3.5 font-bevietnamPro text-sm font-medium text-white outline-none last:mr-0 focus-visible:outline-none sm:px-10 sm:py-6 sm:text-base`}
                title="Coinfest Asia 2024 (Venue - Host a Side Event)"
                href={"https://maps.app.goo.gl/6WpVL4nqfRHJnQsg8"}
                target="_blank"
              >
                Get Directions
              </Link>
            </div>
          </div>
        </Container>

        {/* @maps */}
        <div
          ref={ref}
          className="relative mt-6 flex h-[284px] w-full flex-col overflow-hidden bg-[#D9DCE4] sm:h-[550px] lg:mt-12 lg:h-[700px] xl:mt-15 xl:h-[900px]"
        >
          <div
            className={`absolute bottom-[39.5%] left-auto right-[13.5%] top-auto ${isLoading ? "z-[11] scale-100 opacity-100" : "z-px scale-75 opacity-0"} transform transition delay-[0.5s] xs:right-[14.5%] sm:bottom-[37.5%] sm:right-[13.5%] lg:bottom-[41.5%] lg:right-[17.5%] xl:bottom-[45.5%] xl:right-[24.5%] `}
          >
            <span className="ca2024LabelNoVenue ca2024LabelPinVenue relative">
              1
            </span>
          </div>
          <div
            className={`absolute bottom-[28.5%] left-auto right-[60.5%] top-auto ${isLoading ? "z-[11] scale-100 opacity-100" : "z-px scale-75 opacity-0"} transform transition delay-[0.5s] duration-[0.5s] ease-in-out xs:right-[61.5%] sm:bottom-[24.5%] sm:left-[31.5%] sm:right-auto lg:bottom-[31.5%] lg:left-[33.5%] xl:bottom-[33.5%] xl:left-[33.5%]`}
          >
            <span className="ca2024LabelNoVenue ca2024LabelPinVenue relative">
              2
            </span>
          </div>
          <div
            className={`absolute bottom-[57.5%] left-auto right-[80.5%] top-auto transform transition delay-[0.5s] duration-[0.5s] ease-in-out xs:right-[72.5%] sm:bottom-[57.5%] sm:left-[17.5%] sm:right-auto lg:bottom-[62.5%] lg:left-[22.5%] xl:bottom-[61%] xl:left-[23%] ${isLoading ? "z-[11] scale-100 opacity-100" : "z-px scale-75 opacity-0"}`}
          >
            <span className="ca2024LabelNoVenue ca2024LabelPinVenue relative">
              3
            </span>
          </div>
          <div
            className={`duration--[0.5s] absolute bottom-auto left-auto right-[75.5%] top-[19.5%] ${isLoading ? "z-[11] scale-100 opacity-100" : "z-px scale-75 opacity-0"} transform transition delay-[0.5s] ease-in-out xs:right-[68.5%] sm:left-[22.5%] sm:right-auto sm:top-[20.5%] lg:left-[26.5%] lg:top-[19.5%] xl:left-[28.5%] xl:top-[18.5%]`}
          >
            <span className="ca2024LabelNoVenue ca2024LabelPinVenue relative">
              4
            </span>
          </div>
          <div
            className={`duration--[0.5s] absolute bottom-auto left-auto right-[63.5%] top-[6.5%] ${isLoading ? "z-[11] scale-100 opacity-100" : "z-px scale-75 opacity-0"} transform transition delay-[0.5s] ease-in-out xs:right-[58.5%] sm:left-[33.5%] sm:right-auto sm:top-[7.5%] lg:left-[35.5%] lg:top-[7.5%] xl:left-[34.5%] xl:top-[6.5%]`}
          >
            <span className="ca2024LabelNoVenue ca2024LabelPinVenue relative">
              5
            </span>
          </div>
          <div
            className={`absolute bottom-auto left-auto right-[53.5%] top-[21.5%] transform transition delay-[0.5s] duration-[0.5s] ease-in-out xs:right-[50.5%] xs:top-[20.5%] sm:left-[42.5%] sm:right-auto sm:top-[21.5%] lg:left-[43.5%] lg:top-[19.5%] xl:left-[41.5%] xl:top-[18.5%] ${isLoading ? "z-[11] scale-100 opacity-100" : "z-px scale-75 opacity-0"}`}
          >
            <span className="ca2024LabelNoVenue ca2024LabelPinVenue relative">
              6
            </span>
          </div>
          <div
            className={`absolute bottom-auto left-auto right-[59.5%] top-[39.5%] ${isLoading ? "z-[11] scale-100 opacity-100" : "z-px scale-75 opacity-0"} transform transition delay-[0.5s] duration-[0.5s] ease-in-out xs:right-[54.5%] sm:left-[37.5%] sm:right-auto sm:top-[41.5%] lg:left-[45.5%] lg:top-[41.5%] xl:left-[45.5%] xl:top-[42.5%]`}
          >
            <span className="ca2024LabelNoVenue ca2024LabelPinVenue relative">
              7
            </span>
          </div>
          <div
            className={`absolute bottom-[35.5%] left-auto right-[24.5%] top-auto ${isLoading ? "z-[11] scale-100 opacity-100" : "z-px scale-75 opacity-0"} transform transition delay-[0.5s] sm:bottom-[33.5%] sm:right-[25.5%] lg:bottom-[38.5%] lg:right-[28.5%] xl:bottom-[42.5%] xl:right-[32.5%]`}
          >
            <span className="ca2024LabelNoVenue ca2024LabelPinVenue relative">
              8
            </span>
          </div>

          {isLoading ? (
            <Image
              className="ca2024VenueMaps z-10 mx-auto h-full w-full object-cover "
              src={"/assets/images/ca2024Venue.jpg"}
              alt={`Coinfest Asia 2024 (Background Venue Maps)`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              height={900}
              width={1440}
              quality="90"
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

        <div className="z-10 mx-auto mb-8 mt-0 grid w-full max-w-[1248px] grid-cols-1 flex-row gap-y-6 rounded-none bg-white px-4 pb-10 pt-8 shadow-none sm:-mb-20 sm:grid-cols-2 sm:gap-y-10 sm:px-18 sm:pb-18 lg:grid-cols-3 lg:px-20 lg:pt-12 xl:-mb-20 xl:-mt-[89px] xl:grid-cols-4 xl:rounded-2xl xl:px-15 xl:pt-12">
          <ListVenueCard
            no="1"
            label="Registration Area"
            list={[{ label: "Registration Area" }]}
          />
          <ListVenueCard
            no="2"
            label="Main Area"
            list={[
              { label: "Main Stage" },
              { label: "Alpha Stage" },
              { label: "Breakout Area" },
              { label: "Bull Cave" },
              { label: "Exhibitions" },
              { label: "Networking Area" },
              { label: "Gaming Area" },
              { label: "Gelato Cave" },
              { label: "Polkadot/Mandala Title Area" },
            ]}
          />
          <ListVenueCard
            no="3"
            label="Community Village"
            list={[
              { label: "Regulatory Panel" },
              { label: "Community Events" },
              { label: "Hackathon" },
              { label: "Game Day" },
            ]}
          />
          <ListVenueCard
            no="4"
            label="Startup Village"
            list={[{ label: "Workshops" }, { label: "Project Showcases" }]}
          />
          <ListVenueCard
            no="5"
            label="Warehouse"
            list={[{ label: "After Party" }]}
          />
          <ListVenueCard
            no="6"
            label="Builders Hut"
            list={[
              { label: "ETH SEA" },
              { label: "Workshops" },
              { label: "Meeting Rooms" },
            ]}
          />
          <ListVenueCard
            no="7"
            label="Community Grounds"
            list={[
              { label: "Community Meetups" },
              { label: "Food Stalls" },
              { label: "Exhibitions" },
            ]}
          />
          <ListVenueCard
            no="8"
            label="Oshom"
            list={[
              { label: "Exclusive Events" },
              { label: "CFX Party" },
              { label: "Tokocrypto x Binance Beach House" },
            ]}
          />
        </div>

        {/* @banner-footer */}
        <BannerFooter />
      </main>
    </>
  );
};

export default Venue;
