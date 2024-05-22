import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const CoinfestWeekCard = ({
  alt,
  title,
  time,
  imageUrl,
  rsvp,
  labelRsvp,
  desc,
  headline,
  date,
  location,
  locationUrl = false,
  disable = false,
  hidden = false,
}) => {
  const addImage = imageUrl
    ? imageUrl
    : "/2023/assets/images/coinfest-week/Thumbnail-Default.jpg";
  const addHeadline = headline
    ? headline
    : "Bites, Brews, and Blockchain: Web3 Networking Event by AWS";
  const addAlt = alt ? alt : "Coinfest Week Logo";
  const addTitle = title ? title : "Bite, Brews, and Blockchain";
  const addTime = time ? time : "12:00 PM - 4:00PM ";
  const addRSVP = rsvp ? rsvp : "";
  const addLabelRSVP = labelRsvp ? labelRsvp : "RSVP";
  const addDesc = desc
    ? desc
    : "Grab a bite, brew your drink, and expand your blockchain network in a vibrant atmosphere with AWS.";
  const addDate = date ? date : "23 August 2023";
  const addLocation = location ? location : "";

  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const handleCardClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleModalClick = (e) => {
    if (e.target === modalRef.current) {
      setIsModalOpen(!isModalOpen);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen]);

  return (
    <>
      <div
        className={`col-span-1 flex h-full flex-col overflow-hidden rounded-lg`}
      >
        <div className={`h-auto w-full  ${imageUrl ? "" : "bg-secondary"}`}>
          <Image
            className="h-full w-full object-cover"
            src={addImage}
            alt={addAlt}
            width={684}
            height={260}
            sizes="(min-width: 1874px) 246vw,
                        (min-width: 1536px) 257vw,
                        (min-width: 1280px) 313vw,
                        (min-width: 1024px) 395vw,
                        (min-width: 640px) 631vw,
                        1005vw"
            quality="87"
          />
        </div>
        <div className="flex flex-grow flex-col justify-between gap-y-4 p-4">
          <div className="flex flex-col">
            <h3 className="mb-2 text-base font-bold sm:text-xl">{addTitle}</h3>
            <span
              className={`flex text-sm font-medium text-[#6E7383] sm:text-base `}
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
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              {addTime}
            </span>
          </div>
          <div className="p- mt-auto flex flex-col justify-end">
            <Link
              className={`relative inline-flex w-full items-center justify-center rounded-[14px] bg-secondary px-5 py-4 font-bevietnamPro text-sm font-normal leading-initial text-white outline-none last:mr-0 focus-visible:outline-none sm:text-base lg:px-6 lg:py-5 lg:text-xl`}
              title={`Coinfest Asia 2024 (Button Coinfest Week)`}
              href={addRSVP}
            >
              {addLabelRSVP}
              <svg
                className="h-6 w-6"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.75 17L17.75 7"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.75 7H17.75V17"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>

            {/* <Buttons
              typeBtn={`${disable ? "btn-disabled" : "btn-blank-link"}`}
              url={addRSVP}
              label={addLabelRSVP}
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
              className={`relative inline-flex w-full items-center justify-center rounded-[14px] bg-transparent px-5 py-4 font-bevietnamPro text-sm font-normal leading-initial text-[#C1C1C1] outline-none last:mr-0 focus-visible:outline-none sm:text-base lg:px-6 lg:py-5 lg:text-xl`}
              role="button"
              onClick={handleCardClick}
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
