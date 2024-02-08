import React, { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

// @components
// import Loading from "./Loading";

const ImagesLoader = ({ classNamee, images, alt, height, width }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    trackVisibility: true,
    delay: 200,
    rootMargin: "100px 0px",
  });
  const [isLoading, setLoading] = useState(false);

  const isClassName = classNamee
    ? `${classNamee} absolute inset-y-0 inset-x-0`
    : undefined;
  const isSrc = images ? images : "none";
  const isAlt = alt ? alt : "none";
  const isHeight = height ? height : "0";
  const isWidth = width ? width : "0";

  return <>awdawd</>;
};

export default ImagesLoader;
