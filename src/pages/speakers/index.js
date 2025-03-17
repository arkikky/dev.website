import React, { useState } from 'react';
import Link from 'next/link';
import getConfig from 'next/config';

// @get .config
const { publicRuntimeConfig } = getConfig();

// @lib/controller & helper
import { getFetchUrl } from '@lib/controller/API';

// @components
import HeadGraphSeo from '@components/Head';
import Main from '@components/Main';
import Container from '@components/Container';
import SpeakerModal from '@components/UI/Modal/SpeakerModal';
import SpeakerCards from '@components/UI/Cards/SpeakerCards';

// @layouts
import MoonPortalBanner from '@layouts/Banner/MoonPortalBanner';

const Speakers = ({ mode, collections }) => {
  const [isCollections, setCollections] = useState({
    speakers: collections?.speakers,
  });
  const [isSpeakerModal, setSpeakerModal] = useState(null);

  {
    /* @speakers-modal */
  }
  const isModal = ({ id, name, images, position, aboutMe, connectWithMe }) => {
    setSpeakerModal({
      id: id,
      images: images,
      name: name,
    });
  };

  return (
    <>
      {/* @head */}
      <HeadGraphSeo
        title={`Speakers`}
        canonicalUrl={`${publicRuntimeConfig?.siteUrl}/speakers`}
        otherPage={true}
      />

      {/* @main */}
      <Main className="relative flex flex-col overflow-hidden pb-16 pt-[141px] sm:pb-24 sm:pt-[161px]">
        <Container className={'relative z-[4] pb-20 sm:pb-28'}>
          <div className="flex flex-col items-center justify-center text-center">
            <h1
              className={`ca25HeadingTitle w-full text-center font-semibold uppercase sm:font-bold ${mode === 'light' ? 'text-black-900' : 'text-white'} mb-4 text-balance sm:mb-7`}
            >
              {'SPEAKERS'
                ?.split('')
                ?.map((chr, i) =>
                  ['E', 'O', 'A', '0'].includes(chr) ? (
                    <span key={i}>{chr}</span>
                  ) : (
                    chr
                  )
                )}
            </h1>

            <div className="relative mt-5 w-full grid-cols-4 gap-x-3 gap-y-4 supports-grid:grid sm:mt-3 sm:grid-cols-12 sm:gap-x-4 sm:gap-y-4 lg:mt-8 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-5 xl:gap-x-8 xl:gap-y-8">
              {isCollections?.speakers?.map((rslt, i) => (
                <div
                  className={`ca25SpeakersCard col-span-2 sm:col-span-4 lg:col-span-3`}
                  key={i}
                >
                  {!rslt.comingSoon ? (
                    <button
                      id={`btnSpeaker_${rslt.name}`}
                      className="btnSpeakers w-full min-w-full outline-none focus-visible:outline-none"
                      aria-label={`${rslt.name} Button Modal Speaker Coinfest Asia 2025`}
                      aria-labelledby={`${rslt.name} Button Modal Speaker Coinfest Asia 2025`}
                      aria-haspopup="dialog"
                      aria-expanded="false"
                      aria-controls="mdl-CA25Speakers"
                      data-hs-overlay={`#mdlCA25Speakers`}
                      onClick={(e) => {
                        e.preventDefault();

                        isModal({
                          id: 0,
                          images: rslt.images ?? '',
                          name: rslt.name ?? '',
                          // position: rslt.attributes.position,
                          // aboutMe: rslt.attributes.aboutMe,
                          // connectWithMe: rslt.attributes.connectWithMe,
                        });
                      }}
                    >
                      <SpeakerCards {...rslt} useHeading="h2" />
                    </button>
                  ) : (
                    <SpeakerCards {...rslt} useHeading="h2" />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center pt-11 text-center lg:pt-18 xl:pt-24">
            <h2
              className={`ca25HeadingTitle w-full text-center font-semibold uppercase sm:font-bold ${mode === 'light' ? 'text-black-900' : 'text-white'} mb-4 text-balance sm:mb-7`}
            >
              {'2025 SPEAKERS'
                ?.split('')
                ?.map((chr, i) =>
                  ['E', 'O', 'A', '0'].includes(chr) ? (
                    <span key={i}>{chr}</span>
                  ) : (
                    chr
                  )
                )}{' '}
              A
              {'NNOUNCING SOON'
                ?.split('')
                ?.map((chr, i) =>
                  ['E', 'O', 'A', '0'].includes(chr) ? (
                    <span key={i}>{chr}</span>
                  ) : (
                    chr
                  )
                )}
            </h2>
            <Link
              className={`ca25MoonBtn-Embossed group relative mx-auto inline-flex w-[174px] items-center justify-center overflow-hidden rounded-full bg-[#ED4F35] px-3 py-3 text-sm font-semibold uppercase text-white disabled:pointer-events-none disabled:opacity-90 sm:w-[237px] sm:px-6 sm:py-5`}
              href="/get-involved"
              title={`Coinfest Asia 2025 Apply As Speaker`}
            >
              {`Apply As Speaker`}
              <div className="absolute inset-0 flex h-full w-full justify-center blur-md [transform:skew(-13deg)_translateX(-100%)] group-hover:transition-[transform] group-hover:duration-[1.6s] group-hover:[transform:skew(-13deg)_translateX(100%)]">
                <div className="relative h-full w-12 bg-white/40"></div>
              </div>
            </Link>
          </div>
        </Container>

        {/* @banner(footer) */}
        <MoonPortalBanner mode={mode} />

        {/* @speakers-modal */}
        <SpeakerModal {...isSpeakerModal} />
      </Main>
    </>
  );
};

export const getStaticProps = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_URL;

  try {
    const isStoreLayouts = false;
    const [rsSpeakers] = await Promise.all([
      getFetchUrl(`${baseUrl}api/v1/collections/speakers?sv=coinfestasia`),
    ]);
    return {
      props: {
        mode: 'dark',
        layouts: isStoreLayouts || false,
        collections: {
          speakers: rsSpeakers?.data || null,
        },
      },
      revalidate: 900,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
export default Speakers;
