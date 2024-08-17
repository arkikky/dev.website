import React from "react";
import Image from "next/image";

const CartaWalletMobile = ({ url, number, shortDesc }) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="relative">
          <div id={`ca2024SegmentCartaWalletStepTabs-1`} className="h-full">
            <Image
              className="mx-auto h-full w-full"
              src={url}
              alt={`Coinfest Asia 2024 (Step ${number} - Carta Wallet)`}
              height={3799}
              width={1755}
              quality="87"
            />
          </div>
        </div> 
      </div>
    </>
  );
};

export default CartaWalletMobile;
