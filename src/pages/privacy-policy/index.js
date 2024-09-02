import React from "react";
import getConfig from "next/config";
import Head from "next/head";
import Link from "next/link";

// @Get .config
const { publicRuntimeConfig } = getConfig();

// @Component's
import Main from "@components/Main";
import Container from "@components/Container";
import FooterBanner from "@layouts/SponsorshipBanner";

import Navbar from "@layouts/Navbar";
import Footer from "@layouts/Footer";

const PrivacyPolicy = (props) => {
  return (
    <>
      {/* Head (Home) */}
      <Head>
        <title>{`Privacy Policy | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta
          name="title"
          content={`Privacy Policy | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta name="description" content={`${publicRuntimeConfig.siteDesc}`} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${publicRuntimeConfig.siteUrl}`} />
        <meta
          property="og:title"
          content={`Privacy Policy | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta
          property="og:description"
          content={`${publicRuntimeConfig.siteDesc}`}
        />
        <meta property="og:image" content="/assets/caGeneral-Thumbnails.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`${publicRuntimeConfig.siteUrl}`}
        />
        <meta
          property="twitter:title"
          content={`Privacy Policy | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta
          property="twitter:description"
          content={`${publicRuntimeConfig.siteDesc}`}
        />
        <meta
          property="twitter:image"
          content="/assets/caGeneral-Thumbnails.png"
        />
      </Head>

      <Navbar back={true} />

      <Main className="relative pt-[169px] xl:pt-[149px] 2xl:pt-[195px]">
        <Container className="relative">
          <div className="relative grid-cols-4 gap-x-2 gap-y-2 supports-grid:grid sm:grid-cols-12 lg:grid-cols-12">
            <div className="col-span-full col-start-1 sm:col-span-10 sm:col-start-2">
              <div className="ca2024ArtcleFrmattd mb-14 font-bevietnamPro text-base font-light leading-relaxed text-black-900 sm:mb-0 xl:mb-24">
                <h1 className="mx-auto mb-6 w-full max-w-full text-start sm:mb-18 sm:max-w-[440px] sm:text-center">
                  Privacy Policy for Coinfest Asia
                </h1>
                <p>
                  At Coinfest Asia, accessible from{" "}
                  <Link href="/">https://coinfest.asia</Link>, we prioritize the
                  privacy of our visitors. This Privacy Policy document outlines
                  the information collected and recorded by Coinfest Asia and
                  how it is utilized. <br></br> <br></br>If you have further
                  questions or need additional information about our Privacy
                  Policy, feel free to contact us through{" "}
                  <Link href="mailto:hi@coinfest.asia" target="_blank">
                    hi@coinfest.asia.
                  </Link>
                </p>
                <h2 className="uppercase">Log Files</h2>
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
                <h2 className="uppercase">Cookies And Web Beacons</h2>
                <p>
                  Like many other websites, Coinfest Asia utilizes 'cookies'.
                  These cookies store information such as visitors' preferences
                  and the pages visited on the website. This information is used
                  to enhance users' experiences by customizing webpage content
                  based on their browser types and other data. <br></br>{" "}
                  <br></br>For more general information on cookies, please refer
                  to this{" "}
                  <Link
                    href="https://www.privacypolicyonline.com/what-are-cookies/"
                    target="_blank"
                  >
                    article.
                  </Link>
                </p>
                <h2 className="uppercase">Third Party Advertisers</h2>
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
                <h2 className="uppercase">Children's Information</h2>
                <p>
                  In line with our commitment to prioritizing the protection of
                  children using the internet, we encourage parents and
                  guardians to monitor and guide their children's online
                  activities. Coinfest Asia does not knowingly collect any
                  Personal Identifiable Information from children under the age
                  of 13. If you believe your child has provided such information
                  on our website, please contact us immediately, and we will
                  make every effort to promptly remove such information from our
                  records.
                </p>
                <h2 className="uppercase">Online Privacy Policy Only</h2>
                <p>
                  This Privacy Policy exclusively applies to our online
                  activities and pertains to visitors to our website in relation
                  to the information they share and/or collect on Coinfest Asia.
                  This policy does not apply to information collected offline or
                  through channels other than this website.
                </p>
                <h2 className="uppercase">Consent</h2>
                <p>
                  By using our website, you hereby consent to our{" "}
                  <Link href="/privacy-policy">Privacy Policy</Link> and agree
                  to its{" "}
                  <Link href="/terms-and-conditions">
                    Terms and Conditions.
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Container>

        {/* @Layout Section (Banner - Email Subscrbe) */}
        <FooterBanner />
      </Main>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;

export const getStaticProps = async () => {
  try {
    return {
      props: {},

      revalidate: 10,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

PrivacyPolicy.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
