import React from 'react';

// @components
import ImagesLoads from '@components/ImagesLoads';

const AboutUsCards = ({ images = '', title = '', shortDesc = '' }) => {
  return (
    <>
      <div className="relative flex h-full flex-col items-start justify-start overflow-clip rounded-2xl border border-solid border-white/55 bg-black-900/[0.24] sm:border-2">
        <div className="relative h-[146px] w-full shrink-0 sm:h-[150px] xl:h-[180px]">
          <ImagesLoads
            classname={'aspect-auto h-full w-full object-cover object-center'}
            src={images}
            alt={`About ${title}`}
            height={180}
            width={424}
          />
        </div>
        <div className="block h-full w-full px-5 pb-6 pt-4.5 text-white sm:pb-5">
          <h2 className="text-lg font-medium sm:text-xl lg:text-lg xl:text-xl">
            {title}
          </h2>
          <p className="mt-2 text-pretty text-base font-light text-white/90 lg:text-balance">
            {shortDesc}
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUsCards;
