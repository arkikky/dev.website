import React from 'react';

// @layouts
import Footer from '@layouts/Footer';

const Layouts = ({ children }) => {
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
