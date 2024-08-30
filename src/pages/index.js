import React, { useState } from "react";
import getConfig from "next/config";
import Head from "next/head";

// @Get .config
const { publicRuntimeConfig } = getConfig();

// @Controller
import { getFetch } from "@lib/controller/Api";

// @Component's
import Main from "@components/Main";
import Container from "@components/Container";

// @Layout's
import Header from "@layouts/Header/Header";
import ChartInsights from "@layouts/ChartInsights";
import Highlight from "@layouts/Highlight";
import PastSpeakers from "@layouts/PastSpeakers";
import Testimonials from "@layouts/Testimonials";
import PrevSite from "@layouts/PrevCoinfestAsia";
import Partners from "@layouts/Partners";
import SocialMentions from "@layouts/SocialMentions";
import BannerEmail from "@layouts/Banner/EmailSubscribe";

const AppCoinfestAsia = (props) => {
  // @Schema (Website Application)
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

  // @Schema (Software Application)
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

  // Schema LOGO Webapplication
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
      {/* Head (Home) */}
      <Head>
        <title>{`${publicRuntimeConfig.siteTitle}`}</title>
        <meta name="title" content={`${publicRuntimeConfig.siteTitle}`} />
        <meta name="description" content={`${publicRuntimeConfig.siteDesc}`} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${publicRuntimeConfig.siteUrl}`} />
        <meta
          property="og:title"
          content={`${publicRuntimeConfig.siteTitle}`}
        />
        <meta
          property="og:description"
          content={`${publicRuntimeConfig.siteDesc}`}
        />
        <meta property="og:image" content="/assets/caThumbnailsApp.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`${publicRuntimeConfig.siteUrl}`}
        />
        <meta
          property="twitter:title"
          content={`${publicRuntimeConfig.siteTitle}`}
        />
        <meta
          property="twitter:description"
          content={`${publicRuntimeConfig.siteDesc}`}
        />
        <meta property="twitter:image" content="/assets/caThumbnailsApp.jpg" />
      </Head>

      {/* @Layout Header (App) */}
      <Header />

      <Main className="relative z-100">
        <Container className="relative">
          <section className="mt-10 lg:mt-18">
            <div className="flex flex-col items-start justify-start">
              <h2 className="text-black-800 font-bevietnamPro h2 font-bold uppercase">
                Coinfest Asia is{" "}
                <span className="italic sm:not-italic">NOT</span> a Traditional
                Conference
              </h2>
              <p className="text-black-400 body">
                Our unique concept at Coinfest Asia ensures memorable engagement
                and valuable insights every year.
              </p>
            </div>

            {/* @Layout Section (Chart Insights) */}
            <ChartInsights />
          </section>
        </Container>

        {/* @Layout Section (Highlight) */}
        <Highlight />

        {/* @Layout Section (Prev Sponsor) */}
        <Container>
          <PrevSite />
        </Container>

        {/* @Layout Section (Past Speakers) */}
        <PastSpeakers {...intSpeaker} />

        {/* @Layout Section (Testimonials) */}
        <Testimonials />

        <Container>
          {/* @Layout Section (Sponsor) */}
          <Partners {...intSponsorPartner} />

          {/* @Layout Section (PeopleSaying) */}
          {/* <SocialMentions {...intSocialMentions} /> */}
        </Container>

        {/* @Layout Section (Banner - Email Subscrbe) */}
        <BannerEmail />
      </Main>

      {/* @Modal (Subscribe) */}
      <div
        id="mdlSbscbeEmail"
        className="hs-overlay [--body-scroll:true] bg-black-900/[0.33] hidden fixed top-0 left-0 overflow-x-hidden overflow-y-auto h-full w-full z-base"
        data-hs-overlay-backdrop-container="#bckdrpModalActve"
      >
        <div className="flex items-center justify-center absolute top-0 bottom-0 sm:inset-y-0 inset-x-0 mt-8 hs-overlay-open:mt-0 mx-auto px-4 sm:px-0 w-full sm:max-w-[547px] opacity-0 hs-overlay-open:opacity-100 transition-all duration-300 ease-out">
          <div className="bg-white flex flex-col rounded-xl sm:rounded-[18px] text-center relative py-8 sm:py-14 px-7 sm:px-12">
            <button
              className="hs-dropdown-toggle outline-none absolute top-4.5 bottom-auto left-auto right-4"
              aria-labelledby="mdlSbscbeEmail"
              data-hs-overlay="#mdlSbscbeEmail"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <div className="flex flex-col text-center">
              <span className="text-black-900 text-[72px] leading-[80px]">
                🎉
              </span>
              <h2 className="text-black-900 font-bevietnamPro text-xl sm:text-2xl font-semibold mt-2 sm:mt-4">
                You're on the list!
              </h2>
              <p className="text-black-900 font-bevietnamPro text-sm sm:text-base font-medium mt-4">
                Thank you for your interest for Coinfest Asia. You will be the
                first to receive news and updates—including our special promo,
                for the upcoming Coinfest Asia.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* @Backdrop (Modal) */}
      <div id="bckdrpModalActve"></div>
    </>
  );
};

export default AppCoinfestAsia;

export const getStaticProps = async () => {
  const gCaSpeaker = await getFetch(
    `/speaker-generals?populate=*&pagination[pageSize]=100`
  );

  const gCaSponsorPartner = await getFetch(
    `/sponsor-generals?sort=rank:asc&populate=*&pagination[pageSize]=100`
  );

  const gCaSocialMentions = await getFetch(
    `/people-says?sort=rank:asc&populate=*&pagination[pageSize]=100`
  );

  try {
    return {
      props: {
        speaker: gCaSpeaker || [],
        sponsorPartner: gCaSponsorPartner || [],
        socialMentions: gCaSocialMentions || [],
      },

      revalidate: 10,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
