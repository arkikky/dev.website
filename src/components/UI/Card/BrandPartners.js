import React from "react";
import getConfig from "next/config";
import Image from "next/image";

// # Get .config
const { publicRuntimeConfig } = getConfig();

const BrandSponsor = ({ attributes }) => {
  const isName = attributes ? attributes.name : "Google Cloud";
  const isLogo = attributes
    ? process.env.NEXT_PUBLIC_UPLOAD + attributes.logo.data.attributes.url
    : "/assets/images/sponsor/ca-GoogleCloud.svg";

  return (
    <>
      <div className="flex flex-col items-center justify-center border border-solid border-[#E6E6E6] hocus:border-secondary2024 rounded-[5px] sm:rounded-[10px] grayscale hocus:grayscale-0 overflow-hidden transition duration-300 ease-in-out px-0 h-[118px] sm:h-[155px] xl:h-[184px]">
        <Image
          className="aspect-auto my-auto mx-auto h-auto w-full"
          src={isLogo}
          alt={`${publicRuntimeConfig.siteAppName} (${isName} - Brand Sponsor Partner)`}
          height={80}
          width={220}
          quality="87"
        />
      </div>
    </>
  );
};
export default BrandSponsor;
