import React from "react";
import getConfig from "next/config";
import Head from "next/head";
import Link from "next/link";

// @get .config
const { publicRuntimeConfig } = getConfig();

// @components
import Container from "@components/Container";
import PromoCode from "@components/UI/Modal/PromoCode";

// @layouts
import BannerFooter from "@layouts/Banner/BannerFooter";

const PrivacyPolicy = () => {
  return (
    <>
      {/* @head */}
      <Head>
        <title>{`Privacy Policy | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta
          name="title"
          content={`Privacy Policy | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta name="description" content={publicRuntimeConfig.siteDesc} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="og:title"
          content={`Privacy Policy | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta
          property="og:description"
          content={publicRuntimeConfig.siteDesc}
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_UPLOAD}/uploads/ca2024_Thumbnails_Share_Link_App_9964b5c353.png`}
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="twitter:title"
          content={`Privacy Policy | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta
          property="twitter:description"
          content={publicRuntimeConfig.siteDesc}
        />
        <meta
          property="twitter:image"
          content={`${process.env.NEXT_PUBLIC_UPLOAD}/uploads/ca2024_Thumbnails_Share_Link_App_9964b5c353.png`}
        />
      </Head>

      {/* @main */}
      <main className="relative pt-[169px] xl:pt-[139px] 2xl:pt-[185px]">
        <Container>
          <div className="relative grid-cols-4 gap-x-2 gap-y-2 supports-grid:grid sm:grid-cols-12 lg:grid-cols-12">
            <div className="col-span-full col-start-1 sm:col-span-10 sm:col-start-2">
              <div className="ca2024ArtcleFrmattd mb-14 font-bevietnamPro text-base font-light leading-relaxed text-black-900 sm:mb-0 xl:mb-24">
                <h1 className="mx-auto mb-6 w-full max-w-full text-start sm:mb-18 sm:max-w-[440px] sm:text-center">
                  Privacy Policy for Coinfest Asia 2024
                </h1>
                <p>
                  At Coinfest Asia, accessible from{" "}
                  <a href="/">https://coinfest.asia</a>, one of our main
                  priorities is the privacy of our visitors. This Privacy Policy
                  document contains types of information that is collected and
                  recorded by Coinfest Asia and how we use it.
                </p>
                &nbsp;
                <p>
                  If you have additional questions or require more information
                  about our Privacy Policy, do not hesitate to contact us.
                </p>
                <h2>Log Files</h2>
                <p>
                  Coinfest Asia follows a standard procedure of using log files.
                  These files log visitors when they visit websites. All hosting
                  companies do this and a part of hosting services' analytics.
                  The information collected by log files include internet
                  protocol (IP) addresses, browser type, Internet Service
                  Provider (ISP), date and time stamp, referring/exit pages, and
                  possibly the number of clicks. These are not linked to any
                  information that is personally identifiable. The purpose of
                  the information is for analyzing trends, administering the
                  site, tracking users' movement on the website, and gathering
                  demographic information.
                </p>
                <h2>Cookies and Web Beacons</h2>
                <p>
                  Like any other website, Coinfest Asia uses 'cookies'. These
                  cookies are used to store information including visitors'
                  preferences, and the pages on the website that the visitor
                  accessed or visited. The information is used to optimize the
                  users' experience by customizing our web page content based on
                  visitors' browser type and/or other information.
                </p>
                &nbsp;
                <p>
                  For more general information on cookies, please read the
                  "Cookies" article from the{" "}
                  <a href="https://www.privacypolicyonline.com/what-are-cookies/">
                    Privacy Policy Generator
                  </a>
                  .
                </p>
                <h2>Privacy Policies</h2>
                <p>
                  You may consult this list to find the Privacy Policy for each
                  of the advertising partners of Coinfest Asia.
                </p>
                &nbsp;
                <p>
                  Third-party ad servers or ad networks uses technologies like
                  cookies, JavaScript, or Web Beacons that are used in their
                  respective advertisements and links that appear on Coinfest
                  Asia, which are sent directly to users' browser. They
                  automatically receive your IP address when this occurs. These
                  technologies are used to measure the effectiveness of their
                  advertising campaigns and/or to personalize the advertising
                  content that you see on websites that you visit.
                </p>
                &nbsp;
                <p>
                  <i>
                    Note that Coinfest Asia has no access to or control over
                    these cookies that are used by third-party advertisers.
                  </i>
                </p>
                <h2>Third Party Privacy Policies</h2>
                <p>
                  Coinfest Asia's Privacy Policy does not apply to other
                  advertisers or websites. Thus, we are advising you to consult
                  the respective Privacy Policies of these third-party ad
                  servers for more detailed information. It may include their
                  practices and instructions about how to opt-out of certain
                  options.{" "}
                </p>
                &nbsp;
                <p>
                  You can choose to disable cookies through your individual
                  browser options. To know more detailed information about
                  cookie management with specific web browsers, it can be found
                  at the browsers' respective websites. What Are Cookies?
                </p>
                <h2>Children's Information</h2>
                <p>
                  Another part of our priority is adding protection for children
                  while using the internet. We encourage parents and guardians
                  to observe, participate in, and/or monitor and guide their
                  online activity.
                </p>
                &nbsp;
                <p>
                  Coinfest Asia does not knowingly collect any Personal
                  Identifiable Information from children under the age of 13. If
                  you think that your child provided this kind of information on
                  our website, we strongly encourage you to contact us
                  immediately and we will do our best efforts to promptly remove
                  such information from our records.
                </p>
                <h2>Online Privacy Policy Only</h2>
                <p>
                  This Privacy Policy applies only to our online activities and
                  is valid for visitors to our website with regards to the
                  information that they shared and/or collect in Coinfest Asia.
                  This policy is not applicable to any information collected
                  offline or via channels other than this website.
                </p>
                <h2>Consent</h2>
                <p>
                  By using our website, you here by consent to our{" "}
                  <Link href="">Privacy Policy</Link> and agree to it's{" "}
                  <Link href="/terms-and-conditions">Terms and Conditions</Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </Container>

        {/* @banner-footer */}
        <BannerFooter />

        {/* @promo-code(popup) */}
        {/* <PromoCode /> */}
      </main>
    </>
  );
};

export default PrivacyPolicy;
