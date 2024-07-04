import React from "react";
import Image from "next/image";

// @components
import Container from "@components/Container";
import ActivistCard from "@components/UI/Card/ActivistCard";

const Activist = ({ page = false }) => {
  return (
    <>
      <section className="ca2024MainPoints ca2024Activist ca2024MainScreenAuto relative flex snap-center snap-always flex-col items-center justify-center overflow-hidden bg-secondary">
        {page === true && (
          <>
            {/* @background (backdrop) */}
            <div className="ca2024ActivistBackdrop opacity-1 absolute inset-x-0 inset-y-0 z-px">
              <Image
                className={`mx-auto h-full w-full object-cover object-center`}
                src={"/assets/images/backdrop/background/ca2024BgLine.jpg"}
                alt={`Coinfest Asia 2024 (Background Backdrop Activist)`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                height={900}
                width={1440}
                quality="87"
              />
            </div>
          </>
        )}

        {/* @content */}
        <Container className={"z-[6]"}>
          <div
            className={`flex flex-col ${page === true ? "pb-[206px] pt-[189px]" : "pb-[168px] pt-[189px]"} text-start`}
          >
            <h2 className="font-staraExtraBold text-[32px] uppercase leading-[40px] text-white xs:text-[42px] xs:leading-[50px] sm:text-[58px] sm:leading-[74px] lg:text-[80px] lg:leading-[90px]">
              The coinfest experience
            </h2>

            <div className="mt-10 w-full max-w-full grid-cols-2 flex-row flex-wrap justify-center gap-x-2 gap-y-2 supports-grid:grid sm:grid-cols-3 sm:gap-x-4 sm:gap-y-4 lg:inline-flex lg:grid-cols-none lg:flex-row">
              <ActivistCard
                url="/partners"
                labels="Exhibitions"
                images="/assets/images/experiences/exhibition.png"
              />
              <ActivistCard
                url="/activities/hackathons"
                labels="Hackathons"
                images="/assets/images/experiences/hackathon.png"
              />
              <ActivistCard
                url="/coinfest-week"
                labels="After Parties"
                images="/assets/images/experiences/after-parties.png"
              />
              <ActivistCard
                labels="Alpha Sessions"
                images="/assets/images/experiences/alpha-sessions.png"
              />
              <ActivistCard
                // url="/activities/treding-competition"
                labels="Trading Competitions"
                images="/assets/images/experiences/trading-competition.png"
              />
              <ActivistCard
                labels="Keynotes & Panels"
                images="/assets/images/experiences/main-stage.png"
              />
              <ActivistCard
                labels="Rapid Chess"
                images="/assets/images/experiences/rapid-chess.png"
              />
              <ActivistCard
                url="/coinfest-week"
                labels="Community Events"
                images="/assets/images/experiences/community-events.png"
              />
              <ActivistCard
                labels="Regulatory Sessions"
                images="/assets/images/experiences/regulatory-sessions.png"
              />
              <ActivistCard
                labels="Paintball Networking"
                images="/assets/images/experiences/paintball-networking.png"
              />
              <ActivistCard
                labels="Golf"
                images="/assets/images/experiences/driving-range.png"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Activist;
