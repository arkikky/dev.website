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
import Textarea from '@components/UI/Form/Textarea';
import Select from '@components/UI/Form/Select';

// @layouts
import PartnershipLayouts from '@layouts/PartnershipLayouts';

const PartnerMedia = ({
  mode,
  groupLabel = 'PartnerAsMedia',
  ipAddress,
  forms,
}) => {
  const router = useRouter();
  const [isForms, setForms] = useState({
    ipAddress: ipAddress || [],
    fields: forms || [],
  });

  const {
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
          value: sntzeFld(data[`phone${groupLabel}`]),
        },
        {
          name: 'telegram_username',
          value: sntzeFld(
            data?.telegram_username !== '' ? data?.telegram_username : '-'
          ),
        },
        {
          name: 'company',
          value: sntzeFld(data?.company !== '' ? data?.company : '-'),
        },
        {
          name: 'position',
          value: sntzeFld(data?.position !== '' ? data?.position : '-'),
        },
        {
          name: 'website',
          value: sntzeFld(data?.website !== '' ? data?.website : '-'),
        },
        {
          name: 'media_focus',
          value: sntzeFld(data?.media_focus.join(';')),
        },
        {
          objectTypeId: '0-2',
          name: 'outlet_affiliation_social_media',
          value: sntzeFld(data?.outlet_affiliation_social_media.join(';')),
        },
        {
          objectTypeId: '0-2',
          name: 'distribution',
          value: sntzeFld(data?.distribution.join(';')),
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
          name: 'logo_url',
          value: sntzeFld(data[`logo_url`] !== '' ? data[`logo_url`] : '-'),
        },
        {
          name: 'all_of_the_information_i_have_provided_above_is_correct_and_up_to_date_',
          value: sntzeFld(
            data?.all_of_the_information_i_have_provided_above_is_correct_and_up_to_date_
          ),
        },
      ],
      context: {
        pageUri: 'https://coinfest.asia/get-involved/partner-as-media',
        pageName: '2025 Partner As Media | Coinfest Asia 2025',
        ipAddress: isForms?.ipAddress?.ip,
      },
    };
    const k = '916e0562-05ac-4891-aef2-aac194fb75cd';
    const rs = await submitFormHbSpt(d, k);

    // @debug
    // console.log(d);

    if (rs === true) {
      reset();
      router.replace('/get-involved/partner-as-media/success');
    }
  };

  return (
    <>
      {/* @head */}
      <HeadGraphSeo title={`Partner As Media`} otherPage={true} />

      {/* @main */}
      <PartnershipLayouts
        title={'COINFEST ASIA 2025 PARTNER AS MEDIA'
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
          'Become the main source on the latest Web3 insights and updates in Asia.'
        }
        backUrl={`/get-involved`}
        mode={mode}
      >
        <form
          id={`form${groupLabel}`}
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
          className="relative mt-0 flex w-full flex-col"
        >
          <div
            className={`absolute inset-x-0 inset-y-0 bg-white/60 opacity-100 backdrop-blur-[2px] ${
              isSubmitting
                ? 'pointer-events-auto z-[15] select-auto'
                : '!pointer-events-auto -z-px !select-auto'
            }`}
          ></div>

          <div className="block w-full space-y-5">
            <div className="grid-cols-1 gap-x-4 gap-y-4 last:mb-0 supports-grid:grid sm:grid-cols-2">
              <div className="block">
                <Label
                  forId={`ca25Form_Firstname${groupLabel}`}
                  label="First name"
                  required={true}
                />
                <Input
                  id={`ca25Form_Firstname${groupLabel}`}
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
                  forId={`ca25Form_Lastname${groupLabel}`}
                  label="Last name"
                  required={true}
                />
                <Input
                  id={`ca25Form_Lastname${groupLabel}`}
                  type="text"
                  name={`last name`}
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
            <div className="block">
              <Label
                forId={`ca25Form_Email${groupLabel}`}
                label="Email"
                required={true}
              />
              <Input
                id={`ca25Form_Email${groupLabel}`}
                type="email"
                placeholder=""
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
            <div className="grid-cols-1 gap-x-4 gap-y-4 last:mb-0 supports-grid:grid sm:grid-cols-2">
              <div className="block">
                <Label
                  forId={`ca25Form_Phone${groupLabel}`}
                  label={`Phone number`}
                  required={true}
                />
                <Controller
                  name={`dialcode-phone${groupLabel}`}
                  control={control}
                  render={({ field }) => (
                    <PhoneInput
                      {...field}
                      country={
                        isForms?.ipAddress?.country.toLowerCase() ?? 'id'
                      }
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
                        maxLength: 18,
                      }}
                      containerClass="w-full"
                      inputClass={`ca25Form_PhoneInput ${
                        errors[`phone${groupLabel}`] && 'errors'
                      }`}
                      buttonClass={`ca25Form_PhoneInputBtn ${
                        errors[`phone${groupLabel}`] && 'errors'
                      }`}
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
                  id={`ca25Form_Phone${groupLabel}`}
                  type="text"
                  placeholder=""
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
              </div>
              <div className="block">
                <Label
                  forId={`ca25Form_Telegram${groupLabel}`}
                  label="Telegram username"
                  required={true}
                />
                <Input
                  id={`ca25Form_Telegram${groupLabel}`}
                  type="text"
                  name={`telegram_username`}
                  placeholder=""
                  ariaLabel={`Lastname - ${groupLabel}`}
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
          </div>
          <div className="mt-5 block w-full pt-4">
            <h2 className="text-xl font-semibold">
              {`Media Publication / Organization`}
            </h2>

            <div className="block w-full space-y-5">
              <div className="mt-4 grid-cols-1 gap-x-4 gap-y-4 last:mb-0 supports-grid:grid sm:grid-cols-2">
                <div className="block">
                  <Label
                    forId={`ca25Form_MediaName${groupLabel}`}
                    label="Outlet name"
                    required={true}
                  />
                  <Input
                    id={`ca25Form_MediaName${groupLabel}`}
                    type="text"
                    name={`company`}
                    placeholder=""
                    ariaLabel={`Outlet Name ${groupLabel}`}
                    disabled={isSubmitting}
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
                <div className={`"block ${errors[`position`] && 'error'}`}>
                  <Label
                    forId={`ca25Form_JobPosition${groupLabel}`}
                    label="Position"
                    required={false}
                  />
                  <Select
                    id={`ca25Form_JobPosition${groupLabel}`}
                    ariaLabel={`Jobtitle Speakers`}
                    label="Choose a director..."
                    widthPlaceholder={false}
                    listSelect={isForms?.fields[0]?.options}
                    values={`position`}
                    setValue={setValue}
                    config={{
                      ...register(`position`, {
                        required: 'Please select a jobtitle speakers',
                      }),
                    }}
                  />
                </div>
              </div>
              <div className="block">
                <Label
                  forId={`ca25Form_OutletAffiliation${groupLabel}`}
                  label="Outlet url"
                  required={true}
                />
                <Input
                  id={`ca25Form_OutletAffiliation${groupLabel}`}
                  type="text"
                  placeholder={``}
                  ariaLabel="Outlet URL"
                  config={{
                    ...register(`website`, {
                      required: true,
                      maxLength: 255,
                      pattern: {
                        value: /^(https?:\/\/[^\s/$.?#].[^\s]*)$|^N\/A$|^-$/,
                        message: 'Please enter a valid URL',
                      },
                    }),
                  }}
                  errors={errors[`website`]}
                />
              </div>

              <div className="flex flex-col">
                <Label
                  forId={`ca25Form_MediaFocus${groupLabel}`}
                  label="Media focus"
                  required={true}
                />
                <div className="mt-2 grid space-y-4">
                  {isForms?.fields[1]?.options?.map((rslt, i) => (
                    <label
                      htmlFor={`ca25Form_MediaFocus${groupLabel}${i}`}
                      className={`flex w-full cursor-pointer items-center`}
                      key={i}
                    >
                      <input
                        type="checkbox"
                        id={`ca25Form_MediaFocus${groupLabel}${i}`}
                        className={`boxShadow-none form-checkbox pointer-events-none mt-px h-4.5 w-4.5 shrink-0 rounded border border-solid ${
                          errors[`media_focus`]
                            ? 'border-red-500'
                            : 'border-gray-500/20'
                        } bg-transparent text-primary outline-none ring-0 focus:outline-none focus-visible:outline-none`}
                        name={`ca25Form_MediaFocus${groupLabel}[]`}
                        value={rslt?.value}
                        {...register('media_focus', {
                          required: true,
                        })}
                      />

                      <span className="ml-3 text-sm font-normal text-black-900">
                        {rslt?.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="flex flex-col">
                <Label
                  forId={`ca25Form_SocialMedia${groupLabel}`}
                  label="Social media"
                  required={true}
                />
                <div className="mt-2 grid space-y-4">
                  {isForms?.fields[2]?.options?.map((rslt, i) => (
                    <label
                      htmlFor={`ca25Form_SocialMedia${groupLabel}${i}`}
                      className={`flex w-full cursor-pointer items-center`}
                      key={i}
                    >
                      <input
                        type="checkbox"
                        id={`ca25Form_SocialMedia${groupLabel}${i}`}
                        className={`boxShadow-none form-checkbox pointer-events-none mt-px h-4.5 w-4.5 shrink-0 rounded border border-solid ${
                          errors[`outlet_affiliation_social_media`]
                            ? 'border-red-500'
                            : 'border-gray-500/20'
                        } bg-transparent text-primary outline-none ring-0 focus:outline-none focus-visible:outline-none`}
                        name={`ca25Form_SocialMedia${groupLabel}[]`}
                        value={rslt?.value}
                        {...register('outlet_affiliation_social_media', {
                          required: true,
                        })}
                      />

                      <span className="ml-3 text-sm font-normal text-black-900">
                        {rslt?.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="flex flex-col">
                <Label
                  forId={`ca25Form_Distribution${groupLabel}`}
                  label="Distribution"
                  required={true}
                />
                <div className="mt-2 grid space-y-4">
                  {isForms?.fields[3]?.options?.map((rslt, i) => (
                    <label
                      htmlFor={`ca25Form_Distribution${groupLabel}${i}`}
                      className={`flex w-full cursor-pointer items-center`}
                      key={i}
                    >
                      <input
                        type="checkbox"
                        id={`ca25Form_Distribution${groupLabel}${i}`}
                        className={`boxShadow-none form-checkbox pointer-events-none mt-px h-4.5 w-4.5 shrink-0 rounded border border-solid ${
                          errors[`distribution`]
                            ? 'border-red-500'
                            : 'border-gray-500/20'
                        } bg-transparent text-primary outline-none ring-0 focus:outline-none focus-visible:outline-none`}
                        name={`ca25Form_Distribution${groupLabel}[]`}
                        value={rslt?.value}
                        {...register('distribution', {
                          required: true,
                        })}
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
                  forId={`ca25Form_TellUsAboutYourAudience${groupLabel}`}
                  label="Tell us about your audience?"
                  required={true}
                />
                <Textarea
                  id={`ca25Form_TellUsAbout${groupLabel}`}
                  className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  rows="5"
                  placeholder="Describe your audience type, audience size, demographics, engagement metrics, and who you aim to reach."
                  config={{
                    ...register(
                      `tell_us_about_your_audience_and_who_do_you_aim_to_reach_`,
                      {
                        required: true,
                        maxLength: 1000,
                        pattern: {
                          value: /^[\p{L}\p{N}\p{Zs}\-_,.:?'“”()\n]+$/u,
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
              <div className="mt-4 block">
                <Label
                  forId={`ca25Form_LogoUrl${groupLabel}`}
                  label="Link to your media partner logo"
                  helpText={`Make sure your logo fits these criteria: <br/> - Minimum size 500x500 px <br/> - Format is SVG and/or PNG`}
                  required={true}
                />
                <Input
                  id={`ca25Form_LogoUrl${groupLabel}`}
                  type="text"
                  placeholder={``}
                  ariaLabel={`Logo Url Link ${groupLabel}`}
                  config={{
                    ...register(`logo_url`, {
                      required: true,
                      maxLength: 255,
                      pattern: {
                        value: /^(https?:\/\/[^\s/$.?#].[^\s]*)$|^N\/A$|^-$/,
                        message: 'Please enter a valid URL',
                      },
                    }),
                  }}
                  errors={errors[`logo_url`]}
                />
              </div>
              <div className="mt-4 flex flex-col last:mb-0">
                <Label
                  forId={`ca25Form_YesIAGree${groupLabel}`}
                  label="All of the information I have provided above is correct and up to date?"
                  required={true}
                />
                <div className="mt-2 grid space-y-3">
                  {isForms?.fields[4]?.options?.map((rslt, i) => (
                    <div className="space-y-3" key={i}>
                      <label
                        htmlFor={`radioYesIAGree${groupLabel}${rslt?.name}${i}`}
                        className={`flex w-full cursor-pointer items-center`}
                      >
                        <input
                          id={`radioYesIAGree${groupLabel}${rslt?.name}${i}`}
                          type="radio"
                          className={`boxShadow-none form-radio pointer-events-none mt-px h-4.5 w-4.5 shrink-0 rounded-full border border-solid ${
                            errors[
                              `all_of_the_information_i_have_provided_above_is_correct_and_up_to_date_`
                            ]
                              ? 'border-red-500'
                              : 'border-gray-500/20'
                          } bg-transparent text-primary outline-none ring-0 focus:outline-none focus-visible:outline-none`}
                          name={`radioYesIAGree${groupLabel}${rslt?.name}`}
                          value={rslt?.value}
                          {...register(
                            'all_of_the_information_i_have_provided_above_is_correct_and_up_to_date_',
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
              </div>
            </div>
          </div>

          {/* @submit */}
          <div className="relative z-[18] flex flex-col">
            <button
              id={`ca25Submit-${groupLabel}`}
              type="submit"
              className={`group relative mt-6 flex w-full flex-col items-center justify-center overflow-hidden rounded-[14px] bg-primaryRed py-6 text-base font-normal text-white outline-none transition duration-[0.3] ease-in-out focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-black-900`}
              aria-label={`Submit ${groupLabel} Forms`}
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

PartnerMedia.getLayout = (page, { pageProps }) => {
  const { mode } = pageProps;
  return page;
};
export const getStaticProps = async () => {
  try {
    const [rsIpAddress, rsForms] = await Promise.all([
      getFetchUrl(
        `https://ipinfo.io/json?token=${serverRuntimeConfig?.ipAddress_token}`
      ),
      getFecthHbSpt(`/forms/v2/fields/916e0562-05ac-4891-aef2-aac194fb75cd/`),
    ]);
    const reduceForms = getReduceArray(rsForms, [6, 8, 9, 10, 13]);

    return {
      props: {
        mode: 'light',
        ipAddress: rsIpAddress || [],
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
export default PartnerMedia;
