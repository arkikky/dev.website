import React from "react";

// @components
import Container from "@components/Container";

const ChartInsight = () => {
  return (
    <>
      <section className="ca2024ChartInsight relative">
        <Container>
          <div className="supports-grid:grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-4 sm:gap-y-8 gap-x-8 mt-[148px] sm:mt-[198px] lg:mt-[228px]">
            <div className="col-span-full sm:col-span-4 lg:col-span-6">
              <div className="flex flex-col border border-solid border-[#DFDFDF] rounded-xl py-4 sm:py-8 px-5 sm:px-10 h-full">
                <h2 className="text-black-900 font-staraExtraBold text-2xl sm:text-[44px] lg:text-[56px] sm:leading-[normal] uppercase">
                  6,000+
                </h2>
                <p className="text-black-900 font-bevietnamPro text-base font-normal">
                  Participants
                </p>
              </div>
            </div>
            <div className="col-span-full sm:col-span-4 lg:col-span-6">
              <div className="flex flex-col border border-solid border-[#DFDFDF] rounded-xl py-4 sm:py-8 px-5 sm:px-10 h-full">
                <h2 className="text-black-900 font-staraExtraBold text-2xl sm:text-[44px] lg:text-[56px] sm:leading-[normal] uppercase">
                  65+
                </h2>
                <p className="text-black-900 font-bevietnamPro text-base font-normal">
                  Countries
                </p>
              </div>
            </div>
            <div className="col-span-full sm:col-span-4 lg:col-span-6">
              <div className="flex flex-col border border-solid border-[#DFDFDF] rounded-xl py-4 sm:py-8 px-5 sm:px-10 h-full">
                <h2 className="text-black-900 font-staraExtraBold text-2xl sm:text-[44px] lg:text-[56px] sm:leading-[normal] uppercase">
                  250+
                </h2>
                <p className="text-black-900 font-bevietnamPro text-base font-normal">
                  Speakers
                </p>
              </div>
            </div>
            <div className="col-span-full sm:col-span-4 lg:col-span-6">
              <div className="flex flex-col border border-solid border-[#DFDFDF] rounded-xl py-4 sm:py-8 px-5 sm:px-10 h-full">
                <h2 className="text-black-900 font-staraExtraBold text-2xl sm:text-[44px] lg:text-[56px] sm:leading-[normal] uppercase">
                  80+
                </h2>
                <p className="text-black-900 font-bevietnamPro text-base font-normal">
                  Sponsors
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ChartInsight;
