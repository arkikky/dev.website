import React from "react";
// import { Tab } from "@headlessui/react";
import Head from "next/head";
// import Image from "next/image";

// Css
// import Headng from "@styles/components/Heading.module.css";
// import Tabs from "@styles/components/Tabs.module.css";

// Ui - Components
import Container from "@components23/Container";
import Main from "@components23/Main";
import PostLink from "@components23/UI/Post/PostLink";
// import Buttons from "@components23/UI/Buttons";

const PrivacyPolicy = () => {
  return (
    <>
      {/* Head (Privacy Policy) */}
      <Head>
        <title>Privacy Policy | ASIA’S IMMERSIVE WEB3 FESTIVAL</title>
        <meta
          name="title"
          content="Privacy Policy | ASIA’S IMMERSIVE WEB3 FESTIVAL"
        />
        <meta
          name="description"
          content="Coinfest Asia 📍 Bali, 24-25 August 2023 | Explore real-world insights and valuable connections in Web2.5 where web2 and web3 industries converge through an immersive festival experience."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://coinfest.asia/" />
        <meta
          property="og:title"
          content="Privacy Policy | ASIA’S IMMERSIVE WEB3 FESTIVAL"
        />
        <meta
          property="og:description"
          content="Coinfest Asia 📍 Bali, 24-25 August 2023 | Explore real-world insights and valuable connections in Web2.5 where web2 and web3 industries converge through an immersive festival experience."
        />
        <meta
          property="og:image"
          content="https://ticket.coinfest.asia/wp-content/uploads/2023/06/CA_Bali-Clifftop-Header-Newsletter.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://coinfest.asia/" />
        <meta
          property="twitter:title"
          content="Privacy Policy | ASIA’S IMMERSIVE WEB3 FESTIVAL"
        />
        <meta
          property="twitter:description"
          content="Coinfest Asia 📍 Bali, 24-25 August 2023 | Explore real-world insights and valuable connections in Web2.5 where web2 and web3 industries converge through an immersive festival experience."
        />
        <meta
          property="twitter:image"
          content="https://ticket.coinfest.asia/wp-content/uploads/2023/06/CA_Bali-Clifftop-Header-Newsletter.png"
        />
      </Head>

      <Main className="flex flex-col mt-[60px] sm:mt-[100px]">
        <Container>
          {/* <Tab.Group vertical>
            <div className="supports-grid:grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-6 sm:gap-y-0 gap-x-6 mt-8 sm:mt-12">
              <div className="col-start-1 col-span-full sm:col-span-3 xl:col-span-3 pr-0 lg:pr-6 xl:pr-18">
                <div className=" sticky top-[191px]">
                  <Tab.List
                    className={`${Tabs.tabsVertical} flex flex-row sm:flex-col snap-x overflow-x-auto sm:overflow-x-hidden scrollbar-hide w-auto sm:w-max`}
                  >
                    <Tab
                      className="snap-start hocus:bg-[#ECF3FF] ui-selected:bg-[#ECF3FF] border-[#E8E8E8] hocus:border-primary ui-selected:border-primary text-[#ADB2BA] hocus:text-primary ui-selected:text-primary whitespace-nowrap sm:whitespace-normal min-w-[175px]"
                      selected={true}
                    >
                      English
                    </Tab>
                    <Tab className="snap-start hocus:bg-[#ECF3FF] ui-selected:bg-[#ECF3FF] border-[#E8E8E8] hocus:border-primary ui-selected:border-primary text-[#ADB2BA] hocus:text-primary ui-selected:text-primary whitespace-nowrap sm:whitespace-normal min-w-[175px]">
                      Indonesia
                    </Tab>
                  </Tab.List>
                </div>
              </div>
              <div className="col-start-1 sm:col-start-4 col-span-full sm:col-span-9 pl-0">
                <Tab.Panels>
                  <Tab.Panel className="focus-visible:outline-none">
                    
                  </Tab.Panel>
                  <Tab.Panel className="focus-visible:outline-none">
                    <div className="inline-flex flex-wrap items-center justify-start gap-y-6 w-full">
                      awdawdwa
                    </div>
                  </Tab.Panel>
                </Tab.Panels>
              </div>
            </div>
          </Tab.Group> */}
          <div className="supports-grid:grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-y-6 sm:gap-y-0 gap-x-6 mt-14 sm:mt-16">
            <div className="col-span-full">
              <div className="termsAndConditionsArtcle flex flex-col w-full">
                <h1>Privacy Policy for Coinfest Asia</h1>
                &nbsp;
                <p>
                  At Coinfest Asia, accessible from{" "}
                  <PostLink url="/">https://coinfest.asia</PostLink>, one of our
                  main priorities is the privacy of our visitors. This Privacy
                  Policy document contains types of information that is
                  collected and recorded by Coinfest Asia and how we use it.
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
                  demographic information. Our Privacy Policy was created with
                  the help of the{" "}
                  <a href="https://www.privacypolicyonline.com/privacy-policy-generator/">
                    Privacy Policy Generator
                  </a>
                  .
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
                  <PostLink url="">Privacy Policy</PostLink> and agree to it's{" "}
                  <PostLink url="/terms-and-conditions">
                    Terms and Conditions
                  </PostLink>
                  .
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Main>
    </>
  );
};

export default PrivacyPolicy;
