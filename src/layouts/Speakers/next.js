import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";

// @components
import Container from "@components/Container";

const SpeakersNext = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
      scroller: ".ca2024Main",
      // scroller: "body",
    });

    const ca24SpeakersNext = gsap.context(() => {
      const tl = gsap.timeline({
        duration: 2,
        scrollTrigger: {
          trigger: ".ca2024SldeSpeakersNext",
          end: "bottom 120%",
          scrub: true,
        },
      });

      tl.fromTo(
        ".ca2024SldeSwipeUp",
        {
          yPercent: 100,
          opacity: 0,
          scale: 1.45,
        },
        {
          yPercent: 0,
          opacity: 1,
          scale: 1,
        }
      );

      const tlContent = gsap.timeline({
        ease: "none",
        scrollTrigger: {
          trigger: ".ca2024SldeSpeakersNext",
          start: "top 20%",
          end: "bottom 100%",
          scrub: true,
        },
      });

      tlContent.fromTo(
        ".ca2024SldeSpeakersNextContent",
        {
          opacity: 0,
          scale: 0.7,
        },
        {
          opacity: 1,
          scale: 1,
        }
      );

      const tlContentITems = gsap.timeline({
        duration: 4,
        ease: "none",
        scrollTrigger: {
          trigger: ".ca2024SldeSpeakersNext",
          end: "bottom 100%",
          scrub: true,
        },
      });

      tlContentITems.fromTo(
        ".ca2024SldeSpeakersNextPointsItems",
        {
          x: "6%",
          y: "15%",
          opacity: 0,
          scale: 0.9,
        },
        {
          x: "0%",
          y: "0px",
          opacity: 1,
          scale: 1,
        }
      );
    });

    return () => {
      ca24SpeakersNext.revert();
    };
  }, []);

  return (
    <>
      <section className="ca2024Section ca2024SldeSpeakersNext snap-always snap-center flex flex-col items-center justify-center overflow-hidden relative">
        <div className="ca2024SldeSwipeUp absolute inset-y-0 inset-x-0 opacity-1 z-px transition duration-[1s] ease-out">
          <Image
            className="object-center object-cover mx-auto h-full w-full z-10"
            src={"/2024/assets/images/backdrop/ca2024BgLine.jpg"}
            alt={`Coinfest Asia 2024 (Background Speaker - Backdrop)`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            height={900}
            width={1440}
            loading="lazy"
            quality="87"
          />
        </div>

        {/* @pointItems (backdrop) */}
        <div className="ca2024SldeSpeakersNextPointsItems bg-transparent absolute top-auto -bottom-[229px] sm:-bottom-[405px] 2xl:-bottom-[527px] left-auto -right-[203px] sm:-right-[325px] lg:-right-[415px] select-none pointer-events-none z-px opacity-1 transition duration-[1s] ease-out">
          <Image
            className="object-center object-cover mx-auto h-auto w-[471px] sm:w-[771px] lg:w-[971px] z-10"
            src={"/2024/assets/images/backdrop/ca2024PointItems.png"}
            alt={`Coinfest Asia 2024 (Partners Points Items - Right)`}
            height={2488}
            width={1458}
            quality="87"
          />
        </div>

        <Container className=" relative z-[5]">
          <div className="ca2024SldeSpeakersNextContent flex flex-col items-center justify-center text-start sm:text-center w-full mx-auto max-w-full sm:max-w-[555px] lg:max-w-max opacity-0 transition duration-[1.4s] ease-out">
            <h2 className="text-white font-staraExtraBold text-[32px] xs:text-[42px] sm:text-[58px] lg:text-[80px] leading-[40px] xs:leading-[50px] sm:leading-[74px] lg:leading-[90px] uppercase px-0 lg:px-7 xl:px-0">
              2024 speakers will be announced very soon!
            </h2>
            <div className="flex flex-col mt-4 w-full sm:w-max">
              <Link
                className="bg-primary2024 inline-flex items-center justify-center rounded-[14px] text-black-900 font-bevietnamPro text-base sm:text-xl font-medium relative outline-none focus-visible:outline-none py-4 px-6 w-full max-w-full sm:max-w-[334px] lg:max-w-[365px]"
                href={"/get-involved/speakers"}
              >
                Apply as Speaker
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default SpeakersNext;
