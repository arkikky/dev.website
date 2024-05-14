import React, { useRef, useEffect } from "react";

const VideoBackground = (props) => {
  const isVideo = useRef();

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
      <div className="ca2024VideoBackground pointer-events-none absolute inset-x-0 inset-y-0">
        <video
          ref={isVideo}
          id="ca2024VideoHeader"
          __idm_id__="true"
          preload="auto"
          className="aspect-video h-full w-full object-cover object-center"
          muted
          autoPlay
          loop
          playsInline
        >
          <source
            src={"/assets/video/ca2024HeroSection.mp4"}
            type="video/mp4"
          />
        </video>
      </div>
    </>
  );
};

export default VideoBackground;
