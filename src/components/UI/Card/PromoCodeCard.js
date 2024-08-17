import { useState, useEffect } from "react";
import Image from "next/image";

const PromoCodeCard = ({
  description = "",
  promoCode = "",
}) => {
  const [showToast, setShowToast] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(promoCode).then(
      () => {
        setShowToast(true);
      },
      (err) => console.error('Failed to copy text: ', err)
    );
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <div>
      <div 
        className="p-4 rounded-2xl border border-[#DADADA] cursor-pointer"
        onClick={copyToClipboard}
      >
        <p className="text-base text-[#5E5E5E]">{description}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-[#2458F1] text-xl font-bold italic font-bevietnamPro">{promoCode}</span>
          <Image
            src={"/assets/images/icons/ca2024-Copy.svg"}
            alt={`Coinfest Asia 2024 (Promo Code - Copy)`}
            height={24}
            width={24}
            quality="95"
          />
        </div>
      </div>
      <div
        className={`fixed left-0 z-[999] bottom-24 w-full flex items-center justify-center transition-opacity duration-500 ${
          showToast ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-3 py-2 bg-[#2458F1] text-white font-normal rounded-[14px] text-xs lg:text-base font-bevietnamPro">
          Coupon has already been copied to your clipboard
        </div>
      </div>
    </div>
  );
};

export default PromoCodeCard;
