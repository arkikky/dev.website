import React from 'react';
import { twMerge } from 'tailwind-merge';
import MarkdownRenderer from '@components/MarkdownRenderer';

// @lib/controller & helper
import { currencyConverter } from '@lib/helper/CalculateCartContext';

const TicketProducts = ({
  data,
  isLoading,
  isSessionLoading,
  handleProducts,
}) => {
  const { documentId } = data;
  if (!data?.description) return null;

  // @discount-price
  const getPriceDiscountDisplay = (d) => {
    if (!d?.price || !d?.priceSale) return null;
    return documentId === 'sn4ujm0d1ebbc8lme1ihzsa9' ? d.price * 5 : d.price;
  };
  const priceDiscountDisplay = getPriceDiscountDisplay(data);

  // @card(theme)
  const style = {
    rc33x0dgm6tm707jghffuip4: 'ca25Products_VIP',
  };

  return (
    <>
      <div
        className={twMerge(
          `ca25Products flex h-auto flex-col space-y-6 rounded-3xl px-1.5 py-1.5 lg:h-[651px]`,
          style[documentId] || ''
        )}
      >
        <div className="ca25Products_Card relative flex h-full flex-col items-start justify-between rounded-[19px] px-4.5 py-4.5 lg:px-6 lg:py-6">
          <div className="flex w-full flex-col items-start pb-15 lg:pb-0">
            <div className="block w-full">
              <h2 className="mb-1 text-xl font-medium sm:mb-2">
                {data?.name || 'Ticket Products'}
              </h2>
              <div className="inline-flex items-start space-x-2.5">
                <span className="text-[32px] font-semibold leading-[38px]">
                  {(() => {
                    const price =
                      documentId === 'sn4ujm0d1ebbc8lme1ihzsa9'
                        ? (data?.priceSale ?? data?.price) * 5
                        : (data?.priceSale ?? data?.price);
                    return currencyConverter(price);
                  })()}
                </span>
                {priceDiscountDisplay && (
                  <span className="text-xl font-normal text-gray-400 line-through">
                    {currencyConverter(priceDiscountDisplay)}
                  </span>
                )}
              </div>
            </div>

            <div className="my-6 block w-full border-t border-dashed border-gray-200"></div>

            <div className="block w-full">
              {documentId === 'rc33x0dgm6tm707jghffuip4' && (
                <span className="mb-3.5 flex flex-row items-center justify-start text-base font-medium">
                  <svg
                    className="ml-[3px] mr-[13px] size-5 shrink-0"
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
                  All access from Festival Ticket
                </span>
              )}
              <MarkdownRenderer content={data?.description} />
            </div>
          </div>

          <button
            id={`ca25Btn_Product${data?.name.replace(/\s/g, '')}`}
            className={`ca25ProductsBtn relative inline-flex w-full items-center justify-center rounded-xl px-6 py-5 font-semibold uppercase disabled:pointer-events-none disabled:opacity-90 ${isSessionLoading === true ? 'cursor-default' : 'cursor-pointer'}`}
            role="button"
            aria-label={`Button Coinfest Asia 2025 - ${data?.name.replace(/\s/g, '')} Products)`}
            disabled={isLoading}
            onClick={(e) => {
              e.preventDefault();
              handleProducts(data);
            }}
          >
            {isLoading ? (
              <div
                className="ca25ProductsBtn_Loading block size-6 animate-spin items-center justify-center rounded-full border-[2.5px] border-current border-t-transparent font-medium opacity-80"
                role="status"
                aria-label="Coinfest Asia 2025 (Loading Products)"
              >
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              'Buy Ticket'
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default TicketProducts;
