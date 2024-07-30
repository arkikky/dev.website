import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
// import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const CoinfestWeekCard = ({
  imageUrl,
  alt,
  title = "Bite, Brews, and Blockchain",
  time = "COMING SOON",
  labelRsvp,
  rsvpUrl = "",
  disable = false,
  hidden = false,
  children,
}) => {
  const { ref, inView } = useInView({
    threshold: 1,
    rootMargin: "10% 0% -15% 0%",
  });
  const [isLoading, setLoading] = useState(false);

  //  @init
  const addImage = imageUrl
    ? imageUrl
    : "/assets/images/coinfest-week/ca2024CoinfestWeek-General.png";
  const isAlt = alt ? alt : "(Coinfest Week Brand)";
  const isLabelRSVP = labelRsvp ? labelRsvp : "RSVP";

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
        className={`relative inline-flex w-full items-center justify-center rounded-[14px] ${disable === true || rsvpUrl === "" ? "bg-[#788090]" : "bg-secondary"} px-5 py-4 font-bevietnamPro text-sm font-normal leading-initial text-white outline-none last:mr-0 focus-visible:outline-none sm:text-base lg:px-6 lg:py-5`}
      >
        {rsvpUrl !== "" ? isLabelRSVP : "COMING SOON"}
        {rsvpUrl !== "" && (
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
        )}
      </div>
    );
  };

  return (
    <>
      <div
        // className={`col-span-1 flex h-full flex-col overflow-hidden rounded-lg border border-solid border-[#C6C6C6]/40`}
        className={`col-span-1 flex h-full flex-col overflow-hidden rounded-lg`}
      >
        <div ref={ref} className={`relative h-auto w-full bg-[#C6C6C6]`}>
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
            <div className="flex h-[189px] w-full animate-pulse flex-col items-center justify-center bg-black-900 sm:h-[169px] lg:h-[149px] xl:h-[159px] 2xl:h-[201px]">
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
            <div className="flex flex-col gap-y-1">
              <span
                className={`flex text-sm font-normal text-[#6E7383] sm:text-base`}
              >
                <svg
                  className="mr-1.5 h-5 w-5 sm:h-6 sm:w-6"
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

                {dayjs(time, "Asia/Makassar").format("h A")}
              </span>
              <span
                className={`flex text-sm font-normal text-[#6E7383] sm:text-base`}
              >
                <svg
                  className="mr-1.5 h-5 w-5 sm:h-6 sm:w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7 1.25C7.41421 1.25 7.75 1.58579 7.75 2V3.25H16.25V2C16.25 1.58579 16.5858 1.25 17 1.25C17.4142 1.25 17.75 1.58579 17.75 2V3.25996C17.9078 3.26443 18.055 3.2709 18.1925 3.28029C18.6491 3.31144 19.0528 3.37711 19.4351 3.53545C20.3539 3.91605 21.0839 4.64608 21.4645 5.56494C21.6229 5.94721 21.6886 6.35092 21.7197 6.80748C21.75 7.25148 21.75 7.79704 21.75 8.47336V17.5266C21.75 18.203 21.75 18.7485 21.7197 19.1925C21.6886 19.6491 21.6229 20.0528 21.4645 20.4351C21.0839 21.3539 20.3539 22.0839 19.4351 22.4645C19.0528 22.6229 18.6491 22.6886 18.1925 22.7197C17.7485 22.75 17.203 22.75 16.5266 22.75H7.47336C6.79704 22.75 6.25148 22.75 5.80748 22.7197C5.35092 22.6886 4.94721 22.6229 4.56494 22.4645C3.64608 22.0839 2.91605 21.3539 2.53545 20.4351C2.37711 20.0528 2.31144 19.6491 2.28029 19.1925C2.24999 18.7485 2.25 18.203 2.25 17.5266V8.47337C2.25 7.79705 2.24999 7.25149 2.28029 6.80748C2.31144 6.35092 2.37711 5.94721 2.53545 5.56494C2.91605 4.64608 3.64608 3.91605 4.56494 3.53545C4.94721 3.37711 5.35092 3.31144 5.80748 3.28029C5.94496 3.2709 6.09218 3.26443 6.25 3.25996V2C6.25 1.58579 6.58579 1.25 7 1.25ZM3.75 10.75V17.5C3.75 18.2092 3.75041 18.7035 3.77681 19.0904C3.80275 19.4706 3.85125 19.692 3.92127 19.861C4.14963 20.4124 4.58765 20.8504 5.13896 21.0787C5.308 21.1487 5.5294 21.1973 5.90959 21.2232C6.29651 21.2496 6.79083 21.25 7.5 21.25H16.5C17.2092 21.25 17.7035 21.2496 18.0904 21.2232C18.4706 21.1973 18.692 21.1487 18.861 21.0787C19.4124 20.8504 19.8504 20.4124 20.0787 19.861C20.1487 19.692 20.1973 19.4706 20.2232 19.0904C20.2496 18.7035 20.25 18.2092 20.25 17.5V10.75H3.75ZM16.5 4.75C17.017 4.75 17.4198 4.75022 17.75 4.76056V6C17.75 6.41421 17.4142 6.75 17 6.75C16.5858 6.75 16.25 6.41421 16.25 6V4.75H16.5ZM7.75 4.75H7.5C6.98304 4.75 6.58024 4.75022 6.25 4.76056V6C6.25 6.41421 6.58579 6.75 7 6.75C7.41421 6.75 7.75 6.41421 7.75 6V4.75Z"
                    fill="#6E7383"
                  />
                </svg>

                {dayjs(time, "Asia/Makassar").format("DD MMMM YYYY")}
              </span>
            </div>
          </div>

          <div className="mt-4 flex flex-col justify-end">
            {disable || rsvpUrl === "" ? (
              <>{isCoinfestWeek()}</>
            ) : (
              <Link
                title={`Coinfest Asia 2024 (Button Coinfest Week - ${title})`}
                href={rsvpUrl}
              >
                {isCoinfestWeek()}
              </Link>
            )}

            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default CoinfestWeekCard;
