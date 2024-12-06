import React from "react";
import Link from "next/link";

// @components
import HeadGraphSeo from "@components/Head";
import Container from "@components/Container";

// @layouts
import Navbar from "@layouts/Navbar";
import Footer from "@layouts/Footer";

const InterestSuccessfull = ({}) => {
  return (
    <>
      {/* @head */}
      <HeadGraphSeo title={"Success Interest"} otherPage={true} />

      {/* @navbar */}
      <Navbar back={true} />

      <main className="relative">
        <Container>
          <div className="flex flex-col text-center pt-[134px] sm:pt-[197px] lg:pt-[239px] pb-[131px]">
            <div className="flex flex-col text-center">
              <span className="text-black-900 text-[64px] sm:text-[72px] leading-[80px]">
                🎉
              </span>
              <h2 className="text-black-900 font-figtree text-xl sm:text-2xl font-semibold uppercase mt-2 sm:mt-4 mx-auto max-w-[313px]">
                THANK YOU
              </h2>
              <p className="text-black-900 font-figtree text-base sm:text-lg font-normal mt-4 px-0">
                Thank you for your interest. You’ll be the first to know about
                Coinfest Asia 2025! Stay tuned!
              </p>
            </div>

            <div className="mt-8 flex flex-col">
              <Link
                className={`py-4.5 px-5 w-max flex flex-row items-center text-base xl:text-lg leading-inherit justify-center bg-black-900 w-max mx-auto text-white rounded-2xl outline-none`}
                href="/"
              >
                Back to Home
                <svg
                  className={`stroke-current ml-4 h-8 xl:h-9 w-8 xl:w-9`}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M28 15.9999H4M28 15.9999L22.6667 10.6665M28 15.9999L22.6667 21.3333"
                      strokeWidth="1.33334"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </Link>
            </div>
          </div>
        </Container>
      </main>

      {/* @footer */}
      <Footer />
    </>
  );
};

InterestSuccessfull.getLayout = function PageLayout(page) {
  return <>{page}</>;
};

export const getStaticProps = async () => {
  try {
    return {
      props: {},
      revalidate: 900,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

export default InterestSuccessfull;
