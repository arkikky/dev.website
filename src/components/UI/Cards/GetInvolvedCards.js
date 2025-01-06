import React from 'react';
import getConfig from 'next/config';
import Link from 'next/link';

// @get .config
const { publicRuntimeConfig } = getConfig();

// @components
import ImagesLoads from '@components/ImagesLoads';

const GetInvolvedCards = ({ keyID, url, images, title = '', comingSoon }) => {
  return (
    <>
      {comingSoon ? (
        <div
          className="ca25Overflay-Backdrop group relative col-span-2 flex h-[115px] w-full flex-col items-start justify-start overflow-clip rounded-lg border border-solid border-white/55 bg-black-900/[0.24] transition-[border] duration-300 ease-in-out hover:border-[#ED4F35] sm:col-span-2 sm:h-[155px] sm:rounded-2xl sm:border-2 lg:col-span-2 lg:h-[185px] xl:h-[247px]"
          key={keyID}
        >
          <ImagesLoads
            classname={
              'aspect-auto h-full w-full group-hover:scale-105 object-center transition-[transform] transform duration-300 ease-in-out object-cover'
            }
            src={images}
            alt={`${title} Get Involved`}
            height={180}
            width={424}
          />
          <div className="absolute inset-x-0 bottom-0 top-auto z-[3] flex flex-row items-end justify-between px-2 pb-2 sm:px-3.5 sm:pb-3.5 lg:px-4 lg:pb-4 xl:px-5 xl:pb-5">
            <h3 className="text-[13px] font-normal leading-[13px] text-white group-hover:underline sm:text-[18px] sm:font-medium sm:leading-[18px] lg:text-[26px] lg:leading-[26px]">
              {title}
            </h3>
            <span
              className={`flex h-5.5 w-5.5 flex-col items-center justify-center rounded bg-primary transition-[background] duration-300 ease-in-out group-hover:bg-[#ED4F35] sm:h-7 sm:w-7 sm:rounded-md lg:h-9 lg:w-9 xl:h-10 xl:w-10 ${comingSoon ? 'opacity-0' : 'opacity-100'}`}
            >
              <svg
                className="ca25PointerNone h-4.5 w-4.5 shrink-0 sm:h-[34px] sm:w-[34px]"
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
        </div>
      ) : (
        <Link
          className="ca25Overflay-Backdrop group relative col-span-2 flex h-[115px] w-full flex-col items-start justify-start overflow-clip rounded-lg border border-solid border-white/55 bg-black-900/[0.24] transition-[border] duration-300 ease-in-out hover:border-[#ED4F35] sm:col-span-2 sm:h-[155px] sm:rounded-2xl sm:border-2 lg:col-span-2 lg:h-[185px] xl:h-[247px]"
          prefetch={true}
          href={url ?? '/'}
          title={`${publicRuntimeConfig?.siteAppName} ${title}`}
          key={keyID}
        >
          <ImagesLoads
            classname={
              'aspect-auto h-full w-full group-hover:scale-105 object-center transition-[transform] transform duration-300 ease-in-out object-cover'
            }
            src={images}
            alt={`${title} Get Involved`}
            height={180}
            width={424}
          />
          <div className="absolute inset-x-0 bottom-0 top-auto z-[3] flex flex-row items-end justify-between px-2 pb-2 sm:px-3.5 sm:pb-3.5 lg:px-4 lg:pb-4 xl:px-5 xl:pb-5">
            <h3 className="text-[13px] font-normal leading-[13px] text-white group-hover:underline sm:text-[18px] sm:font-medium sm:leading-[18px] lg:text-[26px] lg:leading-[26px]">
              {title}
            </h3>
            <span
              className={`flex h-5.5 w-5.5 flex-col items-center justify-center rounded bg-primary transition-[background] duration-300 ease-in-out group-hover:bg-[#ED4F35] sm:h-7 sm:w-7 sm:rounded-md lg:h-9 lg:w-9 xl:h-10 xl:w-10 ${comingSoon ? 'opacity-0' : 'opacity-100'}`}
            >
              <svg
                className="ca25PointerNone h-4.5 w-4.5 shrink-0 sm:h-[34px] sm:w-[34px]"
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
      )}
    </>
  );
};

export default GetInvolvedCards;
