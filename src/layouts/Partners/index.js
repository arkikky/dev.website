import React from 'react';
import dynamic from 'next/dynamic';

// @components
import Container from '@components/Container';
import StarryBackground from '@components/UI/Background/StarryBackground';
const PartnerCards = dynamic(
  () => import('@components/UI/Cards/PartnerCards'),
  {
    loading: () => '',
    ssr: false,
  }
);

const Partners = ({ mode, result = [] }) => {
  return (
    <>
      <section className="ca25Partners relative bg-[linear-gradient(-2deg,#1F1F1F_35%,#005AFF_63%,#7AB1F9_81%,#A0CCF7_100%)] pb-20 pt-[122px]">
        <div className="pointer-events-none absolute inset-x-0 bottom-auto top-0 z-px h-[425px] select-none">
          <StarryBackground starCount={90} />
        </div>
        <Container className={'relative z-[2]'}>
          <h2
            className={`ca25HeadingTitle w-full text-center font-semibold uppercase sm:font-bold ${mode === 'light' ? 'text-black-900' : 'text-white'} mb-8 text-balance sm:mb-12`}
          >
            {'PREVIUOS PARTNERS'
              ?.split('')
              .map((chr, i) =>
                ['E', 'O', 'A'].includes(chr) ? <span key={i}>{chr}</span> : chr
              )}
          </h2>
          <div className="relative w-full grid-cols-4 gap-x-2 gap-y-2 supports-grid:grid sm:grid-cols-12 sm:gap-x-3 sm:gap-y-3 lg:grid-cols-10 xl:gap-x-3.5 xl:gap-y-3.5">
            {result?.map((rslt, i) => (
              <PartnerCards
                id={`ca25Partners${i}`}
                {...rslt}
                key={`ca25Partners${i}`}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Partners;
