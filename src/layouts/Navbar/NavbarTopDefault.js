import React from 'react';
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
  const isOpenNav = (e) => {
    e?.preventDefault();
    const target = e?.target;

    const allBtnToggleNavMenu = Array.from(
      document.querySelectorAll('.ca25NavMenu-ToggleItems')
    );
    const allGeneralNavMenu = Array.from(
      document.querySelectorAll('.ca25NavMenuGroup-General .ca25HalfNavMenu')
    );
    if (!target.classList.contains('active')) {
      allBtnToggleNavMenu.forEach((btn) => btn?.classList.remove('active'));
      target.classList.add('active');
    } else {
      target.classList.remove('active');
    }

    const elmntTarget = target.getAttribute('data-target');
    if (elmntTarget) {
      const elmnt = document.querySelector(elmntTarget);
      if (!elmnt?.classList.contains('active')) {
        allGeneralNavMenu.forEach((menu) => menu?.classList.remove('active'));
        elmnt.classList.add('active');

        let backdrop = document.querySelector('.ca25DropdownBackdrop');
        if (!backdrop) {
          backdrop = document.createElement('div');
          backdrop.classList.add('ca25DropdownBackdrop');
          backdrop.id = 'ca25DropdownBackdrop';
          backdrop.addEventListener('click', () => {
            allBtnToggleNavMenu.forEach((btn) =>
              btn.classList.remove('active')
            );
            allGeneralNavMenu.forEach((menu) =>
              menu.classList.remove('active')
            );
            backdrop.classList.remove('active');
            setTimeout(() => backdrop.remove(), 300);
          });
          document.body.appendChild(backdrop);
          setTimeout(() => backdrop?.classList.add('active'), 50);
        }
      } else {
        elmnt.classList.remove('active');
        const existingBackdrop = document.querySelector(
          '.ca25DropdownBackdrop'
        );
        if (existingBackdrop) {
          existingBackdrop.classList.remove('active');
          setTimeout(() => existingBackdrop.remove(), 300);
        }
      }
    }
  };
  const isOpenNavMobile = (e) => {
    e?.preventDefault();
    const elmntTarget = e?.target.getAttribute('data-target');
    if (elmntTarget) {
      const elmnt = document.querySelector(elmntTarget);
      if (!elmnt?.classList.contains('active')) {
        elmnt?.classList.add('active');
      } else {
        elmnt?.classList.remove('active');
      }
    }
  };

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
                      <Link href={'/'}>Speaker</Link>
                    </li>
                    <li>
                      <Link href={'/'}>Sponsor</Link>
                    </li>
                    <li>
                      <Link href={'/'}>Partner as Media</Link>
                    </li>
                    <li>
                      <Link href={'/'}>Become an Affiliator</Link>
                    </li>
                    <li>
                      <Link href={'/'}>Partner as Community</Link>
                    </li>
                    <li>
                      <Link href={'/'}>Send Inquiry</Link>
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
                <li className="ca25NavMenu-Items">
                  <button
                    id={`ca25NavBtnToggle_Speakers`}
                    className="ca25NavMenu-ToggleItems"
                    data-target={'.caNavMenu-Speakers'}
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
                  <ul className="ca25HalfNavMenu caNavMenu-Speakers">
                    <li>
                      <Link href={'/'}>Speaker</Link>
                    </li>
                    <li>
                      <Link href={'/'}>Sponsor</Link>
                    </li>
                    <li>
                      <Link href={'/'}>Partner as Media</Link>
                    </li>
                    <li>
                      <Link href={'/'}>Become an Affiliator</Link>
                    </li>
                    <li>
                      <Link href={'/'}>Partner as Community</Link>
                    </li>
                    <li>
                      <Link href={'/'}>Send Inquiry</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* @event(date) */}
            <div className="hidden w-max flex-row sm:flex">
              <EventBoard id={'ca25MnBoard_Insights'} />
            </div>
            <div className="flex w-max flex-col sm:hidden">
              <button
                className="flex h-10 w-10 flex-col bg-red-600"
                data-target={'.ca25NavMenuGroup-Mobile'}
                onClick={(e) => isOpenNavMobile(e)}
              >
                TO
              </button>
            </div>
          </div>
        </Container>
      </nav>

      {/* @mobile */}
      <div className="ca25NavMenuGroup-Mobile">
        <ul className="ca25NavMenu">
          <li className="ca25NavMenu-Items">
            <button
              className="ca25NavMenu-ToggleItems"
              data-target={'.caNavMenu-GetInvolved'}
            >
              {` Get Involved`}{' '}
              <svg
                className="ml-1.5 size-[28px]"
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
            <ul className="ca25HalfMobileNavMenuItems caNavMenuMobile-GetInvolved">
              <li>
                <Link href={'/'}>Speaker</Link>
              </li>
              <li>
                <Link href={'/'}>Sponsor</Link>
              </li>
              <li>
                <Link href={'/'}>Partner as Media</Link>
              </li>
              <li>
                <Link href={'/'}>Become an Affiliator</Link>
              </li>
              <li>
                <Link href={'/'}>Partner as Community</Link>
              </li>
              <li>
                <Link href={'/'}>Send Inquiry</Link>
              </li>
            </ul>
          </li>
          <li className="ca25NavMenu-Items">
            <Link
              href="/events"
              title={`${publicRuntimeConfig?.siteAppName} Tickets`}
            >
              Tickets
            </Link>
          </li>
          <li className="ca25NavMenu-Items">
            <button
              className="ca25NavMenu-ToggleItems"
              data-target={'.caNavMenu-Speakers'}
            >
              {` Get Involved`}{' '}
              <svg
                className="ml-1.5 size-[28px]"
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
            <ul className="ca25HalfMobileNavMenuItems caNavMenuMobile-Speakers">
              <li>
                <Link href={'/'}>Speaker</Link>
              </li>
              <li>
                <Link href={'/'}>Sponsor</Link>
              </li>
              <li>
                <Link href={'/'}>Partner as Media</Link>
              </li>
              <li>
                <Link href={'/'}>Become an Affiliator</Link>
              </li>
              <li>
                <Link href={'/'}>Partner as Community</Link>
              </li>
              <li>
                <Link href={'/'}>Send Inquiry</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavbarTopDefault;
