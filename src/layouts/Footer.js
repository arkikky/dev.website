import React from 'react';
import Link from 'next/link';

// @components
import Container from '@components/Container';
import FooterSocialMedia from '@components/UI/FooterSocialMedia';

const Footer = () => {
  return (
    <>
      <footer className="ca2024Footer ca2024SectionEnd relative justify-end overflow-x-hidden bg-white pb-[104px] pt-10 sm:pb-28 sm:pt-12 lg:pb-8">
        <Container>
          <div className="relative flex flex-col items-start justify-start">
            <div>
              <div className="flex w-full flex-col text-balance pr-0 text-sm font-medium sm:pr-4 lg:pr-0 xl:text-wrap xl:pr-[98px]">
                {`Coinfest Asia adalah acara tertutup yang berfokus pada edukasi
                dan pengembangan industri, dengan tujuan memberi dampak positif
                terhadap perekonomian Indonesia. Partisipasi terbatas hanya
                untuk tamu undangan dan peserta yang telah terdaftar.`}
              </div>
            </div>
            <div className="mt-8 flex w-full flex-col items-start justify-start sm:mt-10 lg:mt-12 lg:flex-row lg:items-center lg:justify-between">
              <div className="w-full max-w-[567px] font-bevietnamPro text-sm font-light text-black-900 prose-a:text-primary prose-a:underline prose-strong:font-medium prose-strong:text-primary xl:max-w-max">
                © <strong>Coinfest Asia</strong>. All rights reserved, Coinfest
                is organized by{' '}
                <Link
                  href="https://coinvestasi.com/"
                  title="Coinfest Asia 2025 (Coinvestasi)"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Coinvestasi
                </Link>
                , a subsidiary of 
                <Link
                  href="https://indonesiacrypto.network/"
                  title="Coinfest Asia 2025 (Indonesia Crypto Network)"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Indonesia Crypto Network
                </Link>
                .
              </div>

              {/* @list-socialmedia */}
              <FooterSocialMedia
                list={[
                  {
                    label: 'Instagram',
                    icons: '/assets/images/social-media/ca2025Instagram.svg',
                    url: 'https://www.instagram.com/coinfest.asia/',
                  },
                  {
                    label: 'Twitter',
                    icons: '/assets/images/social-media/ca2025Twitter.svg',
                    url: 'https://twitter.com/coinfestasia',
                  },
                  {
                    label: 'Telegram',
                    icons: '/assets/images/social-media/ca2025Telegram.svg',
                    url: 'https://t.me/coinfestasiaofficial',
                  },
                  {
                    label: 'LinkedIn',
                    icons: '/assets/images/social-media/ca2025LinkedIn.svg',
                    url: 'https://www.linkedin.com/showcase/coinfest/',
                  },
                ]}
              />
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
