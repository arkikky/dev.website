import React, { useState } from "react";
import getConfig from "next/config";
import Head from "next/head";

// @get .config
const { publicRuntimeConfig } = getConfig();

// @lib
import { getFetchUrl, getFetch } from "@lib/controller/API";

// @layout
import NavbarTop from "@layouts/Navbar/NavbarTop";
import Header from "@layouts/Header";
import StartSpeakers from "@layouts/Speakers/start";
import Speakers from "@layouts/Speakers";
import EndSpeakers from "@layouts/Speakers/end";
import StartPartners from "@layouts/Partners/start";
import Partners from "@layouts/Partners";
import Tickets from "@layouts/Tickets";
import FAQ from "@layouts/FAQ";
import FooterBanner from "@layouts/Banner/FooterBanner";
import Footer from "@layouts/Footer";

const App = ({ ipAddress, speaker, sponsorPartner }) => {
  const [isSpeakers, setSpeakers] = useState(speaker);
  const [isSponsorPartner, setSponsorPartner] = useState(sponsorPartner);

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

      {/* @navbar-top */}
      <NavbarTop />

      <main className="ca2024Main ca2024MainMandatory approved overflow-x-hidden pt-0">
        {/* @header */}
        <Header />

        {/* @speakers (Start) */}
        <StartSpeakers />

        {/* @speakers */}
        <Speakers {...isSpeakers} />

        {/* @speakers (End) */}
        <EndSpeakers />

        {/* @partners (Start) */}
        <StartPartners />

        {/* @partners */}
        <Partners {...isSponsorPartner} />

        {/* @tickets */}
        <Tickets />

        <div className="snap-start snap-normal h-auto min-h-full">
          {/* @faq */}
          <FAQ />

          {/* @footer (banner) */}
          <FooterBanner />

          {/* @footer */}
          <Footer />
        </div>
      </main>
    </>
  );
};

export default App;

export const getStaticProps = async () => {
  const isIpAddress = await getFetchUrl(
    `https://ipinfo.io/json?token=135855871d1f46`
  );

  const isSpeaker = await getFetch(
    `/speaker-generals?sort=rank:asc&populate=*&pagination[pageSize]=100`
  );

  const isSponsorPartner = await getFetch(
    `/sponsor-generals?sort=rank:asc&populate=*&pagination[pageSize]=100`
  );

  // const gCa2024SocialMentions = await getFetch(
  //   `/people-says?populate=*&pagination[pageSize]=100`
  // );

  try {
    return {
      props: {
        ipAddress: isIpAddress || [],
        speaker: isSpeaker || [],
        sponsorPartner: isSponsorPartner || [],
        // socialMentions: gCa2024SocialMentions || [],
      },

      revalidate: 3600,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
