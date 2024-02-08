import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// @lib
import jsnFaq from "@lib/json/faq.json";

const FAQ = () => {
  const [isFAQ, setFAQ] = useState(jsnFaq);

  // @preline (Add Plugins - Active)
  useEffect(() => {
    import("preline");

    return () => {
      undefined;
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
      scroller: ".ca2024Main",
      // scroller: "body",
    });

    const ca24FaqContent = gsap.context(() => {
      const tlTitle = gsap.timeline({
        duration: 2,
        delay: 4,
        scrollTrigger: {
          trigger: ".ca2024SldeFaqContentTitle",
          end: "bottom 100%",
          scrub: 1,
        },
      });

      tlTitle.fromTo(
        ".ca2024SldeFaqContentTitle",
        {
          y: "100%",
          opacity: 0,
        },
        {
          y: "0%",
          opacity: 1,
        }
      );

      const tlContent = gsap.timeline({
        duration: 4,
        delay: 8,
        scrollTrigger: {
          trigger: ".ca2024SldeFaqPointTop",
          end: "bottom 40%",
          scrub: 1,
        },
      });

      tlContent.fromTo(
        ".ca2024SldeFaqContent",
        {
          y: "40%",
          opacity: 0,
        },
        {
          y: "0%",
          opacity: 1,
        }
      );
    });

    return () => {
      ca24FaqContent.revert();
    };
  }, []);

  return (
    <>
      <div id="ca2024FAQ" className="relative">
        <div className="ca2024SldeFaqContentTitle flex flex-col text-center px-8 opacity-0 transition duration-[0.8s] ease-out">
          <h2 className="text-black-900 font-staraExtraBold text-[32px] sm:text-[58px] lg:text-[80px] leading-[35px] sm:leading-[74px] lg:leading-[90px] uppercase">
            Let's answer some of your questions
          </h2>
        </div>
        <div className="ca2024SldeFaqContent hs-accordion-group supports-grid:grid grid-cols-4 relative gap-y-2 mt-8 sm:mt-15 transition duration-[1s] delay-[0.1s] ease-out">
          {isFAQ?.map((gtRslt, i) => (
            <div
              id={`accrdnHeading${i}`}
              className={`hs-accordion rounded-xl border border-solid border-[#D8D8D8] bg-transparent col-span-full flex flex-col ${
                i === 0 ? "active" : ""
              }`}
              key={i}
            >
              <>
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-secondary inline-flex items-center justify-between gap-x-3 group text-left focus-visible:outline-none relative py-4 sm:py-8 px-4 sm:px-6 w-full"
                  aria-controls={`accrdn${i}`}
                >
                  <h3 className="text-black-900 font-bevietnamPro text-base sm:text-xl font-bold pr-8 sm:pr-20">
                    {gtRslt.label}
                  </h3>
                  <div className="flex flex-col items-center justify-center absolute inset-y-auto left-auto right-4 h-10 w-10">
                    <svg
                      className="fill-current text-secondary absolute inset-y-auto inset-x-auto hs-accordion-active:rotate-180 hs-accordion-active:opacity-0 h-6 sm:h-7 w-6 sm:w-7 transition duration-300"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21.6673 21.6665V31.6665H18.334V21.6665H8.33398V18.3331H18.334V8.33313H21.6673V18.3331H31.6673V21.6665H21.6673Z" />
                    </svg>
                    <svg
                      className="stroke-current absolute inset-y-auto inset-x-auto hs-accordion-active:rotate-180 opacity-0 hs-accordion-active:opacity-100 h-4 sm:h-5 w-4 sm:w-5 transition duration-300"
                      height="16"
                      viewBox="0 0 16 16"
                      width="16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.62421 7.86L13.6242 7.85999"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </button>
                <div
                  id={`accrdn${i}`}
                  className={`hs-accordion-content ${
                    i === 0 ? "" : "hidden"
                  } overflow-hidden w-full transition-[height] duration-300`}
                  aria-labelledby={`accrdnHeading${i}`}
                >
                  <div className=" text-black-900 font-bevietnamPro text-base sm:text-lg font-light pb-4 sm:pb-8 pl-4 sm:pl-6 pr-4 sm:pr-10">
                    {gtRslt.desc}
                  </div>
                </div>
              </>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQ;
