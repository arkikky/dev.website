import React from 'react';
import getConfig from 'next/config';
import Link from 'next/link';

// @get .config
const { publicRuntimeConfig } = getConfig();

// @components
import ImagesLoads from '@components/ImagesLoads';

const PartnerCards = ({ url, images, captions = '', openUrl }) => {
  return (
    <>
      {openUrl === true ? (
        <Link
          className="relative block w-full overflow-clip rounded-[10px] border border-solid border-white/55 transition-[border] duration-300 ease-in-out hover:border-[#ED4F35] sm:h-[123px] sm:rounded-xl sm:border-2 lg:h-[126px] xl:h-[178px]"
          prefetch={true}
          href={url}
          title={`${publicRuntimeConfig?.siteAppName} ${captions}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImagesLoads
            classname={
              'aspect-auto h-full w-full grayscale object-cover object-center'
            }
            src={images ?? '/assets/images/partners/ca25BluredPartner.svg'}
            alt={`${captions} Partners`}
            height={180}
            width={244.8}
          />
        </Link>
      ) : (
        <Link
          className="relative block w-full overflow-clip rounded-[10px] border border-solid border-white/55 transition-[border] duration-300 ease-in-out hover:border-[#ED4F35] sm:h-[123px] sm:rounded-xl sm:border-2 lg:h-[126px] xl:h-[178px]"
          prefetch={true}
          href={url}
          title={`${publicRuntimeConfig?.siteAppName} ${captions}`}
        >
          <ImagesLoads
            classname={
              'aspect-auto h-full w-full grayscale object-cover object-center'
            }
            src={images ?? '/assets/images/partners/ca25BluredPartner.svg'}
            alt={`${captions} Partners`}
            height={180}
            width={244.8}
          />
        </Link>
      )}
    </>
  );
};

export default PartnerCards;
