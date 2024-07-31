import React from "react";

// @lib
import { formatTimeTo12Hour } from "@lib/helper/formatedTime";

const AgendaCard = ({
  highlight = false,
  day,
  title,
  stage,
  selectedStage,
  startTime,
  lastTime,
  speakers,
  moderator,
}) => {
  const setStartTime = startTime !== undefined ? startTime : "00:00:00";
  const isStartTime = formatTimeTo12Hour(day, setStartTime);
  const setEndTime = lastTime !== undefined ? lastTime : "00:00:00";
  const isEndTime = formatTimeTo12Hour(day, setEndTime);

  const setSpeakers = speakers !== undefined ? speakers.data : null;
  const setModerator = moderator !== undefined ? moderator.data : null;

  const setStage =
    stage === "mainStage"
      ? "Main Stage"
      : stage === "alphaStage"
        ? "Alpha Stage"
        : stage === "buildersHut"
          ? "Builders Hut"
          : stage === "breakoutArea"
            ? "Breakout Area"
            : "UnStake Stage";

  return (
    <>
      {highlight === false ? (
        <div className="group flex w-full flex-col items-start gap-y-6 px-4 py-6 text-start sm:flex-row sm:gap-y-0">
          <div className="flex w-full max-w-max flex-col sm:max-w-[325px] lg:max-w-[564px]">
            <div className="flex w-full max-w-full flex-col space-y-2 sm:max-w-[343px]">
              <span className="ca2024BgOverflayBlue inline-flex w-max flex-row items-center justify-center rounded-full bg-secondary px-2.5 py-1 font-bevietnamPro text-sm font-light text-white">
                {setStage === "UnStake Stage"
                  ? (selectedStage === "mainStage" && "Main Stage") ||
                    (selectedStage === "alphaStage" && "Alpha Stage") ||
                    (selectedStage === "breakoutArea" && "Breakout Area")
                  : setStage}
              </span>
              <h3 className="pr-14 font-bevietnamPro text-lg font-semibold text-black-900 lg:pr-0 lg:text-xl">
                {title}
              </h3>
              <p className="font-bevietnamPro text-base font-light text-[#2F2F2F]">
                {isStartTime}{" "}
                {isEndTime &&
                  "- " + (isEndTime !== undefined ? isEndTime : "00:00 AM")}
              </p>
            </div>
          </div>
          <div className="flex w-fill flex-col items-start justify-between gap-y-6 lg:flex-row lg:gap-y-0">
            <div className="flex w-full flex-col space-y-2">
              {setSpeakers.length > 0 && (
                <>
                  <div className="flex flex-col">
                    <span className="font-bevietnamPro text-base font-light text-[#5E6577]">
                      Speakers
                    </span>
                    <p className="space-x-1.5 font-bevietnamPro text-base font-light text-black-900">
                      {setSpeakers?.map((gtRslt, i) => (
                        <span className="ca2024AgendaListName" key={i}>
                          {gtRslt.attributes.name}
                        </span>
                      ))}
                    </p>
                  </div>
                </>
              )}
              {setModerator.length > 0 && (
                <>
                  <div className="flex flex-col">
                    <span className="font-bevietnamPro text-base font-light text-[#5E6577]">
                      Moderator
                    </span>
                    <p className="space-x-1.5 font-bevietnamPro text-base font-light text-black-900">
                      {setModerator?.map((gtRslt, i) => (
                        <span className="ca2024AgendaListName" key={i}>
                          {gtRslt.attributes.name}
                        </span>
                      ))}
                    </p>
                  </div>
                </>
              )}
              <div className="flex flex-col">
                <span className="font-bevietnamPro text-base font-light text-[#5E6577]">
                  Location
                </span>
                <p className="font-bevietnamPro text-base font-light text-secondary">
                  {setStage === "UnStake Stage"
                    ? (selectedStage === "mainStage" && "Main Stage") ||
                      (selectedStage === "alphaStage" && "Alpha Stage") ||
                      (selectedStage === "breakoutArea" && "Breakout Area")
                    : setStage}
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col sm:w-max">
              <span className="inline-flex w-full flex-col items-center justify-center rounded-full border border-solid border-secondary bg-white px-5 py-2.5 font-bevietnamPro text-base font-normal text-secondary outline-none transition duration-300 ease-in-out hover:bg-secondary hover:text-white focus-visible:outline-none group-hover:bg-secondary group-hover:text-white sm:w-max sm:flex-row">
                See details
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="ca2024BannerAgenda_Highlight relative flex h-[183px] w-full flex-col items-center justify-center sm:h-[203px] lg:h-[243px]">
          <div className="relative z-[5] flex flex-col items-center justify-center">
            <h3 className="font-staraExtraBold text-[32px] uppercase leading-[35px] text-secondary sm:text-[56px] sm:leading-[74px]">
              {title}
            </h3>
            <p className="mt-1 font-bevietnamPro text-base font-light text-[#2F2F2F]">
              {isStartTime}{" "}
              {isEndTime &&
                "- " + (isEndTime !== undefined ? isEndTime : "00:00 AM")}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AgendaCard;
