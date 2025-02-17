import React from 'react';
import { twMerge } from 'tailwind-merge';

// @redux
import { useDispatch } from 'react-redux';
import { removeItemCart } from '@reduxState/slices';

// @lib/controller & helper
import { currencyConverter } from '@lib/helper/CalculateCart';
import { getTotalProduct } from '@lib/helper/Store';

// @components
import QuantityCart from '@components/UI/Cart/QuantityCart';

const CartProduct = ({ cartStore, products }) => {
  const dispatch = useDispatch();

  // @card(theme)
  const style = {
    rc33x0dgm6tm707jghffuip4: 'bg-vip45',
  };

  return (
    <>
      <div
        className={twMerge(
          `flex h-[105px] w-full max-w-[235px] flex-row space-x-3 rounded-xl px-3 py-2`,
          style[products?.documentId] || 'bg-regular45'
        )}
      >
        <div className="flex w-full flex-col justify-between">
          <h3 className="text-lg font-bold uppercase leading-initial text-white">
            {products?.name}
          </h3>
          <div className="mb-1 flex flex-row items-center justify-between gap-x-3">
            <span className="text-lg font-medium text-white">
              {currencyConverter(products?.priceSale ?? products?.price)}
            </span>
            <div className="flex flex-row items-center">
              {products?.documentId === 'sn4ujm0d1ebbc8lme1ihzsa9' && (
                <span className="mr-2 text-sm text-white">Qty :</span>
              )}
              <QuantityCart productsQty={products} cartStoreQty={cartStore} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between py-2">
        {products?.documentId === 'sn4ujm0d1ebbc8lme1ihzsa9' ? (
          <span className="text-base font-medium text-white sm:text-lg">
            {currencyConverter(products?.priceSale ?? products?.price)}
          </span>
        ) : (
          <span className="text-base font-medium text-white sm:text-lg">
            {currencyConverter(
              getTotalProduct(
                products?.quantity,
                products?.priceSale ?? products?.price
              )
            )}
          </span>
        )}
        <button
          className="ms-3 flex h-8 w-8 flex-col items-center justify-center rounded-lg border border-solid border-red-500 bg-red-100/20 focus-visible:outline-none"
          type="button"
          tabIndex={-1}
          aria-label="Coinfest Asia 2025 Remove Products"
          onClick={(e) => {
            e.preventDefault();
            dispatch(removeItemCart(products?.documentId));
          }}
        >
          <svg
            className="h-4 w-4 stroke-red-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            <line x1="10" x2="10" y1="11" y2="17" />
            <line x1="14" x2="14" y1="11" y2="17" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default CartProduct;
