import React from "react";
import Image from "next/image";

const CardSpeakers = ({ attributes }) => {
  const isImages = attributes
    ? process.env.NEXT_PUBLIC_UPLOAD +
      attributes.profilePicture.data.attributes.url
    : "/2024/assets/images/speakers/ca2024Speakers-YukiKamimoto.png";
  const isName = attributes ? attributes.name : "Yuki Kamimoto";
  const isBrand = attributes
    ? process.env.NEXT_PUBLIC_UPLOAD +
      attributes.logoCompany.data.attributes.url
    : "";

  const explode = (delimiter, inputString) => {
    return inputString.split(delimiter);
  };

  const implode = (glue, inputArray) => {
    return inputArray.join(glue);
  };

  const joinString = (data) => {
    const rsArray = explode(" ", data);
    const rsString = implode("", rsArray);

    return rsString;
  };

  return (
    <>
      <div className="group group-hover:cursor-pointer flex flex-col items-center justify-center overflow-hidden px-0">
        <div className="bg-[#D9DCE4] flex flex-col relative overflow-hidden h-[194px] sm:h-[267px] lg:h-[249px] xl:h-[336px] w-full">
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
              src="/2024/assets/images/backdrop/ca2024Speakers.png"
              alt="Coinfest Asia 2024 (Backdrop Speakers)"
              height={672}
              width={564}
              loading="lazy"
              quality="87"
            />
          </div>

          {/* @btn (modal) */}
          <button
            id={`mdlBtnSpeakers${joinString(isName)}`}
            className="mdlBtnSpeakers flex flex-col items-center justify-center rounded-xl bg-white opacity-0 group-hover:opacity-100 absolute top-3 sm:top-4 bottom-auto left-auto right-3 sm:right-4 h-10 w-10 z-10 transition-all duration-300 ease-in-out"
            aria-labelledby={`${isName} - (Modal Speakers)`}
            data-hs-overlay={`#mdlSpeakers${joinString(isName)}`}
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
        <div className="flex flex-col items-start justify-start mt-4 w-full">
          <h3 className="text-black-900 font-bevietnamPro text-sm sm:text-base font-bold">
            {isName}
          </h3>
          <div className="flex flex-col items-start justify-start mt-1 max-w-max z-10">
            <Image
              className="my-auto h-auto w-auto min-h-[36px] max-h-[55px]"
              src={isBrand}
              alt={`(${isName} - Brand Speakers)`}
              sizes="(min-width: 1874px) 246vw,
                (min-width: 1536px) 257vw,
                (min-width: 1280px) 313vw,
                (min-width: 1024px) 395vw,
                (min-width: 640px) 431vw,
                1005vw"
              height={58}
              width={270}
              quality="87"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default CardSpeakers;
