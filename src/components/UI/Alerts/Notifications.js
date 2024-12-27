import React from 'react';
import { twMerge } from 'tailwind-merge';

const Notifications = ({
  icons = {},
  label = 'Notifications may include alerts, sounds and icon badges. These can be configured in Settings.',
  type = 'default',
}) => {
  const typeConfigs = {
    success: 'bg-green-50 border-green-500/40 text-green-700',
    info: 'bg-blue-50 border-blue-500/40 text-blue-700',
    warning: 'bg-yellow-50 border-yellow-500/40 text-yellow-700',
    error: 'bg-red-50 border-red-500/40 text-red-700',
    default: 'bg-gray-50 border-gray-200/40',
  };

  const isType = typeConfigs[type] || typeConfigs.default;

  return (
    <>
      <div
        className={twMerge(
          `overflow-hidden rounded-xl border px-4 py-4 sm:px-5 sm:py-5`,
          isType
        )}
      >
        <div className="flex flex-row items-start justify-start">
          {Object.keys(icons).length > 0 && (
            <div className="shrink-0">{icons}</div>
          )}
          <div
            className="ms-3 text-sm prose-p:font-light prose-strong:font-medium lg:text-base"
            dangerouslySetInnerHTML={{ __html: label }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Notifications;
