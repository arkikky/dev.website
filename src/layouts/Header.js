import React, { useRef, useEffect } from "react";

const Header = () => {
  const isVideo = useRef(null);

  useEffect(() => {
    if (isVideo.current) {
      isVideo.current.play();
    }

    return () => {
      undefined;
    };
  }, [isVideo]);

  return (
    <>
      <header className="snap-start snap-always relative h-svh xl:h-screen min-h-svh xl:min-h-screen z-[5]">
        {/* @indikator */}
        <div className="ca2024GrpBxShadow flex flex-col items-center justify-center absolute top-auto bottom-28 sm:bottom-[142px] inset-0 mx-auto w-max z-[2]">
          <div className="bg-white/50 rounded-[10px] flex flex-col items-center justify-center h-10 w-10">
            <div className="ca2024ScrolldownIcns">
              <div className="ca2024ScrolldownIcns-Indiktr motion-safe:animate-bounce"></div>
            </div>
          </div>
          <span className="text-white font-bevietnamPro text-base font-medium mt-4">
            Scroll to view more
          </span>
        </div>

        {/* @content */}
        <div className="ca2024BgVideo absolute inset-y-0 inset-x-0 pointer-events-none z-px">
          <video
            ref={isVideo}
            id="ca2024VideoHeaderApp"
            __idm_id__="true"
            className="aspect-video object-cover object-center h-full w-full"
            preload="auto"
            muted
            autoPlay
            loop
            playsInline
          >
            <source src={"/assets/video/ca2024HeroApp.mp4"} type="video/mp4" />
          </video>
        </div>
      </header>
    </>
  );
};

export default Header;
