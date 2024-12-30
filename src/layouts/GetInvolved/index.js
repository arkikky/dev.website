import React from 'react';

// @components
import Container from '@components/Container';
import GetInvolvedCards from '@components/UI/Cards/GetInvolvedCards';

const GetInvolved = ({ mode, result }) => {
  return (
    <>
      <Container>
        <h2
          className={`ca25HeadingTitle w-full text-center font-bold uppercase ${mode === 'light' ? 'text-black-900' : 'text-white'} mb-8 text-balance sm:mb-12`}
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
              {result?.map((rslt, i) => (
                <div key={i} className="col-span-2 sm:col-span-2 lg:col-span-2">
                  <GetInvolvedCards {...rslt} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default GetInvolved;
