import React from 'react';

const CouponSale = ({ label, shortDesc, status }) => {
  return (
    <>
      <div
        className={`relative w-[237px] max-w-[237px] overflow-hidden rounded-lg px-3 py-3 sm:rounded-xl ${status ? 'pointer-events-none bg-white opacity-60' : 'pointer-events-auto bg-primary opacity-100'}`}
      >
        <div
          className={`absolute inset-x-0 inset-y-0 rounded-lg border-2 ${status ? 'border-gray-200' : 'border-primary'} sm:rounded-xl`}
        />

        {/* @left & right notch */}
        <div
          className={`clip-[rect(0px.12px.24px,0px)] absolute -left-1 bottom-[28%] z-[2] h-6 w-4.5 -translate-y-1/2 rounded-r-full border border-2 border-solid ${status ? 'border-gray-200' : 'border-primary'} bg-white`}
        />
        <div
          className={`clip-[rect(0px.12px.24px,0px)] absolute -right-1 bottom-[28%] z-[2] h-6 w-4.5 -translate-y-1/2 rounded-l-full border border-2 border-solid ${status ? 'border-gray-200' : 'border-primary'} bg-white`}
        />

        <div className="relative z-10 flex flex-col space-y-4">
          <div className="mb-3.5 block w-full">
            <h3
              className={`mb-1 text-xl font-semibold leading-initial ${status ? 'text-black-900' : 'text-white'}`}
            >
              {`${gtRslt?.amount}% Off`}
            </h3>
            <span
              className={`text-balance text-sm font-normal leading-[20px] ${status ? 'text-gray-500' : 'text-white'}`}
            >
              {shortDesc}
            </span>
          </div>

          <button
            type="button"
            className={`block w-full rounded-lg ${status ? 'bg-primary text-white' : 'bg-white text-primary'} px-3.5 py-3 text-sm leading-initial transition duration-300 ease-in-out disabled:bg-gray-200 disabled:text-gray-600`}
            disabled={status}
            onClick={(e) => {
              e.preventDefault();
              handleClickCoupon(gtRslt?.couponCode);
            }}
          >
            Apply
          </button>
        </div>
      </div>
    </>
  );
};

export default CouponSale;
