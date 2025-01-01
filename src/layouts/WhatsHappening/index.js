import React from 'react';

// @components

// @components
import Container from '@components/Container';
import StarryBackground from '@components/UI/Background/StarryBackground';
import WhatsHappeningCards from '@components/UI/Cards/WhatsHappeningCards';

const WhatsHappening = ({ mode, result = [] }) => {
  return (
    <>
      <section className="ca25WhatsHappening relative block w-full pb-20 pt-24">
        <div className="pointer-events-none absolute inset-x-0 inset-y-0 z-px select-none">
          <StarryBackground starCount={165} />
        </div>
        <Container className={'z-[5]'}>
          <h2
            className={`ca25HeadingTitle w-full text-center font-bold uppercase ${mode === 'light' ? 'text-black-900' : 'text-white'} mb-8 text-balance sm:mb-12`}
          >
            {'WHATS HAPPENING'
              ?.split('')
              .map((chr, i) =>
                ['A', 'E'].includes(chr) ? <span key={i}>{chr}</span> : chr
              )}{' '}
            AT{' '}
            {'COINFEST A'
              ?.split('')
              .map((chr, i) =>
                ['O', 'E', 'A'].includes(chr) ? <span key={i}>{chr}</span> : chr
              )}
            SIA
          </h2>
          <div className="relative w-full min-w-full max-w-full grid-cols-4 gap-x-3 gap-y-3 supports-grid:grid sm:grid-cols-12 sm:gap-x-4 sm:gap-y-4 lg:grid-cols-12">
            {result?.map((rslt, i) => (
              <div className="col-span-2 sm:col-span-6 lg:col-span-4" key={i}>
                <WhatsHappeningCards {...rslt} />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default WhatsHappening;
