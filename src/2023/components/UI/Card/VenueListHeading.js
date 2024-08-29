import { useEffect, useState } from "react";
import Image from "next/image";

const VenueListHeading = ({ icons, title }) => {
  return (
    <div className="flex flex-row items-center">
        <Image
            className="h-12 w-12"
            src={icons}
            alt={`Coinfest Asia 2023 (Icons Venue - Maps)`}
            width={128}
            height={128}
            quality="87"
        />
        <span className="text-[28px] leading-[32px] font-bold ml-3">{title}</span>
    </div>
  );
};

export default VenueListHeading;
