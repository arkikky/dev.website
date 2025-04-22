import React from 'react';
// import Markdown from 'react-markdown';
import Image from 'next/image';
import Markdown from 'react-markdown';

const SpeakerModal = ({
  name = 'Sandiaga Uno',
  images = '',
  position = 'CEO & Co-Founder',
  aboutMe = "Jeth Soetoyo is the co-founder and CEO of Figma. Dylan studied computer science and mathematics at Brown University where he and his co-founder, Evan Wallace, first started experimenting with design tools built on (and for) the web. With funding from a Thiel fellowship, they began Figma. Prior to Figma, Dylan interned at O'Reilly Media, LinkedIn, and Flipboard.",
  connectWithMe = '',
}) => {
  const urlImage = process.env.NEXT_PUBLIC_COINVESTASI;

  return (
    <>
      <div
        id={`mdlCA25Speakers`}
        className="hs-overlay fixed inset-x-0 inset-y-0 z-[1558] hidden h-full w-full overflow-y-auto overflow-x-hidden bg-black-900/[0.33] opacity-0 transition-all [--body-scroll:true] hs-overlay-open:opacity-100 hs-overlay-open:duration-300 hs-overlay-backdrop-open:bg-dark/40"
        aria-haspopup="dialog"
        aria-expanded="false"
        // data-hs-overlay-backdrop-container="#bckdrpModalActve"
      >
        <div className="fixed inset-x-0 inset-y-0 mx-auto flex w-full max-w-full translate-y-8 transform items-center justify-center px-4 opacity-0 transition-all duration-300 ease-out hs-overlay-open:translate-y-0 hs-overlay-open:opacity-100 sm:inset-y-0 sm:max-w-[720px] sm:px-0 lg:max-w-[825px]">
          <div className="mdlCA25Speakers-Cnt hs-overlay-animation-target pointer-events-auto relative flex w-full flex-col flex-wrap overflow-hidden rounded-[16px] bg-dark py-0 sm:flex-row sm:rounded-[18px]">
            <div
              className={`pointer-events-none absolute inset-x-0 inset-y-0 z-[4] rounded-[18px] border-[3px] border-solid border-white opacity-45 transition-[opacity] duration-300 ease-in-out`}
            ></div>

            <div className="relative w-full min-w-full max-w-full flex-1 bg-gray-500 sm:min-w-[309px] lg:max-w-[309px]">
              <button
                className="hs-dropdown-toggle absolute bottom-auto left-4 right-auto top-4 z-[12] flex h-10 w-10 flex-col items-center justify-center rounded-lg bg-white outline-none sm:left-6 sm:top-6"
                aria-labelledby={`mdlCA25Speakers`}
                data-hs-overlay={`#mdlCA25Speakers`}
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

              {/* @backdrop (cover) */}
              <div className="absolute inset-x-0 inset-y-0 z-[2] opacity-100 transition-all duration-300 ease-in-out">
                <Image
                  className="z-10 mx-auto h-full w-full object-cover object-center"
                  src={'/assets/images/speakers/ca25BckCover-Speakers.svg'}
                  alt={`Coinfest Asia 2025 Backcover Speakers Modal`}
                  height={246}
                  width={207}
                  quality="75"
                />
              </div>

              {/* @images */}
              {images && (
                <Image
                  className="relative z-[3] mx-auto h-[311px] w-full object-cover object-top sm:h-full sm:object-center"
                  src={
                    `${urlImage}${images.data.attributes.formats.small.url}` ??
                    ''
                  }
                  alt={`${name} Speakers Coinfest Asia 2025`}
                  height={672}
                  width={564}
                  quality="75"
                />
              )}
            </div>
            <div className="flex h-full max-h-[291px] w-full flex-1 flex-col overflow-y-scroll bg-dark px-4 py-6 sm:max-h-max sm:overflow-hidden sm:px-8 sm:py-10">
              <div className="flex flex-col text-start">
                <div className="flex flex-col">
                  <h2 className="text-base capitalize text-white sm:text-lg">
                    {name ?? ''}
                  </h2>
                  {position && (
                    <span className="mt-1 text-base font-light text-white/55 sm:text-lg">
                      {position ?? ''}
                    </span>
                  )}
                </div>
                {aboutMe && (
                  <div className="mt-4 flex flex-col">
                    <Markdown className="mt-2 text-base font-light text-[#676767]">
                      {aboutMe}
                    </Markdown>
                  </div>
                )}
                {connectWithMe && (
                  <div className="mt-4 flex flex-col rounded-lg bg-[#ECF1FF] px-4 py-4">
                    <h3 className="text-base font-semibold text-black-900">
                      Why Connect With Me at Coinfest Asia?
                    </h3>
                    {/* <Markdown className="mt-2  text-base font-light text-black-900">
                      {connectWithMe ?? ''}
                    </Markdown> */}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpeakerModal;
