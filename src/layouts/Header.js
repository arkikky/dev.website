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
  }, []);

  return (
    <>
      <header className="snap-start snap-always relative h-svh min-h-svh z-[5]">
        {/* <div className="flex flex-col items-center justify-center absolute top-auto bottom-28 sm:bottom-[142px] inset-0 mx-auto w-max z-[2]">
          <div className="bg-white/50 rounded-[10px] flex flex-col items-center justify-center h-10 w-10">
            <div className="ca2024ScrolldownIcns">
              <div className="ca2024ScrolldownIcns-Indiktr motion-safe:animate-bounce"></div>
            </div>
          </div>
          <span className="text-white font-bevietnamPro text-base font-medium mt-4">
            Scroll to view more
          </span>
        </div> */}

        <div className="ca2024BgVideo absolute inset-y-0 inset-x-0 pointer-events-none z-px">
          <video
            ref={isVideo}
            id="ca2024VideoHeaderApp"
            className="aspect-video object-cover object-center h-full w-full"
          >
            <source src={"/assets/video/ca2024HeroApp.mp4"} type="video/mp4" />
          </video>
        </div>
      </header>
    </>
  );
};

export default Header;
