import React from "react";
import getConfig from "next/config";
import Head from "next/head";
import Image from "next/image";

// @get .config
const { publicRuntimeConfig } = getConfig();

// @components
import Container from "@components/Container";
import AgendaCard from "@components/UI/Card/AgendaCard";
import AgendaModal from "@components/UI/Modal/AgendaModal";

// @layouts
import BannerFooter from "@layouts/Banner/BannerFooter";

const Agenda = () => {
  return (
    <>
      {/* @head */}
      <Head>
        <title>{`Agenda | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta
          name="title"
          content={`Agenda | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta name="description" content={publicRuntimeConfig.siteDesc} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="og:title"
          content={`Agenda | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta
          property="og:description"
          content={publicRuntimeConfig.siteDesc}
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_UPLOAD}/uploads/ca2024_Thumbnails_Share_Link_App_9964b5c353.png`}
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="twitter:title"
          content={`Agenda | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta
          property="twitter:description"
          content={publicRuntimeConfig.siteDesc}
        />
        <meta
          property="twitter:image"
          content={`${process.env.NEXT_PUBLIC_UPLOAD}/uploads/ca2024_Thumbnails_Share_Link_App_9964b5c353.png`}
        />
      </Head>

      {/* @main */}
      <main className="relative pt-[146px]">
        <Container className={"pb-20 sm:pb-0"}>
          <div className="flex flex-col items-start justify-start pr-0">
            <h1 className="font-staraExtraBold text-[32px] uppercase leading-[40px] text-black-900 sm:text-[58px] sm:leading-[74px] lg:text-[80px] lg:leading-[90px] xl:text-[72px] xl:leading-[86px] 2xl:text-[80px] 2xl:leading-[90px]">
              Agenda
            </h1>
            <p className="mt-2 font-bevietnamPro text-xl font-light text-black-900">
              From topical talks to collaborative learning sessions to
              next-level connecting and, of course, straight-up fun — is an
              immersive journey into the issues that are top of mind today with
              an eye towards shaping tomorrow.
            </p>
          </div>
          <div className="relative mt-8 flex flex-col">
            <div className="sticky bottom-auto top-[86px] z-[52] bg-white px-0 py-2 sm:top-[100px] sm:px-4 sm:py-4">
              <div className="flex w-max flex-col rounded-2xl bg-secondary px-2 py-2 transition sm:px-2">
                <nav
                  className="flex w-max overflow-x-auto"
                  aria-label="Tabs"
                  role="tablist"
                >
                  <button
                    type="button"
                    className="active inline-flex w-fill items-center justify-center gap-x-2 whitespace-nowrap rounded-xl bg-secondary px-4 py-3 text-center font-bevietnamPro text-sm font-normal text-white/[0.64] disabled:pointer-events-none disabled:opacity-50 hs-tab-active:bg-white hs-tab-active:text-secondary sm:text-base"
                    id="segment-item-1"
                    data-hs-tab="#segment-1"
                    aria-controls="segment-1"
                    role="tab"
                  >
                    August 22
                  </button>
                  <button
                    type="button"
                    className="inline-flex w-fill items-center justify-center gap-x-2 whitespace-nowrap rounded-xl bg-secondary px-4 py-3 text-center font-bevietnamPro text-sm font-normal text-white/[0.64] disabled:pointer-events-none disabled:opacity-50 hs-tab-active:bg-white hs-tab-active:text-secondary sm:text-base"
                    id="segment-item-2"
                    data-hs-tab="#segment-2"
                    aria-controls="segment-2"
                    role="tab"
                  >
                    August 23
                  </button>
                </nav>
              </div>
            </div>

            <div className="relative flex w-full flex-col">
              <div
                id="segment-1"
                role="tabpanel"
                aria-labelledby="segment-item-1"
              >
                <div className="relative w-full">
                  <div className="sticky bottom-auto top-[158px] z-50 w-full border-b border-[#D6D6D6] bg-white px-4 py-4 sm:top-[194px] sm:px-6 sm:py-6">
                    <h2 className="flex w-full flex-row items-start justify-between text-base sm:text-xl">
                      <span className="flex flex-row items-center justify-start">
                        <svg
                          className="mr-2 h-5 w-5 sm:h-6 sm:w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width={24}
                          height={24}
                          fill={"none"}
                        >
                          <path
                            d="M18.952 8.60657L21.4622 8.45376C19.6629 3.70477 14.497 0.999914 9.4604 2.34474C4.09599 3.77711 0.909631 9.26107 2.34347 14.5935C3.77731 19.926 9.28839 23.0876 14.6528 21.6553C18.6358 20.5917 21.4181 17.2946 22 13.4844"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 8V12L14 14"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        11.00 PM
                      </span>
                      <span className="font-normal">GMT +7</span>
                    </h2>
                  </div>
                  <div className="flex flex-col divide-y divide-[#D6D6D6]">
                    <button
                      id={`btnAgenda`}
                      className="w-full outline-none focus-visible:outline-none"
                      aria-label={` - (Button Modal Agenda)`}
                      aria-labelledby={` - (Button Modal Agenda)`}
                      data-hs-overlay="#mdlAgenda"
                    >
                      <AgendaCard />
                    </button>
                    <button
                      id={`btnAgenda`}
                      className="w-full outline-none focus-visible:outline-none"
                      aria-label={` - (Button Modal Agenda)`}
                      aria-labelledby={` - (Button Modal Agenda)`}
                      data-hs-overlay="#mdlAgenda"
                    >
                      <AgendaCard />
                    </button>
                    <button
                      id={`btnAgenda`}
                      className="w-full outline-none focus-visible:outline-none"
                      aria-label={` - (Button Modal Agenda)`}
                      aria-labelledby={` - (Button Modal Agenda)`}
                      data-hs-overlay="#mdlAgenda"
                    >
                      <AgendaCard />
                    </button>
                  </div>
                </div>
                <div className="relative w-full">
                  <div className="sticky bottom-auto top-[158px] z-50 w-full border-b border-[#D6D6D6] bg-white px-4 py-4 sm:top-[194px] sm:px-6 sm:py-6">
                    <h2 className="flex w-full flex-row items-start justify-between text-base sm:text-xl">
                      <span className="flex flex-row items-center justify-start">
                        <svg
                          className="mr-2 h-5 w-5 sm:h-6 sm:w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width={24}
                          height={24}
                          fill={"none"}
                        >
                          <path
                            d="M18.952 8.60657L21.4622 8.45376C19.6629 3.70477 14.497 0.999914 9.4604 2.34474C4.09599 3.77711 0.909631 9.26107 2.34347 14.5935C3.77731 19.926 9.28839 23.0876 14.6528 21.6553C18.6358 20.5917 21.4181 17.2946 22 13.4844"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 8V12L14 14"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        11.00 PM
                      </span>
                      <span className="font-normal">GMT +7</span>
                    </h2>
                  </div>
                  <div className="flex flex-col divide-y divide-[#D6D6D6]">
                    <button
                      id={`btnAgenda`}
                      className="w-full outline-none focus-visible:outline-none"
                      aria-label={` - (Button Modal Agenda)`}
                      aria-labelledby={` - (Button Modal Agenda)`}
                      data-hs-overlay="#mdlAgenda"
                    >
                      <AgendaCard />
                    </button>
                    <button
                      id={`btnAgenda`}
                      className="w-full outline-none focus-visible:outline-none"
                      aria-label={` - (Button Modal Agenda)`}
                      aria-labelledby={` - (Button Modal Agenda)`}
                      data-hs-overlay="#mdlAgenda"
                    >
                      <AgendaCard />
                    </button>
                    <button
                      id={`btnAgenda`}
                      className="w-full outline-none focus-visible:outline-none"
                      aria-label={` - (Button Modal Agenda)`}
                      aria-labelledby={` - (Button Modal Agenda)`}
                      data-hs-overlay="#mdlAgenda"
                    >
                      <AgendaCard />
                    </button>
                  </div>
                </div>
              </div>
              <div
                id="segment-2"
                className="hidden"
                role="tabpanel"
                aria-labelledby="segment-item-2"
              >
                <div className="relative w-full">
                  <div className="sticky bottom-auto top-[158px] z-50 w-full border-b border-[#D6D6D6] bg-white px-4 py-4 sm:top-[194px] sm:px-6 sm:py-6">
                    <h2 className="flex w-full flex-row items-start justify-between text-base sm:text-xl">
                      <span className="flex flex-row items-center justify-start">
                        <svg
                          className="mr-2 h-5 w-5 sm:h-6 sm:w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width={24}
                          height={24}
                          fill={"none"}
                        >
                          <path
                            d="M18.952 8.60657L21.4622 8.45376C19.6629 3.70477 14.497 0.999914 9.4604 2.34474C4.09599 3.77711 0.909631 9.26107 2.34347 14.5935C3.77731 19.926 9.28839 23.0876 14.6528 21.6553C18.6358 20.5917 21.4181 17.2946 22 13.4844"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 8V12L14 14"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        04.00 PM
                      </span>
                      <span className="font-normal">GMT +7</span>
                    </h2>
                  </div>
                  <div className="flex flex-col divide-y divide-[#D6D6D6]">
                    <button
                      id={`btnAgenda`}
                      className="w-full outline-none focus-visible:outline-none"
                      aria-label={` - (Button Modal Agenda)`}
                      aria-labelledby={` - (Button Modal Agenda)`}
                      data-hs-overlay="#mdlAgenda"
                    >
                      <AgendaCard />
                    </button>
                    <button
                      id={`btnAgenda`}
                      className="w-full outline-none focus-visible:outline-none"
                      aria-label={` - (Button Modal Agenda)`}
                      aria-labelledby={` - (Button Modal Agenda)`}
                      data-hs-overlay="#mdlAgenda"
                    >
                      <AgendaCard />
                    </button>
                    <button
                      id={`btnAgenda`}
                      className="w-full outline-none focus-visible:outline-none"
                      aria-label={` - (Button Modal Agenda)`}
                      aria-labelledby={` - (Button Modal Agenda)`}
                      data-hs-overlay="#mdlAgenda"
                    >
                      <AgendaCard />
                    </button>
                  </div>
                </div>
                <div className="relative w-full">
                  <div className="sticky bottom-auto top-[158px] z-50 w-full border-b border-[#D6D6D6] bg-white px-4 py-4 sm:top-[194px] sm:px-6 sm:py-6">
                    <h2 className="flex w-full flex-row items-start justify-between text-base sm:text-xl">
                      <span className="flex flex-row items-center justify-start">
                        <svg
                          className="mr-2 h-5 w-5 sm:h-6 sm:w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width={24}
                          height={24}
                          fill={"none"}
                        >
                          <path
                            d="M18.952 8.60657L21.4622 8.45376C19.6629 3.70477 14.497 0.999914 9.4604 2.34474C4.09599 3.77711 0.909631 9.26107 2.34347 14.5935C3.77731 19.926 9.28839 23.0876 14.6528 21.6553C18.6358 20.5917 21.4181 17.2946 22 13.4844"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 8V12L14 14"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        08.00 PM
                      </span>
                      <span className="font-normal">GMT +7</span>
                    </h2>
                  </div>
                  <div className="flex flex-col divide-y divide-[#D6D6D6]">
                    <button
                      id={`btnAgenda`}
                      className="w-full outline-none focus-visible:outline-none"
                      aria-label={` - (Button Modal Agenda)`}
                      aria-labelledby={` - (Button Modal Agenda)`}
                      data-hs-overlay="#mdlAgenda"
                    >
                      <AgendaCard />
                    </button>
                    <button
                      id={`btnAgenda`}
                      className="w-full outline-none focus-visible:outline-none"
                      aria-label={` - (Button Modal Agenda)`}
                      aria-labelledby={` - (Button Modal Agenda)`}
                      data-hs-overlay="#mdlAgenda"
                    >
                      <AgendaCard />
                    </button>
                    <button
                      id={`btnAgenda`}
                      className="w-full outline-none focus-visible:outline-none"
                      aria-label={` - (Button Modal Agenda)`}
                      aria-labelledby={` - (Button Modal Agenda)`}
                      data-hs-overlay="#mdlAgenda"
                    >
                      <AgendaCard />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* @banner-footer */}
        <BannerFooter />
      </main>

      {/* @agenda-modal */}
      <AgendaModal />
    </>
  );
};

export default Agenda;
