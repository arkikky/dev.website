import React from 'react';

const Input = ({
  id = 'ca25Form_Input',
  addClassName = '',
  type = 'text',
  name = 'ca25Form_Input',
  placeholder = 'Gryok',
  ariaLabel = '',
  value = '',
  hidden = false,
  disabled = false,
  config = [],
  errors = {},
  useEvent = false,
  eventOnChange,
}) => {
  // @event(change)
  const handleInputChange = (e) => {
    const isVar = e?.target.name;
    const getValue = e?.target.value;
    eventOnChange(isVar, getValue);
  };

  return (
    <>
      <div className="relative">
        {useEvent === true ? (
          <input
            id={id}
            className={`block w-full px-4 py-4 ${
              Object.keys(errors).length > 0
                ? 'border-red-500 focus:border-red-500'
                : 'border-gray-200 focus:border-blue-500'
            } rounded-lg border border-solid text-sm focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 ${hidden == true && 'hidden'} ${
              addClassName !== '' && addClassName
            }`}
            type={type}
            placeholder={placeholder}
            aria-describedby={ariaLabel}
            disabled={disabled}
            onKeyUp={(e) => {
              handleInputChange(e);
            }}
            {...config}
          />
        ) : (
          <input
            id={id}
            className={`block w-full px-4 py-4 ${
              Object.keys(errors).length > 0
                ? 'border-red-500 focus:border-red-500'
                : 'border-gray-200 focus:border-blue-500'
            } rounded-lg border border-solid text-sm font-normal focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 ${hidden == true && 'hidden'} ${
              addClassName !== '' && addClassName
            }`}
            name={name}
            type={type}
            placeholder={placeholder}
            aria-describedby={ariaLabel}
            disabled={disabled}
            {...config}
          />
        )}

        {Object.keys(errors).length > 0 && (
          <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-4">
            <svg
              className="size-4 shrink-0 text-red-500 sm:size-4.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" x2="12" y1="8" y2="12"></line>
              <line x1="12" x2="12.01" y1="16" y2="16"></line>
            </svg>
          </div>
        )}
      </div>
    </>
  );
};

export default Input;
