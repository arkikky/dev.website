import React, { Fragment } from 'react';
import dynamic from 'next/dynamic';

// @components
import Container from '@components/Container';
import StarryBackground from '@components/UI/Background/StarryBackground';
const WhatsHappeningCards = dynamic(
  () => import('@components/UI/Cards/WhatsHappeningCards')
);

const WhatsHappening = ({ mode, result = [] }) => {
  return (
    <>
      <section className="ca25WhatsHappening relative block w-full pb-14 pt-14 sm:pb-2 xl:pb-11 xl:pt-24">
        <div className="ca25PointerNone absolute inset-x-0 inset-y-0 z-px">
          <StarryBackground starCount={165} />
        </div>
        <Container className={'z-[2]'}>
          <h2
            className={`ca25HeadingTitle w-full text-center font-semibold uppercase sm:font-bold ${mode === 'light' ? 'text-black-900' : 'text-white'} mb-8 text-balance sm:mb-12`}
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
              <Fragment key={i}>
                <WhatsHappeningCards {...rslt} />
              </Fragment>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default WhatsHappening;
