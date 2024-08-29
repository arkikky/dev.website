import React, { useRef, useState, useEffect, useCallback } from "react";
import getConfig from "next/config";
import Image from "next/image";
import { Link } from "react-scroll";

// @Get .config
const { publicRuntimeConfig } = getConfig();

// @Component's
import Container from "@components/Container";

const BannerAdsSide = () => {
  const intNavBtnToggle = useRef(null);
  const intNavMenuPrimry = useRef(null);
  const [intMenu, setMenu] = useState(false);
  const [intScroll, setAppScroll] = useState(false);

  const intToggleMenu = useCallback(() => {
    setMenu((prev) => !prev);
  }, [setMenu]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setAppScroll(window.scrollY > 12);

      if (window.scrollY > 12) {
        setAppScroll(true);
      }
    });
  }, [intScroll]);

  useEffect(() => {
    var Scroll = require("react-scroll");
    var Events = Scroll.Events;

    const nvBtnToggle = intNavBtnToggle.current;
    const nvMnu = intNavMenuPrimry.current;

    Events.scrollEvent.register("end", (to, element) => {
      if (nvMnu.classList.contains("active") == true) {
        setTimeout(() => {
          nvBtnToggle.click();
        }, 400);
      }
    });
  }, []);

  return (
    <>
      <nav
        className={`caNavbar bg-transparent fixed top-0 bottom-auto inset-x-0 h-[61px] sm:h-[84px] xl:h-24 w-full ${
          intMenu
            ? "z-base active"
            : intScroll
            ? "z-base active"
            : "z-sm deactive"
        }`}
      >
        <Container className="h-full">
          <div className="flex flex-row items-center justify-between h-full">
            <a href="/" className="relative">
              <Image
                className="h-[30px] sm:h-10 w-max"
                src="/assets/images/coinfest.asia.svg"
                alt={`${publicRuntimeConfig.siteAppName} (Primary - LOGO Brand)`}
                height={34}
                width={90}
              />
            </a>
            <div
              ref={intNavMenuPrimry}
              className={`caNavbarMain ${intMenu ? "active" : "deactive"}`}
            >
              <ul id="nvMnuPrimary" className="caNavbarMainLinks">
                <li>
                  <Link
                    href="caAbout"
                    activeClass="active"
                    to="caAbout"
                    hashSpy={false}
                    smooth={"easeInOutCubic"}
                    offset={-149}
                    duration={500}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="caHightlight"
                    activeClass="active"
                    to="caHightlight"
                    spy={true}
                    hashSpy={false}
                    smooth={"easeInOutCubic"}
                    offset={-135}
                    duration={500}
                  >
                    Highlights
                  </Link>
                </li>
                <li>
                  <Link
                    href="caPastSpeaker"
                    activeClass="active"
                    to="caPastSpeaker"
                    spy={true}
                    hashSpy={false}
                    smooth={"easeInOutCubic"}
                    offset={-135}
                    duration={500}
                  >
                    Speakers
                  </Link>
                </li>
                <li>
                  <Link
                    href="caTestimonials"
                    activeClass="active"
                    to="caTestimonials"
                    spy={true}
                    hashSpy={false}
                    smooth={"easeInOutCubic"}
                    offset={-135}
                    duration={500}
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    href="caPartners"
                    activeClass="active"
                    to="caPartners"
                    spy={true}
                    hashSpy={false}
                    smooth={"easeInOutCubic"}
                    offset={-135}
                    duration={500}
                  >
                    Partners
                  </Link>
                </li>
                <li>
                  <Link
                    href="caSocialMentions"
                    activeClass="active"
                    to="caSocialMentions"
                    spy={true}
                    hashSpy={false}
                    smooth={"easeInOutCubic"}
                    offset={-135}
                    duration={500}
                  >
                    Social Mentions
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-row items-center justify-end">
              <button
                ref={intNavBtnToggle}
                className={`hmbrgrStairs flex lg:hidden flex-col outline-none focus:outline-none ${
                  intMenu ? "close" : "deactive"
                }`}
                id="navBtnToggle"
                aria-label="Nav Btn Toggle"
                onClick={intToggleMenu}
              >
                <span className="hmbrgrStairsLine"></span>
                <span className="hmbrgrStairsLine"></span>
                <span className="hmbrgrStairsLine"></span>
              </button>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};
export default BannerAdsSide;
