import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

// @components
import Container from "@components/Container";

const SpeakersStart = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
      scroller: ".ca2024Main",
      // scroller: "body",
    });

    const intSldeSpeakersStart = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".ca2024SldeSpeakerStart",
          end: "bottom 110%",
          scrub: true,
        },
      });
      tl.fromTo(
        ".ca2024SldeSpeakerStartContent",
        {
          y: "90%",
          opacity: 0,
        },
        {
          y: "0px",
          opacity: 1,
        }
      );

      const tlContentITems = gsap.timeline({
        duration: 4,
        ease: "none",
        scrollTrigger: {
          trigger: ".ca2024SldeSpeakerStart",
          end: "bottom 100%",
          scrub: true,
        },
      });

      tlContentITems.fromTo(
        ".ca2024SldeSpeakersStartPointsItems",
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
      intSldeSpeakersStart.revert();
    };
  }, []);

  return (
    <>
      <section className="ca2024Section ca2024SldeSpeakerStart bg-secondary2024 snap-always snap-center flex flex-col items-center justify-center overflow-hidden relative">
        {/* @background (backdrop) */}
        <div className="ca2024SldeSpeakersBackdrop absolute inset-y-0 inset-x-0 z-px">
          <Image
            className="ca2024BgRotate-Backdrop object-center object-cover mx-auto h-full w-full z-10"
            src={"/2024/assets/images/backdrop/ca2024BgLine.jpg"}
            alt={`Coinfest Asia 2024 (Background Speaker - Backdrop)`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            height={900}
            width={1440}
            quality="87"
          />
        </div>

        {/* @pointItems (backdrop) */}
        <div className="ca2024SldeSpeakersStartPointsItems bg-transparent absolute top-auto -bottom-[229px] sm:-bottom-[405px] 2xl:-bottom-[527px] left-auto -right-[203px] sm:-right-[325px] lg:-right-[415px] select-none pointer-events-none z-px opacity-1 transition duration-[0.8s] ease-out">
          <Image
            className="object-center object-cover mx-auto h-auto w-[471px] sm:w-[771px] lg:w-[971px] z-10"
            src={"/2024/assets/images/backdrop/ca2024PointItems.png"}
            alt={`Coinfest Asia 2024 (Partners Points Items - Right)`}
            height={2488}
            width={1458}
            quality="87"
          />
        </div>

        <Container className="relative z-[5]">
          <div className="ca2024SldeSpeakerStartContent flex flex-col text-start opacity-0 transition duration-[1.2s] ease-out">
            <h2 className="text-white font-staraExtraBold text-[32px] xs:text-[42px] sm:text-[58px] lg:text-[80px] leading-[40px] xs:leading-[50px] sm:leading-[74px] lg:leading-[90px] uppercase">
              Connect with over 6,000+ people in Southeast Asia; the
              fastest-growing Web3 region in the world!
            </h2>
          </div>
        </Container>
      </section>
    </>
  );
};

export default SpeakersStart;
