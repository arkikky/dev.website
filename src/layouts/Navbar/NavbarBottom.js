import React from 'react';
import dynamic from 'next/dynamic';

// @redux
import { useDispatch } from 'react-redux';
import { removeItemCart } from '@reduxState/slices';

// @lib/controller & helper
import { currencyConverter } from '@lib/helper/CalculateCartContext';
import { useCart } from '@lib/hooks/Cart';

// @components
import Container from '@components/Container';
const EmptyCart = dynamic(() => import('@components/UI/Cards/EmptyCart'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
import { useMethod } from '@lib/hooks/Method';

const NavbarBottom = ({ cartProducts = [] }) => {
  const dispatch = useDispatch();
  const { checkTotalQtyCart, updateCartQuantity, getTotalCart } = useCart();
  const { toggleOverlayPopUp } = useMethod();

  return (
    <>
      <nav
        className={`ca25NavbarBottom pointer-events-auto fixed inset-x-0 bottom-0 top-auto z-base flex h-auto w-full flex-col items-center justify-center pb-2 opacity-100 lg:pointer-events-none lg:hidden lg:opacity-0`}
      >
        <div
          className={`ca2025Overflay_PopUp nonActive absolute inset-x-0 bottom-0 top-auto mx-auto w-full max-w-[640px] transition-[transform,opacity,height] duration-[0.5s] ease-in-out sm:bottom-full sm:block lg:max-w-[620px]`}
        >
          <div className="flex flex-col items-start rounded-t-xl bg-white px-3 pb-[88px] pt-3 sm:py-3">
            <div className="flex w-full flex-row items-start justify-between">
              <h2>Cart ({cartProducts?.length} items)</h2>
              <button
                id={`ca2024BtnClosePopUpNav`}
                className="relative flex cursor-pointer flex-col items-center justify-center overflow-hidden rounded-sm bg-white outline-none focus-visible:outline-none"
                type="button"
                tabIndex={-1}
                aria-label="Coinfest Asia 2025 (Close - Overflay PopUp)"
                aria-roledescription="Coinfest Asia 2025 (Close - Overflay PopUp)"
                onClick={(e) => {
                  e.preventDefault();
                  toggleOverlayPopUp();
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
              {cartProducts?.length > 0 ? (
                cartProducts.map((gtRslt, i) => (
                  <div className="flex w-full flex-row justify-between" key={i}>
                    <div className="flex flex-row space-x-3">
                      <div className="h-full w-4.5 rounded-md bg-primary"></div>
                      <div className="mb-1 flex flex-col">
                        <h3 className="mb-4 text-base font-medium">
                          {gtRslt.name}{' '}
                        </h3>

                        <div
                          className="hsCA25Dropdown_UpdatedQtyCart hs-dropdown-menu mt-0 flex w-max rounded-[10px] border border-gray-200 bg-gray-50 px-1 py-1"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="Button update quantity Cart (Coinfest Asia 2025)"
                        >
                          <div className="inline-flex flex-row gap-x-1.5">
                            {gtRslt.documentId !==
                            'sn4ujm0d1ebbc8lme1ihzsa9' ? (
                              <button
                                id="tcktCa25Btn_MinQtyCarts"
                                className="tktCA25Btn_Qty"
                                type="button"
                                tabIndex={-1}
                                aria-label="Button update quantity Min Cart (Coinfest Asia 2025)"
                                aria-labelledby="Button update quantity Min Cart (Coinfest Asia 2025)"
                                disabled={
                                  gtRslt.quantity >= 1 && gtRslt.quantity <= 1
                                }
                                onClick={(e) => {
                                  e.preventDefault();
                                  updateCartQuantity(
                                    cartProducts,
                                    gtRslt,
                                    false
                                  );
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
                              className={`w-5 cursor-default border-0 bg-transparent p-0 text-center text-sm font-light text-gray-800 focus:ring-0 focus-visible:outline-none focus-visible:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`}
                              type="number"
                              aria-roledescription="Number field"
                              value={gtRslt.quantity}
                              tabIndex="-1"
                              maxLength="5"
                              minLength={gtRslt.quantity || 1}
                              readOnly={true}
                              disabled={true}
                            />
                            {gtRslt.documentId !==
                            'sn4ujm0d1ebbc8lme1ihzsa9' ? (
                              <button
                                id="tcktCa25Btn_MaxQtyCarts"
                                className={`tktCA25Btn_Qty`}
                                type="button"
                                tabIndex={-1}
                                aria-label="Button update quantity Max Cart (Coinfest Asia 2025)"
                                aria-labelledby="Button update quantity Max Cart (Coinfest Asia 2025)"
                                disabled={
                                  gtRslt.quantity >= 5 ||
                                  checkTotalQtyCart(cartProducts, 'products')
                                }
                                onClick={(e) => {
                                  e.preventDefault();
                                  updateCartQuantity(
                                    cartProducts,
                                    gtRslt,
                                    true
                                  );
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
                        {currencyConverter(gtRslt.price ?? gtRslt.priceSale)}
                      </span>
                      <button
                        className="ms-3 flex h-8 w-8 flex-col items-center justify-center rounded-lg border border-solid border-red-500 bg-red-500/10 focus-visible:outline-none"
                        type="button"
                        tabIndex={-1}
                        aria-label="Coinfest Asia 2025 (Remove - Coupon)"
                        aria-roledescription="Coinfest Asia 2025 (Remove - Coupon)"
                        onClick={(e) => {
                          e.preventDefault();
                          dispatch(removeItemCart(gtRslt.documentId));
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
                  </div>
                ))
              ) : (
                <EmptyCart />
              )}
            </div>
            <div className="my-3 flex w-full border-t border-dashed border-gray-200"></div>

            <div className="flex w-full flex-row justify-between">
              <div className="flex w-full max-w-[212px] flex-col items-start">
                <span>Subtotal</span>
                <span className="text-balance text-xs font-light text-gray-400 sm:text-sm">
                  Taxes and discounts are calculated at checkout.
                </span>
              </div>
              <span className="text-lg font-semibold">
                {currencyConverter(getTotalCart(cartProducts))}
              </span>
            </div>
          </div>
        </div>

        <Container className={'relative'}>
          <div className="relative mx-auto flex w-full flex-row items-center justify-between gap-y-6 rounded-xl border-2 border-solid border-gray-400/[0.18] bg-gray-300/25 px-1.5 py-1.5 backdrop-blur-md sm:gap-y-0 sm:rounded-2xl sm:px-1.5 sm:py-1.5 lg:max-w-[677px]">
            <div className="flex w-full flex-row items-center justify-between sm:w-max">
              <button
                className="relative flex h-full flex-col rounded-lg bg-black-900 px-2.5 py-2.5 text-sm leading-initial text-white sm:h-auto sm:rounded-[10px] sm:px-4 sm:py-4 sm:text-base"
                type="button"
                tabIndex={-1}
                role="button"
                aria-label="Button Cart (Coinfest Asia 2025)"
                aria-roledescription="Button Cart (Coinfest Asia 2025)"
                onClick={(e) => {
                  e.preventDefault();
                  toggleOverlayPopUp();
                }}
              >
                {cartProducts?.length > 0 && (
                  <span className="absolute end-0 top-0 me-2 mt-2.5 flex size-2 sm:me-3.5 sm:mt-4">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex size-2 rounded-full bg-red-500"></span>
                  </span>
                )}
                <svg
                  className="size-6 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.4 5L5 3H3M5.4 5H21L17 13H7M5.4 5L7 13M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex w-max flex-row items-center space-x-2">
              <button
                href="/"
                className={`h-full cursor-pointer rounded-lg bg-primary px-5 py-3.5 text-sm leading-initial text-white disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-black-900 sm:rounded-[10px] sm:px-6 sm:py-4 sm:text-base`}
                type="button"
                tabIndex={-1}
                aria-label="Button on Processed Checkout (Coinfest Asia 2025)"
                aria-roledescription="Button on Processed Checkout (Coinfest Asia 2025)"
                disabled={
                  (cartProducts?.length > 0 ? false : true) ||
                  checkTotalQtyCart(cartProducts, 'submit')
                }
              >
                Checkout
              </button>
            </div>
          </div>
        </Container>
      </nav>

      {/* @banner-ticket(backcover) */}
      <div
        id="ca2025BckdrpOverflay_PopUp"
        className="ca2025BckdrpOverflay_PopUp nonActive fixed inset-x-0 inset-y-0 z-[80] block h-svh cursor-pointer bg-black-900/60 backdrop-blur-[5px] transition-[opacity,backdrop-filter] duration-[0.3s] ease-in-out"
        tabIndex={-1}
        onClick={(e) => {
          e.preventDefault();
          toggleOverlayPopUp();
        }}
      ></div>
    </>
  );
};

export default NavbarBottom;
