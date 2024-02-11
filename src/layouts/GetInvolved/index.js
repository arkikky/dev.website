import React from "react";
import Image from "next/image";
import Link from "next/link";

// @components
import Container from "@components/Container";
import BoxGetInvolved from "@components/UI/Card/BoxGetInvolved";

const GetInvolved = () => {
  return (
    <>
      <section className="ca2024GetInvolved bg-secondary snap-always snap-start flex flex-col items-center justify-center relative h-auto min-h-[auto]">
        <div className="ca2024GetInvolvedPointTop bg-transparent absolute top-10 bottom-auto inset-x-0 h-14 w-full select-none pointer-events-none z-px transition duration-[0.8s] ease-linear"></div>

        {/* @background (backdrop) */}
        <div className="ca2024GetInvolvedBackdrop absolute inset-y-0 inset-x-0 z-px">
          <Image
            className="ca2024BgRotate-Backdrop object-center object-cover mx-auto h-full w-full z-10"
            src={"/assets/images/backdrop/ca2024BgLine.jpg"}
            alt={`Coinfest Asia 2024 (Background Get Involved - Backdrop)`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 80vw"
            height={900}
            width={1440}
            quality="87"
          />
        </div>

        {/* @pointItems (backdrop) */}
        <div className="ca2024GetInvolvedStartPointsItems bg-transparent absolute sm:top-auto -bottom-17 sm:-bottom-[133px] lg:-bottom-[179px] xl:-bottom-[185px] right-auto -left-[227px] sm:-left-[479px] lg:-left-[637px] xl:-left-[493px] select-none pointer-events-none z-20 opacity-1 transition duration-[0.8s] ease-out">
          <Image
            className="object-center object-cover mx-auto h-auto w-[371px] sm:w-[871px] lg:w-[1113px]"
            src={"/assets/images/backdrop/ca2024StatueLeft.png"}
            alt={`Coinfest Asia 2024 (Statue Items - Left)`}
            height={1556}
            width={1224}
            quality="87"
          />
        </div>
        <div className="ca2024GetInvolvedStartPointsItems bg-transparent absolute top-auto -bottom-[46px] sm:-bottom-[231px] lg:-bottom-[139px] xl:-bottom-[101px] left-auto -right-28 sm:-right-[350px] lg:-right-[350px] xl:-right-[280px] 2xl:-right-[180px] select-none pointer-events-none z-px opacity-1 transition duration-[0.8s] ease-out">
          <Image
            className="object-center object-cover mx-auto h-auto w-[221px] sm:w-[643px] lg:w-[715px]"
            src={"/assets/images/backdrop/ca2024StatueRight.png"}
            alt={`Coinfest Asia 2024 (Statue Items - Right)`}
            height={1389}
            width={1073}
            quality="87"
          />
        </div>

        {/* @content */}
        <Container className="overflow-hidden relative z-[20]">
          <div className="ca2024GetInvolvedContent flex flex-col overflow-hidden relative pt-[144px] pb-[252px] opacity-1 transition duration-[1s] ease-out">
            <div className="ca2024GetInvolvedTitle flex flex-col text-start sm:text-center px-0 sm:px-32 xl:px-0 opacity-1 transition duration-[1.2s] ease-out">
              <h2 className="text-white font-staraExtraBold text-[58px] sm:text-[58px] lg:text-[80px] leading-[62px] sm:leading-[74px] lg:leading-[90px] uppercase w-full max-w-[243px] xs:max-w-full">
                Get involved for 2024
              </h2>
            </div>

            <div className="supports-grid:grid grid-cols-4 sm:grid-cols-12 lg:grid-cols-12 gap-y-2 gap-x-2 mt-8 relative">
              <div className="col-start-1 lg:col-start-2 xl:col-start-3 col-span-full lg:col-span-10 xl:col-span-8 supports-grid:grid grid-cols-4 sm:grid-cols-12 lg:grid-cols-12 gap-y-2 sm:gap-y-6 gap-x-2 sm:gap-x-6">
                <div className="col-span-2 sm:col-span-6">
                  <BoxGetInvolved
                    url={"/get-involved/speakers"}
                    title="Speaker"
                    images="/assets/images/get-involved/ca2024GetInvolved-Speaker.png"
                  />
                </div>
                <div className="col-span-2 sm:col-span-6">
                  <BoxGetInvolved
                    url={"/get-involved/sponsorship"}
                    title="Sponsor"
                    images="/assets/images/get-involved/ca2024GetInvolved-Sponsor.png"
                  />
                </div>
                <div className="col-span-2 sm:col-span-6">
                  <BoxGetInvolved
                    url={"/get-involved/media-partner"}
                    title="Media"
                    images="/assets/images/get-involved/ca2024GetInvolved-Media.jpg"
                    scale={true}
                  />
                </div>
                <div className="col-span-2 sm:col-span-6">
                  <BoxGetInvolved
                    url={"/get-involved/community"}
                    title="Community"
                    images="/assets/images/get-involved/ca2024GetInvolved-Community.jpg"
                    scale={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default GetInvolved;
