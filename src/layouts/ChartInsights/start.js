import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

// @components
import Container from "@components/Container";

// @layout
import Benefit from "@layouts/Benefit";

const ChartInsightStart = () => {
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   ScrollTrigger.defaults({
  //     scroller: ".ca2024Main",
  //     // scroller: "body",
  //   });

  //   const ca24ChartInsightStart = gsap.context(() => {
  //     const tl = gsap.timeline({
  //       duration: 1,
  //       delay: 0.5,
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: ".ca2024SldeChartInsightStart",
  //         end: "bottom 100%",
  //         scrub: 1,
  //       },
  //     });

  //     tl.fromTo(
  //       ".ca2024SldeChartInsightStartContent",
  //       {
  //         y: "-100%",
  //         opacity: 0,
  //       },
  //       {
  //         y: "0px",
  //         opacity: 1,
  //       }
  //     );
  //   });

  //   return () => {
  //     ca24ChartInsightStart.revert();
  //   };
  // }, []);

  return (
    <>
      <section className="ca2024SectionAuto ca2024SldeChartInsight snap-always snap-start flex flex-col">
        <div className="ca2024Section ca2024SldeChartInsightStart bg-white flex flex-col items-center justify-center relative">
          {/* @background (backdrop) */}
          <div className="ca2024SldeSpeakersBackdrop absolute inset-y-0 inset-x-0 z-px">
            <Image
              className="object-center object-cover mx-auto h-full w-full z-10"
              src={"/2024/assets/images/backdrop/ca2024BgLine-White.jpg"}
              alt={`Coinfest Asia 2024 (Background Chart Insight - Backdrop)`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              height={870}
              width={641}
              quality="87"
            />
          </div>

          {/* @itemsLeft (backdrop) */}
          <div className="ca2024SldeChartInsightItemsLeft bg-transparent absolute bottom-auto -top-[120px] sm:-top-[163px] lg:-top-[197px] right-auto left-2 sm:left-[18%] lg:left-[17%] xl:left-[14%] select-none pointer-events-none z-px opacity-1 transition duration-[1.4s] delay-[0.3s] ease-in-out">
            <Image
              className="object-center object-cover mx-auto h-auto w-[241px] sm:w-[323px] lg:w-[415px] xl:w-[383px] z-10"
              src={
                "/2024/assets/images/backdrop/ca2024PointItems-DiamondBlue.png"
              }
              alt={`Coinfest Asia 2024 (ChartInsight Items - Right)`}
              height={1112}
              width={620}
              quality="87"
            />
          </div>

          <div className="ca2024SldeChartInsightItemsLeft bg-transparent absolute top-auto -bottom-[120px] sm:-bottom-[163px] lg:-bottom-[197px] right-auto left-2 sm:left-[18%] lg:left-[17%] xl:left-[25%] select-none pointer-events-none z-px opacity-1 transition duration-[1.4s] delay-[0.3s] ease-in-out">
            <Image
              className="object-center object-cover mx-auto h-auto w-[341px] sm:w-[463px] lg:w-[555px] xl:w-[523px] z-10"
              src={
                "/2024/assets/images/backdrop/ca2024PointItems-FlowerBlue.png"
              }
              alt={`Coinfest Asia 2024 (ChartInsight Items - Right)`}
              height={690}
              width={818}
              quality="87"
            />
          </div>

          {/* @itemsRight (backdrop) */}
          <div className="ca2024SldeChartInsightItemsRight bg-transparent absolute top-auto bottom-[39%] sm:bottom-[35%] lg:bottom-[41%] xl:bottom-[21%] left-auto -right-24 sm:-right-32 lg:-right-24 xl:right-5 select-none pointer-events-none z-px opacity-1 transition duration-[1.2s] ease-in-out">
            <Image
              className="object-center object-cover mx-auto h-auto w-[231px] sm:w-[315px] lg:w-[385px] z-10"
              src={
                "/2024/assets/images/backdrop/ca2024PointItems-BitcoinRed.png"
              }
              alt={`Coinfest Asia 2024 (ChartInsight Items - Right)`}
              height={1044}
              width={859}
              quality="87"
            />
          </div>

          <Container className="ca2024SldeChartInsightStartContent relative opacity-1 z-[5] transition-all duration-300 ease-out">
            <div className="flex flex-col items-center justify-center text-start">
              <h1 className="text-black-900 font-staraExtraBold text-[42px] sm:text-[58px] lg:text-[80px] leading-[50px] sm:leading-[74px] lg:leading-[90px] uppercase">
                Coinfest immerses you directly into adoption, innovation, and
                emerging markets in Asia
              </h1>
            </div>
          </Container>
        </div>
        <div className="relative">
          <Container className="ca2024ChartInsight relative">
            <div className="supports-grid:grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-4 sm:gap-y-8 gap-x-8 mt-[148px] sm:mt-[198px] lg:mt-[228px]">
              <div className="col-span-full sm:col-span-4 lg:col-span-6">
                <div className="flex flex-col border border-solid border-[#DFDFDF] rounded-xl py-4 sm:py-8 px-5 sm:px-10 h-full">
                  <h2 className="text-black-900 font-staraExtraBold text-2xl sm:text-[44px] lg:text-[56px] sm:leading-[normal] uppercase">
                    6,000+
                  </h2>
                  <p className="text-black-900 font-bevietnamPro text-base font-normal">
                    Participants
                  </p>
                </div>
              </div>
              <div className="col-span-full sm:col-span-4 lg:col-span-6">
                <div className="flex flex-col border border-solid border-[#DFDFDF] rounded-xl py-4 sm:py-8 px-5 sm:px-10 h-full">
                  <h2 className="text-black-900 font-staraExtraBold text-2xl sm:text-[44px] lg:text-[56px] sm:leading-[normal] uppercase">
                    65+
                  </h2>
                  <p className="text-black-900 font-bevietnamPro text-base font-normal">
                    Countries
                  </p>
                </div>
              </div>
              <div className="col-span-full sm:col-span-4 lg:col-span-6">
                <div className="flex flex-col border border-solid border-[#DFDFDF] rounded-xl py-4 sm:py-8 px-5 sm:px-10 h-full">
                  <h2 className="text-black-900 font-staraExtraBold text-2xl sm:text-[44px] lg:text-[56px] sm:leading-[normal] uppercase">
                    250+
                  </h2>
                  <p className="text-black-900 font-bevietnamPro text-base font-normal">
                    Speakers
                  </p>
                </div>
              </div>
              <div className="col-span-full sm:col-span-4 lg:col-span-6">
                <div className="flex flex-col border border-solid border-[#DFDFDF] rounded-xl py-4 sm:py-8 px-5 sm:px-10 h-full">
                  <h2 className="text-black-900 font-staraExtraBold text-2xl sm:text-[44px] lg:text-[56px] sm:leading-[normal] uppercase">
                    80+
                  </h2>
                  <p className="text-black-900 font-bevietnamPro text-base font-normal">
                    Sponsors
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* @benefit */}
        <div className="ca2024SectionAuto bg-white ca2024Benefit relative pt-14 sm:pt-32 pb-[192px]">
          <Benefit />
        </div>
      </section>
    </>
  );
};

export default ChartInsightStart;
