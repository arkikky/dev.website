import React, { useState } from "react";
import Link from "next/link";

// @components
import Container from "@components/Container";
import BrandSponsor from "@components/UI/Card/BrandSponsor";

const Partner = ({
  isLayoutShow = false,
  isPage = false,
  dataSponsor,
  dataMediaPartner,
  dataComunitiesPartner,
  dataStrategicPartner,
}) => {
  const [isSponsorPartner, setSponsorPartner] = useState(dataSponsor);
  const isMediaPartner = [].concat(
    ...dataMediaPartner.page1.data,
    ...dataMediaPartner.page2.data,
  );
  const isComunitiesPartnerArr = [].concat(
    ...dataComunitiesPartner.page1.data,
    ...dataComunitiesPartner.page2.data,
  );
  const [isComunitiesPartner, setComunitiesPartner] = useState(
    isComunitiesPartnerArr,
  );
  const [isStrategicPartner, setStrategicPartner] =
    useState(dataStrategicPartner);

  return (
    <>
      <Container>
        <section
          className={`relative flex flex-col items-center justify-center overflow-hidden ${isPage === true && "mb-20 sm:mb-0 xl:mb-14"}`}
        >
          <div className="ca2024PartnersTitle flex flex-col items-start justify-start sm:items-center sm:justify-center sm:pr-0">
            <h2 className="font-staraExtraBold text-[32px] uppercase leading-[35px] text-black-900 sm:text-[58px] sm:leading-[74px] lg:text-[80px] lg:leading-[90px]">
              Partners
            </h2>
          </div>

          {/* @content */}
          <div className="relative mt-8 flex w-full flex-col sm:mt-11">
            <div className="flex w-full flex-col rounded-3xl bg-[#ECF3FF] px-4 py-4 transition">
              <nav
                className="flex w-full space-x-2 overflow-x-auto"
                aria-label="Tabs"
                role="tablist"
              >
                <button
                  type="button"
                  className="active inline-flex w-fill min-w-[189px] items-center justify-center gap-x-2 whitespace-nowrap rounded-xl bg-transparent px-4 py-6 text-center font-bevietnamPro text-base font-medium text-[#3B5683] disabled:pointer-events-none disabled:opacity-50 hs-tab-active:bg-secondary hs-tab-active:text-white sm:rounded-2xl"
                  id="segment-item-1"
                  data-hs-tab="#segment-1"
                  aria-controls="segment-1"
                  role="tab"
                >
                  SPONSORS
                </button>
                <button
                  type="button"
                  className="inline-flex w-fill min-w-[189px] items-center justify-center gap-x-2 whitespace-nowrap rounded-xl bg-transparent px-4 py-6 text-center font-bevietnamPro text-base font-medium text-[#3B5683] disabled:pointer-events-none disabled:opacity-50 hs-tab-active:bg-secondary hs-tab-active:text-white sm:rounded-2xl"
                  id="segment-item-2"
                  data-hs-tab="#segment-2"
                  aria-controls="segment-2"
                  role="tab"
                >
                  MEDIA PARTNERS
                </button>
                <button
                  type="button"
                  className="inline-flex w-fill min-w-[189px] items-center justify-center gap-x-2 whitespace-nowrap rounded-xl bg-transparent px-4 py-6 text-center font-bevietnamPro text-base font-medium text-[#3B5683] disabled:pointer-events-none disabled:opacity-50 hs-tab-active:bg-secondary hs-tab-active:text-white sm:rounded-2xl"
                  id="segment-item-3"
                  data-hs-tab="#segment-3"
                  aria-controls="segment-3"
                  role="tab"
                >
                  COMMUNITIES
                </button>
                <button
                  type="button"
                  className="inline-flex w-fill min-w-[189px] items-center justify-center gap-x-2 whitespace-nowrap rounded-xl bg-transparent px-4 py-6 text-center font-bevietnamPro text-base font-medium text-[#3B5683] disabled:pointer-events-none disabled:opacity-50 hs-tab-active:bg-secondary hs-tab-active:text-white sm:rounded-2xl"
                  id="segment-item-4"
                  data-hs-tab="#segment-4"
                  aria-controls="segment-4"
                  role="tab"
                >
                  STRATEGIC
                </button>
              </nav>
            </div>
          </div>

          <div className="mt-6 flex w-full flex-col sm:mt-7 lg:mt-11">
            <div
              id="segment-1"
              role="tabpanel"
              aria-labelledby="segment-item-1"
            >
              {isSponsorPartner && (
                <div className="relative min-w-full grid-cols-4 gap-x-2 gap-y-2 supports-grid:grid sm:grid-cols-12 lg:grid-cols-12 lg:gap-x-4 lg:gap-y-4">
                  {isSponsorPartner.data?.map((gtRslt, i) => (
                    <div
                      className="col-span-2 sm:col-span-4 lg:col-span-4"
                      key={i}
                    >
                      <BrandSponsor
                        {...gtRslt}
                        vip={true}
                        height={442}
                        width={640}
                      />
                    </div>
                  ))}
                  {/* {isLayoutShow === true && (
                    <div className="col-span-2 sm:col-span-4 lg:col-span-4">
                      <Link
                        className="flex h-[104px] flex-col items-center justify-center rounded-[8px] border border-solid border-secondary px-0 grayscale-0 transition duration-300 ease-in-out sm:h-[146px] sm:rounded-[20px] lg:h-[265px]"
                        href="/partners"
                      >
                        <span className="font-bevietnamPro text-xs font-bold uppercase text-black-900 sm:text-base">
                          AND <span className="text-secondary">MANY MORE</span>
                        </span>
                      </Link>
                    </div>
                  )} */}
                </div>
              )}
            </div>
            <div
              id="segment-2"
              className="hidden"
              role="tabpanel"
              aria-labelledby="segment-item-2"
            >
              {isMediaPartner && (
                <div className="relative min-w-full grid-cols-4 gap-x-2 gap-y-2 supports-grid:grid sm:grid-cols-12 lg:grid-cols-12">
                  {isMediaPartner?.map((gtRslt, i) => (
                    <div
                      className="col-span-2 sm:col-span-4 lg:col-span-3"
                      key={i}
                    >
                      <BrandSponsor {...gtRslt} height={442} width={640} />
                    </div>
                  ))}
                  {isLayoutShow === true && (
                    <div className="col-span-2 sm:col-span-4 lg:col-span-3">
                      <Link
                        className="flex h-[99px] flex-col items-center justify-center rounded-[8px] border border-solid border-secondary px-0 grayscale-0 transition duration-300 ease-in-out sm:h-[138px] sm:rounded-[20px] lg:h-[190px]"
                        href="/partners"
                      >
                        <span className="font-bevietnamPro text-xs font-bold uppercase text-black-900 sm:text-base">
                          AND <span className="text-secondary">MANY MORE</span>
                        </span>
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div
              id="segment-3"
              className="hidden"
              role="tabpanel"
              aria-labelledby="segment-item-3"
            >
              {isComunitiesPartner && (
                <div className="relative min-w-full grid-cols-4 gap-x-2 gap-y-2 supports-grid:grid sm:grid-cols-12 lg:grid-cols-10">
                  {isComunitiesPartner?.map((gtRslt, i) => (
                    <div
                      className="col-span-2 sm:col-span-4 lg:col-span-2"
                      key={i}
                    >
                      <BrandSponsor {...gtRslt} height={442} width={640} />
                    </div>
                  ))}
                  {isLayoutShow === true && (
                    <div className="col-span-2 sm:col-span-4 lg:col-span-2">
                      <Link
                        className="flex h-[99px] flex-col items-center justify-center rounded-[8px] border border-solid border-secondary px-0 grayscale-0 transition duration-300 ease-in-out sm:h-[138px] sm:rounded-[20px] lg:h-[190px]"
                        href="/partners"
                      >
                        <span className="font-bevietnamPro text-xs font-bold uppercase text-black-900 sm:text-base">
                          AND <span className="text-secondary">MANY MORE</span>
                        </span>
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div
              id="segment-4"
              className="hidden"
              role="tabpanel"
              aria-labelledby="segment-item-4"
            >
              {isStrategicPartner && (
                <div className="relative min-w-full grid-cols-4 gap-x-2 gap-y-2 supports-grid:grid sm:grid-cols-12 lg:grid-cols-12">
                  {isStrategicPartner.data?.map((gtRslt, i) => (
                    <div
                      className="col-span-2 sm:col-span-4 lg:col-span-3"
                      key={i}
                    >
                      <BrandSponsor {...gtRslt} height={442} width={640} />
                    </div>
                  ))}
                  {isLayoutShow === true && (
                    <div className="col-span-2 sm:col-span-4 lg:col-span-3">
                      <Link
                        className="flex h-[99px] flex-col items-center justify-center rounded-[8px] border border-solid border-secondary px-0 grayscale-0 transition duration-300 ease-in-out sm:h-[138px] sm:rounded-[20px] lg:h-[190px]"
                        href="/partners"
                      >
                        <span className="font-bevietnamPro text-xs font-bold uppercase text-black-900 sm:text-base">
                          AND <span className="text-secondary">MANY MORE</span>
                        </span>
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Partner;
