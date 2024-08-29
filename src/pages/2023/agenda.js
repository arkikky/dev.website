import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Tab } from "@headlessui/react";
import getConfig from "next/config";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// # Get .config
const { publicRuntimeConfig } = getConfig();

// Icons (Heroicons : https://unpkg.com/browse/@heroicons/react@2.0.14/20/solid/)
import { XMarkIcon } from "@heroicons/react/20/solid";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";

// Ui - Components
import Container from "@components23/Container";
import Main from "@components23/Main";
import Buttons from "@components23/UI/Buttons";
import sessionAgenda from "session-agenda.json";

const useWindow = (e) => {
  const [windowResize, setWindowResize] = useState({ width: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowResize({
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowResize;
};

const Agenda = (props) => {
  const router = useRouter();

  const screenSize = useWindow();
  const elmtAgenda = useRef(null);
  const [scroll, setScroll] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [day1Agenda, setDay1Agenda] = useState(props.result.day1);
  const [day2Agenda, setDay2Agenda] = useState(props.result.day2);
  const [getSessionAgenda1, setSessionAgenda1] = useState(
    sessionAgenda[0].attribute
  );
  const [getSessionAgenda2, setSessionAgenda2] = useState(
    sessionAgenda[1].attribute
  );

  useEffect(() => {
    if (router.asPath === "/agenda") {
      const setBody = document.body;

      setBody.classList.add("bg-[#F1F3F9]");
    }
  }, []);

  // useEffect(() => {
  //   console.log(screenSize.width <= 655);
  //   window.addEventListener("scroll", () => {
  //     // if (screenSize.width <= 655) {
  //     //   // console.log("Awdawd");
  //     //   // setScroll(window.scrollY > elmtAgenda.current.clientHeight);
  //     //   // if (window.scrollY > elmtAgenda.current.clientHeight) {
  //     //   //   setScroll(true);
  //     //   // }
  //     // }
  //   });
  // }, []);

  return (
    <>
      {/* Head (Agenda) */}
      <Head>
        <title>Agenda | ASIA’S IMMERSIVE WEB3 FESTIVAL</title>
        <meta name="title" content="Agenda | ASIA’S IMMERSIVE WEB3 FESTIVAL" />
        <meta
          name="description"
          content="Coinfest Asia 📍 Bali, 24-25 August 2023 | Explore real-world insights and valuable connections in Web2.5 where web2 and web3 industries converge through an immersive festival experience."
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://coinfest.asia/" />
        <meta
          property="og:title"
          content="Agenda | ASIA’S IMMERSIVE WEB3 FESTIVAL"
        />
        <meta
          property="og:description"
          content="Coinfest Asia 📍 Bali, 24-25 August 2023 | Explore real-world insights and valuable connections in Web2.5 where web2 and web3 industries converge through an immersive festival experience."
        />
        <meta
          property="og:image"
          content="https://ticket.coinfest.asia/wp-content/uploads/2023/06/CA_Bali-Clifftop-Header-Newsletter.png"
        />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://coinfest.asia/" />
        <meta
          property="twitter:title"
          content="Agenda | ASIA’S IMMERSIVE WEB3 FESTIVAL"
        />
        <meta
          property="twitter:description"
          content="Coinfest Asia 📍 Bali, 24-25 August 2023 | Explore real-world insights and valuable connections in Web2.5 where web2 and web3 industries converge through an immersive festival experience."
        />
        <meta
          property="twitter:image"
          content="https://ticket.coinfest.asia/wp-content/uploads/2023/06/CA_Bali-Clifftop-Header-Newsletter.png"
        />
      </Head>

      <Main className="mt-[60px] sm:mt-[100px]">
        <Container className="pt-9">
          <div className="flex flex-col items-start text-left">
            <h1 className="font-extrabold text-2xl sm:text-[40px] sm:leading-[50.6px] text-center">
              Agenda
            </h1>
            <p>The agenda and schedule are tentative and subject to change.</p>
          </div>
          <Tab.Group
            defaultIndex={0}
            selectedIndex={selectedIndex}
            onChange={setSelectedIndex}
          >
            <div
              id="elmtAgenda"
              ref={elmtAgenda}
              className="supports-grid:grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-6 sm:gap-y-0 gap-x-4"
            >
              <div className="col-start-1 col-span-full lg:col-span-3 relative">
                <div className="mt-11 fixed sm:sticky top-auto sm:top-[242px] bottom-0 inset-x-0 z-[323]">
                  <div className="bg-white flex flex-col rounded-2xl py-4 sm:py-6 px-4 sm:px-6">
                    <h3>Select Date</h3>
                    <Tab.List
                      className={`flex flex-row lg:flex-col snap-x overflow-x-auto sm:overflow-x-hidden scrollbar-hide mt-4 w-auto sm:w-full`}
                    >
                      <Tab
                        className="snap-start flex flex-col bg-transparent hocus:bg-primary ui-selected:bg-primary border-[#E8E8E8] hocus:border-primary ui-selected:border-primary rounded-[10px] text-black-900 hocus:text-white ui-selected:text-white whitespace-nowrap outline-none sm:whitespace-normal w-full py-3 px-4"
                        selected={true}
                      >
                        <span className="flex text-sm">Day 1</span>
                        <span>24 August 2023</span>
                      </Tab>
                      <Tab className="snap-start flex flex-col bg-transparent hocus:bg-primary ui-selected:bg-primary border-[#E8E8E8] hocus:border-primary ui-selected:border-primary rounded-[10px] text-black-900 hocus:text-white ui-selected:text-white whitespace-nowrap outline-none sm:whitespace-normal w-full py-3 px-4">
                        <span className="flex text-sm">Day 2</span>
                        <span>25 August 2023</span>
                      </Tab>
                    </Tab.List>
                  </div>
                </div>
              </div>
              <div className="col-start-1 lg:col-start-4 col-span-full lg:col-span-9 relative">
                <div className="mt-0 sm:mt-8 lg:mt-11">
                  <Tab.Panels>
                    <Tab.Panel className="focus-visible:outline-none">
                      <div className="agendaGroup">
                        {getSessionAgenda1.map((getSessionAgenda, i) => (
                          <div
                            className="agendaGroupItems relative"
                            key={i + 1}
                          >
                            <>
                              <div className="bg-secondary rounded-[14px] sticky top-[162px] sm:top-0 -bottom-4 sm:bottom-auto sm:relative py-4 px-4 z-50">
                                <span className="text-black-900 text-base">
                                  {getSessionAgenda.time}
                                </span>
                              </div>
                              <div className="supports-grid:grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 items-start justify-start gap-y-4 gap-x-4 mt-4 w-full">
                                {day1Agenda.map((getDay1, index) => (
                                  <div
                                    className={`${
                                      getSessionAgenda.schedule ===
                                      getDay1.attributes.schedule
                                        ? "flex flex-col"
                                        : "hidden"
                                    } ${
                                      getDay1.attributes.style == "full"
                                        ? "col-span-full"
                                        : getDay1.attributes.style == "half" ||
                                          getDay1.attributes.style ==
                                            "after-half"
                                        ? "col-span-full sm:col-span-4 lg:col-span-6 h-full"
                                        : "col-span-full sm:col-span-4 lg:col-span-6 h-full"
                                    }`}
                                    key={index}
                                  >
                                    <div
                                      className={`bg-white border border-solid border-[#D8DEEF] rounded-[20px] outline-none relative py-6 px-4 h-full`}
                                    >
                                      {getDay1.attributes.category && (
                                        <div className="inline-flex flex-wrap">
                                          <span
                                            className={`${
                                              getDay1.attributes.category ===
                                              "Converge Stage"
                                                ? "bg-primary text-white"
                                                : getDay1.attributes
                                                    .category ===
                                                  "Breakout Room"
                                                ? "bg-[#FF52C3] text-white"
                                                : getDay1.attributes
                                                    .category === "Sunset Stage"
                                                ? "bg-[#FFC700] text-[#272626]"
                                                : getDay1.attributes
                                                    .category ===
                                                  "Meetup Ground"
                                                ? "bg-[#04FDE7] text-[#272626]"
                                                : getDay1.attributes
                                                    .category === "Bull House"
                                                ? "bg-[#2B2B2B] text-[#FF52C3]"
                                                : "bg-primary text-white"
                                            } rounded-md text-xs ml-1 first:ml-0 py-1 px-2`}
                                          >
                                            {getDay1.attributes.category ===
                                            "Breakout Room"
                                              ? "Breakout Area"
                                              : getDay1.attributes.category}
                                          </span>
                                        </div>
                                      )}
                                      <div className="mt-4">
                                        <div className="flex flex-col">
                                          <h3 className="text-black-900 text-xl font-bold">
                                            {getDay1.attributes.name}
                                          </h3>
                                          {getDay1.attributes.time && (
                                            <span className="text-black-900/40 text-bas mt-12">
                                              {getDay1.attributes.time}
                                            </span>
                                          )}
                                        </div>
                                        {getDay1.attributes.speakers.data
                                          .length >= 1 && (
                                          <div className="mt-4">
                                            {getDay1.attributes.speakers.data.map(
                                              (getSpeakerLogo, index) => (
                                                <div className="flex flex-row items-center justify-between mt-1 first:mt-0">
                                                  <span className="flex-1 text-base">
                                                    {
                                                      getSpeakerLogo.attributes
                                                        .Name
                                                    }
                                                  </span>
                                                  <div className="flex flex-1 overflow-hidden relative h-10 max-h-[40px]">
                                                    <Image
                                                      className="absolute sm:relative left-auto sm:left-0 right-0 sm:right-auto object-cover object-center my-auto ml-auto h-full min-h-[auto] max-h-max sm:max-h-[24px] lg:max-h-max min-w-max w-max sm:w-auto"
                                                      src={
                                                        process.env
                                                          .NEXT_PUBLIC_UPLOAD +
                                                        getSpeakerLogo
                                                          .attributes.logoAgenda
                                                          .data.attributes.url
                                                      }
                                                      alt={`${publicRuntimeConfig.appName} (Agenda - Speaker)`}
                                                      height={140}
                                                      width={220}
                                                      quality="87"
                                                    />
                                                  </div>
                                                </div>
                                              )
                                            )}
                                          </div>
                                        )}
                                        {getDay1.attributes.moderator.data
                                          .length >= 1 && (
                                          <div className="mt-4">
                                            {getDay1.attributes.moderator.data.map(
                                              (getModeratorLogo, index) => (
                                                <div className="flex flex-row items-center justify-between mt-1 first:mt-0">
                                                  <span className="flex-1 text-base">
                                                    {
                                                      getModeratorLogo.attributes
                                                        .Name
                                                    }
                                                  </span>
                                                  <div className="flex flex-1 overflow-hidden relative h-10 max-h-[40px]">
                                                    <Image
                                                      className="absolute sm:relative left-auto sm:left-0 right-0 sm:right-auto object-cover object-center my-auto ml-auto h-full min-h-[auto] max-h-max sm:max-h-[24px] lg:max-h-max min-w-max w-max sm:w-auto"
                                                      src={
                                                        process.env
                                                          .NEXT_PUBLIC_UPLOAD +
                                                        getModeratorLogo
                                                          .attributes.logoAgenda
                                                          .data.attributes.url
                                                      }
                                                      alt={`${publicRuntimeConfig.appName} (Agenda - Speaker)`}
                                                      height={140}
                                                      width={220}
                                                      quality="87"
                                                    />
                                                  </div>
                                                </div>
                                              )
                                            )}
                                          </div>
                                        )}
                                        {getDay1.attributes.question ===
                                          true && (
                                          <Link
                                            className="flex items-center justify-center bg-primary rounded-[10px] text-white font-bevietnam-pro text-base relative mt-4 py-4 px-4"
                                            href={`/agenda/${getDay1.attributes.slug}`}
                                          >
                                            Ask a hard question & see details
                                          </Link>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </>
                          </div>
                        ))}
                      </div>
                    </Tab.Panel>
                    <Tab.Panel className="focus-visible:outline-none">
                      <div className="agendaGroup">
                        {getSessionAgenda2.map((getSessionAgenda, i) => (
                          <div className="agendaGroupItems relative" key={i}>
                            <>
                              <div className="bg-secondary rounded-[14px] sticky top-[162px] sm:top-0 -bottom-4 sm:bottom-auto sm:relative py-4 px-4 z-50">
                                <span className="text-black-900 text-base">
                                  {getSessionAgenda.time}
                                </span>
                              </div>
                              <div className="supports-grid:grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 items-start justify-start gap-y-4 gap-x-4 mt-4 w-full">
                                {day2Agenda.map((getDay2, index) => (
                                  <div
                                    className={`${
                                      getSessionAgenda.schedule ===
                                      getDay2.attributes.schedule
                                        ? "flex flex-col"
                                        : "hidden"
                                    } ${
                                      getDay2.attributes.style == "full"
                                        ? "col-span-full"
                                        : getDay2.attributes.style == "half" ||
                                          getDay2.attributes.style ==
                                            "after-half"
                                        ? "col-span-full sm:col-span-4 lg:col-span-6 h-full"
                                        : "col-span-full sm:col-span-4 lg:col-span-6 h-full"
                                    }`}
                                    key={index}
                                  >
                                    <Link
                                      className={`bg-white border border-solid border-[#D8DEEF] rounded-[20px] outline-none relative py-6 px-4 h-full`}
                                      href={`/agenda/${getDay2.attributes.slug}`}
                                    >
                                      {getDay2.attributes.category && (
                                        <div className="inline-flex flex-wrap">
                                          <span
                                            className={`${
                                              getDay2.attributes.category ===
                                              "Converge Stage"
                                                ? "bg-primary text-white"
                                                : getDay2.attributes
                                                    .category ===
                                                  "Breakout Room"
                                                ? "bg-[#FF52C3] text-white"
                                                : getDay2.attributes
                                                    .category === "Sunset Stage"
                                                ? "bg-[#FFC700] text-[#272626]"
                                                : getDay2.attributes
                                                    .category ===
                                                  "Meetup Ground"
                                                ? "bg-[#04FDE7] text-[#272626]"
                                                : getDay2.attributes
                                                    .category === "Bull House"
                                                ? "bg-[#2B2B2B] text-[#FF52C3]"
                                                : "bg-primary text-white"
                                            } rounded-md text-xs ml-1 first:ml-0 py-1 px-2`}
                                          >
                                            {getDay2.attributes.category ===
                                            "Breakout Room"
                                              ? "Breakout Area"
                                              : getDay2.attributes.category}
                                          </span>
                                        </div>
                                      )}
                                      <div className="mt-4">
                                        <h3 className="text-black-900 text-xl font-bold">
                                          {getDay2.attributes.name}
                                        </h3>
                                        {getDay2.attributes.time && (
                                          <span className="text-black-900/40 text-base mt-12">
                                            {getDay2.attributes.time}
                                          </span>
                                        )}
                                        {getDay2.attributes.speakers.data
                                          .length >= 1 && (
                                          <div className="mt-4">
                                            {getDay2.attributes.speakers.data.map(
                                              (getSpeakerLogo, index) => (
                                                <div className="flex flex-row items-center justify-between mt-1 first:mt-0">
                                                  <span className="flex-1 text-base">
                                                    {
                                                      getSpeakerLogo.attributes
                                                        .Name
                                                    }
                                                  </span>
                                                  <div className="flex flex-1 overflow-hidden relative h-10 max-h-[40px]">
                                                    <Image
                                                      className="absolute sm:relative left-auto sm:left-0 right-0 sm:right-auto object-cover object-center my-auto ml-auto h-full min-h-[auto] max-h-max sm:max-h-[24px] lg:max-h-max min-w-max w-max sm:w-auto"
                                                      src={
                                                        process.env
                                                          .NEXT_PUBLIC_UPLOAD +
                                                        getSpeakerLogo
                                                          .attributes.logoAgenda
                                                          .data.attributes.url
                                                      }
                                                      alt={`${publicRuntimeConfig.appName} (Agenda - Speaker)`}
                                                      height={140}
                                                      width={220}
                                                      quality="87"
                                                    />
                                                  </div>
                                                </div>
                                              )
                                            )}
                                          </div>
                                        )}
                                        {getDay2.attributes.moderator.data
                                          .length >= 1 && (
                                          <div className="mt-4">
                                            {getDay2.attributes.moderator.data.map(
                                              (getModeratorLogo, index) => (
                                                <div className="flex flex-row items-center justify-between mt-1 first:mt-0">
                                                  <span className="flex-1 text-base">
                                                    {
                                                      getModeratorLogo.attributes
                                                        .Name
                                                    }
                                                  </span>
                                                  <div className="flex flex-1 overflow-hidden relative h-10 max-h-[40px]">
                                                    <Image
                                                      className="absolute sm:relative left-auto sm:left-0 right-0 sm:right-auto object-cover object-center my-auto ml-auto h-full min-h-[auto] max-h-max sm:max-h-[24px] lg:max-h-max min-w-max w-max sm:w-auto"
                                                      src={
                                                        process.env
                                                          .NEXT_PUBLIC_UPLOAD +
                                                        getModeratorLogo
                                                          .attributes.logoAgenda
                                                          .data.attributes.url
                                                      }
                                                      alt={`${publicRuntimeConfig.appName} (Agenda - Speaker)`}
                                                      height={140}
                                                      width={220}
                                                      quality="87"
                                                    />
                                                  </div>
                                                </div>
                                              )
                                            )}
                                          </div>
                                        )}
                                        {getDay2.attributes.question ===
                                          true && (
                                          <Link
                                            className="flex items-center justify-center bg-primary rounded-[10px] text-white font-bevietnam-pro text-base relative mt-4 py-4 px-4"
                                            href={`/agenda/${getDay2.attributes.slug}`}
                                          >
                                            Ask a hard question & see details
                                          </Link>
                                        )}
                                      </div>
                                    </Link>
                                  </div>
                                ))}
                              </div>
                            </>
                          </div>
                        ))}
                      </div>
                    </Tab.Panel>
                  </Tab.Panels>
                </div>
              </div>
            </div>
          </Tab.Group>
        </Container>
      </Main>
    </>
  );
};

export default Agenda;

export async function getStaticProps() {
  const responseDay1 = await fetch(
    `${process.env.NEXT_PUBLIC_API}/agendas?filters[day][$eq]=day1&sort[0]=schedule:asc&sort[1]=time:asc&populate[speakers][populate][0]=profilePicture&populate[speakers][populate][1]=logoAgenda&populate[moderator][populate][2]=profilePicture&populate[moderator][populate][3]=logoAgenda&pagination[pageSize]=100`
  );
  const day1 = await responseDay1.json();

  const responseDay2 = await fetch(
    `${process.env.NEXT_PUBLIC_API}/agendas?filters[day][$eq]=day2&sort[0]=schedule:asc&sort[1]=time:asc&populate[speakers][populate][0]=profilePicture&populate[speakers][populate][1]=logoAgenda&populate[moderator][populate][2]=profilePicture&populate[moderator][populate][3]=logoAgenda&pagination[pageSize]=100`
  );
  const day2 = await responseDay2.json();

  try {
    return {
      props: {
        result: {
          day1: day1.data,
          day2: day2.data,
        },
      },

      revalidate: 30, // In seconds
    };
  } catch (err) {
    return {
      // redirect: {
      //   destination: "/",
      //   permanent: false, // StatusCode: 301
      // },

      notFound: true,
    };
  }
}
