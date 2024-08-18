import React from "react";
import getConfig from "next/config";
import Head from "next/head";
import Image from "next/image";

// @layout
import GuideLayout from "@layouts/GuideLayout";

// @get .config
const { publicRuntimeConfig } = getConfig();

const EventDayTime = () => {
  const handleSaveDate = () => {
    const icsUrl = "/assets/events/Coinfest Asia 2024.ics";
    const link = document.createElement("a");
    link.href = icsUrl;
    link.download = "Coinfest Asia 2024.ics";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Head>
        <title>{`Event Day & Time | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta name="title" content={`Event Day & Time | ${publicRuntimeConfig.siteTitle}`} />
        <meta name="description" content={publicRuntimeConfig.siteDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta property="og:title" content={`Event Day & Time | ${publicRuntimeConfig.siteTitle}`} />
        <meta property="og:description" content={publicRuntimeConfig.siteDesc} />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_UPLOAD}/uploads/ca2024_Thumbnails_Share_Link_App_9964b5c353.png`}
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="twitter:title"
          content={`Page Not Found! | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta
          property="twitter:description"
          content={publicRuntimeConfig.siteDesc}
        />
        <meta
          property="twitter:image"
          content={`${process.env.NEXT_PUBLIC_UPLOAD}/uploads/ca2024_Thumbnails_Share_Link_App_9964b5c353.png`}
        />
      </Head>

      <GuideLayout title="Event Day And Time" className="px-6 lg:px-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-2 bg-[#EEF0F4] border border-[#E3E3E3] rounded-xl w-full">
          <div className="flex flex-col gap-2 bg-white rounded-[10px] p-4">
            <Image src={"/assets/images/icons/ca2024-Calendar.svg"} width={24} height={24} alt="Calendar Icon" />
            <div className="flex flex-col gap-[2px]">
              <span className="text-sm text-[#303030]/50">Thursday & Friday</span>
              <span className="text-base text-[#303030]">22-23 August 2024</span>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-2 bg-white rounded-[10px] p-4">
            <Image src={"/assets/images/icons/ca2024-Clock.svg"} width={24} height={24} alt="Clock Icon" />
            <div className="flex flex-col gap-[2px]">
              <span className="text-base text-[#303030]">1pm — 9pm GMT +8</span>
            </div>
          </div>
          <button
            className="col-span-1 sm:col-span-2 mt-2 text-white text-sm font-medium py-4 rounded-xl bg-[url('/assets/images/backdrop/background/ca2024BgBigLine.jpg')] bg-cover bg-left"
            onClick={handleSaveDate}
          >
            Save the date to your calendar
          </button>
        </div>
        <div className="flex flex-col gap-4 md:flex-row justify-between mt-8 text-[#303030]">
          <p>Registration for (in)side events start at 9 AM</p>
          <p>Check in for Main Event starts at 1 PM</p>
        </div>
      </GuideLayout>
    </>
  );
};

export default EventDayTime;

EventDayTime.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
