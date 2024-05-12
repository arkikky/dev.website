import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const PromoCode = ({
  title = "HALVING DAY MEANS HALF TICKET PRICE!",
  shortDesc = "Secure your ticket by redeeming this code: CA24HALVINGDAY",
}) => {
  const [showPopUp, setShowPopUp] = useState(false);

  // @frist-popup
  useEffect(() => {
    setShowPopUp(true);

    const timeout = setTimeout(() => {
      setShowPopUp(false);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  // @handle-popup
  const handleHidePopUp = (e) => {
    e.preventDefault();

    setShowPopUp(false);
  };

  return (
    <>
      <section
        className={`fixed inset-x-4 bottom-[108px] top-auto flex w-auto transform flex-col items-start justify-start rounded-[14px] bg-secondary px-4 py-4 shadow-2xl sm:bottom-[148px] sm:left-4 sm:right-auto sm:w-[396px] lg:left-8  ${
          showPopUp === true
            ? "z-[38] translate-y-0 opacity-100"
            : "-z-px translate-y-6 opacity-0"
        } transition-all duration-300 ease-in-out`}
      >
        <button
          id="closePopUp"
          className="absolute -right-3 -top-3 bottom-0 left-auto z-[6] flex h-8 w-8 flex-col items-center justify-center rounded-full bg-[#AFAFAF] sm:-right-4 sm:-top-4"
          aria-label={`Close Button PopUp PromoCode)`}
          aria-labelledby={`Close Button PopUp PromoCode)`}
          onClick={(e) => {
            handleHidePopUp(e);
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.66602 1.66663L12.3327 12.3333M1.66602 12.3333L12.3327 1.66663L1.66602 12.3333Z"
              stroke="white"
              strokeWidth="1.77778"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="absolute inset-x-0 inset-y-0 z-[5] flex flex-col overflow-hidden rounded-[14px]">
          <Image
            className="mx-auto my-auto h-full w-full object-cover"
            src="/assets/images/backdrop/background/ca2024BgPopUp.png"
            alt="Coinfest Asia 2024 (Background PopUp Promo Code)"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            height={218}
            width={396}
            quality="87"
          />
        </div>

        {/* @content */}
        <div className="relative z-[5] flex flex-col">
          <h3 className="z-[6] pr-6 font-bevietnamPro text-sm font-bold text-white sm:text-xl">
            {title}
          </h3>
          <p className="z-[6] mt-2 font-bevietnamPro text-sm font-light text-white prose-strong:font-semibold sm:text-base">
            Secure your ticket by redeeming this code:{" "}
            <strong>CA24HALVINGDAY</strong>
          </p>
          <Link
            className="relative z-[6] mt-6 inline-flex w-full items-center justify-center rounded-lg bg-black-900 px-6 py-4 font-bevietnamPro text-sm font-medium text-white outline-none focus-visible:outline-none sm:mt-4"
            href={
              "https://ticket.coinfest.asia/cart/?add-to-cart=5232&coupon=CA24HALVINGDAY"
            }
            target="_blank"
          >
            Claim my Code
            <svg
              className="ml-1 h-6 w-6 sm:h-8 sm:w-8"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.66602 16.0013H23.3327M23.3327 16.0013L17.2151 10.668M23.3327 16.0013L17.2151 21.3346"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
};

export default PromoCode;
