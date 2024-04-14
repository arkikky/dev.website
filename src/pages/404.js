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

const NotFound = () => {
  return (
    <>
      {/* @head */}
      <Head>
        <title>{`Page Not Found! | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta
          name="title"
          content={`Page Not Found! | ${publicRuntimeConfig.siteTitle}`}
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
          content={`Page Not Found! | ${publicRuntimeConfig.siteTitle}`}
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
          content={`Page Not Found! | ${publicRuntimeConfig.siteTitle}`}
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
      <main className="fixed inset-x-0 inset-y-0 flex h-full max-h-svh min-h-svh w-full flex-col items-start justify-start bg-secondary pt-28 sm:pt-[183px] xl:items-center xl:justify-center xl:pt-0">
        {/* @background (backdrop) */}
        <div className="ca2024NextSpeakersBackdrop opacity-1 absolute inset-x-0 inset-y-0 z-px">
          <Image
            className={`mx-auto h-full w-full object-cover object-center`}
            src={"/assets/images/backdrop/background/ca2024BgBigLine.jpg"}
            alt={`Coinfest Asia 2024 (404 NotFound Background Backdrop)`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            height={900}
            width={1440}
            quality="87"
          />
        </div>

        {/* @background (404 Label Icons) */}
        <div className="absolute inset-x-0 bottom-[7%] left-0 top-auto z-px h-auto min-h-fit w-full sm:bottom-0 xl:inset-y-0 xl:-right-[156px] xl:left-auto xl:h-full xl:min-h-full xl:w-auto">
          <Image
            className="h-full w-full translate-x-[21px] rotate-[10deg] scale-[1.6] transform object-cover object-center sm:translate-x-0 sm:rotate-0 sm:scale-125 xl:w-auto xl:rotate-[14deg] xl:scale-105"
            src={"/assets/images/ca2024NotFound.png"}
            alt={`Coinfest Asia 2024 (404 NotFound Background 404 Label Icons)`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            height={1350}
            width={1524}
            quality="87"
          />
        </div>

        {/* @content */}
        <Container className="container relative z-10">
          <div className="flex w-full max-w-[661px] flex-col items-start text-start">
            <h1 className="flex flex-col pr-12 font-staraExtraBold text-[36px] font-bold uppercase leading-[44px] text-white sm:pr-0 sm:text-[58px] sm:leading-[74px] lg:text-[80px] lg:leading-[90px] xl:text-[72px] xl:leading-[80px] 2xl:text-[80px] 2xl:leading-[90px]">
              Whoops, that page is gone.
            </h1>
            <p className="mt-2 font-bevietnamPro text-base font-light text-[#E5ECFF] sm:text-lg xl:text-2xl">
              The page you are looking for doesn't exist or has been moved.
              Please go back to the homepage.
            </p>
            <Link
              id="btnNotFound"
              href="/"
              className="btnNotFound relative mt-6 inline-flex w-full max-w-max items-start justify-center rounded-[14px] bg-primary px-8 py-4 font-bevietnamPro text-sm font-normal text-black-900 outline-none focus-visible:outline-none sm:mt-10 sm:text-lg"
              aria-label="Button 404 Not Found"
              aria-labelledby="Button 404 Not Found"
            >
              Go back home
            </Link>
          </div>
        </Container>
      </main>
    </>
  );
};

export default NotFound;

NotFound.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
