import React from "react";
import getConfig from "next/config";
import Image from "next/image";
import Link from "next/link";

// # Get .config
const { publicRuntimeConfig } = getConfig();

const AccomodationsCard = ({
  images,
  labelBrand = "/assets/images/accomodations/ca2024BrandLeMeridien.png",
  title = "Ayana",
  diskon = "0%",
}) => {
  return (
    <>
      <Link
        className="group relative flex h-full max-h-[228px] flex-col items-center justify-center sm:max-h-[448px]"
        href=""
      >
        <Image
          className="mx-auto my-auto aspect-auto h-full w-full"
          src={images}
          alt={`${publicRuntimeConfig.siteAppName} (${title} - Thumbnails)`}
          height={80}
          width={220}
          quality="87"
        />

        <div className="flex-items absolute inset-x-0 inset-y-0 flex justify-center bg-black-900/[0.34] px-2 py-2"></div>

        <div className="absolute inset-x-0 inset-y-0 z-[2]">
          <div className="flex-items absolute bottom-auto left-auto right-2 top-2 flex justify-center px-2 py-2 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 sm:right-4 sm:top-4">
            <svg
              className=" h-6 w-6 fill-current text-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.5251 5.49512L10.5205 7.49512L15.0781 7.50578L5.47461 17.0899L6.8874 18.5056L16.5172 8.89516L16.5064 13.5091L18.5064 13.5138L18.5251 5.51383L10.5251 5.49512Z" />
            </svg>
          </div>

          <div className="absolute inset-x-0 inset-y-0 flex flex-col items-center justify-center">
            <Image
              className="mx-auto my-auto aspect-auto h-auto max-h-[105px] w-auto min-w-fit max-w-[221px]"
              src={labelBrand}
              alt={`${publicRuntimeConfig.siteAppName} (${title} - Brand Travel)`}
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 170vw, 170vw"
              height={273}
              width={250}
              quality="87"
            />
          </div>

          <div className="flex-items absolute inset-x-0 bottom-0 top-auto flex justify-center bg-black-900/[0.34] px-2 py-2 font-bevietnamPro text-xs font-normal text-white sm:text-sm">
            {diskon} Off Discount
          </div>
        </div>
      </Link>
    </>
  );
};
export default AccomodationsCard;
