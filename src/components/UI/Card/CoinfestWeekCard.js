import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
// import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const CoinfestWeekCard = ({
  imageUrl,
  alt,
  title = "Bite, Brews, and Blockchain",
  time = "12:00 PM - 4:00PM",
  labelRsvp,
  rsvpUrl = "",
  desc,
  headline,
  date,
  location,
  locationUrl = false,
  disable = false,
  hidden = false,
}) => {
  const { ref, inView } = useInView({
    threshold: 1,
    rootMargin: "10% 0% -15% 0%",
  });
  const [isLoading, setLoading] = useState(false);

  //  @init
  const addImage = imageUrl
    ? imageUrl
    : "/2023/assets/images/coinfest-week/Thumbnail-Default.jpg";
  const addHeadline = headline
    ? headline
    : "Bites, Brews, and Blockchain: Web3 Networking Event by AWS";
  const isAlt = alt ? alt : "(Coinfest Week Brand)";
  const isLabelRSVP = labelRsvp ? labelRsvp : "RSVP";
  const addDesc = desc
    ? desc
    : "Grab a bite, brew your drink, and expand your blockchain network in a vibrant atmosphere with AWS.";
  const addDate = date ? date : "23 August 2023";
  const addLocation = location ? location : "";

  // @intersection-observer
  useEffect(() => {
    if (inView) {
      setLoading(true);
    }

    return () => {
      undefined;
    };
  }, [inView]);

  const isCoinfestWeek = () => {
    return (
      <div
        className={`relative inline-flex w-full items-center justify-center rounded-[14px] ${disable ? "bg-[#788090]" : "bg-secondary"} px-5 py-4 font-bevietnamPro text-sm font-normal leading-initial text-white outline-none last:mr-0 focus-visible:outline-none sm:text-base lg:px-6 lg:py-5`}
      >
        {isLabelRSVP}
        <svg
          className="ml-0.5 h-6 w-6"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.75 17L17.75 7"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.75 7H17.75V17"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  };

  return (
    <>
      <div
        className={`col-span-1 flex h-full flex-col overflow-hidden rounded-lg border border-solid border-[#C6C6C6]/40`}
      >
        <div ref={ref} className={`relative h-[170px] w-full bg-[#C6C6C6]`}>
          {isLoading ? (
            <Image
              className="h-full w-full object-cover"
              src={addImage}
              alt={`Coinfest Asia 2024 ${isAlt}`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              width={684}
              height={260}
              quality="87"
            />
          ) : (
            <div className="flex h-full w-full animate-pulse flex-col items-center justify-center bg-black-900">
              <div
                className="inline-block size-8 animate-spin rounded-full border-2 border-current border-t-transparent text-white"
                role="status"
                aria-label="loading"
              >
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-grow flex-col justify-between gap-y-4 px-4 py-4">
          <div className="flex flex-col">
            <h3 className="mb-2 font-bevietnamPro text-base font-semibold">
              {title}
            </h3>
            <span
              className={`flex text-sm font-normal text-[#6E7383] sm:text-base`}
            >
              <svg
                className="mr-1 h-6 w-6"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="#6E7383"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {time}
            </span>
          </div>

          <div className="mt-4 flex flex-col justify-end">
            {disable ? (
              <>{isCoinfestWeek()}</>
            ) : (
              <Link
                title={`Coinfest Asia 2024 (Button Coinfest Week - ${title})`}
                href={rsvpUrl}
              >
                {isCoinfestWeek()}
              </Link>
            )}

            {/* <Buttons
              typeBtn={`${disable ? "btn-disabled" : "btn-blank-link"}`}
              url={isRSVP}
              label={isLabelRSVP}
              variants={`${disable ? "" : "btn-primary"}`}
              rounded="base"
              text="base"
              withIcons={true}
              positionIcons="right"
              position="center"
              aria-label="rsvp"
              className={`w-full  rounded-lg  font-bold ${
                disable ? "bg-gray-300 text-white" : ""
              }`}
            >
              <ArrowUpRightIcon className="h-6 w-6" />
            </Buttons> */}
            <button
              className={`relative inline-flex w-full items-center justify-center rounded-[14px] bg-transparent px-5 pb-2 pt-4 font-bevietnamPro text-sm font-normal leading-initial text-secondary outline-none last:mr-0 hover:underline focus-visible:outline-none sm:pt-5 sm:text-base lg:px-6`}
              aria-label="Coinfest Asia 2024 (Coinfest Week Modal)"
            >
              See details
            </button>
            {/* <div
              typeBtn="btn-blank-link"
              label="See details"
              variants=""
              rounded="base"
              text="base"
              position="center"
              aria-label="btnSbmtYourSideEvent"
              className=""
            ></div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CoinfestWeekCard;
