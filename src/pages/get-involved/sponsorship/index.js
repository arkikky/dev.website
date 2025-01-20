import React, { useState } from 'react';
import DOMPurify from 'dompurify';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import getConfig from 'next/config';

// # @get .config
const { serverRuntimeConfig } = getConfig();

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

const Sponsorship = ({ mode, ipAddress, country, forms }) => {
  const router = useRouter();
  const [isForms, setForms] = useState({
    ipAddress: ipAddress || [],
    fields: forms || [],
    country: country || [],
  });

  const {
    watch,
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    setValue,
    reset,
  } = useForm({
    mode: 'all',
    criteriaMode: 'all',
    defaultValues: {
      in_coinfest_asia_2024__we_are_interested_in: [],
    },
  });
  const isInterestedOthrs = watch(
    'in_coinfest_asia_2024__we_are_interested_in',
    []
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
          objectTypeId: '0-1',
          name: 'position',
          value: sntzeFld(
            data?.jobtitleSponsorship !== null ? data?.jobtitleSponsorship : '-'
          ),
        },
        {
          name: 'country',
          value: sntzeFld(
            data?.countrySponsorship !== null ? data?.countrySponsorship : '-'
          ),
        },
        {
          objectTypeId: '0-2',
          name: 'name',
          value: data?.name,
        },
        {
          objectTypeId: '0-2',
          name: 'company_focus',
          value: sntzeFld(
            data?.companyFocusSponsorship !== null
              ? data?.companyFocusSponsorship
              : '-'
          ),
        },
        {
          objectTypeId: '0-2',
          name: 'did_your_company_sponsor_coinfest_asia_previously_',
          value: sntzeFld(
            data?.did_your_company_sponsor_coinfest_asia_previously_
          ),
        },
        {
          name: 'in_coinfest_asia_2024__we_are_interested_in',
          value: sntzeFld(
            data?.in_coinfest_asia_2024__we_are_interested_in.join(';')
          ),
        },
        {
          name: 'if_you_pick__other___tell_us_what_kind_of_activations_you_d_like_to_explore',
          value: sntzeFld(
            isInterestedOthrs?.includes('Other')
              ? data?.if_you_pick__other___tell_us_what_kind_of_activations_you_d_like_to_explore
              : '-'
          ),
        },
        {
          name: 'your_range_of_budget_to_sponsor_coinfest_asia_2024_',
          value: sntzeFld(data?.budget),
        },
      ],
      context: {
        pageUri: 'https://coinfest.asia/get-involved/sponsorship',
        pageName: '2025 Sponsorship | Coinfest Asia 2025',
        ipAddress: isForms?.ipAddress?.ip,
      },
    };
    const k = 'bf625b40-82e5-4c4f-818d-7a6cfbe47a81';
    const rs = await submitFormHbSpt(d, k);

    // @debug
    // console.log(d);
    if (rs === true) {
      reset();
      router.replace('/get-involved/sponsorship/success');
    }
  };

  return (
    <>
      {/* @head */}
      <HeadGraphSeo title={`Sponsorship`} otherPage={true} />

      {/* @main */}
      <PartnershipLayouts
        title={'COINFEST ASIA 2025 SPONSORSHIP INQUIRY'
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
          'Unlock early access to Coinfest Asia 2025 sponsorships and lock in the best deals before anyone else.'
        }
        backUrl={`/get-involved`}
        mode={mode}
      >
        <form
          id="formSponsorship"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
          className="relative mt-0 flex flex-col space-y-5"
        >
          <div
            className={`absolute inset-x-0 inset-y-0 bg-white/60 opacity-100 backdrop-blur-[2px] ${isSubmitting ? 'pointer-events-auto z-[15] select-auto' : '!pointer-events-auto -z-px !select-auto'}`}
          ></div>

          <div className="grid-cols-1 gap-x-4 gap-y-4 last:mb-0 supports-grid:grid sm:grid-cols-2">
            <div className="block">
              <Label
                forId={`ca25Form_FirstnameSponsorship`}
                label="Firstname"
                required={true}
              />
              <Input
                id={`ca25Form_FirstnameSponsorship`}
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
                forId={`ca25Form_LastnameSponsorship`}
                label="Lastname"
                required={true}
              />
              <Input
                id={`ca25Form_LastnameSponsorship`}
                type="text"
                name={`lastname`}
                placeholder="Eg: Doe"
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
              forId={`ca25Form_EmailSponsorship`}
              label="Email"
              required={true}
            />
            <Input
              id={`ca25Form_EmailSponsorship`}
              type="email"
              placeholder="Eg: example@email.com"
              ariaLabel={`Email Sponsorship`}
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

          {isForms?.fields && (
            <>
              <div className="mb-4 grid-cols-1 gap-x-4 gap-y-4 last:mb-0 supports-grid:grid sm:grid-cols-2">
                <div
                  className={`"block ${errors[`jobtitleSponsorship`] && 'error'}`}
                >
                  <Label
                    forId={`ca25Form_jobtitleSponsorship`}
                    label="Position"
                    required={true}
                  />
                  <Select
                    id={`ca25Form_jobtitleSponsorship`}
                    ariaLabel={`Jobtitle Sponsorship`}
                    label="Choose a jobtitle..."
                    listSelect={isForms?.fields[0]?.options}
                    values={`jobtitleSponsorship`}
                    setValue={setValue}
                    config={{
                      ...register(`jobtitleSponsorship`, {
                        required: 'Please select a jobtitle sponsorship',
                      }),
                    }}
                  />
                </div>
                <div
                  className={`"block ${errors[`countrySponsorship`] && 'error'}`}
                >
                  <Label
                    forId={`ca25Form_Country_Sponsorship`}
                    label="Country"
                    required={true}
                  />
                  <SelectCountry
                    id={`ca25Form_Country_Sponsorship`}
                    ariaLabel={`Country - Sponsorship Forms`}
                    listSelect={isForms?.country}
                    withIcons={true}
                    values={`countrySponsorship`}
                    setValue={setValue}
                    config={{
                      ...register(`countrySponsorship`, {
                        required: 'Please select a country',
                      }),
                    }}
                  />
                </div>
              </div>

              {/*  @company */}
              <div className="grid-cols-1 gap-x-4 gap-y-4 supports-grid:grid sm:grid-cols-2">
                <div className="block">
                  <Label
                    forId={`ca25Form_CompanySponsorship`}
                    label="Company name"
                    required={true}
                  />
                  <Input
                    id={`ca25Form_CompanySponsorship`}
                    type="text"
                    name={`name`}
                    placeholder="Eg: Coinfest Asia"
                    ariaLabel={`Company Name - Sponsorship`}
                    config={{
                      ...register(`name`, {
                        required: true,
                        maxLength: 120,
                        pattern: {
                          value: /^[a-zA-Z0-9\s-_]{2,120}$/,
                        },
                      }),
                    }}
                    errors={errors[`name`]}
                  />
                </div>
                <div
                  className={`"block ${
                    errors[`companyFocusSponsorship`] && 'error'
                  }`}
                >
                  <Label
                    forId={`ca25Form_CompanyFocusSponsorship`}
                    label="Company Focus"
                    required={true}
                  />
                  <Select
                    id={`ca25Form_CompanyFocusSponsorship`}
                    ariaLabel={`CompanyFocus Sponsorship`}
                    label="Choose a Company Focus..."
                    listSelect={isForms?.fields[1]?.options}
                    values={`companyFocusSponsorship`}
                    setValue={setValue}
                    config={{
                      ...register(`companyFocusSponsorship`, {
                        required: 'Please select a jobtitle sponsorship',
                      }),
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <div className="mb-2.5 flex w-max flex-col pt-4">
                  <h2 className="text-xl font-semibold text-black-900 sm:text-[28px] sm:font-bold sm:leading-[34px]">
                    Exhibiting at Coinfest Asia
                  </h2>
                </div>

                <div className="mb-6 flex flex-col last:mb-0">
                  <Label
                    forId={`ca25Form_PreviouslySponsorship`}
                    label="Did your company sponsor Coinfest Asia previously?"
                    required={true}
                  />
                  <div className="mt-2 grid space-y-3">
                    {isForms?.fields[2]?.options?.map((rslt, i) => (
                      <div className="space-y-2" key={i}>
                        <label
                          htmlFor={`radioPreviousSponsorship${rslt?.name}${i}`}
                          className={`flex w-full cursor-pointer items-center`}
                        >
                          <input
                            id={`radioPreviousSponsorship${rslt?.name}${i}`}
                            type="radio"
                            className={`boxShadow-none form-radio pointer-events-none mt-px h-4.5 w-4.5 shrink-0 rounded-full border border-solid ${
                              errors[
                                `did_your_company_sponsor_coinfest_asia_previously_`
                              ]
                                ? 'border-red-500'
                                : 'border-gray-500/20'
                            } bg-transparent text-primary outline-none ring-0 focus:outline-none focus-visible:outline-none`}
                            name={`radioPreviousSponsorship${rslt?.name}`}
                            value={rslt?.value}
                            {...register(
                              'did_your_company_sponsor_coinfest_asia_previously_',
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

              <div className="flex flex-col">
                <Label
                  forId={`ca25Form_interesredSponsorship`}
                  label="In Coinfest Asia 2025, we are interested in?"
                  required={true}
                />
                <div className="mt-2 grid space-y-4">
                  {isForms?.fields[3]?.options?.map((rslt, i) => (
                    <label
                      htmlFor={`ca25Form_intrestSponsorship${i}`}
                      className={`flex w-full cursor-pointer items-center`}
                      key={i}
                    >
                      <input
                        type="checkbox"
                        id={`ca25Form_intrestSponsorship${i}`}
                        className={`boxShadow-none form-checkbox pointer-events-none mt-px h-4.5 w-4.5 shrink-0 rounded border border-solid ${
                          errors[`in_coinfest_asia_2024__we_are_interested_in`]
                            ? 'border-red-500'
                            : 'border-gray-500/20'
                        } bg-transparent text-primary outline-none ring-0 focus:outline-none focus-visible:outline-none`}
                        value={rslt?.value}
                        onChange={(e) => {
                          handleInterestedChange(rslt?.value, 'Other');
                        }}
                        {...register(
                          'in_coinfest_asia_2024__we_are_interested_in',
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

                {isInterestedOthrs?.includes('Other') && (
                  <div className="mb-4 mt-4 block last:mb-0">
                    <Label
                      forId={`ca25Form_InterestedOthersSponsorship`}
                      label="Others : If you pick 'Other', tell us what kind of activations you'd like to explore?"
                      required={true}
                    />
                    <Input
                      id={`ca25Form_InterestedOthersSponsorship`}
                      type="text"
                      name="if_you_pick__other___tell_us_what_kind_of_activations_you_d_like_to_explore"
                      placeholder="If you pick 'Other', tell us what kind of activations you'd like to explore"
                      ariaLabel={`Interested Others - Sponsorship`}
                      config={{
                        ...register(
                          `if_you_pick__other___tell_us_what_kind_of_activations_you_d_like_to_explore`,
                          {
                            required: true,
                            maxLength: 120,
                          }
                        ),
                      }}
                      errors={
                        errors[
                          `if_you_pick__other___tell_us_what_kind_of_activations_you_d_like_to_explore`
                        ]
                      }
                    />
                  </div>
                )}
              </div>

              <div className="mt-4 flex flex-col last:mb-0">
                <Label
                  forId={`ca25Form_DidYourSponsorship`}
                  label="Your range of budget to sponsor Coinfest Asia 2025?"
                  required={true}
                />
                <div className="mt-2 grid space-y-4">
                  {isForms?.fields[4]?.options?.map((rslt, i) => (
                    <div className="space-y-3" key={i}>
                      <label
                        htmlFor={`radioBudgetSponsorship${rslt?.name}${i}`}
                        className={`flex w-full cursor-pointer items-center`}
                      >
                        <input
                          id={`radioBudgetSponsorship${rslt?.name}${i}`}
                          type="radio"
                          className={`boxShadow-none form-radio pointer-events-none mt-px h-4.5 w-4.5 shrink-0 rounded-full border border-solid ${
                            errors[`budget`]
                              ? 'border-red-500'
                              : 'border-gray-500/20'
                          } bg-transparent text-primary outline-none ring-0 focus:outline-none focus-visible:outline-none`}
                          name={`radioBudgetSponsorship${rslt?.name}`}
                          value={rslt?.value}
                          {...register('budget', {
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
            </>
          )}

          {/* @submit */}
          <div className="z-[18] flex flex-col">
            <button
              id="ca25Submit-Sponsorship"
              type="submit"
              className={`mt-6 flex w-full flex-col items-center justify-center rounded-[14px] bg-black-900 py-6 text-base font-normal text-white outline-none transition duration-[0.3] ease-in-out focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-black-900`}
              aria-label="Submit Sponsorship Forms"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex flex-row items-center">
                  <svg
                    className="mr-3 h-5 w-5 animate-spin text-white"
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

Sponsorship.getLayout = (page, { pageProps }) => {
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
      getFecthHbSpt(`/forms/v2/fields/bf625b40-82e5-4c4f-818d-7a6cfbe47a81`),
    ]);
    const reduceForms = getReduceArray(rsForms, [3, 6, 7, 8, 10]);

    return {
      props: {
        mode: 'light',
        ipAddress: rsIpAddress || [],
        country: rsCountry || [],
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
export default Sponsorship;
