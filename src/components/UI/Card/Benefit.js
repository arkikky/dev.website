import React from "react";
import Image from "next/image";

const BenefitCard = ({ title, desc, images = "" }) => {
  const isTitle = title ? title : "Unconventionally Immersive";
  const isDesc = desc
    ? desc
    : "Innovative conference experience designed for forward-thinking brands";

  return (
    <>
      <div className="relative flex h-[358px] w-full flex-col overflow-hidden rounded-2xl border border-solid border-[#D6D6D6] bg-[#FAFAFA] sm:h-[387px] lg:h-[440px] xl:h-[406px]">
        {images && (
          <div className="absolute bottom-auto left-auto right-0 top-0 h-auto w-[204px] lg:w-[369px] xl:h-[226px] xl:w-[427px]">
            <Image
              className="mx-auto aspect-auto h-full w-full"
              src={images}
              alt={`Coinfest Asia 2024 (${title} - Benefit Thumbnails)`}
              height={452}
              width={854}
              quality="87"
            />
          </div>
        )}

        <div className="relative flex flex-col px-4 pb-6 pt-[134px] sm:px-6 lg:px-8 lg:pb-8 lg:pt-[224px]">
          <h3 className="font-bevietnamPro text-base font-semibold lg:text-lg xl:text-xl">
            {isTitle}
          </h3>
          <p className="mt-2 font-bevietnamPro text-base font-light xl:text-lg">
            {isDesc}
          </p>
        </div>
      </div>
    </>
  );
};

export default BenefitCard;
