import React from 'react';

const FaqCards = ({ list }) => {
  return (
    <>
      <div
        id="ca25FAQ_AccordionGeneral"
        className="hs-accordion-group col-span-full flex flex-col gap-y-4 pt-6 lg:pt-12 xl:pt-15"
      >
        {list?.slice(0, 4)?.map((rslt, i) => (
          <div
            id={`ca25FAQ-${rslt?.label}${i + 1}`}
            className={`hs-accordion ${i < 1 ? 'active' : ''} rounded-xl border border-solid border-white/55 bg-black-900/35 px-4 py-4 hs-accordion-active:border-primary sm:rounded-2xl sm:border-2 sm:px-6 sm:py-6 lg:px-8 lg:py-8 xl:px-9 xl:py-9`}
            key={i}
          >
            <button
              aria-expanded="true"
              className="hs-accordion-toggle inline-flex w-full items-center gap-x-3.5 text-start text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 hs-accordion-active:text-white"
              aria-controls={`ca25FAQ_CollapseGeneral_${i + 1}`}
            >
              <h3 className="inline-flex flex-row items-center justify-start gap-x-3.5 text-base font-medium uppercase hs-accordion-active:underline sm:gap-x-4 sm:text-lg sm:font-semibold lg:text-xl xl:gap-x-6">
                <span className="flex h-7 w-7 shrink-0 flex-col items-center justify-center rounded-md border border-solid border-white bg-transparent hs-accordion-active:border-primary hs-accordion-active:bg-primary sm:h-8 sm:w-8 sm:rounded-lg lg:h-[36px] lg:w-[36px]">
                  <svg
                    className="block size-4.5 transform stroke-white transition-transform duration-300 ease-in-out hs-accordion-active:-rotate-180 lg:size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </span>
                {rslt?.label}
              </h3>
            </button>
            <div
              id={`ca25FAQ_CollapseGeneral_${i + 1}`}
              className={`hs-accordion-content ${i < 1 ? 'active' : 'hidden'} w-full overflow-hidden transition-[height] duration-300`}
              role="region"
              aria-labelledby={`ca25FAQ-${rslt?.label}${i + 1}`}
            >
              <div className="ca25Article_Frmatt block space-y-4 pb-2 pl-[42px] pr-0 pt-3 text-base text-white sm:pb-0 sm:pl-[48px] sm:pr-[45px] sm:pt-3.5 lg:pl-[53px] lg:text-lg xl:pl-[59px] xl:pr-[75px]">
                {rslt?.listQuestions?.slice(0, 4)?.map((inRslt, idx) => (
                  <div
                    id={`ca25AccordionHeading-Nested${rslt?.label}${idx}`}
                    className="hs-accordion active"
                    key={`ca25Accordion-Nested${rslt?.label}${idx}`}
                  >
                    <h4
                      className="hs-accordion-toggle inline-flex w-full items-start gap-x-3 rounded-lg pb-1 text-start text-base font-medium text-white"
                      aria-expanded="true"
                      aria-controls={`ca25AccordionCollapse-Nested${rslt?.label}${idx}`}
                    >
                      <span className="w-3.5 shrink-0 text-center">
                        {idx + 1}.
                      </span>
                      <span>{inRslt?.questions}</span>
                    </h4>
                    <div
                      id={`ca25AccordionCollapse-Nested${rslt?.label}${idx}`}
                      className="w-full overflow-hidden transition-[height] duration-300"
                      role="region"
                      aria-labelledby={`ca25AccordionHeading-Nested${rslt?.label}${idx}`}
                    >
                      <p
                        className="text-balance pl-[27px] text-base font-light text-white/80"
                        dangerouslySetInnerHTML={{ __html: inRslt?.answer }}
                      ></p>
                    </div>
                  </div>
                ))}
                {/* {rslt?.shortDesc} */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FaqCards;
