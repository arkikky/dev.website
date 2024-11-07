import React from 'react';
import { twMerge } from 'tailwind-merge';

const Badge = ({
  label = 'Badge',
  type = 'default',
  withHover = false,
  withUnderline = false,
}) => {
  const styles = {
    dark: { base: 'bg-white text-black-900', active: 'text-primary' },
    light: {
      base: 'border-gray-200 bg-gray-100 text-gray-800',
      active: 'text-primary',
    },
    default: {
      base: `border-gray-200 bg-gray-300/60 text-gray-800 ${withHover === true && 'hover:bg-black-900 hover:text-white'}`,
      active: 'text-primary',
    },
  };
  const currentStyle = styles[type] || styles.default;
  const isStyle = currentStyle.base;

  return (
    <>
      <span
        className={twMerge(
          `inline-flex items-center gap-x-1.5 rounded-[10px] border border-solid px-4 py-2.5 text-[13px] font-normal leading-initial ${withUnderline && 'underline'} transition duration-300 ease-in-out`,
          isStyle
        )}
      >
        {label}
      </span>
    </>
  );
};

export default Badge;
