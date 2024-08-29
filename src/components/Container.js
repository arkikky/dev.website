import React from "react";

const Container = ({ className = null, children }) => {
  const dfltClss = `container`;
  const addClss = className ? `${dfltClss} ${className}` : `${dfltClss}`;

  return (
    <>
      <div className={`${addClss}`}>{children}</div>
    </>
  );
};

export default Container;
