import React from "react";

const CartaWalletContentMobile = ({ number, shortDesc }) => {
  return (
    <>
      <div
        className={`group overflow-hidden rounded-2xl bg-secondary px-4 py-4 text-base transition duration-300 ease-in-out sm:px-6 sm:py-6`}
      >
        <span className="flex flex-col items-start justify-start">
          <span className="text-sm font-light text-white/60 transition duration-300 ease-in-out">
            Step {number}
          </span>
          <span className="text-left text-base font-medium text-white transition duration-300 ease-in-out">
            {shortDesc}
          </span>
        </span>
      </div>
    </>
  );
};

export default CartaWalletContentMobile;
