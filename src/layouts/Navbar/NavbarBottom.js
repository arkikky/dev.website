import React, { useRef, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

// @components
import Container from "@components/Container";

const NavbarBottom = () => {
  const router = useRouter();
  const intNavBtnToggle = useRef(null);
  const [isMenu, setMenu] = useState(false);
  const intNavMobile = useRef(null);

  const intToggleMenu = useCallback(() => {
    setMenu((prev) => !prev);
  }, [setMenu]);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const bodyHeight = document.body.clientHeight;
    const windowHeight = window.innerHeight;

    // if (scrollPosition >= bodyHeight - windowHeight - 20) {
    //   setIsFullWidth(true);
    // } else {
    //   setIsFullWidth(false);
    // }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const nvBtnToggle = intNavBtnToggle.current;
    const nvMnu = intNavMobile.current;

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
        className={`ca2024Navbar fixed bottom-4 inset-x-0 mx-auto h-auto sm:h-[100px] transition-all duration-300 ease-out z-xl`}
      >
        <Container className="h-full">
          <div
            className={`ca2024NavbarMain flex flex-row items-center justify-between bg-black-900/25 border border-solid border-white/[0.16] rounded-[16px] mx-auto py-3 sm:py-0 px-3 sm:px-6 h-full w-full lg:w-[857px] xl:w-[807px]`}
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
                className={`bg-secondary xl:bg-primary inline-flex items-center justify-center rounded-[14px] text-white xl:text-black-900 font-bevietnamPro text-xs sm:text-base font-semibold relative outline-none focus-visible:outline-none py-4 px-3 sm:px-6 mr-2 last:mr-0`}
                href={"/get-involved/sponsorship"}
              >
                Enquire for Sponsorship
              </Link>
              {router.pathname === "/" ? (
                <button
                  // id="mdlBtnNewsletter"
                  className={`mdlBtnNewsletter ca2024BgOverflay inline-flex items-center justify-center rounded-[14px] text-black-900 font-bevietnamPro text-xs sm:text-base font-semibold relative outline-none focus-visible:outline-none py-4 px-3 sm:px-6 mr-3 last:mr-0`}
                  aria-label="Modal Email Newsletter (Navbar)"
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
        ref={intNavMobile}
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

export default NavbarBottom;
