import React, { useState, useEffect } from "react";
import getConfig from "next/config";
import Head from "next/head";

// @get .config
const { publicRuntimeConfig } = getConfig();

// @controller
import { getFetch } from "@lib/controller/API";

// @components
import Container from "@components/Container";
import SpeakersCard from "@components/UI/Card/Speakers";
import SpeakersModal from "@components/UI/Modal/SpeakersModal";

// @layouts
import BannerFooter from "@layouts/Banner/BannerFooter";

const Speakers = ({ speakers }) => {
  const [isSpeakers, setSpeakers] = useState(speakers);
  const [isSpeakersModal, setSpeakersModal] = useState(null);

  // @preline (Add Plugins)
  useEffect(() => {
    import("preline");

    return () => {
      undefined;
    };
  }, []);

  {
    /* @speakers-modal */
  }
  const isModal = ({
    id,
    name,
    images,
    position,
    aboutMe,
    connectWithMe,
    logoCompany,
  }) => {
    setSpeakersModal({
      id: id,
      images: images,
      name: name,
      position: position,
      aboutMe,
      connectWithMe,
      logoCompany,
    });
  };

  return (
    <>
      {/* @head */}
      <Head>
        <title>{`Speakers | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta
          name="title"
          content={`Speakers | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta name="description" content={publicRuntimeConfig.siteDesc} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="og:title"
          content={`Speakers | ${publicRuntimeConfig.siteTitle}`}
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
          content={`Speakers | ${publicRuntimeConfig.siteTitle}`}
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
      <main className="relative pt-[129px] xl:pt-[139px] 2xl:pt-[185px]">
        <Container className="relative z-[5] overflow-hidden">
          <div className="relative flex flex-col pb-20 sm:pb-0 xl:pb-28">
            <div className="flex flex-col items-center justify-center pr-0">
              <h1 className="font-staraExtraBold text-[32px] uppercase leading-[40px] text-black-900 sm:text-[58px] sm:leading-[74px] lg:text-[80px] lg:leading-[90px] xl:text-[72px] xl:leading-[86px] 2xl:text-[80px] 2xl:leading-[90px]">
                Speakers
              </h1>
            </div>

            <div className="relative mt-8 grid-cols-4 gap-x-4 gap-y-4 supports-grid:grid sm:mt-11 sm:grid-cols-12 sm:gap-x-6 sm:gap-y-6 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-10">
              {isSpeakers.data?.map((gtRslt, i) => (
                <div
                  className={`ca2024SpeakersCard col-span-2 sm:col-span-4 lg:col-span-3 ${gtRslt.id}`}
                  key={i}
                >
                  <button
                    id={`mdlBtnSpeakers${gtRslt.attributes.name}`}
                    className="mdlBtnSpeakers w-full min-w-full outline-none focus-visible:outline-none"
                    aria-label={`${gtRslt.attributes.name} - (Button Modal Speakers)`}
                    aria-labelledby={`${gtRslt.attributes.name} - (Button Modal Speakers)`}
                    data-hs-overlay={`#mdlSpeakers`}
                    onClick={(e) => {
                      e.preventDefault();

                      isModal({
                        id: gtRslt.id,
                        images: gtRslt.attributes
                          ? process.env.NEXT_PUBLIC_UPLOAD +
                            gtRslt.attributes.profilePicture.data.attributes.url
                          : "",
                        name: gtRslt.attributes.name,
                        position: gtRslt.attributes.position,
                        aboutMe: gtRslt.attributes.aboutMe,
                        connectWithMe: gtRslt.attributes.connectWithMe,
                        // logoCompany: gtRslt.attributes.popupLogo
                        //   ? process.env.NEXT_PUBLIC_UPLOAD +
                        //     gtRslt.attributes.popupLogo.data.attributes.url
                        //   : "",
                      });
                    }}
                  >
                    <SpeakersCard {...gtRslt} useHeading="h2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </Container>

        {/* @banner-footer */}
        <BannerFooter />

        {/* @speakers-modal */}
        <SpeakersModal {...isSpeakersModal} />
      </main>
    </>
  );
};

export default Speakers;

export const getStaticProps = async () => {
  const isSpeakers = await getFetch(
    `/ca-24-speakers?sort=rank:asc&populate=*&pagination[pageSize]=100`,
  );

  try {
    return {
      props: {
        speakers: isSpeakers || [],
      },

      revalidate: 3600,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
