import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import getConfig from 'next/config';
import Image from 'next/image';

// @get .config
const { publicRuntimeConfig } = getConfig();

// @components
import Loading from '@components/UI/Loading/Loading';

const ImagesLoads = ({
  customGroup = 'absolute inset-x-0 inset-y-0 block',
  classname = '',
  src = '',
  alt = '',
  width = 24,
  height = 24,
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
      <div ref={ref} className={`${customGroup}`}>
        {isLoading ? (
          <Image
            className={
              classname ??
              `aspect-auto h-full w-full object-cover object-center`
            }
            src={src}
            alt={`${publicRuntimeConfig?.siteAppName} ${alt}`}
            height={height}
            width={width}
            quality="87"
            fetchPriority="auto"
          />
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default ImagesLoads;
