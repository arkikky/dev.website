import React from "react";
import getConfig from "next/config";
import Head from "next/head";

// @get .config
const { publicRuntimeConfig } = getConfig();

// @components
import Container from "@components/Container";
import FAQList from "@layouts/FAQList";

// @layouts
import BannerFooter from "@layouts/Banner/BannerFooter";

const Faq = () => {
  return (
    <>
      {/* @head */}
      <Head>
        <title>{`Frequently Asked Questions | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta
          name="title"
          content={`Frequently Asked Questions | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta name="description" content={publicRuntimeConfig.siteDesc} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="og:title"
          content={`Frequently Asked Questions | ${publicRuntimeConfig.siteTitle}`}
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
          content={`Frequently Asked Questions | ${publicRuntimeConfig.siteTitle}`}
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
      <main className="relative pt-[159px] xl:pt-[159px] 2xl:pt-[205px]">
        <Container>
          <div className="relative mb-14 grid-cols-4 gap-x-2 gap-y-2 supports-grid:grid sm:mb-0 sm:grid-cols-12 lg:grid-cols-12">
            <div className="col-span-full col-start-1 sm:col-span-10 sm:col-start-2">
              <div className="flex flex-col">
                <div className="flex flex-col items-start justify-start">
                  <h1
                    className={`ca2024BgOverflayBlue relative mr-3 inline-flex w-max cursor-pointer items-center justify-center rounded-full bg-secondary px-4 py-2 font-bevietnamPro text-sm font-light text-white outline-none last:mr-0 focus-visible:outline-none sm:text-base`}
                  >
                    Frequently Asked Questions
                  </h1>
                  <span className="mt-6 text-start font-staraBold text-[32px] font-bold uppercase leading-[38px] sm:text-center">
                    Got Questions About Coinfest Asia?
                  </span>
                  <p className="font-lg mt-0 font-light text-[#5D5D5D]">
                    Uncover all the details you need about Asia's premier
                    blockchain event!
                  </p>
                </div>

                {/* @faq(list) */}
                <FAQList />
              </div>
            </div>
          </div>
        </Container>

        {/* @banner-footer */}
        <BannerFooter />
      </main>
    </>
  );
};

export default Faq;

export const getStaticProps = async () => {
  try {
    return {
      props: {},
      revalidate: 3600,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
