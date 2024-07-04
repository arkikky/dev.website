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

const Speakers = ({ ipAddrs, formSpeakers, countryRegion }) => {
  const [frmSpeakers, setFormSpeakers] = useState(formSpeakers);
  const [isForm, setForm] = useState({
    mobilephone: "",
  });
  const [countryRegionSponsor, setcountryRegionSponsor] =
    useState(countryRegion);
  const [countryRegionSelect, setCountryRegionSelect] = useState(null);
  const [companyFocusSelect, setCompanyFocusSelect] = useState(null);
  const [jobsPositionSelect, setJobsPositionSelect] = useState(null);
  const [topicSelect, setTopicSelect] = useState(null);

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
  // console.log(frmSpeakers.formFieldGroups);
  // console.log(frmSpeakers.formFieldGroups[7].fields[0].options);

  // @handle-countryregion
  const handleCountryRegion = (e) => {
    setCountryRegionSelect(e);
  };

  // @handle-interested-others
  const handleTopicChange = (e) => {
    setTopicSelect(e.value);
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
          name: "country",
          value: countryRegionSelect !== null ? countryRegionSelect.value : "-",
        },
        {
          objectTypeId: "0-1",
          name: "what_role_would_you_like_to_fill_in_",
          value: data.what_role_would_you_like_to_fill_in_,
        },
        {
          objectTypeId: "0-1",
          name: "what_topics_are_you_most_able_to_speak_to_authoritatively",
          value: topicSelect !== null ? topicSelect : "-",
        },
        {
          objectTypeId: "0-1",
          name: "if_you_choose__other___tell_us_what_s_in_your_mind",
          value:
            topicSelect === "Other"
              ? data.if_you_choose__other___tell_us_what_s_in_your_mind
              : "-",
        },
        {
          objectTypeId: "0-1",
          name: "do_you_have__or_expect_to_have__significant_news_to_share_",
          value:
            data.do_you_have__or_expect_to_have__significant_news_to_share_,
        },
        {
          objectTypeId: "0-1",
          name: "do_you_have_other_noteworthy_speaking_experience_",
          value: data.do_you_have_other_noteworthy_speaking_experience_,
        },
        {
          objectTypeId: "0-1",
          name: "company",
          value: data.company,
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
          name: "website",
          value: data.website,
        },
        {
          objectTypeId: "0-1",
          name: "linkedin_profile",
          value: data.linkedin_profile,
        },
        {
          objectTypeId: "0-1",
          name: "twitterhandle",
          value: data.twitterhandle !== "" ? data.twitterhandle : "-",
        },
        {
          objectTypeId: "0-1",
          name: "telegram_username",
          value: data.telegram_username !== "" ? data.telegram_username : "-",
        },
      ],
      context: {
        pageUri: "https://coinfest.asia/get-involved/speakers",
        pageName: "Speakers | Coinfest Asia 2024",
        ipAddress: ipAddrs.ip,
      },
    };

    const isKey = "e47f2b87-a41b-43b9-bdd1-f221798314dc";

    const rs = await SubmitForm(isConfig, isKey);

    // @debug
    console.log(isConfig);

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
        <title>{`Speakers | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta
          name="title"
          content={`Speakers | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta name="description" content={publicRuntimeConfig.siteDesc} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="og:title"
          content={`Speakers | ${publicRuntimeConfig.siteTitle}`}
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
          content={`Speakers | ${publicRuntimeConfig.siteTitle}`}
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
        title="Coinfest asia 2024 Speaker inquiry"
        btnBack={true}
        urlBack={"/get-involved"}
      >
        <form
          id="formSpeakers"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
          className="mt-0 flex flex-col space-y-8 sm:mt-6"
        >
          <div className="flex flex-col">
            <div className="mb-4 grid-cols-1 gap-x-4 gap-y-4 last:mb-0 supports-grid:grid sm:grid-cols-2">
              <div className="flex flex-col">
                <label
                  htmlFor="firstnameSpeakers"
                  className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                >
                  First name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstnameSpeakers"
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
                  htmlFor="lastnameSpeakers"
                  className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                >
                  Last name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastnameSpeakers"
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
                    maxLength: 255,
                  })}
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="mobilephoneSpeakers"
                  className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                >
                  Mobile Phone <span className="text-red-500">*</span>
                </label>
                <PhoneInputWithCountry
                  international
                  countryCallingCodeEditable={false}
                  id="mobilephoneSpeakers"
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
            <div className="flex flex-col">
              <label
                htmlFor="countryRegionSpeakers"
                className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
              >
                Country/Region <span className="text-red-500">*</span>
              </label>
              <Select
                id="countryRegionSpeakers"
                defaultValue={countryRegionSelect}
                onChange={(e) => {
                  handleCountryRegion(e);
                }}
                options={countryRegionSponsor.countries}
              />
            </div>
            <div className="mt-4 flex flex-col last:mb-0">
              <label
                htmlFor="sponsorPreviousSponsorship"
                className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
              >
                What role would you like to fill in?{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="grid space-y-3">
                {frmSpeakers.formFieldGroups[5].fields[0].options?.map(
                  (gRslt, i) => (
                    <div className="space-y-2" key={i}>
                      <label
                        htmlFor={`radioSpeakersRoleForm${gRslt.name}${i}`}
                        className={`flex w-full cursor-pointer`}
                      >
                        <input
                          id={`radioSpeakersRoleForm${gRslt.name}${i}`}
                          type="radio"
                          className="boxShadow-none form-radio pointer-events-none mt-[3px] h-5 w-5 shrink-0 rounded-full  border border-solid border-white/20 bg-transparent text-secondary outline-none ring-0 focus:outline-none focus-visible:outline-none sm:mt-[3px]"
                          name={`radioSpeakersRoleForm${gRslt.name}`}
                          value={gRslt.value}
                          {...register("what_role_would_you_like_to_fill_in_", {
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
            <div className="mt-6 flex flex-col last:mb-0">
              <label
                htmlFor="topicsSpeakers"
                className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
              >
                What topics are you most able to speak to authoritatively?{" "}
                <span className="text-red-500">*</span>
              </label>
              <Select
                id="topicsSpeakers"
                defaultValue={topicSelect}
                onChange={(e) => {
                  handleTopicChange(e);
                }}
                options={frmSpeakers.formFieldGroups[6].fields[0].options}
              />

              {topicSelect === "Other" ? (
                <div className="mt-4 flex flex-col">
                  <label
                    htmlFor="otherIntresteSpeakers"
                    className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                  >
                    Others : If you choose 'other', tell us what's in your mind?{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="otherIntresteSpeakers"
                    className="rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal capitalize text-black-900 placeholder:text-[#9A9A9A]"
                    name="if_you_choose__other___tell_us_what_s_in_your_mind"
                    placeholder="If you choose 'other', tell us what's in your mind?"
                    {...register(
                      "if_you_choose__other___tell_us_what_s_in_your_mind",
                      {
                        required: true,
                        maxLength: 255,
                      },
                    )}
                  />
                </div>
              ) : null}
            </div>
            <div className="mb-4 mt-4 flex flex-col last:mb-0">
              <label
                htmlFor="expectSignificantSpeakers"
                className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
              >
                Do you have (or expect to have) significant news to share?{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="expectSignificantSpeakers"
                className="rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal capitalize text-black-900 placeholder:text-[#9A9A9A]"
                name="do_you_have__or_expect_to_have__significant_news_to_share_"
                placeholder="Do you have (or expect to have) significant news to share?"
                {...register(
                  "do_you_have__or_expect_to_have__significant_news_to_share_",
                  {
                    required: true,
                    maxLength: 550,
                  },
                )}
              />
            </div>
            <div className="mb-4 flex flex-col last:mb-0">
              <label
                htmlFor="speakingExperienceSpeakers"
                className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
              >
                Do you have other noteworthy speaking experience? Please share a
                link to your session recording{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="speakingExperienceSpeakers"
                className="rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal capitalize text-black-900 placeholder:text-[#9A9A9A]"
                name="do_you_have_other_noteworthy_speaking_experience_"
                placeholder="Please share a link to your session recording"
                {...register(
                  "do_you_have_other_noteworthy_speaking_experience_",
                  {
                    required: true,
                    maxLength: 550,
                  },
                )}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex w-max flex-col">
              <h2 className="font-bevietnamPro text-xl font-semibold text-black-900 sm:text-[28px] sm:font-bold sm:leading-[34px]">
                Company
              </h2>
            </div>

            <div className="mb-4 mt-4 flex flex-col last:mb-0">
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
                {...register("company", {
                  required: true,
                  maxLength: 255,
                })}
              />
            </div>
            <div className="mb-4 grid-cols-1 gap-x-4 gap-y-4 last:mb-0 supports-grid:grid sm:grid-cols-2">
              {frmSpeakers && (
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
                    options={frmSpeakers.formFieldGroups[10].fields[0].options}
                  />
                </div>
              )}
              <div className="flex flex-col">
                <label
                  htmlFor="jobtitleSpeakers"
                  className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                >
                  Position <span className="text-red-500">*</span>
                </label>
                <Select
                  id="jobtitleSpeakers"
                  defaultValue={jobsPositionSelect}
                  onChange={setJobsPositionSelect}
                  options={frmSpeakers.formFieldGroups[10].fields[1].options}
                />
              </div>
            </div>
            <div className="mb-4 flex flex-col last:mb-0">
              <div className="flex flex-col">
                <label
                  htmlFor="websiteURL"
                  className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                >
                  Website URL <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  id="websiteURL"
                  className="rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal lowercase text-black-900 placeholder:text-[#9A9A9A]"
                  name="website"
                  placeholder="https://company.io"
                  {...register("website", {
                    required: true,
                  })}
                />
              </div>
            </div>
            <div className="mb-4 flex flex-col last:mb-0">
              <label
                htmlFor="linkedinProfileSpeakers"
                className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
              >
                Linkedin Profile <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                id="linkedinProfileSpeakers"
                className="rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal lowercase text-black-900 placeholder:text-[#9A9A9A]"
                name="linkedin_profile"
                placeholder="LinkedIn."
                {...register("linkedin_profile", {
                  required: true,
                  maxLength: 250,
                })}
              />
            </div>
            <div className="mb-4 grid-cols-1 gap-x-4 gap-y-4 last:mb-0 supports-grid:grid sm:grid-cols-2">
              <div className="flex flex-col">
                <label
                  htmlFor="twitterhandleSpeakers"
                  className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                >
                  Twitter Profile
                </label>
                <input
                  type="text"
                  id="twitterhandleSpeakers"
                  className="rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal capitalize text-black-900 placeholder:text-[#9A9A9A]"
                  name="twitterhandle"
                  placeholder="Twitter Profile"
                  {...register("twitterhandle", {
                    required: false,
                    maxLength: 50,
                  })}
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="telegramUsernameSpeakers"
                  className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                >
                  Telegram Username
                </label>
                <input
                  type="text"
                  id="telegramUsernameSpeakers"
                  className="rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal lowercase text-black-900 placeholder:text-[#9A9A9A]"
                  name="telegram_username"
                  placeholder="@coinfest.asia"
                  {...register("telegram_username", {
                    required: false,
                  })}
                />
              </div>
            </div>
          </div>

          {/* @submit */}
          <div className="flex flex-col">
            <button
              type="submit"
              className={`mt-6 flex w-full flex-col items-center justify-center rounded-[14px] !bg-secondary py-4 font-bevietnamPro text-base font-normal text-white outline-none transition duration-[0.3] ease-in-out focus-visible:outline-none`}
              aria-label="Submit (Speakers)"
            >
              Submit
            </button>
          </div>
        </form>
      </PartnershipLayouts>
    </>
  );
};

export default Speakers;

export const getStaticProps = async () => {
  const gIpAddress = await getFetchUrl(
    `https://ipinfo.io/json?token=135855871d1f46`,
  );

  const formSpeakers = await getFetch(
    `/forms/v2/forms/e47f2b87-a41b-43b9-bdd1-f221798314dc`,
  );

  const gCountryRegion = await getFetchUrl(
    `https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=name`,
  );

  try {
    return {
      props: {
        ipAddrs: gIpAddress || [],
        formSpeakers: formSpeakers || [],
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

Speakers.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
