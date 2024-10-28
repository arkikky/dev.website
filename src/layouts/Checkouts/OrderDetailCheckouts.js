import React from 'react';

// @redux
import { useDispatch } from 'react-redux';
import { updateQuantity } from '@reduxState/slices';

// @lib/helper
import {
  currencyConverter,
  converterTotalCart,
} from '@lib/helper/CalculateCartContext';
import { getTotalCart } from '@lib/helper/CartContext';

const OrderDetailCheckouts = ({ products, children }) => {
  const dispatch = useDispatch();

  // @quantity
  const decreaseQty = async (cartItems) => {
    if (cartItems?.quantity >= 1 && cartItems?.quantity <= 1) {
      return;
    } else if (cartItems?.quantity >= 1 && cartItems?.quantity <= 5) {
      const newQty = cartItems?.quantity - 1;

      if (newQty > Number(cartItems.stock)) return;
      dispatch(updateQuantity({ products: cartItems }));
    } else if (cartItems?.quantity >= 5) {
      const newQty = 5;

      if (newQty > Number(cartItems.stock)) return;
      dispatch(updateQuantity({ products: cartItems }));
    } else {
      return;
    }
  };

  const increaseQty = async (cartItems, iQty) => {
    if (cartItems?.quantity <= 5) {
      const newQty = cartItems?.quantity + 1;

      if (newQty > Number(cartItems.stock)) return;
      dispatch(updateQuantity({ products: cartItems }));
    } else if (cartItems?.quantity >= 5) {
      const newQty = 5;

      if (newQty > Number(cartItems.stock)) return;
      dispatch(updateQuantity({ products: cartItems }));
    } else {
      return;
    }
  };

  // @get-total(currency: IDR)
  const isTotalCart = getTotalCart(products);

  return (
    <>
      <div className="relative block h-full min-h-full w-full">
        <div className="mb-4 block w-full">
          <h2 className="text-xl font-medium capitalize">Order summary</h2>
          <span className="mt-1.5 text-sm font-light text-gray-400">
            Checkout your ticket for better experience order item.
          </span>
        </div>

        {/* @coupon-code */}
        <div className="mb-8 flex w-full flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-start">
            <div className="flex h-10 w-10 flex-col items-center justify-center rounded-lg bg-primary/20">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 5V7V5ZM15 11V13V11ZM15 17V19V17ZM5 5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V10C3.53043 10 4.03914 10.2107 4.41421 10.5858C4.78929 10.9609 5 11.4696 5 12C5 12.5304 4.78929 13.0391 4.41421 13.4142C4.03914 13.7893 3.53043 14 3 14V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V14C20.4696 14 19.9609 13.7893 19.5858 13.4142C19.2107 13.0391 19 12.5304 19 12C19 11.4696 19.2107 10.9609 19.5858 10.5858C19.9609 10.2107 20.4696 10 21 10V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5Z"
                  stroke="#2458F1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <span className="ms-3 text-sm font-normal text-black-900">{`Have a coupon code?`}</span>
          </div>
          <span className="cursor-pointer text-sm font-normal text-primary underline">{`Enter code`}</span>
        </div>

        {/* @group(sticky) */}
        <div className="sticky top-18 block">
          {/* @ticket */}
          <div className="mb-8 block w-full">
            <h2 className="mb-3 text-start text-base font-medium">{`Your Tickets`}</h2>
            {products?.map((gtRslt, i) => (
              <div
                className="mt-4 flex w-full flex-row items-start justify-start first:mt-0"
                key={i}
              >
                <div className="inline-flex h-[82px] w-[134px] min-w-[134px] flex-col items-center justify-center rounded-lg bg-gray-400/20"></div>

                <div className="ms-5 block w-fill space-y-1.5 pt-1.5">
                  <div className="inline-flex w-full flex-row items-start justify-between">
                    <h3 className="text-base font-medium">{gtRslt.name}</h3>
                    <span className="text-sm font-light">
                      {currencyConverter(gtRslt.priceSale)}
                    </span>
                  </div>
                  <div className="relative flex w-full flex-row items-center justify-between gap-y-0.5">
                    <span className="me-3 text-sm font-light">
                      Qty: {gtRslt.quantity}
                    </span>

                    <div className="hs-dropdown relative inline-flex [--auto-close:inside] [--placement:bottom-right] [--strategy:absolute]">
                      <button
                        id="hsCA25Dropdown_UpdatedQty"
                        type="button"
                        className="hs-dropdown-toggle inline-flex items-center gap-x-2 text-sm font-normal text-primary underline focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        aria-label="Dropdown"
                      >
                        Add more
                      </button>

                      <div
                        className="hs-dropdown-menu duration mt-0.5 hidden rounded-lg border border-gray-200 bg-gray-50/60 px-1 py-1 opacity-0 transition-[opacity,margin] hs-dropdown-open:opacity-100"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="hsCA25Dropdown_UpdatedQty"
                      >
                        <div className="inline-flex flex-row gap-x-1.5">
                          <button
                            id="tcktCa25Btn_MinQtyCheckouts"
                            className="tktCA25Btn_Qty"
                            type="button"
                            aria-label="Button Quantity(Min - Checkouts)"
                            disabled={
                              gtRslt.quantity >= 1 && gtRslt.quantity <= 1
                            }
                            onClick={(e) => {
                              e.preventDefault();
                              decreaseQty(gtRslt);
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
                          <input
                            className={`w-5 cursor-default border-0 bg-transparent p-0 text-center text-sm font-light text-gray-800 focus:ring-0 focus-visible:outline-none focus-visible:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`}
                            type="number"
                            aria-roledescription="Number field"
                            value={gtRslt.quantity}
                            tabIndex="-1"
                            maxLength="5"
                            minLength={gtRslt.quantity}
                            readOnly={true}
                            disabled={true}
                          />
                          <button
                            id="tcktCa25Btn_MaxQtyCheckouts"
                            className={`tktCA25Btn_Qty`}
                            type="button"
                            aria-label="Button Quantity(Max - Checkouts)"
                            disabled={gtRslt.quantity >= 5}
                            onClick={(e) => {
                              e.preventDefault();
                              increaseQty(gtRslt, gtRslt.quantity);
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* @order-summary */}
          <div className="mb-8 block space-y-4">
            {/* @subtotal */}
            <div className="grid-cols-2 supports-grid:grid">
              <span className="text-start text-sm font-medium">{`Subtotal`}</span>
              <span className="text-end text-sm font-light">
                {currencyConverter(isTotalCart)}
              </span>
            </div>

            {/* @coupon */}
            <div className="grid-cols-2 supports-grid:grid">
              <span className="text-start text-sm font-medium">{`Coupon`}</span>
              <span className="text-end text-sm font-light">{'$0'}</span>
            </div>

            {/* @total with tax (11%) */}
            <div className="grid-cols-2 supports-grid:grid">
              <span className="text-start text-sm font-medium">{`Total (inc. Tax)`}</span>
              <span className="text-end text-sm font-light">
                {converterTotalCart(isTotalCart)}
              </span>
            </div>
          </div>

          {/* @sub-component's */}
          {children}
        </div>
      </div>
    </>
  );
};

export default OrderDetailCheckouts;
