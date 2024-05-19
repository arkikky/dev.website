import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

const TredingCompetitionCard = ({
  title = "",
  images = "/assets/images/activities/treding-competition/ca2024-Bitwyre.png",
  urlButton = "",
  labelButton = "Signup",
}) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    rootMargin: "10% 0% -25% 0%",
  });
  const [isLoading, setLoading] = useState(false);

  // @intersection-observer
  useEffect(() => {
    if (inView) {
      setLoading(true);
    }

    return () => {
      undefined;
    };
  }, [inView]);

  return (
    <>
      <div
        ref={ref}
        className="rounded-3xl border border-solid border-[#D6D6D6] bg-white px-4 py-4 lg:rounded-[26px] lg:px-6 lg:py-6"
      >
        <div className="flex flex-col items-start justify-start">
          <div className="h-[242px] w-full overflow-hidden rounded-[14px]">
            {isLoading ? (
              <Image
                className="mx-auto h-full w-full object-cover object-center"
                src={images}
                alt={`Coinfest Asia 2024 ( - Treding Competition)`}
                height={363}
                width={576}
                quality="87"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center bg-[#D9DCE4]">
                <div
                  className="inline-block size-8 animate-spin rounded-full border-2 border-current border-t-transparent text-gray-500"
                  role="status"
                  aria-label="loading"
                >
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            )}
          </div>
          <div className="mt-4 flex w-full flex-col items-start rounded-[14px] bg-[#F8F8F8] px-4 py-4 lg:px-6 lg:py-6">
            <span className="font-bevietnamPro text-lg font-normal text-[#6E6E6E] lg:text-xl">
              Win up to
            </span>
            <div className="mt-2 flex flex-row items-end justify-end">
              <h3 className="font-bevietnamPro text-[32px] font-bold leading-[38px] text-[#323232] sm:text-[40px] sm:leading-[48px]">
                $140,000
              </h3>
              <span className="ml-2 font-bevietnamPro text-sm font-normal uppercase text-[#959595]">
                USDT
              </span>
            </div>
          </div>
        </div>
        <div className="mt-6 inline-flex w-full flex-row items-center justify-between">
          <Link
            className={`relative mr-2 inline-flex w-fill items-center justify-center rounded-[14px] bg-transparent px-3 py-4 font-bevietnamPro text-base font-normal text-[#616161] outline-none last:mr-0 focus-visible:outline-none sm:px-5 sm:py-5`}
            title={`Coinfest Asia 2024 (${title} - Treding Competition)`}
            href={""}
          >
            Learn more
          </Link>
          <Link
            className={`relative inline-flex w-fill items-center justify-center rounded-[14px] bg-secondary px-3 py-4 font-bevietnamPro text-base font-normal text-white outline-none last:mr-0 focus-visible:outline-none sm:px-5 sm:py-5`}
            title={`Coinfest Asia 2024 (${title} - Treding Competition)`}
            href={urlButton}
          >
            {labelButton}
          </Link>
        </div>
      </div>
    </>
  );
};

export default TredingCompetitionCard;
