import React, { useState } from 'react';
import getConfig from 'next/config';
import Image from 'next/image';
import Link from 'next/link';

// @get .config
const { publicRuntimeConfig } = getConfig();

// @components
import Container from '@components/Container';

const NavbarCheckout = ({ progress = 'last' }) => {
  const [isProgress, setProgress] = useState(progress);

  return (
    <>
      <nav className="fixed inset-x-0 bottom-auto top-0 z-base flex h-auto w-full flex-col items-center justify-center py-2">
        <Container>
          <div className="flex flex-col items-center justify-between gap-y-6 rounded-xl border border-solid border-gray-400/[0.16] bg-gray-300/25 px-1.5 py-1.5 backdrop-blur-md sm:flex-row sm:gap-y-0 sm:rounded-2xl sm:px-2 sm:py-2">
            <div className="flex w-full flex-row items-center justify-between sm:w-max">
              <Link className="ml-1 block w-max sm:ml-2" href="/">
                <Image
                  className="mx-auto my-auto h-7.5 w-auto sm:h-9"
                  src={'/assets/images/ca2025Brand.svg'}
                  alt={`${publicRuntimeConfig.siteAppName} (Primary Brand - Navbar Checkout)`}
                  height={58}
                  width={170}
                  quality="87"
                  fetchPriority="auto"
                />
              </Link>
              <div className="block sm:hidden">
                <Link
                  href="/"
                  title="Coinfest Asia 2025 (Back to Home - Checkout)"
                  className="inline-flex flex-row items-center rounded-lg bg-secondary px-4.5 py-3 text-sm text-black-900"
                >
                  Home
                </Link>
              </div>
            </div>

            <div className="hidden sm:block">
              <Link
                href="/"
                title="Button Back to Home Checkout Coinfest Asia 2025"
                className="inline-flex flex-row items-center rounded-[10px] bg-secondary px-6 py-4 text-base text-black-900"
              >
                Enquire for Sponsorship
              </Link>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default NavbarCheckout;
