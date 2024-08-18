import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/dist/CustomEase";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import getConfig from "next/config";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

// @get .config
const { publicRuntimeConfig } = getConfig();

// @style-css
import "@splidejs/react-splide/css/core";

// @components
import Container from "@components/Container";
import CartaWalletMobile from "@components/UI/Card/CartaWalletMobile";
import CartaWalletContentMobile from "@components/UI/Card/CartaWalletContentMobile";

const CartaNetworkingWallet = () => {
  const rfMainSplde = useRef(null);
  const rfMainContentSplde = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(CustomEase);

    const tlCartaLeft = gsap.timeline({
      defaults: {
        duration: 0.6,
        ease: CustomEase.create("custom", "M0,0 C0.299,0 0.703,1 1,1 "),
      },
    });

    tlCartaLeft.to("#ca2024CartaItemsLeft", {
      rotate: "-6deg",
      translateX: "-58%",
    });

    const tlCartaRight = gsap.timeline({
      defaults: {
        duration: 0.6,
        ease: CustomEase.create("custom", "M0,0 C0.299,0 0.703,1 1,1 "),
      },
    });

    tlCartaRight.to("#ca2024CartaItemsRight", {
      rotate: "6deg",
      translateX: "58%",
    });

    return () => {
      tlCartaLeft.revert();
      tlCartaRight.revert();
    };
  }, []);

  // @benefit(slide on mobile)
  const btnPrev = (e) => {
    e.preventDefault();

    rfMainSplde.current.splide.go("<");
    rfMainContentSplde.current.splide.go("<");
  };
  const btnNext = (e) => {
    e.preventDefault();

    rfMainSplde.current.splide.go(">");
    rfMainContentSplde.current.splide.go(">");
  };

  return (
    <>
      {/* @head */}
      <Head>
        <title>{`Carta Networking Wallet | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta
          name="title"
          content={`Carta Networking Wallet | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta name="description" content={publicRuntimeConfig.siteDesc} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="og:title"
          content={`Carta Networking Wallet | ${publicRuntimeConfig.siteTitle}`}
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
          content={`Carta Networking Wallet | ${publicRuntimeConfig.siteTitle}`}
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

      <main className="relative -mb-18 overflow-hidden pb-[208px] pt-[159px] xl:pb-[265px] xl:pt-[159px] 2xl:pt-[205px]">
        <div className="z-px w-full">
          <div className="absolute -left-[45px] bottom-auto right-auto top-[329px] flex flex-col lg:-left-[65px] lg:top-[269px]">
            <Image
              className="mx-auto aspect-auto h-[128px] w-auto sm:h-[188px] lg:h-[268px]"
              src={"/assets/images/carta/ca2024CartaLeft.svg"}
              alt={`Coinfest Asia 2024 (Assets Left Carta)`}
              height={59}
              width={177}
              quality="87"
            />
          </div>
          <div className="absolute -right-[58px] -top-[16px] bottom-auto left-auto flex flex-col lg:-right-[58px] lg:-top-[52px]">
            <Image
              className="mx-auto aspect-auto h-[128px] w-auto sm:h-[188px] lg:h-[268px]"
              src={"/assets/images/carta/ca2024CartaRight.svg"}
              alt={`Coinfest Asia 2024 (Assets Right Carta)`}
              height={59}
              width={177}
              quality="87"
            />
          </div>
        </div>

        <Container id="ca2024CartaIContainerMobile">
          <div className="relative z-10 flex flex-col items-center justify-center text-center">
            <span
              className={`ca2024BgOverflayBlue relative mr-3 inline-flex w-max cursor-pointer items-center justify-center rounded-full bg-secondary px-4 py-2 font-bevietnamPro text-sm font-light text-white outline-none last:mr-0 focus-visible:outline-none sm:text-base`}
            >
              Carta Networking Wallet
            </span>
            <h1 className="mt-6 w-full font-staraExtraBold text-[36px] uppercase leading-[38px] text-black-900 sm:text-[73px] sm:leading-[74px]">
              THE NETWORKING WALLET
            </h1>
            <p className="font-lg mt-4 w-full max-w-full px-0 font-light text-[#5D5D5D] sm:px-12 lg:max-w-[959px]">
              Expand your professional circle and build meaningful relationships
              while engaging in various activities to earn points and stand a
              chance to win exciting prizes
            </p>
            <div className="mt-9 flex flex-row items-center space-x-2 sm:space-x-5">
              <Link
                href="https://apps.apple.com/sg/app/carta-wallet/id6461532698"
                target="_blank"
                className="w-max"
              >
                <Image
                  className="mx-auto aspect-auto h-[49px] w-auto"
                  src={"/assets/images/ca2024Download_AppStore.svg"}
                  alt={`Coinfest Asia 2024 (Download Button App Store)`}
                  height={59}
                  width={177}
                  quality="87"
                />
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.cartawallet.app"
                target="_blank"
                className="w-max"
              >
                <Image
                  className="mx-auto aspect-auto h-[49px] w-auto"
                  src={"/assets/images/ca2024Download_PlayStore.svg"}
                  alt={`Coinfest Asia 2024 (Download Button Play Store)`}
                  height={59}
                  width={177}
                  quality="87"
                />
              </Link>
            </div>
          </div>
        </Container>

        <div className="relative flex flex-col">
          <div className="relative mb-28 flex w-full flex-col">
            <div className="relative mx-auto mt-[88px] flex w-full max-w-max flex-col items-center justify-center text-center">
              <div className="absolute bottom-auto left-[7.7%] top-[33.5px] z-10 h-max w-max sm:left-[30.5px] sm:top-[64.5px]">
                <Image
                  className="h-[33px] w-[33px] overflow-hidden rounded-full sm:h-[62px] sm:w-[62px]"
                  src={
                    "/assets/images/carta/ca2024MobileProfile_CartaWallet.gif"
                  }
                  alt={`Coinfest Asia 2024 (Profile Carta Wallet)`}
                  height={120}
                  width={120}
                  quality="87"
                  unoptimized
                />
              </div>

              <div className="z-[6] mx-auto">
                <Image
                  className="mx-auto aspect-auto h-[445px] w-auto sm:h-[844px]"
                  src={"/assets/images/carta/ca2024Mobile_FirstCartaWallet.png"}
                  alt={`Coinfest Asia 2024 (First Carta Mobile)`}
                  height={1688}
                  width={780}
                  quality="87"
                />
              </div>
              <div
                id="ca2024CartaItemsLeft"
                className="absolute -bottom-[53px] left-auto right-0 top-auto z-[4] mx-auto"
              >
                <Image
                  className="mx-auto aspect-auto h-[445px] w-auto -rotate-[0deg] transform sm:h-[844px]"
                  src={"/assets/images/carta/ca2024Mobile_LeftCartaWallet.png"}
                  alt={`Coinfest Asia 2024 (Left Carta Mobile)`}
                  height={1688}
                  width={780}
                  quality="87"
                />
              </div>
              <div
                id="ca2024CartaItemsRight"
                className="absolute -bottom-[53px] left-0 right-auto top-auto z-[4] mx-auto"
              >
                <Image
                  className="mx-auto aspect-auto h-[445px] w-auto rotate-[6deg] transform sm:h-[844px]"
                  src={"/assets/images/carta/ca2024Mobile_RightCartaWallet.png"}
                  alt={`Coinfest Asia 2024 (Right Carta Mobile)`}
                  height={1688}
                  width={780}
                  quality="87"
                />
              </div>
            </div>

            <div className="ca2024CartaMobile_Shadow absolute inset-x-0 -bottom-[80px] top-auto z-[12] h-[443px] sm:h-[673px]"></div>
          </div>

          <Container>
            <div className="relative mt-28 hidden grid-cols-4 gap-x-2 gap-y-2 sm:grid-cols-12 lg:grid-cols-12 lg:supports-grid:grid">
              <div className="col-span-full lg:col-span-5 xl:col-span-6">
                <div className="flex flex-col items-start justify-start pr-0 pt-8 xl:pr-24">
                  <h2 className="text-left font-staraBold text-[32px] font-bold uppercase leading-[38px]">
                    How to use Carta Networking APP
                  </h2>
                </div>

                <nav
                  className="mt-10 flex w-full flex-col"
                  aria-label="Tabs"
                  role="tablist"
                >
                  <button
                    id={`ca2024SegmentCartaWalletStepTabs-item-1`}
                    type="button"
                    className={`active group overflow-hidden rounded-2xl bg-white px-6 py-6 text-base transition duration-300 ease-in-out hover:bg-secondary hs-tab-active:bg-secondary`}
                    data-hs-tab={`#ca2024SegmentCartaWalletStepTabs-1`}
                    aria-controls={`ca2024SegmentCartaWalletStepTabs-1`}
                    role="tab"
                  >
                    <span className="flex flex-col items-start justify-start">
                      <span className="text-sm font-light text-[#5A5A5A]/60 transition duration-300 ease-in-out group-hover:text-white/60 hs-tab-active:text-white/60">
                        Step 1
                      </span>
                      <span className="text-left text-base font-light text-[#474747] transition duration-300 ease-in-out group-hover:text-white hs-tab-active:text-white">
                        Download Carta in your Appstore/Playstore
                      </span>
                    </span>
                  </button>
                  <button
                    id={`ca2024SegmentCartaWalletStepTabs-item-2`}
                    type="button"
                    className={`group overflow-hidden rounded-2xl px-6 py-6 text-base transition duration-300 ease-in-out hover:bg-secondary hs-tab-active:bg-secondary`}
                    data-hs-tab={`#ca2024SegmentCartaWalletStepTabs-2`}
                    aria-controls={`ca2024SegmentCartaWalletStepTabs-2`}
                    role="tab"
                  >
                    <span className="flex flex-col items-start justify-start">
                      <span className="text-sm font-light text-[#5A5A5A]/60 transition duration-300 ease-in-out group-hover:text-white/60 hs-tab-active:text-white/60">
                        Step 2
                      </span>
                      <span className="text-left text-base font-light text-[#474747] transition duration-300 ease-in-out group-hover:text-white hs-tab-active:text-white">
                        Click “Setup” to start your Carta Apps
                      </span>
                    </span>
                  </button>
                  <button
                    id={`ca2024SegmentCartaWalletStepTabs-item-3`}
                    type="button"
                    className={`group overflow-hidden rounded-2xl px-6 py-6 text-base transition duration-300 ease-in-out hover:bg-secondary hs-tab-active:bg-secondary`}
                    data-hs-tab={`#ca2024SegmentCartaWalletStepTabs-3`}
                    aria-controls={`ca2024SegmentCartaWalletStepTabs-3`}
                    role="tab"
                  >
                    <span className="flex flex-col items-start justify-start">
                      <span className="text-sm font-light text-[#5A5A5A]/60 transition duration-300 ease-in-out group-hover:text-white/60 hs-tab-active:text-white/60">
                        Step 3
                      </span>
                      <span className="text-left text-base font-light text-[#474747] transition duration-300 ease-in-out group-hover:text-white hs-tab-active:text-white">
                        Scan your carta networking wallet to start the setup of
                        your Carta Apps
                      </span>
                    </span>
                  </button>
                  <button
                    id={`ca2024SegmentCartaWalletStepTabs-item-4`}
                    type="button"
                    className={`group overflow-hidden rounded-2xl px-6 py-6 text-base transition duration-300 ease-in-out hover:bg-secondary hs-tab-active:bg-secondary`}
                    data-hs-tab={`#ca2024SegmentCartaWalletStepTabs-4`}
                    aria-controls={`ca2024SegmentCartaWalletStepTabs-4`}
                    role="tab"
                  >
                    <span className="flex flex-col items-start justify-start">
                      <span className="text-sm font-light text-[#5A5A5A]/60 transition duration-300 ease-in-out group-hover:text-white/60 hs-tab-active:text-white/60">
                        Step 4
                      </span>
                      <span className="text-left text-base font-light text-[#474747] transition duration-300 ease-in-out group-hover:text-white hs-tab-active:text-white">
                        Setup your password
                      </span>
                    </span>
                  </button>
                  <button
                    id={`ca2024SegmentCartaWalletStepTabs-item-5`}
                    type="button"
                    className={`group overflow-hidden rounded-2xl px-6 py-6 text-base transition duration-300 ease-in-out hover:bg-secondary hs-tab-active:bg-secondary`}
                    data-hs-tab={`#ca2024SegmentCartaWalletStepTabs-5`}
                    aria-controls={`ca2024SegmentCartaWalletStepTabs-5`}
                    role="tab"
                  >
                    <span className="flex flex-col items-start justify-start">
                      <span className="text-sm font-light text-[#5A5A5A]/60 transition duration-300 ease-in-out group-hover:text-white/60 hs-tab-active:text-white/60">
                        Step 5
                      </span>
                      <span className="text-left text-base font-light text-[#474747] transition duration-300 ease-in-out group-hover:text-white hs-tab-active:text-white">
                        Scan your Carta networking wallet to secure your card to
                        your profile
                      </span>
                    </span>
                  </button>
                  <button
                    id={`ca2024SegmentCartaWalletStepTabs-item-6`}
                    type="button"
                    className={`group overflow-hidden rounded-2xl px-6 py-6 text-base transition duration-300 ease-in-out hover:bg-secondary hs-tab-active:bg-secondary`}
                    data-hs-tab={`#ca2024SegmentCartaWalletStepTabs-6`}
                    aria-controls={`ca2024SegmentCartaWalletStepTabs-6`}
                    role="tab"
                  >
                    <span className="flex flex-col items-start justify-start">
                      <span className="text-sm font-light text-[#5A5A5A]/60 transition duration-300 ease-in-out group-hover:text-white/60 hs-tab-active:text-white/60">
                        Step 6
                      </span>
                      <span className="text-left text-base font-light text-[#474747] transition duration-300 ease-in-out group-hover:text-white hs-tab-active:text-white">
                        Fill out your information
                      </span>
                    </span>
                  </button>
                  <button
                    id={`ca2024SegmentCartaWalletStepTabs-item-7`}
                    type="button"
                    className={`group overflow-hidden rounded-2xl px-6 py-6 text-base transition duration-300 ease-in-out hover:bg-secondary hs-tab-active:bg-secondary`}
                    data-hs-tab={`#ca2024SegmentCartaWalletStepTabs-7`}
                    aria-controls={`ca2024SegmentCartaWalletStepTabs-7`}
                    role="tab"
                  >
                    <span className="flex flex-col items-start justify-start">
                      <span className="text-sm font-light text-[#5A5A5A]/60 transition duration-300 ease-in-out group-hover:text-white/60 hs-tab-active:text-white/60">
                        Step 7
                      </span>
                      <span className="text-left text-base font-light text-[#474747] transition duration-300 ease-in-out group-hover:text-white hs-tab-active:text-white">
                        Start networking by tapping others networking wallet
                        into your Carta apps to gain more points
                      </span>
                    </span>
                  </button>
                </nav>
              </div>
              <div className="col-span-full pl-17 lg:col-span-7 xl:col-span-6">
                <div className="relative flex w-full flex-col lg:h-[826px] xl:h-[960px]">
                  <div className="z-[6] h-full w-full overflow-hidden rounded-3xl">
                    <Image
                      className="mx-auto h-full w-full"
                      src={
                        "/assets/images/carta/ca2024CartaWallet_FrameStep.png"
                      }
                      alt={`Coinfest Asia 2024 (Frame Mobile)`}
                      height={1920}
                      width={1184}
                      quality="87"
                    />
                  </div>

                  <div className="absolute inset-x-0 inset-y-0 z-px px-[83px] py-[49px] xl:px-[98px] xl:py-[57px]">
                    <div
                      id={`ca2024SegmentCartaWalletStepTabs-1`}
                      className="h-full"
                      role="tabpanel"
                      aria-labelledby={`ca2024SegmentCartaWalletStepTabs-item-1`}
                    >
                      <Image
                        className="mx-auto h-full w-full"
                        src={
                          "/assets/images/carta/step/ca2024CartaWallet_Step01.png"
                        }
                        alt={`Coinfest Asia 2024 (Step 1 - Carta Wallet)`}
                        height={3799}
                        width={1755}
                        quality="87"
                      />
                    </div>
                    <div
                      id={`ca2024SegmentCartaWalletStepTabs-2`}
                      className="hidden h-full"
                      role="tabpanel"
                      aria-labelledby={`ca2024SegmentCartaWalletStepTabs-item-2`}
                    >
                      <Image
                        className="mx-auto h-full w-full"
                        src={
                          "/assets/images/carta/step/ca2024CartaWallet_Step02.png"
                        }
                        alt={`Coinfest Asia 2024 (Step 2 - Carta Wallet)`}
                        height={3799}
                        width={1755}
                        quality="87"
                      />
                    </div>
                    <div
                      id={`ca2024SegmentCartaWalletStepTabs-3`}
                      className="hidden h-full"
                      role="tabpanel"
                      aria-labelledby={`ca2024SegmentCartaWalletStepTabs-item-3`}
                    >
                      <Image
                        className="mx-auto h-full w-full"
                        src={
                          "/assets/images/carta/step/ca2024CartaWallet_Step03.png"
                        }
                        alt={`Coinfest Asia 2024 (Step 3 - Carta Wallet)`}
                        height={3799}
                        width={1755}
                        quality="87"
                      />
                    </div>
                    <div
                      id={`ca2024SegmentCartaWalletStepTabs-4`}
                      className="hidden h-full"
                      role="tabpanel"
                      aria-labelledby={`ca2024SegmentCartaWalletStepTabs-item-4`}
                    >
                      <Image
                        className="mx-auto h-full w-full"
                        src={
                          "/assets/images/carta/step/ca2024CartaWallet_Step04.png"
                        }
                        alt={`Coinfest Asia 2024 (Step 4 - Carta Wallet)`}
                        height={3799}
                        width={1755}
                        quality="87"
                      />
                    </div>
                    <div
                      id={`ca2024SegmentCartaWalletStepTabs-5`}
                      className="hidden h-full"
                      role="tabpanel"
                      aria-labelledby={`ca2024SegmentCartaWalletStepTabs-item-5`}
                    >
                      <Image
                        className="mx-auto h-full w-full"
                        src={
                          "/assets/images/carta/step/ca2024CartaWallet_Step05.png"
                        }
                        alt={`Coinfest Asia 2024 (Step 5 - Carta Wallet)`}
                        height={3799}
                        width={1755}
                        quality="87"
                      />
                    </div>
                    <div
                      id={`ca2024SegmentCartaWalletStepTabs-6`}
                      className="hidden h-full"
                      role="tabpanel"
                      aria-labelledby={`ca2024SegmentCartaWalletStepTabs-item-6`}
                    >
                      <Image
                        className="mx-auto h-full w-full"
                        src={
                          "/assets/images/carta/step/ca2024CartaWallet_Step06.png"
                        }
                        alt={`Coinfest Asia 2024 (Step 6 - Carta Wallet)`}
                        height={3799}
                        width={1755}
                        quality="87"
                      />
                    </div>
                    <div
                      id={`ca2024SegmentCartaWalletStepTabs-7`}
                      className="hidden h-full"
                      role="tabpanel"
                      aria-labelledby={`ca2024SegmentCartaWalletStepTabs-item-7`}
                    >
                      <Image
                        className="mx-auto h-full w-full"
                        src={
                          "/assets/images/carta/step/ca2024CartaWallet_Step07.png"
                        }
                        alt={`Coinfest Asia 2024 (Step 7 - Carta Wallet)`}
                        height={3799}
                        width={1755}
                        quality="87"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* @mobile */}
            <div className="flex flex-col lg:hidden">
              <div className="relative flex w-full flex-col lg:h-[826px] xl:h-[960px]">
                <div className="z-[6] h-full w-full overflow-hidden rounded-3xl">
                  <Image
                    className="mx-auto h-full w-full"
                    src={"/assets/images/carta/ca2024CartaWallet_FrameStep.png"}
                    alt={`Coinfest Asia 2024 (Frame Mobile)`}
                    height={1920}
                    width={1184}
                    quality="87"
                  />
                </div>

                <div className="absolute inset-x-0 inset-y-0 z-px px-[16.5%] py-[9.5%] sm:px-[16.7%] lg:px-[122px] lg:py-[67px]">
                  <Splide
                    ref={(slider) => (rfMainSplde.current = slider)}
                    tag="section"
                    id="ca2024CartaSlider"
                    label="Coinfest Asia 2024 (Carta Slider)"
                    aria-label="Coinfest Asia 2024 (Carta Slider)"
                    options={{
                      updateOnMove: true,
                      type: "fade",
                      lazyLoad: "nearby",
                      keyboard: true,
                      arrows: false,
                      perPage: 1,
                      perMove: 1,
                      pagination: false,
                      gap: "16px",
                      width: "100%",
                    }}
                    onMounted={(splide, prev, next) => {
                      const prevButton = document.getElementById(
                        "btnPrevCartaWallets",
                      );

                      if (splide.index === 0) {
                        prevButton.classList.add("opacity-0");
                      } else {
                        prevButton.classList.add("opacity-100");
                      }
                    }}
                    onMoved={(splide, prev, next) => {
                      const prevButton = document.getElementById(
                        "btnPrevCartaWallets",
                      );
                      const nextButton = document.getElementById(
                        "btnNextCartaWallets",
                      );

                      if (prev <= 0) {
                        prevButton.classList.remove("opacity-100");
                        prevButton.classList.add("opacity-0");
                      } else if (prev >= 1) {
                        prevButton.classList.add("opacity-100");
                      } else {
                        prevButton.classList.add("opacity-0");
                      }

                      if (prev >= 6) {
                        nextButton.classList.remove("opacity-100");
                        nextButton.classList.add("opacity-0");
                      } else {
                        nextButton.classList.add("opacity-100");
                      }
                    }}
                    className="w-full"
                  >
                    <SplideSlide className="w-full text-black-900">
                      <CartaWalletMobile
                        url="/assets/images/carta/step/ca2024CartaWallet_Step01.png"
                        number="1"
                        shortDesc="Download Carta in your Appstore/Playstore"
                      />
                    </SplideSlide>
                    <SplideSlide className="w-full text-black-900">
                      <CartaWalletMobile
                        url="/assets/images/carta/step/ca2024CartaWallet_Step02.png"
                        number="2"
                        shortDesc="Click “Setup” to start your Carta Apps"
                      />
                    </SplideSlide>
                    <SplideSlide className="w-full text-black-900">
                      <CartaWalletMobile
                        url="/assets/images/carta/step/ca2024CartaWallet_Step03.png"
                        number="3"
                        shortDesc="Scan your carta networking wallet to start the setup of your Carta Apps"
                      />
                    </SplideSlide>
                    <SplideSlide className="w-full text-black-900">
                      <CartaWalletMobile
                        url="/assets/images/carta/step/ca2024CartaWallet_Step04.png"
                        number="4"
                        shortDesc="Setup your password"
                      />
                    </SplideSlide>
                    <SplideSlide className="w-full text-black-900">
                      <CartaWalletMobile
                        url="/assets/images/carta/step/ca2024CartaWallet_Step05.png"
                        number="5"
                        shortDesc="Scan your Carta networking wallet to secure your card to your profile"
                      />
                    </SplideSlide>
                    <SplideSlide className="w-full text-black-900">
                      <CartaWalletMobile
                        url="/assets/images/carta/step/ca2024CartaWallet_Step06.png"
                        number="6"
                        shortDesc="Fill out your information"
                      />
                    </SplideSlide>
                    <SplideSlide className="w-full text-black-900">
                      <CartaWalletMobile
                        url="/assets/images/carta/step/ca2024CartaWallet_Step07.png"
                        number="7"
                        shortDesc="Start networking by tapping others networking wallet into your Carta apps to gain more points"
                      />
                    </SplideSlide>
                  </Splide>
                </div>
              </div>

              <div className="mt-2.5 flex h-auto w-full flex-col overflow-hidden rounded-2xl bg-secondary">
                <Splide
                  ref={(slider) => (rfMainContentSplde.current = slider)}
                  tag="section"
                  id="ca2024CartaContentSlider"
                  label="Coinfest Asia 2024 (Carta Content Slider)"
                  aria-label="Coinfest Asia 2024 (Carta Content Slider)"
                  options={{
                    updateOnMove: true,
                    type: "fade",
                    lazyLoad: "nearby",
                    keyboard: true,
                    arrows: false,
                    perPage: 1,
                    perMove: 1,
                    pagination: false,
                    gap: "16px",
                    width: "100%",
                    height: "auto",
                  }}
                  onMounted={(splide, prev, next) => {
                    const prevButton = document.getElementById(
                      "btnPrevCartaWallets",
                    );

                    if (splide.index === 0) {
                      prevButton.classList.add("opacity-0");
                    } else {
                      prevButton.classList.add("opacity-100");
                    }
                  }}
                  onMoved={(splide, prev, next) => {
                    const prevButton = document.getElementById(
                      "btnPrevCartaWallets",
                    );
                    const nextButton = document.getElementById(
                      "btnNextCartaWallets",
                    );

                    if (prev <= 0) {
                      prevButton.classList.remove("opacity-100");
                      prevButton.classList.add("opacity-0");
                    } else if (prev >= 1) {
                      prevButton.classList.add("opacity-100");
                    } else {
                      prevButton.classList.add("opacity-0");
                    }

                    if (prev >= 6) {
                      nextButton.classList.remove("opacity-100");
                      nextButton.classList.add("opacity-0");
                    } else {
                      nextButton.classList.add("opacity-100");
                    }
                  }}
                  className="relative h-max w-full"
                >
                  <SplideSlide className="w-full text-black-900">
                    <CartaWalletContentMobile
                      number={1}
                      shortDesc={"Download Carta in your Appstore/Playstore"}
                    />
                  </SplideSlide>
                  <SplideSlide className="w-full text-black-900">
                    <CartaWalletContentMobile
                      number={2}
                      shortDesc={"Click “Setup” to start your Carta Apps"}
                    />
                  </SplideSlide>
                  <SplideSlide className="w-full text-black-900">
                    <CartaWalletContentMobile
                      number={3}
                      shortDesc={
                        "Scan your carta networking wallet to start the setup of your Carta Apps"
                      }
                    />
                  </SplideSlide>
                  <SplideSlide className="w-full text-black-900">
                    <CartaWalletContentMobile
                      number={4}
                      shortDesc={"Setup your password"}
                    />
                  </SplideSlide>
                  <SplideSlide className="w-full text-black-900">
                    <CartaWalletContentMobile
                      number={5}
                      shortDesc={
                        "Scan your Carta networking wallet to secure your card to your profile"
                      }
                    />
                  </SplideSlide>
                  <SplideSlide className="w-full text-black-900">
                    <CartaWalletContentMobile
                      number={6}
                      shortDesc={"Fill out your information"}
                    />
                  </SplideSlide>
                  <SplideSlide className="w-full text-black-900">
                    <CartaWalletContentMobile
                      number={7}
                      shortDesc={
                        "Start networking by tapping others networking wallet into your Carta apps to gain more points"
                      }
                    />
                  </SplideSlide>
                </Splide>
              </div>

              <div className="inline-flex w-full flex-row items-start">
                <button
                  id="btnPrevCartaWallets"
                  className="group relative flex h-[75px] w-fill flex-col items-start justify-center bg-transparent pl-6 outline-none transition duration-300 ease-in-out first:ml-0 focus:outline-none"
                  aria-label="Button Prev Benefit"
                  onClick={(e) => btnPrev(e)}
                >
                  <div className="flex flex-row items-center space-x-2 text-black-900 transition duration-300 ease-in-out group-hover:text-secondary">
                    <svg
                      className="h-6 w-6 stroke-current text-black-900 transition duration-300 ease-in-out group-hover:text-secondary"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.33398 12L3.66732 8.5L7.33398 5"
                        strokeWidth="0.9375"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.83398 8.5H13.334"
                        strokeWidth="0.9375"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-sm font-normal">Prev</span>
                  </div>
                  <span className="text-sm font-light text-[#7B7B7B]">
                    Belonging
                  </span>
                </button>
                <button
                  id="btnNextCartaWallets"
                  className="group relative flex h-[75px] w-fill flex-col items-end justify-center bg-transparent pr-6 outline-none first:ml-0 focus:outline-none"
                  aria-label="Button Right Benefit"
                  onClick={(e) => btnNext(e)}
                >
                  <div className="flex flex-row items-center space-x-2 text-black-900 transition duration-300 ease-in-out group-hover:text-secondary">
                    <span className="text-sm font-normal">Next</span>
                    <svg
                      className="h-6 w-6 stroke-current text-black-900 transition duration-300 ease-in-out group-hover:text-secondary"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.66602 5L13.3327 8.5L9.66602 12"
                        strokeWidth="0.9375"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.166 8.5H3.66602"
                        strokeWidth="0.9375"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-light text-[#7B7B7B]">
                    Tap your card
                  </span>
                </button>
              </div>
            </div>
          </Container>
        </div>

        {/* @banner-footer */}
        <section className="relative flex flex-col pt-[84px]">
          <Container>
            <div className="relative mt-0 flex h-[513px] w-full flex-col items-start justify-start rounded-2xl bg-[#2B2B2B] px-6 py-8 sm:h-[593px] sm:rounded-[35px] sm:px-11 sm:py-10 lg:h-[533px] lg:justify-center lg:px-17 lg:py-10 xl:h-[614px]">
              <div className="absolute inset-x-0 inset-y-0 z-px overflow-hidden rounded-2xl sm:rounded-[35px]">
                <Image
                  className="z-[5] mx-auto h-full w-full object-cover object-center"
                  src={
                    "/assets/images/backdrop/background/ca2024BgLineBlackBanner.jpg"
                  }
                  alt={`Coinfest Asia 2024 (Background Footer Banner)`}
                  height={900}
                  width={1440}
                  quality="100"
                />
              </div>

              {/* @statue-items (backdrop) */}
              <div className="absolute bottom-[83px] left-auto right-[30px] top-auto z-[6] flex h-auto w-[138px] flex-col overflow-hidden bg-transparent sm:bottom-[140px] sm:right-[17px] sm:w-[228px] lg:bottom-auto lg:top-[82px] lg:w-[223px] xl:right-[101px] xl:top-0 xl:w-[364px]">
                <Image
                  className="z-10 mx-auto mt-0 h-auto w-[561px] object-cover object-center sm:w-[178px] lg:w-full xl:-mt-[115px]"
                  src={
                    "/assets/images/carta/ca2024CartaWallet_SmallTicketBanner.png"
                  }
                  alt={`Coinfest Asia 2024 (Carta Wallet Small Ticket Banner)`}
                  height={697}
                  width={532}
                  quality="87"
                />
              </div>
              <div className="opacity-1 pointer-events-none absolute -bottom-[161px] -left-10 -right-[155px] top-auto z-[8] flex select-none bg-transparent transition duration-[1s] ease-out sm:-bottom-[178px] sm:-right-[185px] sm:left-auto lg:-bottom-[210px] lg:-right-[235px] xl:-bottom-[205px] xl:-right-[249px]">
                <Image
                  className="z-10 mx-auto h-auto w-[561px] object-cover object-center sm:w-[691px] lg:w-[865px] xl:w-[1125px]"
                  src={"/assets/images/carta/ca2024CartaWalletBanner.png"}
                  alt={`Coinfest Asia 2024 (Carta Wallet Ticket Banner)`}
                  height={909}
                  width={1574}
                  quality="87"
                />
              </div>

              <div className="relative z-10 flex w-full max-w-[578px] flex-col items-start justify-start">
                <h2 className="font-staraExtraBold text-[40px] uppercase leading-[48px] text-white sm:text-[56px] sm:leading-[66px]">
                  Get your special coinfest asia card
                </h2>
                <div className="mt-4 flex w-full flex-col sm:mt-8 sm:w-max">
                  <Link
                    className="ca2024BgOverflayBlue relative inline-flex w-full max-w-max items-center justify-center rounded-xl bg-secondary px-4 py-4 font-bevietnamPro text-base font-medium text-white outline-none focus-visible:outline-none sm:rounded-[14px] sm:px-6 sm:py-6 sm:text-xl"
                    href="https://www.cartawallet.com/coinfestasia"
                    target="_blank"
                  >
                    Get your special Carta Wallet
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
};

export default CartaNetworkingWallet;

export const getStaticProps = async () => {
  try {
    return {
      props: {},
      revalidate: 900,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
