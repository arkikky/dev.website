import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import getConfig from "next/config";
import Image from "next/image";
import Link from "next/link";

// @get .config
const { publicRuntimeConfig } = getConfig();

const BrandSponsor = ({
  attributes = {},
  brandLogo,
  vip = false,
  height = 0,
  width = 0,
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

  const isName = attributes ? attributes.name : "Google Cloud";
  const isUrl = attributes ? attributes.url : "";
  const isBrandLogo =
    attributes.logo.data !== null
      ? process.env.NEXT_PUBLIC_UPLOAD + attributes.logo.data.attributes.url
      : "/assets/images/sponsor/ca-GoogleCloud.svg";

  return (
    <>
      {isUrl === null && (
        <>
          <div
            ref={ref}
            className={`relative flex ${vip === true ? "h-[104px] sm:h-[146px] lg:h-[265px]" : "h-[99px] sm:h-[138px] lg:h-[190px]"} flex-col items-center justify-center overflow-hidden rounded-[8px] border border-solid border-[#E6E6E6] px-0 grayscale transition duration-300 ease-in-out hocus:border-secondary hocus:grayscale-0 sm:rounded-[18px]`}
          >
            {isLoading ? (
              <Image
                className="mx-auto h-full w-full object-cover object-center"
                src={isBrandLogo}
                alt={`${publicRuntimeConfig.siteAppName} (${isName} - Brand Sponsor Partner)`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 170vw, 170vw"
                height={height}
                width={width}
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
          </div>
        </>
      )}

      {isUrl !== null && (
        <>
          <Link
            ref={ref}
            className={`relative flex ${vip === true ? "h-[104px] sm:h-[146px] lg:h-[265px]" : "h-[99px] sm:h-[138px] lg:h-[190px]"} flex-col items-center justify-center overflow-hidden rounded-[8px] border border-solid border-[#E6E6E6] px-0 grayscale transition duration-300 ease-in-out hocus:border-secondary hocus:grayscale-0 sm:rounded-[18px]`}
            href={isUrl}
          >
            {isLoading ? (
              <Image
                className="mx-auto h-full w-full object-cover object-center"
                src={isBrandLogo}
                alt={`${publicRuntimeConfig.siteAppName} (${isName} - Brand Sponsor Partner)`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 170vw, 170vw"
                height={height}
                width={width}
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
          </Link>
        </>
      )}
    </>
  );
};

export default BrandSponsor;
