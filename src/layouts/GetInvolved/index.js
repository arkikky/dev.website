import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// @components
import Container from '@components/Container';
import StarryBackground from '@components/UI/Background/StarryBackground';
const GetInvolvedCards = dynamic(
  () => import('@components/UI/Cards/GetInvolvedCards')
);

const GetInvolved = ({ mode, result = [] }) => {
  return (
    <>
      <section className="ca25GetInvolved ca25MoonHalf-Cirlce_Portal relative block w-full">
        <div className="ca25PointerNone absolute inset-x-0 inset-y-0 z-px">
          <StarryBackground starCount={75} />
        </div>
        <Container
          className={'relative z-[2] pb-5 pt-10 sm:pb-16 sm:pt-18 lg:pt-24'}
        >
          <h2
            className={`ca25HeadingTitle w-full text-center font-semibold uppercase sm:font-bold ${mode === 'light' ? 'text-black-900' : 'text-white'} mb-8 text-balance sm:mb-12 lg:mb-12`}
          >
            {'GET INVOLVED FOR 2025'
              ?.split('')
              ?.map((chr, i) =>
                ['E', 'O', 'A', '0'].includes(chr) ? (
                  <span key={i}>{chr}</span>
                ) : (
                  chr
                )
              )}
          </h2>
          <div className="relative w-full grid-cols-4 gap-x-2 gap-y-2 supports-grid:grid sm:grid-cols-12 sm:gap-x-3 sm:gap-y-3 lg:grid-cols-10 xl:gap-x-3.5 xl:gap-y-3.5">
            <div className="col-span-full col-start-1 sm:col-span-10 sm:col-start-2 lg:col-span-8 lg:col-start-2">
              <div className="w-full grid-cols-4 gap-x-3 gap-y-3 supports-grid:grid sm:gap-x-4 sm:gap-y-4 lg:gap-x-6 lg:gap-y-6">
                {result?.slice(0, 5)?.map((rslt, i) => (
                  <GetInvolvedCards
                    keyID={`ca25GetInvolved${i}`}
                    {...rslt}
                    key={`ca25GetInvolved${i}`}
                  />
                ))}
                <Link
                  className="group relative col-span-2 flex h-[115px] w-full flex-col items-start justify-start overflow-clip rounded-lg border border-solid border-white/55 bg-black-900/[0.24] transition-[border] duration-300 ease-in-out bg-gradient-primary45 hover:border-[#ED4F35] sm:col-span-2 sm:h-[155px] sm:rounded-2xl sm:border-2 lg:col-span-2 lg:h-[185px] xl:h-[247px]"
                  prefetch={true}
                  href={'mailto:partner@coinfest.asia'}
                >
                  <div className="absolute inset-x-0 inset-y-0 z-[3] flex flex-row items-center justify-center">
                    <h3 className="-ml-[5px] max-w-[62px] text-balance text-[13px] font-normal uppercase leading-[15px] text-white group-hover:underline sm:-ml-[42px] sm:max-w-[99px] sm:text-[20px] sm:font-medium sm:leading-[26px] lg:-ml-[56px] lg:text-[22px] lg:leading-[28px] xl:-ml-[112px] xl:max-w-[127px] xl:text-[26px] xl:leading-[32px]">
                      Send inquiry
                    </h3>
                    <svg
                      className="h-[22px] w-[22px] stroke-white sm:h-[36px] sm:w-[36px] lg:h-[42px] lg:w-[42px]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default GetInvolved;
