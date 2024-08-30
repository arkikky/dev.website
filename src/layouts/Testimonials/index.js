import React, { useState } from "react";
import getConfig from "next/config";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, EffectCards } from "swiper/modules";
import Image from "next/image";

// @Get .config
const { publicRuntimeConfig } = getConfig();

// @Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

// @Component's
import Container from "@components/Container";

// @Lib's
import dtTestimonials from "@lib/data/testimonials.json";

const Testimonials = () => {
  const [getTestimonials, setTestimonials] = useState(dtTestimonials);

  return (
    <>
      <section
        id="caTestimonials"
        className="flex flex-col bg-[#F5F5F5] mt-12 sm:mt-24"
      >
        <Container>
          <div className="flex flex-col items-center justify-center text-center mt-12">
            <h2 className="text-black-800 font-bevietnamPro h2 font-bold uppercase">
              Testimonials
            </h2>
          </div>
          <div className="flex flex-col relative overflow-clip max-h-[731px]">
            <Swiper
              id="caSwpeTestimonials"
              direction={"vertical"}
              effect={"cards"}
              centeredSlides={true}
              cardsEffect={{
                rotate: false,
                perSlideOffset: 8,
              }}
              pagination={{
                el: ".swpePaginationLine",
                bulletActiveClass: "swiper-pagination-lineActive",
                bulletClass: "swiper-pagination-line",
                clickable: true,
                verticalClass: false,
              }}
              mousewheel={true}
              rewind={true}
              slidesPerView={1}
              spaceBetween={0}
              grabCursor={true}
              modules={[Mousewheel, Pagination, EffectCards]}
              className="caSwpeTestimonials swpeVertical mt-13 h-[418px] sm:h-[505px] lg:h-[648px] w-full"
            >
              {getTestimonials?.map((getResult, index) => (
                <SwiperSlide className="rounded-[10px] relative" key={index}>
                  <div className="relative h-full w-full">
                    <Image
                      className="object-cover object-[78%] sm:object-center h-full w-full"
                      src={getResult.picture}
                      alt={`${publicRuntimeConfig.siteAppName} (${getResult.nama} - Testimonials)`}
                      sizes="(min-width: 1874px) 246vw,
                        (min-width: 1536px) 257vw,
                        (min-width: 1280px) 313vw,
                        (min-width: 1024px) 395vw,
                        (min-width: 640px) 631vw,
                        1005vw"
                      height={1072}
                      width={2068}
                      quality="87"
                    />
                    <div className="flex flex-col items-center justify-end lg:justify-center absolute inset-y-0 left-0 lg:left-15 right-0 max-w-[541px] lg:max-w-[690px] z-10">
                      <div className="flex flex-col pb-4 sm:pb-8 lg:pb-0 px-4 sm:px-9 lg:px-0">
                        <div className="flex flex-col items-start justify-start h-[60px] w-full">
                          <Image
                            className="mt-auto h-auto min-w-[29px] sm:min-h-[31px] lg:min-h-[40px] w-auto"
                            src={getResult.brand}
                            alt={`${publicRuntimeConfig.siteAppName} (${getResult.nama} - Brand Testimonials)`}
                            sizes="(min-width: 1874px) 196vw,
                              (min-width: 1536px) 213vw,
                              (min-width: 1280px) 213vw,
                              (min-width: 1024px) 295vw,
                              (min-width: 640px) 351vw,
                              755vw"
                            height={79}
                            width={256}
                            quality="87"
                          />
                        </div>
                        <h3 className="text-white font-bevietnamPro text-lg sm:text-xl lg:text-[32px] lg:leading-[44px] font-normal mt-2 sm:mt-6">
                          {`“${getResult.bio}"`}
                        </h3>
                        <div className="flex flex-col items-start justify-start mt-2 sm:mt-6">
                          <h4 className="text-white font-bevietnamPro text-base sm:text-lg lg:text-2xl font-semibold">
                            {getResult.nama}
                          </h4>
                          <p className="text-white/60 font-bevietnamPro text-sm sm:text-lg lg:text-2xl font-light">
                            {getResult.label}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex items-center justify-center mt-7 mb-8 sm:my-9">
            <div className="swpePaginationLine"></div>
          </div>
        </Container>
      </section>
    </>
  );
};
export default Testimonials;
