import React from 'react';

const Label = ({
  forId = 'ca25Form_Label',
  isClassName = '',
  label = null,
  helpText = '',
  required = false,
}) => {
  return (
    <>
      <label
        htmlFor={forId}
        className={`mb-2 flex flex-col text-sm font-medium text-black-900 ${isClassName && isClassName}`}
      >
        <span className="inline-flex items-center justify-start">
          {label}
          {required === true && <span className="ml-1.5 text-red-500">*</span>}
        </span>
        {helpText !== '' && (
          <span className="mt-1 text-sm font-light text-gray-400">
            {helpText}
          </span>
        )}
      </label>
    </>
  );
};

export default Label;
