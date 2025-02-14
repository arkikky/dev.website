import React, { useState, useEffect, Fragment } from 'react';
import { Toaster } from 'sonner';
import dynamic from 'next/dynamic';

// @redux
import { useSelector } from 'react-redux';

// @lib
import { useStoreContext } from '@lib/context/store/StoreContext';
import { useCart } from '@lib/hooks/cart/Cart';
import { getFetch } from '@lib/controller/API';

// @components
import HeadGraphSeo from '@components/Head';
import Main from '@components/Main';
import Container from '@components/Container';
import StarryBackground from '@components/UI/Background/StarryBackground';
import TicketProductsSkeleton from '@components/Skeleton/Products/TicketProducts';
const TicketProducts = dynamic(() => import('@components/UI/TicketProducts'), {
  loading: () => <TicketProductsSkeleton />,
  ssr: false,
});

// @layouts
import LayoutStore from '@layouts/LayoutStore';

const Tickets = ({ mode, products }) => {
  const { data: isCart } = useSelector((state) => state.cart);
  const { sessionsProducts } = useStoreContext();
  const { getStore } = useCart();
  const [isStore, setStore] = useState({
    products: products?.data,
    isQty: [],
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
    } else {
    }
  };
  // @hanlde-change(calculate product)
  useEffect(() => {
    const fakeUpadted = isStore?.isQty
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
      isQty: fakeUpadted,
    }));
  }, [isCart]);

  return (
    <>
      {/* @head */}
      <HeadGraphSeo title={`Tickets`} otherPage={true} />

      {/* @main */}
      <Main className="relative overflow-hidden pb-16 pt-[135px] sm:pb-24 sm:pt-[214px] lg:pt-[277px]">
        <div className="pointer-events-none absolute inset-x-0 bottom-auto top-0 -z-px h-[425px] select-none">
          <StarryBackground starCount={60} />
        </div>

        {/* @tickets */}
        <section className="ca25Ticket-Section from-black bg-gradient-to-t via-blue-700 to-blue-200">
          <Container className={'relative'}>
            <div className="ca25MoonRckt pointer-events-none absolute inset-x-0 inset-y-0 z-px mx-auto w-full select-none"></div>

            {/* @header */}
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
                return (
                  <Fragment key={i}>
                    <TicketProducts
                      useHeading={'h2'}
                      data={gtRslt}
                      cartProducts={getStore}
                      isLoading={
                        sessionsProducts?.id_product === gtRslt.documentId &&
                        sessionsProducts?.loading === true
                      }
                      isSessionLoading={sessionsProducts?.loading}
                      onEventChange={hndleChangeQty}
                    />
                  </Fragment>
                );
              })}
            </div>
          </Container>
        </section>
      </Main>

      {/* @alert(toast)  */}
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

Tickets.getLayout = (page, { pageProps }) => {
  const { mode, menu, layouts } = pageProps;
  if (layouts) {
    return (
      <LayoutStore isTheme={mode} isMenu={menu} layoutStore={layouts}>
        {page}
      </LayoutStore>
    );
  }
  return page;
};
export const getServerSideProps = async (context) => {
  try {
    const isStoreLayouts = true;
    const isProducts = await getFetch(`/api/products?sort[0]=rank:asc`);
    return {
      props: {
        mode: 'dark',
        menu: false,
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
