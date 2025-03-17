import React from 'react';
import Link from 'next/link';
import getConfig from 'next/config';

// @get .config
const { publicRuntimeConfig } = getConfig();

// @components
import HeadGraphSeo from '@components/Head';
import Main from '@components/Main';
import Container from '@components/Container';
import StarryBackground from '@components/UI/Background/StarryBackground';

// @layouts
import MoonPortalBanner from '@layouts/Banner/MoonPortalBanner';

const PrivacyPolicy = ({ mode }) => {
  return (
    <>
      {/* @head */}
      <HeadGraphSeo
        title={`Privacy Policy`}
        canonicalUrl={`${publicRuntimeConfig?.siteUrl}/privacy-policy`}
        otherPage={true}
      />

      {/* @main */}
      <Main className="relative flex flex-col overflow-hidden pb-16 pt-[141px] sm:pb-24 sm:pt-[161px]">
        <div className="pointer-events-none absolute inset-x-0 bottom-auto top-0 -z-px h-[625px] select-none">
          <StarryBackground starCount={90} />
        </div>

        <Container className={'relative z-[4] pb-20 sm:pb-28'}>
          <div className="relative grid-cols-4 gap-x-2 gap-y-2 supports-grid:grid sm:grid-cols-12 lg:grid-cols-12">
            <div className="col-span-full col-start-1 sm:col-span-10 sm:col-start-2">
              <div className="mb-12 flex flex-col items-center justify-center text-center sm:mb-16">
                <h1
                  className={`w-full max-w-[416px] text-balance text-[28px] font-bold leading-[38px] sm:text-[36px] ${mode === 'light' ? 'text-black-900' : 'text-white'} sm:leading-[48px]`}
                >
                  {`Privacy Policy for Coinfest Asia`}
                </h1>
                <p className="mt-2 font-light text-gray-400">
                  {`Last updated: January 08, 2025`}
                </p>
              </div>
              <div
                className={`ca25Article_Frmatt relative ${mode === 'light' ? 'ca25Article_FrmattLight text-black-900' : 'ca25Article_FrmattDark text-white'} flex flex-col`}
              >
                <p>
                  At Coinfest Asia, accessible from{' '}
                  <Link href="/">https://coinfest.asia</Link>, we prioritize the
                  privacy of our visitors. This Privacy Policy document outlines
                  the information collected and recorded by Coinfest Asia and
                  how it is utilized. <br />
                  <br />
                  If you have further questions or need additional information
                  about our Privacy Policy, feel free to contact us through{' '}
                  <Link href="mailto:hi@coinfest.asia" target="_blank">
                    hi@coinfest.asia.
                  </Link>{' '}
                </p>
                <h2>Log Files</h2>
                <p>
                  Coinfest Asia employs standard log file procedures. These
                  files log visitors when they access websites. This practice is
                  common among hosting companies and is part of hosting
                  services' analytics. Information collected by log files
                  includes internet protocol (IP) addresses, browser types,
                  Internet Service Providers (ISPs), date and time stamps,
                  referring/exit pages, and potentially the number of clicks.
                  None of this information is linked to personally identifiable
                  data. The purpose of this information is to analyze trends,
                  administer the site, track users' movement on the website, and
                  gather demographic data.
                </p>
                <h2>Cookies And Web Beacons</h2>
                <p>
                  Like many other websites, Coinfest Asia utilizes 'cookies'.
                  These cookies store information such as visitors' preferences
                  and the pages visited on the website. This information is used
                  to enhance users' experiences by customizing webpage content
                  based on their browser types and other data. <br></br>{' '}
                  <br></br>For more general information on cookies, please refer
                  to this{' '}
                  <Link
                    href="https://www.privacypolicyonline.com/what-are-cookies/"
                    target="_blank"
                  >
                    article.
                  </Link>
                </p>
                <h2>Third Party Advertisers</h2>
                <p>
                  Third-party ad servers or ad networks employ technologies like
                  cookies, JavaScript, or Web Beacons in their advertisements
                  and links displayed on Coinfest Asia. These technologies are
                  used to measure the effectiveness of advertising campaigns and
                  personalize advertising content seen on visited websites.
                  These advertisers automatically receive your IP address when
                  this occurs. Coinfest Asia's Privacy Policy does not apply to
                  other advertisers or websites. <br></br> <br></br>We advise
                  you to consult the respective Privacy Policies of these
                  third-party ad servers for detailed information, including
                  their practices and instructions for opting out of certain
                  options. You can choose to disable cookies through your
                  individual browser options. For more detailed information
                  about cookie management with specific web browsers, visit the
                  respective browsers' websites.
                </p>
                <h2>Children's Information</h2>
                <p>
                  In line with our commitment to prioritizing the protection of
                  children using the internet, we encourage parents and
                  guardians to monitor and guide their children's online
                  activities. <br></br>
                  <br></br> Coinfest Asia does not knowingly collect any
                  Personal Identifiable Information from children under the age
                  of 13. If you believe your child has provided such information
                  on our website, please contact us immediately, and we will
                  make every effort to promptly remove such information from our
                  records.
                </p>
                <h2>Online Privacy Policy Only</h2>
                <p>
                  This Privacy Policy exclusively applies to our online
                  activities and pertains to visitors to our website in relation
                  to the information they share and/or collect on Coinfest Asia.
                  This policy does not apply to information collected offline or
                  through channels other than this website.
                </p>
                <h2>Consent</h2>
                <p>
                  By using our website, you hereby consent to our{' '}
                  <Link href="/privacy-policy">Privacy Policy</Link> and agree
                  to its{' '}
                  <Link href="/terms-and-conditions">
                    Terms and Conditions.
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Container>

        {/* @banner(footer) */}
        <MoonPortalBanner mode={mode} />
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
export default PrivacyPolicy;
