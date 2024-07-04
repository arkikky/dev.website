import React, { useState, useEffect } from "react";
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

const SubmitSideEvents = ({ ipAddrs, formSideEvents, countryRegion }) => {
  const [frmSideEvents, setFormSideEvents] = useState(formSideEvents);
  const [isForm, setForm] = useState({
    mobilephone: "",
  });
  const [countryRegionSponsor, setcountryRegionSponsor] =
    useState(countryRegion);
  const [jobsPositionSelect, setJobsPositionSelect] = useState(null);
  const [companyFocusSelect, setCompanyFocusSelect] = useState(null);
  const [countryRegionSelect, setCountryRegionSelect] = useState(null);
  const [selectOrganizer, setSelectOrganizer] = useState(false);
  const [selectLocation, setSelectLocation] = useState(false);

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
          objectTypeId: "0-1",
          name: "telegram_username",
          value: data.telegram_username !== "" ? data.telegram_username : "-",
        },
        {
          name: "country",
          value: countryRegionSelect !== null ? countryRegionSelect.value : "-",
          objectTypeId: "0-1",
        },
        {
          objectTypeId: "0-1",
          name: "company",
          value: data.name,
        },
        {
          objectTypeId: "0-1",
          name: "company_website",
          value: data.website,
        },
        {
          name: "job_title_position",
          value: jobsPositionSelect !== null ? jobsPositionSelect.value : "-",
          objectTypeId: "0-1",
        },
        {
          objectTypeId: "0-1",
          name: "company_focus",
          value: companyFocusSelect !== null ? companyFocusSelect.value : "-",
        },
        {
          objectTypeId: "0-1",
          name: "did_your_company_host_a_side_event_in_coinfest_asia_previously_",
          value:
            data.did_your_company_host_a_side_event_in_coinfest_asia_previously_,
        },
        {
          objectTypeId: "0-1",
          name: "who_are_the_other_organizers_",
          value: data.who_are_the_other_organizers_
            ? data.who_are_the_other_organizers_
            : "-",
        },
        {
          objectTypeId: "0-1",
          name: "name_of_your_side_event",
          value: data.name_of_your_side_event,
        },
        {
          objectTypeId: "0-1",
          name: "brief_description_of_your_side_event",
          value: data.brief_description_of_your_side_event,
        },
        {
          objectTypeId: "0-1",
          name: "date_of_side_event",
          value: data.date_of_side_event,
        },
        {
          objectTypeId: "0-1",
          name: "time",
          value: data.time,
        },
        {
          objectTypeId: "0-1",
          name: "ticket_type",
          value: data.ticket_type,
        },
        {
          objectTypeId: "0-1",
          name: "rsvp_link",
          value: data.rsvp_link,
        },
        {
          objectTypeId: "0-1",
          name: "location",
          value: data.location,
        },
        {
          objectTypeId: "0-1",
          name: "google_maps_link",
          value: data.google_maps_link ? data.google_maps_link : "-",
        },
      ],
      context: {
        pageUri: "https://coinfest.asia/get-involved/submit-side-events",
        pageName: "Submit Side Events | Coinfest Asia 2024",
        ipAddress: ipAddrs.ip,
      },
    };

    const isKey = "2f2d6e61-4e3d-4bdc-bf1a-b335201b7baf";

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
        <title>{`Submit Side Events | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta
          name="title"
          content={`Submit Side Events | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta name="description" content={publicRuntimeConfig.siteUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="og:title"
          content={`Submit Side Events | ${publicRuntimeConfig.siteTitle}`}
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
          content={`Submit Side Events | ${publicRuntimeConfig.siteTitle}`}
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
        title="Coinfest asia 2024 Submit Side Event inquiry"
        btnBack={true}
        urlBack={"/get-involved"}
      >
        <form
          id="formSubmitsSideEvents"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
          className="mt-0 flex flex-col space-y-8 sm:mt-6"
        >
          <div className="flex flex-col">
            <div className="mb-4 grid-cols-1 gap-x-4 gap-y-4 last:mb-0 supports-grid:grid sm:grid-cols-2">
              <div className="flex flex-col">
                <label
                  htmlFor="firstnameSubmitSideEvents"
                  className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                >
                  First name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstnameSubmitSideEvents"
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
                  htmlFor="lastnameSubmitSideEvents"
                  className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                >
                  Last name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastnameSubmitSideEvents"
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
                  htmlFor="emailSubmitSideEvents"
                  className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="emailSubmitSideEvents"
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
                  htmlFor="mobilephoneSubmitSideEvents"
                  className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                >
                  Mobile Phone <span className="text-red-500">*</span>
                </label>
                <PhoneInputWithCountry
                  international
                  countryCallingCodeEditable={false}
                  id="mobilephoneSubmitSideEvents"
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
                htmlFor="telegramUsernameSubmitSideEvents"
                className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
              >
                Telegram Username
              </label>
              <input
                type="text"
                id="telegramUsernameCommunity"
                className="form-input rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal lowercase text-black-900 placeholder:text-[#9A9A9A]"
                name="telegram_username"
                placeholder="@coinfest.asia"
                {...register("telegram_username", {
                  required: false,
                })}
              />
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
          </div>

          <div className="flex flex-col">
            <div className="flex w-max flex-col">
              <h2 className="font-bevietnamPro text-xl font-semibold text-black-900 sm:text-[28px] sm:font-bold sm:leading-[34px]">
                Company Details
              </h2>
            </div>

            <div className="mb-4 mt-4 grid-cols-1 gap-x-4 gap-y-4 last:mb-0 supports-grid:grid sm:grid-cols-2">
              <div className="flex flex-col">
                <label
                  htmlFor="companySubmitSideEvents"
                  className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                >
                  Company name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="companySubmitSideEvents"
                  className="form-input rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal capitalize text-black-900 placeholder:text-[#9A9A9A]"
                  name="name"
                  placeholder="Company Co."
                  {...register("name", {
                    required: true,
                    maxLength: 255,
                  })}
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="websiteURLSubmitSideEvents"
                  className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                >
                  Website URL <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  id="websiteURLSubmitSideEvents"
                  className="rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal lowercase text-black-900 placeholder:text-[#9A9A9A]"
                  name="website"
                  placeholder="https://company.io"
                  {...register("website", {
                    required: true,
                  })}
                />
              </div>
            </div>
            <div className="mb-4 grid-cols-1 gap-x-4 gap-y-4 last:mb-0 supports-grid:grid sm:grid-cols-2">
              {frmSideEvents && (
                <>
                  <div className="flex flex-col">
                    <label
                      htmlFor="jobtitleSubmitSideEvents"
                      className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                    >
                      Position <span className="text-red-500">*</span>
                    </label>
                    <Select
                      id="jobtitleSubmitSideEvents"
                      defaultValue={jobsPositionSelect}
                      onChange={setJobsPositionSelect}
                      options={
                        frmSideEvents.formFieldGroups[9].fields[0].options
                      }
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="companyFocusSubmitSideEvents"
                      className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                    >
                      Company focus <span className="text-red-500">*</span>
                    </label>
                    <Select
                      defaultValue={companyFocusSelect}
                      onChange={setCompanyFocusSelect}
                      options={
                        frmSideEvents.formFieldGroups[9].fields[1].options
                      }
                    />
                  </div>
                </>
              )}
            </div>
            {frmSideEvents && (
              <div className="mb-6 flex flex-col last:mb-0">
                <label
                  htmlFor="sponsorPreviousSubmitSideEvents"
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
                          htmlFor={`radioSubmitSideEventsPreviousForm${gRslt.name}${i}`}
                          className={`flex w-full cursor-pointer`}
                        >
                          <input
                            id={`radioSubmitSideEventsPreviousForm${gRslt.name}${i}`}
                            type="radio"
                            className="boxShadow-none form-radio pointer-events-none mt-[3px] h-5 w-5 shrink-0 rounded-full  border border-solid border-white/20 bg-transparent text-secondary outline-none ring-0 focus:outline-none focus-visible:outline-none sm:mt-[3px]"
                            name={`radioSubmitSideEventsPreviousForm${gRslt.name}`}
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
                About your Side Event
              </h2>
            </div>

            <div className="mb-4 mt-4 flex flex-col">
              <label
                htmlFor="otherOrganizerSubmitSideEvents"
                className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
              >
                Organizer(s) Name? <span className="text-red-500">*</span>
              </label>
              <span className="mb-2 font-bevietnamPro text-xs font-normal text-black-900/60">
                Input the names of all the organizers, separated by commas (e.g.
                ICN, Coinvestasi, CoinDesk Indonesia)
              </span>
              <input
                type="text"
                id="otherOrganizerSubmitSideEvents"
                className="rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal capitalize text-black-900 placeholder:text-[#9A9A9A]"
                name="who_are_the_other_organizers_"
                {...register("who_are_the_other_organizers_", {
                  required: true,
                  maxLength: 255,
                })}
              />
            </div>
            <div className="mb-4 flex flex-col">
              <label
                htmlFor="nameYoutSideEventSubmitSideEvents"
                className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
              >
                Name of your Side Event <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="nameYoutSideEventSubmitSideEvents"
                className="form-input rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal text-black-900 placeholder:text-[#9A9A9A]"
                name="name_of_your_side_event"
                placeholder=""
                {...register("name_of_your_side_event", {
                  required: false,
                })}
              />
            </div>
            <div className="mb-4 flex flex-col">
              <label
                htmlFor="descriptionSideEventSubmitSideEvents"
                className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
              >
                Brief description of your Side Event{" "}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                type="text"
                id="descriptionSideEventSubmitSideEvents"
                className="form-input rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal text-black-900 placeholder:text-[#9A9A9A]"
                name="community_channel_link_s_"
                rows={4}
                {...register("brief_description_of_your_side_event", {
                  required: true,
                  maxLength: 255,
                })}
              />
            </div>
            <div className="mb-4 mt-4 flex flex-col">
              <label
                htmlFor="otherOrganizerSubmitSideEvents"
                className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
              >
                Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="otherOrganizerSubmitSideEvents"
                className="rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal text-black-900 placeholder:text-[#9A9A9A]"
                name="date_of_side_event"
                {...register("date_of_side_event", {
                  required: true,
                  maxLength: 255,
                })}
              />
            </div>
            <div className="mb-4 mt-4 flex flex-col">
              <label
                htmlFor="otherTimeSubmitSideEvents"
                className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
              >
                Start Time <span className="text-red-500">*</span>
              </label>
              <span className="mb-2 font-bevietnamPro text-xs font-normal text-black-900/60">
                Input in 24-hour format (e.g. 09:00 / 15:00 / 21:00)
              </span>
              <input
                type="text"
                id="otherTimeSubmitSideEvents"
                className="rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal capitalize text-black-900 placeholder:text-[#9A9A9A]"
                name="time"
                {...register("time", {
                  required: true,
                  maxLength: 255,
                })}
              />
            </div>
            {frmSideEvents && (
              <div className="mb-6 mt-4 flex flex-col last:mb-0">
                <label
                  htmlFor="ticketTypeSubmitSideEvents"
                  className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                >
                  Ticket Type <span className="text-red-500">*</span>
                </label>
                <div className="grid space-y-3">
                  {frmSideEvents.formFieldGroups[17].fields[0].options?.map(
                    (gRslt, i) => (
                      <div className="space-y-2" key={i}>
                        <label
                          htmlFor={`radioticketTypeSubmitSideEventsPreviousForm${gRslt.name}${i}`}
                          className={`flex w-full cursor-pointer`}
                        >
                          <input
                            id={`radioticketTypeSubmitSideEventsPreviousForm${gRslt.name}${i}`}
                            type="radio"
                            className="boxShadow-none form-radio pointer-events-none mt-[3px] h-5 w-5 shrink-0 rounded-full  border border-solid border-white/20 bg-transparent text-secondary outline-none ring-0 focus:outline-none focus-visible:outline-none sm:mt-[3px]"
                            name={`radioticketTypeSubmitSideEventsPreviousForm${gRslt.name}`}
                            value={gRslt.value}
                            {...register("ticket_type", {
                              required: true,
                            })}
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
            <div className="mb-4 flex flex-col">
              <label
                htmlFor="urlSubmitSideEvents"
                className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
              >
                RSVP Link
              </label>
              <input
                type="url"
                id="urlSubmitSideEvents"
                className="form-input rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal lowercase text-black-900 placeholder:text-[#9A9A9A]"
                name="rsvp_link"
                {...register("rsvp_link", {
                  required: true,
                })}
              />
            </div>
            {frmSideEvents && (
              <div className="mb-6 mt-4 flex flex-col last:mb-0">
                <label
                  htmlFor="locationSubmitSideEvents"
                  className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                >
                  Location <span className="text-red-500">*</span>
                </label>
                <div className="grid space-y-3">
                  {frmSideEvents.formFieldGroups[19].fields[0].options?.map(
                    (gRslt, i) => (
                      <div className="space-y-2" key={i}>
                        <label
                          htmlFor={`radiolocationSubmitSideEventsPreviousForm${gRslt.name}${i}`}
                          className={`flex w-full cursor-pointer`}
                        >
                          <input
                            id={`radiolocationSubmitSideEventsPreviousForm${gRslt.name}${i}`}
                            type="radio"
                            className="boxShadow-none form-radio pointer-events-none mt-[3px] h-5 w-5 shrink-0 rounded-full  border border-solid border-white/20 bg-transparent text-secondary outline-none ring-0 focus:outline-none focus-visible:outline-none sm:mt-[3px]"
                            name={`radiolocationSubmitSideEventsPreviousForm${gRslt.name}`}
                            value={gRslt.value}
                            {...register("location", {
                              required: true,
                            })}
                            onChange={(e) => {
                              setSelectLocation(gRslt.value);
                            }}
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
            {selectLocation === "Open to Public" ? (
              <div className="mt-4 flex flex-col">
                <label
                  htmlFor="otherLocationSubmitSideEvents"
                  className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                >
                  Google Maps Link <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  id="otherLocationSubmitSideEvents"
                  className="rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal capitalize text-black-900 placeholder:text-[#9A9A9A]"
                  name="google_maps_link"
                  {...register("google_maps_link", {
                    required: true,
                    maxLength: 255,
                  })}
                />
              </div>
            ) : null}
          </div>

          {/* @submit */}
          <div className="flex flex-col">
            <button
              type="submit"
              className={`mt-6 flex w-full flex-col items-center justify-center rounded-[14px] !bg-secondary py-4 font-bevietnamPro text-base font-normal text-white outline-none transition duration-[0.3] ease-in-out focus-visible:outline-none`}
              aria-label="Submit (Submit Side Events)"
            >
              Submit
            </button>
          </div>
        </form>
      </PartnershipLayouts>
    </>
  );
};

export default SubmitSideEvents;

export const getStaticProps = async () => {
  const gIpAddress = await getFetchUrl(
    `https://ipinfo.io/json?token=135855871d1f46`,
  );

  const formSideEvents = await getFetch(
    `/forms/v2/forms/2f2d6e61-4e3d-4bdc-bf1a-b335201b7baf`,
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

SubmitSideEvents.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
