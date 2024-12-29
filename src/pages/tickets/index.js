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
import { getFetch } from '@lib/controller/API';
import { getCombineMerged, encodeData } from '@lib/helper/Configuration';

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
import LayoutStore from '@layouts/LayoutStore';

const Tickets = ({ mode, products }) => {
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
    } else {
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
    const stock = parseInt(product?.stock, 15);
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
        <div className="pointer-events-none absolute inset-x-0 bottom-auto top-0 -z-px h-[425px] select-none">
          <StarryBackground starCount={60} />
        </div>

        {/* @tickets */}
        <section className="ca25Ticket-Section">
          <Container className={'relative'}>
            <div className="pointer-events-none absolute -right-[161px] -top-10 bottom-auto left-auto z-px sm:-right-[357px] sm:-top-[106px] lg:-right-[497px] lg:-top-[151px]">
              <Image
                className="h-[207px] w-auto object-cover sm:h-[433px] lg:h-[593px]"
                src={'/assets/images/backdrop/ca25Backdrop-TicketStore.png'}
                alt={`${publicRuntimeConfig?.siteAppName} Ticket Store Backdrop`}
                height={1764}
                width={2508}
                quality="87"
              />
            </div>

            {/* @header */}
            <div className="mb-8 flex flex-col text-start sm:mb-12">
              <h1
                className={`w-ful max-w-[208px] text-start text-[24px] font-bold uppercase leading-[30px] ${mode === 'light' ? 'text-black-900' : 'text-white'} sm:max-w-[385px] sm:text-[41px] sm:leading-[53px] lg:max-w-[677px] lg:text-[80px] lg:leading-[90px]`}
              >
                {'GET YOUR TICKETS NOW'?.split('').map((chr, i) =>
                  ['E', 'O', 'E', 'O'].includes(chr) ? (
                    <span
                      key={i}
                      className={`ca25Fonts-Boren text-[25px] sm:text-[43px] lg:text-[84px]`}
                    >
                      {chr}
                    </span>
                  ) : (
                    chr
                  )
                )}
              </h1>
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
      </Main>
    </>
  );
};

Tickets.getLayout = (page, { pageProps }) => {
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
  if (Object.keys(context?.query).length > 0) {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    };
  }
  try {
    const isStoreLayouts = true;
    const isProducts = await getFetch(`/api/products?sort[0]=rank:asc`);
    return {
      props: {
        mode: 'dark',
        layouts: isStoreLayouts || false,
        products: isProducts || [],
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
export default Tickets;
