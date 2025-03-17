import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

// @components
import LoadStreams from '../Loading/LoadStreams';

const SpeakerCards = ({
  attributes = {},
  useHeading = 'h3',
  images,
  name = 'Speakers',
  position,
  brandCompany,
  comingSoon,
  children,
}) => {
  const [ref, inView] = useInView({
    threshold: 1,
    rootMargin: '80% 0% 0% 0%',
    triggerOnce: true,
  });
  const [isLoading, setLoading] = useState(false);

  // @intersection-observer
  useEffect(() => {
    if (inView) {
      setLoading(true);
    }
  }, [inView]);

  return (
    <>
      <div
        ref={ref}
        className="group relative flex w-full min-w-full flex-col items-center justify-center overflow-hidden px-0"
      >
        {/* @brand-company */}
        <div className="mx-auto mb-2 flex w-full flex-col items-center justify-center sm:mb-3">
          {brandCompany ? (
            isLoading ? (
              <Image
                className="mx-auto h-[31px] w-full object-cover object-center grayscale sm:h-[36px] lg:h-[40px]"
                src={brandCompany}
                alt={`Coinfest Asia 2025 Brand Company - ${name} Speakers)`}
                height={40}
                width={282}
                quality="87"
              />
            ) : (
              <span className="mx-auto h-[31px] w-full object-cover object-center grayscale sm:h-[36px] lg:h-[40px]"></span>
            )
          ) : (
            <span className="mx-auto h-[31px] w-full object-cover object-center grayscale sm:h-[36px] lg:h-[40px]"></span>
          )}
        </div>

        {/* @images */}
        <div className="relative flex h-[221px] w-full min-w-full max-w-min flex-col overflow-hidden rounded-2xl bg-black-900/30 max-[420px]:h-[197px] xs:h-[195px] sm:h-[273px] lg:h-[257px] xl:h-[336px] 2xl:h-[362px]">
          <div className="z-[16] h-full w-full">
            {images ? (
              isLoading ? (
                <Image
                  className="mx-auto h-full w-full object-cover object-center"
                  src={images}
                  alt={`Coinfest Asia 2025 ${name} Speakers)`}
                  height={336}
                  width={282}
                  quality="80"
                />
              ) : (
                <LoadStreams />
              )
            ) : (
              <Image
                className="mx-auto h-auto w-full object-cover object-center"
                src={'/assets/images/speakers/ca25Speakers_Empty.png'}
                alt={`Coinfest Asia 2025 Empty Speakers)`}
                height={336}
                width={282}
                quality="75"
              />
            )}
          </div>

          {/* @backdrop (cover) */}
          <div
            className={`absolute inset-x-0 inset-y-0 z-px rounded-2xl border-2 border-solid border-white opacity-0 transition-[opacity] duration-300 ease-in-out group-hover:opacity-100`}
          >
            <Image
              className="mx-auto h-full w-full object-cover object-center"
              src={'/assets/images/speakers/ca25BckCover-Speakers.svg'}
              alt={`Coinfest Asia 2025 Backcover Speakers`}
              height={246}
              width={207}
              quality="75"
            />
          </div>
          <div
            className={`absolute inset-x-0 inset-y-0 z-[18] rounded-2xl border-[3px] border-solid border-white/80 opacity-0 transition-[opacity] duration-300 ease-in-out group-hover:opacity-100`}
          ></div>

          {/* @btn (modal) */}
          {!comingSoon ? (
            <span className="absolute bottom-auto left-auto right-3 top-3 z-[24] flex h-8 w-8 scale-75 transform flex-col items-center justify-center rounded-lg bg-white opacity-0 transition-[opacity,transform] duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100 sm:right-4 sm:top-4 sm:h-10 sm:w-10">
              <svg
                className="h-7 w-7 sm:h-[34px] sm:w-[34px]"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6655 21.9202L19.2709 13.3147H11.3655L11.3726 11.3136H22.6863V22.6273H20.6922L20.6852 14.7289L12.0797 23.3344L10.6655 21.9202Z"
                  fill="#000000"
                />
              </svg>
            </span>
          ) : null}
        </div>
        {/* @content */}
        <div className="mt-4 flex h-full w-full flex-col items-start justify-start rounded-xl bg-transparent sm:pb-4">
          <div>
            {useHeading === 'h2' ? (
              <h2 className="line-break-anyware line-clamp-1 text-left text-base font-medium text-white group-hover:underline sm:text-lg lg:text-xl">
                {name}
              </h2>
            ) : (
              <h3 className="line-break-anyware line-clamp-1 block text-left text-base font-medium text-white group-hover:underline sm:text-lg lg:text-xl">
                {name}
              </h3>
            )}
          </div>
          {position && (
            <p className="mt-1.5 line-clamp-2 text-left text-sm font-normal leading-initial text-white sm:mt-1 sm:text-base sm:leading-[21px]">
              {position}
            </p>
          )}
        </div>
      </div>
    </>
  );
};
export default SpeakerCards;
