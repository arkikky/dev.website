import React from 'react';
import { twMerge } from 'tailwind-merge';

const Badge = ({
  type = 'default',
  label = 'Badge',
  size = 'default',
  icons,
  withHover = false,
  withUnderline = false,
}) => {
  const styles = {
    dark: {
      base: `border-gray-300/70 bg-gray-300/50 text-gray-600 ${withHover === true && 'hover:bg-black-900 hover:border-black-900 hover:text-white'}`,
      active: 'text-primary',
    },
    light: {
      base: 'border-gray-200 bg-gray-100 text-gray-800',
      active: 'text-primary',
    },
    success: {
      base: 'bg-green-50 border-green-500/40 text-green-800',
      active: 'text-primary',
    },
    info: {
      base: 'bg-blue-50 border-blue-500/40 text-blue-800',
      active: 'text-primary',
    },
    default: {
      base: `border-gray-200 bg-gray-100 text-gray-800 ${withHover === true && 'hover:bg-black-900 hover:border-black-900 hover:text-white'}`,
      active: 'text-primary',
    },
  };
  const currentStyle = styles[type] || styles.default;
  const isStyle = currentStyle.base;

  // @sizing
  const sizing = {
    xs: 'px-1.5 py-1 text-xs leading-initial rounded-[6px]',
    sm: 'px-2 py-1.5 text-[13px] leading-initial rounded-lg',
    default: 'px-2.5 py-2 text-[13px] leading-initial rounded-lg',
  };

  return (
    <>
      <div
        className={twMerge(
          `inline-flex items-center gap-x-1.5 border border-solid font-normal ${withUnderline && 'underline'} transition duration-300 ease-in-out`,
          isStyle,
          sizing[size]
        )}
      >
        {icons && <>{icons}</>}
        {label}
      </div>
    </>
  );
};

export default Badge;
