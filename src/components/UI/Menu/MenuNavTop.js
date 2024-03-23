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

  // @swipe
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
    ],
  );

  return (
    <>
      <div className="flex flex-row items-start justify-between">
        <div className="flex flex-row items-center justify-center">
          <Link
            className="relative mt-2 block w-max cursor-pointer sm:mt-0"
            href={"/"}
          >
            <Image
              className="mx-auto my-auto h-auto w-28 sm:w-32"
              src={"/assets/images/ca2024-BrandWhite.svg"}
              alt={`${publicRuntimeConfig.siteAppName} (Primary Brand - NavbarTop)`}
              height={62}
              width={182}
              quality="87"
            />
          </Link>
        </div>
        <div
          className={`relative flex flex-col rounded-xl bg-white/30 px-3 py-3 sm:px-4 sm:py-3.5 ${
            isLoading === true ? "h-[70px] sm:h-[82px]" : "h-auto"
          } w-full min-w-[187px] max-w-[187px] sm:min-w-[272px] sm:max-w-[272px]`}
        >
          {isLoading === false && (
            <>
              <div
                ref={sliderRef}
                className="keen-slider h-[46px] max-w-[240px] sm:h-[54px]"
              >
                <div className="keen-slider__slide number-slide1">
                  <div className="relative flex h-[46px] flex-col items-start sm:h-[54px]">
                    <span className="font-bevietnamPro text-sm font-light text-white sm:font-normal">
                      Event Date
                    </span>
                    <div className="absolute inset-x-0 bottom-0 top-auto w-[165px] font-bevietnamPro text-base font-medium text-white sm:w-[265px] sm:text-2xl">
                      22-23 August 2024
                    </div>
                  </div>
                </div>
                <div className="keen-slider__slide number-slide2">
                  <div className="relative flex h-[46px] flex-col items-start sm:h-[54px]">
                    <span className="font-bevietnamPro text-sm font-light text-white sm:font-normal">
                      Starting in
                    </span>
                    <div className="absolute inset-x-0 bottom-0 top-auto w-[155px] font-bevietnamPro text-base font-medium text-white sm:w-[265px] sm:text-2xl">
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
