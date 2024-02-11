import React, { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

// @style-css
import "@splidejs/react-splide/css/core";

// @components
import Container from "@components/Container";
import CardBenefit from "@components/UI/Card/CardBenefit";

const Benefit = () => {
  const rfMainSplde = useRef(null);

  // @controller (Splide)
  const btnPrev = (e) => {
    e.preventDefault();

    rfMainSplde.current.splide.go("<");
  };
  const btnNext = (e) => {
    e.preventDefault();

    rfMainSplde.current.splide.go(">");
  };

  return (
    <>
      <section className="ca2024Benefit mt-20 sm:mt-24">
        <Container className="px-0 sm:px-auto">
          <div className="flex flex-row items-center justify-between text-start px-4 sm:px-0">
            <h2 className="text-black-900 font-staraExtraBold text-2xl sm:text-[44px] lg:text-[56px] sm:leading-[normal] lg:leading-[64px] uppercase pr-5 sm:pr-0">
              Where innovation meets adoption
            </h2>
          </div>
          <div className="flex flex-col relative mt-4 sm:mt-6">
            <Splide
              ref={(slider) => (rfMainSplde.current = slider)}
              tag="section"
              id="ca2024BenefitSlider"
              label="Coinfest Asia 2024 (Benefit Slider)"
              aria-label="Coinfest Asia 2024 (Benefit Slider)"
              options={{
                updateOnMove: true,
                lazyLoad: "nearby",
                keyboard: true,
                arrows: false,
                pagination: false,
                fixedWidth: "244px",
                gap: "16px",
                mediaQuery: "min",
                padding: { left: "16px", right: "16px" },
                breakpoints: {
                  640: {
                    destroy: true,
                  },
                },
              }}
              className="ca2024BenefitSlider ca2024Grid w-full"
            >
              <SplideSlide className="ca2024CrdBenefitItems">
                <CardBenefit
                  title="Dive into Emerging Markets"
                  desc="Get connected in Southeast Asia; the fastest-growing Web3 region in the world!"
                />
              </SplideSlide>
              <SplideSlide className="ca2024CrdBenefitItems">
                <CardBenefit
                  title="Jump Straight to Adoption"
                  desc="Foster collaborations directly in Indonesia where there are 437k new crypto users each month"
                />
              </SplideSlide>
              <SplideSlide className="ca2024CrdBenefitItems">
                <CardBenefit
                  title="Unconventionally Engaging"
                  desc="Our immersive programming, setting, sessions and side events leave you with more memory markers than any other event"
                />
              </SplideSlide>
            </Splide>
          </div>
          <div className="bg-[#E3EAFF] flex sm:hidden flex-row items-start justify-between rounded-xl mt-6 mx-4 lg:ml-auto py-1.5 px-1.5 w-max">
            <button
              id="btnPrevBenefit"
              className="flex flex-col items-center justify-center bg-secondary2024 rounded-[10px] outline-none focus:outline-none relative ml-1.5 first:ml-0 h-10 w-10"
              aria-label="Button Prev Benefit"
              onClick={(e) => btnPrev(e)}
            >
              <svg
                className="stroke-current text-white h-6 w-6"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.33398 12L3.66732 8.5L7.33398 5"
                  strokeWidth="0.9375"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.83398 8.5H13.334"
                  strokeWidth="0.9375"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              id="btnNextBenefit"
              className="flex flex-col items-center justify-center bg-secondary2024 rounded-[10px] outline-none focus:outline-none relative ml-1.5 first:ml-0 h-10 w-10"
              aria-label="Button Right Benefit"
              onClick={(e) => btnNext(e)}
            >
              <svg
                className="stroke-current text-white h-6 w-6"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.66602 5L13.3327 8.5L9.66602 12"
                  strokeWidth="0.9375"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.166 8.5H3.66602"
                  strokeWidth="0.9375"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Benefit;
