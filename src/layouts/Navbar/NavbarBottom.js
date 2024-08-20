import React, { useRef, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

// @components
import Container from "@components/Container";
import MenuPopUp from "@components/UI/Modal/MenuPopUp";
import BannerTickets from "@components/UI/Card/BannerTickets";

const NavbarBottom = () => {
  const router = useRouter();

  const isNavBtnToggle = useRef(null);
  const isNavMobile = useRef(null);
  const [isMenu, setMenu] = useState(false);
  const [isFullWidth, setIsFullWidth] = useState(false);

  // @gsap-active
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
      scroller: "body",
      markers: false,
    });

    return () => {
      // optionally return a cleanup function that will be called when none of the conditions match anymore (after having matched)
      // it'll automatically call context.revert() - do NOT do that here . Only put custom cleanup code here.
    };
  }, []);

  // @gsap-init
  useEffect(() => {
    const secEnd = document.querySelector(".ca2024SectionEnd");

    if (secEnd) {
      const tlNav = gsap.timeline({
        scrollTrigger: {
          trigger: ".ca2024SectionEnd",
          start: "top 60%",
          end: "bottom 100%",
          scrub: true,
        },
      });

      tlNav.to(".ca2024NavbarMain", {
        width: "100%",
        ease: "none",
      });

      return () => {
        tlNav.revert();
      };
    }
  });

  // @banner-popup(nav)
  const isClosePopNav = (e) => {
    e.preventDefault();

    const elBckdrpPopNav = document.querySelector(".ca2024BckdrpBnnrPopNav");
    const elmtPopUpAll = document.querySelectorAll(".ca2024PopUpNav");
    const elmtIconsPopUpAll = document.querySelectorAll(".ca2024IconNavPopUp");

    if (elBckdrpPopNav) {
      elBckdrpPopNav.classList.add("nonActive");
    }

    elmtPopUpAll.forEach((elmnt) => {
      elmnt.classList.add("nonActive");
    });

    elmtIconsPopUpAll.forEach((elmnt) => {
      if (elmnt.classList.contains("rotate-180")) {
        elmnt.classList.remove("rotate-180");
        elmnt.classList.add("rotate-0");
      }
    });
  };

  const isOpenPopNav = (e, dataTarget, dataIcons) => {
    e.preventDefault();

    const elmtTarget = dataTarget;
    const elBckdrpPopNav = document.querySelector(".ca2024BckdrpBnnrPopNav");
    const elPopNav = document.querySelector(elmtTarget);

    const elmtPopUpAll = document.querySelectorAll(".ca2024PopUpNav");
    const elmtIconsPopUpAll = document.querySelectorAll(".ca2024IconNavPopUp");

    if (elBckdrpPopNav.classList.contains("nonActive") === true) {
      elBckdrpPopNav.classList.remove("nonActive");
    }

    elmtPopUpAll.forEach((elmnt) => {
      if (!elmnt.classList.contains("nonActive")) {
        elmnt.classList.add("nonActive");
      }
    });

    elmtIconsPopUpAll.forEach((elmnt) => {
      if (elmnt.classList.contains("rotate-180")) {
        elmnt.classList.remove("rotate-180");
        elmnt.classList.add("rotate-0");
      }
    });

    if (dataIcons !== undefined) {
      const elmtIcons = document.querySelector(dataIcons);

      if (elmtIcons.classList.contains("rotate-0")) {
        elmtIcons.classList.remove("rotate-0");
        elmtIcons.classList.add("rotate-180");
      } else {
        elmtIcons.classList.add("rotate-0");
        elmtIcons.classList.remove("rotate-180");
      }
    }

    if (elPopNav.classList.contains("nonActive") === true) {
      elPopNav.classList.remove("nonActive");
    } else {
      elPopNav.classList.add("nonActive");
    }
  };

  // @active(banner-popup(ticket))
  useEffect(() => {
    const hndleRtrNavComplete = () => {
      const elBckdrpPopNav = document.querySelector(".ca2024BckdrpBnnrPopNav");
      const elmtPopUpAll = document.querySelectorAll(".ca2024PopUpNav");
      const elmtIconsPopUpAll = document.querySelectorAll(
        ".ca2024IconNavPopUp",
      );

      if (elBckdrpPopNav.classList.contains("nonActive") === false) {
        elBckdrpPopNav.classList.add("nonActive");
      }

      elmtPopUpAll.forEach((elmnt) => {
        if (!elmnt.classList.contains("nonActive")) {
          elmnt.classList.add("nonActive");
        }
      });

      elmtIconsPopUpAll.forEach((elmnt) => {
        if (elmnt.classList.contains("rotate-180")) {
          elmnt.classList.remove("rotate-180");
          elmnt.classList.add("rotate-0");
        }
      });
    };

    router.events.on("routeChangeComplete", hndleRtrNavComplete);
    router.events.on("routeChangeError", hndleRtrNavComplete);

    return () => {
      router.events.off("routeChangeComplete", hndleRtrNavComplete);
      router.events.off("routeChangeError", hndleRtrNavComplete);
    };
  }, [router]);

  // @menu-toggle(mobile)
  const isToggleMenu = useCallback(() => {
    setMenu((prev) => !prev);
  }, [setMenu]);

  // const handleScroll = () => {
  //   const scrollPosition = window.scrollY;
  //   const bodyHeight = document.body.clientHeight;
  //   const windowHeight = window.innerHeight;

  //   if (scrollPosition >= bodyHeight - windowHeight - 20) {
  //     setIsFullWidth(true);
  //   } else {
  //     setIsFullWidth(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      <nav
        className={`ca2024Navbar fixed ${
          router.pathname === "/"
            ? isFullWidth
              ? "bottom-8"
              : "bottom-4"
            : "bottom-4"
        } inset-x-0 z-xl mx-auto h-auto transition-all duration-300 ease-out`}
      >
        <Container className="relative h-full">
          {/* @menu-popup */}
          <MenuPopUp
            label="Generals"
            menu={true}
            rounded={false}
            options={[
              {
                label: "Guide",
                url: "/guide",
                type: "page",
              },
              {
                label: "Agenda",
                url: "/agenda",
                type: "page",
              },
              {
                label: "Activities",
                url: "/activities",
                type: "page",
              },
              {
                label: "Venue",
                url: "/venue",
                type: "page",
              },
              {
                label: "Speakers",
                url: "/speakers",
                type: "page",
              },
              {
                label: "Partners",
                url: "/partners",
                type: "page",
              },
              {
                label: "Travel",
                url: "/travel",
                type: "page",
              },
            ]}
          />
          <MenuPopUp
            label="Rundown"
            menu={true}
            rounded={false}
            options={[
              {
                label: "Rundown",
                url: "/agenda",
                type: "page",
              },
              {
                label: "Speakers",
                url: "/speakers",
                type: "page",
              },
            ]}
            banner={false}
          />
          <MenuPopUp
            label="Activities"
            menu={true}
            rounded={false}
            options={[
              {
                label: "VIP Experience",
                url: "/bull-pass",
                type: "page",
              },
              {
                label: "Hackathons",
                url: "/activities/hackathons",
                type: "page",
              },
              {
                label: "Pitching Sessions",
                url: "/pitching-sessions",
                type: "page",
              },
              {
                label: "Trading Competitions",
                url: "/activities/trading-competitions",
                type: "page",
              },
            ]}
            banner={false}
          />
          <MenuPopUp
            label="GetInvolved"
            menu={true}
            rounded={false}
            options={[
              {
                label: "Enquire for sponsorship",
                url: "/get-involved/sponsorship",
                type: "page",
              },
              {
                label: "Become a media partner",
                url: "/get-involved/media-partner",
                type: "page",
              },
              {
                label: "Become a community partner",
                url: "/get-involved/community",
                type: "page",
              },
              {
                label: "Co-host a side event",
                url: "/get-involved/cohost-side-events",
                type: "page",
              },
              {
                label: "Submit your side event",
                url: "/get-involved/submit-side-events",
                type: "page",
              },
            ]}
            banner={false}
          />
          <MenuPopUp
            label="BtnTicket"
            menu={false}
            rounded={true}
            options={[]}
          />

          {/* @navbar-main */}
          <div
            className={`ca2024NavbarMain relative mx-auto flex h-full w-full flex-row items-center justify-between rounded-[20px] border border-solid border-white/[0.16] bg-black-900/25 px-2 py-2 lg:w-[857px] xl:w-[1100px] ${
              isMenu ? "!w-full" : null
            } z-100 max-w-full`}
          >
            {/* @menu */}
            <div className="flex flex-col xl:hidden">
              <button
                ref={isNavBtnToggle}
                id="navBtnToggle"
                className={`hmbrgrStairs relative flex h-12 w-12 flex-col items-center justify-center rounded-[14px] bg-black-900 px-3.5 outline-none focus-visible:outline-none sm:h-13 sm:w-13 ${
                  isMenu ? "deactive" : "active"
                }`}
                aria-label="Button Nav (Toggle)"
                onClick={isToggleMenu}
              >
                <span className="hmbrgrStairsLine"></span>
                <span className="hmbrgrStairsLine"></span>
                <span className="hmbrgrStairsLine"></span>
              </button>
            </div>
            <div className="ca2024NavbarMenu">
              <ul className="menu menu-row hidden">
                <li>
                  <button
                    className="outline-none focus-visible:outline-none"
                    aria-label="Coinfest Asia 2024 (Generals - Button PopUp Nav)"
                    aria-labelledby="Coinfest Asia 2024 (Generals - Button PopUp Nav)"
                    onClick={(e) => {
                      isOpenPopNav(
                        e,
                        ".ca2024Generals",
                        ".ca2024IconGenerals_NavPopUp",
                      );
                    }}
                  >
                    <div
                      className={`ca2024IconGenerals_NavPopUp hmbrgrStairs active relative flex h-12 w-12 flex-col items-center justify-center rounded-[12px] bg-black-900 px-3.5 outline-none focus-visible:outline-none sm:h-14 sm:w-13`}
                    >
                      <span className="hmbrgrStairsLine"></span>
                      <span className="hmbrgrStairsLine"></span>
                      <span className="hmbrgrStairsLine"></span>
                    </div>
                  </button>
                </li>
                <li>
                  <Link className="mt-px text-white" href={"/guide"}>
                    Guide
                  </Link>
                </li>
                <li>
                  <button
                    className="flex flex-row items-center justify-center px-3 text-white outline-none focus-visible:outline-none"
                    aria-label="Coinfest Asia 2024 (Rundown - Button PopUp Nav)"
                    aria-labelledby="Coinfest Asia 2024 (Rundown - Button PopUp Nav)"
                    onClick={(e) => {
                      isOpenPopNav(
                        e,
                        ".ca2024Rundown",
                        ".ca2024IconRundown_NavPopUp",
                      );
                    }}
                  >
                    Agenda
                    <svg
                      className="ca2024IconNavPopUp ca2024IconRundown_NavPopUp duration-250 ms-2.5 mt-0.5 h-5 w-5 rotate-0 transform fill-current transition ease-in-out"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289L10 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z"
                      />
                    </svg>
                  </button>
                </li>
                <li>
                  <button
                    className="flex flex-row items-center justify-center px-3 text-white outline-none focus-visible:outline-none"
                    aria-label="Coinfest Asia 2024 (Activities - Button PopUp Nav)"
                    aria-labelledby="Coinfest Asia 2024 (Activities - Button PopUp Nav)"
                    onClick={(e) => {
                      isOpenPopNav(
                        e,
                        ".ca2024Activities",
                        ".ca2024IconActivities_NavPopUp",
                      );
                    }}
                  >
                    <Link className="!px-0 !py-0" href="/activities">
                      Activities
                    </Link>
                    <svg
                      className="ca2024IconNavPopUp ca2024IconActivities_NavPopUp duration-250 ms-2.5 mt-0.5 h-5 w-5 rotate-0 transform fill-current transition ease-in-out"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289L10 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z"
                      />
                    </svg>
                  </button>
                </li>
                <li>
                  <Link className="mt-px text-white" href={"/coinfest-week"}>
                    Side Events
                  </Link>
                </li>
                <li>
                  <button
                    className="flex flex-row items-center justify-center px-3 text-white outline-none focus-visible:outline-none"
                    aria-label="Coinfest Asia 2024 (GetInvolved - Button PopUp Nav)"
                    aria-labelledby="Coinfest Asia 2024 (GetInvolved - Button PopUp Nav)"
                    onClick={(e) => {
                      isOpenPopNav(
                        e,
                        ".ca2024GetInvolved",
                        ".ca2024IconGetInvolved_NavPopUp",
                      );
                    }}
                  >
                    <Link className="!px-0 !py-0" href="/get-involved">
                      Get Involved
                    </Link>
                    <svg
                      className="ca2024IconNavPopUp ca2024IconGetInvolved_NavPopUp duration-250 ms-2.5 mt-0.5 h-5 w-5 rotate-0 transform fill-current transition ease-in-out"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.70711 7.29289L10 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68342 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
            <div className="ml-0 flex flex-row sm:ml-4">
              <Link
                className={`relative mr-2 inline-flex items-center justify-center rounded-[14px] bg-secondary px-3 py-4 font-bevietnamPro text-xs font-medium text-white outline-none last:mr-0 focus-visible:outline-none sm:px-6 sm:text-base xl:bg-primary xl:text-black-900`}
                title="Enquire for Sponsorship (Navbar)"
                href={"/get-involved/sponsorship"}
              >
                Enquire for Sponsorship
              </Link>
              <button
                className={`ca2024BgOverflay relative hidden cursor-pointer items-center justify-center rounded-[14px] bg-white px-3 py-4 font-bevietnamPro text-xs font-medium text-black-900 outline-none last:mr-0 focus-visible:outline-none sm:px-6 sm:text-base xl:inline-flex`}
                aria-label="Coinfest Asia 2024 (Tickets - Button PopUp Nav)"
                aria-labelledby="Coinfest Asia 2024 (Tickets - Button PopUp Nav)"
                onClick={(e) => {
                  isOpenPopNav(e, ".ca2024BtnTicket");
                }}
              >
                Buy Tickets
              </button>
              <Link
                className={`ca2024BgOverflay relative inline-flex cursor-pointer items-center justify-center rounded-[14px] bg-white px-3 py-4 font-bevietnamPro text-xs font-medium text-black-900 outline-none last:mr-0 focus-visible:outline-none sm:px-6 sm:text-base xl:hidden`}
                title="Coinfest Asia 2024 (Tickets)"
                href={"https://ticket.coinfest.asia/"}
              >
                Tickets
              </Link>
            </div>
          </div>
        </Container>
      </nav>

      {/* @nav-mobile */}
      <nav
        ref={isNavMobile}
        className={`ca2024NavMenuMobile fixed inset-x-0 inset-y-0 flex flex-col justify-between overflow-y-auto bg-secondary ${
          isMenu ? "active z-lg" : "deflt -z-px"
        } h-svh`}
      >
        <div className="flex h-auto flex-col justify-between sm:h-full">
          <ul className={`menu menu-stripe hs-accordion-group mb-24`}>
            <li className="hs-accordion" id="menuAccordion">
              <button
                type="button"
                className="hs-accordion-toggle flex w-full items-center gap-x-3.5 border-b border-solid border-white px-4 py-6 text-start text-white"
              >
                Menu
                <svg
                  className="ms-auto hidden size-4 hs-accordion-active:block"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
                <svg
                  className="ms-auto block size-4 hs-accordion-active:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                id="menuAccordionChild"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              >
                <ul className="pt-0">
                  <li>
                    <Link
                      className="!ps-8 font-staraSemiBold text-lg text-white"
                      href="/activities"
                    >
                      Activities
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="!ps-8 font-staraSemiBold text-lg text-white"
                      href="/agenda"
                    >
                      Agenda
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="!ps-8 font-staraSemiBold text-lg text-white"
                      href="/venue"
                    >
                      Venue
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="!ps-8 font-staraSemiBold text-lg text-white"
                      href="/speakers"
                    >
                      Speakers
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="!ps-8 font-staraSemiBold text-lg text-white"
                      href="/partners"
                    >
                      Partners
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="!ps-8 font-staraSemiBold text-lg text-white"
                      href="/travel"
                    >
                      Travel
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link className="" href="/guide">
                Guide
              </Link>
            </li>
            <li className="hs-accordion" id="activitesAccordion">
              <button
                type="button"
                className="hs-accordion-toggle flex w-full items-center gap-x-3.5 border-b border-solid border-white px-4 py-6 text-start text-white"
              >
                Agenda
                <svg
                  className="ms-auto hidden size-4 hs-accordion-active:block"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
                <svg
                  className="ms-auto block size-4 hs-accordion-active:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                id="projects-accordion-child"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              >
                <ul className="pt-0">
                  <li>
                    <Link
                      className="!border-b !border-solid !border-white !ps-8 font-staraSemiBold text-lg text-white"
                      href="/agenda"
                    >
                      Rundown
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="!border-b !border-solid !border-white !ps-8 font-staraSemiBold text-lg text-white"
                      href="/speakers"
                    >
                      Speakers
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="hs-accordion" id="activitesAccordion">
              <button
                type="button"
                className="hs-accordion-toggle flex w-full items-center gap-x-3.5 border-b border-solid border-white px-4 py-6 text-start text-white"
              >
                <Link
                  className="!border-b-0 !px-0 !py-0 text-white"
                  href={"/get-involved/"}
                >
                  Activities
                </Link>
                <svg
                  className="ms-auto hidden size-4 hs-accordion-active:block"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
                <svg
                  className="ms-auto block size-4 hs-accordion-active:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                id="projects-accordion-child"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              >
                <ul className="pt-0">
                  <li>
                    <Link
                      className="!border-b !border-solid !border-white !ps-8 font-staraSemiBold text-lg text-white"
                      href="/bull-pass"
                    >
                      VIP Experience
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="!border-b !border-solid !border-white !ps-8 font-staraSemiBold text-lg text-white"
                      href="/activities/hackathons"
                    >
                      Hackathons
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="!border-b !border-solid !border-white !ps-8 font-staraSemiBold text-lg text-white"
                      href="/pitching-sessions"
                    >
                      Pitching Sessions
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="!border-b !border-solid !border-white !ps-8 font-staraSemiBold text-lg text-white"
                      href="/activities/trading-competitions"
                    >
                      Trading Competitions
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link className="" href="/coinfest-week">
                Side Events
              </Link>
            </li>
            <li className="hs-accordion" id="getInvolvedAccordion">
              <button
                type="button"
                className="hs-accordion-toggle flex w-full items-center gap-x-3.5 border-b border-solid border-white px-4 py-6 text-start text-white"
              >
                <Link
                  className="!border-b-0 !px-0 !py-0 text-white outline-none focus-visible:outline-none"
                  href={"/get-involved/"}
                >
                  Get Involved
                </Link>
                <svg
                  className="ms-auto hidden size-4 hs-accordion-active:block"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
                <svg
                  className="ms-auto block size-4 hs-accordion-active:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                id="getInvolvedAccordionChild"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              >
                <ul className="pt-0">
                  <li>
                    <Link
                      className="!border-b !border-solid !border-white !ps-8 font-staraSemiBold text-lg text-white"
                      href="/get-involved/sponsorship"
                    >
                      Enquire for sponsorship
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="!border-b !border-solid !border-white !ps-8 font-staraSemiBold text-lg text-white"
                      href="/get-involved/media-partner"
                    >
                      Become a media partner
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="!border-b !border-solid !border-white !ps-8 font-staraSemiBold text-lg text-white"
                      href="/get-involved/community"
                    >
                      Become a community partner
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="!border-b !border-solid !border-white !ps-8 font-staraSemiBold text-lg text-white"
                      href="/get-involved/cohost-side-events"
                    >
                      Co-host a side event
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="!border-b !border-solid !border-white !ps-8 font-staraSemiBold text-lg text-white"
                      href="/get-involved/submit-side-events"
                    >
                      Submit your side event
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>

          <BannerTickets mobile={true} />
        </div>
      </nav>

      {/* @banner-ticket(backcover) */}
      <div
        id="ca2024BckdrpBnnrPopNav"
        className="ca2024BckdrpBnnrPopNav nonActive fixed inset-x-0 inset-y-0 z-[150] hidden h-svh cursor-pointer bg-black-900/40 transition-all duration-[0.3s] ease-in-out sm:block"
        onClick={(e) => {
          isClosePopNav(e);
        }}
      ></div>
    </>
  );
};

export default NavbarBottom;
