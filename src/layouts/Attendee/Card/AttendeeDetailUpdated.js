import React from 'react';
import { Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';

// @style
import 'react-phone-input-2/lib/high-res.css';

// @form
import Label from '@components/UI/Form/Label';
import Input from '@components/UI/Form/Input';
import Select from '@components/UI/Form/Select';
import SelectCountry from '@components/UI/Form/SelectCountry';

const AttendeeDetailUpdated = ({
  ipAddress,
  fieldForm,
  country,
  register,
  control,
  setValue,
  getValues,
  edited,
  errors,
}) => {
  return (
    <>
      <div className="grid-cols-1 gap-x-4 gap-y-4 supports-grid:grid sm:grid-cols-2">
        <div className="block">
          <Label
            forId={`tktCAForm_FirstnameAttndeeUpdated`}
            label="Firstname"
            required={true}
          />
          <Input
            id={`tktCAForm_FirstnameAttndeeUpdated`}
            type="text"
            name={`firstnameAttndee`}
            placeholder="Eg: Alexandre"
            ariaLabel={`Firstname Attendee - Checkout`}
            disabled={edited}
            config={{
              ...register(`firstnameAttndee`, {
                required: true,
                maxLength: 255,
                pattern: {
                  value: /^[a-zA-Z0-9\s-_]{2,255}$/,
                },
              }),
            }}
            errors={errors[`firstnameAttndee`]}
          />
        </div>
        <div className="block">
          <Label
            forId={`tktCAForm_LastnameAttndeeUpdated`}
            label="Lastname"
            required={true}
          />
          <Input
            id={`tktCAForm_LastnameAttndeeUpdated`}
            type="text"
            name={`lastnameAttndee`}
            placeholder="Eg: Doe"
            ariaLabel={`Lastname Attendee - Checkout`}
            disabled={edited}
            config={{
              ...register(`lastnameAttndee`, {
                required: true,
                maxLength: 255,
                pattern: {
                  value: /^[a-zA-Z0-9\s-_]{2,255}$/,
                },
              }),
            }}
            errors={errors[`lastnameAttndee`]}
          />
        </div>
      </div>
      <div className="block">
        <Label
          forId={`tktCAForm_EmailAttndeeUpdated`}
          label="Email"
          helpText="The email entered must match the information of the attendee who is attending!"
          required={true}
        />
        <Input
          id={`tktCAForm_EmailAttndeeUpdated`}
          type="email"
          placeholder="Eg: example@email.com"
          ariaLabel={`Email Attendee - Checkout`}
          disabled={edited}
          config={{
            ...register(`emailAttndee`, {
              required: true,
              maxLength: 255,
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              },
            }),
          }}
          errors={errors[`emailAttndee`]}
        />
      </div>
      <div className="grid-cols-1 gap-x-4 gap-y-4 supports-grid:grid sm:grid-cols-2">
        <div className="block">
          <Label
            forId={`tktCAForm_PhoneAttendeCheckout`}
            label={`Phone Number`}
            required={true}
          />
          <Controller
            name={`dialcode-phone`}
            control={control}
            disabled={edited}
            render={({ field }) => (
              <PhoneInput
                {...field}
                country={ipAddress}
                onChange={(value, phone) => {
                  setValue(`phone`, value);
                }}
                inputProps={{
                  required: false,
                  name: `dialcode-phone`,
                  autoFocus: false,
                  maxLength: 18,
                }}
                containerClass="w-full"
                inputClass={`tktCAForm_PhoneInput ${errors[`phone`] && 'errors'}`}
                buttonClass={`tktCAForm_PhoneInputBtn ${errors[`phone`] && 'errors'}`}
                dropdownClass="tktCAForm_PhoneInputDropdown"
                countryCodeEditable={false}
                enableSearch={true}
                disableSearchIcon={true}
                searchPlaceholder="Search..."
                searchNotFound="Country not found"
              />
            )}
          />

          {/* @hidden-validation-phonenumber */}
          <Input
            id={`tktCAForm_PhoneAttendeCheckout`}
            type="text"
            placeholder="Eg: 081823124213"
            ariaLabel="Phone Number - Attendee Checkout"
            disabled={edited}
            hidden={true}
            config={{
              ...register(`phone`, {
                value: getValues(`phone`),
                required: true,
                maxLength: 18,
                pattern: {
                  value: /^.{5,}/,
                },
              }),
            }}
          />
        </div>
        <div className="block">
          <Label
            forId={`tktCAForm_TelegramAccountAttndeeUpdated`}
            label="Telegram Account"
            required={true}
          />
          <Input
            id={`tktCAForm_TelegramAccountAttndeeUpdated`}
            addClassName="lowercase"
            type="text"
            placeholder="Eg: @telegram_username"
            ariaLabel={`Telegram Account Attendee - Checkout`}
            disabled={edited}
            config={{
              ...register(`telegramAccountAttndee`, {
                required: true,
                maxLength: 255,
                pattern: {
                  value: /^@([a-zA-Z][a-zA-Z0-9_]{2,55})$/,
                },
              }),
            }}
            errors={errors[`telegramAccountAttndee`]}
          />
        </div>
      </div>
      <div
        className={`"block ${errors[`countryAttndee`] && 'error'} ${edited && 'disabled'}`}
      >
        <Label
          forId={`tktCAForm_CountryAttndeeUpdated`}
          label="Country"
          required={true}
        />
        <SelectCountry
          id={`tktCAForm_CountryAttndeeUpdated`}
          ariaLabel={`Country Attendee - Checkout`}
          listSelect={country}
          withIcons={true}
          config={{
            ...register(`countryAttndee`, {
              required: 'Please select a country',
            }),
          }}
        />
      </div>
      <div
        className={`"block ${errors[`whatTypeConnectionNetworkingAttndee`] && 'error'} ${edited && 'disabled'}`}
      >
        <Label
          forId={`tktCAForm_WhatTypeOfConnectionsAttndeeUpdated`}
          label="What type of connections & networking do you hope to achieve at Coinfest Asia?"
          required={true}
        />
        <Select
          id={`tktCAForm_WhatTypeOfConnectionsAttndeeUpdated`}
          ariaLabel={`What Type Of Connections Attendee - Checkout`}
          label="Choose a type connection networking..."
          listSelect={fieldForm !== undefined && fieldForm[6].fields[0].options}
          config={{
            ...register(`whatTypeConnectionNetworkingAttndee`, {
              required: 'Please select a type connection networking',
            }),
          }}
        />
      </div>
      <div
        className={`"block ${errors[`didYouHearAboutAttndee`] && 'error'} ${edited && 'disabled'}`}
      >
        <Label
          forId={`tktCAForm_DidYouHearAboutAttndeeUpdated`}
          label="Where did you hear about Coinfest Asia 2024?"
          required={true}
        />
        <Select
          id={`tktCAForm_DidYouHearAboutAttndeeUpdated`}
          ariaLabel={`What Type Of Connections Attendee - Checkout`}
          label="Choose a did you hear about..."
          listSelect={fieldForm !== undefined && fieldForm[7].fields[0].options}
          config={{
            ...register(`didYouHearAboutAttndee`, {
              required: 'Please select a choise did you hear about',
            }),
          }}
        />
      </div>
    </>
  );
};

export default AttendeeDetailUpdated;
