import React, { useEffect, useCallback } from 'react';
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
  // @hook(preline)
  const handleIntzPreline = useCallback(async () => {
    await import('preline/preline');
    if (window.HSStaticMethods) {
      window.HSStaticMethods.autoInit();
    }
  }, [watch]);
  useEffect(() => {
    handleIntzPreline();
  }, [handleIntzPreline]);

  // @handle(company toggle change)
  const handleToggleCompay_Change = (d) => {
    const isTrue = getValues(d) === true;
    const fieldsToSet = {
      [`websiteUrlAttndee${items?.attendee}_${items?.group}`]: isTrue
        ? ''
        : 'N/A',
      [`companyAttndee${items?.attendee}_${items?.group}`]: isTrue ? '' : 'N/A',
      [`jobPositionAttndee${items?.attendee}_${items?.group}`]: isTrue
        ? ''
        : '',
      [`companyFocusAttndee${items?.attendee}_${items?.group}`]: isTrue
        ? ''
        : '',
      [`companySizeAttndee${items?.attendee}_${items?.group}`]: isTrue
        ? ''
        : '',
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
            forId={`ca25Form_FirstnameAttndee${items?.attendee}_${items?.group}Checkout`}
            label="Firstname"
            required={true}
          />
          <Input
            id={`ca25Form_FirstnameAttndee${items?.attendee}_${items?.group}Checkout`}
            type="text"
            name={`firstnameAttndee${items?.attendee}_${items?.group}`}
            placeholder=""
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
            placeholder=""
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
          helpText="Enter the attendee's correct email to avoid issues!"
          required={true}
        />
        <Input
          id={`ca25Form_EmailAttndee${items?.attendee}_${items?.group}Checkout`}
          type="email"
          placeholder=""
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
            name={`dialcode-phoneAttende${items?.attendee}_${items?.group}`}
            control={control}
            disabled={forms?.isSubmited === true ? true : false}
            render={({ field }) => (
              <PhoneInput
                {...field}
                country={forms?.ipAddress}
                onChange={(value, phone) => {
                  setValue(
                    `dialcode-phoneAttndee${items?.attendee}_${items?.group}`,
                    value,
                    { shouldValidate: true }
                  );
                  setValue(
                    `phoneAttndee${items?.attendee}_${items?.group}`,
                    value,
                    {
                      shouldValidate: true,
                    }
                  );
                }}
                inputProps={{
                  required: false,
                  name: `dialcode-phoneAttndee${items?.attendee}_${items?.group}`,
                  maxLength: 18,
                }}
                containerClass="w-full"
                inputClass={`ca25Form_PhoneInput ${errors[`phoneAttndee${items?.attendee}_${items?.group}`] && 'errors'}`}
                buttonClass={`ca25Form_PhoneInputBtn ${errors[`phoneAttndee${items?.attendee}_${items?.group}`] && 'errors'}`}
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
            id={`ca25Form_PhoneAttende${items?.attendee}_${items?.group}Checkout`}
            type="text"
            placeholder="Eg: 081823124213"
            ariaLabel="Phone Number - Attendee Checkout"
            disabled={forms?.isSubmited === true ? true : false}
            hidden={true}
            config={{
              ...register(`phoneAttndee${items?.attendee}_${items?.group}`, {
                value: getValues(
                  `phoneAttndee${items?.attendee}_${items?.group}`
                ),
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
            label="Telegram Username (Optional)"
            required={false}
          />
          <Input
            id={`ca25Form_TelegramAccountAttndee${items?.attendee}_${items?.group}Checkout`}
            addClassName="lowercase"
            type="text"
            placeholder=""
            ariaLabel={`Telegram Account Attendee${items?.attendee}_${items?.group} - Checkout`}
            disabled={forms?.isSubmited === true ? true : false}
            config={{
              ...register(
                `telegramAccountAttndee${items?.attendee}_${items?.group}`,
                {
                  required: false,
                  maxLength: 55,
                  pattern: {
                    value: /^([a-zA-Z][a-zA-Z0-9_\.]{2,55})$/,
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
        className={`"block ${errors[`countryAttndee${items?.attendee}_${items?.group}`] ? 'error' : ''} ${forms?.isSubmited === false ? '' : 'disabled'}`}
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
          values={`countryAttndee${items?.attendee}_${items?.group}`}
          setValue={setValue}
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
          values={`whatTypeConnectionNetworkingAttndee${items?.attendee}_${items?.group}`}
          setValue={setValue}
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
          widthPlaceholder={true}
          listSelect={
            forms?.fieldForm !== undefined
              ? forms?.fieldForm[7].fields?.[0].options
              : []
          }
          values={`didYouHearAboutAttndee${items?.attendee}_${items?.group}`}
          setValue={setValue}
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
                defaultChecked
                // checked={
                //   watch || items?.isToggle[items?.product][items?.productItems]
                // }
                {...register(
                  `haveCompanyAttndee${items?.attendee}_${items?.group}`,
                  {
                    required: false,
                    onChange: (e) => {
                      onChangeToggle(items?.product, items?.productItems);
                      handleToggleCompay_Change(
                        `haveCompanyAttndee${items?.attendee}_${items?.group}`
                      );
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
              {`Use the company details that correspond with the attendee`}
            </span>
          </div>
          {children}
        </div>

        <div className="mb-4 block">
          <Label
            forId={`ca25Form_CompanyAttndee${items?.attendee}_${items?.group}Checkout`}
            label="Company Name"
            required={watch}
          />
          <Input
            id={`ca25Form_CompanyAttndee${items?.attendee}_${items?.group}Checkout`}
            type="text"
            placeholder=""
            ariaLabel={`Company Attendee${items?.attendee}_${items?.group} - Checkout`}
            disabled={watch ? false : true}
            config={{
              ...register(`companyAttndee${items?.attendee}_${items?.group}`, {
                required: watch === true ? true : false,
                maxLength: 80,
                pattern: {
                  value: /^(N\/A|[a-zA-Z0-9\s-_]{2,80})$/,
                },
              }),
            }}
            errors={errors[`companyAttndee${items?.attendee}_${items?.group}`]}
          />
        </div>
        {watch ? (
          <>
            <div className="grid-cols-1 gap-x-4 gap-y-4 supports-grid:grid sm:grid-cols-2">
              <div className="block">
                <Label
                  forId={`ca25Form_WebsiteUrlAttndee${items?.attendee}_${items?.group}Checkout`}
                  label="Company Website"
                  required={watch}
                />
                <Input
                  id={`ca25Form_WebsiteUrlAttndee${items?.attendee}_${items?.group}Checkout`}
                  type="text"
                  placeholder={`Include http:// or https://`}
                  ariaLabel="Website Billing - Checkout"
                  disabled={watch ? false : true}
                  config={{
                    ...register(
                      `websiteUrlAttndee${items?.attendee}_${items?.group}`,
                      {
                        required: watch,
                        maxLength: 255,
                        pattern: {
                          value:
                            /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\w\d\-.\/]*)*\/?$|^N\/A$|^-$/,
                          message: 'Please enter a valid URL',
                        },
                      }
                    ),
                  }}
                  errors={
                    errors[
                      `websiteUrlAttndee${items?.attendee}_${items?.group}`
                    ]
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
                  label=""
                  widthPlaceholder={false}
                  listSelect={
                    forms?.fieldForm !== undefined &&
                    forms?.fieldForm[4].fields[1].options
                  }
                  withSearch={true}
                  values={`jobPositionAttndee${items?.attendee}_${items?.group}`}
                  setValue={setValue}
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
                  widthPlaceholder={false}
                  listSelect={
                    forms?.fieldForm !== undefined &&
                    forms?.fieldForm[5].fields[0].options
                  }
                  withSearch={true}
                  values={`companyFocusAttndee${items?.attendee}_${items?.group}`}
                  setValue={setValue}
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
                  label=""
                  widthPlaceholder={false}
                  listSelect={
                    forms?.fieldForm !== undefined &&
                    forms?.fieldForm[5].fields[1].options
                  }
                  values={`companySizeAttndee${items?.attendee}_${items?.group}`}
                  setValue={setValue}
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
          </>
        ) : null}
      </div>
    </>
  );
};

export default AttendeeDetailCheckouts;
