import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

// @css
import "keen-slider/keen-slider.min.css";

// @components
import Container from "@components/Container";
import TestimonialsCard from "@components/UI/Card/Testimonials";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [isGrab, setGrab] = useState(false);
  const [testimonialsSliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      initial: 0,
      slides: {
        origin: "center",
        perView: 1,
        spacing: 0,
      },
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;

        const clearNextTimeout = () => {
          clearTimeout(timeout);
        };
        const nextTimeout = () => {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 4000);
        };
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });

          nextTimeout();
        });

        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ],
  );

  //  @mouse (grab)
  const isMouseDown = (e) => {
    e.preventDefault();

    setGrab(true);
  };

  const isMouseDefault = (e) => {
    e.preventDefault();

    setGrab(false);
  };

  const isMouseMove = (e) => {
    if (!isGrab) return;
    e.preventDefault();

    setGrab(true);
  };

  return (
    <>
      <div className="ca2024MainPoints ca2024Testimonials ca2024MainScreen relative flex snap-start snap-always flex-col items-center justify-center overflow-hidden bg-white">
        {/* <div className="ca2024TestimonialsPointTop bg-transparent absolute top-10 bottom-auto inset-x-0 h-14 w-full select-none pointer-events-none z-px transition duration-[0.8s] ease-linear"></div> */}

        {/* @background (backdrop) */}
        <div className="ca2024TestimonialsBackdrop opacity-1 absolute inset-x-0 inset-y-0 z-px">
          <Image
            className={`z-10 mx-auto h-full w-full object-cover object-center`}
            src={"/assets/images/backdrop/ca2024BgLine.jpg"}
            alt={`Coinfest Asia 2024 (Background Backdrop Testimonials)`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            height={900}
            width={1440}
            quality="87"
          />
        </div>

        {/* @content */}
        <div className={`relative z-[22] -mt-10 flex w-full flex-col`}>
          <Container>
            <div
              ref={testimonialsSliderRef}
              className={`keen-slider ca2024TestimonialsSlide ${
                isGrab === true ? "cursor-grabbing" : "cursor-grab"
              } `}
              onMouseDown={(e) => isMouseDown(e)}
              onMouseUp={(e) => isMouseDefault(e)}
              onMouseLeave={(e) => isMouseDefault(e)}
              onMouseMove={(e) => isMouseMove(e)}
            >
              <div className="keen-slider__slide number-slide1 flex flex-col items-center justify-center xl:items-start xl:justify-start">
                <TestimonialsCard
                  title="Tom France, Co-Founder Ledger"
                  shortDescription="A great conference in a great setting and to be honest, this is one of the most beautiful settings I’ve been to"
                />
              </div>
              <div className="keen-slider__slide number-slide2 flex flex-col items-center justify-center xl:items-start xl:justify-start">
                <TestimonialsCard
                  title="Karl Mohan, GM APAC Crypto.com"
                  shortDescription="The event has been fantastic, well organized. It has elevated the conversation of crypto, Web3, metaverse, and DeFi that we all believe so strongly. I'm looking forward for Coinfest next year"
                />
              </div>
              <div className="keen-slider__slide number-slide3 flex flex-col items-center justify-center xl:items-start xl:justify-start">
                <TestimonialsCard
                  title="Gwendolyn Regina, Investment Director BNB Chain"
                  shortDescription="What I like the most of Coinfest is I've been able to connect with a diverse range of people and it's very interesting"
                />
              </div>
            </div>
          </Container>
        </div>

        {loaded && instanceRef.current && (
          <div className="dots">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={"dot" + (currentSlide === idx ? " active" : "")}
                ></button>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Testimonials;
