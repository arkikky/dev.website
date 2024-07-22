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
            <span
              className={`flex text-sm font-normal text-[#6E7383] sm:text-base`}
            >
              <svg
                className="mr-1.5 h-5 w-5 sm:h-6 sm:w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                fill={"none"}
              >
                <path
                  d="M18.952 8.60657L21.4622 8.45376C19.6629 3.70477 14.497 0.999914 9.4604 2.34474C4.09599 3.77711 0.909631 9.26107 2.34347 14.5935C3.77731 19.926 9.28839 23.0876 14.6528 21.6553C18.6358 20.5917 21.4181 17.2946 22 13.4844"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 8V12L14 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {dayjs(time).format("h A")}
            </span>
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
