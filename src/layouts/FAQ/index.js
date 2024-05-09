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
      <section className="ca2024MainPoints ca2024FaqPoints relative flex flex-col items-center justify-center overflow-hidden pb-20 pt-[84px] sm:pb-6 sm:pt-[144px] lg:pt-[163px] xl:pb-24">
        {/* <div className="ca2024FaqPointTop bg-transparent absolute top-10 bottom-auto inset-x-0 h-14 w-full select-none pointer-events-none z-px"></div> */}

        <Container className="relative z-[5]">
          <div id="ca2024FAQ" className="relative">
            <div className="ca2024FaqTitle opacity-1 mx-auto flex w-full max-w-[1022px] flex-col px-8 text-center transition duration-[0.8s] ease-out">
              <h2 className="font-staraExtraBold text-[32px] uppercase leading-[40px] text-black-900 sm:text-[58px] sm:leading-[74px] lg:text-[80px] lg:leading-[90px] xl:text-[72px] xl:leading-[86px] 2xl:text-[80px] 2xl:leading-[90px]">
                Let's answer some of your questions
              </h2>
            </div>
            <div className="relative grid-cols-4 gap-x-2 gap-y-2 supports-grid:grid sm:grid-cols-12 lg:grid-cols-12">
              <div className="col-span-full col-start-1 sm:col-span-10 sm:col-start-2">
                <div className="ca2024FaqContent hs-accordion-group relative mt-8 grid gap-y-2 sm:mt-15">
                  {isFAQ?.map((gtRslt, i) => (
                    <div
                      id={`accrdnHeading${i}`}
                      className={`hs-accordion flex flex-col rounded-xl border border-solid border-[#D8D8D8] bg-transparent ${
                        i === 0 && "active"
                      }`}
                      key={i}
                    >
                      <>
                        <button
                          className="hs-accordion-toggle group relative inline-flex w-full items-center justify-between gap-x-3 px-4 py-4 text-left focus-visible:outline-none hs-accordion-active:text-secondary sm:px-6 sm:py-8"
                          aria-controls={`accrdn${i}`}
                        >
                          <h3 className="pr-8 font-bevietnamPro text-base font-semibold text-black-900 sm:pr-20 sm:text-xl">
                            {gtRslt.label}
                          </h3>
                          <div className="absolute inset-y-auto left-auto right-4 flex h-10 w-10 flex-col items-center justify-center">
                            <svg
                              className="absolute inset-x-auto inset-y-auto h-6 w-6 fill-current text-black-900 transition duration-300 hs-accordion-active:rotate-180 hs-accordion-active:opacity-0 sm:h-7 sm:w-7"
                              viewBox="0 0 40 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M21.6673 21.6665V31.6665H18.334V21.6665H8.33398V18.3331H18.334V8.33313H21.6673V18.3331H31.6673V21.6665H21.6673Z" />
                            </svg>
                            <svg
                              className="absolute inset-x-auto inset-y-auto h-4 w-4 stroke-current text-black-900 opacity-0 transition duration-300 hs-accordion-active:rotate-180 hs-accordion-active:opacity-100 sm:h-5 sm:w-5"
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
                            i !== 0 && "hidden"
                          } w-full overflow-hidden transition-[height] duration-300`}
                          aria-labelledby={`accrdnHeading${i}`}
                        >
                          <div className=" pb-4 pl-4 pr-4 font-bevietnamPro text-base font-light text-black-900 sm:pb-8 sm:pl-6 sm:pr-10 sm:text-lg">
                            {gtRslt.desc}
                          </div>
                        </div>
                      </>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default FAQ;
