import React from "react";
import getConfig from "next/config";
import Link from "next/link";
import Image from "next/image";

// @get .config
const { publicRuntimeConfig } = getConfig();

// @components
import Container from "@components/Container";

const Footer = () => {
  return (
    <>
      <Container>
        <footer id="caFootr" className="caFootr relative mt-18">
          <div className="supports-grid:grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-10 xl:gap-y-0 gap-x-0">
            <div className="col-span-full lg:col-span-6 xl:col-span-4 pr-0 lg:pr-10 xl:pr-0">
              <div className="flex relative">
                <Image
                  className="h-12 w-max"
                  src="/assets/images/coinfest.asia.svg"
                  alt={`${publicRuntimeConfig.siteAppName} Primary - LOGO Brand`}
                  height={58}
                  width={154}
                />
              </div>
              <p className="text-black-900 text-base font-light mt-3 max-w-full sm:max-w-[447px] lg:max-w-full">
                {`Coinfest Asia is the largest crypto festival in the world`}
              </p>
              <div className="flex flex-col items-start justify-start mt-6">
                <h2 className="text-black-900 text-base font-semibold capitalize">
                  {`Stay connected`}
                </h2>
                <ul className="inline-flex flex-row flex-wrap mt-2">
                  <li className="mr-3.5 last:mr-0">
                    <Link href="https://twitter.com/coinfestasia">
                      <Image
                        className="h-6 w-6"
                        src="/assets/svg/caTwitter-black.svg"
                        alt={`${publicRuntimeConfig.siteAppName} Twitter Social Media`}
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
                        alt={`${publicRuntimeConfig.siteAppName} Instagram Social Media`}
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
                        alt={`${publicRuntimeConfig.siteAppName} Telegram Social Media`}
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
                        alt={`${publicRuntimeConfig.siteAppName} LinkedIn Social Media`}
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
                    <h2 className="text-black-900 font-bevietnamPro text-base font-semibold capitalize">
                      {`Past events`}
                    </h2>
                    <ul className="footrMenu mt-3">
                      <li>
                        <Link
                          href="https://2024.coinfest.asia/"
                          className="flex !flex-row !items-center"
                        >
                          2024
                          <svg
                            className="ml-1 h-5 w-5 stroke-current"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M28.7507 25.4167V11.25H14.584"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M28.3333 11.6719L11.25 28.7552"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://2023.coinfest.asia/"
                          className="flex !flex-row !items-center"
                        >
                          2023
                          <svg
                            className="ml-1 h-5 w-5 stroke-current"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M28.7507 25.4167V11.25H14.584"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M28.3333 11.6719L11.25 28.7552"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://2022.coinfest.asia/"
                          className="flex !flex-row !items-center"
                        >
                          2022
                          <svg
                            className="ml-1 h-5 w-5 stroke-current"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M28.7507 25.4167V11.25H14.584"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M28.3333 11.6719L11.25 28.7552"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-span-full lg:col-span-2 xl:col-span-4">
                  <div className="flex flex-col">
                    <h2 className="text-black-900 font-bevietnamPro text-base font-semibold capitalize">
                      Coinfest asia
                    </h2>
                    <ul className="footrMenu mt-3">
                      <li className="inline-block">
                        <Link href="/2025-sponsorship">
                          Sponsorship Inquiry
                        </Link>
                      </li>
                      <li className="inline-block">
                        <Link href="/speaker">Apply as Speaker</Link>
                      </li>
                      <li className="inline-block">
                        <Link href="/interest">Ticket</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-span-full lg:col-span-2 xl:col-span-4">
                  <div className="flex flex-col">
                    <h2 className="text-black-900 font-bevietnamPro text-base font-semibold capitalize">
                      {`Others`}
                    </h2>
                    <ul className="footrMenu mt-3">
                      <li>
                        <Link href="/terms-and-conditions">
                          Terms & Conditions
                        </Link>
                      </li>
                      <li>
                        <Link href="/privacy-policy">Privacy Policy</Link>
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
          <div className="caFootrEnd flex flex-col items-start justify-start mt-18 sm:mt-20 pb-10 relative mx-auto w-full">
            <p className="text-black-900 text-sm font-normal text-start">
              © <span className="text-primary">Coinfest Asia</span>. All rights
              reserved. Coinfest Asia is organized by{" "}
              <Link
                className="text-primary underline capitalize"
                title="Coinfest Asia Coinvestasi Website"
                href="https://coinvestasi.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Coinvestasi
              </Link>
              , a subsidiary of{" "}
              <Link
                className="text-primary underline capitalize"
                title="Coinfest Asia Indonesia Crypto Network Website"
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
