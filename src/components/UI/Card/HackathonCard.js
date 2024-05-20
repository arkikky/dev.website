import React from "react";
import Image from "next/image";
import Link from "next/link";

const HackathonCard = () => {
  return (
    <>
      <div className="relative flex h-[454px] flex-col items-start justify-end overflow-hidden rounded-3xl bg-[#2B2B2B] px-3 py-3 lg:h-[654px] lg:rounded-[26px] lg:px-6 lg:py-6 xl:h-[872px]">
        <div className=" absolute inset-x-0 inset-y-0 z-px">
          <Image
            className="mx-auto h-full w-full object-cover object-center"
            src={
              "/assets/images/backdrop/background/ca2024BgLineBlack-HackathonCard.png"
            }
            alt={`Coinfest Asia 2024 (Default Hackathon Card)`}
            height={363}
            width={576}
            quality="87"
          />
        </div>

        <div className="relative z-[5] flex w-full flex-col items-start justify-start overflow-hidden rounded-[16px] bg-white px-4 py-4 lg:px-8 lg:py-8">
          <h2 className="font-bevietnamPro text-[45px] font-bold leading-[57px] text-black-900 xl:text-[88px] xl:leading-[102px]">
            $250,000
          </h2>
          <div className="mt-3 flex flex-col sm:mt-6">
            <span className="font-bevietnamPro text-base font-medium text-[#8C8C8C]">
              Tracks hosted by
            </span>
          </div>
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
