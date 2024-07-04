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

const CoHostSideEvents = ({ ipAddrs, formSideEvents, countryRegion }) => {
  const [frmSideEvents, setFormSideEvents] = useState(formSideEvents);
  const [isForm, setForm] = useState({
    mobilephone: "",
  });
  const [countryRegionSponsor, setcountryRegionSponsor] =
    useState(countryRegion);
  const [countryRegionSelect, setCountryRegionSelect] = useState(null);
  const [jobsPositionSelect, setJobsPositionSelect] = useState(null);
  const [companyFocusSelect, setCompanyFocusSelect] = useState(null);
  const [selectTypeLookingHostOthrs, setSelectTypeLookingHostOthrs] = useState(
    [],
  );

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
  // console.log(frmSideEvents.formFieldGroups);
  // console.log(frmSideEvents.formFieldGroups[7].fields[0].options);

  // @handle-countryregion
  const handleCountryRegion = (e) => {
    setCountryRegionSelect(e);
  };

  // @handle-socialmedia-others
  const handleTypeLookingHostOthrs = (value) => {
    if (selectTypeLookingHostOthrs.includes(value)) {
      setSelectTypeLookingHostOthrs(
        selectTypeLookingHostOthrs.filter((item) => item !== value),
      );
    } else {
      setSelectTypeLookingHostOthrs([...selectTypeLookingHostOthrs, value]);
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
          objectTypeId: "0-1",
        },
        {
          name: "lastname",
          value: data.lastname,
          objectTypeId: "0-1",
        },
        {
          name: "email",
          value: data.email,
          objectTypeId: "0-1",
        },
        {
          name: "mobilephone",
          value: isForm.mobilephone,
          objectTypeId: "0-1",
        },
        {
          name: "country",
          value: countryRegionSelect !== null ? countryRegionSelect.value : "-",
          objectTypeId: "0-1",
        },
        {
          name: "job_title_position",
          value: jobsPositionSelect !== null ? jobsPositionSelect.value : "-",
          objectTypeId: "0-1",
        },
        {
          objectTypeId: "0-1",
          name: "company",
          value: data.name,
        },
        {
          objectTypeId: "0-1",
          name: "company_focus",
          value: companyFocusSelect !== null ? companyFocusSelect.value : "-",
        },
        {
          objectTypeId: "0-1",
          name: "company_website",
          value: data.website,
        },
        {
          objectTypeId: "0-1",
          name: "did_your_company_host_a_side_event_in_coinfest_asia_previously_",
          value:
            data.did_your_company_host_a_side_event_in_coinfest_asia_previously_,
        },
        {
          objectTypeId: "0-1",
          name: "are_you_looking_to_host_a_public_or_private_event_",
          value: data.are_you_looking_to_host_a_public_or_private_event_,
        },
        {
          objectTypeId: "0-1",
          name: "how_many_people_are_you_expecting_to_attend_",
          value: data.how_many_people_are_you_expecting_to_attend_,
        },
        {
          objectTypeId: "0-1",
          name: "what_type_of_audience_are_you_looking_for_",
          value: data.what_type_of_audience_are_you_looking_for_.join(";"),
        },
        {
          objectTypeId: "0-1",
          name: "what_type_of_side_event_are_you_looking_to_host_",
          value:
            data.what_type_of_side_event_are_you_looking_to_host_.join(";"),
        },
        {
          objectTypeId: "0-1",
          name: "if_you_choose__other___tell_us_what_s_in_your_mind",
          value: data.if_you_choose__other___tell_us_what_s_in_your_mind
            ? data.if_you_choose__other___tell_us_what_s_in_your_mind
            : "-",
        },
        {
          objectTypeId: "0-1",
          name: "your_range_of_budget_to_host_a_side_event_in_coinfest_asia_2024_",
          value:
            data.your_range_of_budget_to_host_a_side_event_in_coinfest_asia_2024_,
        },
      ],
      context: {
        pageUri: "https://coinfest.asia/get-involved/cohost-side-events",
        pageName: "CO Host Side Events | Coinfest Asia 2024",
        ipAddress: ipAddrs.ip,
      },
    };

    const isKey = "680a92f7-1941-4ad0-aee4-f4913d3785fe";

    const rs = await SubmitForm(isConfig, isKey);

    // @debug
    // console.log(isConfig);

    if (rs === true) {
      setForm({ ...isForm, mobilephone: "" });
      btnSuccessNewsletter.click();
      reset();
    }
  };

  return (
    <>
      {/* @head */}
      <Head>
        <title>{`Co Host Side Events | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta
          name="title"
          content={`Co Host Side Events | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta name="description" content={publicRuntimeConfig.siteUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="og:title"
          content={`Co Host Side Events | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta property="og:description" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_UPLOAD}/uploads/ca2024_Thumbnails_Share_Link_App_9964b5c353.png`}
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="twitter:title"
          content={`Co Host Side Events | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta
          property="twitter:description"
          content={publicRuntimeConfig.siteUrl}
        />
        <meta
          property="twitter:image"
          content={`${process.env.NEXT_PUBLIC_UPLOAD}/uploads/ca2024_Thumbnails_Share_Link_App_9964b5c353.png`}
        />
      </Head>

      {/* @main */}
      <PartnershipLayouts
        title="Coinfest asia 2024 CO Host Side Event inquiry"
        btnBack={true}
        urlBack={"/get-involved"}
      >
        <form
          id="formSideEvents"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
          className="mt-0 flex flex-col space-y-8 sm:mt-6"
        >
          <div className="flex flex-col">
            <div className="mb-4 grid-cols-1 gap-x-4 gap-y-4 last:mb-0 supports-grid:grid sm:grid-cols-2">
              <div className="flex flex-col">
                <label
                  htmlFor="firstnameSideEvents"
                  className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                >
                  First name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstnameSideEvents"
                  className="form-input rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal capitalize text-black-900 placeholder:text-[#9A9A9A]"
                  name="firstname"
                  placeholder="Michael"
                  {...register("firstname", {
                    required: true,
                    maxLength: 255,
                  })}
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="lastnameSideEvents"
                  className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                >
                  Last name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastnameSideEvents"
                  className="form-input rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal capitalize text-black-900 placeholder:text-[#9A9A9A]"
                  name="lastname"
                  placeholder="Zhao"
                  {...register("lastname", {
                    required: true,
                    maxLength: 255,
                  })}
                />
              </div>
            </div>
            <div className="mb-4 grid-cols-1 gap-x-4 gap-y-4 last:mb-0 supports-grid:grid sm:grid-cols-2">
              <div className="flex flex-col">
                <label
                  htmlFor="emailSideEvents"
                  className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="emailSideEvents"
                  className="form-input rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal lowercase text-black-900 placeholder:text-[#9A9A9A]"
                  name="email"
                  placeholder="michaelzhao@company.com"
                  {...register("email", {
                    required: true,
                    maxLength: 255,
                  })}
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="mobilephoneSideEvents"
                  className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                >
                  Mobile Phone <span className="text-red-500">*</span>
                </label>
                <PhoneInputWithCountry
                  international
                  countryCallingCodeEditable={false}
                  id="mobilephoneSideEvents"
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
            </div>
            <div className="mb-4 flex flex-col">
              <label
                htmlFor="countryRegionSideEvents"
                className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
              >
                Country/Region <span className="text-red-500">*</span>
              </label>
              <Select
                id="countryRegionSideEvents"
                defaultValue={countryRegionSelect}
                onChange={(e) => {
                  handleCountryRegion(e);
                }}
                options={countryRegionSponsor.countries}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="jobtitleSideEvents"
                className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
              >
                Position <span className="text-red-500">*</span>
              </label>
              <Select
                id="jobtitleSideEvents"
                defaultValue={jobsPositionSelect}
                onChange={setJobsPositionSelect}
                options={frmSideEvents.formFieldGroups[6].fields[0].options}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex w-max flex-col">
              <h2 className="font-bevietnamPro text-xl font-semibold text-black-900 sm:text-[28px] sm:font-bold sm:leading-[34px]">
                Company Details
              </h2>
            </div>

            <div className="mb-4 mt-4 flex flex-col last:mb-0">
              <label
                htmlFor="companySideEvents"
                className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
              >
                Company name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="companySideEvents"
                className="form-input rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal capitalize text-black-900 placeholder:text-[#9A9A9A]"
                name="name"
                placeholder="Company Co."
                {...register("name", {
                  required: true,
                  maxLength: 255,
                })}
              />
            </div>
            <div className="mb-4 grid-cols-1 gap-x-4 gap-y-4 last:mb-0 supports-grid:grid sm:grid-cols-2">
              {frmSideEvents && (
                <div className="flex flex-col">
                  <label
                    htmlFor="companyFocusSideEvents"
                    className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                  >
                    Company focus <span className="text-red-500">*</span>
                  </label>
                  <Select
                    defaultValue={companyFocusSelect}
                    onChange={setCompanyFocusSelect}
                    options={frmSideEvents.formFieldGroups[9].fields[0].options}
                  />
                </div>
              )}
              <div className="flex flex-col">
                <label
                  htmlFor="websiteURLSideEvents"
                  className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                >
                  Website URL <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  id="websiteURLSideEvents"
                  className="rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal lowercase text-black-900 placeholder:text-[#9A9A9A]"
                  name="website"
                  placeholder="https://company.io"
                  {...register("website", {
                    required: true,
                  })}
                />
              </div>
            </div>
            {frmSideEvents && (
              <div className="mb-6 flex flex-col last:mb-0">
                <label
                  htmlFor="sponsorPreviousSideEvents"
                  className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                >
                  Did your company host a side event in Coinfest Asia
                  previously? <span className="text-red-500">*</span>
                </label>
                <div className="grid space-y-3">
                  {frmSideEvents.formFieldGroups[10].fields[0].options?.map(
                    (gRslt, i) => (
                      <div className="space-y-2" key={i}>
                        <label
                          htmlFor={`radioSideEventsPreviousForm${gRslt.name}${i}`}
                          className={`flex w-full cursor-pointer`}
                        >
                          <input
                            id={`radioSideEventsPreviousForm${gRslt.name}${i}`}
                            type="radio"
                            className="boxShadow-none form-radio pointer-events-none mt-[3px] h-5 w-5 shrink-0 rounded-full  border border-solid border-white/20 bg-transparent text-secondary outline-none ring-0 focus:outline-none focus-visible:outline-none sm:mt-[3px]"
                            name={`radioSideEventsPreviousForm${gRslt.name}`}
                            value={gRslt.value}
                            {...register(
                              "did_your_company_host_a_side_event_in_coinfest_asia_previously_",
                              {
                                required: true,
                              },
                            )}
                          />
                          <span className="ml-3 font-bevietnamPro text-base font-normal text-black-900">
                            {gRslt.label}
                          </span>
                        </label>
                      </div>
                    ),
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <div className="flex w-max flex-col">
              <h2 className="font-bevietnamPro text-xl font-semibold text-black-900 sm:text-[28px] sm:font-bold sm:leading-[34px]">
                Co-host a Side Event
              </h2>
            </div>

            {frmSideEvents && (
              <>
                <div className="mb-4 mt-4 flex flex-col">
                  <label
                    htmlFor="lookingHostSideEvents"
                    className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                  >
                    Are you looking to host a public or private event?{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="grid space-y-3">
                    {frmSideEvents.formFieldGroups[12].fields[0].options?.map(
                      (gRslt, i) => (
                        <div className="space-y-2" key={i}>
                          <label
                            htmlFor={`radioSideEventsLookingHostForm${gRslt.name}${i}`}
                            className={`flex w-full cursor-pointer`}
                          >
                            <input
                              id={`radioSideEventsLookingHostForm${gRslt.name}${i}`}
                              type="radio"
                              className="boxShadow-none form-radio pointer-events-none mt-[3px] h-5 w-5 shrink-0 rounded-full  border border-solid border-white/20 bg-transparent text-secondary outline-none ring-0 focus:outline-none focus-visible:outline-none sm:mt-[3px]"
                              name={`radioSideEventsLookingHostForm${gRslt.name}`}
                              value={gRslt.value}
                              {...register(
                                "are_you_looking_to_host_a_public_or_private_event_",
                                {
                                  required: true,
                                },
                              )}
                            />
                            <span className="ml-3 font-bevietnamPro text-base font-normal text-black-900">
                              {gRslt.label}
                            </span>
                          </label>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                <div className="mb-4 mt-4 flex flex-col">
                  <label
                    htmlFor="expectingAttendSideEvents"
                    className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                  >
                    How many people are you expecting to attend?{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="grid space-y-3">
                    {frmSideEvents.formFieldGroups[13].fields[0].options?.map(
                      (gRslt, i) => (
                        <div className="space-y-2" key={i}>
                          <label
                            htmlFor={`radioSideEventsExpectingAttendForm${gRslt.name}${i}`}
                            className={`flex w-full cursor-pointer`}
                          >
                            <input
                              id={`radioSideEventsExpectingAttendForm${gRslt.name}${i}`}
                              type="radio"
                              className="boxShadow-none form-radio pointer-events-none mt-[3px] h-5 w-5 shrink-0 rounded-full  border border-solid border-white/20 bg-transparent text-secondary outline-none ring-0 focus:outline-none focus-visible:outline-none sm:mt-[3px]"
                              name={`radioSideEventsExpectingAttendForm${gRslt.name}`}
                              value={gRslt.value}
                              {...register(
                                "how_many_people_are_you_expecting_to_attend_",
                                {
                                  required: true,
                                },
                              )}
                            />
                            <span className="ml-3 font-bevietnamPro text-base font-normal text-black-900">
                              {gRslt.label}
                            </span>
                          </label>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                <div className="mb-6 flex flex-col last:mb-0">
                  <label
                    htmlFor="audianceSideEvents"
                    className="mb-4 text-start font-bevietnamPro text-base font-normal text-black-900"
                  >
                    What type of audience are you looking for?{" "}
                    <span className="text-red-500">*</span>
                  </label>

                  <div className="grid space-y-4">
                    {frmSideEvents.formFieldGroups[14].fields[0].options?.map(
                      (gRslt, i) => (
                        <label
                          htmlFor={`checkboxAudianceSideEventsForm${i}`}
                          className={`flex w-full`}
                          key={i}
                        >
                          <input
                            id={`checkboxAudianceSideEventsForm${i}`}
                            type="checkbox"
                            className="boxShadow-none form-checkbox pointer-events-none mt-1 h-5 w-5 shrink-0 rounded  border border-solid border-white/20 bg-transparent text-secondary outline-none ring-0 focus:outline-none focus-visible:outline-none sm:mt-0.5"
                            name="checkboxAudianceSideEventsForm[]"
                            value={gRslt.value}
                            {...register(
                              "what_type_of_audience_are_you_looking_for_",
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
                    htmlFor="typeLookingHostSideEvents"
                    className="mb-4 text-start font-bevietnamPro text-base font-normal text-black-900"
                  >
                    What type of side event are you looking to host?{" "}
                    <span className="text-red-500">*</span>
                  </label>

                  <div className="grid space-y-4">
                    {frmSideEvents.formFieldGroups[15].fields[0].options?.map(
                      (gRslt, i) => (
                        <label
                          htmlFor={`checkboxTypeLookingHostForm${i}`}
                          className={`flex w-full`}
                          key={i}
                        >
                          <input
                            id={`checkboxTypeLookingHostForm${i}`}
                            type="checkbox"
                            className="boxShadow-none form-checkbox pointer-events-none mt-1 h-5 w-5 shrink-0 rounded  border border-solid border-white/20 bg-transparent text-secondary outline-none ring-0 focus:outline-none focus-visible:outline-none sm:mt-0.5"
                            name="checkboxTypeLookingHostForm[]"
                            value={gRslt.value}
                            {...register(
                              "what_type_of_side_event_are_you_looking_to_host_",
                              {
                                required: true,
                              },
                            )}
                            onChange={(e) => {
                              handleTypeLookingHostOthrs(gRslt.value);
                            }}
                          />

                          <span className="ml-3 font-bevietnamPro text-base font-normal text-black-900">
                            {gRslt.label}
                          </span>
                        </label>
                      ),
                    )}
                  </div>

                  {selectTypeLookingHostOthrs.includes("Other") === true && (
                    <div className="mt-4 flex flex-col">
                      <label
                        htmlFor="typeLookingHostOthrsSideEvents"
                        className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                      >
                        Others : If you choose 'other', tell us what's in your
                        mind <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="typeLookingHostOthrsSideEvents"
                        className="form-input rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal capitalize text-black-900 placeholder:text-[#9A9A9A]"
                        name="if_you_choose__other___tell_us_what_s_in_your_mind"
                        placeholder="If you choose 'Other', tell us what other social media platforms do you owned"
                        {...register(
                          "if_you_choose__other___tell_us_what_s_in_your_mind",
                          {
                            required: true,
                            maxLength: 255,
                          },
                        )}
                      />
                    </div>
                  )}
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="rangeBudgetSideEvents"
                    className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                  >
                    Your range of budget to host a side event in Coinfest Asia
                    2024? <span className="text-red-500">*</span>
                  </label>
                  <div className="grid space-y-3">
                    {frmSideEvents.formFieldGroups[16].fields[0].options?.map(
                      (gRslt, i) => (
                        <div className="space-y-2" key={i}>
                          <label
                            htmlFor={`radioSideEventsRangeBudgetForm${gRslt.name}${i}`}
                            className={`flex w-full cursor-pointer`}
                          >
                            <input
                              id={`radioSideEventsRangeBudgetForm${gRslt.name}${i}`}
                              type="radio"
                              className="boxShadow-none form-radio pointer-events-none mt-[3px] h-5 w-5 shrink-0 rounded-full  border border-solid border-white/20 bg-transparent text-secondary outline-none ring-0 focus:outline-none focus-visible:outline-none sm:mt-[3px]"
                              name={`radioSideEventsRangeBudgetForm${gRslt.name}`}
                              value={gRslt.value}
                              {...register(
                                "your_range_of_budget_to_host_a_side_event_in_coinfest_asia_2024_",
                                {
                                  required: true,
                                },
                              )}
                            />
                            <span className="ml-3 font-bevietnamPro text-base font-normal text-black-900">
                              {gRslt.label}
                            </span>
                          </label>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* @submit */}
          <div className="flex flex-col">
            <button
              type="submit"
              className={`mt-6 flex w-full flex-col items-center justify-center rounded-[14px] !bg-secondary py-4 font-bevietnamPro text-base font-normal text-white outline-none transition duration-[0.3] ease-in-out focus-visible:outline-none`}
              aria-label="Submit (Side Events)"
            >
              Submit
            </button>
          </div>
        </form>
      </PartnershipLayouts>
    </>
  );
};

export default CoHostSideEvents;

export const getStaticProps = async () => {
  const gIpAddress = await getFetchUrl(
    `https://ipinfo.io/json?token=135855871d1f46`,
  );

  const formSideEvents = await getFetch(
    `/forms/v2/forms/680a92f7-1941-4ad0-aee4-f4913d3785fe`,
  );

  const gCountryRegion = await getFetchUrl(
    `https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=name`,
  );

  try {
    return {
      props: {
        ipAddrs: gIpAddress || [],
        formSideEvents: formSideEvents || [],
        countryRegion: gCountryRegion || [],
      },

      revalidate: 3600,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

CoHostSideEvents.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
