import React, { useState, useEffect } from "react";
import getConfig from "next/config";
import Script from "next/script";
import Head from "next/head";

// @get .config
const { publicRuntimeConfig } = getConfig();

// @lib
import { getFetchUrl, getFetch } from "@lib/controller/API";

// @components
import SectionInnerSplit from "@components/SectionInnerSplit";
import SpeakersCard from "@components/UI/Card/Speakers";
import SpeakersModal from "@components/UI/Modal/SpeakersModal";

// @layouts
import NavbarTop from "@layouts/Navbar/NavbarTop";
import NavbarBottom from "@layouts/Navbar/NavbarBottom";
import Header from "@layouts/Header";
import About from "@layouts/About";
import Board from "@layouts/Board";
import Benefit from "@layouts/Benefit";
// import StartSpeakers from "@layouts/Speakers/start";
import Tickets from "@layouts/Tickets";
import Speakers from "@layouts/Speakers";
import Activist from "@layouts/Activist";
// import NextSpeakers from "@layouts/Speakers/next";
import Partner from "@layouts/Partner";
import Testimonials from "@layouts/Testimonials";
import GetInvolved from "@layouts/GetInvolved";
import FAQ from "@layouts/FAQ";
// import SocialMentions from "@layouts/SocialMentions";
import BannerFooter from "@layouts/Banner/BannerFooter";
import Footer from "@layouts/Footer";

