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
import calculateTime from "@lib/helper/calculateTime";

const MenuNavTop = ({ back = false, urlBack = "" }) => {
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
        <div
          className={`flex flex-row items-center ${back === true && "mt-2 space-x-2 sm:space-x-4"} justify-center`}
        >
          {back === true && (
            <Link
              className="z-100 flex h-10 w-10 flex-col items-center justify-center rounded-xl bg-white sm:h-12 sm:w-12 sm:rounded-2xl"
              href={urlBack}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M15 19L8 12L15 5"
                    stroke="black"
                    strokeWidth="2.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </Link>
          )}
          <Link
            className={`relative ${back === true ? "mt-0" : "mt-2 sm:mt-0"} block w-max cursor-pointer`}
            href={"/"}
          >
            <Image
              className="mx-auto my-auto h-auto w-24 sm:w-32"
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
