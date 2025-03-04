import React from 'react';

const TicketProductsSkeleton = ({}) => {
  return (
    <>
      <div
        className={
          'flex h-auto flex-col overflow-hidden rounded-2xl sm:rounded-[20px] lg:h-[569px]'
        }
      >
        <div className="relative flex h-full flex-col items-start justify-between bg-black-800 px-4 pb-4 pt-4.5 sm:px-4.5 sm:py-4.5 lg:px-6 lg:py-6">
          <div className="flex w-full animate-pulse flex-col items-start pb-15 lg:pb-0">
            <div className="flex w-full flex-col">
              <span className="bg-black-700 mb-1 h-[28px] w-[166px] rounded-full text-xl font-medium sm:mb-2"></span>
              <div className="bg-black-700 inline-flex h-[38px] w-[138px] items-start space-x-2.5 rounded-full">
                <span className="text-[32px] font-semibold leading-[38px]"></span>
              </div>
            </div>
            <div className="my-6 block w-full border-t border-dashed border-black-900/60"></div>
            <div className="block w-full">
              <ul className="mt-0 space-y-6">
                <li className="bg-black-700 h-3.5 w-full rounded-full"></li>
                <li className="bg-black-700 h-3.5 w-full rounded-full"></li>
                <li className="bg-black-700 h-3.5 w-full rounded-full"></li>
                <li className="bg-black-700 h-3.5 w-full rounded-full"></li>
                <li className="bg-black-700 h-3.5 w-full rounded-full"></li>
                <li className="bg-black-700 h-3.5 w-full rounded-full"></li>
                <li className="bg-black-700 h-3.5 w-full rounded-full"></li>
              </ul>
            </div>
          </div>

          <div
            className={`flex w-full animate-pulse flex-row items-end justify-end`}
          >
            <span
              className={`bg-black-700 text-black-700 relative inline-flex w-[169px] items-center justify-center rounded-xl px-6 py-5 font-semibold uppercase disabled:pointer-events-none disabled:opacity-90`}
            >
              Ticket
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketProductsSkeleton;
