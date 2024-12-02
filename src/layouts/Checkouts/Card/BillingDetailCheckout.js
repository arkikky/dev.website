import React from 'react';
import { Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';

// @style
import 'react-phone-input-2/lib/high-res.css';

// @form
import Label from '@components/UI/Form/Label';
import Input from '@components/UI/Form/Input';

const BillingDetailCheckout = ({
  ipAddress,
  watch,
  register,
  control,
  setValue,
  getValues,
  errors,
  onValueChange,
  asCompany = false,
}) => {
  // @event(change - phone)
  const handleInputChange = (value) => {
    const isVar = 'phone';
    const getValue = value;

    if (value.length >= 5) {
      onValueChange(isVar, getValue);
    } else {
      onValueChange(isVar, '');
    }
  };

  // @handle(Company Toggle Change)
  const handleToggleCompay_Change = () => {
    if (watch === 'true') {
      setValue('company', '');
      setValue('companyAttndee1', '');
      setValue('haveCompanyAttndee1', true);
    } else {
      setValue('company', 'N/A');
      setValue('companyAttndee1', 'N/A');
      setValue('haveCompanyAttndee1', false);
    }
  };

  return (
    <>
      {/* @role(Billing Details) */}
      <div className="mb-4 flex items-center rounded-xl border border-solid border-gray-200 bg-gray-100 px-1 py-1 sm:px-1.5 sm:py-1.5">
        <Controller
          name={`haveCompany`}
          control={control}
          render={({ field }) => (
            <>
              <label
                className={`inline-flex grow basis-0 cursor-pointer items-center justify-center gap-x-2 rounded-lg px-4 py-5 text-center text-sm font-normal text-gray-500 transition duration-300 ease-in-out focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                  field.value === 'false'
                    ? 'bg-black-900 text-white hover:text-white'
                    : 'bg-transparent hover:text-black-900 hover:underline'
                }`}
              >
                <span className="relative z-10 inline-block cursor-pointer text-sm font-normal">
                  Personal's
                </span>
                <input
                  {...field}
                  type="radio"
                  value={false}
                  className="pointer-events-none hidden select-none"
                />
              </label>
              <label
                className={`inline-flex grow basis-0 cursor-pointer items-center justify-center gap-x-2 rounded-lg px-4 py-5 text-center text-sm font-normal text-gray-500 transition duration-300 ease-in-out focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                  field.value === 'true'
                    ? 'bg-black-900 text-white hover:text-white'
                    : 'bg-transparent hover:text-black-900 hover:underline'
                }`}
              >
                <span className="relative z-10 inline-block cursor-pointer text-sm font-normal">
                  As Company
                </span>
                <input
                  {...field}
                  type="radio"
                  value={true}
                  className="pointer-events-none hidden select-none"
                />
              </label>
            </>
          )}
        />
      </div>

      <div className="block w-full space-y-4">
        <div className="grid-cols-1 gap-x-4 gap-y-4 supports-grid:grid sm:grid-cols-2">
          <div className="block">
            <Label
              forId="tktCAForm_FirstnameCheckout"
              label="Firstname"
              required={true}
            />
            <Input
              id="tktCAForm_FirstnameCheckout"
              type="text"
              placeholder="Eg: Alexandre"
              ariaLabel="Firstname Billing - Checkout"
              config={{
                ...register('firstname', {
                  required: true,
                  maxLength: 255,
                  pattern: {
                    value: /^[a-zA-Z0-9\s-_]{2,255}$/,
                  },
                }),
              }}
              errors={errors.firstname}
              useEvent={true}
              eventOnChange={onValueChange}
            />
          </div>
          <div className="block">
            <Label
              forId="tktCAForm_LastnameCheckout"
              label="Lastname"
              required={true}
            />
            <Input
              id="tktCAForm_LastnameCheckout"
              type="text"
              placeholder="Eg: Doe"
              ariaLabel="Lastname Billing - Checkout"
              config={{
                ...register('lastname', {
                  required: true,
                  maxLength: 255,
                  pattern: {
                    value: /^[a-zA-Z0-9\s-_]{2,255}$/,
                  },
                }),
              }}
              errors={errors.lastname}
              useEvent={true}
              eventOnChange={onValueChange}
            />
          </div>
        </div>
        <div className="grid-cols-1 gap-x-4 gap-y-4 supports-grid:grid sm:grid-cols-2">
          <div className="block">
            <Label
              forId="tktCAForm_EmailCheckout"
              label="Email"
              required={true}
            />
            <Input
              id="tktCAForm_EmailCheckout"
              type="email"
              placeholder="Eg: example@email.com"
              ariaLabel="Email Billing - Checkout"
              config={{
                ...register('email', {
                  required: true,
                  maxLength: 255,
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  },
                }),
              }}
              errors={errors.email}
              useEvent={true}
              eventOnChange={onValueChange}
            />
          </div>
          <div className="block">
            <Label
              forId="tktCAForm_PhoneCheckout"
              label={`Phone Number`}
              required={true}
            />
            <PhoneInput
              country={ipAddress}
              onChange={(value, phone) => {
                handleInputChange(value);
                setValue('phone', value);
              }}
              inputProps={{
                required: false,
                name: 'dialcode-phone',
                autoFocus: false,
                maxLength: 18,
              }}
              containerClass="w-full"
              inputClass={`tktCAForm_PhoneInput ${errors.phone && 'errors'}`}
              buttonClass={`tktCAForm_PhoneInputBtn ${errors.phone && 'errors'}`}
              dropdownClass="tktCAForm_PhoneInputDropdown"
              countryCodeEditable={false}
              enableSearch={true}
              disableSearchIcon={true}
              searchPlaceholder="Search..."
              searchNotFound="Country not found"
            />

            {/* @hidden-validation-phonenumber */}
            <Input
              id="tktCAForm_PhoneCheckout"
              type="text"
              placeholder="Eg: 081823124213"
              ariaLabel="Phone Number - Checkout"
              hidden={true}
              config={{
                ...register('phone', {
                  value: getValues('phone'),
                  required: true,
                  maxLength: 18,
                  pattern: {
                    value: /^.{5,}/,
                  },
                }),
              }}
            />
          </div>
        </div>
      </div>

      {/* @company */}
      {watch === 'true' && (
        <div
          className={`mt-3 grid-cols-1 gap-x-4 gap-y-4 ${watch === 'true' ? 'pointer-events-auto select-auto supports-grid:grid' : 'pointer-events-none hidden select-none'} sm:grid-cols-2`}
        >
          <div className="block">
            <Label
              forId={`tktCAForm_CompanyCheckout`}
              isClassName={`mb-2`}
              label="Company Name"
              required={watch === 'true' ? true : false}
            />

            <Input
              id={`tktCAForm_CompanyCheckout`}
              type="text"
              placeholder="Eg: Coinfest Asia"
              ariaLabel={`Company - Checkout`}
              disabled={watch === 'true' ? false : true}
              config={{
                ...register(`company`, {
                  required: watch === 'true' ? true : false,
                  maxLength: 80,
                  pattern: {
                    value: /^(N\/A|[a-zA-Z0-9\s-_]{2,80})$/,
                  },
                }),
              }}
              value={watch === 'true' ? '' : 'N/A'}
              errors={errors[`company`]}
              useEvent={true}
              eventOnChange={onValueChange}
            />
          </div>
          <div className="block">
            <Label
              forId="tktCAForm_WebsiteUrlCheckout"
              label="Website URL"
              required={watch === 'true' ? true : false}
            />
            <Input
              id="tktCAForm_WebsiteUrlCheckout"
              type="text"
              placeholder="Eg: https://..."
              ariaLabel="Website Billing - Checkout"
              disabled={watch === 'true' ? false : true}
              config={{
                ...register('websiteUrl', {
                  required: watch === 'true' ? true : false,
                  maxLength: 255,
                  pattern: {
                    value:
                      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\w\d\-.\/]*)*\/?$|^N\/A$|^-$/,
                    message: 'Please enter a valid URL',
                  },
                }),
              }}
              errors={errors.websiteUrl}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default BillingDetailCheckout;
