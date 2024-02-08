import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// @components
import Container from "@components/Container";

// @layouts
import Speakers from "@layouts/Speakers";

const DefaultSpeakers = ({ data }) => {
  const [isSpeakers, setSpeakers] = useState(data);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
      scroller: ".ca2024Main",
      // scroller: "body",
    });

    const ca24SldeSpeaker = gsap.context(() => {
      const tlTitle = gsap.timeline({
        duration: 2,
        ease: "none",
        scrollTrigger: {
          trigger: ".ca2024SldeSpeakerContentTitle",
          end: "bottom 100%",
          scrub: 1,
        },
      });

      tlTitle.fromTo(
        ".ca2024SldeSpeakerContentTitle",
        {
          y: "100%",
          opacity: 0,
        },
        {
          y: "0%",
          opacity: 1,
        }
      );

      const tlContent = gsap.timeline({
        duration: 3,
        delay: 4,
        ease: "none",
        scrollTrigger: {
          trigger: ".ca2024SldeSpeakersPointTop",
          end: "bottom 20%",
          scrub: 1,
        },
      });

      tlContent.fromTo(
        ".ca2024SldeSpeakerContent",
        {
          y: "5%",
          opacity: 0,
        },
        {
          y: "0%",
          opacity: 1,
        }
      );
    });

    return () => {
      ca24SldeSpeaker.revert();
    };
  }, []);

  return (
    <>
      <section className="ca2024SectionAuto ca2024SldeSpeaker snap-always snap-start flex flex-col items-center justify-center overflow-hidden relative">
        <div className="ca2024SldeSpeakersPointTop bg-transparent absolute top-10 bottom-auto inset-x-0 h-14 w-full select-none pointer-events-none z-px"></div>

        <Container className="overflow-hidden relative z-[5]">
          <div className="flex flex-col overflow-hidden relative pt-[174px] pb-[202px]">
            <div className="ca2024SldeSpeakerContentTitle flex flex-col items-start sm:items-center justify-start sm:justify-center pr-11 sm:pr-0 opacity-0 transition duration-[1.2s] ease-out">
              <h2 className="text-black-900 font-staraExtraBold text-[32px] sm:text-[58px] lg:text-[80px] leading-[35px] sm:leading-[74px] lg:leading-[90px] uppercase">
                Previous speakers
              </h2>
            </div>

            <div className="ca2024SldeSpeakerContent opacity-0 relative transition duration-[2.2s] ease-out">
              <Speakers data={isSpeakers} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default DefaultSpeakers;
