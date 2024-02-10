import React, { useState } from "react";

// @components
import Container from "@components/Container";
import SpeakersModal from "src/components/UI/Modals/Speakers";

// @components
import SpeakersCard from "@components/UI/Card/SpeakersCard";

const Speakers = ({ data }) => {
  const [isSpeakers, setSpeakers] = useState(data);

  return (
    <>
      <section className="ca2024SectionAuto ca2024SldeSpeaker snap-always snap-start flex flex-col items-center justify-center overflow-hidden relative h-auto min-h-[auto]">
        <div className="ca2024SldeSpeakersPointTop bg-transparent absolute top-10 bottom-auto inset-x-0 h-14 w-full select-none pointer-events-none z-px"></div>

        <Container className="overflow-hidden relative z-[5]">
          <div className="flex flex-col overflow-hidden relative pt-[174px] pb-[262px]">
            <div className="ca2024SldeSpeakerContentTitle flex flex-col items-start sm:items-center justify-start sm:justify-center pr-11 sm:pr-0 opacity-1 transition duration-[1.2s] ease-out">
              <h2 className="text-black-900 font-staraExtraBold text-[32px] sm:text-[58px] lg:text-[80px] xl:text-[72px] 2xl:text-[80px] leading-[40px] sm:leading-[74px] lg:leading-[90px] xl:leading-[86px] 2xl:leading-[90px] uppercase">
                Previous speakers
              </h2>
            </div>

            <div className="ca2024SldeSpeakerContent opacity-1 relative transition duration-[2.2s] ease-out">
              <div className="supports-grid:grid grid-cols-4 sm:grid-cols-12 lg:grid-cols-12 gap-y-4 sm:gap-y-6 lg:gap-y-10 gap-x-4 sm:gap-x-6 lg:gap-x-10 mt-8 sm:mt-11 relative">
                {isSpeakers?.map((gtRslt, i) => (
                  <div
                    className="col-span-2 sm:col-span-4 lg:col-span-3"
                    key={i}
                  >
                    <SpeakersCard {...gtRslt} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* @modal (speakers) */}
      {isSpeakers?.map((gtRslt, a) => (
        <div key={a}>
          <SpeakersModal {...gtRslt} />
        </div>
      ))}
    </>
  );
};

export default Speakers;
