import React from "react";

// @components
import VideoBackground from "@components/UI/VideoBackground";

const Header = () => {
  return (
    <>
      <header className="ca2024Section snap-always snap-start pointer-events-none relative z-[6]">
        <div className="ca2024GrpBxShadow flex flex-col items-center justify-center absolute top-auto bottom-28 sm:bottom-[142px] inset-0 mx-auto w-max z-px">
          <div className="bg-white/50 rounded-[10px] flex flex-col items-center justify-center h-10 w-10">
            <div className="ca2024ScrolldownIcns">
              <div className="ca2024ScrolldownIcns-Indiktr motion-safe:animate-bounce"></div>
            </div>
          </div>
          <span className="text-white font-bevietnamPro text-base font-medium mt-4">
            Scroll to view more
          </span>
        </div>

        <VideoBackground />
      </header>
    </>
  );
};

export default Header;
