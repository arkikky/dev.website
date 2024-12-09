import React, { useRef, useState, useEffect, useCallback } from "react";
import getConfig from "next/config";
import Image from "next/image";
import Links from "next/link";
import { Link } from "react-scroll";

// @Get .config
const { publicRuntimeConfig } = getConfig();

// @Component's
import Container from "@components/Container";

const Navbar = ({
  back = false,
  bgBack = "bg-primary",
  brandLogo = "primary",
  modeDifferent = false,
}) => {
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
            ? `z-base ${modeDifferent === false && "active"}`
            : "z-sm deactive"
        } ${
          modeDifferent === true ? "mix-blend-difference" : "mix-blend-normal"
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
                    } h-4 sm:h-6 w-4 sm:w-6`}
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
                {brandLogo === "primary" ? (
                  <Image
                    className="mx-auto my-auto h-auto w-24 sm:w-32"
                    src="/assets/images/coinfest.asia.svg"
                    alt={`${publicRuntimeConfig.siteAppName} (Black Primary Brand - NavbarTop)`}
                    height={62}
                    width={182}
                    quality="87"
                  />
                ) : brandLogo === "white" ? (
                  <Image
                    className="mx-auto my-auto h-auto w-24 sm:w-32"
                    src="/assets/images/caGeneral-BrandWhite.svg"
                    alt={`${publicRuntimeConfig.siteAppName} (White Primary Brand - NavbarTop)`}
                    height={62}
                    width={182}
                    quality="87"
                  />
                ) : null}
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
                    {/* <li>
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
                    </li> */}
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
              {/* <Links
                className={`py-2 sm:py-4 px-3 sm:px-4 flex flex-row items-center text-sm sm:text-base justify-center ${
                  modeDifferent === true
                    ? "bg-white"
                    : "bg-black-900 text-white"
                } w-max mx-auto rounded-2xl ${
                  back === true ? "mr-0" : "mr-4 lg:mr-0"
                } outline-none`}
                href="/2025-sponsorship"
              >
                Get Involved
                <svg
                  className="ml-2.5 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </Links> */}
              <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
                <button
                  id="hs-dropright"
                  type="button"
                  className={`hs-dropdown-toggle mr-2 py-2 sm:py-4 px-3 sm:px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-2xl ${
                    modeDifferent === true
                      ? "bg-white"
                      : "bg-secondary text-black-900"
                  } shadow-sm disabled:opacity-50 disabled:pointer-events-none`}
                  aria-haspopup="menu"
                  aria-expanded="false"
                  aria-label="Dropdown"
                >
                  Get Involved
                  <svg
                    className="ml-2.5 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
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
                  className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[233px] bg-white shadow-md rounded-lg mt-2 z-[120]"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="hs-dropright"
                >
                  <div className="p-1 space-y-0.5">
                    <a
                      class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                      href="/2025-sponsorship"
                    >
                      Sponsorship Inquiry
                    </a>
                    <a
                      class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                      href="/speaker"
                    >
                      Apply as Speaker
                    </a>
                    <a
                      class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                      href="/interest"
                    >
                      Ticket
                    </a>
                  </div>
                </div>
              </div>
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
