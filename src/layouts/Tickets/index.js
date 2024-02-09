import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

// @components
import Container from "@components/Container";

const DefaultTicket = () => {
  const mdlBtnNewsletter = useRef(null);

  // @preline (Add Plugins)
  useEffect(() => {
    import("preline");

    return () => {
      undefined;
    };
  }, []);

  return (
    <>
      <section className="ca2024SldeTicket bg-secondary2024 snap-always snap-start flex flex-col items-center justify-center overflow-hidden relative h-full min-h-svh xl:min-h-screen">
        <div className="ca2024SldeTicketsPointTop bg-transparent absolute top-10 bottom-auto inset-x-0 h-14 w-full select-none pointer-events-none z-px"></div>

        {/* @background (backdrop) */}
        <div className="ca2024SpeakersStartBackdrop absolute inset-y-0 inset-x-0 z-px">
          <Image
            className="ca2024BgRotate-Backdrop object-center object-cover mx-auto h-full w-full z-10"
            src={"/assets/images/backdrop/ca2024BgLine.jpg"}
            alt={`Coinfest Asia 2024 (Background Start Speaker - Backdrop)`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 80vw"
            height={900}
            width={1440}
            quality="87"
          />
        </div>

        {/* @point-items (backdrop) */}
        <div className="ca2024SldeSpeakersStartPointsItems bg-transparent absolute top-auto -bottom-[229px] sm:-bottom-[405px] 2xl:-bottom-[527px] left-auto -right-[203px] sm:-right-[325px] lg:-right-[415px] select-none pointer-events-none z-px opacity-1 transition duration-[0.8s] ease-out">
          <Image
            className="object-center object-cover mx-auto h-auto w-[471px] sm:w-[771px] lg:w-[971px] z-10"
            src={"/assets/images/backdrop/ca2024PointItems.png"}
            alt={`Coinfest Asia 2024 (Start Speakers Points Items)`}
            height={1635}
            width={958}
            quality="87"
          />
        </div>

        {/* @content */}
        <Container className="overflow-hidden relative z-[5]">
          <div className="flex flex-col overflow-hidden relative pt-[144px] pb-[172px]">
            <div className="ca2024SldeTicketContentTitle flex flex-col items-start justify-start opacity-1 transition duration-[1.2s] ease-out">
              <h2 className="text-white font-staraExtraBold text-[44px] sm:text-[58px] lg:text-[80px] leading-[52px] sm:leading-[74px] lg:leading-[90px] text-start uppercase w-ful max-w-full sm:max-w-[445px] lg:max-w-[677px]">
                Tickets Coming Soon
              </h2>
            </div>

            <div className="supports-grid:grid grid-cols-4 sm:grid-cols-12 lg:grid-cols-12 gap-y-2 gap-x-2 mt-8 relative">
              <div className="col-span-full lg:col-span-4">
                <div className="bg-white rounded-[10px] flex flex-col relative py-4 sm:py-6 px-4 sm:px-6">
                  <h3 className="text-black-900 font-bevietnamPro text-base sm:text-xl font-semibold">
                    Festival Ticket
                  </h3>
                  <p className="text-black-900 font-bevietnamPro text-base font-normal mt-0 sm:mt-1">
                    Coming Soon
                  </p>
                </div>
              </div>
              <div className="col-span-full lg:col-span-4">
                <div className="bg-white rounded-[10px] flex flex-col relative py-4 sm:py-6 px-4 sm:px-6">
                  <h3 className="text-black-900 font-bevietnamPro text-base sm:text-xl font-semibold">
                    Group Package
                  </h3>
                  <p className="text-black-900 font-bevietnamPro text-base font-normal mt-0 sm:mt-1">
                    Coming Soon
                  </p>
                </div>
              </div>
              <div className="col-span-full lg:col-span-4">
                <div className="bg-white rounded-[10px] flex flex-col relative py-4 sm:py-6 px-4 sm:px-6">
                  <h3 className="text-black-900 font-bevietnamPro text-base sm:text-xl font-semibold">
                    Bull Ticket
                  </h3>
                  <p className="text-black-900 font-bevietnamPro text-base font-normal mt-0 sm:mt-1">
                    Coming Soon
                  </p>
                </div>
              </div>
            </div>

            {/* @Modal (Newsletter) */}
            <div className="flex flex-col items-center justify-center mt-10">
              <button
                ref={mdlBtnNewsletter}
                id="mdlBtnNewsletter"
                className="mdlBtnNewsletter bg-primary inline-flex items-center justify-center rounded-[14px] text-black-900 font-bevietnamPro text-sm sm:text-xl font-medium relative outline-none focus-visible:outline-none py-4 px-6 w-full max-w-max"
                aria-labelledby="Modal Email Newsletter"
                data-hs-overlay="#mdlNewsletter"
              >
                Secure your spots
                <svg
                  className="ml-1 h-6 sm:h-8 w-6 sm:w-8"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.66602 16.0013H23.3327M23.3327 16.0013L17.2151 10.668M23.3327 16.0013L17.2151 21.3346"
                    stroke="#101010"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default DefaultTicket;
