import React from 'react';
import Link from 'next/link';

// @lib
import { getFetch } from '@lib/controller/API';

// @components
import HeadGraphSeo from '@components/Head';
import Main from '@components/Main';
import Container from '@components/Container';

// @layouts
import LayoutDefaults from '@layouts/Layouts';

const OrderReceivedFailed = ({}) => {
  return (
    <>
      {/* @head */}
      <HeadGraphSeo title={`Your Order Failed!`} otherPage={true} />

      {/* @main */}
      <Main className="flex flex-col pb-12 pt-[141px] sm:pb-24 sm:pt-[185px]">
        <Container>
          <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-full rounded-2xl bg-gray-100 px-2 pb-9 pt-12 text-center backdrop-blur-[2px] sm:max-w-[626px] sm:px-10">
              <div className="mx-auto inline-flex w-max flex-row items-center space-x-2">
                <svg
                  className="-ml-[5px] h-16 w-16 sm:ml-0"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M37.0428 45.4706L37.4639 45.1792C38.7823 44.2678 39.4417 43.8118 40.0313 43.323C43.2354 40.6674 45.3877 36.9656 46.104 32.8778C46.2359 32.1256 46.3042 31.3299 46.4412 29.7381L46.5121 28.9151C46.7389 26.2808 46.7163 23.6308 46.4447 21.0005L46.3605 20.1866C45.8852 15.5836 43.0593 11.5493 38.8838 9.51214C32.0184 6.16262 23.9819 6.16262 17.1165 9.51214C12.941 11.5493 10.1152 15.5836 9.63978 20.1866L9.55571 21.0005C9.28402 23.6308 9.26141 26.2808 9.48819 28.9151L9.55903 29.7381C9.69602 31.3299 9.76452 32.1256 9.89636 32.8778C10.6126 36.9656 12.7648 40.6674 15.969 43.323C16.5587 43.8118 17.2181 44.2678 18.5363 45.1794L18.9576 45.4706C20.7499 46.7098 21.6461 47.3298 22.5442 47.7603C25.9919 49.4132 30.0085 49.4132 33.456 47.7603C34.3543 47.3298 35.2505 46.7101 37.0428 45.4706Z"
                    stroke="#DC2626"
                    strokeWidth="5.25"
                  ></path>
                  <path
                    d="M46.4412 29.7381L46.5121 28.9151C46.7389 26.2808 46.7163 23.6308 46.4447 21.0005L46.3605 20.1866C45.8852 15.5836 43.0593 11.5493 38.8838 9.51214C32.0184 6.16262 23.9819 6.16262 17.1165 9.51214C12.941 11.5493 10.1152 15.5836 9.63978 20.1866L9.55571 21.0005C9.28402 23.6308 9.26141 26.2808 9.48819 28.9151L9.55903 29.7381C9.69602 31.3299 9.76452 32.1256 9.89636 32.8778C10.6126 36.9656 12.7648 40.6674 15.969 43.323C16.5587 43.8118 17.2181 44.2678 18.5363 45.1794L18.9576 45.4706C20.7499 46.7098 21.6461 47.3298 22.5442 47.7603"
                    stroke="#DC2626"
                    strokeWidth="5.25"
                    strokeLinecap="round"
                  ></path>
                  <path
                    opacity="0.5"
                    d="M21.5835 27.4152L26.2502 32.0819L34.4168 23.3319"
                    stroke="#DC2626"
                    strokeWidth="5.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <h1 className="text-balance pl-2.5 text-xl font-bold sm:text-2xl">
                  {`YOUR ORDER FAILED!`}
                </h1>
              </div>
              <div className="mt-4 flex w-full max-w-full flex-col items-center justify-center text-center sm:max-w-[651px]">
                <p className="text-balance px-0 text-base font-normal text-black-900 prose-a:font-normal prose-a:text-primary prose-a:underline sm:px-4">
                  Your order couldn't be completed. Please try again. If you
                  need help, contact us at{' '}
                  <Link
                    href="mailto:support@coinfest.asia"
                    title="Coinfest Asia 2025 Support Email"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    support@coinfest.asia
                  </Link>
                </p>
                <div className="mb-6 mt-8">
                  <Link
                    className={`relative mr-2 inline-flex w-[175px] items-center justify-center rounded-[14px] bg-primary px-3 py-4 text-base font-medium text-white outline-none last:mr-0 focus-visible:outline-none sm:px-6`}
                    href={'/tickets'}
                    title="Coinfest Asia 2025 Try Again Order"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {`Try Again`}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Main>
    </>
  );
};

OrderReceivedFailed.getLayout = (page, { pageProps }) => {
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
export const getServerSideProps = async (context) => {
  const { process } = context?.query;
  try {
    const isLayouts = true;
    const rsOrderRecived = await getFetch(`/api/orders/${process}`);
    if (rsOrderRecived?.data?.paymentStatus === 'Success') {
      return {
        redirect: {
          destination: '/',
          permanent: true,
        },
      };
    }
    return {
      props: {
        mode: 'light',
        layouts: isLayouts || false,
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
export default OrderReceivedFailed;
