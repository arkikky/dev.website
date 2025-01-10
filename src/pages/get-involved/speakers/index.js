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
            data?.if_you_choose__other___tell_us_what_s_in_your_mind !== ''
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
        ipAddress: ipAddress?.ip,
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
          className="mt-0 flex flex-col space-y-5 sm:mt-8"
        >
          <div className="grid-cols-1 gap-x-4 gap-y-4 last:mb-0 supports-grid:grid sm:grid-cols-2">
            <div className="block">
              <Label
                forId={`ca25Form_FirstnameSpeakers`}
                label="Firstname"
                required={true}
              />
              <Input
                id={`ca25Form_FirstnameSpeakers`}
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
                forId={`ca25Form_LastnameSpeakers`}
                label="Lastname"
                required={true}
              />
              <Input
                id={`ca25Form_LastnameSpeakers`}
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
                forId={`ca25Form_EmailSpeakers`}
                label="Email"
                required={true}
              />
              <Input
                id={`ca25Form_EmailSpeakers`}
                type="email"
                placeholder="Eg: example@email.com"
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
                label={`Phone Number`}
                required={true}
              />
              <Controller
                name={`dialcode-phone`}
                control={control}
                render={({ field }) => (
                  <PhoneInput
                    {...field}
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
                    inputClass={`ca25Form_PhoneInput ${
                      errors[`phone`] && 'errors'
                    }`}
                    buttonClass={`ca25Form_PhoneInputBtn ${
                      errors[`phone`] && 'errors'
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
                id={`ca25Form_PhoneSpeakers`}
                type="text"
                placeholder="Eg: 081823124213"
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
                  listSelect={isForms?.country}
                  withIcons={true}
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
                  {isForms?.fields[4]?.fields[0].options?.map((rslt, i) => (
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
                  listSelect={isForms?.fields[5].fields[0].options}
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
                          maxLength: 120,
                          pattern: {
                            value: /^[a-zA-Z0-9\s-_]{2,120}$/,
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
                    placeholder="Eg: Indonesia Crypto Network"
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
                    label="Company Focus"
                    required={true}
                  />
                  <Select
                    id={`ca25Form_CompanyFocusSpeakers`}
                    ariaLabel={`CompanyFocus Speakers`}
                    label="Choose a consulting..."
                    listSelect={isForms?.fields[7]?.fields[0].options}
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
                    listSelect={isForms?.fields[7]?.fields[1].options}
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
                    label="Company Website"
                    required={true}
                  />
                  <Input
                    id={`ca25Form_CompanyWebsiteSpeakers`}
                    type="text"
                    name={`company_website`}
                    placeholder="Eg: https://indonesiacrypto.network"
                    ariaLabel={`company_website - Speakers`}
                    config={{
                      ...register(`company_website`, {
                        required: true,
                        maxLength: 120,
                        pattern: {
                          value:
                            /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\w\d\-.\/]*)*\/?$|^N\/A$|^-$/,
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
                  label="Linkedin Profile"
                  required={true}
                />
                <Input
                  id={`ca25Form_LinkedInSpeakers`}
                  type="text"
                  name={`linkedin_profile`}
                  placeholder="Eg: Alexandre Doe"
                  ariaLabel={`linkedin_profile A - Speakers`}
                  config={{
                    ...register(`linkedin_profile`, {
                      required: true,
                      maxLength: 120,
                      pattern: {
                        value:
                          /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\w\d\-.\/]*)*\/?$|^N\/A$|^-$/,
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
                    label="Twitter Profile"
                    required={true}
                  />
                  <Input
                    id={`ca25Form_TwitterSpeakers`}
                    type="text"
                    name={`twitterhandle`}
                    placeholder="Eg: alexdoe"
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
                    label="Telegram Username"
                    required={true}
                  />
                  <Input
                    id={`ca25Form_TelegramSpeakers`}
                    type="text"
                    name={`telegram_username`}
                    placeholder="Eg: doealex"
                    ariaLabel={`Lastname - Speakers`}
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
            </>
          )}

          {/* @submit */}
          <div className="flex flex-col">
            <button
              id="ca25Submit-Speakers"
              type="submit"
              className={`mt-6 flex w-full flex-col items-center justify-center rounded-[14px] bg-black-900 py-6 text-base font-normal text-white outline-none transition duration-[0.3] ease-in-out focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-black-900`}
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
    const [rsIpAddress, rsCountry, rsForms] = await Promise.all([
      getFetchUrl(
        `https://ipinfo.io/json?token=${serverRuntimeConfig?.ipAddress_token}`
      ),
      getFetchUrl(`https://restcountries.com/v3.1/all?fields=name,flags`),
      getFecthHbSpt(`/forms/v2/forms/0568d957-8627-4939-8e88-82bbb8c53e52`),
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
export default Speakers;
