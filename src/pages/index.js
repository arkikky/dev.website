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
import { getCombineMerged } from '@lib/helper/Configuration';

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

const Home = ({ products }) => {
  const dispatch = useDispatch();
  const { data: isCart } = useSelector((state) => state.cart);
  const [isCartProducts, setCartProducts] = useState({
    products: products?.data,
    cart: [],
    isQty: [],
    totalQty: 0,
  });

  // @hook(Session Product)
  const [isSessionProducts, setSessionProducts] = useState({
    id_product: null,
    loading: false,
  });

  // @initialize(Cart)
  const hndleHookProducts = useCallback(async () => {
    if (!isCart || isCart?.length > 3) return;
    try {
      const allProducts = await Promise.all(
        isCart?.map(async (data) => {
          const rsHook = await getFetch(`/api/products/${data.id_product}`);
          return {
            id: rsHook?.data.id,
            documentId: rsHook?.data.documentId,
            productId: rsHook?.data.productId,
            name: rsHook?.data.name,
            price: rsHook?.data.price,
            priceSale: rsHook?.data.priceSale,
            stock: parseInt(rsHook?.data.stock),
          };
        })
      );
      // @hook(Combine Merged)
      const setMerged = getCombineMerged(allProducts, isCart);
      if (setMerged) setCartProducts((prev) => ({ ...prev, cart: setMerged }));
    } catch (err) {
      return;
    }
  }, [isCart]);
  // @hook(Product)
  useEffect(() => {
    hndleHookProducts();
    return () => {
      undefined;
    };
  }, [isCart]);

  // @hanlde-change(Product)
  const hndleChangeQty = async (idProducts, qtyProduct) => {
    if (qtyProduct > 0) {
      setCartProducts((prev) => {
        const updatedTotalQty = prev?.isQty?.map((item) =>
          item?.id === idProducts ? { ...item, qty: qtyProduct } : item
        );
        // @check-exts
        const isIdExist = prev?.isQty?.some((item) => item.id === idProducts);
        const newTotalQty = isIdExist
          ? updatedTotalQty
          : [...prev?.isQty, { id: idProducts, qty: qtyProduct }];
        return {
          ...prev,
          isQty: newTotalQty,
        };
      });
    } else {
      // const updatedFake = isCartProducts?.isQty?.map((item) => {
      //   const cartItem = isCart?.find((cart) => cart?.id_product === item?.id);
      //   if (cartItem) {
      //     console.log(cartItem?.quantity);
      //     return { ...item, qty: cartItem?.quantity };
      //   }
      //   return item;
      // });
      // console.log(updatedFake);
    }
  };
  // @hanlde-change(Calculate Product)
  useEffect(() => {
    const updatedFake = isCartProducts?.isQty
      ?.filter((fakeItem) =>
        isCart?.some((cartItem) => cartItem.id_product === fakeItem.id)
      ) // Hanya data yang sesuai
      .map((fakeItem) => {
        const cartItem = isCart?.find(
          (cartItem) => cartItem.id_product === fakeItem.id
        );
        return { ...fakeItem, qty: cartItem?.quantity || fakeItem.qty }; // Update qty jika ada di cart
      });
    const calculateTotalQty = updatedFake.reduce(
      (total, item) => total + item.qty,
      0
    );
    setCartProducts((prev) => ({
      ...prev,
      isQty: updatedFake,
      totalQty: calculateTotalQty,
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
    // @check(total qty)
    const totalQty = isCart?.reduce((acc, item) => {
      return acc + item?.quantity;
    }, 0);
    if (totalQty >= 15) {
      setTimeout(() => {
        setSessionProducts((prev) => ({ ...prev, loading: false }));
        toast.custom(
          (t) => (
            <ToastAlerts
              id={t}
              position="bottom-[78px] inset-x-2.5 sm:inset-x-3 top-auto"
              type="info"
              visible={true}
              label={`<strong>Your Cart is full</strong>, Complete your order or update your Cart!`}
            />
          ),
          { duration: 5000 }
        );
      }, 700);
      return;
    }
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
    // @proses(Add to Cart)
    setTimeout(() => {
      setSessionProducts((prev) => ({ ...prev, loading: false }));
      toast.custom(
        (t) => (
          <ToastAlerts
            id={t}
            position="bottom-[78px] inset-x-2.5 sm:inset-x-3 top-auto"
            type="success"
            visible={true}
            label={`The item has been successfully added to your cart.`}
          />
        ),
        { duration: 5000 }
      );
      dispatch(addItemToCart(products));
    }, 700);
  };

  return (
    <>
      {/* @head */}
      <HeadGraphSeo />

      {/* @main */}
      <Main className="overflow-hidden pb-8 pt-[135px] sm:pb-16 sm:pt-[144px] lg:pt-[178px]">
        <Container className={'relative'}>
          <div className="pointer-events-none absolute -right-[151px] -top-[98px] bottom-auto left-auto z-px sm:-right-[467px] sm:-top-[331px]">
            <Image
              className="h-[207px] w-auto object-cover sm:h-[593px]"
              src={'/assets/images/backdrop/ca25Backdrop-TicketProducts.png'}
              alt={`${publicRuntimeConfig.siteAppName} Ticket Product Backdrop`}
              height={2269}
              width={3211}
              quality="87"
              fetchPriority="auto"
            />
          </div>

          {/* @header */}
          <div className="mb-10 flex flex-col text-start sm:mb-12">
            <h1 className="w-ful max-w-[208px] text-start text-[24px] font-bold uppercase leading-[32px] text-black-900 sm:max-w-[445px] sm:text-[54px] sm:leading-[74px] lg:max-w-[677px] lg:text-[80px] lg:leading-[90px]">
              {`GET YOUR TICKETS NOW`}
            </h1>
            <p className="mt-2 font-bevietnamPro text-base font-light text-gray-400 sm:mt-3.5 sm:text-xl">
              {`Prices exclude VAT`}
            </p>
          </div>

          {/* @products */}
          <div className="mt-4 grid-cols-1 gap-x-4 gap-y-4 supports-grid:grid sm:mt-10 sm:grid-cols-2 xl:grid-cols-3">
            {isCartProducts?.products?.map((gtRslt, i) => {
              const isLoading =
                isSessionProducts.id_product === gtRslt.documentId &&
                isSessionProducts.loading === true;
              return (
                <TicketProducts
                  data={gtRslt}
                  cartProducts={isCartProducts?.cart}
                  key={gtRslt.documentId}
                  isLoading={isLoading}
                  isSessionLoading={isSessionProducts.loading}
                  onEventChange={hndleChangeQty}
                  handleProducts={hndleAddProduct_Cart}
                  totalQty={isCartProducts?.totalQty}
                />
              );
            })}
          </div>
        </Container>
      </Main>
    </>
  );
};

export const getStaticProps = async () => {
  const isProducts = await getFetch(`/api/products?sort[0]=rank:asc`);
  try {
    return {
      props: {
        products: isProducts || [],
      },
      revalidate: 900,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

export default Home;
