import React, { useEffect } from 'react';
import getConfig from 'next/config';
import Image from 'next/image';
import Link from 'next/link';

// @get .config
const { publicRuntimeConfig } = getConfig();

// @components
import Container from '@components/Container';

const NavbarCheckout = () => {
  return (
    <>
      <nav className="fixed inset-x-0 bottom-auto top-0 z-base flex h-auto w-full flex-col items-center justify-center border-b border-solid border-gray-200 bg-white py-4.5 sm:h-[84px] sm:py-0">
        <Container>
          <div className="flex flex-col items-center justify-between gap-y-6 sm:flex-row sm:gap-y-0">
            <div className="flex w-full flex-row items-center justify-between sm:w-max">
              <Link className="block w-max" href="/">
                <Image
                  className="h-9.5 mx-auto my-auto w-auto"
                  src={'/assets/images/ca2025Brand.svg'}
                  alt={`${publicRuntimeConfig.siteAppName} (Primary Brand - Navbar Checkout)`}
                  height={58}
                  width={170}
                  quality="87"
                  fetchPriority="auto"
                />
              </Link>
              <div className="block sm:hidden">Cart</div>
            </div>

            {/* @step-checkout */}
            <div className="flex w-full flex-col items-start justify-start sm:w-max">
              <ul className="relative flex flex-row gap-x-3">
                <li className="group flex flex-1 shrink basis-0 items-center gap-x-2 lg:gap-x-3">
                  <div className="inline-flex min-h-6 min-w-6 items-center justify-center align-middle text-xs">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-green-200 font-medium text-green-800">
                      <svg
                        className="block size-3 shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span className="ms-2 w-max text-sm font-normal text-green-800 sm:ms-2.5">
                      Order Information
                    </span>
                  </div>

                  <svg
                    className={
                      'mx-2 size-4 shrink-0 text-current text-gray-300'
                    }
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </li>

                <li className="group flex flex-1 shrink basis-0 items-center gap-x-2 lg:gap-x-3">
                  <div className="inline-flex min-h-6 min-w-6 items-center justify-center align-middle text-xs">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-gray-100 font-medium text-gray-600">
                      2
                    </span>
                    <span className="ms-2 w-max text-sm font-normal text-gray-600 sm:ms-2.5">
                      Complate Order
                    </span>
                  </div>
                  <div className="h-px w-8 flex-1 bg-gray-200 group-last:hidden"></div>
                </li>
              </ul>
            </div>
            <div className="hidden sm:block">Cart</div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default NavbarCheckout;
