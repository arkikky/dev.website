import React, { useEffect } from "react";
import Image from "next/image";

// @components
import Container from "@components/Container";

const StartSpeakers = () => {
  return (
    <>
      <section className="ca2024MainPoints ca2024StartSpeakers ca2024MainScreen relative flex snap-center snap-always flex-col items-center justify-center overflow-hidden bg-secondary">
        {/* @point-items (backdrop) */}
        <div className="ca2024StartSpeakersPoints opacity-1 pointer-events-none absolute -bottom-[229px] -right-[203px] left-auto top-auto z-[5] select-none bg-transparent transition duration-[0.8s] ease-out sm:-bottom-[405px] sm:-right-[325px] lg:-right-[415px] 2xl:-bottom-[527px]">
          <Image
            className="z-10 mx-auto h-auto w-[471px] object-cover object-center sm:w-[771px] lg:w-[971px]"
            src={"/assets/images/backdrop/ca2024PointItems.png"}
            alt={`Coinfest Asia 2024 (Points Items Start Speakers)`}
            height={1635}
            width={958}
            quality={87}
          />
        </div>

        <Container className="relative z-[5]">
          <div className="ca2024StartSpeakersContent flex flex-col text-start transition duration-[1.2s] ease-out">
            <h2 className="font-staraExtraBold text-[32px] uppercase leading-[40px] text-white sm:text-[58px] sm:leading-[74px] lg:text-[80px] lg:leading-[90px] xl:text-[72px] xl:leading-[86px] 2xl:text-[80px] 2xl:leading-[90px]">
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
