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
              <div
                className={`relative w-[237px] max-w-[237px] overflow-hidden rounded-lg px-3 py-3 sm:rounded-xl ${!isApplicable || totalProducts < gtRslt?.minQtyPromo || items?.couponCart !== null ? 'pointer-events-none bg-white opacity-60' : 'pointer-events-auto bg-primary opacity-100'}`}
              >
                <div
                  className={`absolute inset-x-0 inset-y-0 rounded-lg border-2 ${!isApplicable || totalProducts < gtRslt?.minQtyPromo || items?.couponCart !== null ? 'border-gray-200' : 'border-primary'} sm:rounded-xl`}
                />

                <div
                  className={`absolute inset-x-0 bottom-[34%] block -translate-y-1/2`}
                >
                  <div
                    className={`absolute inset-x-0 -top-3 mx-auto block w-[81%] border-t-2 border-dashed ${!isApplicable || totalProducts < gtRslt?.minQtyPromo || items?.couponCart !== null ? 'border-gray-200' : 'border-white/50'}`}
                  ></div>
                  <div
                    className={`clip-[rect(0px.12px.24px,0px)] absolute -left-1 bottom-0 z-[2] h-6 w-4.5 rounded-r-full border-2 border-solid ${!isApplicable || totalProducts < gtRslt?.minQtyPromo || items?.couponCart !== null ? 'border-gray-200' : 'border-primary'} bg-white`}
                  />
                  <div
                    className={`clip-[rect(0px.12px.24px,0px)] absolute -right-1 bottom-0 z-[2] h-6 w-4.5 rounded-l-full border-2 border-solid ${!isApplicable || totalProducts < gtRslt?.minQtyPromo || items?.couponCart !== null ? 'border-gray-200' : 'border-primary'} bg-white`}
                  />
                </div>

                <div className="relative z-10 flex flex-col space-y-4">
                  <div className="mb-3.5 block w-full">
                    <h3
                      className={`mb-1 text-2xl font-bold leading-initial ${!isApplicable || totalProducts < gtRslt?.minQtyPromo || items?.couponCart !== null ? 'text-black-900' : 'text-white'}`}
                    >
                      {`${gtRslt?.amount}% Off`}
                    </h3>
                    <span
                      className={`block text-balance text-sm font-normal leading-[19px] ${!isApplicable || totalProducts < gtRslt?.minQtyPromo || items?.couponCart !== null ? 'text-gray-500' : 'text-white'}`}
                    >
                      {`Grab your Pre-sale Ticket for only 500K IDR!`}
                    </span>
                  </div>

                  <button
                    type="button"
                    className={`block w-full rounded-lg ${!isApplicable || totalProducts < gtRslt?.minQtyPromo || items?.couponCart !== null ? 'bg-primary text-white' : 'bg-white text-primary'} px-3.5 py-3 text-sm leading-initial transition duration-300 ease-in-out disabled:bg-gray-200 disabled:text-gray-600`}
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
