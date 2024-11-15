import React from 'react';

// @layouts
import NavbarOther from '@layouts/Navbar/NavbarOther';
import Footer from '@layouts/Footer';

const Layouts = ({ children }) => {
  return (
    <>
      {/* @navbar */}
      <NavbarOther />

      {/* @main */}
      {children}

      {/* @footer */}
      <Footer />
    </>
  );
};

export default Layouts;
