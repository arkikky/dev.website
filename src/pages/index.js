import Image from "next/image";
import React, { useRef, useEffect } from "react";
import ReactPlayer from "react-player";
// import Vid from "./video/ca2024HeroSection.mp4";

export default function Home() {
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
      <main
        className={`flex flex-col items-center overflow-y-auto snap-y snap-mandatory relative justify-between h-[100svh]`}
      >
        <div className=" snap-start bg-green-500 h-full min-h-[100dvh] max-h-[100dvh] relative w-full">
          <div className="absolute inset-y-0 inset-x-0">
            {/* <ReactPlayer
              playing={true}
              loop={true}
              // url={Vid}
              width="100%"
              height="100%"
              playsinline={true}
            /> */}
            <video
              ref={isVideo}
              id="ca2024VideoHeader"
              __idm_id__="true"
              preload="auto"
              className="aspect-video object-cover object-center h-full w-full"
              muted
              autoPlay
              loop
              playsInline
            >
              <source src={"/ca2024HeroSection.mp4"} type="video/mp4" />
            </video>
          </div>
          <div className="bg-blue-500 absolute bottom-[11rem] top-auto inset-x-0 mx-auto h-[49px] w-full max-w-[80px]">
            awdaw
          </div>
        </div>
        <div className=" snap-start bg-gray-500 h-full min-h-[100svh] sm:min-h-screen max-h-[100svh] w-full">
          awdaw
        </div>
        <div className=" snap-start bg-blue-500 h-full min-h-[dvh] sm:min-h-screen w-full">
          wadwad
        </div>
        <div className="bg-red-500 fixed bottom-14 top-auto inset-x-0 mx-auto h-[79px] w-full max-w-[880px]">
          awdaw
        </div>
      </main>
    </>
  );
}
