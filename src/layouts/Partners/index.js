import React, { useState } from "react";

// @components
import BrandSponsor from "@components/UI/Card/BrandPartners";

const Partners = ({ data }) => {
  const [isSponsor, setSponsor] = useState(data);

  return (
    <>
      <div className="supports-grid:grid grid-cols-4 sm:grid-cols-12 lg:grid-cols-12 gap-y-2 gap-x-2 relative">
        {isSponsor?.map((gtRslt, i) => (
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
    </>
  );
};

export default Partners;
