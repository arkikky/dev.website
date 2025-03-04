import React, { useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import getConfig from 'next/config';
import Image from 'next/image';
import Link from 'next/link';

// @get .config
const { publicRuntimeConfig } = getConfig();

// @style-css
import '@splidejs/react-splide/css/core';

// @lib
import { useStoreContext } from '@lib/context/store/StoreContext';
import { useTrackingStore } from '@lib/hooks/tracking-store/TrackingStore';
import { useMethod } from '@lib/hooks/Method';

// @components
import Container from '@components/Container';
const CartStore = dynamic(() => import('@components/Store'));
import NavMenu from '@components/UI/Nav/NavMenu';
import NavMenuMobile from '@components/UI/Nav/NavMenuMobile';
const EventBoard = dynamic(() => import('@components/UI/EventBoard'), {
  loading: () => (
    <div
      className={`pointer-events-none relative flex h-[53px] w-full min-w-[168px] max-w-[168px] cursor-default flex-col overflow-hidden rounded-lg bg-primary px-2 py-1.5 sm:h-[56px] sm:min-w-[172px] sm:max-w-[172px] sm:rounded-lg sm:px-2.5 sm:py-1.5`}
    ></div>
  ),
});

const NavbarStore = ({ isTheme = 'dark', navMenu = true, nonStore = true }) => {
  const router = useRouter();
  const { getStore, checkTotalQty, totalQty, totalOrder } = useStoreContext();
  const { trackingViewProduct, trackingAddToCart } = useTrackingStore();
  const { toggleOverlayPopUp } = useMethod();
  const [isLoading, setIsLoading] = useState(false);

  // @redirect(checkout)
  const reCheckout = async () => {
    setIsLoading(true);
    setTimeout(async () => {
      await router?.push('/checkout');
      setIsLoading(false);
    }, 500);
  };

  // @handle(navmenu-toggle-mobile)
  const isNavToggle = (btn, target) => {
    const elBtn = document.querySelector(`.${btn}`);
    if (!elBtn.classList.contains('deactive')) {
      elBtn.classList.add('deactive');
    } else {
      elBtn.classList.remove('deactive');
    }
    const elTarget = document.querySelector(target);
    if (elTarget) {
      if (!elTarget?.classList.contains('active')) {
        elTarget?.classList.add('active');
      } else {
        elTarget?.classList.remove('active');
      }
    }
  };

  return (
    <>
      <nav className="fixed inset-x-0 bottom-auto top-0 z-base flex h-auto w-full flex-col items-center justify-center py-4">
        <Container>
          <div className="flex h-[58px] flex-row items-start justify-between gap-y-6 sm:gap-y-0">
            <div className="block w-full sm:w-max">
              <Link
                className="ca25BrandLogo-BckBlured relative block w-max"
                href="/"
              >
                {isTheme === 'dark' ? (
                  <Image
                    className="mx-auto my-auto h-[38px] w-auto sm:h-[44px]"
                    src={'/assets/images/ca2025BrandLight.svg'}
                    alt={`${publicRuntimeConfig?.siteAppName} Primary Brand LOGO Navbar`}
                    height={58}
                    width={170}
                    quality="87"
                    fetchPriority="auto"
                  />
                ) : (
                  <Image
                    className="mx-auto my-auto h-[38px] w-auto sm:h-[44px]"
                    src={'/assets/images/ca2025Brand.svg'}
                    alt={`${publicRuntimeConfig?.siteAppName} Primary Brand LOGO Navbar`}
                    height={58}
                    width={170}
                    quality="87"
                    fetchPriority="auto"
                  />
                )}
              </Link>
            </div>
            {navMenu && (
              <div className="ca25NavMenuGroup ca25NavMenuGroup-General">
                <NavMenu />
              </div>
            )}
            <div className="flex w-max flex-row">
              {/* @event(date) */}
              <div className="hidden w-max flex-row sm:flex">
                <EventBoard id={'ca25MnBoard_InsightsStore'} />
              </div>
              <div className="order-first mr-0 flex w-max flex-col sm:mr-3 lg:hidden">
                <button
                  className={`hmbrgrStairs cs-button-nav relative flex h-10 w-10 flex-col items-center justify-center rounded-lg bg-primaryRed px-2.5 outline-none focus-visible:outline-none sm:h-13 sm:w-13 sm:rounded-xl`}
                  aria-label="Coinfest Asia 2025 Button Nav Toggle Mobile"
                  onClick={(e) => {
                    e.preventDefault();
                    isNavToggle('cs-button-nav', '.ca25NavMenuGroup-Mobile');
                  }}
                >
                  <span className="hmbrgrStairsLine"></span>
                  <span className="hmbrgrStairsLine"></span>
                  <span className="hmbrgrStairsLine"></span>
                </button>
              </div>
            </div>
          </div>
        </Container>
      </nav>

      {/* @mobile */}
      <div className="ca25NavMenuGroup-Mobile" data-nav-mobile>
        <NavMenuMobile id="ca25NavMenuMobileStore" />
      </div>

      {/* @nav(mobile) */}
      <nav
        className={`ca25NavbarBottom pointer-events-auto fixed inset-x-0 bottom-0 top-auto flex h-auto w-full flex-col items-center justify-center pb-2 ${getStore?.length > 0 ? 'z-[878] opacity-100 visible' : '-z-px opacity-0 invisible'}`}
      >
        {getStore?.length > 0 && (
          <CartStore
            id="ca2025CartPopUp_Mobile"
            type="mobile"
            backdrop=".ca2025BckdrpOverflay_PopUpMobile"
            store={getStore}
            totalCart={totalOrder}
            loading={isLoading}
          />
        )}

        <Container className={'relative'}>
          <div
            className={`relative mx-auto ${getStore?.length > 0 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} flex w-full transform flex-row items-center justify-between gap-y-6 rounded-xl border-2 border-solid border-gray-400/[0.18] bg-gray-300/25 px-1 py-1 backdrop-blur-md transition-[transform,opacity] duration-300 ease-in-out sm:max-w-[677px] sm:gap-y-0 sm:rounded-2xl sm:px-1.5 sm:py-1.5`}
          >
            <div className="flex w-full flex-row items-center justify-between sm:w-max">
              <button
                id="ca25BtnCartStore_Mobile"
                className={`relative flex h-[80%] w-19 flex-row items-center justify-center rounded-lg bg-primaryRed px-3 py-3 text-sm leading-initial text-white sm:h-15 sm:rounded-[10px] sm:text-base`}
                type="button"
                tabIndex={-1}
                role="button"
                aria-label="Coinfest Asia 2025 Button Cart Store Mobile"
                aria-roledescription="Coinfest Asia 2025 Button Cart Store Mobile"
                onClick={(e) => {
                  e.preventDefault();
                  toggleOverlayPopUp(
                    '.ca2025BckdrpOverflay_PopUpMobile',
                    '.ca2025CartPopUp_Mobile'
                  );
                  trackingViewProduct(getStore, totalOrder);
                }}
              >
                {/* @indicator(store) */}
                <span className="relative block w-max shrink-0">
                  {getStore?.length > 0 && (
                    <span className="absolute -right-px end-0 top-px flex size-2">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-red-300 opacity-75"></span>
                      <span className="relative inline-flex size-2 rounded-full bg-primaryYellow"></span>
                    </span>
                  )}
                  <svg
                    className="size-5.5 shrink-0 stroke-white sm:size-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.4 5L5 3H3M5.4 5H21L17 13H7M5.4 5L7 13M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                      stroke="current"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                <span className={`ml-0.5 font-medium`}>({totalQty})</span>
              </button>
            </div>
            <div className="block w-max">
              <button
                id="checkout-btn"
                className={`h-[46px] w-[106px] cursor-pointer rounded-lg bg-primary px-5 py-3.5 text-sm leading-initial text-white disabled:cursor-not-allowed disabled:bg-primary/80 disabled:text-white/40 sm:h-[56px] sm:w-[138px] sm:rounded-[10px] sm:px-6 sm:py-0 sm:text-base lg:py-4`}
                type="button"
                tabIndex={-1}
                aria-label="Coinfest Asia 2025 Button on Processed Checkout"
                aria-roledescription="Coinfest Asia 2025 Button on Processed Checkout"
                data-layer-id={'checkout-btn'}
                disabled={
                  (getStore?.length > 0 ? false : true) ||
                  checkTotalQty() ||
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
                      className="mx-auto block size-5 animate-spin items-center justify-center rounded-full border-[2.5px] border-current border-t-transparent font-medium text-white/60 opacity-80"
                      role="status"
                      aria-label="Coinfest Asia 2025 (Loading Checkout)"
                      aria-labelledby="Coinfest Asia 2025 (Loading Checkout)"
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
    </>
  );
};

export default NavbarStore;
