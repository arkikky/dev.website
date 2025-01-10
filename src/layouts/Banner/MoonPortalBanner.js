import React from 'react';
import Link from 'next/link';

// @components
import Container from '@components/Container';
import StarryBackground from '@components/UI/Background/StarryBackground';

const MoonPortalBanner = ({ mode }) => {
  return (
    <>
      <section
        id="ca25MoonPortalBanner_Footer"
        className="ca25BckBlueMoon relative flex h-[321px] w-full flex-col items-center justify-center overflow-hidden sm:h-[437px] lg:h-[516px] xl:h-[606px]"
      >
        <Container
          className={
            'ca25BckBlueMoon_Items absolute inset-x-0 inset-y-0 z-[2] flex flex-row items-center justify-center'
          }
        ></Container>
        <div className="pointer-events-none absolute inset-x-0 inset-y-0 z-px select-none">
          <StarryBackground starCount={75} />
        </div>
        <div className="absolute inset-x-auto inset-y-auto z-[12] mx-auto mt-[7px] w-full max-w-[335px] text-center sm:mt-0 sm:max-w-[525px] lg:-mt-[21px] lg:max-w-[643px] xl:mt-[5px] xl:max-w-[805px]">
          <h2
            className={`ca25HeadingTitle_M w-full text-center font-semibold uppercase sm:font-bold ${mode === 'light' ? 'text-black-900' : 'text-white'} mb-2 text-balance sm:mb-4`}
          >
            {`JOIN WORLD'S LARGEST CRYPTO FESTIVAL`
              ?.split('')
              ?.map((chr, i) =>
                ['E', 'O', 'A', '0'].includes(chr) ? (
                  <span key={i}>{chr}</span>
                ) : (
                  chr
                )
              )}
          </h2>
          <Link
            className={`ca25MoonBtn-Embossed relative mx-auto inline-flex w-[165px] items-center justify-center rounded-full bg-[#ED4F35] px-3 py-2.5 text-sm font-semibold uppercase leading-initial text-white disabled:pointer-events-none disabled:opacity-90 sm:w-[237px] sm:px-6 sm:py-5 xl:w-[237px]`}
            prefetch={true}
            href="/tickets"
            title={`Coinfest Asia 2025 Get Tickets Now`}
          >
            {`Get Tickets Now`}
          </Link>
        </div>
      </section>
    </>
  );
};

export default MoonPortalBanner;
