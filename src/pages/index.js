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
import SponsorshipBanner from "@layouts/SponsorshipBanner";
import Partners from "@layouts/Partners";
import SocialMentions from "@layouts/SocialMentions";
import FooterBanner from "@layouts/SponsorshipBanner";

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
        <meta property="og:image" content="/assets/caGeneral-Thumbnails.png" />

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
        <meta
          property="twitter:image"
          content="/assets/caGeneral-Thumbnails.png"
        />
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

        <SponsorshipBanner />

        {/* @Layout Section (Past Speakers) */}
        <PastSpeakers {...intSpeaker} />

        {/* @Layout Section (Testimonials) */}
        <Testimonials />

        <Container>
          {/* @Layout Section (Sponsor) */}
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
