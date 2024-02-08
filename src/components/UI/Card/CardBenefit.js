import React from "react";

const CardBenefit = ({ title, desc }) => {
  const isTitle = title ? title : "Unconventionally Immersive";
  const isDesc = desc
    ? desc
    : "Innovative conference experience designed for forward-thinking brands";

  return (
    <>
      <div className="ca2024CrdBenefit flex flex-col bg-secondary2024 rounded-lg overflow-hidden relative py-4 px-4 h-[269px] sm:h-[285px] lg:h-[248px] xl:h-[238px] w-full">
        <div className="flex flex-col relative z-[5]">
          <h3 className=" font-bevietnamPro text-base lg:text-lg xl:text-2xl font-semibold">
            {isTitle}
          </h3>
          <p className=" font-bevietnamPro text-base xl:text-lg font-normal mt-2">
            {isDesc}
          </p>
        </div>
      </div>
    </>
  );
};

export default CardBenefit;
