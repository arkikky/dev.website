import React from "react";

const YouTubeEmbed = ({
  videoTitle = "Highlights - Coinfest Asia Recap",
  videoUrl = "https://www.youtube.com/embed/-ENpdcDe8ZY?si=bseL5C9CZPjGamXB",
}) => {
  return (
    <>
      <iframe
        className="object-cover object-center aspect-video h-full w-full"
        src={`${videoUrl}`}
        title={videoTitle}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </>
  );
};
export default YouTubeEmbed;
