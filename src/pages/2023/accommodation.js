import React, { useState, useEffect } from "react";
import getConfig from "next/config";
import Head from "next/head";
import Image from "next/image";


// # Get .config
const { publicRuntimeConfig } = getConfig();

// Ui - Components
import Container from "@components23/Container";
import Main from "@components23/Main";
import PostLink from "@components23/UI/Post/PostLink";
import Buttons from "@components23/UI/Buttons";
import Link from "next/link";

const Accommodation = () => {
  const [accommodationData, setAccommodationData] = useState(null);

  const fetchAccommodationData = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/accommodations?sort=rank:asc&populate=*&pagination[pageSize]=100`
    );
    const json = await response.json();
    setAccommodationData(json.data);
  };

  useEffect(() => {
    fetchAccommodationData();
  });

  return (
    <>
      {/* Head (Accommodation) */}
      <Head>
        <title>Accommodation | ASIA’S IMMERSIVE WEB3 FESTIVAL IS BACK</title>
        <meta
          name="title"
          content="Accommodation | ASIA’S IMMERSIVE WEB3 FESTIVAL IS BACK"
        />
        <meta
          name="description"
          content="Coinfest Asia 📍 Bali, 24-25 August 2023 | Explore real-world insights and valuable connections in Web2.5 where web2 and web3 industries converge through an immersive festival experience."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://coinfest.asia/" />
        <meta
          property="og:title"
          content="Accommodation | ASIA’S IMMERSIVE WEB3 FESTIVAL IS BACK"
        />
        <meta
          property="og:description"
          content="Coinfest Asia 📍 Bali, 24-25 August 2023 | Explore real-world insights and valuable connections in Web2.5 where web2 and web3 industries converge through an immersive festival experience."
        />
        <meta
          property="og:image"
          content="https://ticket.coinfest.asia/wp-content/uploads/2023/06/CA_Bali-Clifftop-Header-Newsletter.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://coinfest.asia/" />
        <meta
          property="twitter:title"
          content="Accommodation | ASIA’S IMMERSIVE WEB3 FESTIVAL IS BACK"
        />
        <meta
          property="twitter:description"
          content="Coinfest Asia 📍 Bali, 24-25 August 2023 | Explore real-world insights and valuable connections in Web2.5 where web2 and web3 industries converge through an immersive festival experience."
        />
        <meta
          property="twitter:image"
          content="https://ticket.coinfest.asia/wp-content/uploads/2023/06/CA_Bali-Clifftop-Header-Newsletter.png"
        />
      </Head>

      <Main className="mt-[60px] sm:mt-[100px]">
        <header className="headrClipPath flex flex-col items-center justify-center bg-[#2458F1] relative h-[384.34px] sm:h-[439.35px] lg:h-[639.35px]">
          <Container className="flex flex-col justify-center h-full relative">
            <div className="flex flex-col max-w-full lg:max-w-[492px] xl:max-w-[624px]">
              <h1 className="text-white font-bevietnam-pro text-[32px] sm:text-[48px] xl:text-[72px] leading-[42px] sm:leading-[68px] xl:leading-[82px] font-bold uppercase max-w-full sm:max-w-[428px] xl:max-w-full">
                Travel to Bali{" "}
                <span className="text-secondary">Hassle-Free</span>
              </h1>
              <p className="text-white font-bevietnam-pro text-base sm:text-xl font-normal mt-2">
                Pack your bags and get ready to feel the summer heat as Bali
                will be packed with global Web2 and Web3 institutions &
                communities. Book your stay for Coinfest Asia 2023 and get
                special rates from our partners. From luxurious hotels to
                budget-friendly villas, our partners have you covered.
              </p>
            </div>
            <div className="hidden lg:flex absolute top-auto bottom-0 left-auto right-0 h-[483.09px] xl:h-[572.09px] w-auto">
              <Image
                className="object-cover object-center my-auto mx-auto h-full w-auto"
                src={`/2023/assets/images/backdrop/header-accommodation.svg`}
                alt={`${publicRuntimeConfig.appName} (InterContinental Jimbaran Accomodation - Brand Partner)`}
                sizes="(min-width: 1874px) 246vw,
                          (min-width: 1536px) 257vw,
                          (min-width: 1280px) 313vw,
                          (min-width: 1024px) 395vw,
                          (min-width: 640px) 631vw,
                          1005vw"
                height={1240}
                width={1120}
                quality="87"
              />
            </div>
          </Container>
        </header>
        <Container>
          <section className="relative mt-[50px] mb-20">
            <div className="flex flex-col items-center justify-center text-center">
              <h3 className="text-black-900 font-bevietnam-pro text-[32px] font-bold uppercase">
                BOOK YOUR STAY
              </h3>
              <p className="text-black-900 font-bevietnam-pro text-base font-normal mt-2">
                Festival & Bull pass holders can get special offers by booking a
                room from our partners!
              </p>
            </div>
            <div className="supports-grid:grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-2 sm:gap-y-6 gap-x-2 sm:gap-x-6 relative mt-8">
              {accommodationData &&
                accommodationData.map((data, index) => (
                  <div
                    className="col-span-2 sm:col-span-4 xl:col-span-3"
                    key={index}
                  >
                    <div className="flex flex-col items-center justify-center bg-white border border-solid border-[#DEE1EA] rounded-xl pt-0 pb-4 sm:pt-0 px-0 sm:px-8 min-h-max sm:min-h-[230px]">
                      <div>
                        <Image
                          className="object-cover object-center my-auto mx-auto h-auto min-h-[auto] max-h-max sm:max-h-[107px] lg:max-h-max w-auto"
                          src={
                            data.attributes.logo.data
                              ? process.env.NEXT_PUBLIC_UPLOAD +
                                data.attributes.logo.data.attributes.url
                              : ""
                          }
                          alt={`${publicRuntimeConfig.appName} (${data.attributes.name} Accomodation - Brand Partner)`}
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
                      </div>
                      {data.attributes.status? 
                      <PostLink
                        typePost="blank-link"
                        url={data.attributes.url}
                        className="bg-secondary flex flex-col rounded-[10px] font-bevietnam-pro text-sm font-medium text-center capitalize py-2 sm:py-3 px-4 sm:px-6 mt-2 h-full min-w-min sm:min-w-[193px] max-w-[133px] sm:max-w-max"
                      >
                        <span className="text-xs text-[#1C202E]/[0.54] font-semimedium">
                          {data.attributes.offeringDesc}
                        </span>
                        <b>Book now</b>
                      </PostLink>
                      :
                      <div
                        className="bg-gray-300 flex flex-col rounded-[10px] font-bevietnam-pro text-sm font-medium text-center capitalize py-2 sm:py-3 px-4 sm:px-6 mt-2 h-full min-w-min sm:min-w-[193px] max-w-[133px] sm:max-w-max"
                      >
                        <span className="text-xs text-white font-semimedium">
                          {data.attributes.offeringDesc}
                        </span>
                        <b className="text-white">Book now</b>
                      </div>}
                      
                    </div>
                  </div>
                ))}
            </div>
          </section>
          <section className="relative mt-[50px] mb-20">
            <div className="flex flex-col items-center justify-center text-center">
              <h3 className="text-black-900 font-bevietnam-pro text-[32px] leading-[40px] font-bold uppercase">
                GET TO THE VENUE
              </h3>
              <p className="text-black-900 font-bevietnam-pro text-base font-normal mt-2">
                Travel to Coinfest Asia main venue with special promo from our official transportation partner
              </p>
            </div>
            <div className="flex justify-center relative mt-8">
              <div className=" flex flex-col items-center justify-center bg-white  rounded-xl min-h-max sm:min-h-[230px]">
                {/* <div className="w-fit h-auto bg-[#2458F1] py-1 px-2 rounded-full ">
                  <p className="text-white font-medium text-center">Promo applicable for new users</p>
                </div> */}
                <div className="mb-6">
                  <Image
                    className="w-[384px]"
                    src={`/2023/assets/images/travel/GrabxCoinfest.jpeg`}
                    alt={`${publicRuntimeConfig.appName} (Grab - Brand Partner)`}
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
                </div>
                <div className="flex gap-2">
                  <Link href={"https://play.google.com/store/apps/details?id=com.grabtaxi.passenger"}>
                  <Image
                  src={`/2023/assets/images/travel/GooglePlay.svg`}
                  alt={`${publicRuntimeConfig.appName} (Google Play - Brand Partner)`}
                  height={47.27}
                  width={143.5}
                  />
                  </Link>
                  <Link href={"https://apps.apple.com/id/app/grab-taxi-ride-food-delivery/id647268330?l=id"}>
                  <Image
                  src={`/2023/assets/images/travel/AppStore.svg`}
                  alt={`${publicRuntimeConfig.appName} (App Store - Brand Partner)`}
                  height={47.27}
                  width={143.5}
                  />
                  </Link>
              </div>
              </div>
            </div>
          </section>
        </Container>
      </Main>
    </>
  );
};

export default Accommodation;
