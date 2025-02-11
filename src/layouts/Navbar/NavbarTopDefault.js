import React from 'react';
import dynamic from 'next/dynamic';
import getConfig from 'next/config';
import Image from 'next/image';
import Link from 'next/link';

// @get .config
const { publicRuntimeConfig } = getConfig();

// @components
import Container from '@components/Container';
import NavMenu from '@components/UI/Nav/NavMenu';
import NavMenuMobile from '@components/UI/Nav/NavMenuMobile';
const EventBoard = dynamic(() => import('@components/UI/EventBoard'), {
  loading: () => (
    <div
      className={`pointer-events-none relative flex h-[55px] w-full min-w-[170px] max-w-[170px] cursor-default flex-col overflow-hidden rounded-lg bg-primary px-2 py-1.5 sm:h-[58px] sm:min-w-[181px] sm:max-w-[181px] sm:rounded-lg sm:px-2.5 sm:py-1.5`}
    ></div>
  ),
});

const NavbarTopDefault = ({ theme = 'dark' }) => {
  // @handle(navmenu-toggle-mobile)
  const isNavToggle = (btn, target) => {
    const elBtn = document.querySelector(`.${btn}`);
    if (!elBtn.classList.contains('deactive')) {
      elBtn.classList.add('deactive');
    } else {
      elBtn.classList.remove('deactive');
    }
    const elTarget = document.querySelector(target);
    if (elTarget) {
      if (!elTarget?.classList.contains('active')) {
        elTarget?.classList.add('active');
      } else {
        elTarget?.classList.remove('active');
      }
    }
  };

  return (
    <>
      <nav className="fixed inset-x-0 bottom-auto top-0 z-base block h-auto w-full py-4">
        <Container>
          <div
            className={`flex h-[58px] flex-row items-start justify-between gap-y-6 sm:gap-y-0`}
          >
            <div className="block w-full sm:w-max">
              <Link
                className="ca25BrandLogo-BckBlured relative block w-max"
                href="/"
              >
                {theme === 'dark' ? (
                  <Image
                    className="mx-auto my-auto h-[38px] w-auto sm:h-[44px]"
                    src={'/assets/images/ca2025BrandLight.svg'}
                    alt={`${publicRuntimeConfig?.siteAppName} Primary Brand LOGO Navbar`}
                    height={58}
                    width={170}
                    quality="87"
                    fetchPriority="auto"
                  />
                ) : (
                  <Image
                    className="mx-auto my-auto h-[38px] w-auto sm:h-[44px]"
                    src={'/assets/images/ca2025BrandDark.svg'}
                    alt={`${publicRuntimeConfig?.siteAppName} Primary Brand LOGO Navbar`}
                    height={58}
                    width={170}
                    quality="87"
                    fetchPriority="auto"
                  />
                )}
              </Link>
            </div>
            <div className="ca25NavMenuGroup ca25NavMenuGroup-General">
              <NavMenu />
            </div>
            {/* @event(date) */}
            <div className="flex w-max flex-row">
              <div className="hidden w-max flex-row sm:flex">
                <EventBoard id={'ca25MnBoard_Insights'} />
              </div>
              <div className="order-first mr-0 flex w-max flex-col sm:mr-3 lg:hidden">
                <button
                  className={`hmbrgrStairs cs-button-nav relative flex h-12 w-12 flex-col items-center justify-center rounded-[10px] bg-primaryRed px-3.5 outline-none focus-visible:outline-none sm:h-13 sm:w-13`}
                  aria-label="Coinfest Asia 2025 Button Nav Toggle Mobile"
                  onClick={(e) => {
                    e.preventDefault();
                    isNavToggle('cs-button-nav', '.ca25NavMenuGroup-Mobile');
                  }}
                >
                  <span className="hmbrgrStairsLine"></span>
                  <span className="hmbrgrStairsLine"></span>
                  <span className="hmbrgrStairsLine"></span>
                </button>
              </div>
            </div>
          </div>
        </Container>
      </nav>

      {/* @mobile */}
      <div className="ca25NavMenuGroup-Mobile" data-nav-mobile>
        <NavMenuMobile />
      </div>
    </>
  );
};

export default NavbarTopDefault;
