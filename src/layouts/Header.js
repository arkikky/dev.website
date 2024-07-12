import React from "react";
import Link from "next/link";

// @components
import VideoBackground from "@components/VideoBackground";

const Header = () => {
  return (
    <>
      <section className="ca2024MainPoints ca2024HeaderPoints relative z-20 flex h-svh flex-col items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-x-0 inset-y-0 z-[6] mx-auto my-auto flex h-max w-full -translate-y-[46px] transform flex-col items-center justify-center text-center sm:w-[579px] xl:w-max">
          <h1 className="font-staraBold text-[40px] font-bold uppercase leading-[48px] text-white sm:text-[64px] sm:leading-[68px]">
            Asia's Largest Web3 Festival
          </h1>
          <span className="ca2024LabelHeader relative mx-auto mt-3 flex w-max flex-col px-3.5 py-2 font-bevietnamPro text-sm font-normal text-white sm:mt-4 sm:text-xl xl:mt-2">
            August 22-23, 2024 — Nuanu, Bali, indonesia
          </span>
          <div className="mt-10">
            <Link
              className={`relative inline-flex w-max cursor-pointer items-center justify-center rounded-[14px] bg-transparent px-3 py-3 font-bevietnamPro text-sm font-medium text-white outline-none last:mr-0 hover:underline focus-visible:outline-none sm:text-base`}
              title="Coinfest Asia 2024 (Get Directions - Venue)"
              href={"/venue"}
            >
              Get Directions
              <svg
                className="ml-1 h-6 w-6 sm:h-8 sm:w-8"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.66602 16.0013H23.3327M23.3327 16.0013L17.2151 10.668M23.3327 16.0013L17.2151 21.3346"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="ca2024GrpBxShadow absolute inset-0 bottom-28 top-auto z-[6] mx-auto flex w-max flex-col items-center justify-center sm:bottom-[119px]">
          <div className="flex h-9 w-9 flex-col items-center justify-center rounded-[8px] bg-white/50">
            <div className="ca2024ScrolldownIcns">
              <div className="ca2024ScrolldownIcns-Indiktr motion-safe:animate-bounce"></div>
            </div>
          </div>
          <span className="mt-2 font-bevietnamPro text-sm font-medium text-white">
            Scroll to view more
          </span>
        </div>

        <VideoBackground />
      </section>
    </>
  );
};

export default Header;
