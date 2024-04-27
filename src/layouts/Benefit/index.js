import React, { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

// @style-css
import "@splidejs/react-splide/css/core";

// @components
import Container from "@components/Container";
import BenefitCard from "@components/UI/Card/Benefit";

const Benefit = () => {
  const rfMainSplde = useRef(null);

  // @benefit(slide on mobile)
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
      <Container className="sm:px-auto mt-15 px-0">
        <div className="flex flex-row items-center justify-between px-4 text-start sm:px-0">
          <h2 className="pr-5 font-staraExtraBold text-2xl uppercase text-black-900 sm:pr-0 sm:text-[44px] sm:leading-[normal] lg:text-[56px] lg:leading-[64px]">
            Where innovation meets adoption
          </h2>
        </div>
        <div className="relative mt-4 flex flex-col sm:mt-6">
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
              <BenefitCard
                title="Dive into Emerging Markets"
                desc="Get connected in Southeast Asia; the fastest-growing Web3 region in the world!"
              />
            </SplideSlide>
            <SplideSlide className="ca2024CrdBenefitItems">
              <BenefitCard
                title="Jump Straight to Adoption"
                desc="Foster collaborations directly in Indonesia where there are 437k new crypto users each month"
              />
            </SplideSlide>
            <SplideSlide className="ca2024CrdBenefitItems">
              <BenefitCard
                title="Unconventionally Engaging"
                desc="Our immersive programming, setting, sessions and side events leave you with more memory markers than any other event"
              />
            </SplideSlide>
          </Splide>
        </div>

        <div className="mx-4 mt-6 flex w-max flex-row items-start justify-between rounded-xl bg-[#E3EAFF] px-1.5 py-1.5 sm:hidden lg:ml-auto">
          <button
            id="btnPrevBenefit"
            className="relative ml-1.5 flex h-10 w-10 flex-col items-center justify-center rounded-[10px] bg-secondary outline-none first:ml-0 focus:outline-none"
            aria-label="Button Prev Benefit"
            onClick={(e) => btnPrev(e)}
          >
            <svg
              className="h-6 w-6 stroke-current text-white"
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
            className="relative ml-1.5 flex h-10 w-10 flex-col items-center justify-center rounded-[10px] bg-secondary outline-none first:ml-0 focus:outline-none"
            aria-label="Button Right Benefit"
            onClick={(e) => btnNext(e)}
          >
            <svg
              className="h-6 w-6 stroke-current text-white"
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
    </>
  );
};

export default Benefit;
