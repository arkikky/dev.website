import React, { useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

// @style
import '@splidejs/react-splide/css/core';

// @lib
import { useStoreContext } from '@lib/context/store/StoreContext';
import { getTotalProduct } from '@lib/helper/Store';

const PromoCouponCode = ({
  items = {
    couponsStore: [],
  },
  onSetValue,
}) => {
  const rfMainSplde = useRef(null);
  const { getStore, getCoupon, handleUseCoupon, totalOrder } =
    useStoreContext();

  return (
    <>
      <Splide
        ref={(slider) => (rfMainSplde.current = slider)}
        tag="section"
        id="ca25CouponSaleSlider"
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
        className="ca25CouponSaleSlider ca2024Grid w-full"
      >
        {items?.couponsStore?.slice(0, 6).map((gtRslt, i) => {
          const filteredCart = getStore?.filter(
            (item) =>
              item?.documentId === gtRslt?.includedProducts[0]?.documentId
          );
          const totalProducts = getTotalProduct(
            filteredCart[0]?.quantity,
            filteredCart[0]?.priceSale ?? filteredCart[0]?.price
          );
          const isApplicable = gtRslt?.includedProducts.some(
            (includedProduct) =>
              getStore?.some((p) => p.documentId === includedProduct.documentId)
          );

          return (
            <SplideSlide className="" key={i}>
              <div
                className={`relative w-[237px] max-w-[237px] overflow-hidden rounded-lg px-3 py-3 sm:rounded-xl ${!isApplicable || totalProducts < gtRslt?.minQtyPromo || getCoupon !== null ? 'pointer-events-none bg-white opacity-60' : 'pointer-events-auto bg-primary opacity-100'}`}
              >
                <div
                  className={`absolute inset-x-0 inset-y-0 rounded-lg border-2 ${!isApplicable || totalProducts < gtRslt?.minQtyPromo || getCoupon !== null ? 'border-gray-200' : 'border-primary'} sm:rounded-xl`}
                />

                <div
                  className={`absolute inset-x-0 bottom-[34%] block -translate-y-1/2`}
                >
                  <div
                    className={`absolute inset-x-0 -top-3 mx-auto block w-[81%] border-t-2 border-dashed ${!isApplicable || totalProducts < gtRslt?.minQtyPromo || getCoupon !== null ? 'border-gray-200' : 'border-white/50'}`}
                  ></div>
                  <div
                    className={`clip-[rect(0px.12px.24px,0px)] absolute -left-1 bottom-0 z-[2] h-6 w-4.5 rounded-r-full border-2 border-solid ${!isApplicable || totalProducts < gtRslt?.minQtyPromo || getCoupon !== null ? 'border-gray-200' : 'border-primary'} bg-white`}
                  />
                  <div
                    className={`clip-[rect(0px.12px.24px,0px)] absolute -right-1 bottom-0 z-[2] h-6 w-4.5 rounded-l-full border-2 border-solid ${!isApplicable || totalProducts < gtRslt?.minQtyPromo || getCoupon !== null ? 'border-gray-200' : 'border-primary'} bg-white`}
                  />
                </div>

                <div className="relative z-10 flex flex-col space-y-4">
                  <div className="mb-3.5 block w-full">
                    <h3
                      className={`mb-1 text-[22px] font-bold leading-initial ${!isApplicable || totalProducts < gtRslt?.minQtyPromo || getCoupon !== null ? 'text-black-900' : 'text-white'}`}
                    >
                      {gtRslt?.clickbait}
                    </h3>
                    <span
                      className={`block text-balance text-sm font-normal leading-[19px] ${!isApplicable || totalProducts < gtRslt?.minQtyPromo || getCoupon !== null ? 'text-gray-500' : 'text-white'}`}
                    >
                      {gtRslt?.description}
                    </span>
                  </div>

                  <button
                    type="button"
                    className={`block w-full rounded-lg ${!isApplicable || totalProducts < gtRslt?.minQtyPromo || getCoupon !== null ? 'bg-primary text-white' : 'bg-white text-primary'} px-3.5 py-3 text-sm leading-initial transition duration-300 ease-in-out disabled:bg-gray-200 disabled:text-gray-600`}
                    disabled={
                      !isApplicable ||
                      totalProducts < gtRslt?.minQtyPromo ||
                      getCoupon !== null
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      handleUseCoupon(
                        {
                          items: gtRslt?.couponCode,
                          total: totalOrder,
                        },
                        onSetValue
                      );
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
