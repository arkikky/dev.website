import React from "react";
import CountUp from "react-countup";

const ChartInsights = () => {
  return (
    <>
      <div
        id="caChartInsights"
        className="supports-grid:grid grid-cols-4 sm:grid-cols-12 lg:grid-cols-12 gap-y-2 sm:gap-y-4 gap-x-2 sm:gap-x-4 relative mt-8"
      >
        <div className="col-span-2 sm:col-span-6 lg:col-span-3">
          <div className="flex flex-col items-start justify-start bg-white border border-solid border-gray-100 rounded-[10px] py-4 sm:py-6 px-4 sm:px-6">
            <h3 className="body font-bold">
              <CountUp separator="" start={0} end={7000} duration={5} />+
            </h3>
            <span className="text-black-400 text-base sm:text-lg font-normal">
              Attendees
            </span>
          </div>
        </div>
        <div className="col-span-2 sm:col-span-6 lg:col-span-3">
          <div className="flex flex-col items-start justify-start bg-white border border-solid border-gray-100 rounded-[10px] py-4 sm:py-6 px-4 sm:px-6">
            <h3 className="body font-bold">
              <CountUp separator="" start={0} end={200} duration={5} />+
            </h3>
            <span className="text-black-400 text-base sm:text-lg font-normal">
              Speakers
            </span>
          </div>
        </div>
        <div className="col-span-2 sm:col-span-6 lg:col-span-3">
          <div className="flex flex-col items-start justify-start bg-white border border-solid border-gray-100 rounded-[10px] py-4 sm:py-6 px-4 sm:px-6">
            <h3 className="body font-bold">
              <CountUp separator="" start={0} end={2000} duration={5} />+
            </h3>
            <span className="text-black-400 text-base sm:text-lg font-normal">
              Companies
            </span>
          </div>
        </div>
        <div className="col-span-2 sm:col-span-6 lg:col-span-3">
          <div className="flex flex-col items-start justify-start bg-white border border-solid border-gray-100 rounded-[10px] py-4 sm:py-6 px-4 sm:px-6">
            <h3 className="body font-bold">
              <CountUp separator="" start={0} end={65} duration={6} />+
            </h3>
            <span className="text-black-400 text-base sm:text-lg font-normal">
              Countries
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChartInsights;
