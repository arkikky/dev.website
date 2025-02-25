import React, { useState, Fragment } from 'react';
import dynamic from 'next/dynamic';
import getConfig from 'next/config';

// @get .config
const { publicRuntimeConfig } = getConfig();

// @lib/controller & helper
import { getFetchUrl, getFetchPaginatedData } from '@lib/controller/API';
import { smoothLeftScroll } from '@lib/helper/Configuration';

// @components
import HeadGraphSeo from '@components/Head';
import Main from '@components/Main';
import Container from '@components/Container';
const PartnerCards = dynamic(() => import('@components/UI/Cards/PartnerCards'));
import BrandPartnerCards from '@components/UI/Cards/BrandPartnerCards';

// @layouts
import MoonPortalBanner from '@layouts/Banner/MoonPortalBanner';

const Partners = ({ mode, collections }) => {
  const [isCollections, setCollections] = useState({
    prevPartners: collections?.prevPartners,
    mediaPartners: collections?.mediaPartners,
    communityPartners: collections?.communityPartners,
  });

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
      {/* @head */}
      <HeadGraphSeo
        title={`Partners`}
        canonicalUrl={`${publicRuntimeConfig?.siteUrl}/partners`}
        otherPage={true}
      />

      {/* @main */}
      <Main className="relative flex flex-col overflow-hidden pb-16 pt-[141px] sm:pb-24 sm:pt-[161px]">
        <Container className={'z-[4] pb-20 sm:pb-28'}>
          <div className="flex flex-col items-center justify-center text-center">
            <h1
              className={`ca25HeadingTitle w-full text-center font-semibold uppercase sm:font-bold ${mode === 'light' ? 'text-black-900' : 'text-white'} mb-4 text-balance sm:mb-7`}
            >
              {'PARTNERS'
                ?.split('')
                ?.map((chr, i) =>
                  ['A'].includes(chr) ? <span key={i}>{chr}</span> : chr
                )}
            </h1>
            <div className="relative mt-5 w-full lg:mt-8">
              {/* @toggle(tabs) */}
              <div className="flex flex-col rounded-2xl border-2 border-solid border-[#333333] bg-transparent px-2 py-2 transition sm:px-4 sm:py-4">
                <nav
                  className={`flex w-full space-x-2 overflow-x-auto scrollbar-hide`}
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
                    PREVIOUS SPONSORS
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
                    MEDIA PARTNERS
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
              <div className="mt-6 flex w-full flex-col lg:mt-8">
                <div
                  id="ca25Tabs-1"
                  role="tabpanel"
                  aria-labelledby="ca25Tabs-Item1"
                >
                  <div className="relative w-full grid-cols-6 gap-x-1 gap-y-0 px-2.5 supports-grid:grid sm:grid-cols-10 sm:gap-x-3 sm:gap-y-0 sm:px-0 lg:grid-cols-10 lg:gap-x-6 lg:gap-y-0">
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
                        <div
                          className="col-span-2 sm:col-span-3 lg:col-span-3"
                          key={i}
                        >
                          <BrandPartnerCards
                            {...rslt}
                            height={120}
                            width={312}
                          />
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
                      <div
                        className="col-span-2 sm:col-span-3 lg:col-span-3"
                        key={i}
                      >
                        <BrandPartnerCards {...rslt} height={120} width={312} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* @banner(footer) */}
        <MoonPortalBanner mode={mode} />
      </Main>
    </>
  );
};

export const getStaticProps = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_URL;
  try {
    const isStoreLayouts = false;
    const [rsPartner, rsMediaPartner, rsCommunityPartners] = await Promise.all([
      getFetchUrl(`${baseUrl}/api/v1/collections/partners?sv=coinfestasia`),
      getFetchPaginatedData(`/ca-25-media-partners`),
      getFetchUrl(
        `${baseUrl}/api/v1/collections/partners/community?sv=coinfestasia`
      ),
    ]);

    return {
      props: {
        mode: 'dark',
        layouts: isStoreLayouts || false,
        collections: {
          prevPartners: rsPartner?.data || null,
          mediaPartners: rsMediaPartner || null,
          communityPartners: rsCommunityPartners?.data || null,
        },
      },
      revalidate: 900,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
export default Partners;
