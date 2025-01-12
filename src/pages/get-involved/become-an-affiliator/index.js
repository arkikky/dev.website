import React, { useState, useEffect, useCallback } from 'react';
import DOMPurify from 'dompurify';
import { useRouter } from 'next/router';
import { useForm, Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import getConfig from 'next/config';

// # @get .config
const { serverRuntimeConfig } = getConfig();

// @style
import 'react-phone-input-2/lib/high-res.css';

// @lib/controller & helper
import { getFetchUrl } from '@lib/controller/API';
import { getFecthHbSpt, submitFormHbSpt } from '@lib/controller/HubSpot';

// @components
import HeadGraphSeo from '@components/Head';

// @forms
import Label from '@components/UI/Form/Label';
import Input from '@components/UI/Form/Input';
import Textarea from '@components/UI/Form/Textarea';
import Select from '@components/UI/Form/Select';
import SelectCountry from '@components/UI/Form/SelectCountry';

// @layouts
import PartnershipLayouts from '@layouts/PartnershipLayouts';

const BecomeAnAffiliator = ({
  mode,
  groupLabel = 'Affiliator',
  ipAddress,
  country,
  forms,
}) => {
  const router = useRouter();
  const [isForms, setForms] = useState({
    ipAddress: ipAddress || [],
    fields: forms || [],
    country: country || [],
  });

  const {
    watch,
    register,
    control,
    formState: { errors, isValid, isSubmitting },
    handleSubmit,
    getValues,
    setValue,
    reset,
  } = useForm({
    mode: 'all',
  });
  const submittingInquiry = watch(
    'are_you_submitting_this_inquiry_on_behalf_of_yourself_or_a_company_'
  );

  // @hook(preline)
  const handleIntzPreline = useCallback(async () => {
    await import('preline/preline');
    if (window.HSStaticMethods) {
      window.HSStaticMethods.autoInit();
    }
  }, [submittingInquiry]);
  useEffect(() => {
    handleIntzPreline();
  }, [handleIntzPreline]);

  // @submit
  const onSubmit = async (data) => {
    const sntzeFld = (field) => DOMPurify.sanitize(field || '').trim();
    const d = {
      fields: [
        {
          name: 'firstname',
          value: sntzeFld(data?.firstname),
        },
        {
          name: 'lastname',
          value: sntzeFld(data?.lastname),
        },
        {
          name: 'email',
          value: sntzeFld(data?.email),
        },
        {
          name: 'phone',
          value: sntzeFld(`${data?.phone}${groupLabel}`),
        },
        {
          name: 'telegram_username',
          value: sntzeFld(
            data?.telegram_username !== '' ? data?.telegram_username : '-'
          ),
        },
        {
          name: 'country',
          value: sntzeFld(
            `${data?.country}${groupLabel}` !== null
              ? `${data?.country}${groupLabel}`
              : '-'
          ),
        },
        {
          name: 'are_you_submitting_this_inquiry_on_behalf_of_yourself_or_a_company_',
          value: sntzeFld(
            data?.are_you_submitting_this_inquiry_on_behalf_of_yourself_or_a_company_
          ),
        },
        {
          name: 'company',
          value: sntzeFld(
            data?.are_you_submitting_this_inquiry_on_behalf_of_yourself_or_a_company_ ===
              'Company'
              ? `${data?.company}${groupLabel}`
              : '-'
          ),
        },
        {
          name: 'company_focus',
          value: sntzeFld(
            data?.are_you_submitting_this_inquiry_on_behalf_of_yourself_or_a_company_ ===
              'Company'
              ? `${data?.company_focus}${groupLabel}`
              : '-'
          ),
        },
        {
          name: 'company_website',
          value: sntzeFld(
            data?.are_you_submitting_this_inquiry_on_behalf_of_yourself_or_a_company_ ===
              'Company'
              ? data?.company_website
              : '-'
          ),
        },
        {
          name: 'tell_us_about_your_audience_and_who_do_you_aim_to_reach_',
          value: sntzeFld(
            data?.tell_us_about_your_audience_and_who_do_you_aim_to_reach_ !==
              ''
              ? data?.tell_us_about_your_audience_and_who_do_you_aim_to_reach_
              : '-'
          ),
        },
        {
          name: 'what_platforms_do_you_use_to_engage_with_your_audience__select_all_that_apply',
          value: sntzeFld(
            data?.what_platforms_do_you_use_to_engage_with_your_audience__select_all_that_apply.join(
              ';'
            )
          ),
        },
        {
          name: 'please_provide_the_links_to_your_platforms_here',
          value: sntzeFld(
            data?.please_provide_the_links_to_your_platforms_here !== ''
              ? data?.please_provide_the_links_to_your_platforms_here
              : '-'
          ),
        },
      ],
      context: {
        pageUri: 'https://coinfest.asia/get-involved/become-an-affiliator',
        pageName: '2025 Become An Affiliator | Coinfest Asia 2025',
        ipAddress: ipAddress?.ip,
      },
    };
    const k = '24512342-b546-4e92-a869-8b2c9c2bb3dc';
    const rs = await submitFormHbSpt(d, k);

    // @debug
    // console.log(d);
    if (rs === true) {
      reset();
      router.replace('/get-involved/become-an-affiliator/success');
    }
  };

  return (
    <>
      {/* @head */}
      <HeadGraphSeo title={`Become An Affiliator`} otherPage={true} />

      {/* @main */}
      <PartnershipLayouts
        title={'COINFEST ASIA 2025 BECOME AN AFFILIATOR'
          ?.split(' ')
          .map((w, i) =>
            w
              .split('')
              .map((chr, chrI) =>
                ['E', 'Y', 'O', '0'].includes(chr) ? (
                  <span key={`${i}-${chrI}`}>{chr}</span>
                ) : (
                  chr
                )
              )
          )
          .reduce(
            (acc, curr, i) => (i === 0 ? curr : [...acc, ' ', ...curr]),
            []
          )}
        shortDesc={`Earn rewards and grow your influence by promoting the world's largest crypto festival.`}
        backUrl={`/get-involved`}
        mode={mode}
      >
        <form
          id="formAffiliator"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
          className="relative mt-0 flex flex-col space-y-5 sm:mt-8"
        >
          <div
            className={`absolute inset-x-0 inset-y-0 bg-white/60 opacity-100 backdrop-blur-[2px] ${isSubmitting ? 'pointer-events-auto z-[15] select-auto' : '!pointer-events-auto -z-px !select-auto'}`}
          ></div>

          <div className="grid-cols-1 gap-x-4 gap-y-4 last:mb-0 supports-grid:grid sm:grid-cols-2">
            <div className="block">
              <Label
                forId={`ca25Form_Firstname${groupLabel}`}
                label="Firstname"
                required={true}
              />
              <Input
                id={`ca25Form_Firstname${groupLabel}`}
                type="text"
                name={`firstname`}
                placeholder="Eg: Alexander"
                ariaLabel={`Firstname`}
                disabled={isSubmitting}
                config={{
                  ...register(`firstname`, {
                    required: true,
                    maxLength: 120,
                    pattern: {
                      value: /^[a-zA-Z0-9\s-_]{2,120}$/,
                    },
                  }),
                }}
                errors={errors[`firstname`]}
              />
            </div>
            <div className="block">
              <Label
                forId={`ca25Form_Lastname${groupLabel}`}
                label="Lastname"
                required={true}
              />
              <Input
                id={`ca25Form_Lastname${groupLabel}`}
                type="text"
                name={`lastname`}
                placeholder="Eg: Alexander"
                ariaLabel={`Lastname`}
                disabled={isSubmitting}
                config={{
                  ...register(`lastname`, {
                    required: true,
                    maxLength: 120,
                    pattern: {
                      value: /^[a-zA-Z0-9\s-_]{2,120}$/,
                    },
                  }),
                }}
                errors={errors[`lastname`]}
              />
            </div>
          </div>
          <div className="mb-4 grid-cols-1 gap-x-4 gap-y-4 last:mb-0 supports-grid:grid sm:grid-cols-2">
            <div className="block">
              <Label
                forId={`ca25Form_Email${groupLabel}`}
                label="Email"
                required={true}
              />
              <Input
                id={`ca25Form_Email${groupLabel}`}
                type="email"
                placeholder="Eg: example@email.com"
                ariaLabel={`Email ${groupLabel}`}
                disabled={isSubmitting}
                config={{
                  ...register(`email`, {
                    required: true,
                    maxLength: 120,
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    },
                  }),
                }}
                errors={errors[`email`]}
              />
            </div>
            <div className="block">
              <Label
                forId={`ca25Form_Phone${groupLabel}`}
                label={`Phone Number`}
                required={true}
              />
              <Controller
                name={`dialcode-phone${groupLabel}`}
                control={control}
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    onChange={(value, phone) => {
                      setValue(`dialcode-phone${groupLabel}`, value, {
                        shouldValidate: true,
                      });
                      setValue(`phone${groupLabel}`, value, {
                        shouldValidate: true,
                      });
                    }}
                    inputProps={{
                      required: false,
                      name: `dialcode-phone${groupLabel}`,
                      autoFocus: false,
                      maxLength: 18,
                    }}
                    containerClass="w-full"
                    inputClass={`ca25Form_PhoneInput ${
                      errors[`phone${groupLabel}`] && 'errors'
                    }`}
                    buttonClass={`ca25Form_PhoneInputBtn ${
                      errors[`phone${groupLabel}`] && 'errors'
                    }`}
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
                id={`ca25Form_Phone${groupLabel}`}
                type="text"
                placeholder="Eg: 081823124213"
                ariaLabel={`Phone Number - ${groupLabel}`}
                hidden={true}
                config={{
                  ...register(`phone${groupLabel}`, {
                    value: getValues(`phone${groupLabel}`),
                    required: true,
                    maxLength: 18,
                    pattern: {
                      value: /^.{5,}/,
                    },
                  }),
                }}
              />
              <span className="mt-1 block text-balance pr-8 text-xs leading-[18px] text-gray-400">
                Kindly provide your number connected to WhatsApp
              </span>
            </div>
          </div>
          <div className="mb-4 mt-4 grid-cols-1 gap-x-4 gap-y-4 last:mb-0 supports-grid:grid sm:grid-cols-2">
            <div
              className={`"block ${errors[`country${groupLabel}`] && 'error'}`}
            >
              <Label
                forId={`ca25Form_Country_${groupLabel}`}
                label="Country"
                required={true}
              />
              <SelectCountry
                id={`ca25Form_Country_${groupLabel}`}
                ariaLabel={`Country - Affiliator Forms`}
                listSelect={isForms?.country}
                withIcons={true}
                values={`country${groupLabel}`}
                setValue={setValue}
                config={{
                  ...register(`country${groupLabel}`, {
                    required: 'Please select a country',
                  }),
                }}
              />
            </div>
            <div className="block">
              <Label
                forId={`ca25Form_Telegram${groupLabel}`}
                label="Telegram Username"
                required={true}
              />
              <Input
                id={`ca25Form_Telegram${groupLabel}`}
                type="text"
                name={`telegram_username`}
                placeholder="Eg: doealex"
                ariaLabel={`Lastname - ${groupLabel}`}
                config={{
                  ...register(`telegram_username`, {
                    required: true,
                    maxLength: 120,
                    pattern: {
                      value: /^@([a-zA-Z][a-zA-Z0-9_\.]{2,55})$/,
                    },
                  }),
                }}
                errors={errors[`telegram_username`]}
              />
            </div>
          </div>

          <div className="mt-4 flex flex-col last:mb-0">
            <Label
              forId={`ca25Form_SubmittingInquiry${groupLabel}`}
              label="Are you submitting this inquiry on behalf of yourself or a company?"
              required={true}
            />
            <div className="mt-2 grid space-y-3">
              {isForms?.fields[4].fields[0].options?.map((rslt, i) => (
                <div className="space-y-3" key={i}>
                  <label
                    htmlFor={`radioSubmittingInquiry${groupLabel}${rslt?.name}${i}`}
                    className={`flex w-full cursor-pointer items-center`}
                  >
                    <input
                      id={`radioSubmittingInquiry${groupLabel}${rslt?.name}${i}`}
                      type="radio"
                      className={`boxShadow-none form-radio pointer-events-none mt-px h-4.5 w-4.5 shrink-0 rounded-full border border-solid ${
                        errors[
                          `are_you_submitting_this_inquiry_on_behalf_of_yourself_or_a_company_`
                        ]
                          ? 'border-red-500'
                          : 'border-gray-500/20'
                      } bg-transparent text-primary outline-none ring-0 focus:outline-none focus-visible:outline-none`}
                      name={`radioSubmittingInquiry${groupLabel}${rslt?.name}`}
                      value={rslt?.value}
                      {...register(
                        'are_you_submitting_this_inquiry_on_behalf_of_yourself_or_a_company_',
                        {
                          required: true,
                        }
                      )}
                    />
                    <span className="ml-3 text-sm font-normal text-black-900">
                      {rslt?.label}
                    </span>
                  </label>
                </div>
              ))}
            </div>

            {submittingInquiry === 'Company' ? (
              <>
                <div className="mt-4 grid-cols-1 gap-x-4 gap-y-4 supports-grid:grid sm:grid-cols-2">
                  <div className="block">
                    <Label
                      forId={`ca25Form_Company${groupLabel}`}
                      label="Company name"
                      required={true}
                    />
                    <Input
                      id={`ca25Form_Company${groupLabel}`}
                      type="text"
                      name={`company${groupLabel}`}
                      placeholder=""
                      ariaLabel={`Company Name - ${groupLabel}`}
                      config={{
                        ...register(`company${groupLabel}`, {
                          required: true,
                          maxLength: 120,
                          pattern: {
                            value: /^[a-zA-Z0-9\s-_]{2,120}$/,
                          },
                        }),
                      }}
                      errors={errors[`company${groupLabel}`]}
                    />
                  </div>
                  <div
                    className={`"block ${
                      errors[`companyFocus${groupLabel}`] && 'error'
                    }`}
                  >
                    <Label
                      forId={`ca25Form_CompanyFocus${groupLabel}`}
                      label="Company Focus"
                      required={true}
                    />
                    <Select
                      id={`ca25Form_CompanyFocus${groupLabel}`}
                      ariaLabel={`CompanyFocus ${groupLabel}`}
                      label="Choose a Company Focus..."
                      withSearch={true}
                      listSelect={
                        isForms?.fields[4]?.fields[0].dependentFieldFilters[1]
                          ?.dependentFormField?.options
                      }
                      values={`companyFocus${groupLabel}`}
                      setValue={setValue}
                      config={{
                        ...register(`companyFocus${groupLabel}`, {
                          required: 'Please select a jobtitle Affiliator',
                        }),
                      }}
                    />
                  </div>
                </div>
                <div className="mt-4 block">
                  <Label
                    forId={`ca25Form_CompanyWebsite${groupLabel}`}
                    label="Please provide the links to your platforms here"
                    required={true}
                  />
                  <Input
                    id={`ca25Form_CompanyWebsite${groupLabel}`}
                    type="url"
                    placeholder={``}
                    ariaLabel="Provice Link Platforms Affiliator"
                    config={{
                      ...register(`company_website${groupLabel}`, {
                        required: true,
                        maxLength: 255,
                        pattern: {
                          value:
                            /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\w\d\-.\/]*)*\/?$|^N\/A$|^-$/,
                          message: 'Please enter a valid URL',
                        },
                      }),
                    }}
                    errors={errors[`company_website${groupLabel}`]}
                  />
                </div>
              </>
            ) : null}
          </div>
          <div className="block">
            <Label
              forId={`ca25Form_TellUsAboutYourAudience${groupLabel}`}
              label="Tell us about your audience and who do you aim to reach?"
              required={true}
            />
            <Textarea
              id="textarea-label"
              className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              rows="5"
              placeholder="Describe your audience type, audience size, demographics, engagement metrics, and who you aim to reach."
              config={{
                ...register(
                  `tell_us_about_your_audience_and_who_do_you_aim_to_reach_`,
                  {
                    required: true,
                    maxLength: 550,
                    pattern: {
                      value: /^[a-zA-Z0-9\s-_]{2,120}$/,
                    },
                  }
                ),
              }}
              errors={
                errors[
                  `tell_us_about_your_audience_and_who_do_you_aim_to_reach_`
                ]
              }
            />
          </div>
          <div className="flex flex-col">
            <Label
              forId={`ca25Form_PlatformsAudience${groupLabel}`}
              label="In Coinfest Asia 2025, we are interested in?"
              required={true}
            />
            <div className="mt-2 grid space-y-4">
              {isForms?.fields[6].fields[0].options?.map((rslt, i) => (
                <label
                  htmlFor={`ca25Form_PlatformsAudience${groupLabel}${i}`}
                  className={`flex w-full cursor-pointer items-center`}
                  key={i}
                >
                  <input
                    type="checkbox"
                    id={`ca25Form_PlatformsAudience${groupLabel}${i}`}
                    className={`boxShadow-none form-checkbox pointer-events-none mt-px h-4.5 w-4.5 shrink-0 rounded border border-solid ${
                      errors[
                        `what_platforms_do_you_use_to_engage_with_your_audience__select_all_that_apply`
                      ]
                        ? 'border-red-500'
                        : 'border-gray-500/20'
                    } bg-transparent text-primary outline-none ring-0 focus:outline-none focus-visible:outline-none`}
                    name={`ca25Form_PlatformsAudience${groupLabel}[]`}
                    value={rslt?.value}
                    {...register(
                      'what_platforms_do_you_use_to_engage_with_your_audience__select_all_that_apply',
                      {
                        required: true,
                      }
                    )}
                  />

                  <span className="ml-3 text-sm font-normal text-black-900">
                    {rslt?.label}
                  </span>
                </label>
              ))}
            </div>
          </div>
          <div className="block">
            <Label
              forId={`ca25Form_ProvideLinkPlatform${groupLabel}`}
              label="Please provide the links to your platforms here"
              required={true}
            />
            <Input
              id={`ca25Form_ProvideLinkPlatform${groupLabel}`}
              type="url"
              placeholder={`Enter the URLs for the platforms selected above (e.g. https://x.com/example).`}
              ariaLabel="Provice Link Platforms Affiliator"
              config={{
                ...register(`please_provide_the_links_to_your_platforms_here`, {
                  required: true,
                  maxLength: 255,
                  pattern: {
                    value:
                      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\w\d\-.\/]*)*\/?$|^N\/A$|^-$/,
                    message: 'Please enter a valid URL',
                  },
                }),
              }}
              errors={errors[`please_provide_the_links_to_your_platforms_here`]}
            />
          </div>

          {/* @submit */}
          <div className="z-[18] flex flex-col">
            <button
              id="ca25Submit-Affiliator"
              type="submit"
              className={`mt-6 flex w-full flex-col items-center justify-center rounded-[14px] bg-black-900 py-6 text-base font-normal text-white outline-none transition duration-[0.3] ease-in-out focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-black-900`}
              aria-label="Submit Affiliator Forms"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex flex-row items-center">
                  <svg
                    className="mr-3 h-5 w-5 animate-spin text-black-900"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="3"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    ></path>
                  </svg>
                  Processing ...
                </span>
              ) : (
                'Submit'
              )}
            </button>
          </div>
        </form>
      </PartnershipLayouts>
    </>
  );
};

BecomeAnAffiliator.getLayout = (page, { pageProps }) => {
  const { mode } = pageProps;
  return page;
};
export const getStaticProps = async () => {
  try {
    const [rsIpAddress, rsCountry, rsForms] = await Promise.all([
      getFetchUrl(
        `https://ipinfo.io/json?token=${serverRuntimeConfig?.ipAddress_token}`
      ),
      getFetchUrl(`https://restcountries.com/v3.1/all?fields=name,flags`),
      getFecthHbSpt(`/forms/v2/forms/24512342-b546-4e92-a869-8b2c9c2bb3dc`),
    ]);

    return {
      props: {
        mode: 'light',
        ipAddress: rsIpAddress || [],
        country: rsCountry || [],
        forms: rsForms?.formFieldGroups || [],
      },
      revalidate: 900,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
export default BecomeAnAffiliator;
