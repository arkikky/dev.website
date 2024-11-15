import React, { useState } from 'react';

const StepCheckout = ({ progress }) => {
  const [isProgress, setProgress] = useState(progress);

  return (
    <>
      <div className="w-full flex-col items-center justify-center overflow-x-scroll rounded-xl bg-white px-4 py-4">
        <ul className="relative mx-auto flex w-max flex-row gap-x-4">
          <li className="group flex flex-1 shrink basis-0 items-center gap-x-2 lg:gap-x-3">
            <div className="inline-flex min-h-6 min-w-6 items-center justify-center align-middle text-xs">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-green-200 font-medium text-green-800">
                <svg
                  className="block size-3 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span className="ms-2 w-max text-sm font-normal text-green-800 sm:ms-2.5">
                Order Information
              </span>
            </div>
            <svg
              className={
                'mx-1 size-4 shrink-0 text-current text-gray-300 sm:mx-2'
              }
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </li>

          <li className="group flex flex-1 shrink basis-0 items-center gap-x-2 lg:gap-x-3">
            <div className="inline-flex min-h-6 min-w-6 items-center justify-center align-middle text-xs">
              <span
                className={`flex size-6 shrink-0 items-center justify-center rounded-full ${isProgress !== 'last' ? 'bg-gray-100 text-gray-600' : 'bg-green-200 text-green-800'} font-medium`}
              >
                {isProgress !== 'last' ? (
                  '2'
                ) : (
                  <svg
                    className="block size-3 shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                )}
              </span>
              <span
                className={`${isProgress !== 'last' ? 'text-gray-600' : 'text-green-800'} ms-2 w-max text-sm font-normal sm:ms-2.5`}
              >
                Processing Payment
              </span>
            </div>
            <svg
              className={
                'mx-1 size-4 shrink-0 text-current text-gray-300 sm:mx-2'
              }
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </li>

          <li className="group flex flex-1 shrink basis-0 items-center gap-x-2 lg:gap-x-3">
            <div className="inline-flex min-h-6 min-w-6 items-center justify-center align-middle text-xs">
              <span
                className={`flex size-6 shrink-0 items-center justify-center rounded-full ${isProgress !== 'last' ? 'bg-gray-100 text-gray-600' : 'bg-green-200 text-green-800'} font-medium`}
              >
                {isProgress !== 'last' ? (
                  '3'
                ) : (
                  <svg
                    className="block size-3 shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                )}
              </span>
              <span
                className={`${isProgress !== 'last' ? 'text-gray-600' : 'text-green-800'} ms-2 w-max text-sm font-normal sm:ms-2.5`}
              >
                Order Received
              </span>
            </div>
            <div className="h-px w-8 flex-1 bg-gray-200 group-last:hidden"></div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default StepCheckout;
