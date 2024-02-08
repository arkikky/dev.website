import React, { useEffect } from "react";
import Image from "next/image";

// @components
import Container from "@components/Container";

const StartSpeakers = () => {
  return (
    <>
      <section className="ca2024StartSpeaker snap-center snap-always flex flex-col items-center justify-center overflow-hidden relative h-svh min-h-svh">
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
        <Container className="relative z-[5]">
          <div className="ca2024StartSpeakerContent flex flex-col text-start opacity-1 transition duration-[1.2s] ease-out">
            <h2 className="text-white font-staraExtraBold text-[32px] sm:text-[58px] lg:text-[80px] xl:text-[62px] 2xl:text-[80px] leading-[40px] sm:leading-[74px] lg:leading-[90px] xl:leading-[70px] 2xl:leading-[90px] uppercase">
              Connect with over 6,000+ people in Southeast Asia; the
              fastest-growing Web3 region in the world!
            </h2>
          </div>
        </Container>
      </section>
    </>
  );
};

export default StartSpeakers;
