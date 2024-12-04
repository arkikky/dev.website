import React from "react";
import getConfig from "next/config";
import Image from "next/image";

// @Get .config
const { publicRuntimeConfig } = getConfig();

const PastSpeakers = ({
  attributes,
  images = "/assets/images/past-speakers/caPastSpeakers-BobbyLee.jpg",
  name = "Oliver Barker",
  brand = "/assets/images/past-speakers/caPastSpeakers-BriVentures.svg",
}) => {
  const getImages = attributes
    ? process.env.NEXT_PUBLIC_UPLOAD +
      attributes.profilePicture.data.attributes.url
    : images;
  const getName = attributes ? attributes.name : name;
  const getBrand = attributes
    ? process.env.NEXT_PUBLIC_UPLOAD +
      attributes.logoCompany.data.attributes.url
    : brand;

  return (
    <>
      <div className="flex flex-col relative h-full w-full">
        <div className="h-full w-full">
          <Image
            className="object-cover object-[78%] sm:object-center h-full w-full"
            src={getImages}
            alt={`${publicRuntimeConfig.siteAppName} (${getName} - Past Speakers)`}
            sizes="(min-width: 1874px) 246vw,
              (min-width: 1536px) 257vw,
              (min-width: 1280px) 313vw,
              (min-width: 1024px) 395vw,
              (min-width: 640px) 631vw,
              1005vw"
            height={648}
            width={516}
            quality="87"
          />
        </div>
        <div className="crdPstSpeakerMain flex flex-col items-start justify-start text-start absolute top-auto bottom-0 inset-x-0 py-3 sm:py-5 lg:pt-9 lg:pb-7 px-3 sm:px-5 lg:px-9 z-10">
          <h3 className="text-white font-bevietnamPro text-lg sm:text-xl lg:text-[32px] lg:leading-[44px] font-bold z-10">
            {getName}
          </h3>
          <div className="flex flex-col items-start justify-start max-w-max z-10">
            <Image
              className="my-auto h-auto w-auto min-h-[36px] max-h-[55px]"
              src={getBrand}
              alt={`${publicRuntimeConfig.siteAppName} (${getName} - Brand Past Speakers)`}
              sizes="(min-width: 1874px) 246vw,
                (min-width: 1536px) 257vw,
                (min-width: 1280px) 313vw,
                (min-width: 1024px) 395vw,
                (min-width: 640px) 431vw,
                1005vw"
              height={58}
              width={270}
              quality="87"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default PastSpeakers;
