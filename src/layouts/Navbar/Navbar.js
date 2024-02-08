import React, { useRef, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

// @components
import Container from "@components/Container";

const Navbar = () => {
  const router = useRouter();
  const intNavBtnToggle = useRef(null);
  const [isMenu, setMenu] = useState(false);
  const intNavMenuMobile = useRef(null);
  const [isFullWidth, setIsFullWidth] = useState(false);

  const intToggleMenu = useCallback(() => {
    setMenu((prev) => !prev);
  }, [setMenu]);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const bodyHeight = document.body.clientHeight;
    const windowHeight = window.innerHeight;

    if (scrollPosition >= bodyHeight - windowHeight - 20) {
      setIsFullWidth(true);
    } else {
      setIsFullWidth(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (router.pathname === "/") {
      gsap.registerPlugin(ScrollTrigger);
      let intGsap = gsap.matchMedia(),
        breakPoint = 1280;

      ScrollTrigger.defaults({
        scroller: ".ca2024Main",
        // scroller: "body",
      });

      intGsap.add(
        {
          isDesktopXtra: `(min-width: ${breakPoint}px)`,
          isDesktop: `(min-width: 1023px)`,
          isMobile: `(max-width: ${breakPoint - 1}px)`,
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          let { isDesktopXtra, isDesktop, isMobile, reduceMotion } =
              context.conditions,
            target =
              isDesktopXtra && isDesktop
                ? ".ca2024NavbarMain"
                : ".ca2024NavbarMain",
            tl = gsap.timeline({
              scrollTrigger: {
                trigger: ".ca2024SectionEnd",
                start: "top 60%",
                end: "bottom 100%",
                scrub: true,
              },
            });

          tl.fromTo(
            target,
            {
              width: isDesktopXtra
                ? "807px"
                : isDesktop
                ? "857px"
                : isMobile
                ? "100%"
                : "100%",
            },
            {
              width: "100%",
              ease: "power3.out",
            }
          );

          return () => {
            // optionally return a cleanup function that will be called when none of the conditions match anymore (after having matched)
            // it'll automatically call context.revert() - do NOT do that here . Only put custom cleanup code here.
          };
        }
      );

      return () => {
        intGsap.revert();
      };
    }
  }, [router]);

  useEffect(() => {
    const nvBtnToggle = intNavBtnToggle.current;
    const nvMnu = intNavMenuMobile.current;

    const hndleComplete = () => {
      if (nvMnu.classList.contains("active") === true) {
        nvBtnToggle.click();
      }
    };

    router.events.on("routeChangeComplete", hndleComplete);
    router.events.on("routeChangeError", hndleComplete);

    return () => {
      router.events.off("routeChangeComplete", hndleComplete);
      router.events.off("routeChangeError", hndleComplete);
    };
  }, [router]);

  return (
    <>
      <navbar
        className={`ca2024Navbar fixed ${
          router.pathname === "/"
            ? isFullWidth
              ? "bottom-8"
              : "bottom-4"
            : "bottom-4"
        } inset-x-0 mx-auto h-auto sm:h-[100px] transition-all duration-300 ease-out z-xl`}
      >
        <Container className="h-full">
          <div
            className={`ca2024NavbarMain flex flex-row items-center justify-between bg-black-900/25 border border-solid border-white/[0.16] rounded-[16px] mx-auto py-3 sm:py-0 px-3 sm:px-6 h-full w-full lg:w-[857px] xl:w-[807px] ${
              isMenu ? "!w-full" : null
            }`}
          >
            <div className="flex xl:hidden flex-col">
              <button
                ref={intNavBtnToggle}
                className={`hmbrgrStairs bg-black-900 flex flex-col items-center justify-center rounded-[14px] relative outline-none focus-visible:outline-none px-3.5 h-12 sm:h-13 w-12 sm:w-13 ${
                  isMenu ? "deactive" : "active"
                }`}
                id="navBtnToggle"
                aria-label="Button Nav (Toggle)"
                onClick={intToggleMenu}
              >
                <span className="hmbrgrStairsLine"></span>
                <span className="hmbrgrStairsLine"></span>
                <span className="hmbrgrStairsLine"></span>
              </button>
            </div>
            <div className="ca2024NavbarMenu">
              <ul className="menu menu-row">
                <li>
                  <Link className="text-white" href={"/get-involved/speakers"}>
                    Apply as Speaker
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
            <div className="flex flex-row ml-0 sm:ml-4">
              <Link
                className={`bg-secondary2024 xl:bg-primary2024 inline-flex items-center justify-center rounded-[14px] text-white xl:text-black-900 font-bevietnamPro text-xs sm:text-base font-semibold relative outline-none focus-visible:outline-none py-4 px-3 sm:px-6 mr-2 last:mr-0`}
                href={"/get-involved/sponsorship"}
              >
                Enquire for Sponsorship
              </Link>
              {router.pathname === "/" ? (
                <button
                  id="mdlBtnNewsletterNavbar"
                  className={`mdlBtnNewsletter ca2024BtnOverflay inline-flex items-center justify-center rounded-[14px] text-black-900 font-bevietnamPro text-xs sm:text-base font-semibold relative outline-none focus-visible:outline-none py-4 px-3 sm:px-6 mr-3 last:mr-0`}
                  aria-labelledby="Modal Email Newsletter (Navbar)"
                  data-hs-overlay="#mdlNewsletter"
                >
                  Tickets
                </button>
              ) : null}
            </div>
          </div>
        </Container>
      </navbar>

      {/* @nav-mobile */}
      <nav
        ref={intNavMenuMobile}
        className={`ca2024NavMenuMobile bg-secondary2024 absolute inset-y-0 inset-x-0 ${
          isMenu ? "active z-lg" : "deflt z-base"
        }`}
      >
        <ul className={`menu menu-stripe`}>
          {/* <li>
            <Link className="text-white" href={""}>
              Travel
            </Link>
          </li> */}
          <li>
            <Link className="text-white" href={"/get-involved/speakers"}>
              Apply as Speaker
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
      </nav>
    </>
  );
};

export default Navbar;
