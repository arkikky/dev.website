import React, { useState, useEffect } from "react";
import getConfig from "next/config";
import Head from "next/head";
import Image from "next/image";

// @get .config
const { publicRuntimeConfig } = getConfig();

// @lib
import { getFetchUrl, getFetch } from "@lib/controller/Api";

const divideIntoCategories = (photos) => {
  const category1 = [];
  const category2 = [];
  const category3 = [];

  photos.forEach((photo, index) => {
    if (index % 3 === 0) {
      category1.push(photo);
    } else if (index % 3 === 1) {
      category2.push(photo);
    } else {
      category3.push(photo);
    }
  });

  return [category1, category2, category3];
};

// @components
import Main from "@components/Main";
import Container from "@components/Container";
import PhotoImagesModal from "@components/UI/Modal/PhotoImagesModal";
import FooterBanner from "@layouts/SponsorshipBanner";

const SponsorshipGetInvolved = ({ getPhotos, getTotalPagePhotos }) => {
  const [isGalleryModal, setGalleryModal] = useState(null);
  const [isPage, setPage] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [isPhotos, setPhotos] = useState([]);

  {
    /* @gallery-modal */
  }
  const isModal = ({ images, title }) => {
    setGalleryModal({
      images: images,
      title: title,
    });
  };

  const fetchPhotos = async (isPageNum) => {
    try {
      const response = await fetch(
        `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=b9a82564663c12d137858a505eed53e3&photoset_id=72177720320182681&user_id=197557625@N08&format=json&per_page=73&page=${isPageNum}&nojsoncallback=1`
      );
      const data = await response.json();

      if (isPage === 1) {
        if (data.photoset) {
          setPhotos((prevPhotos) => [...data.photoset.photo]);
        }
      } else {
        if (data.photoset) {
          const sortedPhotos = data.photoset.photo.sort((a, b) => b.id - a.id);
          setPhotos((prevPhotos) => [...prevPhotos, ...sortedPhotos]);
        }
      }
    } catch (err) {
      // setError("Error fetching data");
    }
  };

  useEffect(() => {
    fetchPhotos(isPage);

    return () => {
      undefined;
    };
  }, [isPage]);

  //
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const isGallery = document.querySelector(".caMnsry_Gallery");

    if (scrollTop + windowHeight >= isGallery.scrollHeight - 140) {
      setShowLoadMore(true);
    } else {
      setShowLoadMore(false);
    }
  };

  useEffect(() => {
    // Pasang event listener untuk scroll
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showLoadMore, handleScroll]);

  // @button (Load more)
  const loadMore = (e) => {
    e.preventDefault();

    if (isPage === 1) {
      setPage(isPage + 1);
    } else {
      setPage((prevPage) => prevPage + 1);
    }
  };

  // @debug
  // useEffect(() => {
  //   console.log(isPage);

  //   return () => {
  //     undefined;
  //   };
  // }, [isPage]);

  return (
    <>
      {/* @head */}
      <Head>
        <title>{`Gallery | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta
          name="title"
          content={`Gallery | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta name="description" content={publicRuntimeConfig.siteUrl} />

        {/* @open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="og:title"
          content={`Gallery | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta property="og:description" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_UPLOAD}/uploads/ca2024_Thumbnails_Share_Link_App_9964b5c353.png`}
        />
        <meta
          property="og:site_name"
          content={`${publicRuntimeConfig.siteTitle}`}
        />

        {/* @twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="twitter:title"
          content={`Gallery | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta
          property="twitter:description"
          content={publicRuntimeConfig.siteUrl}
        />
        <meta
          property="twitter:image"
          content={`${process.env.NEXT_PUBLIC_UPLOAD}/uploads/ca2024_Thumbnails_Share_Link_App_9964b5c353.png`}
        />
      </Head>

      {/* @main */}
      <Main className="relative pt-[79px] xl:pt-[139px]">
        <Container>
          <div className="pt-8 sm:pt-10 mx-auto">
            <h1 className="mx-auto mb-8 w-full max-w-full sm:mb-10 lg:mb-14 sm:max-w-[440px] text-center text-[32px] sm:text-[40px] leading-[38px] sm:leading-[48px] font-bold">
              Gallery
            </h1>
            <div className="caMnsry_Gallery gap-x-2 sm:gap-x-4">
              {isPhotos?.map((photo, i) => (
                <>
                  <div
                    className="caMnsry_GalleryBox flex flex-col relative min-h-auto xl:min-h-[278px] h-auto break-inside-avoid"
                    key={i}
                  >
                    <div
                      id={`btnPhotoImagesModal`}
                      className={`btnPhotoImagesModal z-10 cursor-pointer flex-col items-center justify-center relative`}
                      aria-labelledby={`Gallery - Photo Modal 2025`}
                      // data-hs-overlay={`#photoImagesModal`}
                      // onClick={(e) => {
                      //   e.preventDefault();

                      //   isModal({
                      //     images: `https://farm66.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_c.jpg`,
                      //     title: photo.title,
                      //   });
                      // }}
                    >
                      <Image
                        className="bg-gray-400 flex flex-col h-auto w-full object-cover"
                        src={`https://farm66.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg`}
                        alt={`${photo.title} - Gallery`}
                        width={520}
                        height={739}
                        quality={87}
                      />
                    </div>
                  </div>
                </>
              ))}
            </div>

            {isPage < getTotalPagePhotos + 1 && (
              <>
                <div className="flex flex-col items-center justify-center w-full sticky bottom-8 inset-x-0 mt-12 z-[12]">
                  <button
                    className={`mx-auto bg-secondary rounded-2xl overflow-hidden text-sm sm:text-base w-max py-3 sm:py-4 px-4 sm:px-8 ${
                      showLoadMore === true ? "opacity-100" : "opacity-0"
                    } transition duration-300 ease-in-out`}
                    onClick={(e) => {
                      loadMore(e);
                    }}
                  >
                    Load More
                  </button>
                </div>
              </>
            )}
          </div>
        </Container>

        {/* @banner-email (Subscrbe) */}
        <FooterBanner />
      </Main>

      <PhotoImagesModal {...isGalleryModal} />
    </>
  );
};

export default SponsorshipGetInvolved;

export const getStaticProps = async () => {
  const getFlickrAssets = await getFetchUrl(
    `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=b9a82564663c12d137858a505eed53e3&photoset_id=72177720320182681&user_id=197557625@N08&format=json&per_page=75&page=1&nojsoncallback=1`
  );

  const isPhotos = getFlickrAssets.photoset.photo;
  const isPagePhotos = getFlickrAssets.photoset.pages;

  try {
    return {
      props: {
        getPhotos: isPhotos || [],
        getTotalPagePhotos: isPagePhotos || [],
      },

      revalidate: 900,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
