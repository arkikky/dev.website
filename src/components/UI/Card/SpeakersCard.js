import React from "react";
import Image from "next/image";

// @lib
import { setJoinString } from "@lib/utils/splitArray";

import SpeakersModal from "../Modals/Speakers";

const SpeakersCard = ({ attributes }) => {
  const isImages = attributes
    ? process.env.NEXT_PUBLIC_UPLOAD +
      attributes.profilePicture.data.attributes.url
    : "/2024/assets/images/speakers/ca2024Speakers-YukiKamimoto.png";
  const isName = attributes ? attributes.name : "Yuki Kamimoto";
  const isPosition = attributes ? attributes.position : "CEO & Co-Founder";
  const isBrand = attributes
    ? process.env.NEXT_PUBLIC_UPLOAD +
      attributes.logoCompany.data.attributes.url
    : "";
  return (
    <>
      <div className="group group-hover:cursor-pointer flex flex-col items-center justify-center relative overflow-hidden pt-12 px-0">
        <div className="flex flex-col items-center justify-center absolute top-0 bottom-auto inset-x-0 mx-auto max-w-max z-[2]">
          <Image
            className="my-auto mx-auto h-auto w-auto min-h-[36px] max-h-[40px]"
            src={isBrand}
            alt={`(${isName} - Brand Speakers Card)`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 280vw, 280vw"
            height={58}
            width={270}
            quality="87"
          />
        </div>
        <div className="bg-[#D9DCE4] flex flex-col rounded-2xl relative overflow-hidden h-[194px] sm:h-[267px] lg:h-[249px] xl:h-[336px] w-full">
          <Image
            className="object-center object-cover mx-auto h-auto w-full z-10"
            src={isImages}
            alt={`Coinfest Asia 2024 (${isName} - Speakers)`}
            height={672}
            width={564}
            loading="lazy"
            quality="87"
          />

          {/* @backdrop (cover) */}
          <div className="opacity-0 group-hover:opacity-100 absolute inset-y-0 inset-x-0 z-px transition-all duration-300 ease-in-out">
            <Image
              className="object-center object-cover mx-auto h-auto w-full"
              src="/assets/images/backdrop/ca2024Speakers.png"
              alt="Coinfest Asia 2024 (Backdrop Speakers)"
              height={672}
              width={564}
              quality="87"
            />
          </div>

          {/* @btn (modal) */}
          <button
            role="button"
            id={`mdlBtnSpeakers${setJoinString(" ", "", isName)}`}
            className="mdlBtnSpeakers flex flex-col items-center justify-center rounded-xl bg-white opacity-0 group-hover:opacity-100 absolute top-3 sm:top-4 bottom-auto left-auto right-3 sm:right-4 h-10 w-10 z-10 transition-all duration-300 ease-in-out"
            aria-label={`${isName} - (Modal Speakers)`}
            aria-labelledby={`${isName} - (Modal Speakers)`}
            data-hs-overlay={`#mdlSpeakers${setJoinString(" ", "", isName)}`}
          >
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
          </button>
        </div>

        {/* @content */}
        <div className="bg-[#F6F6F6] flex flex-col items-start justify-start rounded-xl mt-4 py-2 sm:py-4 px-2 sm:px-4 h-full min-h-[84px] max-h-[84px] w-full">
          <h3 className="text-black-900 font-bevietnamPro text-sm sm:text-base font-semibold">
            {isName}
          </h3>
          {isPosition && (
            <p className="text-[#636363] font-bevietnamPro text-base font-normal line-clamp-1 mt-1">
              {isPosition}
            </p>
          )}
        </div>
      </div>
    </>
  );
};
export default SpeakersCard;
