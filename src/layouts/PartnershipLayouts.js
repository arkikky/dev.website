import React from 'react';

const PartnershipLayouts = ({
  isTheme = 'dark',
  title,
  shortDesc = null,
  btnBack = false,
  urlBack = '',
  brandLogo = 'primary',
  children,
}) => {
  return (
    <>
      <main className="relative inline-flex w-full flex-grow flex-col bg-white xl:flex-row">
        <div className="bgGradient-Primary180 relative top-0 flex h-[394px] w-full shrink-0 flex-col overflow-hidden sm:h-[467px] lg:h-[527px] xl:sticky xl:h-svh xl:w-[675px] 2xl:flex-1">
          <div className="absolute inset-x-0 inset-y-0 z-10 block h-full w-full overflow-hidden px-5 pt-[121px] sm:px-11 sm:pt-[153px] lg:pt-[196px]">
            <h1 className="ca25Fonts-PartnershipCustom w-full max-w-[496px] uppercase text-white sm:max-w-[573px]">
              {title}
            </h1>
            {shortDesc && (
              <span className="mt-4 block text-lg font-normal text-white sm:text-xl">
                {shortDesc}
              </span>
            )}
          </div>

          {/* @backdrop */}
          <div className="ca25MoonPartnershipLayouts-Top absolute inset-x-0 bottom-auto top-0 z-[2] select-none"></div>
          <div className="ca25MoonPartnershipLayouts-Bottom absolute inset-x-0 bottom-0 top-auto z-[2] select-none"></div>
        </div>
        <div className="relative z-10 -mt-4 flex w-full min-w-full flex-1 flex-col overflow-x-hidden rounded-t-[20px] bg-white px-4 pb-8 pt-10 sm:px-11 sm:pb-13 sm:pt-12 lg:px-17 lg:pb-20 lg:pt-19 xl:mt-0 xl:min-w-[auto] xl:rounded-none xl:py-17">
          <div className="absolute inset-x-0 bottom-auto top-3.5 mx-auto flex h-1.5 w-[134px] rounded-full bg-gray-200 xl:hidden"></div>
          {children}
        </div>
      </main>
    </>
  );
};

export default PartnershipLayouts;
