import React from 'react';
import dynamic from 'next/dynamic';
import getConfig from 'next/config';
import Link from 'next/link';
import Image from 'next/image';

// @get .config
const { publicRuntimeConfig } = getConfig();

// @components
import Container from '@components/Container';
import FooterMenu from '@components/UI/FooterMenu';
const FooterSocialMedia = dynamic(
  () => import('@components/UI/FooterSocialMedia'),
  {
    loading: () => '',
    ssr: false,
  }
);

const Footer = ({ nonStore = false, theme = 'light', menuUsage = true }) => {
  return (
    <>
      <footer
        className={`ca2024Footer ${theme === 'light' ? 'ca2024Footer_Light' : 'ca2024Footer_Dark'} relative justify-end overflow-x-hidden ${nonStore === true ? 'pb-6 sm:pb-8' : 'pb-[92px] sm:pb-28 lg:pb-8'} pt-10`}
      >
        <Container>
          <div className="relative flex flex-col items-start justify-start">
            <div className="block w-full">
              <div className="flex flex-col">
                <div className="relative block w-max">
                  {theme === 'light' ? (
                    <Image
                      className="mx-auto my-auto aspect-auto h-auto w-[148px] sm:w-[172px]"
                      src={'/assets/images/ca2025Brand.svg'}
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
                className={`${menuUsage === false ? 'mt-8 lg:mt-10' : 'mt-18 lg:mt-20 xl:mt-24'} block w-full text-balance pr-0 text-sm font-medium sm:text-pretty sm:pr-4 lg:pr-0 xl:text-wrap xl:pr-[98px]`}
              >
                {`Coinfest Asia adalah acara tertutup yang berfokus pada edukasi
                dan pengembangan industri, dengan tujuan memberi dampak positif
                terhadap perekonomian Indonesia. Partisipasi terbatas hanya
                untuk tamu undangan dan peserta yang telah terdaftar.`}
              </div>
            </div>
            <div className="ca2024FooterEnd mt-8 flex w-full flex-col items-start justify-start sm:mt-10 lg:flex-row lg:items-center lg:justify-between">
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
