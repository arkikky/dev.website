import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import guideNav from "@lib/json/guide-nav.json";
import { useRouter } from "next/router";

// @components
import Container from "@components/Container";

// @layouts
import GuideSidebar from "@layouts/Sidebar/GuideSidebar";

const ActiveMenu = ({ isActive }) => {
  const router = useRouter();

  return (
    <div
      className={`absolute bottom-0 left-0 top-0 block h-full bg-black-900/[56%] lg:hidden ${isActive ? "right-0" : "right-full"} z-70`}
    >
      <div
        className={`absolute ${isActive ? "top-0 pt-[105px] opacity-100" : "top-full opacity-0"} z-10 w-full transition-all duration-500 ease-in-out`}
      >
        <div
          className={`flex flex-1 flex-col overflow-auto rounded-t-2xl bg-white text-[#303030] ${isActive ? "block" : "hidden"} pb-18`}
        >
          {guideNav.map((nav) => {
            const isActive = router.pathname === nav.url;
            return (
              <div className="border-b border-[#E9E9E9]">
                <Link href={nav.url} key={nav.id}>
                  <div
                    className={`${
                      isActive
                        ? "bg-[#2458F1] text-white"
                        : "hover:bg-[#E9E9E9]"
                    }`}
                  >
                    <div className="px-8 py-4">{nav.name}</div>
                  </div>
                </Link>
                {nav.children && nav.children.length > 0 && (
                  <div className="pl-8">
                    <div className="flex flex-col gap-2 border-l border-[#2458F1] pl-2">
                      {nav.children.map((child) => {
                        const isChildActive = router.pathname === child.url;
                        return (
                          <Link href={child.url} key={child.id}>
                            <div
                              className={`p-4 ${
                                isChildActive ? "bg-[#2458F1] text-white" : ""
                              }`}
                            >
                              {child.name}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const GuideLayout = ({
  title = "General Information",
  description = "",
  isDescFull = false,
  children,
  className = "",
  poweredByCarta = false,
}) => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const router = useRouter();

  // Flatten guideNav to get an array of items with URLs only
  const navItemsWithUrl = guideNav.flatMap((nav) => {
    if (nav.url) {
      return [nav];
    } else if (nav.children) {
      return nav.children.filter((child) => child.url);
    } else {
      return [];
    }
  });

  // Find the index of the current page
  const currentIndex = navItemsWithUrl.findIndex(
    (item) => item.url === router.pathname,
  );

  // Determine previous and next items
  const prevItem = currentIndex > 0 ? navItemsWithUrl[currentIndex - 1] : null;
  const nextItem =
    currentIndex < navItemsWithUrl.length - 1
      ? navItemsWithUrl[currentIndex + 1]
      : null;

  return (
    <div className="relative flex h-svh">
      <ActiveMenu isActive={isMenuActive} />

      {/* @Sidebar */}
      <GuideSidebar />

      {/* @Main Content */}
      <main className="w-full flex-1 overflow-y-auto">
        <div
          className={`flex flex-col ${isDescFull ? "sm:flex-col" : "sm:flex-row"} justify-between gap-4 px-6 pt-8 lg:px-14 lg:pt-10`}
        >
          <h1 className="relative max-w-[315px] font-bevietnamPro text-4xl font-extrabold">
            {title}
            {poweredByCarta && (
              <span className="ml-2 inline-block text-[9.38px] text-[#303030] opacity-[56%]">
                <div className="flex gap-1">
                  Powered By
                  <Image
                    src={"/assets/images/icons/ca2024-Carta.svg"}
                    width={44}
                    height={9.64}
                    alt="Coinfest Asia 2024 (Gojek Logo)"
                  />
                </div>
              </span>
            )}
          </h1>
          {description && (
            <div
              className={`rounded-[10px] border border-[#AC8100] bg-[#FFF7E7] p-4 text-[#AC8100] ${isDescFull ? "w-full" : "w-full sm:w-[320px]"}`}
            >
              {description}
            </div>
          )}
        </div>
        <div className={`mt-4 w-full sm:mt-8 ${className} pb-19`}>
          {children}
        </div>
      </main>

      {/* @Navigation */}
      <nav className="fixed bottom-0 z-80 flex w-full bg-white">
        <Link
          href={"/"}
          className="hidden w-[25.5%] items-center justify-between bg-[url('/assets/images/backdrop/background/ca2024BgNavGuide.jpg')] bg-cover bg-left px-5 py-6 lg:flex"
        >
          <Image
            className=""
            src={"/assets/images/ca2024BrandLogoWhite.png"}
            alt={`Coinfest Asia 2024`}
            height={25.35}
            width={85}
            quality="87"
          />
          <div className="flex gap-2 text-sm font-medium text-white">
            Back to Home
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.16406 10H15.8307"
                stroke="white"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 4.16602L15.8333 9.99935L10 15.8327"
                stroke="white"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </Link>
        <div className="relative flex w-full flex-1 border-t border-[#E6E6E6]">
          {prevItem && (
            <Link
              href={prevItem.url}
              className="hidden w-full flex-1 flex-col items-start gap-1 border-l border-[#E6E6E6] px-6 py-4 lg:flex"
            >
              <div className="flex gap-2 text-sm font-normal text-[#2458F1]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.8334 10H4.16671"
                    stroke="#2458F1"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.99744 4.16602L4.1641 9.99935L9.99744 15.8327"
                    stroke="#2458F1"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Prev
              </div>
              <span className="text-xs text-[#7B7B7B]">{prevItem.name}</span>
            </Link>
          )}
          <button
            onClick={() => setIsMenuActive(!isMenuActive)}
            className="flex h-full w-full flex-1 items-center gap-2 border-l border-[#E6E6E6] px-6 py-4 text-sm font-normal text-[#303030] lg:hidden"
          >
            Menu
            <svg
              className={`${isMenuActive ? "" : "rotate-180"} transition-all duration-300`}
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.375 7.6875L10 13.3125L15.625 7.6875"
                stroke="#303030"
                stroke-width="2.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          {nextItem ? (
            <Link
              href={nextItem.url}
              className="flex w-full flex-1 flex-col items-end gap-1 border-l border-[#E6E6E6] px-6 py-4"
            >
              <div className="flex gap-2 text-sm font-normal text-[#2458F1]">
                Next
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.16406 10.5H15.8307"
                    stroke="#2458F1"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 4.66602L15.8333 10.4993L10 16.3327"
                    stroke="#2458F1"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <span className="line-clamp-1 text-xs text-[#7B7B7B]">
                {nextItem.name}
              </span>
            </Link>
          ) : (
            <button
              disabled
              className="flex w-full flex-1 flex-col items-end gap-1 border-l border-[#E6E6E6] bg-[#E9E9E9] px-6 py-4"
            >
              <div className="flex gap-2 text-sm font-normal text-[#2458F1]">
                Next
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.16406 10.5H15.8307"
                    stroke="#2458F1"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 4.66602L15.8333 10.4993L10 16.3327"
                    stroke="#2458F1"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <span className="line-clamp-1 text-xs text-[#7B7B7B]">
                No more page
              </span>
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default GuideLayout;

GuideLayout.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
