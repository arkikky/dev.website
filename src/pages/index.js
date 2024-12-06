import React, { useState } from "react";
import getConfig from "next/config";
import Head from "next/head";

// @get .config
const { publicRuntimeConfig } = getConfig();

// @lib/controller
import { getFetch } from "@lib/controller/Api";

// @components
import HeadGraphSeo from "@components/Head";
import Main from "@components/Main";
import Container from "@components/Container";

// @layouts
import Header from "@layouts/Header/Header";
import BoardInsights from "@layouts/BoardInsights";
import Highlight from "@layouts/Highlight";
import PastSpeakers from "@layouts/PastSpeakers";
import Testimonials from "@layouts/Testimonials";
import PrevSite from "@layouts/PrevCoinfestAsia";
// import SponsorshipBanner from "@layouts/SponsorshipBanner";
import Partners from "@layouts/Partners";
import SocialMentions from "@layouts/SocialMentions";
import FooterBanner from "@layouts/FooterBanner";

const App = (props) => {
  // @schema (Website Application)
  const schmaWebApp = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${publicRuntimeConfig.siteUrl}/#website`,
        url: `${publicRuntimeConfig.siteUrl}`,
        name: `${publicRuntimeConfig.siteAppName}`,
        alternateName: `${publicRuntimeConfig.siteAppName}`,
        description: `${publicRuntimeConfig.siteDesc}`,
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
        url: "https://hub.coinvestasi.com/uploads/thumbnail_ca_Thumbnails_App_4be5853875.jpg",
        width: 1200,
        height: 628,
        caption: `${publicRuntimeConfig.siteAppName}`,
      },
      {
        "@type": "WebPage",
        "@id": `${publicRuntimeConfig.siteUrl}/#webpage`,
        url: `${publicRuntimeConfig.siteUrl}`,
        name: `${publicRuntimeConfig.siteAppName}`,
        isPartOf: {
          "@id": `${publicRuntimeConfig.siteUrl}/#website`,
        },
        primaryImageOfPage: {
          "@id": `${publicRuntimeConfig.siteUrl}/#primaryimage`,
        },
        datePublished: "2023-07-16T09:45:42+00:00",
        dateModified: "2023-07-21T09:14:35+00:00",
        description: `${publicRuntimeConfig.siteDesc}`,
        inLanguage: "en-US",
      },
    ],
  };

  // @schema (Software Application)
  const schmaSoftwareApp = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${publicRuntimeConfig.siteAppName}`,
    operatingSystem: "Web-based",
    applicationCategory: "Event's",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "2022",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  // @schema (LOGO Web Application)
  const schmaLogoApp = {
    "@context": "https://schema.org",
    "@type": "Organization",
    url: `${publicRuntimeConfig.siteUrl}`,
    logo: "https://hub.coinvestasi.com/uploads/favicon_b7c4681ee2.png",
  };

  // Init
  const [intSpeaker, setSpeaker] = useState(props.speaker);
  const [intSponsorPartner, setSponsorPartner] = useState(props.sponsorPartner);
  const [intSocialMentions, setSocialMentions] = useState(props.socialMentions);

  return (
    <>
      {/* @head */}
      <HeadGraphSeo siteThunbnails={"/assets/caGeneral-Thumbnails.png"} />

      {/* @header (Layouts) */}
      <Header />

      {/* @main */}
      <Main className="relative z-100">
        <Container className="relative">
          <section className="mt-10 lg:mt-18">
            <div className="block w-full">
              <h1 className="text-black-900 text-[32px] sm:text-[46px] lg:text-[56px] leading-[42px] sm:leading-[62px] lg:leading-[70px] font-bold uppercase text-balance">
                {`THIS IS THE LARGEST CRYPTO FESTIVAL IN THE WORLD WHERE INNOVATION MEETS ADOPTION`}
              </h1>
              <p className="text-black-500 text-lg sm:text-xl font-normal mt-3">
                {`Our unique concept at Coinfest Asia ensures memorable engagement valuable insights every year.`}
              </p>
            </div>

            {/* @board */}
            <BoardInsights />
          </section>
        </Container>

        {/* @Layout Section (Highlight) */}
        <Highlight />

        {/* @prev-website */}
        <Container>
          <PrevSite />
        </Container>

        {/* @Layout Section (Past Speakers) */}
        <PastSpeakers {...intSpeaker} />

        {/* @Layout Section (Testimonials) */}
        <Testimonials />

        <Container>
          {/* @sponsor */}
          <Partners {...intSponsorPartner} />

          {/* @Layout Section (PeopleSaying) */}
          <SocialMentions {...intSocialMentions} />
        </Container>

        {/* @Layout Section (Banner - Email Subscrbe) */}
        <FooterBanner />
      </Main>
    </>
  );
};

export const getStaticProps = async () => {
  const [rsSpeakers, rsSponsorPartner, rsSocialMentions] = await Promise.all([
    getFetch(
      `/speaker-generals?populate=*&pagination[pageSize]=100&sort=rank:asc`
    ),
    getFetch(
      `/sponsor-generals?sort=rank:asc&populate=*&pagination[pageSize]=100`
    ),
    getFetch(`/people-says?sort=rank:asc&populate=*&pagination[pageSize]=100`),
  ]);

  try {
    return {
      props: {
        speaker: rsSpeakers || [],
        sponsorPartner: rsSponsorPartner || [],
        socialMentions: rsSocialMentions || [],
      },

      revalidate: 10,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

export default App;

// deploy
