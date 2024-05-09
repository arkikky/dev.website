import React from "react";

// @components
import SmallTickets from "@components/UI/Card/SmallTickets";

const BannerTickets = () => {
  return (
    <>
      <div className="ca2024BgLineWhite relative mx-auto block w-full overflow-hidden rounded-t-2xl bg-white px-8 py-6">
        <div className="relative z-[5] flex flex-col">
          <h2 className="font-staraBold text-2xl uppercase text-black-900">
            GET YOUR TICKETS NOW
          </h2>
          <div className="relative mt-4 grid-cols-4 gap-x-4 gap-y-0 supports-grid:grid sm:grid-cols-12 lg:grid-cols-12">
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
