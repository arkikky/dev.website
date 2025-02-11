'use client';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

// @components
import StarryBackground from '@components/UI/Background/StarryBackground';

const Headers = ({ mode }) => {
  // @animation(rotate)
  const elBlueMoonSpecial = useRef(null);
  useEffect(() => {
    const elRotate = () => {
      gsap.to('#ca25BlueMoonSpecial', {
        rotation: 360,
        duration: 10,
        repeat: -1,
        ease: 'linear',
      });
    };
    elRotate();
    return () => {
      gsap.killTweensOf(elBlueMoonSpecial?.current);
    };
  }, []);

  return (
    <>
      <header id="ca25Headers" className="relative block w-full">
        <div className="ca25Headers_Hero relative flex h-[923px] w-full flex-col items-center justify-center overflow-x-hidden overflow-y-clip bg-[linear-gradient(180deg,#1F1F1F_37%,#005AFF_69%,#7AB1F9_87%,#A0CCF7_97%)] pt-[135px] sm:h-[924px] sm:pt-[144px] lg:h-[1024px] lg:pt-[183px] xs:h-[805px]">
          <h1 className="!pointer-events-none absolute inset-x-0 inset-y-0 -top-5 -z-[5] block h-max !select-none">
            {`WORLD'S LARGEST CRYPTO FESTIVAL`}
          </h1>
          <div className="pointer-events-none absolute inset-x-0 inset-y-0 z-px select-none">
            <StarryBackground starCount={125} />
          </div>

          {/* @backdrop(moon special) */}
          <div
            className={
              'ca25BckBlueMoon-Speacial pointer-events-none absolute inset-x-0 inset-y-0 z-[2] flex select-none flex-row items-center justify-center overflow-hidden'
            }
          >
            <div className="ca25BckBlueMoon-Speacial_MemeItems absolute inset-x-0 inset-y-0 mx-auto w-full sm:w-[659.54px] xl:w-[1180px]"></div>
            <div className="ca25BckBlueMoon-Speacial_MiniRckt absolute inset-x-0 inset-y-0 mx-auto w-full sm:w-[659.54px] xl:w-[1180px]"></div>
          </div>

          <div
            ref={elBlueMoonSpecial}
            id={'ca25BlueMoonSpecial'}
            className={
              'ca25BckBlueMoon-SpeacialMoon pointer-events-none flex select-none flex-row items-center justify-center overflow-hidden mix-blend-hard-light'
            }
          >
            <Image
              className="mx-auto h-full w-full object-cover object-center"
              src={'/assets/images/ca25BlueMoon.svg'}
              alt={`Coinfest Asia 2025 Special Blue Moon`}
              height={606}
              width={755}
              quality="65"
            />
          </div>

          {/* @content(heading) */}
          <div
            className={`absolute inset-x-0 inset-y-0 z-[22] mx-auto mb-8 flex w-full flex-col items-center justify-center text-balance text-center sm:mb-12 sm:w-[619.54px] lg:w-[749.54px] xl:w-[1116px]`}
          >
            <div
              className={`ca25HeadingHero subpixel-antialiased ${mode === 'light' ? 'text-black-900' : 'text-white'} [749.54px] mt-[39px] block w-full font-medium uppercase sm:-mt-[79px] sm:w-[619.54px] sm:font-semibold lg:w-[749.54px] xl:w-[1116px] xs:mt-[23px]`}
            >
              <div className="float-none pl-0 sm:float-left sm:pl-20">
                {'WORLD`S'
                  ?.split('')
                  .map((chr, i) =>
                    ['`', 'O'].includes(chr) ? <span key={i}>{chr}</span> : chr
                  )}
              </div>
              <div className="float-none sm:float-right">
                {'LARGEST'
                  ?.split('')
                  .map((chr, i) =>
                    ['A', 'E'].includes(chr) ? <span key={i}>{chr}</span> : chr
                  )}
              </div>
              <div className="float-none flex flex-row items-center justify-center gap-x-5 sm:float-left">
                <div>
                  {'CRYPTO'
                    ?.split('')
                    .map((chr, i) =>
                      ['Y', 'O'].includes(chr) ? (
                        <span key={i}>{chr}</span>
                      ) : (
                        chr
                      )
                    )}
                </div>
              </div>
              <div className="float-none pr-0 sm:float-right sm:pr-3">
                {'FESTIVAL'
                  ?.split('')
                  .map((chr, i) =>
                    ['A', 'E'].includes(chr) ? <span key={i}>{chr}</span> : chr
                  )}
              </div>
            </div>
            <div className="mt-4 w-full text-center font-bevietnamPro text-[12px] font-medium leading-[16px] tracking-[5px] text-white sm:hidden xs:mt-2">
              {`BALI, 21—22 AUG 2025`}
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-[304px] top-auto mx-auto hidden w-max text-[12px] font-medium leading-[16px] text-white sm:bottom-[291px] sm:block sm:text-[32px] sm:leading-initial lg:bottom-[291px] xl:bottom-[111px] xl:text-[40px]">{`BALI, 21—22 AUG 2025`}</div>
        </div>

        <div className="ca25BckBlueMoon-Speacial_Rckt !pointer-events-none absolute inset-x-0 inset-y-0 mx-auto w-full !select-none sm:w-[659.54px] xl:w-[1180px]"></div>
      </header>
    </>
  );
};

export default Headers;
