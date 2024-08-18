// import React, { useState, useEffect } from "react";
import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

// @css
import "@splidejs/react-splide/css/core";

// @components
import SmallTickets from "@components/UI/Card/SmallTickets";

const BannerTickets = ({ rounded = true, mobile = false }) => {
  const [isGrab, setGrab] = useState(false);

  //  @mouse (grab)
  const isMouseDown = (e) => {
    e.preventDefault();

    setGrab(true);
  };

  const isMouseDefault = (e) => {
    e.preventDefault();

    setGrab(false);
  };

  const isMouseMove = (e) => {
    if (!isGrab) return;
    e.preventDefault();

    setGrab(true);
  };

  return (
    <>
      <div
        className={`relative mx-auto block w-full overflow-hidden ${rounded === true ? "rounded-t-2xl" : "rounded-none"} bg-white ${
          mobile === true
            ? "px-4 pb-28 pt-4 sm:px-5 sm:pb-34 sm:pt-4"
            : "px-4 pb-28 pt-4 sm:px-5 sm:py-4"
        }`}
      >
        <div className="relative z-[5] flex flex-col">
          <span className="font-staraBold text-2xl uppercase text-black-900">
            GET YOUR TICKETS NOW
          </span>
          <div
            className={`relative mt-4 block ${
              isGrab === true ? "cursor-grabbing" : "cursor-grab"
            }`}
            onMouseDown={(e) => isMouseDown(e)}
            onMouseUp={(e) => isMouseDefault(e)}
            onMouseLeave={(e) => isMouseDefault(e)}
            onMouseMove={(e) => isMouseMove(e)}
          >
            <Splide
              options={{
                updateOnMove: true,
                focus: 0,
                perPage: "auto",
                autoWidth: true,
                arrows: false,
                pagination: false,
                gap: "16px",
                fixedWidth: "264px",
                autoplay: "pause",
                trimSpace: true,
                breakpoints: {
                  mediaQuery: "max",
                  640: {
                    perPage: 1,
                    destroy: true,
                  },
                  1028: {
                    perPage: 3,
                    fixedWidth: "100%",
                  },
                },
              }}
              className={`ca2024SmallTicketsSlider ca2024MobileGrid`}
              aria-label="Coinfest Asia 2024 (Menu Popup - Small Tickets)"
              aria-labelledby="Coinfest Asia 2024 (Menu Popup - Small Tickets)"
            >
              <SplideSlide>
                <SmallTickets
                  url="https://ticket.coinfest.asia/?add-to-cart=9591988800"
                  title="Festival Ticket"
                  price="150"
                />
              </SplideSlide>
              <SplideSlide>
                <SmallTickets
                  type="GROUP"
                  url="https://ticket.coinfest.asia/?add-to-cart=9590951107&quantity=5&coupon=ca24grouppackage"
                  title="Group Package"
                  price="600"
                />
              </SplideSlide>
              <SplideSlide>
                <SmallTickets
                  type="VIP"
                  url="https://ticket.coinfest.asia/?add-to-cart=3613"
                  title="Bull Ticket"
                  price="700"
                />
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerTickets;
