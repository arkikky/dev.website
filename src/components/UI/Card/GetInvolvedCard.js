import React from "react";
import Link from "next/link";

const GetInvolvedCard = ({
  bgColor = "bg-white",
  btnColor = "bg-secondary2024",
  url = "",
  title = "Sponsors",
  page = false,
  shortDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
}) => {
  return (
    <>
      <div
        className={`${bgColor} rounded-xl flex flex-col py-6 sm:py-8 px-6 sm:px-8`}
      >
        <h2
          className={`${
            bgColor === "bg-secondary2024" ? "text-white" : "text-black-900"
          } font-bevietnamPro text-2xl font-semibold`}
        >
          {title}
        </h2>
        <p
          className={`${
            bgColor === "bg-secondary2024" ? "text-white" : "text-[#727272]"
          } font-bevietnamPro text-base font-light mt-2`}
        >
          {shortDesc}
        </p>
        {page === true ? (
          <Link
            className={`${btnColor} ca2024BtnOverflayColor inline-flex items-center justify-center rounded-full ${
              btnColor === "bg-[#FFC600]"
                ? "text-black-900"
                : btnColor === "bg-[#6AF0E4]"
                ? "text-black-900"
                : "text-white"
            } font-bevietnamPro text-sm sm:text-base font-medium relative outline-none focus-visible:outline-none mt-6 py-4 px-6 w-max`}
            href={"/get-involved" + url}
          >
            Apply Now
          </Link>
        ) : (
          <Link
            className={`${btnColor} ca2024BtnOverflayColor inline-flex items-center justify-center rounded-full ${
              btnColor === "bg-[#FFC600]"
                ? "text-black-900"
                : btnColor === "bg-[#6AF0E4]"
                ? "text-black-900"
                : "text-white"
            } font-bevietnamPro text-sm sm:text-base font-medium relative outline-none focus-visible:outline-none mt-6 py-4 px-6 w-max`}
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
