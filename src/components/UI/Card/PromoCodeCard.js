import { useState, useEffect } from "react";
import Image from "next/image";

const PromoCodeCard = ({
  description = "",
  promoCode = "",
  size = "md",
  customDesc = "",
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
    <>
      {customDesc ?
        <div>
          <div
            className="p-4 rounded-2xl border border-[#DADADA]"
          >
            {customDesc}
            <button onClick={copyToClipboard} className="w-full flex items-center justify-center rounded-xl gap-2 bg-[url('/assets/images/backdrop/background/ca2024BgNavGuide.jpg')] bg-cover bg-left py-4 text-sm font-medium text-white mt-2">
              Copy Code
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.1667 7.5H9.66667C8.74619 7.5 8 8.24619 8 9.16667V16.6667C8 17.5872 8.74619 18.3333 9.66667 18.3333H17.1667C18.0872 18.3333 18.8333 17.5872 18.8333 16.6667V9.16667C18.8333 8.24619 18.0872 7.5 17.1667 7.5Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4.66602 12.5013H3.83268C3.39066 12.5013 2.96673 12.3257 2.65417 12.0131C2.34161 11.7006 2.16602 11.2766 2.16602 10.8346V3.33464C2.16602 2.89261 2.34161 2.46869 2.65417 2.15613C2.96673 1.84356 3.39066 1.66797 3.83268 1.66797H11.3327C11.7747 1.66797 12.1986 1.84356 12.5112 2.15613C12.8238 2.46869 12.9993 2.89261 12.9993 3.33464V4.16797" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
          <div
            className={`fixed left-0 z-[999] bottom-24 w-full flex items-center justify-center transition-opacity duration-500 ${showToast ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
          >
            <div className="px-3 py-2 bg-[#2458F1] text-white font-normal rounded-[14px] text-xs lg:text-base font-bevietnamPro">
              Coupon has already been copied to your clipboard
            </div>
          </div>
        </div>
        :
        <div>
          <div
            className="p-4 rounded-2xl border border-[#DADADA] cursor-pointer"
            onClick={copyToClipboard}
          >
            <p className={`${size == "md" ? "text-base" : "text-sm"} text-[#5E5E5E]`}>{description}</p>
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
            className={`fixed left-0 z-[999] bottom-24 w-full flex items-center justify-center transition-opacity duration-500 ${showToast ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
          >
            <div className="px-3 py-2 bg-[#2458F1] text-white font-normal rounded-[14px] text-xs lg:text-base font-bevietnamPro">
              Coupon has already been copied to your clipboard
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default PromoCodeCard;
