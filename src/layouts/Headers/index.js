import React from 'react';

// @components
import StarryBackground from '@components/UI/Background/StarryBackground';

const Headers = ({ mode }) => {
  return (
    <>
      <header id="ca25Headers" className="relative block w-full">
        <div className="ca25Headers_Hero relative flex h-svh w-full flex-col items-center justify-center overflow-x-hidden overflow-y-clip bg-[linear-gradient(180deg,#1F1F1F_37%,#005AFF_69%,#7AB1F9_87%,#A0CCF7_97%)] pt-[135px] sm:h-[1024px] sm:max-h-[1024px] sm:pt-[144px] lg:pt-[183px]">
          <h1 className="!pointer-events-none absolute inset-x-0 inset-y-0 -top-5 -z-[5] block h-max !select-none">
            {`WORLD'S LARGEST CRYPTO FESTIVAL`}
          </h1>
          <div className="pointer-events-none absolute inset-x-0 inset-y-0 z-px select-none">
            <StarryBackground starCount={155} />
          </div>

          {/* @backdrop(moon special) */}
          <div
            className={
              'ca25BckBlueMoon-Speacial pointer-events-none absolute inset-x-0 inset-y-0 z-[2] flex select-none flex-row items-center justify-center overflow-hidden'
            }
          >
            <div className="ca25BckBlueMoon-Speacial_MiniRckt absolute inset-x-0 inset-y-0 mx-auto w-full sm:w-[659.54px] xl:w-[1180px]"></div>
          </div>
          <div
            className={
              'ca25BckBlueMoon-SpeacialMoon pointer-events-none absolute inset-x-0 inset-y-0 z-[23] flex select-none flex-row items-center justify-center overflow-hidden mix-blend-hard-light'
            }
          ></div>

          {/* @content(heading) */}
          <div
            className={`absolute inset-x-0 inset-y-0 z-[22] mx-auto mb-8 flex w-full flex-col items-center justify-center text-balance text-center sm:mb-12 sm:w-[619.54px] lg:w-[749.54px] xl:w-[1116px]`}
          >
            <div
              className={`ca25HeadingHero subpixel-antialiased ${mode === 'light' ? 'text-black-900' : 'text-white'} [749.54px] xs:mt-[39px] mt-[49px] block w-full font-medium uppercase sm:-mt-[75px] sm:w-[619.54px] sm:font-semibold lg:w-[749.54px] xl:w-[1116px]`}
            >
              <div className="float-none pl-0 sm:float-left sm:pl-20">
                {'WORLD`S'
                  ?.split('')
                  .map((chr, i) =>
                    ['`', 'O'].includes(chr) ? <span key={i}>{chr}</span> : chr
                  )}
              </div>
              <div className="float-none sm:float-right">
                {'LARGEST'
                  ?.split('')
                  .map((chr, i) =>
                    ['A', 'E'].includes(chr) ? <span key={i}>{chr}</span> : chr
                  )}
              </div>
              <div className="float-none flex flex-row items-center justify-center gap-x-5 sm:float-left">
                <div>
                  {'CRYPTO'
                    ?.split('')
                    .map((chr, i) =>
                      ['Y', 'O'].includes(chr) ? (
                        <span key={i}>{chr}</span>
                      ) : (
                        chr
                      )
                    )}
                </div>
                <div className="hidden w-[285px] pl-7 text-left font-bevietnamPro text-[13px] font-normal leading-[21px] tracking-[14px] subpixel-antialiased sm:block lg:w-[325px] lg:text-[14px] lg:leading-[26px] lg:tracking-[18px] xl:w-[565px] xl:text-[24px] xl:leading-[36px] xl:tracking-[24px]">
                  BALI, <br />
                  21 — 22 AUG 2025
                </div>
              </div>
              <div className="float-none pr-0 sm:float-right sm:pr-3">
                {'FESTIVAL'
                  ?.split('')
                  .map((chr, i) =>
                    ['A', 'E'].includes(chr) ? <span key={i}>{chr}</span> : chr
                  )}
              </div>
            </div>
            <div className="xs:mt-4 mt-6 w-full text-center font-bevietnamPro text-[12px] font-medium leading-[16px] tracking-[5px] text-white sm:hidden">
              {`BALI, 21—22 AUG 2025`}
            </div>
          </div>
        </div>

        <div className="ca25BckBlueMoon-Speacial_Rckt !pointer-events-none absolute inset-x-0 inset-y-0 mx-auto w-full !select-none sm:w-[659.54px] xl:w-[1180px]"></div>
      </header>
    </>
  );
};

export default Headers;
