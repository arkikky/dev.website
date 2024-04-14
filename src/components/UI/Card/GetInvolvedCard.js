import React from "react";
import Link from "next/link";

const GetInvolvedCard = ({
  bgColor = "bg-white",
  btnColor = "bg-secondary",
  url = "",
  title = "Sponsors",
  page = false,
  shortDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
}) => {
  return (
    <>
      <div
        className={`${bgColor} flex flex-col rounded-xl px-6 py-6 sm:px-8 sm:py-8`}
      >
        <h2
          className={`${
            bgColor === "bg-secondary" ? "text-white" : "text-black-900"
          } font-bevietnamPro text-2xl font-semibold`}
        >
          {title}
        </h2>
        <p
          className={`${
            bgColor === "bg-secondary" ? "text-white" : "text-[#727272]"
          } mt-2 font-bevietnamPro text-base font-light`}
        >
          {shortDesc}
        </p>
        {page === true ? (
          <Link
            className={`${btnColor} ca2024BgOverflayColor inline-flex items-center justify-center rounded-full brightness-[1.2] ${
              btnColor === "bg-primary"
                ? "text-black-900"
                : btnColor === "bg-[#6AF0E4]"
                  ? "text-black-900"
                  : "text-white"
            } relative mt-6 w-max px-6 py-4 font-bevietnamPro text-sm font-medium outline-none focus-visible:outline-none sm:text-base`}
            href={"/get-involved" + url}
          >
            Apply Now
          </Link>
        ) : (
          <Link
            className={`${btnColor} ca2024BgOverflayColor inline-flex items-center justify-center rounded-full brightness-[1.2] ${
              btnColor === "bg-primary"
                ? "text-black-900"
                : btnColor === "bg-[#6AF0E4]"
                  ? "text-black-900"
                  : "text-white"
            } relative mt-6 w-max px-6 py-4 font-bevietnamPro text-sm font-medium outline-none focus-visible:outline-none sm:text-base`}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply Now
          </Link>
        )}
      </div>
    </>
  );
};

export default GetInvolvedCard;
