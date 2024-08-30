import React, { useEffect, useState } from "react";
import Head from "next/head";

// UI
import Container from "@components23/Container";
import Main from "@components23/Main";
import SpeakerCard from "@components23/UI/Card/SpeakerCard";
import Buttons from "@components23/UI/Buttons";
import { SparklesIcon } from "@heroicons/react/20/solid";

const Speaker = () => {
  // const speakerData = SpeakerData
  const [speakerData, setSpeakerData] = useState(null);
  useEffect(() => {
    const fetchSpeaker = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API}/speakers?sort=rank:asc&populate=*&pagination[pageSize]=100`
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
      {/* Head Speaker */}
      <Head>
        <title>Speaker | ASIA’S IMMERSIVE WEB3 FESTIVAL</title>
        <meta name="title" content="Speaker | ASIA’S IMMERSIVE WEB3 FESTIVAL" />
        <meta
          name="description"
          content="Coinfest Asia is Asia's immersive web3 festival. Coinfest Asia 2023 converges Web2 and Web3 industries to explore real-world insights and valuable connections through an immersive festival experience."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://coinfest.asia/" />
        <meta
          property="og:title"
          content="Speaker | ASIA’S IMMERSIVE WEB3 FESTIVAL"
        />
        <meta
          property="og:description"
          content="Coinfest Asia is Asia's immersive web3 festival. Coinfest Asia 2023 converges Web2 and Web3 industries to explore real-world insights and valuable connections through an immersive festival experience."
        />
        <meta
          property="og:image"
          content="/assets/thumbnail-share/app-thumbnail.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://coinfest.asia/" />
        <meta
          property="twitter:title"
          content="Speaker | ASIA’S IMMERSIVE WEB3 FESTIVAL"
        />
        <meta
          property="twitter:description"
          content="Coinfest Asia is Asia's immersive web3 festival. Coinfest Asia 2023 converges Web2 and Web3 industries to explore real-world insights and valuable connections through an immersive festival experience."
        />
        <meta
          property="twitter:image"
          content="/assets/thumbnail-share/app-thumbnail.jpg"
        />
      </Head>
      <Main className="flex flex-col mt-[127px] sm:mt-[176px]">
        <Container>
          <div className="supports-grid:grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-6 sm:gap-y-12 gap-x-6 mt-14 sm:mt-16">
            <div className="col-span-full">
              <div className="w-full">
                <h1 className="font-bold sm:font-extrabold text-2xl  sm:text-[40px] sm:leading-[50.6px] text-center uppercase">
                  100+ Influential Speakers
                </h1>
                <p className="font-normal text-base sm:text-xl text-center">
                  Connect and do business with web2 & web3 Industry leaders!
                </p>
              </div>
            </div>
            {speakerData && (
              <div className="col-span-full supports-grid:grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-10 gap-y-4 gap-x-4">
                {speakerData.map((data, index) => (
                  <SpeakerCard key={index} {...data} />
                ))}
              </div>
            )}
            <div className="col-start-1 col-end-5 sm:col-start-3 sm:col-end-7 lg:col-start-5 lg:col-end-9">
              <Buttons
                className="btn-block font-semibold px-4 "
                typeBtn="btn-disabled"
                rounded="pill"
                label="More to be announced"
                variants="btn-primary"
                withIcons={true}
                positionIcons="right"
                ariaLabel="btnMoreTobeAnnounced"
              >
                <SparklesIcon className="ml-4 w-5 h-5" />
              </Buttons>
            </div>
          </div>
        </Container>
      </Main>
    </>
  );
};

export default Speaker;
