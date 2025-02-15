import React from 'react';

// @components
import HeadGraphSeo from '@components/Head';
// import Main from '@components/Main';
// import Container from '@components/Container';
// import StarryBackground from '@components/UI/Background/StarryBackground';

// @layouts
import ComingSoon from '@layouts/ComingSoon';

const Travel = ({}) => {
  return (
    <>
      {/* @head */}
      <HeadGraphSeo
        title={`Travel`}
        canonicalUrl={`${publicRuntimeConfig?.siteUrl}/travel`}
        otherPage={true}
      />

      {/* @main(coming-soon) */}
      <ComingSoon />
    </>
  );
};

Travel.getLayout = function PageLayout(page) {
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
export default Travel;
