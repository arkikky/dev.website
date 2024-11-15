import React from 'react';

// @components
import HeadGraphSeo from '@components/Head';

const OrderReceivedSlugs = ({}) => {
  return (
    <>
      {/* @head */}
      <HeadGraphSeo title={`Order Received`} otherPage={true} />
    </>
  );
};

OrderReceivedSlugs.getLayout = function PageLayout(page) {
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

export default OrderReceivedSlugs;
