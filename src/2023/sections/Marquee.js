import React from "react";
// import Marquee from "react-fast-marquee";
import getConfig from "next/config";
import dynamic from "next/dynamic";
import Image from "next/image";

// # Get .config
const { publicRuntimeConfig } = getConfig();

// Css
import Marquee from "@styles/components/Marquee.module.css";

const SecMarquee = ({ direction = "left" }) => {
  return (
    <>
      {direction == "left" && (
        <div
          className={`${Marquee.marqueeLeft} inline-flex flex-row overflow-y-hidden mx-0 z-[12]`}
        ></div>
      )}

      {direction == "right" && (
        <div
          className={`${Marquee.marqueeRight} inline-flex flex-row overflow-y-hidden mx-0 z-[12]`}
        ></div>
      )}
    </>
  );
};

export default SecMarquee;
