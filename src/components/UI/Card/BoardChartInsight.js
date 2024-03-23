import React from "react";

const BoardChartInsightCard = ({ number, label = "Participants" }) => {
  return (
    <>
      <div className="flex h-full flex-col rounded-xl border border-solid border-[#DFDFDF] px-5 py-4 sm:px-10 sm:py-8">
        <span className="font-staraExtraBold text-2xl uppercase text-black-900 sm:text-[44px] sm:leading-[normal] lg:text-[56px]">
          {number}
        </span>
        <h2 className="font-bevietnamPro text-base font-normal text-black-900">
          {label}
        </h2>
      </div>
    </>
  );
};

export default BoardChartInsightCard;
