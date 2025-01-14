import React from 'react';

const OrderLoadingProcessModal = () => {
  return (
    <>
      <div
        id={'ca25LoadingProcess_Modals'}
        className={`ca25LoadingProcess_Modals fixed inset-x-0 inset-y-0 z-primary flex cursor-default flex-col items-center justify-center bg-black-900/60 px-2.5 sm:px-0`}
      >
        <div className="flex h-[104px] w-[124px] flex-col items-center justify-center rounded-xl bg-white sm:h-[124px] sm:w-[144px] sm:rounded-2xl">
          <svg
            className="h-10 w-10 animate-spin text-black-900 sm:h-12 sm:w-12"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="3"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default OrderLoadingProcessModal;
