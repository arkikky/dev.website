import React from 'react';
import Link from 'next/link';

// @components
import HeadGraphSeo from '@components/Head';
import Main from '@components/Main';
import Container from '@components/Container';

const AttendeeConfrimSuccess = ({ mode }) => {
  return (
    <>
      {/* @head */}
      <HeadGraphSeo
        title={`Success - Confirmation Attendee`}
        otherPage={true}
      />

      {/* @main */}
      <Main className="flex h-auto flex-col items-center justify-center pb-24 pt-[199px] sm:h-auto sm:pb-24 sm:pt-[265px] lg:pb-28 lg:pt-[239px] xl:pt-[209px] 2xl:h-auto">
        <Container>
          <div className="flex flex-col items-center justify-center">
            <div className="bg-black-700 w-full max-w-max rounded-2xl px-2 pb-9 pt-12 backdrop-blur-[2px] sm:px-10">
              <div className="flex flex-col text-center">
                <span className="mb-2 text-[74px] leading-[80px] text-black-900 sm:text-[82px]">
                  🎉
                </span>
                <h1 className="sm:px-auto mx-auto mt-4 max-w-full text-[18px] font-semibold uppercase leading-[24px] text-white sm:max-w-[493px] sm:text-2xl">
                  {`Thank you for reaching out!`}
                </h1>
              </div>
              <div className="mt-6 flex w-full max-w-full flex-col items-center justify-center text-center sm:max-w-[651px]">
                <p className="text-balance px-0 text-sm font-extralight text-white prose-a:font-normal prose-a:text-[#D38350] prose-a:underline sm:px-4 sm:text-base">
                  Your email has been sent successfully!, Please check your
                  inbox for confirmation. If you don't see it, kindly check your
                  spam folder. If you haven't received them within 24 hours
                  after completion, please reach out to{' '}
                  <Link
                    href="mailto:support@coinfest.asia"
                    title="Coinfest Asia 2025 Support Email"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    support@coinfest.asia
                  </Link>
                </p>
                <div className="mb-10 mt-8">
                  <Link
                    className={`relative mr-2 inline-flex w-[175px] items-center justify-center rounded-[14px] bg-primary px-3 py-4 text-sm font-medium text-white outline-none last:mr-0 focus-visible:outline-none sm:px-6 sm:text-base`}
                    href={'https://mail.google.com/mail/u/0/#inbox'}
                    title="Coinfest Asia 2025 Open Gmail"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {`Open Gmail`}
                  </Link>
                </div>
                <p className="px-0 text-base font-light text-gray-400">
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

export const getStaticProps = async () => {
  try {
    const isStoreLayouts = false;
    return {
      props: {
        mode: 'dark',
        layouts: isStoreLayouts || false,
      },
      revalidate: 900,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
export default AttendeeConfrimSuccess;
