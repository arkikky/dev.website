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
      className={`pointer-events-none relative flex h-[57px] w-full min-w-[178px] max-w-[178px] cursor-default flex-col overflow-hidden rounded-lg bg-primary px-2.5 py-1.5 sm:h-[64px] sm:min-w-[221px] sm:max-w-[221px] sm:rounded-xl sm:px-3 sm:py-2`}
    ></div>
  ),
  ssr: false,
});

const NavbarTopDefault = ({ theme = 'dark' }) => {
  return (
    <>
      <nav className="fixed inset-x-0 bottom-auto top-0 z-base flex h-auto w-full flex-col items-center justify-center py-2">
        <Container>
          <div
            className={`flex flex-row items-center justify-between gap-y-6 rounded-xl border-2 border-solid border-gray-400/[0.18] ${theme == 'light' ? 'bg-gray-200/45' : 'bg-black-700/35'} px-1 py-1 backdrop-blur-md sm:gap-y-0 sm:rounded-2xl sm:px-1.5 sm:py-1.5`}
          >
            <div className="block w-full sm:w-max">
              <Link className="ml-1.5 block w-max sm:ml-2.5 lg:ml-2.5" href="/">
                {theme === 'dark' ? (
                  <Image
                    className="mx-auto my-auto h-8.5 w-auto sm:h-[38px]"
                    src={'/assets/images/ca2025BrandLight.svg'}
                    alt={`${publicRuntimeConfig?.siteAppName} Primary Brand LOGO Navbar`}
                    height={58}
                    width={170}
                    quality="87"
                    fetchPriority="auto"
                  />
                ) : (
                  <Image
                    className="mx-auto my-auto h-8.5 w-auto sm:h-[38px]"
                    src={'/assets/images/ca2025Brand.svg'}
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
