import React from "react";

const LoadingPluse = () => {
  return (
    <>
      <div className="bg-gray-200/30 absolute inset-y-0 inset-x-0 h-full w-full overflow-hidden z-100">
        <div className="bg-gray-400 animate-pulse absolute inset-y-0 inset-x-0"></div>
      </div>
    </>
  );
};

export default LoadingPluse;
