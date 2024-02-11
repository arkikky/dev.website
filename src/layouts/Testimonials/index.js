import React, { useRef, useEffect } from "react";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import Image from "next/image";

// @style-css
// import "@splidejs/react-splide/css/core";

// @components
import Container from "@components/Container";

const DefaultTestimonials = () => {
  // const rfMainSplde = useRef(null);

  return (
    <>
      <section className="ca2024SectionAutoScreen ca2024SldeTestimonials bg-white snap-always snap-start flex flex-col items-center justify-center overflow-hidden relative">
        <div className="ca2024SldeTestimonialsPointTop bg-transparent absolute top-10 bottom-auto inset-x-0 h-14 w-full select-none pointer-events-none z-px transition duration-[0.8s] ease-linear"></div>

        <div className="ca2024SldeTestimonialsBackdrop absolute inset-y-0 inset-x-0 opacity-1 z-px transition duration-[1s] ease-out">
          <Image
            className="object-center object-cover mx-auto h-full w-full z-10"
            src={"/2024/assets/images/backdrop/ca2024BgLine.jpg"}
            alt={`Coinfest Asia 2024 (Background Testimonials - Backdrop)`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            height={900}
            width={1440}
            loading="lazy"
            quality="87"
          />
        </div>

        <div className="flex flex-col relative w-full z-[22]">
          <Container>
            <div className="flex flex-col">wada</div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default DefaultTestimonials;
