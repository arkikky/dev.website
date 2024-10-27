import React from 'react';

const Card = ({ addClassName = '', children, arrKey = 0 }) => {
  return (
    <>
      <div
        className={`rounded-xl border border-gray-200 bg-white px-4 py-4 sm:px-6 sm:py-6 ${addClassName} w-full`}
        key={arrKey}
      >
        {children}
      </div>
    </>
  );
};

export default Card;
