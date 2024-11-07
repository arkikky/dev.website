import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// @redux
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart, removeCart } from '@reduxState/slices';

// @lib/controller & helper
import { getFetch } from '@lib/controller/API';

// @components
import HeadGraphSeo from '@components/Head';
import Main from '@components/Main';
import Container from '@components/Container';
import Notifications from '@components/UI/Alerts/Notifications';

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
      return;
    }

    return () => {
      undefined;
    };
  }, []);

  // @redirect(Page)
  const redirectToPage = (path) => {
    setTimeout(() => {
      setSession((prev) => ({
        ...prev,
        id_product: null,
        loading: false,
      }));
      router.push(path);
    }, 500);
  };

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
      redirectToPage('/checkout');
    } else if (isCart.length < 1) {
      dispatch(addItemToCart(products));
      redirectToPage('/checkout');
    } else {
      dispatch(removeCart()); // console.info('[warning] your cart is full!');
    }
  };

  return (
    <>
      {/* @head */}
      <HeadGraphSeo />

      {/* @main */}
      <Main className="pb-8 pt-[178px] sm:pb-12 sm:pt-[138px]">
        <Container>
          <h1 className="text-base font-semibold text-black-900 sm:text-3xl">
            Tickets
          </h1>

          {isSession.message !== null && (
            <div className="block w-full">
              <Notifications
                icons={
                  <svg
                    className="mt-0.5 size-4 lg:size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                  </svg>
                }
                label={`<p>${isSession.message}</p>`}
                type="info"
              />
            </div>
          )}

          {/* @handle push(checkout) */}
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
                  className="flex h-[537px] flex-col space-y-6 rounded-3xl bg-gray-200 px-1.5 py-1.5"
                  key={i}
                >
                  <div className="relative flex h-fill flex-col items-start justify-between rounded-[18px] bg-white px-6 py-6">
                    <h2 className="text-xl text-black-900">{gtRslt.name}</h2>

                    <button
                      id={`ca25Btn_Product${gtRslt.name.replace(/\s/g, '')}`}
                      className="relative inline-flex w-full items-center justify-center rounded-xl bg-primary px-6 py-4 uppercase text-white disabled:pointer-events-none disabled:opacity-90"
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
