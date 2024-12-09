import React from "react";
import Image from "next/image";

// @layouts
import Navbar from "@layouts/NavbarPanel";

// @components
import HeadGraphSeo from "@components/Head";

const PanelLayouts = ({
  headTitle = "SEO Title",
  title = "Take part in Coinfest Asia where innovation meets adoption.",
  shortDesc = null,
  children,
  btnBack = false,
  urlBack = "",
  brandLogo = "primary",
  modeDifferent = false,
}) => {
  // useEffect(() => {
  //   import("preline");

  //   return () => {
  //     undefined;
  //   };
  // }, []);

  return (
    <>
      {/* @navbar-top */}
      <Navbar
        back={btnBack}
        bgBack="bg-white"
        brandLogo={brandLogo}
        modeDifferent={modeDifferent}
      />

      {/* @head */}
      <HeadGraphSeo
        title={headTitle}
        siteThumbnails="/assets/caThumbnailsApp.jpg"
        otherPage={true}
      />

      {/* @main */}
      <main className="relative flex min-h-svh flex-col">
        <div className="relative inline-flex h-auto w-full flex-grow flex-col xl:flex-row">
          <div className="flex h-auto w-full flex-1 flex-col xl:w-min xl:min-w-[675px] xl:max-w-[675px] 2xl:min-w-max 2xl:max-w-none">
            <div className="relative bg-gradient-rotate-fullthemoon top-0 h-full max-h-[424px] min-h-[424px] w-full overflow-hidden sm:h-full sm:max-h-[527px] sm:min-h-[527px] xl:sticky xl:max-h-screen xl:min-h-screen">
              <div className="absolute inset-x-0 inset-y-0 z-20 h-full overflow-hidden">
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
                    <span className="mt-4 text-lg sm:text-xl font-bevietnamPro font-normal text-white">
                      {shortDesc}
                    </span>
                  )}
                </div>
              </div>

              {/* @backdrop */}
              <div className="pointer-events-none absolute -top-4 -left-6 right-auto bottom-auto z-[5] flex select-none sm:-top-[29px] sm:-left-[60px]">
                <Image
                  className="z-10 mx-auto h-auto w-[126px] object-cover object-center sm:w-[181.14px] lg:w-[221.14px]"
                  src={"/assets/images/backdrop/caGeneralPanelLayout1.png"}
                  alt={`Coinfest Asia 2024 (GetInvolved Statue - Right)`}
                  height={543}
                  width={543}
                  quality="87"
                />
              </div>
              <div className="pointer-events-none absolute -top-4 -right-6 left-auto bottom-auto z-[5] flex select-none sm:-top-[29px] sm:-right-[60px]">
                <Image
                  className="z-10 mx-auto h-auto w-[96px] object-cover object-center sm:w-[121.14px] lg:w-[189.51px]"
                  src={"/assets/images/backdrop/caGeneralPanelLayout2.png"}
                  alt={`Coinfest Asia 2024 (GetInvolved Statue - Right)`}
                  height={380}
                  width={380}
                  quality="87"
                />
              </div>
              <div className="pointer-events-none absolute bottom-8 -left-6 right-auto top-auto z-[5] flex select-none sm:bottom-[69px] lg:bottom-[109px] sm:-left-[40px] lg:-left-[60px]">
                <Image
                  className="z-10 mx-auto h-auto w-[86px] object-cover object-center sm:w-[123.41px] lg:w-[193.41px]"
                  src={"/assets/images/backdrop/caGeneralPanelLayout3.png"}
                  alt={`Coinfest Asia 2024 (GetInvolved Statue - Right)`}
                  height={434}
                  width={447}
                  quality="87"
                />
              </div>
              <div className="pointer-events-none absolute -bottom-4 -right-6 left-auto top-auto z-[5] flex select-none sm:-bottom-[44px] sm:-right-[49px]">
                <Image
                  className="z-10 mx-auto h-auto w-[126px] object-cover object-center sm:w-[206.23px] lg:w-[286.23px]"
                  src={"/assets/images/backdrop/caGeneralPanelLayout4.png"}
                  alt={`Coinfest Asia 2024 (GetInvolved Statue - Right)`}
                  height={653}
                  width={703}
                  quality="87"
                />
              </div>
            </div>
          </div>
          <div className="relative z-10 -mt-4 flex w-full min-w-full flex-1 flex-col rounded-t-[20px] bg-white px-4 pb-12 pt-12 sm:px-11 sm:pb-14 sm:pt-12 lg:px-17 lg:pb-16 lg:pt-19 xl:mt-0 xl:min-w-[auto] xl:rounded-none xl:pt-24">
            <div className="caGeneralIndicator absolute inset-x-0 bottom-auto top-4 mx-auto flex h-1.5 w-[144px] rounded-full bg-gray-200 xl:hidden"></div>
            {children}
          </div>
        </div>
      </main>
    </>
  );
};

export default PanelLayouts;

PanelLayouts.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
