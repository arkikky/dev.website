import React from "react";

const SuccessModal = () => {
  return (
    <>
      {/* @Modal (Success Newsletter) */}
      <button
        id="btnSuccessPitchingNewsletterMdl"
        className="btnSuccessPitchingNewsletterMdl toolsApp invisible absolute bottom-0 left-auto right-0 top-full z-10 hidden h-8 w-8 cursor-pointer flex-col items-center justify-center rounded-[10px] bg-transparent opacity-0 outline-none"
        // className="toolsApp fixed bottom-auto left-auto right-0 top-40 z-100 flex h-8 w-8 cursor-pointer flex-col items-center justify-center rounded-[10px] bg-blue-500 outline-none"
        aria-labelledby="Success Newsletter Modal"
        data-hs-overlay="#successPitchingNewsletterModal"
      ></button>

      <div
        id="successPitchingNewsletterModal"
        className="hs-overlay fixed left-0 top-0 z-[9999] hidden h-full w-full overflow-y-auto overflow-x-hidden bg-black-900/[0.33] opacity-0 transition-all [--body-scroll:true] hs-overlay-open:opacity-100 hs-overlay-open:duration-300"
        data-hs-overlay-backdrop-container="#bckdrpModalActve"
      >
        <div className="absolute inset-x-0 bottom-0 top-0 mx-auto mt-8 flex w-full items-center justify-center px-4 opacity-0 transition-all duration-300 ease-out hs-overlay-open:mt-0 hs-overlay-open:opacity-100 sm:inset-y-0 sm:max-w-[617px] sm:px-0">
          <div className="relative flex flex-col rounded-xl bg-white px-7 py-8 text-center sm:rounded-[18px] sm:px-12 sm:py-14">
            <button
              className="hs-dropdown-toggle absolute bottom-auto left-auto right-4 top-4.5 outline-none"
              aria-labelledby="successPitchingNewsletterModal"
              data-hs-overlay="#successPitchingNewsletterModal"
            >
              <svg
                className="h-4 w-4"
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
            <div className="flex flex-col text-center">
              <span className="text-[58px] leading-[72px] text-black-900 sm:text-[72px] sm:leading-[80px]">
                🎉
              </span>
              <h2 className="font-figtree mx-auto mt-2 max-w-full text-lg font-semibold uppercase text-black-900 sm:mt-4 sm:max-w-[413px] sm:text-2xl">
                Thank you for submitting your project.
              </h2>
              <div className="font-figtree mt-4 px-0 text-base font-light text-black-900 sm:px-7 sm:text-base">
                <p>
                  This is an exclusive offline session at Coinfest Asia with
                  limited slots. Given the high demand of submissions, only
                  selected projects will be notified.
                </p>
                <br></br>
                <p>
                  Selected project will be announced on August 16th 2024 (UTC+8)
                  through Coinfest Asia official channels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessModal;
