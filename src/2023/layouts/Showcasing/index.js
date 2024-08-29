import React, { useEffect, useState } from "react";
import getConfig from "next/config";
import Image from "next/image";

// # Get .config
const { publicRuntimeConfig } = getConfig();

// Css
import Headng from "@styles23/components/Heading.module.css";
import PostLink from "@components23/UI/Post/PostLink";

const LyShowcasing = ({getRef, sponsoredData}) => {
  const [sponsorData, setSponsorData] = useState(sponsoredData);

  const tabScrollDeflt = (e) => {
    const defltScrllTabs = getRef.current.offsetTop;
    
    if (defltScrllTabs) {
      window.scrollTo({
        top: defltScrllTabs - 233,
        left: 0,
        behavior: "smooth",
      });
    }
  };
  
  useEffect(()=>{
    const fetchSponsorData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API}/sponsors?sort=headRank:asc&populate=*&pagination[pageSize]=100`
        );
        const json = await response.json();
        setSponsorData(json.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchSponsorData()
  },[])
  return (
    <>
      <section className="supports-grid:grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-x-6 ">
      {/* <div className="col-start-1 lg:col-start-2 col-span-full lg:col-span-10 block lg:hidden z-10 absolute sm:block w-full -top-24">
          <div className="flex flex-col text-center">
            <h2 className="text-black-100 font-bevietnam-pro text-xl sm:text-[32px] md:text-[42px] lg:text-[56px] sm:leading-[42px] md:leading-[52px] lg:leading-[72px] font-extrabold uppercase">
              Showcasing <span className="text-primary">Web2.5</span> Where
              <br /> <span className="text-primary">Web2</span> &{" "}
              <span className="text-primary">Web3</span> Industries Converge
            </h2>
          </div>
        </div> */}
        <div className="col-span-full z-10 xl:hidden">
         <h3 className="font-bold text-2xl mb-8 text-center uppercase ">sponsored by</h3>
                <div className="flex inline-flex flex-wrap items-center justify-center gap-y-0 w-">
                  {sponsorData && 
                  sponsorData.slice(0, 9).map((data, index) =>
                  <PostLink
                    key={index}
                    typePost="blank-link"
                    url={data.attributes.url}
                    className="flex flex-col items-center justify-center basis-1/2 sm:basis-1/2 lg:basis-1/5 px-0 h-full"
                    >
                      <Image
                        className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[112px] lg:max-h-max w-auto"
                        src={
                            data.attributes.logo.data
                            ? process.env.NEXT_PUBLIC_UPLOAD +
                            data.attributes.logo.data.attributes.url
                            : ""
                            }
                        alt={`${publicRuntimeConfig.appName} (${data.attributes.name} Media - Brand Partner)`}
                        sizes="(min-width: 1874px) 246vw,
                              (min-width: 1536px) 257vw,
                              (min-width: 1280px) 313vw,
                              (min-width: 1024px) 395vw,
                              (min-width: 640px) 631vw,
                              1005vw"
                        height={140}
                        width={220}
                        quality="87"
                        />
                  </PostLink> 
                  )}
                  
                  
                </div>
                <div className="p-4 flex justify-center items-center mt-8">
                <span className={`text-[#2458F1] z-20 font-bold cursor-pointer `} onClick={tabScrollDeflt}>See More</span>
                </div>
                </div>
        <div className="col-span-full">
          <div className="bg-blue-400 rounded-b-2xl relative pt-15 pb-18 sm:pb-28 px-[92px] mt-10 sm:mt-16 lg:mt-20 -mx-[92px]">
            <div className="absolute -top-[103px] sm:-top-[174px] left-1 sm:-left-10 lg:-left-[17px] right-auto bottom-auto h-auto w-[99.33px] sm:w-[163.33px] lg:w-[192.33px] select-none pointer-events-none z-[5]">
              <Image
                className="h-auto w-full"
                src={`/2023/assets/images/backdrop/explore-items-left.svg`}
                alt={`${publicRuntimeConfig.appName} (Explore - Left Items Backdrop)`}
                height={1329}
                width={1440}
              />
            </div>
            <div className="absolute -top-[103px] sm:-top-[174px] left-auto right-1 sm:-right-10 lg:-right-[17px] bottom-auto h-auto w-[99.33px] sm:w-[163.33px] lg:w-[192.33px] select-none pointer-events-none z-[5]">
              <Image
                className="h-auto w-full"
                src={`/2023/assets/images/backdrop/explore-items-right.svg`}
                alt={`${publicRuntimeConfig.appName} (Explore - Right Items Backdrop)`}
                height={1329}
                width={1440}
              />
            </div>

            <div className="flex flex-col text-center relative mx-auto xl:mx-0 max-w-full sm:max-w-[593px] xl:max-w-full z-10">
              <h2
                className={`${Headng.hdingTitle} font-bevietnam-pro text-white font-bold`}
              >
                Coinfest Asia is anything{" "}
                <span className="text-secondary italic">BUT typical</span>
              </h2>
              <p className="text-white font-bevietnam-pro text-lg sm:text-xl font-normal mt-3">
                Get practical insights and gain valuable connections through an
                immersive festival experience.
              </p>
            </div>
            <div className="supports-grid:grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-x-6 relative mt-9 z-10">
              <div className="col-span-full lg:col-span-4 flex flex-col items-end relative">
                <div className="bg-white flex flex-col rounded-lg py-4 sm:py-6 lg:py-4 xl:py-6 px-4 sm:px-6 lg:px-4 xl:px-6 mt-12 mx-auto h-full w-full sm:w-[517px] lg:w-full">
                  <div className="flex rounded-lg overflow-hidden -mt-12 w-full">
                    <Image
                      className="object-cover h-auto w-full"
                      src={`/2023/assets/images/anything-festival/grow-network.jpg`}
                      alt={`${publicRuntimeConfig.appName} (Grow Network - Anything Festival)`}
                      height={512}
                      width={728}
                    />
                  </div>
                  <div className="flex flex-col mt-4">
                    <h3 className="text-black-900 font-bevietnam-pro text-xl font-bold">
                      GROW YOUR NETWORK
                    </h3>
                    <p className="text-black-900 font-bevietnam-pro text-base font-normal mt-2">
                      Connect with industry leaders, exchange ideas, and build
                      relationships to grow your businesses and projects.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-full lg:col-span-4 flex flex-col items-end relative">
                <div className="bg-white flex flex-col rounded-lg py-4 sm:py-6 lg:py-4 xl:py-6 px-4 sm:px-6 lg:px-4 xl:px-6 mt-12 mx-auto h-full w-full sm:w-[517px] lg:w-full">
                  <div className="flex rounded-lg overflow-hidden -mt-12 w-full">
                    <Image
                      className="object-cover h-auto w-full"
                      src={`/2023/assets/images/anything-festival/discover.jpg`}
                      alt={`${publicRuntimeConfig.appName} (Discover - Anything Festival)`}
                      height={512}
                      width={728}
                    />
                  </div>
                  <div className="flex flex-col mt-4">
                    <h3 className="text-black-900 font-bevietnam-pro text-xl font-bold">
                      DISCOVER REAL USE CASES
                    </h3>
                    <p className="text-black-900 font-bevietnam-pro text-base font-normal mt-2">
                      Explore tangible solutions that bridge the gap between
                      Web2 and Web3 industries.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-full lg:col-span-4 flex flex-col items-end relative">
                <div className="bg-white flex flex-col rounded-lg py-4 sm:py-6 lg:py-4 xl:py-6 px-4 sm:px-6 lg:px-4 xl:px-6 mt-12 mx-auto h-full w-full sm:w-[517px] lg:w-full">
                  <div className="flex rounded-lg overflow-hidden -mt-12 w-full">
                    <Image
                      className="object-cover h-auto w-full"
                      src={`/2023/assets/images/anything-festival/innovate.jpg`}
                      alt={`${publicRuntimeConfig.appName} (Innovate - Anything Festival)`}
                      height={512}
                      width={728}
                    />
                  </div>
                  <div className="flex flex-col mt-4">
                    <h3 className="text-black-900 font-bevietnam-pro text-xl font-bold">
                      INNOVATE IDEAS
                    </h3>
                    <p className="text-black-900 font-bevietnam-pro text-base font-normal mt-2">
                      Participate in hands-on workshops and discussions to gain
                      the latest developments and practices in the industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-transparent rounded-b-2xl overflow-hidden absolute inset-y-0 inset-x-0 z-0.5">
              <div className="bg-[#FF52C3] rounded-r-full absolute top-auto -left-[17px] sm:-left-2 lg:-left-[27px] -bottom-[27px] sm:-bottom-[53px] h-16 sm:h-[104px] w-[184px] sm:w-[208.98px] select-none pointer-events-none"></div>
              <div className="bg-[#04FDE7] rounded-l-full absolute top-auto -right-[17px] sm:-right-2 lg:-right-[27px] -bottom-[27px] sm:-bottom-[53px] h-16 sm:h-[104px] w-[184px] sm:w-[208.98px] select-none pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LyShowcasing;
