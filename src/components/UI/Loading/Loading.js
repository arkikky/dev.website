import React from 'react';

const Loading = () => {
  return (
    <>
      <div className="absolute inset-x-0 inset-y-0 z-100 h-full w-full overflow-hidden bg-black-600/50">
        <div className="absolute inset-x-0 inset-y-0 animate-pulse bg-black-700/80"></div>
      </div>
    </>
  );
};

export default Loading;
