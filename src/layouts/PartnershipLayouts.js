import React, { useEffect } from "react";
import Image from "next/image";

// @layouts
import Navbar from "@layouts/Navbar";

const PartnershipLayouts = ({
  title = "Take part in Coinfest Asia where innovation meets adoption.",
  shortDesc = null,
  children,
  btnBack = false,
  urlBack = "",
  brandLogo = "primary",
  modeDifferent = false,
}) => {
  useEffect(() => {
    import("preline");

    return () => {
      undefined;
    };
  }, []);

  return (
    <>
      {/* @navbar-top */}
      <Navbar
        back={btnBack}
        bgBack="bg-white"
        brandLogo={brandLogo}
        modeDifferent={modeDifferent}
      />

      {/* @main */}
      <main className="relative flex min-h-svh flex-col bg-primary">
        <section className="relative inline-flex h-auto w-full flex-grow flex-col xl:flex-row">
          <div className="flex h-auto w-full flex-1 flex-col bg-primary xl:w-min xl:min-w-[600px] xl:max-w-[600px] 2xl:min-w-max 2xl:max-w-none">
            <div className="relative top-0 h-full max-h-[424px] min-h-[424px] w-full overflow-hidden sm:h-full sm:max-h-[527px] sm:min-h-[527px] xl:sticky xl:max-h-screen xl:min-h-screen">
              <div className="absolute inset-x-0 inset-y-0 z-px h-full overflow-hidden">
                <div
                  className={`absolute inset-x-0 bottom-auto z-[6] flex flex-col px-4 text-start ${
                    shortDesc !== null
                      ? "top-[100px] sm:top-[186px]"
                      : "top-[100px] sm:top-[146px]"
                  } sm:px-11`}
                >
                  <h1 className="w-full max-w-[496px] font-bevietnamPro text-[32px] uppercase leading-[40px] text-white sm:max-w-[543px] sm:text-[40px] sm:leading-[48px] xl:max-w-[486px] font-bold">
                    {title}
                  </h1>
                  {shortDesc && (
                    <span className="mt-4 text-xl font-bevietnamPro font-normal text-white">
                      {shortDesc}
                    </span>
                  )}
                </div>

                {/* @backdrop (statue) */}
                {shortDesc === null && (
                  <>
                    <div className="pointer-events-none absolute -bottom-[103px] -left-11 right-auto top-auto z-[5] flex select-none bg-transparent sm:-bottom-[225px] sm:-left-[175px]">
                      <Image
                        className="mx-auto h-auto w-[241px] object-cover object-center sm:w-[475px]"
                        src={
                          "/assets/images/backdrop/statue/ca2024StatueLeft.png"
                        }
                        alt={`Coinfest Asia 2024 (GetInvolved Statue - Left)`}
                        height={1556}
                        width={1224}
                        quality="87"
                      />
                    </div>
                    <div className="pointer-events-none absolute -bottom-[88px] -right-11 left-auto top-auto z-[5] flex select-none bg-transparent sm:-bottom-[154px] sm:-right-[120px]">
                      <Image
                        className="z-10 mx-auto h-auto w-[311px] object-cover object-center sm:w-[525px] lg:w-[575px]"
                        src={
                          "/assets/images/backdrop/statue/ca2024StatueBanner.png"
                        }
                        alt={`Coinfest Asia 2024 (GetInvolved Statue - Right)`}
                        height={976}
                        width={753}
                        quality="87"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="relative z-10 -mt-4 flex w-full min-w-full flex-1 flex-col rounded-t-[20px] bg-white px-4 pb-12 pt-12 sm:px-11 sm:pb-14 sm:pt-12 lg:px-17 lg:pb-16 lg:pt-19 xl:mt-0 xl:min-w-[auto] xl:rounded-none xl:pt-24">
            <div className="absolute inset-x-0 bottom-auto top-4 mx-auto flex h-1.5 w-[144px] rounded-full bg-[#A19381] xl:hidden"></div>
            {children}
          </div>
        </section>
      </main>
    </>
  );
};

export default PartnershipLayouts;

PartnershipLayouts.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
