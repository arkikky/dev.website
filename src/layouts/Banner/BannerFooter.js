import React from "react";
import Image from "next/image";
import Link from "next/link";

// @components
import Container from "@components/Container";

const BannerFooter = () => {
  return (
    <>
      <section className="relative flex flex-col pt-0 sm:pt-24 lg:pt-[123px] xl:pt-32">
        <Container>
          <div className="relative mt-0 flex h-full w-full flex-col items-start justify-center rounded-2xl bg-secondary px-4 py-8 sm:h-[483px] sm:rounded-[35px] sm:px-11 lg:px-17 xl:mt-[134px] xl:h-[614px]">
            <div className="absolute inset-x-0 inset-y-0 z-px overflow-hidden rounded-2xl sm:rounded-[35px]">
              <Image
                className="z-[5] mx-auto h-full w-full object-cover object-center"
                src={"/assets/images/backdrop/background/ca2024BgLine.jpg"}
                alt={`Coinfest Asia 2024 (Background Footer Banner)`}
                height={900}
                width={1440}
                quality="100"
                fetchPriority="low"
              />
            </div>

            {/* @statue-items (backdrop) */}
            <div className="opacity-1 pointer-events-none absolute bottom-0 left-auto right-0 top-auto z-10 hidden select-none bg-transparent transition duration-[1s] ease-out xl:flex">
              <Image
                className="z-10 mx-auto h-auto w-[471px] object-cover object-center sm:w-[771px] lg:w-[702px]"
                src={"/assets/images/backdrop/statue/ca2024StatueBanner.png"}
                alt={`Coinfest Asia 2024 (Statue Footer Banner)`}
                height={976}
                width={753}
                quality="87"
                fetchPriority="low"
              />
            </div>

            <div className="relative z-10 flex w-full max-w-[697px] flex-col items-start justify-start">
              <h2 className="font-staraExtraBold text-[32px] uppercase leading-[35px] text-white sm:text-[58px] sm:leading-[74px] xl:text-[80px] xl:leading-[90px]">
                Join Asia's Immersive Web3 Festival
              </h2>
              <div className="mt-4 flex w-full flex-col sm:mt-8 sm:w-max">
                <Link
                  className="relative inline-flex w-full max-w-max items-center justify-center rounded-xl bg-primary px-3 py-3.5 font-bevietnamPro text-sm font-medium text-black-900 outline-none focus-visible:outline-none sm:rounded-[14px] sm:px-6 sm:py-6 sm:text-xl"
                  href={"https://ticket.coinfest.asia/"}
                >
                  Secure your spots now
                  <svg
                    className="ml-1 h-6 w-6 sm:h-10 sm:w-10"
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
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default BannerFooter;
