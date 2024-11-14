import React from 'react';
import Link from 'next/link';

// @components
import HeadGraphSeo from '@components/Head';
import Main from '@components/Main';
import Container from '@components/Container';

// @layouts
import NavbarCheckout from '@layouts/Navbar/NavbarCheckout';
import Footer from '@layouts/Footer';

const OrderReceived = () => {
  return (
    <>
      {/* @head */}
      <HeadGraphSeo
        title={`Success - Confirmation Attendee`}
        otherPage={true}
      />

      {/* @navbar */}
      <NavbarCheckout progress="last" />

      {/* @main */}
      <Main className="flex h-[76svh] flex-col items-center justify-center pb-16 pt-[209px] sm:h-[70svh] sm:pb-20 xl:pb-24 sm:pt-[189px] xl:h-[80svh] 2xl:h-auto">
        <Container>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col text-center">
              <span className="mb-2 text-[74px] leading-[80px] text-black-900 sm:text-[82px]">
                🎉
              </span>
              <h1 className="mx-auto mt-2 max-w-full font-bevietnamPro text-xl font-semibold uppercase text-black-900 sm:mt-4 sm:max-w-[493px] sm:text-2xl">
                Thank you for reaching out!
              </h1>
            </div>
            <div className="mt-8 flex w-full max-w-full flex-col items-center justify-center text-center sm:max-w-[733px]">
              <p className="px-0 font-bevietnamPro text-base font-light text-black-900 sm:px-4 sm:text-lg">
                Your email has been sent successfully, Please check your inbox
                for confirmation. If you don't see it, kindly check your spam
                folder.
              </p>
              <div className="mb-8 mt-6">
                <Link
                  className={`relative mr-2 inline-flex w-[175px] items-center justify-center rounded-[14px] bg-primary px-3 py-4 font-bevietnamPro text-sm font-medium text-white outline-none last:mr-0 focus-visible:outline-none sm:px-6 sm:text-base`}
                  href={'https://mail.google.com/mail/u/0/#inbox'}
                  title="Coinfest Asia 2025 (Success - Open Gmail)"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Gmail
                </Link>
              </div>
              <p className="px-0 font-bevietnamPro text-base font-light text-gray-500">
                We appreciate your patience and look forward to assisting you
                further.
              </p>
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

export const getServerSideProps = async (context) => {
  if (Object.keys(context.query).length > 0) {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    };
  }

  try {
    return {
      props: {},
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

export default OrderReceived;
