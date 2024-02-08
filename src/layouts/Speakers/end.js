import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// @components
import Container from "@components/Container";

const EndSpeakers = () => {
  return (
    <>
      <section className="ca2024EndSpeakers snap-start snap-always flex flex-col items-center justify-center overflow-hidden relative h-full min-h-svh xl:min-h-screen">
        <div className="ca2024SwipeUp absolute inset-y-0 inset-x-0 opacity-1 z-px transition duration-[1s] ease-out">
          <Image
            className="object-center object-cover mx-auto h-full sm:h-auto w-full z-10"
            src={"/assets/images/backdrop/ca2024BgLine.jpg"}
            alt={`Coinfest Asia 2024 (Background Next Speaker - Backdrop)`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 80vw"
            height={900}
            width={1440}
            quality="87"
          />
        </div>

        {/* @point-items (backdrop) */}
        <div className="ca2024EndSpeakersPointsItems bg-transparent absolute top-auto -bottom-[229px] sm:-bottom-[405px] 2xl:-bottom-[527px] left-auto -right-[203px] sm:-right-[325px] lg:-right-[415px] select-none pointer-events-none z-px opacity-1 transition duration-[1s] ease-out">
          <Image
            className="object-center object-cover mx-auto h-auto w-[471px] sm:w-[771px] lg:w-[971px] z-10"
            src={"/assets/images/backdrop/ca2024PointItems.png"}
            alt={`Coinfest Asia 2024 (End Speakers Points Items)`}
            height={1635}
            width={958}
            quality="87"
          />
        </div>

        {/* @content */}
        <Container className=" relative z-[5]">
          <div className="ca2024EndSpeakersContent flex flex-col items-center justify-center text-start sm:text-center w-full mx-auto max-w-full sm:max-w-[555px] lg:max-w-max opacity-1 transition duration-[1.4s] ease-out">
            <h2 className="text-white font-staraExtraBold text-[32px] sm:text-[58px] lg:text-[80px] xl:text-[62px] 2xl:text-[80px] leading-[40px] sm:leading-[74px] lg:leading-[90px] xl:leading-[70px] 2xl:leading-[90px] uppercase px-0 lg:px-7 xl:px-0">
              2024 speakers will be announced very soon!
            </h2>
            <div className="flex flex-col mt-4 w-full sm:w-max">
              <Link
                className="bg-primary inline-flex items-center justify-center rounded-[14px] text-black-900 font-bevietnamPro text-base sm:text-xl font-medium relative outline-none focus-visible:outline-none py-4 px-6 w-full max-w-full sm:max-w-[334px] lg:max-w-[365px]"
                href={"/get-involved/speakers"}
              >
                Apply as Speaker
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default EndSpeakers;
