import React from "react";

// @components
import Container from "@components/Container";

const ChartInsights = () => {
  return (
    <>
      <Container className="ca2024ChartInsight relative" data-scroll-section>
        <div className="supports-grid:grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-4 sm:gap-y-8 gap-x-8">
          <div className="col-span-full sm:col-span-4 lg:col-span-4">
            <div className="flex flex-col border border-solid border-[#DFDFDF] rounded-xl py-4 sm:py-8 px-5 sm:px-10 h-full">
              <h3 className="text-black-900 font-bevietnamPro text-2xl sm:text-[44px] lg:text-[56px] sm:leading-[normal] font-bold uppercase">
                10,000+
              </h3>
              <p className="text-black-900 font-bevietnamPro text-base font-normal">
                Participants
              </p>
            </div>
          </div>
          <div className="col-span-full sm:col-span-4 lg:col-span-8">
            <div className="flex flex-col border border-solid border-[#DFDFDF] rounded-xl py-4 sm:py-8 px-5 sm:px-10 h-full">
              <h3 className="text-black-900 font-bevietnamPro text-2xl sm:text-[44px] lg:text-[56px] sm:leading-[normal] font-bold uppercase">
                10,000+
              </h3>
              <p className="text-black-900 font-bevietnamPro text-base font-normal">
                Participants
              </p>
            </div>
          </div>
          <div className="col-span-full sm:col-span-4 lg:col-span-8">
            <div className="flex flex-col border border-solid border-[#DFDFDF] rounded-xl py-4 sm:py-8 px-5 sm:px-10 h-full">
              <h3 className="text-black-900 font-bevietnamPro text-2xl sm:text-[44px] lg:text-[56px] sm:leading-[normal] font-bold uppercase">
                10,000+
              </h3>
              <p className="text-black-900 font-bevietnamPro text-base font-normal">
                Participants
              </p>
            </div>
          </div>
          <div className="col-span-full sm:col-span-4 lg:col-span-4">
            <div className="flex flex-col border border-solid border-[#DFDFDF] rounded-xl py-4 sm:py-8 px-5 sm:px-10 h-full">
              <h3 className="text-black-900 font-bevietnamPro text-2xl sm:text-[44px] lg:text-[56px] sm:leading-[normal] font-bold uppercase">
                10,000+
              </h3>
              <p className="text-black-900 font-bevietnamPro text-base font-normal">
                Participants
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ChartInsights;
