import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import getConfig from 'next/config';
import Image from 'next/image';
import Link from 'next/link';

// @get .config
const { publicRuntimeConfig } = getConfig();

// @components
import LoadStreams from '../Loading/LoadStreams';

const BrandPartnerCards = ({
  attributes = {},
  vip = false,
  height = 0,
  width = 0,
}) => {
  const { ref, inView } = useInView({
    threshold: 1,
    rootMargin: '25% 0% 0% 0%',
  });
  const [isLoading, setLoading] = useState(false);

  // @intersection-observer
  useEffect(() => {
    if (inView) {
      setLoading(true);
    }

    return () => {
      undefined;
    };
  }, [inView]);

  // @image
  const elImages = () => {
    return (
      <Image
        className="mx-auto h-full w-full object-cover object-center"
        src={
          attributes?.logo?.data !== null
            ? `https://hub.coinvestasi.com${attributes?.logo?.data?.attributes.url}`
            : ''
        }
        alt={`${`${attributes?.name} Brand Partner` ?? 'Brand Partner'} ${publicRuntimeConfig?.siteAppName}`}
        height={height}
        width={width}
        quality="75"
      />
    );
  };

  return (
    <>
      {attributes?.url === null && (
        <>
          <div
            ref={ref}
            className={`relative flex h-[57px] flex-col items-center justify-center overflow-hidden px-0 grayscale transition duration-300 ease-in-out hocus:grayscale-0 sm:h-[81px] lg:h-[100px] xl:h-[120px] xs:h-[51px]`}
          >
            {isLoading ? elImages() : <LoadStreams />}
          </div>
        </>
      )}

      {attributes?.url !== null && (
        <>
          <Link
            ref={ref}
            className={`relative flex h-[57px] flex-col items-center justify-center overflow-hidden px-0 grayscale transition duration-300 ease-in-out hocus:grayscale-0 sm:h-[81px] lg:h-[100px] xl:h-[120px] xs:h-[51px]`}
            href={attributes?.url ?? ''}
            title={`${`${attributes?.name} Brand Partner` ?? 'Brand Partner'} ${publicRuntimeConfig?.siteAppName}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {isLoading ? elImages() : <LoadStreams />}
          </Link>
        </>
      )}
    </>
  );
};

export default BrandPartnerCards;
