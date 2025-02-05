import React, { useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

// @style
import '@splidejs/react-splide/css/core';

// @lib/controller & helper
import { currencyConverter } from '@lib/helper/CalculateCartContext';
import { getTotalProduct } from '@lib/helper/CartContext';

const PromoCouponCode = ({
  items = {
    productsStore: [],
    couponsStore: [],
    couponCart: null,
  },
  onEventClick,
}) => {
  const rfMainSplde = useRef(null);
  const handleClickCoupon = (d) => {
    onEventClick(d);
  };

  return (
    <>
      <Splide
        ref={(slider) => (rfMainSplde.current = slider)}
        tag="section"
        id="ca2024BenefitSlider"
        label="Coinfest Asia 2024 (Benefit Slider)"
        aria-label="Coinfest Asia 2024 (Benefit Slider)"
        options={{
          updateOnMove: true,
          lazyLoad: 'nearby',
          keyboard: true,
          arrows: false,
          pagination: false,
          fixedWidth: '224px',
          autoWidth: true,
          gap: '12px',
          mediaQuery: 'min',
          padding: { left: '10px', right: '10px' },
          mediaQuery: 'min',
          breakpoints: {
            640: {
              padding: { left: '0px', right: '0px' },
            },
          },
        }}
        className="ca2024BenefitSlider ca2024Grid w-full"
      >
        {items?.couponsStore?.slice(0, 6).map((gtRslt, i) => {
          const filteredCart = items?.productsStore?.filter(
            (item) =>
              item?.documentId === gtRslt?.includedProducts[0]?.documentId
          );
          const totalProducts = getTotalProduct(
            filteredCart[0]?.quantity,
            filteredCart[0]?.priceSale ?? filteredCart[0]?.price
          );
          const isApplicable = gtRslt.includedProducts.some((includedProduct) =>
            items?.productsStore.some(
              (product) => product.documentId === includedProduct.documentId
            )
          );
          return (
            <SplideSlide className="" key={i}>
              {/* <div
                className={`w-[237px] max-w-[237px] rounded-lg border-2 border-solid border-gray-200 px-3 py-3 sm:rounded-xl ${!isApplicable || totalProducts < gtRslt?.minQtyPromo || items?.couponCart !== null ? 'pointer-events-none opacity-60' : 'pointer-events-auto opacity-100'}`}
              >
                <div className="mb-4 flex flex-col">
                  <span className="mb-1 text-xl font-semibold leading-initial">
                    {`${gtRslt?.amount}% Off`}
                  </span>
                  <span className="text-balance text-sm font-normal leading-[20px] text-gray-500">
                    {`Min. purchase ${currencyConverter(gtRslt?.minQtyPromo)} for ${gtRslt?.includedProducts[0]?.name}`}
                  </span>
                </div>

                <button
                  type="button"
                  className="block w-full rounded-lg bg-primary px-3.5 py-3 text-sm leading-initial text-white transition duration-300 ease-in-out disabled:bg-gray-200 disabled:text-gray-600"
                  disabled={
                    !isApplicable ||
                    totalProducts < gtRslt?.minQtyPromo ||
                    items?.couponCart !== null
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    handleClickCoupon(gtRslt?.couponCode);
                  }}
                >
                  Apply
                </button>
              </div> */}
              <div
                className={`relative w-[237px] max-w-[237px] overflow-hidden rounded-lg bg-white px-3 py-3 sm:rounded-xl ${!isApplicable || totalProducts < gtRslt?.minQtyPromo || items?.couponCart !== null ? 'pointer-events-none opacity-60' : 'pointer-events-auto opacity-100'}`}
              >
                <div
                  className={`absolute inset-x-0 inset-y-0 rounded-lg border-2 border-gray-200 sm:rounded-xl`}
                />

                {/* @left & right notch */}
                <div
                  className={`clip-[rect(0px.12px.24px,0px)] absolute -left-1 bottom-[28%] z-[2] h-6 w-4.5 -translate-y-1/2 rounded-r-full border border-2 border-solid border-gray-200 bg-white`}
                />
                <div
                  className={`clip-[rect(0px.12px.24px,0px)] absolute -right-1 bottom-[28%] z-[2] h-6 w-4.5 -translate-y-1/2 rounded-l-full border border-2 border-solid border-gray-200 bg-white`}
                />

                <div className="relative z-10 flex flex-col space-y-4">
                  <div className="mb-3.5 block w-full">
                    <h3 className="mb-1 text-xl font-semibold leading-initial">
                      {`${gtRslt?.amount}% Off`}
                    </h3>
                    <span className="text-balance text-sm font-normal leading-[20px] text-gray-500">
                      {' '}
                      {`Min. purchase ${currencyConverter(gtRslt?.minQtyPromo)} for ${gtRslt?.includedProducts[0]?.name}`}
                    </span>
                  </div>

                  <button
                    type="button"
                    className="block w-full rounded-lg bg-primary px-3.5 py-3 text-sm leading-initial text-white transition duration-300 ease-in-out disabled:bg-gray-200 disabled:text-gray-600"
                    disabled={
                      !isApplicable ||
                      totalProducts < gtRslt?.minQtyPromo ||
                      items?.couponCart !== null
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      handleClickCoupon(gtRslt?.couponCode);
                    }}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </>
  );
};

export default PromoCouponCode;