const Home = ({ ipAddress, speaker, partners }) => {
  const [isSpeakers, setSpeakers] = useState(speaker);
  const [isSpeakersModal, setSpeakersModal] = useState(null);
  // const [isSocialMentions, setSocialMentions] = useState(socialMentions);

  // @preline (Add Plugins)
  useEffect(() => {
    import("preline");

    return () => {
      undefined;
    };
  }, []);

  {
    /* @speakers-modal(dynamic) */
  }
  const isModal = ({
    id,
    name,
    images,
    position,
    aboutMe,
    connectWithMe,
    logoCompany,
  }) => {
    setSpeakersModal({
      id: id,
      images: images,
      name: name,
      position: position,
      aboutMe,
      connectWithMe,
      logoCompany,
    });
  };

  // @main-scrollspy
  // useEffect(() => {
  //   const isMain = document.querySelector(".ca2024Main");

  //   const hndleMainScrll = (e) => {
  //     const isPoint = document.querySelectorAll(".ca2024MainPoints");

  //     isPoint.forEach((elmnt) => {
  //       const rct = elmnt.getBoundingClientRect();

  //       if (rct.top < window.innerHeight && rct.bottom >= 20) {
  //         elmnt.classList.add("snap-start");
  //         elmnt.classList.remove("snap-end");
  //       } else {
  //         elmnt.classList.remove("snap-start");
  //         elmnt.classList.add("snap-end");
  //       }
  //     });
  //   }

  //   isMain.addEventListener("scroll", (e) => hndleMainScrll(e));

  //   return () => {
  //     isMain.removeEventListener("scroll", (e) => hndleMainScrll(e));
  //   };
  // }, []);

  // @schema
  const schmaApp = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${publicRuntimeConfig.siteUrl}#website`,
        url: `${publicRuntimeConfig.siteUrl}`,
        name: `${publicRuntimeConfig.siteAppName}`,
        alternateName: `${publicRuntimeConfig.siteAppName}`,
        description: `Asia's largest Web3 festival. Where innovation meets adoption. BALI ☀️ 22-23 AUGUST 2024`,
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
        url: `${process.env.NEXT_PUBLIC_UPLOAD}/uploads/ca2024_Thumbnails_Share_Link_App_9964b5c353.png`,
        width: 1200,
        height: 628,
        caption: `${publicRuntimeConfig.siteAppName} | Asia's largest Web3 festival. Where innovation meets adoption. BALI ☀️ 22-23 AUGUST 2024`,
      },
      {
        "@type": "WebPage",
        "@id": `${publicRuntimeConfig.siteUrl}/#webpage`,
        url: `${publicRuntimeConfig.siteUrl}`,
        name: `${publicRuntimeConfig.siteAppName}`,
        isPartOf: {
          "@id": `${publicRuntimeConfig.siteUrl}#website`,
        },
        primaryImageOfPage: {
          "@id": `${publicRuntimeConfig.siteUrl}#primaryimage`,
        },
        datePublished: "2024-01-16T09:45:42+00:00",
        dateModified: "2024-01-21T09:14:35+00:00",
        description: `Asia's largest Web3 festival. Where innovation meets adoption. BALI ☀️ 22-23 AUGUST 2024`,
        inLanguage: "en-US",
      },
    ],
  };

  // @schema(brand-logo)
  const schmaBrandLogo = {
    "@context": "https://schema.org",
    "@type": "Organization",
    url: `${publicRuntimeConfig.siteUrl}`,
    logo: `${process.env.NEXT_PUBLIC_UPLOAD}/uploads/favicon_512x512_46eb72a111.png`,
  };

  return (
    <>
      {/* @head */}
      <Head>
        <title>{`${publicRuntimeConfig.siteTitle}`}</title>
        <meta name="title" content={`${publicRuntimeConfig.siteTitle}`} />
        <meta
          name="description"
          content={
            "Asia's largest Web3 festival. Where innovation meets adoption. BALI ☀️ 22-23 AUGUST 2024"
          }
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="og:title"
          content={`${publicRuntimeConfig.siteTitle}`}
        />
        <meta
          property="og:description"
          content={
            "Asia's largest Web3 festival. Where innovation meets adoption. BALI ☀️ 22-23 AUGUST 2024"
          }
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
          content={`${publicRuntimeConfig.siteTitle}`}
        />
        <meta
          property="twitter:description"
          content={
            "Asia's largest Web3 festival. Where innovation meets adoption. BALI ☀️ 22-23 AUGUST 2024"
          }
        />
        <meta
          property="twitter:image"
          content={`${process.env.NEXT_PUBLIC_UPLOAD}/uploads/ca2024_Thumbnails_Share_Link_App_9964b5c353.png`}
        />
      </Head>

      {/* @schema(applications) */}
      <Script type="application/ld+json">{JSON.stringify(schmaApp)}</Script>

      {/* @schema(brand-logo) */}
      <Script type="application/ld+json">
        {JSON.stringify(schmaBrandLogo)}
      </Script>

      {/* @navbar(top) */}
      <NavbarTop />

      {/* @navbar(bottom) */}
      <NavbarBottom />

      {/* @main */}
      <main className="ca2024Main relative overflow-hidden">
        <Header />

        {/* @about */}
        <About />

        <div className="flex flex-col pb-[156px]">
          {/* @board(chartinsights) */}
          <Board />

          {/* @benefit */}
          <Benefit />
        </div>

        {/* @start(speakers) & tickets  */}
        <SectionInnerSplit>
          {/* @start(speakers) */}
          {/* <StartSpeakers /> */}

          {/* @tickets */}
          <Tickets />
        </SectionInnerSplit>

        {/* @speakers */}
        {isSpeakers && (
          <Speakers>
            {isSpeakers.data?.map((gtRslt, i) => (
              <div
                className={`ca2024SpeakersCard col-span-2 sm:col-span-4 lg:col-span-3 ${gtRslt.id}`}
                key={i}
              >
                <button
                  id={`btnSpeakers${gtRslt.attributes.name}`}
                  className="btnSpeakers w-full min-w-full outline-none focus-visible:outline-none"
                  aria-label={`${gtRslt.attributes.name} - (Button Modal Speakers)`}
                  aria-labelledby={`${gtRslt.attributes.name} - (Button Modal Speakers)`}
                  data-hs-overlay={`#mdlSpeakers`}
                  onClick={(e) => {
                    e.preventDefault();

                    isModal({
                      id: gtRslt.id,
                      images: gtRslt.attributes
                        ? process.env.NEXT_PUBLIC_UPLOAD +
                          gtRslt.attributes.profilePicture.data.attributes.url
                        : "",
                      name: gtRslt.attributes.name,
                      position: gtRslt.attributes.position,
                      aboutMe: gtRslt.attributes.aboutMe,
                      connectWithMe: gtRslt.attributes.connectWithMe,
                    });
                  }}
                >
                  <SpeakersCard {...gtRslt} useHeading="h2" />
                </button>
              </div>
            ))}
          </Speakers>
        )}

        <SectionInnerSplit>
          {/* <div className="opacity-1 pointer-events-none absolute -bottom-[229px] -right-[203px] left-auto top-auto z-[6] select-none bg-transparent transition duration-[0.8s] ease-out sm:-bottom-[405px] sm:-right-[325px] lg:-right-[415px] 2xl:-bottom-[527px]">
            <Image
              className="z-10 mx-auto h-auto w-[471px] object-cover object-center sm:w-[771px] lg:w-[971px]"
              src={"/assets/images/backdrop/ca2024PointItems.png"}
              alt={`Coinfest Asia 2024 (Points Items Start Speakers)`}
              height={1635}
              width={958}
              quality="87"
            />
          </div> */}

          {/* @activist */}
          <Activist />

          {/* @next(speakers) */}
          {/* <NextSpeakers /> */}
        </SectionInnerSplit>

        {/* @partner */}
        <section className="ca2024MainPoints bg-white pb-[189px] pt-[140px] sm:pt-[174px]">
          <Partner
            isLayoutShow={true}
            dataSponsor={partners.sponsor}
            dataMediaPartner={partners.mediaPartner}
            dataComunitiesPartner={partners.comunitiesPartner}
            dataStrategicPartner={partners.strategicPartners}
          />
        </section>

        {/* @testimonials & get-involved  */}
        <SectionInnerSplit overflowHidden={false}>
          {/* @testimonials */}
          <Testimonials />

          {/* @get-involved */}
          <GetInvolved />
        </SectionInnerSplit>

        {/* @social-mentions */}
        {/* <SocialMentions /> */}

        <div className="ca2024MainPoints ca2024EndMainPoints relative z-[11] flex snap-start snap-always flex-col bg-white sm:z-[16] lg:z-[11]">
          {/* @faq */}
          <FAQ />

          {/* @banner(footer) */}
          <BannerFooter />

          {/* @footer */}
          <Footer />
        </div>

        {/* @speakers-modal */}
        <SpeakersModal {...isSpeakersModal} />
      </main>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const isIpAddress = await getFetchUrl(
    `https://ipinfo.io/json?token=135855871d1f46`,
  );

  const isSpeakers = await getFetch(
    `/ca-24-speakers?sort=rank:asc&populate=*&pagination[pageSize]=100`,
  );

  const isSponsor = await getFetch(
    `/ca-24-sponsors?sort=rank:asc&populate=*&pagination[pageSize]=100`,
  );

  const isMediaPartner1 = await getFetch(
    `/ca-24-media-partners?sort=rank:asc&populate=*&pagination[page]=1&pagination[pageSize]=5`,
  );
  const isMediaPartner2 = await getFetch(
    `/ca-24-media-partners?sort=rank:asc&populate=*&pagination[page]=2&pagination[pageSize]=6`,
  );

  const isComunitiesPartner1 = await getFetch(
    `/ca-24-communities?sort=rank:asc&populate=*&pagination[page]=1&pagination[pageSize]=7`,
  );
  const isComunitiesPartner2 = await getFetch(
    `/ca-24-communities?sort=rank:asc&populate=*&pagination[page]=3&pagination[pageSize]=7`,
  );

  const isStrategicPartners = await getFetch(
    `/ca24-strategic-partners?sort=rank:asc&populate=*&pagination[pageSize]=100`,
  );

  // const isSocialMentions = await getFetch(
  //   `/people-says?populate=*&pagination[pageSize]=100`,
  // );

  try {
    return {
      props: {
        ipAddress: isIpAddress || [],
        speaker: isSpeakers || [],
        partners: {
          sponsor: isSponsor || [],
          mediaPartner: {
            page1: isMediaPartner1 || [],
            page2: isMediaPartner2 || [],
          },
          comunitiesPartner: {
            page1: isComunitiesPartner1 || [],
            page2: isComunitiesPartner2 || [],
          },
          strategicPartners: isStrategicPartners || [],
        },
        // socialMentions: isSocialMentions || [],
      },

      revalidate: 900,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

Home.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
