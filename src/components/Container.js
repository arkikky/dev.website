import React from 'react';

const Container = ({ className = null, children }) => {
  const isDfltClss = `container`;
  const isAddClss = className ? `${isDfltClss} ${className}` : `${isDfltClss}`;

  return (
    <>
      <div className={`${isAddClss}`}>{children}</div>
    </>
  );
};

export default Container;
