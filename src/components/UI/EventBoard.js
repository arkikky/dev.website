import React, { useRef, useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

// @lib/controller & helper
import { calculateCountdown } from '@lib/helper/Configuration';

const EventBoard = ({ id }) => {
  const rfMainSplde = useRef(null);
  const [isCountdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  // @countdown(Date)
  const setDate = new Date('2025-08-21T12:00:00').getTime();
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
      <div
        className={`pointer-events-none relative flex h-[53px] w-full min-w-[168px] max-w-[168px] cursor-default flex-col overflow-hidden rounded-lg bg-primary px-2 py-1.5 sm:h-[56px] sm:min-w-[172px] sm:max-w-[172px] sm:rounded-lg sm:px-2.5 sm:py-1.5`}
      >
        <Splide
          ref={(slider) => (rfMainSplde.current = slider)}
          id={id ?? 'ca25MnBoard_InsightsStore'}
          tag="section"
          role="region"
          aria-label="Coinfest Asia 2025 Mini Board Information"
          options={{
            label: 'Coinfest Asia 2025 Mini Board Information',
            updateOnMove: true,
            type: 'loop',
            perPage: 1,
            autoplay: true,
            direction: 'ttb',
            lazyLoad: 'nearby',
            keyboard: false,
            arrows: false,
            pagination: false,
            gap: '22px',
            height: '48px',
            width: '100%',
            mediaQuery: 'min',
          }}
          className={`ca25MnBoard_SplideWhile w-full`}
        >
          <SplideSlide data-splide-interval="5000" role="listitem">
            <div className="relative flex h-12 flex-col items-start justify-start overflow-hidden">
              <span className={`text-sm font-light text-white/60`}>
                {`Event Date`}
              </span>
              <div
                className={`absolute inset-x-0 bottom-[7px] top-auto min-w-max text-base font-normal leading-initial text-white sm:bottom-[5px] sm:text-base sm:leading-initial`}
              >
                {`21-22 August 2025`}
              </div>
            </div>
          </SplideSlide>
          <SplideSlide data-splide-interval="6000" role="listitem">
            <div className="relative flex h-12 flex-col items-start justify-start overflow-hidden">
              <span className={`text-sm font-light text-white/60`}>
                {`Starting in`}
              </span>
              <div
                className={`absolute inset-x-0 bottom-[7px] top-auto min-w-max text-base font-normal leading-initial text-white sm:bottom-[5px] sm:text-base sm:leading-initial`}
              >
                {`${isCountdown?.days}d ${isCountdown?.hours}h ${isCountdown?.minutes}m ${isCountdown?.seconds}s`}
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </>
  );
};

export default EventBoard;
