import React from 'react';

// @components
import Container from '@components/Container';
import StarryBackground from '@components/UI/Background/StarryBackground';

// @layouts
import PartnersTabs from '@layouts/Partners/tabs';

const Partners = ({ mode, result = [] }) => {
  return (
    <>
      <section className="ca25Partners relative bg-[linear-gradient(-2deg,#1F1F1F_28%,#005AFF_63%,#7AB1F9_81%,#A0CCF7_100%)] pb-8 pt-12 sm:pb-6 lg:pt-20 xl:pb-20 xl:pt-[112px]">
        <div className="ca25PointerNone absolute inset-x-0 bottom-auto top-0 -z-px h-[425px]">
          <StarryBackground starCount={90} />
        </div>
        <Container className={'sm:px-auto relative z-[2] px-0'}>
          <h2
            className={`ca25HeadingTitle w-full text-center font-semibold uppercase sm:font-bold ${mode === 'light' ? 'text-black-900' : 'text-white'} mb-8 text-balance sm:mb-12`}
          >
            {'PARTNERS'
              ?.split('')
              .map((chr, i) =>
                ['E', 'O', 'A'].includes(chr) ? <span key={i}>{chr}</span> : chr
              )}
          </h2>
          <div className="relative mt-5 w-full lg:mt-8">
            <PartnersTabs
              isCollections={{
                prevPartners: result?.prevPartners,
                mediaPartners: result?.mediaPartners,
                communityPartners: result?.communityPartners,
              }}
            />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Partners;
