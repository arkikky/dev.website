import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

// @components
import Container from "@components/Container";

const PartnersStart = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
      scroller: ".ca2024Main",
      // scroller: "body",
    });

    const intSldePartnersStart = gsap.context(() => {
      const tl = gsap.timeline({
        duration: 2,
        delay: 3,
        ease: "none",
        scrollTrigger: {
          trigger: ".ca2024SldePartnersNext",
          start: "top center",
          end: "bottom 130%",
          scrub: true,
        },
      });

      tl.fromTo(
        ".ca2024SldeOpen-Backdrop",
        {
          opacity: 1,
        },
        {
          opacity: 0,
        }
      );

      const tlContent = gsap.timeline({
        duration: 2,
        delay: 3,
        ease: "none",
        scrollTrigger: {
          trigger: ".ca2024SldePartnersNext",
          start: "top center",
          end: "bottom 120%",
          scrub: true,
        },
      });

      tlContent.fromTo(
        ".ca2024SldePartnersNextContent",
        {
          y: "50%",
          opacity: 0,
        },
        {
          y: "0px",
          opacity: 1,
        }
      );

      // const tlContentITems = gsap.timeline({
      //   duration: 2,
      //   delay: 3,
      //   ease: "none",
      //   scrollTrigger: {
      //     trigger: ".ca2024SldePartnersNext",
      //     start: "top center",
      //     end: "bottom 130%",
      //     scrub: true,
      //   },
      // });

      // tlContentITems.fromTo(
      //   ".ca2024SldePartnersItemsLeft",
      //   {
      //     x: "0%",
      //     y: "100%",
      //     opacity: 0,
      //     scale: 0.9,
      //   },
      //   {
      //     x: "0%",
      //     y: "0px",
      //     opacity: 1,
      //     scale: 1,
      //   }
      // );

      // tlContentITems.fromTo(
      //   ".ca2024SldePartnersItemsRight",
      //   {
      //     x: "20%",
      //     y: "-40%",
      //     opacity: 0,
      //     scale: 0.8,
      //   },
      //   {
      //     x: "0%",
      //     y: "0px",
      //     opacity: 1,
      //     scale: 1,
      //   }
      // );
    });

    return () => {
      intSldePartnersStart.revert();
    };
  }, []);

  return (
    <>
      <section className="ca2024Section ca2024SldePartnersNext snap-always snap-start flex flex-col items-center justify-center overflow-hidden relative transition duration-[1s] ease-in-out">
        <div className="ca2024SldeOpen-Backdrop absolute inset-y-0 inset-x-0 opacity-1 z-[2] transition duration-[1s] ease-out">
          <Image
            className="ca2024BgRotate-Backdrop object-center object-cover mx-auto h-full w-full z-10"
            src={"/2024/assets/images/backdrop/ca2024BgLine.jpg"}
            alt={`Coinfest Asia 2024 (Background Speaker - Backdrop)`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            height={900}
            width={1440}
            loading="lazy"
            quality="87"
          />
        </div>

        {/* @background (backdrop) */}
        <div className="absolute inset-y-0 inset-x-0 z-px">
          <Image
            className="ca2024BgRotate-Backdrop object-center object-cover mx-auto h-full w-full z-[8]"
            src={"/2024/assets/images/backdrop/ca2024BgLine-White.jpg"}
            alt={`Coinfest Asia 2024 (Background Chart Insight - Backdrop)`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            height={900}
            width={1440}
            quality="87"
          />
        </div>

        {/* @itemsLeft (backdrop) */}
        <div className="ca2024SldePartnersItemsLeft bg-transparent absolute top-auto -bottom-[117px] sm:-bottom-[163px] lg:-bottom-[187px] right-auto -left-[53px] sm:left-4 lg:left-6 xl:left-[43px] select-none pointer-events-none z-px opacity-1 transition duration-[1.4s] delay-[0.3s] ease-in-out">
          <Image
            className="object-center object-cover mx-auto h-auto w-[191px] sm:w-[261px] lg:w-[323px] xl:w-[351px] 2xl:w-[412px] z-10"
            src={"/2024/assets/images/backdrop/ca2024PointItems-Diamond.png"}
            alt={`Coinfest Asia 2024 (Partners Items - Right)`}
            height={1112}
            width={620}
            quality="87"
          />
        </div>

        {/* @itemsRight (backdrop) */}
        <div className="ca2024SldePartnersItemsRight bg-transparent absolute top-auto bottom-[39%] xl:bottom-15 left-auto -right-24 sm:-right-[143px] select-none pointer-events-none z-px opacity-1 transition duration-[1.2s] ease-in-out">
          <Image
            className="object-center object-cover mx-auto h-auto w-[231px] sm:w-[385px] lg:w-[455px] 2xl:w-[495px] z-10"
            src={"/2024/assets/images/backdrop/ca2024PointItems-Flower.png"}
            alt={`Coinfest Asia 2024 (Partners Items - Right)`}
            height={1044}
            width={859}
            quality="87"
          />
        </div>

        <Container className=" relative opacity-1 z-[5]">
          <div className="ca2024SldePartnersNextContent flex flex-col items-center justify-center text-start opacity-0 transition duration-[1.3s] ease-in-out">
            <h2 className="text-black-900 font-staraExtraBold text-[42px] sm:text-[58px] lg:text-[80px] leading-[50px] sm:leading-[74px] lg:leading-[90px] uppercase">
              Showcase your innovations in Asia's emerging markets where
              adoption happens
            </h2>
          </div>
        </Container>
      </section>
    </>
  );
};

export default PartnersStart;
