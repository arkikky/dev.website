import React, { useRef, useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import getConfig from 'next/config';
import Image from 'next/image';
import Link from 'next/link';

// @get .config
const { publicRuntimeConfig } = getConfig();

// @style-css
import '@splidejs/react-splide/css/core';

// @lib/controller & helper
import calculateCountdown from '@lib/helper/CalculateCountdown';

// @components
import Container from '@components/Container';

const NavbarTop = ({}) => {
  const rfMainSplde = useRef(null);
  const [isCountdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  // @countdown(Date)
  const setDate = new Date('2025-08-22T12:00:00').getTime();
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(calculateCountdown(setDate));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <nav className="fixed inset-x-0 bottom-auto top-0 z-base flex h-auto w-full flex-col items-center justify-center py-2">
        <Container>
          <div className="flex flex-row items-center justify-between gap-y-6 rounded-xl border-2 border-solid border-gray-400/[0.18] bg-gray-300/25 px-1 py-1 backdrop-blur-md sm:gap-y-0 sm:rounded-2xl sm:px-1.5 sm:py-1.5">
            <div className="flex w-full flex-row items-center justify-between sm:w-max">
              <Link className="ml-2 block w-max sm:ml-3 lg:ml-3" href="/">
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
            </div>

            <div className="block w-max">
              <div
                className={`pointer-events-none relative flex h-[59px] w-full min-w-[178px] max-w-[178px] cursor-default flex-col rounded-lg bg-primary px-2.5 py-2 sm:h-[68px] sm:min-w-[221px] sm:max-w-[221px] sm:rounded-xl sm:px-3 sm:py-2.5`}
              >
                <Splide
                  ref={(slider) => (rfMainSplde.current = slider)}
                  id="ca25MnBoard_Insights"
                  tag="section"
                  role="article"
                  aria-label="Coinfest Asia 2025 (Mini Board Information - Navbar Top)"
                  options={{
                    label:
                      'Coinfest Asia 2025 (Mini Board Information - Navbar Top)',
                    updateOnMove: true,
                    type: 'loop',
                    perPage: 1,
                    autoplay: true,
                    direction: 'ttb',
                    lazyLoad: 'nearby',
                    keyboard: false,
                    arrows: false,
                    pagination: false,
                    height: '48px',
                    width: '100%',
                    mediaQuery: 'min',
                    breakpoints: {
                      640: {
                        destroy: false,
                      },
                    },
                  }}
                  className={`ca25MnBoard_SplideWhile w-full`}
                >
                  <SplideSlide data-splide-interval="5000">
                    <div className="relative flex h-12 flex-col items-start justify-start overflow-hidden">
                      <span className={`text-sm font-light text-white/70`}>
                        Event Date
                      </span>
                      <div
                        className={`absolute inset-x-0 bottom-1 top-auto min-w-max font-bevietnamPro text-base font-normal leading-inherit text-white sm:bottom-0 sm:text-xl`}
                      >
                        22-23 August 2025
                      </div>
                    </div>
                  </SplideSlide>
                  <SplideSlide data-splide-interval="6000">
                    <div className="relative flex h-12 flex-col items-start justify-start overflow-hidden">
                      <span className={`text-sm font-light text-white/70`}>
                        Starting in
                      </span>
                      <div
                        className={`absolute inset-x-0 bottom-1 top-auto min-w-max font-bevietnamPro text-base font-normal leading-inherit text-white sm:bottom-0 sm:text-xl`}
                      >
                        {`${isCountdown.days}d ${isCountdown.hours}h ${isCountdown.minutes}m ${isCountdown.seconds}s`}
                      </div>
                    </div>
                  </SplideSlide>
                </Splide>
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default NavbarTop;
