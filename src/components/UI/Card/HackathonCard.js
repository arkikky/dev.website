import React from "react";
import Image from "next/image";
import Link from "next/link";

// @components
import BrandHackathonCard from "@components/UI/Card/BrandHackathonCard";

const HackathonCard = ({
  status = "publish",
  url = "",
  title = "Coming Soon",
  date = "July - August",
  meet = "Offline",
  price = "$0",
  images = "/assets/images/backdrop/background/ca2024BgLineBlack-HackathonCard.png",
  labelButton = "Pre-register now",
  colorButton = status !== "draf" ? "bg-secondary" : "bg-gray-500",
}) => {
  return (
    <>
      <div
        id={`ca2024${title}Hackathons`}
        className={`relative flex h-[474px] flex-col items-start justify-end overflow-hidden rounded-3xl bg-[#2B2B2B] px-3 py-3 sm:h-[498px] lg:h-[654px] lg:rounded-[26px] lg:px-6 lg:py-6 xl:h-[872px]`}
      >
        <div className=" absolute inset-x-0 inset-y-0 z-px">
          <Image
            className="mx-auto h-full w-full object-cover object-center"
            src={images}
            alt={`Coinfest Asia 2024 (${title} - Default Hackathon Card)`}
            height={363}
            width={576}
            quality="87"
          />
        </div>

        <div className="absolute inset-x-3 bottom-auto top-3 z-[2] mb-4 inline-flex w-full flex-row flex-wrap gap-x-1 gap-y-1 lg:hidden xl:gap-x-1.5 xl:gap-y-1.5">
          {status !== "draf" ? (
            <>
              <span className="inline-flex w-max flex-row items-center justify-center rounded-full bg-[#3D3D3D] px-4 py-1 font-bevietnamPro text-sm font-light leading-inherit text-white xl:py-1.5">
                {meet}
              </span>
              <span className="inline-flex w-max flex-row items-center justify-center rounded-full bg-[#3D3D3D] px-4 py-1 font-bevietnamPro text-sm font-light leading-inherit text-white xl:py-1.5">
                {date}
              </span>
            </>
          ) : (
            <span className="inline-flex w-max flex-row items-center justify-center rounded-full bg-[#3D3D3D] px-4 py-1 font-bevietnamPro text-sm font-light leading-inherit text-white xl:py-1.5">
              Coming Soon
            </span>
          )}
        </div>

        <div className="relative z-[5] flex w-full flex-col items-start justify-start overflow-hidden rounded-[16px] bg-white px-4 py-4 xl:px-8 xl:py-8">
          <div className="mb-4 hidden w-full flex-row flex-wrap gap-x-1 gap-y-1 sm:inline-flex xl:gap-x-1.5 xl:gap-y-1.5">
            {status !== "draf" ? (
              <>
                <span className="inline-flex w-max flex-row items-center justify-center rounded-full bg-[#3D3D3D] px-4 py-1 font-bevietnamPro text-sm font-light leading-inherit text-white xl:py-1.5">
                  {meet}
                </span>
                <span className="inline-flex w-max flex-row items-center justify-center rounded-full bg-[#3D3D3D] px-4 py-1 font-bevietnamPro text-sm font-light leading-inherit text-white xl:py-1.5">
                  {date}
                </span>
              </>
            ) : (
              <span className="inline-flex w-max flex-row items-center justify-center rounded-full bg-[#3D3D3D] px-4 py-1 font-bevietnamPro text-sm font-light leading-inherit text-white xl:py-1.5">
                Coming Soon
              </span>
            )}
          </div>

          <h2 className="font-bevietnamPro text-[45px] font-bold leading-[57px] text-black-900 xl:text-[88px] xl:leading-[102px]">
            {price}
          </h2>
          <div className="mt-3 flex flex-col lg:mt-6">
            <span className="mb-2 font-bevietnamPro text-sm font-normal text-[#8C8C8C] sm:font-medium lg:text-base">
              Tracks hosted by
            </span>
            <div className="inline-flex w-full flex-row flex-wrap gap-x-1 gap-y-1">
              {status !== "draf" ? (
                <>
                  <BrandHackathonCard
                    images="/assets/images/activities/hackathon/ca2024Hackathon_Aptos.svg"
                    label="Aptos"
                  />
                  <BrandHackathonCard
                    images="/assets/images/activities/hackathon/ca2024Hackathon_Haqq.svg"
                    label="Haqq"
                  />
                  <BrandHackathonCard
                    images="/assets/images/activities/hackathon/ca2024Hackathon_Lisk.png"
                    label="Lisk"
                  />
                  <BrandHackathonCard
                    images="/assets/images/activities/hackathon/ca2024Hackathon_MantaNetwork.png"
                    label="Manta Network"
                  />
                  <BrandHackathonCard
                    images="/assets/images/activities/hackathon/ca2024Hackathon_AnyManyMore.svg"
                    label="AnyManyMore"
                  />
                </>
              ) : (
                <span>Coming Soon</span>
              )}
            </div>
          </div>
        </div>

        <div className="relative z-[5] mt-3 flex w-full flex-col lg:mt-4">
          <Link
            id={`ca2024Btn${title}Hackathons`}
            className={`relative inline-flex w-full items-center justify-center rounded-[14px] ${colorButton} px-5 py-4 font-bevietnamPro text-sm font-normal leading-initial ${status !== "draf" ? "cursor-pointer text-white" : "cursor-default text-white"} outline-none last:mr-0 focus-visible:outline-none sm:text-base lg:px-6 lg:py-5 lg:text-xl`}
            title={`Coinfest Asia 2024 (${title} - Button Hackathon)`}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {status !== "draf" ? labelButton : "Coming Soon"}
          </Link>
        </div>
        {/* <div className="mt-6 inline-flex w-full flex-row items-center justify-between">
          <Link
            className={`relative mr-2 inline-flex w-fill items-center justify-center rounded-[14px] bg-transparent px-3 py-4 font-bevietnamPro text-base font-normal text-[#616161] outline-none last:mr-0 focus-visible:outline-none sm:px-5 sm:py-5`}
            title={`Coinfest Asia 2024 (${"title"} - Treding Competition)`}
            href={""}
          >
            Learn more
          </Link>
          <Link
            className={`relative inline-flex w-fill items-center justify-center rounded-[14px] bg-secondary px-3 py-4 font-bevietnamPro text-base font-normal text-white outline-none last:mr-0 focus-visible:outline-none sm:px-5 sm:py-5`}
            title={`Coinfest Asia 2024 (${"title"} - Treding Competition)`}
            href={""}
          >
            awd
          </Link>
        </div> */}
      </div>
    </>
  );
};

export default HackathonCard;
