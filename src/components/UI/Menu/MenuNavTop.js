import React, { useState, useEffect } from "react";
import getConfig from "next/config";
import { useKeenSlider } from "keen-slider/react";
import Link from "next/link";
import Image from "next/image";

// @get .config
const { publicRuntimeConfig } = getConfig();

// @css
import "keen-slider/keen-slider.min.css";

// @lib
import calculateTime from "@lib/utils/calculateTime";

const MenuNavTop = () => {
  const [isLoading, setLoading] = useState(true);
  const [getTimer, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // @loading
  useEffect(() => {
    setLoading(false);

    return () => {
      undefined;
    };
  }, []);

  // @countdown
  const trgDate = new Date("2024-08-22T12:00:00").getTime();

  useEffect(() => {
    const setTimer = setInterval(() => {
      setTimeLeft(calculateTime(trgDate));
    }, 1000);

    return () => {
      clearInterval(setTimer);
    };
  }, [getTimer]);

  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        origin: "center",
        perView: 1,
        spacing: 0,
      },
      vertical: true,
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
          }, 5000);
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
    ]
  );

  return (
    <>
      <div className="flex flex-row items-start justify-between">
        <div className="flex flex-row items-center justify-center">
          <Link className="block relative mt-2 sm:mt-0 w-max" href={"/"}>
            <Image
              className="my-auto mx-auto h-auto w-28 sm:w-32"
              src={"/assets/images/ca2024-BrandWhite.svg"}
              alt={`${publicRuntimeConfig.siteAppName} (Primary Brand - NavbarTop)`}
              height={62}
              width={182}
              quality="87"
            />
          </Link>
        </div>
        <div
          className={`flex flex-col bg-white/30 rounded-xl relative py-3 sm:py-3.5 px-3 sm:px-4 ${
            isLoading === true ? "h-[70px] sm:h-[82px]" : "h-auto"
          } w-full min-w-[187px] sm:min-w-[272px] max-w-[187px] sm:max-w-[272px]`}
        >
          {isLoading === false && (
            <>
              <div
                ref={sliderRef}
                className="keen-slider h-[46px] sm:h-[54px] max-w-[240px]"
              >
                <div className="keen-slider__slide number-slide1">
                  <div className="flex flex-col items-start relative h-[46px] sm:h-[54px]">
                    <span className="text-white font-bevietnamPro text-sm font-light sm:font-normal">
                      Event Date
                    </span>
                    <div className="text-white font-bevietnamPro text-base sm:text-2xl font-medium absolute top-auto bottom-0 inset-x-0 w-[165px] sm:w-[265px]">
                      22-23 August 2024
                    </div>
                  </div>
                </div>
                <div className="keen-slider__slide number-slide2">
                  <div className="flex flex-col items-start relative h-[46px] sm:h-[54px]">
                    <span className="text-white font-bevietnamPro text-sm font-light sm:font-normal">
                      Starting in
                    </span>
                    <div className="text-white font-bevietnamPro text-base sm:text-2xl font-medium absolute top-auto bottom-0 inset-x-0 w-[155px] sm:w-[265px]">
                      {`${getTimer.days}d ${getTimer.hours}h ${getTimer.minutes}m ${getTimer.seconds}s`}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MenuNavTop;
