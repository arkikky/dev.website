import React from "react";

// @layouts
import NavbarTop from "@layouts/Navbar/NavbarTop";
import NavbarBottom from "@layouts/Navbar/NavbarBottom";

const PartnershipLayouts = ({ children }) => {
  return (
    <>
      {/* @navbar-top */}
      <NavbarTop />

      {/* @navbar-bottom */}
      <NavbarBottom />

      {/* @main */}
      <main className="bg-[#F8EAD7] flex flex-col relative min-h-svh">
        <section className="inline-flex flex-col xl:flex-row flex-grow relative h-auto w-full">
          <div className="flex-1 bg-secondary flex flex-col h-auto w-full xl:w-min xl:min-w-[600px] 2xl:min-w-max xl:max-w-[600px] 2xl:max-w-none">
            awdawd
          </div>
          <div className="flex-1 bg-[#F8EAD7] flex flex-col rounded-t-[20px] xl:rounded-none relative -mt-4 xl:mt-0 pt-12 pb-34 sm:pt-12 sm:pb-34 lg:pt-19 lg:pb-32 xl:pt-17 xl:pb-[154px] px-4 sm:px-11 lg:px-17 w-full min-w-full xl:min-w-[auto] z-10">
            <div className="flex xl:hidden rounded-full bg-[#A19381] absolute top-4 bottom-auto inset-x-0 mx-auto h-1.5 w-[144px]"></div>
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
