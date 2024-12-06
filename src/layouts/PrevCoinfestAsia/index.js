import React from "react";

// @Component's
import YouTubeEmbed from "@components/UI/YouTubeEmbed";

const PrevCoinfestAsia = () => {
  return (
    <>
      <section id="caGeneralPrevSite" className="mt-12 sm:mt-24">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-black-800 font-bevietnamPro text-2xl sm:text-[40px] sm:leading-[54px] font-bold uppercase">
            {`See how it went previously`}
          </h2>
        </div>
        <div className="supports-grid:grid grid-cols-4 sm:grid-cols-12 lg:grid-cols-12 gap-y-2 sm:gap-y-4 gap-x-2 sm:gap-x-4 relative mt-6 sm:mt-10">
          <div className="col-span-full sm:col-span-6">
            <div className="bg-[#E0E0E0] rounded-[14px] text-center overflow-hidden relative h-[193px] sm:h-[197px] lg:h-[263px] xl:h-[353px] w-full">
              <YouTubeEmbed
                videoTitle="Highlights - Coinfest Asia 2022 Recap"
                videoUrl="https://www.youtube.com/embed/-ENpdcDe8ZY?si=bseL5C9CZPjGamXB"
              />
            </div>
          </div>
          <div className="col-span-full sm:col-span-6">
            <div className="bg-[#E0E0E0] rounded-[14px] text-center overflow-hidden relative h-[193px] sm:h-[197px] lg:h-[263px] xl:h-[353px] w-full">
              <YouTubeEmbed
                videoTitle="Highlights - Coinfest Asia 2023 Recap"
                videoUrl="https://www.youtube.com/embed/SsxoCIJW43M?si=23DcFtyOiTyCZDjP"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default PrevCoinfestAsia;
