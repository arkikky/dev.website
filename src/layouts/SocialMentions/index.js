import React, { useRef, useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// @xomponents
import Container from "@components/Container";
import CardSocialMentions from "@components/UI/Card/SocialMentions";

const SocialMentions = ({ data }) => {
  const intGrabBackdrop = useRef(null);
  const [intSocialMentions, setSocialMentions] = useState(data);

  return (
    <>
      <section className="ca2024SocialMentions bg-white snap-always snap-start flex flex-col items-center justify-center overflow-hidden relative h-auto z-10">
        <div className="ca2024SocialMentionsPointTop bg-transparent absolute top-10 bottom-auto inset-x-0 h-14 w-full select-none pointer-events-none z-px transition-all duration-150 ease-linear"></div>

        {/* @content */}
        <Container className="overflow-hidden relative z-[5]">
          <div className="flex flex-col overflow-hidden relative pt-[154px] sm:pt-[194px] pb-[254px] xl:pb-[202px]">
            <div className="ca2024SocialMentionsContentTitle flex flex-col items-center justify-center opacity-1 transition duration-[1.2s] ease-out">
              <h2 className="text-black-900 font-staraExtraBold text-[32px] sm:text-[58px] lg:text-[80px] leading-[40px] sm:leading-[74px] lg:leading-[90px] text-center uppercase">
                See what they're saying about Coinfest Asia
              </h2>
            </div>

            <div
              ref={intGrabBackdrop}
              id="ca2024SocialMentions"
              className="ca2024SocialMentions bckdrpCvrShdow flex flex-col relative mt-20 sm:mt-28 mb-28 transition duration-[2.2s] ease-out pointer-events-none lg:pointer-events-auto"
            >
              <Splide
                tag="section"
                id="caSpldeSocialMentions"
                aria-label="Social Mentions (Story)"
                options={{
                  direction: "ttb",
                  type: "loop",
                  drag: "free",
                  perPage: 1,
                  gap: "16px",
                  arrows: false,
                  pagination: false,
                  keyboard: false,
                  cloneStatus: false,
                  height: "auto",
                  autoScroll: {
                    pauseOnFocus: false,
                    rewind: false,
                    speed: 2,
                  },
                }}
                extensions={{ AutoScroll }}
                className="caSpldeSocialMentions caSpldeMnsry overflow-hidden min-h-[1488px] max-h-[1488px] w-full"
              >
                <SplideSlide className="outline-none focus:outline-none">
                  <div className="caMnsry">
                    {intSocialMentions?.map((getResult, index) => (
                      <div key={index} className="break-inside-avoid">
                        <CardSocialMentions {...getResult} />
                      </div>
                    ))}
                  </div>
                </SplideSlide>
              </Splide>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
export default SocialMentions;
