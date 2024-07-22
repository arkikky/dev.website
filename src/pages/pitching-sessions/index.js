import React, { useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { useForm } from "react-hook-form";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import Select from "react-select";
import getConfig from "next/config";
import Head from "next/head";
import Image from "next/image";

// @get .config
const { publicRuntimeConfig } = getConfig();

// @lib
import { getFetch, SubmitForm } from "@lib/controller/HubSpot";
import { getFetchUrl } from "@lib/controller/API";

// @style-css
import "react-phone-number-input/style.css";

// @components
import Container from "@components/Container";

// @layouts
import BentoGridLayouts from "@layouts/BentoLayouts";
import BannerFooter from "@layouts/Banner/BannerFooter";

const PitchingSessions = ({ ipAddrs, formPitchingSessions, countryRegion }) => {
  const [frmPitchingSessions, setFormPitchingSessions] =
    useState(formPitchingSessions);
  const [isForm, setForm] = useState({
    mobilephone: "",
  });
  const [countryRegionSponsor, setcountryRegionSponsor] =
    useState(countryRegion);
  const [countryRegionSelect, setCountryRegionSelect] = useState(null);
  const [positioncompanySelect, setPositionCompanySelect] = useState(null);
  const [selectSecured, setSelectSecured] = useState(false);

  gsap.registerPlugin(ScrollToPlugin);

  const isScrollToCard = (e) => {
    e.preventDefault();

    gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: "#ca2024FormPitchingSessions", offsetY: 140 },
      ease: "power2",
    });
  };

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
  // console.log(frmPitchingSessions.formFieldGroups);
  // console.log(frmPitchingSessions.formFieldGroups[11].fields[0].options);

  // @handle-countryregion
  const handleCountryRegion = (e) => {
    setCountryRegionSelect(e);
  };

  // @submit
  const onSubmit = async (data) => {
    const btnSuccessNewsletter = document.querySelector(
      "#btnSuccessPitchingNewsletterMdl.btnSuccessPitchingNewsletterMdl",
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
        // {
        //   objectTypeId: "0-1",
        //   name: "have_you_secured_your_coinfest_asia_ticket_",
        //   value: data.have_you_secured_your_coinfest_asia_ticket_,
        // },
        // {
        //   objectTypeId: "0-1",
        //   name: "your_coinfest_asia_ticket_number",
        //   value: data.your_coinfest_asia_ticket_number
        //     ? data.your_coinfest_asia_ticket_number
        //     : "-",
        // },
        {
          objectTypeId: "0-1",
          name: "company",
          value: data.company,
        },
        {
          objectTypeId: "0-1",
          name: "company_website",
          value: data.company_website,
        },
        {
          objectTypeId: "0-1",
          name: "job_title_position",
          value:
            positioncompanySelect !== null ? positioncompanySelect.value : "-",
        },
        {
          objectTypeId: "0-1",
          name: "country",
          value: countryRegionSelect !== null ? countryRegionSelect.value : "-",
        },
        {
          objectTypeId: "0-1",
          name: "what_use_case_is_your_company_solving",
          value: data.what_use_case_is_your_company_solving,
        },
        {
          objectTypeId: "0-1",
          name: "project_one_liner",
          value: data.project_one_liner,
        },
        {
          objectTypeId: "0-1",
          name: "project_whitepaper",
          value: data.project_whitepaper,
        },
        {
          objectTypeId: "0-1",
          name: "pitching_video",
          value: data.pitching_video,
        },
      ],
      context: {
        pageUri: "https://coinfest.asia/pitching-sessions",
        pageName: "Pitching Sessions | Coinfest Asia 2024",
        ipAddress: ipAddrs.ip,
      },
    };

    const isKey = "0d7cc29f-6e7c-4c4c-9d14-159c567fe874";

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
        <title>{`Pitching Sessions | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta
          name="title"
          content={`Pitching Sessions | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta name="description" content={publicRuntimeConfig.siteDesc} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="og:title"
          content={`Pitching Sessions | ${publicRuntimeConfig.siteTitle}`}
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
          content={`Pitching Sessions | ${publicRuntimeConfig.siteTitle}`}
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

      <BentoGridLayouts>
        <main className="relative">
          <header className="ca2024BgLineMint relative mx-2 mb-10 mt-2 flex h-[796px] flex-col items-center justify-center overflow-hidden rounded-[20px] bg-[#0095A0] sm:mx-2.5 sm:mb-15 sm:mt-3.5 sm:rounded-[26px] lg:mx-5 lg:mb-[88px] lg:mt-5 lg:h-[750px]">
            {/* @points(flower) */}
            <div className="absolute -left-[34px] bottom-0 right-auto top-auto z-px h-[201px] w-auto sm:-left-10 sm:h-[319px] lg:left-0 lg:h-[396px] xl:h-[576px]">
              <Image
                className="mx-auto h-full w-auto object-cover object-center"
                src="/assets/images/backdrop/points/ca2024Points-BFlowerLeft.png"
                alt={`Coinfest Asia 2024 (Points B Flower Left)`}
                height={576}
                width={532}
                quality="87"
              />
            </div>
            <div className="absolute -right-10 bottom-0 left-auto top-auto z-px h-[201px] w-auto sm:-right-[47px] sm:h-[319px] lg:right-0 lg:h-[396px] xl:h-[576px]">
              <Image
                className="mx-auto h-full w-auto object-cover object-center"
                src="/assets/images/backdrop/points/ca2024Points-BFlowerRight.png"
                alt={`Coinfest Asia 2024 (Points B Flower Right)`}
                height={576}
                width={532}
                quality="87"
              />
            </div>

            <div className="relative z-[5] -mt-[105px] flex w-full max-w-full flex-col text-center sm:max-w-[551px] lg:max-w-[711px]">
              <div className="mx-auto mb-4 flex w-max flex-row items-center sm:mb-6">
                <span className="mx-auto inline-flex w-max flex-row items-center justify-center rounded-full border border-solid border-white bg-white/[0.07] px-3 py-2 font-bevietnamPro text-sm font-light text-white">
                  Pitching Sessions
                </span>
                <span class="mx-1.5 text-base font-light text-white sm:mx-3.5">
                  |
                </span>
                <span className="mx-auto inline-flex w-max flex-row items-center justify-center rounded-full border border-solid border-white bg-white/[0.07] px-3 py-2 font-bevietnamPro text-sm font-light text-white">
                  Day 1 @ Coinfest Asia
                </span>
              </div>
              <h1 className="font-staraExtraBold text-[40px] uppercase leading-[48px] text-white sm:text-[48px] sm:leading-[60px]">
                Share your project
              </h1>
              <p className="mt-1 font-bevietnamPro text-base font-light text-white/80 lg:text-xl">
                Share your project's vision & latest updates. Connect with
                prominent VCs and key players in Web3 Industry
              </p>
              <div className="mx-auto mt-6 inline-flex w-full flex-col items-center justify-between px-4 sm:w-max sm:flex-row sm:px-0">
                <button
                  className={`relative mb-2 mr-0 inline-flex w-full items-center justify-center rounded-[14px] bg-white px-4 py-4 font-bevietnamPro text-base font-normal text-black-900 outline-none last:mr-0 focus-visible:outline-none sm:mb-0 sm:mr-4 sm:w-max sm:px-6`}
                  onClick={(e) => {
                    isScrollToCard(e);
                  }}
                >
                  Submit your project
                </button>
              </div>
            </div>
          </header>

          <div
            id="ca2024FormPitchingSessions"
            className="relative z-10 mx-2 -mt-[105px] mb-18 sm:mx-2.5 sm:-mt-[141px] sm:mb-0 lg:mx-5 lg:-mt-[187px] xl:mb-20"
          >
            <Container>
              <div className="mb-15 flex flex-col rounded-[22px] border border-solid border-[#DCDCDC] bg-white px-4 py-6 sm:rounded-[26px] sm:px-12 sm:py-10">
                <h2 className="font-bevietnamPro text-xl font-semibold uppercase text-black-900 sm:text-[28px] sm:font-bold sm:leading-[34px]">
                  Use cases
                </h2>
                <div className="mt-3.5 inline-flex h-max w-full gap-y-2.5 overflow-x-auto lg:flex-wrap">
                  <div className="ca20240Radio-labelBtn group mr-3 uppercase last:mr-0">
                    🏜 Land registration
                  </div>
                  <div className="ca20240Radio-labelBtn group mr-3 uppercase last:mr-0">
                    🐟 Fishery
                  </div>
                  <div className="ca20240Radio-labelBtn group mr-3 uppercase last:mr-0">
                    🌾 Agriculture
                  </div>
                  <div className="ca20240Radio-labelBtn group mr-3 uppercase last:mr-0">
                    ⚡ Energy
                  </div>
                  <div className="ca20240Radio-labelBtn group mr-3 uppercase last:mr-0">
                    🌳 Forestry
                  </div>
                  <div className="ca20240Radio-labelBtn group mr-3 uppercase last:mr-0">
                    🏭 Carbon Trading
                  </div>
                  <div className="ca20240Radio-labelBtn group mr-3 uppercase last:mr-0">
                    🚚 Logistics
                  </div>
                  <div className="ca20240Radio-labelBtn group mr-3 uppercase last:mr-0">
                    🪪 Single Identity
                  </div>
                  <div className="ca20240Radio-labelBtn group mr-3 uppercase last:mr-0">
                    ♻ Waste Management
                  </div>
                  <div className="ca20240Radio-labelBtn group mr-3 uppercase last:mr-0">
                    💸 Financial Technology Innovation
                  </div>
                </div>
              </div>

              <form
                className="relative flex w-full flex-col"
                method="POST"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="mb-6 flex flex-col items-start justify-start gap-y-3 sm:flex-row sm:items-center sm:justify-between sm:gap-y-0">
                  <h2 className="font-bevietnamPro text-xl font-semibold uppercase text-black-900 sm:text-[28px] sm:font-bold sm:leading-[34px]">
                    Submit your project
                  </h2>

                  <span className="flex flex-col items-center justify-center overflow-hidden rounded-full bg-[#0095A0] px-4 py-2 text-sm font-light text-white sm:text-base">
                    Submission deadline: August 12th, 2024
                  </span>
                </div>

                <div className="flex flex-col rounded-[22px] border border-solid border-[#DCDCDC] px-4 py-6 sm:rounded-[26px] sm:px-12 sm:py-10">
                  <div className="flex w-full flex-col">
                    <div className="mb-6 flex w-max flex-col">
                      <h2 className="font-bevietnamPro text-xl font-semibold uppercase text-black-900 sm:font-bold sm:leading-[34px]">
                        Personal details
                      </h2>
                    </div>

                    <div className="mb-4 grid-cols-1 gap-x-4 gap-y-4 last:mb-0 supports-grid:grid sm:grid-cols-2">
                      <div className="flex flex-col">
                        <label
                          htmlFor="firstnamePitchingSessions"
                          className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                        >
                          First name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="firstnamePitchingSessions"
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
                          htmlFor="lastnamePitchingSessions"
                          className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                        >
                          Last name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="lastnamePitchingSessions"
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
                    <div className="mb-4 grid-cols-1 gap-x-4 gap-y-4 last:mb-0 supports-grid:grid sm:grid-cols-2">
                      <div className="flex flex-col">
                        <label
                          htmlFor="emailPitchingSessions"
                          className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                        >
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="emailPitchingSessions"
                          className="form-input rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal lowercase text-black-900 placeholder:text-[#9A9A9A]"
                          name="email"
                          placeholder="michaelzhao@company.com"
                          {...register("email", {
                            required: true,
                            maxLength: 1000,
                          })}
                        />
                      </div>
                      <div className="flex flex-col">
                        <label
                          htmlFor="mobilePhonePitchingSessions"
                          className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                        >
                          Mobile Phone <span className="text-red-500">*</span>
                        </label>
                        <PhoneInputWithCountry
                          international
                          countryCallingCodeEditable={false}
                          id="mobilephonePitchingSessions"
                          className="rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal capitalize text-black-900 placeholder:text-[#9A9A9A]"
                          name="phone"
                          placeholder="+14161114646"
                          control={control}
                          rules={{ required: true }}
                          value={isForm.mobilephone}
                          defaultCountry={ipAddrs.country}
                          onChange={(e) =>
                            setForm({ ...isForm, mobilephone: e })
                          }
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex w-full flex-col">
                    <div className="mb-6 flex w-max flex-col">
                      <h2 className="font-bevietnamPro text-xl font-semibold uppercase text-black-900 sm:font-bold sm:leading-[34px]">
                        Project Details
                      </h2>
                    </div>

                    <div className="mb-4 grid-cols-1 gap-x-4 gap-y-4 last:mb-0 supports-grid:grid sm:grid-cols-2">
                      <div className="flex flex-col">
                        <label
                          htmlFor="inputPitchingSessions"
                          className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                        >
                          Company name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="companyPitchingSessions"
                          className="form-input rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal capitalize text-black-900 placeholder:text-[#9A9A9A]"
                          name="name"
                          placeholder="Company Co."
                          {...register("company", {
                            required: true,
                            maxLength: 1000,
                          })}
                        />
                      </div>
                      <div className="flex flex-col">
                        <label
                          htmlFor="websiteURLPitchingSessions"
                          className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                        >
                          Website URL <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="url"
                          id="websiteURLPitchingSessions"
                          className="rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal lowercase text-black-900 placeholder:text-[#9A9A9A]"
                          name="website"
                          placeholder="https://company.io"
                          {...register("company_website", {
                            required: true,
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
                          Your position in the company{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <Select
                          defaultValue={positioncompanySelect}
                          onChange={setPositionCompanySelect}
                          options={
                            frmPitchingSessions.formFieldGroups[8].fields[0]
                              .options
                          }
                        />
                      </div>
                      <div className="flex flex-col">
                        <label
                          htmlFor="countryRegionPitchingSessions"
                          className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                        >
                          Country/Region <span className="text-red-500">*</span>
                        </label>
                        <Select
                          id="countryRegionPitchingSessions"
                          defaultValue={countryRegionSelect}
                          onChange={(e) => {
                            handleCountryRegion(e);
                          }}
                          options={countryRegionSponsor.countries}
                        />
                      </div>
                    </div>
                    {frmPitchingSessions && (
                      <div className="mb-6 flex flex-col last:mb-0">
                        <label
                          htmlFor="inputDidYourCompanySpeakers"
                          className="mb-3 text-start font-bevietnamPro text-base font-normal text-black-900"
                        >
                          What use case is your Project solving?{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <div className="flex flex-col space-y-2">
                          {frmPitchingSessions.formFieldGroups[9].fields[0].options?.map(
                            (gRslt, i) => (
                              <div
                                className="ca20240Radio-label relative mr-2.5 flex w-full last:mr-0"
                                key={i}
                              >
                                <input
                                  id={`useCasePitchingSessions${gRslt.label}${i}`}
                                  className="!boxShadow-none !focus:outline-none !focus-visible:outline-none shrink-0 rounded-full border-gray-200 text-secondary !outline-none !ring-0"
                                  type="radio"
                                  name={`what_use_case_is_your_company_solving${gRslt.label}${i}`}
                                  value={gRslt.value}
                                  {...register(
                                    "what_use_case_is_your_company_solving",
                                    {
                                      required: true,
                                    },
                                  )}
                                />
                                <label
                                  for={`useCasePitchingSessions${gRslt.label}${i}`}
                                >
                                  {gRslt.label}
                                </label>
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                    )}
                    <div className="mb-4 flex flex-col last:mb-0">
                      <div className="flex flex-col items-start justify-start sm:flex-row sm:items-center sm:justify-between">
                        <label
                          htmlFor="projectOnePitchingSessions"
                          className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                        >
                          What product are you going to pitch?{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <span className="mb-2 font-bevietnamPro text-xs font-normal text-black-900/60">
                          The product name & one-liner explanation
                        </span>
                      </div>
                      <textarea
                        type="text"
                        id="projectOnePitchingSessions"
                        className="form-input rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal text-black-900 placeholder:text-[#9A9A9A]"
                        name="project_one_liner"
                        rows={4}
                        placeholder="example: Project XYZ - Transforming land registry with blockchain technology for secure, transparent, and tamper-proof property records"
                        {...register("project_one_liner", {
                          required: true,
                          maxLength: 1000,
                        })}
                      />
                    </div>
                    <div className="mb-4 flex flex-col last:mb-0">
                      <label
                        htmlFor="projectWhitepaperPitchingSessions"
                        className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                      >
                        Link to your product whitepaper{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="url"
                        id="projectWhitepaperPitchingSessions"
                        className="form-input rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal lowercase text-black-900 placeholder:text-[#9A9A9A]"
                        name="project_whitepaper"
                        placeholder="https://"
                        {...register("project_whitepaper", {
                          required: true,
                        })}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="projectVideoPitchingSessions"
                        className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                      >
                        Link to video of your pitch{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="url"
                        id="projectVideoPitchingSessions"
                        className="form-input rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal lowercase text-black-900 placeholder:text-[#9A9A9A]"
                        name="pitching_video"
                        placeholder="https://"
                        {...register("pitching_video", {
                          required: true,
                        })}
                      />
                    </div>
                  </div>

                  {/* @submit */}
                  <div className="mt-4 flex w-full flex-col sm:mt-8">
                    <button
                      type="submit"
                      className={`ca2024BgOverflayMint mt-6 flex w-full flex-col items-center justify-center rounded-[14px] !bg-secondary px-6 py-4 font-bevietnamPro text-base font-normal text-white outline-none transition duration-[0.3] ease-in-out focus-visible:outline-none sm:w-max`}
                      aria-label="Submit your project (Pitching Sessions)"
                    >
                      Submit your project
                    </button>
                  </div>
                </div>
              </form>
            </Container>
          </div>

          {/* @banner-footer */}
          <BannerFooter />
        </main>
      </BentoGridLayouts>
    </>
  );
};

export default PitchingSessions;

export const getStaticProps = async () => {
  const gIpAddress = await getFetchUrl(
    `https://ipinfo.io/json?token=135855871d1f46`,
  );

  const formPitchingSessions = await getFetch(
    `/forms/v2/forms/0d7cc29f-6e7c-4c4c-9d14-159c567fe874`,
  );

  const gCountryRegion = await getFetchUrl(
    `https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=name`,
  );

  try {
    return {
      props: {
        ipAddrs: gIpAddress || [],
        formPitchingSessions: formPitchingSessions || [],
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

PitchingSessions.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
