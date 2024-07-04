import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const LazyImages = ({ src = "", alt = "", height = 0, width = 0 }) => {
  const { ref, inView } = useInView({
    threshold: 1,
    rootMargin: "10% 0% -25% 0%",
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
      <div ref={ref} className="relative h-full w-full">
        {isLoading ? (
          <Image
            className="mx-auto h-full w-full object-cover object-center"
            src={src}
            alt={alt}
            height={height}
            width={width}
            quality="87"
          />
        ) : (
          <div className="flex h-full w-full animate-pulse flex-col items-center justify-center bg-black-900">
            <div
              className="inline-block size-8 animate-spin rounded-full border-2 border-current border-t-transparent text-white"
              role="status"
              aria-label="loading"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LazyImages;
