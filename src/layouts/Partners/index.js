import React, { Fragment } from 'react';
import dynamic from 'next/dynamic';

// @components
import Container from '@components/Container';
import StarryBackground from '@components/UI/Background/StarryBackground';
const PartnerCards = dynamic(() => import('@components/UI/Cards/PartnerCards'));

const Partners = ({ mode, result = [] }) => {
  return (
    <>
      <section className="ca25Partners relative bg-[linear-gradient(-2deg,#1F1F1F_28%,#005AFF_63%,#7AB1F9_81%,#A0CCF7_100%)] pb-8 pt-12 sm:pb-6 lg:pt-20 xl:pb-20 xl:pt-[122px]">
        <div className="ca25PointerNone absolute inset-x-0 bottom-auto top-0 -z-px h-[425px]">
          <StarryBackground starCount={90} />
        </div>
        <Container className={'sm:px-auto relative z-[2] px-0'}>
          <h2
            className={`ca25HeadingTitle w-full text-center font-semibold uppercase sm:font-bold ${mode === 'light' ? 'text-black-900' : 'text-white'} mb-8 text-balance sm:mb-12`}
          >
            {'PREVIOUS PARTNERS'
              ?.split('')
              .map((chr, i) =>
                ['E', 'O', 'A'].includes(chr) ? <span key={i}>{chr}</span> : chr
              )}
          </h2>
          <div className="relative w-full grid-cols-6 gap-x-1 gap-y-0 px-2.5 supports-grid:grid sm:grid-cols-10 sm:gap-x-3 sm:gap-y-0 sm:px-0 lg:grid-cols-10 lg:gap-x-6 lg:gap-y-0">
            {result?.map((rslt, i) => (
              <Fragment key={i}>
                <PartnerCards {...rslt} />
              </Fragment>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Partners;
