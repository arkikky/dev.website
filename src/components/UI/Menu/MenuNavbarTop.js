import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import getConfig from "next/config";
import Link from "next/link";
import Image from "next/image";

// @get .config
const { publicRuntimeConfig } = getConfig();

// @lib
import calculateTime from "@lib/utils/calculateTime";

const MenuNavbarTop = () => {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const trgtDate = new Date("2024-08-22T12:00:00").getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTime(trgtDate));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft]);

  return (
    <>
      <div className="flex flex-row items-start justify-between">
        <Link className="block relative mt-2 sm:mt-0 w-max" href={"/"}>
          <Image
            className="my-auto mx-auto h-auto w-[120px] sm:w-32"
            src={"/assets/images/ca2024-BrandWhite.svg"}
            alt={`${publicRuntimeConfig.siteAppName} (Primary Brand Logo)`}
            height={62}
            width={182}
            quality="87"
          />
        </Link>
        <div className="flex flex-col bg-white/30 rounded-xl relative py-3 sm:pt-4 pb-[38px] sm:pb-12 px-3 sm:px-4 w-full min-w-[157px] sm:min-w-[248px] max-w-[157px] sm:max-w-[248px]">
          <span className="text-white font-bevietnamPro text-sm font-light sm:font-medium">
            Starting in
          </span>
          <div className="text-white font-bevietnamPro text-base sm:text-2xl font-medium absolute top-auto bottom-2.5 sm:bottom-4 inset-x-3 sm:inset-x-4 w-[155px] sm:w-[265px]">
            {`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuNavbarTop;
