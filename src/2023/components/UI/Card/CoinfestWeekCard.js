import React, { useEffect, useRef, useState } from "react";
import Buttons from "@components23/UI/Buttons";
import Image from "next/image";
// Icons (Heroicons : https://unpkg.com/browse/@heroicons/react@2.0.14/20/solid/)
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import {
  ClockIcon,
  CalendarDaysIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

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
        className={`col-span-1 flex flex-col h-full rounded-lg overflow-hidden`}
      >
        <div className={`w-full h-auto  ${imageUrl ? "" : "bg-primary"}`}>
          <Image
            className="object-cover w-full h-full"
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
        <div className="flex flex-col justify-between flex-grow gap-y-4 p-4">
          <div className="flex flex-col">
            <h3 className="font-bold text-base sm:text-xl mb-2">{addTitle}</h3>
            <span
              className={`flex text-[#6E7383] text-sm sm:text-base font-medium `}
            >
              <ClockIcon className="w-6 h-6 mr-1 " />
              {addTime}
            </span>
          </div>
          <div className="flex flex-col justify-end mt-auto p-">
            <Buttons
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
              className={`rounded-lg  font-bold  w-full ${
                disable ? "bg-gray-300 text-white" : ""
              }`}
            >
              <ArrowUpRightIcon className="w-6 h-6" />
            </Buttons>
            <button
              className={
                "rounded-lg  w-full text-primary font-normal btn-white btn btn-base"
              }
              role="button"
              onClick={handleCardClick}
            >
              See details
            </button>
            <div
              typeBtn="btn-blank-link"
              label="See details"
              variants=""
              rounded="base"
              text="base"
              position="center"
              aria-label="btnSbmtYourSideEvent"
              className=""
            ></div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal fixed inset-0 flex items-center justify-center z-lg top-0 left-0 bg-[#101010]/50">
          <div className={"flex items-center justify-center sm:container"}>
            <div
              className="absolute w-full h-full z-[20] "
              onClick={handleModalClick}
              ref={modalRef}
            ></div>
            <div className="modal-content bg-white rounded-lg overflow-hidden w-full mx-4 sm:mx-0 sm:w-4/5 lg:w-3/5 z-lg flex flex-col gap-y-4 z-[20] relative ">
              <div className="w-full h-auto ">
                <Image
                  className="w-full h-auto"
                  src={addImage}
                  alt={addAlt}
                  width={0}
                  height={0}
                  sizes="(min-width: 1874px) 246vw,
                        (min-width: 1536px) 257vw,
                        (min-width: 1280px) 313vw,
                        (min-width: 1024px) 395vw,
                        (min-width: 640px) 631vw,
                        1005vw"
                  quality="87"
                />
              </div>
              <div id="cardContent" className="py-4 px-4 sm:py-6 sm:px-6">
                <div className="mb-4">
                  <h1 className="font-bold text-xl mb-2">{addTitle}</h1>
                  <p className="mb-2">
                    <ReactMarkdown children={addDesc} />
                  </p>
                  {locationUrl ? (
                    <Link
                      className={`flex text-[#6E7383] text-sm sm:text-base font-medium `}
                      href={locationUrl}
                    >
                      <MapPinIcon className="w-6 h-6 mr-1 " />
                      {addLocation}
                    </Link>
                  ) : (
                    <span
                      className={`flex text-[#6E7383] text-sm sm:text-base font-medium `}
                    >
                      <MapPinIcon className="w-6 h-6 mr-1 " />
                      {addLocation}
                    </span>
                  )}

                  <span
                    className={`flex text-[#6E7383] text-sm sm:text-base font-medium my-2 `}
                  >
                    <CalendarDaysIcon className="w-6 h-6 mr-1 " />
                    {addDate}
                  </span>
                  <span
                    className={`flex text-[#6E7383] text-sm sm:text-base font-medium `}
                  >
                    <ClockIcon className="w-6 h-6 mr-1 " />
                    {addTime}
                  </span>
                </div>
                <Buttons
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
                  className={`rounded-lg  font-bold  w-full ${
                    disable ? "bg-gray-300 text-white" : ""
                  }`}
                >
                  <ArrowUpRightIcon className="w-6 h-6" />
                </Buttons>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CoinfestWeekCard;
