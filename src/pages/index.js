import React, { useState, useEffect } from "react";
import getConfig from "next/config";
import Head from "next/head";

// @get .config
const { publicRuntimeConfig } = getConfig();

// @lib
import { getFetchUrl, getFetch } from "@lib/controller/API";

// @layouts
import NavbarTop from "@layouts/Navbar/NavbarTop";
import NavbarBottom from "@layouts/Navbar/NavbarBottom";
import About from "@layouts/About";
import Board from "@layouts/Board";
import StartSpeakers from "@layouts/Speakers/start";
import Tickets from "@layouts/Tickets";
import NextSpeakers from "@layouts/Speakers/next";
import Testimonials from "@layouts/Testimonials";
import GetInvolved from "@layouts/GetInvolved";
import FAQ from "@layouts/FAQ";
import SocialMentions from "@layouts/SocialMentions";
import BannerFooter from "@layouts/Banner/BannerFooter";
import Footer from "@layouts/Footer";

const Home = ({ ipAddress, speaker, sponsorPartner, socialMentions }) => {
  const [isIpAddress, setIpAddress] = useState(ipAddress);
  // const [isSpeakers, setSpeakers] = useState(speaker);
  // const [isSponsorPartner, setSponsorPartner] = useState(sponsorPartner);
  // const [isSocialMentions, setSocialMentions] = useState(socialMentions);

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
        <meta
          name="description"
          content={
            "Coinfest immerses you directly into adoption, innovation, and emerging markets in Asia. Join the immersive Web3 festival! Bali - August 2024"
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
            "Coinfest immerses you directly into adoption, innovation, and emerging markets in Asia. Join the immersive Web3 festival! Bali - August 2024"
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
            "Coinfest immerses you directly into adoption, innovation, and emerging markets in Asia. Join the immersive Web3 festival! Bali - August 2024"
          }
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

        {/* @board(chartinsights) */}
        <Board />

        {/* @start(speakers) */}
        <StartSpeakers />

        {/* @tickets */}
        <Tickets />

        {/* @fake */}
        <section className="ca2024MainPoints h-svh snap-start snap-always bg-white">
          <h2>awdawd</h2>
        </section>

        {/* @next(speakers) */}
        <NextSpeakers />

        {/* @fake */}
        <section className="ca2024MainPoints h-svh snap-start snap-always bg-white">
          <h2>awdawd</h2>
        </section>

        {/* @testimonials */}
        <Testimonials />

        {/* @get-involved */}
        <GetInvolved />

        {/* @social-mentions */}
        <SocialMentions />

        <div className="ca2024MainPoints ca2024EndMainPoints ca2024MainScreenAuto relative flex snap-start snap-always flex-col">
          <div className="flex flex-col">
            {/* @faq */}
            <FAQ />

            {/* @banner(footer) */}
            <BannerFooter />

            {/* @footer */}
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const isIpAddress = await getFetchUrl(
    `https://ipinfo.io/json?token=135855871d1f46`,
  );

  // const isSpeaker = await getFetch(
  //   `/speaker-generals?sort=rank:asc&populate=*&pagination[pageSize]=100`,
  // );

  // const isSponsorPartner = await getFetch(
  //   `/sponsor-generals?sort=rank:asc&populate=*&pagination[pageSize]=100`,
  // );

  // const isSocialMentions = await getFetch(
  //   `/people-says?populate=*&pagination[pageSize]=100`,
  // );

  try {
    return {
      props: {
        ipAddress: isIpAddress || [],
        // speaker: isSpeaker || [],
        // sponsorPartner: isSponsorPartner || [],
        // socialMentions: isSocialMentions || [],
      },

      revalidate: 1600,
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
