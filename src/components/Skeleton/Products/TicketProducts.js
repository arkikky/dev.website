import React from 'react';

const TicketProductsSkeleton = ({}) => {
  return (
    <>
      <div
        className={
          'ca25Products flex h-auto animate-pulse flex-col space-y-6 rounded-3xl px-1.5 py-1.5 lg:h-[651px]'
        }
      >
        <div className="ca25Products_Card relative flex h-full flex-col items-start justify-between rounded-[19px] px-4.5 py-4.5 lg:px-6 lg:py-6">
          <div className="flex w-full flex-col items-start pb-15 lg:pb-0">
            <div className="flex w-full flex-col">
              <span className="mb-1 h-[28px] w-[166px] rounded-full bg-gray-200 text-xl font-medium sm:mb-2"></span>
              <div className="inline-flex h-[38px] w-[138px] items-start space-x-2.5 rounded-full bg-gray-200">
                <span className="text-[32px] font-semibold leading-[38px]"></span>
              </div>
            </div>
            <div className="my-6 block w-full border-t border-dashed border-gray-200"></div>
            <div className="block w-full">
              <ul className="mt-0 space-y-6">
                <li className="h-4 w-full rounded-full bg-gray-200"></li>
                <li className="h-4 w-full rounded-full bg-gray-200"></li>
                <li className="h-4 w-full rounded-full bg-gray-200"></li>
                <li className="h-4 w-full rounded-full bg-gray-200"></li>
                <li className="h-4 w-full rounded-full bg-gray-200"></li>
                <li className="h-4 w-full rounded-full bg-gray-200"></li>
                <li className="h-4 w-full rounded-full bg-gray-200"></li>
                <li className="h-4 w-full rounded-full bg-gray-200"></li>
              </ul>
            </div>
          </div>

          <span
            className={`relative inline-flex w-full items-center justify-center rounded-xl bg-gray-200 px-6 py-5 font-semibold uppercase text-gray-200 disabled:pointer-events-none disabled:opacity-90`}
          >
            Buy Ticket
          </span>
        </div>
      </div>
    </>
  );
};

export default TicketProductsSkeleton;
