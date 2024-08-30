import React, { useRef, useEffect } from "react";
import getConfig from "next/config";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";

// @Get .config
const { publicRuntimeConfig } = getConfig();

// @Style CSS
import "@splidejs/react-splide/css/core";

// @Component's
import Container from "@components/Container";

const Header = () => {
  const refMainThumbs = useRef(null);
  const refSpldeThumbs = useRef(null);

  const intVideo1 = useRef(null);
  const intVideo2 = useRef(null);
  const intVideo3 = useRef(null);

  useEffect(() => {
    if (refMainThumbs.current) {
      refMainThumbs.current.sync(refSpldeThumbs.current.splide);
    }

    refSpldeThumbs.current.splide.on("click", (e) => {
      refSpldeThumbs.current.splide.go(e.index);

      if (e.index == 0) {
        if (intVideo1.current) {
          // intVideo1.current.play();
        }
      }

      if (e.index == 1) {
        if (intVideo2.current) {
          // intVideo1.current.play();
        }
      }

      if (e.index == 2) {
        if (intVideo3.current) {
          // intVideo2.current.play();
        }
      }
    });
  }, [refSpldeThumbs]);

  useEffect(() => {
    if (intVideo1.current) {
      intVideo1.current.play();
    }
  }, [refSpldeThumbs]);

  return (
    <>
      <header
        id="caAbout"
        className="caHeaderApp bg-white relative h-full min-h-[812px] sm:min-h-[753px] lg:min-h-[928px]"
      >
        <div className="caSpldeHeaderMain relative h-full min-h-[812px] sm:min-h-[753px] lg:min-h-[928px]">
          <Splide
            ref={(slider) => (refMainThumbs.current = slider)}
            tag="section"
            id="caSpldeHeader"
            aria-label={`${publicRuntimeConfig.siteAppName} (Main Thumbnails - Header Video)`}
            options={{
              updateOnMove: true,
              type: "fade",
              rewind: false,
              arrows: false,
              pagination: false,
              keyboard: true,
              omitEnd: true,
            }}
            className="caSpldeHeader h-full min-h-[812px] sm:min-h-[753px] lg:min-h-[928px] w-full"
          >
            <SplideSlide className="outline-none focus:outline-none overflow-hidden">
              <video
                ref={intVideo1}
                preload="auto"
                id="caVideoHeaderApp1"
                __idm_id__="true"
                className="aspect-video object-cover object-center h-full w-full"
                muted
                // autoPlay
                loop
                playsInline
              >
                <source
                  src={"/assets/video/ca-hero2022.mp4"}
                  type="video/mp4"
                />
              </video>
            </SplideSlide>
            <SplideSlide className="outline-none focus:outline-none overflow-hidden">
              <video
                ref={intVideo2}
                preload="auto"
                __idm_id__="true"
                className="aspect-video object-cover object-center h-full w-full"
                muted
                // autoPlay
                loop
                playsInline
              >
                <source
                  src={"/assets/video/ca-hero2023.mp4"}
                  type="video/mp4"
                />
              </video>
            </SplideSlide>
            <SplideSlide className="outline-none focus:outline-none overflow-hidden">
              <video
                ref={intVideo3}
                preload="auto"
                __idm_id__="true"
                className="aspect-video object-cover object-center h-full w-full"
                muted
                // autoPlay
                loop
                playsInline
              >
                <source
                  src={"/assets/video/ca-hero2024.mp4"}
                  type="video/mp4"
                />
              </video>
            </SplideSlide>
          </Splide>
        </div>
        <Container className="relative -mt-[305px] sm:-mt-[297px] lg:-mt-[359px] px-0 z-100">
          <section id="caHeaderMain" className="flex flex-col">
            <h1 className="text-white font-bevietnamPro text-[32px] sm:text-[46px] lg:text-[56px] leading-[42px] sm:leading-[66px] lg:leading-[78px] font-bold uppercase px-4 sm:px-0">
              Asia's Largest Web3 Festival. Where Innovation Meets Adoption
            </h1>
            <div className="relative mt-4">
              <Splide
                tag="section"
                ref={(slider) => (refSpldeThumbs.current = slider)}
                id="caSpldeHeaderThumb"
                aria-label={`${publicRuntimeConfig.siteAppName} (Thumbnails - Header Video)`}
                options={{
                  updateOnMove: true,
                  gap: "16px",
                  fixedWidth: "464px",
                  fixedHeight: "284px",
                  keyboard: true,
                  arrows: false,
                  pagination: false,
                  omitEnd: true,
                  mediaQuery: "max",
                  breakpoints: {
                    1080: {
                      fixedWidth: "373px",
                      fixedHeight: "228px",
                    },
                    640: {
                      fixedWidth: "290px",
                      fixedHeight: "199px",
                      padding: { left: "16px", right: "16px" },
                    },
                  },
                }}
                className="caSpldeHeaderThumb caSpldeBox"
              >
                <SplideSlide className="rounded-2xl cursor-pointer outline-none focus:outline-none overflow-hidden">
                  <div className="caSpldeBoxImags absolute inset-y-0 inset-x-0 z-[4]">
                    <Image
                      className="object-cover object-center h-full w-full"
                      src="/assets/images/header/caThumbnail-website2022.jpg"
                      alt={`${publicRuntimeConfig.siteAppName} (Thumbnails - Website 2022)`}
                      height={426}
                      width={680}
                      quality="87"
                    />
                  </div>
                  <div className="absolute top-auto bottom-4 lg:bottom-6 inset-x-5 lg:inset-x-7 z-10">
                    <h2 className="text-white font-bevietnamPro text-base lg:text-2xl font-bold uppercase">
                      2022 Beach Club
                    </h2>
                  </div>
                </SplideSlide>
                <SplideSlide className="rounded-2xl cursor-pointer outline-none focus:outline-none overflow-hidden">
                  <div className="caSpldeBoxImags absolute inset-y-0 inset-x-0 z-[4]">
                    <Image
                      className="object-cover object-center h-full w-full"
                      src="/assets/images/header/caThumbnail-website2023.jpg"
                      alt={`${publicRuntimeConfig.siteAppName} (Thumbnails - Website 2023)`}
                      height={426}
                      width={680}
                      quality="87"
                    />
                  </div>
                  <div className="absolute top-auto bottom-4 lg:bottom-6 inset-x-5 lg:inset-x-7 z-10">
                    <h2 className="text-white font-bevietnamPro text-base lg:text-2xl font-bold uppercase">
                      2023 Clifftop
                    </h2>
                  </div>
                </SplideSlide>
                <SplideSlide className="rounded-2xl cursor-default outline-none focus:outline-none overflow-hidden">
                  <div className="caSpldeBoxImags absolute inset-y-0 inset-x-0 z-[8]">
                    <Image
                      className="object-cover object-center h-full w-full"
                      src="/assets/images/header/caThumbnail-website2024.jpg"
                      alt={`${publicRuntimeConfig.siteAppName} (Thumbnails - Website 2024)`}
                      height={426}
                      width={680}
                      quality="87"
                    />
                  </div>
                  <div className="absolute top-auto bottom-4 lg:bottom-6 inset-x-5 lg:inset-x-7 z-10">
                    <h2 className="text-white font-bevietnamPro text-base lg:text-2xl font-bold uppercase">
                      2024 Oasis
                    </h2>
                  </div>
                </SplideSlide>
                <SplideSlide className="rounded-2xl cursor-default outline-none focus:outline-none overflow-hidden">
                  <div className="caSpldeBoxImags absolute inset-y-0 inset-x-0 z-[8]">
                    <Image
                      className="object-cover object-center h-full w-full"
                      src="/assets/images/header/caThumbnail-website2024.jpg"
                      alt={`${publicRuntimeConfig.siteAppName} (Thumbnails - Website 2024)`}
                      height={426}
                      width={680}
                      quality="87"
                    />
                  </div>
                  <div className="absolute top-auto bottom-4 lg:bottom-6 inset-x-5 lg:inset-x-7 z-10">
                    <h2 className="text-white font-bevietnamPro text-base lg:text-2xl font-bold uppercase">
                      2025{" "}
                      <span className="filter blur-[10px]">Coming Soon</span>
                    </h2>
                  </div>
                  <div className="absolute top-4 lg:top-6 bottom-auto inset-x-4 lg:inset-x-6 z-10">
                    <span className="bg-primary flex items-center justify-center rounded-md sm:rounded-[10px] text-white font-bevietnamPro text-xs sm:text-sm font-semibold relative py-1.5 sm:py-2 px-2 sm:px-3 w-max">
                      Coming Soon
                    </span>
                  </div>
                </SplideSlide>
              </Splide>
            </div>
          </section>
        </Container>
      </header>
    </>
  );
};
export default Header;
