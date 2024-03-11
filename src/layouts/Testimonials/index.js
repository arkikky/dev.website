import React, { useRef, useState } from "react";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";

// @style-css
import "@splidejs/react-splide/css/core";

// @components
import Container from "@components/Container";

const Testimonials = () => {
  const [intGrabDown, setGrabDown] = useState(false);

  //  @mouse (grab)
  const intMouseDown = (e) => {
    e.preventDefault();

    setGrabDown(true);
  };

  const intMouseDefault = (e) => {
    e.preventDefault();

    setGrabDown(false);
  };

  const intMouseMove = (e) => {
    if (!intGrabDown) return;
    e.preventDefault();

    setGrabDown(true);
  };

  return (
    <>
      <div className="ca2024Testimonials bg-white snap-always snap-start flex flex-col items-center justify-center overflow-hidden relative h-svh xl:h-screen min-h-svh xl:min-h-screen">
        {/* <div className="ca2024TestimonialsPointTop bg-transparent absolute top-10 bottom-auto inset-x-0 h-14 w-full select-none pointer-events-none z-px transition duration-[0.8s] ease-linear"></div> */}

        <div className="ca2024TestimonialsBackdrop absolute inset-y-0 inset-x-0 opacity-1 z-px">
          <Image
            className="object-center object-cover mx-auto h-full w-full z-10"
            src={"/assets/images/backdrop/ca2024BgLine.jpg"}
            alt={`Coinfest Asia 2024 (Background Testimonials - Backdrop)`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            height={900}
            width={1440}
            loading="lazy"
            quality="87"
          />
        </div>

        {/* @content */}
        <div
          className={`${
            intGrabDown === true ? "cursor-grabbing" : "cursor-grab"
          } flex flex-col relative -mt-5 w-full z-[22]`}
          onMouseDown={(e) => intMouseDown(e)}
          onMouseUp={(e) => intMouseDefault(e)}
          onMouseLeave={(e) => intMouseDefault(e)}
          onMouseMove={(e) => intMouseMove(e)}
        >
          <Container>adawda</Container>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
