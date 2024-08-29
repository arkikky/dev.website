import { Dialog, Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const LyCookieBanner = ({ className }) => {
  const [showBanner, setShowBanner] = useState(false);
  const closeBanner = async () => {
    setShowBanner(false);
    localStorage.setItem("bannerClosed", "true");
  };

  useEffect(() => {
    const hasBannerClosed = localStorage.getItem("bannerClosed");
    if (!hasBannerClosed) {
      setShowBanner(true);
    }
  }, [showBanner]);

  return (
    <Transition
      show={showBanner}
      enter="transition-opacity duration-150"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className={`fixed left-1/2 transform -translate-x-1/2 right-0 flex justify-center items-end bottom-3 sm:bottom-6 z-[100] w-[97%] sm:w-[616px] ${className}`}
    >
      <section
        className={`bg-white drop-shadow-xl rounded-[10px] py-6 px-6 max-w-max sm:max-w-[616px] z-[200]`}
      >
        <div className="mb-4">
          <span className="font-normal text-base">
            This website uses cookies, pixel tags, and local storage for
            performance, personalization and marketing purposes.{" "}
            <Link href="/privacy-policy">
              <span className="text-primary">Read privacy policy</span>
            </Link>
          </span>
        </div>
        <button
          onClick={closeBanner}
          className="py-3 px-6 rounded-full bg-primary text-white"
        >
          Close
        </button>
      </section>
    </Transition>
  );
};

export default LyCookieBanner;
