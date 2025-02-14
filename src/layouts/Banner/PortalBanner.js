'use client';
import React from 'react';
import Link from 'next/link';

// @components
import StarryBackground from '@components/UI/Background/StarryBackground';

const PortalBanner = ({ id = 'ca25PortalBanner0', mode }) => {
  return (
    <>
      <div
        className={`${id} ca25BgDiamondPortal relative mx-auto flex h-[231px] w-full max-w-full flex-col items-center justify-center sm:h-[343px] lg:h-[457px] xl:h-[516px] 3xl:h-[617px] 3xl:!w-[1583px]`}
      >
        <div className="pointer-events-none absolute inset-x-0 bottom-auto top-0 -z-px h-[425px] select-none">
          <StarryBackground starCount={90} />
        </div>
        <div className="ca25PortalBanner_Items"></div>

        {/* @content */}
        <div className="absolute inset-x-auto inset-y-auto -mt-3.5 w-full max-w-[655px] text-center sm:-mt-[33px] lg:-mt-[123px] xl:-mt-[92px]">
          <h2
            className={`ca25HeadingTitle w-full text-center font-bold uppercase ${mode === 'light' ? 'text-black-900' : 'text-white'} mb-4 text-balance sm:mb-7`}
          >
            {'TAKE PART IN COINFEST'
              ?.split('')
              ?.map((chr, i) =>
                ['E', 'O', 'A', '0'].includes(chr) ? (
                  <span key={i}>{chr}</span>
                ) : (
                  chr
                )
              )}{' '}
            {'A'
              ?.split('')
              ?.map((chr, i) =>
                ['E', 'O', 'A', '0'].includes(chr) ? (
                  <span key={i}>{chr}</span>
                ) : (
                  chr
                )
              )}
            SIA
          </h2>
          <Link
            className={`ca25MoonBtn-Embossed group relative mx-auto inline-flex w-max items-center justify-center overflow-hidden rounded-full bg-[#ED4F35] px-4 py-3 text-sm font-semibold uppercase leading-initial text-white disabled:pointer-events-none disabled:opacity-90 sm:px-7 sm:py-5`}
            prefetch={true}
            href="/get-involved/sponsorship"
            title={`Coinfest Asia 2025 Request Sponsorship Prospectus`}
          >
            {`Request Sponsorship Prospectus`}
            <div className="absolute inset-0 flex h-full w-full justify-center blur-md [transform:skew(-13deg)_translateX(-100%)] group-hover:transition-[transform] group-hover:duration-[1.6s] group-hover:[transform:skew(-13deg)_translateX(100%)]">
              <div className="relative h-full w-12 bg-white/40"></div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PortalBanner;
