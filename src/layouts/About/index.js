import React from "react";
import Image from "next/image";

// @components
import Container from "@components/Container";

const About = () => {
  return (
    <>
      <section className="ca2024MainPoints ca2024AboutPoints snap-always snap-start bg-white flex flex-col items-center justify-center relative h-svh xl:h-screen min-h-svh xl:min-h-screen">
        {/* @background (backdrop) */}
        <div className="ca2024AboutBackdrop absolute inset-y-0 inset-x-0 z-px">
          <Image
            className="object-center object-cover mx-auto h-full w-full z-10"
            src={"/assets/images/backdrop/ca2024BgLineWhite.jpg"}
            alt={`Coinfest Asia 2024 (Background Backdrop About)`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 80vw"
            height={1350}
            width={2160}
          />
        </div>

        {/* @items (backdrop) */}
        <div className="ca2024AboutsItemsLeft bg-transparent absolute bottom-auto -top-[120px] sm:-top-[163px] lg:-top-[197px] right-auto left-2 sm:left-[18%] lg:left-[17%] xl:left-[14%] select-none pointer-events-none z-px opacity-1">
          <Image
            className="object-center object-cover mx-auto h-auto w-[211px] sm:w-[323px] lg:w-[415px] xl:w-[383px] z-10"
            src={"/assets/images/backdrop/ca2024DiamondBlue.png"}
            alt={`Coinfest Asia 2024 (Diamond Blue - About)`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            height={870}
            width={641}
            quality="87"
          />
        </div>

        <div className="ca2024AboutsItemsLeft bg-transparent absolute top-auto -bottom-[120px] sm:-bottom-[163px] lg:-bottom-[197px] right-auto left-2 sm:left-[18%] lg:left-[17%] xl:left-[25%] select-none pointer-events-none z-px opacity-1">
          <Image
            className="object-center object-cover mx-auto h-auto w-[301px] sm:w-[463px] lg:w-[555px] xl:w-[523px] z-10"
            src={"/assets/images/backdrop/ca2024FlowerBlue.png"}
            alt={`Coinfest Asia 2024 (Flower Blue Items - About)`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            height={690}
            width={818}
            quality="87"
          />
        </div>

        <div className="ca2024AboutsItemsRight bg-transparent absolute top-auto bottom-[39%] sm:bottom-[35%] lg:bottom-[41%] xl:bottom-[21%] left-auto -right-24 sm:-right-32 lg:-right-24 xl:right-5 select-none pointer-events-none z-px opacity-1">
          <Image
            className="object-center object-cover mx-auto h-auto w-[211px] sm:w-[315px] lg:w-[385px] z-10"
            src={"/assets/images/backdrop/ca2024BitcoinRed.png"}
            alt={`Coinfest Asia 2024 (Bitcoin Red Items - About)`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            height={853}
            width={646}
            quality="87"
          />
        </div>

        {/* @content */}
        <Container className="ca2024AboutsStartContent relative opacity-1 z-[5]">
          <div className="flex flex-col items-center justify-center text-start">
            <h1 className="text-black-900 font-staraExtraBold text-[32px] sm:text-[58px] lg:text-[80px] xl:text-[72px] 2xl:text-[80px] leading-[40px] sm:leading-[74px] lg:leading-[90px] xl:leading-[86px] 2xl:leading-[90px] uppercase">
              Coinfest immerses you directly into adoption, innovation, and
              emerging markets in Asia
            </h1>
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;
