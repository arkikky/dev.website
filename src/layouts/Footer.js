import React from 'react';
import dynamic from 'next/dynamic';
import getConfig from 'next/config';
import Link from 'next/link';
import Image from 'next/image';

// @get .config
const { publicRuntimeConfig } = getConfig();

// @lib
import { useStoreContext } from '@lib/context/store/StoreContext';

// @components
import Container from '@components/Container';
import StarryBackground from '@components/UI/Background/StarryBackground';
import FooterMenu from '@components/UI/FooterMenu';
const FooterSocialMedia = dynamic(
  () => import('@components/UI/FooterSocialMedia'),
  {
    loading: () => '',
    ssr: false,
  }
);

const Footer = ({ nonStore = false, theme = 'light', menuUsage = true }) => {
  const { getStore } = useStoreContext();

  return (
    <>
      <footer
        className={`ca2024Footer ${theme === 'light' ? 'ca2024Footer_Light' : 'ca2024Footer_Dark bg-[linear-gradient(186deg,rgba(31,31,31,1)_35%,rgba(28,37,55,1)_42%,rgba(19,54,119,1)_53%,rgba(0,90,255,1)_75%,rgba(36,116,253,1)_85%,rgba(88,153,251,1)_97%,rgba(122,177,249,1)_100%)]'} relative justify-end overflow-x-hidden ${nonStore === true ? 'pb-6 sm:pb-8' : getStore?.length > 0 ? 'pb-[94px] sm:pb-[123px]' : 'pb-6 sm:pb-8'} pt-0`}
      >
        <div className="pointer-events-none absolute inset-x-0 inset-y-0 -z-px h-full w-full select-none">
          <StarryBackground starCount={110} />
        </div>

        <Container>
          <div className="relative z-10 flex flex-col items-start justify-start">
            <div className="block w-full">
              <div className="flex flex-col">
                <div className="relative block w-max">
                  {theme === 'light' ? (
                    <Image
                      className="mx-auto my-auto aspect-auto h-auto w-[148px] sm:w-[172px]"
                      src={'/assets/images/ca2025BrandDark.svg'}
                      alt={`${publicRuntimeConfig?.siteAppName} Primary Brand LOGO Footer`}
                      height={58}
                      width={170}
                      quality="87"
                    />
                  ) : (
                    <Image
                      className="mx-auto my-auto aspect-auto h-auto w-[148px] sm:w-[172px]"
                      src={'/assets/images/ca2025BrandLight.svg'}
                      alt={`${publicRuntimeConfig?.siteAppName} Primary Brand LOGO Footer`}
                      height={58}
                      width={170}
                      quality="87"
                    />
                  )}
                </div>

                {menuUsage === true ? <FooterMenu isTheme={theme} /> : null}
              </div>
              <div
                className={`${menuUsage === false ? 'mt-8 lg:mt-10' : 'mt-18 lg:mt-20 xl:mt-24'} block w-full text-balance pr-0 text-sm font-light sm:text-pretty sm:pr-4 lg:pr-0 xl:text-wrap xl:pr-[98px]`}
              >
                {`Coinfest Asia adalah acara tertutup yang berfokus pada edukasi
                dan pengembangan industri, dengan tujuan memberi dampak positif
                terhadap perekonomian Indonesia. Partisipasi terbatas hanya
                untuk tamu undangan dan peserta yang telah terdaftar.`}
              </div>
            </div>
            <div className="ca2024FooterEnd relative z-10 mt-8 flex w-full flex-col items-start justify-start sm:mt-10 lg:flex-row lg:items-center lg:justify-between">
              <div
                className={`ca2024FooterEnd_Cntent w-full max-w-[567px] text-balance font-bevietnamPro text-sm ${theme === 'light' ? 'font-light' : 'font-extralight'} prose-a:font-normal prose-a:underline prose-strong:font-normal xl:max-w-max`}
              >
                © <strong>Coinfest Asia</strong>. All rights reserved, Coinfest
                Asia is organized by{' '}
                <Link
                  href="https://coinvestasi.com/"
                  title={`${publicRuntimeConfig?.siteAppName} organized by Coinvestasi`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Coinvestasi
                </Link>
                , a subsidiary of 
                <Link
                  href="https://indonesiacrypto.network/"
                  title={`${publicRuntimeConfig?.siteAppName} a subsidiary of Indonesia Crypto Network`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Indonesia Crypto Network
                </Link>
                .
              </div>

              {/* @list-socialmedia */}
              {theme === 'light' ? (
                <FooterSocialMedia
                  list={[
                    {
                      label: 'Instagram',
                      icons:
                        '/assets/images/social-media/ca25Dark-Instagram.svg',
                      url: 'https://www.instagram.com/coinfest.asia/',
                    },
                    {
                      label: 'Twitter',
                      icons: '/assets/images/social-media/ca25Dark-Twitter.svg',
                      url: 'https://twitter.com/coinfestasia',
                    },
                    {
                      label: 'Telegram',
                      icons:
                        '/assets/images/social-media/ca25Dark-Telegram.svg',
                      url: 'https://t.me/coinfestasiaofficial',
                    },
                    {
                      label: 'LinkedIn',
                      icons:
                        '/assets/images/social-media/ca25Dark-LinkedIn.svg',
                      url: 'https://www.linkedin.com/showcase/coinfest/',
                    },
                  ]}
                />
              ) : (
                <FooterSocialMedia
                  list={[
                    {
                      label: 'Instagram',
                      icons:
                        '/assets/images/social-media/ca25Light-Instagram.svg',
                      url: 'https://www.instagram.com/coinfest.asia/',
                    },
                    {
                      label: 'Twitter',
                      icons:
                        '/assets/images/social-media/ca25Light-Twitter.svg',
                      url: 'https://twitter.com/coinfestasia',
                    },
                    {
                      label: 'Telegram',
                      icons:
                        '/assets/images/social-media/ca25Light-Telegram.svg',
                      url: 'https://t.me/coinfestasiaofficial',
                    },
                    {
                      label: 'LinkedIn',
                      icons:
                        '/assets/images/social-media/ca25Light-LinkedIn.svg',
                      url: 'https://www.linkedin.com/showcase/coinfest/',
                    },
                  ]}
                />
              )}
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
