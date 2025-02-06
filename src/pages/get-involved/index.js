import React from 'react';
import dynamic from 'next/dynamic';

// @components
import HeadGraphSeo from '@components/Head';
const GetInvolvedFormCards = dynamic(
  () => import('@components/UI/Cards/GetInvolvedFormCards'),
  {
    ssr: false,
  }
);

// @layouts
import PartnershipLayouts from '@layouts/PartnershipLayouts';

const GetInvolved = ({ mode, collections }) => {
  return (
    <>
      {/* @head */}
      <HeadGraphSeo title={`Get Involved`} otherPage={true} />

      {/* @main */}
      <PartnershipLayouts
        title={'TAKE PART IN THE LARGEST CRYPTO FESTIVAL IN THE WORLD'
          ?.split(' ')
          .map((w, i) =>
            w === 'PART'
              ? w
                  .split('')
                  .map((chr, chrI) =>
                    chr === 'A' ? <span key={`${i}-${chrI}`}>{chr}</span> : chr
                  )
              : w
                  .split('')
                  .map((chr, chrI) =>
                    ['E', 'Y', 'O'].includes(chr) ? (
                      <span key={`${i}-${chrI}`}>{chr}</span>
                    ) : (
                      chr
                    )
                  )
          )
          .reduce(
            (acc, curr, i) => (i === 0 ? curr : [...acc, ' ', ...curr]),
            []
          )}
        mode={mode}
      >
        <div className="ca25FormGetInvolved-Group flex grid-cols-1 flex-col items-start justify-start gap-x-4 gap-y-4 overflow-x-hidden supports-grid:grid sm:grid-cols-2 sm:gap-x-5 sm:gap-y-5 lg:grid-cols-2 xl:grid-cols-1">
          {collections?.map((rslt, i) => (
            <GetInvolvedFormCards
              keyID={`ca25GetInvolved${i}`}
              {...rslt}
              key={`ca25GetInvolved${i}`}
            />
          ))}
        </div>
      </PartnershipLayouts>
    </>
  );
};

GetInvolved.getLayout = (page, { pageProps }) => {
  const { mode } = pageProps;
  return page;
};
export const getStaticProps = async () => {
  const rsGetInvolved = {
    data: [
      {
        url: '/get-involved/sponsorship',
        title: 'Sponsor',
        shortDesc: `Fill in the form to receive Coinfest Asia 2025 Prospectus and lock in the best deals before anyone else.`,
        labelBtn: `Request Prospectus`,
        comingSoon: false,
        slotsFull: false,
      },
      {
        url: '/get-involved/speakers',
        title: 'Speak',
        shortDesc: `Show and tell your impact-driven ideas, not just theories, on experiential stages.`,
        labelBtn: `Apply Now`,
        comingSoon: false,
        slotsFull: false,
      },
      {
        url: '/get-involved/partner-as-media',
        title: 'Partner as Media',
        shortDesc: `Become the main source on the latest Web3 insights and updates in Asia.`,
        labelBtn: `Apply Now`,
        comingSoon: false,
        slotsFull: false,
      },
      {
        url: '/get-involved/become-an-affiliate',
        title: 'Become an Affiliate',
        shortDesc: `Earn rewards and grow your influence by promoting the world's largest crypto festival.`,
        labelBtn: `Apply Now`,
        comingSoon: false,
        slotsFull: false,
      },
      {
        url: '/get-involved/partner-as-community',
        title: 'Partner as Community',
        shortDesc: `Connect with leading Web3 industry players, aspiring startups, and communities from 90+ countries.`,
        labelBtn: `Apply Now`,
        comingSoon: false,
        slotsFull: false,
      },
    ],
  };

  try {
    return {
      props: {
        mode: 'light',
        collections: rsGetInvolved?.data || [],
      },
      revalidate: 900,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
export default GetInvolved;
