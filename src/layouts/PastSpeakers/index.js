import React, { useRef, useState } from "react";
import getConfig from "next/config";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Link from "next/link";

// @Get .config
const { publicRuntimeConfig } = getConfig();

// @Style CSS
import "@splidejs/react-splide/css/core";

// @Component's
import Container from "@components/Container";
import CardPastSpeakers from "@components/UI/Card/PastSpeaker";

export default function App({ data }) {
  const refMainSplde = useRef(null);
  const [intGrabDown, setGrabDown] = useState(false);
  const [intSpeakers, setSpeakers] = useState(data);

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

  // @Controller Splide
  const arrwPrevCntnt = (e) => {
    refMainSplde.current.splide.go("<");
  };
  const arrwNextCntnt = (e) => {
    refMainSplde.current.splide.go(">");
  };

  return (
    <>
      <section
        id="caPastSpeaker"
        className="caPastSpeaker flex flex-col relative mt-24"
      >
        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="flex flex-col max-w-full lg:max-w-[625px] text-center lg:text-left">
              <h2 className="text-black-800 font-bevietnamPro h2 font-bold uppercase">
                300+ Trailblazers
              </h2>
            </div>
            <div className="hidden lg:flex sm:flex-row items-center justify-center relative z-10">
              <button
                id="btnLeftPastSpeaker"
                className="outline-none mr-2 last:mr-0"
                aria-label="Btn Left Past Speaker"
                onClick={(e) => arrwPrevCntnt(e)}
              >
                <svg
                  className="h-8 sm:h-12 w-8 sm:w-12"
                  viewBox="0 0 48 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.70577 18.4009C8.00874 12.846 12.346 8.50874 17.9009 7.20577C21.9126 6.26474 26.0874 6.26474 30.0992 7.20577C35.654 8.50874 39.9912 12.846 41.2942 18.4009C42.2352 22.4126 42.2352 26.5874 41.2942 30.5992C39.9912 36.154 35.654 40.4912 30.0992 41.7942C26.0874 42.7352 21.9126 42.7352 17.9009 41.7942C12.346 40.4912 8.00874 36.154 6.70577 30.5992C5.76474 26.5874 5.76474 22.4126 6.70577 18.4009Z"
                    stroke="#232433"
                    strokeWidth="3"
                  />
                  <path
                    d="M26 29.5L21 24.5L26 19.5"
                    stroke="#232433"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                id="btnRightPastSpeaker"
                className="outline-none mr-2 last:mr-0"
                aria-label="Btn Right Past Speaker"
                onClick={(e) => arrwNextCntnt(e)}
              >
                <svg
                  className="h-8 sm:h-12 w-8 sm:w-12"
                  viewBox="0 0 48 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.70577 18.4009C8.00874 12.846 12.346 8.50874 17.9009 7.20577C21.9126 6.26474 26.0874 6.26474 30.0992 7.20577C35.654 8.50874 39.9912 12.846 41.2942 18.4009C42.2352 22.4126 42.2352 26.5874 41.2942 30.5992C39.9912 36.154 35.654 40.4912 30.0992 41.7942C26.0874 42.7352 21.9126 42.7352 17.9009 41.7942C12.346 40.4912 8.00874 36.154 6.70577 30.5992C5.76474 26.5874 5.76474 22.4126 6.70577 18.4009Z"
                    stroke="#232433"
                    strokeWidth="3"
                  />
                  <path
                    d="M22 19.5L27 24.5L22 29.5"
                    stroke="#232433"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </Container>
        <Container className="caPastSpeakerMain relative mt-10 lg:w-full lg:max-w-full">
          <div
            className={`${
              intGrabDown === true ? "cursor-grabbing" : "cursor-grab"
            } w-full`}
            onMouseDown={(e) => intMouseDown(e)}
            onMouseUp={(e) => intMouseDefault(e)}
            onMouseLeave={(e) => intMouseDefault(e)}
            onMouseMove={(e) => intMouseMove(e)}
          >
            <Splide
              ref={(slider) => (refMainSplde.current = slider)}
              tag="section"
              id="caSpldePastSpeaker"
              aria-label={`${publicRuntimeConfig.siteAppName} (Past Speaker)`}
              options={{
                updateOnMove: true,
                gap: "16px",
                type: "loop",
                drag: "free",
                snap: true,
                focus: "center",
                keyboard: true,
                arrows: false,
                pagination: false,
                fixedWidth: "416px",
                fixedHeight: "548px",
                mediaQuery: "max",
                breakpoints: {
                  1020: {
                    destroy: "completely",
                  },
                },
              }}
              className="caSpldePastSpeaker caSpldeCverflow caSpldeGrayscale w-full"
            >
              {intSpeakers?.map((getResult, index) => (
                <SplideSlide
                  className="bg-gray-200 rounded-lg sm:rounded-2xl overflow-hidden outline-none focus:outline-none"
                  key={index}
                >
                  <CardPastSpeakers {...getResult} />
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </Container>
        <div className="flex items-center justify-center mt-10">
          <Link
            href="/2025-sponsorship"
            className="rounded-lg sm:rounded-xl bg-gradient-fullthemoon text-white font-bevietnamPro text-sm sm:text-base font-normal py-4 sm:py-6 px-4 sm:px-8"
            aria-label="And Many More Past Speaker"
          >
            Apply as 2025 Speaker
          </Link>
        </div>
      </section>
    </>
  );
}
