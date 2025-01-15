import React from 'react';
import dynamic from 'next/dynamic';

// @components
import Container from '@components/Container';
import StarryBackground from '@components/UI/Background/StarryBackground';
const AboutUsCards = dynamic(
  () => import('@components/UI/Cards/AboutUsCards'),
  {
    loading: () => '',
    ssr: false,
  }
);

// @layouts
import Boards from '@layouts/Board';

const Abouts = ({ mode, result = [] }) => {
  return (
    <>
      <section className="ca25AboutUs relative bg-[linear-gradient(0deg,#1F1F1F_23%,#005AFF_49%,#7AB1F9_77%,#A0CCF7_100%)] pb-3 pt-6 lg:pb-20 lg:pt-[122px]">
        <div className="pointer-events-none absolute inset-x-0 inset-y-0 z-px h-[553px] select-none">
          <StarryBackground starCount={125} />
        </div>
        <Container className={'z-[5]'}>
          <Boards mode={mode} />
          <div className="relative mt-2 w-full min-w-full max-w-full grid-cols-4 gap-x-3 gap-y-3 supports-grid:grid sm:mt-4 sm:grid-cols-12 sm:gap-x-4 sm:gap-y-4 lg:mt-6 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-6 xl:mt-10 xl:gap-x-10 xl:gap-y-10">
            {result?.map((rslt, i) => (
              <div
                className="col-span-full sm:col-span-6 lg:col-span-4"
                key={i}
              >
                <AboutUsCards
                  images={rslt?.images}
                  title={rslt?.title}
                  shortDesc={rslt?.shortDesc}
                />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Abouts;
