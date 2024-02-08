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

// @layouts
import PartnershipLayouts from "@layouts/PartnershipLayouts";

const Sponsorship = (props) => {
  const [isIpAddress, setIpAddress] = useState(props.ipAddress || []);
  const [frmSponsorship, setFormSponsorship] = useState(props.formSponsorship);
  const [isForm, setForm] = useState({
    mobilephone: "",
  });
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
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

  const handleCheckboxChange = (value) => {
    if (selectedCheckboxes.includes(value)) {
      setSelectedCheckboxes(
        selectedCheckboxes.filter((item) => item !== value)
      );
    } else {
      setSelectedCheckboxes([...selectedCheckboxes, value]);
    }
  };

  // @Submit
  const onSubmit = async (data) => {
    const btnSuccessNewsletter = document.querySelector(
      "#mdlBtnSuccessNewsletter.mdlBtnSuccessNewsletter"
    );

    const otherInterested =
      selectedCheckboxes.includes("Other") === true
        ? data.if_you_pick__other___tell_us_what_kind_of_activations_you_d_like_to_explore
        : "-";

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
          name: "mobilephone",
          value: isForm.mobilephone,
        },
        {
          name: "country",
          value: data.country,
        },
        {
          name: "jobtitle",
          value: data.jobtitle,
        },
        {
          objectTypeId: "0-2",
          name: "name",
          value: data.name,
        },
        {
          objectTypeId: "0-2",
          name: "company_focus",
          value: selectedOption,
        },
        {
          objectTypeId: "0-2",
          name: "website",
          value: data.website,
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
          value: otherInterested,
        },
        {
          name: "your_range_of_budget_to_sponsor_coinfest_asia_2024_",
          value: data.budget,
        },
      ],
      context: {
        pageUri: "https://coinfest.asia/partnership/sponsorship",
        pageName: "Sponsorship Coinfest Asia 2024",
        ipAddress: isIpAddress.ip,
      },
    };

    const isKey = "d8c783f4-876a-460a-a064-a0379e9b88d9";

    const rs = await SubmitForm(isConfig, isKey);

    if (rs === true) {
      setForm({ ...isForm, mobilephone: "" });
      setSelectedCheckboxes([]);
      btnSuccessNewsletter.click();
      reset();
    }
  };

  return (
    <>
      {/* @Head */}
      <Head>
        <title>{`Sponsorship | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta
          name="title"
          content={`Sponsorship | ${publicRuntimeConfig.siteTitle}`}
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
          content={`Sponsorship | ${publicRuntimeConfig.siteTitle}`}
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
          content={`Sponsorship | ${publicRuntimeConfig.siteTitle}`}
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
      <PartnershipLayouts title="Coinfest asia 2024 sponsorship inquiry">
        <form
          id={"rstFormSponsorship"}
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-8 mt-0 sm:mt-6"
        >
          <div className="flex flex-col">
            <div className="supports-grid:grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4 mb-4 last:mb-0">
              <div className="flex flex-col">
                <label
                  htmlFor="inputFirstname"
                  className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-2"
                >
                  First name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="inputFirstname"
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
                  htmlFor="inputLastname"
                  className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-2"
                >
                  Last name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="inputLastname"
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
            <div className="supports-grid:grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4 mb-4 last:mb-0">
              <div className="flex flex-col">
                <label
                  htmlFor="inputEmail"
                  className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-2"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="inputEmail"
                  className="bg-white rounded-lg border border-solid border-[#E3E3E3] text-black-900 placeholder:text-[#9A9A9A] font-bevietnamPro text-sm font-normal lowercase py-5 px-4"
                  name="email"
                  placeholder="michaelzhao@company.com"
                  {...register("email", {
                    required: true,
                    maxLength: 50,
                  })}
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="inputMobilePhone"
                  className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-2"
                >
                  Mobile Phone <span className="text-red-500">*</span>
                </label>
                <PhoneInput
                  international
                  id="inputMobilephone"
                  className="bg-white rounded-lg border border-solid border-[#E3E3E3] text-black-900 placeholder:text-[#9A9A9A] font-bevietnamPro text-sm font-normal capitalize py-5 px-4"
                  name="mobilephone"
                  placeholder="+14161114646"
                  value={isForm.mobilephone}
                  defaultCountry={isIpAddress.country}
                  onChange={(e) => setForm({ ...isForm, mobilephone: e })}
                  required
                />
              </div>
            </div>

            <div className="supports-grid:grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4 mb-4 last:mb-0">
              <div className="flex flex-col">
                <label
                  htmlFor="inputCountry"
                  className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-2"
                >
                  Country/Region <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="inputCountry"
                  className="bg-white rounded-lg border border-solid border-[#E3E3E3] text-black-900 placeholder:text-[#9A9A9A] font-bevietnamPro text-sm font-normal capitalize py-5 px-4"
                  name="country"
                  placeholder="Canada"
                  {...register("country", {
                    required: true,
                    maxLength: 50,
                  })}
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="inputJobtitle"
                  className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-2"
                >
                  Job title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="inputJobtitle"
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
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col w-max">
              <h2 className="text-black-900 font-bevietnamPro text-xl sm:text-[28px] sm:leading-[34px] font-semibold sm:font-bold">
                Company
              </h2>
            </div>

            <div className="flex flex-col mt-4 mb-4 last:mb-0">
              <label
                htmlFor="inputCompany"
                className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-2"
              >
                Company name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="inputCompany"
                className="bg-white rounded-lg border border-solid border-[#E3E3E3] text-black-900 placeholder:text-[#9A9A9A] font-bevietnamPro text-sm font-normal capitalize py-5 px-4"
                name="name"
                placeholder="Company Co."
                {...register("name", {
                  required: true,
                  maxLength: 50,
                })}
              />
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
                  options={frmSponsorship.formFieldGroups[8].fields[0].options}
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="inputWebsiteURL"
                  className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-2"
                >
                  Website URL <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  id="inputWebsiteURL"
                  className="bg-white rounded-lg border border-solid border-[#E3E3E3] text-black-900 placeholder:text-[#9A9A9A] font-bevietnamPro text-sm font-normal lowercase py-5 px-4"
                  name="website"
                  placeholder="https://company.io"
                  {...register("website", {
                    required: true,
                  })}
                />
              </div>
            </div>

            <div className="flex flex-col mb-6 last:mb-0">
              <label
                htmlFor="inputDidYourCompanySponsor"
                className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-3"
              >
                Did your company sponsor Coinfest Asia previously?{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="grid space-y-4">
                {frmSponsorship.formFieldGroups?.map((gRslt) => (
                  <>
                    {gRslt.fields?.map((gRsltIn, i) => (
                      <>
                        {gRsltIn.fieldType === "radio" &&
                        gRsltIn.name ===
                          "did_your_company_sponsor_coinfest_asia_previously_" ? (
                          <div className="space-y-2" key={i}>
                            {gRsltIn.options?.map((gOptin, i) => (
                              <>
                                <label
                                  htmlFor={`radioConfrimSponsorshipForm${gRsltIn.name}${i}`}
                                  className={`flex w-full`}
                                  key={i}
                                >
                                  {gRsltIn.name ===
                                    "did_your_company_sponsor_coinfest_asia_previously_" && (
                                    <input
                                      id={`radioConfrimSponsorshipForm${gRsltIn.name}${i}`}
                                      type="radio"
                                      className="border border-solid border-white/20 bg-transparent rounded-full text-secondary2024 bxShdowNone  shrink-0 mt-1 sm:mt-0.5 h-5 sm:h-6 w-5 sm:w-6 ring-0 outline-none focus:outline-none focus-visible:outline-none pointer-events-none"
                                      name={`radioConfrimSponsorshipForm_${gRsltIn.name}`}
                                      value={gOptin.value}
                                      {...register(
                                        "did_your_company_sponsor_coinfest_asia_previously_",
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
                              </>
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
            <div className="flex flex-col w-max">
              <h2 className="text-black-900 font-bevietnamPro text-xl sm:text-[28px] sm:leading-[34px] font-semibold sm:font-bold">
                Exhibiting at Coinfest Asia
              </h2>
            </div>
            <div className="flex flex-col mb-6 last:mb-0">
              <label
                htmlFor="inputOtherIntrested"
                className="text-black-900 font-bevietnamPro text-base font-normal text-start mt-4 mb-4"
              >
                In Coinfest Asia 2024, we are interested in?{" "}
                <span className="text-red-500">*</span>
              </label>
              {frmSponsorship.formFieldGroups?.map((gRslt) => (
                <>
                  {gRslt.fields?.map((gRsltIn, i) => (
                    <>
                      {gRsltIn.fieldType === "checkbox" && (
                        <div className="grid space-y-4" key={i}>
                          {gRsltIn.options?.map((gOptin, i) => (
                            <>
                              {gRsltIn.name ===
                                "in_coinfest_asia_2024__we_are_interested_in" && (
                                <>
                                  <label
                                    htmlFor={`checkboxIntrestSponsorshipForm${i}`}
                                    className={`flex w-full`}
                                    key={i}
                                  >
                                    <input
                                      id={`checkboxIntrestSponsorshipForm${i}`}
                                      type="checkbox"
                                      className="border border-solid border-white/20 bg-transparent rounded-full text-secondary2024 bxShdowNone  shrink-0 mt-1 sm:mt-0.5 h-5 w-5 ring-0 outline-none focus:outline-none focus-visible:outline-none pointer-events-none"
                                      name="checkboxIntrestSponsorshipForm[]"
                                      value={gOptin.value}
                                      checked={selectedCheckboxes.includes(
                                        gOptin.value
                                      )}
                                      {...register(
                                        "in_coinfest_asia_2024__we_are_interested_in",
                                        {
                                          required: true,
                                        }
                                      )}
                                      onChange={(e) => {
                                        handleCheckboxChange(gOptin.value);
                                      }}
                                    />

                                    <span className="text-black-900 font-bevietnamPro text-base font-normal ml-3">
                                      {gOptin.label}
                                    </span>
                                  </label>
                                </>
                              )}
                            </>
                          ))}
                        </div>
                      )}
                    </>
                  ))}
                </>
              ))}

              {selectedCheckboxes.includes("Other") === true ? (
                <div className="flex flex-col mt-4">
                  <label
                    htmlFor="inputOtherIntrested"
                    className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-2"
                  >
                    Others : If you pick 'Other', tell us what kind of
                    activations you'd like to explore?
                  </label>
                  <input
                    type="text"
                    id="inputOtherIntrested"
                    className="bg-white rounded-lg border border-solid border-[#E3E3E3] text-black-900 placeholder:text-[#9A9A9A] font-bevietnamPro text-sm font-normal capitalize py-5 px-4"
                    name="if_you_pick__other___tell_us_what_kind_of_activations_you_d_like_to_explore"
                    placeholder="If you pick 'Other', tell us what kind of activations you'd like to explore"
                    {...register(
                      "if_you_pick__other___tell_us_what_kind_of_activations_you_d_like_to_explore",
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
                htmlFor="inputDidYourCompanySponsor"
                className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-3"
              >
                Your range of budget to sponsor Coinfest Asia 2024?{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="grid space-y-4">
                {frmSponsorship.formFieldGroups?.map((gRslt) => (
                  <>
                    {gRslt.fields?.map((gRsltIn, i) => (
                      <>
                        {gRsltIn.fieldType === "radio" &&
                        gRsltIn.name ===
                          "your_range_of_budget_to_sponsor_coinfest_asia_2024_" ? (
                          <div className="space-y-2" key={i}>
                            {gRsltIn.options?.map((gOptin, i) => (
                              <>
                                <label
                                  htmlFor={`radioBudgetSponsorshipForm${gRsltIn.name}${i}`}
                                  className={`flex w-full`}
                                  key={i}
                                >
                                  {gRsltIn.name ===
                                    "your_range_of_budget_to_sponsor_coinfest_asia_2024_" && (
                                    <input
                                      id={`radioBudgetSponsorshipForm${gRsltIn.name}${i}`}
                                      type="radio"
                                      className="border border-solid border-white/20 bg-transparent rounded-full text-secondary2024 bxShdowNone  shrink-0 mt-1 sm:mt-0.5 h-5 sm:h-6 w-5 sm:w-6 ring-0 outline-none focus:outline-none focus-visible:outline-none pointer-events-none"
                                      name={`radioBudgetSponsorshipForm_${gRsltIn.name}`}
                                      value={gOptin.value}
                                      {...register("budget", {
                                        required: true,
                                      })}
                                    />
                                  )}
                                  <span className="text-black-900 font-bevietnamPro text-base font-normal ml-3">
                                    {gOptin.label}
                                  </span>
                                </label>
                              </>
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
              className={`!bg-secondary2024 flex flex-col items-center justify-center rounded-[14px] text-white font-bevietnamPro text-base font-normal outline-none focus-visible:outline-none mt-6 py-4 w-full transition duration-[0.3s] ease-in-out`}
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

export default Sponsorship;

export const getStaticProps = async () => {
  const gIpAddress = await getFetchUrl(
    `https://ipinfo.io/json?token=135855871d1f46`
  );

  const gHbFormSponsorship = await getFetch(
    `/forms/v2/forms/d8c783f4-876a-460a-a064-a0379e9b88d9`
  );

  try {
    return {
      props: {
        ipAddress: gIpAddress || [],
        formSponsorship: gHbFormSponsorship || [],
      },

      revalidate: 3600,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

Sponsorship.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
