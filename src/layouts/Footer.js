import React, { useEffect } from "react";
import getConfig from "next/config";
import Link from "next/link";
import Image from "next/image";

// @Get .config
const { publicRuntimeConfig } = getConfig();

// @Component's
import Container from "@components/Container";

const Footer = () => {
  // @preline (Plugins)
  useEffect(() => {
    import("preline");
  }, []);

  return (
    <>
      <Container>
        <footer id="caFootr" className="caFootr relative mt-18 xl:mt-24">
          <div className="supports-grid:grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-10 xl:gap-y-0 gap-x-0">
            <div className="col-span-full lg:col-span-6 xl:col-span-4 pr-0 lg:pr-10 xl:pr-0">
              <div className="flex relative">
                <Image
                  className="h-12 w-max"
                  src="/assets/images/coinfest.asia.svg"
                  alt={`${publicRuntimeConfig.siteAppName} (Primary - LOGO Brand)`}
                  height={58}
                  width={154}
                />
              </div>
              <p className="text-black-900/70 font-bevietnam-pro text-sm lg:text-base font-normal mt-4 max-w-full sm:max-w-[447px] lg:max-w-full">
                Coinfest Asia is Asia’s immersive web3 festival built for
                innovative web3 companies.
              </p>
              <div className="flex flex-col items-start justify-start mt-6">
                <h2 className="text-black-900 font-bevietnamPro text-base font-medium capitalize">
                  Stay connected
                </h2>
                <ul className="inline-flex flex-row flex-wrap mt-2">
                  <li className="mr-3.5 last:mr-0">
                    <Link href="https://twitter.com/coinfestasia">
                      <Image
                        className="h-6 w-6"
                        src="/assets/svg/caTwitter-black.svg"
                        alt={`${publicRuntimeConfig.siteAppName} (Twitter - Social Media)`}
                        height={28}
                        width={28}
                      />
                    </Link>
                  </li>
                  <li className="mr-3.5 last:mr-0">
                    <Link href="https://www.instagram.com/coinfest.asia/">
                      <Image
                        className="h-6 w-6"
                        src="/assets/svg/caInstagram-black.svg"
                        alt={`${publicRuntimeConfig.siteAppName} (Instagram - Social Media)`}
                        height={28}
                        width={28}
                      />
                    </Link>
                  </li>
                  <li className="mr-3.5 last:mr-0">
                    <Link href="https://t.me/coinfestasiaofficial">
                      <Image
                        className="h-6 w-6"
                        src="/assets/svg/caTelegram-black.svg"
                        alt={`${publicRuntimeConfig.siteAppName} (Telegram - Social Media)`}
                        height={28}
                        width={28}
                      />
                    </Link>
                  </li>
                  <li className="mr-3.5 last:mr-0">
                    <Link href="https://www.linkedin.com/showcase/coinfest/">
                      <Image
                        className="h-6 w-6"
                        src="/assets/svg/caLinkedin-black.svg"
                        alt={`${publicRuntimeConfig.siteAppName} (LinkedIn - Social Media)`}
                        height={28}
                        width={28}
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-start-1 col-span-full xl:col-start-7 xl:col-span-6">
              <div className="supports-grid:grid grid-cols-4 sm:grid-cols-8 xl:grid-cols-11 gap-y-6 lg:gap-y-8 gap-x-12 pl-0 xl:pl-16">
                <div className="col-span-full lg:col-span-2 xl:col-span-3">
                  <div className="flex flex-col">
                    <h2 className="text-black-900 font-bevietnamPro text-base font-bold uppercase">
                      Past events
                    </h2>
                    <ul className="footrMenu mt-3">
                      <li>
                        <Link href="/2022">2022</Link>
                      </li>
                      <li>
                        <Link href="/2023">2023</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-span-full lg:col-span-2 xl:col-span-4">
                  <div className="flex flex-col">
                    <h2 className="text-black-900 font-bevietnamPro text-base font-bold uppercase">
                      Coinfest asia
                    </h2>
                    <ul className="footrMenu mt-3">
                      <li className="hs-tooltip inline-block [--trigger:hover] [--placement:right]">
                        {/* <Link href="/">Sponsorship Inquiry</Link> */}
                        <div className="hs-tooltip-toggle cursor-default w-max">
                          Sponsorship Inquiry
                          <span
                            className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible inline-block bg-black-800/80 rounded-lg text-white font-bevietnamPro text-xs leading-initial absolute py-[5px] px-2 opacity-0 invisible transition-opacity z-10"
                            role="tooltip"
                          >
                            Coming Soon
                          </span>
                        </div>
                      </li>
                      <li className="hs-tooltip inline-block [--trigger:hover] [--placement:right]">
                        {/* <Link href="/">Media Contact</Link> */}
                        <div className="hs-tooltip-toggle cursor-default w-max">
                          Media Contact
                          <span
                            className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible inline-block bg-black-800/80 rounded-lg text-white font-bevietnamPro text-xs leading-initial absolute py-[5px] px-2 opacity-0 invisible transition-opacity z-10"
                            role="tooltip"
                          >
                            Coming Soon
                          </span>
                        </div>
                      </li>
                      <li className="hs-tooltip inline-block [--trigger:hover] [--placement:right]">
                        {/* <Link href="/">Ticket</Link> */}
                        <div className="hs-tooltip-toggle cursor-default w-max">
                          Ticket
                          <span
                            className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible inline-block bg-black-800/80 rounded-lg text-white font-bevietnamPro text-xs leading-initial absolute py-[5px] px-2 opacity-0 invisible transition-opacity z-10"
                            role="tooltip"
                          >
                            Coming Soon
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-span-full lg:col-span-2 xl:col-span-4">
                  <div className="flex flex-col">
                    <h2 className="text-black-900 font-bevietnamPro text-base font-bold uppercase">
                      Others
                    </h2>
                    <ul className="footrMenu mt-3">
                      <li>
                        <Link href="/2023/terms-and-conditions">
                          Terms & Conditions
                        </Link>
                        {/* <div className="hs-tooltip-toggle cursor-default w-max">
                          Terms & Conditions
                          <span
                            className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible inline-block bg-black-800/80 rounded-lg text-white font-bevietnamPro text-xs leading-initial absolute py-[5px] px-2 opacity-0 invisible transition-opacity z-10"
                            role="tooltip"
                          >
                            Coming Soon
                          </span>
                        </div> */}
                      </li>
                      <li>
                        <Link href="/2023/privacy-policy">Privacy Policy</Link>
                        {/* <div className="hs-tooltip-toggle cursor-default w-max">
                          Privacy Policy
                          <span
                            className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible inline-block bg-black-800/80 rounded-lg text-white font-bevietnamPro text-xs leading-initial absolute py-[5px] px-2 opacity-0 invisible transition-opacity z-10"
                            role="tooltip"
                          >
                            Coming Soon
                          </span>
                        </div> */}
                      </li>
                      <li className="hs-tooltip inline-block [--trigger:hover] [--placement:right]">
                        {/* <Link href="/">Updates</Link> */}
                        <div className="hs-tooltip-toggle cursor-default w-max">
                          Updates
                          <span
                            className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible inline-block bg-black-800/80 rounded-lg text-white font-bevietnamPro text-xs leading-initial absolute py-[5px] px-2 opacity-0 invisible transition-opacity z-10"
                            role="tooltip"
                          >
                            Coming Soon
                          </span>
                        </div>
                      </li>
                      <li>
                        <Link
                          href="https://flic.kr/s/aHBqjATP6X"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Gallery
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="caFootrEnd flex flex-col items-center justify-center mt-14 py-8 px-0 sm:px-4 relative mx-auto w-full max-w-[553px] xl:max-w-full">
            <p className="text-gray-400 font-bevietnam-pro text-sm font-medium text-center">
              Copyright © Coinfest Asia. All rights reserved. Coinfest Asia is
              organized by{" "}
              <Link
                className="text-primary underline capitalize"
                href="https://coinvestasi.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Coinvestasi
              </Link>
              , a subsidiary of{" "}
              <Link
                className="text-primary underline capitalize"
                href="https://indonesiacrypto.network/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Indonesia Crypto Network.
              </Link>
            </p>
          </div>
        </footer>
      </Container>
    </>
  );
};
export default Footer;
