import React, { useEffect } from "react";
import { gsap } from "gsap";
import getConfig from "next/config";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

// @get .config
const { publicRuntimeConfig } = getConfig();

// @components
import Container from "@components/Container";

// @layouts
import BannerFooter from "@layouts/Banner/BannerFooter";

const Carta = () => {
  useEffect(() => {
    const tlCartaLeft = gsap.timeline({
      defaults: {
        trigger: "#ca2024CartaIContainerMobile",
        start: "top 60%",
        end: "bottom 100%",
        scrub: true,
        duration: 1,
        ease: "power3.out",
      },
    });

    tlCartaLeft.to("#ca2024CartaItemsLeft", {
      rotate: "-6deg",
      translateX: "-58%",
      ease: "none",
    });

    const tlCartaRight = gsap.timeline({
      defaults: {
        trigger: "#ca2024CartaIContainerMobile",
        start: "top 60%",
        end: "bottom 100%",
        scrub: true,
        duration: 1,
        ease: "power3.out",
      },
    });

    tlCartaRight.to("#ca2024CartaItemsRight", {
      rotate: "6deg",
      translateX: "58%",
      ease: "none",
    });

    return () => {
      tlCartaLeft.revert();
      tlCartaRight.revert();
    };
  }, []);

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

      <main className="relative overflow-hidden pt-[159px] xl:pt-[159px] 2xl:pt-[205px]">
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
              <Link href="" className="w-max">
                <Image
                  className="mx-auto aspect-auto h-[49px] w-auto"
                  src={"/assets/images/ca2024Download_AppStore.svg"}
                  alt={`Coinfest Asia 2024 (Download Button App Store)`}
                  height={59}
                  width={177}
                  quality="87"
                />
              </Link>
              <Link href="" className="w-max">
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

        <div className="relative mx-auto mt-[88px] flex w-full max-w-max flex-col items-center justify-center text-center">
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

        {/* @banner-footer */}
        <BannerFooter />
      </main>
    </>
  );
};

export default Carta;

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
