import React from "react";
import Link from "next/link";

const SmallTickets = ({
  title = "Festival Ticket",
  price = "75",
  type = "default",
}) => {
  return (
    <>
      <div
        className={`"flex flex-col rounded-xl ${
          type === "VIP"
            ? "ca2024BgSmallTicketVIP bg-[#333333]"
            : "ca2024BgSmallTicket bg-secondary"
        } relative overflow-hidden px-4.5 py-4`}
      >
        <div className="relative z-[5] flex flex-row items-center justify-between">
          <h3 className="w-full max-w-[176px] font-staraBold text-[28px] uppercase leading-[28px] text-white">
            {title}
          </h3>
          <span className="font-staraSemiBold text-[28px] uppercase leading-[28px] text-white">
            ${price}
          </span>
        </div>
        <Link
          className="relative mt-2.5 inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-5 font-bevietnamPro text-sm font-medium text-black-900 outline-none focus-visible:outline-none sm:rounded-[10px]"
          href={"https://ticket.coinfest.asia/"}
          title={`Tickets Coinfest Asia 2024 (${title})`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Secure your spots
          <svg
            className="ml-1 h-6 w-6"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.66602 16.0013H23.3327M23.3327 16.0013L17.2151 10.668M23.3327 16.0013L17.2151 21.3346"
              stroke="#101010"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </>
  );
};

export default SmallTickets;
