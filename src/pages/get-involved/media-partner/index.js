import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import PhoneInput from "react-phone-number-input";
import getConfig from "next/config";
import Head from "next/head";

// @get .config
const { publicRuntimeConfig } = getConfig();

// @lib
import { getFetch, SubmitForm } from "@lib/controller/HubSpot";
import { getFetchUrl } from "@lib/controller/API";

// @components
import PartnershipLayouts from "@layouts/PartnershipLayouts";

const MediaPartner = (props) => {
  const [isIpAddress, setIpAddress] = useState(props.ipAddress || []);
  const [frmMediaPartner, setFormMediaPartner] = useState(
    props.formMediaPartner
  );
  const [isForm, setForm] = useState({
    mobilephone: "",
  });

  const [selctdCheckboxAffiliationOthrs, setSelctdCheckboxAffiliationOthrs] =
    useState([]);
  const [selectedCheckboxesOthrs, setSelectedCheckboxesOthrs] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const {
    watch,
    register,
    formState: { isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "all",
  });

  useEffect(() => {
    const intBody = document.body;

    if (intBody.classList.contains("overflow-y-hidden")) {
      intBody.classList.remove("overflow-y-hidden");
    }

    return () => {
      undefined;
    };
  }, []);

  const handleSelectOption = (e) => {
    setSelectedOption(e.value);
  };

  const handleCheckboxChangeAffiliation = (value) => {
    if (selctdCheckboxAffiliationOthrs.includes(value)) {
      setSelctdCheckboxAffiliationOthrs(
        selctdCheckboxAffiliationOthrs.filter((item) => item !== value)
      );
    } else {
      setSelctdCheckboxAffiliationOthrs([
        ...selctdCheckboxAffiliationOthrs,
        value,
      ]);
    }
  };

  const handleCheckboxChange = (value) => {
    if (selectedCheckboxesOthrs.includes(value)) {
      setSelectedCheckboxesOthrs(
        selectedCheckboxesOthrs.filter((item) => item !== value)
      );
    } else {
      setSelectedCheckboxesOthrs([...selectedCheckboxesOthrs, value]);
    }
  };

  // @Submit
  const onSubmit = async (data) => {
    const btnSuccessNewsletter = document.querySelector(
      "#mdlBtnSuccessNewsletter.mdlBtnSuccessNewsletter"
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
          value: selectedOption,
        },
        {
          objectTypeId: "0-1",
          name: "jobtitle",
          value: data.jobtitle !== "" ? data.jobtitle : "-",
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
            selctdCheckboxAffiliationOthrs.includes("Other") === true
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
          value: data.frequency.join(";"),
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
        pageName: "Media Partner Coinfest Asia 2024",
        ipAddress: isIpAddress.ip,
      },
    };

    const isKey = "f1980ee4-4ef7-463d-96af-15d73a821753";

    const rs = await SubmitForm(isConfig, isKey);

    if (rs === true) {
      setForm({ ...isForm, mobilephone: "" });
      setSelectedOption(null);
      setSelctdCheckboxAffiliationOthrs([]);
      setSelectedCheckboxesOthrs([]);
      btnSuccessNewsletter.click();
      reset();
    }
  };

  return (
    <>
      {/* @Head */}
      <Head>
        <title>{`Media Partner | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta
          name="title"
          content={`Media Partner | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta
          name="description"
          content={
            "Coinfest immerses you directly into adoption, innovation, and emerging markets in Asia. Join the immersive Web3 festival! Bali - August 2024"
          }
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="og:title"
          content={`Media Partner | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta
          property="og:description"
          content={
            "Coinfest immerses you directly into adoption, innovation, and emerging markets in Asia. Join the immersive Web3 festival! Bali - August 2024"
          }
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
          content={
            "Coinfest immerses you directly into adoption, innovation, and emerging markets in Asia. Join the immersive Web3 festival! Bali - August 2024"
          }
        />
        <meta
          property="twitter:image"
          content={`${process.env.NEXT_PUBLIC_UPLOAD}/uploads/ca2024_Thumbnails_Share_Link_App_9964b5c353.png`}
        />
      </Head>

      {/* @main */}
      <PartnershipLayouts title="Coinfest asia 2024 Partner Media inquiry">
        <form
          id={"rstFormCommunity"}
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-8 mt-0 sm:mt-6"
        >
          <div className="flex flex-col">
            <div className="supports-grid:grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4 mb-4 last:mb-0">
              <div className="flex flex-col">
                <label
                  htmlFor="inputFirstnameMediaPartner"
                  className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-2"
                >
                  First name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="inputFirstnameMediaPartner"
                  className="bg-white rounded-lg border border-solid border-[#E3E3E3] text-black-900 placeholder:text-[#9A9A9A] font-bevietnamPro text-sm font-normal capitalize py-5 px-4"
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
                  htmlFor="inputLastnameMediaPartner"
                  className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-2"
                >
                  Last name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="inputLastnameMediaPartner"
                  className="bg-white rounded-lg border border-solid border-[#E3E3E3] text-black-900 placeholder:text-[#9A9A9A] font-bevietnamPro text-sm font-normal capitalize py-5 px-4"
                  name="lastname"
                  placeholder="Zhao"
                  {...register("lastname", {
                    required: true,
                    maxLength: 50,
                  })}
                />
              </div>
            </div>
            <div className="flex flex-col mb-4 last:mb-0">
              <label
                htmlFor="inputEmailMediaPartner"
                className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-2"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="inputEmailMediaPartner"
                className="bg-white rounded-lg border border-solid border-[#E3E3E3] text-black-900 placeholder:text-[#9A9A9A] font-bevietnamPro text-sm font-normal lowercase py-5 px-4"
                name="email"
                placeholder="michaelzhao@company.com"
                {...register("email", {
                  required: true,
                  maxLength: 50,
                })}
              />
            </div>
            <div className="supports-grid:grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4 mb-4 last:mb-0">
              <div className="flex flex-col">
                <label
                  htmlFor="inputMobileMediaPartner"
                  className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-2"
                >
                  Mobile Phone <span className="text-red-500">*</span>
                </label>
                <PhoneInput
                  international
                  id="inputMobileMediaPartner"
                  className="bg-white rounded-lg border border-solid border-[#E3E3E3] text-black-900 placeholder:text-[#9A9A9A] font-bevietnamPro text-sm font-normal capitalize py-5 px-4"
                  name="phone"
                  placeholder="+14161114646"
                  value={isForm.mobilephone}
                  defaultCountry={isIpAddress.country}
                  onChange={(e) => setForm({ ...isForm, mobilephone: e })}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="inputTelegramUsernameMediaPartner"
                  className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-2"
                >
                  Telegram Username
                </label>
                <input
                  type="text"
                  id="inputTelegramUsernameMediaPartner"
                  className="bg-white rounded-lg border border-solid border-[#E3E3E3] text-black-900 placeholder:text-[#9A9A9A] font-bevietnamPro text-sm font-normal lowercase py-5 px-4"
                  name="telegram_username"
                  placeholder="@coinfest.asia"
                  {...register("telegram_username", {
                    required: false,
                  })}
                />
              </div>
            </div>
            <div className="supports-grid:grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4 mb-4 last:mb-0">
              <div className="flex flex-col">
                <label
                  htmlFor="inputCompanyFocus"
                  className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-2"
                >
                  Company focus <span className="text-red-500">*</span>
                </label>
                <Select
                  defaultValue={selectedOption}
                  onChange={(e) => {
                    handleSelectOption(e);
                  }}
                  options={frmMediaPartner.formFieldGroups[3].fields[0].options}
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="inputJobtitleMediaPartner"
                  className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-2"
                >
                  Job title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="inputJobtitleMediaPartner"
                  className="bg-white rounded-lg border border-solid border-[#E3E3E3] text-black-900 placeholder:text-[#9A9A9A] font-bevietnamPro text-sm font-normal capitalize py-5 px-4"
                  name="jobtitle"
                  placeholder="CEO"
                  {...register("jobtitle", {
                    required: true,
                    maxLength: 50,
                  })}
                />
              </div>
            </div>
            <div className="flex flex-col mb-4 last:mb-0">
              <label
                htmlFor="inputAffiliationCompanyMediaPartner"
                className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-2"
              >
                Outlet/Affiliation name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="inputAffiliationCompanyMediaPartner"
                className="bg-white rounded-lg border border-solid border-[#E3E3E3] text-black-900 placeholder:text-[#9A9A9A] font-bevietnamPro text-sm font-normal py-5 px-4"
                name="company"
                placeholder="https://company.io"
                {...register("company", {
                  required: true,
                  maxLength: 50,
                })}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col w-max">
              <h2 className="text-black-900 font-bevietnamPro text-xl sm:text-[28px] sm:leading-[34px] font-semibold sm:font-bold">
                Media Outlet/Affiliation
              </h2>
            </div>

            <div className="flex flex-col mt-4 mb-4 last:mb-0">
              <label
                htmlFor="inputAffiliationMediaPartner"
                className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-2"
              >
                Outlet/Affiliation URL <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                id="inputAffiliationMediaPartner"
                className="bg-white rounded-lg border border-solid border-[#E3E3E3] text-black-900 placeholder:text-[#9A9A9A] font-bevietnamPro text-sm font-normal lowercase py-5 px-4"
                name="website"
                placeholder="https://coinfest.asia/"
                {...register("website", {
                  required: true,
                })}
              />
            </div>
            <div className="flex flex-col mb-6 last:mb-0">
              <label
                htmlFor="inputOtherIntrested"
                className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-4"
              >
                What topics are you most able to speak to authoritatively?{" "}
                <span className="text-red-500">*</span>
              </label>
              {frmMediaPartner.formFieldGroups?.map((gRslt) => (
                <>
                  {gRslt.fields?.map((gRsltIn, i) => (
                    <>
                      {gRsltIn.fieldType === "checkbox" &&
                      gRsltIn.name === "outlet_affiliation_social_media" ? (
                        <div className="grid space-y-4" key={i}>
                          {gRsltIn.options?.map((gOptin, i) => (
                            <label
                              htmlFor={`checkboxAffiliationMediaPartnerForm${i}`}
                              className={`flex w-full`}
                              key={i}
                            >
                              <input
                                id={`checkboxAffiliationMediaPartnerForm${i}`}
                                type="checkbox"
                                className="border border-solid border-white/20 bg-transparent rounded-full text-secondary2024 bxShdowNone  shrink-0 mt-1 sm:mt-0.5 h-5 w-5 ring-0 outline-none focus:outline-none focus-visible:outline-none pointer-events-none"
                                name="checkboxAffiliationMediaPartnerForm[]"
                                value={gOptin.value}
                                checked={selctdCheckboxAffiliationOthrs.includes(
                                  gOptin.value
                                )}
                                {...register(
                                  "outlet_affiliation_social_media",
                                  {
                                    required: true,
                                  }
                                )}
                                onChange={(e) => {
                                  handleCheckboxChangeAffiliation(gOptin.value);
                                }}
                              />

                              <span className="text-black-900 font-bevietnamPro text-base font-normal ml-3">
                                {gOptin.label}
                              </span>
                            </label>
                          ))}
                        </div>
                      ) : null}
                    </>
                  ))}
                </>
              ))}

              {selctdCheckboxAffiliationOthrs.includes("Other") === true ? (
                <div className="flex flex-col mt-4">
                  <label
                    htmlFor="inputOtherIntresteSpeakers"
                    className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-2"
                  >
                    Others : If you choose 'Other', tell us what other social
                    media platforms do you owned{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="inputOtherIntresteSpeakers"
                    className="bg-white rounded-lg border border-solid border-[#E3E3E3] text-black-900 placeholder:text-[#9A9A9A] font-bevietnamPro text-sm font-normal capitalize py-5 px-4"
                    name="if_you_choose_other__tell_us_what_other_social_media_platforms_do_you_owned"
                    placeholder="If you choose 'Other', tell us what other social media platforms do you owned"
                    {...register(
                      "if_you_choose_other__tell_us_what_other_social_media_platforms_do_you_owned",
                      {
                        required: true,
                        maxLength: 50,
                      }
                    )}
                  />
                </div>
              ) : null}
            </div>
            <div className="flex flex-col mb-6 last:mb-0">
              <label
                htmlFor="inputDidYourCompanySpeakers"
                className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-3"
              >
                All of the information I have provided above is correct and up
                to date. <span className="text-red-500">*</span>
              </label>
              <div className="grid space-y-4">
                {frmMediaPartner.formFieldGroups?.map((gRslt) => (
                  <>
                    {gRslt.fields?.map((gRsltIn, i) => (
                      <>
                        {gRsltIn.fieldType === "radio" &&
                        gRsltIn.name ===
                          "what_is_the_primary_format_of_your_outlet_" ? (
                          <div className="space-y-2" key={i}>
                            {gRsltIn.options?.map((gOptin, i) => (
                              <label
                                htmlFor={`radioMediaPartnerForm${gRsltIn.name}${i}`}
                                className={`flex w-full`}
                                key={i}
                              >
                                {gRsltIn.name ===
                                  "what_is_the_primary_format_of_your_outlet_" && (
                                  <input
                                    id={`radioMediaPartnerForm${gRsltIn.name}${i}`}
                                    type="radio"
                                    className="border border-solid border-white/20 bg-transparent rounded-full text-secondary2024 bxShdowNone  shrink-0 mt-1 sm:mt-0.5 h-5 sm:h-6 w-5 sm:w-6 ring-0 outline-none focus:outline-none focus-visible:outline-none pointer-events-none"
                                    name={`radioMediaPartnerForm_${gRsltIn.name}`}
                                    value={gOptin.value}
                                    {...register(
                                      "what_is_the_primary_format_of_your_outlet_",
                                      {
                                        required: true,
                                      }
                                    )}
                                  />
                                )}
                                <span className="text-black-900 font-bevietnamPro text-base font-normal ml-3">
                                  {gOptin.label}
                                </span>
                              </label>
                            ))}
                          </div>
                        ) : null}
                      </>
                    ))}
                  </>
                ))}
              </div>
            </div>
            <div className="flex flex-col mb-6 last:mb-0">
              <label
                htmlFor="inputOtherIntrested"
                className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-4"
              >
                Frequency? <span className="text-red-500">*</span>
              </label>
              {frmMediaPartner.formFieldGroups?.map((gRslt) => (
                <>
                  {gRslt.fields?.map((gRsltIn, i) => (
                    <>
                      {gRsltIn.fieldType === "checkbox" && (
                        <div className="grid space-y-4" key={i}>
                          {gRsltIn.options?.map((gOptin, i) => (
                            <>
                              {gRsltIn.name === "frequency" && (
                                <label
                                  htmlFor={`checkboxFreMediaPartnerForm${i}`}
                                  className={`flex w-full`}
                                  key={i}
                                >
                                  <input
                                    id={`checkboxFreMediaPartnerForm${i}`}
                                    type="checkbox"
                                    className="border border-solid border-white/20 bg-transparent rounded-full text-secondary2024 bxShdowNone  shrink-0 mt-1 sm:mt-0.5 h-5 w-5 ring-0 outline-none focus:outline-none focus-visible:outline-none pointer-events-none"
                                    name="checkboxFreMediaPartnerForm[]"
                                    value={gOptin.value}
                                    {...register("frequency", {
                                      required: true,
                                    })}
                                  />

                                  <span className="text-black-900 font-bevietnamPro text-base font-normal ml-3">
                                    {gOptin.label}
                                  </span>
                                </label>
                              )}
                            </>
                          ))}
                        </div>
                      )}
                    </>
                  ))}
                </>
              ))}
            </div>
            <div className="flex flex-col mb-6 last:mb-0">
              <label
                htmlFor="inputOtherIntrested"
                className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-4"
              >
                Distribution? <span className="text-red-500">*</span>
              </label>
              {frmMediaPartner.formFieldGroups?.map((gRslt) => (
                <>
                  {gRslt.fields?.map((gRsltIn, i) => (
                    <>
                      {gRsltIn.fieldType === "checkbox" &&
                      gRsltIn.name === "distribution" ? (
                        <div className="grid space-y-4" key={i}>
                          {gRsltIn.options?.map((gOptin, i) => (
                            <label
                              htmlFor={`checkboxDistriMediaPartnerForm${i}`}
                              className={`flex w-full`}
                              key={i}
                            >
                              <input
                                id={`checkboxDistriMediaPartnerForm${i}`}
                                type="checkbox"
                                className="border border-solid border-white/20 bg-transparent rounded-full text-secondary2024 bxShdowNone  shrink-0 mt-1 sm:mt-0.5 h-5 w-5 ring-0 outline-none focus:outline-none focus-visible:outline-none pointer-events-none"
                                name="checkboxDistriMediaPartnerForm[]"
                                value={gOptin.value}
                                {...register("distribution", {
                                  required: true,
                                })}
                              />

                              <span className="text-black-900 font-bevietnamPro text-base font-normal ml-3">
                                {gOptin.label}
                              </span>
                            </label>
                          ))}
                        </div>
                      ) : null}
                    </>
                  ))}
                </>
              ))}
            </div>
            <div className="flex flex-col mb-6 last:mb-0">
              <label
                htmlFor="inputDidYourCompanySpeakers"
                className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-3"
              >
                All of the information I have provided above is correct and up
                to date. <span className="text-red-500">*</span>
              </label>
              <div className="grid space-y-4">
                {frmMediaPartner.formFieldGroups?.map((gRslt) => (
                  <>
                    {gRslt.fields?.map((gRsltIn, i) => (
                      <>
                        {gRsltIn.fieldType === "radio" &&
                        gRsltIn.name ===
                          "all_of_the_information_i_have_provided_above_is_correct_and_up_to_date_" ? (
                          <div className="space-y-2" key={i}>
                            {gRsltIn.options?.map((gOptin, i) => (
                              <label
                                htmlFor={`radioCorrectInformationMediaPartnerForm${gRsltIn.name}${i}`}
                                className={`flex w-full`}
                                key={i}
                              >
                                {gRsltIn.name ===
                                  "all_of_the_information_i_have_provided_above_is_correct_and_up_to_date_" && (
                                  <input
                                    id={`radioCorrectInformationMediaPartnerForm${gRsltIn.name}${i}`}
                                    type="radio"
                                    className="border border-solid border-white/20 bg-transparent rounded-full text-secondary2024 bxShdowNone  shrink-0 mt-1 sm:mt-0.5 h-5 sm:h-6 w-5 sm:w-6 ring-0 outline-none focus:outline-none focus-visible:outline-none pointer-events-none"
                                    name={`radioCorrectInformationMediaPartnerForm_${gRsltIn.name}`}
                                    value={gOptin.value}
                                    {...register(
                                      "all_of_the_information_i_have_provided_above_is_correct_and_up_to_date_",
                                      {
                                        required: true,
                                      }
                                    )}
                                  />
                                )}
                                <span className="text-black-900 font-bevietnamPro text-base font-normal ml-3">
                                  {gOptin.label}
                                </span>
                              </label>
                            ))}
                          </div>
                        ) : null}
                      </>
                    ))}
                  </>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <button
              type="submit"
              className={`!bg-secondary2024 flex flex-col items-center justify-center rounded-[14px] text-white font-bevietnamPro text-base font-normal outline-none focus-visible:outline-none mt-6 py-4 w-full transition duration-[0.3] ease-in-out`}
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

export const getStaticProps = async () => {
  const gIpAddress = await getFetchUrl(
    `https://ipinfo.io/json?token=135855871d1f46`
  );

  const gHbFormMediaPartner = await getFetch(
    `/forms/v2/forms/f1980ee4-4ef7-463d-96af-15d73a821753`
  );

  try {
    return {
      props: {
        ipAddress: gIpAddress || [],
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

export default MediaPartner;

MediaPartner.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
