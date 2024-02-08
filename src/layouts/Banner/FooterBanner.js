import React from "react";
import Image from "next/image";

// @components
import Container from "@components/Container";

const FooterBanner = () => {
  return (
    <>
      <section className="flex flex-col relative pt-0 xl:pt-32 lg:pt-[123px]">
        <Container>
          <div className="bg-secondary2024 flex flex-col items-start justify-center rounded-2xl sm:rounded-[35px] relative mt-0 xl:mt-[134px] py-8 px-4 sm:px-11 lg:px-17 h-full sm:h-[483px] xl:h-[614px] w-full">
            {/* @background */}
            <div className="rounded-2xl sm:rounded-[35px] overflow-hidden absolute inset-y-0 inset-x-0 z-px">
              <Image
                className="object-center object-cover mx-auto h-auto w-full z-[5]"
                src={"/assets/images/backdrop/ca2024BgLine.jpg"}
                alt={`Coinfest Asia 2024 (Banner Footer)`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                height={614}
                width={1312}
                loading="lazy"
                quality="87"
              />
            </div>

            {/* @point-items (backdrop) */}
            <div className="hidden xl:flex bg-transparent absolute top-auto bottom-0 left-auto right-0 select-none pointer-events-none z-10">
              <Image
                className="object-center object-cover mx-auto h-auto w-[471px] sm:w-[771px] lg:w-[702px] z-10"
                src={"/assets/images/backdrop/ca2024FooterBanner.png"}
                alt={`Coinfest Asia 2024 (Banner Footer Points Items - Right)`}
                height={1365}
                width={1053}
                quality="87"
              />
            </div>

            {/* @content */}
            <div className="flex flex-col items-start justify-start relative w-full max-w-[697px] z-10">
              <h2 className="text-white font-staraExtraBold text-[32px] sm:text-[58px] xl:text-[80px] leading-[35px] sm:leading-[74px] xl:leading-[90px] uppercase">
                Join Asia's Immersive Web3 Festival
              </h2>
              <div className="flex flex-col mt-4 sm:mt-8 w-full sm:w-max">
                <button
                  id="mdlBtnBnnrFootr"
                  className="mdlBtnNewsletter bg-primary2024 inline-flex items-center justify-center rounded-[14px] text-black-900 font-bevietnamPro text-sm sm:text-xl font-medium relative outline-none focus-visible:outline-none py-4 sm:py-7 px-3 sm:px-6 w-full max-w-max"
                  aria-labelledby="Modal (Banner Footer)"
                  data-hs-overlay="#mdlNewsletter"
                >
                  Tickets Coming Soon
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
          </div>
        </Container>
      </section>
    </>
  );
};

export default FooterBanner;
