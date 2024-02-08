import React, { useEffect } from "react";

// @layouts
// import Navbar from "@layouts/Navbar/Navbar";

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
      {/* @navbar (bottom) */}
      {/* <Navbar /> */}

      {/* @main */}
      {children}
    </>
  );
};

export default Layouts;
