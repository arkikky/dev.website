import React from 'react';

// @components
import HeadGraphSeo from '@components/Head';
// import Main from '@components/Main';
// import Container from '@components/Container';
// import StarryBackground from '@components/UI/Background/StarryBackground';

// @layouts
import ComingSoon from '@layouts/ComingSoon';

const Agenda = ({}) => {
  return (
    <>
      {/* @head */}
      <HeadGraphSeo title={`Agenda`} otherPage={true} />

      {/* @main(coming-soon) */}
      <ComingSoon />
    </>
  );
};

Agenda.getLayout = function PageLayout(page) {
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
export default Agenda;
