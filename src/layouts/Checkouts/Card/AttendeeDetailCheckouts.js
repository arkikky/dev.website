import React from 'react';
import { Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';

// @style
import 'react-phone-input-2/lib/high-res.css';

// @form
import Label from '@components/UI/Card/Form/Label';
import Input from '@components/UI/Card/Form/Input';
import Select from '@components/UI/Card/Form/Select';
import SelectCountry from '@components/UI/Card/Form/SelectCountry';

const AttendeeDetailCheckouts = ({
  ipAddress,
  fieldForm,
  country,
  register,
  control,
  setValue,
  getValues,
  errors,
  arrIndex = 0,
}) => {
  return (
    <>
      <div className="space-y-4">
        <div className="grid-cols-1 gap-x-4 gap-y-4 supports-grid:grid sm:grid-cols-2">
          <div className="block">
            <Label
              forId={`tktCAForm_FirstnameAttndee${arrIndex}Checkout`}
              label="Firstname"
              required={true}
            />
            <Input
              id={`tktCAForm_FirstnameAttndee${arrIndex}Checkout`}
              type="text"
              name={`firstnameAttndee${arrIndex}`}
              placeholder="Eg: Alexandre"
              ariaLabel={`Firstname Attendee${arrIndex} - Checkout`}
              config={{
                ...register(`firstnameAttndee${arrIndex}`, {
                  required: true,
                  maxLength: 255,
                  pattern: {
                    value: /^[a-zA-Z0-9\s-_]{2,255}$/,
                  },
                }),
              }}
              errors={errors[`firstnameAttndee${arrIndex}`]}
            />
          </div>
          <div className="block">
            <Label
              forId={`tktCAForm_LastnameAttndee${arrIndex}Checkout`}
              label="Lastname"
              required={true}
            />
            <Input
              id={`tktCAForm_LastnameAttndee${arrIndex}Checkout`}
              type="text"
              name={`lastnameAttndee${arrIndex}`}
              placeholder="Eg: Doe"
              ariaLabel={`Lastname Attendee${arrIndex} - Checkout`}
              config={{
                ...register(`lastnameAttndee${arrIndex}`, {
                  required: true,
                  maxLength: 255,
                  pattern: {
                    value: /^[a-zA-Z0-9\s-_]{2,255}$/,
                  },
                }),
              }}
              errors={errors[`lastnameAttndee${arrIndex}`]}
            />
          </div>
        </div>
        <div className="block">
          <Label
            forId={`tktCAForm_EmailAttndee${arrIndex}Checkout`}
            label="Email"
            helpText="The email entered must match the information of the attendee who is attending!"
            required={true}
          />
          <Input
            id={`tktCAForm_EmailAttndee${arrIndex}Checkout`}
            type="email"
            placeholder="Eg: example@email.com"
            ariaLabel={`Email Attendee${arrIndex} - Checkout`}
            config={{
              ...register(`emailAttndee${arrIndex}`, {
                required: true,
                maxLength: 255,
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                },
              }),
            }}
            errors={errors[`emailAttndee${arrIndex}`]}
          />
        </div>
        <div className="grid-cols-1 gap-x-4 gap-y-4 supports-grid:grid sm:grid-cols-2">
          <div className="block">
            <Label
              forId={`tktCAForm_PhoneAttende${arrIndex}Checkout`}
              label={`Phone Number`}
              required={true}
            />
            <Controller
              name={`dialcode-phone${arrIndex}`}
              control={control}
              render={({ field }) => (
                <PhoneInput
                  {...field}
                  country={ipAddress}
                  onChange={(value, phone) => {
                    setValue(`phone${arrIndex}`, value);
                  }}
                  inputProps={{
                    required: false,
                    name: `dialcode-phone${arrIndex}`,
                    autoFocus: false,
                    maxLength: 18,
                  }}
                  containerClass="w-full"
                  inputClass={`tktCAForm_PhoneInput ${errors[`phone${arrIndex}`] && 'errors'}`}
                  buttonClass={`tktCAForm_PhoneInputBtn ${errors[`phone${arrIndex}`] && 'errors'}`}
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
              id={`tktCAForm_PhoneAttende${arrIndex}Checkout`}
              type="text"
              placeholder="Eg: 081823124213"
              ariaLabel="Phone Number - Attendee Checkout"
              hidden={true}
              config={{
                ...register(`phone${arrIndex}`, {
                  value: getValues(`phone${arrIndex}`),
                  required: true,
                  maxLength: 18,
                  pattern: {
                    value: /^.{12,}/,
                    message: 'Please enter a valid URL',
                  },
                }),
              }}
            />
          </div>
          <div className="block">
            <Label
              forId={`tktCAForm_TelegramAccountAttndee${arrIndex}Checkout`}
              label="Telegram Account"
              required={true}
            />
            <Input
              id={`tktCAForm_TelegramAccountAttndee${arrIndex}Checkout`}
              addClassName="lowercase"
              type="text"
              placeholder="Eg: @telegram_username"
              ariaLabel={`Telegram Account Attendee${arrIndex} - Checkout`}
              config={{
                ...register(`telegramAccountAttndee${arrIndex}`, {
                  required: true,
                  maxLength: 255,
                  pattern: {
                    value: /^@([a-zA-Z][a-zA-Z0-9_]{2,55})$/,
                  },
                }),
              }}
              errors={errors[`telegramAccountAttndee${arrIndex}`]}
            />
          </div>
        </div>
        {/* <div
          className={`"block ${errors[`countryAttndee${arrIndex}`] && 'error'}`}
        >
          <Label
            forId={`tktCAForm_CountryAttndee${arrIndex}Checkout`}
            label="Country"
            required={true}
          />
          <SelectCountry
            id={`tktCAForm_CountryAttndee${arrIndex}Checkout`}
            ariaLabel={`Country Attendee${arrIndex} - Checkout`}
            listSelect={country}
            withIcons={true}
            config={{
              ...register(`countryAttndee${arrIndex}`, {
                required: 'Please select a country',
              }),
            }}
          />
        </div> */}
        <div className="grid-cols-1 gap-x-4 gap-y-4 supports-grid:grid sm:grid-cols-2">
          <div className="block">
            <Label
              forId={`tktCAForm_CompanyAttndee${arrIndex}Checkout`}
              label="Company Name"
              required={true}
            />
            <Input
              id={`tktCAForm_CompanyAttndee${arrIndex}Checkout`}
              type="text"
              placeholder="Eg: Coinfest Asia"
              ariaLabel={`Company Attendee${arrIndex} - Checkout`}
              config={{
                ...register(`companyAttndee${arrIndex}`, {
                  required: true,
                  maxLength: 80,
                  pattern: {
                    value: /^[a-zA-Z0-9\s-_]{2,80}$/,
                  },
                }),
              }}
              errors={errors[`companyAttndee${arrIndex}`]}
            />
          </div>
          <div
            className={`"block ${errors[`jobPosition${arrIndex}`] && 'error'}`}
          >
            <Label
              forId={`tktCAForm_JobPositionAttndee${arrIndex}Checkout`}
              label="Position"
              required={true}
            />
            <Select
              id={`tktCAForm_JobPositionAttndee${arrIndex}Checkout`}
              ariaLabel={`Job Position Attendee${arrIndex} - Checkout`}
              label="Choose a position..."
              listSelect={
                fieldForm !== undefined && fieldForm[4].fields[1].options
              }
              withSearch={true}
              config={{
                ...register(`jobPositionAttndee${arrIndex}`, {
                  required: 'Please select a position',
                }),
              }}
            />
          </div>
        </div>
        {/* <div className="grid-cols-1 gap-x-4 gap-y-4 supports-grid:grid sm:grid-cols-2">
          <div
            className={`"block ${errors[`companyFocus${arrIndex}`] && 'error'}`}
          >
            <Label
              forId={`tktCAForm_CompanyFocusAttndee${arrIndex}Checkout`}
              label="Company Focus"
              required={true}
            />
            <Select
              id={`tktCAForm_CompanyFocusAttndee${arrIndex}Checkout`}
              ariaLabel={`Company Focus Attendee${arrIndex} - Checkout`}
              label="Choose a company focus..."
              listSelect={
                fieldForm !== undefined && fieldForm[5].fields[0].options
              }
              withSearch={true}
              config={{
                ...register(`companyFocusAttndee${arrIndex}`, {
                  required: 'Please select a company focus',
                }),
              }}
            />
          </div>
          <div
            className={`"block ${errors[`companySize${arrIndex}`] && 'error'}`}
          >
            <Label
              forId={`tktCAForm_CompanySizeAttndee${arrIndex}Checkout`}
              label="Company Size"
              required={true}
            />
            <Select
              id={`tktCAForm_CompanySizeAttndee${arrIndex}Checkout`}
              ariaLabel={`Company Focus Attendee${arrIndex} - Checkout`}
              label="Choose a company size..."
              listSelect={
                fieldForm !== undefined && fieldForm[5].fields[1].options
              }
              config={{
                ...register(`companySizeAttndee${arrIndex}`, {
                  required: 'Please select a company size',
                }),
              }}
            />
          </div>
        </div> */}
        <div
          className={`"block ${errors[`whatTypeConnectionNetworking${arrIndex}`] && 'error'}`}
        >
          <Label
            forId={`tktCAForm_WhatTypeOfConnectionsAttndee${arrIndex}Checkout`}
            label="What type of connections & networking do you hope to achieve at Coinfest Asia?"
            required={true}
          />
          <Select
            id={`tktCAForm_WhatTypeOfConnectionsAttndee${arrIndex}Checkout`}
            ariaLabel={`What Type Of Connections Attendee${arrIndex} - Checkout`}
            label="Choose a type connection networking..."
            listSelect={
              fieldForm !== undefined && fieldForm[6].fields[0].options
            }
            config={{
              ...register(`whatTypeConnectionNetworkingAttndee${arrIndex}`, {
                required: 'Please select a type connection networking',
              }),
            }}
          />
        </div>
        <div
          className={`"block ${errors[`didYouHearAbout${arrIndex}`] && 'error'}`}
        >
          <Label
            forId={`tktCAForm_DidYouHearAboutAttndee${arrIndex}Checkout`}
            label="Where did you hear about Coinfest Asia 2024?"
            required={true}
          />
          <Select
            id={`tktCAForm_DidYouHearAboutAttndee${arrIndex}Checkout`}
            ariaLabel={`What Type Of Connections Attendee${arrIndex} - Checkout`}
            label="Choose a did you hear about..."
            listSelect={
              fieldForm !== undefined && fieldForm[7].fields[0].options
            }
            config={{
              ...register(`didYouHearAboutAttndee${arrIndex}`, {
                required: 'Please select a choise did you hear about',
              }),
            }}
          />
        </div>
      </div>
    </>
  );
};

export default AttendeeDetailCheckouts;
