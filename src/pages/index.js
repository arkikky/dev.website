import React, { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import getConfig from "next/config";
import Head from "next/head";

// @get .config
const { publicRuntimeConfig } = getConfig();

// @controller
import { getFetchUrl, getFetch } from "@lib/controller/API";

// @components
// import Container from "@components/Container";

// @layouts
import NavbarTop from "@layouts/Navbar/NavbarTop";
import Navbar from "@layouts/Navbar/Navbar";
const Header = dynamic(() => import("@layouts/Header"));
// import ChartInsights from "@layouts2024/ChartInsights";
// import ChartInsightStart from "@layouts2024/ChartInsights/start";
const ChartInsightStart = dynamic(() => import("@layouts/ChartInsights/start"));

import SpeakersStart from "@layouts/Speakers/start";
const DefaultSpeakers = dynamic(() => import("@layouts/Speakers/default"));
// import SpeakersNext from "@layouts/Speakers/next";
// import PartnersStart from "@layouts/Partners/start";
// import DefaultPartners from "@layouts/Partners/default";
// import DefaultTestimonials from "@layouts/Testimonials/default";
// import GetInvolvedStart from "@layouts/GetInvolved/start";
// import DefaultGetInvolved from "@layouts/GetInvolved/default";
// import SocialMentions from "@layouts/SocialMentions";
// import DefaultTicket from "@layouts/Ticket";
// import DefaultFAQ from "@layouts/FAQ/default";
// import BannerFooter from "@layouts/Banner/BannerFooter";
// import Footer from "@layouts/Footer";
import SpeakersModal from "@layouts/Modal/Speakers";
import NewsletterModal from "@layouts/Modal/Newsletter";

const Home = (props) => {
  const isMain = useRef(null);
  const [isIpAddress, setIpAddress] = useState(props.ipAddress);
  const [isSpeaker, setSpeaker] = useState(props.speaker);
  const [isSponsorPartner, setSponsorPartner] = useState(props.sponsorPartner);
  const [isSocialMentions, setSocialMentions] = useState(props.socialMentions);

  // @preline (Add Plugins)
  useEffect(() => {
    import("preline");

    return () => {
      undefined;
    };
  }, []);

  // @gsap
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   ScrollTrigger.defaults({
  //     markers: true,
  //   });

  //   return () => {
  //     undefined;
  //   };
  // }, []);

  useEffect(() => {
    const intBody = document.body;

    intBody.classList.add("overflow-y-hidden");
  }, []);

  return (
    <>
      {/* @Head */}
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

      {/* @navbar (top) */}
      <NavbarTop />

      {/* @navbar (bottom) */}
      {/* <Navbar /> */}

      {/* @main */}
      <div ref={isMain} className="ca2024Main approved overflow-x-hidden z-20">
        {/* @header */}
        <Header />

        {/* @chart-insight (start) */}
        {/* <ChartInsightStart /> */}

        {/* @char-insight */}
        {/* <ChartInsights /> */}
        {/* @benefit */}
        {/* <section className="ca2024SectionAuto bg-white snap-always snap-start ca2024Benefit relative pt-12 sm:pt-36 pb-34">
          <Benefit />
        </section> */}

        {/* @speakers (start) */}
        <SpeakersStart />

        {/* @speakers (default) */}
        {/* <DefaultSpeakers {...isSpeaker} /> */}

        {/* @speakers (next) */}
        {/* <SpeakersNext /> */}

        {/* @partners (start) */}
        {/* <PartnersStart /> /Hide */}

        {/* @partners (default) */}
        {/* <DefaultPartners {...isSponsorPartner} /> */}

        {/* @testimonials (default) */}
        {/* <DefaultTestimonials /> */}

        {/* @get-involved (default) */}
        {/* <DefaultGetInvolved /> */}

        {/* @social-mentions (default) */}
        {/* <SocialMentions {...isSocialMentions} /> */}

        {/* @ticket (default) */}
        {/* <DefaultTicket /> */}

        {/* @group */}
        {/* <div className="snap-always snap-start relative"> */}
          {/* @faq (default) */}
          {/* <DefaultFAQ /> */}

          {/* @banner-footer */}
          {/* <BannerFooter /> */}

          {/* @footer */}
          {/* <Footer /> */}
        {/* </div> */}
      </div>

      {/* @modal */}
      <SpeakersModal {...isSpeaker} />
      <NewsletterModal ipAddress={isIpAddress} />

      {/* @backdrop (modal) */}
      <div id="bckdrpModalActve"></div>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const gIpAddress = await getFetchUrl(`https://ipinfo.io/json`);

  const gCa2024Speaker = await getFetch(
    `/speaker-generals?sort=rank:asc&populate=*&pagination[pageSize]=100`
  );

  const gCa2024SponsorPartner = await getFetch(
    `/sponsor-generals?sort=rank:asc&populate=*&pagination[pageSize]=100`
  );

  const gCa2024SocialMentions = await getFetch(
    `/people-says?populate=*&pagination[pageSize]=100`
  );

  try {
    return {
      props: {
        ipAddress: gIpAddress || [],
        speaker: gCa2024Speaker || [],
        sponsorPartner: gCa2024SponsorPartner || [],
        socialMentions: gCa2024SocialMentions || [],
      },

      revalidate: 3600,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

//LGTM!
