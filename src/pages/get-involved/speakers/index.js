import React, { useState } from 'react';
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
import { getReduceArray } from '@lib/helper/Configuration';
import { getFecthHbSpt, submitFormHbSpt } from '@lib/controller/HubSpot';

// @components
import HeadGraphSeo from '@components/Head';

// @forms
import Label from '@components/UI/Form/Label';
import Input from '@components/UI/Form/Input';
import Select from '@components/UI/Form/Select';
import SelectCountry from '@components/UI/Form/SelectCountry';

// @layouts
import PartnershipLayouts from '@layouts/PartnershipLayouts';

const Speakers = ({ mode, ipAddress, country, forms }) => {
  const router = useRouter();
  const [isForms, setForms] = useState({
    address: ipAddress || [],
    fields: forms || [],
    country: country || [],
  });

  const {
    watch,
    register,
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
    getValues,
    setValue,
    reset,
  } = useForm({
    mode: 'all',
  });
  const whatTopic = watch(
    'what_topics_are_you_most_able_to_speak_to_authoritatively'
  );

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
          value: sntzeFld(data?.phone),
        },
        {
          name: 'country',
          value: sntzeFld(
            data?.countrySpeakers !== null ? data?.countrySpeakers : '-'
          ),
        },
        {
          name: 'what_role_would_you_like_to_fill_in_',
          value: sntzeFld(
            data?.what_role_would_you_like_to_fill_in_ !== null
              ? data?.what_role_would_you_like_to_fill_in_
              : '-'
          ),
        },
        {
          name: 'what_topics_are_you_most_able_to_speak_to_authoritatively',
          value: sntzeFld(
            data?.what_topics_are_you_most_able_to_speak_to_authoritatively !==
              null
              ? data?.what_topics_are_you_most_able_to_speak_to_authoritatively
              : '-'
          ),
        },
        {
          name: 'if_you_choose__other___tell_us_what_s_in_your_mind',
          value: sntzeFld(
            whatTopic === 'Other'
              ? data?.if_you_choose__other___tell_us_what_s_in_your_mind
              : '-'
          ),
        },
        {
          name: 'company',
          value: sntzeFld(data?.company !== '' ? data?.company : '-'),
        },
        {
          name: 'company_focus',
          value: sntzeFld(
            data?.companyFocusSpeakers !== null
              ? data?.companyFocusSpeakers
              : '-'
          ),
        },
        {
          name: 'job_title_position',
          value: sntzeFld(
            data?.jobtitleSpeakers !== null ? data?.jobtitleSpeakers : '-'
          ),
        },
        {
          name: 'website',
          value: sntzeFld(
            data?.company_website !== '' ? data?.company_website : '-'
          ),
        },
        {
          name: 'linkedin_profile',
          value: sntzeFld(
            data?.linkedin_profile !== '' ? data?.linkedin_profile : '-'
          ),
        },
        {
          name: 'twitterhandle',
          value: sntzeFld(
            data?.twitterhandle !== '' ? data?.twitterhandle : '-'
          ),
        },
        {
          name: 'telegram_username',
          value: sntzeFld(
            data?.telegram_username !== '' ? data?.telegram_username : '-'
          ),
        },
      ],
      context: {
        pageUri: 'https://coinfest.asia/get-involved/speakers',
        pageName: '2025 Speakers | Coinfest Asia 2025',
        ipAddress: isForms?.address?.ip,
      },
    };
    const k = '0568d957-8627-4939-8e88-82bbb8c53e52';
    const rs = await submitFormHbSpt(d, k);

    // @debug
    // console.log(d);
    if (rs === true) {
      reset();
      router.replace('/get-involved/speakers/success');
    }
  };

  return (
    <>
      {/* @head */}
      <HeadGraphSeo title={`Speakers`} otherPage={true} />

      {/* @main */}
      <PartnershipLayouts
        title={'COINFEST ASIA 2025 SPEAKER SUBMISSION'
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
        shortDesc={
          'Show and tell your impact-driven ideas, not just theories, on experiential stages.'
        }
        backUrl={`/get-involved`}
        mode={mode}
      >
        <form
          id="formSpeakers"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
          className="relative mt-0 flex flex-col space-y-5"
        >
          <div
            className={`absolute inset-x-0 inset-y-0 bg-white/60 opacity-100 backdrop-blur-[2px] ${isSubmitting ? 'pointer-events-auto z-[15] select-auto' : '!pointer-events-auto -z-px !select-auto'}`}
          ></div>

          <div className="mt-0 grid-cols-1 gap-x-4 gap-y-4 last:mb-0 supports-grid:grid sm:grid-cols-2">
            <div className="block">
              <Label
                forId={`ca25Form_FirstnameSpeakers`}
                label="First name"
                required={true}
              />
              <Input
                id={`ca25Form_FirstnameSpeakers`}
                type="text"
                name={`firstname`}
                placeholder=""
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
                forId={`ca25Form_LastnameSpeakers`}
                label="Last name"
                required={true}
              />
              <Input
                id={`ca25Form_LastnameSpeakers`}
                type="text"
                name={`lastname`}
                placeholder=""
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
                forId={`ca25Form_EmailSpeakers`}
                label="Email"
                required={true}
              />
              <Input
                id={`ca25Form_EmailSpeakers`}
                type="email"
                placeholder=""
                ariaLabel={`Email Speakers`}
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
                forId={`ca25Form_PhoneSpeakers`}
                label={`Phone number`}
                required={true}
              />
              <Controller
                name={`dialcode-phoneSpeakers`}
                control={control}
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    country={'id'}
                    onChange={(value, phone) => {
                      setValue(`dialcode-phoneSpeakers`, value, {
                        shouldValidate: true,
                      });
                      setValue(`phone`, value, { shouldValidate: true });
                    }}
                    inputProps={{
                      required: false,
                      name: `dialcode-phoneSpeakers`,
                      maxLength: 18,
                    }}
                    containerClass="w-full"
                    inputClass={`ca25Form_PhoneInput ${
                      errors[`phone`] && 'errors'
                    }`}
                    buttonClass={`ca25Form_PhoneInputBtn ${
                      errors[`phone`] && 'errors'
                    }`}
                    dropdownClass="ca25Form_PhoneInputDropdown"
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
                id={`ca25Form_PhoneSpeakers`}
                type="text"
                placeholder=""
                ariaLabel="Phone Number - Attendee Checkout"
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
              <span className="mt-1 block text-balance pr-8 text-xs leading-[18px] text-gray-400">
                Kindly provide your number connected to WhatsApp
              </span>
            </div>
          </div>
          {isForms?.fields && (
            <>
              <div className={`"block ${errors[`countrySpeakers`] && 'error'}`}>
                <Label
                  forId={`ca25Form_Country_Speakers`}
                  label="Country"
                  required={true}
                />
                <SelectCountry
                  id={`ca25Form_Country_Speakers`}
                  ariaLabel={`Country - Speakers Forms`}
                  widthPlaceholder={false}
                  listSelect={isForms?.country}
                  withIcons={true}
                  values={`countrySpeakers`}
                  setValue={setValue}
                  config={{
                    ...register(`countrySpeakers`, {
                      required: 'Please select a country',
                    }),
                  }}
                />
              </div>
              <div className="mb-6 flex flex-col last:mb-0">
                <Label
                  forId={`ca25Form_WhouldYouLikeSpeakers`}
                  label="What role would you like to fill in?"
                  required={true}
                />
                <div className="mt-2 grid space-y-3">
                  {isForms?.fields[0]?.options?.map((rslt, i) => (
                    <div className="space-y-2" key={i}>
                      <label
                        htmlFor={`radioWouldYouLikeSpeakers${rslt?.name}${i}`}
                        className={`flex w-full cursor-pointer items-center`}
                      >
                        <input
                          id={`radioWouldYouLikeSpeakers${rslt?.name}${i}`}
                          type="radio"
                          className={`boxShadow-none form-radio pointer-events-none mt-px h-4.5 w-4.5 shrink-0 rounded-full border border-solid bg-transparent ${
                            errors[`what_role_would_you_like_to_fill_in_`]
                              ? 'border-red-500'
                              : 'border-gray-500/20'
                          } text-primary outline-none ring-0 focus:outline-none focus-visible:outline-none`}
                          name={`radioWouldYouLikeSpeakers${rslt?.name}`}
                          value={rslt?.value}
                          {...register('what_role_would_you_like_to_fill_in_', {
                            required: true,
                          })}
                        />
                        <span className="ml-3 text-sm font-normal text-black-900">
                          {rslt?.label}
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`"block ${
                  errors[
                    `what_topics_are_you_most_able_to_speak_to_authoritatively`
                  ] && 'error'
                }`}
              >
                <Label
                  forId={`ca25Form_WhatTopicsSpeakers`}
                  label="What topics are you most able to speak to authoritatively?"
                  required={true}
                />
                <Select
                  id={`ca25Form_WhatTopicsSpeakers`}
                  ariaLabel={`What topics Speakers`}
                  label="Choose a memecoins..."
                  widthPlaceholder={false}
                  listSelect={isForms?.fields[1]?.options}
                  values={`what_topics_are_you_most_able_to_speak_to_authoritatively`}
                  setValue={setValue}
                  config={{
                    ...register(
                      `what_topics_are_you_most_able_to_speak_to_authoritatively`,
                      {
                        required: 'Please select a jobtitle speakers',
                      }
                    ),
                  }}
                />
              </div>

              {whatTopic === 'Other' && (
                <div className="mt-4 block">
                  <Label
                    forId={`ca25Form_WhatTopicOtherSpeakers`}
                    label="Other: If you choose 'other', tell us what's in your mind?"
                    required={true}
                  />
                  <Input
                    id={`ca25Form_WhatTopicOtherSpeakers`}
                    type="text"
                    name={`if_you_choose__other___tell_us_what_s_in_your_mind`}
                    placeholder="Eg: If you choose 'other', tell us what's in your mind"
                    ariaLabel={`What Topic Other - Speakers`}
                    config={{
                      ...register(
                        `if_you_choose__other___tell_us_what_s_in_your_mind`,
                        {
                          required: true,
                          maxLength: 500,
                          pattern: {
                            value: /^[\p{L}\p{N}\p{Zs}\-_,.:?'“”()\n]+$/u,
                          },
                        }
                      ),
                    }}
                    errors={
                      errors[
                        `if_you_choose__other___tell_us_what_s_in_your_mind`
                      ]
                    }
                  />
                </div>
              )}

              {/* @company */}
              <div className="grid-cols-1 gap-x-4 gap-y-4 supports-grid:grid sm:grid-cols-2">
                <div className="block">
                  <Label
                    forId={`ca25Form_CompanySpeakers`}
                    label="Company name"
                    required={true}
                  />
                  <Input
                    id={`ca25Form_CompanySpeakers`}
                    type="text"
                    name={`company`}
                    placeholder=""
                    ariaLabel={`Company Name - Speakers`}
                    config={{
                      ...register(`company`, {
                        required: true,
                        maxLength: 120,
                        pattern: {
                          value: /^[a-zA-Z0-9\s-_]{2,120}$/,
                        },
                      }),
                    }}
                    errors={errors[`company`]}
                  />
                </div>
                <div
                  className={`"block ${
                    errors[`companyFocusSpeakers`] && 'error'
                  }`}
                >
                  <Label
                    forId={`ca25Form_CompanyFocusSpeakers`}
                    label="Company focus"
                    required={true}
                  />
                  <Select
                    id={`ca25Form_CompanyFocusSpeakers`}
                    ariaLabel={`CompanyFocus Speakers`}
                    label="Choose a consulting..."
                    widthPlaceholder={false}
                    listSelect={isForms?.fields[2]?.options}
                    values={`companyFocusSpeakers`}
                    setValue={setValue}
                    config={{
                      ...register(`companyFocusSpeakers`, {
                        required: 'Please select a jobtitle speakers',
                      }),
                    }}
                  />
                </div>
              </div>
              <div className="grid-cols-1 gap-x-4 gap-y-4 last:mb-0 supports-grid:grid sm:grid-cols-2">
                <div
                  className={`"block ${errors[`jobtitleSpeakers`] && 'error'}`}
                >
                  <Label
                    forId={`ca25Form_jobtitleSpeakers`}
                    label="Position"
                    required={true}
                  />
                  <Select
                    id={`ca25Form_jobtitleSpeakers`}
                    ariaLabel={`Jobtitle Speakers`}
                    label="Choose a director..."
                    widthPlaceholder={false}
                    listSelect={isForms?.fields[3]?.options}
                    values={`jobtitleSpeakers`}
                    setValue={setValue}
                    config={{
                      ...register(`jobtitleSpeakers`, {
                        required: 'Please select a jobtitle speakers',
                      }),
                    }}
                  />
                </div>
                <div className="block">
                  <Label
                    forId={`ca25Form_CompanyWebsiteSpeakers`}
                    label="Company website"
                    required={true}
                  />
                  <Input
                    id={`ca25Form_CompanyWebsiteSpeakers`}
                    type="text"
                    name={`company_website`}
                    placeholder=""
                    ariaLabel={`company_website - Speakers`}
                    config={{
                      ...register(`company_website`, {
                        required: true,
                        maxLength: 120,
                        pattern: {
                          value: /^(https?:\/\/[^\s/$.?#].[^\s]*)$|^N\/A$|^-$/,
                          message: 'Please enter a valid URL',
                        },
                      }),
                    }}
                    errors={errors[`company_website`]}
                  />
                </div>
              </div>
              <div className="block">
                <Label
                  forId={`ca25Form_LinkedInSpeakers`}
                  label="Linkedin profile"
                  required={true}
                />
                <Input
                  id={`ca25Form_LinkedInSpeakers`}
                  type="text"
                  name={`linkedin_profile`}
                  placeholder=""
                  ariaLabel={`linkedin_profile A - Speakers`}
                  config={{
                    ...register(`linkedin_profile`, {
                      required: true,
                      maxLength: 120,
                      pattern: {
                        value: /^(https?:\/\/[^\s/$.?#].[^\s]*)$|^N\/A$|^-$/,
                        message: 'Please enter a valid URL',
                      },
                    }),
                  }}
                  errors={errors[`linkedin_profile`]}
                />
              </div>
              <div className="mb-4 mt-4 grid-cols-1 gap-x-4 gap-y-4 last:mb-0 supports-grid:grid sm:grid-cols-2">
                <div className="block">
                  <Label
                    forId={`ca25Form_TwitterSpeakers`}
                    label="Twitter profile"
                    required={true}
                  />
                  <Input
                    id={`ca25Form_TwitterSpeakers`}
                    type="text"
                    name={`twitterhandle`}
                    placeholder=""
                    ariaLabel={`twitterhandle A - Speakers`}
                    config={{
                      ...register(`twitterhandle`, {
                        required: true,
                        maxLength: 120,
                        pattern: {
                          value: /^[a-zA-Z0-9\s-_]{2,120}$/,
                        },
                      }),
                    }}
                    errors={errors[`twitterhandle`]}
                  />
                </div>
                <div className="block">
                  <Label
                    forId={`ca25Form_TelegramSpeakers`}
                    label="Telegram username"
                    required={true}
                  />
                  <Input
                    id={`ca25Form_TelegramSpeakers`}
                    type="text"
                    name={`telegram_username`}
                    placeholder=""
                    ariaLabel={`Telegram - Speakers`}
                    config={{
                      ...register(`telegram_username`, {
                        required: true,
                        maxLength: 120,
                        pattern: {
                          value: /^([a-zA-Z][a-zA-Z0-9_\.]{2,55})$/,
                        },
                      }),
                    }}
                    errors={errors[`telegram_username`]}
                  />
                </div>
              </div>
            </>
          )}

          {/* @submit */}
          <div className="z-[18] flex flex-col">
            <button
              id="ca25Submit-Speakers"
              type="submit"
              className={`group relative mt-6 flex w-full flex-col items-center justify-center overflow-hidden rounded-[14px] bg-primaryRed py-6 text-base font-normal text-white outline-none transition duration-[0.3] ease-in-out focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-black-900`}
              aria-label="Submit Speakers Forms"
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

              <div className="absolute inset-0 flex h-full w-full justify-center blur-md [transform:skew(-13deg)_translateX(-100%)] group-hover:transition-[transform] group-hover:duration-[1.6s] group-hover:[transform:skew(-13deg)_translateX(100%)]">
                <div className="relative h-full w-12 bg-white/40"></div>
              </div>
            </button>
          </div>
        </form>
      </PartnershipLayouts>
    </>
  );
};

Speakers.getLayout = (page, { pageProps }) => {
  const { mode } = pageProps;
  return page;
};
export const getStaticProps = async () => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_URL;
    const [rsIpAddress, rsCountry, rsForms] = await Promise.all([
      getFetchUrl(
        `https://ipinfo.io/json?token=${serverRuntimeConfig?.ipAddress_token}`
      ),
      getFetchUrl(`${baseUrl}/api/v1/countries?sv=coinfestasia`),
      getFecthHbSpt(`/forms/v2/fields/0568d957-8627-4939-8e88-82bbb8c53e52`),
    ]);
    const reduceForms = getReduceArray(rsForms, [5, 6, 9, 10]);
    const rsSortCountry = rsCountry?.data?.sort((a, b) =>
      a?.name?.common?.localeCompare(b.name.common)
    );

    return {
      props: {
        mode: 'light',
        ipAddress: rsIpAddress || [],
        country: rsSortCountry || [],
        forms: reduceForms || [],
      },
      revalidate: 900,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
export default Speakers;
