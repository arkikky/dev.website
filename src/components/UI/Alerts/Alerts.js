import React, { useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

const Alerts = ({
  icons = {},
  type = 'default',
  label = `A new software update is available. See what's new in version 3.0.7`,
  position = 'bottom-3 inset-x-2.5 sm:inset-x-3 top-auto',
  visible,
  onClose,
}) => {
  const [isCountdown, setCountdown] = useState(5);
  const [showAnimation, setShowAnimation] = useState(false);
  const [resetTimer, setResetTimer] = useState(true);

  const typeStyle = {
    success: 'bg-green-50 border-green-500/40 text-green-700',
    info: 'bg-blue-50 border-blue-500/40 text-blue-700',
    warning: 'bg-yellow-50 border-yellow-700/50 text-yellow-700',
    error: 'bg-red-50 border-red-500/40 text-red-700',
    default: 'bg-gray-50 border-gray-200/40',
  };
  const isType = typeStyle[type] || typeStyle.default;
  const iconsStyle = {
    success: 'bg-green-300',
    info: 'bg-blue-200',
    warning: 'bg-yellow-300',
    error: 'bg-red-300',
    default: 'bg-gray-300',
  };
  const isIconsStyle = iconsStyle[type] || iconsStyle.default;

  useEffect(() => {
    if (!visible) return;
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
  }, [visible]);
  if (!visible) return null;

  return (
    <>
      <div
        id="ca25Alert-Card"
        className={twMerge(
          `fixed ${showAnimation === true ? 'translate-x-0 scale-100 opacity-100' : '-translate-x-10 scale-90 opacity-0'} ${position} z-[12] w-auto rounded-lg border px-2.5 py-4 text-sm duration-300 ease-in-out sm:bottom-6 sm:left-6 sm:right-auto sm:w-[341px] sm:px-3 lg:bottom-7 lg:left-8 lg:px-4`,
          isType
        )}
        role="alert"
        tabIndex="-1"
        aria-label="Coinfest Asia 2025(Alert)"
        aria-labelledby="Coinfest Asia 2025(Alert)"
      >
        <div className="flex flex-row items-start justify-start">
          <div className="flex shrink-0 items-center">
            <div
              className={twMerge(
                `-mt-[2.5px] flex items-center justify-center rounded-full px-1 py-1`,
                isIconsStyle
              )}
            >
              {type === 'success' ? (
                <svg
                  className="h-4.5 w-4.5"
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
                  className="h-4.5 w-4.5"
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
              ) : type === 'info' ? (
                <svg
                  className="h-4.5 w-4.5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              ) : null}
            </div>
          </div>
          <div className="ms-2.5 mt-0 flex w-full flex-row justify-between">
            <div
              id="ca25Alert-label"
              className="max-w-[227px] text-sm prose-strong:font-semibold"
              dangerouslySetInnerHTML={{ __html: label }}
            ></div>
            <span className="ml-2 font-medium lg:ml-2.5">({isCountdown}s)</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Alerts;
