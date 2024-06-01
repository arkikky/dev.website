import React from "react";

// @components
import SmallTickets from "@components/UI/Card/SmallTickets";

const BannerTickets = ({ rounded = true, mobile = false }) => {
  return (
    <>
      <div
        className={`relative mx-auto block w-full overflow-hidden ${rounded === true ? "rounded-t-2xl" : "rounded-none"} bg-white ${
          mobile === true
            ? "px-4 pb-28 pt-6 sm:px-8 sm:pb-34 sm:pt-6"
            : "px-4 pb-28 pt-6 sm:px-8 sm:py-6"
        }`}
      >
        <div className="relative z-[5] flex flex-col">
          <span className="font-staraBold text-2xl uppercase text-black-900">
            GET YOUR TICKETS NOW
          </span>
          <div className="relative mt-4 grid-cols-4 gap-x-4 gap-y-4 supports-grid:grid sm:grid-cols-12 lg:grid-cols-12">
            <div className="col-span-6">
              <SmallTickets
                title="Festival Ticket"
                price="100"
                url="https://ticket.coinfest.asia/?add-to-cart=5232"
              />
            </div>
            <div className="col-span-6">
              <SmallTickets
                title="Bull Ticket"
                price="700"
                type="VIP"
                url="https://ticket.coinfest.asia/?add-to-cart=3613"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerTickets;
