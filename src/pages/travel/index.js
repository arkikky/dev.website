import React from 'react';
import getConfig from 'next/config';

// @get .config
const { publicRuntimeConfig } = getConfig();

// @lib
import { getFetchUrl } from '@lib/controller/API';

// @components
import HeadGraphSeo from '@components/Head';
import Main from '@components/Main';
import Container from '@components/Container';
import TravelBoardCards from '@components/UI/Cards/TravelBoardCards';
import AccommodationCards from '@components/UI/Cards/AccommodationsCards';
import StarryBackground from '@components/UI/Background/StarryBackground';

// @layouts
import MoonPortalBanner from '@layouts/Banner/MoonPortalBanner';

const Travel = ({ mode, accomodation }) => {
  return (
    <>
      {/* @head */}
      <HeadGraphSeo
        title={`Travel Plans`}
        canonicalUrl={`${publicRuntimeConfig?.siteUrl}/travel`}
        otherPage={true}
      />

      {/* @main */}
      <Main className="relative flex flex-col overflow-hidden pb-16 pt-[141px] sm:pb-24 sm:pt-[161px]">
        <div className="w-full max-w-full grid-cols-1 gap-y-6 supports-grid:grid sm:gap-y-0 lg:grid-cols-2">
          <TravelBoardCards
            images={'/assets/images/travel/ca25Travel-Staynex.png'}
            title={'Travel partner'}
            shortDesc={`Reinvent your travel experience with the Web3 travel subscription membership.`}
            btnLabel={'Learn More'}
          />
          <TravelBoardCards
            images={'/assets/images/travel/ca25Travel-Travala.png'}
            title={'Book Your Itinerary'}
            shortDesc={`Arrange your itinerary and book the right airline and accommodation through our partners’ site`}
            btnLabel={'Claim $50 Travel Credits'}
          />
        </div>
        <div className="pb-20 pt-17">
          <div className="mx-auto block w-max text-center">
            <h2
              className={`ca25HeadingTitle_M w-full text-center font-semibold uppercase sm:font-bold ${mode === 'light' ? 'text-black-900' : 'text-white'} mb-2 text-balance sm:mb-4`}
            >
              {`BOOK YOU STAY`
                ?.split('')
                ?.map((chr, i) =>
                  ['E', 'O', 'A', '0'].includes(chr) ? (
                    <span key={i}>{chr}</span>
                  ) : (
                    chr
                  )
                )}
            </h2>
            <p className="mx-auto mt-2 w-max text-base font-light text-gray-300 sm:mt-3.5 sm:text-xl">
              {`Get special offers by booking a room from our partners!`}
            </p>
          </div>
          <Container>
            <div className="relative mt-4 grid-cols-4 gap-x-2 gap-y-2 supports-grid:grid sm:mt-11 sm:grid-cols-12 sm:gap-x-4 sm:gap-y-4 lg:grid-cols-12">
              {accomodation?.data?.map((gtRslt, i) => (
                <div
                  className="col-span-2 sm:col-span-6 lg:col-span-4 xl:col-span-3"
                  key={i}
                >
                  <AccommodationCards
                    url={
                      gtRslt.attributes.url !== '' ? gtRslt.attributes.url : ''
                    }
                    images={
                      'https://hub.coinvestasi.com' +
                      gtRslt.attributes.thumbnail.data.attributes.url
                    }
                    labelBrand={
                      'https://hub.coinvestasi.com' +
                      gtRslt.attributes.logo.data.attributes.url
                    }
                    diskon={gtRslt.attributes.label}
                  />
                </div>
              ))}
              {/* <Link
                className="col-span-2 flex flex-col items-center justify-center bg-[url('/assets/images/accomodations/ca2024TravelSwap.jpg')] bg-cover bg-center sm:col-span-6 lg:col-span-8 xl:col-span-3"
                href="https://travelswap.xyz/partner/coinfest"
                target="_blank"
              >
                <span className="text-center font-bevietnamPro text-xs font-normal text-white sm:text-base">
                  See more deals at
                </span>
                <Image
                  className="mt-2 w-5/6 sm:mt-6 lg:w-2/3 xl:w-5/6"
                  src={'/assets/images/accomodations/ca2024TravelSwapLogo.svg'}
                  alt={`Coinfest Asia 2024 (Travel Swap - Accomodations)`}
                  height={77}
                  width={200}
                  quality="95"
                />
              </Link> */}
            </div>
          </Container>
        </div>
        <div className="mb-16 w-full max-w-full grid-cols-1 gap-y-6 supports-grid:grid sm:gap-y-0 lg:grid-cols-2">
          <TravelBoardCards
            images={'/assets/images/travel/ca25Travel-Beyond.png'}
            title={'Concierge Service'}
            shortDesc={`Elevate your Coinfest Asia 2024 experience with BEYOND, our official concierge service partner.`}
            btnLabel={'Get Special Offers'}
          />
          <TravelBoardCards
            images={'/assets/images/travel/ca25Travel-Dent.png'}
            title={'E-SIM'}
            shortDesc={`No hustle bustle for your internet connection and get your mobile data ready with our eSIM partner, DENT. The DENT App is powered by DENTNet, DENT's Layer 1 blockchain.`}
            btnLabel={'Get Free 10GB Data'}
          />
        </div>

        {/* @banner(footer) */}
        <MoonPortalBanner mode={mode} />
      </Main>
    </>
  );
};

export const getStaticProps = async () => {
  const baseUrl = process.env.GENERAL_BASEAPI_URL;
  try {
    const isStoreLayouts = false;
    const [rsAccomodations] = await Promise.all([
      getFetchUrl(
        `${baseUrl}/ca-24-accomodations?sort=rank:asc&populate=*&pagination[pageSize]=100`
      ),
    ]);

    return {
      props: {
        mode: 'dark',
        layouts: isStoreLayouts || false,
        accomodation: rsAccomodations || [],
      },
      revalidate: 900,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
export default Travel;
