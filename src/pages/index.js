import React, { useState, useEffect } from 'react';
import { Toaster, toast } from 'sonner';
import getConfig from 'next/config';
import dynamic from 'next/dynamic';
import CryptoJS from 'crypto-js';
import Script from 'next/script';

// @get .config
const { publicRuntimeConfig } = getConfig();

// @redux
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart } from '@reduxState/slices';

// @lib/controller & helper
import { nonceSha256 } from '@lib/helper/TrackingAnalytics';
import { useCart } from '@lib/hooks/cart/Cart';
import { getFetch, getFetchUrl } from '@lib/controller/API';

// @components
import HeadGraphSeo from '@components/Head';
import Main from '@components/Main';
import Container from '@components/Container';
import ToastAlerts from '@components/UI/Alerts/ToastAlert';
import TicketProductsSkeleton from '@components/Skeleton/Products/TicketProducts';
const TicketProducts = dynamic(() => import('@components/UI/TicketProducts'), {
  loading: () => <TicketProductsSkeleton />,
  ssr: false,
});

// @layouts
import LayoutStore from '@layouts/LayoutStore';
import Headers from '@layouts/Headers';
import Abouts from '@layouts/Abouts';
import Partners from '@layouts/Partners';
import Speakers from '@layouts/Speakers';
import PortalBanner from '@layouts/Banner/PortalBanner';
import GetInvolved from '@layouts/GetInvolved';
import WhatsHappening from '@layouts/WhatsHappening';
// import SocialMentions from '@layouts/SocialMentions';
import FAQ from '@layouts/FAQ';
import MoonPortalBanner from '@layouts/Banner/MoonPortalBanner';

