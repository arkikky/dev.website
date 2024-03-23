import React from "react";

const Container = ({ className = null, children }) => {
  const dflt = `container`;
  const isClss = className ? `${dflt} ${className}` : `${dflt}`;

  return (
    <>
      <div className={`${isClss}`}>{children}</div>
    </>
  );
};

export default Container;
