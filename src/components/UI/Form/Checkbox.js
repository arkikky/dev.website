import React from 'react';
import { twMerge } from 'tailwind-merge';

const Checkbox = ({
  id = 'tktCAForm_Checkbox',
  addClassName = '',
  label = 'I have read and agree to the ticket privacy policy & terms and conditions',
  ariaLabel = '',
  value = '',
  config = [],
  errors = {},
  size = 'default',
}) => {
  const setSize = {
    sm: 'text-sm',
    default: 'text-base',
  };

  const setSizeInput = {
    sm: 'top-px h-4.5 w-4.5',
    default: ' top-[4px] h-4.5 w-4.5',
  };

  const isSizing = setSize[size] || setSize.default;
  const isSizingInput = setSizeInput[size] || setSizeInput.default;

  return (
    <>
      <div className="relative flex cursor-pointer flex-col">
        <label
          htmlFor={id}
          className={twMerge(
            `${
              Object.keys(errors).length > 0 ? 'text-red-500' : 'text-black-900'
            } ps-8`,
            isSizing
          )}
        >
          <input
            id={id}
            className={twMerge(
              `bxShadow-none form-checkbox shrink-0 ${
                Object.keys(errors).length > 0
                  ? 'border-red-500'
                  : 'border-gray-200'
              } absolute bottom-auto left-0 right-auto z-px rounded text-primary outline-none focus:outline-none focus:ring-0 focus-visible:outline-none disabled:pointer-events-none`,
              isSizingInput
            )}
            type="checkbox"
            aria-describedby={ariaLabel}
            value={value}
            {...config}
          />
          <span
            className="font-light"
            dangerouslySetInnerHTML={{ __html: label }}
          ></span>
        </label>
      </div>
    </>
  );
};

export default Checkbox;
