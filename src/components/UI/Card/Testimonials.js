import React from "react";

const TestimonialsCard = ({
  title = "Tom France, Co-Founder Ledger",
  shortDescription = "A great conference in a great setting and to be honest, this is one of the most beautiful settings I’ve been to",
}) => {
  return (
    <>
      <div className="flex flex-col px-2">
        <div className="flex flex-col">
          <span className="w-full font-bevietnamPro text-[26px] font-semibold leading-[32px] text-white sm:text-[54px] sm:leading-[62px] lg:text-[60px] lg:leading-[80px] xl:text-[58px] xl:leading-[76px] 2xl:text-[60px] 2xl:leading-[80px]">
            “{shortDescription}”
          </span>
          <h3 className="mt-4 font-bevietnamPro text-lg font-light text-white sm:mt-6 sm:text-2xl lg:mt-8 lg:text-[32px] lg:leading-normal xl:mt-6 2xl:mt-8 2xl:text-[42px] 2xl:leading-[50px]">
            {title}
          </h3>
        </div>
      </div>
    </>
  );
};

export default TestimonialsCard;
