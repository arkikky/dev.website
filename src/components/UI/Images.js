import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

// @components
import Loading from "@components/UI/Loading";

const ImagesLoader = ({ className, src, alt, height, width, box = false }) => {
  const [ref, inView] = useInView({
    threshold: 1,
    rootMargin: "10% 0% -25% 0%",
  });
  const [isLoading, setLoading] = useState(false);

  const isClassName = className ? `${className}` : undefined;
  const isSrc = src ? src : "none";
  const isAlt = alt ? alt : "none";
  const isHeight = height ? height : "0";
  const isWidth = width ? width : "0";

  // @intersection-observer
  useEffect(() => {
    if (inView) {
      setLoading(true);
    }

    return () => {
      undefined;
    };
  }, [inView]);

  return (
    <>
      <div ref={ref} className={`relative h-full w-full}`}>
        <Image
          className={isClassName}
          src={isSrc}
          alt={isAlt}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          height={isHeight}
          width={isWidth}
          quality="87"
        />
        {/* {isLoading ? (
        ) : (
          <Loading />
        )} */}
      </div>
    </>
  );
};

export default ImagesLoader;
