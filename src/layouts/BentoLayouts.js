import React from "react";

// @layouts
import NavbarTop from "@layouts/Navbar/NavbarTop";
import NavbarBottom from "@layouts/Navbar/NavbarBottom";
import Footer from "@layouts/Footer";

const BentoGridLayouts = ({ children }) => {
  return (
    <>
      {/* @navbar-top */}
      <NavbarTop typeLayouts="bento-grid" />

      {/* @navbar-bottom */}
      <NavbarBottom />

      {children}

      {/* @footer */}
      <Footer />
    </>
  );
};

export default BentoGridLayouts;

BentoGridLayouts.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
