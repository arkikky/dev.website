import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

// @components
import Container from "@components/Container";

const About = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(".ca2024AboutsItemsLeftPoint1", { y: "-2%" });
    gsap.set(".ca2024AboutsItemsLeftPoint2", { y: "4%" });
    gsap.set(".ca2024AboutsItemsLeftPoint3", { y: "-8%" });

    const intAboutPoint1 = gsap.context(() => {
      gsap.from(".ca2024AboutsItemsLeftPoint1", {
        y: "-28%",
        ease: "none",
        scrollTrigger: {
          trigger: ".ca2024AboutPoints",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });
    });

    const intAboutPoint2 = gsap.context(() => {
      gsap.from(".ca2024AboutsItemsLeftPoint2", {
        y: "-18%",
        ease: "none",
        scrollTrigger: {
          trigger: ".ca2024AboutPoints",
          start: "center center",
          end: "bottom center",
          scrub: true,
        },
      });
    });

    const intAboutPoint3 = gsap.context(() => {
      gsap.from(".ca2024AboutsItemsLeftPoint3", {
        y: "8%",
        ease: "none",
        scrollTrigger: {
          trigger: ".ca2024AboutPoints",
          start: "center center",
          end: "bottom center",
          scrub: true,
        },
      });
    });

    return () => {
      intAboutPoint1.revert();
      intAboutPoint2.revert();
      intAboutPoint3.revert();
    };
  }, []);

  return (
    <>
      <section className="ca2024MainPoints ca2024AboutPoints ca2024MainScreen relative flex snap-start snap-always flex-col items-center justify-center bg-white">
        {/* @background (backdrop) */}
        <div className="ca2024AboutBackdrop absolute inset-x-0 inset-y-0 z-px">
          <Image
            className="z-10 mx-auto h-full w-full object-cover object-center"
            src={"/assets/images/backdrop/background/ca2024BgLineWhite.jpg"}
            alt={`Coinfest Asia 2024 (Background Backdrop About)`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 80vw"
            height={1350}
            width={2160}
          />
        </div>

        {/* @items (backdrop) */}
        <div className="ca2024AboutsItemsLeft ca2024AboutsItemsLeftPoint1 opacity-1 pointer-events-none absolute -top-[120px] bottom-auto left-2 right-auto z-px select-none bg-transparent sm:-top-[163px] sm:left-[18%] lg:-top-[197px] lg:left-[17%] xl:left-[14%]">
          <Image
            className="z-10 mx-auto h-auto w-[211px] object-cover object-center sm:w-[323px] lg:w-[415px] xl:w-[383px]"
            src={"/assets/images/backdrop/ca2024DiamondBlue.png"}
            alt={`Coinfest Asia 2024 (Diamond Blue - About)`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 60vw"
            height={653}
            width={481}
            quality="87"
          />
        </div>

        <div className="ca2024AboutsItemsLeft ca2024AboutsItemsLeftPoint2 opacity-1 pointer-events-none absolute -bottom-[120px] left-2 right-auto top-auto z-px select-none bg-transparent sm:-bottom-[163px] sm:left-[18%] lg:-bottom-[197px] lg:left-[17%] xl:left-[25%]">
          <Image
            className="z-10 mx-auto h-auto w-[301px] object-cover object-center sm:w-[463px] lg:w-[555px] xl:w-[523px]"
            src={"/assets/images/backdrop/ca2024FlowerBlue.png"}
            alt={`Coinfest Asia 2024 (Flower Blue Items - About)`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 60vw"
            height={555}
            width={658}
            quality="87"
          />
        </div>

        <div className="ca2024AboutsItemsRight ca2024AboutsItemsLeftPoint3 opacity-1 pointer-events-none absolute -right-24 bottom-[39%] left-auto top-auto z-px select-none bg-transparent sm:-right-32 sm:bottom-[35%] lg:-right-24 lg:bottom-[41%] xl:bottom-[21%] xl:right-5">
          <Image
            className="z-10 mx-auto h-auto w-[211px] object-cover object-center sm:w-[315px] lg:w-[385px]"
            src={"/assets/images/backdrop/ca2024BitcoinRed.png"}
            alt={`Coinfest Asia 2024 (Bitcoin Red Items - About)`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 60vw"
            height={642}
            width={486}
            quality="87"
          />
        </div>

        {/* @content */}
        <Container className="ca2024AboutsStartContent opacity-1 relative z-[5]">
          <div className="flex flex-col items-center justify-center text-start">
            <h1 className="font-staraExtraBold text-[32px] uppercase leading-[40px] text-black-900 sm:text-[58px] sm:leading-[74px] lg:text-[80px] lg:leading-[90px] xl:text-[72px] xl:leading-[86px] 2xl:text-[80px] 2xl:leading-[90px]">
              Coinfest immerses you directly into adoption, innovation, and
              emerging markets in Asia
            </h1>
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;
