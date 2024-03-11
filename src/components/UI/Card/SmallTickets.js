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
            ? "bg-[#333333] ca2024BgSmallTicketVIP"
            : "bg-secondary ca2024BgSmallTicket"
        } overflow-hidden relative py-4 px-4.5`}
      >
        <div className="flex flex-row items-center justify-between relative z-[5]">
          <h3 className="text-white font-staraBold text-[28px] leading-[28px] uppercase w-full max-w-[176px]">
            {title}
          </h3>
          <span className="text-white font-staraSemiBold text-[28px] leading-[28px] uppercase">
            ${price}
          </span>
        </div>
        <Link
          className="bg-white inline-flex items-center justify-center rounded-xl sm:rounded-[10px] text-black-900 font-bevietnamPro text-sm font-medium relative outline-none focus-visible:outline-none mt-2.5 py-5 px-4 w-full"
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
