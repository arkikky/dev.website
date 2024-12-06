import React from "react";
import CountUp from "react-countup";

const BoardInsights = () => {
  return (
    <>
      <div
        id="boardInsights"
        className="supports-grid:grid grid-cols-4 sm:grid-cols-12 lg:grid-cols-12 gap-y-2 sm:gap-y-4 gap-x-2 sm:gap-x-4 relative mt-8"
      >
        <div className="col-span-2 sm:col-span-6 lg:col-span-3">
          <div className="flex flex-col items-start justify-start bg-white border-2 border-solid border-gray-100 rounded-[10px] py-4 sm:py-6 px-4 sm:px-6">
            <span className="text-2xl sm:text-3xl font-bold">
              <CountUp separator="" start={0} end={12500} duration={5} />+
            </span>
            <h2 className="text-gray-500 text-base sm:text-lg font-normal mt-0.5">
              Attendees
            </h2>
          </div>
        </div>
        <div className="col-span-2 sm:col-span-6 lg:col-span-3">
          <div className="flex flex-col items-start justify-start bg-white border-2 border-solid border-gray-100 rounded-[10px] py-4 sm:py-6 px-4 sm:px-6">
            <span className="text-2xl sm:text-3xl font-bold">
              <CountUp separator="" start={0} end={300} duration={5} />+
            </span>
            <h2 className="text-gray-500 text-base sm:text-lg font-normal mt-0.5">
              Speakers
            </h2>
          </div>
        </div>
        <div className="col-span-2 sm:col-span-6 lg:col-span-3">
          <div className="flex flex-col items-start justify-start bg-white border-2 border-solid border-gray-100 rounded-[10px] py-4 sm:py-6 px-4 sm:px-6">
            <span className="text-2xl sm:text-3xl font-bold">
              <CountUp separator="" start={0} end={5000} duration={5} />+
            </span>
            <h2 className="text-gray-500 text-base sm:text-lg font-normal mt-0.5">
              Companies
            </h2>
          </div>
        </div>
        <div className="col-span-2 sm:col-span-6 lg:col-span-3">
          <div className="flex flex-col items-start justify-start bg-white border-2 border-solid border-gray-100 rounded-[10px] py-4 sm:py-6 px-4 sm:px-6">
            <span className="text-2xl sm:text-3xl font-bold">
              <CountUp separator="" start={0} end={90} duration={6} />+
            </span>
            <h2 className="text-gray-500 text-base sm:text-lg font-normal mt-0.5">
              Countries
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};
export default BoardInsights;
