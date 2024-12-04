import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import getConfig from "next/config";
import Head from "next/head";

// @get .config
const { publicRuntimeConfig } = getConfig();

// @lib
import { getFetch, SubmitForm } from "@lib/controller/HubSpot";
import { getFetchUrl } from "@lib/controller/Api";

// @layouts
import PartnershipLayouts from "@layouts/PartnershipLayouts";

const Interest = ({ ipAddrs, formInterest }) => {
  const router = useRouter();
  const [frmInterest, setFormInterest] = useState(formInterest);
  const [isForm, setForm] = useState({
    mobilephone: "",
  });

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
  // console.log(frmInterest.formFieldGroups);
  // console.log(frmInterest.formFieldGroups[7].fields[0].options);

  // @submit
  const onSubmit = async (data) => {
    const btnOpenGmailSuccess = document.querySelector(
      "#btnInterestNewsletterMdl2025"
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
      ],
      context: {
        pageUri: "https://coinfest.asia/get-involved/interest",
        pageName: "2025 Interest | Coinfest Asia 2024",
        ipAddress: ipAddrs.ip,
      },
    };

    const isKey = "87ad0d27-df80-4c61-9203-f2845e888c56";

    const rs = await SubmitForm(isConfig, isKey);

    // @debug
    // console.log(isConfig);

    if (rs === true) {
      reset();
      router.replace("/interest/success");
    }
  };

  return (
    <>
      {/* @head */}
      <Head>
        <title>{`Interest | ${publicRuntimeConfig.siteTitle}`}</title>
        <meta
          name="title"
          content={`Interest | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta name="description" content={publicRuntimeConfig.siteUrl} />

        {/* @open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="og:title"
          content={`Interest | ${publicRuntimeConfig.siteTitle}`}
        />
        <meta property="og:description" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_UPLOAD}/uploads/ca2024_Thumbnails_Share_Link_App_9964b5c353.png`}
        />
        <meta
          property="og:site_name"
          content={`${publicRuntimeConfig.siteTitle}`}
        />

        {/* @twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={publicRuntimeConfig.siteUrl} />
        <meta
          property="twitter:title"
          content={`Interest | ${publicRuntimeConfig.siteTitle}`}
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
        title="Coinfest asia 2025 Attendees Interest"
        shortDesc={
          "Stop lurking! Get the latest updates on the largest crypto festival in the world and get yourself ready for a festival unlike any other under the full moon."
        }
        btnBack={true}
        brandLogo="white"
        modeDifferent={true}
      >
        <form
          id="formInterest"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
          className="mt-0 flex flex-col space-y-8 sm:mt-8"
        >
          <div className="flex flex-col">
            <div className="mb-4 grid-cols-1 gap-x-4 gap-y-4 last:mb-0 supports-grid:grid sm:grid-cols-2">
              <div className="flex flex-col">
                <label
                  htmlFor="firstnameInterest"
                  className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                >
                  First name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstnameInterest"
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
                  htmlFor="lastnameInterest"
                  className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
                >
                  Last name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastnameInterest"
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
                htmlFor="emailInterest"
                className="mb-2 text-start font-bevietnamPro text-base font-normal text-black-900"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="emailInterest"
                className="form-input rounded-lg border border-solid border-[#E3E3E3] bg-white px-4 py-5 font-bevietnamPro text-sm font-normal lowercase text-black-900 placeholder:text-[#9A9A9A]"
                name="email"
                placeholder="michaelzhao@company.com"
                {...register("email", {
                  required: true,
                  maxLength: 1000,
                })}
              />
            </div>
          </div>

          {/* @submit */}
          <div className="flex flex-col">
            <button
              type="submit"
              className={`mt-6 flex w-full flex-col items-center justify-center rounded-[14px] ${
                isValid
                  ? "bg-primary text-white"
                  : "bg-gray-300 cursor-default text-black-900"
              }  py-4 font-bevietnamPro text-base font-normal text-white outline-none transition duration-[0.3] ease-in-out focus-visible:outline-none`}
              aria-label="Submit (Interest)"
              disabled={!isValid}
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
  const getIpAddress = await getFetchUrl(
    `https://ipinfo.io/json?token=135855871d1f46`
  );

  const getHbForm = await getFetch(
    `/forms/v2/forms/87ad0d27-df80-4c61-9203-f2845e888c56`
  );

  try {
    return {
      props: {
        ipAddrs: getIpAddress || [],
        formInterest: getHbForm || [],
      },

      revalidate: 900,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

Interest.getLayout = function PageLayout(page) {
  return <>{page}</>;
};

export default Interest;
