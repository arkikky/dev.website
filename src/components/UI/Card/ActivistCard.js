import React from "react";
import Link from "next/link";

// @components
import LazyImages from "@components/LazyImages";

const ActivistCard = ({
  labels = "",
  images = "",
  url = "",
  type = "default",
}) => {
  return (
    <>
      {type === "default" && (
        <Link
          href={url}
          className={`group relative h-[134px] w-full ${url !== "" ? "cursor-pointer" : "cursor-default"} overflow-hidden rounded-xl sm:h-[193px] sm:rounded-2xl lg:h-[206px] lg:w-[305px] xl:w-[311px]`}
        >
          {/* @btn (modal) */}
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
            <LazyImages
              src={images}
              alt="Coinfest Asia 2024 (Sponsor - Get Involved)"
              height={472}
              width={784}
            />
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
        </Link>
      )}

      {type === "open" && (
        <Link
          href={url}
          className="group relative h-[134px] w-full cursor-default overflow-hidden rounded-xl sm:h-[193px] sm:rounded-2xl lg:h-[206px] lg:w-[305px] xl:w-[311px]"
          target="_blank"
        >
          {/* @btn (modal) */}
          {/* <div className="absolute bottom-auto left-auto right-3 top-3 z-10 flex h-10 w-10 flex-col items-center justify-center rounded-xl bg-white opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 sm:right-4 sm:top-4">
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
          </div> */}

          <div className="absolute inset-x-0 inset-y-0">
            <LazyImages
              src={images}
              alt="Coinfest Asia 2024 (Sponsor - Get Involved)"
              height={472}
              width={784}
            />
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
        </Link>
      )}
    </>
  );
};

export default ActivistCard;
