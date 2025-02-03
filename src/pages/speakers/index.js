import React from 'react';

// @components
import HeadGraphSeo from '@components/Head';
import MainSmoothScroll from '@components/MainSmoothScroll';
import Container from '@components/Container';

// @layouts
import MoonPortalBanner from '@layouts/Banner/MoonPortalBanner';

const Speakers = ({ mode }) => {
  return (
    <>
      {/* @head */}
      <HeadGraphSeo title={`Speakers`} otherPage={true} />

      {/* @main */}
      <MainSmoothScroll className="relative flex flex-col overflow-hidden pb-16 pt-[141px] sm:pb-24 sm:pt-[161px]">
        <Container className={'pb-20 sm:pb-28'}>
          <div className="flex flex-col items-center justify-center text-center">
            <h1
              className={`ca25HeadingTitle w-full text-center font-semibold uppercase sm:font-bold ${mode === 'light' ? 'text-black-900' : 'text-white'} mb-4 text-balance sm:mb-7`}
            >
              {'SPEAKERS'
                ?.split('')
                ?.map((chr, i) =>
                  ['E', 'O', 'A', '0'].includes(chr) ? (
                    <span key={i}>{chr}</span>
                  ) : (
                    chr
                  )
                )}
            </h1>
          </div>
        </Container>

        {/* @banner(footer) */}
        <MoonPortalBanner mode={mode} />
      </MainSmoothScroll>
    </>
  );
};

export const getStaticProps = async () => {
  try {
    const isStoreLayouts = false;
    return {
      props: {
        mode: 'dark',
        layouts: isStoreLayouts || false,
      },
      revalidate: 900,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
export default Speakers;
