import React from "react";
import { twMerge } from "tailwind-merge";

const Checkbox = ({
  id = "caGeneralForm_Checkbox",
  addClassName = "",
  label = "I have read and agree to the ticket privacy policy & terms and conditions",
  ariaLabel = "",
  name = null,
  value = "",
  config = [],
  errors = {},
  size = "default",
  onEventChange,
}) => {
  const setSize = {
    sm: "text-sm",
    default: "text-base",
  };

  const setSizeInput = {
    sm: "top-px h-4.5 w-4.5",
    default: " top-[4px] h-4.5 w-4.5",
  };

  const isSizing = setSize[size] || setSize.default;
  const isSizingInput = setSizeInput[size] || setSizeInput.default;

  // @event(change - phone)
  const handleInputChange = () => {
    onEventChange(value);
  };

  return (
    <>
      <div className="relative flex flex-col">
        <label
          htmlFor={id}
          className={twMerge(
            `${
              Object.keys(errors).length > 0 ? "text-red-500" : "text-black-900"
            } ps-8`,
            isSizing
          )}
        >
          <input
            id={id}
            className={twMerge(
              `bxShadow-none form-checkbox shrink-0 ${
                Object.keys(errors).length > 0
                  ? "border-red-500"
                  : "border-gray-200"
              } absolute bottom-auto left-0 right-auto z-px rounded text-primary outline-none focus:outline-none focus:ring-0 focus-visible:outline-none disabled:pointer-events-none`,
              isSizingInput
            )}
            name={name}
            type="checkbox"
            aria-describedby={ariaLabel}
            value={value}
            {...config}
            onChange={(e) => {
              handleInputChange();
            }}
            // onChange={onEventChange}
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
