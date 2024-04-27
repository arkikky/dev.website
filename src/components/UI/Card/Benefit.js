import React from "react";

const BenefitCard = ({ title, desc }) => {
  const isTitle = title ? title : "Unconventionally Immersive";
  const isDesc = desc
    ? desc
    : "Innovative conference experience designed for forward-thinking brands";

  return (
    <>
      <div className="ca2024CrdBenefit relative flex h-[269px] w-full flex-col overflow-hidden rounded-lg px-4 py-4 sm:h-[285px] lg:h-[248px] xl:h-[238px]">
        <div className="relative z-[5] flex flex-col">
          <h3 className=" font-bevietnamPro text-base font-semibold lg:text-lg xl:text-2xl">
            {isTitle}
          </h3>
          <p className=" mt-2 font-bevietnamPro text-base font-normal xl:text-lg">
            {isDesc}
          </p>
        </div>
      </div>
    </>
  );
};

export default BenefitCard;
