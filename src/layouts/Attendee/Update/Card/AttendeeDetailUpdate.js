import React, { useEffect } from 'react';
import { Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';

// @style
import 'react-phone-input-2/lib/high-res.css';

// @form
import Label from '@components/UI/Form/Label';
import Input from '@components/UI/Form/Input';
import Select from '@components/UI/Form/Select';
import SelectCountry from '@components/UI/Form/SelectCountry';

const AttendeeDetailUpdate = ({
  watch,
  forms = {},
  items = {},
  register,
  control,
  setValue,
  getValues,
  errors,
  children,
}) => {
  // @hook(preline)
  const handleIntzPreline = async () => {
    await import('preline/preline');
    if (window.HSStaticMethods) {
      window.HSStaticMethods.autoInit();
    }
  };
  useEffect(() => {
    handleIntzPreline();
  }, [handleIntzPreline]);

  return (
    <>
      <div className="grid-cols-1 gap-x-4 gap-y-4 supports-grid:grid sm:grid-cols-2">
        <div className="block">
          <Label
            forId={`ca25Form_FirstnameAttndeeDetail`}
            label="First name"
            required={forms?.selfEdited === true ? false : true}
          />
          <Input
            id={`ca25Form_FirstnameAttndeeDetail`}
            type="text"
            name={`firstnameAttndeeDetail`}
            placeholder=""
            ariaLabel={`Firstname Attendee - Detail`}
            disabled={forms?.selfEdited === true ? true : false}
            config={{
              ...register(`firstnameAttndeeDetail`, {
                required: true,
                maxLength: 120,
                pattern: {
                  value: /^[a-zA-Z0-9\s-_]{2,120}$/,
                },
              }),
            }}
            errors={errors[`firstnameAttndeeDetail`]}
          />
        </div>
        <div className="block">
          <Label
            forId={`ca25Form_LastnameAttndeeDetail`}
            label="Last name"
            required={forms?.selfEdited === true ? false : true}
          />
          <Input
            id={`ca25Form_LastnameAttndeeDetail`}
            type="text"
            name={`lastnameAttndeeDetail`}
            placeholder=""
            ariaLabel={`Lastname Attendee - Detail`}
            disabled={forms?.selfEdited === true ? true : false}
            config={{
              ...register(`lastnameAttndeeDetail`, {
                required: true,
                maxLength: 120,
                pattern: {
                  value: /^[a-zA-Z0-9\s-_]{2,120}$/,
                },
              }),
            }}
            errors={errors[`lastnameAttndeeDetail`]}
          />
        </div>
      </div>
      <div className="pointer-events-none block select-none">
        <Label
          forId={`ca25Form_EmailAttndeeDetail`}
          label="Email"
          required={false}
        />
        <Input
          id={`ca25Form_EmailAttndeeDetail`}
          type="email"
          placeholder=""
          ariaLabel={`Email Attendee - Detail`}
          disabled={true}
          config={{
            ...register(`emailAttndeeDetail`, {
              required: true,
              maxLength: 120,
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              },
            }),
          }}
          errors={errors[`emailAttndeeDetail`]}
        />
      </div>
      <div className="grid-cols-1 gap-x-4 gap-y-4 supports-grid:grid sm:grid-cols-2">
        <div className="pointer-events-none block select-none">
          <Label
            forId={`ca25Form_PhoneAttendeDetail`}
            label={`Phone Number`}
            required={false}
          />
          <Controller
            name={`dialcode-phoneAttendeDetail`}
            control={control}
            disabled={true}
            render={({ field }) => (
              <PhoneInput
                {...field}
                country={forms?.ipAddress}
                onChange={(value, phone) => {
                  setValue(`dialcode-phoneAttndeeDetail`, value, {
                    shouldValidate: true,
                  });
                  setValue(`phoneAttndee`, value, {
                    shouldValidate: true,
                  });
                }}
                inputProps={{
                  required: false,
                  name: `dialcode-phoneAttndeeDetail`,
                  maxLength: 18,
                }}
                containerClass="w-full"
                inputClass={`ca25Form_PhoneInput ${errors[`phoneAttndeeDetail`] && 'errors'} disabled`}
                buttonClass={`ca25Form_PhoneInputBtn ${errors[`phoneAttndeeDetail`] && 'errors'} disabled`}
                dropdownClass={`ca25Form_PhoneInputDropdown`}
                countryCodeEditable={true}
                enableSearch={true}
                disableSearchIcon={true}
                searchPlaceholder="Search..."
                searchNotFound="Country not found"
              />
            )}
          />

          {/* @hidden-validation-phonenumber */}
          <Input
            id={`ca25Form_PhoneAttendeDetail`}
            type="text"
            placeholder="Eg: 081823124213"
            ariaLabel="Phone Number - Attendee Detail"
            disabled={true}
            hidden={true}
            config={{
              ...register(`phoneAttndeeDetail`, {
                value: getValues(`phoneAttndeeDetail`),
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
            forId={`ca25Form_TelegramAccountAttndeeDetail`}
            label="Telegram Username (Optional)"
            required={false}
          />
          <Input
            id={`ca25Form_TelegramAccountAttndeeDetail`}
            addClassName="lowercase"
            type="text"
            placeholder=""
            ariaLabel={`Telegram Account Attendee - Detail`}
            disabled={true}
            config={{
              ...register(`telegramAccountAttndeeDetail`, {
                required: false,
                maxLength: 55,
                pattern: {
                  value: /^([a-zA-Z][a-zA-Z0-9_\.]{2,55})$/,
                },
              }),
            }}
            errors={errors[`telegramAccountAttndeeDetail`]}
          />
        </div>
      </div>
      <div
        className={`"block ${errors[`countryAttndeeDetail`] ? 'error' : ''} disabled pointer-events-none select-none`}
      >
        <Label
          forId={`ca25Form_CountryAttndeeDetail`}
          label="Country"
          required={false}
        />
        <SelectCountry
          id={`ca25Form_CountryAttndeeDetail`}
          ariaLabel={`Country Attendee - Detail`}
          listSelect={forms?.country}
          withIcons={true}
          values={`countryAttndeeDetail`}
          setValue={setValue}
          config={{
            ...register(`countryAttndeeDetail`, {
              required: 'Please select a country',
            }),
          }}
        />
      </div>
      <div
        className={`"block ${errors[`whatTypeConnectionNetworkingAttndeeDetail`] && 'error'} disabled pointer-events-none select-none`}
      >
        <Label
          forId={`ca25Form_WhatTypeOfConnectionsAttndeeDetail`}
          label="What type of connections & networking do you hope to achieve at Coinfest Asia?"
          required={false}
        />
        <Select
          id={`ca25Form_WhatTypeOfConnectionsAttndeeDetail`}
          ariaLabel={`What Type Of Connections Attendee - Detail`}
          label="I want to meet..."
          listSelect={
            forms?.fieldForm !== undefined
              ? forms?.fieldForm[6].fields?.[0].options
              : []
          }
          values={`whatTypeConnectionNetworkingAttndeeDetail`}
          setValue={setValue}
          config={{
            ...register(`whatTypeConnectionNetworkingAttndeeDetail`, {
              required: 'Please I want to meet...',
            }),
          }}
        />
      </div>
      <div
        className={`"block ${errors[`didYouHearAboutAttndeeDetail`] && 'error'} disabled pointer-events-none select-none`}
      >
        <Label
          forId={`ca25Form_DidYouHearAboutAttndeeDetail`}
          label="Where did you hear about Coinfest Asia 2025?"
          required={false}
        />
        <Select
          id={`ca25Form_DidYouHearAboutAttndeeDetail`}
          ariaLabel={`What Type Of Connections Attendee - Detail`}
          label="Heard from..."
          widthPlaceholder={true}
          listSelect={
            forms?.fieldForm !== undefined
              ? forms?.fieldForm[7].fields?.[0].options
              : []
          }
          values={`didYouHearAboutAttndeeDetail`}
          setValue={setValue}
          config={{
            ...register(`didYouHearAboutAttndeeDetail`, {
              required: 'Please Heard from...',
            }),
          }}
        />
      </div>

      {/* @company */}
      <div className={`supports-grid:grid`}>
        <div className="mb-4 mt-5 flex w-full flex-col items-start justify-between sm:flex-row">
          <div className="flex w-full max-w-[399px] flex-col items-start justify-start">
            <span className="text-balance text-sm font-light text-gray-400">
              {`Use the company details that correspond with the attendee`}
            </span>
          </div>
          {children}
        </div>

        <div className="mb-4 block">
          <Label
            forId={`ca25Form_CompanyAttndeeDetail`}
            label="Company Name"
            required={forms?.selfEdited === true ? false : true}
          />
          <Input
            id={`ca25Form_CompanyAttndeeDetail`}
            type="text"
            placeholder=""
            ariaLabel={`Company Attendee - Detail`}
            disabled={forms?.selfEdited === true ? true : false}
            config={{
              ...register(`companyAttndeeDetail`, {
                required: watch === true ? true : false,
                maxLength: 80,
                pattern: {
                  value: /^(N\/A|[a-zA-Z0-9\s-_]{2,80})$/,
                },
              }),
            }}
            errors={errors[`companyAttndeeDetail`]}
          />
        </div>
        <div className="grid-cols-1 gap-x-4 gap-y-4 supports-grid:grid sm:grid-cols-2">
          <div className="pointer-events-none block select-none">
            <Label
              forId={`ca25Form_WebsiteUrlAttndeeDetail`}
              label="Company Website"
              required={false}
            />
            <Input
              id={`ca25Form_WebsiteUrlAttndeeDetail`}
              type="text"
              placeholder={`Include http:// or https://`}
              ariaLabel="Website Billing - Detail"
              disabled={true}
              config={{
                ...register(`websiteUrlAttndeeDetail`, {
                  required: watch,
                  maxLength: 255,
                  pattern: {
                    value:
                      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\w\d\-.\/]*)*\/?$|^N\/A$|^-$/,
                    message: 'Please enter a valid URL',
                  },
                }),
              }}
              errors={errors[`websiteUrlAttndeeDetail`]}
            />
          </div>
          <div
            className={`"block ${errors[`jobPositionAttndeeDetail`] ? 'error' : ''} ${watch === true && forms?.isSubmited === false ? '' : 'disabled'}`}
          >
            <Label
              forId={`ca25Form_JobPositionAttndeeDetail`}
              label="Position"
              required={watch}
            />
            <Select
              id={`ca25Form_JobPositionAttndeeDetail`}
              ariaLabel={`Job Position Attendee - Detail`}
              label=""
              widthPlaceholder={false}
              listSelect={
                forms?.fieldForm !== undefined &&
                forms?.fieldForm[4].fields[1].options
              }
              withSearch={true}
              values={`jobPositionAttndeeDetail`}
              setValue={setValue}
              config={{
                ...register(`jobPositionAttndeeDetail`, {
                  required: watch,
                }),
              }}
            />
          </div>
        </div>
        <div className="mt-4 grid-cols-1 gap-x-4 gap-y-4 supports-grid:grid sm:grid-cols-2">
          <div
            className={`block ${errors[`companyFocusAttndeeDetail`] ? 'error' : ''} ${watch === true && forms?.isSubmited === false ? '' : 'disabled'}`}
          >
            <Label
              forId={`ca25Form_CompanyFocusAttndeeDetail`}
              label="Company Focus"
              required={watch}
            />
            <Select
              id={`ca25Form_CompanyFocusAttndeeDetail`}
              ariaLabel={`Company Focus Attendee - Detail`}
              label="Choose a company focus..."
              widthPlaceholder={false}
              listSelect={
                forms?.fieldForm !== undefined &&
                forms?.fieldForm[5].fields[0].options
              }
              withSearch={true}
              values={`companyFocusAttndeeDetail`}
              setValue={setValue}
              config={{
                ...register(`companyFocusAttndeeDetail`, {
                  required: watch,
                }),
              }}
            />
          </div>
          <div
            className={`"block ${errors[`companySizeAttndeeDetail`] ? 'error' : ''} ${watch === true && forms?.isSubmited === false ? '' : 'disabled'}`}
          >
            <Label
              forId={`ca25Form_CompanySizeAttndeeDetail`}
              label="Company Size"
              required={watch}
            />
            <Select
              id={`ca25Form_CompanySizeAttndeeDetail`}
              ariaLabel={`Company Focus Attendee - Detail`}
              label=""
              widthPlaceholder={false}
              listSelect={
                forms?.fieldForm !== undefined &&
                forms?.fieldForm[5].fields[1].options
              }
              values={`companySizeAttndeeDetail`}
              setValue={setValue}
              config={{
                ...register(`companySizeAttndeeDetail`, {
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

export default AttendeeDetailUpdate;
