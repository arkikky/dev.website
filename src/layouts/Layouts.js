import React, { useEffect } from "react";

// @layouts
import NavbarTop from "@layouts/Navbar/NavbarTop";
import NavbarBottom from "@layouts/Navbar/NavbarBottom";
import Footer from "@layouts/Footer";

const Layouts = ({ children }) => {
  // @preline (Add Plugins)
  useEffect(() => {
    import("preline");

    return () => {
      undefined;
    };
  }, []);

  return (
    <>
      {/* @navbar-top */}
      <NavbarTop withBg={false} />

      {/* @navbar-bottom */}
      <NavbarBottom />

      {/* @main */}
      {children}

      {/* @footer */}
      <Footer />
    </>
  );
};

export default Layouts;
