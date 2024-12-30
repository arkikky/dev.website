import React from 'react';
import getConfig from 'next/config';
import Image from 'next/image';

// @get .config
const { publicRuntimeConfig } = getConfig();

// @components
import Container from '@components/Container';

const Boards = ({ mode }) => {
  return (
    <>
      <Container className={'z-[5]'}>
        <h2
          className={`w-ful text-center text-[36px] font-bold uppercase leading-[40px] ${mode === 'light' ? 'text-black-900' : 'text-white'} mb-8 text-balance sm:mb-12 sm:text-[44px] sm:leading-[53px] lg:text-[62px] lg:leading-[70px] xl:text-[72px] xl:leading-[80px]`}
        >
          {'WHERE INNOVATION MEET AND ADOPTION'?.split('').map((chr, i) =>
            ['E', 'O'].includes(chr) ? (
              <span
                className={`ca25Fonts-Boren text-[37px] sm:text-[47px] lg:text-[66px] xl:text-[74px]`}
                key={i}
              >
                {chr}
              </span>
            ) : (
              chr
            )
          )}
        </h2>
        <div className="w-full max-w-full grid-cols-2 gap-x-3 gap-y-3 supports-grid:grid sm:gap-x-6 sm:gap-y-6 lg:gap-x-10 lg:gap-y-10">
          <div className="relative overflow-clip rounded-[10px] border border-solid border-white/35 bg-black-900/[0.24] px-4 py-4 backdrop-blur-[2px] max-[420px]:px-3 max-[420px]:py-3.5 sm:rounded-[20px] sm:border-2 sm:px-6 sm:py-6 lg:rounded-[28px] lg:px-8 lg:py-8 xl:px-10 xl:py-10">
            <div className="pointer-events-none absolute -right-[5px] -top-[5px] bottom-auto left-auto -z-px sm:-right-[7px] sm:-top-2 lg:-right-[15px] lg:-top-[11px]">
              <Image
                className="h-[49px] w-auto object-cover sm:h-[87px] lg:h-[121px] xl:h-[131px]"
                src={'/assets/images/backdrop/ca25Board_Meme1.svg'}
                alt={`${publicRuntimeConfig?.siteAppName} Board 1`}
                height={108.31}
                width={114.44}
                quality="87"
              />
            </div>

            <span className="text-[20px] font-bold leading-[22px] text-white sm:text-[36px] sm:leading-[40px] lg:text-[50px] lg:leading-[56px] xl:text-[58px] xl:leading-[60px]">
              {`10,000+`}
            </span>
            <h2 className="mt-1 text-sm font-light leading-initial text-white sm:mt-2.5 sm:text-[26px] sm:leading-initial lg:mt-3.5 lg:text-[34px] lg:leading-initial xl:text-[36px] xl:leading-initial">
              {`Attendees`}
            </h2>
          </div>
          <div className="relative overflow-clip rounded-[10px] border border-solid border-white/35 bg-black-900/[0.24] px-4 py-4 backdrop-blur-[2px] max-[420px]:px-3 max-[420px]:py-3.5 sm:rounded-[20px] sm:border-2 sm:px-6 sm:py-6 lg:rounded-[28px] lg:px-8 lg:py-8 xl:px-10 xl:py-10">
            <div className="pointer-events-none absolute -right-[5px] -top-[5px] bottom-auto left-auto -z-px sm:-right-[7px] sm:-top-2 lg:-right-[15px] lg:-top-[11px]">
              <Image
                className="h-[49px] w-auto object-cover sm:h-[87px] lg:h-[121px] xl:h-[131px]"
                src={'/assets/images/backdrop/ca25Board_Meme2.svg'}
                alt={`${publicRuntimeConfig?.siteAppName} Board 2`}
                height={108.31}
                width={114.44}
                quality="87"
              />
            </div>

            <span className="text-[20px] font-bold leading-[22px] text-white sm:text-[36px] sm:leading-[40px] lg:text-[50px] lg:leading-[56px] xl:text-[58px] xl:leading-[60px]">
              {`200+`}
            </span>
            <h2 className="mt-1 text-sm font-light leading-initial text-white sm:mt-2.5 sm:text-[26px] sm:leading-initial lg:mt-3.5 lg:text-[34px] lg:leading-initial xl:text-[36px] xl:leading-initial">
              {`Speakers`}
            </h2>
          </div>
          <div className="relative overflow-clip rounded-[10px] border border-solid border-white/45 bg-black-900/[0.24] px-4 py-4 backdrop-blur-[2px] max-[420px]:px-3 max-[420px]:py-3.5 sm:rounded-[20px] sm:border-2 sm:px-6 sm:py-6 lg:rounded-[28px] lg:px-8 lg:py-8 xl:px-10 xl:py-10">
            <div className="pointer-events-none absolute -right-[5px] -top-[5px] bottom-auto left-auto -z-px sm:-right-[7px] sm:-top-2 lg:-right-[15px] lg:-top-[11px]">
              <Image
                className="h-[49px] w-auto object-cover sm:h-[87px] lg:h-[121px] xl:h-[131px]"
                src={'/assets/images/backdrop/ca25Board_Meme3.svg'}
                alt={`${publicRuntimeConfig?.siteAppName} Board 3`}
                height={108.31}
                width={114.44}
                quality="87"
              />
            </div>

            <span className="text-[20px] font-bold leading-[22px] text-white sm:text-[36px] sm:leading-[40px] lg:text-[50px] lg:leading-[56px] xl:text-[58px] xl:leading-[60px]">
              {`3000+`}
            </span>
            <h2 className="mt-1 text-sm font-light leading-initial text-white sm:mt-2.5 sm:text-[26px] sm:leading-initial lg:mt-3.5 lg:text-[34px] lg:leading-initial xl:text-[36px] xl:leading-initial">
              {`Companies`}
            </h2>
          </div>
          <div className="relative overflow-clip rounded-[10px] border border-solid border-white/45 bg-black-900/[0.24] px-4 py-4 backdrop-blur-[2px] max-[420px]:px-3 max-[420px]:py-3.5 sm:rounded-[20px] sm:border-2 sm:px-6 sm:py-6 lg:rounded-[28px] lg:px-8 lg:py-8 xl:px-10 xl:py-10">
            <div className="pointer-events-none absolute -right-[19px] -top-[19px] bottom-auto left-auto -z-px sm:-right-[39px] sm:-top-[39px] lg:-right-[55px] lg:-top-[55px]">
              <Image
                className="h-[73px] w-auto object-cover sm:h-[141px] lg:h-[195px] xl:h-[207px]"
                src={'/assets/images/backdrop/ca25Board_Meme4.svg'}
                alt={`${publicRuntimeConfig?.siteAppName} Board 4`}
                height={108.31}
                width={114.44}
                quality="87"
              />
            </div>

            <span className="text-[20px] font-bold leading-[22px] text-white sm:text-[36px] sm:leading-[40px] lg:text-[50px] lg:leading-[56px] xl:text-[58px] xl:leading-[60px]">
              {`90+`}
            </span>
            <h2 className="mt-1 text-sm font-light leading-initial text-white sm:mt-2.5 sm:text-[26px] sm:leading-initial lg:mt-3.5 lg:text-[34px] lg:leading-initial xl:text-[36px] xl:leading-initial">
              {`Countries`}
            </h2>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Boards;
