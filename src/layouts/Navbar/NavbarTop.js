import React, { useState, useEffect } from "react";
import getConfig from "next/config";
import Image from "next/image";
import Link from "next/link";

// # Get .config
const { publicRuntimeConfig } = getConfig();

// @components
import Container from "@components/Container";

const NavbarTop = () => {
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
      <section className="fixed top-4 bottom-auto inset-x-0 z-sm mix-blend-difference">
        <Container>
          <div className="flex flex-row items-start justify-between">
            <Link className="block relative mt-3 w-max" href={"/"}>
              <Image
                className="aspect-auto my-auto mx-auto h-auto w-[120px] sm:w-32"
                src={"/2024/assets/images/ca2024-BrandWhite.svg"}
                alt={`${publicRuntimeConfig.siteAppName} (Primary Brand Logo)`}
                height={24}
                width={24}
                quality="87"
              />
            </Link>
            <div className="flex flex-col bg-white/30 rounded-xl relative py-3 sm:pt-4 pb-[38px] sm:pb-12 px-3 sm:px-4 w-full min-w-[169px] sm:min-w-[248px] max-w-[169px] sm:max-w-[248px]">
              <span className="text-white font-bevietnamPro text-sm font-light sm:font-medium">
                Starting in
              </span>
              <div className="text-white font-bevietnamPro text-base sm:text-2xl font-medium absolute top-auto bottom-2.5 sm:bottom-4 inset-x-3 sm:inset-x-4 w-[155px] sm:w-[265px]">
                {`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default NavbarTop;
