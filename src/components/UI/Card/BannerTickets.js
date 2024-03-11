import React from "react";

// @components
import SmallTickets from "@components/UI/Card/SmallTickets";

const BannerTickets = () => {
  return (
    <>
      <div className="block rounded-t-2xl bg-white ca2024BgLineWhite overflow-hidden relative mx-auto py-6 px-8 w-full">
        <div className="flex flex-col relative z-[5]">
          <h2 className="text-black-900 font-staraBold text-2xl uppercase">
            GET YOUR TICKETS NOW
          </h2>
          <div className="supports-grid:grid grid-cols-4 sm:grid-cols-12 lg:grid-cols-12 gap-y-0 gap-x-4 relative mt-4">
            <div className="col-span-6">
              <SmallTickets title="Festival Ticket" price="75" />
            </div>
            <div className="col-span-6">
              <SmallTickets title="Bull Ticket" price="650" type="VIP" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerTickets;
