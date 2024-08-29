import React, { useEffect, useRef, useState } from "react";
import getConfig from "next/config";
//ui
import { XMarkIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Container from "@components23/Container";
import ImagesFill from "../ImagesFill";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
const { publicRuntimeConfig } = getConfig();

const Speaker = ({ attributes }) => {
  const name = attributes.Name ? attributes.Name : "Coming Soon";
  const companyLogo =
    attributes.companyLogo.data !== null
      ? process.env.NEXT_PUBLIC_UPLOAD +
        attributes.companyLogo.data.attributes.url
      : "";

  const mobileLogo =
    attributes.mobileLogo.data !== null
      ? process.env.NEXT_PUBLIC_UPLOAD +
        attributes.mobileLogo.data.attributes.url
      : "";
  const company =
    attributes.companyLogo.data !== null
      ? attributes.companyLogo.data.attributes.name
      : "Logo";
  const position = attributes.Position ? attributes.Position : "Coming Soon";
  const profilePic =
    attributes.profilePicture.data !== null
      ? process.env.NEXT_PUBLIC_UPLOAD +
        attributes.profilePicture.data.attributes.url
      : "";
  const shortBio = attributes.shortBio2
    ? attributes.shortBio2
    : attributes.shortBio !== ""
    ? attributes.shortBio
    : "Coming Soon";
  const meetConnect =
    attributes.connectWithMe !== "" ? attributes.connectWithMe : "Coming Soon";
  const coloredLogo =
    attributes.coloredLogo.data !== null
      ? process.env.NEXT_PUBLIC_UPLOAD +
        attributes.coloredLogo.data.attributes.url
      : "";
  const coloredMobile =
    attributes.coloredMobile.data !== null
      ? process.env.NEXT_PUBLIC_UPLOAD +
        attributes.coloredMobile.data.attributes.url
      : "";

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
        className="card relative cursor-pointer col-span-2 h-[195px] min-[450px]:h-[300px] sm:h-[220px] lg:h-[296px] group bg-[#D9DCE4] hover:bg-[#2458F1] rounded-2xl"
        onClick={handleCardClick}
      >
        <ImagesFill
          className=" rounded-2xl h-full w-full overflow-hidden z-10 mix-blend-luminosity group-hover:mix-blend-multiply "
          src={profilePic}
          alt={name}
          priority={true}
        />
        <div className="hidden group-hover:flex absolute inset-0 z-20 justify-center items-center rounded-2xl">
          <h3 className="text-[#FFC600] font-bold">SEE DETAILS</h3>
        </div>
        <div className="absolute w-full h-full z-20 inset-0 flex flex-col justify-end rounded-2xl">
          <div className="bg-gradient-to-t from-black-900 to-transparant pb-6 pt-4 px-4 rounded-2xl">
            <h3 className="text-white font-bold text-base lg:text-xl">
              {name}
            </h3>
            <div className="w-full relative  ">
              {mobileLogo && (
                <Image
                  className="w-full h-full sm:hidden "
                  src={mobileLogo}
                  alt={company}
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
              )}
              {companyLogo && (
                <Image
                  className="w-full h-full hidden sm:block "
                  src={companyLogo}
                  alt={company}
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
              )}

              {/* <Image
                    className="object-cover object-center my-auto  h-auto min-h-[auto] max-h-max sm:max-h-[28px] w-auto hidden md:block"
                    src={companyLogo}
                    alt={company}
                    sizes="(min-width: 1874px) 246vw,
                          (min-width: 1536px) 257vw,
                          (min-width: 1280px) 313vw,
                          (min-width: 1024px) 395vw,
                          (min-width: 640px) 631vw,
                          1005vw"
                          height={140}
                          width={220}
                          quality="87"/> */}
              {/* <Image
                    className="w-full h-full md:hidden"
                    src={logoMobile}
                    alt={company}
                    sizes="(min-width: 1874px) 246vw,
                          (min-width: 1536px) 257vw,
                          (min-width: 1280px) 313vw,
                          (min-width: 1024px) 395vw,
                          (min-width: 640px) 631vw,
                          1005vw"
                          height={140}
                          width={220}
                          quality="87"/> */}
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal fixed inset-0 flex items-end sm:items-center justify-center z-lg top-0 left-0 bg-[#101010]/50">
          <div className={"flex items-center justify-center sm:container"}>
            <div
              className="absolute w-full h-full z-[20] "
              onClick={handleModalClick}
              ref={modalRef}
            ></div>
            <div className="modal-content bg-white py-4 px-4 sm:py-6 sm:px-10 rounded-lg w-full sm:w-4/5 lg:w-3/5 z-lg flex flex-col gap-y-4 z-[20] relative ">
              <div className="flex items-start justify-end ">
                <XMarkIcon
                  className="fill-current text-black h-6 w-6 cursor-pointer"
                  onClick={handleCardClick}
                />
              </div>
              <div className="flex gap-x-4">
                <Image
                  className="object-cover object-center my-auto h-[116px] w-[100px]  sm:h-[180px]  sm:w-[156px] rounded-xl"
                  src={profilePic}
                  alt={name}
                  height={180}
                  width={156}
                />
                {/* <ImagesFill 
                  className={"h-[148px] w-[148px] rounded-xl"}
                  src={profilePic}
                  alt={name}
                  priority={true}
                /> */}
                <div className="flex flex-col justify-between py-2 w-full">
                  <div className="SpeakerInfo">
                    <h3 className="font-bold text-base sm:text-xl">{name}</h3>
                    <p className="text-sm sm:text-base font-normal">
                      {position}
                    </p>
                  </div>
                  {coloredLogo && (
                    <div className={`w-[265px] relative hidden sm:block `}>
                      <Image
                        className="w-full h-full"
                        src={coloredLogo}
                        alt={company}
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
                  )}

                  {coloredLogo && (
                    <div className="w-[190px]  relative  sm:hidden ">
                      <Image
                        className="w-full h-full"
                        src={coloredMobile}
                        alt={company}
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
                  )}
                </div>
              </div>
              {attributes.shortBio2 ? (
                <ReactMarkdown children={shortBio} />
              ) : (
                <p>{shortBio}</p>
              )}
              {meetConnect && (
                <div className="bg-[#E3E8F6] p-3 flex flex-col gap-y-2 rounded-lg">
                  <h4 className="font-semibold">
                    Why Connect With Me at Coinfest Asia?
                  </h4>
                  <p>{meetConnect}</p>
                </div>
              )}
              {/* Disabled first until there are data */}
              {/* <span className="border-t"></span>
                <div className="flex flex-col gap-y-2">
                  <h4 className="font-semibold underline">Speaking Topics</h4>
                  <p>Jeth Soetoyo is the co-founder and CEO of Figma. Dylan studied computer science and mathematics at Brown University where he and his co-founder, Evan Wallace, first started experimenting with design tools built on (and for) the web. With funding from a Thiel fellowship, they began Figma.
                  Prior to Figma, Dylan interned at O'Reilly Media, LinkedIn, and Flipboard.</p>
                </div> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Speaker;
