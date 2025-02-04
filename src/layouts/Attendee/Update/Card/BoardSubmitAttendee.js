import React from 'react';
import Link from 'next/link';

const BoardSubmitAttendee = ({ register, errors }) => {
  return (
    <>
      <div className="mb-6 block w-full space-y-4">
        <div className="block w-full prose-a:font-normal">
          <label
            htmlFor={`ca25Form_IHaveReadAndAgreeAttendeeDetail`}
            className={`flex w-full cursor-pointer items-start`}
          >
            <input
              id={`ca25Form_IHaveReadAndAgreeAttendeeDetail`}
              className={`boxShadow-none form-checkbox mt-px h-4.5 w-4.5 shrink-0 rounded border border-solid ${
                errors[`i_have_read_and_agree`]
                  ? 'border-red-500'
                  : 'border-gray-500/20'
              } bg-transparent text-primary outline-none ring-0 focus:outline-none focus-visible:outline-none`}
              type="checkbox"
              value={true}
              {...register('i_have_read_and_agree', {
                required: true,
              })}
            />

            <span
              className={`ml-3 text-sm font-normal ${
                errors[`i_have_read_and_agree`]
                  ? 'text-red-500'
                  : 'text-black-900'
              }`}
            >
              I have read and agree to{' '}
              <Link
                href="/privacy-policy"
                className="underline hover:text-primary"
              >
                privacy policy
              </Link>{' '}
              <br />&{' '}
              <Link
                href="/terms-and-conditions"
                className="underline hover:text-primary"
              >
                terms and conditions
              </Link>
            </span>
          </label>
        </div>
        <div className="block w-full space-y-4 text-sm font-light text-gray-500">
          <p className="font-light">
            {`Your data will be used to update your information and enhance your experience. By proceeding, you agree that your data will be updated.`}
          </p>
        </div>
      </div>
    </>
  );
};

export default BoardSubmitAttendee;
