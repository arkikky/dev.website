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
  watch,
  forms = {},
  items = {},
  register,
  control,
  setValue,
  getValues,
  errors,
  onChangeToggle,
  children,
}) => {
  return (
    <>
      <div className="grid-cols-1 gap-x-4 gap-y-4 supports-grid:grid sm:grid-cols-2">
        <div className="block">
          <Label
            forId={`ca25Form_FirstnameAttndee${items?.attendee}_${items?.group}Checkout`}
            label="Firstname"
            required={true}
          />
          <Input
            id={`ca25Form_FirstnameAttndee${items?.attendee}_${items?.group}Checkout`}
            type="text"
            name={`firstnameAttndee${items?.attendee}_${items?.group}`}
            placeholder="Eg: Alexander"
            ariaLabel={`Firstname Attendee${items?.attendee}_${items?.group} - Checkout`}
            disabled={forms?.isSubmited === true ? true : false}
            config={{
              ...register(
                `firstnameAttndee${items?.attendee}_${items?.group}`,
                {
                  required: true,
                  maxLength: 120,
                  pattern: {
                    value: /^[a-zA-Z0-9\s-_]{2,120}$/,
                  },
                }
              ),
            }}
            errors={
              errors[`firstnameAttndee${items?.attendee}_${items?.group}`]
            }
          />
        </div>
        <div className="block">
          <Label
            forId={`ca25Form_LastnameAttndee${items?.attendee}_${items?.group}Checkout`}
            label="Lastname"
            required={true}
          />
          <Input
            id={`ca25Form_LastnameAttndee${items?.attendee}_${items?.group}Checkout`}
            type="text"
            name={`lastnameAttndee${items?.attendee}_${items?.group}`}
            placeholder="Eg: Doe"
            ariaLabel={`Lastname Attendee${items?.attendee}_${items?.group} - Checkout`}
            disabled={forms?.isSubmited === true ? true : false}
            config={{
              ...register(`lastnameAttndee${items?.attendee}_${items?.group}`, {
                required: true,
                maxLength: 120,
                pattern: {
                  value: /^[a-zA-Z0-9\s-_]{2,120}$/,
                },
              }),
            }}
            errors={errors[`lastnameAttndee${items?.attendee}_${items?.group}`]}
          />
        </div>
      </div>
      <div className="block">
        <Label
          forId={`ca25Form_EmailAttndee${items?.attendee}_${items?.group}Checkout`}
          label="Email"
          helpText="The email entered must match the information of the attendee who is attending!"
          required={true}
        />
        <Input
          id={`ca25Form_EmailAttndee${items?.attendee}_${items?.group}Checkout`}
          type="email"
          placeholder="Eg: example@email.com"
          ariaLabel={`Email Attendee${items?.attendee}_${items?.group} - Checkout`}
          disabled={forms?.isSubmited === true ? true : false}
          config={{
            ...register(`emailAttndee${items?.attendee}_${items?.group}`, {
              required: true,
              maxLength: 120,
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              },
            }),
          }}
          errors={errors[`emailAttndee${items?.attendee}_${items?.group}`]}
        />
      </div>
      <div className="grid-cols-1 gap-x-4 gap-y-4 supports-grid:grid sm:grid-cols-2">
        <div className="block">
          <Label
            forId={`ca25Form_PhoneAttende${items?.attendee}_${items?.group}Checkout`}
            label={`Phone Number`}
            required={true}
          />
          <Controller
            name={`dialcode-phone${items?.attendee}_${items?.group}`}
            control={control}
            rules={{ required: 'This field is required' }}
            disabled={forms?.isSubmited === true ? true : false}
            render={({ field }) => (
              <PhoneInput
                {...field}
                country={forms?.ipAddress}
                onChange={(value, phone) => {
                  setValue(`phone${items?.attendee}_${items?.group}`, value);
                }}
                inputProps={{
                  required: false,
                  name: `dialcode-phone${items?.attendee}_${items?.group}`,
                  autoFocus: false,
                  maxLength: 18,
                }}
                containerClass="w-full"
                inputClass={`ca25Form_PhoneInput ${errors[`phone${items?.attendee}_${items?.group}`] && 'errors'}`}
                buttonClass={`ca25Form_PhoneInputBtn ${errors[`phone${items?.attendee}_${items?.group}`] && 'errors'}`}
                dropdownClass="ca25Form_PhoneInputDropdown"
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
            id={`ca25Form_PhoneAttende${items?.attendee}_${items?.group}Checkout`}
            type="text"
            placeholder="Eg: 081823124213"
            ariaLabel="Phone Number - Attendee Checkout"
            disabled={forms?.isSubmited === true ? true : false}
            hidden={true}
            config={{
              ...register(`phone${items?.attendee}_${items?.group}`, {
                value: getValues(`phone${items?.attendee}_${items?.group}`),
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
            forId={`ca25Form_TelegramAccountAttndee${items?.attendee}_${items?.group}Checkout`}
            label="Telegram Account"
            required={false}
          />
          <Input
            id={`ca25Form_TelegramAccountAttndee${items?.attendee}_${items?.group}Checkout`}
            addClassName="lowercase"
            type="text"
            placeholder="Eg: @username"
            ariaLabel={`Telegram Account Attendee${items?.attendee}_${items?.group} - Checkout`}
            disabled={forms?.isSubmited === true ? true : false}
            config={{
              ...register(
                `telegramAccountAttndee${items?.attendee}_${items?.group}`,
                {
                  required: false,
                  maxLength: 55,
                  pattern: {
                    value: /^@([a-zA-Z][a-zA-Z0-9_\.]{2,55})$/,
                  },
                }
              ),
            }}
            errors={
              errors[`telegramAccountAttndee${items?.attendee}_${items?.group}`]
            }
          />
        </div>
      </div>
      <div
        className={`"block ${errors[`countryAttndee${items?.attendee}_${items?.group}`] && 'error'} ${forms?.isSubmited === false ? '' : 'disabled'}`}
      >
        <Label
          forId={`ca25Form_CountryAttndee${items?.attendee}_${items?.group}Checkout`}
          label="Country"
          required={true}
        />
        <SelectCountry
          id={`ca25Form_CountryAttndee${items?.attendee}_${items?.group}Checkout`}
          ariaLabel={`Country Attendee${items?.attendee}_${items?.group} - Checkout`}
          listSelect={forms?.country}
          withIcons={true}
          config={{
            ...register(`countryAttndee${items?.attendee}_${items?.group}`, {
              required: 'Please select a country',
            }),
          }}
        />
      </div>
      <div
        className={`"block ${errors[`whatTypeConnectionNetworkingAttndee${items?.attendee}_${items?.group}`] && 'error'} ${forms?.isSubmited === false ? '' : 'disabled'}`}
      >
        <Label
          forId={`ca25Form_WhatTypeOfConnectionsAttndee${items?.attendee}_${items?.group}Checkout`}
          label="What type of connections & networking do you hope to achieve at Coinfest Asia?"
          required={true}
        />
        <Select
          id={`ca25Form_WhatTypeOfConnectionsAttndee${items?.attendee}_${items?.group}Checkout`}
          ariaLabel={`What Type Of Connections Attendee${items?.attendee}_${items?.group} - Checkout`}
          label="I want to meet..."
          listSelect={
            forms?.fieldForm !== undefined
              ? forms?.fieldForm[6].fields?.[0].options
              : []
          }
          config={{
            ...register(
              `whatTypeConnectionNetworkingAttndee${items?.attendee}_${items?.group}`,
              {
                required: 'Please I want to meet...',
              }
            ),
          }}
        />
      </div>
      <div
        className={`"block ${errors[`didYouHearAboutAttndee${items?.attendee}_${items?.group}`] && 'error'} ${forms?.isSubmited === false ? '' : 'disabled'}`}
      >
        <Label
          forId={`ca25Form_DidYouHearAboutAttndee${items?.attendee}_${items?.group}Checkout`}
          label="Where did you hear about Coinfest Asia 2025?"
          required={true}
        />
        <Select
          id={`ca25Form_DidYouHearAboutAttndee${items?.attendee}_${items?.group}Checkout`}
          ariaLabel={`What Type Of Connections Attendee${items?.attendee}_${items?.group} - Checkout`}
          label="Heard from..."
          listSelect={
            forms?.fieldForm !== undefined
              ? forms?.fieldForm[7].fields?.[0].options
              : []
          }
          config={{
            ...register(
              `didYouHearAboutAttndee${items?.attendee}_${items?.group}`,
              {
                required: 'Please Heard from...',
              }
            ),
          }}
        />
      </div>

      {/* @company */}
      <div className={`supports-grid:grid`}>
        <div className={`flex flex-row items-center justify-between`}>
          <Label
            forId={`ca25Form_HaveCompanyAttndee${items?.attendee}_${items?.group}Checkout`}
            label="Are you working with a company?"
            required={false}
          />
          {forms?.isSubmited === false ? (
            <div
              className={`relative ${forms?.isSubmited === true ? 'hidden' : 'inline-block'}`}
            >
              <input
                id={`ca25Form_HaveCompanyAttndee${items?.attendee}_${items?.group}Checkout`}
                className="bxShadow-none form-checkbox relative h-6 w-12 shrink-0 cursor-pointer rounded-full border border-solid border-gray-200 bg-gray-100 py-0.5 pl-0.5 pr-px text-transparent transition-colors duration-200 ease-in-out before:inline-block before:size-4.5 before:translate-x-0 before:transform before:rounded-full before:border before:border-gray-200 before:bg-white before:ring-0 before:transition before:duration-200 before:ease-in-out checked:border-black-900 checked:bg-none checked:text-black-900 checked:before:translate-x-[130%] checked:before:border-white checked:before:bg-white disabled:pointer-events-none"
                type="checkbox"
                checked={
                  watch || items?.isToggle[items?.product][items?.productItems]
                }
                {...register(
                  `haveCompanyAttndee${items?.attendee}_${items?.group}`,
                  {
                    required: false,
                    onChange: (e) => {
                      onChangeToggle(items?.product, items?.productItems);
                    },
                  }
                )}
              />
              <label
                htmlFor={`ca25Form_HaveCompanyAttndeeLabel${items?.attendee}_${items?.group}Checkout`}
                className="sr-only"
              >
                switch
              </label>
            </div>
          ) : null}
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
              forId={`ca25Form_CompanyAttndee${items?.attendee}_${items?.group}Checkout`}
              label="Company Name"
              required={watch}
            />
            <Input
              id={`ca25Form_CompanyAttndee${items?.attendee}_${items?.group}Checkout`}
              type="text"
              placeholder="Eg: Coinfest Asia"
              ariaLabel={`Company Attendee${items?.attendee}_${items?.group} - Checkout`}
              disabled={watch === true ? false : true}
              config={{
                ...register(
                  `companyAttndee${items?.attendee}_${items?.group}`,
                  {
                    required: watch === true ? true : false,
                    maxLength: 80,
                    pattern: {
                      value: /^(N\/A|[a-zA-Z0-9\s-_]{2,80})$/,
                    },
                  }
                ),
              }}
              errors={
                errors[`companyAttndee${items?.attendee}_${items?.group}`]
              }
            />
          </div>
          <div
            className={`"block ${errors[`jobPositionAttndee${items?.attendee}_${items?.group}`] ? 'error' : ''} ${watch === true && forms?.isSubmited === false ? '' : 'disabled'}`}
          >
            <Label
              forId={`ca25Form_JobPositionAttndee${items?.attendee}_${items?.group}Checkout`}
              label="Position"
              required={watch}
            />
            <Select
              id={`ca25Form_JobPositionAttndee${items?.attendee}_${items?.group}Checkout`}
              ariaLabel={`Job Position Attendee${items?.attendee}_${items?.group} - Checkout`}
              label="Choose a position..."
              listSelect={
                forms?.fieldForm !== undefined &&
                forms?.fieldForm[4].fields[1].options
              }
              withSearch={true}
              config={{
                ...register(
                  `jobPositionAttndee${items?.attendee}_${items?.group}`,
                  {
                    required: watch,
                  }
                ),
              }}
            />
          </div>
        </div>
        <div className="mt-4 grid-cols-1 gap-x-4 gap-y-4 supports-grid:grid sm:grid-cols-2">
          <div
            className={`block ${errors[`companyFocusAttndee${items?.attendee}_${items?.group}`] ? 'error' : ''} ${watch === true && forms?.isSubmited === false ? '' : 'disabled'}`}
          >
            <Label
              forId={`ca25Form_CompanyFocusAttndee${items?.attendee}_${items?.group}Checkout`}
              label="Company Focus"
              required={watch}
            />
            <Select
              id={`ca25Form_CompanyFocusAttndee${items?.attendee}_${items?.group}Checkout`}
              ariaLabel={`Company Focus Attendee${items?.attendee}_${items?.group} - Checkout`}
              label="Choose a company focus..."
              listSelect={
                forms?.fieldForm !== undefined &&
                forms?.fieldForm[5].fields[0].options
              }
              withSearch={true}
              config={{
                ...register(
                  `companyFocusAttndee${items?.attendee}_${items?.group}`,
                  {
                    required: watch,
                  }
                ),
              }}
            />
          </div>
          <div
            className={`"block ${errors[`companySizeAttndee${items?.attendee}_${items?.group}`] ? 'error' : ''} ${watch === true && forms?.isSubmited === false ? '' : 'disabled'}`}
          >
            <Label
              forId={`ca25Form_CompanySizeAttndee${items?.attendee}_${items?.group}Checkout`}
              label="Company Size"
              required={watch}
            />
            <Select
              id={`ca25Form_CompanySizeAttndee${items?.attendee}_${items?.group}Checkout`}
              ariaLabel={`Company Focus Attendee${items?.attendee}_${items?.group} - Checkout`}
              label="Choose a company size..."
              listSelect={
                forms?.fieldForm !== undefined &&
                forms?.fieldForm[5].fields[1].options
              }
              config={{
                ...register(
                  `companySizeAttndee${items?.attendee}_${items?.group}`,
                  {
                    required: watch,
                  }
                ),
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AttendeeDetailCheckouts;
