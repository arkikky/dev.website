import React from 'react';

// @lib/controller & helper
import { useCart } from '@lib/hooks/cart/Cart';

const QuantityCart = ({ productsQty, cartStoreQty }) => {
  const { checkTotalQtyCart, updateCartQuantity } = useCart();

  return (
    <>
      <div
        className={`hsCA25_UpdatedQtyCart hs-dropdown-menu mt-0 ${productsQty?.documentId === 'sn4ujm0d1ebbc8lme1ihzsa9' ? 'ml-1' : 'ml-0'} flex w-max rounded-[8px] border border-gray-200 bg-gray-50 px-[3px] py-[3px]`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="Button update quantity Cart (Coinfest Asia 2025)"
      >
        <div className="inline-flex flex-row gap-x-1.5">
          {productsQty?.documentId !== 'sn4ujm0d1ebbc8lme1ihzsa9' ? (
            <button
              id="tcktCa25Btn_MinQtyCarts"
              className={`ca25BtnQtyDark`}
              type="button"
              tabIndex={-1}
              aria-label="Coinfest Asia 2025 Button Update Quantity Min Cart"
              disabled={
                productsQty?.quantity >= 1 && productsQty?.quantity <= 1
              }
              onClick={(e) => {
                e.preventDefault();
                updateCartQuantity(cartStoreQty, productsQty, false);
              }}
            >
              <svg
                className="size-3.5 shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
              </svg>
            </button>
          ) : null}
          <input
            className={`pointer-events-none w-5 cursor-default select-none border-0 bg-transparent p-0 text-center text-sm font-light text-black-900 focus:ring-0 focus-visible:outline-none focus-visible:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`}
            type="number"
            value={
              productsQty?.documentId === 'sn4ujm0d1ebbc8lme1ihzsa9'
                ? 5
                : productsQty?.quantity
            }
            tabIndex="-1"
            maxLength="15"
            minLength={1}
            readOnly={true}
            disabled={true}
          />
          {productsQty?.documentId !== 'sn4ujm0d1ebbc8lme1ihzsa9' ? (
            <button
              id="tcktCa25Btn_MaxQtyCarts"
              className={`ca25BtnQtyDark`}
              type="button"
              tabIndex={-1}
              aria-label="Coinfest Asia 2025 Button Update Quantity Max Cart"
              disabled={
                productsQty?.quantity >= 15 ||
                checkTotalQtyCart(cartStoreQty, 'products')
              }
              onClick={(e) => {
                e.preventDefault();
                updateCartQuantity(cartStoreQty, productsQty, true);
              }}
            >
              <svg
                className="size-3.5 shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default QuantityCart;
