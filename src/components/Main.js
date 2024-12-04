import React from "react";

const Main = ({ className = null, children }) => {
  const dfltClss = `caMain`;
  const addClss = className ? `${dfltClss} ${className}` : `${dfltClss}`;

  return (
    <>
      <main className={`${addClss}`}>{children}</main>
    </>
  );
};

export default Main;
