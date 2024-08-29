import React, { useState } from "react";
import { useRouter } from "next/router";
import dayjs from "dayjs";
import getConfig from "next/config";
import Image from "next/image";
import Link from "next/link";

// # Get .config
const { publicRuntimeConfig } = getConfig();

// Css
import Footr from "@styles23/layouts/Footer.module.css";

// Ui - Components
import Container from "@components23/Container";
import Post from "@components23/UI/Post/Post";
import PostLink from "@components23/UI/Post/PostLink";
import ImagesFill from "@components23/UI/ImagesFill";
import Buttons from "@components23/UI/Buttons";

const Footer = () => {
  const router = useRouter();

  // Get Years
  const getDtaYears = dayjs().format("YYYY");
  const [getYears, setYears] = useState(getDtaYears);

  return (
    <>
      <div className="overflow-hidden">
        <>
          <Container className="px-0">
            <section className="bg-blue-400 rounded-none sm:rounded-[28px] relative mt-24 sm:mt-36 py-8 sm:py-12 lg:py-16 px-4 sm:px-9 lg:px-15">
              <div className="flex flex-col relative w-full max-w-[226px] sm:max-w-[343px] lg:max-w-[543px] xl:max-w-[622px] z-20">
                <h2 className="text-white font-bevietnam-pro text-2xl sm:text-[42px] lg:text-[54px] xl:text-[64px] sm:leading-[64px] xl:leading-[78px] font-bold">
                  Experience the immersive Web3 festival!
                </h2>
                {/* <div className="mt-2 lg:mt-4">
                  <Buttons
                    typeBtn="btn-link"
                    url="https://ticket.coinfest.asia/"
                    label="Get Your Ticket Now"
                    variants="btn-secondary"
                    rounded="pill"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="left"
                    ariaLabel="btnImmersiveFestival"
                    className="mt-0 2xl:-mt-0.5 py-2 sm:py-4 px-4 sm:px-6"
                  >
                    <svg
                      className="stroke-current -mt-px mr-1 h-5 sm:h-6 w-5 sm:w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 5V7V5ZM15 11V13V11ZM15 17V19V17ZM5 5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V10C3.53043 10 4.03914 10.2107 4.41421 10.5858C4.78929 10.9609 5 11.4696 5 12C5 12.5304 4.78929 13.0391 4.41421 13.4142C4.03914 13.7893 3.53043 14 3 14V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V14C20.4696 14 19.9609 13.7893 19.5858 13.4142C19.2107 13.0391 19 12.5304 19 12C19 11.4696 19.2107 10.9609 19.5858 10.5858C19.9609 10.2107 20.4696 10 21 10V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5Z"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Buttons>
                </div> */}
              </div>
              <div className="bg-transparent rounded-b-2xl overflow-hidden absolute inset-y-0 inset-x-0 select-none pointer-events-none z-0.5">
                <div className="absolute inset-y-0 -right-16 sm:-right-[102px] lg:-right-0.5 h-full w-[242px] sm:w-[418px]">
                  <ImagesFill
                    className="h-full w-full"
                    src={`/2023/assets/images/backdrop/backdrop-coinfest-banner.svg`}
                    alt={`${publicRuntimeConfig.appName} (Coinfest Asia Banner - Immersive Festival - Backdrop)`}
                    priority={true}
                  />
                </div>
              </div>
              <div className="flex flex-col absolute -top-11 sm:-top-[79px] -right-5 sm:right-2 left-auto select-none pointer-events-none z-10">
                <ImagesFill
                  className="h-[332px] sm:h-[585px] xl:h-[603px] w-[164.69px] sm:w-[287px] xl:w-[299px]"
                  src={`/2023/assets/images/backdrop/immersive-festival.svg`}
                  alt={`${publicRuntimeConfig.appName} (Immersive Festival - Backdrop)`}
                  priority={true}
                />
              </div>
            </section>
          </Container>
        </>

        <footer className={`${Footr.footr} mt-[86px] lg:mt-[136px]`}>
          <Container>
            <div className="supports-grid:grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-8 gap-x-6 mb-16">
              <div className="col-span-full lg:col-span-4 pr-10">
                <div className="flex relative">
                  <Image
                    src={`/2023/assets/images/coinfest.asia2023.svg`}
                    alt={`${publicRuntimeConfig.appName}`}
                    height={28}
                    width={178}
                  />
                </div>
                <p className="text-black-400 font-bevietnam-pro text-sm sm:text-base font-medium mt-4">
                  Coinfest Asia is Asia’s immersive web3 festival. This year,
                  explore real-world insights and valuable connections in Web2.5
                  where web2 meet web3 industries through an immersive festival
                  experience.
                </p>
                <ul className="socialMdia flex flex-wrap gap-y-4 list-none mt-4 sm:mt-6 w-full">
                  <li className="socialMdia-Itms">
                    <PostLink
                      typePost="blank-link"
                      url="https://twitter.com/coinfestasia"
                      className="flex outline-none hocus:outline-none"
                    >
                      <Image
                        className="h-6 w-6"
                        src={`/2023/assets/images/social-media/twitter.svg`}
                        alt={`${publicRuntimeConfig.appName} (Twitter - Social Media)`}
                        height={24}
                        width={24}
                      />
                    </PostLink>
                  </li>
                  <li className="socialMdia-Itms">
                    <PostLink
                      typePost="blank-link"
                      url="https://www.instagram.com/coinfest.asia/"
                      className="flex outline-none hocus:outline-none"
                    >
                      <Image
                        className="h-6 w-6"
                        src={`/2023/assets/images/social-media/instagram.svg`}
                        alt={`${publicRuntimeConfig.appName} (Instagram - Social Media)`}
                        height={24}
                        width={24}
                      />
                    </PostLink>
                  </li>
                  <li className="socialMdia-Itms">
                    <PostLink
                      typePost="blank-link"
                      url="https://t.me/coinfestasiaofficial"
                      className="flex outline-none hocus:outline-none"
                    >
                      <Image
                        className="h-6 w-6"
                        src={`/2023/assets/images/social-media/telegram.svg`}
                        alt={`${publicRuntimeConfig.appName} (Telegram - Social Media)`}
                        height={24}
                        width={24}
                      />
                    </PostLink>
                  </li>
                  <li className="socialMdia-Itms">
                    <PostLink
                      typePost="blank-link"
                      url="https://www.linkedin.com/showcase/coinfest/"
                      className="flex outline-none hocus:outline-none"
                    >
                      <Image
                        className="h-6 w-6"
                        src={`/2023/assets/images/social-media/linkedin.svg`}
                        alt={`${publicRuntimeConfig.appName} (LinkedIn - Social Media)`}
                        height={24}
                        width={24}
                      />
                    </PostLink>
                  </li>
                </ul>
              </div>
              <div className="col-span-full lg:col-span-2">
                <div
                  id="footrQuickLinks1"
                  className={`${Footr.footrGroupMnu} w-full min-w-max`}
                >
                  {/* <h2 className="text-black-400 font-bevietnam-pro text-xl font-bold tracking-tight uppercase">
                    Get Involved
                  </h2>
                  <ul className="menu mt-3">
                    <Post
                      typePost="blank-link"
                      className="menu-item"
                      url="https://ticket.coinfest.asia/"
                      title="Tickets"
                    />
                    <Post
                      typePost="blank-link"
                      className="menu-item"
                      url="https://bit.ly/ca23sponsor"
                      title="Become a Sponsor"
                    />
                    <Post
                      typePost="blank-link"
                      className="menu-item"
                      url="https://e7bao9msf39.typeform.com/to/hRvA6Cye"
                      title="Enquire for Speaking"
                    />
                    <Post
                      typePost="blank-link"
                      className="menu-item"
                      url="https://e7bao9msf39.typeform.com/to/IyLelRl5"
                      title="Host your Side Event"
                    />
                    <Post
                      typePost="blank-link"
                      className="menu-item"
                      url="https://e7bao9msf39.typeform.com/to/U7Df986L"
                      title="Submit your Side Event"
                    />
                    <Post
                      typePost="blank-link"
                      className="menu-item"
                      url="https://bit.ly/ca23mediapartner"
                      title="Media Partners"
                    />
                    <Post
                      typePost="blank-link"
                      className="menu-item"
                      url="https://bit.ly/ca23communitypartner"
                      title="Community Partners"
                    />
                  </ul> */}
                </div>
              </div>
              <div className="col-span-full lg:col-span-3 xl:col-span-2 lg:pl-10 xl:pl-4">
                <div
                  id="footrQuickLinks2"
                  className={`${Footr.footrGroupMnu} w-full min-w-max`}
                >
                  <h2 className="text-black-400 font-bevietnam-pro text-xl font-bold tracking-tight uppercase">
                    Quick Links
                  </h2>
                  <ul className="menu mt-3">
                    <Post
                      typePost="link"
                      className="menu-item"
                      url="/2023/agenda"
                      title="Agenda"
                    />
                    <Post
                      typePost="link"
                      className="menu-item"
                      url="/2023/accommodation"
                      title="Travel"
                    />
                    <Post
                      typePost="link"
                      className="menu-item"
                      url="/2023/#faq"
                      title="FAQ"
                    />
                    <Post
                      typePost="link"
                      className="menu-item"
                      url="/2023/privacy-policy"
                      title="Privacy Policy"
                    />
                    <Post
                      typePost="link"
                      className="menu-item"
                      url="/2023/terms-and-conditions"
                      title="Terms & Conditions"
                    />
                    <Post
                      typePost="link"
                      className="menu-item"
                      url="/2023/2022"
                      title="2022's Recap"
                    />
                  </ul>
                </div>
              </div>
              <div className="col-span-full lg:col-span-3 xl:col-span-4 flex flex-col items-end">
                <div className="flex flex-col items-end justify-start w-full xl:w-[315px]">
                  <div
                    id="footrReachOut"
                    // className={`${Footr.footrGroupMnu} h-max w-full`}
                    className={` h-max w-full`}
                  >
                    <h2 className="text-black-400 font-bevietnam-pro text-xl font-bold tracking-tight uppercase">
                      Reach Out
                    </h2>
                    <ul className="menu mt-3">
                      <li>
                        <PostLink
                          typePost="blank-link"
                          className="flex items-center relative py-0 sm:py-0.5"
                          url="mailto:hi@coinfest.asia"
                          title="hi@coinfest.asia"
                          withIcons={true}
                          positionIcons="left"
                        >
                          <svg
                            className="fill-current mt-0.5 mr-2 h-auto w-[22px]"
                            viewBox="0 0 21 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M15.439 0C16.78 0 18.07 0.53 19.019 1.481C19.969 2.43 20.5 3.71 20.5 5.05V12.95C20.5 15.74 18.23 18 15.439 18H5.56C2.769 18 0.5 15.74 0.5 12.95V5.05C0.5 2.26 2.759 0 5.56 0H15.439ZM17.028 6.54033L17.108 6.46033C17.347 6.17033 17.347 5.75033 17.097 5.46033C16.958 5.31133 16.767 5.22033 16.568 5.20033C16.358 5.18933 16.158 5.26033 16.007 5.40033L11.498 9.00033C10.918 9.48133 10.087 9.48133 9.49798 9.00033L4.99798 5.40033C4.68698 5.17033 4.25698 5.20033 3.99798 5.47033C3.72798 5.74033 3.69798 6.17033 3.92698 6.47033L4.05798 6.60033L8.60798 10.1503C9.16798 10.5903 9.84698 10.8303 10.558 10.8303C11.267 10.8303 11.958 10.5903 12.517 10.1503L17.028 6.54033Z"
                            />
                          </svg>
                        </PostLink>
                      </li>
                    </ul>
                  </div>
                  <div
                    id="footrOrganized"
                    className={`${Footr.footrGroupMnu} mt-6 h-max w-full`}
                  >
                    <h2 className="text-black-400 font-bevietnam-pro text-xl font-bold tracking-tight uppercase">
                      Organized By
                    </h2>
                    <ul className="menu mt-3">
                      <li>
                        <PostLink
                          typePost="blank-link"
                          className="flex items-center relative py-0 sm:py-0.5"
                          url="https://coinvestasi.com/"
                        >
                          <Image
                            className="h-6 w-auto"
                            src={`/2023/assets/images/coinvestasi.svg`}
                            alt={`${publicRuntimeConfig.appName} (Coinvestasi - Organized)`}
                            height={140}
                            width={320}
                          />
                        </PostLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${Footr.footrEnd} flex items-center justify-center overflow-hidden px-6 sm:px-20 lg:px-[108px] py-6`}
            >
              <p className="text-gray-400 font-bevietnam-pro text-sm font-medium text-center">
                Copyright © Coinfest Asia {getYears}. All rights reserved.
                Coinfest Asia {getYears} is organized by{" "}
                <PostLink
                  typePost="blank-link"
                  className="text-primary underline"
                  url="https://coinvestasi.com/"
                >
                  Coinvestasi
                </PostLink>
                , a subsidiary of{" "}
                <PostLink
                  typePost="blank-link"
                  className="text-primary underline"
                  url="https://indonesiacrypto.network/"
                >
                  Indonesia Crypto Network.
                </PostLink>
              </p>
            </div>
          </Container>
        </footer>
      </div>
    </>
  );
};

export default Footer;
