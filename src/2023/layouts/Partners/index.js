import React, { useRef, useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import getConfig from "next/config";
import Image from "next/image";

// # Get .config
const { publicRuntimeConfig } = getConfig();

// Css
import Headng from "@styles23/components/Heading.module.css";
import Tabs from "@styles23/components/Tabs.module.css";

// Ui - Components
import PostLink from "@components23/UI/Post/PostLink";
import Buttons from "@components23/UI/Buttons";

const LyPartners = () => {
  const secTabsDeflt = useRef(null);
  const [selected, setOpen] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mediaData, setMediaData] = useState(null);
  const [associationData, setAssociationData] = useState(null);
  const [communitiesData, setCommunitiesData] = useState(null);
  const [accomodationData, setAccomodationData] = useState(null);
  const [sponsorData, setSponsorData] = useState(null);

  useEffect(() => {
    const fetchSponsorData = async () => {
      try {
        const [response1, response2] = await Promise.all([
          fetch(
            `${process.env.NEXT_PUBLIC_API}/sponsors?sort=rank:asc&populate=*&pagination[pageSize]=100&pagination[page]=1`
          ),
          fetch(
            `${process.env.NEXT_PUBLIC_API}/sponsors?sort=rank:asc&populate=*&pagination[pageSize]=100&pagination[page]=2`
          ),
        ]);
        const json1 = await response1.json();
        const json2 = await response2.json();
        setSponsorData([...json1.data, ...json2.data]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchMediaData = async () => {
      try {
        const [response1, response2] = await Promise.all([
          fetch(
            `${process.env.NEXT_PUBLIC_API}/partners?sort=rank:asc&populate=*&pagination[pageSize]=100&pagination[page]=1`
          ),
          fetch(
            `${process.env.NEXT_PUBLIC_API}/partners?sort=rank:asc&populate=*&pagination[pageSize]=100&pagination[page]=2`
          ),
        ]);
        const json1 = await response1.json();
        const json2 = await response2.json();
        setMediaData([...json1.data, ...json2.data]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchAssociationData = async () => {
      try {
        const [response1, response2] = await Promise.all([
          fetch(
            `${process.env.NEXT_PUBLIC_API}/associations?sort=rank:asc&populate=*&pagination[pageSize]=100&pagination[page]=1`
          ),
          fetch(
            `${process.env.NEXT_PUBLIC_API}/associations?sort=rank:asc&populate=*&pagination[pageSize]=100&pagination[page]=2`
          ),
        ]);
        const json1 = await response1.json();
        const json2 = await response2.json();
        setAssociationData([...json1.data, ...json2.data]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchCommunitiesData = async () => {
      try {
        const [response1, response2] = await Promise.all([
          fetch(
            `${process.env.NEXT_PUBLIC_API}/communities?sort=rank:asc&populate=*&pagination[pageSize]=100&pagination[page]=1`
          ),
          fetch(
            `${process.env.NEXT_PUBLIC_API}/communities?sort=rank:asc&populate=*&pagination[pageSize]=100&pagination[page]=2`
          ),
        ]);
        const json1 = await response1.json();
        const json2 = await response2.json();
        setCommunitiesData([...json1.data, ...json2.data]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchAccomodationData = async () => {
      try {
        const [response1, response2] = await Promise.all([
          fetch(
            `${process.env.NEXT_PUBLIC_API}/accommodations?sort=rank:asc&populate=*&pagination[pageSize]=100&pagination[page]=1`
          ),
          fetch(
            `${process.env.NEXT_PUBLIC_API}/accommodations?sort=rank:asc&populate=*&pagination[pageSize]=100&pagination[page]=2`
          ),
        ]);
        const json1 = await response1.json();
        const json2 = await response2.json();
        setAccomodationData([...json1.data, ...json2.data]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    switch (selectedIndex) {
      case 0:
        if (sponsorData) {
          break;
        } else {
          fetchSponsorData();
          break;
        }
      case 1:
        if (mediaData) {
          break;
        } else {
          fetchMediaData();
          break;
        }
      case 2:
        if (associationData) {
          break;
        } else {
          fetchAssociationData();
          break;
        }
      case 3:
        if (communitiesData) {
          break;
        } else {
          fetchCommunitiesData();
          break;
        }
      case 4:
        if (accomodationData) {
          break;
        } else {
          fetchAccomodationData();
          break;
        }
      default:
        break;
    }
  }, [selectedIndex]);

  const tabScrollDeflt = (e) => {
    const defltScrllTabs = secTabsDeflt.current.offsetTop;

    if (defltScrllTabs) {
      window.scrollTo({
        top: defltScrllTabs - 233,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <section ref={secTabsDeflt} id="partners">
        <span className={`${Headng.hdingTags} text-primary uppercase`}>
          OUR
        </span>
        <div className="flex flex-col">
          <div className="supports-grid:grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-x-6">
            <div className="col-span-full xl:col-span-3">
              <h2
                className={`${Headng.hdingTitle} font-montserrat text-black-500 font-bold uppercase`}
              >
                PARTNERS
              </h2>
            </div>
            <div className="col-span-full xl:col-span-6 pl-0">
              <p className={`${Headng.hdingDesc} text-gray-800 mt-4 xl:mt-0`}>
                Meet the pioneers in delivering impact-driven ideas and
                solutions on Web3.
              </p>
            </div>
            <div className="flex flex-col items-[normal] sm:items-start xl:items-end col-span-full xl:col-span-3 mt-4 xl:mt-0">
              <Buttons
                className="btn-block font-semibold px-4"
                typeBtn="btn-blank-link"
                url="https://bit.ly/ca23sponsor"
                label="Get Involved for 2023"
                variants="btn-primary"
                text="uppercase"
                ariaLabel="btnGetInvolvedFor2023"
              />
            </div>
          </div>
          <Tab.Group
            vertical
            defaultIndex={0}
            selectedIndex={selectedIndex}
            onChange={setSelectedIndex}
          >
            <div className="supports-grid:grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-6 sm:gap-y-0 gap-x-6 mt-6 sm:mt-8">
              <div className="col-start-1 col-span-full sm:col-span-2 lg:col-span-3 pr-0 lg:pr-6 xl:pr-18">
                <div className="sticky top-[246px]">
                  <Tab.List
                    className={`${Tabs.tabsVertical} flex flex-row sm:flex-col snap-x overflow-x-auto sm:overflow-x-hidden scrollbar-hide w-auto sm:w-max`}
                  >
                    <Tab
                      className="snap-start hocus:bg-[#ECF3FF] ui-selected:bg-[#ECF3FF] border-[#E8E8E8] hocus:border-primary ui-selected:border-primary text-[#ADB2BA] hocus:text-primary ui-selected:text-primary whitespace-nowrap sm:whitespace-normal min-w-[65%] min-[425px]:min-w-[45%] sm:min-w-[175px]"
                      selected={true}
                      onClick={tabScrollDeflt}
                    >
                      SPONSORS
                    </Tab>
                    <Tab
                      className="snap-start hocus:bg-[#ECF3FF] ui-selected:bg-[#ECF3FF] border-[#E8E8E8] hocus:border-primary ui-selected:border-primary text-[#ADB2BA] hocus:text-primary ui-selected:text-primary whitespace-nowrap sm:whitespace-normal min-w-[65%] min-[425px]:min-w-[45%] sm:min-w-[175px]"
                      onClick={tabScrollDeflt}
                    >
                      MEDIA
                    </Tab>
                    <Tab
                      className="snap-start hocus:bg-[#ECF3FF] ui-selected:bg-[#ECF3FF] border-[#E8E8E8] hocus:border-primary ui-selected:border-primary text-[#ADB2BA] hocus:text-primary ui-selected:text-primary whitespace-nowrap sm:whitespace-normal min-w-[65%] min-[425px]:min-w-[45%] sm:min-w-[175px]"
                      onClick={tabScrollDeflt}
                    >
                      ASSOCIATIONS
                    </Tab>
                    <Tab
                      className="snap-start hocus:bg-[#ECF3FF] ui-selected:bg-[#ECF3FF] border-[#E8E8E8] hocus:border-primary ui-selected:border-primary text-[#ADB2BA] hocus:text-primary ui-selected:text-primary whitespace-nowrap sm:whitespace-normal min-w-[65%] min-[425px]:min-w-[45%] sm:min-w-[175px]"
                      onClick={tabScrollDeflt}
                    >
                      COMMUNITIES
                    </Tab>
                    <Tab
                      className="snap-start hocus:bg-[#ECF3FF] ui-selected:bg-[#ECF3FF] border-[#E8E8E8] hocus:border-primary ui-selected:border-primary text-[#ADB2BA] hocus:text-primary ui-selected:text-primary whitespace-nowrap sm:whitespace-normal min-w-[65%] min-[425px]:min-w-[45%] sm:min-w-[175px]"
                      onClick={tabScrollDeflt}
                    >
                      ACCOMMODATION
                    </Tab>
                    <Tab
                      className="snap-start hocus:bg-[#ECF3FF] ui-selected:bg-[#ECF3FF] border-[#E8E8E8] hocus:border-primary ui-selected:border-primary text-[#ADB2BA] hocus:text-primary ui-selected:text-primary whitespace-nowrap sm:whitespace-normal min-w-[65%] min-[425px]:min-w-[45%] sm:min-w-[175px]"
                      onClick={tabScrollDeflt}
                    >
                      TRANSPORTATION
                    </Tab>
                    <Tab
                      className="snap-start hocus:bg-[#ECF3FF] ui-selected:bg-[#ECF3FF] border-[#E8E8E8] hocus:border-primary ui-selected:border-primary text-[#ADB2BA] hocus:text-primary ui-selected:text-primary whitespace-nowrap sm:whitespace-normal min-w-[65%] min-[425px]:min-w-[45%] sm:min-w-[175px]"
                      onClick={tabScrollDeflt}
                    >
                      INTERNET PROVIDER
                    </Tab>
                  </Tab.List>
                </div>
              </div>
              <div className="col-start-1 sm:col-start-3 lg:col-start-4 col-span-full sm:col-span-6 lg:col-span-9 relative pl-0 lg:pl-0 xl:pl-[26px]">
                <div className="bg-[#F3F3F3] hidden sm:flex absolute inset-y-0 left-0 right-auto w-0.5"></div>
                {/* MEDIA */}
                <Tab.Panels>
                  <Tab.Panel className="focus-visible:outline-none">
                    <div className="inline-flex flex-wrap items-center justify-start gap-y-0 w-full">
                      {sponsorData &&
                        sponsorData.map((data, index) => (
                          <PostLink
                            key={index}
                            typePost="blank-link"
                            url={data.attributes.url}
                            className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/2 lg:basis-1/3 px-0 h-full"
                          >
                            <Image
                              className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[112px] lg:max-h-max w-auto"
                              src={
                                data.attributes.logo.data
                                  ? process.env.NEXT_PUBLIC_UPLOAD +
                                    data.attributes.logo.data.attributes.url
                                  : ""
                              }
                              alt={`${publicRuntimeConfig.appName} (${data.attributes.name} Media - Brand Partner)`}
                              sizes="(min-width: 1874px) 246vw,
                          (min-width: 1536px) 257vw,
                          (min-width: 1280px) 313vw,
                          (min-width: 1024px) 395vw,
                          (min-width: 640px) 631vw,
                          1005vw"
                              height={140}
                              width={220}
                              quality="87"
                            />
                          </PostLink>
                        ))}
                    </div>
                    <div className="p-4 flex justify-center items-center mt-8">
                      <span
                        className={`text-[#2458F1] z-20 font-bold cursor-pointer `}
                      >
                        And Many More
                      </span>
                    </div>
                  </Tab.Panel>
                  <Tab.Panel className="focus-visible:outline-none">
                    <div className="inline-flex flex-wrap items-center justify-start gap-y-0 w-full">
                      {mediaData &&
                        mediaData.map((data, index) => (
                          <PostLink
                            key={index}
                            typePost="blank-link"
                            url={data.attributes.url}
                            className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/3 lg:basis-1/4 px-0 h-full"
                          >
                            <Image
                              className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[112px] lg:max-h-max w-auto"
                              src={
                                data.attributes.logo.data
                                  ? process.env.NEXT_PUBLIC_UPLOAD +
                                    data.attributes.logo.data.attributes.url
                                  : ""
                              }
                              alt={`${publicRuntimeConfig.appName} (${data.attributes.name} Media - Brand Partner)`}
                              sizes="(min-width: 1874px) 246vw,
                          (min-width: 1536px) 257vw,
                          (min-width: 1280px) 313vw,
                          (min-width: 1024px) 395vw,
                          (min-width: 640px) 631vw,
                          1005vw"
                              height={140}
                              width={220}
                              quality="87"
                            />
                          </PostLink>
                        ))}
                    </div>
                  </Tab.Panel>
                  {/* ASSOCIATIONS */}
                  <Tab.Panel className="focus-visible:outline-none">
                    <div className="inline-flex flex-wrap items-center justify-start gap-y-0 w-full">
                      {associationData &&
                        associationData.map((data, index) => (
                          <PostLink
                            key={index}
                            typePost="blank-link"
                            url={data.attributes.url}
                            className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/3 lg:basis-1/4 px-0 h-full"
                          >
                            <Image
                              className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[112px] lg:max-h-max w-auto"
                              src={
                                data.attributes.logo.data
                                  ? process.env.NEXT_PUBLIC_UPLOAD +
                                    data.attributes.logo.data.attributes.url
                                  : ""
                              }
                              alt={`${publicRuntimeConfig.appName} (${data.attributes.name} Association - Brand Partner)`}
                              sizes="(min-width: 1874px) 246vw,
                            (min-width: 1536px) 257vw,
                            (min-width: 1280px) 313vw,
                            (min-width: 1024px) 395vw,
                            (min-width: 640px) 631vw,
                            1005vw"
                              height={140}
                              width={220}
                              quality="87"
                            />
                          </PostLink>
                        ))}
                    </div>
                  </Tab.Panel>
                  {/* COMMUNITIES */}
                  <Tab.Panel className="focus-visible:outline-none">
                    <div className="inline-flex flex-wrap items-center justify-start gap-y-0 w-full">
                      {communitiesData &&
                        communitiesData.map((data, index) => (
                          <PostLink
                            key={index}
                            typePost="blank-link"
                            url={data.attributes.url ? data.attributes.url : ""}
                            className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/3 lg:basis-1/4 px-0 h-full"
                          >
                            <Image
                              className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[112px] lg:max-h-max w-auto"
                              src={
                                data.attributes.logo.data
                                  ? process.env.NEXT_PUBLIC_UPLOAD +
                                    data.attributes.logo.data.attributes.url
                                  : ""
                              }
                              alt={`${publicRuntimeConfig.appName} (${data.attributes.name} Communities - Brand Partner)`}
                              sizes="(min-width: 1874px) 246vw,
                            (min-width: 1536px) 257vw,
                            (min-width: 1280px) 313vw,
                            (min-width: 1024px) 395vw,
                            (min-width: 640px) 631vw,
                            1005vw"
                              height={140}
                              width={220}
                              quality="87"
                            />
                          </PostLink>
                        ))}
                    </div>
                  </Tab.Panel>
                  {/* ACCOMODATION */}
                  <Tab.Panel className="focus-visible:outline-none">
                    <div className="inline-flex flex-wrap items-center justify-start gap-y-0 w-full">
                      {accomodationData &&
                        accomodationData.map((data, index) => (
                          <PostLink
                            key={index}
                            typePost="blank-link"
                            url={data.attributes.url ? data.attributes.url : ""}
                            className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/3 lg:basis-1/4 px-0 h-full"
                          >
                            <Image
                              className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[112px] lg:max-h-max w-auto"
                              src={
                                data.attributes.logo.data
                                  ? process.env.NEXT_PUBLIC_UPLOAD +
                                    data.attributes.logo.data.attributes.url
                                  : ""
                              }
                              alt={`${publicRuntimeConfig.appName} (${data.attributes.name} Accomodation - Brand Partner)`}
                              sizes="(min-width: 1874px) 246vw,
                          (min-width: 1536px) 257vw,
                          (min-width: 1280px) 313vw,
                          (min-width: 1024px) 395vw,
                          (min-width: 640px) 631vw,
                          1005vw"
                              height={140}
                              width={220}
                              quality="87"
                            />
                          </PostLink>
                        ))}
                    </div>
                    <div className="p-4 flex justify-center items-center mt-8">
                      <span
                        className={`text-[#2458F1] z-20 font-bold cursor-pointer `}
                      >
                        All Coinfest Asia ticket holders can get special rates
                        for their stay
                      </span>
                    </div>
                  </Tab.Panel>
                  {/* TRANSPORTATION */}
                  <Tab.Panel className="focus-visible:outline-none">
                    <div className="inline-flex flex-wrap items-center justify-start gap-y-0 w-full">
                      <PostLink
                        typePost="blank-link"
                        url={"https://www.grab.com/"}
                        className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/3 lg:basis-1/4 px-0 h-full"
                      >
                        <Image
                          className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[112px] lg:max-h-max w-auto"
                          src={`/2023/assets/images/travel/Grab.svg`}
                          alt={`${publicRuntimeConfig.appName} (Grab Transportation - Brand Partner)`}
                          sizes="(min-width: 1874px) 246vw,
                            (min-width: 1536px) 257vw,
                            (min-width: 1280px) 313vw,
                            (min-width: 1024px) 395vw,
                            (min-width: 640px) 631vw,
                            1005vw"
                          height={140}
                          width={220}
                          quality="87"
                        />
                      </PostLink>
                    </div>
                  </Tab.Panel>
                  {/* INTERNET PROVIDER */}
                  <Tab.Panel className="focus-visible:outline-none">
                    <div className="inline-flex flex-wrap items-center justify-start gap-y-0 w-full">
                      <PostLink
                        typePost="blank-link"
                        url={"https://biznethome.net/"}
                        className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/3 lg:basis-1/4 px-0 h-full"
                      >
                        <Image
                          className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[112px] lg:max-h-max w-auto"
                          src={`/2023/assets/images/internet-provider/biznet.svg`}
                          alt={`${publicRuntimeConfig.appName} (Biznet Internet Provider - Brand Partner)`}
                          sizes="(min-width: 1874px) 246vw,
                            (min-width: 1536px) 257vw,
                            (min-width: 1280px) 313vw,
                            (min-width: 1024px) 395vw,
                            (min-width: 640px) 631vw,
                            1005vw"
                          height={140}
                          width={220}
                          quality="87"
                        />
                      </PostLink>
                    </div>
                  </Tab.Panel>
                </Tab.Panels>
              </div>
            </div>
          </Tab.Group>
        </div>
      </section>
    </>
  );
};

export default LyPartners;
