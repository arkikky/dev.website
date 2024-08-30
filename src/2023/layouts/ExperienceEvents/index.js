import React, { useRef, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import getConfig from "next/config";
import Image from "next/image";

// # Get .config
const { publicRuntimeConfig } = getConfig();

// Css
import "@splidejs/react-splide/css";
import Card from "@styles23/components/Card.module.css";

// Ui - Components
import PostLink from "@components23/UI/Post/PostLink";

const LyExperienceEvents = () => {
  const elmntRefGrbScrll = useRef(null);

  useEffect(() => {
    const getGrbScrll = elmntRefGrbScrll.current;
    const setGrbScrll = getGrbScrll.splideRef.current;

    if (setGrbScrll && setGrbScrll.classList.contains("grbScrll")) {
      setGrbScrll.addEventListener("mousedown", (e) => {
        if (setGrbScrll.classList.contains("cursor-grab"))
          setGrbScrll.classList.remove("cursor-grab") &
            setGrbScrll.classList.add("cursor-grabbing");
      });
      setGrbScrll.addEventListener("mouseup", (e) => {
        if (setGrbScrll.classList.contains("cursor-grabbing"))
          setGrbScrll.classList.remove("cursor-grabbing") &
            setGrbScrll.classList.add("cursor-grab");
      });
      setGrbScrll.addEventListener("mouseleave", (e) => {
        if (setGrbScrll.classList.contains("cursor-grabbing"))
          setGrbScrll.classList.remove("cursor-grabbing") &
            setGrbScrll.classList.add("cursor-grab");
      });
    }
  }, []);

  return (
    <>
      <div className="flex flex-col gap-x-6 w-full max-w-full">
        <div className="relative">
          <Splide
            ref={elmntRefGrbScrll}
            options={{
              type: "loop",
              updateOnMove: true,
              autoHeight: true,
              perMove: 1,
              focus: "center",
              arrows: false,
              pagination: false,
              keyboard: true,
              fixedWidth: "540px",
              fixedHeight: "160px",
              gap: "24px",
              breakpoints: {
                1024: {
                  pagination: true,
                },

                640: {
                  fixedWidth: "343px",
                  gap: "8px",
                },
              },
            }}
            aria-label="Experiences Events"
            className="myExperiencesEvents grbScrll cursor-grab"
          >
            <SplideSlide className="relative">
              <PostLink
                typePost="blank-link"
                url="https://www.linkedin.com/in/chaniporn-bam-klinsrisook-316ab4204/"
                className="flex flex-col outline-none hocus:outline-none"
              >
                <section className="bg-white flex flex-row items-start rounded-lg relative py-3 sm:py-4 px-3 sm:px-4 min-h-[160px] w-full">
                  <div className="flex-1 bg-[#EDF5FF] flex items-center justify-center rounded-lg sm:rounded-[22px] overflow-hidden mr-2 sm:mr-4 h-full min-h-[64px] sm:min-h-[128px] max-h-[64px] sm:max-h-[128px] w-full min-w-[64px] sm:min-w-[128px] max-w-[64px] sm:max-w-[128px]">
                    <Image
                      className="flex object-cover rounded-full overflow-hidden relative h-10 sm:h-16 w-10 sm:w-16"
                      src={`/2023/assets/images/experiences-testimonials/chaniporn-klinsrisook.jpg`}
                      alt={`${publicRuntimeConfig.appName} (Chaniporn Klinsrisook - Experiences Testimonials)`}
                      height={128}
                      width={128}
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-around h-full">
                    <div
                      className={`${Card.testimnlsCntent} text-black-100 font-bevietnam-pro text-sm font-normal overflow-hidden line-clamp-4 pr-2 min-h-[82px] max-h-[98px]`}
                    >
                      <p>
                        It’s been a week since i’ve been back form Bali! It was
                        very nice to join the first and biggest crypto event in
                        Asia🌏 What a great space to share opportunities around
                        web3, blockchain, NFT & Metaverse at{" "}
                        <span>Coinfest Asia</span> This is my first time
                        visiting Bali, and already in love with this place 🌟🥰{" "}
                        <span>
                          #event #blockchain #web3 #bali #coinfestasia
                          #coinfestasia2022
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-3.5">
                      <span className="text-black-900/50 font-bevietnam-pro text-sm font-normal">
                        @chaniporn-klinsrisook
                      </span>
                      <Image
                        className="h-6 w-6"
                        src={`/2023/assets/images/social-media/linkedin.svg`}
                        alt={`${publicRuntimeConfig.appName} (Chaniporn Klinsrisook LinkedIn - Social Media)`}
                        height={24}
                        width={24}
                      />
                    </div>
                  </div>
                </section>
              </PostLink>
            </SplideSlide>
            <SplideSlide className="relative">
              <PostLink
                typePost="blank-link"
                url="https://twitter.com/coingecko/status/1551530200927612928"
                className="flex flex-col outline-none hocus:outline-none"
              >
                <section className="bg-white flex flex-row items-start rounded-lg relative py-3 sm:py-4 px-3 sm:px-4 min-h-[160px] w-full">
                  <div className="flex-1 bg-[#EDF5FF] flex items-center justify-center rounded-lg sm:rounded-[22px] overflow-hidden mr-2 sm:mr-4 h-full min-h-[64px] sm:min-h-[128px] max-h-[64px] sm:max-h-[128px] w-full min-w-[64px] sm:min-w-[128px] max-w-[64px] sm:max-w-[128px]">
                    <Image
                      className="flex object-cover rounded-full overflow-hidden relative h-10 sm:h-16 w-10 sm:w-16"
                      src={`/2023/assets/images/experiences-testimonials/coingecko.jpg`}
                      alt={`${publicRuntimeConfig.appName} (Coingecko - Experiences Testimonials)`}
                      height={128}
                      width={128}
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-around h-full">
                    <div
                      className={`${Card.testimnlsCntent} text-black-100 font-bevietnam-pro text-sm font-normal overflow-hidden line-clamp-4 pr-2 min-h-[82px] max-h-[98px]`}
                    >
                      <p>Asia’s biggest crypto festival is here! 🥳</p>
                      <br />
                      <p>
                        CoinGecko & Indonesia Crypto Network are giving away
                        #Coinfest Asia tickets to 15 lucky winners. Secure your
                        chance to meet the industry leaders in #Web3, #DeFi,
                        #NFT, #finance, and more! 🔥
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-3.5">
                      <span className="text-black-900/50 font-bevietnam-pro text-sm font-normal">
                        @coingecko
                      </span>
                      <Image
                        className="h-6 w-6"
                        src={`/2023/assets/images/social-media/twitter.svg`}
                        alt={`${publicRuntimeConfig.appName} (Coingecko Twitter - Social Media)`}
                        height={24}
                        width={24}
                      />
                    </div>
                  </div>
                </section>
              </PostLink>
            </SplideSlide>
            <SplideSlide className="relative">
              <PostLink
                typePost="blank-link"
                url="https://www.linkedin.com/feed/update/urn:li:activity:6974002388869246976/?actorCompanyId=80827429"
                className="flex flex-col outline-none hocus:outline-none"
              >
                <section className="bg-white flex flex-row items-start rounded-lg relative py-3 sm:py-4 px-3 sm:px-4 min-h-[160px] w-full">
                  <div className="flex-1 bg-[#EDF5FF] flex items-center justify-center rounded-lg sm:rounded-[22px] overflow-hidden mr-2 sm:mr-4 h-full min-h-[64px] sm:min-h-[128px] max-h-[64px] sm:max-h-[128px] w-full min-w-[64px] sm:min-w-[128px] max-w-[64px] sm:max-w-[128px]">
                    <Image
                      className="flex object-cover rounded-full overflow-hidden relative h-10 sm:h-16 w-10 sm:w-16"
                      src={`/2023/assets/images/experiences-testimonials/oliver-barker.jpg`}
                      alt={`${publicRuntimeConfig.appName} (Oliver Barker - Experiences Testimonials)`}
                      height={128}
                      width={128}
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-around h-full">
                    <div
                      className={`${Card.testimnlsCntent} text-black-100 font-bevietnam-pro text-sm font-normal overflow-hidden line-clamp-4 pr-2 min-h-[82px] max-h-[98px]`}
                    >
                      <p>
                        Amazing experience representing <span>NEAR</span>{" "}
                        Foundation and sharing the stage with{" "}
                        <span>Gwendolyn</span> Regina Emilio{" "}
                        <span>Canessa Emily Parker</span> at{" "}
                        <span>Coinfest Asia</span> In short we all believe
                        Ethereum will remain a key blockchain but with some top
                        layer 1 blockchains emerging to form a multichain
                        future.
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-3.5">
                      <span className="text-black-900/50 font-bevietnam-pro text-sm font-normal">
                        @oliver-barker
                      </span>
                      <Image
                        className="h-6 w-6"
                        src={`/2023/assets/images/social-media/linkedin.svg`}
                        alt={`${publicRuntimeConfig.appName} (Oliver Barker LinkedIn - Social Media)`}
                        height={24}
                        width={24}
                      />
                    </div>
                  </div>
                </section>
              </PostLink>
            </SplideSlide>
            <SplideSlide className="relative">
              <PostLink
                typePost="blank-link"
                url="https://twitter.com/enjinstarter/status/1565610563744432128"
                className="flex flex-col outline-none hocus:outline-none"
              >
                <section className="bg-white flex flex-row items-start rounded-lg relative py-3 sm:py-4 px-3 sm:px-4 min-h-[160px] w-full">
                  <div className="flex-1 bg-[#EDF5FF] flex items-center justify-center rounded-lg sm:rounded-[22px] overflow-hidden mr-2 sm:mr-4 h-full min-h-[64px] sm:min-h-[128px] max-h-[64px] sm:max-h-[128px] w-full min-w-[64px] sm:min-w-[128px] max-w-[64px] sm:max-w-[128px]">
                    <Image
                      className="flex object-cover rounded-full overflow-hidden relative h-10 sm:h-16 w-10 sm:w-16"
                      src={`/2023/assets/images/experiences-testimonials/enjinstarter.jpg`}
                      alt={`${publicRuntimeConfig.appName} (Enjinstarter - Experiences Testimonials)`}
                      height={128}
                      width={128}
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-around h-full">
                    <div
                      className={`${Card.testimnlsCntent} text-black-100 font-bevietnam-pro text-sm font-normal overflow-hidden line-clamp-4 pr-2 min-h-[82px] max-h-[98px]`}
                    >
                      <p>
                        <span>@Coinfest Asia</span> In short we all believe
                        Ethereum will remain a key blockchain but with some top
                        layer 1 blockchains emerging to form a multichain
                        future. <span>@Coinfest Asia</span> was a success! The
                        festival event was attended by more than 1,500
                        individuals from across 52 countries and we are
                        delighted to be one of the sponsor of the first and
                        biggest crypto festival in Asia! 🚀
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-3.5">
                      <span className="text-black-900/50 font-bevietnam-pro text-sm font-normal">
                        @enjinstarter
                      </span>
                      <Image
                        className="h-6 w-6"
                        src={`/2023/assets/images/social-media/twitter.svg`}
                        alt={`${publicRuntimeConfig.appName} (Enjinstarter Twitter - Social Media)`}
                        height={24}
                        width={24}
                      />
                    </div>
                  </div>
                </section>
              </PostLink>
            </SplideSlide>
            <SplideSlide className="relative">
              <PostLink
                typePost="blank-link"
                url="https://www.linkedin.com/feed/update/urn:li:activity:6972801110742892544/?actorCompanyId=80827429"
                className="flex flex-col outline-none hocus:outline-none"
              >
                <section className="bg-white flex flex-row items-start rounded-lg relative py-3 sm:py-4 px-3 sm:px-4 min-h-[160px] w-full">
                  <div className="flex-1 bg-[#EDF5FF] flex items-center justify-center rounded-lg sm:rounded-[22px] overflow-hidden mr-2 sm:mr-4 h-full min-h-[64px] sm:min-h-[128px] max-h-[64px] sm:max-h-[128px] w-full min-w-[64px] sm:min-w-[128px] max-w-[64px] sm:max-w-[128px]">
                    <Image
                      className="flex object-cover rounded-full overflow-hidden relative h-10 sm:h-16 w-10 sm:w-16"
                      src={`/2023/assets/images/experiences-testimonials/timothy-goh.jpg`}
                      alt={`${publicRuntimeConfig.appName} (Timothy Goh - Experiences Testimonials)`}
                      height={128}
                      width={128}
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-around h-full">
                    <div
                      className={`${Card.testimnlsCntent} text-black-100 font-bevietnam-pro text-sm font-normal overflow-hidden line-clamp-4 pr-2 min-h-[82px] max-h-[98px]`}
                    >
                      <p>
                        <span>Coinfest Asia</span> was a refreshing break from
                        conventional “suit and tie” crypto conferences. With
                        (almost) everyone lounging about in shorts by the beach,
                        the event inadvertently showcased a different side to
                        the #crypto community - one that’s more inclusive and
                        down-to-earth. Shoutout to all the amazing people I had
                        the pleasure of meeting!
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-3.5">
                      <span className="text-black-900/50 font-bevietnam-pro text-sm font-normal">
                        @timothy-goh
                      </span>
                      <Image
                        className="h-6 w-6"
                        src={`/2023/assets/images/social-media/linkedin.svg`}
                        alt={`${publicRuntimeConfig.appName} (Timothy Goh LinkedIn - Social Media)`}
                        height={24}
                        width={24}
                      />
                    </div>
                  </div>
                </section>
              </PostLink>
            </SplideSlide>
            <SplideSlide className="relative">
              <PostLink
                typePost="blank-link"
                url="https://www.linkedin.com/posts/okxofficial_okx-activity-6968503518970187776-Pc0R/"
                className="flex flex-col outline-none hocus:outline-none"
              >
                <section className="bg-white flex flex-row items-start rounded-lg relative py-3 sm:py-4 px-3 sm:px-4 min-h-[160px] w-full">
                  <div className="flex-1 bg-[#EDF5FF] flex items-center justify-center rounded-lg sm:rounded-[22px] overflow-hidden mr-2 sm:mr-4 h-full min-h-[64px] sm:min-h-[128px] max-h-[64px] sm:max-h-[128px] w-full min-w-[64px] sm:min-w-[128px] max-w-[64px] sm:max-w-[128px]">
                    <Image
                      className="flex object-cover rounded-full overflow-hidden relative h-10 sm:h-16 w-10 sm:w-16"
                      src={`/2023/assets/images/experiences-testimonials/okx.jpg`}
                      alt={`${publicRuntimeConfig.appName} (OKX - Experiences Testimonials)`}
                      height={128}
                      width={128}
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-around h-full">
                    <div
                      className={`${Card.testimnlsCntent} text-black-100 font-bevietnam-pro text-sm font-normal overflow-hidden line-clamp-4 pr-2 min-h-[82px] max-h-[98px]`}
                    >
                      <p>
                        was a refreshing break from Check out the{" "}
                        <span>#OKX</span> Team at <span>Coinfest Asia</span>! If
                        you run into us, be sure to say hello!
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-3.5">
                      <span className="text-black-900/50 font-bevietnam-pro text-sm font-normal">
                        @okx
                      </span>
                      <Image
                        className="h-6 w-6"
                        src={`/2023/assets/images/social-media/linkedin.svg`}
                        alt={`${publicRuntimeConfig.appName} (OKX LinkedIn - Social Media)`}
                        height={24}
                        width={24}
                      />
                    </div>
                  </div>
                </section>
              </PostLink>
            </SplideSlide>
            <SplideSlide className="relative">
              <PostLink
                typePost="blank-link"
                url="https://www.linkedin.com/posts/anchorage_at-the-end-of-august-ning-ji-our-associate-activity-6981599303630827520-l59I/"
                className="flex flex-col outline-none hocus:outline-none"
              >
                <section className="bg-white flex flex-row items-start rounded-lg relative py-3 sm:py-4 px-3 sm:px-4 min-h-[160px] w-full">
                  <div className="flex-1 bg-[#EDF5FF] flex items-center justify-center rounded-lg sm:rounded-[22px] overflow-hidden mr-2 sm:mr-4 h-full min-h-[64px] sm:min-h-[128px] max-h-[64px] sm:max-h-[128px] w-full min-w-[64px] sm:min-w-[128px] max-w-[64px] sm:max-w-[128px]">
                    <Image
                      className="flex object-cover rounded-full overflow-hidden relative h-10 sm:h-16 w-10 sm:w-16"
                      src={`/2023/assets/images/experiences-testimonials/anchorage-digital.jpg`}
                      alt={`${publicRuntimeConfig.appName} (Anchorage Digital - Experiences Testimonials)`}
                      height={128}
                      width={128}
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-around h-full">
                    <div
                      className={`${Card.testimnlsCntent} text-black-100 font-bevietnam-pro text-sm font-normal overflow-hidden line-clamp-4 pr-2 min-h-[82px] max-h-[98px]`}
                    >
                      <p>
                        At the end of August, <span>Ning Ji</span>, our
                        Associate General Counsel, traveled to Bali for{" "}
                        <span>Coinfest Asia</span>
                        and was featured on a main stage panel about building
                        trust and dependability in the crypto space.
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-3.5">
                      <span className="text-black-900/50 font-bevietnam-pro text-sm font-normal">
                        @anchorage-digital
                      </span>
                      <Image
                        className="h-6 w-6"
                        src={`/2023/assets/images/social-media/linkedin.svg`}
                        alt={`${publicRuntimeConfig.appName} (Anchorage Digital LinkedIn - Social Media)`}
                        height={24}
                        width={24}
                      />
                    </div>
                  </div>
                </section>
              </PostLink>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </>
  );
};

export default LyExperienceEvents;
