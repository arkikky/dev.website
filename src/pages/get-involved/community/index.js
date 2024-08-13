import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
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

const CommunityGetInvolved = ({ ipAddrs, formCommunity }) => {
  const [frmCommunity, setFormCommunity] = useState(formCommunity);
  const [isForm, setForm] = useState({
    mobilephone: "",
  });
  const [selectInterestedCheckOthrs, setSelectInterestedCheckOthrs] = useState(
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

  // @others
  const handleCheckboxChange = (value) => {
    if (selectInterestedCheckOthrs.includes(value)) {
      setSelectInterestedCheckOthrs(
        selectInterestedCheckOthrs.filter((item) => item !== value),
      );
    } else {
      setSelectInterestedCheckOthrs([...selectInterestedCheckOthrs, value]);
    }
  };

  // @debug
  // console.log(frmCommunity.formFieldGroups);
  // console.log(frmCommunity.formFieldGroups[11].fields[0].options);

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
          value: data.community_focus ? data.community_focus : "",
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
              ";",
            ),
        },
        {
          objectTypeId: "0-1",
          name: "if_you_choose__other___tell_us_what_s_in_your_mind",
          value:
            selectInterestedCheckOthrs.includes("Other") === true
              ? data.if_you_choose__other___tell_us_what_s_in_your_mind
              : "-",
        },
      ],
      context: {
        pageUri: "https://coinfest.asia/get-involved/community",
        pageName: "Community | Coinfest Asia 2024",
        ipAddress: ipAddrs.ip,
      },
    };

    const isKey = "55e2bf7d-f037-4b03-ace3-33247994e6db";

    const rs = await SubmitForm(isConfig, isKey);

    // @debug
    // console.log(isConfig);

    if (rs === true) {
      setForm({ ...isForm, mobilephone: "" });
      setSelectInterestedCheckOthrs([]);
      btnSuccessNewsletter.click();
      reset();
    }
  };

  return (
    <>
      {/* @head */}
      <Head>
        <title>{`Community | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta
          name="title"
          content={`Community | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta name="description" content={publicRuntimeConfig.siteUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="og:title"
          content={`Community | ${publicRuntimeConfig.siteTitle}`}
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
          content={`Community | ${publicRuntimeConfig.siteTitle}`}
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
        title="Coinfest asia 2024 Community inquiry"
        btnBack={true}
        urlBack={"/get-involved"}
      >
        <form
          id="formCommunity"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
          className="mt-0 flex flex-col space-y-8 sm:mt-6"
        >
          <div className="flex flex-col">
            <div className="mb-4 grid-cols-1 gap-x-4 gap-y-4 last:mb-0 supports-grid:grid sm:grid-cols-2">
              <div className="flex flex-col">
                <label
                  htmlFor="firstnameCommunity"
                  className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                >
                  First name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstnameCommunity"
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
                  htmlFor="lastnameCommunity"
                  className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                >
                  Last name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastnameCommunity"
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
            <div className="mb-4 flex flex-col last:mb-0">
              <label
                htmlFor="emailCommunity"
                className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="emailCommunity"
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
                  htmlFor="mobilePhoneCommunity"
                  className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                >
                  Mobile Phone <span className="text-red-500">*</span>
                </label>
                <PhoneInputWithCountry
                  international
                  countryCallingCodeEditable={false}
                  id="mobilephoneCommunity"
                  className="rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal capitalize text-black-900 placeholder:text-[#9A9A9A]"
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
                  htmlFor="telegramUsernameCommunity"
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
            </div>
            {frmCommunity && (
              <div className="mb-6 flex flex-col last:mb-0">
                <label
                  htmlFor="inputDidYourCompanySpeakers"
                  className="mb-3 text-start font-bevietnamPro text-base font-normal text-black-900"
                >
                  Did your community support Coinfest Asia previously?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="grid space-y-2">
                  {frmCommunity.formFieldGroups[3].fields[0].options?.map(
                    (gRslt, i) => (
                      <div className="space-y-2" key={i}>
                        <label
                          htmlFor={`radioCommunitySupportForm${gRslt.name}${i}`}
                          className={`flex w-full cursor-pointer`}
                        >
                          <input
                            id={`radioCommunitySupportForm${gRslt.name}${i}`}
                            type="radio"
                            className="boxShadow-none form-radio pointer-events-none mt-[3px] h-5 w-5 shrink-0 rounded-full  border border-solid border-white/20 bg-transparent text-secondary outline-none ring-0 focus:outline-none focus-visible:outline-none sm:mt-[3px]"
                            name={`radioCommunitySupportForm_${gRslt.name}`}
                            value={gRslt.value}
                            {...register(
                              "did_your_community_support_coinfest_asia_previously_",
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

          {/* @community-chanel */}
          <div className="flex flex-col">
            <div className="flex w-max flex-col">
              <h2 className="font-bevietnamPro text-xl font-semibold text-black-900 sm:text-[28px] sm:font-bold sm:leading-[34px]">
                Community Channel
              </h2>
            </div>

            <div className="mb-4 mt-4 flex flex-col last:mb-0">
              <label
                htmlFor="companyCommunity"
                className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
              >
                Community name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="companyCommunity"
                className="form-input rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal capitalize text-black-900 placeholder:text-[#9A9A9A]"
                name="company"
                placeholder="Company Co."
                {...register("company", {
                  required: true,
                  maxLength: 1000,
                })}
              />
            </div>
            <div className="mb-6 flex flex-col last:mb-0">
              <label
                htmlFor="inputOtherIntrested"
                className="mb-4 text-start font-bevietnamPro text-base font-normal text-black-900"
              >
                Community focus? <span className="text-red-500">*</span>
              </label>
              <div className="grid space-y-4">
                {/* {frmCommunity.formFieldGroups[6].fields[0].options?.map(
                  (gRslt, i) => (
                    <label
                      htmlFor={`checkboxCommunityFocusForm${i}`}
                      className={`flex w-full cursor-pointer`}
                      key={i}
                    >
                      <input
                        id={`checkboxCommunityFocusForm${i}`}
                        type="checkbox"
                        className="boxShadow-none form-checkbox pointer-events-none mt-[3px] h-5 w-5 shrink-0 rounded border border-solid border-white/20 bg-transparent text-secondary outline-none ring-0 focus:outline-none focus-visible:outline-none sm:mt-[3px]"
                        name="checkboxCommunityFocusForm[]"
                        value={gRslt.value}
                        {...register("community_focus", {
                          required: true,
                        })}
                      />

                      <span className="ml-3 font-bevietnamPro text-base font-normal text-black-900">
                        {gRslt.label}
                      </span>
                    </label>
                  ),
                )} */}
                {frmCommunity.formFieldGroups[6].fields[0].options?.map(
                  (gRslt, i) => (
                    <div className="space-y-2" key={i}>
                      <label
                        htmlFor={`radioCommunityFocusForm${gRslt.name}${i}`}
                        className={`flex w-full cursor-pointer`}
                      >
                        <input
                          id={`radioCommunityFocusForm${gRslt.name}${i}`}
                          type="radio"
                          className="boxShadow-none form-radio pointer-events-none mt-[3px] h-5 w-5 shrink-0 rounded-full  border border-solid border-white/20 bg-transparent text-secondary outline-none ring-0 focus:outline-none focus-visible:outline-none sm:mt-[3px]"
                          name={`radioCommunityFocusForm_${gRslt.name}`}
                          value={gRslt.value}
                          {...register("community_focus", {
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
            <div className="mb-4 flex flex-col last:mb-0">
              <label
                htmlFor="describeCommunity"
                className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
              >
                Describe your community activities in bullet points{" "}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                type="text"
                id="describeCommunity"
                className="rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal capitalize text-black-900 placeholder:text-[#9A9A9A]"
                name="describe_your_community_activities_in_bullet_points"
                rows={4}
                placeholder="Live AMA with NFT creators once per week, member loyalty program once per month, and more"
                {...register(
                  "describe_your_community_activities_in_bullet_points",
                  {
                    required: true,
                    maxLength: 2000,
                  },
                )}
              />
            </div>
            <div className="mb-4 flex flex-col last:mb-0">
              <label
                htmlFor="communityChanel"
                className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
              >
                Community channel link(s){" "}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                type="text"
                id="communityChanel"
                className="form-input rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal text-black-900 placeholder:text-[#9A9A9A]"
                name="community_channel_link_s_"
                rows={4}
                placeholder="Telegram (https://t.me/coinfestasiaofficial), Twitter (https://twitter.com/CoinfestAsia)"
                {...register("community_channel_link_s_", {
                  required: true,
                  maxLength: 1000,
                })}
              />
            </div>
            <div className="mb-4 flex flex-col last:mb-0">
              <label
                htmlFor="countryCommunity"
                className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
              >
                Which country is the focus of your community?{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="countryCommunity"
                className="form-input rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal capitalize text-black-900 placeholder:text-[#9A9A9A]"
                name="country"
                placeholder="Canada"
                {...register("country", {
                  required: true,
                  maxLength: 1000,
                })}
              />
            </div>
            <div className="mb-4 flex flex-col last:mb-0">
              <label
                htmlFor="websiteURLLinkLogoCommunity"
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
                id="websiteURLLinkLogoCommunity"
                className="form-input rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal lowercase text-black-900 placeholder:text-[#9A9A9A]"
                name="website"
                placeholder="https://google.drive.com : Make sure your logo fits these criteria:"
                {...register("website", {
                  required: true,
                })}
              />
            </div>
            <div className="mb-6 flex flex-col last:mb-0">
              <label
                htmlFor="inputOtherIntrested"
                className="mb-4 text-start font-bevietnamPro text-base font-normal text-black-900"
              >
                In Coinfest Asia 2024, we are interested in?{" "}
                <span className="text-red-500">*</span>
              </label>

              <div className="grid space-y-4">
                {frmCommunity.formFieldGroups[11].fields[0].options?.map(
                  (gRslt, i) => (
                    <label
                      htmlFor={`intrestCommunityForm${i}`}
                      className={`flex w-full cursor-pointer`}
                      key={i}
                    >
                      <input
                        type="checkbox"
                        id={`intrestCommunityForm${i}`}
                        className="boxShadow-none form-checkbox pointer-events-none mt-[3px] h-5 w-5 shrink-0 rounded border border-solid border-white/20 bg-transparent text-secondary outline-none ring-0 focus:outline-none focus-visible:outline-none sm:mt-[3px]"
                        name="intrestCommunityForm[]"
                        value={gRslt.value}
                        {...register(
                          "by_being_a_part_of_coinfest_asia_2024__we_are_interested_in",
                          {
                            required: true,
                          },
                        )}
                        onChange={(e) => {
                          handleCheckboxChange(gRslt.value);
                        }}
                      />

                      <span className="ml-3 font-bevietnamPro text-base font-normal text-black-900">
                        {gRslt.label}
                      </span>
                    </label>
                  ),
                )}
              </div>

              {selectInterestedCheckOthrs.includes("Other") === true ? (
                <div className="mt-4 flex flex-col">
                  <label
                    htmlFor="intrestedOthersCommunity"
                    className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                  >
                    Others : If you pick 'Other', tell us what kind of
                    activations you'd like to explore?
                  </label>
                  <input
                    type="text"
                    id="intrestedOthersCommunity"
                    className="form-input rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal text-black-900 placeholder:text-[#9A9A9A]"
                    name="if_you_choose__other___tell_us_what_s_in_your_mind"
                    placeholder="If you pick 'Other', tell us what kind of activations you'd like to explore"
                    {...register(
                      "if_you_choose__other___tell_us_what_s_in_your_mind",
                      {
                        required: true,
                        maxLength: 1000,
                      },
                    )}
                  />
                </div>
              ) : null}
            </div>
          </div>

          {/* @submit */}
          <div className="flex flex-col">
            <button
              type="submit"
              className={`mt-6 flex w-full flex-col items-center justify-center rounded-[14px] !bg-secondary py-4 font-bevietnamPro text-base font-normal text-white outline-none transition duration-[0.3] ease-in-out focus-visible:outline-none`}
              aria-label="Submit (Community)"
            >
              Submit
            </button>
          </div>
        </form>
      </PartnershipLayouts>
    </>
  );
};

export default CommunityGetInvolved;

export const getStaticProps = async () => {
  const gIpAddress = await getFetchUrl(
    `https://ipinfo.io/json?token=135855871d1f46`,
  );

  const formCommunity = await getFetch(
    `/forms/v2/forms/55e2bf7d-f037-4b03-ace3-33247994e6db`,
  );

  try {
    return {
      props: {
        ipAddrs: gIpAddress || [],
        formCommunity: formCommunity || [],
      },

      revalidate: 3600,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

CommunityGetInvolved.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
