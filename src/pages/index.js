import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

// @redux
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart, removeCart } from '@reduxState/slices';

// @lib/controller & helper
import { getFetch } from '@lib/controller/API';
import { currencyConverter } from '@lib/helper/CalculateCartContext';

// @components
import HeadGraphSeo from '@components/Head';
import MarkdownRenderer from '@components/MarkdownRenderer';
import Main from '@components/Main';
import Container from '@components/Container';

const Home = ({ products }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const isCart = useSelector((state) => state.cart.data);

  const [isProducts, setProducts] = useState(products.data);
  const [isSession, setSession] = useState({
    id_product: null,
    loading: false,
    message: null,
  });

  // @initialize(Cart)
  useEffect(() => {
    if (isCart.length >= 1) {
      dispatch(removeCart());
    }

    return () => {
      undefined;
    };
  }, []);

  // @add-items(Cart)
  const hndleCreate_Session = async (product) => {
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
      console.info('[info] your cart is full!');
      return;
    }

    const existItems = isCart?.find(
      (i) => i.id_product === products.id_product
    );

    if (existItems) {
      dispatch(addItemToCart(products));
      router.push('/checkout');
    } else if (isCart.length < 1) {
      dispatch(addItemToCart(products));
      router.push('/checkout');
    } else {
      dispatch(removeCart());
    }
  };

  return (
    <>
      {/* @head */}
      <HeadGraphSeo />

      {/* @main */}
      <Main className="pb-8 pt-[178px] sm:pb-12 sm:pt-[138px]">
        <Container>
          <div className="mb-14 flex flex-col text-start">
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

          <div className="mt-10 grid-cols-1 gap-x-4 gap-y-4 supports-grid:grid sm:grid-cols-2 lg:grid-cols-3">
            {isProducts?.map((gtRslt, i) => {
              const isLoading =
                isSession.id_product === gtRslt.documentId && isSession.loading;
              return (
                <div
                  className="flex h-[629px] flex-col space-y-6 rounded-3xl bg-gray-200 px-1.5 py-1.5"
                  key={i}
                >
                  <div className="relative flex h-full flex-col items-start justify-between rounded-[18px] bg-white px-6 py-6">
                    <div className="flex w-full flex-col items-start">
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
                      className="relative inline-flex w-full items-center justify-center rounded-xl bg-primary px-6 py-5 font-medium uppercase text-white disabled:pointer-events-none disabled:opacity-90"
                      role="button"
                      aria-label={`Coinfest Asia 2025 (Button CTA - ${gtRslt.name.replace(/\s/g, '')} Products)`}
                      aria-labelledby={`Coinfest Asia 2025 (Button CTA - ${gtRslt.name.replace(/\s/g, '')} Products)`}
                      disabled={isLoading}
                      onClick={(e) => {
                        e.preventDefault();
                        hndleCreate_Session(gtRslt);
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
