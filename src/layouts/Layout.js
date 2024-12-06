import React from "react";

// @components
import Navbar from "@layouts/Navbar";
import Footer from "@layouts/Footer";

const Layouts = ({ children }) => {
  return (
    <>
      <Navbar />

      {children}

      <Footer />
    </>
  );
};

export default Layouts;
