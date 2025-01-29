'use client';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const BoardCards = ({ count, title, children }) => {
  const rfCounter = useRef([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    import('gsap/ScrollTrigger').then(({ default: ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger);
      if (rfCounter?.current) {
        gsap.fromTo(
          rfCounter?.current,
          { innerText: 0 },
          {
            innerText: count,
            duration: 1.7,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: rfCounter?.current,
              start: 'top center+=195',
              once: true,
            },
            snap: { innerText: 1 },
            onUpdate: () => {
              if (rfCounter?.current) {
                rfCounter.current.textContent = `${Math.floor(rfCounter.current.innerText)}+`;
              }
            },
          }
        );
      }
    });
  }, [count]);

  return (
    <>
      <div className="max-[420px]:px-3 max-[420px]:py-3.5 relative overflow-clip rounded-[10px] border border-solid border-white/55 bg-black-900/[0.24] px-4 py-4 sm:rounded-[20px] sm:border-2 sm:px-6 sm:py-6 lg:rounded-[28px] lg:px-8 lg:py-8 xl:px-10 xl:py-10">
        {children}

        <span
          ref={rfCounter}
          className="text-[20px] font-bold leading-[22px] text-white sm:text-[36px] sm:leading-[40px] lg:text-[50px] lg:leading-[56px] xl:text-[58px] xl:leading-[60px]"
        >
          0
        </span>
        <h3 className="mt-1 text-sm font-light leading-initial text-white sm:mt-2.5 sm:text-[26px] sm:leading-initial lg:mt-3.5 lg:text-[34px] lg:leading-initial xl:text-[36px] xl:leading-initial">
          {title}
        </h3>
      </div>
    </>
  );
};

export default BoardCards;
