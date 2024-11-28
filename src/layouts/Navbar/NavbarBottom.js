import React, { useState } from 'react';
import { useRouter } from 'next/router';

// @lib/controller & helper
import { useCart } from '@lib/hooks/Cart';
import { useMethod } from '@lib/hooks/Method';

// @components
import Container from '@components/Container';
import CartStore from '@components/CartStore';

const NavbarBottom = ({ cartProducts = [] }) => {
  const router = useRouter();
  const { checkTotalQtyCart, getTotalCart } = useCart();
  const { toggleOverlayPopUp } = useMethod();
  const [isLoading, setIsLoading] = useState(false);

  // @redirect(Checkout)
  const reCheckout = async () => {
    setIsLoading(true);

    setTimeout(async () => {
      await router.push('/checkout');
      setIsLoading(false);
    }, 500);
  };

  return (
    <>
      <nav
        className={`ca25NavbarBottom pointer-events-auto fixed inset-x-0 bottom-0 top-auto z-base flex h-auto w-full flex-col items-center justify-center pb-2 opacity-100 lg:pointer-events-none lg:hidden lg:opacity-0`}
      >
        <CartStore
          id="ca2025Overflay_PopUpMobile"
          type="mobile"
          store={cartProducts}
          totalCart={getTotalCart(cartProducts)}
        />

        <Container className={'relative'}>
          <div className="relative mx-auto flex w-full flex-row items-center justify-between gap-y-6 rounded-xl border-2 border-solid border-gray-400/[0.18] bg-gray-300/25 px-1 py-1 backdrop-blur-md sm:gap-y-0 sm:rounded-2xl sm:px-1.5 sm:py-1.5 lg:max-w-[677px]">
            <div className="flex w-full flex-row items-center justify-between sm:w-max">
              <button
                className="relative flex h-full flex-col rounded-lg bg-black-900 px-3 py-3 text-sm leading-initial text-white sm:h-auto sm:rounded-[10px] sm:px-4 sm:py-4 sm:text-base"
                type="button"
                tabIndex={-1}
                role="button"
                aria-label="Button Cart (Coinfest Asia 2025)"
                aria-roledescription="Button Cart (Coinfest Asia 2025)"
                onClick={(e) => {
                  e.preventDefault();
                  toggleOverlayPopUp('.ca2025Overflay_PopUpMobile');
                }}
              >
                {cartProducts?.length > 0 && (
                  <span className="absolute end-0 top-0 me-2.5 mt-3 flex size-2 sm:me-3.5 sm:mt-4">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-red-300 opacity-75"></span>
                    <span className="relative inline-flex size-2 rounded-full bg-red-500"></span>
                  </span>
                )}
                <svg
                  className="size-5.5 shrink-0 sm:size-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.4 5L5 3H3M5.4 5H21L17 13H7M5.4 5L7 13M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex w-max flex-row items-center space-x-2">
              <button
                className={`h-[46px] w-[106px] cursor-pointer rounded-lg bg-primary px-5 py-3.5 text-sm leading-initial text-white disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-black-900 sm:rounded-[10px] sm:px-6 sm:py-4 sm:text-base`}
                type="button"
                tabIndex={-1}
                aria-label="Button on Processed Checkout (Coinfest Asia 2025)"
                aria-roledescription="Button on Processed Checkout (Coinfest Asia 2025)"
                disabled={
                  (cartProducts?.length > 0 ? false : true) ||
                  checkTotalQtyCart(cartProducts, 'submit') ||
                  isLoading
                }
                onClick={(e) => {
                  e.preventDefault();
                  reCheckout();
                }}
              >
                {isLoading ? (
                  <>
                    <div
                      className="mx-auto block size-5 animate-spin items-center justify-center rounded-full border-[2.5px] border-current border-t-transparent font-medium text-black-900 opacity-80"
                      role="status"
                      aria-label="Coinfest Asia 2025 (Loading - Products)"
                      aria-labelledby="Coinfest Asia 2025 (Loading - Products)"
                    >
                      <span className="sr-only">Loading...</span>
                    </div>
                  </>
                ) : (
                  'Checkout'
                )}
              </button>
            </div>
          </div>
        </Container>
      </nav>

      {/* @banner-ticket(backcover) */}
      <div
        id="ca2025BckdrpOverflay_PopUp"
        className="ca2025BckdrpOverflay_PopUp nonActive fixed inset-x-0 inset-y-0 z-[80] block h-svh cursor-pointer bg-black-900/60 backdrop-blur-[2px] transition-[opacity,backdrop-filter] duration-[0.3s] ease-in-out"
        onClick={(e) => {
          e.preventDefault();
          toggleOverlayPopUp(e.target.getAttribute('data-target'));
        }}
      ></div>
    </>
  );
};

export default NavbarBottom;
