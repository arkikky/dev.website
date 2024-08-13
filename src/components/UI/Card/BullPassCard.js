import React from "react";
import Image from "next/image";

const BullPassCard = ({
  images = "/assets/images/bull-pass/gallery/ca2024BentoGrid_BullPass1.jpg",
  title = "Seamless Transportation",
  shortDesc = "Travel around the event with ease and convenience with dedicated buggies.",
  normal = false,
  height = 0,
  width = 0,
}) => {
  return (
    <>
      <div
        className={`ca2024BullPassCard ca2024CoverOvrflwBg relative ${normal === true ? "h-[320px] xl:h-[394px]" : "h-[320px] lg:h-full"} w-full overflow-hidden rounded-2xl`}
      >
        <div className="absolute inset-x-0 inset-y-0 z-px h-full w-full">
          <Image
            className="h-full w-full object-cover object-center"
            src={images}
            alt={`Coinfest Asia 2024 (Bento Grid - ${title})`}
            height={height}
            width={width}
            quality="87"
          />
        </div>

        <div className="absolute inset-x-4 bottom-4 top-auto z-10 flex flex-col sm:inset-x-6 sm:bottom-6 lg:inset-x-8 lg:bottom-8">
          <h3
            className={`font-bevietnamPro ${normal === true ? "text-base xl:text-xl" : " text-base lg:text-xl"} font-normal capitalize text-white`}
          >
            {title}
          </h3>
          <p
            className={`mt-1 font-bevietnamPro ${normal === true ? "text-base xl:text-xl" : "text-base lg:text-xl"} font-light text-white/70`}
          >
            {shortDesc}
          </p>
        </div>
      </div>
    </>
  );
};

export default BullPassCard;
