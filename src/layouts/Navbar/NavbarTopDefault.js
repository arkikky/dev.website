import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import getConfig from 'next/config';
import Image from 'next/image';
import Link from 'next/link';

// @get .config
const { publicRuntimeConfig } = getConfig();

// @components
import Container from '@components/Container';
const EventBoard = dynamic(() => import('@components/UI/EventBoard'), {
  loading: () => (
    <div
      className={`pointer-events-none relative flex h-[55px] w-full min-w-[170px] max-w-[170px] cursor-default flex-col overflow-hidden rounded-lg bg-primary px-2 py-1.5 sm:h-[58px] sm:min-w-[181px] sm:max-w-[181px] sm:rounded-lg sm:px-2.5 sm:py-1.5`}
    ></div>
  ),
  ssr: false,
});

const NavbarTopDefault = ({ theme = 'dark' }) => {
  const router = useRouter();

  // @handle(open navmenu)
  const isOpenNav = (e) => {
    e?.preventDefault();
    const target = e?.target;
    const allBtnToggleNavMenu = document.querySelectorAll(
      '.ca25NavMenu-ToggleItems'
    );
    const allGeneralNavMenu = document.querySelectorAll(
      '.ca25NavMenuGroup-General .ca25HalfNavMenu'
    );

    let existingBackdrop = document.querySelector('.ca25DropdownBackdrop');
    if (!target.classList.contains('active')) {
      allBtnToggleNavMenu.forEach((btn) => btn?.classList.remove('active'));
      target.classList.add('active');
      if (!existingBackdrop) {
        existingBackdrop = document.createElement('div');
        existingBackdrop.classList.add('ca25DropdownBackdrop');
        existingBackdrop.id = 'ca25DropdownBackdrop';
        existingBackdrop.addEventListener('click', () => {
          allBtnToggleNavMenu?.forEach((btn) => btn.classList.remove('active'));
          allGeneralNavMenu?.forEach((menu) => menu.classList.remove('active'));
          existingBackdrop?.classList.remove('active');
          setTimeout(() => existingBackdrop.remove(), 300);
        });
        document.body.appendChild(existingBackdrop);
      }
    } else {
      target.classList.remove('active');
      if (existingBackdrop) {
        existingBackdrop.classList.remove('active');
        setTimeout(() => existingBackdrop.remove(), 300);
      }
    }

    const elmntTarget = target.getAttribute('data-target');
    if (elmntTarget) {
      const elmnt = document.querySelector(elmntTarget);
      if (!elmnt?.classList.contains('active')) {
        allGeneralNavMenu?.forEach((menu) => menu.classList.remove('active'));
        elmnt.classList.add('active');
        setTimeout(() => existingBackdrop?.classList.add('active'), 50);
      } else {
        elmnt.classList.remove('active');
      }
    }
  };

  // @handle(open navmenu mobile)
  const isOpenNavMobile = (e) => {
    e?.preventDefault();
    const target = e?.target;
    const elmntBtn = document.querySelector('.hmbrgrStairs');
    if (!elmntBtn.classList.contains('deactive')) {
      elmntBtn.classList.add('deactive');
    } else {
      elmntBtn.classList.remove('deactive');
    }

    const elmntTarget = target?.getAttribute('data-target');
    if (elmntTarget) {
      const elmnt = document.querySelector(elmntTarget);
      if (!elmnt?.classList.contains('active')) {
        elmnt?.classList.add('active');
      } else {
        elmnt?.classList.remove('active');
      }
    }
  };
  const isOpenToogleNavMobile = (e) => {
    e?.preventDefault();
    const target = e?.target;
    const allBtnToggleNavMenuMobile = document.querySelectorAll(
      '.ca25NavMenuMobile-ToggleItems'
    );
    const allHalfNavMenuMobile = document.querySelectorAll(
      '.ca25HalfMobileNavMenu'
    );

    if (!target.classList.contains('active')) {
      allBtnToggleNavMenuMobile?.forEach((btn) =>
        btn.classList.remove('active')
      );
      target?.classList.add('active');
    } else {
      target?.classList.remove('active');
    }

    const elmntTarget = target?.getAttribute('data-target');
    if (elmntTarget) {
      const elmnt = document.querySelector(elmntTarget);
      if (!elmnt?.classList.contains('active')) {
        allHalfNavMenuMobile?.forEach((menu) =>
          menu.classList.remove('active')
        );
        elmnt?.classList.add('active');
      } else {
        elmnt?.classList.remove('active');
      }
    }
  };

  // @handle(scroll)
  useEffect(() => {
    const handleScroll = () => {
      const elmntGroup = document.querySelector(`.ca25NavMenuGroup-General`);

      if (window.scrollY > 84) {
        elmntGroup?.classList.add('active');
      } else {
        elmntGroup?.classList.remove('active');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // @hndle(change route)
  useEffect(() => {
    const hndlChangeRoute = () => {
      let existingBackdrop = document.querySelector('.ca25DropdownBackdrop');
      if (existingBackdrop) {
        existingBackdrop.classList.remove('active');
        setTimeout(() => existingBackdrop.remove(), 300);
      }

      let handleNavMenuMobile = document.querySelector(
        '.ca25NavMenuGroup-Mobile'
      );
      if (handleNavMenuMobile) {
        handleNavMenuMobile.classList.remove('active');
      }
    };
    router?.events.on('routeChangeStart', hndlChangeRoute);
    hndlChangeRoute();
    return () => {
      router?.events.off('routeChangeStart', hndlChangeRoute);
    };
  }, [router?.events]);

  return (
    <>
      <nav className="fixed inset-x-0 bottom-auto top-0 z-base block h-auto w-full py-4 sm:py-6">
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
              <ul className="ca25NavMenu">
                <li className="ca25NavMenu-Items">
                  <button
                    id={`ca25NavBtnToggle_GetInvolved`}
                    className="ca25NavMenu-ToggleItems"
                    data-target={'.caNavMenu-GetInvolved'}
                    onClick={(e) => isOpenNav(e)}
                  >
                    {` Get Involved`}{' '}
                    <svg
                      className="ca25NavMenu-ToggleIcons ml-1 size-4 lg:ml-1.5 lg:size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                  </button>
                  <ul className="ca25HalfNavMenu caNavMenu-GetInvolved">
                    <li>
                      <Link
                        href={'/get-involved/speakers'}
                        title={`${publicRuntimeConfig?.siteAppName} Speaker`}
                      >
                        Speaker
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={'/get-involved/sponsorship'}
                        title={`${publicRuntimeConfig?.siteAppName} Sponsor`}
                      >
                        Sponsor
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={'/get-involved'}
                        title={`${publicRuntimeConfig?.siteAppName} Partner as Media`}
                      >
                        Partner as Media
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={'/get-involved/become-an-affiliate'}
                        title={`${publicRuntimeConfig?.siteAppName} Become an Affiliate`}
                      >
                        Become an Affiliate
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={'/get-involved'}
                        title={`${publicRuntimeConfig?.siteAppName} Partner as Community`}
                      >
                        Partner as Community
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={'mailto:partner@coinfest.asia'}
                        title={`${publicRuntimeConfig?.siteAppName} Send Inquiry`}
                        target={'_blank'}
                        rel={'noopener noreferrer'}
                      >
                        Send Inquiry
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="ca25NavMenu-Items ca25NavMenu-LabelItems">
                  <Link
                    href="/tickets"
                    title={`${publicRuntimeConfig?.siteAppName} Tickets`}
                  >
                    {`Tickets`}
                  </Link>
                </li>
              </ul>
            </div>
            {/* @event(date) */}
            <div className="hidden w-max flex-row sm:flex">
              <EventBoard id={'ca25MnBoard_Insights'} />
            </div>
            <div className="flex w-max flex-col sm:hidden">
              <button
                className={`hmbrgrStairs relative flex h-12 w-12 flex-col items-center justify-center rounded-[10px] bg-black-900 px-3.5 outline-none focus-visible:outline-none sm:h-13 sm:w-13`}
                aria-label="Coinfest Asia 2025 Button Nav Toggle Mobile"
                data-target={'.ca25NavMenuGroup-Mobile'}
                onClick={(e) => isOpenNavMobile(e)}
              >
                <span className="hmbrgrStairsLine"></span>
                <span className="hmbrgrStairsLine"></span>
                <span className="hmbrgrStairsLine"></span>
              </button>
            </div>
          </div>
        </Container>
      </nav>

      {/* @mobile */}
      <div className="ca25NavMenuGroup-Mobile">
        <ul className="ca25NavMenuMobile">
          <li className="ca25NavMenu-Items">
            <button
              className="ca25NavMenuMobile-ToggleItems ca25NavMenu-LabelItems"
              data-target={'.caNavMenuMobile-GetInvolved'}
              onClick={(e) => isOpenToogleNavMobile(e)}
            >
              {` Get Involved`}{' '}
              <svg
                className="ca24NavMenuMobile-ToggleIcons ml-1.5 size-[28px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            </button>
            <ul className="ca25HalfMobileNavMenu caNavMenuMobile-GetInvolved">
              <li>
                <Link
                  href={'/'}
                  title={`${publicRuntimeConfig?.siteAppName} Speaker`}
                >
                  Speaker
                </Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  title={`${publicRuntimeConfig?.siteAppName} Sponsor`}
                >
                  Sponsor
                </Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  title={`${publicRuntimeConfig?.siteAppName} Partner as Media`}
                >
                  Partner as Media
                </Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  title={`${publicRuntimeConfig?.siteAppName} Become an Affiliate`}
                >
                  Become an Affiliate
                </Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  title={`${publicRuntimeConfig?.siteAppName} Partner as Community`}
                >
                  Partner as Community
                </Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  title={`${publicRuntimeConfig?.siteAppName} Send Inquiry`}
                >
                  Send Inquiry
                </Link>
              </li>
            </ul>
          </li>
          <li className="ca25NavMenu-Items ca25NavMenu-LabelItems">
            <Link
              href="/tickets"
              title={`${publicRuntimeConfig?.siteAppName} Tickets`}
            >
              Tickets
            </Link>
          </li>
          <li className="ca25NavMenu-Items">
            <button
              className="ca25NavMenuMobile-ToggleItems ca25NavMenu-LabelItems"
              data-target={'.caNavMenuMobile-Speakers'}
              onClick={(e) => isOpenToogleNavMobile(e)}
            >
              {` Speakers`}{' '}
              <svg
                className="ca24NavMenuMobile-ToggleIcons ml-1.5 size-[28px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            </button>
            <ul className="ca25HalfMobileNavMenu caNavMenuMobile-Speakers">
              <li>
                <Link
                  href={'/'}
                  title={`${publicRuntimeConfig?.siteAppName} Speaker`}
                >
                  Speaker
                </Link>
              </li>
              <li>
                <Link
                  href={'/'}
                  title={`${publicRuntimeConfig?.siteAppName} Sponsor`}
                >
                  Sponsor
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavbarTopDefault;
