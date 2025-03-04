import React from 'react';
import Link from 'next/link';

// @components
import Container from '@components/Container';
import StarryBackground from '@components/UI/Background/StarryBackground';
import SpeakerCards from '@components/UI/Cards/SpeakerCards';

const Speakers = ({ mode, result = [] }) => {
  return (
    <>
      <section className="ca25Speakers relative bg-[linear-gradient(186deg,#1F1F1F_33%,#005AFF_51%,#7AB1F9_71%,#A0CCF7_100%)] pb-11 pt-10 sm:pb-13 sm:pt-15 lg:pb-10 lg:pt-20 xl:pb-16">
        <div className="pointer-events-none absolute inset-x-0 bottom-auto top-0 -z-px h-[425px] select-none">
          <StarryBackground starCount={110} />
        </div>
        <Container className={'relative z-[2]'}>
          <div className="flex flex-col items-center justify-center text-center">
            <h2
              className={`ca25HeadingTitle w-full text-center font-semibold uppercase sm:font-bold ${mode === 'light' ? 'text-black-900' : 'text-white'} mb-4 text-balance sm:mb-7`}
            >
              {'PREVIOUS SPEAKERS'
                ?.split('')
                ?.map((chr, i) =>
                  ['E', 'O', 'A', '0'].includes(chr) ? (
                    <span key={i}>{chr}</span>
                  ) : (
                    chr
                  )
                )}
            </h2>
            <div className="relative mt-5 w-full grid-cols-4 gap-x-3 gap-y-3 supports-grid:grid sm:mt-3 sm:grid-cols-12 sm:gap-x-4 sm:gap-y-3 lg:mt-8 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-5 xl:gap-x-8 xl:gap-y-8">
              {result?.map((rslt, i) => (
                <div
                  className={`ca25SpeakersCard col-span-2 sm:col-span-4 lg:col-span-3`}
                  key={i}
                >
                  <SpeakerCards {...rslt} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center pt-11 text-center lg:pt-16 xl:pt-20">
            <h2
              className={`ca25HeadingTitle w-full text-center font-semibold uppercase sm:font-bold ${mode === 'light' ? 'text-black-900' : 'text-white'} mb-4 text-balance sm:mb-7`}
            >
              {'2025 SPEAKERS'
                ?.split('')
                ?.map((chr, i) =>
                  ['E', 'O', 'A', '0'].includes(chr) ? (
                    <span key={i}>{chr}</span>
                  ) : (
                    chr
                  )
                )}{' '}
              A
              {'NNOUNCING SOON'
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
              className={`ca25MoonBtn-Embossed group relative mx-auto inline-flex w-[174px] items-center justify-center overflow-hidden rounded-full bg-[#ED4F35] px-3 py-3 text-sm font-semibold uppercase text-white disabled:pointer-events-none disabled:opacity-90 sm:w-[237px] sm:px-6 sm:py-5`}
              prefetch={true}
              href="/get-involved"
              title={`Coinfest Asia 2025 Apply As Speaker`}
            >
              {`Apply As Speaker`}
              <div className="absolute inset-0 flex h-full w-full justify-center blur-md [transform:skew(-13deg)_translateX(-100%)] group-hover:transition-[transform] group-hover:duration-[1.6s] group-hover:[transform:skew(-13deg)_translateX(100%)]">
                <div className="relative h-full w-12 bg-white/40"></div>
              </div>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Speakers;
