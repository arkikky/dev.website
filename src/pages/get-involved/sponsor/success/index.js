import React from 'react';
import Link from 'next/link';

// @components
import HeadGraphSeo from '@components/Head';
import Main from '@components/Main';
import Container from '@components/Container';

// @layouts
import LayoutDefaults from '@layouts/Layouts';

const InterestSuccessfullySubmitted = ({ mode }) => {
  return (
    <>
      {/* @head */}
      <HeadGraphSeo
        title={`Interest Successfully Submitted`}
        otherPage={true}
      />

      {/* @main */}
      <Main className="flex h-auto flex-col items-center justify-center pb-24 pt-[199px] sm:h-auto sm:pb-24 sm:pt-[265px] lg:pb-28 lg:pt-[239px] xl:pt-[209px] 2xl:h-auto">
        <Container>
          <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-full rounded-2xl bg-gray-100 px-2 pb-9 pt-12 sm:max-w-[656px] sm:px-10 lg:max-w-max">
              <div className="flex flex-col text-center">
                <span className="mb-2 text-[67px] leading-[80px] text-black-900 sm:text-[82px]">
                  🎉
                </span>
                <h1 className="sm:px-auto mx-auto mt-4 max-w-full text-[18px] font-semibold uppercase leading-[24px] text-black-900 sm:max-w-[493px] sm:text-2xl">
                  {`Thank you!`}
                </h1>
              </div>
              <div className="mt-4 flex w-full max-w-full flex-col items-center justify-center text-center sm:max-w-[651px]">
                <p className="text-balance px-0 text-base font-normal text-black-900 prose-a:font-normal prose-a:text-[#ED4F35] prose-a:underline sm:px-4">
                  Thank you for your interest. You’ll be the first to know about
                  Coinfest Asia 2025! Stay tuned!
                </p>
                <div className="mb-10 mt-8">
                  <Link
                    className={`relative mr-2 inline-flex w-[199px] items-center justify-center rounded-[14px] bg-primary px-3 py-4 text-base font-medium text-white outline-none last:mr-0 hover:underline focus-visible:outline-none sm:px-6`}
                    href={'/'}
                    title="Coinfest Asia 2025 Back to Home"
                  >
                    <svg
                      className="mr-2 h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m12 19-7-7 7-7" />
                      <path d="M19 12H5" />
                    </svg>
                    {`Back to Home`}
                  </Link>
                </div>
                <p className="text-balance px-0 text-base font-light text-gray-500">
                  {`We appreciate your patience and look forward to assisting you
                further.`}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Main>
    </>
  );
};

InterestSuccessfullySubmitted.getLayout = (page, { pageProps }) => {
  const { mode, layouts } = pageProps;
  if (layouts) {
    return (
      <LayoutDefaults isTheme={mode} layoutStore={layouts}>
        {page}
      </LayoutDefaults>
    );
  }
  return page;
};
export const getStaticProps = async () => {
  try {
    const isLayouts = true;
    return {
      props: {
        mode: 'light',
        layouts: isLayouts || false,
      },
      revalidate: 900,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
export default InterestSuccessfullySubmitted;
