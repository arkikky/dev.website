import React, { useState, useEffect, useCallback } from "react";
// import dayjs from "dayjs";
import getConfig from "next/config";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// @get .config
const { publicRuntimeConfig } = getConfig();

// @components
// import CoinfestWeekModal from "@components/UI/Modal/CoinfestWeekModal";
// import CoinfestWeekCard from "@components/UI/Card/CoinfestWeekCard";

// @layouts
import BentoGridLayouts from "@layouts/BentoLayouts";
import BannerFooter from "@layouts/Banner/BannerFooter";

const CoinfestWeek = ({ result }) => {
  const [isCoinfestWeek, setCoinfestWeek] = useState(result);
  const [isDropdownMenu, setDropdownMenu] = useState(false);
  // const [isCoinfestWeekModal, setCoinfestWeekModal] = useState(null);

  // @preline (Add Plugins)
  useEffect(() => {
    import("preline");

    return () => {
      undefined;
    };
  }, []);

  const dropdownMenu = useCallback(() => {
    setDropdownMenu((prev) => !prev);

    // const bckDropModal = document.querySelector("#bckdrpModalActve");

    // if (bckDropModal) {
    //   if (isDropdownMenu === false) {
    //     bckDropModal.classList.add("active");
    //   } else {
    //     bckDropModal.classList.remove("active");
    //   }
    // }
  }, [isDropdownMenu]);

  {
    /* @coinfestweek-modal */
  }
  // const isModal = ({
  //   id,
  //   name,
  //   desc,
  //   images,
  //   date,
  //   time,
  //   location,
  //   labelBtn,
  //   urlRsrv,
  //   disable,
  // }) => {
  //   setCoinfestWeekModal({
  //     id: id,
  //     name: name,
  //     desc: desc,
  //     images: images,
  //     date: date,
  //     time: time,
  //     location: location,
  //     labelBtn: labelBtn,
  //     urlRsrv: urlRsrv,
  //     disable: disable,
  //   });
  // };

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
          <header className="relative z-px mx-2 mb-4 mt-2 flex h-[596px] flex-col items-center justify-center overflow-hidden rounded-[20px] bg-secondary sm:mx-2.5 sm:mb-8 sm:mt-3.5 sm:rounded-[26px] lg:mx-5 lg:mt-5 lg:h-[750px]">
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
                  className={`relative mb-2 inline-flex w-full items-center justify-between rounded-[14px] border border-solid border-white bg-secondary px-4 py-4 font-bevietnamPro text-base font-normal text-white outline-none focus-visible:outline-none sm:mb-0 sm:w-max sm:px-6`}
                  onClick={(e) => {
                    dropdownMenu(e);
                  }}
                >
                  Looking to host a side event?
                  <svg
                    className={`duration-250 ms-2.5 h-5 w-5 transform fill-current transition ease-in-out ${isDropdownMenu ? "rotate-180" : "rotate-0"}`}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289L10 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z"
                    />
                  </svg>
                </button>

                <div
                  className={`absolute inset-x-0 bottom-auto top-14 mt-3 flex h-min w-full transform flex-col rounded-2xl bg-white px-2 py-2 transition duration-300 ease-in-out sm:-bottom-full sm:top-full ${isDropdownMenu === true ? "pointer-events-auto z-[3] translate-y-0 opacity-100" : "pointer-events-none -z-px -translate-y-3 opacity-0"}`}
                >
                  <Link
                    className="flex flex-row items-center justify-between rounded-[10px] bg-white px-4 py-4 text-start font-bevietnamPro text-base font-light text-black-900 transition duration-300 ease-in-out hover:bg-[#EBEBEB]"
                    title="Coinfest Asia 2024 (Coinfest Week - Google Spreadsheet)"
                    href={"/get-involved/cohost-side-events"}
                    target="_blank"
                  >
                    Co-host your side event with Coinfest Asia
                    <svg
                      className="ml-8 h-6 w-6 min-w-6 stroke-current"
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
                    href={"/get-involved/submit-side-events"}
                    target="_blank"
                  >
                    Submit your side event
                    <svg
                      className="ml-8 h-6 w-6 min-w-6 stroke-current"
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
                  className={`relative z-[2] inline-flex w-full items-center justify-between rounded-[14px] border border-solid border-white bg-white/[0.07] px-4 py-4.5 font-bevietnamPro text-base font-normal text-white outline-none focus-visible:outline-none sm:w-max sm:px-6 sm:py-4`}
                  title="Coinfest Asia 2024 Google Spreadsheet - Coinfest Week)"
                  href={""}
                  target="_blank"
                >
                  COMING SOON - Google Sheets List
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
                  <h2 className="flex w-max flex-row items-start justify-start text-base sm:text-xl">
                    <div className="flex w-max flex-col">
                      <Image
                        className="mr-2 h-5 w-5 text-white sm:mr-2.5 sm:h-6 sm:w-6"
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
                <div className="mt-6 grid-cols-1 gap-x-6 gap-y-4 supports-grid:grid sm:mt-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
                  {getDateWeek.attributes.map((gtRslt, i) => (
                    <div key={i} className="flex flex-col">
                      <CoinfestWeekCard
                        title={gtRslt.attributes.name}
                        alt={gtRslt.attributes.name}
                        time={gtRslt.attributes.time}
                        imageUrl={
                          gtRslt.attributes.banner.data !== null
                            ? process.env.NEXT_PUBLIC_UPLOAD +
                              gtRslt.attributes.banner.data.attributes.url
                            : ""
                        }
                        labelRsvp={gtRslt.attributes.buttonCopy}
                        rsvpUrl={gtRslt.attributes.rsvpLink}
                        headline={
                          "Bites, Brews, and Blockchain: Web3 Networking Event by AWS"
                        }
                        disable={
                          gtRslt.attributes.status !== false ? false : true
                        }
                      >
                        <button
                          id={`ca2024BtnCoinfestWeek${gtRslt.attributes.name}${i}`}
                          className={`relative inline-flex w-full items-center justify-center rounded-[14px] bg-transparent px-5 pb-2 pt-4 font-bevietnamPro text-sm font-light leading-initial text-[#C6C6C6] outline-none last:mr-0 hover:text-secondary hover:underline focus-visible:outline-none sm:pt-5 sm:text-base lg:px-6`}
                          aria-label={`${gtRslt.attributes.name} - (Button Modal Coinfest Week)`}
                          aria-labelledby={`${gtRslt.attributes.name} - (Button Modal Coinfest Week)`}
                          data-hs-overlay={`#mdlCoinfestWeek`}
                          onClick={(e) => {
                            e.preventDefault();

                            isModal({
                              id: gtRslt.id,
                              name: gtRslt.attributes.name,
                              desc: gtRslt.attributes.description,
                              images:
                                gtRslt.attributes.banner.data !== null
                                  ? process.env.NEXT_PUBLIC_UPLOAD +
                                    gtRslt.attributes.banner.data.attributes.url
                                  : "",
                              date: gtRslt.attributes.date,
                              time: gtRslt.attributes.time,
                              location: gtRslt.attributes.location,
                              labelBtn: gtRslt.attributes.buttonCopy,
                              urlRsrv: gtRslt.attributes.rsvpLink,
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
          </div> */}

          {/* @banner-footer */}
          <BannerFooter />

          {/* @coinfestweek-modal */}
          {/* <CoinfestWeekModal {...isCoinfestWeekModal} /> */}
        </main>
      </BentoGridLayouts>
    </>
  );
};

export default CoinfestWeek;

export const getStaticProps = async () => {
  // const resDateCoinfestWeek = await fetch(
  //   `${process.env.NEXT_PUBLIC_API}/coinfest-weeks?sort[0]=startClock:asc&populate=*&pagination[pageSize]=100`,
  // );
  // const dateCoinfestWeek = await resDateCoinfestWeek.json();

  // const groups = dateCoinfestWeek.data.reduce((groups, game) => {
  //   const parts = game.attributes.startClock;
  //   const date = parts.split("T")[0];
  //   if (!groups[date]) {
  //     groups[date] = [];
  //   }
  //   groups[date].push(game);
  //   return groups;
  // }, {});

  // Edit: to add it in the array format instead
  // const groupArrays = Object.keys(groups).map((date) => {
  //   return {
  //     date,
  //     attributes: groups[date],
  //   };
  // });

  try {
    return {
      props: {
        // result: groupArrays,
      },

      revalidate: 900,
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
