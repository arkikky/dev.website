import React from 'react';
import getConfig from 'next/config';

// @get .config
const { publicRuntimeConfig } = getConfig();

// @lib
import { getFetchUrl, getFetchPaginatedData } from '@lib/controller/API';

// @components
import HeadGraphSeo from '@components/Head';
import Main from '@components/Main';
import Container from '@components/Container';

// @layouts
import PartnersTabs from '@layouts/Partners/tabs';
import MoonPortalBanner from '@layouts/Banner/MoonPortalBanner';

const Partners = ({ mode, collections }) => {
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
        <Container className={'z-[4] px-0 pb-20 sm:pb-28'}>
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
              <PartnersTabs
                isCollections={{
                  prevPartners: collections?.prevPartners,
                  mediaPartners: collections?.mediaPartners,
                  communityPartners: collections?.communityPartners,
                }}
              />
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
      getFetchPaginatedData(`/ca-25-communities`),
    ]);

    return {
      props: {
        mode: 'dark',
        layouts: isStoreLayouts || false,
        collections: {
          prevPartners: rsPartner?.data || null,
          mediaPartners: rsMediaPartner || null,
          communityPartners: rsCommunityPartners || null,
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
