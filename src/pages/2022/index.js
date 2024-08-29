import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import getConfig from "next/config";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";

// # Get .config
const { publicRuntimeConfig } = getConfig();

// Icons (Heroicons : https://unpkg.com/browse/@heroicons/react@2.0.14/20/solid/)
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";

// Css
// import themeCoinfestAsia2022 from "@styles/2022/theme.module.css";

// Ui - Components
import PostLink from "@components23/UI/Post/PostLink";
import Buttons from "@components23/UI/Buttons";

const CoinfestAsia2022 = () => {
  const [isShowing, setIsShowing] = useState(true);
  return (
    <>
      {/* Head (CoinFest Asia 2022 by Coinvestasi) */}
      <Head>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <title>CoinFest Asia 2022 by Coinvestasi</title>
        <meta name="title" content="CoinFest Asia 2022 by Coinvestasi" />
        <meta
          name="description"
          content="Coinfest Asia is an insight & networking festival to share opportunities around web3, crypto, blockchain, NFT & Metaverse."
        />
        <meta name="author" content={`${publicRuntimeConfig.author}`} />
        <link rel="mask-icon" href="/favicon.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#1E1E1E" />
        <meta name="msapplication-navbutton-color" content="#1E1E1E" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#1E1E1E" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://coinfest.asia/" />
        <meta property="og:title" content="CoinFest Asia 2022 by Coinvestasi" />
        <meta
          property="og:description"
          content="Coinfest Asia is an insight & networking festival to share opportunities around web3, crypto, blockchain, NFT & Metaverse."
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
          content="CoinFest Asia 2022 by Coinvestasi"
        />
        <meta
          property="twitter:description"
          content="Coinfest Asia is an insight & networking festival to share opportunities around web3, crypto, blockchain, NFT & Metaverse."
        />
        <meta
          property="twitter:image"
          content="https://ticket.coinfest.asia/wp-content/uploads/2023/06/CA_Bali-Clifftop-Header-Newsletter.png"
        />

        <link rel="stylesheet" href="/2022/css/splide/splide.min.css" />
        <link
          rel="stylesheet"
          href="/2022/css/lightgallery/lg-fullscreen.css"
        />
        <link
          rel="stylesheet"
          href="/2022/css/lightgallery/lg-zoom.css"
        />
        <link
          rel="stylesheet"
          href="/2022/css/lightgallery/lg-thumbnail.css"
        />
        <link
          rel="stylesheet"
          href="/2022/css/lightgallery/lightgallery-bundle.min.css"
        />
        <link rel="stylesheet" href="/2022/css/aos/aos.css" />
        <link rel="stylesheet" href="/2022/css/theme.min.css" />
      </Head>

      <nav
        className="navbar navbar-light fixed top-0 inset-x-0 h-16 sm:h-[76px] lg:h-[98px] w-full z-min"
        data-navbar
      >
        <div className="container">
          <div className="flex lg:hidden bg-transparent items-center justify-between h-[60px] sm:h-16 lg:h-[104px] z-20">
            <a
              className="navbar-brand outline-none h-7 sm:h-[42px] w-auto min-w-max max-w-max"
              href="/2022/"
            >
              <img
                className="img-cver min-h-full max-h-full w-auto pointer-events-none transition duration-300 ease-in-out"
                src="./2022/images/coinfestasia2022-white.svg"
                alt="Coinfest Asia 2022 (Brand LOGO)"
              />
            </a>
            <div className="flex items-center">
              <button
                className="flex bg-transparent outline-none relative py-2 px-1"
                data-toggle-menu
                data-target="#navbarMenu"
                data-icons="#navbarMenuIcons"
              >
                <div id="navbarMenuIcons" className="twline">
                  <span className="twline-line transition-all duration-300"></span>
                  <span className="twline-line transition-all duration-300"></span>
                </div>
              </button>
            </div>
          </div>
          <div
            id="navbarMenu"
            className="navbar-collapse flex pt-4 pb-8 sm:py-0 px-4 sm:px-0 w-full transition-all duration-500"
            data-collapse
            data-navmnu
          >
            <div className="container grid gap-y-4 sm:flex flex-col lg:flex-row lg:items-center lg:justify-between relative h-full p-0">
              <a
                className="navbar-brand hidden lg:flex outline-none h-7 lg:h-[42px] w-auto min-w-max max-w-max"
                href="/2022/"
              >
                <img
                  className="img-cver min-h-full max-h-full w-auto pointer-events-none transition duration-300 ease-in-out"
                  src="./2022/images/coinfestasia2022-white.svg"
                  alt="Coinfest Asia 2022 Brand LOGO"
                />
              </a>

              <div className="flex items-center justify-center text-center h-full lg:h-auto max-w-full">
                <ul
                  id="nvMnuPrimary"
                  className="nav menu navbar-nav flex flex-col lg:flex-row"
                >
                  <li className="menu-item">
                    <a className="text-black-900" data-navscrollto href="#about">
                      About
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="text-black-900" data-navscrollto href="#highlight">
                      Highlight
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="text-black-900" data-navscrollto href="#social-media">
                      Social Media
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="text-black-900" data-navscrollto href="#testimonials">
                      Testimonials
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="text-black-900" data-navscrollto href="#speakers">
                      Speakers
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="text-black-900" data-navscrollto href="#partners">
                      Partners
                    </a>
                  </li>
                </ul>
              </div>
              <div className="hidden lg:flex items-center">
                {/* <a
                  className="navbar-cta hidden lg:btn btn-sm lg:btn-base bg-transparent rounded-sm text-[#F8B218] text-xs lg:text-sm font-bold capitalize px-0"
                  href="ticket.coinfest.asia"
                >
                  Get Your Ticket Now
                  <svg
                    className="ml-1 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.375 6.875L17.5 10M17.5 10L14.375 13.125M17.5 10H2.5"
                      stroke="#F8B218"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <header
        className="headerV2 header-landing overflow-hidden relative hide"
        data-opening
      >
        <div className="backdrop-container backdrop-opening pointer-events-none absolute inset-y-0 inset-x-0 opacity-[0.2] z-px">
          <div className="backdrop-items"></div>
          <div className="backdrop-items"></div>
          <div className="backdrop-items"></div>
          <div className="backdrop-items"></div>
          <div className="backdrop-items"></div>
          <div className="backdrop-items"></div>
          <div className="backdrop-items"></div>
          <div className="backdrop-items"></div>
          <div className="backdrop-items"></div>
          <div className="backdrop-items"></div>
          <div className="backdrop-items"></div>
          <div className="backdrop-items"></div>
          <div className="backdrop-items"></div>
          <div className="backdrop-items"></div>
          <div className="backdrop-items"></div>
          <div className="backdrop-items"></div>
          <div className="backdrop-items"></div>
        </div>

        <div className="headerV2-cloud headerV2-cloud-animte blur-lg absolute top-[68px] sm:top-[198px] lg:top-[198px 5xl:top-[195px] -left-[58%] sm:-left-[13%] lg:-left-[8%] xl:left-[6%] 2xl:left-[10%] 5xl:left-[18%] right-auto bottom-auto z-[4]">
          <img
            src="/2022/images/backdrop/backdrop-cloud-1.svg"
            alt="Coinfest Asia 2022 (Backdrop Header - Cloud)"
            loading="lazy"
          />
        </div>
        <div className="headerV2-cloud headerV2-cloud-animte headerV2-cloud-animte-1 blur-lg absolute top-[98px] sm:top-[148px] xl:top-[106px] 5xl:top-[168px] left-auto -right-[57%] sm:-right-[7%] xl:right-[7%] 2xl:right-[12%] 5xl:right-[20%] bottom-auto z-[4]">
          <img
            src="/2022/images/backdrop/backdrop-cloud-2.svg"
            alt="Coinfest Asia 2022 (Backdrop Header - Cloud)"
            loading="lazy"
          />
        </div>
        <div
          className="headerV2-cloud headerV2-cloud-animte headerV2-cloud-animte-2 blur-lg absolute top-[448px] sm:top-[438px]
      lg:top-[399px] xl:top-[337px] 5xl:top-[389px] -left-[25%] sm:-left-[13%] lg:-left-[8%] xl:left-0 2xl:left-[19%]
      5xl:left-[25%] right-auto bottom-auto z-[4]"
        >
          <img
            src="/2022/images/backdrop/backdrop-cloud-3.svg"
            alt="Coinfest Asia 2022 (Backdrop Header - Cloud)"
            loading="lazy"
          />
        </div>
        <div className="headerV2-cloud hidden 2xl:flex blur-lg absolute top-auto bottom-0 xl:bottom-[337px] 5xl:bottom-[389px] xl:left-0 2xl:left-[8%] 5xl:left-[10%] right-auto z-[4]">
          <img
            src="/2022/images/backdrop/backdrop-cloud-4.svg"
            alt="Coinfest Asia 2022 (Backdrop Header - Cloud)"
            loading="lazy"
          />
        </div>
        <div className="headerV2-cloud headerV2-cloud-animte2 blur-lg absolute top-auto bottom-[206px] lg:bottom-[224px] xl:bottom-[238px] 2xl:bottom-[370px] 5xl:bottom-[389px] -left-8 sm:-left-3 xl:left-16 2xl:-left-[3%] 5xl:left-[10%] right-auto z-[4]">
          <img
            src="/2022/images/backdrop/backdrop-cloud-5.svg"
            alt="Coinfest Asia 2022 (Backdrop Header - Cloud)"
          />
        </div>

        <div className="headerV2-opening-sun blur-[6px]"></div>

        <div
          className="headerV2-opening-lbelscroll flex flex-row-reverse sm:flex-row items-center text-[#535353]
      font-bevietnam-pro text-sm sm:text-base font-medium absolute left-0 sm:left-7 lg:left-9 xl:left-14
      top-auto right-0 sm:right-auto bottom-2 sm:bottom-0 xl:bottom-11 2xl:bottom-18 mx-auto w-max z-50"
        >
          Scroll down to see more
          <div className="bg-[#616161]/10 rounded flex items-center justify-center ml-0 sm:ml-1 mr-1 sm:mr-0 h-8 w-8">
            <div className="mouse"></div>
          </div>
        </div>

        <div className="headerV2-opening">
          <div className="headerV2-opening-left">
            <img
              className="h-full"
              src="/2022/images/backdrop/backdrop-opening-baleLeft.svg"
              alt="Coinfest Asia 2022 (Backdrop Header - BaleLeft)"
              loading="lazy"
            />
          </div>
          <div className="headerV2-opening-right">
            <img
              className="h-full"
              src="/2022/images/backdrop/backdrop-opening-baleRight.svg"
              alt="Coinfest Asia 2022 (Backdrop Header - BaleRight)"
              loading="lazy"
            />
          </div>
        </div>

        <div className="headerV2-opening-content px-7 sm:px-0 mx-auto w-full sm:w-max">
          <div className="flex flex-col text-center mb-8 max-w-[723px] xl:max-w-max">
            <h2 className="text-white font-montserrat text-4xl sm:text-[48px] xl:text-[58px] font-bold leading-[normal] lg:leading-[48px] tracking-wide uppercase">
              <img
                className="flex float-none sm:float-left mt-0 mx-auto sm:mt-2.5 lg:mt-1.5 xl:mt-0 sm:mr-[18px] h-8 sm:h-[36px] xl:h-auto"
                src="/2022/images/coinfestasia2023-white.svg"
                alt="Coinfest Asia 2022 (Backdrop Header - BaleRight)"
              />
              <span className="hidden sm:flex whitespace-nowrap">In Bali</span>
              <span className="inline-block sm:flex sm:flex-col mt-2 sm:mt-0 lg:mt-3">
                <span className="inline sm:hidden w-max">In Bali</span> Was a
                blast!
              </span>
            </h2>
          </div>
          <div className="text-center mx-auto max-w-[554px]">
            <div className="youtube-frame">
              <iframe
                src="https://www.youtube.com/embed/q0-zf877bBA"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <a href="" target="_blank" rel="noopener noreferrer"></a>
            <a
              className="btn btn-block btn-sm lg:btn-base bg-[#0054E8] rounded-[10px] text-white text-xs lg:text-sm font-bold capitalize mt-8 mx-auto lg:px-6 lg:py-6"
              href="https://docs.google.com/presentation/d/e/2PACX-1vQzbxvywun4QmGsaQ3gWq5nTNdgjzCGxrYibdnRdX9VHH_h8G-Rl18CdnvXVhPuxg1XoDWIwCwydrun/pub?start=false&loop=false&delayms=3000&slide=id.g151c6195483_8_8"
              target="_blank"
              rel="noopener noreferrer"
            >
              General Report for 2022
              <svg
                className="ml-3 h-[18px] w-[18px]"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.25 4H3.375C2.87772 4 2.40081 4.19754 2.04917 4.54917C1.69754 4.90081 1.5 5.37772 1.5 5.875V14.625C1.5 15.1223 1.69754 15.5992 2.04917 15.9508C2.40081 16.3025 2.87772 16.5 3.375 16.5H12.125C12.6223 16.5 13.0992 16.3025 13.4508 15.9508C13.8025 15.5992 14 15.1223 14 14.625V7.75M5.25 12.75L16.5 1.5M16.5 1.5H12.125M16.5 1.5V5.875"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="headerV2-opening-stage">
          <img
            className="w-full"
            src="/2022/images/backdrop/backdrop-opening-stage.png"
            alt="Coinfest Asia 2022 (Backdrop Header - Openning Stage)"
          />
        </div>
      </header>

      <main className="overflow-hidden pt-16 z-20">
        <div id="about" className="container mb-[88px]">
          <div className="grid grid-cols-12 gap-x-6">
            <div className="col-span-full lg:col-span-5 flex items-center justify-center">
              <section>
                <div className="mb-7">
                  <div className="wrapp-hdding wrapp-light text-left">
                    <p className="font-bevietnam-pro text-sm">What is</p>
                    <h3 className="wrapp-hdding-title uppercase w-max">
                      coinfest asia
                    </h3>
                  </div>
                </div>
                <div className="text-[#6C6C6C]">
                  <p>
                    Coinfest Asia is not a typical industry conference. Coinfest
                    Asia is an insight & networking festival, sharing
                    opportunities around web3, crypto, blockchain, NFT &
                    Metaverse.
                  </p>
                  &nbsp;
                  <p>
                    Structured to allow all participants to immerse their
                    knowledge and grow their relationships with other industry
                    players in an informal setting.
                  </p>
                </div>
                <div className="bg-[#0054E8] inline-flex flex-wrap justify-start gap-y-6 rounded-lg mt-8 py-6 px-6">
                  <div className="basis-full sm:basis-1/3 w-full sm:w-max">
                    <h4 className="text-white font-montserrat text-2xl font-semibold mb-2">
                      2000+
                    </h4>
                    <span className="text-white/50 font-bevietnam-pro text-sm font-normal">
                      Over 2000+ attendees from 52 countries
                    </span>
                  </div>
                  <div className="basis-full sm:basis-1/3 w-full sm:w-max">
                    <h4 className="text-white font-montserrat text-2xl font-semibold mb-2">
                      80+
                    </h4>
                    <span className="text-white/50 font-bevietnam-pro text-sm font-normal">
                      Speakers from renown companies
                    </span>
                  </div>
                  <div className="basis-full sm:basis-1/3 w-full sm:w-max">
                    <h4 className="text-white font-montserrat text-2xl font-semibold mb-2">
                      300+
                    </h4>
                    <span className="text-white/50 font-bevietnam-pro text-sm font-normal">
                      Companies in attendance
                    </span>
                  </div>
                  <a
                    className="btn btn-sm lg:btn-base btn-block bg-yellow-500 rounded-lg text-primary text-xs lg:text-sm font-bold capitalize mt-4 lg:px-4"
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See Full Report
                    <svg
                      className="stroke-current ml-3 h-[18px] w-[18px]"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.25 4H3.375C2.87772 4 2.40081 4.19754 2.04917 4.54917C1.69754 4.90081 1.5 5.37772 1.5 5.875V14.625C1.5 15.1223 1.69754 15.5992 2.04917 15.9508C2.40081 16.3025 2.87772 16.5 3.375 16.5H12.125C12.6223 16.5 13.0992 16.3025 13.4508 15.9508C13.8025 15.5992 14 15.1223 14 14.625V7.75M5.25 12.75L16.5 1.5M16.5 1.5H12.125M16.5 1.5V5.875"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </section>
            </div>
            <div className="col-span-full lg:col-span-7">
              <section className="relative">
                <div className="select-none pointer-events-none absolute top-4 left-auto -right-16 sm:-right-7 lg:-right-32 xl:-right-7 bottom-auto -z-px">
                  <img
                    className="h-full w-auto max-h-[327px] sm:max-h-[486px]"
                    src="/2022/images/backdrop/backdrop-gridlines-whatis-coinfestasia.svg"
                    alt="Coinfest Asia 2022 (Backdrop - What Is)"
                  />
                </div>

                <img
                  className="object-cover mt-6 sm:mt-8 lg:mt-0 -mx-[24%] sm:mx-auto lg:mx-0 h-full sm:h-[753px] w-full min-w-[138%] sm:min-w-max max-w-[138%] sm:max-w-max"
                  src="/2022/images/what-is-coinfestasia2022.png"
                  alt="Coinfest Asia 2022 (What Is)"
                />
              </section>
            </div>
          </div>
        </div>

        <section
          id="highlight"
          className="bg-[#0054E8] flex flex-col items-center justify-center rounded-none overflow-hidden relative mb-[88px] py-8 sm:py-[104px]"
        >
          <div className="backdrop-container backdrop-highlight pointer-events-none absolute inset-y-0 inset-x-0 z-[2]">
            <div className="backdrop-items"></div>
            <div className="backdrop-items"></div>
            <div className="backdrop-items"></div>
            <div className="backdrop-items"></div>
            <div className="backdrop-items"></div>
            <div className="backdrop-items"></div>
            <div className="backdrop-items"></div>
            <div className="backdrop-items"></div>
            <div className="backdrop-items"></div>
            <div className="backdrop-items"></div>
            <div className="backdrop-items"></div>
            <div className="backdrop-items"></div>
            <div className="backdrop-items"></div>
            <div className="backdrop-items"></div>
            <div className="backdrop-items"></div>
            <div className="backdrop-items"></div>
            <div className="backdrop-items"></div>
            <div className="backdrop-items"></div>
            <div className="backdrop-items"></div>
            <div className="backdrop-items"></div>
          </div>

          <div className="container relative z-10">
            <div className="lazy-imags highlight-content grid grid-cols-2 gap-y-2 sm:gap-y-4 gap-x-2 sm:gap-x-4">
              <div className="col-span-1 hidden sm:grid">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-montserrat text-2xl font-bold uppercase">
                    2022 Highlight
                  </h3>
                  <a
                    className="flex flex-row items-center text-yellow-500 font-bevietnam-pro text-sm font-medium outline-none"
                    href=""
                  >
                    See All
                    <svg
                      className="ml-2 h-6 w-6"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.25 8.75L21 12.5M21 12.5L17.25 16.25M21 12.5H3"
                        stroke="#FED220"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
                <div className="highlight-items rounded overflow-hidden relative h-[229px] sm:h-[216px] lg:h-[296px]">
                  <img
                    className="object-cover rounded overflow-hidden h-full w-full"
                    src="/2022/images/hightlight/1.jpg"
                    alt="Coinfest Asia 2022 (Highlight)"
                  />
                  <a
                    className="highlight-backcover text-white font-bevietnam-pro text-sm font-semibold"
                    href="/2022/highlight/"
                  >
                    See All Highlights
                  </a>
                </div>
              </div>
              <div className="col-span-full sm:col-span-1">
                <div className="flex sm:hidden items-center justify-between mb-4">
                  <h3 className="text-white font-montserrat text-xl sm:text-2xl font-bold uppercase">
                    2022 Highlight
                  </h3>
                  <a
                    className="flex flex-row items-center text-yellow-500 font-bevietnam-pro text-sm font-medium outline-none"
                    href=""
                  >
                    See All
                    <svg
                      className="ml-2 h-6 w-6"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.25 8.75L21 12.5M21 12.5L17.25 16.25M21 12.5H3"
                        stroke="#FED220"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
                <div className="highlight-items rounded overflow-hidden relative h-[193px] sm:h-[264px] lg:h-[344px]">
                  <img
                    className="object-cover rounded overflow-hidden h-full w-full"
                    src="/2022/images/hightlight/2.jpg"
                    alt="Coinfest Asia 2022 (Highlight)"
                  />
                  <a
                    className="highlight-backcover text-white font-bevietnam-pro text-sm font-semibold"
                    href="/2022/highlight/"
                  >
                    See All Highlights
                  </a>
                </div>
              </div>
              <div className="col-span-1 grid sm:hidden" data-highlights>
                <div className="highlight-items rounded overflow-hidden relative h-[104px] sm:h-[216px] lg:h-[296px]">
                  <img
                    className="object-cover rounded overflow-hidden h-full w-full"
                    src="/2022/images/hightlight/1.jpg"
                    alt="Coinfest Asia 2022 (Highlight)"
                  />
                  <a
                    className="highlight-backcover text-white font-bevietnam-pro text-sm font-semibold"
                    href="/2022/highlight/"
                  >
                    See All Highlights
                  </a>
                </div>
              </div>
              <div
                className="col-span-1 row-span-2 sm:row-span-2 min-h-[229px]"
                data-highlights
              >
                <div className="highlight-items rounded overflow-hidden relative h-full w-full max-h-max">
                  <img
                    className="object-cover rounded overflow-hidden h-full w-full"
                    src="/2022/images/hightlight/3.jpg"
                    alt="Coinfest Asia 2022 (Highlight)"
                  />
                  <a
                    className="highlight-backcover text-white font-bevietnam-pro text-sm font-semibold"
                    href="/2022/highlight/"
                  >
                    See All Highlights
                  </a>
                </div>
              </div>
              <div
                className="col-span-1 row-span-2 sm:row-span-1 min-h-[229px] sm:min-h-max"
                data-highlights
              >
                <div className="highlight-items rounded overflow-hidden relative h-[229px] sm:h-[216px] lg:h-[326px]">
                  <img
                    className="object-cover rounded overflow-hidden h-full w-full"
                    src="/2022/images/hightlight/4.jpg"
                    alt="Coinfest Asia 2022 (Highlight)"
                  />
                  <a
                    className="highlight-backcover text-white font-bevietnam-pro text-sm font-semibold"
                    href="/2022/highlight/"
                  >
                    See All Highlights
                  </a>
                </div>
              </div>
              <div className="col-span-1 row-span-1" data-highlights>
                <div className="highlight-items rounded overflow-hidden relative h-[104px] sm:h-[216px] lg:h-[326px]">
                  <img
                    className="object-cover rounded overflow-hidden h-full w-full"
                    src="/2022/images/hightlight/5.jpg"
                    alt="Coinfest Asia 2022 (Highlight)"
                  />
                  <a
                    className="highlight-backcover text-white font-bevietnam-pro text-sm font-semibold"
                    href="/2022/highlight/"
                  >
                    See All Highlights
                  </a>
                </div>
              </div>
            </div>
            <div className="lazy-imags grid grid-cols-4 gap-y-2 sm:gap-y-4 gap-x-2 sm:gap-x-4 mt-2 sm:mt-4">
              <div
                className="col-span-2 sm:col-span-3 row-span-2 sm:row-span-1 min-h-[149px] sm:min-h-max"
                data-highlights
              >
                <div className="highlight-items rounded overflow-hidden relative h-[149px] sm:h-[216px] lg:h-[326px]">
                  <img
                    className="object-cover rounded overflow-hidden h-full w-full"
                    src="/2022/images/hightlight/6.jpg"
                    alt="Coinfest Asia 2022 (Highlight)"
                  />
                  <a
                    className="highlight-backcover text-white font-bevietnam-pro text-sm font-semibold"
                    href="/2022/highlight/"
                  >
                    See All Highlights
                  </a>
                </div>
              </div>
              <div
                className="col-span-2 sm:col-span-1 row-span-1 relative"
                data-highlights
              >
                <div className="highlight-items rounded overflow-hidden relative h-[149px] sm:h-[216px] lg:h-[326px]">
                  <img
                    className="object-cover h-full w-full"
                    src="/2022/images/hightlight/7.jpg"
                    alt="Coinfest Asia 2022 (Highlight)"
                  />

                  <div className="bg-[#000000]/40 flex items-center justify-center absolute inset-y-0 inset-x-0 z-[5]">
                    <a
                      className="text-white font-bevietnam-pro text-sm font-semibold underline"
                      href="/2022/highlight/"
                    >
                      See All Highlights
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <section id="speakers" className="grid grid-cols-12 gap-y-8 gap-x-6">
            <div className="col-span-full mb-6 sm:mb-10">
              <div className="flex flex-col sm:flex-row items-center justify-between">
                <div>
                  <div className="wrapp-hdding wrapp-light text-center sm:text-left">
                    <p className="font-bevietnam-pro text-sm">2022</p>
                    <h3 className="wrapp-hdding-title uppercase mx-auto w-max">
                      Speakers
                    </h3>
                  </div>
                </div>
                <a
                  className="hidden sm:btn btn-sm lg:btn-base bg-[#0054E8] rounded-sm text-white text-xs lg:text-sm font-bold uppercase lg:px-4"
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  APPLY FOR 2023
                  <svg
                    className="ml-1 h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.26321 17.736C6.43196 17.9045 6.66071 17.9992 6.89921 17.9992C7.13771 17.9992 7.36646 17.9045 7.53521 17.736L16.1992 9.072V15.9C16.1992 16.1387 16.294 16.3676 16.4628 16.5364C16.6316 16.7052 16.8605 16.8 17.0992 16.8C17.3379 16.8 17.5668 16.7052 17.7356 16.5364C17.9044 16.3676 17.9992 16.1387 17.9992 15.9V6.9C17.9992 6.66131 17.9044 6.43239 17.7356 6.2636C17.5668 6.09482 17.3379 6 17.0992 6H8.09921C7.86051 6 7.63159 6.09482 7.46281 6.2636C7.29403 6.43239 7.19921 6.66131 7.19921 6.9C7.19921 7.13869 7.29403 7.36761 7.46281 7.5364C7.63159 7.70518 7.86051 7.8 8.09921 7.8H14.9272L6.26321 16.464C6.09467 16.6328 6 16.8615 6 17.1C6 17.3385 6.09467 17.5672 6.26321 17.736Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div
              id="speakersPartnersContent"
              className="col-span-full inline-flex flex-wrap justify-center bx-speakers-partners_content gap-y-7 sm:gap-y-8 hide"
            >
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/JerrySambuaga.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Jerry Sambuaga
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/MinistryOfTrade-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Tirta-Karma-Senjaya.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Tirta Karma Senjaya
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/MinistryOfTrade-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Karl-Mohan.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Karl Mohan
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/Crypto.com-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Emily-Parker.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Emily Parker
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/Coindesk-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Yos-Ginting.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Yos Ginting
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/Kadin-SpeakersizeBlack.png"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Rene-Michau-1.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      René Michau
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/StandardChartered-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Stephen-Richardson.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Stephen Richardson
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/Fireblocks-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Rohan-Juneja.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Rohan Juneja
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/Fireblocks-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Prakash-Somosundram-1.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Prakash Somosundram
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/enjinstarter-SpeakersizeBlack.png"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/JethSoetoyo.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Jeth Soetoyo
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/pintu-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/OliverBarker.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Oliver Barker
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/Near-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Tamar-Menteshashvili.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Tamar Menteshashvili
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/Solana-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/James-HU.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      James Hu
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/OpenSea.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/David-TNG.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      David Tng
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/Tezos-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Irene-Umar.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Irene Umar
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/YGGSea-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Ingrid-Sia.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Ingrid Sia
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/Nansen-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Andre-Tirto.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Andre Tirto
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/Metabase-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Hrish-Lotikar.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Hrish Lotlikar
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/Superworld-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Aldi-Raharja.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Aldi Raharja
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/WIR-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Peter-Ing.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Peter Ing
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/BlockchainSpace-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Kelly-Choo.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Kelly Choo
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/TGV-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Peter-DeMeo-1.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Peter DeMeo
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/IBM-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/2D-Vamp.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      2D Vamp
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/SVS-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Marouen-Zelleg.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Marouen Zelleg
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/Consensys-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Dedi-Kurniawan.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Dedi Kurniawan
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/KunciCoin-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Michelle-Maiuri.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Michelle Maiuri
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/DeepCoin-SpeakersBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Rio-Popeye-Inaba.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Rio "Popeye" Inaba
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/Emurgo-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Shunsuke-Murasaki.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Shunsuke Murasaki
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/Emurgo-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Markus-Liman-Raharja.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Markus Liman Raharja
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/BRIVentures-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Nick-Yudha.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Nick Yudha
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/arktivak-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Brandon-Salim.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Brandon Salim
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/arktivak-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/NGUYEN-DINH-KHANH.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Nguyen Dinh Khan
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/ThetanArena-SpeakersBlack.png"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Asih-Karnengsih.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Asih Karnengsih
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/ABI-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Muhammad-Yusuf-Musa.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Muhammad Yusuf Musa
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/Nanovest-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Ruanth-Chrisley-Thyssen.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Ruanth Chrisley Thyssen
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/MetaRupa-SpeakersizeBlack.png"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Napoleon.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Napoleon
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/Scholarz-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Hadrian.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Hadrian Rezanova
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/KaraFuru-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Sagar-Desai (1).jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Sagar Desai
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/CoinBase-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Nicole-Nguyen.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Nicole Nguyen
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/DAOAPAC-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Oscar-Darmawan.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Oscar Darmawan
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/IndoDax-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Julius-Agus-Salim.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Julius Agus Salim
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/KunciCoin-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Harpeet-Singh-Man.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Harpeet Singh Man
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/Access-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Gloria-He.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Gloria He
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/StraitsX-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Valeriya-Minaeva.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Valeriya Minaeva
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/1inch-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Mark-Rydon.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Mark Rydon
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/meta1network-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Olivia-Sim.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Olivia Sim
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/Eli5DeFi-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/NingJi.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Ning Ji
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/Anchorage-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Branson-Lee.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Branson Lee
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/BlockchainAssociationSingapore-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Jonathan-Limbo.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Jonathan Limbo
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/StandardAlpha-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Max.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Max
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/Cryptonary-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/David-Pan.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      David Pan
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/Advance.ai-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/BillySuryajaya.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Billy Suryajaya
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/Nanovest-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Tung-Li-Lim.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Tung Li Lim
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/Elliptic-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Sagar-Sabhai.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Sagar Sabhai
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/Fireblocks-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/James-Toh.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      James Toh
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/Coinstore-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Zabella-Demirchyan.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Zabella Demirchyan
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/FASTEX-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Sopheap-Lao.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Sopheap Lao
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/LordToken-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Abdul-Mutalib.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Abdul Mutalib
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/AMDG-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Steven-Suhadi.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Steven Suhadi
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/StandardAlpha-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Luke-Devern.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Luke Devern
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/ICN-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Dendi-Suhubdy.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Dendy Suhubdy
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/Bitwyre-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Kanny-Lee.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Kanny Lee
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/OSL-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Sharon-Paul.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Sharon Paul
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/HQ-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Rahul-Advani.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Rahul Advani
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/Ripple-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Ish-Goel.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Ish Goel
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/PlotX-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Canessa-Emilio.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Canessa Emilio
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/ICP-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Meinhard-Benn.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Meinhard Benn
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/Pendulum-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Aleksandr-Malkov.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Aleksandr Malkov
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/Haqq-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Charles-Kok.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Charles Kok
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/UOB-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Daniel-Pang.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Daniel Pang
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/ComplyAdvantage-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Arief-Widhiyasa.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Arief Widhiyasa
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/MythicProtocol-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Felita-Setiawan.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Felita Setiawan
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/Coinvestasi-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Setiawan-Adhiputro.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Setiawan Adhiputro
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/QoinPay-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Joko-Crypto.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Joko Crypto
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/KunciCoin-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Hamdan-Zoelva.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Hamdan Zoelva
                    </h3>
                    <div className="mx-auto">
                      <img
                        className="img-cver"
                        src="/2022/images/speakers-partner/brand/ZoelvaFirm-SpeakersizeBlack.svg"
                        loading="lazy"
                        alt="Coinfest Asia 2022 (Speakers)"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="bx-spekrs-partnrs grid gap-y-4">
                  <div className="imags flex rounded-full grayscale hover:grayscale-0 relative overflow-hidden mx-auto h-[142px] sm:h-[192px] w-[142px] sm:w-[192px] transition duration-[0.3s] ease-in-out">
                    <img
                      className="img-cver"
                      src="/2022/images/speakers-partner/Hendrikus-Passagi.jpg"
                      loading="lazy"
                      alt="Coinvestasi (Speakers)"
                    />
                  </div>
                  <div className="grid gap-y-2.5 text-center">
                    <h3 className="text-[#000000] font-montserrat text-sm sm:text-base font-bold">
                      Hendrikus Passagi
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-full text-center mt-2">
              <button
                className="btn btn-sm lg:btn-base bg-transparent btn-pill btn-expands text-[#04142F] outline-none mx-auto px-6"
                data-expands
                data-target="#speakersPartnersContent"
                data-label="See more speakers"
              ></button>
              <a
                className="btn sm:hidden btn-sm lg:btn-base bg-[#0054E8] btn-block rounded-sm text-white text-xs lg:text-sm font-bold uppercase lg:px-4 mt-6 sm:mt-0"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                APPLY FOR 2023
                <svg
                  className="ml-1 h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.26321 17.736C6.43196 17.9045 6.66071 17.9992 6.89921 17.9992C7.13771 17.9992 7.36646 17.9045 7.53521 17.736L16.1992 9.072V15.9C16.1992 16.1387 16.294 16.3676 16.4628 16.5364C16.6316 16.7052 16.8605 16.8 17.0992 16.8C17.3379 16.8 17.5668 16.7052 17.7356 16.5364C17.9044 16.3676 17.9992 16.1387 17.9992 15.9V6.9C17.9992 6.66131 17.9044 6.43239 17.7356 6.2636C17.5668 6.09482 17.3379 6 17.0992 6H8.09921C7.86051 6 7.63159 6.09482 7.46281 6.2636C7.29403 6.43239 7.19921 6.66131 7.19921 6.9C7.19921 7.13869 7.29403 7.36761 7.46281 7.5364C7.63159 7.70518 7.86051 7.8 8.09921 7.8H14.9272L6.26321 16.464C6.09467 16.6328 6 16.8615 6 17.1C6 17.3385 6.09467 17.5672 6.26321 17.736Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </section>
        </div>

        <div className="grid gap-y-[136px]">
          <section
            id="testimonials"
            className="testimonial bg-[#0054E8] flex flex-col items-center justify-center rounded-none overflow-hidden relative py-4 sm:pt-[74px] sm:pb-[106px]"
          >
            <div className="backdrop-container backdrop-testimonials pointer-events-none absolute inset-y-0 inset-x-0 z-[2]">
              <div className="backdrop-items"></div>
              <div className="backdrop-items"></div>
              <div className="backdrop-items"></div>
              <div className="backdrop-items"></div>
              <div className="backdrop-items"></div>
              <div className="backdrop-items"></div>
              <div className="backdrop-items"></div>
              <div className="backdrop-items"></div>
              <div className="backdrop-items"></div>
              <div className="backdrop-items"></div>
              <div className="backdrop-items"></div>
              <div className="backdrop-items"></div>
              <div className="backdrop-items"></div>
              <div className="backdrop-items"></div>
            </div>

            <div className="container relative z-10">
              <div className="absolute top-11 sm:top-0 left-auto -right-2 sm:right-3 bottom-auto h-32 sm:h-max w-32 sm:w-max -z-px">
                <img
                  src="/2022/images/backdrop/“.webp"
                  alt="Coinfest Asia 2022 (Backdrop - Testimonials)"
                />
              </div>

              <div className="flex items-center justify-between mb-8">
                <div className="wrapp-hdding wrapp-white text-left">
                  <span className="font-bevietnam-pro text-sm">
                    Testimonials
                  </span>
                  <h3 className="wrapp-hdding-title uppercase w-full lg:w-max">
                    Attendees and speakers
                  </h3>
                </div>
              </div>
              <div className="relative">
                <div
                  id="testimonialSlide"
                  className="testimonial-slide splide pb-12"
                  data-slides
                  data-testimonials
                  data-slide-control="#testimonialSlideControl"
                >
                  <div className="splide__track pr-0">
                    <ul className="splide__list items-center mt-0 sm:!mt-8">
                      <li className="splide__slide rounded-lg">
                        <div className="testimonial-slide-bx grid grid-cols-2 sm:grid-cols-9 gap-y-4 gap-x-12">
                          <div className="col-span-full sm:col-span-6">
                            <div className="grid">
                              <p className="text-[#000000] font-bevietnam-pro text-sm sm:text-base font-medium mb-4">
                                Find out how exactly does Web 3.0 differs from
                                Web 2.0 and will Web 3.0 replace Web 2.0
                                completely. Gain insights on how to start a Web
                                3.0 Infrastructure for your company.
                              </p>

                              <div className="hidden sm:flex flex-col">
                                <h3 className="text-[#000000] font-bevietnam-pro text-base font-bold capitalize">
                                  Sagar Sarbhai
                                </h3>
                                <div className="mt-1 w-max">
                                  <img
                                    className="img-cver"
                                    src="/2022/images/testimonials/brand/Fireblocks-SpeakersizeBlack.svg"
                                    alt="Coinfest Asia 2022 (Mentions)"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-span-full sm:col-span-3 flex items-end sm:items-center relative h-[80%]">
                            <div className="images flex-1 mr-4 sm:mr-0 max-w-[58px] sm:max-w-max">
                              <img
                                src="/2022/images/testimonials/Sagar Sabhai.png"
                                alt="Coinfest Asia 2022 (Testimonials)"
                              />
                            </div>
                            <div className="flex sm:hidden flex-1 flex-col">
                              <h3 className="text-[#000000] font-bevietnam-pro text-base font-bold capitalize">
                                Sagar Sarbhai
                              </h3>
                              <div className="mt-2">
                                <img
                                  className="img-cver"
                                  src="/2022/images/testimonials/brand/Fireblocks-SpeakersizeBlack.svg"
                                  alt="Coinfest Asia 2022 (Mentions)"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="splide__slide rounded-lg">
                        <div className="testimonial-slide-bx grid grid-cols-2 sm:grid-cols-9 gap-y-4 gap-x-12">
                          <div className="col-span-full sm:col-span-6">
                            <div className="grid">
                              <p className="text-[#000000] font-bevietnam-pro text-sm sm:text-base font-medium mb-4">
                                50 million people has already been brought to
                                crypto by Crypto.com. Meet Karl to learn the
                                global trend of crypto retail investors.
                              </p>

                              <div className="hidden sm:flex flex-col">
                                <h3 className="text-[#000000] font-bevietnam-pro text-base font-bold capitalize">
                                  Karl Mohan
                                </h3>
                                <div className="mt-1 w-max">
                                  <img
                                    className="img-cver"
                                    src="/2022/images/testimonials/brand/Crypto.com-SpeakersizeBlack.svg"
                                    alt="Coinfest Asia 2022 (Mentions)"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-span-full sm:col-span-3 flex items-end sm:items-center relative h-[80%]">
                            <div className="images flex-1 mr-4 sm:mr-0 max-w-[58px] sm:max-w-max">
                              <img
                                src="/2022/images/testimonials/Karl Mohan.png"
                                alt="Coinfest Asia 2022 (Testimonials)"
                              />
                            </div>
                            <div className="flex sm:hidden flex-1 flex-col">
                              <h3 className="text-[#000000] font-bevietnam-pro text-base font-bold capitalize">
                                Karl Mohan
                              </h3>
                              <div className="mt-2">
                                <img
                                  className="img-cver"
                                  src="/2022/images/testimonials/brand/Crypto.com-SpeakersizeBlack.svg"
                                  alt="Coinfest Asia 2022 (Mentions)"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="splide__slide rounded-lg">
                        <div className="testimonial-slide-bx grid grid-cols-2 sm:grid-cols-9 gap-y-4 gap-x-12">
                          <div className="col-span-full sm:col-span-6">
                            <div className="grid">
                              <p className="text-[#000000] font-bevietnam-pro text-sm sm:text-base font-medium mb-4">
                                ConsenSys is the leading Ethereum software
                                company. Marouen can help you transform and
                                launch your businesses on Web3.
                              </p>

                              <div className="hidden sm:flex flex-col">
                                <h3 className="text-[#000000] font-bevietnam-pro text-base font-bold capitalize">
                                  Marouen Zelleg
                                </h3>
                                <div className="mt-1 w-max">
                                  <img
                                    className="img-cver"
                                    src="/2022/images/testimonials/brand/Consensys-SpeakersizeBlack.svg"
                                    alt="Coinfest Asia 2022 (Mentions)"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-span-full sm:col-span-3 flex items-end sm:items-center relative h-[80%]">
                            <div className="images flex-1 mr-4 sm:mr-0 max-w-[58px] sm:max-w-max">
                              <img
                                src="/2022/images/testimonials/Marouen Zelleg.png"
                                alt="Coinfest Asia 2022 (Testimonials)"
                              />
                            </div>
                            <div className="flex sm:hidden flex-1 flex-col">
                              <h3 className="text-[#000000] font-bevietnam-pro text-base font-bold capitalize">
                                Marouen Zelleg
                              </h3>
                              <div className="mt-2">
                                <img
                                  className="img-cver"
                                  src="/2022/images/testimonials/brand/Consensys-SpeakersizeBlack.svg"
                                  alt="Coinfest Asia 2022 (Mentions)"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex absolute top-auto lg:top-4 left-4 sm:left-0 lg:left-auto right-auto lg:right-0 -bottom-1.5 lg:bottom-auto">
                <div
                  id="testimonialSlideControl"
                  className="event-slide-control flex items-center"
                  data-control-left="#testimonialSlideControlLeft"
                  data-control-right="#testimonialSlideControlRight"
                >
                  <div
                    id="testimonialSlideControlLeft"
                    className="event-slide-control_left"
                  >
                    <svg
                      className="stroke-current fill-transparent hover:fill-yellow-500 text-white h-9 w-9 transition duration-300 ease-in-out"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.6667 20L10.6667 16L14.6667 20ZM10.6667 16L14.6667 12L10.6667 16ZM10.6667 16H21.3333H10.6667ZM4 16C4 9.37259 9.37259 4 16 4C22.6275 4 28 9.37259 28 16C28 22.6275 22.6275 28 16 28C9.37259 28 4 22.6275 4 16Z"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div
                    id="testimonialSlideControlRight"
                    className="event-slide-control_right"
                  >
                    <svg
                      className="stroke-current fill-transparent hover:fill-yellow-500 text-white h-9 w-9 transition duration-300 ease-in-out"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.3333 12L21.3333 16L17.3333 12ZM21.3333 16L17.3333 20L21.3333 16ZM21.3333 16L10.6667 16L21.3333 16ZM28 16C28 22.6274 22.6274 28 16 28C9.37253 28 4 22.6274 4 16C4 9.37253 9.37253 4 16 4C22.6274 4 28 9.37253 28 16Z"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Partnership */}
          <div className="container">
            <section id="partners" className="grid gap-y-6 sm:gap-y-8">
              <div className="wrapp-hdding wrapp-light">
                <span className="wrapp-hdding-tags">2022</span>
                <div className="grid grid-cols-12 gap-x-6">
                  <div className=" col-span-full xl:col-span-3">
                    <h3 className="wrapp-hdding-title mb-1 xl:mb-0">
                      PARTNERS
                    </h3>
                  </div>
                  <div className="col-span-full xl:col-span-6 pl-0 xl:pl-[26px] mb-6 lg:mb-10 xl:mb-0">
                    <div className="wrapp-hdding-desc">
                      Coinfest Asia provides a unique opportunity for projects,
                      brands, company and organizations to grow, make
                      connections and demonstrate innovations to a diverse
                      community of enthusiasts.
                    </div>
                  </div>
                  <div className="flex flex-col items-start xl:items-end col-span-full xl:col-span-3">
                    <a
                      id="urlButtonCtaTabsPartner"
                      className="hidden sm:btn btn-sm lg:btn-base bg-[#0054E8] rounded-sm text-white text-xs lg:text-sm font-bold uppercase lg:px-4"
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Involved for 2023
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-y-6 sm:gap-y-0 gap-x-6">
                <div className="col-start-1 col-span-full sm:col-span-3 xl:col-span-3 pr-0 lg:pr-6 xl:pr-18">
                  <div className="relative overflow-x-auto sm:overflow-x-hidden pb-3 sm:pb-0 w-full">
                    <ul
                      className="nav nav-tabs flex flex-row sm:flex-col flex-nowrap sm:flex-wrap list-none pl-0"
                      id="tabs-partnership"
                      role="tablist"
                    >
                      <li
                        className="nav-item flex-grow rounded-tr-[14px] w-max sm:w-full max-w-max sm:max-w-full"
                        role="presentation"
                      >
                        <a
                          href="#tabs-sponsors"
                          className="nav-link block border-b-2 sm:border-b-0 border-l-0 sm:border-l-2 border-[#F3F3F3]
                        text-base font-semibold uppercase py-6 xl:py-6 px-6 sm:px-3 lg:px-6 active"
                          id="tabs-sponsors"
                          data-bs-toggle="pill"
                          data-bs-target="#tabs-sponsors-content"
                          data-url="https://www.google.com"
                          data-url-target="#urlButtonCtaTabsPartner"
                          role="tab"
                          aria-controls="tabs-sponsors"
                          aria-selected="false"
                        >
                          SPONSORS
                        </a>
                      </li>
                      <li
                        className="nav-item flex-grow rounded-tr-[14px] w-max sm:w-full max-w-max sm:max-w-full"
                        role="presentation"
                      >
                        <a
                          href="#tabs-media"
                          className="nav-link block border-b-2 sm:border-b-0 border-l-0 sm:border-l-2 border-[#F3F3F3]
                        text-base font-semibold uppercase py-6 xl:py-6 px-6 sm:px-3 lg:px-6"
                          id="tabs-media"
                          data-bs-toggle="pill"
                          data-bs-target="#tabs-media-content"
                          data-url="https://www.coinfest.asia"
                          data-url-target="#urlButtonCtaTabsPartner"
                          role="tab"
                          aria-controls="tabs-media"
                          aria-selected="false"
                        >
                          MEDIA
                        </a>
                      </li>
                      <li
                        className="nav-item flex-grow rounded-tr-[14px] w-max sm:w-full max-w-max sm:max-w-full"
                        role="presentation"
                      >
                        <a
                          href="#tabs-associations"
                          className="nav-link block border-b-2 sm:border-b-0 border-l-0 sm:border-l-2 border-[#F3F3F3]
                        text-base font-semibold uppercase py-6 xl:py-6 px-6 sm:px-3 lg:px-6"
                          id="tabs-associations"
                          data-bs-toggle="pill"
                          data-bs-target="#tabs-associations-content"
                          data-url=""
                          data-url-target="#urlButtonCtaTabsPartner"
                          role="tab"
                          aria-controls="tabs-associations"
                          aria-selected="false"
                        >
                          Associations
                        </a>
                      </li>
                      <li
                        className="nav-item flex-grow rounded-tr-[14px] w-max sm:w-full max-w-max sm:max-w-full"
                        role="presentation"
                      >
                        <a
                          href="#tabs-community"
                          className="nav-link block border-b-2 sm:border-b-0 border-l-0 sm:border-l-2 border-[#F3F3F3]
                        text-base font-semibold uppercase py-6 xl:py-6 px-6 sm:px-3 lg:px-6"
                          id="tabs-community"
                          data-bs-toggle="pill"
                          data-bs-target="#tabs-community-content"
                          data-url=""
                          data-url-target="#urlButtonCtaTabsPartner"
                          role="tab"
                          aria-controls="tabs-community"
                          aria-selected="false"
                        >
                          Community
                        </a>
                      </li>
                      <li
                        className="nav-item flex-grow rounded-tr-[14px] w-max sm:w-full max-w-max sm:max-w-full"
                        role="presentation"
                      >
                        <a
                          href="#tabs-accomodation"
                          className="nav-link block border-b-2 sm:border-b-0 border-l-0 sm:border-l-2 border-[#F3F3F3]
                        text-base font-semibold uppercase py-6 xl:py-6 px-6 sm:px-3 lg:px-6"
                          id="tabs-accomodation"
                          data-bs-toggle="pill"
                          data-bs-target="#tabs-accomodation-content"
                          data-url=""
                          data-url-target="#urlButtonCtaTabsPartner"
                          role="tab"
                          aria-controls="tabs-accomodation"
                          aria-selected="false"
                        >
                          ACCOMODATION
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-start-1 sm:col-start-4 col-span-full sm:col-span-9 pl-0 sm:pl-[26px]">
                  <div className="flex items-center relative h-auto w-full">
                    <div
                      id="tabs-partnership-content"
                      className="tab-content relative w-full"
                    >
                      <div className="bg-[#F3F3F3] hidden sm:flex absolute inset-y-0 -left-6 right-auto w-0.5"></div>

                      <div
                        className="tab-pane fade show active"
                        id="tabs-sponsors-content"
                        role="tabpanel"
                        aria-labelledby="tabs-sponsors"
                      >
                        <div className="inline-flex flex-wrap justify-center gap-y-6 w-full">
                          <div className="bx-partners basis-1/2 sm:basis-1/3 px-2">
                            <a
                              href="https://www.fireblocks.com/"
                              className="outline-none"
                            >
                              <img
                                src="/2022/images/partners/sponsor/fireblocks.svg"
                                alt="Fireblock - Coinfest Asia 2022 (Sponsor - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners basis-1/2 sm:basis-1/3 px-2">
                            <a
                              href="https://enjinstarter.com/"
                              className="outline-none"
                            >
                              <img
                                src="/2022/images/partners/sponsor/enjin-starter.png"
                                alt="kuncikoin - Coinfest Asia 2022 (Sponsor - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners basis-1/2 sm:basis-1/3 px-2">
                            <a
                              href="https://kuncicoin.com/"
                              className="outline-none"
                            >
                              <img
                                src="/2022/images/partners/sponsor/kuncikoin.svg"
                                alt="kuncikoin - Coinfest Asia 2022 (Sponsor - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners basis-1/2 sm:basis-1/3 px-2">
                            <a
                              href="https://www.elliptic.co/"
                              className="outline-none"
                            >
                              <img
                                src="/2022/images/partners/sponsor/elliptic.svg"
                                alt="elliptic - Coinfest Asia 2022 (Sponsor - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners basis-1/2 sm:basis-1/3 px-2">
                            <a
                              href="https://www.qoinpay.id/"
                              className="outline-none"
                            >
                              <img
                                src="/2022/images/partners/sponsor/qoinpay.svg"
                                alt="qoinpay - Coinfest Asia 2022 (Sponsor - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners basis-1/2 sm:basis-1/3 px-2">
                            <a
                              href="https://kuncicoin.com/"
                              className="outline-none"
                            >
                              <img
                                src="/2022/images/partners/sponsor/fastex.svg"
                                alt="fastex - Coinfest Asia 2022 (Sponsor - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners basis-1/2 sm:basis-1/3 px-2">
                            <a
                              href="https://www.deepcoin.com/"
                              className="outline-none"
                            >
                              <img
                                src="/2022/images/partners/sponsor/deepcoin.svg"
                                alt="deepcoin - Coinfest Asia 2022 (Sponsor - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners basis-1/2 sm:basis-1/3 px-2">
                            <a
                              href="https://emurgo.id/"
                              className="outline-none"
                            >
                              <img
                                src="/2022/images/partners/sponsor/emurgo.svg"
                                alt="emurgo - Coinfest Asia 2022 (Sponsor - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners basis-1/2 sm:basis-1/3 px-2">
                            <a
                              href="https://www.advance.ai/"
                              className="outline-none"
                            >
                              <img
                                src="/2022/images/partners/sponsor/advance-ai.svg"
                                alt="advance - Coinfest Asia 2022 (Sponsor - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners basis-1/2 sm:basis-1/3 px-2">
                            <a
                              href="https://pintu.co.id/"
                              className="outline-none"
                            >
                              <img
                                src="/2022/images/partners/sponsor/pintu.svg"
                                alt="pintu - Coinfest Asia 2022 (Sponsor - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners basis-1/2 sm:basis-1/3 px-2">
                            <a
                              href="https://app.1inch.io/"
                              className="outline-none"
                            >
                              <img
                                src="/2022/images/partners/sponsor/1inch.svg"
                                alt="1inch - Coinfest Asia 2022 (Sponsor - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners basis-1/2 sm:basis-1/3 px-2">
                            <a
                              href="https://indodax.com/"
                              className="outline-none"
                            >
                              <img
                                src="/2022/images/partners/sponsor/indodax.svg"
                                alt="indodax - Coinfest Asia 2022 (Sponsor - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners basis-1/2 sm:basis-1/3 px-2">
                            <a
                              href="https://www.blockchainspace.asia/"
                              className="outline-none"
                            >
                              <img
                                src="/2022/images/partners/sponsor/blockchain-space.svg"
                                alt="blockchain-space - Coinfest Asia 2022 (Sponsor - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners basis-1/2 sm:basis-1/3 px-2">
                            <a
                              href="http://amdgtoken.com/"
                              className="outline-none"
                            >
                              <img
                                src="/2022/images/partners/sponsor/amdg-white.svg"
                                alt="amdg-white - Coinfest Asia 2022 (Sponsor - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners basis-1/2 sm:basis-1/3 px-2">
                            <a
                              href="https://solana.com/id"
                              className="outline-none"
                            >
                              <img
                                src="/2022/images/partners/sponsor/solana.svg"
                                alt="solana - Coinfest Asia 2022 (Sponsor - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners basis-1/2 sm:basis-1/3 px-2">
                            <a
                              href="https://bingx.com/id-id/"
                              className="outline-none"
                            >
                              <img
                                src="/2022/images/partners/sponsor/xbing.svg"
                                alt="xbing - Coinfest Asia 2022 (Sponsor - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners basis-1/2 sm:basis-1/3 px-2">
                            <a
                              href="https://www.parastate.io/"
                              className="outline-none"
                            >
                              <img
                                src="/2022/images/partners/sponsor/parastate.svg"
                                alt="parastate - Coinfest Asia 2022 (Sponsor - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners basis-1/2 sm:basis-1/3 px-2">
                            <a
                              href="https://bri.co.id/"
                              className="outline-none"
                            >
                              <img
                                src="/2022/images/partners/sponsor/bri.svg"
                                alt="bri - Coinfest Asia 2022 (Sponsor - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners basis-1/2 sm:basis-1/3 px-2">
                            <a
                              href="https://tezos.com/"
                              className="outline-none"
                            >
                              <img
                                src="/2022/images/partners/sponsor/tezos.svg"
                                alt="tezos - Coinfest Asia 2022 (Sponsor - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners basis-1/2 sm:basis-1/3 px-2">
                            <a
                              href="https://www.straitsx.com/id"
                              className="outline-none"
                            >
                              <img
                                src="/2022/images/partners/sponsor/straitsx.svg"
                                alt="straitsx - Coinfest Asia 2022 (Sponsor - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners basis-1/2 sm:basis-1/3 px-2">
                            <a
                              href="https://www.nanovest.io/"
                              className="outline-none"
                            >
                              <img
                                src="/2022/images/partners/sponsor/nanovest.svg"
                                alt="nanovest - Coinfest Asia 2022 (Sponsor - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners basis-1/2 sm:basis-1/3 px-2">
                            <a
                              href="https://paras.id/id"
                              className="outline-none"
                            >
                              <img
                                src="/2022/images/partners/sponsor/paras.svg"
                                alt="paras - Coinfest Asia 2022 (Sponsor - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners basis-1/2 sm:basis-1/3 px-2">
                            <a
                              href="https://www.swallow.digital/"
                              className="outline-none"
                            >
                              <img
                                src="/2022/images/partners/sponsor/swallow.svg"
                                alt="swallow - Coinfest Asia 2022 (Sponsor - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners basis-1/2 sm:basis-1/3 px-2">
                            <a
                              href="https://metaone.gg/"
                              className="outline-none"
                            >
                              <img
                                src="/2022/images/partners/sponsor/metaoke.svg"
                                alt="metaoke - Coinfest Asia 2022 (Sponsor - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners basis-1/2 sm:basis-1/3 px-2">
                            <a
                              href="https://www.coinstore.com/#/"
                              className="outline-none"
                            >
                              <img
                                src="/2022/images/partners/sponsor/coinstore.svg"
                                alt="coinstore - Coinfest Asia 2022 (Sponsor - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners basis-1/2 sm:basis-1/3 px-2">
                            <a
                              href="https://ico.lordtoken.com/en/"
                              className="outline-none"
                            >
                              <img
                                src="/2022/images/partners/sponsor/lord-token.svg"
                                alt="lord-token - Coinfest Asia 2022 (Sponsor - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners basis-1/2 sm:basis-1/3 px-2">
                            <a
                              href="https://plotx.io/"
                              className="outline-none"
                            >
                              <img
                                src="/2022/images/partners/sponsor/plotx.svg"
                                alt="plotx - Coinfest Asia 2022 (Sponsor - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners basis-1/2 sm:basis-1/3 px-2">
                            <a
                              href="https://degreecrypto.com/"
                              className="outline-none"
                            >
                              <img
                                src="/2022/images/partners/sponsor/degree-crypto-token.png"
                                alt="degree-crypto-token - Coinfest Asia 2022 (Sponsor - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners basis-1/2 sm:basis-1/3 px-2">
                            <a
                              href="https://referreach.com/"
                              className="outline-none"
                            >
                              <img
                                src="/2022/images/partners/sponsor/refer-reach.svg"
                                alt="refer reach - Coinfest Asia 2022 (Sponsor - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners basis-1/2 sm:basis-1/3 px-2">
                            <a
                              href="https://biznethome.net/"
                              className="outline-none"
                            >
                              <img
                                src="/2022/images/partners/sponsor/biznet.svg"
                                alt="biznet - Coinfest Asia 2022 (Sponsor - Partner)"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="bx-hidden-content bx-hidden-content_light tab-pane relative fade show"
                        id="tabs-media-content"
                        role="tabpanel"
                        aria-labelledby="tabs-media"
                      >
                        <div
                          id="tabs-media-hidden"
                          className="bx-hidden-content_group grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-y-6 gap-x-6 hide"
                        >
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/media/coinvestasi.svg"
                                alt="Coinfest Asia 2022 (Media - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/media/coindesk.svg"
                                alt="Coinfest Asia 2022 (Media - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/media/coingecko.svg"
                                alt="Coinfest Asia 2022 (Media - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/media/be-in-crypto.svg"
                                alt="Coinfest Asia 2022 (Media - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/media/u-today.svg"
                                alt="Coinfest Asia 2022 (Media - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/media/coinfea.png"
                                alt="Coinfest Asia 2022 (Media - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/media/coinpedia.png"
                                alt="Coinfest Asia 2022 (Media - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/media/cointelegraph.svg"
                                alt="Coinfest Asia 2022 (Media - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/media/bigcoin-vietnam.png"
                                alt="Coinfest Asia 2022 (Media - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/media/bitcosar.png"
                                alt="Coinfest Asia 2022 (Media - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/media/bitcoin-garden.png"
                                alt="Coinfest Asia 2022 (Media - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/media/techinasia.svg"
                                alt="Coinfest Asia 2022 (Media - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/media/cyptoevents.png"
                                alt="Coinfest Asia 2022 (Media - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/media/coinqura.svg"
                                alt="Coinfest Asia 2022 (Media - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/media/desember-labs.svg"
                                alt="Coinfest Asia 2022 (Media - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/media/itez.svg"
                                alt="Coinfest Asia 2022 (Media - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/media/coinkolik.svg"
                                alt="Coinfest Asia 2022 (Media - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/media/thenewscrypto.png"
                                alt="Coinfest Asia 2022 (Media - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/media/coinvoice.svg"
                                alt="Coinfest Asia 2022 (Media - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/media/coinspeaker.svg"
                                alt="Coinfest Asia 2022 (Media - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/media/cryptopolitan.svg"
                                alt="Coinfest Asia 2022 (Media - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/media/diariobitcoin.svg"
                                alt="Coinfest Asia 2022 (Media - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/media/bitcoin-addict.svg"
                                alt="Coinfest Asia 2022 (Media - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/media/the-crpytonomist.png"
                                alt="Coinfest Asia 2022 (Media - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/media/ngomong-uang.svg"
                                alt="Coinfest Asia 2022 (Media - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/media/trader-harian.svg"
                                alt="Coinfest Asia 2022 (Media - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/media/crypto-currency.png"
                                alt="Coinfest Asia 2022 (Media - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/media/coincodex.svg"
                                alt="Coinfest Asia 2022 (Media - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/media/crypto-research.png"
                                alt="Coinfest Asia 2022 (Media - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/media/coin-folks.svg"
                                alt="Coinfest Asia 2022 (Media - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/media/portalkripto.svg"
                                alt="Coinfest Asia 2022 (Media - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/media/future-coin.svg"
                                alt="Coinfest Asia 2022 (Media - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/media/coindar.svg"
                                alt="Coinfest Asia 2022 (Media - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/media/crunchbase.svg"
                                alt="Coinfest Asia 2022 (Media - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/media/crypto-reporter.svg"
                                alt="Coinfest Asia 2022 (Media - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/media/zex-pr-wire.png"
                                alt="Coinfest Asia 2022 (Media - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/media/republik-rupiah.svg"
                                alt="Coinfest Asia 2022 (Media - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/media/icrypto-media.svg"
                                alt="Coinfest Asia 2022 (Media - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/media/micky.svg"
                                alt="Coinfest Asia 2022 (Media - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/media/news-btc.png"
                                alt="Coinfest Asia 2022 (Media - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/media/media-coinspaid.svg"
                                alt="Coinfest Asia 2022 (Media - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/media/republik-rupiah2.svg"
                                alt="Coinfest Asia 2022 (Media - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/media/blockhead.svg"
                                alt="Coinfest Asia 2022 (Media - Partner)"
                              />
                            </a>
                          </div>
                        </div>
                        <button
                          className="bx-hidden-content_btn btn btn-sm bg-transparent btn-pill btn-expands text-[#000000] outline-none mx-auto py-0 px-0"
                          data-expands
                          data-target="#tabs-media-hidden"
                          data-label="See all Media"
                        ></button>
                      </div>
                      <div
                        className="bx-hidden-content bx-hidden-content_light tab-pane relative fade show"
                        id="tabs-community-content"
                        role="tabpanel"
                        aria-labelledby="tabs-community"
                      >
                        <div
                          id="tabs-community-hidden"
                          className="bx-hidden-content_group grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-y-6 gap-x-6 hide"
                        >
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/komunitas-coinvestasi.svg"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/trabarindo.png"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/metabase-community.svg"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/data-engineering-indonesia.png"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/breakthrough.png"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/alterra-academy.svg"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/bitcoin-malaysia.svg"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/gvc.svg"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/jp.svg"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/s21.svg"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/cryptowid.svg"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/crypto-hicks.svg"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/bali-js.svg"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/dev-circle-bali.svg"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/idnft.svg"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/crypto-bali-community.png"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/gadjah-society.png"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/gajahcrypto.svg"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/startup-bandung.svg"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/remote-skills-academy.svg"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/sss.svg"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/ganesha-dao.svg"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/meta-rupa.png"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/apac-dao.svg"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/daft.png"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/baliverse.png"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/utopia.svg"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/ugi.png"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/pejuang-crypto.png"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/majalabs.svg"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/delysid-kiddos.svg"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/b-work-bali.svg"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/crypto-in.svg"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/dex-capital.png"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/gdg-bali.svg"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/harmony-indonesia.svg"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/jvm-indonesia.svg"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/mindblowon-universe.svg"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/mural-fest.svg"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/offchain.svg"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/akaindis.svg"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/undiknas-crypto.png"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/bitcoin-district.png"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/cryptoid.svg"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/cuanterus.svg"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/eli5defi.svg"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/gudang-kripto.svg"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/himkom-udayana.svg"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/hmi.svg"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/hmti.svg"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/idcrypto.png"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/le-wagon.svg"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/student-innovation-center.svg"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/studi-club.svg"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/ipb.png"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/just-co.svg"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/near-indonesia.svg"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/outpost.svg"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a href="" className="outline-none">
                              <img
                                src="/2022/images/partners/community/favourse.svg"
                                alt="Coinfest Asia 2022 (Community - Partner)"
                              />
                            </a>
                          </div>
                        </div>
                        <button
                          className="bx-hidden-content_btn btn btn-sm bg-transparent btn-pill btn-expands text-[#000000] outline-none mx-auto py-0 px-0"
                          data-expands
                          data-target="#tabs-community-hidden"
                          data-label="See all Community"
                        ></button>
                      </div>
                      <div
                        className="tab-pane fade show"
                        id="tabs-associations-content"
                        role="tabpanel"
                        aria-labelledby="tabs-associations"
                      >
                        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-y-6 gap-x-6">
                          <div className="bx-partners col-span-1">
                            <img
                              src="/2022/images/partners/associations/abi.svg"
                              alt="ABI - Coinfest Asia 2022 (From The Creators)"
                            />
                          </div>
                          <div className="bx-partners col-span-1">
                            <img
                              src="/2022/images/partners/associations/access-blockchain.svg"
                              alt="Access - Coinfest Asia 2022 (From The Creators)"
                            />
                          </div>
                          <div className="bx-partners col-span-1">
                            <img
                              src="/2022/images/partners/associations/blockchain-association sIngapore.svg"
                              alt="BAS - Coinfest Asia 2022 (From The Creators)"
                            />
                          </div>
                          <div className="bx-partners col-span-1">
                            <img
                              src="/2022/images/partners/associations/bga.png"
                              alt="BGA - Coinfest Asia 2022 (From The Creators)"
                            />
                          </div>
                          <div className="bx-partners col-span-1">
                            <img
                              src="/2022/images/partners/associations/apaki.svg"
                              alt="APAKI - Coinfest Asia 2022 (From The Creators)"
                            />
                          </div>
                          <div className="bx-partners col-span-1">
                            <img
                              src="/2022/images/partners/associations/aba.svg"
                              alt="ABA - Coinfest Asia 2022 (From The Creators)"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade show"
                        id="tabs-accomodation-content"
                        role="tabpanel"
                        aria-labelledby="tabs-accomodation"
                      >
                        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-y-6 gap-x-6">
                          <div className="bx-partners col-span-1">
                            <a
                              href="https://id.wbaliseminyak.com/"
                              className="outline-none"
                            >
                              <img
                                src="/2022/images/partners/accomodation/w-bali.svg"
                                alt="W Bali - Coinfest Asia 2022 (From The Creators)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a
                              href="https://citadinesberawabeach.com-bali.com/id/"
                              className="outline-none"
                            >
                              <img
                                src="/2022/images/partners/accomodation/citadines.svg"
                                alt="Citadines - Coinfest Asia 2022 (From The Creators)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a
                              href="https://alofseminyak.com-bali.com/"
                              className="outline-none"
                            >
                              <img
                                src="/2022/images/partners/accomodation/aloft-bali-seminyak.svg"
                                alt="ALoft - Coinfest Asia 2022 (From The Creators)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a
                              href="https://www.baliparagon.com/"
                              className="outline-none"
                            >
                              <img
                                src="/2022/images/partners/accomodation/paragon-hotel.svg"
                                alt="Paragon - Coinfest Asia 2022 (From The Creators)"
                              />
                            </a>
                          </div>
                          <div className="bx-partners col-span-1">
                            <a
                              href="https://www.wuhub.id/"
                              className="outline-none"
                            >
                              <img
                                src="/2022/images/partners/accomodation/wu-hub.svg"
                                alt="Wu Hub - Coinfest Asia 2022 (From The Creators)"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="container">
            {/* Banner (See You 2023) */}
            <section className="bg-[#0054E8] flex items-center justify-center rounded overflow-hidden relative h-[410px]">
              <div className="backdrop-container backdrop-seeyou pointer-events-none absolute inset-y-0 inset-x-0 z-[2]">
                <div className="backdrop-items"></div>
                <div className="backdrop-items"></div>
                <div className="backdrop-items"></div>
                <div className="backdrop-items"></div>
                <div className="backdrop-items"></div>
                <div className="backdrop-items"></div>
                <div className="backdrop-items"></div>
                <div className="backdrop-items"></div>
                <div className="backdrop-items"></div>
              </div>

              <div className="text-center relative z-10">
                <h1 className="text-white font-montserrat text-[32px] sm:text-[56px] font-extrabold leading-[44px] sm:leading-[66px] uppercase max-w-full sm:max-w-[655px]">
                  SEE YOU IN
                  <br />
                  COINFEST ASIA 2023
                </h1>
                {/* <a
                  href="/"
                  className="btn bg-yellow-500 rounded-sm text-[#000000] text-xs lg:text-sm font-bold uppercase py-3 sm:py-4 px-4 sm:px-6 mt-8 mx-auto"
                >
                  GET YOUR TICKET NOW
                </a> */}
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="footr footr-light overflow-hidden z-10">
        {/* Footer (Main) */}
        <div className="footr-main bg-white py-16">
          <div className="container">
            <div className="grid grid-cols-12 gap-y-8 gap-x-6">
              <div className="col-span-full lg:col-span-4 grid gap-y-6 pr-6">
                <div className="grid gap-y-3">
                  <div className="h-[58px] w-auto">
                    <img
                      className="img-cver min-h-full max-h-full w-auto pointer-events-none"
                      src="/2022/images/coinfestasia2023-blue.svg"
                      alt="Coinfest Asia 2022 (Brand LOGO)"
                    />
                  </div>
                  <p className="text-[#323E53] font-bevietnam-pro text-base font-normal mt-3">
                    The First and Biggest Crypto Festival in Asia. Coinfest Asia
                    is the premier industry event that focuses on the crypto
                    ecosystem in Indonesia and Asia. Coinfest Asia is not
                    consumer/retail investor oriented.
                  </p>
                </div>
                <ul className="scmedia flex flex-wrap gap-4 list-none xl:mx-0 w-max xl:w-full">
                  <li className="scmedia-item relative">
                    <a
                      href="https://twitter.com/coinfestasia"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/2023/assets/images/social-media/twitter.svg"
                        alt="Coinfest Asia 2022 (Social Media)"
                      />
                    </a>
                  </li>
                  <li className="scmedia-item relative">
                    <a
                      href="https://www.instagram.com/coinfest.asia/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/2023/assets/images/social-media/instagram.svg"
                        alt="Coinfest Asia 2022 (Social Media)"
                      />
                    </a>
                  </li>
                  <li className="scmedia-item relative">
                    <a
                      href="https://t.me/coinfestasiaofficial"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/2023/assets/images/social-media/telegram.svg"
                        alt="Coinfest Asia 2022 (Social Media)"
                      />
                    </a>
                  </li>
                  <li className="scmedia-item relative">
                    <a
                      href="https://www.linkedin.com/showcase/coinfest/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/2023/assets/images/social-media/linkedin.svg"
                        alt="Coinfest Asia 2022 (Social Media)"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-span-full lg:col-span-4 pl-0 lg:pl-14">
                <section
                  id="quickLinks"
                  className="footr-main_tautan grid gap-y-4"
                >
                  <h3 className="heading text-black-100 dark:text-black-100 font-montserrat text-xl font-semibold tracking-tight">
                    Quick Links
                  </h3>
                  <ul id="menu-quick-links" className="menu">
                    <li className="menu-item">
                      <a data-scrollto href="#about">
                        About
                      </a>
                    </li>
                    <li className="menu-item">
                      <a data-scrollto href="#highlight">
                        Highlight
                      </a>
                    </li>
                    <li className="menu-item">
                      <a data-scrollto href="#social-media">
                        Social Media
                      </a>
                    </li>
                    <li className="menu-item">
                      <a data-scrollto href="#testimonials">
                        Testimonials
                      </a>
                    </li>
                    <li className="menu-item">
                      <a data-scrollto href="#speakers">
                        Speakers
                      </a>
                    </li>
                    <li className="menu-item">
                      <a data-scrollto href="#partners">
                        Partners
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="col-span-full lg:col-span-4">
                <div className="flex flex-col justify-start w-full lg:w-[315px]">
                  <section
                    id="reachOut"
                    className="footr-main_tautan flex flex-col"
                  >
                    <h3
                      className="heading text-black-100 dark:text-black-100 font-montserrat text-xl font-semibold tracking-tight
                "
                    >
                      Reach Out
                    </h3>
                    <ul className="main-menu menu flex-col mt-3">
                      <li className="menu-item">
                        <a
                          href="mailto:hi@coinfest.asia"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="flex items-center justify-center mr-2">
                            <svg
                              className="fill-current h-6 w-6"
                              viewBox="0 0 25 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M17.4395 3C18.7805 3 20.0705 3.53 21.0195 4.481C21.9695 5.43 22.5005 6.71 22.5005 8.05V15.95C22.5005 18.74 20.2305 21 17.4395 21H7.56049C4.76949 21 2.50049 18.74 2.50049 15.95V8.05C2.50049 5.26 4.75949 3 7.56049 3H17.4395ZM19.0305 9.54L19.1105 9.46C19.3495 9.17 19.3495 8.75 19.0995 8.46C18.9605 8.311 18.7695 8.22 18.5705 8.2C18.3605 8.189 18.1605 8.26 18.0095 8.4L13.5005 12C12.9205 12.481 12.0895 12.481 11.5005 12L7.00049 8.4C6.68949 8.17 6.25949 8.2 6.00049 8.47C5.73049 8.74 5.70049 9.17 5.92949 9.47L6.06049 9.6L10.6105 13.15C11.1705 13.59 11.8495 13.83 12.5605 13.83C13.2695 13.83 13.9605 13.59 14.5195 13.15L19.0305 9.54Z"
                              />
                            </svg>
                          </div>
                          hi@coinfest.asia
                        </a>
                      </li>
                    </ul>
                  </section>
                  <section
                    id="reachOut"
                    className="footr-main_tautan flex flex-col mt-5"
                  >
                    <h3 className="heading text-black-100 dark:text-black-100 font-montserrat text-xl font-semibold tracking-tight">
                      Organized By
                    </h3>
                    <ul className="main-menu menu flex-col mt-3">
                      <li className="menu-item">
                        <a
                          href="https://coinvestasi.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="flex items-center justify-center">
                            <img
                              className="h-6 w-auto"
                              src="/2022/images/coinvestasi.svg"
                              alt="Coinvestasi (Organized By)"
                            />
                          </div>
                        </a>
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer (End) */}
        <div className="container">
          <div className="footr-end flex items-center justify-center overflow-hidden px-6 sm:px-20 lg:px-[108px] py-6">
            <p className="text-gray-400 dark:text-[#2B3A54] font-bevietnam-pro text-sm font-medium text-center">
              Copyright © Coinfest Asia. All rights reserved. Coinfest is
              organized by Coinvestasi, a subsidiary of{" "}
              <a
                className="text-primary"
                href="https://indonesiacrypto.network/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Indonesia Crypto Network
              </a>
              .
            </p>
          </div>
        </div>
      </footer>

      <Transition
        show={isShowing}
        enter="transition-opacity duration-150"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="fixed top-auto bottom-3 sm:bottom-6 left-3 sm:left-6 lg:left-10 right-3 sm:right-auto z-[500]"
      >
        <section
          className={`bg-[#FB51C0] rounded-[10px] py-6 px-4 max-w-max sm:max-w-[383px]`}
        >
          {/* <div className="flex items-start justify-start cursor-pointer">
            <XMarkIcon
              className="fill-current text-white h-6 w-6"
              onClick={() => setIsShowing((isShowing) => !isShowing)}
            />
          </div> */}
          <div className="">
            <h3 className="text-white font-bevietnam-pro text-base sm:text-xl font-bold uppercase">
              You’re currently viewing LAST YEAR highlights
            </h3>
          </div>
          <Buttons
            typeBtn="btn-link"
            url="/"
            label="Back to site"
            variants="btn-primary"
            rounded="pill"
            text="uppercase"
            position="center"
            withIcons={true}
            positionIcons="right"
            ariaLabel="btnBackToSite"
            className="btn-block rounded-md text-sm sm:text-base font-semibold px-4 mt-4"
          >
            <ArrowLongRightIcon className="stroke-current stroke-[0.3] ml-2 h-5 sm:h-6 w-5 sm:w-6" />
          </Buttons>
        </section>
      </Transition>

      {/*  JavaScript*/}
      <Script
        strategy="afterInteractive"
        src="/2022/js/tw/index.min.js"
      />
      <Script
        strategy="afterInteractive"
        src="/2022/js/splide/splide.min.js"
      />
      <Script
        strategy="afterInteractive"
        src="/2022/js/lightgallery/lg-fullscreen.min.js"
      />
      <Script
        strategy="afterInteractive"
        src="/2022/js/lightgallery/lg-zoom.min.js"
      />
      <Script
        strategy="afterInteractive"
        src="/2022/js/lightgallery/lg-thumbnail.min.js"
      />
      <Script
        strategy="afterInteractive"
        src="/2022/js/lightgallery/lightgallery.min.js"
      />
      <Script strategy="afterInteractive" src="/2022/js/aos/aos.js" />
      <Script strategy="afterInteractive" src="/2022/js/configs.js" />
    </>
  );
};

export default CoinfestAsia2022;

CoinfestAsia2022.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
