import React from 'react';

// @components
import ImagesLoads from '@components/ImagesLoads';

const PartnerCards = ({ src, captions = '' }) => {
  return (
    <>
      <div className="relative overflow-clip rounded-[10px] border border-solid border-white/55 grayscale sm:rounded-xl sm:border-2">
        <div
          className={
            'aspect-auto h-[122px] w-full object-cover object-center sm:h-[123px] lg:h-[126px] xl:h-[178px]'
          }
        >
          <ImagesLoads
            classname={'aspect-auto h-full w-full object-cover object-center'}
            src={src ?? '/assets/images/partners/ca25BluredPartner.svg'}
            alt={`${captions} Partners`}
            height={180}
            width={244.8}
          />
        </div>
      </div>
    </>
  );
};

export default PartnerCards;
