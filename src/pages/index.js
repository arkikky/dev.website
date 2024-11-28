import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

// @redux
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart } from '@reduxState/slices';

// @lib/controller & helper
import { getFetch } from '@lib/controller/API';
import { currencyConverter } from '@lib/helper/CalculateCartContext';

// @components
import HeadGraphSeo from '@components/Head';
import MarkdownRenderer from '@components/MarkdownRenderer';
import Main from '@components/Main';
import Container from '@components/Container';
import Alerts from '@components/UI/Alerts/Alerts';

const Home = ({ products }) => {
  const dispatch = useDispatch();
  const { data: isCart } = useSelector((state) => state.cart);
  const [isCartProducts, setCartProducts] = useState({
    products: products.data,
    cart: [],
  });

  // @hook(Alert)
  const [isSession, setSession] = useState({
    id_product: null,
    loading: false,
    message: null,
  });

  // @hook(Alert)
  const [isAlert, setAlert] = useState({
    status: false,
    type: 'default',
    message: '',
  });

  // @handle(Alert)
  const hndleAlert_Change = (model, mess) => {
    setAlert({ status: true, type: model, message: mess });
  };

  // @handle(Close Alert)
  const handleCloseAlert = () =>
    setAlert((prev) => ({ ...prev, status: false }));

  // @add-items(Cart)
  const hndleAddProduct_Cart = async (product) => {
    if (isSession.loading === true) return;

    setSession((prev) => ({
      ...prev,
      id_product: products.id_product,
      loading: true,
    }));

    const products = {
      id_product: product.documentId,
    };

    const totalQty = isCart?.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);

    if (totalQty >= 5) {
      setTimeout(() => {
        hndleAlert_Change(
          'info',
          `Your cart is full, Complete your order or update your cart!`
        );
        setSession((prev) => ({ ...prev, loading: false }));
      }, 800);
      return;
    }

    // @check(Product)
    const hasQtyOne =
      isCart?.some((d) => d.quantity === 1) ||
      isCart?.some((d) => d.quantity > 1);
    if (products.id_product === 'sn4ujm0d1ebbc8lme1ihzsa9' && hasQtyOne) {
      setTimeout(() => {
        hndleAlert_Change(
          'info',
          `Your cart is full, Complete your order or update your cart!`
        );
        setSession((prev) => ({ ...prev, loading: false }));
      }, 800);
      return;
    }

    // @proses(Add to Cart)
    setTimeout(() => {
      setSession((prev) => ({ ...prev, loading: false }));
      hndleAlert_Change(
        'success',
        `The item has been successfully added to your cart.`
      );
      dispatch(addItemToCart(products));
    }, 800);
  };

  return (
    <>
      {/* @head */}
      <HeadGraphSeo />

      {/* @main */}
      <Main className="pb-8 pt-[121px] sm:pb-12 sm:pt-[134px] lg:pt-[158px]">
        <Container>
          <div className="mb-8 flex flex-col text-start sm:mb-12">
            <h1 className="w-ful max-w-full text-start text-[44px] font-bold uppercase leading-[52px] text-black-900 sm:max-w-[445px] sm:text-[54px] sm:leading-[74px] lg:max-w-[677px] lg:text-[80px] lg:leading-[90px]">
              GET YOUR TICKETS NOW
            </h1>
            <p className="mt-2.5 font-bevietnamPro text-xl font-normal text-gray-500">
              Prices exclude VAT
            </p>
          </div>

          {/* @handle-push(checkout) */}
          <div className="relative hidden w-max flex-col">
            <Link
              id="ca25CartProduct_Checkout"
              className="ca25CartProduct_Checkout text-sm font-light underline"
              href="/checkout"
            >
              Checkout
            </Link>
          </div>

          <div className="mt-4 grid-cols-1 gap-x-4 gap-y-4 supports-grid:grid sm:mt-8 sm:grid-cols-2 xl:grid-cols-3">
            {isCartProducts?.products?.map((gtRslt, i) => {
              const isLoading =
                isSession.id_product === gtRslt.documentId && isSession.loading;
              return (
                <div
                  className="flex h-auto flex-col space-y-6 rounded-3xl bg-gray-200 px-1.5 py-1.5 sm:h-[641px]"
                  key={i}
                >
                  <div className="relative flex h-full flex-col items-start justify-between rounded-[18px] bg-white px-6 py-6">
                    <div className="flex w-full flex-col items-start pb-14 sm:pb-0">
                      <div className="block w-full">
                        <h2 className="mb-1 text-xl font-normal text-black-900 sm:mb-2">
                          {gtRslt.name}
                        </h2>
                        <div className="inline-flex items-start space-x-2">
                          <span className="text-3xl font-semibold text-black-900">
                            {gtRslt.name === 'Group Package Tickets'
                              ? currencyConverter(
                                  (gtRslt.priceSale ?? gtRslt.price) * 5
                                )
                              : currencyConverter(
                                  gtRslt.priceSale ?? gtRslt.price
                                )}
                          </span>
                          {gtRslt.price && gtRslt.priceSale && (
                            <span className="text-lg font-normal text-gray-400 line-through">
                              {gtRslt.name === 'Group Package Tickets'
                                ? currencyConverter(gtRslt.price * 5)
                                : currencyConverter(gtRslt.price)}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="my-5 block w-full border-t border-dashed border-gray-200"></div>

                      <div className="block w-full">
                        <MarkdownRenderer content={gtRslt.description} />
                      </div>
                    </div>

                    <button
                      id={`ca25Btn_Product${gtRslt.name.replace(/\s/g, '')}`}
                      className={`"relative inline-flex w-full items-center justify-center rounded-xl bg-primary px-6 py-5 font-medium uppercase text-white disabled:pointer-events-none disabled:opacity-90 ${isSession.loading === true ? 'cursor-default' : 'cursor-pointer'}`}
                      role="button"
                      aria-label={`Coinfest Asia 2025 (Button CTA - ${gtRslt.name.replace(/\s/g, '')} Products)`}
                      aria-labelledby={`Coinfest Asia 2025 (Button CTA - ${gtRslt.name.replace(/\s/g, '')} Products)`}
                      disabled={isLoading}
                      onClick={(e) => {
                        e.preventDefault();
                        hndleAddProduct_Cart(gtRslt);
                      }}
                    >
                      {isLoading ? (
                        <>
                          <div
                            className="block size-6 animate-spin items-center justify-center rounded-full border-[2.5px] border-current border-t-transparent font-medium text-white opacity-80"
                            role="status"
                            aria-label="Coinfest Asia 2025 (Loading - Products)"
                            aria-labelledby="Coinfest Asia 2025 (Loading - Products)"
                          >
                            <span className="sr-only">Loading...</span>
                          </div>
                        </>
                      ) : (
                        'Buy Ticket'
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Main>

      {/* @alert */}
      <Alerts
        position="bottom-[78px] inset-x-2.5 sm:inset-x-3 top-auto"
        type={isAlert.type}
        label={isAlert.message}
        visible={isAlert.status}
        onClose={handleCloseAlert}
      />
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
