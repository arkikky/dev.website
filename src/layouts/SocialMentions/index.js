import React, { useRef, useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// @xomponents
import Container from "@components/Container";
import CardSocialMentions from "@components/UI/Card/SocialMentions";

const SocialMentions = ({ data }) => {
  const intGrabBackdrop = useRef(null);
  const [intGrabDown, setGrabDown] = useState(false);
  const [intSocialMentions, setSocialMentions] = useState(data);

  //  @Mouse (Grab - Event)
  const intMouseDown = (e) => {
    e.preventDefault();

    setGrabDown(true);
  };

  const intMouseDefault = (e) => {
    e.preventDefault();

    setGrabDown(false);
  };

  const intMouseMove = (e) => {
    if (!intGrabDown) return;
    e.preventDefault();

    setGrabDown(true);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
      scroller: ".ca2024Main",
      // scroller: "body",
    });

    const ca24SldeSocialMentions = gsap.context(() => {
      const tlTitle = gsap.timeline({
        duration: 2,
        ease: "none",
        scrollTrigger: {
          trigger: ".ca2024SldeSocialMentionsContentTitle",
          end: "bottom 100%",
          scrub: 1,
        },
      });

      tlTitle.fromTo(
        ".ca2024SldeSocialMentionsContentTitle",
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
          trigger: ".ca2024SldeSocialMentionsPointTop",
          end: "bottom 20%",
          scrub: 1,
        },
      });

      tlContent.fromTo(
        ".ca2024SldeSocialMentionsContent",
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
      ca24SldeSocialMentions.revert();
    };
  }, []);

  return (
    <>
      <section className="ca2024SectionAuto ca2024SldeSocialMentions bg-white snap-always snap-start flex flex-col items-center justify-center overflow-hidden relative z-10">
        <div className="ca2024SldeSocialMentionsPointTop bg-transparent absolute top-10 bottom-auto inset-x-0 h-14 w-full select-none pointer-events-none z-px transition-all duration-150 ease-linear"></div>

        <Container className="overflow-hidden relative z-[5]">
          <div className="flex flex-col overflow-hidden relative pt-[154px] sm:pt-[184px] pb-[172px]">
            <div className="ca2024SldeSocialMentionsContentTitle flex flex-col items-center justify-center opacity-1 transition duration-[1.2s] ease-out">
              <h2 className="text-black-900 font-staraExtraBold text-[32px] sm:text-[58px] lg:text-[80px] leading-[35px] sm:leading-[74px] lg:leading-[90px] text-center uppercase">
                See what they're saying about Coinfest Asia
              </h2>
            </div>

            <div className="ca2024SldeSocialMentionsContent flex flex-col overflow-hidden relative transition duration-[2.2s] ease-out -mt-17 pointer-events-none lg:pointer-events-auto">
              <div
                ref={intGrabBackdrop}
                id="ca2024SocialMentions"
                className="ca2024SocialMentions relative mt-20 sm:mt-28 mb-28"
              >
                <div
                  className={`bckdrpCvrShdow ${
                    intGrabDown === true ? "cursor-grabbing" : "cursor-grab"
                  } relative mt-11`}
                  onMouseDown={(e) => intMouseDown(e)}
                  onMouseUp={(e) => intMouseDefault(e)}
                  onMouseLeave={(e) => intMouseDefault(e)}
                  onMouseMove={(e) => intMouseMove(e)}
                >
                  <Splide
                    tag="section"
                    id="caSpldePeopleSaying"
                    aria-label="Vertical Story"
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
                    className="caSpldePeopleSaying caSpldeMnsry overflow-hidden min-h-[1488px] max-h-[1488px] w-full"
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
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
export default SocialMentions;
