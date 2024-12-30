import React from 'react';

const Container = ({ className = null, children }) => {
  const defaultCls = `container`;
  const cls = className ? `${defaultCls} ${className}` : `${defaultCls}`;

  return (
    <>
      <div className={`${cls}`}>{children}</div>
    </>
  );
};

export default Container;
