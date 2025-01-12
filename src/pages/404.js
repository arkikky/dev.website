import React, { useEffect } from 'react';
import getConfig from 'next/config';
import Link from 'next/link';

// @get .config
const { publicRuntimeConfig } = getConfig();

// @components
import HeadGraphSeo from '@components/Head';
import Main from '@components/Main';
import Container from '@components/Container';
import StarryBackground from '@components/UI/Background/StarryBackground';

const PageIsGone = (props) => {
  return (
    <>
      {/* @head */}
      <HeadGraphSeo title={`404 Page is Gone!`} otherPage={true} />

      <Main
        className={
          'fixed inset-x-0 inset-y-0 z-[2] flex min-h-svh flex-col items-start justify-center bg-[linear-gradient(180deg,#1F1F1F_3%,#005AFF_39%,#A0CCF7_65%,#ED4F35_98%,#ED4F35_100%)]'
        }
      >
        <div className="pointer-events-none absolute inset-x-0 inset-y-0 z-px h-full select-none">
          <StarryBackground starCount={150} />
        </div>

        <Container className={'relative z-[4]'}>
          <div className="ca25404BackMoon_Items"></div>
          <div className="ca25BackMoon-DoubleRocket"></div>
          <div className="ca25BackMoon-404RedPeopleItems"></div>

          <div className="relative z-[8] flex w-full flex-col items-start justify-between text-start sm:w-[550px] lg:w-[770px]">
            <div className="xs:pt-0 block pt-[74px] sm:pt-0">
              <h1
                className={`ca25HeadingTitle mb-4 w-full text-balance font-semibold uppercase text-white sm:mb-7 sm:font-bold`}
              >
                {'WhOOPS, THAT PAGE IS GONE!'
                  ?.split('')
                  ?.map((chr, i) =>
                    ['E', 'O', 'A', '0'].includes(chr) ? (
                      <span key={i}>{chr}</span>
                    ) : (
                      chr
                    )
                  )}
              </h1>
              <p className="text-balance text-[20px] font-light leading-[34px] text-white sm:text-[28px] sm:font-normal sm:leading-[42px]">
                {`The page you are looking for doesn't exist or has been moved.
                Please go back to the homepage.`}
              </p>
            </div>
            <Link
              className={`ca25MoonBtn-Embossed relative mr-auto mt-[34px] inline-flex w-max items-center justify-center rounded-full bg-[#ED4F35] px-4.5 py-4 text-sm font-semibold uppercase leading-initial text-white disabled:pointer-events-none disabled:opacity-90 sm:mt-[92px] sm:px-7 sm:py-5 lg:mt-[102px]`}
              href="/"
              title={`Coinfest Asia 2025 Go Back Home`}
            >
              {`Go Back Home`}
            </Link>
          </div>
        </Container>
      </Main>
    </>
  );
};

PageIsGone.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
export const getStaticProps = async () => {
  try {
    return {
      props: {
        mode: 'dark',
      },
      revalidate: 900,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
export default PageIsGone;
