import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import getConfig from 'next/config';
import Image from 'next/image';
import Link from 'next/link';

// @get .config
const { publicRuntimeConfig } = getConfig();

// @components
import Loading from '@components/UI/Loading/Loading';

const PartnerCards = ({
  keyID,
  url,
  images,
  captions = '',
  mobileSizeUp,
  openUrl,
}) => {
  const [ref, inView] = useInView({
    threshold: 1,
    rootMargin: '40% 0% 0% 0%',
    triggerOnce: true,
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

  return (
    <>
      {openUrl === true ? (
        <Link
          ref={ref}
          className={`xs:h-[68px] relative col-span-2 flex h-[68px] w-full flex-col items-center justify-center overflow-clip border-white/55 grayscale sm:col-span-2 sm:h-[76px] sm:rounded-xl lg:col-span-2 lg:h-[94px] xl:h-[120px]`}
          prefetch={true}
          href={url}
          title={`${publicRuntimeConfig?.siteAppName} ${captions}`}
          target="_blank"
          rel="noopener noreferrer"
          key={keyID}
        >
          {isLoading ? (
            <Image
              className={
                'aspect-auto h-full w-full object-cover object-center grayscale'
              }
              src={images ?? '/assets/images/partners/ca25BluredPartner.svg'}
              alt={`${captions} Partners`}
              height={120}
              width={244.8}
              quality="87"
              fetchPriority="auto"
            />
          ) : (
            <Loading />
          )}
        </Link>
      ) : (
        <div
          ref={ref}
          className={`xs:h-[68px] relative col-span-2 flex h-[68px] w-full flex-col items-center justify-center overflow-clip border-white/55 grayscale sm:col-span-2 sm:h-[76px] sm:rounded-xl lg:col-span-2 lg:h-[94px] xl:h-[120px]`}
          key={keyID}
        >
          {isLoading ? (
            <Image
              className={
                'aspect-auto h-full w-full object-cover object-center grayscale'
              }
              src={images ?? '/assets/images/partners/ca25BluredPartner.svg'}
              alt={`${captions} Partners`}
              height={120}
              width={244.8}
              quality="87"
              fetchPriority="auto"
            />
          ) : (
            <Loading />
          )}
        </div>
      )}
    </>
  );
};

export default PartnerCards;
