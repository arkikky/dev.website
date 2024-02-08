import React, { useRef, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";

// @style-css
import "@splidejs/react-splide/css/core";

// @components
import Container from "@components/Container";

const DefaultTestimonials = () => {
  const rfMainSplde = useRef(null);

  return (
    <>
      <section className="ca2024SectionAutoScreen ca2024SldeTestimonials bg-white snap-always snap-start flex flex-col items-center justify-center overflow-hidden relative">
        <div className="ca2024SldeTestimonialsPointTop bg-transparent absolute top-10 bottom-auto inset-x-0 h-14 w-full select-none pointer-events-none z-px transition duration-[0.8s] ease-linear"></div>

        <div className="ca2024SldeTestimonialsBackdrop absolute inset-y-0 inset-x-0 opacity-1 z-px transition duration-[1s] ease-out">
          <Image
            className="object-center object-cover mx-auto h-full w-full z-10"
            src={"/2024/assets/images/backdrop/ca2024BgLine.jpg"}
            alt={`Coinfest Asia 2024 (Background Testimonials - Backdrop)`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            height={900}
            width={1440}
            loading="lazy"
            quality="87"
          />
        </div>

        <div className="flex flex-col relative w-full z-[22]">
          <Container>
            <div className="flex flex-col">
              <Splide
                ref={(slider) => (rfMainSplde.current = slider)}
                tag="section"
                id="ca2024Testimonials"
                label="Coinfest Asia 2024 (Testimonials Slider)"
                aria-label="Coinfest Asia 2024 (Testimonials Slider)"
                options={{
                  updateOnMove: true,
                  type: "loop",
                  perPage: 1,
                  lazyLoad: "nearby",
                  keyboard: true,
                  arrows: false,
                  autoplay: true,
                  pagination: false,
                  pauseOnHover: true,
                  fixedWidth: false,
                  gap: "16px",
                  padding: { left: "0px", right: "0px" },
                  mediaQuery: "min",
                  breakpoints: {
                    1024: {
                      gap: "32px",
                    },
                    640: {
                      perPage: 1,
                      speed: "800",
                      fixedWidth: false,
                      pauseOnHover: true,
                      gap: "16px",
                    },
                  },
                }}
                className="ca2024Testimonials w-full"
              >
                <SplideSlide data-splide-interval="3000">
                  <div className="flex flex-col">
                    {/* <div className="bg-[#D9D9D9] rounded-xl sm:rounded-[28px] overflow-hidden h-24 sm:h-32 lg:h-[146] xl:h-32 2xl:h-[146px] w-24 sm:w-32 lg:w-[146] xl:w-32 2xl:w-[146px]"></div> */}
                    <div className="flex flex-col mt-6">
                      <h3 className="text-white font-bevietnamPro text-2xl sm:text-[54px] lg:text-[64px] xl:text-[58px] 2xl:text-[64px] sm:leading-[62px] lg:leading-[96px] xl:leading-[76px] 2xl:leading-[96px] w-full">
                        “A great conference in a great setting and to be honest,
                        this is one of the most beautiful settings I’ve been to”
                      </h3>
                      <span className="text-white font-bevietnamPro text-lg sm:text-2xl lg:text-[32px] 2xl:text-[48px] lg:leading-normal 2xl:leading-[58px] font-light mt-6 lg:mt-8">
                        Tom France, Co-Founder Ledger
                      </span>
                    </div>
                  </div>
                </SplideSlide>
                <SplideSlide data-splide-interval="3000">
                  <div className="flex flex-col">
                    {/* <div className="bg-[#D9D9D9] rounded-xl sm:rounded-[28px] overflow-hidden h-24 sm:h-32 lg:h-[146] xl:h-32 2xl:h-[146px] w-24 sm:w-32 lg:w-[146] xl:w-32 2xl:w-[146px]"></div> */}
                    <div className="flex flex-col mt-6">
                      <h3 className="text-white font-bevietnamPro text-2xl sm:text-[54px] lg:text-[64px] xl:text-[58px] 2xl:text-[64px] sm:leading-[62px] lg:leading-[96px] xl:leading-[76px] 2xl:leading-[96px] w-full">
                        “The event has been fantastic, well organized. It has
                        elevated the conversation of crypto, Web3, metaverse,
                        and DeFi that we all believe so strongly. I'm looking
                        forward for Coinfest next year”
                      </h3>
                      <span className="text-white font-bevietnamPro text-lg sm:text-2xl lg:text-[32px] 2xl:text-[48px] lg:leading-normal 2xl:leading-[58px] font-light mt-6 lg:mt-8">
                        Karl Mohan, GM APAC Crypto.com
                      </span>
                    </div>
                  </div>
                </SplideSlide>
                <SplideSlide data-splide-interval="3000">
                  <div className="flex flex-col">
                    {/* <div className="bg-[#D9D9D9] rounded-xl sm:rounded-[28px] overflow-hidden h-24 sm:h-32 lg:h-[146] xl:h-32 2xl:h-[146px] w-24 sm:w-32 lg:w-[146] xl:w-32 2xl:w-[146px]"></div> */}
                    <div className="flex flex-col mt-6">
                      <h3 className="text-white font-bevietnamPro text-2xl sm:text-[54px] lg:text-[64px] xl:text-[58px] 2xl:text-[64px] sm:leading-[62px] lg:leading-[96px] xl:leading-[76px] 2xl:leading-[96px] w-full">
                        “What I like the most of Coinfest is I've been able to
                        connect with a diverse range of people and it's very
                        interesting”
                      </h3>
                      <span className="text-white font-bevietnamPro text-lg sm:text-2xl lg:text-[32px] 2xl:text-[48px] lg:leading-normal 2xl:leading-[58px] font-light mt-6 lg:mt-8">
                        Gwendolyn Regina, Investment Director BNB Chain
                      </span>
                    </div>
                  </div>
                </SplideSlide>
              </Splide>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default DefaultTestimonials;
