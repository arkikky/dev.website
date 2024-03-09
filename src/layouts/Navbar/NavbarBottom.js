import React, { useRef, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

// @components
import Container from "@components/Container";

const NavbarBottom = () => {
  const router = useRouter();
  const intNavBtnToggle = useRef(null);
  const [isMenu, setMenu] = useState(false);
  const intNavMenuMobile = useRef(null);
  const [isFullWidth, setIsFullWidth] = useState(false);

  const intToggleMenu = useCallback(() => {
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

  // useEffect(() => {
  //   const nvBtnToggle = intNavBtnToggle.current;
  //   const nvMnu = intNavMenuMobile.current;

  //   const hndleComplete = () => {
  //     if (nvMnu.classList.contains("active") === true) {
  //       nvBtnToggle.click();
  //     }
  //   };

  //   router.events.on("routeChangeComplete", hndleComplete);
  //   router.events.on("routeChangeError", hndleComplete);

  //   return () => {
  //     router.events.off("routeChangeComplete", hndleComplete);
  //     router.events.off("routeChangeError", hndleComplete);
  //   };
  // }, [router]);

  return (
    <>
      <nav
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
              {/* <ul className="menu menu-row"></ul> */}
            </div>
            <div className="flex flex-row ml-0 sm:ml-4">
              <Link
                className={`bg-secondary xl:bg-primary inline-flex items-center justify-center rounded-[14px] text-white xl:text-black-900 font-bevietnamPro text-xs sm:text-base font-medium relative outline-none focus-visible:outline-none py-4 px-3 sm:px-6 mr-2 last:mr-0`}
                title="Enquire for Sponsorship (Navbar)"
                href={"/get-involved/sponsorship"}
              >
                Enquire for Sponsorship
              </Link>
              <Link
                className={`ca2024BgOverflay inline-flex items-center justify-center rounded-[14px] text-black-900 font-bevietnamPro text-xs sm:text-base font-medium relative outline-none focus-visible:outline-none py-4 px-3 sm:px-6 mr-3 last:mr-0`}
                title="Tickets (Navbar)"
                href={"https://ticket.coinfest.asia/"}
              >
                Tickets
              </Link>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default NavbarBottom;
