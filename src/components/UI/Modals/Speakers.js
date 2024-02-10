import React from "react";
import Image from "next/image";

// @lib
import { setJoinString } from "@lib/utils/splitArray";

const SpeakersModal = ({ attributes }) => {
  const isImages = attributes
    ? process.env.NEXT_PUBLIC_UPLOAD +
      attributes.profilePicture.data.attributes.url
    : "/2024/assets/images/speakers/ca2024Speakers-YukiKamimoto.png";
  const isName = attributes ? attributes.name : "Yuki Kamimoto";
  const isTags = attributes ? attributes.position : "CEO, Coindesk Japan";
  const isShortBio = attributes
    ? attributes.shortBio
    : "Jeth Soetoyo is the co-founder and CEO of Figma. Dylan studied computer science and mathematics at Brown University where he and his co-founder, Evan Wallace, first started experimenting with design tools built on (and for) the web. With funding from a Thiel fellowship, they began Figma. Prior to Figma, Dylan interned at O'Reilly Media, LinkedIn, and Flipboard.";
  const isBrand = attributes
    ? process.env.NEXT_PUBLIC_UPLOAD +
      attributes.logoCompany.data.attributes.url
    : "";

  return (
    <>
      <div
        id={`mdlSpeakers${setJoinString(" ", "", isName)}`}
        className="hs-overlay bg-black-900/[0.33] hidden fixed top-0 left-0 overflow-x-hidden overflow-y-auto h-full w-full z-[9999] opacity-0 hs-overlay-open:opacity-100 transition-all hs-overlay-open:duration-300"
        data-hs-overlay-backdrop-container="#bckdrpModalActve"
      >
        <div className="flex items-center justify-center fixed top-0 bottom-0 sm:inset-y-0 inset-x-0 transform mx-auto px-4 sm:px-0 w-full max-w-full sm:max-w-[720px] lg:max-w-[825px] opacity-0 hs-overlay-open:opacity-100 translate-y-8 hs-overlay-open:translate-y-0 transition-all duration-300 ease-out">
          <div className="bg-white flex flex-col sm:flex-row flex-wrap rounded-[16px] sm:rounded-[18px] overflow-hidden relative py-0 w-full">
            <div className="flex-1 bg-gray-500 relative w-full min-w-full sm:min-w-[309px] max-w-full lg:max-w-[309px]">
              <button
                className="hs-dropdown-toggle flex flex-col items-center justify-center rounded-xl bg-white outline-none absolute top-4 sm:top-6 bottom-auto left-4 sm:left-6 right-auto h-10 w-10 z-[12]"
                aria-label={`mdlCloseSpeakers${setJoinString(" ", "", isName)}`}
                aria-labelledby={`mdlCloseSpeakers${setJoinString(
                  " ",
                  "",
                  isName
                )}`}
                data-hs-overlay={`#mdlSpeakers${setJoinString(
                  " ",
                  "",
                  isName
                )}`}
              >
                <svg
                  className="ml-0.5 h-4 w-4"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                    fill="currentColor"
                  />
                </svg>
              </button>

              <div className="opacity-100 absolute inset-y-0 inset-x-0 z-px transition-all duration-300 ease-in-out">
                <Image
                  className="object-center object-cover mx-auto h-full w-full z-10"
                  src="/assets/images/backdrop/ca2024Speakers.png"
                  alt="Coinfest Asia 2024 (Backdrop Speakers)"
                  height={672}
                  width={564}
                  quality="87"
                />
              </div>

              <Image
                className="object-top sm:object-center object-cover mx-auto h-[311px] sm:h-full w-full relative z-10"
                src={isImages}
                alt={`Coinfest Asia 2024 (${isName} - Speakers)`}
                height={672}
                width={564}
                quality="87"
              />
            </div>
            <div className="flex-1 flex flex-col bg-whie overflow-y-auto sm:overflow-hidden py-6 sm:py-10 px-4 sm:px-8 h-full max-h-[211px] sm:max-h-max w-full">
              <div className="flex flex-col text-start">
                <div className="flex flex-col">
                  <h2 className="text-black-900 font-bevietnamPro text-base sm:text-lg capitalize">
                    {isName}
                  </h2>
                  {isTags ? (
                    <span className="text-[#9C9C9C] font-bevietnamPro text-base sm:text-lg font-light mt-1">
                      {isTags}
                    </span>
                  ) : null}
                </div>
                {isShortBio ? (
                  <>
                    <div className="flex flex-col mt-4 sm:mt-6">
                      <span className="text-black-900 font-bevietnamPro text-base sm:text-lg font-normal">
                        Speaking Topics
                      </span>
                      <p className="text-[#676767] font-bevietnamPro text-base font-light mt-2">
                        {isShortBio}
                      </p>
                    </div>
                  </>
                ) : null}
                {isBrand ? (
                  <div className="flex flex-col items-start justify-start mt-6 sm:mt-8 max-w-max z-10">
                    <Image
                      className="my-auto h-auto w-auto min-h-[36px] max-h-[65px]"
                      src={isBrand}
                      alt={`(${isName} - Brand Speakers)`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 280vw, 280vw"
                      height={58}
                      width={270}
                      quality="87"
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SpeakersModal;
