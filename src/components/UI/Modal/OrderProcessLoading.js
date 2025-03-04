import React from 'react';

const OrderProcessLoadingModal = () => {
  return (
    <>
      <div
        id={'ca25PaymentProcess_Modals'}
        className={`ca25PaymentProcess_Modals fixed inset-x-0 inset-y-0 z-primary flex cursor-default flex-col items-center justify-center bg-black-900/60 px-2.5 sm:px-0`}
      >
        <div className="flex w-full max-w-[313px] flex-col items-center justify-center rounded-xl bg-white px-4 pb-4 pt-4.5 sm:max-w-[373px] sm:rounded-2xl sm:px-6 sm:pb-6 sm:pt-8">
          <div className="flex h-24 w-24 flex-col items-center justify-center">
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
          <div className="mt-2 text-center sm:mt-8">
            <h2 className="mb-2 text-lg font-semibold sm:text-xl">{`Receiving Your Order...`}</h2>
            <p className="text-balance text-sm font-light text-gray-500">
              {`This may take a moment. Please wait while we process your order.`}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderProcessLoadingModal;
