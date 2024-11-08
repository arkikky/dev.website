import React from 'react';
import PhoneInput from 'react-phone-input-2';

// @style
import 'react-phone-input-2/lib/high-res.css';

// @form
import Label from '@components/UI/Card/Form/Label';
import Input from '@components/UI/Card/Form/Input';

const BillingDetailCheckout = ({
  ipAddress,
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

  return (
    <>
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
        <div className="block">
          <Label
            forId={`tktCAForm_CompanyCheckout`}
            label="Company Name"
            required={true}
          />
          <Input
            id={`tktCAForm_CompanyCheckout`}
            type="text"
            placeholder="Eg: Coinfest Asia"
            ariaLabel={`Company - Checkout`}
            config={{
              ...register(`company`, {
                required: true,
                maxLength: 80,
                pattern: {
                  value: /^[a-zA-Z0-9\s-_]{2,80}$/,
                },
              }),
            }}
            errors={errors[`company`]}
            useEvent={true}
            eventOnChange={onValueChange}
          />
        </div>
        <div className="block">
          <Label
            forId="tktCAForm_WebsiteUrlCheckout"
            label="Website URL"
            required={true}
          />
          <Input
            id="tktCAForm_WebsiteUrlCheckout"
            type="url"
            placeholder="Eg: https://..."
            ariaLabel="Website Billing - Checkout"
            config={{
              ...register('websiteUrl', {
                required: true,
                maxLength: 655,
                pattern: {
                  value:
                    /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
                  message: 'Please enter a valid URL',
                },
              }),
            }}
            errors={errors.websiteUrl}
          />
        </div>
      </div>
    </>
  );
};

export default BillingDetailCheckout;
