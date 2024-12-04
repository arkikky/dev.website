import React from "react";

// Layouts - Components
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
