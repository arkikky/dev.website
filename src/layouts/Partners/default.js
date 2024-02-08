import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// @components
import Container from "@components/Container";

// @layouts
import Partners from "@layouts/Partners";

const DefaultPartners = ({ data }) => {
  const [isSponsorPartner, setSponsorPartner] = useState(data);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
      scroller: ".ca2024Main",
      // scroller: "body",
    });

    const ca24SldePartners = gsap.context(() => {
      const tlContent = gsap.timeline({
        duration: 2,
        ease: "none",
        scrollTrigger: {
          trigger: ".ca2024SldePartnersPointTop",
          end: "bottom 110%",
          scrub: 1,
        },
      });

      tlContent.fromTo(
        ".ca2024SldePartnersContent",
        {
          y: "10%",
          opacity: 0,
        },
        {
          y: "0%",
          opacity: 1,
        }
      );

      const tlTitle = gsap.timeline({
        duration: 2,
        ease: "none",
        scrollTrigger: {
          trigger: ".ca2024SldePartnersContentTitle",
          end: "bottom 100%",
          scrub: 1,
        },
      });

      tlTitle.fromTo(
        ".ca2024SldePartnersContentTitle",
        {
          y: "100%",
          opacity: 0,
        },
        {
          y: "0%",
          opacity: 1,
        }
      );
    });

    return () => {
      ca24SldePartners.revert();
    };
  }, []);

  return (
    <>
      <section className="ca2024SectionAuto ca2024SldePartners snap-always snap-start flex flex-col items-center justify-center overflow-hidden relative">
        <div className="ca2024SldePartnersPointTop bg-transparent absolute top-24 bottom-auto inset-x-0 h-14 w-full select-none pointer-events-none z-px transition duration-[0.8s] ease-linear"></div>

        <Container className="overflow-hidden relative pt-[140px] sm:pt-[174px] z-[5]">
          <div className="ca2024SldePartnersContentTitle flex flex-col items-start sm:items-center justify-start sm:justify-center pr-11 sm:pr-0 opacity-0 transition duration-[1.2s] ease-out">
            <h2 className="text-black-900 font-staraExtraBold text-[32px] sm:text-[58px] lg:text-[80px] leading-[35px] sm:leading-[74px] lg:leading-[90px] uppercase">
              Previous Partners
            </h2>
          </div>

          <div className="ca2024SldePartnersContent flex flex-col overflow-hidden relative pb-[202px] mt-8 sm:mt-11 opacity-0 transition duration-[1s] ease-out">
            <Partners data={isSponsorPartner} />
          </div>
        </Container>
      </section>
    </>
  );
};

export default DefaultPartners;
