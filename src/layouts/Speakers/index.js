import React from "react";
import Link from "next/link";

// @components
import Container from "@components/Container";

const Speakers = ({ children }) => {
  return (
    <>
      <Container className="relative z-[5] overflow-hidden">
        <section className="relative flex flex-col pb-32 pt-[169px] xl:pt-[139px] 2xl:pt-[185px]">
          <div className="flex flex-col items-start justify-start pr-11 sm:items-center sm:justify-center sm:pr-0">
            <h1 className="font-staraExtraBold text-[32px] uppercase leading-[40px] text-black-900 sm:text-[58px] sm:leading-[74px] lg:text-[80px] lg:leading-[90px] xl:text-[72px] xl:leading-[86px] 2xl:text-[80px] 2xl:leading-[90px]">
              Speakers
            </h1>
          </div>

          <div className="relative mt-8 grid-cols-4 gap-x-4 gap-y-4 supports-grid:grid sm:mt-11 sm:grid-cols-12 sm:gap-x-6 sm:gap-y-6 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-10">
            {children}
          </div>

          <div className="mt-18 flex w-full flex-col items-center justify-center">
            <Link
              className="mdlBtnNewsletter relative inline-flex w-full max-w-max cursor-pointer items-center justify-center rounded-[14px] bg-primary px-6 py-4 font-bevietnamPro text-sm font-medium text-black-900 outline-none focus-visible:outline-none sm:text-xl xl:px-8"
              href={"/get-involved/speakers"}
            >
              And many more!
            </Link>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Speakers;
