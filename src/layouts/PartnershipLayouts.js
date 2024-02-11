import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

// @layouts
// import NavbarTopFull from "@layouts/Navbar/NavbarTopFull";

const PartnershipLayouts = ({
  title = "Take part in Coinfest Asia where innovation meets adoption.",
  children,
}) => {
  const router = useRouter();

  return (
    <>
      {/* @navbar (top) */}
      {/* <NavbarTopFull /> */}

      <main className="bg-[#F8EAD7] flex flex-col relative">
        <section className="inline-flex flex-col xl:flex-row flex-grow relative h-auto w-full">
          <div className="flex-1 bg-secondary flex flex-col h-auto w-full xl:w-min xl:min-w-[600px] 2xl:min-w-max xl:max-w-[600px] 2xl:max-w-none">
            <div className="relative xl:sticky top-0 h-full sm:h-full min-h-[424px] sm:min-h-[527px] xl:min-h-screen max-h-[424px] sm:max-h-[527px] xl:max-h-screen w-full">
              <div className="overflow-hidden absolute inset-y-0 inset-x-0 h-full z-px">
                <Image
                  className="object-center object-cover mx-auto h-auto w-full z-[5]"
                  src={"/assets/images/backdrop/ca2024BgPotrait.png"}
                  alt={`Coinfest Asia 2024 (GetInvolved Background Potrait)`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  height={1350}
                  width={900}
                  loading="lazy"
                  quality="87"
                />

                <div className="flex flex-col text-start absolute top-[100px] sm:top-[146px] bottom-auto inset-x-0 px-4 sm:px-11 z-[6]">
                  <h1 className="text-white font-staraExtraBold text-[32px] sm:text-[40px] leading-[40px] sm:leading-[48px] uppercase w-full max-w-[496px] sm:max-w-[543px] xl:max-w-[496px]">
                    {title}
                  </h1>
                </div>

                {/* @backdrop (leaf tree - items) */}
                <div className="flex bg-transparent absolute top-0 bottom-auto left-0 right-auto select-none pointer-events-none z-[5] opacity-1 transition duration-[1s] ease-out">
                  <Image
                    className="object-center object-cover mx-auto h-auto w-[137px] sm:w-[187px]"
                    src={"/assets/images/backdrop/ca2024LeafTreeLeft-Small.png"}
                    alt={`Coinfest Asia 2024 (GetInvolved Leaf Tree Items - Left)`}
                    height={244}
                    width={374}
                    quality="87"
                  />
                </div>

                <div className="flex bg-transparent absolute top-0 bottom-auto left-auto right-0 select-none pointer-events-none z-[5] opacity-1 transition duration-[1s] ease-out">
                  <Image
                    className="object-center object-cover mx-auto h-auto w-[221px] sm:w-[288px]"
                    src={
                      "/assets/images/backdrop/ca2024LeafTreeRight-Small.png"
                    }
                    alt={`Coinfest Asia 2024 (GetInvolved Leaf Tree Items - Right)`}
                    height={250}
                    width={576}
                    quality="87"
                  />
                </div>

                {/* @backdrop (statue - items) */}
                <div className="flex bg-transparent absolute top-auto -bottom-[103px] sm:-bottom-[225px] -left-11 sm:-left-[175px] right-auto select-none pointer-events-none z-[5] opacity-1 transition duration-[1s] ease-out">
                  <Image
                    className="object-center object-cover mx-auto h-auto w-[241px] sm:w-[475px]"
                    src={"/assets/images/backdrop/ca2024StatueLeft.png"}
                    alt={`Coinfest Asia 2024 (Statue Items - Left)`}
                    height={1556}
                    width={1224}
                    quality="87"
                  />
                </div>

                <div className="flex bg-transparent absolute top-auto -bottom-[88px] sm:-bottom-[154px] left-auto -right-11 sm:-right-[120px] select-none pointer-events-none z-[5] opacity-1 transition duration-[1s] ease-out">
                  <Image
                    className="object-center object-cover mx-auto h-auto w-[311px] sm:w-[525px] lg:w-[575px] z-10"
                    src={"/assets/images/backdrop/ca2024FooterBanner.png"}
                    alt={`Coinfest Asia 2024 (Statue Items - Right)`}
                    height={976}
                    width={753}
                    quality="87"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* @content */}
          <div className="flex-1 bg-[#F8EAD7] flex flex-col rounded-t-[20px] xl:rounded-none relative -mt-4 xl:mt-0 pt-12 pb-6 sm:py-12 lg:py-19 xl:py-17 px-4 sm:px-11 lg:px-17 w-full min-w-full xl:min-w-[auto] z-10">
            <div className="flex xl:hidden rounded-full bg-[#A19381] absolute top-4 bottom-auto inset-x-0 mx-auto h-1.5 w-[144px]"></div>

            {children}
          </div>
        </section>
      </main>
    </>
  );
};

export default PartnershipLayouts;
