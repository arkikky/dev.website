import React from 'react';

// @components
import HeadGraphSeo from '@components/Head';

const AttendeeSlugs = ({}) => {
  return (
    <>
      {/* @head */}
      <HeadGraphSeo title={`Confirmation Attendee`} otherPage={true} />
    </>
  );
};

AttendeeSlugs.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
export const getServerSideProps = async (context) => {
  try {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    };
  }
};
export default AttendeeSlugs;
