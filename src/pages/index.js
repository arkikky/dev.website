import React, { useState } from 'react';
import { toast } from 'sonner';

// @redux
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart } from '@reduxState/slices';

// @lib/controller & helper
import { getFetch } from '@lib/controller/API';

// @components
import HeadGraphSeo from '@components/Head';
import Main from '@components/Main';
import Container from '@components/Container';
import ToastAlerts from '@components/UI/Alerts/ToastAlert';
import TicketProducts from '@components/UI/TicketProducts';

const Home = ({ products }) => {
  const dispatch = useDispatch();
  const { data: isCart } = useSelector((state) => state.cart);
  const [isCartProducts, setCartProducts] = useState({
    products: products?.data,
    cart: [],
  });

  // @hook(Session Product)
  const [isSessionProducts, setSessionProducts] = useState({
    id_product: null,
    loading: false,
  });

  // @add-items(Cart)
  const hndleAddProduct_Cart = async (product) => {
    if (isSessionProducts.loading === true) return;
    setSessionProducts((prev) => ({
      ...prev,
      id_product: product.documentId,
      loading: true,
    }));
    const products = {
      id_product: product.documentId,
    };

    // @check(total qty)
    const totalQty = isCart?.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
    if (totalQty >= 5) {
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

    // @check(Product)
    const hasQtyOne =
      isCart?.some((d) => d.quantity === 1) ||
      isCart?.some((d) => d.quantity > 1);
    if (products.id_product === 'sn4ujm0d1ebbc8lme1ihzsa9' && hasQtyOne) {
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
      <Main className="pb-8 pt-[135px] sm:pb-12 sm:pt-[144px] lg:pt-[158px]">
        <Container>
          {/* @header */}
          <div className="mb-8 flex flex-col text-start sm:mb-12">
            <h1 className="w-ful max-w-full text-start text-[44px] font-bold uppercase leading-[52px] text-black-900 sm:max-w-[445px] sm:text-[54px] sm:leading-[74px] lg:max-w-[677px] lg:text-[80px] lg:leading-[90px]">
              {`GET YOUR TICKETS NOW`}
            </h1>
            <p className="mt-2.5 font-bevietnamPro text-xl font-light text-gray-500">
              {`Prices exclude VAT`}
            </p>
          </div>

          {/* @products */}
          <div className="mt-4 grid-cols-1 gap-x-4 gap-y-4 supports-grid:grid sm:mt-8 sm:grid-cols-2 xl:grid-cols-3">
            {isCartProducts?.products?.map((gtRslt, i) => {
              const isLoading =
                isSessionProducts.id_product === gtRslt.documentId &&
                isSessionProducts.loading === true;

              return (
                <TicketProducts
                  data={gtRslt}
                  key={gtRslt.documentId}
                  isLoading={isLoading}
                  isSessionLoading={isSessionProducts.loading}
                  handleProducts={hndleAddProduct_Cart}
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
  const isProducts = await getFetch(`/api/products`);

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
