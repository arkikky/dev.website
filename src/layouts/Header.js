import React from "react";

// @components
import VideoBackground from "@components/VideoBackground";

const Header = () => {
  return (
    <>
      <section className="ca2024MainPoints ca2024HeaderPoints relative z-20 h-svh snap-start snap-always overflow-hidden bg-white">
        <div className="ca2024GrpBxShadow absolute inset-0 bottom-28 top-auto z-px mx-auto flex w-max flex-col items-center justify-center sm:bottom-[142px]">
          <div className="flex h-10 w-10 flex-col items-center justify-center rounded-[10px] bg-white/50">
            <div className="ca2024ScrolldownIcns">
              <div className="ca2024ScrolldownIcns-Indiktr motion-safe:animate-bounce"></div>
            </div>
          </div>
          <span className="mt-4 font-bevietnamPro text-base font-medium text-white">
            Scroll to view more
          </span>
        </div>

        <VideoBackground />
      </section>
    </>
  );
};

export default Header;
