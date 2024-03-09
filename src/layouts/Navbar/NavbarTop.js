import React from "react";
import getConfig from "next/config";
import Image from "next/image";
import Link from "next/link";

// # Get .config
const { publicRuntimeConfig } = getConfig();

// @components
import Container from "@components/Container";

const NavbarTop = () => {
  return (
    <>
      <section className="fixed top-4 bottom-auto inset-x-0 z-sm mix-blend-difference">
        <Container>
          <div className="flex flex-row items-start justify-between">
            <Link className="block relative mt-3 w-max" href={"/"}>
              <Image
                className="aspect-auto my-auto mx-auto h-auto w-[120px] sm:w-32"
                src={"/2024/assets/images/ca2024-BrandWhite.svg"}
                alt={`${publicRuntimeConfig.siteAppName} (Primary Brand - NavbarTop)`}
                height={24}
                width={24}
                quality="87"
              />
            </Link>
            <div className="flex flex-col bg-white/30 rounded-xl relative py-3 sm:pt-4 pb-[38px] sm:pb-12 px-3 sm:px-4 w-full min-w-[184px] sm:min-w-[270px] max-w-[184px] sm:max-w-[270px]">
              <span className="text-white font-bevietnamPro text-sm font-light sm:font-medium">
                Event Date
              </span>
              <div className="text-white font-bevietnamPro text-base sm:text-2xl font-medium absolute top-auto bottom-2.5 sm:bottom-4 inset-x-3 sm:inset-x-4 w-[165px] sm:w-[265px]">
                22-23 August 2024
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default NavbarTop;
