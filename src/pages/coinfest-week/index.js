import React, { useState, useCallback } from "react";
import dayjs from "dayjs";
import getConfig from "next/config";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// @get .config
const { publicRuntimeConfig } = getConfig();

// @components
// import CoinfestWeekCard from "@components/UI/Card/CoinfestWeekCard";

// @layouts
import BentoGridLayouts from "@layouts/BentoLayouts";
import BannerFooter from "@layouts/Banner/BannerFooter";

const CoinfestWeek = ({ result }) => {
  const [isCoinfestWeek, setCoinfestWeek] = useState(result);
  const [isDropdownMenu, setDropdownMenu] = useState(false);

  const dropdownMenu = useCallback(() => {
    setDropdownMenu((prev) => !prev);
  }, [isDropdownMenu]);

  return (
    <>
      {/* @head */}
      <Head>
        <title>{`Coinfest Week | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta
          name="title"
          content={`Coinfest Week | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta name="description" content={publicRuntimeConfig.siteDesc} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="og:title"
          content={`Coinfest Week | ${publicRuntimeConfig.siteTitle}`}
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
          content={`Coinfest Week | ${publicRuntimeConfig.siteTitle}`}
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
          <header className="relative mx-2 mb-4 mt-2 flex h-[596px] flex-col items-center justify-center overflow-hidden rounded-[20px] bg-secondary sm:mx-2.5 sm:mb-8 sm:mt-3.5 sm:rounded-[26px] lg:mx-5 lg:mt-5 lg:h-[750px]">
            <div className="absolute inset-x-0 inset-y-0 z-[2]">
              <Image
                className={`h-full w-full object-cover object-center`}
                src={"/assets/images/ca2024WeekHeader.jpg"}
                alt={`Coinfest Asia 2024 (Week - Header)`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                height={1125}
                width={2103}
                quality={87}
              />
            </div>

            <div className="relative z-[5] -mt-4 flex w-full flex-col px-4 text-center sm:max-w-max lg:max-w-[711px] lg:px-0">
              <div className="flex flex-col items-center justify-center">
                <Image
                  className={`h-[71px] w-auto object-cover object-center lg:h-[110px]`}
                  src={"/assets/images/ca2024Week.svg"}
                  alt={`Coinfest Asia 2024 (Week)`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                  height={110}
                  width={356}
                  quality={87}
                />
              </div>
              <h1 className="h-0 font-staraExtraBold text-[40px] uppercase leading-[48px] text-white opacity-0 sm:text-[48px] sm:leading-[60px]">
                Coinfest Week
              </h1>
              <div className="relative mx-auto mt-6 inline-flex w-full flex-col items-center justify-between gap-x-2 sm:w-max sm:flex-row">
                <button
                  className={`relative mb-2 inline-flex w-full items-center justify-center rounded-[14px] border border-solid border-white bg-secondary px-4 py-4 font-bevietnamPro text-base font-normal text-white outline-none focus-visible:outline-none sm:mb-0 sm:w-max sm:px-6`}
                  onClick={(e) => {
                    dropdownMenu(e);
                  }}
                >
                  Have an event in mind?
                </button>

                <div
                  className={`absolute inset-x-0 bottom-auto top-14 mt-3 flex h-min w-full transform flex-col rounded-2xl bg-white px-2 py-2 transition duration-300 ease-in-out sm:-bottom-full sm:top-full ${isDropdownMenu === true ? "z-[3] translate-y-0 opacity-100" : "-z-px -translate-y-3 opacity-0"}`}
                >
                  <Link
                    className="flex flex-row items-center justify-between rounded-[10px] bg-white px-4 py-4 text-start font-bevietnamPro text-base font-light text-black-900 transition duration-300 ease-in-out hover:bg-[#EBEBEB]"
                    title="Coinfest Asia 2024 (Coinfest Week - Google Spreadsheet)"
                    href={""}
                  >
                    Co-host your side event with Coinfest Asia
                    <svg
                      className="h-6 w-6 min-w-6 stroke-current"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28.7507 25.4167V11.25H14.584"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M28.3333 11.6719L11.25 28.7552"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                  <Link
                    className="flex flex-row items-center justify-between rounded-[10px] bg-white px-4 py-4 text-start font-bevietnamPro text-base font-light text-black-900 transition duration-300 ease-in-out hover:bg-[#EBEBEB]"
                    title="Coinfest Asia 2024 (Coinfest Week - Google Spreadsheet)"
                    href={""}
                  >
                    Submit your side event
                    <svg
                      className="h-6 w-6 min-w-6 stroke-current"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28.7507 25.4167V11.25H14.584"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M28.3333 11.6719L11.25 28.7552"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>

                <Link
                  className={`relative z-[2] inline-flex w-full items-center justify-center rounded-[14px] border border-solid border-white bg-white/[0.07] px-4 py-4.5 font-bevietnamPro text-base font-normal text-white outline-none focus-visible:outline-none sm:w-max sm:px-6 sm:py-4`}
                  title="Coinfest Asia 2024 Google Spreadsheet - Coinfest Week)"
                  href={""}
                  target="_blank"
                >
                  View the agenda in Google Sheets
                  <div className="ml-0 flex flex-col items-center justify-center sm:ml-2">
                    <Image
                      className={`h-6 w-6`}
                      src={"/assets/images/icons/ca2024-GoogleSpreadsheet.svg"}
                      alt={`Coinfest Asia 2024 (Coinfest Google Spreadsheet Icons - Coinfest Week)`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                      height={24}
                      width={24}
                      quality={87}
                    />
                  </div>
                </Link>
              </div>
            </div>
          </header>

          {/* <div className="mx-2 sm:mx-2.5 lg:mx-5">
            {isCoinfestWeek.map((getDateWeek, i) => (
              <div
                id={`day${i + 1}`}
                className="relative mt-6 first:mt-0"
                key={i}
              >
                <div className="sticky -bottom-4 top-[100px] z-50 w-full rounded-xl bg-primary px-4 py-4 sm:relative sm:bottom-auto sm:top-0 sm:px-6 sm:py-6">
                  <h2 className="text-base sm:text-xl">
                    {dayjs(getDateWeek.date).format("DD MMMM YYYY")}
                  </h2>
                </div>
                <div className="mt-6 grid-cols-1 gap-x-6 gap-y-4 supports-grid:grid sm:mt-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
                  {getDateWeek.attributes.map((getData, index) => (
                    <div key={index} className="flex flex-col">
                      <CoinfestWeekCard
                        title={getData.attributes.name}
                        alt={getData.attributes.name}
                        time={getData.attributes.time}
                        desc={getData.attributes.description}
                        imageUrl={
                          getData.attributes.banner.data !== null
                            ? process.env.NEXT_PUBLIC_UPLOAD +
                              getData.attributes.banner.data.attributes.url
                            : ""
                        }
                        labelRsvp={getData.attributes.buttonCopy}
                        rsvpUrl={getData.attributes.rsvpLink}
                        headline={
                          "Bites, Brews, and Blockchain: Web3 Networking Event by AWS"
                        }
                        date={getData.attributes.date}
                        location={getData.attributes.location}
                        disable={
                          getData.attributes.status !== false ? false : true
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div> */}

          {/* @banner-footer */}
          <BannerFooter />
        </main>
      </BentoGridLayouts>
    </>
  );
};

export default CoinfestWeek;

export const getStaticProps = async () => {
  const resDateCoinfestWeek = await fetch(
    `${process.env.NEXT_PUBLIC_API}/coinfest-weeks?sort[0]=startClock:asc&populate=*&pagination[pageSize]=100`,
  );
  const dateCoinfestWeek = await resDateCoinfestWeek.json();

  const groups = dateCoinfestWeek.data.reduce((groups, game) => {
    const parts = game.attributes.startClock;
    const date = parts.split("T")[0];
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(game);
    return groups;
  }, {});

  // Edit: to add it in the array format instead
  const groupArrays = Object.keys(groups).map((date) => {
    return {
      date,
      attributes: groups[date],
    };
  });

  try {
    return {
      props: {
        result: groupArrays,
      },

      revalidate: 3600,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

CoinfestWeek.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
