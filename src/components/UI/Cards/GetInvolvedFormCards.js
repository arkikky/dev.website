import React from 'react';
import Link from 'next/link';

const GetInvolvedFormCards = ({
  url = '',
  title,
  shortDesc,
  labelBtn,
  comingSoon = false,
  slotsFull = false,
}) => {
  return (
    <>
      {!comingSoon ? (
        <Link
          className="ca25FormGetInvolved-Cards group flex h-max w-full flex-col items-start justify-between overflow-hidden rounded-2xl border-2 border-solid border-gray-200 px-6 py-6 transition-[border] duration-300 ease-in-out"
          href={url}
          title={`Coinfest Asia 2025 ${title}`}
        >
          <div className="relative mb-6 block w-full">
            <h2 className="text-2xl font-semibold leading-initial text-black-900">
              {title}
            </h2>
            <p className="mt-2 text-balance pr-0 text-base text-black-900 sm:pr-4 lg:pr-20">
              {shortDesc}
            </p>
          </div>
          <span
            className={`ca25FormGetInvolved-BtnCards relative mr-auto inline-flex w-[138px] items-center justify-center rounded-full px-4 py-3 text-sm font-normal text-white disabled:pointer-events-none disabled:opacity-90 sm:w-[177px] sm:px-5 sm:py-4 sm:text-base lg:w-[197px]`}
          >
            {labelBtn}
          </span>
        </Link>
      ) : (
        <div className="ca25FormGetInvolved-Cards disabled group flex h-max w-full flex-col items-start justify-between overflow-hidden rounded-2xl border-2 border-solid border-gray-200 px-6 py-6 transition-[border] duration-300 ease-in-out">
          <div className="relative mb-6 block w-full">
            <h2 className="text-2xl font-semibold leading-initial text-black-900">
              {title}
            </h2>
            <p className="mt-2 text-balance pr-0 text-base text-black-900 sm:pr-4 lg:pr-20">
              {shortDesc}
            </p>
          </div>
          <span
            className={`ca25FormGetInvolved-BtnCards relative mr-auto inline-flex w-[138px] items-center justify-center rounded-full px-4 py-3 text-sm font-normal leading-initial text-gray-500 disabled:pointer-events-none disabled:opacity-90 sm:w-[177px] sm:px-5 sm:py-4 sm:text-base sm:leading-initial lg:w-[197px]`}
          >
            {!slotsFull ? 'Coming Soon' : 'Slots Full'}
          </span>
        </div>
      )}
    </>
  );
};

export default GetInvolvedFormCards;
