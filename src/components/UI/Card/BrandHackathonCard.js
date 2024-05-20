import React from "react";
import Image from "next/image";

const BrandHackathonCard = ({ images = "", label = "Brand" }) => {
  return (
    <>
      <div className="inline-flex h-[22px] w-max flex-row items-center justify-center rounded-full border border-solid border-black-900 bg-transparent xl:h-8">
        <Image
          className="mx-auto h-[22px] w-auto object-cover object-center xl:h-8"
          src={images}
          alt={`Coinfest Asia 2024 (${label} Hosted Hackathon Card)`}
          height={32}
          width={136}
          quality="90"
        />
      </div>
    </>
  );
};

export default BrandHackathonCard;
