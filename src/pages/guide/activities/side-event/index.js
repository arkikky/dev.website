import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import getConfig from "next/config";
import dayjs from "dayjs";

// @components
import CoinfestWeekCard from "@components/UI/Card/CoinfestWeekCard";

// @layout
import GuideLayout from "@layouts/GuideLayout";

const { publicRuntimeConfig } = getConfig();

const SideEvent = ({ result }) => {
  const [isCoinfestWeek, setCoinfestWeek] = useState(result);


  return (
    <>
      <Head>
        <title>{`Side Event | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta name="title" content={`Side Event | ${publicRuntimeConfig.siteTitle}`} />
        <meta name="description" content={publicRuntimeConfig.siteDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta property="og:title" content={`Side Event | ${publicRuntimeConfig.siteTitle}`} />
        <meta property="og:description" content={publicRuntimeConfig.siteDesc} />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_UPLOAD}/uploads/ca2024_Thumbnails_Share_Link_App_9964b5c353.png`}
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="twitter:title"
          content={`Side Event | ${publicRuntimeConfig.siteTitle}`}
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

      <GuideLayout title="Side Event" className="px-6 lg:px-14 pb-32 text-[#303030]">
        <div className="mx-2 mb-18 sm:mx-2.5 sm:mb-0 lg:mx-5">
          {isCoinfestWeek.map((getDateWeek, i) => (
            <div
              id={`day${i + 1}`}
              className="relative mt-6 first:mt-0"
              key={i}
            >
              <div className="z-50 w-full rounded-xl bg-[#EEEEEE] px-4 py-4 sm:relative sm:bottom-auto sm:top-0 sm:px-6 sm:py-6">
                <h2 className="flex w-max flex-row items-start justify-start text-base sm:text-xl">
                  <div className="flex w-max flex-col">
                    <Image
                      className="mr-2 mt-px h-5 w-5 text-white sm:mr-2.5 sm:h-6 sm:w-6"
                      src={"/assets/images/icons/ca2024-Date.svg"}
                      alt={`Coinfest Asia 2024 (Icons Date - Coinfest Week)`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                      height={24}
                      width={24}
                      quality="90"
                    />
                  </div>
                  {dayjs(getDateWeek.date).format("DD MMMM YYYY")}
                </h2>
              </div>
              <div className="mt-6 grid-cols-1 gap-x-6 gap-y-4 supports-grid:grid sm:mt-8 sm:grid-cols-2 2xl:grid-cols-3 lg:gap-6">
                {getDateWeek.attributes.map((gtRslt, i) => (
                  <div key={i} className="flex flex-col">
                    <CoinfestWeekCard
                      title={gtRslt.attributes.title}
                      alt={gtRslt.attributes.title}
                      time={gtRslt.attributes.startDate}
                      imageUrl={
                        gtRslt.attributes.thumbnail.data !== null
                          ? process.env.NEXT_PUBLIC_UPLOAD +
                          gtRslt.attributes.thumbnail.data.attributes.url
                          : ""
                      }
                      featured={gtRslt.attributes.featured}
                      labelRsvp={gtRslt.attributes.buttonCopy}
                      rsvpUrl={gtRslt.attributes.url}
                      headline={
                        "Bites, Brews, and Blockchain: Web3 Networking Event by AWS"
                      }
                      disable={
                        gtRslt.attributes.status !== false ? false : true
                      }
                    >
                      <button
                        id={`ca2024BtnCoinfestWeek${gtRslt.attributes.title}${i}`}
                        className={`relative inline-flex w-full items-center justify-center rounded-[14px] bg-transparent px-5 pb-2 pt-4 font-bevietnamPro text-sm font-light leading-initial text-[#4A4A4A] outline-none last:mr-0 hover:text-secondary hover:underline focus-visible:outline-none sm:pt-5 sm:text-base lg:px-6`}
                        aria-label={`${gtRslt.attributes.title} - (Button Modal Coinfest Week)`}
                        aria-labelledby={`${gtRslt.attributes.title} - (Button Modal Coinfest Week)`}
                        data-hs-overlay={`#mdlCoinfestWeek`}
                        onClick={(e) => {
                          e.preventDefault();

                          isModal({
                            id: gtRslt.id,
                            name: gtRslt.attributes.title,
                            desc: gtRslt.attributes.description,
                            images:
                              gtRslt.attributes.thumbnail.data !== null
                                ? process.env.NEXT_PUBLIC_UPLOAD +
                                gtRslt.attributes.thumbnail.data.attributes
                                  .url
                                : "/assets/images/coinfest-week/ca2024CoinfestWeek-General.png",
                            date: gtRslt.attributes.date,
                            time: gtRslt.attributes.startDate,
                            location: gtRslt.attributes.location,
                            labelBtn: gtRslt.attributes.buttonCopy,
                            urlRsrv: gtRslt.attributes.url,
                            disable:
                              gtRslt.attributes.status !== false
                                ? false
                                : true,
                          });
                        }}
                      >
                        See details
                      </button>
                    </CoinfestWeekCard>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </GuideLayout>
    </>
  );
};

export default SideEvent;

export const getStaticProps = async () => {
  const resDateCoinfestWeek = await fetch(
    `${process.env.NEXT_PUBLIC_API}/ca24-side-events?sort[0]=startDate:asc&populate=*&filters[featured][$eq]=true`,
  );
  const dateCoinfestWeek = await resDateCoinfestWeek.json();

  const groups = dateCoinfestWeek.data.reduce((groups, game) => {
    const parts = game.attributes.startDate;
    const date = parts.split("T")[0];
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(game);
    return groups;
  }, {});

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

      revalidate: 900,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

SideEvent.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
