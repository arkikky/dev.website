import React from "react";
import getConfig from "next/config";
import Image from "next/image";

// # Get .config
const { publicRuntimeConfig } = getConfig();

const BrandSponsor = ({ attributes }) => {
  // const getUrl = attributes.url !== null ? attributes.url : "/";
  const getName = attributes ? attributes.name : "Google Cloud";
  const getLogo = attributes
    ? process.env.NEXT_PUBLIC_UPLOAD + attributes.logo.data.attributes.url
    : "/assets/images/sponsor/ca-GoogleCloud.svg";

  return (
    <>
      <div className="flex flex-col items-center justify-center border-2 border-solid border-[#E6E6E6] hocus:border-primary rounded-[5px] sm:rounded-[10px] grayscale hocus:grayscale-0 transition duration-300 ease-in-out px-0 min-h-[118px] sm:min-h-[155px] xl:min-h-[176px]">
        <Image
          className="aspect-auto my-auto mx-auto h-auto w-full"
          src={getLogo}
          alt={`${publicRuntimeConfig.siteAppName} (${getName} - Brand Sponsor Partner)`}
          height={140}
          width={220}
          quality="87"
        />
      </div>
    </>
  );
};
export default BrandSponsor;
