import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import getConfig from "next/config";
import Image from "next/image";
import Link from "next/link";

// # Get .config
const { publicRuntimeConfig } = getConfig();

// // @components
// import Container from "@components/Container";

const NavbarTop = () => {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const trgtDate = new Date("2024-08-22T12:00:00").getTime();

  const calculateTime = () => {
    const now = new Date();
    const diffrnce = trgtDate - now;

    if (diffrnce <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(diffrnce / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (diffrnce % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((diffrnce % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffrnce % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft]);

  return (
    <>
      <section
        className={`fixed top-4 bottom-auto inset-x-0 px-4 sm:px-10 lg:px-15 z-sm mix-blend-difference`}
      >
        <div className="flex flex-row items-start justify-between">
          <div className="flex flex-row items-center justify-center">
            {router.pathname !== "/" && router.pathname !== "/get-involved" ? (
              <Link
                className="flex flex-col items-center justify-center rounded-2xl bg-white h-12 w-12 z-100"
                href={"/get-involved"}
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
            ) : null}
            <Link
              className={`block relative${
                router.pathname !== "/" && router.pathname !== "/get-involved"
                  ? "ml-4"
                  : "ml-0"
              } ml-4 w-max`}
              href={"/"}
            >
              <Image
                className="aspect-auto my-auto mx-auto h-auto w-[100px]"
                src={"/2024/assets/images/ca2024-BrandWhite.svg"}
                alt={`${publicRuntimeConfig.siteAppName} (Primary Brand Logo)`}
                height={24}
                width={24}
                quality="87"
              />
            </Link>
          </div>
          <div className="flex flex-col bg-white/30 rounded-xl relative py-3 sm:pt-4 pb-[38px] sm:pb-12 px-3 sm:px-4 w-full min-w-[169px] sm:min-w-[248px] max-w-[169px] sm:max-w-[248px]">
            <span className="text-white font-bevietnamPro text-sm font-light sm:font-medium">
              Starting in
            </span>
            <div className="text-white font-bevietnamPro text-base sm:text-2xl font-medium absolute top-auto bottom-2.5 sm:bottom-4 inset-x-3 sm:inset-x-4 w-[155px] sm:w-[265px]">
              {`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavbarTop;
