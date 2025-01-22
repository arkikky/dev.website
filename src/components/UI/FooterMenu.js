import React from 'react';
import getConfig from 'next/config';
import Link from 'next/link';

// @get .config
const { publicRuntimeConfig } = getConfig();

const FooterMenu = ({ isTheme = 'dark', tooltip = 'Coming Soon' }) => {
  return (
    <>
      <div className="xl:grid-cols-13 mt-8 grid-cols-4 gap-x-6 gap-y-8 supports-grid:grid sm:mt-13 sm:grid-cols-12 lg:grid-cols-12">
        <div className="col-span-full sm:col-span-4 lg:col-span-4 xl:col-span-2">
          <div className="flex flex-col">
            <h2 className="text-base font-semibold capitalize text-current">
              Prepare your trip
            </h2>
            <ul className="mt-6 pl-0">
              <li className="hs-tooltip group mb-3 [--placement:right] [--trigger:hover] last:mb-0">
                <button
                  className="hs-tooltip-toggle leading-[normal flex flex-row items-center text-base font-light capitalize outline-none focus-visible:outline-none group-hover:underline"
                  type="button"
                  aria-label="Coinfest Asia 2025 Travel Deals"
                >
                  {`Travel Deals`}
                  <span
                    className="hs-tooltip-content invisible absolute z-10 inline-block rounded-[7px] px-2 py-1 text-xs font-normal opacity-0 transition-opacity duration-[0.3s] ease-in-out hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
                    role="tooltip"
                  >
                    {tooltip}
                  </span>
                </button>
              </li>
              <li className="hs-tooltip group mb-3 [--placement:right] [--trigger:hover] last:mb-0">
                <button
                  className="hs-tooltip-toggle leading-[normal flex flex-row items-center text-base font-light capitalize outline-none focus-visible:outline-none group-hover:underline"
                  type="button"
                  aria-label="Coinfest Asia 2025 FAQ"
                >
                  {`FAQ`}
                  <span
                    className="hs-tooltip-content invisible absolute z-10 inline-block rounded-[7px] px-2 py-1 text-xs font-normal opacity-0 transition-opacity duration-[0.3s] ease-in-out hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
                    role="tooltip"
                  >
                    {tooltip}
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-full sm:col-span-4 lg:col-span-4 xl:col-span-2">
          <div className="flex flex-col">
            <h2 className="text-base font-semibold capitalize text-current">
              Coinfest asia
            </h2>
            <ul className="mt-6 pl-0">
              <li className="group mb-3 last:mb-0">
                <Link
                  className={`flex flex-row items-center text-base capitalize leading-[normal] text-current outline-none transition duration-[0.3s] ease-in-out focus-visible:outline-none ${isTheme === 'dark' ? 'font-extralight group-hover:text-[#ED4F35]' : 'font-light group-hover:text-primary'} group-hover:underline`}
                  href="/get-involved/sponsorship"
                  title={`${publicRuntimeConfig?.siteAppName} Sponsorship Inquiry`}
                >
                  Sponsorship Inquiry
                </Link>
              </li>
              <li className="group mb-3 last:mb-0">
                <Link
                  className={`flex flex-row items-center text-base capitalize leading-[normal] text-current outline-none transition duration-[0.3s] ease-in-out focus-visible:outline-none ${isTheme === 'dark' ? 'font-extralight group-hover:text-[#ED4F35]' : 'font-light group-hover:text-primary'} group-hover:underline`}
                  href="/get-involved/speakers"
                  title={`${publicRuntimeConfig?.siteAppName} Apply as Speaker`}
                >
                  Apply as Speaker
                </Link>
              </li>
              <li className="group mb-3 last:mb-0">
                <Link
                  className={`flex flex-row items-center text-base capitalize leading-[normal] text-current outline-none transition duration-[0.3s] ease-in-out focus-visible:outline-none ${isTheme === 'dark' ? 'font-extralight group-hover:text-[#ED4F35]' : 'font-light group-hover:text-primary'} group-hover:underline`}
                  href="/tickets"
                  title={`${publicRuntimeConfig?.siteAppName} Tickets`}
                >
                  Tickets
                </Link>
              </li>
              <li className="group mb-3 last:mb-0">
                <Link
                  className={`flex flex-row items-center text-base capitalize leading-[normal] text-current outline-none transition duration-[0.3s] ease-in-out focus-visible:outline-none ${isTheme === 'dark' ? 'font-extralight group-hover:text-[#ED4F35]' : 'font-light group-hover:text-primary'} group-hover:underline`}
                  prefetch={true}
                  href="https://flic.kr/s/aHBqjATP6X"
                  title={`${publicRuntimeConfig?.siteAppName} Gallery`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gallery
                </Link>
              </li>
              {/* <li className="group mb-3 last:mb-0">
                <Link
                  className={`flex flex-row items-center text-base capitalize leading-[normal] text-current outline-none transition duration-[0.3s] ease-in-out focus-visible:outline-none ${isTheme === 'dark' ? 'font-extralight group-hover:text-[#ED4F35]' : 'font-light group-hover:text-primary'} group-hover:underline`}
                  href="/partners"
                  title={`${publicRuntimeConfig?.siteAppName} Partners`}
                >
                  Partners
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="col-span-full sm:col-span-4 lg:col-span-4 xl:col-span-2">
          <div className="flex flex-col">
            <h2 className="text-base font-semibold capitalize text-current">
              Coinfest Week
            </h2>
            <ul className="mt-6 pl-0">
              <li className="hs-tooltip group mb-3 [--placement:right] [--trigger:hover] last:mb-0">
                <button
                  className="hs-tooltip-toggle leading-[normal flex flex-row items-center text-base font-light capitalize outline-none focus-visible:outline-none group-hover:underline"
                  type="button"
                  aria-label="Coinfest Asia 2025 Map"
                >
                  {`Map`}
                  <span
                    className="hs-tooltip-content invisible absolute z-10 inline-block rounded-[7px] px-2 py-1 text-xs font-normal opacity-0 transition-opacity duration-[0.3s] ease-in-out hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
                    role="tooltip"
                  >
                    {tooltip}
                  </span>
                </button>
              </li>
              <li className="hs-tooltip group mb-3 [--placement:right] [--trigger:hover] last:mb-0">
                <button
                  className="hs-tooltip-toggle leading-[normal flex flex-row items-center text-base font-light capitalize outline-none focus-visible:outline-none group-hover:underline"
                  type="button"
                  aria-label="Coinfest Asia 2025 Submit Your Side Event"
                >
                  {`Submit Your Side Event`}
                  <span
                    className="hs-tooltip-content invisible absolute z-10 inline-block rounded-[7px] px-2 py-1 text-xs font-normal opacity-0 transition-opacity duration-[0.3s] ease-in-out hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
                    role="tooltip"
                  >
                    {tooltip}
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-full sm:col-span-4 lg:col-span-4 xl:col-span-2">
          <div className="flex flex-col">
            <h2 className="text-base font-semibold capitalize text-current">
              Get Involved
            </h2>
            <ul className="mt-6 pl-0">
              <li className="group mb-3 last:mb-0">
                <Link
                  className={`flex flex-row items-center text-base capitalize leading-[normal] text-current outline-none transition duration-[0.3s] ease-in-out focus-visible:outline-none ${isTheme === 'dark' ? 'font-extralight group-hover:text-[#ED4F35]' : 'font-light group-hover:text-primary'} group-hover:underline`}
                  href="/get-involved/sponsorship"
                  title={`${publicRuntimeConfig?.siteAppName} Sponsors`}
                >
                  Sponsor
                </Link>
              </li>
              <li className="group mb-3 last:mb-0">
                <Link
                  className={`flex flex-row items-center text-base capitalize leading-[normal] text-current outline-none transition duration-[0.3s] ease-in-out focus-visible:outline-none ${isTheme === 'dark' ? 'font-extralight group-hover:text-[#ED4F35]' : 'font-light group-hover:text-primary'} group-hover:underline`}
                  href="/get-involved/speakers"
                  title={`${publicRuntimeConfig?.siteAppName} Speakers`}
                >
                  Speaker
                </Link>
              </li>
              <li className="hs-tooltip group mb-3 [--placement:right] [--trigger:hover] last:mb-0">
                <button
                  className="hs-tooltip-toggle leading-[normal flex flex-row items-center text-base font-light capitalize outline-none focus-visible:outline-none group-hover:underline"
                  type="button"
                  aria-label="Coinfest Asia 2025 Partner as Media"
                >
                  {`Partner as Media`}
                  <span
                    className="hs-tooltip-content invisible absolute z-10 inline-block rounded-[7px] px-2 py-1 text-xs font-normal opacity-0 transition-opacity duration-[0.3s] ease-in-out hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
                    role="tooltip"
                  >
                    {tooltip}
                  </span>
                </button>
              </li>
              <li className="group mb-3 last:mb-0">
                <Link
                  className={`flex flex-row items-center text-base capitalize leading-[normal] text-current outline-none transition duration-[0.3s] ease-in-out focus-visible:outline-none ${isTheme === 'dark' ? 'font-extralight group-hover:text-[#ED4F35]' : 'font-light group-hover:text-primary'} group-hover:underline`}
                  href="/get-involved/become-an-affiliate"
                  title={`${publicRuntimeConfig?.siteAppName} Become an Affliate`}
                >
                  Become an Affliate
                </Link>
              </li>
              <li className="hs-tooltip group mb-3 [--placement:right] [--trigger:hover] last:mb-0">
                <button
                  className="hs-tooltip-toggle leading-[normal flex flex-row items-center text-base font-light capitalize outline-none focus-visible:outline-none group-hover:underline"
                  type="button"
                  aria-label="Coinfest Asia 2025 Partner as Community"
                >
                  {`Partner as Community`}
                  <span
                    className="hs-tooltip-content invisible absolute z-10 inline-block rounded-[7px] px-2 py-1 text-xs font-normal opacity-0 transition-opacity duration-[0.3s] ease-in-out hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
                    role="tooltip"
                  >
                    {tooltip}
                  </span>
                </button>
              </li>
              <li className="group mb-3 last:mb-0">
                <Link
                  className={`flex flex-row items-center text-base capitalize leading-[normal] text-current outline-none transition duration-[0.3s] ease-in-out focus-visible:outline-none ${isTheme === 'dark' ? 'font-extralight group-hover:text-[#ED4F35]' : 'font-light group-hover:text-primary'} group-hover:underline`}
                  href="mailto:partner@coinfest.asia"
                  title={`${publicRuntimeConfig?.siteAppName} Send Inquiry`}
                  target={'_blank'}
                  rel={'noopener noreferrer'}
                >
                  Send Inquiry
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-full sm:col-span-4 lg:col-span-4 xl:col-span-2">
          <div className="flex flex-col">
            <h2 className="text-base font-semibold capitalize text-current">
              Previous Events
            </h2>
            <ul className="mt-6 pl-0">
              <li className="group mb-3 last:mb-0">
                <Link
                  className={`flex flex-row items-center text-base capitalize leading-[normal] text-current outline-none transition duration-[0.3s] ease-in-out focus-visible:outline-none ${isTheme === 'dark' ? 'font-extralight group-hover:text-[#ED4F35]' : 'font-light group-hover:text-primary'} group-hover:underline`}
                  prefetch={true}
                  href="https://2024.coinfest.asia/"
                  title={`Coinfest Asia 2024`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  2024
                  <svg
                    className="ml-1 h-6 w-6 stroke-current"
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
              <li className="group mb-3 last:mb-0">
                <Link
                  className={`flex flex-row items-center text-base capitalize leading-[normal] text-current outline-none transition duration-[0.3s] ease-in-out focus-visible:outline-none ${isTheme === 'dark' ? 'font-extralight group-hover:text-[#ED4F35]' : 'font-light group-hover:text-primary'} group-hover:underline`}
                  prefetch={true}
                  href="https://2023.coinfest.asia/"
                  title={`Coinfest Asia 2023`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  2023
                  <svg
                    className="ml-1 h-6 w-6 stroke-current"
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
              <li className="group mb-3 last:mb-0">
                <Link
                  className={`flex flex-row items-center text-base capitalize leading-[normal] text-current outline-none transition duration-[0.3s] ease-in-out focus-visible:outline-none ${isTheme === 'dark' ? 'font-extralight group-hover:text-[#ED4F35]' : 'font-light group-hover:text-primary'} group-hover:underline`}
                  prefetch={true}
                  href="https://2022.coinfest.asia/"
                  title={`Coinfest Asia 2022`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  2022
                  <svg
                    className="ml-1 h-6 w-6 stroke-current"
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
        <div className="col-span-full flex flex-col space-y-6 sm:col-span-4 lg:col-span-4 xl:col-span-2">
          <div className="flex flex-col">
            <h2 className="text-base font-semibold capitalize text-current">
              Others
            </h2>
            <ul className="mt-6 pl-0">
              <li className="group mb-3 last:mb-0">
                <Link
                  className={`flex flex-row items-center text-base capitalize leading-[normal] text-current outline-none transition duration-[0.3s] ease-in-out focus-visible:outline-none ${isTheme === 'dark' ? 'font-extralight group-hover:text-[#ED4F35]' : 'font-light group-hover:text-primary'} group-hover:underline`}
                  prefetch={true}
                  href="/terms-and-conditions"
                  title={`${publicRuntimeConfig?.siteAppName} Terms & Conditions`}
                >
                  Terms & Conditions
                </Link>
              </li>
              <li className="group mb-3 last:mb-0">
                <Link
                  className={`flex flex-row items-center text-base capitalize leading-[normal] text-current outline-none transition duration-[0.3s] ease-in-out focus-visible:outline-none ${isTheme === 'dark' ? 'font-extralight group-hover:text-[#ED4F35]' : 'font-light group-hover:text-primary'} group-hover:underline`}
                  prefetch={true}
                  href="/privacy-policy"
                  title={`${publicRuntimeConfig?.siteAppName} Privacy Policy`}
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h2 className="text-base font-semibold capitalize text-current">
              Reach Out
            </h2>
            <ul className="mt-3 pl-0">
              <li className="group mb-3 last:mb-0">
                <Link
                  className={`flex flex-row items-center text-base lowercase leading-[normal] text-current outline-none transition duration-[0.3s] ease-in-out focus-visible:outline-none ${isTheme === 'dark' ? 'font-extralight group-hover:text-[#ED4F35]' : 'font-light group-hover:text-primary'} group-hover:underline`}
                  href="mailto:hi@coinfest.asia"
                  title={`${publicRuntimeConfig?.siteAppName} Email`}
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
    </>
  );
};

export default FooterMenu;
