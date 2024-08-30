import React, { useRef, useEffect, useState } from "react";
import { Splide, SplideSlide, } from "@splidejs/react-splide";
import getConfig from "next/config";
import Image from "next/image";


//icon
import { ArrowLongRightIcon, ArrowLongLeftIcon } from "@heroicons/react/24/outline";
import {  ArrowUpRightIcon } from "@heroicons/react/20/solid";

// # Get .config
const { publicRuntimeConfig } = getConfig();

// Css
import "@splidejs/react-splide/css";
import Headng from "@styles23/components/Heading.module.css";
import Card from "@styles23/components/Card.module.css";
import Link from "next/link";

const LyKeyExperiences = () => {
  // const elmntRefGrbScrll = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  // const totalPage = 4
  const splideRef = useRef(null); // Create a ref for the Splide component

  const handlePrevClick = () => {
    if (splideRef.current) { 
        splideRef.current.go('-1'); // Navigate to the previous slide
        if(currentPage>0){
          setCurrentPage(currentPage-1)
        } else{
          setCurrentPage(3)
        }
        
        
    } 
  };

  const handleNextClick = () => {
    if (splideRef.current) {
      splideRef.current.go('+1'); // Navigate to the previous slide
      if(currentPage<3){
        setCurrentPage(currentPage+1)
      } else{
        setCurrentPage(0)
      }
    }
  };

  const handlePaginationClick = (index) => {
    setCurrentPage(index);
    splideRef.current.go(index);
  };
  
  const handleMove = (index) =>{
    setCurrentPage(index)
  }


  // useEffect(() => {
  //   // const getGrbScrll = elmntRefGrbScrll.current;
  //   // const setGrbScrll = getGrbScrll.splideRef.current;

  //   if (setGrbScrll && setGrbScrll.classList.contains("grbScrll")) {
  //     setGrbScrll.addEventListener("mousedown", (e) => {
  //       if (setGrbScrll.classList.contains("cursor-grab"))
  //         setGrbScrll.classList.remove("cursor-grab") &
  //           setGrbScrll.classList.add("cursor-grabbing");
  //     });
  //     setGrbScrll.addEventListener("mouseup", (e) => {
  //       if (setGrbScrll.classList.contains("cursor-grabbing"))
  //         setGrbScrll.classList.remove("cursor-grabbing") &
  //           setGrbScrll.classList.add("cursor-grab");
  //     });
  //     setGrbScrll.addEventListener("mouseleave", (e) => {
  //       if (setGrbScrll.classList.contains("cursor-grabbing"))
  //         setGrbScrll.classList.remove("cursor-grabbing") &
  //           setGrbScrll.classList.add("cursor-grab");
  //     });
  //   }
  // }, []);

  return (
    <>
      <section className="my-6">
        <div className="flex flex-col px-4 sm:px-0">
          <h2
            className={`${Headng.hdingTitle} font-bevietnam-pro text-black-500 font-extrabold uppercase`}
          >
            Key Experiences
          </h2>
          <p
            className={`text-gray-800 font-bevietnam-pro text-lg sm:text-xl mt-2 sm:mt-4`}
          >
            What you will get at Coinfest Asia 2023.
          </p>
        </div>
        <div className="flex flex-col gap-x-6 mt-6 w-full max-w-full">
          <div className=" max-sm:container">
            {/* <Splide
              ref={elmntRefGrbScrll}
              options={{
                type: "loop",
                updateOnMove: true,
                autoHeight: true,
                perMove: 1,
                arrows: false,
                pagination: false,
                keyboard: true,
                autoplay: true,
                fixedWidth: "302px",
                fixedHeight: "375px",
                gap: "24px",
                breakpoints: {
                  640: {
                    gap: "16px",
                    padding: { left: "16px", right: "16px" },
                  },
                },
              }}
              aria-label="Key Experiences"
              className="myKeyExperiences grbScrll cursor-grab splideGryscle pb-8 lg:pb-14 xl:pb-20"
            >
              <SplideSlide className="relative">
                <section className={`${Card.experiencs} h-[270px] w-full`}>
                  <div className="relative z-10">
                    <h3 className={`${Card.experiencsHdingTitle}`}>
                      Panel Discussions
                    </h3>
                    <p className={`${Card.experiencsHdingDesc} mt-2`}>
                      Get insights on the latest Web3 trends and developments.
                    </p>
                  </div>
                  <div className="flex flex-col absolute top-24 left-auto right-0 h-auto w-[255px] z-5">
                    <Image
                      classs="h-auto w-full"
                      src={`/2023/assets/images/key-experiences/panel-discussions.svg`}
                      alt={`${publicRuntimeConfig.appName} (Panel Discussions - Key Experiences)`}
                      height={303}
                      width={290}
                    />
                  </div>
                </section>
              </SplideSlide>
              <SplideSlide className="relative">
                <section className={`${Card.experiencs} h-[270px] w-full`}>
                  <div className="relative z-10">
                    <h3 className={`${Card.experiencsHdingTitle}`}>
                      Breakout Sessions
                    </h3>
                    <p className={`${Card.experiencsHdingDesc} mt-2`}>
                      Establish engaging relationship with Web3 trailblazers.
                    </p>
                  </div>
                  <div className="flex flex-col absolute top-24 left-auto right-0 h-auto w-[255px] z-5">
                    <Image
                      classs="h-auto w-full"
                      src={`/2023/assets/images/key-experiences/breakout-sessions.svg`}
                      alt={`${publicRuntimeConfig.appName} (Breakout Sessions - Key Experiences)`}
                      height={303}
                      width={290}
                    />
                  </div>
                </section>
              </SplideSlide>
              <SplideSlide className="relative">
                <section className={`${Card.experiencs} h-[270px] w-full`}>
                  <div className="relative z-10">
                    <h3 className={`${Card.experiencsHdingTitle}`}>
                      Networking Area
                    </h3>
                    <p className={`${Card.experiencsHdingDesc} mt-2`}>
                      Grow valuable connections to build strategic partnerships.
                    </p>
                  </div>
                  <div className="flex flex-col absolute top-24 left-auto right-0 h-auto w-[255px] z-5">
                    <Image
                      classs="h-auto w-full"
                      src={`/2023/assets/images/key-experiences/networking-area.svg`}
                      alt={`${publicRuntimeConfig.appName} (Networking Area - Key Experiences)`}
                      height={303}
                      width={290}
                    />
                  </div>
                </section>
              </SplideSlide>
            </Splide> */}
            <Splide  
             options={{
              type: "loop",
              perMove: 1, // Move 1 slide at a time when navigating.
              pagination: false, // Disable built-in pagination for now.
              gap: '24px', // Add 1rem gap between slides (optional).
              fixedWidth: "282px",
              arrows: false,
              }}
              className="mb-6"
              ref={splideRef}
              onMove={(splide, newIndex)=>{handleMove(newIndex)}}
              onScroll={(splide, newIndex) =>{handleMove(newIndex)}}
              
            >
              <SplideSlide className="">
                <div className="rounded-lg overflow-hidden">
                <Image
                  classs="h-auto w-full "
                  src={`/2023/assets/images/key-experiences/BreakoutSessions.jpg`}
                  alt={`${publicRuntimeConfig.appName} (Breakout Sessions - Key Experiences)`}
                  height={282}
                  width={282}
                  />
                </div>
                <div className="my-4">
                <h3 className={`${Card.experiencsHdingTitle}`}>
                  Breakout Sessions
                </h3>
                <p className={`${Card.experiencsHdingDesc} mt-2`}>
                  Connect with 100+ speakers and explore business opportunities.
                </p>
                </div>
                <Link
                  className={`flex text-[#2458F1] gap-x-2 text-sm sm:text-base font-semibold   items-center w-fit`}
                  href={"/speaker"}
                  >
                    See speakers attending
                    <ArrowUpRightIcon className="w-[20px] h-[20px]" />
                  </Link>
              </SplideSlide>
              <SplideSlide className="">
                <div className="rounded-lg overflow-hidden">
                <Image
                  classs="h-auto w-full "
                  src={`/2023/assets/images/key-experiences/PanelDiscussions.jpg`}
                  alt={`${publicRuntimeConfig.appName} (Panel Discussions - Key Experiences)`}
                  height={282}
                  width={282}
                  />
                </div>
                <div className="my-4">
                <h3 className={`${Card.experiencsHdingTitle}`}>
                      Panel Discussions
                </h3>
                <p className={`${Card.experiencsHdingDesc} mt-2`}>
                  Dive into thought-provoking discussions on latest tech & trends.
                </p>
                </div>
                <Link
                  className={`flex text-[#2458F1] gap-x-2 text-sm sm:text-base font-semibold   items-center w-fit`}
                  href={"/agenda"}
                  >
                    See schedules
                    <ArrowUpRightIcon className="w-[20px] h-[20px]" />
                </Link>
              </SplideSlide>
              <SplideSlide className="">
                <div className="rounded-lg overflow-hidden">
                <Image
                  classs="h-auto w-full "
                  src={`/2023/assets/images/key-experiences/GovernmentSessions.jpg`}
                  alt={`${publicRuntimeConfig.appName} (Government Sessions - Key Experiences)`}
                  height={282}
                  width={282}
                  />
                </div>
                <div className="my-4">
                <h3 className={`${Card.experiencsHdingTitle}`}>
                  Government Sessions
                </h3>
                <p className={`${Card.experiencsHdingDesc} mt-2`}>
                  Engage directly & pitch your solutions to Government.
                </p>
                </div>
                <Link
                  className={`flex text-[#2458F1] gap-x-2 text-sm sm:text-base font-semibold   items-center w-fit`}
                  href={"https://s.id/ca23pitchgovernment"}
                  target="blank"
                  >
                    Pitch your solutions
                    <ArrowUpRightIcon className="w-[20px] h-[20px]" />
                </Link>
              </SplideSlide>
              <SplideSlide className="">
                <div className="rounded-lg overflow-hidden">
                <Image
                  classs="h-auto w-full "
                  src={`/2023/assets/images/key-experiences/SpecialMeetups.jpg`}
                  alt={`${publicRuntimeConfig.appName} (Government Sessions - Key Experiences)`}
                  height={282}
                  width={282}
                  />
                </div>
                <div className="my-4">
                <h3 className={`${Card.experiencsHdingTitle}`}>
                  Special Meetups
                </h3>
                <p className={`${Card.experiencsHdingDesc} mt-2`}>
                  Connections made, ideas sparked, and visions become realities
                </p>
                </div>
                <Link
                  className={`flex text-[#2458F1] gap-x-2 text-sm sm:text-base font-semibold   items-center w-fit`}
                  href={"/agenda"}
                  >
                    Side sessions 
                    <ArrowUpRightIcon className="w-[20px] h-[20px]" />
                </Link>
              </SplideSlide>
            </Splide>

            <div className="w-full flex 2xl:hidden justify-between items-center">
              <div className="w-fit">
              {[...Array(4).keys()].map((index) => (
                <button
                  key={index}
                  className={`${index === currentPage ? 'active w-8 h-2 bg-primary mr-2 rounded-3xl' : 'w-2 h-2 bg-[#DCDCDC] rounded-full mr-2'}` }
                  onClick={() => handlePaginationClick(index)}
                >
                </button>
              ))}
              </div>
              <div className="w-fit flex gap-x-2">
                <div className="custom-arrow custom-arrow--prev w-10 h-10 flex justify-center items-center" onClick={handlePrevClick}>
                  <ArrowLongLeftIcon className="w-6 h-6" />
                </div>
                <div className="custom-arrow custom-arrow--next w-10 h-10 flex justify-center items-center" onClick={handleNextClick}>
                  <ArrowLongRightIcon className="w-6 h-6"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LyKeyExperiences;
