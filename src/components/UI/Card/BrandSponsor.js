import React, { useState, useEffect } from "react";
import getConfig from "next/config";
import Image from "next/image";

// @get .config
const { publicRuntimeConfig } = getConfig();

const BrandSponsor = ({
  attributes,
  brandLogo,
  vip = false,
  withBorder = true,
}) => {
  const isName = attributes ? attributes.name : "Google Cloud";
  const isBrandLogo = attributes
    ? process.env.NEXT_PUBLIC_UPLOAD + attributes.logo.data.attributes.url
    : brandLogo
      ? brandLogo
      : "/assets/images/sponsor/ca-GoogleCloud.svg";

  const [isLoading, setLoading] = useState(true);

  {
    /* @loading */
  }
  useEffect(() => {
    setLoading(false);

    return () => {
      undefined;
    };
  }, []);

  return (
    <>
      {vip === true ? (
        <div
          className={`flex flex-col items-center justify-center ${
            withBorder === true
              ? "border border-solid border-[#E6E6E6] hocus:border-secondary"
              : " border-none"
          } relative h-[104px] overflow-hidden rounded-[8px] px-0 grayscale transition duration-300 ease-in-out hocus:grayscale-0 sm:h-[146px] sm:rounded-[18px] lg:h-[265px]`}
        >
          {/* @loading */}
          {isLoading === true && (
            <div className="absolute inset-x-0 inset-y-0 z-[2] flex flex-col items-center justify-center bg-white">
              <div
                className="inline-block size-6 animate-spin rounded-full border-[3px] border-current border-t-transparent text-blue-600"
                role="status"
                aria-label="loading"
              >
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}

          <Image
            className="mx-auto my-auto aspect-auto h-auto w-full"
            src={isBrandLogo}
            alt={`${publicRuntimeConfig.siteAppName} (${isName} - Brand Sponsor Partner)`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 170vw, 170vw"
            height={100}
            width={240}
            quality="87"
          />
        </div>
      ) : (
        <div
          className={`flex flex-col items-center justify-center ${
            withBorder === true
              ? "border border-solid border-[#E6E6E6] hocus:border-secondary"
              : "border-none"
          } relative h-[99px] overflow-hidden rounded-[8px] px-0 grayscale transition duration-300 ease-in-out hocus:grayscale-0 sm:h-[138px] sm:rounded-[14px] lg:h-[190px]`}
        >
          {/* @loading */}
          {isLoading === true && (
            <div className="absolute inset-x-0 inset-y-0 z-[2] flex flex-col items-center justify-center bg-white">
              <div
                className="inline-block size-6 animate-spin rounded-full border-[3px] border-current border-t-transparent text-blue-600"
                role="status"
                aria-label="loading"
              >
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}

          <Image
            className="mx-auto my-auto aspect-auto h-auto w-full"
            src={isBrandLogo}
            alt={`${publicRuntimeConfig.siteAppName} (${isName} - Brand Sponsor Partner)`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 170vw, 170vw"
            height={100}
            width={240}
            quality="87"
          />
        </div>
      )}
    </>
  );
};

export default BrandSponsor;
