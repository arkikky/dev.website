import React from 'react';
import getConfig from 'next/config';
import Image from 'next/image';

// @get .config
const { publicRuntimeConfig } = getConfig();

// @components
import Container from '@components/Container';

const Partners = ({ mode }) => {
  return (
    <>
      <Container className={'z-[5]'}>
        <h2
          className={`w-ful mx-auto max-w-[287px] text-center text-[36px] font-bold uppercase leading-[40px] sm:max-w-max ${mode === 'light' ? 'text-black-900' : 'text-white'} mb-12 text-balance sm:mb-15 sm:text-[44px] sm:leading-[53px] lg:text-[62px] lg:leading-[70px] xl:text-[72px] xl:leading-[80px]`}
        >
          {'PREVIUOS PARTNERS'?.split('').map((chr, i) =>
            ['E', 'O', 'A'].includes(chr) ? (
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
        <div className="relative w-full min-w-full max-w-full grid-cols-4 gap-x-2 gap-y-2 supports-grid:grid sm:grid-cols-12 sm:gap-x-3 sm:gap-y-3 lg:grid-cols-10 xl:gap-x-3.5 xl:gap-y-3.5">
          <div className="col-span-2 rounded-[10px] border border-solid border-white/45 grayscale sm:col-span-3 sm:rounded-xl sm:border-2 lg:col-span-2">
            <Image
              className="aspect-auto h-[126px] w-full object-cover object-center sm:h-[123px] lg:h-[126px] xl:h-[178px]"
              src={'/assets/images/partners/ca25Partner_Mandala.svg'}
              alt={`${publicRuntimeConfig?.siteAppName} AWS Partners`}
              height={180}
              width={244.8}
              quality="87"
              fetchPriority="auto"
            />
          </div>
          <div className="col-span-2 rounded-[10px] border border-solid border-white/45 grayscale sm:col-span-3 sm:rounded-xl sm:border-2 lg:col-span-2">
            <Image
              className="aspect-auto h-[126px] w-full object-cover object-center sm:h-[123px] lg:h-[126px] xl:h-[178px]"
              src={'/assets/images/partners/ca25Partner_AWS.svg'}
              alt={`${publicRuntimeConfig?.siteAppName} AWS Partners`}
              height={180}
              width={244.8}
              quality="87"
              fetchPriority="auto"
            />
          </div>
          <div className="col-span-2 rounded-[10px] border border-solid border-white/45 grayscale sm:col-span-3 sm:rounded-xl sm:border-2 lg:col-span-2">
            <Image
              className="aspect-auto h-[126px] w-full object-cover object-center sm:h-[123px] lg:h-[126px] xl:h-[178px]"
              src={'/assets/images/partners/ca25Partner_Solana.svg'}
              alt={`${publicRuntimeConfig?.siteAppName} AWS Partners`}
              height={180}
              width={244.8}
              quality="87"
              fetchPriority="auto"
            />
          </div>
          <div className="col-span-2 rounded-[10px] border border-solid border-white/45 grayscale sm:col-span-3 sm:rounded-xl sm:border-2 lg:col-span-2">
            <Image
              className="aspect-auto h-[126px] w-full object-cover object-center sm:h-[123px] lg:h-[126px] xl:h-[178px]"
              src={'/assets/images/partners/ca25Partner_Solana.svg'}
              alt={`${publicRuntimeConfig?.siteAppName} AWS Partners`}
              height={180}
              width={244.8}
              quality="87"
              fetchPriority="auto"
            />
          </div>
          <div className="col-span-2 rounded-[10px] border border-solid border-white/45 grayscale sm:col-span-3 sm:rounded-xl sm:border-2 lg:col-span-2">
            <Image
              className="aspect-auto h-[126px] w-full object-cover object-center sm:h-[123px] lg:h-[126px] xl:h-[178px]"
              src={'/assets/images/partners/ca25Partner_Solana.svg'}
              alt={`${publicRuntimeConfig?.siteAppName} AWS Partners`}
              height={180}
              width={244.8}
              quality="87"
              fetchPriority="auto"
            />
          </div>
          <div className="col-span-2 rounded-[10px] border border-solid border-white/45 grayscale sm:col-span-3 sm:rounded-xl sm:border-2 lg:col-span-2">
            <Image
              className="aspect-auto h-[126px] w-full object-cover object-center sm:h-[123px] lg:h-[126px] xl:h-[178px]"
              src={'/assets/images/partners/ca25Partner_Solana.svg'}
              alt={`${publicRuntimeConfig?.siteAppName} AWS Partners`}
              height={180}
              width={244.8}
              quality="87"
              fetchPriority="auto"
            />
          </div>
          <div className="col-span-2 rounded-[10px] border border-solid border-white/45 grayscale sm:col-span-3 sm:rounded-xl sm:border-2 lg:col-span-2">
            <Image
              className="aspect-auto h-[126px] w-full object-cover object-center sm:h-[123px] lg:h-[126px] xl:h-[178px]"
              src={'/assets/images/partners/ca25Partner_Solana.svg'}
              alt={`${publicRuntimeConfig?.siteAppName} AWS Partners`}
              height={180}
              width={244.8}
              quality="87"
              fetchPriority="auto"
            />
          </div>
          <div className="col-span-2 rounded-[10px] border border-solid border-white/45 grayscale sm:col-span-3 sm:rounded-xl sm:border-2 lg:col-span-2">
            <Image
              className="aspect-auto h-[126px] w-full object-cover object-center sm:h-[123px] lg:h-[126px] xl:h-[178px]"
              src={'/assets/images/partners/ca25Partner_Solana.svg'}
              alt={`${publicRuntimeConfig?.siteAppName} AWS Partners`}
              height={180}
              width={244.8}
              quality="87"
              fetchPriority="auto"
            />
          </div>
          <div className="col-span-2 rounded-[10px] border border-solid border-white/45 grayscale sm:col-span-3 sm:rounded-xl sm:border-2 lg:col-span-2">
            <Image
              className="aspect-auto h-[126px] w-full object-cover object-center sm:h-[123px] lg:h-[126px] xl:h-[178px]"
              src={'/assets/images/partners/ca25Partner_Solana.svg'}
              alt={`${publicRuntimeConfig?.siteAppName} AWS Partners`}
              height={180}
              width={244.8}
              quality="87"
              fetchPriority="auto"
            />
          </div>
          <div className="col-span-2 rounded-[10px] border border-solid border-white/45 grayscale sm:col-span-3 sm:rounded-xl sm:border-2 lg:col-span-2">
            <Image
              className="aspect-auto h-[126px] w-full object-cover object-center sm:h-[123px] lg:h-[126px] xl:h-[178px]"
              src={'/assets/images/partners/ca25Partner_Solana.svg'}
              alt={`${publicRuntimeConfig?.siteAppName} AWS Partners`}
              height={180}
              width={244.8}
              quality="87"
              fetchPriority="auto"
            />
          </div>
          <div className="col-span-2 rounded-[10px] border border-solid border-white/45 grayscale sm:col-span-3 sm:rounded-xl sm:border-2 lg:col-span-2">
            <Image
              className="aspect-auto h-[126px] w-full object-cover object-center sm:h-[123px] lg:h-[126px] xl:h-[178px]"
              src={'/assets/images/partners/ca25Partner_Solana.svg'}
              alt={`${publicRuntimeConfig?.siteAppName} AWS Partners`}
              height={180}
              width={244.8}
              quality="87"
              fetchPriority="auto"
            />
          </div>
          <div className="col-span-2 rounded-[10px] border border-solid border-white/45 grayscale sm:col-span-3 sm:rounded-xl sm:border-2 lg:col-span-2">
            <Image
              className="aspect-auto h-[126px] w-full object-cover object-center sm:h-[123px] lg:h-[126px] xl:h-[178px]"
              src={'/assets/images/partners/ca25Partner_Solana.svg'}
              alt={`${publicRuntimeConfig?.siteAppName} AWS Partners`}
              height={180}
              width={244.8}
              quality="87"
              fetchPriority="auto"
            />
          </div>
          <div className="col-span-2 rounded-[10px] border border-solid border-white/45 grayscale sm:col-span-3 sm:rounded-xl sm:border-2 lg:col-span-2">
            <Image
              className="aspect-auto h-[126px] w-full object-cover object-center sm:h-[123px] lg:h-[126px] xl:h-[178px]"
              src={'/assets/images/partners/ca25Partner_Solana.svg'}
              alt={`${publicRuntimeConfig?.siteAppName} AWS Partners`}
              height={180}
              width={244.8}
              quality="87"
              fetchPriority="auto"
            />
          </div>
          <div className="col-span-2 rounded-[10px] border border-solid border-white/45 grayscale sm:col-span-3 sm:rounded-xl sm:border-2 lg:col-span-2">
            <Image
              className="aspect-auto h-[126px] w-full object-cover object-center sm:h-[123px] lg:h-[126px] xl:h-[178px]"
              src={'/assets/images/partners/ca25Partner_AWS.svg'}
              alt={`${publicRuntimeConfig?.siteAppName} AWS Partners`}
              height={180}
              width={244.8}
              quality="87"
              fetchPriority="auto"
            />
          </div>
          <div className="col-span-2 rounded-[10px] border border-solid border-white/45 grayscale sm:col-span-3 sm:rounded-xl sm:border-2 lg:col-span-2">
            <Image
              className="aspect-auto h-[126px] w-full object-cover object-center sm:h-[123px] lg:h-[126px] xl:h-[178px]"
              src={'/assets/images/partners/ca25Partner_Polkadot.svg'}
              alt={`${publicRuntimeConfig?.siteAppName} AWS Partners`}
              height={180}
              width={244.8}
              quality="87"
              fetchPriority="auto"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Partners;
