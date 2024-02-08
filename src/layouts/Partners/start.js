import React, { useEffect } from "react";
import Image from "next/image";

// @components
import Container from "@components/Container";

const StartPartners = () => {
  return (
    <>
      <section className="ca2024StartPartners snap-always snap-start flex flex-col items-center justify-center overflow-hidden relative h-svh sm:h-screen min-h-svh sm:min-h-screen transition duration-[1s] ease-in-out">
        {/* <div className="ca2024OpenBackdrop absolute inset-y-0 inset-x-0 opacity-1 z-[2] transition duration-[1s] ease-out">
          <Image
            className="ca2024BgRotate-Backdrop object-center object-cover mx-auto h-full sm:h-auto w-full z-10"
            src={"/assets/images/backdrop/ca2024BgLine.jpg"}
            alt={`Coinfest Asia 2024 (Background Line Partners)`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 80vw"
            height={900}
            width={1440}
            quality="87"
          />
        </div> */}

        {/* @background (backdrop) */}
        <div className="absolute inset-y-0 inset-x-0 z-px">
          <Image
            className="ca2024BgRotate-Backdrop object-center object-cover mx-auto h-full sm:h-auto w-full z-[8]"
            src={"/assets/images/backdrop/ca2024BgLineWhite.jpg"}
            alt={`Coinfest Asia 2024 (Background Line White Partners)`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 80vw"
            height={900}
            width={1440}
            quality="87"
          />
        </div>

        {/* @point-items (backdrop) */}
        <div className="ca2024SldePartnersItemsLeft bg-transparent absolute top-auto -bottom-[117px] sm:-bottom-[163px] lg:-bottom-[187px] right-auto -left-[53px] sm:left-4 lg:left-6 xl:left-[43px] select-none pointer-events-none z-px opacity-1 transition duration-[1.4s] delay-[0.3s] ease-in-out">
          <Image
            className="object-center object-cover mx-auto h-auto w-[191px] sm:w-[261px] lg:w-[323px] xl:w-[351px] 2xl:w-[412px] z-10"
            src={"/assets/images/backdrop/ca2024DiamondPointItems.png"}
            alt={`Coinfest Asia 2024 (Diamond Partners Items)`}
            height={1112}
            width={620}
            quality="87"
          />
        </div>
        <div className="ca2024SldePartnersItemsRight bg-transparent absolute top-auto bottom-[39%] xl:bottom-15 left-auto -right-24 sm:-right-[143px] select-none pointer-events-none z-px opacity-1 transition duration-[1.2s] ease-in-out">
          <Image
            className="object-center object-cover mx-auto h-auto w-[231px] sm:w-[385px] lg:w-[455px] 2xl:w-[495px] z-10"
            src={"/assets/images/backdrop/ca2024FlowerPointItems.png"}
            alt={`Coinfest Asia 2024 (Flower Partners Items)`}
            height={1044}
            width={859}
            quality="87"
          />
        </div>

        <Container className=" relative opacity-1 z-[5]">
          <div className="ca2024SldePartnersNextContent flex flex-col items-center justify-center text-start opacity-1 transition duration-[1.3s] ease-in-out">
            <h2 className="text-black-900 font-staraExtraBold text-[32px] sm:text-[58px] lg:text-[80px] xl:text-[72px] 2xl:text-[80px] leading-[40px] sm:leading-[74px] lg:leading-[90px] xl:leading-[86px] 2xl:leading-[90px] uppercase">
              Showcase your innovations in Asia's emerging markets where
              adoption happens
            </h2>
          </div>
        </Container>
      </section>
    </>
  );
};

export default StartPartners;
