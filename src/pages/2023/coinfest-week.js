import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import getConfig from "next/config";
import Head from "next/head";

// # Get .config
const { publicRuntimeConfig } = getConfig();

// Ui - Components
import Container from "@components23/Container";
import Main from "@components23/Main";
// import PostLink from "@components23/UI/Post/PostLink";
import Buttons from "@components23/UI/Buttons";
import Image from "next/image";
import CoinfestWeekCard from "@components23/UI/Card/CoinfestWeekCard";

const CoinfestWeek = (props) => {
  const [scroll, setScroll] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState(null);
  const [dataCoinfestWeek, setCoinfestWeek] = useState(props.result);

  useEffect(() => {
    //every scroll call this handle to change scroll state
    // const handleScroll = async () => {
    //   setScroll(true);
    //   clearTimeout(scrollTimeout);

    //   // Set a timeout to show the button after 1 second of scrolling inactivity
    //   setScrollTimeout(setTimeout(() => setScroll(false), 500));
    // };

    // window.addEventListener("scroll", handleScroll);

    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    //   clearTimeout(scrollTimeout);
    // };
    window.addEventListener("scroll", () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1280) {
        setScroll(window.scrollY > 372);
        if (window.scrollY > 372) {
          setScroll(true);
        }
      } else if (screenWidth >= 1024) {
        setScroll(window.scrollY > 318);
        if (window.scrollY > 318) {
          setScroll(true);
        }
      } else if (screenWidth >= 768) {
        setScroll(window.scrollY > 315);
        if (window.scrollY > 315) {
          setScroll(true);
        }
      } else if (screenWidth >= 640) {
        setScroll(window.scrollY > 320);
        if (window.scrollY > 320) {
          setScroll(true);
        }
      } else {
        setScroll(window.scrollY > 345);
        if (window.scrollY > 345) {
          setScroll(true);
        }
      }
    });
  }, []);

  return (
    <>
      {/* Head (Coinfest Week) */}
      <Head>
        <title>Coinfest Week | ASIA’S IMMERSIVE WEB3 FESTIVAL IS BACK</title>
        <meta
          name="title"
          content="Coinfest Week | ASIA’S IMMERSIVE WEB3 FESTIVAL IS BACK"
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
          content="Coinfest Week | ASIA’S IMMERSIVE WEB3 FESTIVAL IS BACK"
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
          content="Coinfest Week | ASIA’S IMMERSIVE WEB3 FESTIVAL IS BACK"
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
        <section
          id="CoinfestWeekHeader"
          className="w-full h-[392px] xl:h-[505px] bg-[#2458F1] flex justify-center items-center relative"
        >
          <div className="absolute inset-y-0 inset-x-0 z-[2]">
            <Image
              className="object-cover h-full w-full"
              src={"/2023/assets/images/backdrop/ca-banner-coinfest-week.jpg"}
              alt={"Banner Coinfest Week"}
              width={1880}
              height={892}
              sizes="(min-width: 1874px) 246vw,
                (min-width: 1536px) 257vw,
                (min-width: 1280px) 313vw,
                (min-width: 1024px) 395vw,
                (min-width: 640px) 631vw,
                1005vw"
              quality="87"
            />
          </div>
          <div className="w-3/4 sm:w-1/2 xl:w-1/4 z-10">
            <div className="mx-auto w-full sm:w-max">
              <Image
                className="h-[104.25px] w-max"
                src={"/2023/assets/images/CoinfestWeekLogo.svg"}
                alt={"Coinfest Week Logo"}
                width={668}
                height={204}
                sizes="(min-width: 1874px) 246vw,
                  (min-width: 1536px) 257vw,
                  (min-width: 1280px) 313vw,
                  (min-width: 1024px) 395vw,
                  (min-width: 640px) 631vw,
                  1005vw"
                quality="87"
              />
            </div>

            <div className="w-full flex flex-col sm:flex-row justify-center gap-x-2 gap-y-2 mt-4">
              <Buttons
                typeBtn="btn-blank-link"
                url="https://e7bao9msf39.typeform.com/to/IyLelRl5"
                label="Host side event with us"
                variants="btn-secondary"
                rounded="base"
                text="base"
                position="center"
                ariaLabel="btnHostYourSideEvent"
                className="rounded-lg text-[#2458F1] last:col-span-1 hover:drop-shadow-[0_4px_13px_rgba(79,123,255,1)] text-sm sm:text-base font-bold sm:font-bold max-sm:w-full"
              />
              <Buttons
                typeBtn="btn-blank-link"
                url="https://e7bao9msf39.typeform.com/to/U7Df986L"
                label="Submit your side event"
                variants=""
                rounded="base"
                text="base"
                position="center"
                ariaLabel="btnSbmtYourSideEvent"
                className="rounded-lg text-secondary col-span-1 border border-secondary hover:bg-secondary/20 text-sm sm:text-base font-bold sm:font-bold max-sm:w-full"
              />
            </div>
            <div className="w-full flex justify-center mt-2">
              <Buttons
                typeBtn="btn-blank-link"
                url={
                  "https://docs.google.com/spreadsheets/d/1xZre01C6D2lumxsqXaZZVY2ejB4q19DyiNPJP96dLJ4/edit#gid=0"
                }
                label="See events in Google Sheet"
                variants=""
                rounded="pill"
                text="base"
                withIcons={true}
                positionIcons="right"
                position="center"
                ariaLabel="Google Sheet"
                className=" font-bold text-white bg-[#333333]"
              >
                <img
                  className="ml-2"
                  src="/2023/assets/images/coinfest-week/sheets.svg"
                  alt="sheet logo"
                />
              </Buttons>
            </div>
          </div>
        </section>
        <section id="coinfestWeekAgenda" className="mt-8">
          <Container>
            {dataCoinfestWeek.map((getDateWeek, i) => (
              <div id={`day${i + 1}`} className="relative" key={i}>
                <div className="w-full rounded-xl bg-secondary sticky top-[162px] sm:top-0 -bottom-4 sm:bottom-auto sm:relative py-4 px-4 sm:py-6 sm:px-6 z-50">
                  <span className="text-base sm:text-xl">
                    {dayjs(getDateWeek.date).format("DD MMMM YYYY")}
                  </span>
                </div>
                <div className="supports-grid:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-0 gap-x-6 lg:gap-6 mt-6 sm:mt-8">
                  {getDateWeek.attributes.map((getData, index) => (
                    <div key={index} className="flex flex-col">
                      <CoinfestWeekCard
                        title={getData.attributes.name}
                        alt={getData.attributes.name}
                        time={getData.attributes.time}
                        desc={getData.attributes.description}
                        imageUrl={
                          getData.attributes.banner.data !== null
                            ? process.env.NEXT_PUBLIC_UPLOAD +
                              getData.attributes.banner.data.attributes.url
                            : ""
                        }
                        rsvp={getData.attributes.rsvpLink}
                        labelRsvp={getData.attributes.buttonCopy}
                        headline={
                          "Bites, Brews, and Blockchain: Web3 Networking Event by AWS"
                        }
                        date={getData.attributes.date}
                        location={getData.attributes.location}
                        disable={
                          getData.attributes.status !== false ? false : true
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
            {/* <div id="day-2" className="mt-8">
            <div className="w-full rounded-xl bg-secondary p-4 md:p-6 mb-8">
              <span className="text-base text-xl">24 August</span>
            </div>
            <div className="supports-grid:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> */}
            {/* alt, title, time, imageUrl, rsvp, desc, headline, date, location */}
            {/* <CoinfestWeekCard 
              title="Meet For Speed"
              alt="Meet For Speed Image"
              time="10 AM - 1 PM"
              />

              <CoinfestWeekCard 
              title="Official After Party"
              alt="Official After Party Image"
              time="8PM - 3AM"
              />
            </div>
            </div> */}
          </Container>
        </section>
      </Main>
      {/* Floating Button */}
      <div
        className={`${
          scroll ? "fixed" : "hidden"
        } w-fit h-fit bottom-4 right-4 z-[552]`}
      >
        <Buttons
          typeBtn="btn-blank-link"
          url={
            "https://docs.google.com/spreadsheets/d/1xZre01C6D2lumxsqXaZZVY2ejB4q19DyiNPJP96dLJ4/edit#gid=0"
          }
          label="See events in Google Sheet"
          variants=""
          rounded="pill"
          text="base"
          withIcons={true}
          positionIcons="right"
          position="center"
          ariaLabel="Google Sheet"
          className=" font-bold text-white bg-[#333333] "
        >
          <img
            className="ml-2"
            src="/2023/assets/images/coinfest-week/sheets.svg"
            alt="sheet logo"
          />
        </Buttons>
      </div>
    </>
  );
};

export default CoinfestWeek;

export async function getStaticProps() {
  const resDateCoinfestWeek = await fetch(
    `${process.env.NEXT_PUBLIC_API}/coinfest-weeks?sort[0]=startClock:asc&populate=*&pagination[pageSize]=100`
  );
  const dateCoinfestWeek = await resDateCoinfestWeek.json();

  const groups = dateCoinfestWeek.data.reduce((groups, game) => {
    const parts = game.attributes.startClock;
    const date = parts.split('T')[0];
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(game);
    return groups;
  }, {});

  // Edit: to add it in the array format instead
  const groupArrays = Object.keys(groups).map((date) => {
    return {
      date,
      attributes: groups[date],
    };
  });

  try {
    return {
      props: {
        result: groupArrays || [],
      },

      revalidate: 30, // In seconds
    };
  } catch (err) {
    return {
      // redirect: {
      //   destination: "/",
      //   permanent: false, // StatusCode: 301
      // },

      notFound: true,
    };
  }
}
