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

const SponsorshipGetInvolved = ({
  ipAddrs,
  formSponsorship,
  countryRegion,
}) => {
  const [frmSponsorship, setFormSponsorship] = useState(formSponsorship);
  const [isForm, setForm] = useState({
    mobilephone: "",
  });
  const [countryRegionSponsor, setcountryRegionSponsor] =
    useState(countryRegion);
  const [countryRegionSelect, setCountryRegionSelect] = useState(null);
  const [companyFocusSelect, setCompanyFocusSelect] = useState(null);
  const [jobsPositionSelect, setJobsPositionSelect] = useState(null);
  const [selectInterestedOthrs, setSelectInterestedOthrs] = useState([]);

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
  // console.log(frmSponsorship.formFieldGroups);
  // console.log(frmSponsorship.formFieldGroups[7].fields[0].options);

  // @handle-countryregion
  const handleCountryRegion = (e) => {
    setCountryRegionSelect(e);
  };

  // @handle-interested-others
  const handleInterestedChange = (value) => {
    if (selectInterestedOthrs.includes(value)) {
      setSelectInterestedOthrs(
        selectInterestedOthrs.filter((item) => item !== value),
      );
    } else {
      setSelectInterestedOthrs([...selectInterestedOthrs, value]);
    }
  };

  // @submit
  const onSubmit = async (data) => {
    // const btnOpenGmailSuccess = document.querySelector(
    //   "#mdlBtnSuccessOpenGmail.mdlBtnSuccessOpenGmail",
    // );
    const btnOpenGmailSuccess = document.querySelector(
      "#btnSuccessNewsletterMdl2025",
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
          value: jobsPositionSelect !== null ? jobsPositionSelect.value : "-",
        },
        {
          name: "country",
          value: countryRegionSelect !== null ? countryRegionSelect.value : "-",
        },
        {
          objectTypeId: "0-2",
          name: "name",
          value: data.name,
        },
        {
          objectTypeId: "0-2",
          name: "company_focus",
          value: companyFocusSelect !== null ? companyFocusSelect.value : "-",
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
        pageUri: "https://coinfest.asia/get-involved/sponsorship",
        pageName: "2025 Sponsorship | Coinfest Asia 2024",
        ipAddress: ipAddrs.ip,
      },
    };

    const isKey = "bf625b40-82e5-4c4f-818d-7a6cfbe47a81";

    const rs = await SubmitForm(isConfig, isKey);

    // @debug
    // console.log(isConfig);

    if (rs === true) {
      setForm({ ...isForm, mobilephone: "" });
      btnOpenGmailSuccess.click();
      reset();
    }
  };

  return (
    <>
      {/* @head */}
      <Head>
        <title>{`2025 Sponsorship | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta
          name="title"
          content={`2025 Sponsorship | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta name="description" content={publicRuntimeConfig.siteUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="og:title"
          content={`2025 Sponsorship | ${publicRuntimeConfig.siteTitle}`}
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
          content={`2025 Sponsorship | ${publicRuntimeConfig.siteTitle}`}
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
        title="Coinfest asia 2025 sponsorship inquiry"
        shortDesc={
          "Unlock early access to Coinfest Asia 2025 sponsorships and lock in the best deals before anyone else."
        }
        btnBack={false}
      >
        <form
          id="formSponsorship"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
          className="mt-0 flex flex-col space-y-8 sm:mt-6"
        >
          <div className="flex flex-col">
            <div className="mb-4 grid-cols-1 gap-x-4 gap-y-4 last:mb-0 supports-grid:grid sm:grid-cols-2">
              <div className="flex flex-col">
                <label
                  htmlFor="firstnameSponsorship"
                  className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                >
                  First name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstnameSponsorship"
                  className="form-input rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal capitalize text-black-900 placeholder:text-[#9A9A9A]"
                  name="firstname"
                  placeholder="Michael"
                  {...register("firstname", {
                    required: true,
                    maxLength: 1000,
                  })}
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="lastnameSponsorship"
                  className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                >
                  Last name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastnameSponsorship"
                  className="form-input rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal capitalize text-black-900 placeholder:text-[#9A9A9A]"
                  name="lastname"
                  placeholder="Zhao"
                  {...register("lastname", {
                    required: true,
                    maxLength: 1000,
                  })}
                />
              </div>
            </div>
            <div className="mb-4 flex flex-col">
              <label
                htmlFor="emailSponsorship"
                className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="emailSponsorship"
                className="form-input rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal lowercase text-black-900 placeholder:text-[#9A9A9A]"
                name="email"
                placeholder="michaelzhao@company.com"
                {...register("email", {
                  required: true,
                  maxLength: 1000,
                })}
              />
            </div>
            <div className="mb-4 grid-cols-1 gap-x-4 gap-y-4 last:mb-0 supports-grid:grid sm:grid-cols-2">
              <div className="flex flex-col">
                <label
                  htmlFor="jobtitleSponsorship"
                  className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                >
                  Position <span className="text-red-500">*</span>
                </label>
                <Select
                  id="jobtitleSponsorship"
                  defaultValue={jobsPositionSelect}
                  onChange={setJobsPositionSelect}
                  options={frmSponsorship.formFieldGroups[3].fields[0].options}
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="countryRegionSponsorship"
                  className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                >
                  Country/Region <span className="text-red-500">*</span>
                </label>
                <Select
                  id="countryRegionSponsorship"
                  defaultValue={countryRegionSelect}
                  onChange={(e) => {
                    handleCountryRegion(e);
                  }}
                  options={countryRegionSponsor.countries}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-4 flex flex-col last:mb-0">
              <label
                htmlFor="inputCompany"
                className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
              >
                Company name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="companySponsorship"
                className="form-input rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal capitalize text-black-900 placeholder:text-[#9A9A9A]"
                name="name"
                placeholder="Company Co."
                {...register("name", {
                  required: true,
                  maxLength: 1000,
                })}
              />
            </div>
            {frmSponsorship && (
              <div className="mb-4 flex flex-col">
                <div className="flex flex-col">
                  <label
                    htmlFor="companyFocusSponsorship"
                    className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                  >
                    Company focus <span className="text-red-500">*</span>
                  </label>
                  <Select
                    defaultValue={companyFocusSelect}
                    onChange={setCompanyFocusSelect}
                    options={
                      frmSponsorship.formFieldGroups[5].fields[0].options
                    }
                  />
                </div>
              </div>
            )}
            {frmSponsorship && (
              <div className="mb-6 flex flex-col last:mb-0">
                <label
                  htmlFor="sponsorPreviousSponsorship"
                  className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                >
                  Did your company sponsor Coinfest Asia previously?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="grid space-y-3">
                  {frmSponsorship.formFieldGroups[6].fields[0].options?.map(
                    (gRslt, i) => (
                      <div className="space-y-2" key={i}>
                        <label
                          htmlFor={`radioSponsorshipPreviousForm${gRslt.name}${i}`}
                          className={`flex w-full cursor-pointer`}
                        >
                          <input
                            id={`radioSponsorshipPreviousForm${gRslt.name}${i}`}
                            type="radio"
                            className="boxShadow-none form-radio pointer-events-none mt-[3px] h-5 w-5 shrink-0 rounded-full  border border-solid border-white/20 bg-transparent text-secondary outline-none ring-0 focus:outline-none focus-visible:outline-none sm:mt-[3px]"
                            name={`radioSponsorshipPreviousForm${gRslt.name}`}
                            value={gRslt.value}
                            {...register(
                              "did_your_company_sponsor_coinfest_asia_previously_",
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
                Exhibiting at Coinfest Asia
              </h2>
            </div>

            <div className="mb-6 flex flex-col last:mb-0">
              <label
                htmlFor="interesredSponsorship"
                className="mb-4 mt-4 text-start font-bevietnamPro text-base font-normal text-black-900"
              >
                In Coinfest Asia 2024, we are interested in?{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="grid space-y-4">
                {frmSponsorship.formFieldGroups[7].fields[0].options?.map(
                  (gRslt, i) => (
                    <label
                      htmlFor={`intrestSponsorshipForm${i}`}
                      className={`flex w-full cursor-pointer`}
                      key={i}
                    >
                      <input
                        type="checkbox"
                        id={`intrestSponsorshipForm${i}`}
                        className="boxShadow-none form-checkbox pointer-events-none mt-[3px] h-5 w-5 shrink-0 rounded border border-solid border-white/20 bg-transparent text-secondary outline-none ring-0 focus:outline-none focus-visible:outline-none sm:mt-[3px]"
                        name="intrestSponsorshipForm[]"
                        value={gRslt.value}
                        {...register(
                          "in_coinfest_asia_2024__we_are_interested_in",
                          {
                            required: true,
                          },
                        )}
                        onChange={(e) => {
                          handleInterestedChange(gRslt.value);
                        }}
                      />

                      <span className="ml-3 font-bevietnamPro text-base font-normal text-black-900">
                        {gRslt.label}
                      </span>
                    </label>
                  ),
                )}
              </div>

              {selectInterestedOthrs.includes("Other") === true && (
                <div className="mt-4 flex flex-col">
                  <label
                    htmlFor="intrestedSponsorshipOthers"
                    className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                  >
                    Others : If you pick 'Other', tell us what kind of
                    activations you'd like to explore?
                  </label>
                  <input
                    type="text"
                    id="intrestedSponsorshipOthers"
                    className="form-input rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal text-black-900 placeholder:text-[#9A9A9A]"
                    name="if_you_pick__other___tell_us_what_kind_of_activations_you_d_like_to_explore"
                    placeholder="If you pick 'Other', tell us what kind of activations you'd like to explore"
                    {...register(
                      "if_you_pick__other___tell_us_what_kind_of_activations_you_d_like_to_explore",
                      {
                        required: true,
                        maxLength: 1000,
                      },
                    )}
                  />
                </div>
              )}
            </div>
            <div className="mb-6 flex flex-col last:mb-0">
              <label
                htmlFor="inputDidYourCompanySponsor"
                className="mb-3 text-start font-bevietnamPro text-base font-normal text-black-900"
              >
                Your range of budget to sponsor Coinfest Asia 2024?{" "}
                <span className="text-red-500">*</span>
              </label>

              <div className="grid space-y-3">
                {frmSponsorship.formFieldGroups[9].fields[0].options?.map(
                  (gRslt, i) => (
                    <div className="space-y-2" key={i}>
                      <label
                        htmlFor={`radioBudgetSponsorshipForm${gRslt.name}${i}`}
                        className={`flex w-full cursor-pointer`}
                      >
                        <input
                          id={`radioBudgetSponsorshipForm${gRslt.name}${i}`}
                          type="radio"
                          className="boxShadow-none form-radio pointer-events-none mt-[3px] h-5 w-5 shrink-0 rounded-full  border border-solid border-white/20 bg-transparent text-secondary outline-none ring-0 focus:outline-none focus-visible:outline-none sm:mt-[3px]"
                          name={`radioBudgetSponsorshipForm${gRslt.name}`}
                          value={gRslt.value}
                          {...register("budget", {
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
          </div>

          {/* @submit */}
          <div className="flex flex-col">
            <button
              type="submit"
              className={`mt-6 flex w-full flex-col items-center justify-center rounded-[14px] !bg-secondary py-4 font-bevietnamPro text-base font-normal text-white outline-none transition duration-[0.3] ease-in-out focus-visible:outline-none`}
              aria-label="Submit (Sponsorship)"
            >
              Submit
            </button>
          </div>
        </form>
      </PartnershipLayouts>
    </>
  );
};

export default SponsorshipGetInvolved;

export const getStaticProps = async () => {
  const gIpAddress = await getFetchUrl(
    `https://ipinfo.io/json?token=135855871d1f46`,
  );

  const gHbFormSponsorship25 = await getFetch(
    `/forms/v2/forms/bf625b40-82e5-4c4f-818d-7a6cfbe47a81`,
  );

  const gCountryRegion = await getFetchUrl(
    `https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=name`,
  );

  try {
    return {
      props: {
        ipAddrs: gIpAddress || [],
        formSponsorship: gHbFormSponsorship25 || [],
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

SponsorshipGetInvolved.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