const Home = ({ mode, collections, products }) => {
  const dispatch = useDispatch();
  const { data: isCart } = useSelector((state) => state.cart);
  const { getStore } = useCart();
  const [isStore, setStore] = useState({
    products: products?.data,
    isQty: [],
  });
  // @hook(session product)
  const [isSessionProducts, setSessionProducts] = useState({
    id_product: null,
    loading: false,
  });
  const [isCollections, setCollections] = useState({
    aboutus: collections?.aboutus,
    speakers: collections?.speakers,
    partners: collections?.partners,
    getinvolved: collections?.getinvolved,
    whatsHappening: collections?.whatsHappening,
    socialMentions: collections?.socialMentions,
    faq: collections?.faq,
  });

  // @hanlde-change(product)
  const hndleChangeQty = async (idProducts, qtyProduct) => {
    if (qtyProduct > 0) {
      setStore((prev) => {
        const updatedTotalQty = prev?.isQty?.map((item) =>
          item?.id === idProducts ? { ...item, qty: qtyProduct } : item
        );
        // @check-exts
        const isIdExist = prev?.isQty?.some((item) => item?.id === idProducts);
        const newTotalQty = isIdExist
          ? updatedTotalQty
          : [...prev?.isQty, { id: idProducts, qty: qtyProduct }];
        return {
          ...prev,
          isQty: newTotalQty,
        };
      });
    }
  };
  // @hanlde-change(calculate product)
  useEffect(() => {
    const fakeUpdated = isStore?.isQty
      ?.filter((fakeItems) =>
        isCart?.some((items) => items?.id_product === fakeItems?.id)
      )
      .map((fakeItems) => {
        const cartItem = isCart?.find(
          (items) => items?.id_product === fakeItems?.id
        );
        return { ...fakeItems, qty: cartItem?.quantity || fakeItems?.qty };
      });
    setStore((prev) => ({
      ...prev,
      isQty: fakeUpdated,
    }));
  }, [isCart]);

  // @add-items(Cart)
  const hndleAddProduct_Cart = async (product, qtyProduct) => {
    if (isSessionProducts?.loading === true) return;
    setSessionProducts((prev) => ({
      ...prev,
      id_product: product?.documentId,
      loading: true,
    }));
    const products = {
      id_product: product?.documentId,
      quantity: qtyProduct,
    };
    // @check-stock(Product)
    const stock = +(product?.stock, 15);
    if (isNaN(stock) || stock <= 0) {
      setTimeout(() => {
        setSessionProducts((prev) => ({ ...prev, loading: false }));
        toast.custom(
          (t) => (
            <ToastAlerts
              id={t}
              position="inset-y-0 inset-x-0"
              type="info"
              visible={true}
              label={`Product stock is invalid or out of stock!`}
            />
          ),
          { duration: 5000 }
        );
      }, 700);
      return;
    }
    // @proses(add to cart)
    setTimeout(() => {
      setSessionProducts((prev) => ({ ...prev, loading: false }));
      dispatch(addItemToCart(products));
    }, 700);
  };

  // @hash-schema
  const hashNonce256 = CryptoJS.SHA256(nonceSha256).toString(
    CryptoJS.enc.Base64
  );
  // @schema(homepage)
  const schmaApp = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${publicRuntimeConfig?.siteUrl}#website`,
        url: `${publicRuntimeConfig?.siteUrl}`,
        name: `${publicRuntimeConfig?.siteAppName}`,
        alternateName: `${publicRuntimeConfig?.siteAppName}`,
        description: `${publicRuntimeConfig?.siteDesc}`,
        potentialAction: [
          {
            '@type': 'SearchAction',
            target: 'https://coinfest.asia/?s={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        ],
        inLanguage: 'en-US',
      },
      {
        '@type': 'ImageObject',
        '@id': `${publicRuntimeConfig?.siteUrl}#primaryimage`,
        inLanguage: 'en-US',
        url: `${process.env.NEXT_PUBLIC_UPLOAD}uploads/favicon_512x512_90ee34e190.png`,
        width: 1200,
        height: 628,
        caption: `${publicRuntimeConfig?.siteAppName} | ${publicRuntimeConfig?.siteDesc}`,
      },
      {
        '@type': 'WebPage',
        '@id': `${publicRuntimeConfig?.siteUrl}#webpage`,
        url: `${publicRuntimeConfig?.siteUrl}`,
        name: `${publicRuntimeConfig?.siteAppName}`,
        isPartOf: {
          '@id': `${publicRuntimeConfig?.siteUrl}#website`,
        },
        primaryImageOfPage: {
          '@id': `${publicRuntimeConfig?.siteUrl}#primaryimage`,
        },
        datePublished: '2025-01-07T12:45:42+00:00',
        dateModified: '2025-01-07T12:14:35+00:00',
        description: `${publicRuntimeConfig?.siteDesc}`,
        inLanguage: 'en-US',
      },
    ],
  };
  // @schema(brand logo)
  const schmaBrandLogo = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Coinfest Asia',
    url: `${publicRuntimeConfig?.siteUrl}`,
    logo: `${process.env.NEXT_PUBLIC_UPLOAD}uploads/favicon_512x512_90ee34e190.png`,
    sameAs: [
      `https://www.instagram.com/coinfest.asia/`,
      `https://twitter.com/coinfestasia`,
      `https://www.linkedin.com/showcase/coinfest/`,
    ],
  };
  return (
    <>
      {/* @head */}
      <HeadGraphSeo />

      {/* @script(schema) */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schmaApp) }}
        nonce={hashNonce256}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schmaBrandLogo) }}
        nonce={hashNonce256}
      />

      {/* @main */}
      <Main className="relative overflow-hidden pb-16 sm:pb-24">
        <Headers />

        {/* @about-us */}
        <Abouts mode={mode} result={isCollections?.aboutus} />

        {/* @tickets */}
        <section className="ca25Ticket-Section pb-24 pt-[92px] sm:pt-32 lg:pt-28 xl:pt-[144px]">
          <Container className={'relative'}>
            <div className="ca25MoonRckt !pointer-events-none absolute inset-x-0 inset-y-0 z-px mx-auto w-full !select-none"></div>

            <div className="mb-8 flex flex-col items-center justify-center text-center sm:mb-12">
              <h2
                className={`ca25HeadingTitle w-full text-center font-bold uppercase ${mode === 'light' ? 'text-black-900' : 'text-white'} text-balance`}
              >
                {'GET YOUR TICKETS NOW'
                  ?.split('')
                  .map((chr, i) =>
                    ['E', 'O'].includes(chr) ? <span key={i}>{chr}</span> : chr
                  )}
              </h2>
              <p className="mt-2 font-bevietnamPro text-base font-light text-gray-300 sm:mt-3.5 sm:text-xl">
                {`Prices exclude VAT`}
              </p>
            </div>
            {/* @products */}
            <div className="mt-4 grid-cols-1 gap-x-4 gap-y-4 supports-grid:grid sm:mt-10 sm:grid-cols-2 xl:grid-cols-3">
              {isStore?.products?.slice(0, 6).map((gtRslt, i) => {
                const isLoading =
                  isSessionProducts?.id_product === gtRslt.documentId &&
                  isSessionProducts?.loading === true;
                return (
                  <TicketProducts
                    useHeading={'h3'}
                    data={gtRslt}
                    cartProducts={getStore}
                    key={gtRslt.documentId}
                    isLoading={isLoading}
                    isSessionLoading={isSessionProducts?.loading}
                    onEventChange={hndleChangeQty}
                    handleProducts={hndleAddProduct_Cart}
                  />
                );
              })}
            </div>
          </Container>
        </section>

        {/* @banner(portal) */}
        <PortalBanner mode={mode} id={'ca25PortalBanner0'} />

        {/* @speakers */}
        <Speakers mode={mode} result={isCollections?.speakers} />

        {/* @partners */}
        <Partners mode={mode} result={isCollections?.partners} />

        {/* @getinvolved & whats-happening */}
        <div className="ca25Group relative bg-transparent pb-0 sm:pb-12">
          {/* @getinvolved */}
          <GetInvolved mode={mode} result={isCollections?.getinvolved} />

          {/* @whats-happening */}
          <WhatsHappening mode={mode} result={isCollections?.whatsHappening} />
        </div>

        {/* @banner(portal 1) */}
        <PortalBanner mode={mode} id={'ca25PortalBanner1'} />

        {/* @social-mentions */}
        {/* <SocialMentions mode={mode} result={isCollections?.socialMentions} /> */}

        {/* @faq */}
        <FAQ mode={mode} result={isCollections?.faq} />

        {/* @banner(footer) */}
        <MoonPortalBanner mode={mode} />
      </Main>

      {/* @alert(Toast)  */}
      <Toaster
        position="bottom-left"
        richColors
        gap="10"
        offset={18}
        dismissible={false}
        pauseWhenPageIsHidden={true}
        toastOptions={{
          className: 'ca25ToastAlert-Store',
        }}
      />
    </>
  );
};

