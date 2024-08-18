import { useEffect } from "react";
import getConfig from "next/config";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CustomEase } from "gsap/dist/CustomEase";

// @layout
import GuideLayout from "@layouts/GuideLayout";

// @get .config
const { publicRuntimeConfig } = getConfig();

const WeatherAttire = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
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
      rotate: "0deg",
      translateX: "67%",
    });

    return () => {
      tlCartaLeft.revert();
      tlCartaRight.revert();
    };
  }, []);

  return (
    <>
      <Head>
        <title>{`Networking Wallet | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta
          name="title"
          content={`Networking Wallet | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta name="description" content={publicRuntimeConfig.siteDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="og:title"
          content={`Networking Wallet | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta
          property="og:description"
          content={publicRuntimeConfig.siteDesc}
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_UPLOAD}/uploads/ca2024_Thumbnails_Share_Link_App_9964b5c353.png`}
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="twitter:title"
          content={`Page Not Found! | ${publicRuntimeConfig.siteTitle}`}
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

      <GuideLayout title="Networking Wallet" poweredByCarta className="pb-32">
        <div className="px-7 lg:px-14">
          <p className="text-base leading-6 lg:text-xl lg:leading-[30px]">
            Expand your professional circle and build meaningful relationships
            while engaging in various activities to earn points and stand a
            chance to win exciting prizes
          </p>
        </div>
        <div className="relative mb-28 flex w-full flex-col items-center">
          <div className="relative mx-auto mt-[88px] flex w-full max-w-max flex-col items-center justify-center text-center">
            <div className="absolute bottom-auto left-[7.7%] top-[33.5px] z-10 h-max w-max sm:left-[30.5px] sm:top-[64.5px]">
              <Image
                className="h-[33px] w-[33px] overflow-hidden rounded-full sm:h-[62px] sm:w-[62px]"
                src={"/assets/images/carta/ca2024MobileProfile_CartaWallet.gif"}
                alt={`Coinfest Asia 2024 (Profile Carta Wallet)`}
                height={120}
                width={120}
                quality="90"
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
          <Link
            className="button-blue absolute -bottom-5 z-40 flex w-full max-w-[327px] items-center justify-center gap-2 rounded-xl py-4 text-sm font-medium text-white lg:bottom-6"
            href={"/networking-wallet"}
            target="_blank"
          >
            Activate your profile
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.6663 3.38965H13.6663M18.6663 3.38965V8.38965M18.6663 3.38965L14.4997 7.55632L10.333 11.723M10.333 5.05632H6.99967C6.0792 5.05632 5.33301 5.80251 5.33301 6.72298V15.0563C5.33301 15.9768 6.0792 16.723 6.99967 16.723H15.333C16.2535 16.723 16.9997 15.9768 16.9997 15.0563V11.723"
                stroke="white"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </div>
      </GuideLayout>
    </>
  );
};

export default WeatherAttire;

WeatherAttire.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
