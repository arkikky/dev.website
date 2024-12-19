import React, { useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

// @style
import '@splidejs/react-splide/css/core';

// @lib/controller & helper
import { currencyConverter } from '@lib/helper/CalculateCartContext';

const PromoCouponCode = ({ coupons, totalCart, onEventClick }) => {
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
          padding: { left: '0px', right: '0px' },
        }}
        className="ca2024BenefitSlider ca2024Grid w-full"
      >
        {coupons?.slice(0, 6).map((gtRslt, i) => (
          <SplideSlide className="" key={i}>
            <div
              className={`w-[224px] max-w-[224px] rounded-lg border-2 border-solid border-gray-200 px-3 py-3 sm:rounded-xl ${totalCart < gtRslt?.minQtyPromo ? 'pointer-events-none opacity-60' : 'pointer-events-auto opacity-100'}`}
            >
              <div className="mb-3.5 flex flex-col">
                <span className="mb-1 text-lg font-bold leading-initial">
                  {gtRslt?.amount}% Off
                </span>
                <span className="text-sm leading-initial text-gray-400">
                  {`Min. purchase ${currencyConverter(gtRslt?.minQtyPromo)} for ${gtRslt?.includedProducts[0]?.name}`}
                </span>
              </div>

              <button
                type="button"
                className="block w-full rounded-lg bg-primary px-3.5 py-3 text-sm leading-initial text-white disabled:bg-gray-200 disabled:text-gray-600"
                disabled={totalCart < gtRslt?.minQtyPromo}
                onClick={(e) => {
                  e.preventDefault();
                  handleClickCoupon(gtRslt?.couponCode);
                }}
              >
                Apply
              </button>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
};

export default PromoCouponCode;
