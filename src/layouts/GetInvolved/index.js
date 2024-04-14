import React from "react";
import Image from "next/image";
import Link from "next/link";

// @components
import Container from "@components/Container";
import GetInvolvedCard from "@components/UI/Card/GetInvolved";

const GetInvolved = () => {
  return (
    <>
      <section className="ca2024MainPoints ca2024GetInvolved ca2024MainScreenAuto relative z-20 flex snap-start snap-always flex-col items-start justify-start overflow-hidden bg-secondary">
        {/* @background (backdrop) */}
        <div className="ca2024GetInvolvedBackdrop opacity-1 absolute inset-x-0 inset-y-0 z-px">
          <Image
            className={`mx-auto h-full w-full object-cover object-top`}
            src={"/assets/images/backdrop/background/ca2024BgLineRotate.jpg"}
            alt={`Coinfest Asia 2024 (Background Backdrop Start Tickets)`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            height={1262}
            width={1440}
            quality={87}
          />
        </div>

        {/* @point-items (backdrop) */}
        <div className="overflow-hidden">
          <div className="ca2024GetInvolvedPointsItems opacity-1 pointer-events-none absolute -bottom-17 -left-[227px] right-auto z-px select-none bg-transparent transition duration-[0.8s] ease-out sm:-bottom-[133px] sm:-left-[479px] sm:top-auto lg:-bottom-[179px] lg:-left-[637px] xl:-bottom-[185px] xl:-left-[493px]">
            <Image
              className="mx-auto h-auto w-[371px] object-cover object-center sm:w-[871px] lg:w-[1113px]"
              src={"/assets/images/backdrop/statue/ca2024StatueLeft.png"}
              alt={`Coinfest Asia 2024 (Statue Items - Left)`}
              height={1556}
              width={1224}
              quality="87"
            />
          </div>
          <div className="ca2024GetInvolvedPointsItems opacity-1 pointer-events-none absolute -bottom-[46px] -right-28 left-auto top-auto z-px select-none bg-transparent transition duration-[0.8s] ease-out sm:-bottom-[231px] sm:-right-[350px] lg:-bottom-[139px] lg:-right-[350px] xl:-bottom-[101px] xl:-right-[280px] 2xl:-right-[180px]">
            <Image
              className="mx-auto h-auto w-[221px] object-cover object-center sm:w-[643px] lg:w-[715px]"
              src={"/assets/images/backdrop/statue/ca2024StatueRight.png"}
              alt={`Coinfest Asia 2024 (Statue Items - Right)`}
              height={1389}
              width={1073}
              quality="87"
            />
          </div>
        </div>

        {/* @main */}
        <Container className="relative z-[5]">
          <div className="relative flex flex-col overflow-hidden pb-[299px] pt-[144px]">
            <div className="ca2024SldeGetInvolvedTitle opacity-1 flex flex-col px-0 text-start transition duration-[1.2s] ease-out sm:px-32 sm:text-center xl:px-0">
              <h2 className="w-full max-w-[243px] font-staraExtraBold text-[58px] uppercase leading-[62px] text-white xs:max-w-full sm:text-[58px] sm:leading-[74px] lg:text-[80px] lg:leading-[90px]">
                Get involved for 2024
              </h2>
            </div>

            <div className="relative mt-8 grid-cols-4 gap-x-2 gap-y-2 supports-grid:grid sm:grid-cols-12 lg:grid-cols-12">
              <div className="col-span-full col-start-1 grid-cols-4 gap-x-2 gap-y-2 supports-grid:grid sm:grid-cols-12 sm:gap-x-6 sm:gap-y-6 lg:col-span-10 lg:col-start-2 lg:grid-cols-12 xl:col-span-8 xl:col-start-3">
                <div className="col-span-2 sm:col-span-6">
                  <GetInvolvedCard url="/get-involved/speakers" label="Speaker">
                    <Image
                      className="mx-auto h-full w-full object-cover object-bottom"
                      src={"/assets/images/get-involved/ca2024Speaker.png"}
                      alt={`Coinfest Asia 2024 (Speaker - Get Involved)`}
                      height={379}
                      width={629}
                      quality="87"
                    />
                  </GetInvolvedCard>
                </div>
                <div className="col-span-2 sm:col-span-6">
                  <GetInvolvedCard
                    url="/get-involved/sponsorship"
                    label="Sponsor"
                  >
                    <Image
                      className="mx-auto h-full w-full scale-[1.2] transform object-cover object-center"
                      src={"/assets/images/get-involved/ca2024Sponsorship.png"}
                      alt={`Coinfest Asia 2024 (Sponsorship - Get Involved)`}
                      height={354}
                      width={588}
                      quality="87"
                    />
                  </GetInvolvedCard>
                </div>
                <div className="col-span-2 sm:col-span-6">
                  <GetInvolvedCard
                    url="/get-involved/media-partner"
                    label="Media Partner"
                  >
                    <Image
                      className="mx-auto h-full w-full scale-[1.5] transform object-cover object-center"
                      src={
                        "/assets/images/get-involved/ca2024MediaPartners.jpg"
                      }
                      alt={`Coinfest Asia 2024 (Media Partners - Get Involved)`}
                      height={667}
                      width={1000}
                      quality="87"
                    />
                  </GetInvolvedCard>
                </div>
                <div className="col-span-2 sm:col-span-6">
                  <GetInvolvedCard
                    url="/get-involved/community"
                    label="Community"
                  >
                    <Image
                      className="mx-auto h-full w-full scale-[1.4] transform object-cover object-center"
                      src={"/assets/images/get-involved/ca2024Community.jpg"}
                      alt={`Coinfest Asia 2024 (Community - Get Involved)`}
                      height={563}
                      width={1000}
                      quality="87"
                    />
                  </GetInvolvedCard>
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
