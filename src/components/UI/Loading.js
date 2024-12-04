import React from "react";

const Loading = () => {
  return (
    <>
      <div className="bg-gray-400/30 absolute inset-y-0 inset-x-0 h-full w-full overflow-hidden z-100">
        <div className="bg-gray-400 animate-pulse absolute inset-y-0 inset-x-0"></div>

        <div className="absolute inset-y-0 inset-x-0 flex flex-col items-center justify-center">
          <div
            className="inline-block size-8 animate-spin rounded-full border-2 border-current border-t-transparent text-black-900 h-10 w-10"
            role="status"
            aria-label="loading"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
