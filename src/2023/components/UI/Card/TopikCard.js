import { useEffect, useState } from "react";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
import Image from "next/image";

const TopikCard = ({ title, desc, src }) => {
  const addTitle = title ? title : "Finance & Asset Management";
  const addDesc = desc
    ? desc
    : "Venture Capital (VC), Stablecoin, and Banking are essential pillars of modern finance, representing the cutting-edge ecosystem of investment, digital currency stability, and secure financial services. Discover the keys to financial success at our upcoming session on Finance & Asset Management.";
  const addSrc = src ? src : "Finance";
  const [isExpand, setExpand] = useState(false);

  const handleClick = () => {
    setExpand(!isExpand);
  };

  useEffect(() => {}, [isExpand]);
  return (
    <div className="col-span-2 ">
      <div className="p-6 border bg-[#3867F2] rounded-lg hover:border-[#FFC600] h-fit">
        <div className="mb-2">
          <Image
            className="h-[60px] w-auto"
            src={`/2023/assets/images/topics/${src}.svg`}
            alt={addSrc}
            width={0}
            height={0}
          />
        </div>
        <h2 className="mb-2 text-left font-bold text-white">{addTitle}</h2>
        <p
          className={`mb-6 text-white text-left text-base  leading-5  sm:leading-7 ${
            isExpand
              ? " "
              : "eclipse line-clamp-4 max-h-20 sm:max-h-28 overflow-hidden"
          } `}
        >
          {addDesc}
        </p>
        <div className="w-full flex">
          <span
            className="text-[#FFC600] font-semibold text-left cursor-pointer"
            onClick={handleClick}
          >
            {isExpand ? "See less" : "See more"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopikCard;
