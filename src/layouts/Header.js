import React, { useEffect } from "react";

// @components
import VideoBackground from "@components/VideoBackground";

const Header = (props) => {
  return (
    <>
      <section className="ca2024MainPoints ca2024HeaderPoints relative z-20 h-svh snap-start snap-always overflow-hidden bg-white">
        <VideoBackground />
      </section>
    </>
  );
};

export default Header;
