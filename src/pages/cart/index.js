import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { hasCookie } from 'cookies-next';
import Link from 'next/link';

// @redux
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart } from '@reduxState/slices';

// @lib/controller & helper
import { getFetch } from '@lib/controller/API';
// import { authSession_Token } from '@lib/helper/CartContext';

// @components
import HeadGraphSeo from '@components/Head';
import Main from '@components/Main';
import Container from '@components/Container';

import Breadcrumb from '@components/UI/Breadcrumb';

const Cart = ({ products }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isCart = useSelector((state) => state.cart.data);

  // @add-items(Cart)
  const handleAddToCart = async (product) => {
    const handleRouteCheckout = document.querySelector(
      '#ca25CartProduct_Checkout.ca25CartProduct_Checkout'
    );

    const totalQty = isCart?.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);

    const products = {
      id_product: product.documentId,
    };

    if (isCart?.length >= 1 && isCart?.length <= 1) {
      const existItems = isCart?.find(
        (i) => i.id_product === products.id_product
      );

      if (existItems) {
        if (totalQty < 5) {
          dispatch(addItemToCart(products));
          // await authSession_Token(products.id_product);

          if (handleRouteCheckout) {
            handleRouteCheckout.click();
          } else {
            setTimeout(() => {
              router.push('/checkout');
            }, 100);
          }
        } else {
          console.info('[info] your ticket is max!');
        }
      } else {
        console.info('[info] your cart is full!');
      }
    } else {
      if (totalQty < 5) {
        dispatch(addItemToCart(products));
        // await authSession_Token(products.id_product);

        if (handleRouteCheckout) {
          handleRouteCheckout.click();
        } else {
          setTimeout(() => {
            router.push('/checkout');
          }, 100);
        }
      } else {
        console.info('[info] your ticket is max!');
      }
    }
  };

  const [isProducts, setProducts] = useState(products.data);

  return (
    <>
      {/* @head */}
      <HeadGraphSeo title={`Cart`} otherPage={true} />

      {/* @main */}
      <Main className="flex flex-col overflow-x-hidden pb-28 pt-32">
        <Container>
          <div className="flex flex-col items-start justify-start">
            <h1 className="text-base font-semibold text-white sm:text-3xl">
              Checkout
            </h1>
            <div className="mt-2 block">
              <Breadcrumb
                theme="dark"
                listBreadcrumb={[
                  {
                    label: 'Home',
                    url: '/',
                  },
                  {
                    label: 'Checkout',
                    url: '/checkout',
                  },
                  {
                    label: 'Cart',
                    url: '/',
                  },
                ]}
              />
            </div>
          </div>

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
          <div className="mt-10 grid-cols-1 gap-x-4 gap-y-4 supports-grid:grid sm:grid-cols-2">
            {isProducts?.map((gtRslt, i) => (
              <div
                className="flex flex-col space-y-6 rounded-2xl border border-solid border-gray-200 px-8 py-8"
                key={i}
              >
                <h2>{gtRslt.name}</h2>

                <button
                  className="w-full rounded-lg bg-black-900 px-6 py-4 text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddToCart(gtRslt);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </Container>
      </Main>
    </>
  );
};

export const getStaticProps = async () => {
  const isProducts = await getFetch(`/api/products?populate=*`);

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

export default Cart;
