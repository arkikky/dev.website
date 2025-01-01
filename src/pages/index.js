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
import { getCombineMerged, encodeData } from '@lib/helper/Configuration';

// @components
import HeadGraphSeo from '@components/Head';
import Main from '@components/Main';
import Container from '@components/Container';
import ToastAlerts from '@components/UI/Alerts/ToastAlert';
import StarryBackground from '@components/UI/Background/StarryBackground';
import TicketProductsSkeleton from '@components/Skeleton/Products/TicketProducts';
const AboutUsCards = dynamic(
  () => import('@components/UI/Cards/AboutUsCards'),
  {
    loading: () => '',
    ssr: false,
  }
);
const TicketProducts = dynamic(() => import('@components/UI/TicketProducts'), {
  loading: () => <TicketProductsSkeleton />,
  ssr: false,
});

// @layouts
import LayoutStore from '@layouts/LayoutStore';
import Partners from '@layouts/Partners';
import Boards from '@layouts/Board';
import Speakers from '@layouts/Speakers';
import PortalBanner from '@layouts/Banner/PortalBanner';
import GetInvolved from '@layouts/GetInvolved';
import WhatsHappening from '@layouts/WhatsHappening';
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
    faq: result?.faq,
    whatsHappening: result?.whatsHappening,
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
      <Main className="relative overflow-hidden pb-16 pt-[135px] sm:pb-24 sm:pt-[144px] lg:pt-[183px]">
        <header className="h-[1024px]">
          <h1
            className={`ca25HeadingTitle w-full text-center font-bold uppercase ${mode === 'light' ? 'text-black-900' : 'text-white'} mb-8 text-balance sm:mb-12`}
          >
            {'WHERE INNOVATION MEET AND ADOPTION'
              ?.split('')
              .map((chr, i) =>
                ['E', 'O'].includes(chr) ? <span key={i}>{chr}</span> : chr
              )}
          </h1>
        </header>

        {/* @about-us */}
        <section className="ca25AboutUs relative bg-[linear-gradient(3deg,#1F1F1F_21%,#005AFF_53%,#7AB1F9,#ADD8E6)] pb-20 pt-[122px]">
          <div className="pointer-events-none absolute inset-x-0 inset-y-0 z-px select-none">
            <StarryBackground starCount={100} />
          </div>
          <Container className={'z-[5]'}>
            <Boards mode={mode} />
            <div className="relative mt-6 w-full min-w-full max-w-full grid-cols-4 gap-x-3 gap-y-3 supports-grid:grid sm:mt-10 sm:grid-cols-12 sm:gap-x-4 sm:gap-y-4 lg:grid-cols-12">
              {isCollections?.aboutus?.map((rslt, i) => (
                <div
                  className="col-span-full sm:col-span-6 lg:col-span-4"
                  key={i}
                >
                  <AboutUsCards
                    images={rslt?.images}
                    title={rslt?.title}
                    shortDesc={rslt?.shortDesc}
                  />
                </div>
              ))}
            </div>
          </Container>
        </section>
        {/* @tickets */}
        <section className="ca25Ticket-Section pb-24 pt-24 sm:pt-32">
          <Container className={'relative'}>
            <div className="pointer-events-none absolute -right-[213px] -top-[72px] bottom-auto left-auto z-px sm:-right-[387px] sm:-top-[86px] lg:-right-[387px] lg:-top-[91px] xl:-right-[636px] xl:-top-[151px]">
              <Image
                className="h-[207px] w-auto object-cover sm:h-[357px] lg:h-[371px] xl:h-[593px]"
                src={'/assets/images/backdrop/ca25Backdrop-TicketStore.png'}
                alt={`${publicRuntimeConfig?.siteAppName} Ticket Store Backdrop`}
                height={1764}
                width={2508}
                quality="87"
              />
            </div>

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
        <div className="ca25Group ca25BgCirlcePortal relative bg-transparent pb-4 sm:pb-20">
          {/* @getinvolved */}
          <GetInvolved mode={mode} result={isCollections?.getinvolved} />

          {/* @whats-happening */}
          <WhatsHappening mode={mode} result={isCollections?.whatsHappening} />
        </div>

        {/* @banner(portal 1) */}
        <PortalBanner mode={mode} id={'ca25PortalBanner1'} />

        {/* @partners */}
        <FAQ mode={mode} result={isCollections?.faq} />

        {/* @banner(footer) */}
        <MoonPortalBanner mode={mode} />
      </Main>
    </>
  );
};

Home.getLayout = (page, { pageProps }) => {
  const { mode, layouts, products } = pageProps;
  // if (layouts) {
  //   return (
  //     <LayoutStore
  //       isTheme={mode}
  //       layoutStore={layouts}
  //       cartStore={products?.data}
  //     >
  //       {page}
  //     </LayoutStore>
  //   );
  // }
  return page;
};
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
      rsFAQ,
      rsWhatsHappening,
    ] = await Promise.all([
      getFetch(`/api/products?sort[0]=rank:asc`),
      getFetchUrl(`${baseUrl}/api/v1/collections/about-us?sv=coinfestasia`),
      getFetchUrl(`${baseUrl}/api/v1/collections/speakers?sv=coinfestasia`),
      getFetchUrl(`${baseUrl}/api/v1/collections/partners?sv=coinfestasia`),
      getFetchUrl(`${baseUrl}/api/v1/collections/get-involved?sv=coinfestasia`),
      getFetchUrl(`${baseUrl}/api/v1/collections/faq?sv=coinfestasia`),
      getFetchUrl(
        `${baseUrl}/api/v1/collections/whats-happening?sv=coinfestasia`
      ),
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
          faq: rsFAQ?.data,
          whatsHappening: rsWhatsHappening?.data,
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
