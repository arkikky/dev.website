import React from 'react';

const Main = ({ className = null, children }) => {
  const isDfltClss = `tktCA25Main`;
  const isAddClss = className ? `${isDfltClss} ${className}` : `${isDfltClss}`;

  return (
    <>
      <main className={`${isAddClss}`}>{children}</main>
    </>
  );
};

export default Main;
