import { useEffect, useState } from "react";
import getConfig from "next/config";
import Image from "next/image";

const VenueList = ({ icons, title }) => {
  return (
    <div className="flex flex-row items-center mt-4 first:mt-0">
        <Image
            className="h-6 w-6"
            src={icons}
            alt={`Coinfest Asia 2023 (Icons Venue - Maps)`}
            width={128}
            height={128}
            quality="87"
        />
        <span className="text-base ml-3">{title}</span>
    </div>
  );
};

export default VenueList;
