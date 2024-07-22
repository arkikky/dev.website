import React from "react";
import Image from "next/image";

const AgendaModal = () => {
  const isAgendaCard = (name = "Amanda Cassat") => {
    return (
      <>
        <div className="flex flex-col items-center gap-x-12 lg:flex-row">
          <div className="relative mr-auto h-auto w-full min-w-full overflow-hidden rounded-[32px] bg-gray-300 sm:h-[446px] sm:w-[376px] sm:min-w-[376px] lg:mx-auto">
            <Image
              className="relative z-[2] mr-auto h-full w-full object-cover lg:mx-auto"
              src="/assets/images/agenda/ca2024AgendaExmaple_YukiKamimoto.png"
              alt="Coinfest Asia 2024 (Background General Line)"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              height={892}
              width={752}
              quality="87"
            />

            {/* @backdrop (cover) */}
            <div
              className={`ca2024CvrBgAgenda ca2024CvrBgAgendaGeneral absolute inset-x-0 inset-y-0 z-px`}
            ></div>
          </div>
          <div className="mt-4 w-fill pb-0 sm:mt-6 lg:mt-0 lg:pb-[88px]">
            <div>
              <div className="flex flex-col items-start">
                <h3 className="font-bevietnamPro text-base font-semibold text-black-900 sm:text-xl">
                  {name}
                </h3>
                <span className="mt-1 font-bevietnamPro text-base font-light text-[#9C9C9C] sm:mt-2 sm:text-xl">
                  Founder/CEO at Serotonin
                </span>
              </div>
              <div className="mt-4 font-bevietnamPro text-base font-light text-[#696666] sm:text-xl">
                <p>
                  Meet Amanda Cassatt, former CMO of ConsenSys, now founder of
                  Serotonin. With her pioneering role in shaping web3 narratives
                  and authoring the first web3 marketing book, Amanda is the
                  web3 marketing maverick.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {/* @modal (agenda) */}
      <div
        id="mdlAgenda"
        className="hs-overlay fixed left-0 top-0 z-[9999] hidden h-full w-full overflow-y-auto overflow-x-hidden bg-black-900/[0.33] opacity-0 transition-all [--body-scroll:false] hs-overlay-open:opacity-100 hs-overlay-open:duration-300"
        data-hs-overlay-backdrop-container="#bckdrpModalActve"
      >
        <div className="relative bottom-0 top-auto opacity-0 transition-all duration-300 ease-out hs-overlay-open:mt-[114px] hs-overlay-open:opacity-100 sm:max-w-full sm:px-0 lg:absolute xl:relative">
          <div className="relative flex w-full flex-col items-start justify-start rounded-t-[20px] bg-white sm:rounded-t-[48px]">
            <button
              className="hs-dropdown-toggle absolute bottom-auto left-auto right-4 sm:right-12 top-4 sm:top-7 outline-none"
              aria-label="mdlAgenda"
              aria-labelledby="mdlAgenda"
              data-hs-overlay="#mdlAgenda"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                  fill="currentColor"
                />
              </svg>
            </button>

            <div className="flex w-full flex-col px-4 pt-12 sm:px-12 sm:pt-[80px]">
              <div className="flex flex-col items-start justify-between lg:flex-row">
                <div className="flex w-full max-w-full flex-col items-start justify-start lg:max-w-[495px] xl:max-w-[820px]">
                  <span className="ca2024BgOverflayBlue inline-flex w-max flex-row items-center justify-center rounded-full bg-secondary px-2.5 py-1 font-bevietnamPro text-sm font-light text-white">
                    Panel Discussion
                  </span>
                  <h2 className="font-figtree mt-4 text-2xl font-semibold capitalize text-black-900 sm:text-[34px] sm:leading-[44px] xl:text-[40px] xl:leading-[54px]">
                    Breaking Bank: How Digital Assets are Disrupting Traditional
                    Banking Models
                  </h2>
                  <p className="mt-4 px-0 font-bevietnamPro text-base font-light text-black-900">
                    1:00 PM - 2:30 PM
                  </p>
                </div>
                <div className="relative mt-4 flex w-full max-w-full flex-col sm:mt-6 lg:mt-0 lg:max-w-[327px] xl:max-w-[372px]">
                  <div className="flex flex-col">
                    <span className="font-bevietnamPro text-base font-light text-[#5E6577]">
                      Location
                    </span>
                    <p className="mt-1.5 font-bevietnamPro text-base font-light text-secondary">
                      Oasis Stage
                    </p>
                  </div>
                  <div className="mt-6 hidden h-[85px] w-full lg:flex">
                    <Image
                      className="mx-auto h-full w-full object-cover"
                      src="/assets/images/agenda/label/ca2024AgendaLabel_General.jpg"
                      alt="Coinfest Asia 2024 (Agenda Label Modal)"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                      height={128}
                      width={558}
                      quality="87"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 font-bevietnamPro text-xl font-light text-[#5E6577]">
                <p>
                  Intense feelings are at the center of contemporary
                  experiential and immersive work. Experiences that were once
                  rare have become more and more accessible, so what do
                  audiences expect today? How do you make an experience that's
                  still felt weeks later? Has the bar for amazement gone up, or
                  is the goal something else--something deeper? Meet diverse
                  creatives who are exploring the new sensorium of extreme
                  feelings.
                </p>
              </div>

              <div className="relative flex w-full flex-col">
                <nav
                  className="mt-10 flex w-full flex-row space-x-2 overflow-x-auto rounded-[24px] bg-[#EEEEEE] px-2 py-2"
                  aria-label="Tabs"
                  role="tablist"
                >
                  <div className="flex w-max flex-row  items-center rounded-2xl bg-[#DFDFDF] px-2 py-2 transition sm:px-2">
                    <span className="inline-flex items-center justify-center whitespace-nowrap rounded-xl bg-[#DFDFDF] px-4 py-3 text-center font-bevietnamPro text-sm font-medium text-[#646464] sm:text-base">
                      Speakers
                    </span>
                    <span class="mr-2 text-base font-light text-[#646464] sm:mr-4">
                      |
                    </span>
                    <div className="flex w-full">
                      <button
                        type="button"
                        className="inline-flex w-fill items-center justify-center gap-x-2 whitespace-nowrap rounded-xl bg-transparent px-4 py-3 text-center font-bevietnamPro text-sm font-normal text-[#646464] disabled:pointer-events-none disabled:opacity-50 hs-tab-active:bg-white hs-tab-active:text-secondary sm:text-base"
                        id="ca2024SegmentModalTabs-item-1"
                        data-hs-tab="#ca2024SegmentModalTabs-1"
                        aria-controls="ca2024SegmentModalTabs-1"
                        role="tab"
                      >
                        Yat Siu
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-fill items-center justify-center gap-x-2 whitespace-nowrap rounded-xl bg-transparent px-4 py-3 text-center font-bevietnamPro text-sm font-normal text-[#646464] disabled:pointer-events-none disabled:opacity-50 hs-tab-active:bg-white hs-tab-active:text-secondary sm:text-base"
                        id="ca2024SegmentModalTabs-item-2"
                        data-hs-tab="#ca2024SegmentModalTabs-2"
                        aria-controls="ca2024SegmentModalTabs-2"
                        role="tab"
                      >
                        Yuki Kamimoto
                      </button>
                    </div>
                  </div>
                  <div className="flex w-max flex-row  items-center rounded-2xl bg-[#DFDFDF] px-2 py-2 transition sm:px-2">
                    <span className="inline-flex items-center justify-center whitespace-nowrap rounded-xl bg-[#DFDFDF] px-4 py-3 text-center font-bevietnamPro text-sm font-medium text-[#646464] sm:text-base">
                      Moderator
                    </span>
                    <span class="mr-2 text-base font-light text-[#646464] sm:mr-4">
                      |
                    </span>
                    <div className="flex w-full">
                      <button
                        type="button"
                        className="active inline-flex w-fill items-center justify-center gap-x-2 whitespace-nowrap rounded-xl bg-transparent px-4 py-3 text-center font-bevietnamPro text-sm font-normal text-[#646464] disabled:pointer-events-none disabled:opacity-50 hs-tab-active:bg-white hs-tab-active:text-secondary sm:text-base"
                        id="ca2024SegmentModalTabs-item-3"
                        data-hs-tab="#ca2024SegmentModalTabs-3"
                        aria-controls="ca2024SegmentModalTabs-3"
                        role="tab"
                      >
                        Amanda Cassat
                      </button>
                      <button
                        type="button"
                        className="inline-flex w-fill items-center justify-center gap-x-2 whitespace-nowrap rounded-xl bg-transparent px-4 py-3 text-center font-bevietnamPro text-sm font-normal text-[#646464] disabled:pointer-events-none disabled:opacity-50 hs-tab-active:bg-white hs-tab-active:text-secondary sm:text-base"
                        id="ca2024SegmentModalTabs-item-4"
                        data-hs-tab="#ca2024SegmentModalTabs-4"
                        aria-controls="ca2024SegmentModalTabs-4"
                        role="tab"
                      >
                        Amanda Cassatsss
                      </button>
                    </div>
                  </div>
                </nav>
              </div>

              <div className="mt-6 flex w-full flex-col">
                <div
                  id="ca2024SegmentModalTabs-1"
                  className="hidden"
                  role="tabpanel"
                  aria-labelledby="ca2024SegmentModalTabs-item-1"
                >
                  {isAgendaCard("Yat Siu")}
                </div>
                <div
                  id="ca2024SegmentModalTabs-2"
                  className="hidden"
                  role="tabpanel"
                  aria-labelledby="ca2024SegmentModalTabs-item-2"
                >
                  {isAgendaCard("Yuki Kamimoto")}
                </div>
                <div
                  id="ca2024SegmentModalTabs-3"
                  role="tabpanel"
                  aria-labelledby="ca2024SegmentModalTabs-item-3"
                >
                  {isAgendaCard()}
                </div>
                <div
                  id="ca2024SegmentModalTabs-4"
                  className="hidden"
                  role="tabpanel"
                  aria-labelledby="ca2024SegmentModalTabs-item-4"
                >
                  {isAgendaCard()}
                </div>
              </div>
            </div>
            <div className="bottom-0 z-[15] mt-8 block h-[78px] w-full lg:absolute lg:mt-0">
              <Image
                className="mx-auto h-full w-full object-cover object-center"
                src="/assets/images/backdrop/line/ca2024GeneralLine.png"
                alt="Coinfest Asia 2024 (Background General Line)"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                height={132}
                width={2160}
                quality="87"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgendaModal;
