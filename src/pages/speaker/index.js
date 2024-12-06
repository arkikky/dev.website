import React, { useState } from "react";
import { useRouter } from "next/router";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import getConfig from "next/config";

// # @get .config
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

// @style
import "react-phone-input-2/lib/high-res.css";

// @lib
import { getFetch, SubmitForm } from "@lib/controller/HubSpot";
import { getFetchUrl } from "@lib/controller/Api";

// @components
// @form
import Label from "@components/UI/Form/Label";
import Input from "@components/UI/Form/Input";
import Select from "@components/UI/Form/Select";
import SelectCountry from "@components/UI/Form/SelectCountry";
// @layouts
import PanelLayouts from "@layouts/PanelLayouts";

const Speakers = ({ ipAddrs, formSpeakers, countryRegion }) => {
  const router = useRouter();
  const [isFormSpeakers, setIsFormSpeakers] = useState({
    ipAddress: ipAddrs || [],
    form: formSpeakers || [],
    country: countryRegion || [],
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
    mode: "all",
    defaultValues: {
      if_you_choose__other___tell_us_what_s_in_your_mind: "-",
    },
  });

  const whatTopic = watch(
    "what_topics_are_you_most_able_to_speak_to_authoritatively"
  );

  // @submit
  const onSubmit = async (data) => {
    const btnOpenGmailSuccess = document.querySelector(
      "#btnInterestNewsletterMdl2025"
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
          name: "phone",
          value: data.phone,
        },
        {
          name: "country",
          value: data.countrySpeakers !== null ? data.countrySpeakers : "-",
        },
        {
          name: "what_role_would_you_like_to_fill_in_",
          value:
            data.what_role_would_you_like_to_fill_in_ !== null
              ? data.what_role_would_you_like_to_fill_in_
              : "-",
        },
        {
          name: "what_topics_are_you_most_able_to_speak_to_authoritatively",
          value:
            data.what_topics_are_you_most_able_to_speak_to_authoritatively !==
            null
              ? data.what_topics_are_you_most_able_to_speak_to_authoritatively
              : "-",
        },
        {
          name: "if_you_choose__other___tell_us_what_s_in_your_mind",
          value:
            data.if_you_choose__other___tell_us_what_s_in_your_mind !== ""
              ? data.if_you_choose__other___tell_us_what_s_in_your_mind
              : "-",
        },
        {
          name: "company",
          value: data.company !== "" ? data.company : "-",
        },
        {
          name: "company_focus",
          value:
            data.companyFocusSpeakers !== null
              ? data.companyFocusSpeakers
              : "-",
        },
        {
          name: "job_title_position",
          value: data.jobtitleSpeakers !== null ? data.jobtitleSpeakers : "-",
        },
        {
          name: "website",
          value: data.company_website !== "" ? data.company_website : "-",
        },
        {
          name: "linkedin_profile",
          value: data.linkedin_profile !== "" ? data.linkedin_profile : "-",
        },
        {
          name: "twitterhandle",
          value: data.twitterhandle !== "" ? data.twitterhandle : "-",
        },
        {
          name: "telegram_username",
          value: data.telegram_username !== "" ? data.telegram_username : "-",
        },
      ],
      context: {
        pageUri: "https://coinfest.asia/speaker",
        pageName: "2025 Speakers | Coinfest Asia 2024",
        ipAddress: isFormSpeakers?.ipAddress.ip,
      },
    };

    const isKey = "0568d957-8627-4939-8e88-82bbb8c53e52";
    const rs = await SubmitForm(isConfig, isKey);

    // @debug
    if (rs === true) {
      reset();
      router.replace("/speaker/success");
    }
  };

  return (
    <>
      {/* @main */}
      <PanelLayouts
        headTitle="Speakers"
        title="COINFEST ASIA 2025 SPEAKER SUBMISSION"
        shortDesc={
          "Show and tell your impact-driven ideas, not just theories, on experiential stages."
        }
        btnBack={true}
        brandLogo="white"
        modeDifferent={true}
      >
        <form
          id="formSpeakers"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
          className="mt-0 flex flex-col space-y-8 sm:mt-8"
        >
          <div className="flex flex-col">
            <div className="grid-cols-1 mb-4 last:mb-0 gap-x-4 gap-y-4 supports-grid:grid sm:grid-cols-2">
              <div className="block">
                <Label
                  forId={`caGeneralForm_FirstnameSpeakersForms`}
                  label="Firstname"
                  required={true}
                />
                <Input
                  id={`caGeneralForm_FirstnameSpeakersForms`}
                  type="text"
                  name={`firstname`}
                  placeholder="Eg: Alexandre"
                  ariaLabel={`Firstname A - SpeakersForms`}
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
                  forId={`caGeneralForm_LastnameSpeakersForms`}
                  label="Lastname"
                  required={true}
                />
                <Input
                  id={`caGeneralForm_LastnameSpeakersForms`}
                  type="text"
                  name={`lastname`}
                  placeholder="Eg: Doe"
                  ariaLabel={`Lastname - SpeakersForms`}
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
            <div className="grid-cols-1 mb-4 last:mb-0 gap-x-4 gap-y-4 supports-grid:grid sm:grid-cols-2">
              <div className="block mb-4 last:mb-0">
                <Label
                  forId={`caGeneralForm_EmailSpeakersForms`}
                  label="Email"
                  required={true}
                />
                <Input
                  id={`caGeneralForm_EmailSpeakersForms`}
                  type="email"
                  name="email"
                  placeholder="Eg: example@email.com"
                  ariaLabel={`Email - SpeakersForms`}
                  config={{
                    ...register(`email`, {
                      required: true,
                      maxLength: 120,
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      },
                    }),
                  }}
                  errors={errors[`email`]}
                />
              </div>
              <div className="block">
                <Label
                  forId={`caGeneralForm_PhoneSpeakers`}
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
                      inputClass={`tktCAForm_PhoneInput ${
                        errors[`phone`] && "errors"
                      }`}
                      buttonClass={`tktCAForm_PhoneInputBtn ${
                        errors[`phone`] && "errors"
                      }`}
                      dropdownClass="tktCAForm_PhoneInputDropdown"
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
                  id={`caGeneralForm_PhoneSpeakers`}
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
                <span className="text-xs text-gray-500 mt-1 pr-8 leading-[14px]">
                  Kindly provide your number connected to WhatsApp
                </span>
              </div>
            </div>
            <div className={`"block ${errors[`countrySpeakers`] && "error"}`}>
              <Label
                forId={`caGeneralCountry_SponsorshipForms`}
                label="Country"
                required={true}
              />
              <SelectCountry
                id={`caGeneralCountry_SponsorshipForms`}
                ariaLabel={`Country - Sponsorship Forms`}
                listSelect={isFormSpeakers?.country}
                withIcons={true}
                config={{
                  ...register(`countrySpeakers`, {
                    required: "Please select a country",
                  }),
                }}
              />
            </div>
            <div className="mb-6 mt-4 flex flex-col last:mb-0">
              <Label
                forId={`whouldYouLikeSpeakers`}
                label="What role would you like to fill in?"
                required={true}
              />
              <div className="grid space-y-3 mt-2">
                {isFormSpeakers?.form?.formFieldGroups[4].fields[0].options?.map(
                  (gRslt, i) => (
                    <div className="space-y-2" key={i}>
                      <label
                        htmlFor={`radioWouldYouLikeForm${gRslt.name}${i}`}
                        className={`flex w-full items-center cursor-pointer`}
                      >
                        <input
                          id={`radioWouldYouLikeForm${gRslt.name}${i}`}
                          type="radio"
                          className="boxShadow-none form-radio pointer-events-none h-5 w-5 shrink-0 rounded-full  border border-solid border-gray-500/20 bg-transparent text-primary outline-none ring-0 focus:outline-none focus-visible:outline-none"
                          name={`radioWouldYouLikeForm${gRslt.name}`}
                          value={gRslt.value}
                          {...register("what_role_would_you_like_to_fill_in_", {
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
            <div
              className={`"block ${
                errors[
                  `what_topics_are_you_most_able_to_speak_to_authoritatively`
                ] && "error"
              }`}
            >
              <Label
                forId={`caGeneralForm_WhatTopicsSpeakers`}
                label="What topics are you most able to speak to authoritatively?"
                required={true}
              />
              <Select
                id={`caGeneralForm_WhatTopicsSpeakers`}
                ariaLabel={`What topics Sponsorship`}
                label="Choose a What topics Focus..."
                listSelect={
                  isFormSpeakers?.form?.formFieldGroups[5].fields[0].options
                }
                config={{
                  ...register(
                    `what_topics_are_you_most_able_to_speak_to_authoritatively`,
                    {
                      required: "Please select a jobtitle sponsorship",
                    }
                  ),
                }}
              />
            </div>

            {whatTopic === "Other" && (
              <>
                <div className="block mt-4">
                  <Label
                    forId={`caGeneralForm_WhatTopicOtherSpeakersForms`}
                    label="Company name"
                    required={true}
                  />
                  <Input
                    id={`caGeneralForm_WhatTopicOtherSpeakersForms`}
                    type="text"
                    name={`company`}
                    placeholder="Eg: Alexandre"
                    ariaLabel={`What Topic Other - SponsorshipForms`}
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
                    errors={errors[`name`]}
                  />
                </div>
              </>
            )}

            {/* @company */}
            <div className="grid-cols-1 gap-x-4 mt-4 gap-y-4 supports-grid:grid sm:grid-cols-2">
              <div className="block">
                <Label
                  forId={`caGeneralForm_CompanySpeakersForms`}
                  label="Company name"
                  required={true}
                />
                <Input
                  id={`caGeneralForm_CompanySpeakersForms`}
                  type="text"
                  name={`company`}
                  placeholder="Eg: Alexandre"
                  ariaLabel={`Company Name - SponsorshipForms`}
                  config={{
                    ...register(`company`, {
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
              {isFormSpeakers?.form && (
                <div
                  className={`"block ${
                    errors[`companyFocusSpeakers`] && "error"
                  }`}
                >
                  <Label
                    forId={`caGeneralForm_CompanyFocusSpeakers`}
                    label="Company Focus"
                    required={true}
                  />
                  <Select
                    id={`caGeneralForm_CompanyFocusSpeakers`}
                    ariaLabel={`CompanyFocus Sponsorship`}
                    label="Choose a Company Focus..."
                    listSelect={
                      isFormSpeakers?.form?.formFieldGroups[7].fields[0].options
                    }
                    config={{
                      ...register(`companyFocusSpeakers`, {
                        required: "Please select a jobtitle sponsorship",
                      }),
                    }}
                  />
                </div>
              )}
            </div>
            <div className="mb-4 mt-4 grid-cols-1 gap-x-4 gap-y-4 last:mb-0 supports-grid:grid sm:grid-cols-2">
              <div
                className={`"block ${errors[`jobtitleSpeakers`] && "error"}`}
              >
                <Label
                  forId={`caGeneralForm_jobtitleSpeakers`}
                  label="Position"
                  required={true}
                />
                <Select
                  id={`caGeneralForm_jobtitleSpeakers`}
                  ariaLabel={`Jobtitle Sponsorship`}
                  label="Choose a jobtitle..."
                  listSelect={
                    isFormSpeakers?.form?.formFieldGroups[7].fields[1].options
                  }
                  config={{
                    ...register(`jobtitleSpeakers`, {
                      required: "Please select a jobtitle sponsorship",
                    }),
                  }}
                />
              </div>
              <div className="block">
                <Label
                  forId={`caGeneralForm_WCompanyWebsiteSpeakersForms`}
                  label="Company Website"
                  required={true}
                />
                <Input
                  id={`caGeneralForm_WCompanyWebsiteSpeakersForms`}
                  type="text"
                  name={`company_website`}
                  placeholder="Eg: Doe"
                  ariaLabel={`company_website - SpeakersForms`}
                  config={{
                    ...register(`company_website`, {
                      required: true,
                      maxLength: 120,
                      pattern: {
                        value:
                          /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\w\d\-.\/]*)*\/?$|^N\/A$|^-$/,
                        message: "Please enter a valid URL",
                      },
                    }),
                  }}
                  errors={errors[`company_website`]}
                />
              </div>
            </div>
            <div className="block">
              <Label
                forId={`caGeneralForm_LinkedInSpeakersForms`}
                label="Linkedin Profile"
                required={true}
              />
              <Input
                id={`caGeneralForm_LinkedInSpeakersForms`}
                type="text"
                name={`linkedin_profile`}
                placeholder="Eg: Alexandre"
                ariaLabel={`linkedin_profile A - SpeakersForms`}
                config={{
                  ...register(`linkedin_profile`, {
                    required: true,
                    maxLength: 120,
                    pattern: {
                      value:
                        /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\w\d\-.\/]*)*\/?$|^N\/A$|^-$/,
                      message: "Please enter a valid URL",
                    },
                  }),
                }}
                errors={errors[`linkedin_profile`]}
              />
            </div>
            <div className="grid-cols-1 mb-4 mt-4 last:mb-0 gap-x-4 gap-y-4 supports-grid:grid sm:grid-cols-2">
              <div className="block">
                <Label
                  forId={`caGeneralForm_TwitterSpeakersForms`}
                  label="Twitter Profile"
                  required={true}
                />
                <Input
                  id={`caGeneralForm_TwitterSpeakersForms`}
                  type="text"
                  name={`twitterhandle`}
                  placeholder="Eg: Alexandre"
                  ariaLabel={`twitterhandle A - SpeakersForms`}
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
                  forId={`caGeneralForm_TelegramSpeakersForms`}
                  label="Telegram Username"
                  required={true}
                />
                <Input
                  id={`caGeneralForm_TelegramSpeakersForms`}
                  type="text"
                  name={`telegram_username`}
                  placeholder="Eg: Doe"
                  ariaLabel={`Lastname - SpeakersForms`}
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
          </div>

          {/* @submit */}
          <div className="flex flex-col">
            <button
              type="submit"
              className={`mt-6 flex w-full flex-col items-center justify-center rounded-[14px] bg-black-900 text-white py-6 font-bevietnamPro text-base font-normal text-white outline-none transition duration-[0.3] ease-in-out focus-visible:outline-none`}
              aria-label="Submit (Interest)"
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

export const getStaticProps = async () => {
  const [rsIpAddress, rsCountry, rsFormSpeakers] = await Promise.all([
    getFetchUrl(
      `https://ipinfo.io/json?token=${serverRuntimeConfig.ipAddress_token}`
    ),
    getFetchUrl(`https://restcountries.com/v3.1/all?fields=name,flags`),
    getFetch(`/forms/v2/forms/0568d957-8627-4939-8e88-82bbb8c53e52`),
  ]);

  try {
    return {
      props: {
        ipAddrs: rsIpAddress || [],
        countryRegion: rsCountry || [],
        formSpeakers: rsFormSpeakers || [],
      },
      revalidate: 900,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

Speakers.getLayout = function PageLayout(page) {
  return <>{page}</>;
};

export default Speakers;
