import React from 'react';
import getConfig from 'next/config';
import Image from 'next/image';
import Link from 'next/link';

// @get .config
const { publicRuntimeConfig } = getConfig();

const TravelBoardCards = ({
  url = '',
  images = '',
  title = '',
  shortDesc = '',
  btnLabel = '',
}) => {
  return (
    <>
      <div className="relative flex flex-col">
        <div className="relative h-[394px] w-full overflow-clip rounded-[10px] lg:h-[364px] xl:h-[464px]">
          {images ? (
            <Image
              className="h-full w-full object-cover"
              src={images}
              alt={`${title} Board ${publicRuntimeConfig?.siteAppName}`}
              height={464}
              width={720}
              quality="75"
            />
          ) : null}
        </div>
        <div className="relative flex h-max flex-col items-start justify-between overflow-clip rounded-[10px] border border-solid border-[#333333]/80 bg-transparent px-6 py-6 sm:h-full sm:rounded-2xl sm:px-10 sm:py-10 lg:px-9 lg:py-9 xl:px-16 xl:py-16">
          <div className="pointer-events-none absolute -right-[5px] -top-[5px] bottom-auto left-auto z-px sm:-right-[7px] sm:-top-2 lg:-right-[15px] lg:-top-[11px]">
            <Image
              className="h-[49px] w-auto object-cover sm:h-[87px] lg:h-[121px] xl:h-[131px]"
              src={'/assets/images/backdrop/ca25MoonBoard-Meme1.svg'}
              alt={`${title} Board ${publicRuntimeConfig?.siteAppName}`}
              height={108.31}
              width={114.44}
              quality="75"
            />
          </div>

          <div className="relative block w-full sm:w-[462px] xl:w-[462px]">
            <h2 className="text-[28px] font-semibold leading-initial text-white lg:leading-initial xl:text-[40px] xl:leading-initial">
              {title}
            </h2>
            {shortDesc ? (
              <p className="mt-2 text-balance text-base font-light text-white/55 sm:text-[18px] sm:leading-7">
                {shortDesc}
              </p>
            ) : null}
          </div>
          <Link
            className={`relative mt-8 inline-flex w-max items-center justify-center overflow-hidden rounded-lg bg-[#ED4F35] px-4 py-3 text-base font-medium capitalize leading-initial text-white disabled:pointer-events-none disabled:opacity-90 sm:px-7 sm:py-5 xl:mt-12`}
            href={url}
            title={`Coinfest Asia 2025 ${btnLabel} Board`}
          >
            {btnLabel}
          </Link>
        </div>
      </div>
    </>
  );
};

export default TravelBoardCards;
