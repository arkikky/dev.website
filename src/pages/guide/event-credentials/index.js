import React from "react";
import getConfig from "next/config";
import Head from "next/head";
import Image from "next/image";

// @layouts
import GuideLayout from "@layouts/GuideLayout";

// @get .config
const { publicRuntimeConfig } = getConfig();

const EventCredentials = () => {
  return (
    <>
      {/* @head */}
      <Head>
        <title>{`Event Credentials | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta
          name="title"
          content={`Event Credentials | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta name="description" content={publicRuntimeConfig.siteDesc} />

        {/* @open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="og:title"
          content={`Event Credentials | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta
          property="og:description"
          content={publicRuntimeConfig.siteDesc}
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_UPLOAD}/uploads/ca2024_Thumbnails_Share_Link_App_9964b5c353.png`}
        />

        {/* @twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="twitter:title"
          content={`Event Credentials | ${publicRuntimeConfig.siteTitle}`}
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
      <GuideLayout
        title="Event Credentials"
        description="Lost or stolen credentials will not be replaced."
        className=""
      >
        <div className="flex flex-col sm:hidden">
          <Image
            className="w-full"
            src={"/assets/images/guide/ca2024FestWristbandMb.jpg"}
            width={375}
            height={839}
          />
          <Image
            className="w-full"
            src={"/assets/images/guide/ca2024NetWalletMb.jpg"}
            width={375}
            height={839}
          />
          <Image
            className="w-full"
            src={"/assets/images/guide/ca2024BullWristbandMb.jpg"}
            width={1042}
            height={839}
          />
        </div>
        <div className="hidden flex-col sm:flex">
          <Image
            className="w-full"
            src={"/assets/images/guide/ca2024FestWristband.jpg"}
            width={1042}
            height={839}
            quality="100"
          />
          <Image
            className="w-full"
            src={"/assets/images/guide/ca2024NetWallet.jpg"}
            width={1042}
            height={839}
            quality="100"
          />
          <Image
            className="w-full"
            src={"/assets/images/guide/ca2024BullWristband.png"}
            width={375}
            height={839}
            quality="100"
          />
        </div>
      </GuideLayout>
    </>
  );
};

export default EventCredentials;

EventCredentials.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
