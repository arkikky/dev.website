import React from "react";
import Image from "next/image";

// @layouts
import NavbarTop from "@layouts/Navbar/NavbarTop";
import NavbarBottom from "@layouts/Navbar/NavbarBottom";

const PartnershipLayouts = ({
  title = "Take part in Coinfest Asia where innovation meets adoption.",
  children,
}) => {
  return (
    <>
      {/* @navbar-top */}
      <NavbarTop type="full" />

      {/* @navbar-bottom */}
      <NavbarBottom />

      {/* @main */}
      <main className="relative flex min-h-svh flex-col bg-[#F8EAD7]">
        <section className="relative inline-flex h-auto w-full flex-grow flex-col xl:flex-row">
          <div className="flex h-auto w-full flex-1 flex-col bg-secondary xl:w-min xl:min-w-[600px] xl:max-w-[600px] 2xl:min-w-max 2xl:max-w-none">
            <div className="relative top-0 h-full max-h-[424px] min-h-[424px] w-full sm:h-full sm:max-h-[527px] sm:min-h-[527px] xl:sticky xl:max-h-screen xl:min-h-screen">
              <div className="absolute inset-x-0 inset-y-0 z-px h-full overflow-hidden">
                <Image
                  className="z-[5] mx-auto h-full w-full object-cover object-center"
                  src={"/assets/images/backdrop/background/ca2024BgPotrait.png"}
                  alt={`Coinfest Asia 2024 (GetInvolved Background Potrait)`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                  height={900}
                  width={600}
                  quality="87"
                />

                <div className="absolute inset-x-0 bottom-auto top-[100px] z-[6] flex flex-col px-4 text-start sm:top-[146px] sm:px-11">
                  <h1 className="w-full max-w-[496px] font-staraExtraBold text-[32px] uppercase leading-[40px] text-white sm:max-w-[543px] sm:text-[40px] sm:leading-[48px] xl:max-w-[496px]">
                    {title}
                  </h1>
                </div>
              </div>

              {/* @backdrop (leaf tree - items) */}
              <div className="opacity-1 pointer-events-none absolute bottom-auto left-0 right-auto top-0 z-[5] flex select-none bg-transparent">
                <Image
                  className="mx-auto h-auto w-[137px] object-cover object-center sm:w-[187px]"
                  src={"/assets/images/backdrop/ca2024LeafTreeLeft.png"}
                  alt={`Coinfest Asia 2024 (GetInvolved Leaf Tree - Left)`}
                  height={244}
                  width={374}
                  quality="87"
                />
              </div>
              <div className="opacity-1 pointer-events-none absolute bottom-auto left-auto right-0 top-0 z-[5] flex select-none bg-transparent">
                <Image
                  className="mx-auto h-auto w-[221px] object-cover object-center sm:w-[288px]"
                  src={"/assets/images/backdrop/ca2024LeafTreeRight.png"}
                  alt={`Coinfest Asia 2024 (GetInvolved Leaf Tree - Right)`}
                  height={1389}
                  width={1073}
                  quality="87"
                />
              </div>
            </div>
          </div>
          <div className="relative z-10 -mt-4 flex w-full min-w-full flex-1 flex-col rounded-t-[20px] bg-[#F8EAD7] px-4 pb-34 pt-12 sm:px-11 sm:pb-44 sm:pt-12 lg:px-17 lg:pb-44 lg:pt-19 xl:mt-0 xl:min-w-[auto] xl:rounded-none xl:pb-[154px] xl:pt-17">
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
