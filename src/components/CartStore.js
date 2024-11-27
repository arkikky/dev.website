import React from 'react';
import { twMerge } from 'tailwind-merge';

// @lib/controller & helper
import { currencyConverter } from '@lib/helper/CalculateCartContext';
import { useMethod } from '@lib/hooks/Method';

// @components
import CartProduct from '@components/UI/Cart/CartProduct';
import EmptyCart from '@components/UI/Cards/EmptyCart';

const CartStore = ({
  id = 'ca2025Overflay_PopUp',
  type = 'general',
  store,
  totalCart,
}) => {
  const { toggleOverlayPopUp } = useMethod();

  const styles = {
    general:
      'right-0 left-auto bottom-0 top-full mx-auto w-full sm:block lg:w-[409px]',
    mobile:
      'inset-x-0 bottom-0 top-auto mx-auto w-full max-w-[640px] sm:bottom-full sm:block lg:max-w-[620px]',
  };
  const stylesCard = {
    general: 'rounded-xl px-3 pb-3 pt-3 mt-2 sm:py-3',
    mobile: 'rounded-t-xl pb-[82px] pt-3 mt-2 sm:py-3 px-3',
  };
  const isStyle = styles[type] || styles.general;
  const isStyleCard = stylesCard[type] || stylesCard.general;

  return (
    <>
      <div
        id={id}
        className={twMerge(
          `${id} nonActive absolute transition-[transform,opacity] duration-[0.5s] ease-in-out`,
          isStyle
        )}
      >
        <div
          className={twMerge(`flex flex-col items-start bg-white`, isStyleCard)}
        >
          <div className="flex w-full flex-row items-start justify-between">
            <h2>Cart ({store?.length} items)</h2>
            <button
              id={`ca2024BtnClosePopUpNav`}
              className="relative flex cursor-pointer flex-col items-center justify-center overflow-hidden rounded-sm bg-white outline-none focus-visible:outline-none"
              type="button"
              tabIndex={-1}
              aria-label="Coinfest Asia 2025 (Close - Overflay PopUp)"
              aria-roledescription="Coinfest Asia 2025 (Close - Overflay PopUp)"
              onClick={(e) => {
                e.preventDefault();
                toggleOverlayPopUp(`.${id}`);
              }}
            >
              <svg
                className="size-5.5 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>

          <div className="my-3 flex w-full border-t border-dashed border-gray-200"></div>

          <div className="scrollbar-y inline-flex max-h-[260px] w-full flex-col items-start justify-between gap-y-5 overflow-y-auto">
            {store?.length > 0 ? (
              store.map((gtRslt, i) => (
                <div className="flex w-full flex-row justify-between" key={i}>
                  <CartProduct cartStore={store} products={gtRslt} />
                </div>
              ))
            ) : (
              <EmptyCart />
            )}
          </div>
          <div className="my-3 flex w-full border-t border-dashed border-gray-200"></div>

          <div className="flex w-full max-w-[212px] flex-col items-start">
            <span className="text-balance text-xs font-light text-gray-400 sm:text-sm">
              Taxes and discounts are calculated at checkout.
            </span>
          </div>
          <div className="mt-2 flex w-full flex-row items-end justify-between">
            <span className="">Subtotal</span>
            <span className="text-base font-semibold sm:text-lg">
              {currencyConverter(totalCart)}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartStore;
