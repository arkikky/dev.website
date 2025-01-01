import React from 'react';

const LoadStreams = () => {
  return (
    <>
      <div className="flex h-full w-full flex-col items-center justify-center bg-black-900/25">
        <div className="absolute inset-x-0 inset-y-0 animate-pulse bg-black-800/35"></div>
        <div
          className="inline-block size-9 animate-spin rounded-full border-[3.5px] border-current border-t-transparent text-white/65"
          role="status"
          aria-label="Coinfest Asia 2025 Loading Speakers"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default LoadStreams;
