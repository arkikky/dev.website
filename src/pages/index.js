import React, { useState, useCallback, useEffect } from 'react';
import { toast } from 'sonner';
import getConfig from 'next/config';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// @get .config
const { publicRuntimeConfig } = getConfig();

// @redux
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart } from '@reduxState/slices';

// @lib/controller & helper
import { getFetch, getFetchUrl } from '@lib/controller/API';
import {
  getCombineMerged,
  splitIntoGroups,
  encodeData,
} from '@lib/helper/Configuration';

// @components
import HeadGraphSeo from '@components/Head';
import Main from '@components/Main';
import Container from '@components/Container';
import ToastAlerts from '@components/UI/Alerts/ToastAlert';
import StarryBackground from '@components/UI/Background/StarryBackground';
import TicketProductsSkeleton from '@components/Skeleton/Products/TicketProducts';
const TicketProducts = dynamic(() => import('@components/UI/TicketProducts'), {
  loading: () => <TicketProductsSkeleton />,
  ssr: false,
});

// @layouts
// import LayoutDefaults from '@layouts/Layouts';
import LayoutStore from '@layouts/LayoutStore';
import Headers from '@layouts/Headers';
import Abouts from '@layouts/Abouts';
import Partners from '@layouts/Partners';
import Speakers from '@layouts/Speakers';
import PortalBanner from '@layouts/Banner/PortalBanner';
import GetInvolved from '@layouts/GetInvolved';
import WhatsHappening from '@layouts/WhatsHappening';
import SocialMentions from '@layouts/SocialMentions';
import FAQ from '@layouts/FAQ';
import MoonPortalBanner from '@layouts/Banner/MoonPortalBanner';

const Home = ({ mode, result, products }) => {
  const dispatch = useDispatch();
  const { data: isCart } = useSelector((state) => state.cart);
  const [isStore, setStore] = useState({
    products: products?.data,
    cart: [],
    isQty: [],
  });
  // @hook(session product)
  const [isSessionProducts, setSessionProducts] = useState({
    id_product: null,
    loading: false,
  });
  const [isCollections, setCollections] = useState({
    aboutus: result?.aboutus,
    speakers: result?.speakers,
    partners: result?.partners,
    getinvolved: result?.getinvolved,
    whatsHappening: result?.whatsHappening,
    socialMentions: result?.socialMentions,
    faq: result?.faq,
  });

  // @initialize(store)
  const hndleHookProducts = useCallback(async () => {
    if (!isCart || isCart?.length > 3) return;
    try {
      const allProducts = await Promise.all(
        isCart?.map(async (data) => {
          const rsHook = await fetch('/api/data/products?sv=coinfestasia', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: encodeData(data?.id_product) }),
          }).then((res) => res?.json());
          return {
            id: rsHook?.id,
            documentId: rsHook?.documentId,
            productId: rsHook?.productId,
            name: rsHook?.name,
            price: rsHook?.price,
            priceSale: rsHook?.priceSale,
            stock: parseInt(rsHook?.stock),
          };
        })
      );
      // @hook(combine merged)
      const merged = getCombineMerged(allProducts, isCart);
      if (merged) setStore((prev) => ({ ...prev, cart: merged }));
    } catch (err) {
      return;
    }
  }, [isCart]);
  // @hook(store)
  useEffect(() => {
    hndleHookProducts();
    return () => {
      undefined;
    };
  }, [isCart]);

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
    const updatedFake = isStore?.isQty
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
      isQty: updatedFake,
    }));
    return () => {
      undefined;
    };
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
              position="bottom-[78px] inset-x-2.5 sm:inset-x-3 top-auto"
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

  return (
    <>
      {/* @head */}
      <HeadGraphSeo />

      {/* @main */}
      <Main className="relative overflow-hidden pb-16 sm:pb-24">
        <Headers />

        {/* @about-us */}
        <Abouts mode={mode} result={isCollections?.aboutus} />

        {/* @tickets */}
        <section className="ca25Ticket-Section pb-24 pt-18 sm:pt-32">
          <Container className={'relative'}>
            <div className="ca25MoonRckt !pointer-events-none absolute inset-x-0 inset-y-0 z-px mx-auto w-full !select-none"></div>

            <div className="mb-8 flex flex-col items-center justify-center text-center sm:mb-12">
              <h2
                className={`ca25HeadingTitle w-full max-w-[569px] text-center font-bold uppercase ${mode === 'light' ? 'text-black-900' : 'text-white'} text-balance`}
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
                    cartProducts={isStore?.cart}
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
        <div className="ca25Group relative bg-transparent pb-4 sm:pb-20">
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
    </>
  );
};

// Home.getLayout = (page, { pageProps }) => {
//   const { mode, layouts, products } = pageProps;
//   // if (layouts) {
//   //   return (
//   //     <LayoutStore isTheme={mode} layoutStore={layouts}>
//   //       {page}
//   //     </LayoutStore>
//   //   );
//   // }
//   return page;
// };
export const getServerSideProps = async (context) => {
  if (Object.keys(context?.query).length > 0) {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    };
  }
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
        result: {
          aboutus: rsAboutUs?.data,
          speakers: rsSpeakers?.data,
          partners: rsPartners?.data,
          getinvolved: rsGetInvolved?.data,
          whatsHappening: rsWhatsHappening?.data,
          socialMentions: rsSocialMentions?.data,
          faq: rsFAQ?.data,
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
