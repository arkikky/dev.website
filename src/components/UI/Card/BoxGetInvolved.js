import React from "react";
import Link from "next/link";
import Image from "next/image";

const BoxGetInvolved = ({
  url = "",
  title = "Speakers",
  images = "/assets/images/get-involved/ca2024GetInvolved-Speaker.png",
  scale = false,
}) => {
  return (
    <>
      <Link href={url}>
        <div className="block rounded-[10px] overflow-hidden relative h-[120px] sm:h-[236px] w-full">
          <div className="absolute inset-y-0 inset-x-0">
            <Image
              className={`object-center object-cover mx-auto h-full w-full ${
                scale === true ? "transform scale-[1.5]" : "transform scale-100"
              }`}
              src={images}
              alt={`Coinfest Asia 2024 (${title} - Get Involved Box)`}
              height={472}
              width={784}
              loading="lazy"
              quality="87"
            />
          </div>
          <div className="ca2024BgOvrflyBackdrop flex flex-col items-end justify-end absolute inset-y-0 inset-x-0 z-[15]">
            <div className="flex flex-row items-center justify-between pb-2 sm:pb-6 px-4 sm:px-6 w-full">
              <h3 className="text-white font-bevietnamPro text-base sm:text-2xl font-medium">
                {title}
              </h3>
              <svg
                className="h-6 sm:h-10 w-6 sm:w-10"
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

export default BoxGetInvolved;
