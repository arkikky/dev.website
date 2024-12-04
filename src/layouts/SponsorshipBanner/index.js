import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

const FooterBanner = () => {
  const intScBanner = useRef(null);
  const bgBannerImgs = useRef(null);

  useEffect(() => {
    if (bgBannerImgs.current) {
      const initGspScrll = gsap.context(() => {
        gsap.registerPlugin(ScrollTrigger);

        let intTl = gsap.timeline({
          scrollTrigger: {
            trigger: intScBanner.current,
            scrub: true,
            start: "top bottom",
            end: "top 20%",
            invalidateOnRefresh: true,
          },
        });

        intTl
          .from(bgBannerImgs.current, {
            backgroundPosition: "50% 40%",
            ease: "none",
          })
          .to(bgBannerImgs.current, {
            backgroundPosition: "50% 95%",
            ease: "none",
          });
      });

      return () => initGspScrll.revert();
    }
  }, []);

  return (
    <>
      <section
        ref={intScBanner}
        className="caBnnrShdw flex items-center justify-center relative mt-[108px] min-h-[351px] sm:min-h-[483px] xl:min-h-[618px]"
      >
        <div
          ref={bgBannerImgs}
          className="caBnnerSponsor bg-[url('/assets/images/banner/53965121303_d4b4d44cca_o.jpg')] bg-[length:295%] sm:bg-[length:147%] lg:bg-[length:125%] bg-cover bg-no-repeat object-cover xl:object-center object-center absolute inset-y-0 inset-x-0 h-full w-full -z-px transition-all ease-linear"
        ></div>
        <div className="flex flex-col relative z-10">
          <div className="flex flex-col text-center relative px-4 sm:px-0">
            <h2 className="text-white font-bevietnamPro text-[32px] sm:text-[46px] xl:text-[64px] leading-[42px] sm:leading-[66px] xl:leading-[85px] font-bold uppercase">
              Take Part in 2025
            </h2>
            <Link
              className="py-4 px-4 flex flex-col items-center justify-center bg-secondary w-max mx-auto rounded-full mt-4 outline-none"
              href="/2025-sponsorship"
            >
              Sponsorship Inquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
export default FooterBanner;
