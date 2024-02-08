import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
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

const Speakers = (props) => {
  const [isIpAddress, setIpAddress] = useState(props.ipAddress || []);
  const [frmSpeakers, setFormSpeakers] = useState(props.formSpeakers);
  const [isForm, setForm] = useState({
    mobilephone: "",
  });
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

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

    const otherChooseYrMindSpeakers =
      selectedCheckboxes.includes("Other") === true
        ? data.if_you_choose__other___tell_us_what_s_in_your_mind
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
          name: "phone",
          value: isForm.mobilephone,
        },
        {
          objectTypeId: "0-1",
          name: "country",
          value: data.country,
        },
        {
          objectTypeId: "0-1",
          name: "what_role_would_you_like_to_fill_in_",
          value: data.what_role_would_you_like_to_fill_in_,
        },
        {
          objectTypeId: "0-1",
          name: "what_topics_are_you_most_able_to_speak_to_authoritatively_",
          value:
            data.what_topics_are_you_most_able_to_speak_to_authoritatively_.join(
              ";"
            ),
        },
        {
          objectTypeId: "0-1",
          name: "if_you_choose__other___tell_us_what_s_in_your_mind",
          value: otherChooseYrMindSpeakers,
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
          name: "jobtitle",
          value: data.jobtitle,
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
        pageUri: "https://coinfest.asia/partnership/speakers",
        pageName: "Speakers Coinfest Asia 2024",
        ipAddress: isIpAddress.ip,
      },
    };

    const isKey = "e47f2b87-a41b-43b9-bdd1-f221798314dc";

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
        <title>{`Speakers | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta
          name="title"
          content={`Speakers | ${publicRuntimeConfig.siteTitle}`}
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
          content={`Speakers | ${publicRuntimeConfig.siteTitle}`}
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
          content={`Speakers | ${publicRuntimeConfig.siteTitle}`}
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
      <PartnershipLayouts title="Coinfest asia 2024 speakers inquiry">
        <form
          id={"rstFormSpeakers"}
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-8 mt-0 sm:mt-6"
        >
          <div className="flex flex-col">
            <div className="supports-grid:grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4 mb-4 last:mb-0">
              <div className="flex flex-col">
                <label
                  htmlFor="inputFirstnameSpeakers"
                  className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-2"
                >
                  First name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="inputFirstnameSpeakers"
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
                  htmlFor="inputLastnameSpeakers"
                  className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-2"
                >
                  Last name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="inputLastnameSpeakers"
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
              <div className="flex-1 flex flex-col">
                <label
                  htmlFor="inputEmailSpeakers"
                  className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-2"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="inputEmailSpeakers"
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
                <div className="flex flex-col">
                  <label
                    htmlFor="inputMobilePhoneSpeakers"
                    className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-2"
                  >
                    Mobile Phone <span className="text-red-500">*</span>
                  </label>
                  <PhoneInput
                    international
                    id="inputMobilephoneSpeakers"
                    className="bg-white rounded-lg border border-solid border-[#E3E3E3] text-black-900 placeholder:text-[#9A9A9A] font-bevietnamPro text-sm font-normal capitalize py-5 px-4"
                    name="phone"
                    placeholder="+14161114646"
                    value={isForm.mobilephone}
                    defaultCountry={isIpAddress.country}
                    onChange={(e) => setForm({ ...isForm, mobilephone: e })}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col mb-4 last:mb-0">
              <label
                htmlFor="inputCountrySpeakers"
                className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-2"
              >
                Country/Region <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="inputCountrySpeakers"
                className="bg-white rounded-lg border border-solid border-[#E3E3E3] text-black-900 placeholder:text-[#9A9A9A] font-bevietnamPro text-sm font-normal capitalize py-5 px-4"
                name="country"
                placeholder="Canada"
                {...register("country", {
                  required: true,
                  maxLength: 50,
                })}
              />
            </div>
            <div className="flex flex-col mb-6 last:mb-0">
              <label
                htmlFor="inputDidYourCompanySpeakers"
                className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-3"
              >
                What role would you like to fill in?{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="grid space-y-4">
                {frmSpeakers.formFieldGroups?.map((gRslt) => (
                  <>
                    {gRslt.fields?.map((gRsltIn, i) => (
                      <>
                        {gRsltIn.fieldType === "radio" &&
                        gRsltIn.name ===
                          "what_role_would_you_like_to_fill_in_" ? (
                          <div className="space-y-2" key={i}>
                            {gRsltIn.options?.map((gOptin, i) => (
                              <label
                                htmlFor={`radioConfrimSpeakersForm${gRsltIn.name}${i}`}
                                className={`flex w-full`}
                                key={i}
                              >
                                {gRsltIn.name ===
                                  "what_role_would_you_like_to_fill_in_" && (
                                  <input
                                    id={`radioConfrimSpeakersForm${gRsltIn.name}${i}`}
                                    type="radio"
                                    className="border border-solid border-white/20 bg-transparent rounded-full text-secondary2024 bxShdowNone  shrink-0 mt-1 sm:mt-0.5 h-5 sm:h-6 w-5 sm:w-6 ring-0 outline-none focus:outline-none focus-visible:outline-none pointer-events-none"
                                    name={`radioConfrimSpeakersForm_${gRsltIn.name}`}
                                    value={gOptin.value}
                                    {...register(
                                      "what_role_would_you_like_to_fill_in_",
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
                What topics are you most able to speak to authoritatively?{" "}
                <span className="text-red-500">*</span>
              </label>
              {frmSpeakers.formFieldGroups?.map((gRslt) => (
                <>
                  {gRslt.fields?.map((gRsltIn, i) => (
                    <>
                      {gRsltIn.fieldType === "checkbox" &&
                      gRsltIn.name ===
                        "what_topics_are_you_most_able_to_speak_to_authoritatively_" ? (
                        <div className="grid space-y-4" key={i}>
                          {gRsltIn.options?.map((gOptin, i) => (
                            <label
                              htmlFor={`checkboxAuthoritativelySpeakersForm${i}`}
                              className={`flex w-full`}
                              key={i}
                            >
                              <input
                                id={`checkboxAuthoritativelySpeakersForm${i}`}
                                type="checkbox"
                                className="border border-solid border-white/20 bg-transparent rounded-full text-secondary2024 bxShdowNone  shrink-0 mt-1 sm:mt-0.5 h-5 w-5 ring-0 outline-none focus:outline-none focus-visible:outline-none pointer-events-none"
                                name="checkboxAuthoritativelySpeakersForm[]"
                                value={gOptin.value}
                                checked={selectedCheckboxes.includes(
                                  gOptin.value
                                )}
                                {...register(
                                  "what_topics_are_you_most_able_to_speak_to_authoritatively_",
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
                          ))}
                        </div>
                      ) : null}
                    </>
                  ))}
                </>
              ))}

              {selectedCheckboxes.includes("Other") === true ? (
                <div className="flex flex-col mt-4">
                  <label
                    htmlFor="inputOtherIntresteSpeakers"
                    className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-2"
                  >
                    Others : If you choose 'other', tell us what's in your mind?{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="inputOtherIntresteSpeakers"
                    className="bg-white rounded-lg border border-solid border-[#E3E3E3] text-black-900 placeholder:text-[#9A9A9A] font-bevietnamPro text-sm font-normal capitalize py-5 px-4"
                    name="if_you_choose__other___tell_us_what_s_in_your_mind"
                    placeholder="If you choose 'other', tell us what's in your
                    mind?"
                    {...register(
                      "if_you_choose__other___tell_us_what_s_in_your_mind",
                      {
                        required: true,
                        maxLength: 50,
                      }
                    )}
                  />
                </div>
              ) : null}
            </div>
            <div className="flex flex-col mb-4 last:mb-0">
              <label
                htmlFor="inputExpectSignificantSpeakers"
                className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-2"
              >
                Do you have (or expect to have) significant news to share?{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="inputExpectSignificantSpeakers"
                className="bg-white rounded-lg border border-solid border-[#E3E3E3] text-black-900 placeholder:text-[#9A9A9A] font-bevietnamPro text-sm font-normal capitalize py-5 px-4"
                name="do_you_have__or_expect_to_have__significant_news_to_share_"
                placeholder="Do you have (or expect to have) significant news to share?"
                {...register(
                  "do_you_have__or_expect_to_have__significant_news_to_share_",
                  {
                    required: true,
                    maxLength: 50,
                  }
                )}
              />
            </div>
            <div className="flex flex-col mb-4 last:mb-0">
              <label
                htmlFor="inputSpeakingExperienceSpeakers"
                className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-2"
              >
                Do you have other noteworthy speaking experience? Please share a
                link to your session recording{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="inputSpeakingExperienceSpeakers"
                className="bg-white rounded-lg border border-solid border-[#E3E3E3] text-black-900 placeholder:text-[#9A9A9A] font-bevietnamPro text-sm font-normal capitalize py-5 px-4"
                name="do_you_have_other_noteworthy_speaking_experience_"
                placeholder="Please share a link to your session recording"
                {...register(
                  "do_you_have_other_noteworthy_speaking_experience_",
                  {
                    required: true,
                    maxLength: 50,
                  }
                )}
              />
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
                htmlFor="inputCompanySpeakers"
                className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-2"
              >
                Company name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="inputCompanySpeakers"
                className="bg-white rounded-lg border border-solid border-[#E3E3E3] text-black-900 placeholder:text-[#9A9A9A] font-bevietnamPro text-sm font-normal capitalize py-5 px-4"
                name="company"
                placeholder="Company Co."
                {...register("company", {
                  required: true,
                  maxLength: 50,
                })}
              />
            </div>
            <div className="supports-grid:grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4 mb-4 last:mb-0">
              <div className="flex flex-col">
                <label
                  htmlFor="inputJobtitleSpeakers"
                  className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-2"
                >
                  Job title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="inputJobtitleSpeakers"
                  className="bg-white rounded-lg border border-solid border-[#E3E3E3] text-black-900 placeholder:text-[#9A9A9A] font-bevietnamPro text-sm font-normal capitalize py-5 px-4"
                  name="jobtitle"
                  placeholder="CEO"
                  {...register("jobtitle", {
                    required: true,
                    maxLength: 50,
                  })}
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
            <div className="flex flex-col mb-4 last:mb-0">
              <label
                htmlFor="inputLinkedinProfileSpeakers"
                className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-2"
              >
                Linkedin Profile <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                id="inputLinkedinProfileSpeakers"
                className="bg-white rounded-lg border border-solid border-[#E3E3E3] text-black-900 placeholder:text-[#9A9A9A] font-bevietnamPro text-sm font-normal capitalize py-5 px-4"
                name="linkedin_profile"
                placeholder="LinkedIn."
                {...register("linkedin_profile", {
                  required: true,
                  maxLength: 50,
                })}
              />
            </div>
            <div className="supports-grid:grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4 mb-4 last:mb-0">
              <div className="flex flex-col">
                <label
                  htmlFor="inputTwitterhandleSpeakers"
                  className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-2"
                >
                  Twitter Profile
                </label>
                <input
                  type="text"
                  id="inputTwitterhandleSpeakers"
                  className="bg-white rounded-lg border border-solid border-[#E3E3E3] text-black-900 placeholder:text-[#9A9A9A] font-bevietnamPro text-sm font-normal capitalize py-5 px-4"
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
                  htmlFor="inputTelegramUsernameSpeakers"
                  className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-2"
                >
                  Telegram Username
                </label>
                <input
                  type="text"
                  id="inputTelegramUsernameSpeakers"
                  className="bg-white rounded-lg border border-solid border-[#E3E3E3] text-black-900 placeholder:text-[#9A9A9A] font-bevietnamPro text-sm font-normal lowercase py-5 px-4"
                  name="telegram_username"
                  placeholder="@coinfest.asia"
                  {...register("telegram_username", {
                    required: false,
                  })}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <button
              type="submit"
              className={`!bg-secondary2024 flex flex-col items-center justify-center rounded-[14px] text-white font-bevietnamPro text-base font-normal outline-none focus-visible:outline-none mt-6 py-4 w-full transition duration-[0.3] ease-in-out`}
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
    `https://ipinfo.io/json?token=135855871d1f46`
  );

  const gHbFormSpeakers = await getFetch(
    `/forms/v2/forms/e47f2b87-a41b-43b9-bdd1-f221798314dc`
  );

  try {
    return {
      props: {
        ipAddress: gIpAddress || [],
        formSpeakers: gHbFormSpeakers || [],
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
