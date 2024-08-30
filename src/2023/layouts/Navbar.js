import React, { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/router";
// import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-scroll";
import getConfig from "next/config";
import Image from "next/image";

// # Get .config
const { publicRuntimeConfig } = getConfig();

// Icons (Heroicons : https://unpkg.com/browse/@heroicons/react@2.0.14/20/solid/)
import { ChevronDownIcon } from "@heroicons/react/20/solid";

// Ui - Components
import Container from "@components23/Container";
import Post from "@components23/UI/Post/Post";
import PostLink from "@components23/UI/Post/PostLink";
import Buttons from "@components23/UI/Buttons";

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(null);
  const [menu, setMenu] = useState(false);
  const [scroll, setScroll] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenu((prev) => !prev);
  }, [setMenu]);

  useEffect(() => {
    router.events.on("routeChangeComplete", (url) => {
      setMenu(false);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 12);

      if (window.scrollY > 12) {
        setScroll(true);
      }
    });
  }, []);

  useEffect(() => {
    var Scroll = require("react-scroll");
    var Events = Scroll.Events;

    const nvBtnToggle = document.querySelector(".navbarToggle");
    const nvMnu = document.querySelector(".navbarNav");

    Events.scrollEvent.register("end", (to, element) => {
      if (nvMnu.classList.contains("on") == true) {
        setTimeout(() => {
          nvBtnToggle.click();
        }, 400);
      }
    });
  }, []);

  const [getTimeDays, setTimeDays] = useState("00");
  const [getTimeHours, setTimeHours] = useState("00");
  const [getTimeMinutes, setTimeMinutes] = useState("00");
  const [getTimeSeconds, setTimeSeconds] = useState("00");

  let intervalCountDown = useRef();

  const startCountDownFestival = () => {
    const countDownDate = new Date("August 24, 2023 14:00:00").getTime();

    intervalCountDown = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(intervalCountDown.current);
      } else {
        setTimeDays(days);
        setTimeHours(hours);
        setTimeMinutes(minutes);
        setTimeSeconds(seconds);
      }
    }, 1000);
  };
  setOpen;

  useEffect(() => {
    startCountDownFestival();

    return () => {
      clearInterval(intervalCountDown.current);
    };
  }, []);

  return (
    <>
      <nav
        className={`navbar fixed top-0 inset-x-0 bottom-auto ${
          scroll ? "z-base active" : "z-sm off"
        }`}
      >
        <div
          className={`bg-white flex-col items-center justify-center h-16 sm:h-[100px]`}
        >
          <Container className="flex flex-col items-center justify-center h-full">
            <div className="navbarMain flex items-center justify-between w-full">
              <PostLink
                className="navbarBrand flex items-center relative py-0 sm:py-0.5"
                url="/2023/"
              >
                <Image
                  className="h-9 sm:h-11 w-[107px] sm:w-[129px]"
                  src={"/2023/assets/images/coinfest.asia2023.svg"}
                  alt={`${publicRuntimeConfig.appName}`}
                  height={45}
                  width={120}
                />
              </PostLink>
              <div
                className={`navbarNav flex flex-col sm:flex-row ${
                  menu ? "on" : "off"
                }`}
              >
                <ul
                  id="nvMnuPrimary"
                  className="menu flex flex-col xl:flex-row items-center justify-center min-h-full"
                >
                  {/* <Post
                    typePost="link"
                    className="menu-item"
                    url="https://ticket.coinfest.asia/"
                    title="Tickets"
                  /> */}
                  {/* <Menu as="li" className="menu-item relative">
                    {({ open }) => (
                      <>
                        <div className="menu-btn-dropdown flex items-center relative">
                          <PostLink url="/get-involved" title="Get Involved" />
                          <Menu.Button
                            className={`menu-btn-dropdown py-3.5 px-1.5 ${
                              open ? "active" : "nonActive"
                            }`}
                          >
                            <ChevronDownIcon
                              className={`stroke-current stroke-[0.5] ml-0.5 h-5 w-5 transition ease-in-out transform ${
                                open ? "rotate-180" : "rotate-0"
                              }`}
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          className="relative xl:absolute top-0 xl:top-full left-0 mt-2 sm:mt-4 xl:mt-0"
                          enter="transition duration-100 ease-in-out"
                          enterFrom="transform opacity-0"
                          enterTo="transform opacity-100"
                          leave="transition ease-out"
                          leaveFrom="transform opacity-100"
                          leaveTo="transform opacity-0"
                        >
                          <Menu.Items
                            as="ul"
                            className="menu-dropdown w-[202px] sm:w-[272px] xl:w-[202px] min-w-max"
                          >
                            <Menu.Item as="li" className="menu-item">
                              {({ active }) => (
                                <PostLink
                                  typePost="blank-link"
                                  className={`${active && "bg-[#F1F5FF]"}`}
                                  url="https://bit.ly/ca23sponsor"
                                  title="Sponsor"
                                />
                              )}
                            </Menu.Item>
                            <Menu.Item as="li" className="menu-item">
                              {({ active }) => (
                                <PostLink
                                  typePost="blank-link"
                                  className={`${active && "bg-[#F1F5FF]"}`}
                                  url="https://bit.ly/ca23mediapartner"
                                  title="Media Partners"
                                />
                              )}
                            </Menu.Item>
                            <Menu.Item as="li" className="menu-item">
                              {({ active }) => (
                                <PostLink
                                  typePost="blank-link"
                                  className={`${active && "bg-[#F1F5FF]"}`}
                                  url="https://bit.ly/ca23communitypartner"
                                  title="Community Partners"
                                />
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu> */}
                  <Post
                    typePost="link"
                    className="menu-item"
                    url="/2023/speaker"
                    title="Speakers"
                  />
                  <Post
                    typePost="link"
                    className="menu-item"
                    url="/2023/agenda"
                    title="Agenda"
                  />
                  <Post
                    typePost="link"
                    className="menu-item"
                    url="/2023/coinfest-week"
                    title="Coinfest Week"
                  />
                  {/* <Post
                    typePost="link"
                    url="https://bit.ly/ca23sideeventform"
                    className="menu-item"
                    title="Coinfest Week"
                  /> */}
                  {/* <Menu as="li" className="menu-item relative">
                    {({ open }) => (
                      <>
                        <div className="menu-btn-dropdown flex items-center pl-3 relative">
                          <PostLink url="/coinfest-week" title="Side Events" />
                          <Menu.Button
                            className={`menu-btn-dropdown py-3.5 px-1.5 ${
                              open ? "active" : "nonActive"
                            }`}
                          >
                            <ChevronDownIcon
                              className={`stroke-current stroke-[0.5] ml-0.5 h-5 w-5 transition ease-in-out transform ${
                                open ? "rotate-180" : "rotate-0"
                              }`}
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          className="relative xl:absolute top-0 xl:top-full left-0 mt-2 sm:mt-4 xl:mt-0"
                          enter="transition duration-100 ease-in-out"
                          enterFrom="transform opacity-0"
                          enterTo="transform opacity-100"
                          leave="transition ease-out"
                          leaveFrom="transform opacity-100"
                          leaveTo="transform opacity-0"
                        >
                          <Menu.Items
                            as="ul"
                            className="menu-dropdown w-[202px] sm:w-[272px] xl:w-[202px] min-w-max"
                          >
                            <Menu.Item as="li" className="menu-item">
                              {({ active }) => (
                                <PostLink
                                  className={`${active && "bg-[#F1F5FF]"}`}
                                  url="/2023/coinfest-week"
                                  title="Coinfest Week"
                                />
                              )}
                            </Menu.Item>
                            <Menu.Item as="li" className="menu-item">
                              {({ active }) => (
                                <PostLink
                                  typePost="blank-link"
                                  className={`${active && "bg-[#F1F5FF]"}`}
                                  url="https://e7bao9msf39.typeform.com/to/IyLelRl5"
                                  title="Host your Side Event"
                                />
                              )}
                            </Menu.Item>
                            <Menu.Item as="li" className="menu-item">
                              {({ active }) => (
                                <PostLink
                                  typePost="blank-link"
                                  className={`${active && "bg-[#F1F5FF]"}`}
                                  url="https://e7bao9msf39.typeform.com/to/U7Df986L"
                                  title="Submit your Side Event"
                                />
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu> */}
                  <Post
                    typePost="link"
                    className="menu-item"
                    url="/2023/accommodation"
                    title="Travel"
                  />
                  <Post
                    typePost="blank-link"
                    className="menu-item"
                    url="/2023/2022"
                    title="2022's Recap"
                  />
                </ul>
              </div>
              <div className="flex flex-row items-center">
                {/* <Buttons
                  typeBtn="btn-blank-link"
                  url="https://ticket.coinfest.asia/"
                  label="Buy Tickets"
                  variants="btn-secondary"
                  rounded="pill"
                  text="capitalize"
                  position="center"
                  ariaLabel="btnNavBuyTickets"
                  className="text-xs sm:text-sm font-semibold sm:font-bold py-2.5 sm:py-3 px-4 sm:px-6 tracking-normal"
                /> */}
                <button
                  className="navbarToggle flex xl:hidden outline-none ml-4 xl:ml-0"
                  aria-label="togleMnuPrimary"
                  aria-labelledby="togleMnuPrimary"
                  onClick={toggleMenu}
                  type="button"
                  role="button"
                >
                  <div
                    id="hmbrgerMnu"
                    className={`hmbrger flex flex-col ${menu ? "close" : ""}`}
                  >
                    <span className="hmbrger-itms transition-all duration-300"></span>
                    <span className="hmbrger-itms transition-all duration-300"></span>
                  </div>
                </button>
              </div>
            </div>
          </Container>
        </div>
        {/* <div className="bg-[#EDF2FE]">
          <Container>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center sm:justify-between text-left sm:text-center h-[98px] sm:h-[96px]">
              <PostLink
                typePost="blank-link"
                className="text-primary font-bevietnam-pro text-sm sm:text-xl font-bold uppercase"
                url="https://ticket.coinfest.asia"
              >
                Countdown to coinfest asia 2023
              </PostLink>

              <div className="inline-flex mt-2 sm:mt-0 w-full sm:w-max">
                <button
                  className="btn btn-primary flex-col rounded-[7px] text-xs sm:text-lg font-medium sm:font-bold py-2.5 px-2 tracking-normal uppercase h-10 sm:h-16 w-[-webkit-fill-available] sm:w-16"
                  role="button"
                >
                  {`${getTimeDays}`}
                  <br />
                  <span className="text-[10px] sm:text-xs font-medium">
                    Days
                  </span>
                </button>
                <button
                  className="btn btn-primary flex-col rounded-[7px] text-xs sm:text-lg font-medium sm:font-bold ml-2 py-2.5 px-2 tracking-normal uppercase h-10 sm:h-16 w-[-webkit-fill-available] sm:w-16"
                  role="button"
                >
                  {`${getTimeHours}`}
                  <br />
                  <span className="text-[10px] sm:text-xs font-medium">
                    Hours
                  </span>
                </button>
                <button
                  className="btn btn-primary flex-col rounded-[7px] text-xs sm:text-lg font-medium sm:font-bold ml-2 py-2.5 px-2 tracking-normal uppercase h-10 sm:h-16 w-[-webkit-fill-available] sm:w-16"
                  role="button"
                >
                  {`${getTimeMinutes}`}
                  <br />
                  <span className="text-[10px] sm:text-xs font-medium">
                    Minutes
                  </span>
                </button>
                <button
                  className="btn btn-primary flex-col rounded-[7px] text-xs sm:text-lg font-medium sm:font-bold ml-2 py-2.5 px-2 tracking-normal uppercase h-10 sm:h-16 w-[-webkit-fill-available] sm:w-16"
                  role="button"
                >
                  {`${getTimeSeconds}`}
                  <br />
                  <span className="text-[10px] sm:text-xs font-medium">
                    Second
                  </span>
                </button>
              </div>
              <Buttons
                typeBtn="btn-link"
                url="https://ticket.coinfest.asia/"
                label="Get Your Ticket Now"
                variants="btn-primary"
                size="sm"
                rounded="pill"
                text="capitalize"
                position="center"
                withIcons={true}
                positionIcons="left"
                ariaLabel="btnLastChangeToGrabEarlyBirdTickets"
                className="text-xs sm:text-sm font-medium sm:font-medium ml-4 py-2.5 px-4 sm:px-4 lg:px-4 tracking-normal"
              >
                <svg
                  className="stroke-current mr-1 h-5 sm:h-6 w-5 sm:w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 5V7V5ZM15 11V13V11ZM15 17V19V17ZM5 5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V10C3.53043 10 4.03914 10.2107 4.41421 10.5858C4.78929 10.9609 5 11.4696 5 12C5 12.5304 4.78929 13.0391 4.41421 13.4142C4.03914 13.7893 3.53043 14 3 14V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V14C20.4696 14 19.9609 13.7893 19.5858 13.4142C19.2107 13.0391 19 12.5304 19 12C19 11.4696 19.2107 10.9609 19.5858 10.5858C19.9609 10.2107 20.4696 10 21 10V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Buttons>
            </div>
          </Container>
        </div> */}
      </nav>
    </>
  );
};

export default Navbar;
