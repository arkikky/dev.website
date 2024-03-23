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
      <main className="ca2024SectionEnd relative flex min-h-svh flex-col bg-[#F8EAD7]">
        <section className="relative inline-flex h-auto w-full flex-grow flex-col xl:flex-row">
          <div className="flex h-auto w-full flex-1 flex-col bg-secondary xl:w-min xl:min-w-[600px] xl:max-w-[600px] 2xl:min-w-max 2xl:max-w-none">
            awdawd
          </div>
          <div className="relative z-10 -mt-4 flex w-full min-w-full flex-1 flex-col rounded-t-[20px] bg-[#F8EAD7] px-4 pb-34 pt-12 sm:px-11 sm:pb-34 sm:pt-12 lg:px-17 lg:pb-32 lg:pt-19 xl:mt-0 xl:min-w-[auto] xl:rounded-none xl:pb-[154px] xl:pt-17">
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
