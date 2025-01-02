import React from 'react';

// @components
import Container from '@components/Container';
import StarryBackground from '@components/UI/Background/StarryBackground';
import FaqCards from '@components/UI/Cards/FaqCards';

const FAQ = ({ mode, result = [] }) => {
  return (
    <>
      <section className="ca25Faq relative pb-24 pt-[122px] sm:pb-32">
        <div className="pointer-events-none absolute inset-x-0 bottom-auto top-0 z-px h-[625px] select-none">
          <StarryBackground starCount={90} />
        </div>
        <Container className={'relative z-[2]'}>
          <h2
            className={`ca25HeadingTitle w-full text-center font-semibold uppercase sm:font-bold ${mode === 'light' ? 'text-black-900' : 'text-white'} mb-4 text-balance sm:mb-7`}
          >
            {'FREQUENTLY ASKED QUESTIONS'
              ?.split('')
              ?.map((chr, i) =>
                ['E', 'O', '0'].includes(chr) ? <span key={i}>{chr}</span> : chr
              )}
          </h2>
          <div className="relative w-full grid-cols-4 gap-x-2 gap-y-2 supports-grid:grid sm:grid-cols-12 sm:gap-x-3 sm:gap-y-3 lg:grid-cols-10 xl:gap-x-3.5 xl:gap-y-3.5">
            <div className="ca25BckMemeItems"></div>

            <div className="col-span-full col-start-1 sm:col-span-10 sm:col-start-2 lg:col-span-8 lg:col-start-2">
              <div className="w-full grid-cols-4 gap-x-3 gap-y-3 supports-grid:grid sm:gap-x-4 sm:gap-y-4 lg:gap-x-6 lg:gap-y-6">
                <div className="col-span-full">
                  <FaqCards list={result} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default FAQ;
