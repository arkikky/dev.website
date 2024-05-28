import React from "react";
import Link from "next/link";

// @components
import BannerTickets from "@components/UI/Card/BannerTickets";

const MenuPopUp = ({
  menu = false,
  label = "",
  rounded = true,
  options = [],
}) => {
  const isClosePopNav = (e) => {
    e.preventDefault();

    const elBckdrpPopNav = document.querySelector(".ca2024BckdrpBnnrPopNav");
    const elmtPopUpAll = document.querySelectorAll(".ca2024PopUpNav");

    if (elBckdrpPopNav) {
      elBckdrpPopNav.classList.add("nonActive");
    }

    elmtPopUpAll.forEach((elmnt) => {
      console.log(elmnt);
      elmnt.classList.add("nonActive");
    });
  };

  return (
    <>
      <div
        className={`ca2024PopUpNav ca2024PopUpNav ca2024${label} nonActive absolute inset-x-0 bottom-full top-auto mx-auto hidden w-full max-w-[645px] transition-all duration-[0.5s] ease-in-out sm:block lg:max-w-[695px]`}
      >
        <button
          id={`ca2024BtnClosePopUpNav${label}`}
          className="relative mb-3 flex h-10 w-10 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl bg-white outline-none focus-visible:outline-none"
          aria-label={`Button Banner PopUp (${label})`}
          onClick={(e) => {
            isClosePopNav(e);
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z"
              fill="black"
            />
          </svg>
        </button>

        <div
          className={`flex flex-col items-start justify-start overflow-hidden rounded-t-2xl ${menu === true && "bg-secondary"}`}
        >
          {menu === true && (
            <ul className="pt- flex w-full flex-col bg-secondary">
              {options?.map((gtRslt, i) => (
                <li key={i}>
                  {gtRslt.type === "page" ? (
                    <Link
                      className="flex flex-col border-b border-solid border-white px-6 py-4 font-staraSemiBold text-xl text-white"
                      href={gtRslt.url}
                    >
                      {gtRslt.label}
                    </Link>
                  ) : (
                    <Link
                      className="flex flex-col border-b border-solid border-white px-6 py-4 font-staraSemiBold text-xl text-white"
                      href={gtRslt.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {gtRslt.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          )}

          <BannerTickets rounded={rounded} />
        </div>
      </div>
    </>
  );
};

export default MenuPopUp;
