import React from 'react';
import getConfig from 'next/config';
import Image from 'next/image';

// @get .config
const { publicRuntimeConfig } = getConfig();

// @components
import BoardCards from '@components/UI/Cards/BoardCards';

const Boards = ({ mode }) => {
  return (
    <>
      <h2
        className={`ca25HeadingTitle w-full text-center font-bold uppercase ${mode === 'light' ? 'text-black-900' : 'text-white'} mb-8 text-balance sm:mb-6 xl:mb-10`}
      >
        {'WHERE INNOVATION MEETS ADOPTION'
          ?.split('')
          .map((chr, i) =>
            ['E', 'O'].includes(chr) ? <span key={i}>{chr}</span> : chr
          )}
      </h2>
      <div className="w-full max-w-full grid-cols-2 gap-x-2 gap-y-2 supports-grid:grid sm:gap-x-4 sm:gap-y-4 lg:gap-x-6 lg:gap-y-6 xl:gap-x-10 xl:gap-y-10">
        <BoardCards count={12500} title={'Attendees'}>
          <div className="pointer-events-none absolute -right-[5px] -top-[5px] bottom-auto left-auto z-px sm:-right-[7px] sm:-top-2 lg:-right-[15px] lg:-top-[11px]">
            <Image
              className="h-[49px] w-auto object-cover sm:h-[87px] lg:h-[121px] xl:h-[131px]"
              src={'/assets/images/backdrop/ca25MoonBoard-Meme1.svg'}
              alt={`${publicRuntimeConfig?.siteAppName} Attendees Board`}
              height={108.31}
              width={114.44}
              quality="87"
            />
          </div>
        </BoardCards>
        <BoardCards count={300} title={'Speakers'}>
          <div className="pointer-events-none absolute -right-[5px] -top-[5px] bottom-auto left-auto z-px sm:-right-[7px] sm:-top-2 lg:-right-[15px] lg:-top-[11px]">
            <Image
              className="h-[49px] w-auto object-cover sm:h-[87px] lg:h-[121px] xl:h-[131px]"
              src={'/assets/images/backdrop/ca25MoonBoard-Meme2.svg'}
              alt={`${publicRuntimeConfig?.siteAppName} Speakers Board`}
              height={108.31}
              width={114.44}
              quality="87"
            />
          </div>
        </BoardCards>
        <BoardCards count={5000} title={'Companies'}>
          <div className="pointer-events-none absolute -right-[5px] -top-[5px] bottom-auto left-auto z-px sm:-right-[7px] sm:-top-2 lg:-right-[15px] lg:-top-[11px]">
            <Image
              className="h-[49px] w-auto object-cover sm:h-[87px] lg:h-[121px] xl:h-[131px]"
              src={'/assets/images/backdrop/ca25MoonBoard-Meme3.svg'}
              alt={`${publicRuntimeConfig?.siteAppName} Companies Board`}
              height={108.31}
              width={114.44}
              quality="87"
            />
          </div>
        </BoardCards>
        <BoardCards count={90} title={'Countries'}>
          <div className="pointer-events-none absolute -right-[19px] -top-[19px] bottom-auto left-auto z-px sm:-right-[39px] sm:-top-[39px] lg:-right-[55px] lg:-top-[55px]">
            <Image
              className="h-[73px] w-auto object-cover sm:h-[141px] lg:h-[195px] xl:h-[207px]"
              src={'/assets/images/backdrop/ca25MoonBoard-Meme4.svg'}
              alt={`${publicRuntimeConfig?.siteAppName} Countries Board`}
              height={108.31}
              width={114.44}
              quality="87"
            />
          </div>
        </BoardCards>
      </div>
    </>
  );
};

export default Boards;
