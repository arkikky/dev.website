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

  // @modal
  const isModal = ({ id, name, images, position, shortBio, logoCompany }) => {
    setSpeakersModal({
      id: id,
      images: images,
      name: name,
      position: position,
      shortBio,
      logoCompany,
    });
  };

  return (
    <>
      {/* @head */}
      <Head>
        <title>{`Speakers | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta name="title" content={`${publicRuntimeConfig.siteTitle}`} />
        <meta
          name="description"
          content={
            "Coinfest immerses you directly into adoption, innovation, and emerging markets in Asia. Join the immersive Web3 festival! Bali - August 2024"
          }
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="og:title"
          content={`Speakers | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta
          property="og:description"
          content={
            "Coinfest immerses you directly into adoption, innovation, and emerging markets in Asia. Join the immersive Web3 festival! Bali - August 2024"
          }
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
          content={
            "Coinfest immerses you directly into adoption, innovation, and emerging markets in Asia. Join the immersive Web3 festival! Bali - August 2024"
          }
        />
        <meta
          property="twitter:image"
          content={`${process.env.NEXT_PUBLIC_UPLOAD}/uploads/ca2024_Thumbnails_Share_Link_App_9964b5c353.png`}
        />
      </Head>

      {/* @main */}
      <main className="relative pt-[169px] xl:pt-[139px] 2xl:pt-[185px]">
        <Container className="relative z-[5] overflow-hidden">
          <div className="relative flex flex-col pb-28">
            <div className="flex flex-col items-start justify-start pr-11 sm:items-center sm:justify-center sm:pr-0">
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
                  <SpeakersCard {...gtRslt} useHeading="h2">
                    <button
                      id={`mdlBtnSpeakers`}
                      className="mdlBtnSpeakers absolute bottom-auto left-auto right-3 top-3 z-10 flex h-10 w-10 flex-col items-center justify-center rounded-xl bg-white opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 sm:right-4 sm:top-4"
                      // aria-label={`${isName} - (Modal Speakers)`}
                      // aria-labelledby={`${isName} - (Modal Speakers)`}
                      data-hs-overlay={`#mdlSpeakers`}
                      onClick={(e) => {
                        e.preventDefault();

                        isModal({
                          id: gtRslt.id,
                          images: gtRslt.attributes
                            ? process.env.NEXT_PUBLIC_UPLOAD +
                              gtRslt.attributes.profilePicture.data.attributes
                                .url
                            : "",
                          name: gtRslt.attributes.name,
                          position: gtRslt.attributes.position,
                          shortBio: gtRslt.attributes.shortBio,
                          logoCompany: gtRslt.attributes.logoCompany
                            ? process.env.NEXT_PUBLIC_UPLOAD +
                              gtRslt.attributes.logoCompany.data.attributes.url
                            : "",
                        });
                      }}
                    >
                      <svg
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.5251 5.49512L10.5205 7.49512L15.0781 7.50578L5.47461 17.0899L6.8874 18.5056L16.5172 8.89516L16.5064 13.5091L18.5064 13.5138L18.5251 5.51383L10.5251 5.49512Z"
                          fill="black"
                        />
                      </svg>
                    </button>
                  </SpeakersCard>
                </div>
              ))}
            </div>
          </div>
        </Container>

        {/* @banner-footer */}
        <BannerFooter />

        <SpeakersModal {...isSpeakersModal} />
      </main>
    </>
  );
};

export default Speakers;

export const getStaticProps = async () => {
  const isSpeakers = await getFetch(
    `/speaker-generals?sort=rank:asc&populate=*&pagination[pageSize]=100`,
  );

  try {
    return {
      props: {
        speakers: isSpeakers || [],
      },

      revalidate: 1800,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
