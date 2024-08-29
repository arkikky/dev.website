import React from "react";
// import { Tab } from "@headlessui/react";
import getConfig from "next/config";
import Head from "next/head";

// # Get .config
const { publicRuntimeConfig } = getConfig();

// Icons (Heroicons : https://unpkg.com/browse/@heroicons/react@2.0.14/20/solid/)
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";

// Css
import Headng from "@styles23/components/Heading.module.css";
// import Tabs from "@styles/components/Tabs.module.css";

// Ui - Components
import Container from "@components23/Container";
import Main from "@components23/Main";
// import PostLink from "@components23/UI/Post/PostLink";
import Buttons from "@components23/UI/Buttons";

const GetInvolved = () => {
  return (
    <>
      {/* Head (Get Involved) */}
      <Head>
        <title>Get Involved | ASIA’S IMMERSIVE WEB3 FESTIVAL IS BACK</title>
        <meta
          name="title"
          content="Get Involved | ASIA’S IMMERSIVE WEB3 FESTIVAL IS BACK"
        />
        <meta
          name="description"
          content="Coinfest Asia 📍 Bali, 24-25 August 2023 | Explore real-world insights and valuable connections in Web2.5 where web2 and web3 industries converge through an immersive festival experience."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://coinfest.asia/" />
        <meta
          property="og:title"
          content="Get Involved | ASIA’S IMMERSIVE WEB3 FESTIVAL IS BACK"
        />
        <meta
          property="og:description"
          content="Coinfest Asia 📍 Bali, 24-25 August 2023 | Explore real-world insights and valuable connections in Web2.5 where web2 and web3 industries converge through an immersive festival experience."
        />
        <meta
          property="og:image"
          content="https://ticket.coinfest.asia/wp-content/uploads/2023/06/CA_Bali-Clifftop-Header-Newsletter.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://coinfest.asia/" />
        <meta
          property="twitter:title"
          content="Get Involved | ASIA’S IMMERSIVE WEB3 FESTIVAL IS BACK"
        />
        <meta
          property="twitter:description"
          content="Coinfest Asia 📍 Bali, 24-25 August 2023 | Explore real-world insights and valuable connections in Web2.5 where web2 and web3 industries converge through an immersive festival experience."
        />
        <meta
          property="twitter:image"
          content="https://ticket.coinfest.asia/wp-content/uploads/2023/06/CA_Bali-Clifftop-Header-Newsletter.png"
        />
      </Head>

      <Main className="mt-[60px] sm:mt-[100px]">
        <section className="flex flex-col xl:flex-row relative h-full min-h-max xl:min-h-max 2xl:min-h-screen max-h-max">
          <div className="lead-forms-backdrop selanjutnya flex flex-wrap flex-col xl:flex-row relative xl:absolute xl:inset-0 z-[-1]">
            <div className="images flex-grow basis-0 xl:sticky xl:top-0 xl:left-0 xl:bottom-0 h-[288px] sm:h-[516px] lg:h-[616px] xl:h-full max-h-screen">
              <img
                className="h-full w-full object-cover"
                src="/2023/assets/images/get-involved.jpg"
                alt="Coinfest Asia 2023 (Get Involved - Backdrop Background)"
              />
            </div>
            <div className="hidden xl:flex flex-grow basis-0 items-center justify-center xl:py-18 xl:px-14"></div>
          </div>
          <div className="flex-1 bg-white xl:bg-transparent rounded-t-2xl mt-[-26px] lg:mt-[-16px] xl:mt-0">
            <Container className="h-full min-h-max xl:min-h-max 2xl:min-h-screen max-h-max">
              <div className="supports-grid:grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 items-center justify-center pt-6 pb-11 sm:pt-8 xl:pt-14 xl:pb-24 px-0 h-full min-h-max xl:min-h-max 2xl:min-h-screen max-h-max">
                <div className="col-span-full xl:col-start-7 xl:col-span-6">
                  <div className="relative">
                    <h1 className="text-black-900 font-bevietnam-pro text-2xl sm:text-[32px] sm:leading-[38px] font-bold capitalize text-left px-0">
                      Get Involved!
                    </h1>
                    <p
                      className={`text-black-900 font-bevietnam-pro text-sm sm:text-base font-light mt-2`}
                    >
                      Join in crafting an immersive Web3 experience
                    </p>
                  </div>
                  <div className="mt-10">
                    <div className="supports-grid:grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-6 gap-x-6">
                      <div className="col-span-full lg:col-span-6 xl:col-span-full">
                        <div className="bg-secondary flex flex-col justify-between rounded-xl relative py-6 sm:py-8 px-6 sm:px-8 h-full overflow-hidden">
                          <div>
                            <h2 className="text-black-900 font-bevietnam-pro text-2xl font-bold">
                              Sponsor
                            </h2>
                            <p className="text-black-900 font-bevietnam-pro text-base font-light pr-0 sm:pr-18 mt-2">
                              Demonstrate your Web2.5 tangible solutions and
                              interactive real use-cases to Web2 and Web3
                              trailblazers on your Showcase Area.
                            </p>
                          </div>
                          <div className="mt-6">
                            <Buttons
                              typeBtn="btn-blank-link"
                              url="https://bit.ly/ca23sponsor"
                              label="Apply Now"
                              variants="btn-primary"
                              rounded="pill"
                              text="capitalize"
                              position="center"
                              withIcons={true}
                              positionIcons="right"
                              ariaLabel="btnInvolvedSponsor"
                              className="text-sm font-medium sm:font-semibold py-3.5 px-4 sm:px-6 tracking-normal"
                            >
                              <ArrowLongRightIcon className="stroke-current stroke-[0.3] ml-2 h-5 sm:h-6 w-5 sm:w-6" />
                            </Buttons>
                          </div>
                          <img
                            className="absolute -top-4 -right-4 lg:top-0 lg:right-0"
                            src="/2023/assets/images/card/card-asset-1.svg"
                            alt="icon"
                          />
                        </div>
                      </div>

                      <div className="col-span-full lg:col-span-6 xl:col-span-full">
                        <div className="bg-primary flex flex-col justify-between rounded-xl relative py-6 sm:py-8 px-6 sm:px-8 h-full overflow-hidden">
                          <div>
                            <h2 className="text-white font-bevietnam-pro text-2xl font-bold">
                              Speakers
                            </h2>
                            <p className="text-white font-bevietnam-pro text-base font-light pr-0 sm:pr-18 mt-2">
                              Show and tell your impact-driven ideas and
                              tractions—not just theories, in bridging the gap
                              between Web2 and Web3 industries on our Main
                              Stage.
                            </p>
                          </div>
                          <img
                            className="absolute -top-4 -right-4 lg:top-0 lg:right-0"
                            src="/2023/assets/images/card/card-asset-1.svg"
                            alt="icon"
                          />
                        </div>
                      </div>
                      <div className="col-span-full lg:col-span-6 xl:col-span-full">
                        <div className="bg-[#FF52C3] flex flex-col justify-between rounded-xl relative py-6 sm:py-8 px-6 sm:px-8 h-full overflow-hidden">
                          <div>
                            <h2 className="text-black-900 font-bevietnam-pro text-2xl font-bold">
                              Media Partners
                            </h2>
                            <p className="text-black-900 font-bevietnam-pro text-base font-light pr-0 sm:pr-18 mt-2">
                              Become the main sources on the latest insight and
                              updates in Web2.5 industries at Asia’s immersive
                              Web3 festival.
                            </p>
                          </div>
                          <div className="mt-6">
                            <Buttons
                              typeBtn="btn-blank-link"
                              url="https://bit.ly/ca23mediapartner"
                              label="Apply Now"
                              variants="btn-primary"
                              rounded="pill"
                              text="capitalize"
                              position="center"
                              withIcons={true}
                              positionIcons="right"
                              ariaLabel="btnInvolvedMediaPartners"
                              className="bg-[#6AF0E4] text-black-900 text-sm font-medium sm:font-semibold py-3.5 px-4 sm:px-6 tracking-normal"
                            >
                              <ArrowLongRightIcon className="stroke-current stroke-[0.3] ml-2 h-5 sm:h-6 w-5 sm:w-6" />
                            </Buttons>
                          </div>
                          <img
                            className="absolute -top-4 -right-4 lg:top-0 lg:right-0"
                            src="/2023/assets/images/card/card-asset-1.svg"
                            alt="icon"
                          />
                        </div>
                      </div>
                      <div className="col-span-full lg:col-span-6 xl:col-span-full">
                        <div className="bg-[#6AF0E4] flex flex-col justify-between rounded-xl relative py-6 sm:py-8 px-6 sm:px-8 h-full overflow-hidden">
                          <div>
                            <h2 className="text-black-900 font-bevietnam-pro text-2xl font-bold">
                              Communities
                            </h2>
                            <p className="text-black-900 font-bevietnam-pro text-base font-light pr-0 sm:pr-18 mt-2">
                              Connect with Web2 and Web3 key industry players to
                              bring your community into Web2.5 convergence
                              technologies.
                            </p>
                          </div>
                          <div className="mt-6">
                            <Buttons
                              typeBtn="btn-blank-link"
                              url="https://bit.ly/ca23communitypartner"
                              label="Apply Now"
                              variants="btn-primary"
                              rounded="pill"
                              text="capitalize"
                              position="center"
                              withIcons={true}
                              positionIcons="right"
                              ariaLabel="btnInvolvedCommunities"
                              className="bg-[#FF52C3] text-white text-sm font-medium sm:font-semibold py-3.5 px-4 sm:px-6 tracking-normal"
                            >
                              <ArrowLongRightIcon className="stroke-current stroke-[0.3] ml-2 h-5 sm:h-6 w-5 sm:w-6" />
                            </Buttons>
                          </div>
                          <img
                            className="absolute -top-4 -right-4 lg:top-0 lg:right-0"
                            src="/2023/assets/images/card/card-asset-1.svg"
                            alt="icon"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </section>
        <section className="bg-[#FFC600] flex flex-col relative py-12">
          <Container>
            <div className="flex flex-col lg:flex-row items-center justify-between relative px-0 sm:px-22 lg:px-0">
              <h2
                className={`${Headng.hdingTitle} font-bevietnam-pro text-black-900 font-bold uppercase text-center`}
              >
                GET EXPOSURE AT{" "}
                <span className="text-primary">COINFEST ASIA</span>
              </h2>
              <div className="mt-4 sm:mt-6 lg:mt-0">
                <Buttons
                  typeBtn="btn-blank-link"
                  url="https://bit.ly/ca23sponsor"
                  label="Sponsorship Inquiry"
                  variants="btn-primary"
                  rounded="pill"
                  text="capitalize"
                  ariaLabel="btnSponsorshipInquiry"
                  className="font-semibold px-4"
                />
              </div>
            </div>
          </Container>
        </section>
      </Main>
    </>
  );
};

export default GetInvolved;
