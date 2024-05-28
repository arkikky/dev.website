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
              <div className="mt-8 grid-cols-4 gap-x-6 gap-y-8 supports-grid:grid sm:mt-15 sm:grid-cols-12 lg:grid-cols-12">
                <div className="col-span-full sm:col-span-4 lg:col-span-4 xl:col-span-2">
                  <div className="flex flex-col">
                    <h2 className="font-bevietnamPro text-base font-semibold capitalize text-black-900">
                      Travel
                    </h2>
                    <ul className="mt-6 pl-0">
                      <li className="hs-tooltip group mb-4 [--placement:right] [--trigger:hover] last:mb-0">
                        <button
                          type="button"
                          aria-label="menuFlightDeals"
                          className="hs-tooltip-toggle flex flex-row items-center font-bevietnamPro text-base font-light capitalize leading-[normal] text-black-900 outline-none focus-visible:outline-none group-hover:text-secondary group-hover:underline"
                        >
                          Flight Deals
                          <span
                            className="hs-tooltip-content invisible absolute z-10 inline-block rounded-[7px] bg-black-900 px-2.5 py-1 font-bevietnamPro text-xs font-normal text-white opacity-0 transition-opacity duration-[0.3s] ease-in-out hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
                            role="tooltip"
                          >
                            Coming Soon
                          </span>
                        </button>
                      </li>
                      <li className="hs-tooltip group mb-4 [--placement:right] [--trigger:hover] last:mb-0">
                        <button
                          type="button"
                          aria-label="menuAccomodationDeals"
                          className="hs-tooltip-toggle flex flex-row items-center font-bevietnamPro text-base font-light capitalize leading-[normal] text-black-900 outline-none focus-visible:outline-none group-hover:text-secondary group-hover:underline"
                        >
                          Accomodation Deals
                          <span
                            className="hs-tooltip-content invisible absolute z-10 inline-block rounded-[7px] bg-black-900 px-2.5 py-1 font-bevietnamPro text-xs font-normal text-white opacity-0 transition-opacity duration-[0.3s] ease-in-out hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
                            role="tooltip"
                          >
                            Coming Soon
                          </span>
                        </button>
                      </li>
                      <li className="hs-tooltip group mb-4 [--placement:right] [--trigger:hover] last:mb-0">
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
                      </li>
                      {/* <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center text-black-900 group-hover:text-secondary font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none transition duration-[0.3s] ease-in-out"
                          href=""
                        >
                          Accomodation Deals
                        </Link>
                      </li>
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center text-black-900 group-hover:text-secondary font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none transition duration-[0.3s] ease-in-out"
                          href=""
                        >
                          Guide
                        </Link>
                      </li> */}
                    </ul>
                  </div>
                </div>
                <div className="col-span-full sm:col-span-4 lg:col-span-4 xl:col-span-2">
                  <div className="flex flex-col">
                    <h2 className="font-bevietnamPro text-base font-semibold capitalize text-black-900">
                      Coinfest asia
                    </h2>
                    <ul className="mt-6 pl-0">
                      <li className="hs-tooltip group mb-4 [--placement:right] [--trigger:hover] last:mb-0">
                        <button
                          type="button"
                          aria-label="menuActivities"
                          className="hs-tooltip-toggle flex flex-row items-center font-bevietnamPro text-base font-light capitalize leading-[normal] text-black-900 outline-none focus-visible:outline-none group-hover:text-secondary group-hover:underline"
                        >
                          Activities
                          <span
                            className="hs-tooltip-content invisible absolute z-10 inline-block rounded-[7px] bg-black-900 px-2.5 py-1 font-bevietnamPro text-xs font-normal text-white opacity-0 transition-opacity duration-[0.3s] ease-in-out hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
                            role="tooltip"
                          >
                            Coming Soon
                          </span>
                        </button>
                      </li>
                      <li className="hs-tooltip group mb-4 [--placement:right] [--trigger:hover] last:mb-0">
                        <button
                          type="button"
                          aria-label="menuVenue"
                          className="hs-tooltip-toggle flex flex-row items-center font-bevietnamPro text-base font-light capitalize leading-[normal] text-black-900 outline-none focus-visible:outline-none group-hover:text-secondary group-hover:underline"
                        >
                          Venue
                          <span
                            className="hs-tooltip-content invisible absolute z-10 inline-block rounded-[7px] bg-black-900 px-2.5 py-1 font-bevietnamPro text-xs font-normal text-white opacity-0 transition-opacity duration-[0.3s] ease-in-out hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
                            role="tooltip"
                          >
                            Coming Soon
                          </span>
                        </button>
                      </li>
                      {/* <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center font-bevietnamPro text-base font-light capitalize leading-[normal] text-black-900 outline-none transition duration-[0.3s] ease-in-out focus-visible:outline-none group-hover:text-secondary group-hover:underline"
                          href="/venue"
                        >
                          Venue
                        </Link>
                      </li> */}
                      {/* <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center text-black-900 group-hover:text-secondary font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none transition duration-[0.3s] ease-in-out"
                          href=""
                        >
                          Speakers
                        </Link>
                      </li> */}
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
                    </ul>
                  </div>
                </div>
                <div className="col-span-full sm:col-span-4 lg:col-span-4 xl:col-span-2">
                  <div className="flex flex-col">
                    <h2 className="font-bevietnamPro text-base font-semibold capitalize text-black-900">
                      Coinfest week
                    </h2>
                    <ul className="mt-6 pl-0">
                      {/* <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center text-black-900 group-hover:text-secondary font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none transition duration-[0.3s] ease-in-out"
                          href=""
                        >
                          Map
                        </Link>
                      </li>
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center text-black-900 group-hover:text-secondary font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none transition duration-[0.3s] ease-in-out"
                          href=""
                        >
                          Submit side event
                        </Link>
                      </li>
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center text-black-900 group-hover:text-secondary font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none transition duration-[0.3s] ease-in-out"
                          href=""
                        >
                          Co-host a side event
                        </Link>
                      </li> */}
                      <li className="hs-tooltip [—prevent-popper:true] group mb-4 [--placement:right] [--trigger:hover] [--tooltip-strategy:absolute] last:mb-0">
                        <button
                          type="button"
                          aria-label="menuMap"
                          className="hs-tooltip-toggle flex flex-row items-center font-bevietnamPro text-base font-light capitalize leading-[normal] text-black-900 outline-none focus-visible:outline-none group-hover:text-secondary group-hover:underline"
                        >
                          Map
                          <span
                            className="hs-tooltip-content invisible absolute z-10 inline-block rounded-[7px] bg-black-900 px-2.5 py-1 font-bevietnamPro text-xs font-normal text-white opacity-0 transition-opacity duration-[0.3s] ease-in-out hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
                            role="tooltip"
                          >
                            Coming Soon
                          </span>
                        </button>
                      </li>
                      <li className="hs-tooltip group mb-4 [--placement:right] [--trigger:hover] last:mb-0">
                        <button
                          type="button"
                          aria-label="menuSubmitEvent"
                          className="hs-tooltip-toggle flex flex-row items-center font-bevietnamPro text-base font-light capitalize leading-[normal] text-black-900 outline-none focus-visible:outline-none group-hover:text-secondary group-hover:underline"
                        >
                          Submit side event
                          <span
                            className="hs-tooltip-content invisible absolute z-10 inline-block rounded-[7px] bg-black-900 px-2.5 py-1 font-bevietnamPro text-xs font-normal text-white opacity-0 transition-opacity duration-[0.3s] ease-in-out hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
                            role="tooltip"
                          >
                            Coming Soon
                          </span>
                        </button>
                      </li>
                      <li className="hs-tooltip group mb-4 [--placement:right] [--trigger:hover] last:mb-0">
                        <button
                          type="button"
                          aria-label="menuCoHostEvent"
                          className="hs-tooltip-toggle flex flex-row items-center font-bevietnamPro text-base font-light capitalize leading-[normal] text-black-900 outline-none focus-visible:outline-none group-hover:text-secondary group-hover:underline"
                        >
                          Co-host a side event
                          <span
                            className="hs-tooltip-content invisible absolute z-10 inline-block rounded-[7px] bg-black-900 px-2.5 py-1 font-bevietnamPro text-xs font-normal text-white opacity-0 transition-opacity duration-[0.3s] ease-in-out hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
                            role="tooltip"
                          >
                            Coming Soon
                          </span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-span-full sm:col-span-4 lg:col-span-4 xl:col-span-2">
                  <div className="flex flex-col">
                    <h2 className="font-bevietnamPro text-base font-semibold capitalize text-black-900">
                      Get Involved
                    </h2>
                    <ul className="mt-6 pl-0">
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center font-bevietnamPro text-base font-light capitalize leading-[normal] text-black-900 outline-none transition duration-[0.3s] ease-in-out focus-visible:outline-none group-hover:text-secondary group-hover:underline"
                          href="https://ticket.coinfest.asia"
                        >
                          Purchase Tickets
                        </Link>
                      </li>
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
                          Inquire to Sponsor
                        </Link>
                      </li>
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center font-bevietnamPro text-base font-light capitalize leading-[normal] text-black-900 outline-none transition duration-[0.3s] ease-in-out focus-visible:outline-none group-hover:text-secondary group-hover:underline"
                          href="/get-involved/media-partners"
                        >
                          Media Contact
                        </Link>
                      </li>
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center font-bevietnamPro text-base font-light capitalize leading-[normal] text-black-900 outline-none transition duration-[0.3s] ease-in-out focus-visible:outline-none group-hover:text-secondary group-hover:underline"
                          href="/get-involved/community"
                        >
                          Communities Contact
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
                <div className="col-span-full sm:col-span-4 lg:col-span-4 xl:col-span-2">
                  <div className="flex flex-col">
                    <h2 className="font-bevietnamPro text-base font-semibold capitalize text-black-900">
                      Other
                    </h2>
                    <ul className="mt-6 pl-0">
                      {/* <li className="group hs-tooltip [--trigger:hover] [--placement:right] mb-4 last:mb-0">
                        <button
                          type="button"
                          aria-label="menuTermsConditions"
                          className="hs-tooltip-toggle flex flex-row items-center text-black-900 group-hover:text-secondary font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none"
                        >
                          Terms & Conditions
                          <span
                            className="hs-tooltip-content bg-black-900 text-white font-bevietnamPro text-xs font-normal rounded-[7px] inline-block absolute py-1 px-2.5 hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity duration-[0.3s] ease-in-out invisible z-10"
                            role="tooltip"
                          >
                            Coming Soon
                          </span>
                        </button>
                      </li>
                      <li className="group hs-tooltip [--trigger:hover] [--placement:right] mb-4 last:mb-0">
                        <button
                          type="button"
                          aria-label="menuPrivacyPolicy"
                          className="hs-tooltip-toggle flex flex-row items-center text-black-900 group-hover:text-secondary font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none"
                        >
                          Privacy Policy
                          <span
                            className="hs-tooltip-content bg-black-900 text-white font-bevietnamPro text-xs font-normal rounded-[7px] inline-block absolute py-1 px-2.5 hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity duration-[0.3s] ease-in-out invisible z-10"
                            role="tooltip"
                          >
                            Coming Soon
                          </span>
                        </button>
                      </li>
                      <li className="group hs-tooltip [--trigger:hover] [--placement:right] mb-4 last:mb-0">
                        <button
                          type="button"
                          aria-label="menuGallery"
                          className="hs-tooltip-toggle flex flex-row items-center text-black-900 group-hover:text-secondary font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none"
                        >
                          Gallery
                          <span
                            className="hs-tooltip-content bg-black-900 text-white font-bevietnamPro text-xs font-normal rounded-[7px] inline-block absolute py-1 px-2.5 hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity duration-[0.3s] ease-in-out invisible z-10"
                            role="tooltip"
                          >
                            Coming Soon
                          </span>
                        </button>
                      </li> */}
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
                      {/* <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center text-black-900 group-hover:text-secondary font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none transition duration-[0.3s] ease-in-out"
                          href=""
                        >
                          Newsletter
                        </Link>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-15 flex flex-col items-start justify-start lg:mt-24 lg:flex-row lg:items-center lg:justify-between">
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
