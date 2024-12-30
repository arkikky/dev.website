import React from 'react';
import getConfig from 'next/config';
import Image from 'next/image';

// @get .config
const { publicRuntimeConfig } = getConfig();

// @components
import Container from '@components/Container';

const WhatsHappening = ({ mode }) => {
  return (
    <>
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
          <div className="col-span-full sm:col-span-6 lg:col-span-4">
            <div className="relative flex flex-col items-start justify-start overflow-clip rounded-2xl border border-solid border-white/35 bg-black-900/[0.24] sm:border-2">
              <div className="h-[186px] w-full bg-gray-400"></div>
              <div className="flex w-full flex-row items-start justify-between px-5 pb-5 pt-4 text-white">
                <h3 className="text-2xl font-medium">Conferences</h3>
                <span>Link</span>
              </div>
            </div>
          </div>
          <div className="col-span-full sm:col-span-6 lg:col-span-4">
            <div className="relative flex flex-col items-start justify-start overflow-clip rounded-2xl border border-solid border-white/35 bg-black-900/[0.24] sm:border-2">
              <div className="h-[186px] w-full bg-gray-400"></div>
              <div className="flex w-full flex-row items-start justify-between px-5 pb-5 pt-4 text-white">
                <h3 className="text-2xl font-medium">Conferences</h3>
                <span>Link</span>
              </div>
            </div>
          </div>
          <div className="col-span-full sm:col-span-6 lg:col-span-4">
            <div className="relative flex flex-col items-start justify-start overflow-clip rounded-2xl border border-solid border-white/35 bg-black-900/[0.24] sm:border-2">
              <div className="h-[186px] w-full bg-gray-400"></div>
              <div className="flex w-full flex-row items-start justify-between px-5 pb-5 pt-4 text-white">
                <h3 className="text-2xl font-medium">Conferences</h3>
                <span>Link</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default WhatsHappening;
