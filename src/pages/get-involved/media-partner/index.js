import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import Select from "react-select";
import getConfig from "next/config";
import Head from "next/head";

// @get .config
const { publicRuntimeConfig } = getConfig();

// @lib
import { getFetch, SubmitForm } from "@lib/controller/HubSpot";
import { getFetchUrl } from "@lib/controller/API";

// @style-css
import "react-phone-number-input/style.css";

// @layouts
import PartnershipLayouts from "@layouts/PartnershipLayouts";

const MediaPartnerGetInvolved = ({ ipAddrs, formMediaPartner }) => {
  const [frmMediaPartner, setFormMediaPartner] = useState(formMediaPartner);
  const [isForm, setForm] = useState({
    mobilephone: "",
  });
  const [companyFocusSelect, setCompanyFocusSelect] = useState(null);
  const [jobsPositionSelect, setJobsPositionSelect] = useState(null);
  const [selectSocialMediaOthrs, setSelectSocialMediaOthrs] = useState([]);

  const {
    watch,
    register,
    control,
    formState: { isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "all",
  });

  // @debug
  // console.log(frmMediaPartner.formFieldGroups);
  // console.log(frmMediaPartner.formFieldGroups[7].fields[0].options);

  // @handle-socialmedia-others
  const handleSocialMediaOthrs = (value) => {
    if (selectSocialMediaOthrs.includes(value)) {
      setSelectSocialMediaOthrs(
        selectSocialMediaOthrs.filter((item) => item !== value),
      );
    } else {
      setSelectSocialMediaOthrs([...selectSocialMediaOthrs, value]);
    }
  };

  // @submit
  const onSubmit = async (data) => {
    const btnSuccessNewsletter = document.querySelector(
      "#btnSuccessNewsletterMdl.btnSuccessNewsletterMdl",
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
          value: isForm.mobilephone,
        },
        {
          objectTypeId: "0-1",
          name: "telegram_username",
          value: data.telegram_username !== "" ? data.telegram_username : "-",
        },
        {
          objectTypeId: "0-1",
          name: "position",
          value: companyFocusSelect !== null ? companyFocusSelect.value : "-",
        },
        {
          objectTypeId: "0-1",
          name: "job_title_position",
          value: jobsPositionSelect !== null ? jobsPositionSelect.value : "-",
        },
        {
          objectTypeId: "0-1",
          name: "company",
          value: data.company !== "" ? data.company : "-",
        },
        {
          objectTypeId: "0-1",
          name: "website",
          value: data.website !== "" ? data.website : "-",
        },
        {
          objectTypeId: "0-2",
          name: "outlet_affiliation_social_media",
          value: data.outlet_affiliation_social_media.join(";"),
        },
        {
          objectTypeId: "0-2",
          name: "if_you_choose_other__tell_us_what_other_social_media_platforms_do_you_owned",
          value:
            selectSocialMediaOthrs.includes("Other") === true
              ? data.if_you_choose_other__tell_us_what_other_social_media_platforms_do_you_owned
              : "-",
        },
        {
          objectTypeId: "0-2",
          name: "what_is_the_primary_format_of_your_outlet_",
          value: data.what_is_the_primary_format_of_your_outlet_,
        },
        {
          objectTypeId: "0-2",
          name: "distribution",
          value: data.distribution.join(";"),
        },
        {
          objectTypeId: "0-2",
          name: "frequency",
          value: data.frequency,
        },
        {
          objectTypeId: "0-1",
          name: "all_of_the_information_i_have_provided_above_is_correct_and_up_to_date_",
          value:
            data.all_of_the_information_i_have_provided_above_is_correct_and_up_to_date_,
        },
      ],
      context: {
        pageUri: "https://coinfest.asia/get-involved/media-partner",
        pageName: "Media Partner | Coinfest Asia 2024",
        ipAddress: ipAddrs.ip,
      },
    };

    const isKey = "f1980ee4-4ef7-463d-96af-15d73a821753";

    const rs = await SubmitForm(isConfig, isKey);

    // @debug
    // console.log(isConfig);

    if (rs === true) {
      setForm({ ...isForm, mobilephone: "" });
      setCompanyFocusSelect([]);
      setJobsPositionSelect([]);
      setSelectSocialMediaOthrs([]);
      btnSuccessNewsletter.click();
      reset();
    }
  };
  
  return (
    <>
      {/* @head */}
      <Head>
        <title>{`Media Partner | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta
          name="title"
          content={`Media Partner | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta name="description" content={publicRuntimeConfig.siteDesc} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="og:title"
          content={`Media Partner | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta
          property="og:description"
          content={publicRuntimeConfig.siteDesc}
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_UPLOAD}/uploads/ca2024_Thumbnails_Share_Link_App_9964b5c353.png`}
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="twitter:title"
          content={`Media Partner | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta
          property="twitter:description"
          content={publicRuntimeConfig.siteDesc}
        />
        <meta
          property="twitter:image"
          content={`${process.env.NEXT_PUBLIC_UPLOAD}/uploads/ca2024_Thumbnails_Share_Link_App_9964b5c353.png`}
        />
      </Head>

      {/* @main */}
      <PartnershipLayouts
        title="Coinfest asia 2024 Partner Media inquiry"
        btnBack={true}
        urlBack={"/get-involved"}
      >
        <form
          id="formMediaPartner"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
          className="mt-0 flex flex-col space-y-8 sm:mt-6"
        >
          <div className="flex flex-col">
            <div className="mb-4 grid-cols-1 gap-x-4 gap-y-4 last:mb-0 supports-grid:grid sm:grid-cols-2">
              <div className="flex flex-col">
                <label
                  htmlFor="firstnameMediaPartner"
                  className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                >
                  First name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstnameMediaPartner"
                  className="form-input rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal capitalize text-black-900 placeholder:text-[#9A9A9A]"
                  name="firstname"
                  placeholder="Michael"
                  {...register("firstname", {
                    required: true,
                    maxLength: 50,
                  })}
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="lastnameMediaPartner"
                  className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                >
                  Last name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastnameMediaPartner"
                  className="form-input rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal capitalize text-black-900 placeholder:text-[#9A9A9A]"
                  name="lastname"
                  placeholder="Zhao"
                  {...register("lastname", {
                    required: true,
                    maxLength: 50,
                  })}
                />
              </div>
            </div>
            <div className="mb-4 flex flex-col last:mb-0">
              <label
                htmlFor="emailMediaPartner"
                className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="emailMediaPartner"
                className="form-input rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal lowercase text-black-900 placeholder:text-[#9A9A9A]"
                name="email"
                placeholder="michaelzhao@company.com"
                {...register("email", {
                  required: true,
                  maxLength: 50,
                })}
              />
            </div>
            <div className="mb-4 grid-cols-1 gap-x-4 gap-y-4 last:mb-0 supports-grid:grid sm:grid-cols-2">
              <div className="flex flex-col">
                <label
                  htmlFor="inputMobileMediaPartner"
                  className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                >
                  Mobile Phone <span className="text-red-500">*</span>
                </label>
                <PhoneInputWithCountry
                  international
                  countryCallingCodeEditable={false}
                  id="mobilephoneMediaPartner"
                  className="form-input rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal capitalize text-black-900 placeholder:text-[#9A9A9A]"
                  name="phone"
                  placeholder="+14161114646"
                  control={control}
                  rules={{ required: true }}
                  value={isForm.mobilephone}
                  defaultCountry={ipAddrs.country}
                  onChange={(e) => setForm({ ...isForm, mobilephone: e })}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="telegramUsernameMediaPartner"
                  className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                >
                  Telegram Username
                </label>
                <input
                  type="text"
                  id="telegramUsernameMediaPartner"
                  className="form-input rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal lowercase text-black-900 placeholder:text-[#9A9A9A]"
                  name="telegram_username"
                  placeholder="@coinfest.asia"
                  {...register("telegram_username", {
                    required: false,
                  })}
                />
              </div>
            </div>
            <div className="mb-4 grid-cols-1 gap-x-4 gap-y-4 last:mb-0 supports-grid:grid sm:grid-cols-2">
              <div className="flex flex-col">
                <label
                  htmlFor="companyFocusMediaPartner"
                  className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                >
                  Company focus <span className="text-red-500">*</span>
                </label>
                <Select
                  defaultValue={companyFocusSelect}
                  onChange={setCompanyFocusSelect}
                  options={frmMediaPartner.formFieldGroups[3].fields[0].options}
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="jobtitleMediaPartner"
                  className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                >
                  Position <span className="text-red-500">*</span>
                </label>
                <Select
                  defaultValue={jobsPositionSelect}
                  onChange={setJobsPositionSelect}
                  options={frmMediaPartner.formFieldGroups[3].fields[1].options}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex w-max flex-col">
              <h2 className="font-bevietnamPro text-xl font-semibold text-black-900 sm:text-[28px] sm:font-bold sm:leading-[34px]">
                Media Outlet/Affiliation
              </h2>
            </div>

            <div className="mt-4 flex flex-col last:mb-0">
              <label
                htmlFor="affiliationCompanyMediaPartner"
                className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
              >
                Outlet/Affiliation name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="affiliationCompanyMediaPartner"
                className="form-input rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal text-black-900 placeholder:text-[#9A9A9A]"
                name="company"
                placeholder="https://company.io"
                {...register("company", {
                  required: true,
                  maxLength: 255,
                })}
              />
            </div>

            <div className="mb-4 mt-4 flex flex-col last:mb-0">
              <label
                htmlFor="affiliationMediaPartner"
                className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
              >
                Outlet/Affiliation URL <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                id="affiliationMediaPartner"
                className="form-input rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal lowercase text-black-900 placeholder:text-[#9A9A9A]"
                name="website"
                placeholder="https://coinfest.asia/"
                {...register("website", {
                  required: true,
                })}
              />
            </div>

            <div className="mb-4 flex flex-col last:mb-0">
              <label
                htmlFor="logoURLMediaPartner"
                className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
              >
                Link to your community logo{" "}
                <span className="text-red-500">*</span>
              </label>
              <span className="mb-2 font-bevietnamPro text-xs font-normal text-black-900/60">
                Make sure your logo fits these criteria: <br />- Minimum size
                500x500 px <br />- Format is SVG and/or PNG
              </span>
              <input
                type="url"
                id="logoURLMediaPartner"
                className="form-input rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal lowercase text-black-900 placeholder:text-[#9A9A9A]"
                name="logo_url"
                placeholder="https://google.drive.com : Make sure your logo fits these criteria:"
                {...register("logo_url", {
                  required: true,
                })}
              />
            </div>

            {frmMediaPartner && (
              <>
                <div className="mb-6 flex flex-col last:mb-0">
                  <label
                    htmlFor="inputOtherIntrested"
                    className="mb-4 text-start font-bevietnamPro text-base font-normal text-black-900"
                  >
                    Outlet/Affiliation Social Media?{" "}
                    <span className="text-red-500">*</span>
                  </label>

                  <div className="grid space-y-4">
                    {frmMediaPartner.formFieldGroups[7].fields[0].options?.map(
                      (gRslt, i) => (
                        <label
                          htmlFor={`checkboxSocialMediaPartnerForm${i}`}
                          className={`flex w-full`}
                          key={i}
                        >
                          <input
                            id={`checkboxSocialMediaPartnerForm${i}`}
                            type="checkbox"
                            className="boxShadow-none form-checkbox pointer-events-none mt-1 h-5 w-5 shrink-0 rounded  border border-solid border-white/20 bg-transparent text-secondary outline-none ring-0 focus:outline-none focus-visible:outline-none sm:mt-0.5"
                            name="checkboxSocialMediaPartnerForm[]"
                            value={gRslt.value}
                            {...register("outlet_affiliation_social_media", {
                              required: true,
                            })}
                            onChange={(e) => {
                              handleSocialMediaOthrs(gRslt.value);
                            }}
                          />

                          <span className="ml-3 font-bevietnamPro text-base font-normal text-black-900">
                            {gRslt.label}
                          </span>
                        </label>
                      ),
                    )}
                  </div>

                  {selectSocialMediaOthrs.includes("Other") === true && (
                    <div className="mt-4 flex flex-col">
                      <label
                        htmlFor="inputOtherIntresteSpeakers"
                        className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                      >
                        Others : If you choose 'Other', tell us what other
                        social media platforms do you owned{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="inputOtherIntresteSpeakers"
                        className="form-input rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal capitalize text-black-900 placeholder:text-[#9A9A9A]"
                        name="if_you_choose_other__tell_us_what_other_social_media_platforms_do_you_owned"
                        placeholder="If you choose 'Other', tell us what other social media platforms do you owned"
                        {...register(
                          "if_you_choose_other__tell_us_what_other_social_media_platforms_do_you_owned",
                          {
                            required: true,
                            maxLength: 255,
                          },
                        )}
                      />
                    </div>
                  )}
                </div>

                <div className="mb-6 flex flex-col last:mb-0">
                  <label
                    htmlFor="inputDidYourCompanySpeakers"
                    className="mb-3 text-start font-bevietnamPro text-base font-normal text-black-900"
                  >
                    What is the primary format of your outlet?{" "}
                    <span className="text-red-500">*</span>
                  </label>

                  <div className="grid space-y-4">
                    {frmMediaPartner.formFieldGroups[8].fields[0].options?.map(
                      (gRslt, i) => (
                        <label
                          htmlFor={`radioPrimaryMediaPartnerForm${gRslt.name}${i}`}
                          className={`flex w-full`}
                          key={i}
                        >
                          <input
                            id={`radioPrimaryMediaPartnerForm${gRslt.name}${i}`}
                            type="radio"
                            className="boxShadow-none form-radio pointer-events-none mt-[3px] h-5 w-5 shrink-0 rounded-full border border-solid border-white/20 bg-transparent text-secondary outline-none ring-0 focus:outline-none focus-visible:outline-none sm:mt-[3px]"
                            name={`radioPrimaryMediaPartnerForm_${gRslt.name}`}
                            value={gRslt.value}
                            {...register(
                              "what_is_the_primary_format_of_your_outlet_",
                              {
                                required: true,
                              },
                            )}
                          />
                          <span className="ml-3 font-bevietnamPro text-base font-normal text-black-900">
                            {gRslt.label}
                          </span>
                        </label>
                      ),
                    )}
                  </div>
                </div>

                <div className="mb-6 flex flex-col last:mb-0">
                  <label
                    htmlFor="inputOtherIntrested"
                    className="mb-4 text-start font-bevietnamPro text-base font-normal text-black-900"
                  >
                    Frequency? <span className="text-red-500">*</span>
                  </label>

                  <div className="grid space-y-4">
                    {frmMediaPartner.formFieldGroups[10].fields[0].options?.map(
                      (gRslt, i) => (
                        <label
                          htmlFor={`radioFrequencyMediaPartnerForm${i}`}
                          className={`flex w-full`}
                          key={i}
                        >
                          <input
                            id={`radioFrequencyMediaPartnerForm${i}`}
                            type="radio"
                            className="boxShadow-none form-radio pointer-events-none mt-[3px] h-5 w-5 shrink-0 rounded-full  border border-solid border-white/20 bg-transparent text-secondary outline-none ring-0 focus:outline-none focus-visible:outline-none sm:mt-[3px]"
                            name={`radioFrequencyMediaPartnerForm`}
                            value={gRslt.value}
                            {...register("frequency", {
                              required: true,
                            })}
                          />
                          <span className="ml-3 font-bevietnamPro text-base font-normal text-black-900">
                            {gRslt.label}
                          </span>
                        </label>
                      ),
                    )}
                  </div>
                </div>

                <div className="mb-6 flex flex-col last:mb-0">
                  <label
                    htmlFor="inputOtherIntrested"
                    className="mb-4 text-start font-bevietnamPro text-base font-normal text-black-900"
                  >
                    Distribution? <span className="text-red-500">*</span>
                  </label>

                  <div className="grid space-y-4">
                    {frmMediaPartner.formFieldGroups[10].fields[0].options?.map(
                      (gRslt, i) => (
                        <label
                          htmlFor={`checkboxDistriMediaPartnerForm${i}`}
                          className={`flex w-full`}
                          key={i}
                        >
                          <input
                            id={`checkboxDistriMediaPartnerForm${i}`}
                            type="checkbox"
                            className="boxShadow-none form-checkbox pointer-events-none mt-1 h-5 w-5 shrink-0 rounded  border border-solid border-white/20 bg-transparent text-secondary outline-none ring-0 focus:outline-none focus-visible:outline-none sm:mt-0.5"
                            name="checkboxDistriMediaPartnerForm[]"
                            value={gRslt.value}
                            {...register("distribution", {
                              required: true,
                            })}
                          />

                          <span className="ml-3 font-bevietnamPro text-base font-normal text-black-900">
                            {gRslt.label}
                          </span>
                        </label>
                      ),
                    )}
                  </div>
                </div>

                <div className="mb-6 flex flex-col last:mb-0">
                  <label
                    htmlFor="inputDidYourCompanySpeakers"
                    className="mb-3 text-start font-bevietnamPro text-base font-normal text-black-900"
                  >
                    All of the information I have provided above is correct and
                    up to date. <span className="text-red-500">*</span>
                  </label>

                  {frmMediaPartner.formFieldGroups[12].fields[0].options?.map(
                    (gRslt, i) => (
                      <label
                        htmlFor={`radioCorrectInformationMediaPartnerForm${gRslt.name}${i}`}
                        className={`flex w-full`}
                        key={i}
                      >
                        <input
                          id={`radioCorrectInformationMediaPartnerForm${gRslt.name}${i}`}
                          type="radio"
                          className="boxShadow-none form-radio pointer-events-none mt-[3px] h-5 w-5 shrink-0 rounded-full border border-solid border-white/20 bg-transparent text-secondary outline-none ring-0 focus:outline-none focus-visible:outline-none sm:mt-[3px]"
                          name={`radioCorrectInformationMediaPartnerForm_${gRslt.name}`}
                          value={gRslt.value}
                          {...register(
                            "all_of_the_information_i_have_provided_above_is_correct_and_up_to_date_",
                            {
                              required: true,
                            },
                          )}
                        />
                        <span className="ml-3 font-bevietnamPro text-base font-normal text-black-900">
                          {gRslt.label}
                        </span>
                      </label>
                    ),
                  )}
                </div>
              </>
            )}
          </div>

          {/* @submit */}
          <div className="flex flex-col">
            <button
              type="submit"
              className={`mt-6 flex w-full flex-col items-center justify-center rounded-[14px] !bg-secondary py-4 font-bevietnamPro text-base font-normal text-white outline-none transition duration-[0.3] ease-in-out focus-visible:outline-none`}
              aria-label="Submit (Media Partner)"
            >
              Submit
            </button>
          </div>
        </form>
      </PartnershipLayouts>
    </>
  );
};

export default MediaPartnerGetInvolved;

export const getStaticProps = async () => {
  const gIpAddress = await getFetchUrl(
    `https://ipinfo.io/json?token=135855871d1f46`,
  );

  const gHbFormMediaPartner = await getFetch(
    `/forms/v2/forms/f1980ee4-4ef7-463d-96af-15d73a821753`,
  );

  try {
    return {
      props: {
        ipAddrs: gIpAddress || [],
        formMediaPartner: gHbFormMediaPartner || [],
      },

      revalidate: 3600,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

MediaPartnerGetInvolved.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
