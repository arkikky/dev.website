import React, { useEffect } from "react";
import getConfig from "next/config";
import Head from "next/head";

// @get .config
const { publicRuntimeConfig } = getConfig();

// @components
import GetInvolvedCard from "@components/UI/Card/GetInvolvedCard";
import PartnershipLayouts from "@layouts/PartnershipLayouts";

const GetInvolved = () => {
  useEffect(() => {
    const intBody = document.body;

    if (intBody.classList.contains("overflow-y-hidden")) {
      intBody.classList.remove("overflow-y-hidden");
    }

    return () => {
      undefined;
    };
  }, []);

  return (
    <>
      {/* @Head */}
      <Head>
        <title>{`Get Involved | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta
          name="title"
          content={`Get Involved | ${publicRuntimeConfig.siteTitle}`}
        />
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
          content={`Get Involved | ${publicRuntimeConfig.siteTitle}`}
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
          content={`Get Involved | ${publicRuntimeConfig.siteTitle}`}
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

      {/* @main */}
      <PartnershipLayouts>
        <div className="flex flex-col space-y-4 pb-[84px]">
          <GetInvolvedCard
            page={true}
            url="/sponsorship"
            btnColor="bg-secondary"
            title="Sponsors"
            shortDesc="Demonstrate your innovations and solutions in a seamless & measurable manner."
          />
          <GetInvolvedCard
            page={true}
            url="/speakers"
            btnColor="bg-[#1BA8AF]"
            title="Speak"
            shortDesc="Show and tell your impact-driven ideas, not just theories, on experiential stages."
          />
          {/* <GetInvolvedCard
                url=""
                btnColor="bg-secondary"
                title="Co-host a Side Event"
                shortDesc="Strategically position your brand to meet attendees that align with your goals."
              /> */}
          <GetInvolvedCard
            url="https://share.hsforms.com/18ZgO5E73Rj2WrxXXOoIXUwcjggg"
            btnColor="bg-[#D84B3D]"
            title="Partner as Media"
            shortDesc="Become the main source on the latest Web3 insights and updates in Asia."
          />
          <GetInvolvedCard
            page={true}
            url="/community"
            btnColor="bg-secondary"
            title="Partner as a Community"
            shortDesc="Connect with leading Web3 industry players, aspiring startups, and communities from 65+ countries."
          />
        </div>
      </PartnershipLayouts>
    </>
  );
};

export default GetInvolved;
