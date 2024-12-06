import React, { useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Link from "next/link";
import Image from "next/image";

// @style
import "@splidejs/react-splide/css/core";

// @components
import Container from "@components/Container";

// @lib's
import dtHighlights from "@lib/data/highlights.json";

const Highlight = () => {
  const refMainSplde = useRef(null);
  const [isHighlight, setHighlight] = useState(dtHighlights);
  const sortedHighlights = isHighlight.sort((a, b) => b.id - a.id);
  const [isGrabbing, setGrabbing] = useState(false);

  // @mouse (Grab)
  const handleMouseEvent = (e, isDown) => {
    e.preventDefault();
    if (isGrabbing !== isDown) setGrabbing(isDown);
  };

  // @controller (Splide)
  const arrwPrev = (e) => {
    refMainSplde.current.splide.go("<");
  };
  const arrwNext = (e) => {
    refMainSplde.current.splide.go(">");
  };

  return (
    <>
      <section
        id="caHightlight"
        className="bg-gradient-fullthemoon overflow-hidden relative mt-20 pt-18 sm:pt-22 pb-20 sm:pb-24"
      >
        <Container className="px-0 sm:px-auto">
          <div className="supports-grid:grid grid-cols-4 sm:grid-cols-10 lg:grid-cols-12 gap-y-2 sm:gap-y-4 gap-x-2 sm:gap-x-4 relative z-10">
            <div className="col-span-2 sm:col-span-4 lg:col-span-4 px-4 sm:pl-0 sm:pr-6">
              <div className="flex flex-col justify-between h-full">
                <div className="block w-full">
                  <h2 className="text-white text-lg sm:text-[40px] leading-[24px] sm:leading-[48px] font-bold uppercase">
                    Sneak peek of the event
                  </h2>
                  <Link
                    className="flex flex-row items-center text-white text-sm sm:text-base font-normal underline mt-1 sm:mt-3"
                    title="Coinfest Asia General Gallery"
                    href="/gallery"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See more gallery
                    <svg
                      className="ml-1 sm:ml-2.5 shrink-0 h-4 w-4 sm:h-5 sm:w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <div className="flex flex-row items-center justify-start relative z-10">
                  <button
                    id="caGeneralBtn_LeftHightlight"
                    className="outline-none mr-2 last:mr-0"
                    aria-label="Coinfest Asia General Highlight Button Left"
                    onClick={(e) => arrwPrev(e)}
                  >
                    <svg
                      className="shirnk-0 h-8 sm:h-12 w-8 sm:w-12"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.47051 11.9339C5.33916 8.23068 8.23068 5.33916 11.9339 4.47051C14.6084 3.84316 17.3916 3.84316 20.0661 4.47051C23.7693 5.33916 26.6608 8.23068 27.5295 11.9339C28.1568 14.6084 28.1568 17.3916 27.5295 20.0661C26.6608 23.7693 23.7693 26.6608 20.0661 27.5295C17.3916 28.1568 14.6084 28.1568 11.9339 27.5295C8.23068 26.6608 5.33916 23.7693 4.47051 20.0661C3.84316 17.3916 3.84316 14.6084 4.47051 11.9339Z"
                        stroke="white"
                        strokeWidth="2"
                      />
                      <path
                        d="M17.3333 19.3333L14 16L17.3333 12.6666"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    id="caGeneralBtn_RightHightlight"
                    className="outline-none mr-2 last:mr-0"
                    aria-label="Coinfest Asia General Highlight Button Right"
                    onClick={(e) => arrwNext(e)}
                  >
                    <svg
                      className="shirnk-0 h-8 sm:h-12 w-8 sm:w-12"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.70577 17.9009C8.00874 12.346 12.346 8.00874 17.9009 6.70577C21.9126 5.76474 26.0874 5.76474 30.0992 6.70577C35.654 8.00874 39.9912 12.346 41.2942 17.9009C42.2352 21.9126 42.2352 26.0874 41.2942 30.0992C39.9912 35.654 35.654 39.9912 30.0992 41.2942C26.0874 42.2352 21.9126 42.2352 17.9009 41.2942C12.346 39.9912 8.00874 35.654 6.70577 30.0992C5.76474 26.0874 5.76474 21.9126 6.70577 17.9009Z"
                        stroke="white"
                        strokeWidth="3"
                      />
                      <path
                        d="M22 19L27 24L22 29"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-6 lg:col-span-8">
              <div
                className={`${
                  isGrabbing === true ? "cursor-grabbing" : "cursor-grab"
                } w-full`}
                onMouseDown={(e) => handleMouseEvent(e, true)}
                onMouseUp={(e) => handleMouseEvent(e, false)}
                onMouseMove={(e) => isGrabbing && e.preventDefault()}
              >
                <Splide
                  ref={(slider) => (refMainSplde.current = slider)}
                  tag="section"
                  id="caSpldeHightlight"
                  aria-label="Hightlight"
                  options={{
                    updateOnMove: true,
                    lazyLoad: "nearby",
                    gap: "16px",
                    drag: "free",
                    snap: true,
                    keyboard: true,
                    arrows: false,
                    pagination: false,
                    fixedWidth: "256px",
                    fixedHeight: "436px",
                    mediaQuery: "max",
                    breakpoints: {
                      640: {
                        gap: "10px",
                        fixedWidth: "132px",
                        fixedHeight: "218px",
                        padding: { left: "0", right: "16px" },
                      },
                    },
                  }}
                  className="caSpldeHightlight swpeGrayscale w-full"
                >
                  {sortedHighlights?.map((getResult, index) => (
                    <SplideSlide
                      className="bg-gray-200 rounded-lg sm:rounded-2xl overflow-hidden outline-none focus:outline-none"
                      key={index}
                    >
                      <Image
                        className="object-cover object-center h-auto min-h-full w-full"
                        src="/assets/images/highlights/caHighlights-Thumbnails.jpg"
                        data-splide-lazy={getResult.images}
                        alt={`Coinfest Asia 2024 by Coinvestasi (Hightlight - Website 2023)`}
                        sizes="(min-width: 1874px) 246vw,
                          (min-width: 1536px) 257vw,
                          (min-width: 1280px) 313vw,
                          (min-width: 1024px) 395vw,
                          (min-width: 640px) 631vw,
                          1005vw"
                        height={536}
                        width={256}
                        quality="87"
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
            </div>
          </div>

          {/* @backdrop */}
          <div className="container absolute inset-y-0 inset-x-0 select-none pointer-events-none z-px">
            <Image
              className="absolute top-auto -bottom-[145px] sm:-bottom-[215px] lg:-bottom-[208px] left-auto -right-[44px] sm:-right-[99px] lg:-right-[131px] xl:-right-[134px] 2xl:-right-[137px] h-auto w-[201px] sm:w-[301px] lg:w-[401px]"
              src="/assets/images/backdrop/caSymbol-General.svg"
              alt={`Coinfest Asia 2024 by Coinvestasi (Symbol General - Website)`}
              height={965}
              width={675}
              quality="87"
            />
          </div>
        </Container>
      </section>
    </>
  );
};
export default Highlight;
