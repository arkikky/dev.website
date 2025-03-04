import React from 'react';

const Main = ({ className = null, children }) => {
  const isDfltClss = `ca25MainApps`;
  const isAddClss = className ? `${isDfltClss} ${className}` : `${isDfltClss}`;

  return (
    <>
      <main className={`${isAddClss}`}>{children}</main>
    </>
  );
};

export default Main;
