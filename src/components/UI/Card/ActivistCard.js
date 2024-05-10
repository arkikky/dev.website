import React from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

// @components
import LazyImages from "@components/LazyImages";

const ActivistCard = ({
  labels = "",
  images = "",
  url = "",
  type = "default",
}) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <>
      {type === "default" && (
        <Link
          ref={ref}
          href={url}
          className="group relative h-[134px] w-full overflow-hidden rounded-2xl sm:h-[193px] lg:h-[206px] lg:w-[305px] xl:w-[311px]"
        >
          {/* @btn (modal) */}
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

          <div className="absolute inset-x-0 inset-y-0">
            <LazyImages
              src={images}
              alt="Coinfest Asia 2024 (Sponsor - Get Involved)"
              height={472}
              width={784}
            />
          </div>

          <div className="ca2024CoverOvrflwBg absolute inset-x-0 inset-y-0 z-[15] flex flex-col items-end justify-end">
            <div className="flex w-full flex-col items-start justify-start px-4 pb-2 sm:px-4 sm:pb-3">
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
          ref={ref}
          className="flex w-full max-w-full flex-row items-center justify-between rounded-[10px] bg-white px-4 py-4 sm:max-w-[308px]"
          href={url}
          target="_blank"
        >
          <span className="font-bevietnamPro text-base font-medium text-black-900">
            {labels}
          </span>
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5251 5.49487L10.5205 7.49487L15.0781 7.50553L5.47461 17.0897L6.8874 18.5054L16.5172 8.89491L16.5064 13.5089L18.5064 13.5136L18.5251 5.51358L10.5251 5.49487Z"
              fill="black"
            />
          </svg>
        </Link>
      )}
    </>
  );
};

export default ActivistCard;
