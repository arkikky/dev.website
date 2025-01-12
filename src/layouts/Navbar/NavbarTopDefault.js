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
  return (
    <>
      <nav className="fixed inset-x-0 bottom-auto top-0 z-base block h-auto w-full py-4 sm:py-6">
        <Container>
          <div
            className={`flex flex-row items-start justify-between gap-y-6 sm:gap-y-0`}
          >
            <div className="block w-full sm:w-max">
              <Link
                className="ca25BrandLogo-BckBlured relative block w-max"
                href="/"
              >
                {theme === 'dark' ? (
                  <Image
                    className="mx-auto my-auto h-[38px] w-auto sm:h-[42px]"
                    src={'/assets/images/ca2025BrandLight.svg'}
                    alt={`${publicRuntimeConfig?.siteAppName} Primary Brand LOGO Navbar`}
                    height={58}
                    width={170}
                    quality="87"
                    fetchPriority="auto"
                  />
                ) : (
                  <Image
                    className="mx-auto my-auto h-[38px] w-auto sm:h-[42px]"
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
            {/* @event(date) */}
            <div className="flex w-max flex-row">
              <EventBoard id={'ca25MnBoard_Insights'} />
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default NavbarTopDefault;
