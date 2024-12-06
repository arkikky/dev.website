import React, { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

// @lib
import { getFetch, SubmitForm } from "@lib/controller/HubSpot";
import { getFetchUrl } from "@lib/controller/Api";

// @components
// @form
import Label from "@components/UI/Form/Label";
import Input from "@components/UI/Form/Input";

// @layouts
import PanelLayouts from "@layouts/PanelLayouts";

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
    formState: { errors, isValid, isSubmitting },
    handleSubmit,
    reset,
  } = useForm({
    mode: "all",
  });

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
        pageUri: "https://coinfest.asia/interest",
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
      {/* @main */}
      <PanelLayouts
        headTitle="Interest"
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
              className={`mt-6 flex w-full flex-col items-center justify-center rounded-[14px] bg-black-900 text-white py-6 font-bevietnamPro text-base font-normal text-white outline-none transition duration-[0.3] ease-in-out focus-visible:outline-none`}
              aria-label="Submit (Interest)"
            >
              {isSubmitting ? (
                <span className="flex flex-row items-center">
                  <svg
                    className="mr-3 h-5 w-5 animate-spin text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="3"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    ></path>
                  </svg>
                  Processing ...
                </span>
              ) : (
                "Sumbit"
              )}
            </button>
          </div>
        </form>
      </PanelLayouts>
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
