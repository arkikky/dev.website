import React, { useRef, useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

const MainSmoothScroll = ({ className = null, children }) => {
  const scrollContainerRef = useRef(null);
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollContainerRef?.current,
      smooth: true,
      lerp: 0.6,
      smartphone: {
        smooth: true,
        direction: 'vertical',
        breakpoint: 768,
      },
      tablet: {
        smooth: true,
        direction: 'vertical',
        breakpoint: 1024,
      },
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  // @class
  const isDfltClss = `ca25MainApps`;
  const isAddClss = className ? `${isDfltClss} ${className}` : `${isDfltClss}`;

  return (
    <>
      <div
        ref={scrollContainerRef}
        className={`${isAddClss}`}
        data-scroll-container
      >
        {children}
      </div>
    </>
  );
};

export default MainSmoothScroll;
