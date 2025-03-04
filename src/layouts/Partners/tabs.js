import React, { Fragment } from 'react';
import dynamic from 'next/dynamic';

// @lib
import { smoothLeftScroll } from '@lib/helper/Configuration';

// @components
const PartnerCards = dynamic(() => import('@components/UI/Cards/PartnerCards'));
import BrandPartnerCards from '@components/UI/Cards/BrandPartnerCards';

const PartnersTabs = ({
  isCollections = {
    prevPartners: [],
    mediaPartners: [],
    communityPartners: [],
  },
}) => {
  // @auto-scroll
  const handleTabAutoScroll = (e) => {
    const btnAttendeeTabs = e?.currentTarget;
    const containerTabs = btnAttendeeTabs?.parentElement;

    if (btnAttendeeTabs && containerTabs) {
      const targetScroll =
        btnAttendeeTabs.offsetLeft -
        (containerTabs.clientWidth - btnAttendeeTabs?.clientWidth) / 2;
      smoothLeftScroll(containerTabs, targetScroll);
    }
  };

  return (
    <>
      {/* @toggle(tabs) */}
      <div className="relative z-20 mx-4 flex flex-col rounded-2xl border-2 border-solid border-[#333333]/10 bg-black-900/[0.16] px-2 py-2 transition sm:mx-0 sm:px-4 sm:py-4">
        <nav
          className={`flex w-full space-x-2 overflow-x-auto scrollbar-hide sm:space-x-4`}
          aria-label="Tabs"
          role="tablist"
        >
          <button
            id="ca25Tabs-Item1"
            className="ca25Partner_Tabs active"
            type="button"
            role="tab"
            aria-controls="ca25Tabs-1"
            data-hs-tab="#ca25Tabs-1"
            onClick={(e) => {
              e.preventDefault();
              handleTabAutoScroll(e);
            }}
          >
            {`PREVIOUS SPONSORS`}
          </button>
          <button
            id="ca25Tabs-Item2"
            className="ca25Partner_Tabs"
            type="button"
            role="tab"
            aria-controls="ca25Tabs-2"
            data-hs-tab="#ca25Tabs-2"
            onClick={(e) => {
              e.preventDefault();
              handleTabAutoScroll(e);
            }}
          >
            {`MEDIA PARTNERS`}
          </button>
          <button
            id="ca25Tabs-Item3"
            className="ca25Partner_Tabs"
            type="button"
            role="tab"
            aria-controls="ca25Tabs-3"
            data-hs-tab="#ca25Tabs-3"
            onClick={(e) => {
              e.preventDefault();
              handleTabAutoScroll(e);
            }}
          >
            COMMUNITIES
          </button>
        </nav>
      </div>

      {/* @main(tabs) */}
      <div className="relative z-20 mt-6 flex w-full flex-col lg:mt-8">
        <div id="ca25Tabs-1" role="tabpanel" aria-labelledby="ca25Tabs-Item1">
          <div className="relative w-full grid-cols-6 gap-x-1 gap-y-0 px-0 supports-grid:grid sm:grid-cols-10 sm:gap-x-3 sm:gap-y-0 lg:grid-cols-10 lg:gap-x-6 lg:gap-y-0">
            {isCollections?.prevPartners?.map((rslt, i) => (
              <Fragment key={i}>
                <PartnerCards {...rslt} />
              </Fragment>
            ))}
          </div>
        </div>
        {isCollections?.mediaPartners ? (
          <div
            id="ca25Tabs-2"
            className="hidden"
            role="tabpanel"
            aria-labelledby="ca25Tabs-Item2"
          >
            <div className="relative min-w-full grid-cols-6 gap-x-2 gap-y-2 supports-grid:grid sm:grid-cols-12 lg:grid-cols-12">
              {isCollections?.mediaPartners?.map((rslt, i) => (
                <div className="col-span-2 sm:col-span-3 lg:col-span-3" key={i}>
                  <BrandPartnerCards {...rslt} height={120} width={312} />
                </div>
              ))}
            </div>
          </div>
        ) : null}
        <div
          id="ca25Tabs-3"
          className="hidden"
          role="tabpanel"
          aria-labelledby="ca25Tabs-Item3"
        >
          <div className="relative min-w-full grid-cols-6 gap-x-2 gap-y-2 supports-grid:grid sm:grid-cols-12 lg:grid-cols-12">
            {isCollections?.communityPartners?.map((rslt, i) => (
              <div className="col-span-2 sm:col-span-3 lg:col-span-3" key={i}>
                <BrandPartnerCards {...rslt} height={120} width={312} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnersTabs;
