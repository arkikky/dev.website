import React, { useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

// @Component's
import CardPeopleSaying from "@components/UI/Card/PeopleSaying";

const SocialMentions = ({ data }) => {
  const intGrabBackdrop = useRef(null);
  const [intGrabDown, setGrabDown] = useState(false);
  const [intSocialMentions, setSocialMentions] = useState(data);

  //  @Mouse (Grab - Event)
  const intMouseDown = (e) => {
    e.preventDefault();

    setGrabDown(true);
  };

  const intMouseDefault = (e) => {
    e.preventDefault();

    setGrabDown(false);
  };

  const intMouseMove = (e) => {
    if (!intGrabDown) return;
    e.preventDefault();

    setGrabDown(true);
  };

  return (
    <>
      <section
        ref={intGrabBackdrop}
        id="caSocialMentions"
        className="caSocialMentions relative mt-28 mb-28"
      >
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-black-800 font-bevietnamPro text-2xl sm:text-[40px] sm:leading-[54px] font-bold uppercase">
            See what people are saying
          </h2>
          <p className="text-black-400 body">
            Find out about Coinfest Asia from your most trusted key leaders
          </p>
        </div>
        <div
          className={`bckdrpCvrShdow ${
            intGrabDown === true ? "cursor-grabbing" : "cursor-grab"
          } relative mt-11`}
          onMouseDown={(e) => intMouseDown(e)}
          onMouseUp={(e) => intMouseDefault(e)}
          onMouseLeave={(e) => intMouseDefault(e)}
          onMouseMove={(e) => intMouseMove(e)}
        >
          <Splide
            tag="section"
            id="caSpldePeopleSaying"
            aria-label="Vertical Story"
            options={{
              direction: "ttb",
              type: "loop",
              drag: "free",
              perPage: 1,
              gap: "16px",
              arrows: false,
              pagination: false,
              keyboard: false,
              cloneStatus: false,
              height: "auto",
              autoScroll: {
                pauseOnFocus: false,
                rewind: false,
                speed: 2,
              },
            }}
            extensions={{ AutoScroll }}
            className="caSpldePeopleSaying caSpldeMnsry overflow-hidden min-h-[1488px] max-h-[1488px] w-full"
          >
            <SplideSlide className="outline-none focus:outline-none">
              <div className="caMnsry">
                {intSocialMentions?.map((getResult, index) => (
                  <div key={index} className="break-inside-avoid">
                    <CardPeopleSaying {...getResult} />
                  </div>
                ))}
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </section>
    </>
  );
};
export default SocialMentions;
