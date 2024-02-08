import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

// @components
import Container from "@components/Container";

const GetInvolvedStart = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
      scroller: ".ca2024Main",
      // scroller: "body",
    });

    const ca24SpeakersNext = gsap.context(() => {
      const tl = gsap.timeline({
        duration: 1,
        delay: 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: ".ca2024SldeGetInvolvedStart",
          end: "bottom 120%",
          scrub: 1,
        },
      });

      tl.fromTo(
        ".ca2024SldeGetInvolvedStart",
        {
          backgroundColor: "#FFFFFF",
        },
        {
          backgroundColor: "#2458F4",
        }
      );

      tl.fromTo(
        ".ca2024SldeGetInvolvedStartContent",
        {
          y: "100%",
          opacity: 0,
        },
        {
          y: "0px",
          opacity: 1,
        }
      );

      const tlContentITems = gsap.timeline({
        duration: 2,
        delay: 3,
        ease: "none",
        scrollTrigger: {
          trigger: ".ca2024SldeGetInvolvedStart",
          end: "bottom 100%",
          scrub: true,
        },
      });

      tlContentITems.fromTo(
        ".ca2024SldeGetInvolvedStartPointsLeftItems",
        {
          x: "-10%",
          y: "-20%",
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

      tlContentITems.fromTo(
        ".ca2024SldeGetInvolvedStartPointsItems",
        {
          x: "10%",
          y: "20%",
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
      <section className="ca2024Section ca2024SldeGetInvolvedStart bg-white snap-always snap-start flex flex-col items-center justify-center overflow-hidden relative transition duration-[1s] ease-out">
        {/* @pointItems (backdrop) */}
        <div className="ca2024SldeGetInvolvedStartPointsLeftItems bg-transparent absolute bottom-auto -top-[303px] sm:-top-[503px] lg:-top-[629px] xl:-top-[567px] 2xl:-top-[635px] right-auto -left-[203px] sm:-left-[325px] lg:-left-[341px] select-none pointer-events-none z-px opacity-0 transition duration-[0.8s] ease-out">
          <Image
            className="object-center object-cover mx-auto h-auto w-[471px] sm:w-[771px] lg:w-[871px]"
            src={"/2024/assets/images/backdrop/ca2024PointItems.png"}
            alt={`Coinfest Asia 2024 (Partners Points Items - Right)`}
            height={2488}
            width={1458}
            quality="87"
          />
        </div>

        {/* @pointItems (backdrop) */}
        <div className="ca2024SldeGetInvolvedStartPointsItems bg-transparent absolute top-auto -bottom-[229px] sm:-bottom-[405px] xl:-bottom-[433px] 2xl:-bottom-[487px] left-auto -right-[203px] sm:-right-[325px] lg:-right-[389px] select-none pointer-events-none z-px opacity-0 transition duration-[0.8s] ease-out">
          <Image
            className="object-center object-cover mx-auto h-auto w-[471px] sm:w-[771px] lg:w-[871px]"
            src={"/2024/assets/images/backdrop/ca2024PointItems.png"}
            alt={`Coinfest Asia 2024 (Partners Points Items - Right)`}
            height={2488}
            width={1458}
            quality="87"
          />
        </div>

        <Container className="relative z-[15]">
          <div className="ca2024SldeGetInvolvedStartContent flex flex-col text-center opacity-1 transition duration-[1.2s] ease-out">
            <h2 className="text-white font-staraExtraBold text-[42px] sm:text-[58px] lg:text-[80px] leading-[50px] sm:leading-[74px] lg:leading-[90px] uppercase">
              Get involved for 2024
            </h2>
          </div>
        </Container>
      </section>
    </>
  );
};

export default GetInvolvedStart;
