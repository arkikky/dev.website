import React from 'react';
import getConfig from 'next/config';
import Link from 'next/link';

// @get .config
const { publicRuntimeConfig } = getConfig();

// @components
import ImagesLoads from '@components/ImagesLoads';

const WhatsHappeningCards = ({
  keyID,
  url,
  images,
  captions = '',
  openUrl,
  comingSoon,
}) => {
  return (
    <>
      <Link
        className="group relative col-span-2 flex flex-col items-start justify-start overflow-clip rounded-lg border border-solid border-white/35 bg-black-900/[0.24] transition-[border] duration-300 ease-in-out hover:border-[#ED4F35] sm:col-span-6 sm:rounded-2xl sm:border-2 lg:col-span-4 lg:rounded-2xl"
        prefetch={true}
        href={url ?? '/'}
        title={`${publicRuntimeConfig?.siteAppName} ${captions}`}
        key={keyID}
      >
        <div className="relative h-[89px] w-full shrink-0 overflow-clip sm:h-[173px] lg:h-[165px] xl:h-[186px]">
          <ImagesLoads
            classname={
              'aspect-auto h-full w-full object-cover group-hover:scale-105 object-center transition-[transform] transform duration-300 ease-in-out'
            }
            src={images}
            alt={`Whats Happening ${captions}`}
            height={180}
            width={424}
          />
        </div>
        <div className="flex w-full flex-row items-center justify-between px-2 pb-2 pt-2 text-white sm:px-3.5 sm:pb-3.5 sm:pt-3.5 lg:px-4 lg:pb-4 lg:pt-4 xl:px-5 xl:pb-5">
          <h3 className="text-[13px] font-normal leading-[13px] text-white group-hover:underline sm:text-[18px] sm:font-medium sm:leading-[18px] lg:text-[22px] lg:leading-[22px] xl:text-[22px] xl:leading-[22px]">
            {captions}
          </h3>
          <span
            className={`flex h-5.5 w-5.5 flex-col items-center justify-center rounded bg-primary group-hover:bg-[#ED4F35] sm:h-7 sm:w-7 sm:rounded-md lg:h-9 lg:w-9 xl:h-10 xl:w-10 ${comingSoon ? 'opacity-0' : 'opacity-100'} transition-[background, opacity] duration-300 ease-in-out`}
          >
            <svg
              className="h-4.5 w-4.5 sm:h-[34px] sm:w-[34px]"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6655 21.9202L19.2709 13.3147H11.3655L11.3726 11.3136H22.6863V22.6273H20.6922L20.6852 14.7289L12.0797 23.3344L10.6655 21.9202Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
      </Link>
    </>
  );
};

export default WhatsHappeningCards;
