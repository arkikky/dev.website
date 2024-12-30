import React from 'react';

// @components
import Container from '@components/Container';
import PartnerCards from '@components/UI/Cards/PartnerCards';

const Partners = ({ mode }) => {
  return (
    <>
      <Container className={'z-[5]'}>
        <h2
          className={`ca25HeadingTitle w-full text-center font-bold uppercase ${mode === 'light' ? 'text-black-900' : 'text-white'} mb-8 text-balance sm:mb-12`}
        >
          {'PREVIUOS PARTNERS'
            ?.split('')
            .map((chr, i) =>
              ['E', 'O', 'A'].includes(chr) ? <span key={i}>{chr}</span> : chr
            )}
        </h2>
        <div className="relative w-full grid-cols-4 gap-x-2 gap-y-2 supports-grid:grid sm:grid-cols-12 sm:gap-x-3 sm:gap-y-3 lg:grid-cols-10 xl:gap-x-3.5 xl:gap-y-3.5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]?.map(
            (rslt, i) => (
              <div key={i} className="col-span-2 sm:col-span-3 lg:col-span-2">
                <PartnerCards
                  src={'/assets/images/partners/ca25Partner_Mandala.svg'}
                />
              </div>
            )
          )}
        </div>
      </Container>
    </>
  );
};

export default Partners;
