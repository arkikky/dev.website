import React from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import getConfig from "next/config";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// @get .config
const { publicRuntimeConfig } = getConfig();

// @components
import Container from "@components/Container";
import BullPassCard from "@components/UI/Card/BullPassCard";

// @layouts
import BentoGridLayouts from "@layouts/BentoLayouts";

const BullPass = () => {
  gsap.registerPlugin(ScrollToPlugin);

  const isScrollToCard = (e) => {
    e.preventDefault();

    gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: "#ca2024BullPassContainer", offsetY: 140 },
      ease: "power2",
    });
  };

  return (
    <>
      {/* @head */}
      <Head>
        <title>{`Bull Pass | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta
          name="title"
          content={`Bull Pass | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta name="description" content={publicRuntimeConfig.siteDesc} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="og:title"
          content={`Bull Pass | ${publicRuntimeConfig.siteTitle}`}
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
          content={`Bull Pass | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta
          property="twitter:description"
          content={publicRuntimeConfig.siteDesc}
        />
        <meta
          property="twitter:image"
          content={`${process.env.NEXT_PUBLIC_UPLOAD}/uploads/ca2024_Thumbnails_Share_Link_App_9964b5c353.png`}
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      {/* @main */}
      <BentoGridLayouts>
        <main className="relative -mb-18 overflow-hidden pb-[208px] xl:pb-[265px]">
          <header className="ca2024BgLineBlack relative mx-2 mt-2 flex h-[796px] flex-col items-center justify-center overflow-hidden rounded-[20px] bg-[#2B2B2B] sm:mx-2.5 sm:mt-3.5 sm:rounded-[26px] lg:mx-5 lg:mt-5 lg:h-[770px]">
            {/* @points(flower) */}
            <div className="absolute -left-[18px] bottom-0 right-auto top-auto z-px h-[181px] w-auto sm:-left-10 sm:h-[329px] lg:left-0 lg:h-[406px] xl:h-[459px]">
              <Image
                className="mx-auto h-full w-auto object-cover object-center"
                src="/assets/images/backdrop/points/ca2024Points-BullPass-3.png"
                alt={`Coinfest Asia 2024 (Left Leaf)`}
                height={870}
                width={1028}
                quality="87"
              />
            </div>
            <div className="absolute -right-1.5 bottom-0 left-auto top-auto z-px h-[121px] w-auto sm:-right-[47px] sm:h-[219px] lg:right-0 lg:h-[283px] xl:h-[383px]">
              <Image
                className="mx-auto h-full w-auto object-cover object-center"
                src="/assets/images/backdrop/points/ca2024Points-BullPass-4.png"
                alt={`Coinfest Asia 2024 (Right Leaf)`}
                height={682}
                width={1017}
                quality="87"
              />
            </div>

            <div className="relative z-[5] mt-1.5 flex w-full max-w-full flex-col text-center sm:max-w-[571px] lg:max-w-[657px] xl:max-w-[1367px]">
              <span className="mx-auto mb-4 inline-flex w-max flex-row items-center justify-center rounded-full border border-solid border-white bg-white/[0.07] px-3 py-2 font-bevietnamPro text-sm font-light text-white sm:mb-6">
                Bull Pass
              </span>
              <h1 className="font-staraExtraBold text-[36px] uppercase leading-[40px] text-white sm:text-[48px] sm:leading-[60px]">
                Unlock the Ultimate VIP Experience
              </h1>
              <p className="mt-1 px-0 font-bevietnamPro text-base font-light text-white/80 lg:text-xl">
                Experience elite perks & premium services at Asia's largest Web3
                festival with Bull ticket
              </p>
              <div className="mx-auto mt-6 inline-flex w-full flex-col items-center justify-between px-4 sm:w-max sm:flex-row sm:px-0">
                <Link
                  className={`relative mb-2 mr-0 inline-flex w-full items-center justify-center rounded-[14px] bg-white px-4 py-4 font-bevietnamPro text-base font-normal text-black-900 outline-none last:mr-0 focus-visible:outline-none sm:mb-0 sm:mr-4 sm:w-max sm:px-6`}
                  href="https://ticket.coinfest.asia/?add-to-cart=3613"
                  target="_blank"
                >
                  Get bull pass
                </Link>
                <button
                  className={`relative inline-flex w-full items-center justify-center rounded-[14px] bg-transparent px-4 py-4 font-bevietnamPro text-base font-normal text-white outline-none last:mr-0 hover:underline focus-visible:outline-none sm:w-max sm:px-6`}
                  title="Coinfest Asia 2024 (Header BullPass)"
                  onClick={(e) => {
                    isScrollToCard(e);
                  }}
                >
                  Learn more about bull pass
                </button>
              </div>
            </div>
          </header>

          <div
            id="ca2024BullPassContainer"
            className="relative mt-12 flex flex-col"
          >
            <Container>
              <div className="flex flex-col">
                <h2 className="font-staraExtraBold text-[32px] uppercase leading-[38px] text-black-900">
                  Perks
                </h2>
              </div>
              <div className="mt-6 flex flex-col gap-x-6 gap-y-4 sm:gap-y-6">
                <div className="relative grid-cols-1 gap-x-4 gap-y-4 supports-grid:grid sm:grid-cols-10 sm:gap-x-6 sm:gap-y-6 lg:grid-rows-1">
                  <div className="col-span-full sm:col-span-5 sm:row-span-1 lg:row-span-2">
                    <BullPassCard
                      images="/assets/images/bull-pass/gallery/ca2024BentoGrid_BullPass1.jpg"
                      title="Dedicated registration lane"
                      shortDesc="Skip the lines and start your experience without the wait!"
                      height={1950}
                      width={1621}
                    />
                  </div>
                  <div className="col-span-full h-full sm:col-span-5 lg:h-[320px] xl:h-[450px]">
                    <BullPassCard
                      images="/assets/images/bull-pass/gallery/ca2024BentoGrid_BullPass2.jpg"
                      title="Bull Cave"
                      shortDesc="Exclusive access to private area with all speakers. Network and engage with industry leaders in a secluded & comfortable setting."
                      height={1275}
                      width={2053}
                    />
                  </div>
                  <div className="col-span-full hidden h-[201px] sm:col-span-1 lg:flex lg:flex-col">
                    <div className="h-full overflow-hidden rounded-2xl">
                      <Image
                        className="z-[5] mx-auto h-full w-full object-cover object-center"
                        src={
                          "/assets/images/bull-pass/ca2024BgBentoGrid-Pin.png"
                        }
                        alt={`Coinfest Asia 2024 (Bento Grid - Pin)`}
                        height={402}
                        width={241}
                      />
                    </div>
                  </div>
                  <div className="col-span-full sm:col-span-5 sm:row-span-1 lg:col-span-4 lg:row-span-2">
                    <BullPassCard
                      images="/assets/images/bull-pass/gallery/ca2024BentoGrid_BullPass4.jpg"
                      title="Limited Edition Cold Wallet"
                      shortDesc="Protect your investments with a high-quality, limited edition cold wallet provided by Carta"
                      height={1300}
                      width={1081}
                    />
                  </div>
                  <div className="col-span-full h-full sm:col-span-5 lg:col-span-6 lg:h-[320px] xl:h-[450px]">
                    <BullPassCard
                      images="/assets/images/bull-pass/gallery/ca2024BentoGrid_BullPass3.jpg"
                      title="Seamless Transportation"
                      shortDesc="Travel around the event with ease and convenience with dedicated buggies."
                      height={850}
                      width={1369}
                    />
                  </div>
                </div>
                <div className="relative grid-cols-1 gap-x-4 gap-y-4 supports-grid:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-6 lg:grid-cols-3">
                  <div className="col-span-full sm:col-span-1">
                    <BullPassCard
                      images="/assets/images/bull-pass/gallery/ca2024BentoGrid_BullPass5.jpg"
                      title="Private bull party"
                      shortDesc="Celebrate in style at the Private Bull Party with fellow Bull ticket holders and VIPs."
                      normal={true}
                      height={748}
                      width={801}
                    />
                  </div>
                  <div className="col-span-full sm:col-span-1">
                    <BullPassCard
                      images="/assets/images/bull-pass/gallery/ca2024BentoGrid_BullPass6.jpg"
                      title="Personalized Matchmaking"
                      shortDesc="Engage with top exhibitors and high-level executives tailored to your interests and goals."
                      normal={true}
                      height={748}
                      width={801}
                    />
                  </div>
                  <div className="col-span-full sm:col-span-1">
                    <BullPassCard
                      images="/assets/images/bull-pass/gallery/ca2024BentoGrid_BullPass7.jpg"
                      title="Premium Bar & Café"
                      shortDesc="Enjoy crafted beverages and personalized service in an exclusive lounge with private mixologist & barista"
                      normal={true}
                      height={748}
                      width={801}
                    />
                  </div>
                </div>
              </div>
            </Container>
          </div>

          {/* @banner */}
          <section className="relative flex flex-col pt-[84px]">
            <Container>
              <div className="relative mt-0 flex h-[453px] w-full flex-col items-start justify-start rounded-2xl bg-[#2B2B2B] px-6 py-8 sm:h-[593px] sm:rounded-[35px] sm:px-11 sm:py-10 lg:h-[533px] lg:justify-center lg:px-17 lg:py-10 xl:h-[614px]">
                <div className="absolute inset-x-0 inset-y-0 z-px overflow-hidden rounded-2xl sm:rounded-[35px]">
                  <Image
                    className="z-[5] mx-auto h-full w-full object-cover object-center"
                    src={
                      "/assets/images/backdrop/background/ca2024BgLineBullPassBanner.jpg"
                    }
                    alt={`Coinfest Asia 2024 (Background Footer Banner)`}
                    height={900}
                    width={1440}
                    quality="100"
                  />
                </div>

                {/* @statue-items (backdrop) */}
                <div className="absolute -right-2.5 bottom-[83px] left-auto top-auto z-[6] flex h-auto w-[168px] flex-col overflow-hidden bg-transparent sm:bottom-[140px] sm:right-11 sm:w-[228px] lg:bottom-auto lg:top-2 lg:w-[283px] xl:right-[101px] xl:top-0 xl:w-[364px]">
                  <Image
                    className="z-10 mx-auto mt-0 h-auto w-[561px] object-cover object-center sm:w-[771px] lg:w-full xl:-mt-17"
                    src={
                      "/assets/images/bull-pass/ca2024BullPass_SmallTicketBanner.png"
                    }
                    alt={`Coinfest Asia 2024 (BullPass Small Ticket Banner)`}
                    height={522}
                    width={493}
                    quality="87"
                  />
                </div>
                <div className="opacity-1 pointer-events-none absolute -bottom-[121px] -left-10 -right-[155px] top-auto z-[8] flex select-none bg-transparent transition duration-[1s] ease-out sm:-bottom-[178px] sm:-right-[185px] sm:left-auto lg:-bottom-[210px] lg:-right-[235px] xl:-bottom-[265px] xl:-right-[249px]">
                  <Image
                    className="z-10 mx-auto h-auto w-[561px] object-cover object-center sm:w-[811px] lg:w-[975px] xl:w-[1225px]"
                    src={"/assets/images/bull-pass/ca2024BullPass_Banner.png"}
                    alt={`Coinfest Asia 2024 (BullPass Ticket Banner)`}
                    height={1062}
                    width={1839}
                    quality="87"
                  />
                </div>

                <div className="relative z-10 flex w-full max-w-[444px] flex-col items-start justify-start">
                  <h2 className="font-staraExtraBold text-[40px] uppercase leading-[48px] text-white sm:text-[56px] sm:leading-[66px]">
                    Secure your Ultimate VIP Experience
                  </h2>
                  <div className="mt-4 flex w-full flex-col sm:mt-8 sm:w-max">
                    <Link
                      className="ca2024BgOverflayBullPass relative inline-flex w-full max-w-max items-center justify-center rounded-xl bg-primary px-4 py-4 font-bevietnamPro text-base font-medium text-white outline-none focus-visible:outline-none sm:rounded-[14px] sm:px-6 sm:py-6 sm:text-xl"
                      href="https://ticket.coinfest.asia/?add-to-cart=3613"
                      target="_blank"
                    >
                      Get bull pass
                    </Link>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        </main>
      </BentoGridLayouts>
    </>
  );
};

export default BullPass;

export const getStaticProps = async () => {
  try {
    return {
      props: {},

      revalidate: 3600,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

BullPass.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
