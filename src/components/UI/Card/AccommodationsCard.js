import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import getConfig from "next/config";
import Image from "next/image";
import Link from "next/link";

// # Get .config
const { publicRuntimeConfig } = getConfig();

const AccommodationsCard = ({
  url = "",
  images = "",
  labelBrand = "/assets/images/accomodations/ca2024BrandLeMeridien.png",
  title = "Ayana",
  diskon = "0%",
}) => {
  const { ref, inView } = useInView({
    threshold: 1,
    rootMargin: "10% 0% -15% 0%",
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
      <Link
        ref={ref}
        className={`group relative flex h-[228px] flex-col items-center justify-center bg-gray-400 sm:h-[448px]`}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {isLoading ? (
          <Image
            className="mx-auto my-auto aspect-auto h-full w-full"
            src={images}
            alt={`${publicRuntimeConfig.siteAppName} (${title} - Accomodation Thumbnails)`}
            height={80}
            width={220}
            quality="87"
          />
        ) : (
          <div className="flex h-full w-full animate-pulse flex-col items-center justify-center bg-white">
            <div
              className="inline-block size-8 animate-spin rounded-full border-2 border-current border-t-transparent text-gray-500"
              role="status"
              aria-label="Coinfest Asia 2024 (Loading Brand)"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}

        <div className="flex-items absolute inset-x-0 inset-y-0 flex justify-center bg-black-900/[0.34] px-2 py-2"></div>

        <div className="absolute inset-x-0 inset-y-0 z-[2]">
          <div className="flex-items absolute bottom-auto left-auto right-1.5 top-1.5 flex justify-center px-2 py-2 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 sm:right-2.5 sm:top-2.5">
            <svg
              className="h-6 w-6 stroke-current text-white"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.7507 25.4167V11.25H14.584"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M28.3333 11.6719L11.25 28.7552"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="absolute inset-x-0 inset-y-0 flex flex-col items-center justify-center">
            {isLoading && (
              <Image
                className="mx-auto h-auto w-full"
                src={labelBrand}
                alt={`${publicRuntimeConfig.siteAppName} (${title} - Brand Accomodations)`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 170vw, 170vw"
                height={376}
                width={640}
                quality="87"
              />
            )}
          </div>

          <div className="flex-items absolute inset-x-0 bottom-0 top-auto flex items-center justify-center bg-black-900/[0.34] px-2 py-2 text-center font-bevietnamPro text-xs font-normal capitalize text-white sm:text-base">
            {diskon}
          </div>
        </div>
      </Link>
    </>
  );
};
export default AccommodationsCard;
