import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

// @components
import LazyImages from "@components/LazyImages";

const ActivistCard = ({
  labels = "",
  images = "",
  url = "",
  type = "default",
}) => {
  const { ref, inView } = useInView({
    threshold: 1,
    // rootMargin: "10% 0% -25% 0%",
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

  // @activist-card
  const isActivistCard = () => {
    return (
      <div
        className={`group relative h-[134px] w-full ${url !== "" ? "cursor-pointer" : "cursor-default"} overflow-hidden rounded-xl sm:h-[193px] sm:rounded-2xl lg:h-[206px] lg:w-[305px] xl:w-[311px]`}
      >
        {/* @btn */}
        {url !== "" && (
          <div className="absolute bottom-auto left-auto right-3 top-3 z-10 flex h-10 w-10 flex-col items-center justify-center rounded-xl bg-white opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 sm:right-4 sm:top-4">
            <svg
              className=" h-6 w-6 stroke-current text-black-900"
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
        )}

        <div className="absolute inset-x-0 inset-y-0">
          {isLoading ? (
            <Image
              className="mx-auto h-full w-full object-cover object-center"
              src={images}
              alt="Coinfest Asia 2024 (Sponsor - Get Involved)"
              height={472}
              width={784}
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

        <div className="ca2024CoverOvrflwBg absolute inset-x-0 inset-y-0 z-[15] flex flex-col items-end justify-end">
          <div className="flex w-full flex-col items-start justify-start px-3 pb-2 sm:px-4 sm:pb-3">
            <h3 className="font-bevietnamPro text-sm font-medium text-white sm:text-base">
              {labels}
            </h3>
            <span className="font-bevietnamPro text-sm font-light text-white/[0.48] sm:text-base">
              Learn more
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {type === "default" && (
        <Link ref={ref} href={url}>
          {isActivistCard()}
        </Link>
      )}

      {type === "open" && (
        <Link href={url} target="_blank">
          {isActivistCard()}
        </Link>
      )}
    </>
  );
};

export default ActivistCard;
