import React, { useState } from "react";
import dayjs from "dayjs";
import getConfig from "next/config";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// @get .config
const { publicRuntimeConfig } = getConfig();

// @components
import CoinfestWeekCard from "@components/UI/Card/CoinfestWeekCard";

// @layouts
import BentoGridLayouts from "@layouts/BentoLayouts";
import BannerFooter from "@layouts/Banner/BannerFooter";

const CoinfestWeek = ({ result }) => {
  const [isCoinfestWeek, setCoinfestWeek] = useState(result);

  return (
    <>
      {/* @head */}
      <Head>
        <title>{`Coinfest Week | ${publicRuntimeConfig.siteDesc}`}</title>
        <meta
          name="title"
          content={`Coinfest Week | ${publicRuntimeConfig.siteDesc}`}
        />
        <meta name="description" content={publicRuntimeConfig.siteDesc} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="og:title"
          content={`Coinfest Week | ${publicRuntimeConfig.siteDesc}`}
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
          content={`Coinfest Week | ${publicRuntimeConfig.siteDesc}`}
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

            <div className="relative z-[5] flex w-full max-w-full flex-col px-4 text-center sm:max-w-[551px] lg:max-w-[711px] lg:px-0">
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
              <div className="mx-auto mt-6 inline-flex w-full flex-col items-center justify-between gap-x-2 sm:w-max sm:flex-row">
                <Link
                  className={`relative mb-2 inline-flex w-full items-center justify-center rounded-[14px] border border-solid border-white bg-secondary px-4 py-4 font-bevietnamPro text-base font-normal text-white outline-none focus-visible:outline-none sm:mb-0 sm:w-max sm:px-6`}
                  title="Coinfest Asia 2024 (Header Treding Competition)"
                  href={""}
                >
                  Have an event in mind?
                </Link>
                <Link
                  className={`relative inline-flex w-full items-center justify-center rounded-[14px] border border-solid border-white bg-white/[0.07] px-4 py-4.5 font-bevietnamPro text-base font-normal text-white outline-none focus-visible:outline-none sm:w-max sm:px-6 sm:py-4`}
                  title="Coinfest Asia 2024 (Coinfest Week - Google Spreadsheet Icons)"
                  href={""}
                  target="_blank"
                >
                  View the agenda in Google Sheets
                  <div className="ml-0 flex flex-col items-center justify-center sm:ml-2">
                    <Image
                      className={`h-6 w-6`}
                      src={"/assets/images/icons/ca2024-GoogleSpreadsheet.svg"}
                      alt={`Coinfest Asia 2024 (Coinfest Week - Google Spreadsheet Icons)`}
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

          <div className="mx-2 sm:mx-2.5 lg:mx-5">
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
          </div>

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

      revalidate: 1800,
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
