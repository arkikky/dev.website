import React, { useRef, useState, useEffect, useCallback } from "react";
import getConfig from "next/config";
import Image from "next/image";
import Links from "next/link";
import { Link } from "react-scroll";

// @Get .config
const { publicRuntimeConfig } = getConfig();

// @Component's
import Container from "@components/Container";

const Navbar = ({ back = false, bgBack = "bg-primary" }) => {
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
            <div
              className={`flex flex-row items-center ${
                back === true && "space-x-2 sm:space-x-4"
              } justify-center`}
            >
              {back === true && (
                <Links
                  className={`z-100 flex h-8 w-8 flex-col items-center justify-center rounded-xl ${bgBack} sm:h-12 sm:w-12 sm:rounded-2xl`}
                  href={"/"}
                >
                  <svg
                    className={`stroke-current ${
                      bgBack === "bg-primary" ? "text-white" : "text-primary"
                    }`}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        d="M15 19L8 12L15 5"
                        strokeWidth="2.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </Links>
              )}
              <Links
                className={`relative mt-2 sm:mt-0 block w-max cursor-pointer`}
                href={"/"}
              >
                <Image
                  className="mx-auto my-auto h-auto w-24 sm:w-32"
                  src="/assets/images/coinfest.asia.svg"
                  alt={`${publicRuntimeConfig.siteAppName} (Black Primary Brand - NavbarTop)`}
                  height={62}
                  width={182}
                  quality="87"
                />
              </Links>
            </div>
            {/* <a href="/" className="relative">
              <Image
                className="h-[30px] sm:h-10 w-max"
                src="/assets/images/coinfest.asia.svg"
                alt={`${publicRuntimeConfig.siteAppName} (Primary - LOGO Brand)`}
                height={34}
                width={90}
              />
            </a> */}
            {back === false && (
              <>
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
              </>
            )}
            <div className="flex flex-row items-center justify-end">
              <Links
                className={`py-2 sm:py-4 px-3 sm:px-4 flex flex-col items-center text-sm sm:text-base justify-center bg-secondary w-max mx-auto rounded-2xl ${
                  back === true ? "mr-0" : "mr-4 lg:mr-0"
                } outline-none`}
                href="/2025-sponsorship"
              >
                Sponsorship Inquiry
              </Links>
              {back === false && (
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
              )}
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};
export default Navbar;
