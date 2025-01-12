import React from 'react';
import dynamic from 'next/dynamic';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

// @components
import Container from '@components/Container';
const SocialMentionCards = dynamic(
  () => import('@components/UI/Cards/SocialMentionsCards'),
  {
    loading: () => '',
    ssr: false,
  }
);
// import SocialMentionCards from '@components/UI/Cards/SocialMentionsCards';

const SocialMentions = ({ mode, result = [] }) => {
  return (
    <>
      <section
        id="ca25SocialMentions"
        className="ca25SocialMentions ca25BackGroupPrimary relative bg-primary pb-18 pt-20"
      >
        <h2
          className={`ca25HeadingTitle w-full max-w-[525px] text-center font-semibold uppercase sm:font-bold lg:max-w-[855px] ${mode === 'light' ? 'text-black-900' : 'text-white'} relative z-[5] mx-auto mb-4 text-balance sm:mb-7`}
        >
          {'SEE WHAT PEOPLE ARE SAYING'
            ?.split('')
            ?.map((chr, i) =>
              ['E', 'A', 'O', '0'].includes(chr) ? (
                <span key={i}>{chr}</span>
              ) : (
                chr
              )
            )}
        </h2>
        <Container className={'relative z-[2]'}>
          <div
            className={`bckdrpCvrShdow relative mt-24 max-h-[1488px] min-h-[1488px]`}
          >
            {result && (
              <Splide
                tag="section"
                id="caSpldePeopleSaying"
                aria-label="Vertical Story"
                options={{
                  direction: 'ttb',
                  type: 'loop',
                  drag: 'free',
                  perPage: 1,
                  gap: '16px',
                  arrows: false,
                  pagination: false,
                  keyboard: false,
                  cloneStatus: false,
                  height: 'auto',
                  autoScroll: {
                    pauseOnFocus: false,
                    rewind: false,
                    speed: 2,
                  },
                }}
                extensions={{ AutoScroll }}
                className="caSpldePeopleSaying caSpldeMnsry max-h-[1488px] min-h-[1488px] w-full overflow-hidden"
              >
                <SplideSlide className="outline-none focus:outline-none">
                  <div className="ca25Mnsry">
                    {result?.map((rslt, i) => (
                      <div key={i} className="break-inside-avoid">
                        <SocialMentionCards {...rslt} />
                      </div>
                    ))}
                  </div>
                </SplideSlide>
              </Splide>
            )}
          </div>
        </Container>
      </section>
    </>
  );
};

export default SocialMentions;
