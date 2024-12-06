import React, { useState } from "react";
import Link from "next/link";

// @Component's
import BrandSponsor from "@components/UI/Card/BrandSponsor";

const Sponsor = ({ data }) => {
  const [intSponsor, setSponsor] = useState(data);

  return (
    <>
      <section id="caPartners" className="mt-14 sm:mt-28">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-black-800 font-bevietnamPro text-2xl sm:text-[40px] sm:leading-[54px] font-bold uppercase">
            {`1000+ Partners Across the Globe`}
          </h2>
          <p className="text-black-400 body mt-2">
            {`Partnering with innovative brands, moving the industry forward`}
          </p>
        </div>
        <div className="supports-grid:grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-10 gap-y-2 sm:gap-y-4 gap-x-2 sm:gap-x-4 relative mt-6 sm:mt-10">
          {intSponsor?.map((getResult, index) => (
            <div
              className="col-span-2 sm:col-span-4 lg:col-span-3 xl:col-span-2"
              key={index}
            >
              <BrandSponsor {...getResult} />
            </div>
          ))}
          <div className="col-span-2 sm:col-span-4 lg:col-span-3 xl:col-span-2">
            <Link
              href={"/2025-sponsorship"}
              className="flex flex-row bg-gradient-rotate-fullthemoon items-center justify-center border-2 border-solid border-primary rounded-[5px] sm:rounded-[10px] grayscale-0 transition duration-300 ease-in-out px-0 min-h-[118px] sm:min-h-[155px] xl:min-h-[176px]"
            >
              <span className="text-white font-bevietnamPro text-sm sm:text-base font-bold uppercase max-w-[88px] sm:max-w-[123px] text-start">
                Inquire for 2025
              </span>
              <svg
                className="text-white h-6 w-6 ml-0 sm:ml-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sponsor;
