import React from "react";

// @layouts
import NavbarTop from "@layouts/Navbar/NavbarTop";
import NavbarBottom from "@layouts/Navbar/NavbarBottom";

const Layouts = ({ children }) => {
  return (
    <>
      {/* @navbar (top) */}
      <NavbarTop />

      {/* @navbar (bottom) */}
      <NavbarBottom />

      {/* @main */}
      {children}
    </>
  );
};

export default Layouts;
