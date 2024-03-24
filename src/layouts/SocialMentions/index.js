import React, { useRef, useState, useEffect } from "react";
import Marquee from "react-fast-marquee";

// @xomponents
import Container from "@components/Container";
// import CardSocialMentions from "@components/UI/Card/SocialMentions";
// import SocialMentionsCard from "@components/UI/Card/SocialMentions";

const SocialMentions = ({ data }) => {
  const [intSocialMentions, setSocialMentions] = useState(data);

  return (
    <>
      <section className="ca2024MainPoints ca2024SocialMentionsPoints relative z-10 flex h-auto snap-start snap-always flex-col items-center justify-center overflow-hidden bg-red-500">
        {/* <div className="ca2024SocialMentionsPointTop pointer-events-none absolute inset-x-0 bottom-auto top-10 z-px h-14 w-full select-none bg-transparent transition-all duration-150 ease-linear"></div> */}

        {/* @content */}
        <Container className="relative z-[5] overflow-hidden">
          <div className="relative flex flex-col overflow-hidden pb-[254px] pt-[154px] sm:pt-[194px] xl:pb-[202px]">
            <div className="ca2024SocialMentionsContentTitle opacity-1 flex flex-col items-center justify-center transition duration-[1.2s] ease-out">
              <h2 className="text-center font-staraExtraBold text-[32px] uppercase leading-[40px] text-black-900 sm:text-[58px] sm:leading-[74px] lg:text-[80px] lg:leading-[90px]">
                See what they're saying about Coinfest Asia
              </h2>
            </div>

            <div id="ca2024SocialMentions" className="bckdrpCvrShdow">
              {/* <Marquee
                autoFill={false}
                pauseOnHover={false}
                direction="down"
                speed={30} 
                className="flex w-full flex-col"
              > */}
              awdwdad
              {/* <div className="ca2024Mnsry relative">
                  {intSocialMentions?.map((gtRslt, i) => (
                    <div className="break-inside-avoid" key={i}>
                      <SocialMentionsCard {...gtRslt} />
                    </div>
                  ))}
                </div> */}
              {/* </Marquee> */}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
export default SocialMentions;
