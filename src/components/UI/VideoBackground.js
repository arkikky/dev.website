import React, { useRef, useEffect } from "react";
// import ReactPlayer from "react-player";

const VideoBackground = () => {
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
    <div className="ca2024VideoBackground absolute inset-y-0 inset-x-0 pointer-events-none">
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
        <source
          src={
            "https://fybcklahukimaqfaepry.supabase.co/storage/v1/object/public/Documents/ca2024HeroSection.mp4"
          }
          type="video/mp4"
        />
      </video>
      {/* <ReactPlayer
        // ref={isVideo}
        url="https://fybcklahukimaqfaepry.supabase.co/storage/v1/object/public/Documents/ca2024HeroSection.mp4" // Replace with your video URL
        width="100%"
        height="100%"
      /> */}
    </div>
  );
};

export default VideoBackground;
