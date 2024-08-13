import React from "react";
import Link from "next/link";

const GetInvolvedCard = ({
  url = "/get-involved",
  label = "Speaker",
  children,
}) => {
  return (
    <>
      <Link
        href={url}
        title={`Coinfest Asia 2024 (${label} - Get Involved)`}
        aria-label={`Coinfest Asia 2024 (${label} - Get Involved)`}
        aria-labelledby={`Coinfest Asia 2024 (${label} - Get Involved)`}
      >
        <div className="relative block h-[120px] w-full overflow-hidden rounded-[10px] sm:h-[224px]">
          <div className="absolute inset-x-0 inset-y-0">{children}</div>
          <div className="ca2024CoverOvrflwBg absolute inset-x-0 inset-y-0 z-[15] flex flex-col items-end justify-end">
            <div className="flex w-full flex-row items-center justify-between px-3 pb-2 sm:px-6 sm:pb-5">
              <h3 className="font-bevietnamPro text-sm font-medium text-white sm:text-xl">
                {label}
              </h3>
              <svg
                className="h-6 w-6 sm:h-8 sm:w-8"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.7507 25.4167V11.25H14.584"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28.3333 11.6719L11.25 28.7552"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default GetInvolvedCard;
