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
      <footer className="ca2024Footer flex flex-col items-end justify-end overflow-hidden relative pt-12 sm:pt-17 pb-[128px] sm:pb-[164px]">
        <Container>
          <div className="flex flex-col">
            <div className="flex flex-col">
              <div className="block relative w-max">
                <Image
                  className="aspect-auto my-auto mx-auto h-auto w-[148px] sm:w-[182px]"
                  src={"/assets/images/ca2024-BrandBlack.svg"}
                  alt={`${publicRuntimeConfig.siteAppName} (Primary Brand Logo)`}
                  height={24}
                  width={24}
                  quality="87"
                />
              </div>
              <div className="supports-grid:grid grid-cols-4 sm:grid-cols-12 lg:grid-cols-12 gap-y-8 gap-x-6 mt-8 sm:mt-15">
                <div className="col-span-full sm:col-span-4 lg:col-span-4 xl:col-span-2">
                  <div className="flex flex-col">
                    <h2 className="text-black-900 font-bevietnamPro text-base font-bold capitalize">
                      Travel
                    </h2>
                    <ul className="pl-0 mt-6">
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center text-black-900 font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none"
                          href=""
                        >
                          Flight Deals
                        </Link>
                      </li>
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center text-black-900 font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none"
                          href=""
                        >
                          Accomodation Deals
                        </Link>
                      </li>
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center text-black-900 font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none"
                          href=""
                        >
                          Guide
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-span-full sm:col-span-4 lg:col-span-4 xl:col-span-2">
                  <div className="flex flex-col">
                    <h2 className="text-black-900 font-bevietnamPro text-base font-bold capitalize">
                      Coinfest asia
                    </h2>
                    <ul className="pl-0 mt-6">
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center text-black-900 font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none"
                          href=""
                        >
                          Ticket
                        </Link>
                      </li>
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center text-black-900 font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none"
                          href=""
                        >
                          Venue
                        </Link>
                      </li>
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center text-black-900 font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none"
                          href=""
                        >
                          Speakers
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-span-full sm:col-span-4 lg:col-span-4 xl:col-span-2">
                  <div className="flex flex-col">
                    <h2 className="text-black-900 font-bevietnamPro text-base font-bold capitalize">
                      Coinfest week
                    </h2>
                    <ul className="pl-0 mt-6">
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center text-black-900 font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none"
                          href=""
                        >
                          Map
                        </Link>
                      </li>
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center text-black-900 font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none"
                          href=""
                        >
                          Submit side event
                        </Link>
                      </li>
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center text-black-900 font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none"
                          href=""
                        >
                          Co-host a side event
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-span-full sm:col-span-4 lg:col-span-4 xl:col-span-2">
                  <div className="flex flex-col">
                    <h2 className="text-black-900 font-bevietnamPro text-base font-bold capitalize">
                      Partnership
                    </h2>
                    <ul className="pl-0 mt-6">
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center text-black-900 font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none"
                          href="/get-involved/speakers"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Speakers
                        </Link>
                      </li>
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center text-black-900 font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none"
                          href="/get-involved/sponsorship"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Sponsorship Inquiry
                        </Link>
                      </li>
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center text-black-900 font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none"
                          href=""
                        >
                          Media Contact
                        </Link>
                      </li>
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center text-black-900 font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none"
                          href=""
                        >
                          Communities Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-span-full sm:col-span-4 lg:col-span-4 xl:col-span-2">
                  <div className="flex flex-col">
                    <h2 className="text-black-900 font-bevietnamPro text-base font-bold capitalize">
                      Previous Events
                    </h2>
                    <ul className="pl-0 mt-6">
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center text-black-900 font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none"
                          href="https://2022.coinfest.asia/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          2022
                          <svg
                            className="fill-current text-black-900 ml-1 h-5 w-5"
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
                          className="flex flex-row items-center text-black-900 font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none"
                          href="https://2023.coinfest.asia/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          2023
                          <svg
                            className="fill-current text-black-900 ml-1 h-5 w-5"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.43695 5.0791L9.43312 6.74577L13.2311 6.75465L5.22821 14.7415L6.40554 15.9212L14.4304 7.91247L14.4214 11.7575L16.088 11.7614L16.1036 5.09469L9.43695 5.0791Z" />
                          </svg>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-span-full sm:col-span-4 lg:col-span-4 xl:col-span-2">
                  <div className="flex flex-col">
                    <h2 className="text-black-900 font-bevietnamPro text-base font-bold capitalize">
                      Others
                    </h2>
                    <ul className="pl-0 mt-6">
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center text-black-900 font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none"
                          href=""
                        >
                          Terms & Conditions
                        </Link>
                      </li>
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center text-black-900 font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none"
                          href=""
                        >
                          Privacy Policy
                        </Link>
                      </li>
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center text-black-900 font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none"
                          href=""
                        >
                          Newsletter
                        </Link>
                      </li>
                      <li className="group mb-4 last:mb-0">
                        <Link
                          className="flex flex-row items-center text-black-900 font-bevietnamPro text-base font-light leading-[normal] capitalize group-hover:underline outline-none focus-visible:outline-none"
                          href=""
                        >
                          Gallery
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <ul className="flex flex-row relative pl-0">
                <li className="mr-4 last:mr-0">
                  <Link
                    className="outline-none focus-visible:outline-none"
                    href="https://twitter.com/coinfestasia"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="aspect-auto my-auto mx-auto h-6 w-6"
                      src={
                        "/assets/images/social-media/ca2024SocialMedia-Twitter.svg"
                      }
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
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="aspect-auto my-auto mx-auto h-6 w-6"
                      src={
                        "/assets/images/social-media/ca2024SocialMedia-Instagram.svg"
                      }
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
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="aspect-auto my-auto mx-auto h-6 w-6"
                      src={
                        "/assets/images/social-media/ca2024SocialMedia-Telegram.svg"
                      }
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
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="aspect-auto my-auto mx-auto h-6 w-6"
                      src={
                        "/assets/images/social-media/ca2024SocialMedia-Linkedin.svg"
                      }
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
