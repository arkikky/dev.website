import React, { useState } from "react";
import { useForm } from "react-hook-form";
import getConfig from "next/config";

// # @get .config
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

// @lib
import { getFetch, SubmitForm } from "@lib/controller/HubSpot";
import { getFetchUrl } from "@lib/controller/Api";

// @style-css
import "react-phone-input-2/lib/high-res.css";

// @components
// @form
import Label from "@components/UI/Form/Label";
import Input from "@components/UI/Form/Input";
import Select from "@components/UI/Form/Select";
import SelectCountry from "@components/UI/Form/SelectCountry";

// @layouts
import PanelLayouts from "@layouts/PanelLayouts";

const SponsorshipGetInvolved = ({
  ipAddrs,
  formSponsorship,
  countryRegion,
}) => {
  const [isFormSponsorship, setIsFormSponsorship] = useState({
    ipAddress: ipAddrs || [],
    form: formSponsorship || [],
    country: countryRegion || [],
  });
  const [selectInterestedOthrs, setSelectInterestedOthrs] = useState([]);

  const {
    watch,
    register,
    formState: { errors, isValid, isSubmitting },
    handleSubmit,
    getValues,
    reset,
  } = useForm({
    mode: "all",
    defaultValues: {
      if_you_pick__other___tell_us_what_kind_of_activations_you_d_like_to_explore:
        "-",
    },
  });

  // @handle-countryregion
  const handleCountryRegion = (e) => {
    setCountryRegionSelect(e);
  };

  // @handle-interested-others
  const handleInterestedChange = (value) => {
    if (selectInterestedOthrs.includes(value)) {
      setSelectInterestedOthrs(
        selectInterestedOthrs.filter((item) => item !== value)
      );
    } else {
      setSelectInterestedOthrs([...selectInterestedOthrs, value]);
    }
  };

  // @submit
  const onSubmit = async (data) => {
    const btnOpenGmailSuccess = document.querySelector(
      "#btnSuccessNewsletterMdl2025"
    );

    const isConfig = {
      fields: [
        {
          name: "firstname",
          value: data.firstname,
        },
        {
          name: "lastname",
          value: data.lastname,
        },
        {
          name: "email",
          value: data.email,
        },
        {
          objectTypeId: "0-1",
          name: "position",
          value:
            data.jobtitleSponsorship !== null ? data.jobtitleSponsorship : "-",
        },
        {
          name: "country",
          value:
            data.countrySponsorship !== null ? data.countrySponsorship : "-",
        },
        {
          objectTypeId: "0-2",
          name: "name",
          value: data.name,
        },
        {
          objectTypeId: "0-2",
          name: "company_focus",
          value:
            data.companyFocusSponsorship !== null
              ? data.companyFocusSponsorship
              : "-",
        },
        {
          objectTypeId: "0-2",
          name: "did_your_company_sponsor_coinfest_asia_previously_",
          value: data.did_your_company_sponsor_coinfest_asia_previously_,
        },
        {
          name: "in_coinfest_asia_2024__we_are_interested_in",
          value: data.in_coinfest_asia_2024__we_are_interested_in.join(";"),
        },
        {
          name: "if_you_pick__other___tell_us_what_kind_of_activations_you_d_like_to_explore",
          value:
            selectInterestedOthrs.includes("Other") === true
              ? data.if_you_pick__other___tell_us_what_kind_of_activations_you_d_like_to_explore
              : "-",
        },
        {
          name: "your_range_of_budget_to_sponsor_coinfest_asia_2024_",
          value: data.budget,
        },
      ],
      context: {
        pageUri: "https://coinfest.asia/sponsorship",
        pageName: "2025 Sponsorship | Coinfest Asia 2024",
        ipAddress: isFormSponsorship?.ipAddress.ip,
      },
    };

    const isKey = "bf625b40-82e5-4c4f-818d-7a6cfbe47a81";

    const rs = await SubmitForm(isConfig, isKey);

    if (rs === true) {
      reset();
      btnOpenGmailSuccess.click();
    }
  };

  return (
    <>
      <PanelLayouts
        headTitle="Sponsorship Inquiry"
        title="Coinfest asia 2025 sponsorship inquiry"
        shortDesc={
          "Unlock early access to Coinfest Asia 2025 sponsorships and lock in the best deals before anyone else."
        }
        btnBack={true}
        brandLogo="white"
        modeDifferent={true}
      >
        <form
          id="formSponsorship"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
          className="mt-0 flex flex-col space-y-8 sm:mt-8"
        >
          <div className="flex flex-col">
            <div className="grid-cols-1 mb-4 last:mb-0 gap-x-4 gap-y-4 supports-grid:grid sm:grid-cols-2">
              <div className="block">
                <Label
                  forId={`caGeneralForm_FirstnameSponsorshipForms`}
                  label="Firstname"
                  required={true}
                />
                <Input
                  id={`caGeneralForm_FirstnameSponsorshipForms`}
                  type="text"
                  name={`firstname`}
                  placeholder="Eg: Alexandre"
                  ariaLabel={`Firstname A - SponsorshipForms`}
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
                  forId={`caGeneralForm_LastnameSponsorshipForms`}
                  label="Lastname"
                  required={true}
                />
                <Input
                  id={`caGeneralForm_LastnameSponsorshipForms`}
                  type="text"
                  name={`lastname`}
                  placeholder="Eg: Doe"
                  ariaLabel={`Lastname - SponsorshipForms`}
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
            <div className="block mb-4 last:mb-0">
              <Label
                forId={`caGeneralForm_EmailSponsorshipForms`}
                label="Email"
                required={true}
              />
              <Input
                id={`caGeneralForm_EmailSponsorshipForms`}
                type="email"
                name="email"
                placeholder="Eg: example@email.com"
                ariaLabel={`Email - SponsorshipForms`}
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
            {isFormSponsorship?.form && (
              <div className="mb-4 grid-cols-1 gap-x-4 gap-y-4 last:mb-0 supports-grid:grid sm:grid-cols-2">
                <div
                  className={`"block ${
                    errors[`jobtitleSponsorship`] && "error"
                  }`}
                >
                  <Label
                    forId={`caGeneralForm_jobtitleSponsorship`}
                    label="Position"
                    required={true}
                  />
                  <Select
                    id={`caGeneralForm_jobtitleSponsorship`}
                    ariaLabel={`Jobtitle Sponsorship`}
                    label="Choose a jobtitle..."
                    listSelect={
                      isFormSponsorship?.form?.formFieldGroups[3].fields[0]
                        .options
                    }
                    config={{
                      ...register(`jobtitleSponsorship`, {
                        required: "Please select a jobtitle sponsorship",
                      }),
                    }}
                  />
                </div>
                <div
                  className={`"block ${
                    errors[`countrySponsorship`] && "error"
                  }`}
                >
                  <Label
                    forId={`caGeneralCountry_SponsorshipForms`}
                    label="Country"
                    required={true}
                  />
                  <SelectCountry
                    id={`caGeneralCountry_SponsorshipForms`}
                    ariaLabel={`Country - Sponsorship Forms`}
                    listSelect={isFormSponsorship?.country}
                    withIcons={true}
                    config={{
                      ...register(`countrySponsorship`, {
                        required: "Please select a country",
                      }),
                    }}
                  />
                </div>
              </div>
            )}

            {/* @company */}
            <div className="grid-cols-1 gap-x-4 gap-y-4 supports-grid:grid sm:grid-cols-2">
              <div className="block">
                <Label
                  forId={`caGeneralForm_CompanySponsorshipForms`}
                  label="Company name"
                  required={true}
                />
                <Input
                  id={`caGeneralForm_CompanySponsorshipForms`}
                  type="text"
                  name={`name`}
                  placeholder="Eg: Alexandre"
                  ariaLabel={`Company Name - SponsorshipForms`}
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
              {isFormSponsorship?.form && (
                <div
                  className={`"block ${
                    errors[`companyFocusSponsorship`] && "error"
                  }`}
                >
                  <Label
                    forId={`caGeneralForm_CompanyFocusSponsorship`}
                    label="Company Focus"
                    required={true}
                  />
                  <Select
                    id={`caGeneralForm_CompanyFocusSponsorship`}
                    ariaLabel={`CompanyFocus Sponsorship`}
                    label="Choose a Company Focus..."
                    listSelect={
                      isFormSponsorship?.form?.formFieldGroups[5].fields[0]
                        .options
                    }
                    config={{
                      ...register(`companyFocusSponsorship`, {
                        required: "Please select a jobtitle sponsorship",
                      }),
                    }}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="mb-6 flex flex-col last:mb-0">
              <Label
                forId={`previouslyCompanySponsorship`}
                label="Did your company sponsor Coinfest Asia previously?"
                required={true}
              />
              <div className="grid space-y-3 mt-2">
                {isFormSponsorship?.form?.formFieldGroups[6]?.fields[0].options?.map(
                  (gRslt, i) => (
                    <div className="space-y-2" key={i}>
                      <label
                        htmlFor={`radioSponsorshipPreviousForm${gRslt.name}${i}`}
                        className={`flex w-full items-center cursor-pointer`}
                      >
                        <input
                          id={`radioSponsorshipPreviousForm${gRslt.name}${i}`}
                          type="radio"
                          className="boxShadow-none form-radio pointer-events-none h-5 w-5 shrink-0 rounded-full  border border-solid border-gray-500/20 bg-transparent text-primary outline-none ring-0 focus:outline-none focus-visible:outline-none"
                          name={`radioSponsorshipPreviousForm${gRslt.name}`}
                          value={gRslt.value}
                          {...register(
                            "did_your_company_sponsor_coinfest_asia_previously_",
                            {
                              required: true,
                            }
                          )}
                        />
                        <span className="ml-3 font-bevietnamPro text-sm font-normal text-black-900">
                          {gRslt.label}
                        </span>
                      </label>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex w-max flex-col mb-2">
              <h2 className="font-bevietnamPro text-xl font-semibold text-black-900 sm:text-[28px] sm:font-bold sm:leading-[34px]">
                Exhibiting at Coinfest Asia
              </h2>
            </div>

            {isFormSponsorship?.form && (
              <>
                <Label
                  forId={`interesredSponsorship`}
                  label="In Coinfest Asia 2025, we are interested in?"
                  required={true}
                />
                <div className="grid space-y-4 mt-2">
                  {isFormSponsorship?.form?.formFieldGroups[7].fields[0].options?.map(
                    (gRslt, i) => (
                      <label
                        htmlFor={`intrestSponsorshipForm${i}`}
                        className={`flex w-full items-center cursor-pointer`}
                        key={i}
                      >
                        <input
                          type="checkbox"
                          id={`intrestSponsorshipForm${i}`}
                          className="boxShadow-none form-checkbox pointer-events-none h-5 w-5 shrink-0 rounded border border-solid border-gray-500/20 bg-transparent text-primary outline-none ring-0 focus:outline-none focus-visible:outline-none"
                          name="intrestSponsorshipForm[]"
                          value={gRslt.value}
                          {...register(
                            "in_coinfest_asia_2024__we_are_interested_in",
                            {
                              required: true,
                            }
                          )}
                          onChange={(e) => {
                            handleInterestedChange(gRslt.value);
                          }}
                        />

                        <span className="ml-3 font-bevietnamPro text-sm font-normal text-black-900">
                          {gRslt.label}
                        </span>
                      </label>
                    )
                  )}
                </div>

                {selectInterestedOthrs?.includes("Other") && (
                  <div className="block mb-4 mt-4 last:mb-0">
                    <Label
                      forId={`caGeneralForm_InterestedOthersSponsorshipForms`}
                      label="Others : If you pick 'Other', tell us what kind of activations you'd like to explore?"
                      required={true}
                    />
                    <Input
                      id={`caGeneralForm_InterestedOthersSponsorshipForms`}
                      type="text"
                      name="if_you_pick__other___tell_us_what_kind_of_activations_you_d_like_to_explore"
                      placeholder="If you pick 'Other', tell us what kind of activations you'd like to explore"
                      ariaLabel={`Interested Others - SponsorshipForms`}
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
              </>
            )}

            <div className="mb-6 mt-4 flex flex-col last:mb-0">
              <Label
                forId={`inputDidYourCompanySponsor`}
                label="Your range of budget to sponsor Coinfest Asia 2025?"
                required={true}
              />
              <div className="grid space-y-4 mt-2">
                {isFormSponsorship?.form?.formFieldGroups[9].fields[0].options?.map(
                  (gRslt, i) => (
                    <div className="space-y-3" key={i}>
                      <label
                        htmlFor={`radioBudgetSponsorshipForm${gRslt.name}${i}`}
                        className={`flex w-full items-center cursor-pointer`}
                      >
                        <input
                          id={`radioBudgetSponsorshipForm${gRslt.name}${i}`}
                          type="radio"
                          className="boxShadow-none form-radio pointer-events-none h-5 w-5 shrink-0 rounded-full  border border-solid border-gray-500/20 bg-transparent text-primary outline-none ring-0 focus:outline-none focus-visible:outline-none"
                          name={`radioBudgetSponsorshipForm${gRslt.name}`}
                          value={gRslt.value}
                          {...register("budget", {
                            required: true,
                          })}
                        />
                        <span className="ml-3 font-bevietnamPro text-sm font-normal text-black-900">
                          {gRslt.label}
                        </span>
                      </label>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* @submit */}
          <div className="flex flex-col">
            <button
              type="submit"
              className={`mt-6 flex w-full flex-col items-center justify-center rounded-[14px] bg-black-900 text-white py-6 font-bevietnamPro text-base font-normal text-white outline-none transition duration-[0.3] ease-in-out focus-visible:outline-none`}
              aria-label="Submit (Sponsorship)"
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
                "Submit"
              )}
            </button>
          </div>
        </form>
      </PanelLayouts>
    </>
  );
};

SponsorshipGetInvolved.getLayout = function PageLayout(page) {
  return <>{page}</>;
};

export const getStaticProps = async () => {
  const [rsIpAddress, rsCountry, rsFormSponsorship] = await Promise.all([
    getFetchUrl(
      `https://ipinfo.io/json?token=${serverRuntimeConfig.ipAddress_token}`
    ),
    getFetchUrl(`https://restcountries.com/v3.1/all?fields=name,flags`),
    getFetch(`/forms/v2/forms/bf625b40-82e5-4c4f-818d-7a6cfbe47a81`),
  ]);

  try {
    return {
      props: {
        ipAddrs: rsIpAddress || [],
        formSponsorship: rsFormSponsorship || [],
        countryRegion: rsCountry || [],
      },
      revalidate: 900,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

export default SponsorshipGetInvolved;
