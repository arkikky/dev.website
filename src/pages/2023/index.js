import React, { useState, useEffect, useCallback, useRef } from "react";
// import { Fragment, Dialog, Transition } from "@headlessui/react";
import { Dialog, Transition } from "@headlessui/react";
import getConfig from "next/config";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";

// # Get .config
const { publicRuntimeConfig } = getConfig();

// Icons (Heroicons : https://unpkg.com/browse/@heroicons/react@2.0.14/20/solid/)
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { PlayIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";

// Css
import Headng from "@styles23/components/Heading.module.css";
import Modal from "@styles23/components/Modal.module.css";

// Ui - Components
import Container from "@components23/Container";
import Main from "@components23/Main";
import PostLink from "@components23/UI/Post/PostLink";
import Buttons from "@components23/UI/Buttons";

// Layouts
import LyShowcasing from "@layouts23/Showcasing";
import LyKeyExperiences from "@layouts23/KeyExperiences";
import LyTrailblazers from "@layouts23/Trailblazers";
import LyPartners from "@layouts23/Partners";
import LyExperienceEvents from "@layouts23/ExperienceEvents";
import LyFAQ from "@layouts23/Faq";
import LyCookieBanner from "@layouts23/Cookie";
import LyTopics from "@layouts23/Topic";
import { Link } from "react-scroll";

const Home = () => {
  // Schema Website Application
  const schmaWebApp = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${publicRuntimeConfig.siteUrl}/#website`,
        url: `${publicRuntimeConfig.siteUrl}`,
        name: `${publicRuntimeConfig.appName}`,
        alternateName: `${publicRuntimeConfig.appName}`,
        description:
          "Coinfest Asia is Asia's immersive web3 festival. Coinfest Asia 2023 converges Web2 and Web3 industries to explore real-world insights and valuable connections through an immersive festival experience.",
        potentialAction: [
          {
            "@type": "SearchAction",
            target: "https://coinfest.asia/?s={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        ],
        inLanguage: "en-US",
      },
      {
        "@type": "ImageObject",
        "@id": `${publicRuntimeConfig.siteUrl}/#primaryimage`,
        inLanguage: "en-US",
        url: "https://ticket.coinfest.asia/wp-content/uploads/2023/03/app-thumbnail-1.jpg",
        width: 1200,
        height: 628,
        caption: `${publicRuntimeConfig.appName} | ASIA’S IMMERSIVE WEB3 FESTIVAL IS BACK`,
      },
      {
        "@type": "WebPage",
        "@id": `${publicRuntimeConfig.siteUrl}/#webpage`,
        url: `${publicRuntimeConfig.siteUrl}`,
        name: `${publicRuntimeConfig.appName}`,
        isPartOf: {
          "@id": `${publicRuntimeConfig.siteUrl}/#website`,
        },
        primaryImageOfPage: {
          "@id": `${publicRuntimeConfig.siteUrl}/#primaryimage`,
        },
        datePublished: "2023-03-16T09:45:42+00:00",
        dateModified: "2023-03-21T09:14:35+00:00",
        description:
          "Coinfest Asia is Asia's immersive web3 festival. Coinfest Asia 2023 converges Web2 and Web3 industries to explore real-world insights and valuable connections through an immersive festival experience.",
        inLanguage: "en-US",
      },
    ],
  };

  // Schema Software Application
  const schmaSoftwareApp = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${publicRuntimeConfig.appName}`,
    operatingSystem: "Web-based",
    applicationCategory: "Event's",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "2023",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  // Schema LOGO Webapplication
  const schmaLogoApp = {
    "@context": "https://schema.org",
    "@type": "Organization",
    url: `${publicRuntimeConfig.siteUrl}`,
    logo: "https://ticket.coinfest.asia/wp-content/uploads/2023/03/favicon.svg",
  };

  //Schema Event
  const schmaEvent = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Coinfest Asia 2023",
    startDate: "2023-08-24T00:01+07:00",
    endDate: "2023-08-25T23:59+07:00",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: "Puri Bhagawan",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jalan Tegal Wangi",
        addressLocality: "Jimbaran",
        postalCode: "80361",
        addressRegion: "Bali",
        addressCountry: "Indonesia",
      },
    },
    image: [
      "https://example.com/photos/1x1/photo.jpg",
      "https://example.com/photos/4x3/photo.jpg",
      "https://example.com/photos/16x9/photo.jpg",
    ],
    description:
      "Coinfest Asia is Asia’s immersive web3 festival. This year, explore real-world insights and valuable connections in Web2.5 where web2 & web3 industries converge through an immersive festival experience.",
    offers: {
      "@type": "Offer",
      url: "https://ticket.coinfest.asia/",
      price: "150",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      // "validFrom": "2024-05-21T12:00"
    },
    performer: {
      "@type": "Person",
      name: "TBA",
    },
    organizer: {
      "@type": "Organization",
      name: "Coinvestasi",
      url: "https://coinvestasi.com",
    },
  };
  const secTabsDeflt = useRef(null);
  const [isShowing, setIsShowing] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(true);
  const [sponsorData, setSponsorData] = useState(null);

  useEffect(() => {
    if (isOpenModal) {
      setTimeout(() => {
        setIsShowing(true);
      }, 25000);
    }
  }, [isOpenModal]);

  function closeModalDefi() {
    setIsOpenModal(false);
  }

  function openModalDefi() {
    setIsOpenModal(true);
  }

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

  useEffect(() => {
    const fetchSponsorData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API}/sponsors?sort=headRank:asc&populate=*&pagination[pageSize]=100`
        );
        const json = await response.json();
        setSponsorData(json.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchSponsorData();
  }, []);

  return (
    <>
      {/* Head (Home) */}
      <Head>
        <title>ASIA’S IMMERSIVE WEB3 FESTIVAL</title>
        <meta name="title" content="ASIA’S IMMERSIVE WEB3 FESTIVAL" />
        <meta
          name="description"
          content="Coinfest Asia 📍 Bali, 24-25 August 2023 | Explore real-world insights and valuable connections in Web2.5 where web2 and web3 industries converge through an immersive festival experience."
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://coinfest.asia/" />
        <meta property="og:title" content="ASIA’S IMMERSIVE WEB3 FESTIVAL" />
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
          content="ASIA’S IMMERSIVE WEB3 FESTIVAL"
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

      <Main>
        {/* Website (Schema Application) */}
        <Script type="application/ld+json">
          {JSON.stringify(schmaWebApp)}
        </Script>

        {/* Software (Schema Application) */}
        <Script type="application/ld+json">
          {JSON.stringify(schmaSoftwareApp)}
        </Script>

        {/* Logo (Schema Application)  */}
        <Script type="application/ld+json">
          {JSON.stringify(schmaLogoApp)}
        </Script>

        {/* Event (Schema Application)  */}
        <Script type="application/ld+json">{JSON.stringify(schmaEvent)}</Script>

        <div className="overflow-hidden">
          <header className="relative h-[1313px] sm:h-[1671px] min-[850px]:h-[2100px] lg:h-[1313px] xl:h-[1283px] 2xl:h-[1467px]">
            <Container className="absolute inset-y-0 inset-x-0 mt-[219px] sm:mt-[261px] lg:mt-[271px] xl:mt-[253px] 2xl:mt-[313px] h-full w-full z-20">
              <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start text-center lg:text-left 2xl:-ml-12 max-w-full lg:max-w-[658px]">
                <div className="hidden lg:flex items-center relative py-0 sm:py-0.5">
                  <Image
                    className="h-[75px] 2xl:h-[85px] w-auto"
                    src={`/2023/assets/images/coinfest.asia2023.svg`}
                    alt={`${publicRuntimeConfig.appName}`}
                    height={45}
                    width={120}
                  />
                </div>
                <div className="flex lg:hidden items-center relative py-0 sm:py-0.5">
                  <Image
                    className="h-9 sm:h-11 w-[107px] sm:w-[129px]"
                    src={`/2023/assets/images/coinfest.asia2023.svg`}
                    alt={`${publicRuntimeConfig.appName}`}
                    height={45}
                    width={120}
                  />
                </div>
                {/* <span className="flex flex-row items-center text-primary font-bevietnam-pro text-base sm:text-xl capitalize mt-6">
                  24—25 August 2023,&nbsp;
                  <a
                    className="underline"
                    href="https://s.id/ca23location"
                    target="_blank"
                  >
                    see location →
                  </a>
                  <Link
                    className="underline"
                    href="https://s.id/ca23location"
                    target="_blank"
                  >
                    see location →
                  </Link>
                </span> */}
                <h1 className="text-primary lg:text-blue font-bevietnam-pro text-[28px] sm:text-[48px] leading-[32px] sm:leading-[58px] lg:leading-[60px] font-extrabold uppercase relative pt-2">
                  ASIA’S IMMERSIVE WEB3 FESTIVAL
                </h1>
                <div className="flex flex-col mt-6">
                  {/* <Buttons
                    url="https://ticket.coinfest.asia/"
                    typeBtn="btn-blank-link"
                    className="text-base font-semibold py-3 sm:py-4 px-4 sm:px-6 tracking-normal"
                    label="Get Your Tickets Now"
                    variants="btn-primary"
                    rounded="pill"
                    text="capitalize"
                    position="center"
                    withIcons={true}
                    positionIcons="left"
                    ariaLabel="btnHeaderGetYourTicketsNow"
                  >
                    <svg
                      className="mr-2"
                      width="25"
                      height="25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity=".4"
                        d="M14.25 10.59V8.57a.72.72 0 0 1-.725-.705V5.46a.577.577 0 0 0-.59-.573H6.291C4.202 4.887 2.5 6.54 2.5 8.57v2.432c0 .189.077.367.213.499.135.13.319.206.512.206.735 0 1.296.507 1.296 1.174 0 .696-.57 1.25-1.286 1.259-.397 0-.735.272-.735.667v2.406c0 2.03 1.702 3.673 3.781 3.673h6.654c.329 0 .59-.254.59-.573v-2.03c0-.394.329-.705.726-.705v-1.821a.721.721 0 0 1-.726-.705v-3.758a.72.72 0 0 1 .726-.704Z"
                        fill="#FFFFFF"
                      />
                      <path
                        d="M20.479 12.882c0 .695.58 1.249 1.286 1.258.396 0 .735.273.735.658v2.414c0 2.03-1.692 3.675-3.781 3.675h-3.153a.585.585 0 0 1-.59-.574v-2.03a.708.708 0 0 0-.726-.704v-1.822c.407 0 .726-.32.726-.704v-3.758a.714.714 0 0 0-.726-.705V8.57c.407 0 .726-.32.726-.705V5.46c0-.32.27-.574.59-.574h3.153c2.088 0 3.781 1.644 3.781 3.673v2.367a.693.693 0 0 1-.213.498.735.735 0 0 1-.512.207c-.716 0-1.296.565-1.296 1.25Z"
                        fill="#FFFFFF"
                      />
                    </svg>
                  </Buttons> */}
                  <Buttons
                    url="https://t.me/coinfestasiasupport"
                    typeBtn="btn-blank-link"
                    className="bg-transparent text-primary lg:text-secondary text-base font-semibold mt-1.5 lg:mt-0 py-3 sm:py-4 px-0 sm:px-0 tracking-normal"
                    label="Got any questions? Ask us!"
                    rounded="pill"
                    text="capitalize"
                    position="center"
                    withIcons={true}
                    positionIcons="left"
                    ariaLabel="btnGotAnyQuestions?AskUs"
                  >
                    <svg
                      className=" fill-current text-primary lg:text-secondary mr-2"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 0.19873C5.374 0.19873 0 5.57073 0 12.1987C0 18.8257 5.374 24.1987 12 24.1987C18.627 24.1987 24 18.8257 24 12.1987C24 5.57073 18.627 0.19873 12 0.19873ZM15.224 18.0697C15.412 18.2027 15.654 18.2357 15.87 18.1547C16.085 18.0727 16.244 17.8877 16.292 17.6637C16.799 15.2817 18.029 9.25173 18.49 7.08573C18.525 6.92173 18.467 6.75173 18.339 6.64273C18.21 6.53373 18.032 6.50273 17.874 6.56073C15.428 7.46673 7.895 10.2927 4.816 11.4317C4.621 11.5047 4.494 11.6917 4.5 11.8987C4.507 12.1047 4.646 12.2837 4.846 12.3437C6.227 12.7567 8.039 13.3317 8.039 13.3317C8.039 13.3317 8.886 15.8897 9.327 17.1897C9.383 17.3537 9.511 17.4817 9.679 17.5257C9.848 17.5697 10.027 17.5237 10.153 17.4047C10.862 16.7357 11.958 15.7007 11.958 15.7007C11.958 15.7007 14.042 17.2277 15.224 18.0697V18.0697ZM8.801 13.0077L9.781 16.2387L9.999 14.1927C9.999 14.1927 13.782 10.7797 15.94 8.83473C16.003 8.77773 16.011 8.68173 15.959 8.61473C15.907 8.54773 15.811 8.53173 15.74 8.57773C13.24 10.1737 8.801 13.0077 8.801 13.0077V13.0077Z"
                      />
                    </svg>
                  </Buttons>
                </div>
              </div>
              <div className=" bottom-40 max-xl:hidden absolute  xl:bottom-0 2xl:bottom-20 z-10  ">
                {/* <div className="col-start-1 lg:col-start-2 col-span-full lg:col-span-10 hidden lg:block">
                  <div className="flex flex-col text-center">
                    <h2 className="text-black-100 font-bevietnam-pro text-2xl sm:text-[32px] md:text-[36px] lg:text-[42px] xl:text-[56px] sm:leading-[38px] md:leading-[40px] lg:leading-[48px] xl:leading-[72px] font-extrabold uppercase">
                      Showcasing <span className="text-primary">Web2.5</span>{" "}
                      Where
                      <br /> <span className="text-primary">Web2</span> &{" "}
                      <span className="text-primary">Web3</span> Industries
                      Converge
                    </h2>
                  </div>
                </div> */}
                <h3 className="font-bold text-2xl mb-8 text-center uppercase">
                  sponsored by
                </h3>
                <div className=" inline-flex flex-wrap items-center justify-center gap-y-0 w-full h-full">
                  {sponsorData &&
                    sponsorData.slice(0, 9).map((data, index) => (
                      <PostLink
                        key={index}
                        typePost="blank-link"
                        url={data.attributes.url}
                        className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/2 lg:basis-1/5 px-0 h-full"
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
                    onClick={tabScrollDeflt}
                  >
                    See More
                  </span>
                </div>
              </div>
            </Container>

            <div className="hidden lg:flex absolute inset-y-0 inset-x-0 h-full w-full z-0.5">
              <Image
                className="object-cover absolute top-auto inset-x-0 bottom-0 h-full w-full max-w-max sm:max-w-full"
                src={`/2023/assets/images/backdrop/Desktop.jpg`}
                alt={`${publicRuntimeConfig.appName} (Header Hero Section Large - Backdrop)`}
                height={1329}
                width={1440}
              />
            </div>
            <div className="flex lg:hidden absolute inset-y-0 inset-x-0 h-full w-full z-0.5">
              <Image
                className="object-cover absolute top-auto inset-x-0 bottom-0 h-full w-full max-w-full"
                src={`/2023/assets/images/backdrop/Mobile.jpg`}
                alt={`${publicRuntimeConfig.appName} (Header Hero Section Small - Backdrop)`}
                height={1329}
                width={1440}
              />
            </div>
            <div className="absolute top-auto inset-x-0 -bottom-[45px] min-[500px]:-bottom-[115px] md:-bottom-[150px] min-[850px]:-bottom-[140px] lg:-bottom-[167px] xl:-bottom-[323px] 2xl:-bottom-[412px] h-[300px] min-[500px]:h-[380px] sm:h-[437px] min-[850px]:h-[555px] lg:h-[525px] xl:h-[661px] 2xl:h-[939px] w-full z-0.5">
              {" "}
              <Image
                className="object-cover object-bottom absolute top-0 inset-x-0 bottom-0 h-full w-full"
                src={`/2023/assets/images/backdrop/ca-header-clouds.png`}
                alt={`${publicRuntimeConfig.appName} (Header Hero Section Large - Backdrop)`}
                height={1329}
                width={1440}
              />
            </div>
          </header>

          <Container className="mt-10 sm:mt-14 lg:mt-[179px] xl:mt-[311px] 2xl:mt-[345px]">
            {/* <Container className="mt-10 sm:mt-14 lg:mt-[88px]"> */}
            <LyShowcasing getRef={secTabsDeflt} sponsoredData={sponsorData} />
          </Container>
        </div>

        <Container className="mt-18 xl:mt-24 px-0">
          <LyKeyExperiences />
        </Container>

        {/* <section
          id="tickets"
          className="bg-blue-400 text-center overflow-hidden relative py-24 sm:py-28"
        >
          <h2
            className={`${Headng.hdingTitle} font-bevietnam-pro text-white font-bold uppercase text-center px-15 sm:px-0`}
          >
            Get Your <span className="text-secondary">Tickets</span> Now!
          </h2>
          <Container className="relative">
            <div className="supports-grid:grid grid-cols-4 sm:grid-cols-8 xl:grid-cols-12 gap-y-6 gap-x-6 relative mt-6 z-50">
              <div className="col-span-4">
                <div className="ticket ticketGroup">
                  <div>
                    <div className="ticketHead">
                      <span className="ticketTitle">
                        Festival – Group Package
                      </span>
                      <div className="ticketPrice mt-2">
                        <span className="wmc-cache-pid">
                          <span className="woocommerce-Price-amount amount">
                            $600
                          </span>
                        </span>
                        <span className="price-currency">
                          Approximately: IDR9.260.723
                        </span>
                      </div>
                      <div className="bg-[#FF52C3] rounded-full flex items-center justify-center text-white font-bevietnam-pro text-xs font-semibold text-center absolute top-auto left-0 right-0 bottom-0 py-1 -z-0.5">
                        LIMITED TIME ONLY
                      </div>
                    </div>
                    <div className="ticketLine"></div>
                    <div className="ticketContnt">
                      <ul className="ticketLst text-left">
                        <li className="ticketLstTrue">
                          5 Festival tickets for 5 people
                        </li>
                        <li className="ticketLstTrue">
                          2-day pass to Coinfest Asia main venue
                        </li>
                        <li className="ticketLstTrue">
                          Access to main stage’s panel Discussions & conferences
                        </li>
                        <li className="ticketLstTrue">
                          Direct networking with Speakers at Breakout Area
                        </li>
                        <li className="ticketLstTrue">
                          Access to workshops, meet-ups, and side sessions
                        </li>
                        <li className="ticketLstTrue">
                          Light food & beverage for 2 days
                        </li>
                        <li className="ticketLstTrue">Merchandise</li>
                        <li className="ticketLstTrue">
                          Access to selected Coinfest Week events
                        </li>
                        <li className="ticketLstTrue">
                          Access to Official After Party
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col mt-6">
                    <Buttons
                      typeBtn="btn-link"
                      url="https://ticket.coinfest.asia/checkout/?add-to-cart=9590941735&quantity=5&coupon=grouppackage5"
                      label="BUY NOW"
                      variants="btn-primary"
                      rounded="pill"
                      text="capitalize"
                      ariaLabel="btnBuyTicket"
                      className="ticketBtn btn-block font-semibold px-4"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-4 -order-1">
                <div className="ticket">
                  <div>
                    <div className="ticketHead">
                      <span className="ticketTitle">Festival Ticket</span>
                      <div className="ticketPrice mt-2">
                        <span className="wmc-cache-pid">
                          <span className="woocommerce-Price-amount amount">
                            $150
                          </span>
                        </span>
                        <span className="price-currency">
                          Approximately: IDR2.315.068
                        </span>
                      </div>

                      <div className="bg-[#FF52C3] rounded-full flex items-center justify-center text-white font-bevietnam-pro text-xs font-semibold text-center absolute top-auto left-0 right-0 bottom-0 py-1 -z-0.5">
                        GET THEM WHILE THEY LAST
                      </div>
                    </div>
                    <div className="ticketLine"></div>
                    <div className="ticketContnt">
                      <ul className="ticketLst text-left">
                        <li className="ticketLstTrue">
                          2-day pass to Coinfest Asia main venue
                        </li>
                        <li className="ticketLstTrue">
                          Access to main stage’s panel Discussions & conferences
                        </li>
                        <li className="ticketLstTrue">
                          Direct networking with Speakers at Breakout Area
                        </li>
                        <li className="ticketLstTrue">
                          Access to workshops, meet-ups, and side sessions
                        </li>
                        <li className="ticketLstTrue">
                          Light food & beverage for 2 days
                        </li>
                        <li className="ticketLstTrue">Merchandise</li>
                        <li className="ticketLstTrue">
                          Access to selected Coinfest Week events
                        </li>
                        <li className="ticketLstTrue">
                          Access to Official After Party
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col mt-6">
                    <Buttons
                      typeBtn="btn-link"
                      url="https://ticket.coinfest.asia/?add-to-cart=8330"
                      label="BUY NOW"
                      variants="btn-primary"
                      rounded="pill"
                      text="capitalize"
                      ariaLabel="btnBuyTicket"
                      className="ticketBtn btn-block font-semibold px-4"
                    />
                    <a
                      className="ticketDetail btn btn-link btn-block"
                      href="https://ticket.coinfest.asia/product/festival-early-bird-2/"
                      text="uppercase"
                    >
                      Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-span-4">
                <div className="ticket ticketVIP">
                  <div>
                    <div className="ticketHead">
                      <span className="ticketTitle">Bull Pass</span>
                      <div className="ticketPrice mt-2">
                        <span className="wmc-cache-pid">
                          <span className="woocommerce-Price-amount amount">
                            $700
                          </span>
                        </span>
                        <span className="price-currency">
                          Approximately: IDR10.803.652
                        </span>
                      </div>
                    </div>
                    <div className="ticketLine"></div>
                    <div className="ticketContnt">
                      <ul className="ticketLst text-left">
                        <li className="ticketLstTrue">
                          All Access From Festival Tickets
                        </li>
                        <li className="ticketLstTrue">
                          First Lane Registration
                        </li>
                        <li className="ticketLstTrue">Access To Bull Area</li>
                        <li className="ticketLstTrue">
                          Access to government pitching session
                        </li>
                        <li className="ticketLstTrue">
                          Networking session with Indonesian key industry
                          leaders
                        </li>
                        <li className="ticketLstTrue">
                          Access to private regulatory panel
                        </li>
                        <li className="ticketLstTrue">
                          Exclusive access to the speakers
                        </li>
                        <li className="ticketLstTrue">
                          Dedicated Food and Drinks in the Cafe Area
                        </li>
                        <li className="ticketLstTrue">
                          Personalized business matchmaking
                        </li>
                        <li className="ticketLstTrue">
                          Access to selected VIP Coinfest Week events
                        </li>
                        <li className="ticketLstTrue">
                          Fast lane access to Official After Party
                        </li>
                        <li className="ticketLstTrue">
                          VIP shuttle to selected VIP Coinfest Week Events
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col mt-6">
                    <Buttons
                      typeBtn="btn-link"
                      url="https://ticket.coinfest.asia/?add-to-cart=3613"
                      label="BUY NOW"
                      variants="btn-primary"
                      rounded="pill"
                      text="capitalize"
                      ariaLabel="btnBuyTicket"
                      className="ticketBtn btn-block font-semibold px-4"
                    />
                    <a
                      className="ticketDetail btn btn-link btn-block text-primary"
                      href="https://ticket.coinfest.asia/product/bull-ticket/"
                      text="uppercase"
                    >
                      Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mt-[60px] sm:mt-18 z-100">
              <h3
                className={`font-bevietnam-pro text-white text-[32px] sm:text-[40px] leading-[normal] lg:leading-[48px] tracking-[inherit] font-bold uppercase text-center px-0`}
              >
                YOU CAN ALSO BUY THE TICKETS HERE
              </h3>
              <div className="flex flex-col sm:flex-row mt-4 mx-auto w-full sm:w-max w-max-full sm:max-w-[273px]">
                <Buttons
                  typeBtn="btn-link"
                  url="https://app.moongate.id/events/coinfest-asia"
                  label="Moongate"
                  variants="btn-secondary"
                  rounded="pill"
                  text="capitalize"
                  ariaLabel="btnBuyTicketMoongate"
                  className="ticketBtn btn-block sm:w-max font-semibold py-4 px-6"
                />
                <Buttons
                  typeBtn="btn-link"
                  url="https://www.accupass.com/event/2305231001108261198220?utm_source=web&utm_medium=search_result_coinfest+asia&utm_campaign=accu_e_"
                  label="Accupass"
                  rounded="pill"
                  text="capitalize"
                  ariaLabel="btnBuyTicketAccupass"
                  className="ticketBtn bg-white text-primary btn-block sm:w-max font-semibold mt-2 sm:mt-0 ml-0 sm:ml-4 py-4 px-6"
                />
              </div>
            </div>

            <div className="absolute top-auto xl:top-16 -left-[165px] xl:-left-[407px] right-auto -bottom-[343px] xl:bottom-auto h-[462px] xl:h-[965px] w-full max-w-[323px] xl:max-w-[675px] select-none pointer-events-none z-px">
              <Image
                className="object-cover absolute top-auto inset-x-0 bottom-0 h-auto w-full"
                src={`/2023/assets/images/backdrop/coinfest-symbol-left.svg`}
                alt={`${publicRuntimeConfig.appName} (Coinfest Asia 2023 - Left Symbol Backdrop)`}
                height={985}
                width={695}
              />
            </div>
            <div className="absolute -top-[231px] xl:-top-[387px] left-auto -right-[141px] xl:-right-[361px] bottom-auto h-[462px] xl:h-[965px] w-full max-w-[323px] xl:max-w-[675px] select-none pointer-events-none z-px">
              <Image
                className="object-cover absolute top-auto inset-x-0 bottom-0 h-auto w-full transform -rotate-180"
                src={`/2023/assets/images/backdrop/coinfest-symbol-left.svg`}
                alt={`${publicRuntimeConfig.appName} (Coinfest Asia 2023 - Left Symbol Backdrop)`}
                height={985}
                width={695}
              />
            </div>
          </Container>
        </section> */}

        <section className="bg-[#FFC600] flex flex-col relative py-12">
          <Container>
            <div className="flex flex-col lg:flex-row items-center justify-between relative px-0 sm:px-22 lg:px-0">
              <h2
                className={`${Headng.hdingTitle} font-bevietnam-pro text-black-900 font-bold uppercase text-center`}
              >
                GET EXPOSURE AT{" "}
                <span className="text-primary">COINFEST ASIA</span>
              </h2>
              <div className="mt-4 sm:mt-6 lg:mt-0">
                <Buttons
                  typeBtn="btn-blank-link"
                  url="https://bit.ly/ca23sponsor"
                  label="Sponsorship Inquiry"
                  variants="btn-primary"
                  rounded="pill"
                  text="capitalize"
                  ariaLabel="btnSponsorshipInquiry"
                  className="font-semibold px-4"
                />
              </div>
            </div>
          </Container>
        </section>
        <LyTopics />
        <LyTrailblazers />

        <Container className="mt-24">
          <span ref={secTabsDeflt} id="partners" />
          <LyPartners />
        </Container>

        <section className="bg-blue-400 overflow-hidden relative mt-28 pt-16 pb-[84px]">
          <div className="relative z-50">
            <h2
              className={`${Headng.hdingTitle} font-bevietnam-pro text-white font-bold uppercase text-center`}
            >
              How it went in <span className="text-secondary">2022</span>
            </h2>
            <div className="flex flex-col items-center justify-center relative px-4 sm:px-0 mt-6 mx-auto h-[193px] sm:h-[361px] lg:h-[419px] xl:h-[540px] w-full max-w-[641px] lg:max-w-[742px] xl:max-w-[960px]">
              <iframe
                className="rounded-lg overflow-hidden h-[193px] sm:h-[361px] lg:h-[419px] xl:h-[540px] w-full max-w-full sm:max-w-[641px] lg:max-w-[742px] xl:max-w-[960px]"
                src="https://www.youtube-nocookie.com/embed/-ENpdcDe8ZY"
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>

              <PostLink
                typePost="blank-link"
                url="https://www.youtube-nocookie.com/embed/-ENpdcDe8ZY"
              >
                <div
                  id="crclePlayYoutube"
                  className="bg-white flex flex-col items-center justify-center rounded-full absolute top-auto bottom-2 sm:bottom-[102px] left-auto right-0 sm:-right-11 lg:-right-15 cursor-pointer py-0.5 sm:py-1 px-0.5 sm:px-1 h-15 sm:h-[88px] lg:h-[102px] w-15 sm:w-[88px] lg:w-[102px]"
                >
                  <Image
                    className="animate-spin-slow h-full w-full"
                    src={`/2023/assets/images/backdrop/rotate-playyoutube.svg`}
                    alt={`${publicRuntimeConfig.appName} (Play Youtube)`}
                    height={150}
                    width={150}
                  />
                  <div className="flex items-center justify-center absolute inset-y-0 inset-x-0 my-auto z-0.5">
                    <PlayIcon className="fill-current h-4 sm:h-[26px] lg:h-8 w-4 sm:w-[26px] lg:w-8" />
                  </div>
                </div>
              </PostLink>
            </div>
            <div className="mt-13">
              <LyExperienceEvents />
            </div>
          </div>

          <Container className="absolute inset-y-0 inset-x-0 z-0.5">
            <div className="absolute top-auto -left-[165px] xl:-left-[407px] right-auto -bottom-[151px] xl:-bottom-[183px] h-[462px] xl:h-[965px] w-full max-w-[323px] xl:max-w-[675px] select-none pointer-events-none z-px">
              <Image
                className="object-cover absolute top-auto inset-x-0 bottom-0 h-auto w-full"
                src={`/2023/assets/images/backdrop/coinfest-symbol-left.svg`}
                alt={`${publicRuntimeConfig.appName} (Coinfest Asia 2023 - Left Symbol Backdrop)`}
                height={985}
                width={695}
              />
            </div>
            <div className="absolute top-0 xl:-top-[237px] left-auto -right-[145px] xl:-right-[401px] bottom-auto h-[462px] xl:h-[965px] w-full max-w-[323px] xl:max-w-[675px] select-none pointer-events-none z-px">
              <Image
                className="object-cover absolute top-auto inset-x-0 bottom-0 h-auto w-full transform -rotate-180"
                src={`/2023/assets/images/backdrop/coinfest-symbol-left.svg`}
                alt={`${publicRuntimeConfig.appName} (Coinfest Asia 2023 - Left Symbol Backdrop)`}
                height={985}
                width={695}
              />
            </div>
          </Container>
        </section>

        <Container className="mt-24">
          <LyFAQ />
        </Container>
      </Main>

      {/* <Transition appear show={isOpenModal} as={Fragment}>
        <Dialog as="div" className="relative z-xl" onClose={closeModalDefi}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-y-0 inset-x-0 bg-black-900/50 z-[1613]" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto z-[2145]">
            <div className="flex min-h-full items-end sm:items-center justify-center py-0 px-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full sm:max-w-[663px] lg:max-w-[901px] xl:max-w-[998px] transform overflow-hidden rounded-t-xl sm:rounded-xl bg-[#2D2D2D] transition-all">
                  <div className="flex flex-col lg:flex-row border-none relative overflow-hidden outline-none text-current">
                    <div className="hidden sm:flex flex-auto lg:flex-1 h-[224px] sm:h-auto min-h-[224px] lg:min-h-[545px] max-h-max sm:max-h-[395px] lg:max-h-max w-full max-w-full lg:max-w-[400px]">
                      <img
                        className="img-cver h-full w-full"
                        src={`/2023/assets/images/CoinfestWeek.jpg`}
                        alt={`${publicRuntimeConfig.appName} (Modal Coinfest Week)`}
                      />
                    </div>
                    <div className="flex-1 bg-white py-6 sm:py-8 px-6 sm:px-12">
                      <div className="flex items-start justify-end cursor-pointer">
                        <XMarkIcon
                          className="fill-current text-black-900 h-8 w-8"
                          onClick={() =>
                            setIsOpenModal((isOpenModal) => !isOpenModal)
                          }
                        />
                      </div>
                      <div className="mt-6 sm:mt-11">
                        <Dialog.Title
                          as="h2"
                          className="text-black-900 font-bevietnam-pro text-2xl sm:text-[32px] font-bold sm:leading-[40px] uppercase w-full max-w-max"
                        >
                          Host your own event at Coinfest Week and find the
                          right audience with us!
                        </Dialog.Title>
                        <p className="text-black-900 font-bevietnam-pro text-sm sm:text-base font-normal mt-2">
                          Are you seeking an opportunity to engage with your
                          audience and still in search of necessary resources to
                          organize a side event? We are offering you the chance
                          to host your very own side event under our event's
                          umbrella, Coinfest Week.
                        </p>
                      </div>
                      <div className="mt-4 lg:mt-11">
                        <Buttons
                          typeBtn="btn-blank-link"
                          url="https://e7bao9msf39.typeform.com/to/IyLelRl5"
                          label="Talk to our team now"
                          variants="btn-primary"
                          rounded="pill"
                          text="uppercase"
                          position="center"
                          withIcons={true}
                          positionIcons="right"
                          ariaLabel="btnUseTheCoupon"
                          className="rounded-md text-sm sm:text-base font-semibold px-4 mt-4"
                        >
                          <ArrowLongRightIcon className="stroke-current stroke-[0.3] ml-2 h-5 sm:h-6 w-5 sm:w-6" />
                        </Buttons>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition> */}

      <Transition
        show={isShowing}
        enter="transition-opacity duration-150"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className={`fixed top-auto bottom-3 sm:bottom-6 left-3 sm:left-6 lg:left-10 right-3 sm:right-auto z-100 ${
          isShowing ? "" : "hidden"
        }`}
      >
        <section
          className={`bg-[#FB51C0] rounded-[10px] py-6 px-4 max-w-max sm:max-w-[335px]`}
        >
          <div className="flex items-start justify-start cursor-pointer">
            <XMarkIcon
              className="fill-current text-white h-6 w-6"
              onClick={() => setIsShowing((isShowing) => !isShowing)}
            />
          </div>
          <div className="mt-4">
            <h3 className="text-white font-bevietnam-pro text-base sm:text-xl font-bold uppercase">
              Act Now or Miss Out!
            </h3>
            <p className="text-white font-bevietnam-pro text-sm sm:text-base font-normal mt-2">
              The clock is ticking! Don't let your spot on Coinfest Asia slip
              away!
            </p>
          </div>
          <Buttons
            typeBtn="btn-link"
            url="https://ticket.coinfest.asia"
            label="get my ticket"
            variants="btn-primary"
            rounded="pill"
            text="uppercase"
            position="center"
            withIcons={true}
            positionIcons="right"
            ariaLabel="btnClaimMyCode"
            className="btn-block rounded-md text-sm sm:text-base font-semibold px-4 mt-4"
          >
            <ArrowLongRightIcon className="stroke-current stroke-[0.3] ml-2 h-5 sm:h-6 w-5 sm:w-6" />
          </Buttons>
        </section>
      </Transition>

      <LyCookieBanner className={isOpenModal ? "hidden" : ""} />
    </>
  );
};

export default Home;

// Version 3.83 LGTM!
