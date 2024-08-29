import React, { useEffect, useState } from "react";
import getConfig from "next/config";
import Image from "next/image";

// # Get .config
const { publicRuntimeConfig } = getConfig();

// Css
import Headng from "@styles23/components/Heading.module.css";

// Ui - Components
import ImagesFill from "@components23/UI/ImagesFill";
import Buttons from "@components23/UI/Buttons";
import SpeakerCard from "@components23/UI/Card/SpeakerCard";
import Container from "@components23/Container";

const LyTrailblazers = () => {
  const [speakerData, setSpeakerData] = useState(null);
  useEffect(() => {
    const fetchSpeaker = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API}/speakers?sort=rank:asc&populate=*&pagination[pageSize]=20`
        );
        const json = await response.json();
        setSpeakerData(json.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchSpeaker();
  }, []);

  return (
    <>
      <div className="relative w-full">
        <Container>
          <div className="relative w-full pb-5">
            <div className="w-full my-16">
              <h1 className="font-extrabold text-2xl sm:text-[40px] sm:leading-[50.6px] text-center uppercase">
                100+ Influential Speakers
              </h1>
              <p className="font-normal text-lg sm:text-xl text-center">
                Connect and do business with web2 & web3 Industry leaders!
              </p>
            </div>
            {speakerData && (
              <div className="w-full col-span-full supports-grid:grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-10 gap-y-4 sm:gap-y-4 gap-x-4 relative">
                {speakerData.map((data, index) => (
                  <SpeakerCard key={index} {...data} />
                ))}
              </div>
            )}
            <div className="w-full absolute bottom-0 z-[55] pointer-events-none">
              <div className="w-full h-[250px] bg-gradient-to-t from-white to-transparant"></div>
              <div className="w-full h-[150px] z-[20] bg-white"></div>
            </div>

            <div className="w-full absolute  bottom-0 h-[500px] pointer-events-none">
              <ImagesFill
                className=" w-full h-[350px] md:h-[400px] z-[50]"
                src={`/2023/assets/images/trailblazers/Clouds.png`}
                alt={`cloud`}
                priority={true}
              />
            </div>

            <div className="flex justify-center w-full z-[60] bottom-16 absolute">
              <Buttons
                className="btn-block font-semibold px-4"
                typeBtn="btn-link"
                url="/speaker"
                label="SHOW MORE"
                variants="btn-primary"
                text="uppercase"
                ariaLabel="btnGetInvolvedFor2023"
              />
            </div>
          </div>

          {/* <div className="z-40 absolute bottom-0 w-full h-[45%] flex flex-col">
            <div className=" bg-gradient-to-t from-white from-98% to-transparant z-50 h-1/2"></div>
            <div className="bg-white h-2/2"></div>
          </div>
      </div> */}

          {/* <section className="trailblazer supports-grid:grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-x-4 sm:gap-x-6">
        <div className="col-span-1 sm:col-span-2 lg:col-span-4 relative h-[264px] sm:h-[513px] lg:h-[626px]">
          <div className="flex flex-col absolute left-auto right-0 bottom-0 h-[264px] sm:h-[513px] lg:h-[626px] w-[191px] sm:w-[373px] lg:w-[458px] select-none pointer-events-none z-10">
            <ImagesFill
              className="h-full w-full"
              src={`/2023/assets/images/backdrop/trailblazers-speakers.svg`}
              alt={`${publicRuntimeConfig.appName} (Trailblazers Speakers)`}
              priority={true}
            />
          </div>
        </div>
        <div className="col-span-3 sm:col-span-6 lg:col-span-8 flex flex-col items-center justify-center pt-5 sm:pt-0 pl-0 sm:pl-4 lg:pl-12 xl:pl-16">
          <div className="flex flex-col">
            <h2
              className={`${Headng.hdingTitle} font-bevietnam-pro text-black-500 font-extrabold uppercase`}
            >
              <span className="text-primary">PRACTITIONERS</span> NOT PREACHERS
            </h2>
            <p
              className={`${Headng.hdingDesc} text-gray-800 mt-2 sm:mt-6 lg:mt-8`}
            >
              If you are practitioners who know how to deliver tractions and
              tangible solutions, we are looking for you! Coinfest Asia is
              welcoming Trailblazers from Web2 and Web3 industries to speak and
              deliver insights.
            </p>
            <div className="mt-4 sm:mt-6 lg:mt-8">
              <Buttons
                typeBtn="btn-blank-link"
                url="https://bit.ly/ca23speaker"
                label="Apply as Speaker"
                variants="btn-primary"
                text="uppercase"
                ariaLabel="btnTrailblazer"
                className="font-semibold px-4"
              />
            </div>
          </div>
        </div>
      </section> */}
          {/* <section>
        <div className="flex flex-col text-center relative mx-auto xl:mx-0 max-w-full sm:max-w-[593px] xl:max-w-full z-10">
          <h2
            className={`${Headng.hdingTitle} font-bevietnam-pro text-black-500 font-extrabold uppercase`}
          >
            TRAILBLAZERS
          </h2>
          <p className={`${Headng.hdingDesc} text-gray-800 mt-2`}>
            Welcoming Trailblazers from Web2 and Web3 industries to speak and
            deliver insights.
          </p>
        </div>
        <div className="supports-grid:grid grid-cols-4 sm:grid-cols-12 gap-y-4 sm:gap-y-6 gap-x-4 sm:gap-x-6 mt-8">
          <div className="col-span-2 sm:col-span-4 lg:col-span-3">
            <div className="bg-gray-300 rounded-xl overflow-hidden relative h-[197px] sm:h-[255px] xl:h-[317px] w-full">
              <div className="absolute inset-y-0 inset-x-0 z-[4]">
                <Image
                  className="object-cover object-center h-full w-full"
                  src={`/2023/assets/images/trailblazers/trailblazers-1.jpg`}
                  alt={`${publicRuntimeConfig.appName} (Trailblazers 1 - Rrailblazers)`}
                  height={428}
                  width={617}
                />
              </div>
              <div className="bg-gradient-to-b from-black-900/0 to-black-900 text-white font-bevietnam-pro text-base absolute top-auto bottom-0 inset-x-0 px-4 py-6 z-[5]">
                <h3 className="font-bold">Julius Agus Salim</h3>
                <p className="font-normal">
                  Founder at Famindo Inovasi Teknologi
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-4 lg:col-span-3">
            <div className="bg-gray-300 rounded-xl overflow-hidden relative h-[197px] sm:h-[255px] xl:h-[317px] w-full">
              <div className="absolute inset-y-0 inset-x-0 z-[4]">
                <Image
                  className="object-cover object-center h-full w-full"
                  src={`/2023/assets/images/trailblazers/trailblazers-1.jpg`}
                  alt={`${publicRuntimeConfig.appName} (Trailblazers 1 - Rrailblazers)`}
                  height={428}
                  width={617}
                />
              </div>
              <div className="bg-gradient-to-b from-black-900/0 to-black-900 text-white font-bevietnam-pro text-base absolute top-auto bottom-0 inset-x-0 px-4 py-6 z-[5]">
                <h3 className="font-bold">Julius Agus Salim</h3>
                <p className="font-normal">
                  Founder at Famindo Inovasi Teknologi
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-4 lg:col-span-3">
            <div className="bg-gray-300 rounded-xl overflow-hidden relative h-[197px] sm:h-[255px] xl:h-[317px] w-full">
              <div className="absolute inset-y-0 inset-x-0 z-[4]">
                <Image
                  className="object-cover object-center h-full w-full"
                  src={`/2023/assets/images/trailblazers/trailblazers-1.jpg`}
                  alt={`${publicRuntimeConfig.appName} (Trailblazers 1 - Rrailblazers)`}
                  height={428}
                  width={617}
                />
              </div>
              <div className="bg-gradient-to-b from-black-900/0 to-black-900 text-white font-bevietnam-pro text-base absolute top-auto bottom-0 inset-x-0 px-4 py-6 z-[5]">
                <h3 className="font-bold">Julius Agus Salim</h3>
                <p className="font-normal">
                  Founder at Famindo Inovasi Teknologi
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-4 lg:col-span-3">
            <div className="bg-gray-300 rounded-xl overflow-hidden relative h-[197px] sm:h-[255px] xl:h-[317px] w-full">
              <div className="absolute inset-y-0 inset-x-0 z-[4]">
                <Image
                  className="object-cover object-center h-full w-full"
                  src={`/2023/assets/images/trailblazers/trailblazers-1.jpg`}
                  alt={`${publicRuntimeConfig.appName} (Trailblazers 1 - Rrailblazers)`}
                  height={428}
                  width={617}
                />
              </div>
              <div className="bg-gradient-to-b from-black-900/0 to-black-900 text-white font-bevietnam-pro text-base absolute top-auto bottom-0 inset-x-0 px-4 py-6 z-[5]">
                <h3 className="font-bold">Julius Agus Salim</h3>
                <p className="font-normal">
                  Founder at Famindo Inovasi Teknologi
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-4 lg:col-span-3">
            <div className="bg-gray-300 rounded-xl overflow-hidden relative h-[197px] sm:h-[255px] xl:h-[317px] w-full">
              <div className="absolute inset-y-0 inset-x-0 z-[4]">
                <Image
                  className="object-cover object-center h-full w-full"
                  src={`/2023/assets/images/trailblazers/trailblazers-1.jpg`}
                  alt={`${publicRuntimeConfig.appName} (Trailblazers 1 - Rrailblazers)`}
                  height={428}
                  width={617}
                />
              </div>
              <div className="bg-gradient-to-b from-black-900/0 to-black-900 text-white font-bevietnam-pro text-base absolute top-auto bottom-0 inset-x-0 px-4 py-6 z-[5]">
                <h3 className="font-bold">Julius Agus Salim</h3>
                <p className="font-normal">
                  Founder at Famindo Inovasi Teknologi
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-4 lg:col-span-3">
            <div className="bg-gray-300 rounded-xl overflow-hidden relative h-[197px] sm:h-[255px] xl:h-[317px] w-full">
              <div className="absolute inset-y-0 inset-x-0 z-[4]">
                <Image
                  className="object-cover object-center h-full w-full"
                  src={`/2023/assets/images/trailblazers/trailblazers-1.jpg`}
                  alt={`${publicRuntimeConfig.appName} (Trailblazers 1 - Rrailblazers)`}
                  height={428}
                  width={617}
                />
              </div>
              <div className="bg-gradient-to-b from-black-900/0 to-black-900 text-white font-bevietnam-pro text-base absolute top-auto bottom-0 inset-x-0 px-4 py-6 z-[5]">
                <h3 className="font-bold">Julius Agus Salim</h3>
                <p className="font-normal">
                  Founder at Famindo Inovasi Teknologi
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-4 lg:col-span-3">
            <div className="bg-gray-300 rounded-xl overflow-hidden relative h-[197px] sm:h-[255px] xl:h-[317px] w-full">
              <div className="absolute inset-y-0 inset-x-0 z-[4]">
                <Image
                  className="object-cover object-center h-full w-full"
                  src={`/2023/assets/images/trailblazers/trailblazers-1.jpg`}
                  alt={`${publicRuntimeConfig.appName} (Trailblazers 1 - Rrailblazers)`}
                  height={428}
                  width={617}
                />
              </div>
              <div className="bg-gradient-to-b from-black-900/0 to-black-900 text-white font-bevietnam-pro text-base absolute top-auto bottom-0 inset-x-0 px-4 py-6 z-[5]">
                <h3 className="font-bold">Julius Agus Salim</h3>
                <p className="font-normal">
                  Founder at Famindo Inovasi Teknologi
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-4 lg:col-span-3">
            <div className="bg-primary rounded-xl overflow-hidden relative h-[197px] sm:h-[255px] xl:h-[317px] w-full">
              <div className="flex flex-col flex-items justify-center text-white font-bevietnam-pro text-xl absolute top-0 bottom-0 inset-x-0 px-4 py-6 z-[5]">
                <h3 className="font-bold text-center">
                  SEE ALL THE{" "}
                  <span className="text-secondary">TRAILBLAZERS</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section> */}
        </Container>
      </div>
    </>
  );
};

export default LyTrailblazers;
