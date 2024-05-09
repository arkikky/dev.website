import React, { useState, useEffect } from "react";
import getConfig from "next/config";
import Head from "next/head";
import Image from "next/image";

// @get .config
const { publicRuntimeConfig } = getConfig();

// @lib
import { getFetchUrl, getFetch } from "@lib/controller/API";

// @components
import SectionInnerSplit from "@components/SectionInnerSplit";
import SpeakersCard from "@components/UI/Card/Speakers";
import SpeakersModal from "@components/UI/Modal/SpeakersModal";
import PromoCode from "@components/UI/Modal/PromoCode";

// @layouts
import NavbarTop from "@layouts/Navbar/NavbarTop";
import NavbarBottom from "@layouts/Navbar/NavbarBottom";
import About from "@layouts/About";
import Board from "@layouts/Board";
import Benefit from "@layouts/Benefit";
// import StartSpeakers from "@layouts/Speakers/start";
import Tickets from "@layouts/Tickets";
import Speakers from "@layouts/Speakers";
import Activist from "@layouts/Activist";
import NextSpeakers from "@layouts/Speakers/next";
import Partner from "@layouts/Partner";
import Testimonials from "@layouts/Testimonials";
import GetInvolved from "@layouts/GetInvolved";
import FAQ from "@layouts/FAQ";
// import SocialMentions from "@layouts/SocialMentions";
import BannerFooter from "@layouts/Banner/BannerFooter";
import Footer from "@layouts/Footer";

const Home = ({
  ipAddress,
  speaker,
  sponsor,
  mediaPartner,
  comunitiesPartner,
}) => {
  const [isSpeakers, setSpeakers] = useState(speaker);
  const [isSpeakersModal, setSpeakersModal] = useState(null);
  // const [isSocialMentions, setSocialMentions] = useState(socialMentions);

  // @import-smoothscroll(module)
  useEffect(() => {
    import("locomotive-scroll").then((locomotiveModule) => {
      const locoScroll = new locomotiveModule.default({
        smooth: true,
      });
    });

    return () => {
      undefined;
    };
  }, []);

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

  return (
    <>
      {/* @head */}
      <Head>
        <title>{`${publicRuntimeConfig.siteTitle}`}</title>
        <meta name="title" content={`${publicRuntimeConfig.siteTitle}`} />
        <meta name="description" content={publicRuntimeConfig.siteUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="og:title"
          content={`${publicRuntimeConfig.siteTitle}`}
        />
        <meta property="og:description" content={publicRuntimeConfig.siteUrl} />
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
          content={publicRuntimeConfig.siteUrl}
        />
        <meta
          property="twitter:image"
          content={`${process.env.NEXT_PUBLIC_UPLOAD}/uploads/ca2024_Thumbnails_Share_Link_App_9964b5c353.png`}
        />
      </Head>

      {/* @navbar(top) */}
      <NavbarTop />

      {/* @navbar(bottom) */}
      <NavbarBottom />

      {/* @main */}
      <main className="ca2024Main relative overflow-hidden">
        <section className="ca2024MainPoints ca2024HeaderPoints relative z-20 h-svh snap-start snap-always overflow-hidden bg-white">
          <h1>awda</h1>
        </section>

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
                  id={`mdlBtnSpeakers${gtRslt.attributes.name}`}
                  className="mdlBtnSpeakers outline-none focus-visible:outline-none"
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
          <div className="opacity-1 pointer-events-none absolute -bottom-[229px] -right-[203px] left-auto top-auto z-[6] select-none bg-transparent transition duration-[0.8s] ease-out sm:-bottom-[405px] sm:-right-[325px] lg:-right-[415px] 2xl:-bottom-[527px]">
            <Image
              className="z-10 mx-auto h-auto w-[471px] object-cover object-center sm:w-[771px] lg:w-[971px]"
              src={"/assets/images/backdrop/ca2024PointItems.png"}
              alt={`Coinfest Asia 2024 (Points Items Start Speakers)`}
              height={1635}
              width={958}
              quality="87"
            />
          </div>

          {/* @activist */}
          <Activist />

          {/* @next(speakers) */}
          <NextSpeakers />
        </SectionInnerSplit>

        {/* @partner */}
        <section className="ca2024MainPoints bg-white pb-[189px] pt-[140px] sm:pt-[174px]">
          <Partner
            isLayoutShow={true}
            dataSponsor={sponsor}
            dataMediaPartner={mediaPartner}
            dataComunitiesPartner={comunitiesPartner}
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

        {/* @promo-code(popup) */}
        <PromoCode />
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
    `/ca-24-sponsors?sort=rank:asc&populate=*&pagination[pageSize]=8`,
  );

  const isMediaPartner = await getFetch(
    `/ca-24-media-partners?sort=rank:asc&populate=*&pagination[pageSize]=15`,
  );

  const isComunitiesPartner = await getFetch(
    `/ca-24-communities?sort=rank:asc&populate=*&pagination[pageSize]=14`,
  );

  // const isSocialMentions = await getFetch(
  //   `/people-says?populate=*&pagination[pageSize]=100`,
  // );

  try {
    return {
      props: {
        ipAddress: isIpAddress || [],
        speaker: isSpeakers || [],
        sponsor: isSponsor || [],
        mediaPartner: isMediaPartner || [],
        comunitiesPartner: isComunitiesPartner || [],
        // socialMentions: isSocialMentions || [],
      },

      revalidate: 1800,
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
