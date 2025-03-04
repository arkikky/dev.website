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
  haveCompany = false,
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
  }, [handleIntzPreline, watch]);

  // @handle(company toggle change)
  const handleToggleCompay_Change = (d) => {
    const isTrue = getValues(d) === true;
    const fieldsToSet = {
      [`websiteUrlAttndeeDetail`]: isTrue ? '' : '-',
      [`companyAttndeeDetail`]: isTrue ? '' : 'N/A',
      [`jobPositionAttndeeDetail`]: isTrue ? '' : '-',
      [`companyFocusAttndeeDetail`]: isTrue ? '' : '-',
      [`companySizeAttndeeDetail`]: isTrue ? '' : '-',
    };
    Object.entries(fieldsToSet).forEach(([field, value]) => {
      setValue(field, value, { shouldValidate: true });
    });
  };

  return (
    <>
      <div className="grid-cols-1 gap-x-4 gap-y-4 supports-grid:grid sm:grid-cols-2">
        <div className="block">
          <Label
            forId={`ca25Form_FirstnameAttndeeDetail`}
            label="First name"
            required={forms?.selfEdited ? false : true}
          />
          <Input
            id={`ca25Form_FirstnameAttndeeDetail`}
            type="text"
            name={`firstnameAttndeeDetail`}
            placeholder=""
            ariaLabel={`Firstname Attendee - Detail`}
            disabled={forms?.selfEdited ? true : false}
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
            required={forms?.selfEdited ? false : true}
          />
          <Input
            id={`ca25Form_LastnameAttndeeDetail`}
            type="text"
            name={`lastnameAttndeeDetail`}
            placeholder=""
            ariaLabel={`Lastname Attendee - Detail`}
            disabled={forms?.selfEdited ? true : false}
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
      {!haveCompany ? (
        <div className={`mt-6 flex flex-row items-center justify-between`}>
          <Label
            forId={`ca25Form_HaveCompanyAttndeeDetail`}
            label="Would you like to update your company information?"
            required={false}
          />
          {!forms?.selfEdited ? (
            <div
              className={`relative ${forms?.selfEdited ? 'hidden' : 'inline-block'}`}
            >
              <input
                id={`ca25Form_HaveCompanyAttndeeDetail`}
                className="bxShadow-none form-checkbox relative h-6 w-12 shrink-0 cursor-pointer rounded-full border border-solid border-gray-200 bg-gray-100 py-0.5 pl-0.5 pr-px text-transparent transition-colors duration-200 ease-in-out before:inline-block before:size-4.5 before:translate-x-0 before:transform before:rounded-full before:border before:border-gray-200 before:bg-white before:ring-0 before:transition before:duration-200 before:ease-in-out checked:border-black-900 checked:bg-none checked:text-black-900 checked:before:translate-x-[130%] checked:before:border-white checked:before:bg-white disabled:pointer-events-none"
                type="checkbox"
                {...register(`haveCompanyAttndeeDetail`, {
                  required: false,
                  onChange: (e) => {
                    handleToggleCompay_Change(`haveCompanyAttndeeDetail`);
                  },
                })}
              />
              <label
                htmlFor={`ca25Form_HaveCompanyAttndeeDetail`}
                className="sr-only"
              >
                switch
              </label>
            </div>
          ) : null}
        </div>
      ) : null}

      <div className={`supports-grid:grid`}>
        <div className="mb-4 block">
          <Label
            forId={`ca25Form_CompanyAttndeeDetail`}
            label="Company Name"
            required={watch && !forms?.selfEdited}
          />
          <Input
            id={`ca25Form_CompanyAttndeeDetail`}
            type="text"
            placeholder=""
            ariaLabel={`Company Attendee - Detail`}
            disabled={!watch && !forms?.selfEdited}
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
        {watch ? (
          <>
            <div className="grid-cols-1 gap-x-4 gap-y-4 supports-grid:grid sm:grid-cols-2">
              <div className={`block`}>
                <Label
                  forId={`ca25Form_WebsiteUrlAttndeeDetail`}
                  label="Company Website"
                  required={watch && !forms?.selfEdited}
                />
                <Input
                  id={`ca25Form_WebsiteUrlAttndeeDetail`}
                  type="text"
                  placeholder={`Include http:// or https://`}
                  ariaLabel="Website Billing - Detail"
                  disabled={!watch && !forms?.selfEdited}
                  config={{
                    ...register(`websiteUrlAttndeeDetail`, {
                      required: watch && !forms?.selfEdited,
                      maxLength: 255,
                      pattern: {
                        value: /^(https?:\/\/[^\s/$.?#].[^\s]*)$|^N\/A$|^-$/,
                        message: 'Please enter a valid URL',
                      },
                    }),
                  }}
                  errors={errors[`websiteUrlAttndeeDetail`]}
                />
              </div>
              <div
                className={`"block ${errors[`jobPositionAttndeeDetail`] ? 'error' : ''} ${(watch && !forms?.selfEdited) || forms?.isSubmited === false ? '' : 'disabled'}`}
              >
                <Label
                  forId={`ca25Form_JobPositionAttndeeDetail`}
                  label="Position"
                  required={watch && !forms?.selfEdited}
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
                      required: watch && !forms?.selfEdited,
                    }),
                  }}
                />
              </div>
            </div>
            <div className="mt-4 grid-cols-1 gap-x-4 gap-y-4 supports-grid:grid sm:grid-cols-2">
              <div
                className={`block ${errors[`companyFocusAttndeeDetail`] ? 'error' : ''} ${(watch && !forms?.selfEdited) || forms?.isSubmited === false ? '' : 'disabled'}`}
              >
                <Label
                  forId={`ca25Form_CompanyFocusAttndeeDetail`}
                  label="Company Focus"
                  required={watch && !forms?.selfEdited}
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
                      required: watch && !forms?.selfEdited,
                    }),
                  }}
                />
              </div>
              <div
                className={`"block ${errors[`companySizeAttndeeDetail`] ? 'error' : ''} ${(watch && !forms?.selfEdited) || forms?.isSubmited === false ? '' : 'disabled'}`}
              >
                <Label
                  forId={`ca25Form_CompanySizeAttndeeDetail`}
                  label="Company Size"
                  required={watch && !forms?.selfEdited}
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
                      required: watch && !forms?.selfEdited,
                    }),
                  }}
                />
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default AttendeeDetailUpdate;
