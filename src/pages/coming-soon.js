import React from "react";
import getConfig from "next/config";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// @get .config
const { publicRuntimeConfig } = getConfig();

// @components
import Container from "@components/Container";

// @layouts
import NavbarTop from "@layouts/Navbar/NavbarTop";
import NavbarBottom from "@layouts/Navbar/NavbarBottom";

const ComingSoon = () => {
  return (
    <>
      {/* @head */}
      <Head>
        <title>{`Page Coming Soon | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta
          name="title"
          content={`Page Coming Soon | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta name="description" content={publicRuntimeConfig.siteDesc} />

        {/* @open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="og:title"
          content={`Page Coming Soon | ${publicRuntimeConfig.siteTitle}`}
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
          content={`Page Coming Soon | ${publicRuntimeConfig.siteTitle}`}
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

      {/* @navbar(top) */}
      <NavbarTop />

      {/* @navbar(bottom) */}
      <NavbarBottom />

      {/* @main */}
      <main className="fixed inset-x-0 inset-y-0 flex h-full max-h-svh min-h-svh w-full flex-col items-start justify-start bg-secondary pt-28 sm:pt-[183px] xl:items-center xl:justify-center xl:pt-0">
        {/* @background (backdrop) */}
        <div className="ca2024NextSpeakersBackdrop opacity-1 absolute inset-x-0 inset-y-0 z-px">
          <Image
            className={`mx-auto h-full w-full object-cover object-center`}
            src={"/assets/images/backdrop/background/ca2024BgBigLine.jpg"}
            alt={`Coinfest Asia 2024 (Coming Soon Background Backdrop)`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            height={900}
            width={1440}
            quality="87"
          />
        </div>

        {/* @content */}
        <Container className="container relative z-10 h-[calc(100%-85px)] sm:h-auto text-center flex flex-col items-center justify-center gap-6 px-14">
          <div className="text-sm sm:text-base md:text-xl lg:text-2xl text-[#0135FD] bg-white px-3 py-2 rounded-full">Coming Soon</div>
          <Image
            className=""
            src={"/assets/images/ca2024BrandLogoWhite.png"}
            alt={`Coinfest Asia 2024 (Cooming Soon)`}
            height={170}
            width={549}
            quality="87"
          />
          <Link
            id="ca2024BtnComingSoon"
            href="/"
            className="btnComingSoon relative mt-6 inline-flex w-full max-w-max items-start justify-center rounded-[14px] bg-black-900 px-8 py-4 font-bevietnamPro text-sm font-normal text-white outline-none focus-visible:outline-none sm:mt-10 sm:text-lg"
            aria-label="Coinfest Asia 2024 (Button Coming Soon)"
            aria-labelledby="Coinfest Asia 2024 (Button Coming Soon)"
          >
            Go back home
          </Link>
        </Container>
      </main>
    </>
  );
};

export default ComingSoon;

ComingSoon.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
