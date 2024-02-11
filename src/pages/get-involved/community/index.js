import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import getConfig from "next/config";
import Head from "next/head";

// @get .config
const { publicRuntimeConfig } = getConfig();

// @style-css
import "react-phone-number-input/style.css";

// @lib
import { getFetch, SubmitForm } from "@lib/controller/HubSpot";
import { getFetchUrl } from "@lib/controller/API";

// @layouts
import PartnershipLayouts from "@layouts/PartnershipLayouts";

const Community = (props) => {
  const [isIpAddress, setIpAddress] = useState(props.ipAddress || []);
  const [frmCommunity, setFormCommunity] = useState(props.formCommunity);
  const [isForm, setForm] = useState({
    mobilephone: "",
  });
  const [selectedCheckboxesOthrs, setSelectedCheckboxesOthrs] = useState([]);

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

    const otherChooseYrMindSpeakers =
      selectedCheckboxesOthrs.includes("Other") === true
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
          name: "telegram_username",
          value: data.telegram_username !== "" ? data.telegram_username : "-",
        },
        {
          objectTypeId: "0-1",
          name: "did_your_community_support_coinfest_asia_previously_",
          value: data.did_your_community_support_coinfest_asia_previously_,
        },
        {
          objectTypeId: "0-1",
          name: "company",
          value: data.company,
        },
        {
          objectTypeId: "0-1",
          name: "community_focus",
          value: data.community_focus.join(";"),
        },
        {
          objectTypeId: "0-1",
          name: "describe_your_community_activities_in_bullet_points",
          value: data.describe_your_community_activities_in_bullet_points,
        },
        {
          objectTypeId: "0-1",
          name: "community_channel_link_s_",
          value: data.community_channel_link_s_,
        },
        {
          objectTypeId: "0-1",
          name: "country",
          value: data.country,
        },
        {
          objectTypeId: "0-1",
          name: "website",
          value: data.website,
        },
        {
          objectTypeId: "0-1",
          name: "by_being_a_part_of_coinfest_asia_2024__we_are_interested_in",
          value:
            data.by_being_a_part_of_coinfest_asia_2024__we_are_interested_in.join(
              ";"
            ),
        },
        {
          objectTypeId: "0-1",
          name: "if_you_choose__other___tell_us_what_s_in_your_mind",
          value: data.if_you_choose__other___tell_us_what_s_in_your_mind,
        },
      ],
      context: {
        pageUri: "https://coinfest.asia/partnership/community",
        pageName: "Community Coinfest Asia 2024",
        ipAddress: isIpAddress.ip,
      },
    };

    const isKey = "55e2bf7d-f037-4b03-ace3-33247994e6db";

    const rs = await SubmitForm(isConfig, isKey);

    if (rs === true) {
      setForm({ ...isForm, mobilephone: "" });
      setSelectedCheckboxesOthrs([]);
      btnSuccessNewsletter.click();
      reset();
    }
  };

  return (
    <>
      {/* @Head */}
      <Head>
        <title>{`Community | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta
          name="title"
          content={`Community | ${publicRuntimeConfig.siteTitle}`}
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
          content={`Community | ${publicRuntimeConfig.siteTitle}`}
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
          content={`Community | ${publicRuntimeConfig.siteTitle}`}
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
      <PartnershipLayouts title="Coinfest asia 2024 Community inquiry">
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
                  htmlFor="inputFirstnameCommunity"
                  className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-2"
                >
                  First name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="inputFirstnameCommunity"
                  className="form-input bg-white rounded-lg border border-solid border-[#E3E3E3] text-black-900 placeholder:text-[#9A9A9A] font-bevietnamPro text-base xl:text-sm font-normal capitalize py-5 px-4"
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
                  htmlFor="inputLastnameCommunity"
                  className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-2"
                >
                  Last name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="inputLastnameCommunity"
                  className="form-input bg-white rounded-lg border border-solid border-[#E3E3E3] text-black-900 placeholder:text-[#9A9A9A] font-bevietnamPro text-base xl:text-sm font-normal capitalize py-5 px-4"
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
                htmlFor="inputEmailCommunity"
                className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-2"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="inputEmailCommunity"
                className="form-input bg-white rounded-lg border border-solid border-[#E3E3E3] text-black-900 placeholder:text-[#9A9A9A] font-bevietnamPro text-base xl:text-sm font-normal lowercase py-5 px-4"
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
                  htmlFor="inputMobilePhoneSpeakers"
                  className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-2"
                >
                  Mobile Phone <span className="text-red-500">*</span>
                </label>
                <PhoneInput
                  international
                  id="inputMobilephoneSpeakers"
                  className="bg-white rounded-lg border border-solid border-[#E3E3E3] text-black-900 placeholder:text-[#9A9A9A] font-bevietnamPro text-base xl:text-sm font-normal capitalize py-5 px-4"
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
                  htmlFor="inputTelegramUsernameCommunity"
                  className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-2"
                >
                  Telegram Username
                </label>
                <input
                  type="text"
                  id="inputTelegramUsernameCommunity"
                  className="form-input bg-white rounded-lg border border-solid border-[#E3E3E3] text-black-900 placeholder:text-[#9A9A9A] font-bevietnamPro text-base xl:text-sm font-normal lowercase py-5 px-4"
                  name="telegram_username"
                  placeholder="@coinfest.asia"
                  {...register("telegram_username", {
                    required: false,
                  })}
                />
              </div>
            </div>
            <div className="flex flex-col mb-6 last:mb-0">
              <label
                htmlFor="inputDidYourCompanySpeakers"
                className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-3"
              >
                Did your community support Coinfest Asia previously?{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="grid space-y-4">
                {frmCommunity.formFieldGroups?.map((gRslt) => (
                  <>
                    {gRslt.fields?.map((gRsltIn, i) => (
                      <>
                        {gRsltIn.fieldType === "radio" &&
                        gRsltIn.name ===
                          "did_your_community_support_coinfest_asia_previously_" ? (
                          <div className="space-y-2" key={i}>
                            {gRsltIn.options?.map((gOptin, a) => (
                              <>
                                <label
                                  htmlFor={`radioConfrimCommunityForm${gRsltIn.name}${a}`}
                                  className={`flex w-full`}
                                  key={a}
                                >
                                  {gRsltIn.name ===
                                    "did_your_community_support_coinfest_asia_previously_" && (
                                    <input
                                      id={`radioConfrimCommunityForm${gRsltIn.name}${a}`}
                                      type="radio"
                                      className="form-radio border border-solid border-white/20 rounded-full text-secondary2024 bxShdowNone mt-1 shrink-0 ring-0 outline-none focus:outline-none focus-visible:outline-none pointer-events-none"
                                      name={`radioConfrimCommunityForm_${gRsltIn.name}`}
                                      value={gOptin.value}
                                      {...register(
                                        "did_your_community_support_coinfest_asia_previously_",
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
                Community Channel
              </h2>
            </div>

            <div className="flex flex-col mt-4 mb-4 last:mb-0">
              <label
                htmlFor="inputCompanyCommunity"
                className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-2"
              >
                Community name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="inputCompanyCommunity"
                className="bg-white rounded-lg border border-solid border-[#E3E3E3] text-black-900 placeholder:text-[#9A9A9A] font-bevietnamPro text-base xl:text-sm font-normal capitalize py-5 px-4"
                name="company"
                placeholder="Company Co."
                {...register("company", {
                  required: true,
                  maxLength: 50,
                })}
              />
            </div>
            <div className="flex flex-col mb-6 last:mb-0">
              <label
                htmlFor="inputOtherIntrested"
                className="text-black-900 font-bevietnamPro text-base font-normal text-start mt-4 mb-4"
              >
                Community focus? <span className="text-red-500">*</span>
              </label>
              {frmCommunity.formFieldGroups?.map((gRslt) => (
                <>
                  {gRslt.fields?.map((gRsltIn, i) => (
                    <>
                      {gRsltIn.fieldType === "checkbox" && (
                        <div className="grid space-y-4" key={i}>
                          {gRsltIn.options?.map((gOptin, i) => (
                            <>
                              {gRsltIn.name === "community_focus" && (
                                <>
                                  <label
                                    htmlFor={`checkboxCommunityFocusForm${i}`}
                                    className={`flex w-full`}
                                    key={i}
                                  >
                                    <input
                                      id={`checkboxCommunityFocusForm${i}`}
                                      type="checkbox"
                                      className="border border-solid border-white/20 bg-transparent rounded-full text-secondary2024 bxShdowNone  shrink-0 mt-1 sm:mt-0.5 h-5 w-5 ring-0 outline-none focus:outline-none focus-visible:outline-none pointer-events-none"
                                      name="checkboxCommunityFocusForm[]"
                                      value={gOptin.value}
                                      {...register("community_focus", {
                                        required: true,
                                      })}
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
            </div>
            <div className="flex flex-col mt-4 mb-4 last:mb-0">
              <label
                htmlFor="inputDescribeCommunity"
                className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-2"
              >
                Describe your community activities in bullet points{" "}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                type="text"
                id="inputDescribeCommunity"
                className="bg-white rounded-lg border border-solid border-[#E3E3E3] text-black-900 placeholder:text-[#9A9A9A] font-bevietnamPro text-base xl:text-sm font-normal capitalize py-5 px-4"
                name="describe_your_community_activities_in_bullet_points"
                rows={4}
                placeholder="Live AMA with NFT creators once per week, member loyalty program once per month, and more"
                {...register(
                  "describe_your_community_activities_in_bullet_points",
                  {
                    required: true,
                    maxLength: 255,
                  }
                )}
              />
            </div>
            <div className="flex flex-col mt-4 mb-4 last:mb-0">
              <label
                htmlFor="inputCommunityChanel"
                className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-2"
              >
                Community channel link(s){" "}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                type="text"
                id="inputCommunityChanel"
                className="bg-white rounded-lg border border-solid border-[#E3E3E3] text-black-900 placeholder:text-[#9A9A9A] font-bevietnamPro text-base xl:text-sm font-normal capitalize py-5 px-4"
                name="community_channel_link_s_"
                rows={4}
                placeholder="Telegram (https://t.me/coinfestasiaofficial), Twitter (https://twitter.com/CoinfestAsia)"
                {...register("community_channel_link_s_", {
                  required: true,
                  maxLength: 255,
                })}
              />
            </div>
            <div className="flex flex-col mb-4 last:mb-0">
              <label
                htmlFor="inputCountryCommunity"
                className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-2"
              >
                Which country is the focus of your community?{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="inputCountryCommunity"
                className="bg-white rounded-lg border border-solid border-[#E3E3E3] text-black-900 placeholder:text-[#9A9A9A] font-bevietnamPro text-base xl:text-sm font-normal capitalize py-5 px-4"
                name="country"
                placeholder="Canada"
                {...register("country", {
                  required: true,
                  maxLength: 50,
                })}
              />
            </div>
            <div className="flex flex-col mb-4 last:mb-0">
              <label
                htmlFor="inputWebsiteURLLinkLogoCommunity"
                className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-2"
              >
                Link to your community logo{" "}
                <span className="text-red-500">*</span>
              </label>
              <span className="text-black-900/60 font-bevietnamPro text-xs font-normal mb-2">
                Make sure your logo fits these criteria: <br />- Minimum size
                500x500 px <br />- Format is SVG and/or PNG
              </span>
              <input
                type="url"
                id="inputWebsiteURLLinkLogoCommunity"
                className="bg-white rounded-lg border border-solid border-[#E3E3E3] text-black-900 placeholder:text-[#9A9A9A] font-bevietnamPro text-base xl:text-sm font-normal lowercase py-5 px-4"
                name="website"
                placeholder="https://google.drive.com : Make sure your logo fits these criteria:"
                {...register("website", {
                  required: true,
                })}
              />
            </div>
            <div className="flex flex-col mb-6 last:mb-0">
              <label
                htmlFor="inputOtherIntrested"
                className="text-black-900 font-bevietnamPro text-base font-normal text-start mt-4 mb-4"
              >
                In Coinfest Asia 2024, we are interested in?{" "}
                <span className="text-red-500">*</span>
              </label>
              {frmCommunity.formFieldGroups?.map((gRslt) => (
                <>
                  {gRslt.fields?.map((gRsltIn, i) => (
                    <>
                      {gRsltIn.fieldType === "checkbox" && (
                        <div className="grid space-y-4" key={i}>
                          {gRsltIn.options?.map((gOptin, i) => (
                            <>
                              {gRsltIn.name ===
                                "by_being_a_part_of_coinfest_asia_2024__we_are_interested_in" && (
                                <>
                                  <label
                                    htmlFor={`checkboxIntrestCommunityForm${i}`}
                                    className={`flex w-full`}
                                    key={i}
                                  >
                                    <input
                                      id={`checkboxIntrestCommunityForm${i}`}
                                      type="checkbox"
                                      className="border border-solid border-white/20 bg-transparent rounded-full text-secondary2024 bxShdowNone  shrink-0 mt-1 sm:mt-0.5 h-5 w-5 ring-0 outline-none focus:outline-none focus-visible:outline-none pointer-events-none"
                                      name="checkboxIntrestCommunityForm[]"
                                      value={gOptin.value}
                                      checked={selectedCheckboxesOthrs.includes(
                                        gOptin.value
                                      )}
                                      {...register(
                                        "by_being_a_part_of_coinfest_asia_2024__we_are_interested_in",
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

              {selectedCheckboxesOthrs.includes("Other") === true ? (
                <div className="flex flex-col mt-4">
                  <label
                    htmlFor="inputOtherIntrestedCommunity"
                    className="text-black-900 font-bevietnamPro text-base font-normal text-start mb-2"
                  >
                    Others : If you pick 'Other', tell us what kind of
                    activations you'd like to explore?
                  </label>
                  <input
                    type="text"
                    id="inputOtherIntrestedCommunity"
                    className="bg-white rounded-lg border border-solid border-[#E3E3E3] text-black-900 placeholder:text-[#9A9A9A] font-bevietnamPro text-base xl:text-sm font-normal capitalize py-5 px-4"
                    name="if_you_choose__other___tell_us_what_s_in_your_mind"
                    placeholder="If you pick 'Other', tell us what kind of activations you'd like to explore"
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
          </div>

          <div className="flex flex-col">
            <button
              className={`bg-secondary flex flex-col items-center justify-center rounded-[14px] text-white font-bevietnamPro text-base font-normal outline-none focus-visible:outline-none mt-6 py-4 w-full transition duration-[0.3] ease-in-out`}
              aria-label="Form Submit (Community)"
              aria-labelledby="Form Submit (Community)"
            >
              Submit
            </button>
          </div>
        </form>
      </PartnershipLayouts>
    </>
  );
};

export default Community;

export const getStaticProps = async () => {
  const gIpAddress = await getFetchUrl(
    `https://ipinfo.io/json?token=135855871d1f46`
  );

  const gHbFormCommunity = await getFetch(
    `/forms/v2/forms/55e2bf7d-f037-4b03-ace3-33247994e6db`
  );

  try {
    return {
      props: {
        ipAddress: gIpAddress || [],
        formCommunity: gHbFormCommunity || [],
      },

      revalidate: 3600,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

Community.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
