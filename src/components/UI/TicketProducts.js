import React, { useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import getConfig from 'next/config';
import Image from 'next/image';
import MarkdownRenderer from '@components/MarkdownRenderer';

// # @get .config
const { publicRuntimeConfig } = getConfig();

// @lib
import { useStoreContext } from '@lib/context/store/StoreContext';
import { useTrackingStore } from '@lib/hooks/tracking-store/TrackingStore';
import { getPriceDiscountDisplay } from '@lib/helper/Configuration';
import { currencyConverter } from '@lib/helper/CalculateCart';
import { useMethod } from '@lib/hooks/Method';

// @components
import PreSaleCountdown from '@components/PreSaleCountdown';

const TicketProducts = ({
  isPage = false,
  useHeading = 'h3',
  data,
  cartProducts = [],
  isLoading,
}) => {
  const {
    getStore,
    sessionsProducts,
    handleAddProductCart,
    updateQuantityCart,
    checkTotalQty,
    totalOrder,
  } = useStoreContext();
  const { trackingViewProduct, trackingAddToCart } = useTrackingStore();
  const { toggleOverlayPopUp } = useMethod();
  // @hook(session product)
  const [isSessionProducts, setSessionProducts] = useState({
    products: {},
    checkProduct: false,
    count: 1,
  });
  // @card(theme)
  const style = {
    rc33x0dgm6tm707jghffuip4: 'ca25Products_VIP',
  };

  // @discount-price
  const priceDiscountDisplay = getPriceDiscountDisplay(data);

  // @calculate-products
  useEffect(() => {
    const foundProduct = cartProducts?.find(
      (i) => i.documentId === data?.documentId
    );
    setSessionProducts((prev) => ({
      ...prev,
      products: foundProduct || {},
    }));
  }, [cartProducts, data?.documentId]);

  useEffect(() => {
    const foundQtyProduct = getStore?.find(
      (i) => i.documentId === data?.documentId
    );
    setSessionProducts((prev) => ({
      ...prev,
      checkProduct: !!foundQtyProduct,
      count: foundQtyProduct?.quantity || 1,
    }));
  }, [getStore, data?.documentId]);

  // @add-tracking-id
  const trackingButtonId = (documentId, name, isPage) => {
    const ids = {
      g1ukadil4n4a3r0ndly7jl42: isPage ? 'fest-buy-tix' : 'fest-buy-hp',
      sn4ujm0d1ebbc8lme1ihzsa9: isPage ? 'group-buy-tix' : 'group-buy-hp',
      rc33x0dgm6tm707jghffuip4: isPage ? 'bull-buy-tix' : 'bull-buy-hp',
    };
    return ids[documentId] || `ca25Btn_Product${name.replace(/\s/g, '')}`;
  };

  return (
    <>
      <div
        className={twMerge(
          `ca25Products relative flex h-auto flex-col rounded-2xl bg-transparent sm:rounded-[20px] lg:h-[569px]`,
          style[data?.documentId] || ''
        )}
      >
        {data?.documentId === 'g1ukadil4n4a3r0ndly7jl42' ? (
          <div className="absolute inset-x-0 -top-[21px] bottom-auto z-[4] text-center lg:-top-[26px]">
            <Image
              className="mx-auto aspect-auto h-[46px] w-auto lg:h-[54px]"
              src={'/assets/images/store/ca25PreSale-FestivalTicket.svg'}
              alt={`${publicRuntimeConfig?.siteAppName} Save Pre Sale Ticket`}
              height={96}
              width={81}
              quality="87"
            />
          </div>
        ) : null}
        <div
          className={`ca25Products_Card relative flex h-full flex-col items-start justify-between overflow-hidden rounded-2xl px-4 pb-4 pt-9 sm:rounded-[20px] sm:px-4.5 sm:pb-4.5 sm:pt-9 lg:px-6 lg:pb-6 lg:pt-11 ${data?.documentId === 'g1ukadil4n4a3r0ndly7jl42' ? 'ca25BestSaleProducts' : null}`}
        >
          <div className="flex w-full flex-col items-start pb-18 lg:pb-0">
            <div className="relative block w-full">
              {useHeading === 'h2' ? (
                <h2 className="mb-1.5 text-xl font-bold uppercase leading-initial sm:mb-2 sm:text-[22px] sm:leading-initial">
                  {data?.documentId === 'g1ukadil4n4a3r0ndly7jl42'
                    ? 'Festival Ticket'
                    : data?.name || 'Ticket Products'}
                </h2>
              ) : (
                <h3 className="mb-1.5 text-xl font-bold uppercase leading-initial sm:mb-2 sm:text-[22px] sm:leading-initial">
                  {data?.documentId === 'g1ukadil4n4a3r0ndly7jl42'
                    ? 'Festival Ticket'
                    : data?.name || 'Ticket Products'}
                </h3>
              )}
              <div className="inline-flex items-start space-x-2.5">
                <span className="text-[32px] font-bold leading-[38px]">
                  {currencyConverter(data?.priceSale ?? data?.price)}
                </span>
                {priceDiscountDisplay && (
                  <span className="pt-0.5 text-xl font-medium text-white/50 line-through">
                    {currencyConverter(priceDiscountDisplay)}
                  </span>
                )}
              </div>
            </div>
            {data?.documentId !== 'rc33x0dgm6tm707jghffuip4' ? (
              <div className="my-4 inline-flex w-full flex-row justify-between text-sm font-bold uppercase text-primaryYellow lg:text-base">
                <span>{`PRICE INCREASE IN`}</span>
                <span>
                  <PreSaleCountdown />
                </span>
              </div>
            ) : (
              // <div className="my-4 block w-full border-t border-dashed border-gray-200/70 sm:my-6"></div>
              <div className="my-4 inline-flex w-full flex-row justify-between text-sm font-bold uppercase italic text-white lg:text-base">
                <span>{`BEST DEAL • VERY LIMITED QUANTITY`}</span>
              </div>
            )}

            <div className="block w-full pt-2">
              {data?.documentId === 'rc33x0dgm6tm707jghffuip4' && (
                <span className="mb-3.5 flex flex-row items-center justify-start text-base font-medium sm:text-lg">
                  <svg
                    className="ml-[3px] mr-[12px] size-5 shrink-0 sm:ml-[1px] sm:mr-[11px] sm:size-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                    <path d="M20 3v4" />
                    <path d="M22 5h-4" />
                    <path d="M4 17v2" />
                    <path d="M5 18H3" />
                  </svg>
                  {`All access from Festival Ticket`}
                </span>
              )}
              <MarkdownRenderer content={data?.description} />
            </div>
          </div>
          <div
            className={`flex w-full flex-row items-end ${isSessionProducts?.checkProduct === true ? 'justify-between' : 'justify-end'}`}
          >
            {isSessionProducts?.checkProduct === true && (
              <div className={`flex flex-col items-start`}>
                <span className="mb-1.5 block text-base">Qty : </span>
                <div
                  className={`hsCA25_UpdatedQtyCart hs-dropdown-menu ml-0 mt-0 flex w-max rounded-[8px] border border-gray-200 bg-gray-50 px-[3px] py-[3px]`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="Button update quantity Cart (Coinfest Asia 2025)"
                >
                  <div className="inline-flex flex-row gap-x-1.5">
                    {data?.documentId !== 'sn4ujm0d1ebbc8lme1ihzsa9' ? (
                      <>
                        <button
                          id="ca25Btn_MinQtyCarts"
                          className="ca25BtnQtyDark"
                          type="button"
                          tabIndex={-1}
                          aria-label="Button update quantity Min Cart (Coinfest Asia 2025)"
                          disabled={
                            isSessionProducts?.count >= 1 &&
                            isSessionProducts?.count <= 1
                          }
                          onClick={(e) => {
                            e.preventDefault();
                            updateQuantityCart(
                              cartProducts,
                              isSessionProducts?.products,
                              false
                            );
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
                        <input
                          className={`pointer-events-none w-5 cursor-default select-none border-0 bg-transparent p-0 text-center text-sm font-light text-black-900 focus:ring-0 focus-visible:outline-none focus-visible:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`}
                          type="number"
                          aria-roledescription="Number field"
                          value={
                            isSessionProducts?.count >= 15
                              ? 15
                              : isSessionProducts?.count
                          }
                          tabIndex="-1"
                          maxLength="15"
                          minLength={1}
                          readOnly={true}
                          disabled={true}
                        />
                        <button
                          id="ca25Btn_MaxQtyCarts"
                          className={`ca25BtnQtyDark`}
                          type="button"
                          tabIndex={-1}
                          aria-label="Button update quantity Max Cart (Coinfest Asia 2025)"
                          disabled={
                            isSessionProducts?.count >= 15 || checkTotalQty()
                          }
                          onClick={(e) => {
                            e.preventDefault();
                            updateQuantityCart(
                              cartProducts,
                              isSessionProducts?.products,
                              true
                            );
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
                      </>
                    ) : data?.documentId === 'sn4ujm0d1ebbc8lme1ihzsa9' ? (
                      <input
                        className={`pointer-events-none w-5 cursor-default select-none border-0 bg-transparent p-0 text-center text-sm font-light text-black-900 focus:ring-0 focus-visible:outline-none focus-visible:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`}
                        type="number"
                        aria-roledescription="Number field"
                        value={5}
                        tabIndex="-1"
                        maxLength="15"
                        minLength={1}
                        readOnly={true}
                        disabled={true}
                      />
                    ) : null}
                  </div>
                </div>
              </div>
            )}
            {isSessionProducts?.checkProduct === true ? (
              <button
                id={`ca25AddedBtn_Product${data?.name.replace(/\s/g, '')}`}
                className={`ca25ProductsBtn ca25DL_ViewProduct actived relative inline-flex w-[169px] items-center justify-center rounded-xl px-4 py-4 font-semibold uppercase disabled:pointer-events-none disabled:opacity-90 sm:px-6 sm:py-5 ${!sessionsProducts ? 'cursor-default' : 'cursor-pointer'}`}
                role="button"
                aria-label={`Button ${data?.name.replace(/\s/g, '')} Products Coinfest Asia 2025`}
                onClick={(e) => {
                  e.preventDefault();
                  toggleOverlayPopUp(
                    '.ca2025BckdrpOverflay_PopUpMobile',
                    '.ca2025CartPopUp_Mobile'
                  );
                  trackingViewProduct(getStore, totalOrder, true);
                }}
              >
                {`View Cart`}
              </button>
            ) : (
              <button
                id={trackingButtonId(data?.documentId, data?.name, isPage)}
                className={`ca25ProductsBtn ca25DL_ViewProduct relative inline-flex w-[169px] items-center justify-center rounded-xl px-4 py-4 font-semibold uppercase disabled:pointer-events-none disabled:opacity-90 sm:px-6 sm:py-5 ${!sessionsProducts ? 'cursor-default' : 'cursor-pointer'}`}
                role="button"
                aria-label={`Button ${data?.name.replace(/\s/g, '')} Products Coinfest Asia 2025`}
                data-layer-id={trackingButtonId(
                  data?.documentId,
                  data?.name,
                  isPage
                )}
                disabled={isLoading}
                onClick={(e) => {
                  e.preventDefault();
                  handleAddProductCart(data, isSessionProducts?.count);
                  trackingAddToCart(data);
                }}
              >
                {isLoading ? (
                  <div
                    className={`ca25ProductsBtn_Loading block size-6 animate-spin items-center justify-center rounded-full border-[2.5px] ${data?.documentId === 'rc33x0dgm6tm707jghffuip4' ? 'border-white' : 'border-black-900'} border-t-transparent font-medium opacity-80`}
                    role="status"
                    aria-label="Coinfest Asia 2025 (Loading Products)"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  'Buy Ticket'
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketProducts;
