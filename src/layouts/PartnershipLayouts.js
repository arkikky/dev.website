import React, { useState, useEffect } from 'react';
import getConfig from 'next/config';
import Link from 'next/link';
import Image from 'next/image';

// @get .config
const { publicRuntimeConfig } = getConfig();

const PartnershipLayouts = ({
  isTheme = 'dark',
  title,
  shortDesc = null,
  btnBack = false,
  urlBack = '',
  childLayouts = false,
  children,
}) => {
  const [isPanelLayouts, setPanelLayouts] = useState({
    active: false,
    images: '/assets/images/ca2025BrandLight.svg',
  });
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 334) {
        setPanelLayouts((prev) => ({
          ...prev,
          active: true,
          images: '/assets/images/ca2025BrandDark.svg',
        }));
      } else {
        setPanelLayouts((prev) => ({
          ...prev,
          active: false,
          images: '/assets/images/ca2025BrandLight.svg',
        }));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <main className="relative inline-flex w-full flex-grow flex-col bg-white xl:flex-row">
        <div className="bgGradient-Primary180 relative top-0 flex h-[394px] w-full shrink-0 flex-col overflow-hidden sm:h-[467px] lg:h-[527px] xl:sticky xl:h-svh xl:w-[675px] 2xl:flex-1">
          <div className="fixed inset-x-4 bottom-auto top-4 sm:top-5 z-base block sm:inset-x-11 xl:sticky">
            <Link
              className="ca25BrandLogo-BckBlured relative flex w-max shrink-0 flex-row items-start"
              href={'/'}
              title="Coinfest Asia 2025 Back to Home"
            >
              <div
                className={`mr-1.5 hidden h-8 w-8 flex-col items-center justify-center rounded-lg bg-white text-black-900 sm:mr-4 sm:h-12 sm:w-12 sm:rounded-xl xl:flex`}
              >
                <svg
                  className={`h-4 w-4 stroke-current text-current sm:h-6 sm:w-6`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M15 19L8 12L15 5"
                      strokeWidth="2.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </div>
              <Image
                className="mx-auto my-auto hidden aspect-auto h-auto w-[99px] transition duration-300 ease-in-out sm:w-[147px] xl:block"
                src={'/assets/images/ca2025BrandLight.svg'}
                alt={`${publicRuntimeConfig?.siteAppName} Primary Brand LOGO Footer`}
                height={58}
                width={170}
                quality="87"
              />

              {/* @mobile */}
              <div
                className={`mr-1.5 flex h-8 w-8 flex-col items-center justify-center rounded-lg xl:hidden ${isPanelLayouts?.active ? 'bg-black-900 text-white' : 'bg-white text-black-900'} transition-[background, colors] duration-300 ease-in-out sm:mr-4 sm:h-12 sm:w-12 sm:rounded-xl`}
              >
                <svg
                  className={`h-4 w-4 stroke-current text-current sm:h-6 sm:w-6`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M15 19L8 12L15 5"
                      strokeWidth="2.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </div>
              <Image
                className="mx-auto my-auto block aspect-auto h-auto w-[99px] transition duration-300 ease-in-out sm:w-[147px] xl:hidden"
                src={isPanelLayouts?.images}
                alt={`${publicRuntimeConfig?.siteAppName} Primary Brand LOGO Footer`}
                height={58}
                width={170}
                quality="87"
              />
            </Link>
          </div>
          <div className="absolute inset-x-0 inset-y-0 z-10 block h-full w-full overflow-hidden px-5 pt-[103px] sm:px-11 sm:pt-[136px] lg:pt-[166px] xl:pt-[196px]">
            <h1 className="ca25Fonts-PartnershipCustom w-full max-w-[496px] uppercase text-white sm:max-w-[573px]">
              {title}
            </h1>
            {shortDesc && (
              <span className="mt-2 block text-base font-normal text-white sm:mt-4 sm:text-xl">
                {shortDesc}
              </span>
            )}
          </div>

          {/* @backdrop */}
          <div className="ca25MoonPartnershipLayouts-Top absolute inset-x-0 bottom-auto top-0 z-[2] select-none"></div>
          <div className="ca25MoonPartnershipLayouts-Bottom absolute inset-x-0 bottom-0 top-auto z-[2] select-none"></div>
        </div>
        <div className="relative z-10 -mt-4 flex w-full min-w-full flex-1 flex-col rounded-t-[20px] bg-white px-4 pb-8 pt-10 sm:px-11 sm:pb-13 sm:pt-12 lg:px-17 lg:pb-20 lg:pt-17 xl:mt-0 xl:min-w-[auto] xl:rounded-none xl:py-17">
          <div className="absolute inset-x-0 bottom-auto top-3.5 mx-auto flex h-1.5 w-[134px] rounded-full bg-gray-200 xl:hidden"></div>
          {children}
        </div>
      </main>
    </>
  );
};

export default PartnershipLayouts;
