import React, { useRef, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

// @components
import Container from "@components/Container";
import BannerTickets from "@components/UI/Card/BannerTickets";

const NavbarBottom = () => {
  const router = useRouter();

  const isNavBtnToggle = useRef(null);
  const [isMenu, setMenu] = useState(false);
  const intNavMenuMobile = useRef(null);
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
  }, [router]);

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

  // @banner-popup(ticket)
  const isClose = (e) => {
    e.preventDefault();

    const elmtBckdrpBnnrTicket = document.querySelector(
      ".ca2024BckdrpBnnrTicket",
    );
    const elmtBnnrTickets = document.querySelector(".ca2024BnnrTicket");

    if (elmtBckdrpBnnrTicket) {
      elmtBckdrpBnnrTicket.classList.add("nonActive");
    }

    if (elmtBnnrTickets) {
      elmtBnnrTickets.classList.add("nonActive");
    }
  };

  // @active(banner-popup(ticket))
  useEffect(() => {
    const hndleRtrNavComplete = () => {
      const elmtBckdrpBnnrTicket = document.querySelector(
        ".ca2024BckdrpBnnrTicket",
      );
      const elmtBnnrTickets = document.querySelector(".ca2024BnnrTicket");

      if (elmtBckdrpBnnrTicket) {
        elmtBckdrpBnnrTicket.classList.remove("nonActive");
      }

      if (elmtBnnrTickets) {
        elmtBnnrTickets.classList.remove("nonActive");
      }
    };

    router.events.on("routeChangeComplete", hndleRtrNavComplete);
    router.events.on("routeChangeError", hndleRtrNavComplete);

    return () => {
      router.events.off("routeChangeComplete", hndleRtrNavComplete);
      router.events.off("routeChangeError", hndleRtrNavComplete);
    };
  }, [router]);

  // @menu-toggle
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
        } inset-x-0 z-xl mx-auto h-auto transition-all duration-300 ease-out sm:h-[100px]`}
      >
        <Container className="relative h-full">
          {/* <div className="ca2024BnnrTicket absolute inset-x-0 bottom-full top-auto mx-auto hidden w-full max-w-[645px] transition-all duration-[0.5s] ease-in-out sm:block lg:max-w-[695px]">
            <button
              id="btnBannerTickets"
              className="relative flex flex-col items-center justify-center w-10 h-10 mb-3 overflow-hidden bg-white outline-none cursor-pointer rounded-xl focus-visible:outline-none"
              aria-label="Button Banner Tickets (Toggle)"
              onClick={(e) => {
                isClose(e);
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z"
                  fill="black"
                />
              </svg>
            </button>

            <BannerTickets />
          </div> */}

          {/* @navbar-main */}
          <div
            className={`ca2024NavbarMain relative mx-auto flex h-full w-full flex-row items-center justify-between rounded-2xl border border-solid border-white/[0.16] bg-black-900/25 px-3 py-3 sm:px-6 sm:py-0 lg:w-[857px] xl:w-[807px] ${
              isMenu ? "!w-full" : null
            } z-100 max-w-full`}
          >
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
                  <Link className="text-white" href={"/speakers"}>
                    Speaker
                  </Link>
                </li>
                <li>
                  <Link className="text-white" href={"/get-involved"}>
                    Get Involved
                  </Link>
                </li>
                {/* <li>
                  <Link className="text-white" href={""}>
                    Coinfest Week
                  </Link>
                </li> */}
                {/* <li>
                  <Link className="text-white" href={""}>
                    Agenda
                  </Link>
                </li> */}
                <li>
                  <Link className="text-white" href={""}>
                    Recap
                  </Link>
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
              <Link
                className={`ca2024BgOverflay relative mr-3 inline-flex items-center justify-center rounded-[14px] px-3 py-4 font-bevietnamPro text-xs font-medium text-black-900 outline-none last:mr-0 focus-visible:outline-none sm:px-6 sm:text-base`}
                title="Tickets (Navbar)"
                href={"https://ticket.coinfest.asia/"}
              >
                Tickets
              </Link>
            </div>
          </div>
        </Container>
      </nav>

      {/* @nav-mobile */}

      {/* @banner-ticket(backcover) */}
      {/* <div
        id="isBckdrpBnnrTicket"
        className="ca2024BckdrpBnnrTicket fixed inset-x-0 inset-y-0 z-[150] hidden h-svh bg-black-900/40 transition-all duration-[0.3s] ease-in-out sm:block"
        onClick={(e) => {
          isClose(e);
        }}
      ></div> */}
    </>
  );
};

export default NavbarBottom;
