import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Link from 'next/link';

// @redux
import { useSelector } from 'react-redux';

// @lib/controller & helper
import { getFetch, getFetchUrl, pushSubmitData } from '@lib/controller/API';

// @script
const PrelineScript = dynamic(() => import('@components/Script/PrelineScript'));

// @components
const HeadGraphSeo = dynamic(() => import('@components/Head'));
import Main from '@components/Main';
import Container from '@components/Container';

// @layouts
import NavbarCheckout from '@layouts/Navbar/NavbarCheckout';
import Footer from '@layouts/Footer';

const OrderReceived = ({ ipAddress }) => {
  const router = useRouter();
  const isCart = useSelector((state) => state.cart.data);

  // @data
  const [isIpAddress, setIpAddress] = useState(ipAddress);

  return (
    <>
      {/* @head */}
      <HeadGraphSeo title={`Order Received`} otherPage={true} />

      {/* @script */}
      <PrelineScript />

      {/* @navbar */}
      <NavbarCheckout progress="last" />

      {/* @main */}
      <Main className="flex flex-col pb-8 sm:pb-12">
        <Container className={'pt-[178px] sm:pt-[138px]'}>
          <div className="grid-cols-1 gap-x-6 gap-y-12 supports-grid:grid sm:grid-cols-12 sm:gap-y-20">
            <div className="col-span-full pl-0 xl:col-span-6 xl:pr-10">
              <h1 className="text-2xl font-bold">YOUR ORDER IS COMPLETE!</h1>
              <div className="mt-4 text-base font-light text-gray-500 prose-a:text-primary prose-a:underline">
                <p>
                  Your payment was successful, and your order is now complete. A
                  receipt and e-ticket are on their way to your email. If you
                  haven't received them within 24 hours after completion, please
                  reach out to{' '}
                  <Link href="mailto:support@coinfest.asia">
                    support@coinfest.asia
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-span-full pr-0 xl:col-span-6 xl:pl-6">
              <div className="flex flex-col items-start rounded-2xl border border-solid border-gray-200 bg-gray-100 px-2 pb-2 pt-4">
                <div className="mb-4 flex w-full flex-col items-start justify-start px-4">
                  <h2 className="text-xl font-medium capitalize">
                    Order summary
                  </h2>
                </div>
                <div className="inline-flex w-full flex-col space-y-6 rounded-xl bg-white px-4 py-4">
                  <div className="grid-cols-1 supports-grid:grid sm:grid-cols-2">
                    <span className="text-start text-sm font-medium">{`Order number`}</span>
                    <span className="text-start sm:text-end text-base font-light">
                      #19591991940
                    </span>
                  </div>
                  <div className="grid-cols-1 supports-grid:grid sm:grid-cols-2">
                    <span className="text-start text-sm font-medium">{`Date`}</span>
                    <span className="text-start sm:text-end text-base font-light">
                      November 3, 2024
                    </span>
                  </div>
                  <div className="grid-cols-1 supports-grid:grid sm:grid-cols-2">
                    <span className="text-start text-sm font-medium">{`Name`}</span>
                    <span className="text-start sm:text-end text-base font-light">
                      Deny Sumargo
                    </span>
                  </div>
                  <div className="grid-cols-1 supports-grid:grid sm:grid-cols-2">
                    <span className="text-start text-sm font-medium">{`Email`}</span>
                    <span className="text-start sm:text-end text-base font-light">
                      deny.sumargo@gmail.com
                    </span>
                  </div>
                  <div className="grid-cols-1 supports-grid:grid sm:grid-cols-2">
                    <span className="text-start text-sm font-medium">{`Discount`}</span>
                    <span className="text-start sm:text-end text-base font-medium">
                      -$150
                    </span>
                  </div>
                  <div className="grid-cols-1 supports-grid:grid sm:grid-cols-2">
                    <span className="text-start text-sm font-medium">{`Total (inc. Tax)`}</span>
                    <span className="text-start sm:text-end text-base font-medium">$0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Main>

      {/* @footer */}
      <Footer />
    </>
  );
};

OrderReceived.getLayout = function PageLayout(page) {
  return <>{page}</>;
};

export const getStaticProps = async () => {
  const isIpAddress = await getFetchUrl(
    `https://ipinfo.io/json?token=135855871d1f46`
  );

  try {
    return {
      props: {
        ipAddress: isIpAddress || [],
      },

      revalidate: 900,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

export default OrderReceived;
