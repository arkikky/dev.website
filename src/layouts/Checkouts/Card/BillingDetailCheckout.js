import React from 'react';
import PhoneInput from 'react-phone-input-2';

// @style
import 'react-phone-input-2/lib/high-res.css';

// @form
import Label from '@components/UI/Form/Label';
import Input from '@components/UI/Form/Input';

const BillingDetailCheckout = ({
  ipAddress,
  isSubmited = false,
  watch,
  register,
  setValue,
  getValues,
  errors,
  onValueChange,
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
  // @handle(company toggle)
  const handleToggleCompay_Change = () => {
    if (getValues('haveCompany') === true) {
      setValue('company', '');
    } else {
      setValue('company', 'N/A');
    }
  };

  return (
    <>
      <div className="block w-full space-y-4">
        <div className="grid-cols-1 gap-x-4 gap-y-4 supports-grid:grid sm:grid-cols-2">
          <div className="block">
            <Label
              forId="ca25Form_FirstnameCheckout"
              label="Firstname"
              required={true}
            />
            <Input
              id="ca25Form_FirstnameCheckout"
              type="text"
              placeholder="Eg: Alexander"
              ariaLabel="Firstname Billing - Checkout"
              disabled={isSubmited === true ? true : false}
              config={{
                ...register('firstname', {
                  required: true,
                  minLength: 1,
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
              forId="ca25Form_LastnameCheckout"
              label="Lastname"
              required={true}
            />
            <Input
              id="ca25Form_LastnameCheckout"
              type="text"
              placeholder="Eg: Doe"
              ariaLabel="Lastname Billing - Checkout"
              disabled={isSubmited === true ? true : false}
              config={{
                ...register('lastname', {
                  required: true,
                  minLength: 1,
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
          <div className="flex flex-col">
            <Label
              forId="ca25Form_EmailCheckout"
              label="Email"
              required={true}
            />
            <Input
              id="ca25Form_EmailCheckout"
              type="email"
              placeholder="Eg: example@email.com"
              ariaLabel="Email Billing - Checkout"
              disabled={isSubmited === true ? true : false}
              config={{
                ...register('email', {
                  required: true,
                  minLength: 1,
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
            <span className="mt-1 text-sm font-light text-gray-400">
              Invoice will be sent to your email
            </span>
          </div>
          <div className="block">
            <Label
              forId="ca25Form_PhoneCheckout"
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
                maxLength: 18,
              }}
              containerClass="w-full"
              inputClass={`ca25Form_PhoneInput ${errors.phone && 'errors'}`}
              buttonClass={`ca25Form_PhoneInputBtn ${errors.phone && 'errors'}`}
              dropdownClass="ca25Form_PhoneInputDropdown"
              countryCodeEditable={false}
              enableSearch={true}
              autocompleteSearch={true}
              disableSearchIcon={true}
              searchPlaceholder="Search..."
              searchNotFound="Country not found"
              disabled={isSubmited === true ? true : false}
            />

            {/* @hidden-validation-phonenumber */}
            <Input
              id="ca25Form_PhoneCheckout"
              type="text"
              placeholder="Eg: 081823124213"
              ariaLabel="Phone Number - Checkout"
              disabled={isSubmited === true ? true : false}
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
      <div className={`mt-5 block`}>
        <div className={`flex flex-row items-end justify-between`}>
          <Label
            forId={`ca25Form_CompanyCheckout`}
            isClassName={`mb-3`}
            label="Company Name"
            helpText="Are you working with a company?"
            required={watch}
          />
          <div
            className={`relative ${isSubmited === true ? 'hidden' : 'inline-block'} pb-3`}
          >
            <input
              id={`ca25Form_HaveCompanyCheckout`}
              className="bxShadow-none form-checkbox relative h-6 w-12 shrink-0 cursor-pointer rounded-full border border-solid border-gray-200 bg-gray-100 py-0.5 pl-0.5 pr-px text-transparent transition-colors duration-200 ease-in-out before:inline-block before:size-4.5 before:translate-x-0 before:transform before:rounded-full before:border before:border-gray-200 before:bg-white before:ring-0 before:transition before:duration-200 before:ease-in-out checked:border-dark checked:bg-none checked:text-dark checked:before:translate-x-[130%] checked:before:border-white checked:before:bg-white disabled:pointer-events-none"
              type="checkbox"
              disabled={isSubmited === true ? true : false}
              {...register(`haveCompany`, {
                required: false,
                onChange: handleToggleCompay_Change,
              })}
            />
            <label
              htmlFor={`ca25Form_HaveCompanyLabelCheckout`}
              className="sr-only"
            >
              switch
            </label>
          </div>
        </div>

        <Input
          id={`ca25Form_CompanyCheckout`}
          type="text"
          placeholder="Eg: Coinfest Asia"
          ariaLabel={`Company - Checkout`}
          disabled={watch === true ? false : true}
          config={{
            ...register(`company`, {
              required: watch,
              maxLength: 80,
              pattern: {
                value: /^(N\/A|[a-zA-Z0-9\s-_]{2,80})$/,
              },
            }),
          }}
          errors={errors[`company`]}
          useEvent={true}
          eventOnChange={onValueChange}
        />
      </div>
      {watch === true ? (
        <div className="mt-4 block">
          <Label
            forId="ca25Form_WebsiteUrlCheckout"
            label="Company Website"
            required={watch}
          />
          <Input
            id="ca25Form_WebsiteUrlCheckout"
            type="text"
            placeholder={`Eg: https://website.com`}
            ariaLabel="Website Billing - Checkout"
            disabled={watch === true ? false : true}
            config={{
              ...register('websiteUrl', {
                required: watch,
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
      ) : null}
    </>
  );
};

export default BillingDetailCheckout;
