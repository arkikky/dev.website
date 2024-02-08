import React from "react";
import Image from "next/image";
import Link from "next/link";

// @components
import Container from "@components/Container";

const DefaultGetInvolved = () => {
  return (
    <>
      <section className="ca2024SldeGetInvolved bg-secondary2024 snap-always snap-start flex flex-col items-center justify-center relative h-auto xs:h-full xl:h-full min-h-[auto] xs:min-h-screen lg:min-h-[auto] xl:min-h-screen">
        <div className="ca2024SldeGetInvolvedPointTop bg-transparent absolute top-10 bottom-auto inset-x-0 h-14 w-full select-none pointer-events-none z-px transition duration-[0.8s] ease-linear"></div>

        {/* @background (backdrop) */}
        <div className="ca2024SldeGetInvolvedBackdrop absolute inset-y-0 inset-x-0 z-px">
          <Image
            className="ca2024BgRotate-Backdrop object-center object-cover mx-auto h-full w-full z-10"
            src={"/2024/assets/images/backdrop/ca2024BgLine.jpg"}
            alt={`Coinfest Asia 2024 (Background Get Involved - Backdrop)`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            height={900}
            width={1440}
            quality="87"
          />
        </div>

        {/* @pointItems (backdrop) */}
        <div className="ca2024SldeGetInvolvedStartPointsItems bg-transparent absolute sm:top-auto -bottom-17 sm:-bottom-[133px] lg:-bottom-[179px] xl:-bottom-[185px] right-auto -left-[227px] sm:-left-[479px] lg:-left-[637px] xl:-left-[493px] select-none pointer-events-none z-20 opacity-1 transition duration-[0.8s] ease-out">
          <Image
            className="object-center object-cover mx-auto h-auto w-[371px] sm:w-[871px] lg:w-[1113px]"
            src={"/2024/assets/images/backdrop/ca2024GetInvolvedLeft.png"}
            alt={`Coinfest Asia 2024 (GetInvolved Items - Left)`}
            height={1389}
            width={1073}
            quality="87"
          />
        </div>
        <div className="ca2024SldeGetInvolvedStartPointsItems bg-transparent absolute top-auto -bottom-[46px] sm:-bottom-[231px] lg:-bottom-[139px] xl:-bottom-[101px] left-auto -right-28 sm:-right-[350px] lg:-right-[350px] xl:-right-[280px] 2xl:-right-[180px] select-none pointer-events-none z-px opacity-1 transition duration-[0.8s] ease-out">
          <Image
            className="object-center object-cover mx-auto h-auto w-[221px] sm:w-[643px] lg:w-[715px]"
            src={"/2024/assets/images/backdrop/ca2024GetInvolvedRight.png"}
            alt={`Coinfest Asia 2024 (GetInvolved Items - Right)`}
            height={1389}
            width={1073}
            quality="87"
          />
        </div>

        <Container className="overflow-hidden relative z-[20]">
          <div className="ca2024SldeGetInvolvedContent flex flex-col overflow-hidden relative pt-[144px] pb-[172px] opacity-1 transition duration-[1s] ease-out">
            <div className="ca2024SldeGetInvolvedTitle flex flex-col text-start sm:text-center px-0 sm:px-32 xl:px-0 opacity-1 transition duration-[1.2s] ease-out">
              <h2 className="text-white font-staraExtraBold text-[58px] sm:text-[58px] lg:text-[80px] leading-[62px] sm:leading-[74px] lg:leading-[90px] uppercase w-full max-w-[243px] xs:max-w-full">
                Get involved for 2024
              </h2>
            </div>

            <div className="supports-grid:grid grid-cols-4 sm:grid-cols-12 lg:grid-cols-12 gap-y-2 gap-x-2 mt-8 relative">
              <div className="col-start-1 lg:col-start-2 xl:col-start-3 col-span-full lg:col-span-10 xl:col-span-8 supports-grid:grid grid-cols-4 sm:grid-cols-12 lg:grid-cols-12 gap-y-2 sm:gap-y-6 gap-x-2 sm:gap-x-6">
                <div className="col-span-2 sm:col-span-6">
                  <Link href="/get-involved/speakers">
                    <div className="block rounded-[10px] overflow-hidden relative h-[120px] sm:h-[236px] w-full">
                      <div className="absolute inset-y-0 inset-x-0">
                        <Image
                          className="object-center object-cover mx-auto h-full w-full"
                          src={
                            "/2024/assets/images/get-involved/ca2024GetInvolved-Speaker.png"
                          }
                          alt={`Coinfest Asia 2024 (Speaker - Get Involved)`}
                          height={472}
                          width={784}
                          loading="lazy"
                          quality="87"
                        />
                      </div>
                      <div className="ca2024CvrOvrflyBackdrop flex flex-col items-end justify-end absolute inset-y-0 inset-x-0 z-[15]">
                        <div className="flex flex-row items-center justify-between pb-2 sm:pb-6 px-4 sm:px-6 w-full">
                          <h3 className="text-white font-bevietnamPro text-base sm:text-2xl font-medium">
                            Speaker
                          </h3>
                          <svg
                            className="h-6 sm:h-10 w-6 sm:w-10"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M28.7507 25.4167V11.25H14.584"
                              stroke="white"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M28.3333 11.6719L11.25 28.7552"
                              stroke="white"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-span-2 sm:col-span-6">
                  <div className="block rounded-[10px] overflow-hidden relative h-[120px] sm:h-[236px] w-full">
                    <Link href="/get-involved/sponsorship">
                      <div className="absolute inset-y-0 inset-x-0">
                        <Image
                          className="object-center object-cover mx-auto h-full w-full transform scale-[1.2]"
                          src="/2024/assets/images/get-involved/ca2024GetInvolved-Sponsor.png"
                          alt="Coinfest Asia 2024 (Sponsor - Get Involved)"
                          height={472}
                          width={784}
                          loading="lazy"
                          quality="87"
                        />
                      </div>
                      <div className="ca2024CvrOvrflyBackdrop flex flex-col items-end justify-end absolute inset-y-0 inset-x-0 z-[15]">
                        <div className="flex flex-row items-center justify-between pb-2 sm:pb-6 px-4 sm:px-6 w-full">
                          <h3 className="text-white font-bevietnamPro text-base sm:text-2xl font-medium">
                            Sponsor
                          </h3>
                          <svg
                            className="h-6 sm:h-10 w-6 sm:w-10"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M28.7507 25.4167V11.25H14.584"
                              stroke="white"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M28.3333 11.6719L11.25 28.7552"
                              stroke="white"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                {/* <div className="col-span-2 sm:col-span-6">
                  <div className="block rounded-[10px] overflow-hidden relative h-[120px] sm:h-[236px] w-full">
                    <div className="absolute inset-y-0 inset-x-0">
                      <Image
                        className="object-center object-cover mx-auto h-full w-full transform scale-[1.2]"
                        src={
                          "/2024/assets/images/get-involved/ca2024GetInvolved-Media.jpg"
                        }
                        alt={`Coinfest Asia 2024 (Media - Get Involved)`}
                        height={472}
                        width={784}
                        loading="lazy"
                        quality="87"
                      />
                    </div>
                    <div className="ca2024CvrOvrflyBackdrop flex flex-col items-end justify-end absolute inset-y-0 inset-x-0 z-[15]">
                      <div className="flex flex-row items-center justify-between pb-2 sm:pb-6 px-4 sm:px-6 w-full">
                        <h3 className="text-white font-bevietnamPro text-base sm:text-2xl font-medium">
                          Media
                        </h3>
                        <svg
                          className="h-6 sm:h-10 w-6 sm:w-10"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M28.7507 25.4167V11.25H14.584"
                            stroke="white"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M28.3333 11.6719L11.25 28.7552"
                            stroke="white"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-6">
                  <div className="block rounded-[10px] overflow-hidden relative h-[120px] sm:h-[236px] w-full">
                    <div className="absolute inset-y-0 inset-x-0">
                      <Image
                        className="object-center object-cover mx-auto h-full w-full transform scale-[1.5]"
                        src={
                          "/2024/assets/images/get-involved/ca2024GetInvolved-Community.jpg"
                        }
                        alt={`Coinfest Asia 2024 (Community Get Involved)`}
                        height={472}
                        width={784}
                        loading="lazy"
                        quality="87"
                      />
                    </div>
                    <div className="ca2024CvrOvrflyBackdrop flex flex-col items-end justify-end absolute inset-y-0 inset-x-0 z-[15]">
                      <div className="flex flex-row items-center justify-between pb-2 sm:pb-6 px-4 sm:px-6 w-full">
                        <h3 className="text-white font-bevietnamPro text-base sm:text-2xl font-medium">
                          Community
                        </h3>
                        <svg
                          className="h-6 sm:h-10 w-6 sm:w-10"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M28.7507 25.4167V11.25H14.584"
                            stroke="white"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M28.3333 11.6719L11.25 28.7552"
                            stroke="white"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default DefaultGetInvolved;
