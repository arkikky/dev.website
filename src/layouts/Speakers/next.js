import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// @components
import Container from "@components/Container";

const NextSpeakers = (props) => {
  return (
    <>
      <section className="ca2024MainPoints ca2024NextSpeakers ca2024MainScreen relative flex snap-center snap-always flex-col items-center justify-center overflow-hidden bg-secondary">
        {/* @background (backdrop) */}
        <div className="ca2024NextSpeakersBackdrop opacity-1 absolute inset-x-0 inset-y-0 z-px">
          <Image
            className={`z-10 mx-auto h-full w-full object-cover object-center`}
            src={"/assets/images/backdrop/ca2024BgLine.jpg"}
            alt={`Coinfest Asia 2024 (Background Backdrop Start Speakers)`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            height={900}
            width={1440}
            quality="87"
          />
        </div>

        {/* @point-items (backdrop) */}
        <div className="opacity-1 pointer-events-none absolute -bottom-[229px] -right-[203px] left-auto top-auto z-px select-none bg-transparent transition duration-[0.8s] ease-out sm:-bottom-[405px] sm:-right-[325px] lg:-right-[415px] 2xl:-bottom-[527px]">
          <Image
            className="z-10 mx-auto h-auto w-[471px] object-cover object-center sm:w-[771px] lg:w-[971px]"
            src={"/assets/images/backdrop/ca2024PointItems.png"}
            alt={`Coinfest Asia 2024 (Points Items Start Speakers)`}
            height={1635}
            width={958}
            quality="87"
          />
        </div>

        <Container className=" relative z-[5]">
          <div className="ca2024NextSpeakersContent opacity-1 mx-auto flex w-full max-w-full flex-col items-center justify-center text-start transition duration-[1.4s] ease-out sm:max-w-[555px] sm:text-center lg:max-w-max">
            <h2 className="px-0 font-staraExtraBold text-[32px] uppercase leading-[40px] text-white xs:text-[42px] xs:leading-[50px] sm:text-[58px] sm:leading-[74px] lg:px-7 lg:text-[80px] lg:leading-[90px] xl:px-0">
              2024 speakers will be announced very soon!
            </h2>
            <div className="mt-8 flex w-full flex-col sm:w-max">
              <Link
                className="relative inline-flex w-full max-w-full items-center justify-center rounded-[14px] bg-primary px-6 py-4 font-bevietnamPro text-base font-medium text-black-900 outline-none focus-visible:outline-none sm:max-w-[334px] sm:text-xl lg:max-w-[365px]"
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

export default NextSpeakers;
