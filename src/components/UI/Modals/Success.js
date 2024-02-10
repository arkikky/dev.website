import React, { useEffect } from "react";

const SuccessedModal = () => {
  // @preline (Add Plugins)
  useEffect(() => {
    import("preline");
    return () => {
      undefined;
    };
  }, []);

  return (
    <>
      <button
        id="mdlBtnSuccess"
        className="mdlBtnSuccess toolsApp bg-transparent hidden flex-col items-center justify-center cursor-pointer rounded-[10px] outline-none fixed top-full bottom-0 left-auto right-0 h-8 w-8 opacity-0 invisible z-10"
        // className="mdlBtnSuccess bg-blue-500 flex flex-col items-center justify-center cursor-pointer rounded-[10px] outline-none fixed top-40 bottom-auto left-auto right-0 h-8 w-8 z-100"
        aria-label="Success Modal"
        aria-labelledby="Success Modal"
        data-hs-overlay="#mdlSuccess"
      ></button>

      <div
        id="mdlSuccess"
        className="hs-overlay [--body-scroll:true] bg-black-900/[0.33] hidden fixed top-0 left-0 overflow-x-hidden overflow-y-auto h-full w-full z-[9999] opacity-0 hs-overlay-open:opacity-100 transition-all hs-overlay-open:duration-300"
        data-hs-overlay-backdrop-container="#bckdrpModalActve"
      >
        <div className="flex items-center justify-center absolute top-0 bottom-0 sm:inset-y-0 inset-x-0 mt-8 hs-overlay-open:mt-0 mx-auto px-4 sm:px-0 w-full sm:max-w-[547px] opacity-0 hs-overlay-open:opacity-100 transition-all duration-300 ease-out">
          <div className="bg-white flex flex-col rounded-xl sm:rounded-[18px] text-center relative py-8 sm:py-14 px-7 sm:px-12">
            <button
              className="hs-dropdown-toggle outline-none absolute top-4.5 bottom-auto left-auto right-4"
              aria-labelledby="mdlSuccess"
              data-hs-overlay="#mdlSuccess"
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
              <span className="text-black-900 text-[64px] sm:text-[72px] leading-[80px]">
                🎉
              </span>
              <h2 className="text-black-900 font-bevietnamPro text-xl sm:text-2xl font-semibold uppercase mt-2 sm:mt-4 mx-auto max-w-[313px]">
                You're on the list!
              </h2>
              <p className="text-black-900 font-bevietnamPro text-base sm:text-lg font-light mt-4 px-0">
                Thank you for your interest for Coinfest Asia 2024. You will be
                the first to receive news and updates—including for the upcoming
                Coinfest Asia 2024.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessedModal;
