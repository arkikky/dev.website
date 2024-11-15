import React from 'react';

const Card = ({ addClassName = '', children }) => {
  return (
    <>
      <div
        className={`rounded-2xl border border-gray-200 bg-white px-4 py-4 sm:px-5 sm:py-5 ${addClassName} w-full`}
      >
        {children}
      </div>
    </>
  );
};

export default Card;
