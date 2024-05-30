import React from "react";
import getConfig from "next/config";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// @get .config
const { publicRuntimeConfig } = getConfig();

// @components
import Container from "@components/Container";
import AccomodationsCard from "@components/UI/Card/AccomodationsCard";
import BrandSponsorStatic from "@components/UI/Card/BrandSponsorStatic";

// @layouts
import BannerFooter from "@layouts/Banner/BannerFooter";

const Accomodations = () => {
  return (
    <>
      {/* @head */}
      <Head>
        <title>{`Accomodations | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta
          name="title"
          content={`Accomodations | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta name="description" content={publicRuntimeConfig.siteDesc} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="og:title"
          content={`Accomodations | ${publicRuntimeConfig.siteTitle}`}
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
          content={`Accomodations | ${publicRuntimeConfig.siteTitle}`}
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
            <div className="mr-auto flex w-full max-w-[629px] flex-col px-2.5 pb-18 text-start sm:px-0 sm:pb-20">
              <h1 className="w-full font-staraExtraBold text-[36px] uppercase leading-[38px] text-black-900 sm:text-[73px] sm:leading-[74px]">
                Travel to Bali{" "}
                <span className="text-secondary">Hassle-Free</span>
              </h1>
              <p className="mt-2 font-bevietnamPro text-base font-normal text-black-900">
                Pack your bags and get ready to feel the summer heat as Bali
                will be packed with global Web3 institutions & communities. Book
                your stay for Coinfest Asia and get special rates from our
                partners.
                <br></br>
                <br></br>
                Interest to take part in Coinfest Asia?
              </p>
              <Link
                className={`ca2024BgOverflayBlue relative mr-3 mt-7 inline-flex w-max cursor-pointer items-center justify-center rounded-[14px] bg-secondary  px-4 py-3.5 font-bevietnamPro text-sm font-medium text-white outline-none last:mr-0 focus-visible:outline-none sm:px-6 sm:py-6 sm:text-base`}
                title="Coinfest Asia 2024 (Become our partner - Accomodations)"
                href={
                  "mailto:andrea@indonesiacrypto.network?cc=partner@coinfest.asia&subject=Coinfest%20Asia%202024%20-%20Accommodation%20%26%20Travel%20Partner%20Inquiry&body=Hi%20Andrea%2C%0A%0AI%20would%20like%20to%20take%20part%20in%20Coinfest%20Asia%202024%20as%20accommodation%20%26%20travel%20partner.%20Please%20assist%20my%20inquiry%3A%0A%0AName%3A%20%0AType%20of%20Business%3A%20Hotel%2FAirlines%2FTransportation%2FTravel%2FOther%20(choose%20one)%0AWebsite%2FSocial%20Media%20link%3A%0A%0ABest%2C"
                }
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
          <div className="absolute bottom-auto left-auto right-0 top-[398px] z-[5] hidden h-[477px] w-auto sm:block lg:top-[308px] lg:h-[581px] xl:top-[138px] xl:h-[734px]">
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
              <div className="col-span-2 sm:col-span-6 lg:col-span-4 xl:col-span-3">
                <AccomodationsCard
                  images="/assets/images/accomodations/ca2024AyanaResort.jpg"
                  labelBrand="/assets/images/accomodations/ca2024Brand_AyanaResort.png"
                  diskon="15%"
                />
              </div>
              <div className="col-span-2 sm:col-span-6 lg:col-span-4 xl:col-span-3">
                <AccomodationsCard
                  images="/assets/images/accomodations/ca2024LeMeridien.jpg"
                  labelBrand="/assets/images/accomodations/ca2024Brand_LeMeridien.png"
                  diskon="25%"
                />
              </div>
              <div className="col-span-2 sm:col-span-6 lg:col-span-4 xl:col-span-3">
                <AccomodationsCard
                  images="/assets/images/accomodations/ca2024Intercontinetal.jpg"
                  labelBrand="/assets/images/accomodations/ca2024Brand_Intercontinetal.png"
                  diskon="15%"
                />
              </div>
              <div className="col-span-2 sm:col-span-6 lg:col-span-4 xl:col-span-3">
                <AccomodationsCard
                  images="/assets/images/accomodations/ca2024Vivara.jpg"
                  labelBrand="/assets/images/accomodations/ca2024Brand_Vivara.png"
                  diskon="35%"
                />
              </div>
              <div className="col-span-2 sm:col-span-6 lg:col-span-4 xl:col-span-3">
                <AccomodationsCard
                  images="/assets/images/accomodations/ca2024Citadines.jpg"
                  labelBrand="/assets/images/accomodations/ca2024Brand_Citadines.png"
                  diskon="35%"
                />
              </div>
              <div className="col-span-2 sm:col-span-6 lg:col-span-4 xl:col-span-3">
                <AccomodationsCard
                  images="/assets/images/accomodations/ca2024TheKomu.jpg"
                  labelBrand="/assets/images/accomodations/ca2024Brand_TheKomu.png"
                  diskon="35%"
                />
              </div>
            </div>
          </Container>
        </div>

        <div className="relative my-4 block bg-white py-8 sm:py-19">
          <Container>
            <div className="flex flex-col text-start">
              <h2 className="w-full font-staraExtraBold text-[32px] uppercase leading-[40px] text-black-900 sm:text-[40px] sm:leading-[48px]">
                Discounted Travel in bali with our transports partner
              </h2>
              <p className="mt-2 font-bevietnamPro text-sm font-light text-black-900 sm:text-xl">
                {`Get special offers by using “CoinfestASIA” from our partners!`}
              </p>
            </div>
            <div className="relative mt-8 min-w-full grid-cols-4 gap-x-2 gap-y-2 supports-grid:grid sm:grid-cols-12 lg:grid-cols-12 lg:gap-x-4 lg:gap-y-4">
              <div className="col-span-2 sm:col-span-4 lg:col-span-4">
                <BrandSponsorStatic
                  url="https://www.gojek.com/id-id"
                  name="GoJek"
                  brandLogo="/assets/images/accomodations/partners/ca2024GoJek.png"
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
        </div>

        <div className="relative block bg-white pt-6 sm:pt-0 xl:pt-10">
          {/* @banner-footer */}
          <BannerFooter />
        </div>
      </main>
    </>
  );
};

export default Accomodations;

export const getStaticProps = async () => {
  try {
    return {
      props: {},

      revalidate: 60,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
