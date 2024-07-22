import React, { useEffect } from "react";
import getConfig from "next/config";
import Head from "next/head";

// @get .config
const { publicRuntimeConfig } = getConfig();

// @controller
import { getFetch } from "@lib/controller/API";

// @layouts
import Partner from "@layouts/Partner";
import BannerFooter from "@layouts/Banner/BannerFooter";

const Partners = ({
  sponsor,
  mediaPartner,
  comunitiesPartner,
  strategicPartners,
}) => {
  // @preline (Add Plugins)
  useEffect(() => {
    import("preline");

    return () => {
      undefined;
    };
  }, []);

  return (
    <>
      {/* @head */}
      <Head>
        <title>{`Partners | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta
          name="title"
          content={`Partners | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta name="description" content={publicRuntimeConfig.siteDesc} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="og:title"
          content={`Partners | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta
          property="og:description"
          content={publicRuntimeConfig.siteDesc}
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
          content={`Partners | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta
          property="twitter:description"
          content={publicRuntimeConfig.siteDesc}
        />
        <meta
          property="twitter:image"
          content={`${process.env.NEXT_PUBLIC_UPLOAD}/uploads/ca2024_Thumbnails_Share_Link_App_9964b5c353.png`}
        />
      </Head>

      {/* @main */}
      <main className="relative pt-[129px] xl:pt-[139px] 2xl:pt-[185px]">
        <Partner
          isPage={true}
          dataSponsor={sponsor}
          dataMediaPartner={mediaPartner}
          dataComunitiesPartner={comunitiesPartner}
          dataStrategicPartner={strategicPartners}
        />

        {/* @banner-footer */}
        <BannerFooter />
      </main>
    </>
  );
};

export default Partners;

export const getStaticProps = async () => {
  const isSponsor = await getFetch(
    `/ca-24-sponsors?sort=rank:asc&populate=*&pagination[pageSize]=100`,
  );

  const isMediaPartner1 = await getFetch(
    `/ca-24-media-partners?sort=rank:asc&populate=*&pagination[page]=1&pagination[pageSize]=100`,
  );
  const isMediaPartner2 = await getFetch(
    `/ca-24-media-partners?sort=rank:asc&populate=*&pagination[page]=2&pagination[pageSize]=100`,
  );

  const isComunitiesPartner1 = await getFetch(
    `/ca-24-communities?sort=rank:asc&populate=*&pagination[page]=1&pagination[pageSize]=100`,
  );
  const isComunitiesPartner2 = await getFetch(
    `/ca-24-communities?sort=rank:asc&populate=*&pagination[page]=2&pagination[pageSize]=100`,
  );

  const isStrategicPartners = await getFetch(
    `/ca24-strategic-partners?sort=rank:asc&populate=*&pagination[pageSize]=100`,
  );

  try {
    return {
      props: {
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

      revalidate: 900,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
