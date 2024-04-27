import React from "react";
import Image from "next/image";

const SectionInnerSplit = ({ children }) => {
  return (
    <>
      <div className="relative flex flex-col bg-secondary">
        {/* @background (backdrop) */}
        <div className="ca2024BackdropFull opacity-1 absolute inset-x-0 inset-y-0 z-[2]">
          <Image
            className={`mx-auto h-full w-full object-cover object-top`}
            src={"/assets/images/backdrop/background/ca2024BgLineFull.jpg"}
            alt={`Coinfest Asia 2024 (Background Backdrop Full)`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            height={1800}
            width={1440}
            quality={87}
          />
        </div>

        {/* @content */}
        {children}
      </div>
    </>
  );
};

export default SectionInnerSplit;
