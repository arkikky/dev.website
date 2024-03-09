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
      <footer className="ca2024Footer ca2024SectionEnd bg-white justify-end overflow-x-hidden relative">
        <Container className="pt-12 sm:pt-17 pb-[128px] sm:pb-[164px]">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <div className="block relative w-max">
                <Image
                  className="aspect-auto my-auto mx-auto h-auto w-[148px] sm:w-[182px]"
                  src={"/assets/images/ca2024-BlackBrand.svg"}
                  alt={`${publicRuntimeConfig.siteAppName} (Primary Brand - Footer)`}
                  height={24}
                  width={24}
                  quality="87"
                />
              </div>
              <div className="supports-grid:grid grid-cols-4 sm:grid-cols-12 lg:grid-cols-12 gap-y-8 gap-x-6 mt-8 sm:mt-15">
                <div className="col-span-full sm:col-span-4 lg:col-span-4 xl:col-span-2">
                  <div className="flex flex-col">
                    <h2 className="text-black-900 font-bevietnamPro text-base font-semibold capitalize">
                      Travel
                    </h2>
                    <ul className="pl-0 mt-6">
                      <li className="group hs-tooltip [--trigger:hover] [--placement:right] mb-4 last:mb-0">
                        <button
                          type="button"
                          aria-label="menuFlightDeals"
                          className="hs-tooltip-toggle flex flex-row items-center text-black-900 group-hover:text-secondary font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none"
                        >
                          Flight Deals
                          <span
                            className="hs-tooltip-content bg-black-900 text-white font-bevietnamPro text-xs font-normal rounded-lg inline-block absolute py-1 px-2.5 hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity duration-[0.3s] ease-in-out invisible z-10"
                            role="tooltip"
                          >
                            Coming Soon
                          </span>
                        </button>
                      </li>
                      <li className="group hs-tooltip [--trigger:hover] [--placement:right] mb-4 last:mb-0">
                        <button
                          type="button"
                          aria-label="menuAccomodationDeals"
                          className="hs-tooltip-toggle flex flex-row items-center text-black-900 group-hover:text-secondary font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none"
                        >
                          Accomodation Deals
                          <span
                            className="hs-tooltip-content bg-black-900 text-white font-bevietnamPro text-xs font-normal rounded-lg inline-block absolute py-1 px-2.5 hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity duration-[0.3s] ease-in-out invisible z-10"
                            role="tooltip"
                          >
                            Coming Soon
                          </span>
                        </button>
                      </li>
                      <li className="group hs-tooltip [--trigger:hover] [--placement:right] mb-4 last:mb-0">
                        <button
                          type="button"
                          aria-label="menuGuide"
                          className="hs-tooltip-toggle flex flex-row items-center text-black-900 group-hover:text-secondary font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none"
                        >
                          Guides
                          <span
                            className="hs-tooltip-content bg-black-900 text-white font-bevietnamPro text-xs font-normal rounded-lg inline-block absolute py-1 px-2.5 hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity duration-[0.3s] ease-in-out invisible z-10"
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
                    <h2 className="text-black-900 font-bevietnamPro text-base font-semibold capitalize">
                      Coinfest asia
                    </h2>
                    <ul className="pl-0 mt-6">
                      {/* <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center text-black-900 group-hover:text-secondary font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none transition duration-[0.3s] ease-in-out"
                          href=""
                        >
                          Venue
                        </Link>
                      </li>
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center text-black-900 group-hover:text-secondary font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none transition duration-[0.3s] ease-in-out"
                          href=""
                        >
                          Speakers
                        </Link>
                      </li> */}
                      <li className="group hs-tooltip [--trigger:hover] [--placement:right] mb-4 last:mb-0">
                        <button
                          type="button"
                          aria-label="menuVenue"
                          className="hs-tooltip-toggle flex flex-row items-center text-black-900 group-hover:text-secondary font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none"
                        >
                          Venue
                          <span
                            className="hs-tooltip-content bg-black-900 text-white font-bevietnamPro text-xs font-normal rounded-lg inline-block absolute py-1 px-2.5 hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity duration-[0.3s] ease-in-out invisible z-10"
                            role="tooltip"
                          >
                            Coming Soon
                          </span>
                        </button>
                      </li>
                      <li className="group hs-tooltip [--trigger:hover] [--placement:right] mb-4 last:mb-0">
                        <button
                          type="button"
                          aria-label="menuSpeakers"
                          className="hs-tooltip-toggle flex flex-row items-center text-black-900 group-hover:text-secondary font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none"
                        >
                          Speakers
                          <span
                            className="hs-tooltip-content bg-black-900 text-white font-bevietnamPro text-xs font-normal rounded-lg inline-block absolute py-1 px-2.5 hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity duration-[0.3s] ease-in-out invisible z-10"
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
                    <h2 className="text-black-900 font-bevietnamPro text-base font-semibold capitalize">
                      Coinfest week
                    </h2>
                    <ul className="pl-0 mt-6">
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
                      <li className="group hs-tooltip [--trigger:hover] [--placement:right] mb-4 last:mb-0">
                        <button
                          type="button"
                          aria-label="menuMap"
                          className="hs-tooltip-toggle flex flex-row items-center text-black-900 group-hover:text-secondary font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none"
                        >
                          Map
                          <span
                            className="hs-tooltip-content bg-black-900 text-white font-bevietnamPro text-xs font-normal rounded-lg inline-block absolute py-1 px-2.5 hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity duration-[0.3s] ease-in-out invisible z-10"
                            role="tooltip"
                          >
                            Coming Soon
                          </span>
                        </button>
                      </li>
                      <li className="group hs-tooltip [--trigger:hover] [--placement:right] mb-4 last:mb-0">
                        <button
                          type="button"
                          aria-label="menuSubmitEvent"
                          className="hs-tooltip-toggle flex flex-row items-center text-black-900 group-hover:text-secondary font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none"
                        >
                          Submit side event
                          <span
                            className="hs-tooltip-content bg-black-900 text-white font-bevietnamPro text-xs font-normal rounded-lg inline-block absolute py-1 px-2.5 hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity duration-[0.3s] ease-in-out invisible z-10"
                            role="tooltip"
                          >
                            Coming Soon
                          </span>
                        </button>
                      </li>
                      <li className="group hs-tooltip [--trigger:hover] [--placement:right] mb-4 last:mb-0">
                        <button
                          type="button"
                          aria-label="menuCoHostEvent"
                          className="hs-tooltip-toggle flex flex-row items-center text-black-900 group-hover:text-secondary font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none"
                        >
                          Co-host a side event
                          <span
                            className="hs-tooltip-content bg-black-900 text-white font-bevietnamPro text-xs font-normal rounded-lg inline-block absolute py-1 px-2.5 hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity duration-[0.3s] ease-in-out invisible z-10"
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
                    <h2 className="text-black-900 font-bevietnamPro text-base font-semibold capitalize">
                      Get Involved
                    </h2>
                    <ul className="pl-0 mt-6">
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center text-black-900 group-hover:text-secondary font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none transition duration-[0.3s] ease-in-out"
                          href="https://ticket.coinfest.asia"
                        >
                          Purchase Tickets
                        </Link>
                      </li>
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center text-black-900 group-hover:text-secondary font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none transition duration-[0.3s] ease-in-out"
                          href="/get-involved/speakers"
                        >
                          Apply to Speak
                        </Link>
                      </li>
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center text-black-900 group-hover:text-secondary font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none transition duration-[0.3s] ease-in-out"
                          href="/get-involved/sponsorship"
                        >
                          Inquire to Sponsor
                        </Link>
                      </li>
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center text-black-900 group-hover:text-secondary font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none transition duration-[0.3s] ease-in-out"
                          href="/get-involved/media-partners"
                        >
                          Media Contact
                        </Link>
                      </li>
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center text-black-900 group-hover:text-secondary font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none transition duration-[0.3s] ease-in-out"
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
                    <h2 className="text-black-900 font-bevietnamPro text-base font-semibold capitalize">
                      Previous Editions
                    </h2>
                    <ul className="pl-0 mt-6">
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center text-black-900 group-hover:text-secondary font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none transition duration-[0.3s] ease-in-out"
                          href="https://2022.coinfest.asia/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          2022
                          <svg
                            className="fill-current ml-1 h-5 w-5"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.43695 5.0791L9.43312 6.74577L13.2311 6.75465L5.22821 14.7415L6.40554 15.9212L14.4304 7.91247L14.4214 11.7575L16.088 11.7614L16.1036 5.09469L9.43695 5.0791Z" />
                          </svg>
                        </Link>
                      </li>
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center text-black-900 group-hover:text-secondary font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none transition duration-[0.3s] ease-in-out"
                          href="https://2023.coinfest.asia/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          2023
                          <svg
                            className="fill-current ml-1 h-5 w-5"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.43695 5.0791L9.43312 6.74577L13.2311 6.75465L5.22821 14.7415L6.40554 15.9212L14.4304 7.91247L14.4214 11.7575L16.088 11.7614L16.1036 5.09469L9.43695 5.0791Z" />
                          </svg>
                        </Link>
                      </li>
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center text-black-900 group-hover:text-secondary font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none transition duration-[0.3s] ease-in-out"
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
                    <h2 className="text-black-900 font-bevietnamPro text-base font-semibold capitalize">
                      Other
                    </h2>
                    <ul className="pl-0 mt-6">
                      {/* <li className="group hs-tooltip [--trigger:hover] [--placement:right] mb-4 last:mb-0">
                        <button
                          type="button"
                          aria-label="menuTermsConditions"
                          className="hs-tooltip-toggle flex flex-row items-center text-black-900 group-hover:text-secondary font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none"
                        >
                          Terms & Conditions
                          <span
                            className="hs-tooltip-content bg-black-900 text-white font-bevietnamPro text-xs font-normal rounded-lg inline-block absolute py-1 px-2.5 hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity duration-[0.3s] ease-in-out invisible z-10"
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
                            className="hs-tooltip-content bg-black-900 text-white font-bevietnamPro text-xs font-normal rounded-lg inline-block absolute py-1 px-2.5 hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity duration-[0.3s] ease-in-out invisible z-10"
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
                            className="hs-tooltip-content bg-black-900 text-white font-bevietnamPro text-xs font-normal rounded-lg inline-block absolute py-1 px-2.5 hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity duration-[0.3s] ease-in-out invisible z-10"
                            role="tooltip"
                          >
                            Coming Soon
                          </span>
                        </button>
                      </li> */}
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center text-black-900 group-hover:text-secondary font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none transition duration-[0.3s] ease-in-out"
                          href="/terms-and-conditions"
                        >
                          Terms & Conditions
                        </Link>
                      </li>
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center text-black-900 group-hover:text-secondary font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none transition duration-[0.3s] ease-in-out"
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
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between mt-15 lg:mt-24">
              <div className="text-black-900 font-bevietnamPro text-sm font-light prose-strong:text-secondary prose-a:text-secondary prose-a:underline w-full max-w-[545px] xl:max-w-max">
                Copyright © <strong>Coinfest Asia</strong>. All rights reserved.
                Coinfest is organized by{" "}
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
              <ul className="flex flex-row relative mt-4 lg:mt-0 pl-0">
                <li className="mr-4 last:mr-0">
                  <Link
                    className="outline-none focus-visible:outline-none"
                    href="https://twitter.com/coinfestasia"
                    title="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="aspect-auto my-auto mx-auto h-6 w-6"
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
                      className="aspect-auto my-auto mx-auto h-6 w-6"
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
                      className="aspect-auto my-auto mx-auto h-6 w-6"
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
                      className="aspect-auto my-auto mx-auto h-6 w-6"
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
