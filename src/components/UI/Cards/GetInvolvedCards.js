import React from 'react';

// @components
import ImagesLoads from '@components/ImagesLoads';

const GetInvolvedCards = ({ images = '', title = '', shortDesc = '' }) => {
  return (
    <>
      <div className="relative flex h-[115px] w-full flex-col items-start justify-start overflow-clip rounded-xl border border-solid border-white/55 bg-black-900/[0.24] sm:h-[155px] sm:rounded-2xl sm:border-2 lg:h-[165px] xl:h-[237px]">
        <ImagesLoads
          classname={'aspect-auto h-full w-full object-cover object-center'}
          src={images}
          alt={`${title} Get Involved`}
          height={180}
          width={424}
        />
      </div>
    </>
  );
};

export default GetInvolvedCards;
