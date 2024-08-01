import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import getConfig from "next/config";
import Head from "next/head";
import Image from "next/image";

// @get .config
const { publicRuntimeConfig } = getConfig();

// @lib
import { formatTimeTo12Hour } from "@lib/helper/formatedTime";

// @controller
import { getFetch } from "@lib/controller/API";

// @components
import Container from "@components/Container";
import AgendaCard from "@components/UI/Card/AgendaCard";
import AgendaModal from "@components/UI/Modal/AgendaModal";

// @layouts
import NavbarTop from "@layouts/Navbar/NavbarTop";
import NavbarBottom from "@layouts/Navbar/NavbarBottom";
import BannerFooter from "@layouts/Banner/BannerFooter";
import Footer from "@layouts/Footer";

const Agenda = ({ day1, day2 }) => {
  const [loading, setLoading] = useState(false);
  const [isAgendaModal, setAgendaModal] = useState(null);
  const [isDay, setDay] = useState(1);
  const [isStage, setStage] = useState("mainStage");
  const [isDay1, setDay1] = useState(day1 || []);
  const [isDay2, setDay2] = useState(day2 || []);

  const isTabDateActived = async (e, days, stage) => {
    e.preventDefault();

    let url = "";

    setDay(days);

    if (stage === "alphaStage") {
      if (days === 1) {
        url = `/ca24-agendas/?filters[stage][$eq]=overallVenue&filters[stage][$eq]=alphaStage&filters[day][$eq]=day${days}&sort[0]=timeStart:asc&populate[0]=speaker.profilePicture&populate[1]=host.logo&populate[2]=moderator.profilePicture`;
      } else {
        url = `/ca24-agendas/?filters[stage][$eq]=alphaStage&filters[day][$eq]=day${days}&sort[0]=timeStart:asc&populate[0]=speaker.profilePicture&populate[1]=host.logo&populate[2]=moderator.profilePicture`;
      }
    } else if (stage === "buildersHut") {
      url = `/ca24-agendas/?filters[stage][$eq]=buildersHut&filters[day][$eq]=day${days}&sort[0]=timeStart:asc&populate[0]=speaker.profilePicture&populate[1]=host.logo&populate[2]=moderator.profilePicture`;
    } else if (stage === "breakoutArea") {
      url = `/ca24-agendas/?populate=*&filters[stage][$eq]=breakoutArea&filters[stage][$eq]=overallVenue&filters[day][$eq]=day${days}&sort[0]=timeStart:asc`;
    } else {
      url = `/ca24-agendas/?filters[stage][$eq]=mainStage&filters[stage][$eq]=overallVenue&filters[day][$eq]=day${days}&sort[0]=timeStart:asc&populate[0]=speaker.profilePicture&populate[1]=host.logo&populate[2]=moderator.profilePicture`;
    }

    try {
      const getStage = await getFetch(url);

      const groupsStage = getStage.data.reduce((groups, items) => {
        const parts = items.attributes.timeStart;
        const time = parts !== "Invalid Date" ? parts.split(":")[0] : "00";

        if (!groups[time]) {
          groups[time] = [];
        }

        groups[time].push(items);

        return groups;
      }, {});

      // @edit: to add it in the array format instead
      const groupArrStage = Object.keys(groupsStage).map((timeStart) => {
        return {
          timeStart,
          data: groupsStage[timeStart],
        };
      });

      if (days === 1) {
        setDay1(groupArrStage);
      } else {
        setDay2(groupArrStage);
      }

      setStage(stage);
    } catch (err) {
      // @error
    }
  };

  // @load(tab-stage)
  const isTabDateActivedStage = async (e, day, stage, url) => {
    e.preventDefault();

    try {
      const getStage = await getFetch(url);

      const groupsStage = getStage.data.reduce((groups, items) => {
        const parts = items.attributes.timeStart;
        const time = parts !== "Invalid Date" ? parts.split(":")[0] : "00";

        if (!groups[time]) {
          groups[time] = [];
        }

        groups[time].push(items);

        return groups;
      }, {});

      // @edit: to add it in the array format instead
      const groupArrStage = Object.keys(groupsStage).map((timeStart) => {
        return {
          timeStart,
          data: groupsStage[timeStart],
        };
      });

      if (day === 1) {
        setDay1(groupArrStage);
      } else {
        setDay2(groupArrStage);
      }

      setStage(stage);
    } catch (err) {
      // @error
    }
  };

  {
    /* @agenda-modal */
  }
  const isModal = ({
    id,
    day,
    stage,
    name,
    title,
    desc,
    startTime,
    lastTime,
    speaker,
    moderator,
  }) => {
    setAgendaModal({
      id: id,
      day: day,
      stage: stage,
      title: title,
      desc: desc,
      name: name,
      startTime: startTime,
      lastTime: lastTime,
      speaker: speaker,
      moderator: moderator,
    });
  };

  return (
    <>
      {/* @head */}
      <Head>
        <title>{`Agenda | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta
          name="title"
          content={`Agenda | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta name="description" content={publicRuntimeConfig.siteDesc} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="og:title"
          content={`Agenda | ${publicRuntimeConfig.siteTitle}`}
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
          content={`Agenda | ${publicRuntimeConfig.siteTitle}`}
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
      <NavbarTop withBg={true} />

      {/* @navbar(bottom) */}
      <NavbarBottom />

      {/* @main */}
      <main className="relative pt-[146px]">
        <Container className={"px-0 pb-20 sm:pb-0"}>
          <div className="flex flex-col items-start justify-start px-4 pr-0 sm:px-0">
            <h1 className="font-staraExtraBold text-[32px] uppercase leading-[40px] text-black-900 sm:text-[58px] sm:leading-[74px] lg:text-[80px] lg:leading-[90px] xl:text-[72px] xl:leading-[86px] 2xl:text-[80px] 2xl:leading-[90px]">
              Agenda
            </h1>
            <p className="mt-2 font-bevietnamPro text-xl font-light text-black-900">
              From topical talks to collaborative learning sessions to
              next-level connecting and, of course, straight-up fun — is an
              immersive journey into the issues that are top of mind today with
              an eye towards shaping tomorrow.
            </p>
          </div>
          <div className="relative mt-8 flex flex-col bg-white">
            <div className="sticky bottom-auto top-[102px] z-[52] flex flex-row items-center justify-between overflow-hidden rounded-t-[20px] border-b border-[#D6D6D6] bg-[#EEEEEE] px-2 py-2 sm:top-[113px] sm:rounded-t-2xl sm:px-4 sm:py-4">
              <div className="flex w-max flex-col rounded-2xl bg-secondary px-2 py-2 transition sm:px-2">
                <nav
                  className="flex w-max overflow-x-auto"
                  aria-label="Tabs"
                  role="tablist"
                >
                  <button
                    type="button"
                    className="active inline-flex w-fill items-center justify-center gap-x-2 whitespace-nowrap rounded-xl bg-secondary px-4 py-3 text-center font-bevietnamPro text-sm font-normal text-white/[0.64] disabled:pointer-events-none disabled:opacity-50 hs-tab-active:bg-white hs-tab-active:text-secondary sm:text-base"
                    id="agendaDay-Content-1"
                    data-hs-tab="#agendaDay-1"
                    aria-controls="agendaDay-1"
                    role="tab"
                    onClick={(e) => {
                      isTabDateActived(e, 1, isStage);
                    }}
                  >
                    August 22
                  </button>
                  <button
                    type="button"
                    className="inline-flex w-fill items-center justify-center gap-x-2 whitespace-nowrap rounded-xl bg-secondary px-4 py-3 text-center font-bevietnamPro text-sm font-normal text-white/[0.64] disabled:pointer-events-none disabled:opacity-50 hs-tab-active:bg-white hs-tab-active:text-secondary sm:text-base"
                    id="agendaDay-Content-2"
                    data-hs-tab="#agendaDay-2"
                    aria-controls="agendaDay-2"
                    role="tab"
                    onClick={(e) => {
                      isTabDateActived(e, 2, isStage);
                    }}
                  >
                    August 23
                  </button>
                </nav>
              </div>
              <div className="hidden w-max flex-col rounded-2xl bg-secondary px-2 py-2 transition sm:px-2 lg:flex">
                <nav
                  className="flex w-max overflow-x-auto"
                  aria-label="Tabs"
                  role="tablist"
                >
                  <button
                    type="button"
                    className={`inline-flex w-fill items-center justify-center gap-x-2 whitespace-nowrap rounded-xl px-4 py-3 text-center font-bevietnamPro text-sm font-normal disabled:pointer-events-none disabled:opacity-50 sm:text-base ${isStage === "mainStage" ? "bg-white text-secondary" : "bg-secondary text-white/[0.64]"} transition duration-300 ease-in-out hover:bg-white hover:text-secondary`}
                    role="tab"
                    onClick={(e) => {
                      isTabDateActivedStage(
                        e,
                        isDay,
                        "mainStage",
                        `/ca24-agendas/?filters[stage][$eq]=mainStage&filters[stage][$eq]=overallVenue&filters[day][$eq]=day${isDay}&sort[0]=timeStart:asc&populate[0]=speaker.profilePicture&populate[1]=host.logo&populate[2]=moderator.profilePicture`,
                      );
                    }}
                  >
                    Main Stage
                  </button>
                  <button
                    type="button"
                    className={`inline-flex w-fill items-center justify-center gap-x-2 whitespace-nowrap rounded-xl px-4 py-3 text-center font-bevietnamPro text-sm font-normal disabled:pointer-events-none disabled:opacity-50 sm:text-base ${isStage === "alphaStage" ? "bg-white text-secondary" : "bg-secondary text-white/[0.64]"} transition duration-300 ease-in-out hover:bg-white hover:text-secondary`}
                    onClick={(e) => {
                      setLoading(true);
                      isTabDateActivedStage(
                        e,
                        isDay,
                        "alphaStage",
                        isDay === 1
                          ? `/ca24-agendas/?filters[stage][$eq]=overallVenue&filters[stage][$eq]=alphaStage&filters[day][$eq]=day${isDay}&sort[0]=timeStart:asc&populate[0]=speaker.profilePicture&populate[1]=host.logo&populate[2]=moderator.profilePicture`
                          : `/ca24-agendas/?filters[stage][$eq]=alphaStage&filters[day][$eq]=day${isDay}&sort[0]=timeStart:asc&populate[0]=speaker.profilePicture&populate[1]=host.logo&populate[2]=moderator.profilePicture`,
                      );
                    }}
                  >
                    Alpha Stage
                  </button>
                  <button
                    type="button"
                    className={`inline-flex w-fill items-center justify-center gap-x-2 whitespace-nowrap rounded-xl px-4 py-3 text-center font-bevietnamPro text-sm font-normal disabled:pointer-events-none disabled:opacity-50 sm:text-base ${isStage === "buildersHut" ? "bg-white text-secondary" : "bg-secondary text-white/[0.64]"} transition duration-300 ease-in-out hover:bg-white hover:text-secondary`}
                    onClick={(e) => {
                      isTabDateActivedStage(
                        e,
                        isDay,
                        "buildersHut",
                        `/ca24-agendas/?filters[stage][$eq]=buildersHut&filters[day][$eq]=day${isDay}&sort[0]=timeStart:asc&populate[0]=speaker.profilePicture&populate[1]=host.logo&populate[2]=moderator.profilePicture`,
                      );
                    }}
                  >
                    Builders Hut
                  </button>
                  <button
                    type="button"
                    className={`inline-flex w-fill items-center justify-center gap-x-2 whitespace-nowrap rounded-xl px-4 py-3 text-center font-bevietnamPro text-sm font-normal disabled:pointer-events-none disabled:opacity-50 sm:text-base ${isStage === "breakoutArea" ? "bg-white text-secondary" : "bg-secondary text-white/[0.64]"} transition duration-300 ease-in-out hover:bg-white hover:text-secondary`}
                    onClick={(e) => {
                      isTabDateActivedStage(
                        e,
                        isDay,
                        "breakoutArea",
                        `/ca24-agendas/?populate=*&filters[stage][$eq]=breakoutArea&filters[stage][$eq]=overallVenue&filters[day][$eq]=day${isDay}&sort[0]=timeStart:asc`,
                      );
                    }}
                  >
                    Breakout Area
                  </button>
                </nav>
              </div>
              <div className="flex flex-col lg:hidden">
                <div class="hs-dropdown relative inline-flex [--placement:bottom-right]">
                  <button
                    id="hs-dropright"
                    type="button"
                    class="hs-dropdown-toggle inline-flex items-center gap-x-2 rounded-lg bg-transparent px-4 py-3 text-sm font-medium text-secondary focus:outline-none disabled:pointer-events-none disabled:opacity-50 sm:text-base"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    aria-label="Dropdown"
                  >
                    Stage
                    <svg
                      className="mt-0.5 h-5 w-5 rotate-0 transform fill-current transition ease-in-out"
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
                    class="hs-dropdown-menu duration z-10 hidden w-[165px] rounded-xl bg-white px-2 py-2 opacity-0 shadow-xl transition-[opacity,margin] hs-dropdown-open:opacity-100"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="hs-dropright"
                  >
                    <button
                      type="button"
                      className={`inline-flex w-fill items-center justify-center gap-x-2 whitespace-nowrap rounded-xl px-4 py-3 text-center font-bevietnamPro text-sm font-normal disabled:pointer-events-none disabled:opacity-50 lg:text-base ${isStage === "mainStage" ? "bg-secondary text-white" : "bg-white text-[#4C4C4C]/[0.64]"} transition duration-300 ease-in-out hover:bg-secondary hover:text-white`}
                      role="tab"
                      onClick={(e) => {
                        isTabDateActivedStage(
                          e,
                          isDay,
                          "mainStage",
                          `/ca24-agendas/?filters[stage][$eq]=mainStage&filters[stage][$eq]=overallVenue&filters[day][$eq]=day${isDay}&sort[0]=timeStart:asc&populate[0]=speaker.profilePicture&populate[1]=host.logo&populate[2]=moderator.profilePicture`,
                        );
                      }}
                    >
                      Main Stage
                    </button>
                    <button
                      type="button"
                      className={`inline-flex w-fill items-center justify-center gap-x-2 whitespace-nowrap rounded-xl px-4 py-3 text-center font-bevietnamPro text-sm font-normal disabled:pointer-events-none disabled:opacity-50 lg:text-base ${isStage === "alphaStage" ? "bg-secondary text-white" : "bg-white text-[#4C4C4C]/[0.64]"} transition duration-300 ease-in-out hover:bg-secondary hover:text-white`}
                      onClick={(e) => {
                        setLoading(true);
                        isTabDateActivedStage(
                          e,
                          isDay,
                          "alphaStage",
                          isDay === 1
                            ? `/ca24-agendas/?filters[stage][$eq]=overallVenue&filters[stage][$eq]=alphaStage&filters[day][$eq]=day${isDay}&sort[0]=timeStart:asc&populate[0]=speaker.profilePicture&populate[1]=host.logo&populate[2]=moderator.profilePicture`
                            : `/ca24-agendas/?filters[stage][$eq]=alphaStage&filters[day][$eq]=day${isDay}&sort[0]=timeStart:asc&populate[0]=speaker.profilePicture&populate[1]=host.logo&populate[2]=moderator.profilePicture`,
                        );
                      }}
                    >
                      Alpha Stage
                    </button>
                    <button
                      type="button"
                      className={`inline-flex w-fill items-center justify-center gap-x-2 whitespace-nowrap rounded-xl px-4 py-3 text-center font-bevietnamPro text-sm font-normal disabled:pointer-events-none disabled:opacity-50 lg:text-base ${isStage === "buildersHut" ? "bg-secondary text-white" : "bg-white text-[#4C4C4C]/[0.64]"} transition duration-300 ease-in-out hover:bg-secondary hover:text-white`}
                      onClick={(e) => {
                        isTabDateActivedStage(
                          e,
                          isDay,
                          "buildersHut",
                          `/ca24-agendas/?filters[stage][$eq]=buildersHut&filters[day][$eq]=day${isDay}&sort[0]=timeStart:asc&populate[0]=speaker.profilePicture&populate[1]=host.logo&populate[2]=moderator.profilePicture`,
                        );
                      }}
                    >
                      Builders Hut
                    </button>
                    <button
                      type="button"
                      className={`inline-flex w-fill items-center justify-center gap-x-2 whitespace-nowrap rounded-xl px-4 py-3 text-center font-bevietnamPro text-sm font-normal disabled:pointer-events-none disabled:opacity-50 lg:text-base ${isStage === "breakoutArea" ? "bg-secondary text-white" : "bg-white text-[#4C4C4C]/[0.64]"} transition duration-300 ease-in-out hover:bg-secondary hover:text-white`}
                      onClick={(e) => {
                        isTabDateActivedStage(
                          e,
                          isDay,
                          "breakoutArea",
                          `/ca24-agendas/?populate=*&filters[stage][$eq]=breakoutArea&filters[stage][$eq]=overallVenue&filters[day][$eq]=day${isDay}&sort[0]=timeStart:asc`,
                        );
                      }}
                    >
                      Breakout Area
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex w-full flex-col">
              <div
                id="agendaDay-1"
                role="tabpanel"
                aria-labelledby="agendaDay-Content-1"
              >
                <div className="relative flex flex-col">
                  {isDay1?.map((gtRsltItems, i) => (
                    <>
                      <div className="relative w-full" key={i}>
                        <div className="sticky bottom-auto top-[177px] z-40 w-full border-b border-[#D6D6D6] bg-[#EEEEEE] px-3 py-3 sm:top-[209px] sm:px-4 sm:py-4 lg:px-6 lg:py-6">
                          <h2 className="flex w-full flex-row items-start justify-between text-base lg:text-xl">
                            <span className="flex flex-row items-center justify-start">
                              <svg
                                className="mr-2 h-5 w-5 sm:h-6 sm:w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width={24}
                                height={24}
                                fill={"none"}
                              >
                                <path
                                  d="M18.952 8.60657L21.4622 8.45376C19.6629 3.70477 14.497 0.999914 9.4604 2.34474C4.09599 3.77711 0.909631 9.26107 2.34347 14.5935C3.77731 19.926 9.28839 23.0876 14.6528 21.6553C18.6358 20.5917 21.4181 17.2946 22 13.4844"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M12 8V12L14 14"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              {formatTimeTo12Hour(
                                `day${isDay}`,
                                gtRsltItems.timeStart + ":00:00",
                              )}
                            </span>
                            <span className="font-normal">GMT +8</span>
                          </h2>
                        </div>
                        <div className="flex flex-col divide-y divide-[#D6D6D6]">
                          {gtRsltItems.data?.map((gtRslt, index) => (
                            <>
                              {gtRslt.attributes.highlight === false ? (
                                <button
                                  id={`btnAgenda`}
                                  className="w-full outline-none focus-visible:outline-none"
                                  aria-label={`${gtRslt.attributes.title} - (Button Modal Agenda)`}
                                  aria-labelledby={`${gtRslt.attributes.title} - (Button Modal Agenda)`}
                                  data-hs-overlay="#mdlAgenda"
                                  key={index}
                                  onClick={(e) => {
                                    e.preventDefault();

                                    isModal({
                                      id: gtRslt.id,
                                      day: isDay,
                                      stage: isStage,
                                      title: gtRslt.attributes.title,
                                      desc: gtRslt.attributes.description,
                                      name: gtRslt.attributes.name,
                                      startTime: gtRslt.attributes.timeStart,
                                      lastTime: gtRslt.attributes.timeEnd,
                                      speaker: gtRslt.attributes.speaker.data,
                                      moderator:
                                        gtRslt.attributes.moderator.data,
                                    });
                                  }}
                                >
                                  <AgendaCard
                                    highlight={gtRslt.attributes.highlight}
                                    day={`day${isDay}`}
                                    title={gtRslt.attributes.title}
                                    stage={gtRslt.attributes.stage}
                                    selectedStage={isStage}
                                    startTime={gtRslt.attributes.timeStart}
                                    lastTime={gtRslt.attributes.timeEnd}
                                    speakers={gtRslt.attributes.speaker}
                                    moderator={gtRslt.attributes.moderator}
                                  />
                                </button>
                              ) : (
                                <div
                                  key={i}
                                  className="w-full outline-none focus-visible:outline-none"
                                >
                                  <AgendaCard
                                    highlight={gtRslt.attributes.highlight}
                                    day={`day${isDay}`}
                                    title={gtRslt.attributes.title}
                                    stage={gtRslt.attributes.stage}
                                    selectedStage={isStage}
                                    startTime={gtRslt.attributes.timeStart}
                                    lastTime={gtRslt.attributes.timeEnd}
                                    speakers={gtRslt.attributes.speaker}
                                    moderator={gtRslt.attributes.moderator}
                                  />
                                </div>
                              )}
                            </>
                          ))}
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
              <div
                id="agendaDay-2"
                className="hidden"
                role="tabpanel"
                aria-labelledby="agendaDay-Content-2"
              >
                <div className="relative flex flex-col">
                  {isDay2?.map((gtRsltItems, i) => (
                    <>
                      <div className="relative w-full" key={i}>
                        <div className="sticky bottom-auto top-[177px] z-40 w-full border-b border-[#D6D6D6] bg-[#EEEEEE] px-3 py-3 sm:top-[209px] sm:px-4 sm:py-4 lg:px-6 lg:py-6">
                          <h2 className="flex w-full flex-row items-start justify-between text-base lg:text-xl">
                            <span className="flex flex-row items-center justify-start">
                              <svg
                                className="mr-2 h-5 w-5 sm:h-6 sm:w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width={24}
                                height={24}
                                fill={"none"}
                              >
                                <path
                                  d="M18.952 8.60657L21.4622 8.45376C19.6629 3.70477 14.497 0.999914 9.4604 2.34474C4.09599 3.77711 0.909631 9.26107 2.34347 14.5935C3.77731 19.926 9.28839 23.0876 14.6528 21.6553C18.6358 20.5917 21.4181 17.2946 22 13.4844"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M12 8V12L14 14"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              {formatTimeTo12Hour(
                                `day${isDay}`,
                                gtRsltItems.timeStart + ":00:00",
                              )}
                            </span>
                            <span className="font-normal">GMT +8</span>
                          </h2>
                        </div>
                        <div className="flex flex-col divide-y divide-[#D6D6D6]">
                          {gtRsltItems.data?.map((gtRslt, index) => (
                            <>
                              <button
                                id={`btnAgenda`}
                                className="w-full outline-none focus-visible:outline-none"
                                aria-label={`${gtRslt.attributes.title} - (Button Modal Agenda)`}
                                aria-labelledby={`${gtRslt.attributes.title} - (Button Modal Agenda)`}
                                data-hs-overlay="#mdlAgenda"
                                key={index}
                                onClick={(e) => {
                                  e.preventDefault();

                                  isModal({
                                    id: gtRslt.id,
                                    day: isDay,
                                    stage: isStage,
                                    title: gtRslt.attributes.title,
                                    desc: gtRslt.attributes.description,
                                    name: gtRslt.attributes.name,
                                    startTime: gtRslt.attributes.timeStart,
                                    lastTime: gtRslt.attributes.timeEnd,
                                    speaker: gtRslt.attributes.speaker.data,
                                    moderator: gtRslt.attributes.moderator,
                                  });
                                }}
                              >
                                <AgendaCard
                                  day={`day${isDay}`}
                                  title={gtRslt.attributes.title}
                                  stage={gtRslt.attributes.stage}
                                  selectedStage={isStage}
                                  startTime={gtRslt.attributes.timeStart}
                                  lastTime={gtRslt.attributes.timeEnd}
                                  speakers={gtRslt.attributes.speaker}
                                  moderator={gtRslt.attributes.moderator}
                                />
                              </button>
                            </>
                          ))}
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* @banner-footer */}
        <BannerFooter />
      </main>

      {/* @footer */}
      <Footer />

      {/* @agendaDay-modal */}
      <AgendaModal {...isAgendaModal} />
    </>
  );
};

export default Agenda;

export const getStaticProps = async () => {
  const isDay1MainStage = await getFetch(
    `/ca24-agendas/?filters[stage][$eq]=mainStage&filters[stage][$eq]=overallVenue&filters[day][$eq]=day1&sort[0]=timeStart:asc&populate[0]=speaker.profilePicture&populate[1]=host.logo&populate[2]=moderator.profilePicture`,
  );

  const groupsTimeDay1 = isDay1MainStage.data.reduce((groups, items) => {
    const parts = items.attributes.timeStart;
    const time = parts !== "Invalid Date" ? parts.split(":")[0] : "00";

    if (!groups[time]) {
      groups[time] = [];
    }

    groups[time].push(items);

    return groups;
  }, {});

  // @edit: to add it in the array format instead
  const groupArrDay1 = Object.keys(groupsTimeDay1).map((timeStart) => {
    return {
      timeStart,
      data: groupsTimeDay1[timeStart],
    };
  });

  const isDay2MainStage = await getFetch(
    `/ca24-agendas/?filters[stage][$eq]=mainStage&filters[stage][$eq]=overallVenue&filters[day][$eq]=day2&sort[0]=timeStart:asc&populate[0]=speaker.profilePicture&populate[1]=host.logo&populate[2]=moderator.profilePicture`,
  );

  const groupsTimeDay2 = isDay2MainStage.data.reduce((groups, items) => {
    const parts = items.attributes.timeStart;
    const time = parts !== "Invalid Date" ? parts.split(":")[0] : "00";

    if (!groups[time]) {
      groups[time] = [];
    }

    groups[time].push(items);

    return groups;
  }, {});

  // @edit: to add it in the array format instead
  const groupArrDay2 = Object.keys(groupsTimeDay2).map((timeStart) => {
    return {
      timeStart,
      data: groupsTimeDay2[timeStart],
    };
  });

  try {
    return {
      props: {
        day1: groupArrDay1 || [],
        day2: groupArrDay2 || [],
      },

      revalidate: 3600,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

Agenda.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
