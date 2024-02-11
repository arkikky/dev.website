import React, { useState, useEffect } from "react";

// @lib
import faqDummy from "@lib/json/faq.json";

// @components
import Container from "@components/Container";

const FAQ = () => {
  const [isFAQ, setFAQ] = useState(faqDummy);

  // @preline (Add Plugins - Active)
  useEffect(() => {
    import("preline");

    return () => {
      undefined;
    };
  }, []);

  return (
    <>
      <section className="ca2024Faq flex flex-col items-center justify-center overflow-hidden relative pt-[144px] lg:pt-[163px] pb-32 lg:pb-24">
        <div className="ca2024FaqPointTop bg-transparent absolute top-10 bottom-auto inset-x-0 h-14 w-full select-none pointer-events-none z-px"></div>

        <Container className="relative z-[5]">
          <div id="ca2024FAQ" className="relative">
            <div className="ca2024FaqTitle flex flex-col text-center mx-auto px-8 w-full max-w-[1022px] opacity-1 transition duration-[0.8s] ease-out">
              <h2 className="text-black-900 font-staraExtraBold text-[32px] sm:text-[58px] lg:text-[80px] xl:text-[72px] 2xl:text-[80px] leading-[40px] sm:leading-[74px] lg:leading-[90px] xl:leading-[86px] 2xl:leading-[90px] uppercase">
                Let's answer some of your questions
              </h2>
            </div>
            <div className="ca2024FaqContent hs-accordion-group supports-grid:grid grid-cols-4 relative gap-y-2 mt-8 sm:mt-15 transition duration-[1s] delay-[0.1s] ease-out">
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
                      <h3 className="text-black-900 font-bevietnamPro text-base sm:text-xl font-semibold pr-8 sm:pr-20">
                        {gtRslt.label}
                      </h3>
                      <div className="flex flex-col items-center justify-center absolute inset-y-auto left-auto right-4 h-10 w-10">
                        <svg
                          className="fill-current text-black-900 absolute inset-y-auto inset-x-auto hs-accordion-active:rotate-180 hs-accordion-active:opacity-0 h-6 sm:h-7 w-6 sm:w-7 transition duration-300"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M21.6673 21.6665V31.6665H18.334V21.6665H8.33398V18.3331H18.334V8.33313H21.6673V18.3331H31.6673V21.6665H21.6673Z" />
                        </svg>
                        <svg
                          className="stroke-current text-black-900 absolute inset-y-auto inset-x-auto hs-accordion-active:rotate-180 opacity-0 hs-accordion-active:opacity-100 h-4 sm:h-5 w-4 sm:w-5 transition duration-300"
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
        </Container>
      </section>
    </>
  );
};

export default FAQ;
