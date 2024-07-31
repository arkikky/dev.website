import React from "react";
import getConfig from "next/config";
import Link from "next/link";
import Image from "next/image";

// # Get .config
const { publicRuntimeConfig } = getConfig();

// @components
import Container from "@components/Container";

const Footer = () => {
  return (
    <>
      <footer className="ca2024Footer ca2024SectionEnd relative justify-end overflow-x-hidden bg-white">
        <Container className="pb-[128px] pt-12 sm:pb-[134px] sm:pt-17">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <div className="relative block w-max">
                <Image
                  className="mx-auto my-auto aspect-auto h-auto w-[148px] sm:w-[182px]"
                  src={"/assets/images/ca2024-BlackBrand.svg"}
                  alt={`${publicRuntimeConfig.siteAppName} (Primary Brand - Footer)`}
                  height={24}
                  width={24}
                  quality="87"
                />
              </div>
              <div className="mt-8 grid-cols-4 gap-x-6 gap-y-8 supports-grid:grid sm:mt-15 sm:grid-cols-12 lg:grid-cols-12 xl:grid-cols-13">
                <div className="col-span-full sm:col-span-4 lg:col-span-4 xl:col-span-2">
                  <div className="flex flex-col">
                    <h2 className="font-bevietnamPro text-base font-semibold capitalize text-black-900">
                      Prepare your trip
                    </h2>
                    <ul className="mt-6 pl-0">
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center font-bevietnamPro text-base font-light capitalize leading-[normal] text-black-900 outline-none transition duration-[0.3s] ease-in-out focus-visible:outline-none group-hover:text-secondary group-hover:underline"
                          href="/travel"
                        >
                          Travel deals
                        </Link>
                      </li>
                      <li className="hs-tooltip group mb-4 [--placement:right] [--trigger:hover] last:mb-0">
                        <button
                          type="button"
                          aria-label="menuGettingCoinfest2024"
                          className="hs-tooltip-toggle flex flex-row items-center font-bevietnamPro text-base font-light capitalize leading-[normal] text-black-900 outline-none focus-visible:outline-none group-hover:text-secondary group-hover:underline"
                        >
                          Getting to Coinfest
                          <span
                            className="hs-tooltip-content invisible absolute z-10 inline-block rounded-[7px] bg-black-900 px-2.5 py-1 font-bevietnamPro text-xs font-normal text-white opacity-0 transition-opacity duration-[0.3s] ease-in-out hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
                            role="tooltip"
                          >
                            Coming Soon
                          </span>
                        </button>
                      </li>
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center font-bevietnamPro text-base font-light capitalize leading-[normal] text-black-900 outline-none transition duration-[0.3s] ease-in-out focus-visible:outline-none group-hover:text-secondary group-hover:underline"
                          href="/venue"
                        >
                          Venue map
                        </Link>
                      </li>
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center font-bevietnamPro text-base font-light capitalize leading-[normal] text-black-900 outline-none transition duration-[0.3s] ease-in-out focus-visible:outline-none group-hover:text-secondary group-hover:underline"
                          href="/faq"
                        >
                          FAQ
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-span-full sm:col-span-4 lg:col-span-4 xl:col-span-2">
                  <div className="flex flex-col">
                    <h2 className="font-bevietnamPro text-base font-semibold capitalize text-black-900">
                      Coinfest asia
                    </h2>
                    <ul className="mt-6 pl-0">
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center font-bevietnamPro text-base font-light capitalize leading-[normal] text-black-900 outline-none transition duration-[0.3s] ease-in-out focus-visible:outline-none group-hover:text-secondary group-hover:underline"
                          href="/activities"
                        >
                          Activities
                        </Link>
                      </li>
                      <li className="hs-tooltip group mb-4 [--placement:right] [--trigger:hover] last:mb-0">
                        <button
                          type="button"
                          aria-label="menuGuides"
                          className="hs-tooltip-toggle flex flex-row items-center font-bevietnamPro text-base font-light capitalize leading-[normal] text-black-900 outline-none focus-visible:outline-none group-hover:text-secondary group-hover:underline"
                        >
                          Agenda
                          <span
                            className="hs-tooltip-content invisible absolute z-10 inline-block rounded-[7px] bg-black-900 px-2.5 py-1 font-bevietnamPro text-xs font-normal text-white opacity-0 transition-opacity duration-[0.3s] ease-in-out hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
                            role="tooltip"
                          >
                            Coming Soon
                          </span>
                        </button>
                      </li>
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center font-bevietnamPro text-base font-light capitalize leading-[normal] text-black-900 outline-none transition duration-[0.3s] ease-in-out focus-visible:outline-none group-hover:text-secondary group-hover:underline"
                          href="/speakers"
                        >
                          Speakers
                        </Link>
                      </li>
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center font-bevietnamPro text-base font-light capitalize leading-[normal] text-black-900 outline-none transition duration-[0.3s] ease-in-out focus-visible:outline-none group-hover:text-secondary group-hover:underline"
                          href="/partners"
                        >
                          Partners
                        </Link>
                      </li>
                      {/* <li className="hs-tooltip group mb-4 [--placement:right] [--trigger:hover] last:mb-0">
                        <button
                          type="button"
                          aria-label="menuGuides"
                          className="hs-tooltip-toggle flex flex-row items-center font-bevietnamPro text-base font-light capitalize leading-[normal] text-black-900 outline-none focus-visible:outline-none group-hover:text-secondary group-hover:underline"
                        >
                          Guides
                          <span
                            className="hs-tooltip-content invisible absolute z-10 inline-block rounded-[7px] bg-black-900 px-2.5 py-1 font-bevietnamPro text-xs font-normal text-white opacity-0 transition-opacity duration-[0.3s] ease-in-out hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
                            role="tooltip"
                          >
                            Coming Soon
                          </span>
                        </button>
                      </li> */}
                    </ul>
                  </div>
                </div>
                <div className="col-span-full sm:col-span-4 lg:col-span-4 xl:col-span-2">
                  <div className="flex flex-col">
                    <h2 className="font-bevietnamPro text-base font-semibold capitalize text-black-900">
                      Coinfest week
                    </h2>
                    <ul className="mt-6 pl-0">
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center font-bevietnamPro text-base font-light capitalize leading-[normal] text-black-900 outline-none transition duration-[0.3s] ease-in-out focus-visible:outline-none group-hover:text-secondary group-hover:underline"
                          href="/coinfest-week"
                        >
                          Event List
                        </Link>
                      </li>
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center font-bevietnamPro text-base font-light capitalize leading-[normal] text-black-900 outline-none transition duration-[0.3s] ease-in-out focus-visible:outline-none group-hover:text-secondary group-hover:underline"
                          href="/get-involved/submit-side-events"
                        >
                          Submit event
                        </Link>
                      </li>
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center font-bevietnamPro text-base font-light capitalize leading-[normal] text-black-900 outline-none transition duration-[0.3s] ease-in-out focus-visible:outline-none group-hover:text-secondary group-hover:underline"
                          href="/get-involved/cohost-side-events"
                        >
                          Co-host an event
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-span-full sm:col-span-4 lg:col-span-4 xl:col-span-3">
                  <div className="flex flex-col">
                    <h2 className="font-bevietnamPro text-base font-semibold capitalize text-black-900">
                      Get Involved
                    </h2>
                    <ul className="mt-6 pl-0">
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center font-bevietnamPro text-base font-light capitalize leading-[normal] text-black-900 outline-none transition duration-[0.3s] ease-in-out focus-visible:outline-none group-hover:text-secondary group-hover:underline"
                          href="/get-involved/speakers"
                        >
                          Apply to Speak
                        </Link>
                      </li>
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center font-bevietnamPro text-base font-light capitalize leading-[normal] text-black-900 outline-none transition duration-[0.3s] ease-in-out focus-visible:outline-none group-hover:text-secondary group-hover:underline"
                          href="/get-involved/sponsorship"
                        >
                          Enquire for sponsorship
                        </Link>
                      </li>
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center font-bevietnamPro text-base font-light capitalize leading-[normal] text-black-900 outline-none transition duration-[0.3s] ease-in-out focus-visible:outline-none group-hover:text-secondary group-hover:underline"
                          href="/get-involved/media-partner"
                        >
                          Become a media partner
                        </Link>
                      </li>
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center font-bevietnamPro text-base font-light capitalize leading-[normal] text-black-900 outline-none transition duration-[0.3s] ease-in-out focus-visible:outline-none group-hover:text-secondary group-hover:underline"
                          href="/get-involved/community"
                        >
                          Become a community partner
                        </Link>
                      </li>
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center font-bevietnamPro text-base font-light capitalize leading-[normal] text-black-900 outline-none transition duration-[0.3s] ease-in-out focus-visible:outline-none group-hover:text-secondary group-hover:underline"
                          href="/get-involved/cohost-side-events"
                        >
                          Co-host a side event
                        </Link>
                      </li>
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center font-bevietnamPro text-base font-light capitalize leading-[normal] text-black-900 outline-none transition duration-[0.3s] ease-in-out focus-visible:outline-none group-hover:text-secondary group-hover:underline"
                          href="/get-involved/submit-side-events"
                        >
                          Submit your side event
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-span-full sm:col-span-4 lg:col-span-4 xl:col-span-2">
                  <div className="flex flex-col">
                    <h2 className="font-bevietnamPro text-base font-semibold capitalize text-black-900">
                      Previous Editions
                    </h2>
                    <ul className="mt-6 pl-0">
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center font-bevietnamPro text-base font-light capitalize leading-[normal] text-black-900 outline-none transition duration-[0.3s] ease-in-out focus-visible:outline-none group-hover:text-secondary group-hover:underline"
                          href="https://2022.coinfest.asia/"
                          target="_blank"
                          rel="noopener noreferrer"
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
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center font-bevietnamPro text-base font-light capitalize leading-[normal] text-black-900 outline-none transition duration-[0.3s] ease-in-out focus-visible:outline-none group-hover:text-secondary group-hover:underline"
                          href="https://2023.coinfest.asia/"
                          target="_blank"
                          rel="noopener noreferrer"
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
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center font-bevietnamPro text-base font-light capitalize leading-[normal] text-black-900 outline-none transition duration-[0.3s] ease-in-out focus-visible:outline-none group-hover:text-secondary group-hover:underline"
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
                <div className="col-span-full flex flex-col space-y-6 sm:col-span-4 lg:col-span-4 xl:col-span-2">
                  <div className="flex flex-col">
                    <h2 className="font-bevietnamPro text-base font-semibold capitalize text-black-900">
                      Other
                    </h2>
                    <ul className="mt-6 pl-0">
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center font-bevietnamPro text-base font-light capitalize leading-[normal] text-black-900 outline-none transition duration-[0.3s] ease-in-out focus-visible:outline-none group-hover:text-secondary group-hover:underline"
                          href="/terms-and-conditions"
                        >
                          Terms & Conditions
                        </Link>
                      </li>
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center font-bevietnamPro text-base font-light capitalize leading-[normal] text-black-900 outline-none transition duration-[0.3s] ease-in-out focus-visible:outline-none group-hover:text-secondary group-hover:underline"
                          href="/privacy-policy"
                        >
                          Privacy Policy
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col">
                    <h2 className="font-bevietnamPro text-base font-semibold capitalize text-black-900">
                      Reach Out
                    </h2>
                    <ul className="mt-3 pl-0">
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center font-bevietnamPro text-base font-light lowercase leading-[normal] text-black-900 outline-none transition duration-[0.3s] ease-in-out focus-visible:outline-none group-hover:text-secondary group-hover:underline"
                          href="mailto:hi@coinfest.asia"
                        >
                          <svg
                            className="mr-2 mt-0.5 h-auto w-[22px] fill-current"
                            viewBox="0 0 21 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M15.439 0C16.78 0 18.07 0.53 19.019 1.481C19.969 2.43 20.5 3.71 20.5 5.05V12.95C20.5 15.74 18.23 18 15.439 18H5.56C2.769 18 0.5 15.74 0.5 12.95V5.05C0.5 2.26 2.759 0 5.56 0H15.439ZM17.028 6.54033L17.108 6.46033C17.347 6.17033 17.347 5.75033 17.097 5.46033C16.958 5.31133 16.767 5.22033 16.568 5.20033C16.358 5.18933 16.158 5.26033 16.007 5.40033L11.498 9.00033C10.918 9.48133 10.087 9.48133 9.49798 9.00033L4.99798 5.40033C4.68698 5.17033 4.25698 5.20033 3.99798 5.47033C3.72798 5.74033 3.69798 6.17033 3.92698 6.47033L4.05798 6.60033L8.60798 10.1503C9.16798 10.5903 9.84698 10.8303 10.558 10.8303C11.267 10.8303 11.958 10.5903 12.517 10.1503L17.028 6.54033Z"
                            ></path>
                          </svg>
                          hi@coinfest.asia
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-18 flex w-full flex-col pr-0 text-sm sm:pr-12 lg:mt-20 lg:pr-0 xl:mt-24 xl:pr-[128px]">
                Coinfest Asia adalah acara tertutup yang berfokus pada edukasi
                dan pengembangan industri, dengan tujuan memberi dampak positif
                terhadap perekonomian Indonesia. Partisipasi terbatas hanya
                untuk tamu undangan dan peserta yang telah terdaftar.
              </div>
            </div>
            <div className="mt-8 flex flex-col items-start justify-start sm:mt-10 lg:mt-12 lg:flex-row lg:items-center lg:justify-between">
              <div className="w-full max-w-[545px] font-bevietnamPro text-sm font-light text-black-900 prose-a:text-secondary prose-a:underline prose-strong:text-secondary xl:max-w-max">
                Copyright © <strong>Coinfest Asia</strong>. All rights
                reserved. Coinfest is organized by{" "}
                <Link
                  href="https://coinvestasi.com/"
                  title="Coinvestasi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Coinvestasi
                </Link>
                , a subsidiary of 
                <Link
                  href="https://indonesiacrypto.network/"
                  title="Indonesia Crypto Network"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Indonesia Crypto Network
                </Link>
                .
              </div>
              <ul className="relative mt-4 flex flex-row pl-0 lg:mt-0">
                <li className="mr-4 last:mr-0">
                  <Link
                    className="outline-none focus-visible:outline-none"
                    href="https://twitter.com/coinfestasia"
                    title="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="mx-auto my-auto aspect-auto h-6 w-6"
                      src={"/assets/images/social-media/ca2024-Twitter.svg"}
                      alt={`${publicRuntimeConfig.siteAppName} (Twitter - Social Media)`}
                      height={24}
                      width={24}
                      quality="87"
                    />
                  </Link>
                </li>
                <li className="mr-4 last:mr-0">
                  <Link
                    className="outline-none focus-visible:outline-none"
                    href="https://www.instagram.com/coinfest.asia/"
                    title="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="mx-auto my-auto aspect-auto h-6 w-6"
                      src={"/assets/images/social-media/ca2024-Instagram.svg"}
                      alt={`${publicRuntimeConfig.siteAppName} (Instagram - Social Media)`}
                      height={24}
                      width={24}
                      quality="87"
                    />
                  </Link>
                </li>
                <li className="mr-4 last:mr-0">
                  <Link
                    className="outline-none focus-visible:outline-none"
                    href="https://t.me/coinfestasiaofficial"
                    title="Telegram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="mx-auto my-auto aspect-auto h-6 w-6"
                      src={"/assets/images/social-media/ca2024-Telegram.svg"}
                      alt={`${publicRuntimeConfig.siteAppName} (Telegram - Social Media)`}
                      height={24}
                      width={24}
                      quality="87"
                    />
                  </Link>
                </li>
                <li className="mr-4 last:mr-0">
                  <Link
                    className="outline-none focus-visible:outline-none"
                    href="https://www.linkedin.com/showcase/coinfest/"
                    title="Linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="mx-auto my-auto aspect-auto h-6 w-6"
                      src={"/assets/images/social-media/ca2024-Linkedin.svg"}
                      alt={`${publicRuntimeConfig.siteAppName} (Linkedin - Social Media)`}
                      height={24}
                      width={24}
                      quality="87"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
