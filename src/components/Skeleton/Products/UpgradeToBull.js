import React from 'react';

const UpgradeToBullSkeleton = ({}) => {
  return (
    <>
      <div className="group mt-14 flex h-[325px] w-full flex-col items-center justify-center rounded-2xl bg-gray-100 px-1 py-1 text-center text-black-800">
        <div className="relative flex h-full w-full animate-pulse flex-col items-end justify-between rounded-xl bg-gray-200/60 px-4 pb-4 pt-4.5 sm:px-4.5 sm:py-4.5 lg:px-6 lg:py-6">
          <div className="mx-auto block text-center">
            <span className="mx-auto flex h-12 w-[221px] items-start gap-x-2 rounded-xl bg-gray-300 text-[26px] font-semibold leading-initial text-gray-300 sm:text-[38px]"></span>
            <span className="mx-auto mt-2 flex h-12 w-[321px] items-start gap-x-2 rounded-xl bg-gray-300 text-[26px] font-semibold leading-initial text-gray-300 sm:text-[38px]"></span>
          </div>

          <div
            className={`mb-4 flex w-full animate-pulse flex-col items-center`}
          >
            <span
              className={`relative mx-auto inline-flex h-[46px] w-full items-center justify-center rounded-xl bg-gray-300 px-6 py-4 font-semibold uppercase text-gray-300 disabled:pointer-events-none disabled:opacity-90`}
            ></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpgradeToBullSkeleton;
