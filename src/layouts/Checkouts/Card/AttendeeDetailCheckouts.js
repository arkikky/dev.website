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

const AttendeeDetailCheckouts = ({
  ipAddress,
  watch,
  fieldForm,
  country,
  register,
  control,
  setValue,
  getValues,
  errors,
  arrIndex = 0,
  children,
}) => {
  return (
    <>
      {/* @role(Billing Details) */}
      <div className="mb-4 flex items-center rounded-xl border border-solid border-gray-200 bg-gray-100 px-1 py-1 sm:px-1.5 sm:py-1.5">
        <Controller
          name={`haveCompanyAttndee${arrIndex}`}
          control={control}
          render={({ field }) => (
            <>
              <label
                className={`inline-flex grow basis-0 cursor-pointer items-center justify-center gap-x-2 rounded-lg px-4 py-5 text-center text-sm font-normal text-gray-500 transition duration-300 ease-in-out focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                  field.value === 'false'
                    ? 'bg-primary text-white hover:text-white'
                    : 'bg-transparent hover:text-primary hover:underline'
                }`}
              >
                <span className="relative z-10 inline-block cursor-pointer text-sm font-normal">
                  Personal's
                </span>
                <input
                  {...field}
                  className="pointer-events-none hidden select-none"
                  type="radio"
                  value={false}
                />
              </label>
              <label
                className={`inline-flex grow basis-0 cursor-pointer items-center justify-center gap-x-2 rounded-lg px-4 py-5 text-center text-sm font-normal text-gray-500 transition duration-300 ease-in-out focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                  field.value === 'true'
                    ? 'bg-primary text-white hover:text-white'
                    : 'bg-transparent hover:text-primary hover:underline'
                }`}
              >
                <span className="relative z-10 inline-block cursor-pointer text-sm font-normal">
                  As Company
                </span>
                <input
                  {...field}
                  className="pointer-events-none hidden select-none"
                  type="radio"
                  value={true}
                />
              </label>
            </>
          )}
        />
      </div>

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
                maxLength: 120,
                pattern: {
                  value: /^[a-zA-Z0-9\s-_]{2,120}$/,
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
                maxLength: 120,
                pattern: {
                  value: /^[a-zA-Z0-9\s-_]{2,120}$/,
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
              maxLength: 120,
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
                  value: /^.{5,}/,
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
                maxLength: 55,
                pattern: {
                  value: /^@([a-zA-Z][a-zA-Z0-9_\.]{2,55})$/,
                },
              }),
            }}
            errors={errors[`telegramAccountAttndee${arrIndex}`]}
          />
        </div>
      </div>
      <div
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
      </div>
      <div
        className={`"block ${errors[`whatTypeConnectionNetworkingAttndee${arrIndex}`] && 'error'}`}
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
            fieldForm !== undefined ? fieldForm[6].fields?.[0].options : []
          }
          config={{
            ...register(`whatTypeConnectionNetworkingAttndee${arrIndex}`, {
              required: 'Please select a type connection networking',
            }),
          }}
        />
      </div>
      <div
        className={`"block ${errors[`didYouHearAboutAttndee${arrIndex}`] && 'error'}`}
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
            fieldForm !== undefined ? fieldForm[7].fields?.[0].options : []
          }
          config={{
            ...register(`didYouHearAboutAttndee${arrIndex}`, {
              required: 'Please select a choise did you hear about',
            }),
          }}
        />
      </div>

      {/* @company */}
      <div
        className={`${watch === 'true' ? 'pointer-events-auto select-auto supports-grid:grid' : 'pointer-events-none hidden select-none'}`}
      >
        <div className="mb-4 mt-2 flex w-full flex-col items-start justify-between sm:flex-row">
          <div className="flex w-full max-w-[399px] flex-col items-start justify-start">
            <span className="text-balance text-sm font-light text-gray-500">
              {`Please enter the company information to match the
                          details of the participants in attendance.`}
            </span>
          </div>
          {children}
        </div>

        <div className="grid-cols-1 gap-x-4 gap-y-4 supports-grid:grid sm:grid-cols-2">
          <div className="block">
            <Label
              forId={`tktCAForm_CompanyAttndee${arrIndex}Checkout`}
              label="Company Name"
              required={watch === 'true' ? true : false}
            />
            <Input
              id={`tktCAForm_CompanyAttndee${arrIndex}Checkout`}
              type="text"
              placeholder="Eg: Coinfest Asia"
              ariaLabel={`Company Attendee${arrIndex} - Checkout`}
              disabled={watch === 'true' ? false : true}
              config={{
                ...register(`companyAttndee${arrIndex}`, {
                  required: watch === 'true' ? true : false,
                  maxLength: 80,
                  pattern: {
                    value: /^(N\/A|[a-zA-Z0-9\s-_]{2,80})$/,
                  },
                }),
              }}
              errors={errors[`companyAttndee${arrIndex}`]}
            />
          </div>
          <div
            className={`"block ${errors[`jobPositionAttndee${arrIndex}`] ? 'error' : ''} ${watch === 'true' ? '' : 'disabled'}`}
          >
            <Label
              forId={`tktCAForm_JobPositionAttndee${arrIndex}Checkout`}
              label="Position"
              required={watch === 'true' ? true : false}
            />
            <Select
              id={`tktCAForm_JobPositionAttndee${arrIndex}Checkout`}
              ariaLabel={`Job Position Attendee${arrIndex} - Checkout`}
              label="Choose a position..."
              listSelect={
                fieldForm !== undefined && fieldForm[4].fields[1].options
              }
              withSearch={true}
              disabled={watch === 'true' ? false : true}
              config={{
                ...register(`jobPositionAttndee${arrIndex}`, {
                  required: watch === 'true' ? true : false,
                }),
              }}
            />
          </div>
        </div>
        <div className="mt-4 grid-cols-1 gap-x-4 gap-y-4 supports-grid:grid sm:grid-cols-2">
          <div
            className={`block ${errors[`companyFocusAttndee${arrIndex}`] ? 'error' : ''} ${watch === 'true' ? '' : 'disabled'}`}
          >
            <Label
              forId={`tktCAForm_CompanyFocusAttndee${arrIndex}Checkout`}
              label="Company Focus"
              required={watch === 'true' ? true : false}
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
                  required: watch === 'true' ? true : false,
                }),
              }}
            />
          </div>
          <div
            className={`"block ${errors[`companySizeAttndee${arrIndex}`] ? 'error' : ''} ${watch === 'true' ? '' : 'disabled'}`}
          >
            <Label
              forId={`tktCAForm_CompanySizeAttndee${arrIndex}Checkout`}
              label="Company Size"
              required={watch === 'true' ? true : false}
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
                  required: watch === 'true' ? true : false,
                }),
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AttendeeDetailCheckouts;
