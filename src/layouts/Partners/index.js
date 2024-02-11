import React, { useState, useEffect } from "react";

// @components
import Container from "@components/Container";
import BrandSponsor from "@components/UI/Card/BrandPartners";

// @layouts
// import Partners from "@layouts/Partners";

const Partners = ({ data }) => {
  const [isSponsorPartner, setSponsorPartner] = useState(data);

  return (
    <>
      <section className="ca2024Partners snap-always snap-start flex flex-col items-center justify-center overflow-hidden relative h-auto min-h-[auto]">
        <div className="ca2024PartnersPointTop bg-transparent absolute top-24 bottom-auto inset-x-0 h-14 w-full select-none pointer-events-none z-px transition duration-[0.8s] ease-linear"></div>

        <Container className="overflow-hidden relative pt-[140px] sm:pt-[174px] z-[5]">
          <div className="ca2024PartnersContentTitle flex flex-col items-start sm:items-center justify-start sm:justify-center pr-11 sm:pr-0 opacity-1 transition duration-[1.2s] ease-out">
            <h2 className="text-black-900 font-staraExtraBold text-[32px] sm:text-[58px] lg:text-[80px] xl:text-[72px] 2xl:text-[80px] leading-[40px] sm:leading-[74px] lg:leading-[90px] xl:leading-[86px] 2xl:leading-[90px] uppercase">
              Previous Partners
            </h2>
          </div>

          <div className="ca2024PartnersContent flex flex-col overflow-hidden relative pb-[262px] mt-8 sm:mt-11 opacity-1 transition duration-[1s] ease-out">
            <div className="supports-grid:grid grid-cols-4 sm:grid-cols-12 lg:grid-cols-12 gap-y-2 gap-x-2 relative">
              {isSponsorPartner?.map((gtRslt, i) => (
                <div className="col-span-2 sm:col-span-4 lg:col-span-3" key={i}>
                  <BrandSponsor {...gtRslt} />
                </div>
              ))}
              <div className="col-span-2 sm:col-span-4 lg:col-span-3">
                <div className="flex flex-col items-center justify-center border border-solid border-secondary2024 rounded-[5px] sm:rounded-[10px] grayscale-0 transition duration-300 ease-in-out px-0 h-[118px] sm:h-[155px] xl:h-[184px]">
                  <span className="text-black-900 font-bevietnamPro text-sm sm:text-base font-bold uppercase">
                    AND <span className="text-secondary2024">MANY MORE</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Partners;
