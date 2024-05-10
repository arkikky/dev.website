import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

// @lib
// import { setJoinString } from "@lib/helper/splitArray";

const SpeakersCard = ({ attributes = {}, useHeading = "h3", children }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    rootMargin: "10% 0% -25% 0%",
  });
  const [isLoading, setLoading] = useState(false);

  // @attributes
  const isImages = attributes
    ? process.env.NEXT_PUBLIC_UPLOAD +
      attributes.profilePicture.data.attributes.url
    : "/assets/images/speakers/ca2024Speakers-YukiKamimoto.png";
  const isName = attributes ? attributes.name : "Yuki Kamimoto";
  const isPosition = attributes ? attributes.position : "CEO & Co-Founder";
  const isBrand = attributes
    ? process.env.NEXT_PUBLIC_UPLOAD +
      attributes.companyLogo.data.attributes.url
    : "";

  // @random(images-backdrop)
  // const rndImages = [
  //   "ca2024CvrBgSpeakersSkyBlue",
  //   "ca2024CvrBgSpeakersBlue",
  //   "ca2024CvrBgSpeakersRed",
  //   "ca2024CvrBgSpeakersYellow",
  //   "ca2024CvrBgSpeakersSkyBlue",
  //   "ca2024CvrBgSpeakersBlue",
  //   "ca2024CvrBgSpeakersRed",
  //   "ca2024CvrBgSpeakersYellow",
  // ];

  // const isRndIndex = Math.floor(Math.random() * rndImages.length);
  // const isRndImages = rndImages[isRndIndex];

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
      <div
        ref={ref}
        className="group relative flex w-full min-w-full flex-col items-center justify-center overflow-hidden px-0 group-hover:cursor-pointer"
      >
        {/* @brand */}
        <div className="mx-auto mb-1 flex max-w-max flex-col items-center justify-center sm:mb-4">
          <Image
            className="mx-auto mr-auto h-auto max-h-[40px] min-h-[36px] w-auto scale-[1.2] transform grayscale sm:scale-100"
            src={isBrand}
            alt={`(${isName} - Brand Speakers Card)`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 280vw, 280vw"
            height={58}
            width={270}
            quality="87"
          />
        </div>

        <div className="relative flex h-[194px] w-full min-w-full max-w-min flex-col overflow-hidden rounded-2xl bg-[#D9DCE4] sm:h-[267px] lg:h-[249px] xl:h-[336px]">
          <div className="z-20 h-full w-full">
            {isLoading ? (
              <Image
                className="mx-auto h-auto w-full object-cover object-center"
                src={isImages}
                alt={`Coinfest Asia 2024 (${isName} - Speakers)`}
                height={672}
                width={564}
                quality="87"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center bg-[#D9DCE4]">
                <div
                  className="inline-block size-8 animate-spin rounded-full border-2 border-current border-t-transparent text-gray-500"
                  role="status"
                  aria-label="loading"
                >
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            )}
          </div>

          {/* @backdrop (cover) */}
          <div
            className={`ca2024CvrBgSpeakers ca2024CvrBgSpeakersBlue absolute inset-x-0 inset-y-0 z-px opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100`}
          ></div>

          {/* @btn (modal) */}
          <span className="absolute bottom-auto left-auto right-3 top-3 z-10 flex h-10 w-10 flex-col items-center justify-center rounded-xl bg-white opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 sm:right-4 sm:top-4">
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5251 5.49512L10.5205 7.49512L15.0781 7.50578L5.47461 17.0899L6.8874 18.5056L16.5172 8.89516L16.5064 13.5091L18.5064 13.5138L18.5251 5.51383L10.5251 5.49512Z"
                fill="black"
              />
            </svg>
          </span>
        </div>

        {/* @content */}
        <div className="mt-4 flex h-full max-h-[61px] min-h-[61px] w-full flex-col items-start justify-start rounded-xl bg-[#F6F6F6] px-2.5 py-2 sm:max-h-[84px] sm:min-h-[84px] sm:px-4 sm:py-4">
          {useHeading === "h2" && (
            <h2 className="font-bevietnamPro text-sm font-semibold text-black-900 sm:text-base">
              {isName}
            </h2>
          )}
          {useHeading === "h3" && (
            <h3 className="font-bevietnamPro text-sm font-semibold text-black-900 sm:text-base">
              {isName}
            </h3>
          )}
          {isPosition && (
            <p className="line-break-anywhere mt-1 line-clamp-1 font-bevietnamPro text-sm font-normal text-[#636363] sm:text-base">
              {isPosition}
            </p>
          )}
        </div>
      </div>
    </>
  );
};
export default SpeakersCard;
