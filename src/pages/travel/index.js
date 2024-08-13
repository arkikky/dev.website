import React, { useState } from "react";
import getConfig from "next/config";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// @get .config
const { publicRuntimeConfig } = getConfig();

// @lib
import { getFetchUrl, getFetch } from "@lib/controller/API";

// @components
import Container from "@components/Container";
import AccommodationsCard from "@components/UI/Card/AccommodationsCard";
import BrandSponsorStatic from "@components/UI/Card/BrandSponsorStatic";

// @layouts
import BannerFooter from "@layouts/Banner/BannerFooter";
import PromoCodeCard from "@components/UI/Card/PromoCodeCard";

const Travel = ({ travel }) => {
  const [isTravel, setTravel] = useState(travel);

  return (
    <>
      {/* @head */}
      <Head>
        <title>{`Travel Plans | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta
          name="title"
          content={`Travel Plans | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta name="description" content={publicRuntimeConfig.siteDesc} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="og:title"
          content={`Travel Plans | ${publicRuntimeConfig.siteTitle}`}
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
          content={`Travel Plans | ${publicRuntimeConfig.siteTitle}`}
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

      <main className="relative flex flex-col bg-[#F8EAD7]">
        <header className="relative h-full pt-[144px] sm:pt-[229px]">
          <Container className="relative z-[8]">
            <div className="mr-auto flex w-full max-w-[629px] flex-col px-2.5 pb-18 text-start sm:px-0 sm:pb-[99px]">
              <h1 className="w-full font-staraExtraBold text-[36px] uppercase leading-[38px] text-black-900 sm:text-[73px] sm:leading-[74px]">
                Travel to Bali{" "}
                <span className="text-secondary">Hassle-Free</span>
              </h1>
              <p className="mt-2 font-bevietnamPro text-base font-normal text-black-900">
                Pack your bags and get ready to feel the summer heat as Bali
                will be packed with global Web3 institutions & communities. Book
                your stay for Coinfest Asia and get special rates from our
                partners.
              </p>
              <Link
                className={`ca2024BgOverflayBlue relative mr-3 mt-7 inline-flex w-max cursor-pointer items-center justify-center rounded-[14px] bg-secondary  px-4 py-3.5 font-bevietnamPro text-sm font-medium text-white outline-none last:mr-0 focus-visible:outline-none sm:px-6 sm:py-6 sm:text-base`}
                title="Coinfest Asia 2024 (Become our partner - Accomodations)"
                href={
                  "mailto:andrea@indonesiacrypto.network?cc=partner@coinfest.asia&subject=Coinfest%20Asia%202024%20-%20Accommodation%20%26%20Travel%20Partner%20Inquiry&body=Hi%20Andrea%2C%0A%0AI%20would%20like%20to%20take%20part%20in%20Coinfest%20Asia%202024%20as%20accommodation%20%26%20travel%20partner.%20Please%20assist%20my%20inquiry%3A%0A%0AName%3A%20%0AType%20of%20Business%3A%20Hotel%2FAirlines%2FTransportation%2FTravel%2FOther%20(choose%20one)%0AWebsite%2FSocial%20Media%20link%3A%0A%0ABest%2C"
                }
                target="_blank"
              >
                Become our travel partners
              </Link>
            </div>

            {/* @backdrop(strip) */}
            <div className="absolute -bottom-[15px] left-0 right-0 top-auto hidden h-[29px] w-[310px] lg:block xl:-bottom-5 xl:h-[39px] xl:w-max">
              <Image
                className="h-full w-full object-cover object-center"
                src={"/assets/images/backdrop/ca2024StripLine.png"}
                alt={`Coinfest Asia 2024 (Backdrop Strip - Accomodations)`}
                height={59}
                width={630}
                quality="95"
              />
            </div>
          </Container>

          {/* @images(header - accomodations) */}
          <div className="absolute bottom-auto left-auto right-0 top-[398px] z-[5] hidden h-[477px] w-auto sm:block lg:top-[308px] lg:h-[581px] xl:top-[138px] xl:h-[714px]">
            <Image
              className="h-full w-auto object-cover object-center"
              src={"/assets/images/ca2024Accomodations.png"}
              alt={`Coinfest Asia 2024 (Header Accomodations)`}
              height={1102}
              width={1047}
              quality="87"
            />
          </div>

          {/* @backdrop(horizontal) */}
          <div className="relative z-[4] block h-[292px] w-full sm:h-[283px]">
            {/* @images(header mobile - accomodations) */}
            <div className="absolute inset-x-0 bottom-3.5 top-auto z-[5] block h-auto w-full sm:hidden">
              <Image
                className="h-full w-full object-cover object-center"
                src={"/assets/images/ca2024AccomodationsMobile.png"}
                alt={`Coinfest Asia 2024 (Header Mobile Accomodations)`}
                height={612}
                width={788}
                quality="87"
              />
            </div>

            {/* @backdrop(strip - mobile) */}
            <div className="absolute -bottom-[15px] left-0 right-0 top-auto z-[6] block h-[29px] w-[310px] lg:hidden lg:w-max">
              <Image
                className="h-full w-full object-cover object-center"
                src={"/assets/images/backdrop/ca2024StripLine.png"}
                alt={`Coinfest Asia 2024 (Backdrop Strip Mobile - Accomodations)`}
                height={59}
                width={630}
                quality="95"
              />
            </div>

            <Image
              className="h-full w-full object-cover object-center"
              src={
                "/assets/images/backdrop/background/ca2024BgHorizontalBlue.jpg"
              }
              alt={`Coinfest Asia 2024 (Backdrop Horizontal - Accomodations)`}
              height={668}
              width={2880}
              quality="95"
            />
          </div>
        </header>

        <div className="relative z-[15] mb-4 mt-0 block bg-white sm:-mt-[8.5%] lg:-mt-[6.5%]">
          <div className="relative grid-cols-4 supports-grid:grid sm:grid-cols-12 lg:grid-cols-12">
            <div className="col-span-full flex flex-col items-center justify-center py-20 sm:py-24 lg:col-span-6 lg:hidden lg:py-0">
              <Container>
                <div className="my-auto flex flex-col text-start">
                  <h2 className="w-full pr-10 font-staraExtraBold text-[40px] uppercase leading-[42px] text-black-900 sm:leading-[48px] lg:pr-20 lg:text-[32px] lg:leading-[40px] xl:pr-0 xl:text-[40px] xl:leading-[48px]">
                    Arrange Your Itinerary
                  </h2>
                  <p className="mt-2 font-bevietnamPro text-xl font-light text-black-900 lg:text-base xl:text-xl">
                    Enjoy $50 off your flights and hotel bookings with Travala
                    only for Coinfest Asia attendees.
                  </p>
                  <Link
                    className={`ca2024BgOverflayBlue relative mr-3 mt-5 inline-flex w-max cursor-pointer items-center justify-center rounded-[14px] bg-secondary px-4  py-3.5 font-bevietnamPro text-sm font-medium text-white outline-none last:mr-0 focus-visible:outline-none sm:mt-7 sm:px-6 sm:py-6 sm:text-base`}
                    title="Coinfest Asia 2024 (Claim $50 Travel Credits - Travel)"
                    href={
                      "https://www.travala.com/?utm_campaign=COINFESTASIA&utm_medium=by-partner-organic&utm_source=website&camp_name=COINFESTASIA&camp_offer=credit&camp_content=Sign-up-or-sign-in-to-receive-$50-in-Promo-Credits!-Get-limited-time-deals-on-hotels,-flights-and-activities-for-Coinfest-Asia-2024!&camp_code=COINFESTASIA&camp_value=50"
                    }
                    target="_blank"
                  >
                    Claim $50 Travel Credits
                  </Link>
                </div>
              </Container>
            </div>
            <div className="col-span-full lg:col-span-6 lg:col-start-7">
              <div className="bg-[#FD6F5A]">
                <Image
                  className="h-full w-full object-cover object-center"
                  src={"/assets/images/accomodations/ca2024Travala.jpg"}
                  alt={`Coinfest Asia 2024 (Travala Partners - Travel)`}
                  height={696}
                  width={1080}
                  quality="95"
                />
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 inset-y-0 z-10 hidden flex-col items-center justify-center lg:flex">
            <Container>
              <div className="relative grid-cols-4 supports-grid:grid sm:grid-cols-12 lg:grid-cols-12">
                <div className="col-span-full flex flex-col items-center justify-center py-20 sm:py-24 lg:col-span-5 lg:py-0">
                  <div className="my-auto flex flex-col text-start">
                    <h2 className="w-full pr-10 font-staraExtraBold text-[40px] uppercase leading-[42px] text-black-900 sm:leading-[48px] lg:pr-20 lg:text-[32px] lg:leading-[40px] xl:pr-0 xl:text-[40px] xl:leading-[48px]">
                      Arrange Your Itinerary
                    </h2>
                    <p className="mt-2 font-bevietnamPro text-xl font-light text-black-900 lg:text-base xl:text-xl">
                      Enjoy $50 off your flights and hotel bookings with Travala
                      only for Coinfest Asia attendees.
                    </p>
                    <Link
                      className={`ca2024BgOverflayBlue relative mr-3 mt-5 inline-flex w-max cursor-pointer items-center justify-center rounded-[14px] bg-secondary px-4  py-3.5 font-bevietnamPro text-sm font-medium text-white outline-none last:mr-0 focus-visible:outline-none sm:mt-7 sm:px-6 sm:py-6 sm:text-base`}
                      title="Coinfest Asia 2024 (Claim $50 Travel Credits - Accomodations)"
                      href={
                        "https://www.travala.com/?utm_campaign=COINFESTASIA&utm_medium=by-partner-organic&utm_source=website&camp_name=COINFESTASIA&camp_offer=credit&camp_content=Sign-up-or-sign-in-to-receive-$50-in-Promo-Credits!-Get-limited-time-deals-on-hotels,-flights-and-activities-for-Coinfest-Asia-2024!&camp_code=COINFESTASIA&camp_value=50"
                      }
                      target="_blank"
                    >
                      Claim $50 Travel Credit
                    </Link>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>

        <div className="relative block bg-white pb-8 pt-12 sm:py-19">
          <Container>
            <div className="flex flex-col text-start">
              <h2 className="w-full font-staraExtraBold text-[32px] uppercase leading-[40px] text-black-900 sm:text-[40px] sm:leading-[48px]">
                BOOK YOUR STAY
              </h2>
              <p className="mt-2 font-bevietnamPro text-sm font-light text-black-900 sm:text-xl">
                Get special offers by booking a room from our partners!
              </p>
            </div>
            <div className="relative mt-4 grid-cols-4 gap-x-2 gap-y-2 supports-grid:grid sm:mt-11 sm:grid-cols-12 sm:gap-x-4 sm:gap-y-4 lg:grid-cols-12">
              {isTravel.data?.map((gtRslt, i) => (
                <div className="col-span-2 sm:col-span-6 lg:col-span-4 xl:col-span-3">
                  <AccommodationsCard
                    url={
                      gtRslt.attributes.url !== "" ? gtRslt.attributes.url : ""
                    }
                    images={
                      process.env.NEXT_PUBLIC_UPLOAD +
                      gtRslt.attributes.thumbnail.data.attributes.url
                    }
                    labelBrand={
                      process.env.NEXT_PUBLIC_UPLOAD +
                      gtRslt.attributes.logo.data.attributes.url
                    }
                    diskon={gtRslt.attributes.label}
                  />
                </div>
              ))}
              <Link
                className="col-span-2 flex flex-col items-center justify-center bg-[url('/assets/images/accomodations/ca2024TravelSwap.jpg')] bg-cover bg-center sm:col-span-6 lg:col-span-8 xl:col-span-3"
                href="https://travelswap.xyz/partner/coinfest"
                target="_blank"
              >
                <span className="text-center font-bevietnamPro text-xs font-normal text-white sm:text-base">
                  See more deals at
                </span>
                <Image
                  className="mt-2 w-5/6 sm:mt-6 lg:w-2/3 xl:w-5/6"
                  src={"/assets/images/accomodations/ca2024TravelSwapLogo.svg"}
                  alt={`Coinfest Asia 2024 (Travel Swap - Accomodations)`}
                  height={77}
                  width={200}
                  quality="95"
                />
              </Link>
            </div>
          </Container>
        </div>

        {/* @Concierge Service - Beyond */}
        <div className="relative z-[15] mb-0 mt-4 block bg-white">
          <div className="relative grid-cols-4 supports-grid:grid sm:grid-cols-12 lg:grid-cols-12">
            <div className="col-span-full flex flex-col items-center justify-center py-20 sm:py-24 lg:col-span-6 lg:hidden lg:py-0">
              <Container>
                <div className="my-auto flex flex-col text-start">
                  <h2 className="w-full pr-10 font-staraExtraBold text-[40px] uppercase leading-[42px] text-black-900 sm:leading-[48px] lg:pr-20 lg:text-[32px] lg:leading-[40px] xl:pr-0 xl:text-[40px] xl:leading-[48px]">
                    Concierge Service
                  </h2>
                  <p className="mt-2 font-bevietnamPro text-xl font-light text-black-900 lg:text-base xl:text-xl">
                    Elevate your Coinfest Asia 2024 experience with BEYOND, our
                    official concierge service partner.
                  </p>
                  <Link
                    className={`ca2024BgOverflayBlue relative mr-3 mt-5 inline-flex w-max cursor-pointer items-center justify-center rounded-[14px] bg-secondary px-4  py-3.5 font-bevietnamPro text-sm font-medium text-white outline-none last:mr-0 focus-visible:outline-none sm:mt-7 sm:px-6 sm:py-6 sm:text-base`}
                    title="Coinfest Asia 2024 (Get special offers - Concierge Service)"
                    href={"https://t.me/BEYOND1_bot"}
                    target="_blank"
                  >
                    Get special offers
                  </Link>
                </div>
              </Container>
            </div>
            <div className="col-span-full lg:col-span-6">
              <div className="bg-[#10BCCA]">
                <Image
                  className="h-full w-full object-cover object-center"
                  src={"/assets/images/accomodations/ca2024Beyond.jpg"}
                  alt={`Coinfest Asia 2024 (Travala Partners - Concierge Service)`}
                  height={696}
                  width={1080}
                  quality="95"
                />
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 inset-y-0 z-10 hidden flex-col items-center justify-center lg:flex">
            <Container>
              <div className="relative grid-cols-4 text-end supports-grid:grid sm:grid-cols-12 lg:grid-cols-12">
                <div className="col-span-full flex flex-col items-center justify-center py-20 sm:py-24 lg:col-span-5 lg:col-end-13 lg:py-0">
                  <div className="my-auto flex flex-col justify-end text-start">
                    <h2 className="w-full pr-10 font-staraExtraBold text-[40px] uppercase leading-[42px] text-black-900 sm:leading-[48px] lg:pr-20 lg:text-[32px] lg:leading-[40px] xl:pr-0 xl:text-[40px] xl:leading-[48px]">
                      Concierge Service
                    </h2>
                    <p className="mt-2 font-bevietnamPro text-xl font-light text-black-900 lg:text-base xl:text-xl">
                      Elevate your Coinfest Asia 2024 experience with BEYOND,
                      our official concierge service partner.
                    </p>
                    <Link
                      className={`ca2024BgOverflayBlue relative mr-3 mt-5 inline-flex w-max cursor-pointer items-center justify-center rounded-[14px] bg-secondary px-4  py-3.5 font-bevietnamPro text-sm font-medium text-white outline-none last:mr-0 focus-visible:outline-none sm:mt-7 sm:px-6 sm:py-6 sm:text-base`}
                      title="Coinfest Asia 2024 (Get special offers - Concierge Service)"
                      href={"https://t.me/BEYOND1_bot"}
                      target="_blank"
                    >
                      Get special offers
                    </Link>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>

        {/* @E-SIM - Dent */}
        <div className="relative z-[15] mt-4 block bg-white">
          <div className="relative grid-cols-4 supports-grid:grid sm:grid-cols-12 lg:grid-cols-12">
            <div className="col-span-full flex flex-col items-center justify-center py-20 sm:py-24 lg:col-span-6 lg:hidden lg:py-0">
              <Container>
                <div className="my-auto flex flex-col text-start">
                  <h2 className="w-full pr-10 font-staraExtraBold text-[40px] uppercase leading-[42px] text-black-900 sm:leading-[48px] lg:pr-20 lg:text-[32px] lg:leading-[40px] xl:pr-0 xl:text-[40px] xl:leading-[48px]">
                    E-SIM
                  </h2>
                  <p className="mt-2 font-bevietnamPro text-xl font-light text-black-900 lg:text-base xl:text-xl">
                    No hustle bustle for your internet connection and get your
                    mobile data ready with our eSIM partner, DENT. The DENT App
                    is powered by DENTNet, DENT's Layer 1 blockchain.
                  </p>
                  <Link
                    className={`ca2024BgOverflayBlue relative mr-3 mt-5 inline-flex w-max cursor-pointer items-center justify-center rounded-[14px] bg-secondary px-4  py-3.5 font-bevietnamPro text-sm font-medium text-white outline-none last:mr-0 focus-visible:outline-none sm:mt-7 sm:px-6 sm:py-6 sm:text-base`}
                    title="Coinfest Asia 2024 (Get free 10GB data - E-SIM)"
                    href={"https://www.dent-app.com/?code=COINFEST24"}
                    target="_blank"
                  >
                    Get free 10GB data
                  </Link>
                </div>
              </Container>
            </div>
            <div className="col-span-full lg:col-span-6 lg:col-start-7">
              <div className="bg-secondary">
                <Image
                  className="h-full w-full object-cover object-center"
                  src={"/assets/images/accomodations/ca2024Dent.jpg"}
                  alt={`Coinfest Asia 2024 (Dent - E-SIM)`}
                  height={696}
                  width={1080}
                  quality="95"
                />
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 inset-y-0 z-10 hidden flex-col items-center justify-center lg:flex">
            <Container>
              <div className="relative grid-cols-4 supports-grid:grid sm:grid-cols-12 lg:grid-cols-12">
                <div className="col-span-full flex flex-col items-center justify-center py-20 sm:py-24 lg:col-span-5 lg:py-0">
                  <div className="my-auto flex flex-col text-start">
                    <h2 className="w-full pr-10 font-staraExtraBold text-[40px] uppercase leading-[42px] text-black-900 sm:leading-[48px] lg:pr-20 lg:text-[32px] lg:leading-[40px] xl:pr-0 xl:text-[40px] xl:leading-[48px]">
                      E-SIM
                    </h2>
                    <p className="mt-2 font-bevietnamPro text-xl font-light text-black-900 lg:text-base xl:text-xl">
                      No hustle bustle for your internet connection and get your
                      mobile data ready with our eSIM partner, DENT. The DENT
                      App is powered by DENTNet, DENT's Layer 1 blockchain.
                    </p>
                    <Link
                      className={`ca2024BgOverflayBlue relative mr-3 mt-5 inline-flex w-max cursor-pointer items-center justify-center rounded-[14px] bg-secondary px-4  py-3.5 font-bevietnamPro text-sm font-medium text-white outline-none last:mr-0 focus-visible:outline-none sm:mt-7 sm:px-6 sm:py-6 sm:text-base`}
                      title="Coinfest Asia 2024 (Get free 10GB data - E-SIM)"
                      href={"https://www.dent-app.com/?code=COINFEST24"}
                      target="_blank"
                    >
                      Get free 10GB data
                    </Link>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>

        {/* @Transportation - Gojek */}
        <div className="relative z-[15] mb-0 mt-4 block bg-white">
          <div className="relative grid-cols-4 supports-grid:grid sm:grid-cols-12 lg:grid-cols-12">
            <div className="col-span-full flex flex-col items-center justify-center py-20 sm:py-24 lg:col-span-6 lg:hidden lg:py-0">
              <Container>
                <div className="my-auto flex flex-col text-start">
                  <h2 className="w-full pr-10 font-staraExtraBold text-[36px] uppercase leading-[42px] text-black-900 sm:leading-[48px] lg:pr-20 lg:text-[32px] lg:leading-[40px] xl:pr-0 xl:text-[40px] xl:leading-[48px]">
                    Transportation
                  </h2>
                  <p className="mt-2 font-bevietnamPro text-xl font-light text-black-900 lg:text-base xl:text-xl">
                    Travel to Coinfest Asia’s main venue with special promo from our official transportation partner
                  </p>
                  <div className="flex flex-col gap-2 mt-6">
                    <PromoCodeCard
                      description="Use code to get 5k off to Nuanu City"
                      promoCode="GOCOINFESTCAR"
                    />
                    <PromoCodeCard
                      description="Use code to get 100k off from Ngurah Rai Airport"
                      promoCode="GOBANDARA"
                    />
                  </div>
                </div>
              </Container>
            </div>
            <div className="col-span-full lg:col-span-6">
              <div className="bg-[#2A2A2A]">
                <Image
                  className="h-full w-full object-cover object-center"
                  src={"/assets/images/accomodations/ca2024Gojek.jpg"}
                  alt={`Coinfest Asia 2024 (Gojek - Transportation)`}
                  height={696}
                  width={1080}
                  quality="95"
                />
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 inset-y-0 z-10 hidden flex-col items-center justify-center lg:flex">
            <Container>
              <div className="relative grid-cols-4 text-end supports-grid:grid sm:grid-cols-12 lg:grid-cols-12">
                <div className="col-span-full flex flex-col items-center justify-center py-20 sm:py-24 lg:col-span-5 lg:col-end-13 lg:py-0">
                  <div className="my-auto flex flex-col justify-end text-start">
                    <h2 className="w-full pr-10 font-staraExtraBold text-[40px] uppercase leading-[42px] text-black-900 sm:leading-[48px] lg:pr-20 lg:text-[32px] lg:leading-[40px] xl:pr-0 xl:text-[40px] xl:leading-[48px]">
                      Transportation
                    </h2>
                    <p className="mt-2 font-bevietnamPro text-xl font-light text-black-900 lg:text-base xl:text-xl">
                      Travel to Coinfest Asia’s main venue with special promo from our official transportation partner
                    </p>
                    <div className="flex flex-col gap-2 mt-6">
                      <PromoCodeCard
                        description="Use code to get 5k off to Nuanu City"
                        promoCode="GOCOINFESTCAR"
                      />
                      <PromoCodeCard
                        description="Use code to get 100k off from Ngurah Rai Airport"
                        promoCode="GOBANDARA"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>

        {/* <div className="relative my-4 block bg-white py-8 sm:py-19">
          <Container>
            <div className="flex flex-col text-start">
              <h2 className="w-full font-staraExtraBold text-[32px] uppercase leading-[40px] text-black-900 sm:text-[40px] sm:leading-[48px]">
                Discounted Travel in bali with our transports partner
              </h2>
              <p className="mt-2 font-bevietnamPro text-sm font-light text-black-900 sm:text-xl">
                {`Get Around Bali, Travel to Coinfest Asia main venue with special promo from our official transportation partners`}
              </p>
            </div>
            <div className="relative mt-8 min-w-full grid-cols-4 justify-center gap-x-2 gap-y-2 supports-grid:grid sm:grid-cols-12 lg:grid-cols-12 lg:gap-x-4 lg:gap-y-4">
              <div className="col-span-4 col-start-1 sm:col-span-4 sm:col-start-5 lg:col-span-4 lg:col-start-5">
                <BrandSponsorStatic
                  url="https://www.travala.com/?utm_campaign=COINFESTASIA&utm_medium=by-partner-organic&utm_source=website&camp_name=COINFESTASIA&camp_offer=credit&camp_content=Sign-up-or-sign-in-to-receive-$50-in-Promo-Credits!-Get-limited-time-deals-on-hotels,-flights-and-activities-for-Coinfest-Asia-2024!&camp_code=COINFESTASIA&camp_value=50"
                  name="Travala"
                  brandLogo="/assets/images/accomodations/partners/ca2024Travala.png"
                  vip={true}
                  height={100}
                  width={240}
                />
              </div>
              <div className="col-span-2 sm:col-span-4 lg:col-span-4">
                <BrandSponsorStatic
                  url="https://www.grab.com/id/"
                  name="Grab"
                  brandLogo="/assets/images/accomodations/partners/ca2024Grab.png"
                  vip={true}
                  height={100}
                  width={240}
                />
              </div>
              <div className="col-span-2 sm:col-span-4 lg:col-span-4">
                <BrandSponsorStatic
                  url="https://id.taximaxim.com/"
                  name="Maxim"
                  brandLogo="/assets/images/accomodations/partners/ca2024Maxim.png"
                  vip={true}
                  height={100}
                  width={240}
                />
              </div>
            </div>
          </Container>
        </div> */}

        <div className="relative mt-4 block bg-white pt-6 sm:pt-0 xl:pt-10">
          {/* @banner-footer */}
          <BannerFooter />
        </div>
      </main>
    </>
  );
};

export default Travel;

export const getStaticProps = async () => {
  const isTravel = await getFetch(
    `/ca-24-accomodations?sort=rank:asc&populate=*&pagination[pageSize]=100`,
  );

  try {
    return {
      props: {
        travel: isTravel || [],
      },

      revalidate: 900,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
