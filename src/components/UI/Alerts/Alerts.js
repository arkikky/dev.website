import React, { useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

const Alerts = ({
  icons = {},
  label = `A new software update is available. See what's new in version 3.0.7`,
  type = 'default',
  visible,
  onClose,
}) => {
  const [isCountdown, setCountdown] = useState(5);
  const [showAnimation, setShowAnimation] = useState(false);

  const typeConfigs = {
    success: 'bg-green-50 border-green-500/40 text-green-700',
    info: 'bg-blue-50 border-blue-500/40 text-blue-700',
    warning: 'bg-yellow-50 border-yellow-500/40 text-yellow-700',
    error: 'bg-red-50 border-red-500/40 text-red-700',
    default: 'bg-gray-50 border-gray-200/40',
  };

  const isType = typeConfigs[type] || typeConfigs.default;

  useEffect(() => {
    if (visible) {
      setCountdown(5);
      setShowAnimation(true);

      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setShowAnimation(false);

            setTimeout(() => {
              onClose();
            }, 300);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      <div
        id="ca25Alert-Card"
        className={twMerge(
          `fixed ${showAnimation === true ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'} bottom-2 left-2 right-2 top-auto z-[12] w-fill rounded-lg border px-3 py-3 text-sm duration-300 ease-in-out sm:bottom-6 sm:left-6 sm:right-auto sm:w-max sm:px-4 sm:py-4 lg:bottom-8 lg:left-8`,
          isType
        )}
        role="alert"
        tabIndex="-1"
        aria-labelledby="Coinfest Asia 2025(Alert)"
      >
        <div className="flex flex-col items-start justify-start px-1 sm:flex-row">
          <div className="shrink-0 pt-px">
            {type === 'success' ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            ) : type === 'error' ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 16h.01" />
                <path d="M12 8v4" />
                <path d="M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z" />
              </svg>
            ) : null}
          </div>
          <div className="ms-0 mt-2 flex-1 space-x-0 sm:ms-3 sm:mt-0 sm:space-x-1.5 md:flex md:justify-between">
            <div
              id="ca25Alert-label"
              className="text-sm prose-strong:font-semibold"
              dangerouslySetInnerHTML={{ __html: label }}
            ></div>
            <span>({isCountdown}s) </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Alerts;
