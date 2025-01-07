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
        shortDesc: `Demonstrate your innovations and solutions in a seamless & measurable manner.`,
        labelBtn: `Send an Inquiry`,
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
        url: '/',
        title: 'Co-Host Program',
        shortDesc: `Strategically position your brand to meet attendees that align with your goals.`,
        labelBtn: `Send an Inquiry`,
        comingSoon: true,
        slotsFull: false,
      },
      {
        url: '/',
        title: 'Partner as Media',
        shortDesc: `Become the main source on the latest Web3 insights and updates in Asia.`,
        labelBtn: `Apply Now`,
        comingSoon: true,
        slotsFull: false,
      },
      {
        url: '/get-involved/interest',
        title: 'Become an Affiliator',
        shortDesc: `Earn rewards and grow your influence by promoting the world's largest crypto festival.`,
        labelBtn: `Apply Now`,
        comingSoon: true,
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