Home.getLayout = (page, { pageProps }) => {
  const { mode, layouts, products } = pageProps;
  if (layouts) {
    return (
      <LayoutStore
        isTheme={mode}
        layoutStore={layouts}
        cartStore={products?.data}
      >
        {page}
      </LayoutStore>
    );
  }
  return page;
};
export const getServerSideProps = async (context) => {
  const baseUrl = process.env.NEXT_PUBLIC_URL;
  try {
    const isStoreLayouts = true;
    const [
      rsProducts,
      rsAboutUs,
      rsSpeakers,
      rsPartners,
      rsGetInvolved,
      rsWhatsHappening,
      rsSocialMentions,
      rsFAQ,
    ] = await Promise.all([
      getFetch(`/api/products?sort[0]=rank:asc`),
      getFetchUrl(`${baseUrl}/api/v1/collections/about-us?sv=coinfestasia`),
      getFetchUrl(`${baseUrl}/api/v1/collections/speakers?sv=coinfestasia`),
      getFetchUrl(`${baseUrl}/api/v1/collections/partners?sv=coinfestasia`),
      getFetchUrl(`${baseUrl}/api/v1/collections/get-involved?sv=coinfestasia`),
      getFetchUrl(
        `${baseUrl}/api/v1/collections/whats-happening?sv=coinfestasia`
      ),
      getFetchUrl(
        `https://hub.coinvestasi.com/api/people-says?sort=rank:asc&populate=*&pagination[pageSize]=100`
      ),
      getFetchUrl(`${baseUrl}/api/v1/collections/faq?sv=coinfestasia`),
    ]);

    return {
      props: {
        mode: 'dark',
        layouts: isStoreLayouts || false,
        collections: {
          aboutus: rsAboutUs?.data || null,
          speakers: rsSpeakers?.data || null,
          partners: rsPartners?.data || null,
          getinvolved: rsGetInvolved?.data || null,
          whatsHappening: rsWhatsHappening?.data || null,
          socialMentions: rsSocialMentions?.data || null,
          faq: rsFAQ?.data || null,
        },
        products: rsProducts || [],
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
export default Home;
