import React from 'react';

// @redux
import { useDispatch } from 'react-redux';
import { removeItemCart } from '@reduxState/slices';

// @lib/controller & helper
import { currencyConverter } from '@lib/helper/CalculateCartContext';
import { useCart } from '@lib/hooks/Cart';

const CartProduct = ({ cartStore, products }) => {
  const dispatch = useDispatch();
  const { checkTotalQtyCart, updateCartQuantity } = useCart();

  return (
    <>
      <div className="flex flex-row space-x-3">
        <div className="h-full w-4.5 rounded-md bg-primary"></div>
        <div className="mb-1 flex flex-col">
          <h3 className="mb-3 text-base font-medium">{products.name}</h3>

          <div
            className="hsCA25Dropdown_UpdatedQtyCart hs-dropdown-menu mt-0 flex w-max rounded-[10px] border border-gray-200 bg-gray-50 px-1 py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="Button update quantity Cart (Coinfest Asia 2025)"
          >
            <div className="inline-flex flex-row gap-x-1.5">
              {products.documentId !== 'sn4ujm0d1ebbc8lme1ihzsa9' ? (
                <button
                  id="tcktCa25Btn_MinQtyCarts"
                  className="tktCA25Btn_Qty"
                  type="button"
                  tabIndex={-1}
                  aria-label="Button update quantity Min Cart (Coinfest Asia 2025)"
                  aria-labelledby="Button update quantity Min Cart (Coinfest Asia 2025)"
                  disabled={products.quantity >= 1 && products.quantity <= 1}
                  onClick={(e) => {
                    e.preventDefault();
                    updateCartQuantity(cartStore, products, false);
                  }}
                >
                  <svg
                    className="size-3.5 shrink-0"
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
                    <path d="M5 12h14"></path>
                  </svg>
                </button>
              ) : null}
              <input
                className={`w-5 cursor-default border-0 bg-transparent p-0 text-center text-sm font-light text-black-900 focus:ring-0 focus-visible:outline-none focus-visible:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`}
                type="number"
                aria-roledescription="Number field"
                value={products.quantity}
                tabIndex="-1"
                maxLength="5"
                minLength={products.quantity || 1}
                readOnly={true}
                disabled={true}
              />
              {products.documentId !== 'sn4ujm0d1ebbc8lme1ihzsa9' ? (
                <button
                  id="tcktCa25Btn_MaxQtyCarts"
                  className={`tktCA25Btn_Qty`}
                  type="button"
                  tabIndex={-1}
                  aria-label="Button update quantity Max Cart (Coinfest Asia 2025)"
                  aria-labelledby="Button update quantity Max Cart (Coinfest Asia 2025)"
                  disabled={
                    products.quantity >= 5 ||
                    checkTotalQtyCart(cartStore, 'products')
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    updateCartQuantity(cartStore, products, true);
                  }}
                >
                  <svg
                    className="size-3.5 shrink-0"
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
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <span className="text-base font-medium">
          {currencyConverter(products.price ?? products.priceSale)}
        </span>
        <button
          className="mb-1 ms-3 flex h-8 w-8 flex-col items-center justify-center rounded-lg border border-solid border-red-500 bg-red-500/10 focus-visible:outline-none"
          type="button"
          tabIndex={-1}
          aria-label="Coinfest Asia 2025 (Remove - Coupon)"
          aria-roledescription="Coinfest Asia 2025 (Remove - Coupon)"
          onClick={(e) => {
            e.preventDefault();
            dispatch(removeItemCart(products.documentId));
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
