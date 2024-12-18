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
  group,
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
      <div className="grid-cols-1 gap-x-4 gap-y-4 supports-grid:grid sm:grid-cols-2">
        <div className="block">
          <Label
            forId={`tktCAForm_FirstnameAttndee${arrIndex}_${group}Checkout`}
            label="Firstname"
            required={true}
          />
          <Input
            id={`tktCAForm_FirstnameAttndee${arrIndex}_${group}Checkout`}
            type="text"
            name={`firstnameAttndee${arrIndex}_${group}`}
            placeholder="Eg: Alexander"
            ariaLabel={`Firstname Attendee${arrIndex}_${group} - Checkout`}
            config={{
              ...register(`firstnameAttndee${arrIndex}_${group}`, {
                required: true,
                maxLength: 120,
                pattern: {
                  value: /^[a-zA-Z0-9\s-_]{2,120}$/,
                },
              }),
            }}
            errors={errors[`firstnameAttndee${arrIndex}_${group}`]}
          />
        </div>
        <div className="block">
          <Label
            forId={`tktCAForm_LastnameAttndee${arrIndex}_${group}Checkout`}
            label="Lastname"
            required={true}
          />
          <Input
            id={`tktCAForm_LastnameAttndee${arrIndex}_${group}Checkout`}
            type="text"
            name={`lastnameAttndee${arrIndex}_${group}`}
            placeholder="Eg: Doe"
            ariaLabel={`Lastname Attendee${arrIndex}_${group} - Checkout`}
            config={{
              ...register(`lastnameAttndee${arrIndex}_${group}`, {
                required: true,
                maxLength: 120,
                pattern: {
                  value: /^[a-zA-Z0-9\s-_]{2,120}$/,
                },
              }),
            }}
            errors={errors[`lastnameAttndee${arrIndex}_${group}`]}
          />
        </div>
      </div>
      <div className="block">
        <Label
          forId={`tktCAForm_EmailAttndee${arrIndex}_${group}Checkout`}
          label="Email"
          helpText="The email entered must match the information of the attendee who is attending!"
          required={true}
        />
        <Input
          id={`tktCAForm_EmailAttndee${arrIndex}_${group}Checkout`}
          type="email"
          placeholder="Eg: example@email.com"
          ariaLabel={`Email Attendee${arrIndex}_${group} - Checkout`}
          config={{
            ...register(`emailAttndee${arrIndex}_${group}`, {
              required: true,
              maxLength: 120,
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              },
            }),
          }}
          errors={errors[`emailAttndee${arrIndex}_${group}`]}
        />
      </div>
      <div className="grid-cols-1 gap-x-4 gap-y-4 supports-grid:grid sm:grid-cols-2">
        <div className="block">
          <Label
            forId={`tktCAForm_PhoneAttende${arrIndex}_${group}Checkout`}
            label={`Phone Number`}
            required={true}
          />
          <Controller
            name={`dialcode-phone${arrIndex}_${group}`}
            control={control}
            render={({ field }) => (
              <PhoneInput
                {...field}
                country={ipAddress}
                onChange={(value, phone) => {
                  setValue(`phone${arrIndex}_${group}`, value);
                }}
                inputProps={{
                  required: false,
                  name: `dialcode-phone${arrIndex}_${group}`,
                  autoFocus: false,
                  maxLength: 18,
                }}
                containerClass="w-full"
                inputClass={`tktCAForm_PhoneInput ${errors[`phone${arrIndex}_${group}`] && 'errors'}`}
                buttonClass={`tktCAForm_PhoneInputBtn ${errors[`phone${arrIndex}_${group}`] && 'errors'}`}
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
            id={`tktCAForm_PhoneAttende${arrIndex}_${group}Checkout`}
            type="text"
            placeholder="Eg: 081823124213"
            ariaLabel="Phone Number - Attendee Checkout"
            hidden={true}
            config={{
              ...register(`phone${arrIndex}_${group}`, {
                value: getValues(`phone${arrIndex}_${group}`),
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
            forId={`tktCAForm_TelegramAccountAttndee${arrIndex}_${group}Checkout`}
            label="Telegram Account"
            required={false}
          />
          <Input
            id={`tktCAForm_TelegramAccountAttndee${arrIndex}_${group}Checkout`}
            addClassName="lowercase"
            type="text"
            placeholder="Eg: @username"
            ariaLabel={`Telegram Account Attendee${arrIndex}_${group} - Checkout`}
            config={{
              ...register(`telegramAccountAttndee${arrIndex}_${group}`, {
                required: false,
                maxLength: 55,
                pattern: {
                  value: /^@([a-zA-Z][a-zA-Z0-9_\.]{2,55})$/,
                },
              }),
            }}
            errors={errors[`telegramAccountAttndee${arrIndex}_${group}`]}
          />
        </div>
      </div>
      <div
        className={`"block ${errors[`countryAttndee${arrIndex}_${group}`] && 'error'}`}
      >
        <Label
          forId={`tktCAForm_CountryAttndee${arrIndex}_${group}Checkout`}
          label="Country"
          required={true}
        />
        <SelectCountry
          id={`tktCAForm_CountryAttndee${arrIndex}_${group}Checkout`}
          ariaLabel={`Country Attendee${arrIndex}_${group} - Checkout`}
          listSelect={country}
          withIcons={true}
          config={{
            ...register(`countryAttndee${arrIndex}_${group}`, {
              required: 'Please select a country',
            }),
          }}
        />
      </div>
      <div
        className={`"block ${errors[`whatTypeConnectionNetworkingAttndee${arrIndex}_${group}`] && 'error'}`}
      >
        <Label
          forId={`tktCAForm_WhatTypeOfConnectionsAttndee${arrIndex}_${group}Checkout`}
          label="What type of connections & networking do you hope to achieve at Coinfest Asia?"
          required={true}
        />
        <Select
          id={`tktCAForm_WhatTypeOfConnectionsAttndee${arrIndex}_${group}Checkout`}
          ariaLabel={`What Type Of Connections Attendee${arrIndex}_${group} - Checkout`}
          label="I want to meet..."
          listSelect={
            fieldForm !== undefined ? fieldForm[6].fields?.[0].options : []
          }
          config={{
            ...register(
              `whatTypeConnectionNetworkingAttndee${arrIndex}_${group}`,
              {
                required: 'Please I want to meet...',
              }
            ),
          }}
        />
      </div>
      <div
        className={`"block ${errors[`didYouHearAboutAttndee${arrIndex}_${group}`] && 'error'}`}
      >
        <Label
          forId={`tktCAForm_DidYouHearAboutAttndee${arrIndex}_${group}Checkout`}
          label="Where did you hear about Coinfest Asia 2024?"
          required={true}
        />
        <Select
          id={`tktCAForm_DidYouHearAboutAttndee${arrIndex}_${group}Checkout`}
          ariaLabel={`What Type Of Connections Attendee${arrIndex}_${group} - Checkout`}
          label="Heard from..."
          listSelect={
            fieldForm !== undefined ? fieldForm[7].fields?.[0].options : []
          }
          config={{
            ...register(`didYouHearAboutAttndee${arrIndex}_${group}`, {
              required: 'Please Heard from...',
            }),
          }}
        />
      </div>

      {/* @company */}
      <div className={`supports-grid:grid`}>
        <div className={`flex flex-row items-center justify-between`}>
          <Label
            forId={`tktCAForm_HaveCompanyAttndee${arrIndex}_${group}Checkout`}
            label="Are you working with a company?"
            required={false}
          />
          <div className="relative inline-block">
            <input
              id={`tktCAForm_HaveCompanyAttndee${arrIndex}_${group}Checkout`}
              className="bxShadow-none form-checkbox relative h-6 w-12 shrink-0 cursor-pointer rounded-full border border-solid border-gray-200 bg-gray-100 py-0.5 pl-0.5 pr-px text-transparent transition-colors duration-200 ease-in-out before:inline-block before:size-4.5 before:translate-x-0 before:transform before:rounded-full before:border before:border-gray-200 before:bg-white before:ring-0 before:transition before:duration-200 before:ease-in-out checked:border-blue-600 checked:bg-none checked:text-blue-600 checked:before:translate-x-[130%] checked:before:border-white checked:before:bg-white disabled:pointer-events-none"
              type="checkbox"
              {...register(`haveCompanyAttndee${arrIndex}_${group}`, {
                required: false,
              })}
            />
            <label
              htmlFor={`tktCAForm_HaveCompanyAttndeeLabel${arrIndex}_${group}Checkout`}
              className="sr-only"
            >
              switch
            </label>
          </div>
        </div>
        <div className="mb-4 mt-5 flex w-full flex-col items-start justify-between sm:flex-row">
          <div className="flex w-full max-w-[399px] flex-col items-start justify-start">
            <span className="text-balance text-sm font-light text-gray-400">
              {`Please enter the company information to match the details of the participants in attendance.`}
            </span>
          </div>
          {children}
        </div>

        <div className="grid-cols-1 gap-x-4 gap-y-4 supports-grid:grid sm:grid-cols-2">
          <div className="block">
            <Label
              forId={`tktCAForm_CompanyAttndee${arrIndex}_${group}Checkout`}
              label="Company Name"
              required={watch}
            />
            <Input
              id={`tktCAForm_CompanyAttndee${arrIndex}_${group}Checkout`}
              type="text"
              placeholder="Eg: Coinfest Asia"
              ariaLabel={`Company Attendee${arrIndex}_${group} - Checkout`}
              disabled={watch === true ? false : true}
              config={{
                ...register(`companyAttndee${arrIndex}_${group}`, {
                  required: watch === 'true' ? true : false,
                  maxLength: 80,
                  pattern: {
                    value: /^(N\/A|[a-zA-Z0-9\s-_]{2,80})$/,
                  },
                }),
              }}
              errors={errors[`companyAttndee${arrIndex}_${group}`]}
            />
          </div>
          <div
            className={`"block ${errors[`jobPositionAttndee${arrIndex}_${group}`] ? 'error' : ''} ${watch === true ? '' : 'disabled'}`}
          >
            <Label
              forId={`tktCAForm_JobPositionAttndee${arrIndex}_${group}Checkout`}
              label="Position"
              required={watch}
            />
            <Select
              id={`tktCAForm_JobPositionAttndee${arrIndex}_${group}Checkout`}
              ariaLabel={`Job Position Attendee${arrIndex}_${group} - Checkout`}
              label="Choose a position..."
              listSelect={
                fieldForm !== undefined && fieldForm[4].fields[1].options
              }
              withSearch={true}
              disabled={watch === true ? false : true}
              config={{
                ...register(`jobPositionAttndee${arrIndex}_${group}`, {
                  required: watch,
                }),
              }}
            />
          </div>
        </div>
        <div className="mt-4 grid-cols-1 gap-x-4 gap-y-4 supports-grid:grid sm:grid-cols-2">
          <div
            className={`block ${errors[`companyFocusAttndee${arrIndex}_${group}`] ? 'error' : ''} ${watch === true ? '' : 'disabled'}`}
          >
            <Label
              forId={`tktCAForm_CompanyFocusAttndee${arrIndex}_${group}Checkout`}
              label="Company Focus"
              required={watch}
            />
            <Select
              id={`tktCAForm_CompanyFocusAttndee${arrIndex}_${group}Checkout`}
              ariaLabel={`Company Focus Attendee${arrIndex}_${group} - Checkout`}
              label="Choose a company focus..."
              listSelect={
                fieldForm !== undefined && fieldForm[5].fields[0].options
              }
              withSearch={true}
              config={{
                ...register(`companyFocusAttndee${arrIndex}_${group}`, {
                  required: watch,
                }),
              }}
            />
          </div>
          <div
            className={`"block ${errors[`companySizeAttndee${arrIndex}_${group}`] ? 'error' : ''} ${watch === true ? '' : 'disabled'}`}
          >
            <Label
              forId={`tktCAForm_CompanySizeAttndee${arrIndex}_${group}Checkout`}
              label="Company Size"
              required={watch}
            />
            <Select
              id={`tktCAForm_CompanySizeAttndee${arrIndex}_${group}Checkout`}
              ariaLabel={`Company Focus Attendee${arrIndex}_${group} - Checkout`}
              label="Choose a company size..."
              listSelect={
                fieldForm !== undefined && fieldForm[5].fields[1].options
              }
              config={{
                ...register(`companySizeAttndee${arrIndex}_${group}`, {
                  required: watch,
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
