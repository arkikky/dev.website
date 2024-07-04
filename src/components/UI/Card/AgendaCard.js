import React from "react";

const AgendaCard = ({ children }) => {
  return (
    <>
      <div className="flex flex-col items-start gap-y-6 px-4 py-6 sm:flex-row sm:gap-y-0">
        <div className="flex w-full max-w-max flex-col lg:max-w-[564px]">
          <div className="flex w-full max-w-full flex-col space-y-2 sm:max-w-[343px]">
            <span className="inline-flex w-max flex-row items-center justify-center rounded-full bg-secondary px-2.5 py-1 font-bevietnamPro text-sm font-light text-white">
              Main Stage
            </span>
            <h3 className="pr-14 font-bevietnamPro text-lg font-semibold text-black-900 lg:pr-0 lg:text-xl">
              Breaking Bank: How Digital Assets are Disrupting Traditional
              Banking Models
            </h3>
            <p className="font-bevietnamPro text-base font-light text-[#2F2F2F]">
              1:00 PM - 2:30 PM
            </p>
          </div>
        </div>
        <div className="flex w-fill flex-col items-start justify-between gap-y-6 lg:flex-row lg:gap-y-0">
          <div className="flex w-full flex-col space-y-2">
            <div className="flex flex-col">
              <span className="font-bevietnamPro text-base font-light text-[#5E6577]">
                Speakers
              </span>
              <p className="font-bevietnamPro text-base font-light text-black-900">
                Yat Siu, Yuki Kamimoto, Dan Anthony
              </p>
            </div>
            <div className="flex flex-col">
              <span className="font-bevietnamPro text-base font-light text-[#5E6577]">
                Moderator
              </span>
              <p className="font-bevietnamPro text-base font-light text-black-900">
                Amanda Cassat
              </p>
            </div>
            <div className="flex flex-col">
              <span className="font-bevietnamPro text-base font-light text-[#5E6577]">
                Location
              </span>
              <p className="font-bevietnamPro text-base font-light text-secondary">
                Oasis Stage
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col sm:w-max">{children}</div>
        </div>
      </div>
    </>
  );
};

export default AgendaCard;
