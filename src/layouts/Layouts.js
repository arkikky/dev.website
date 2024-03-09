import React, { useEffect } from "react";

// @layouts
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
      {/* @main */}
      {children}

      {/* @footer */}
      <Footer />
    </>
  );
};

export default Layouts;
