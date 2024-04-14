import React, { useState } from "react";
import getConfig from "next/config";
import Head from "next/head";

// @get .config
const { publicRuntimeConfig } = getConfig();

// @lib
import { getFetch, SubmitForm } from "@lib/controller/HubSpot";
import { getFetchUrl } from "@lib/controller/API";

// @layouts
import PartnershipLayouts from "@layouts/PartnershipLayouts";

const GetInvolvedCommunity = ({ ipAddress, formCommunity }) => {
  const [isIpAddress, setIpAddress] = useState(ipAddress || []);
  const [frmCommunity, setFormCommunity] = useState(formCommunity);
  const [isForm, setForm] = useState({
    mobilephone: "",
  });
  const [selectedCheckboxesOthrs, setSelectedCheckboxesOthrs] = useState([]);

  return (
    <>
      {/* @head */}
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
          id="formCommunity"
          method="POST"
          // onSubmit={handleSubmit(onSubmit)}
          className="mt-0 flex flex-col sm:mt-6"
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
                  // {...register("firstname", {
                  //   required: true,
                  //   maxLength: 50,
                  // })}
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
                  // {...register("lastname", {
                  //   required: true,
                  //   maxLength: 50,
                  // })}
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
                // {...register("email", {
                //   required: true,
                //   maxLength: 50,
                // })}
              />
            </div>
          </div>
        </form>
      </PartnershipLayouts>
    </>
  );
};

export default GetInvolvedCommunity;

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
        ipAddress: gIpAddress || [],
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

GetInvolvedCommunity.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
