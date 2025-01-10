import React from 'react';
import getConfig from 'next/config';
import Link from 'next/link';

// @get .config
const { publicRuntimeConfig } = getConfig();

// @components
import ImagesLoads from '@components/ImagesLoads';

const PartnerCards = ({
  keyID,
  url,
  images,
  captions = '',
  mobileSizeUp,
  openUrl,
}) => {
  return (
    <>
      {openUrl === true ? (
        <Link
          className={`xs:h-[68px] relative col-span-2 flex h-[68px] w-full flex-col items-center justify-center overflow-clip border-white/55 sm:col-span-2 sm:h-[76px] sm:rounded-xl lg:col-span-2 lg:h-[94px] xl:h-[120px]`}
          prefetch={true}
          href={url}
          title={`${publicRuntimeConfig?.siteAppName} ${captions}`}
          target="_blank"
          rel="noopener noreferrer"
          key={keyID}
        >
          <ImagesLoads
            customGroup={`${mobileSizeUp === true ? 'inset-x-auto sm:inset-x-0 xs:w-[151px] w-[143px] sm:w-full' : 'inset-x-0 sm:inset-x-0 w-full'} absolute inset-y-0 block`}
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
        <div
          className={`xs:h-[68px] relative col-span-2 flex h-[68px] w-full flex-col items-center justify-center overflow-clip border-white/55 sm:col-span-2 sm:h-[76px] sm:rounded-xl lg:col-span-2 lg:h-[94px] xl:h-[120px]`}
          key={keyID}
        >
          <ImagesLoads
            customGroup={`${mobileSizeUp === true ? 'inset-x-auto sm:inset-x-0 xs:w-[151px] w-[143px] sm:w-full' : 'inset-x-0 sm:inset-x-0 w-full'} absolute inset-y-0 block`}
            classname={
              'aspect-auto h-full w-full grayscale object-cover object-center'
            }
            src={images ?? '/assets/images/partners/ca25BluredPartner.svg'}
            alt={`${captions} Partners`}
            height={180}
            width={244.8}
          />
        </div>
      )}
    </>
  );
};

export default PartnerCards;
