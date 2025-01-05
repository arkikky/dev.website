import React from 'react';
import Link from 'next/link';

// @components
import HeadGraphSeo from '@components/Head';

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
        <div className="flex grid-cols-1 flex-col items-start justify-start gap-x-4 gap-y-4 supports-grid:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-6 lg:grid-cols-2 xl:grid-cols-1">
          {collections?.map((rslt, i) => (
            <Link
              className="group flex h-full w-full flex-col items-start justify-between overflow-hidden rounded-2xl border-2 border-solid border-gray-200 px-6 py-6 transition-[border] duration-300 ease-in-out hover:border-[#ED4F35]"
              prefetch={true}
              href={rslt?.url}
              title={`Coinfest Asia 2025 ${rslt?.title}`}
              key={`ca25GetInvolved${i}`}
            >
              <div className="relative mb-6 block w-full">
                <h2 className="text-2xl font-semibold leading-initial text-black-900">
                  {rslt?.title}
                </h2>
                <p className="mt-2 text-balance pr-0 text-base text-black-900 sm:pr-4 lg:pr-20">
                  {rslt?.shortDesc}
                </p>
              </div>
              <span
                className={`relative mr-auto inline-flex w-[138px] items-center justify-center rounded-full bg-primary px-4 py-3 text-sm font-normal text-white disabled:pointer-events-none disabled:opacity-90 sm:w-[177px] sm:px-5 sm:py-4 sm:text-base lg:w-[207px]`}
              >
                {rslt?.labelBtn}
              </span>
            </Link>
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
        url: '/',
        title: 'Sponsor',
        shortDesc: `Demonstrate your innovations and solutions in a seamless & measurable manner.`,
        labelBtn: `Send an Inquiry`,
      },
      {
        url: '/',
        title: 'Speak',
        shortDesc: `Show and tell your impact-driven ideas, not just theories, on experiential stages.`,
        labelBtn: `Apply Now`,
      },
      {
        url: '/',
        title: 'Co-Host Program',
        shortDesc: `Strategically position your brand to meet attendees that align with your goals.`,
        labelBtn: `Send an Inquiry`,
      },
      {
        url: '/',
        title: 'Partner as Media',
        shortDesc: `Become the main source on the latest Web3 insights and updates in Asia.`,
        labelBtn: `Apply Now`,
      },
      {
        url: '/',
        title: 'Become an Affiliator',
        shortDesc: `Earn rewards and grow your influence by promoting the world's largest crypto festival.`,
        labelBtn: `Apply Now`,
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
