import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import getConfig from 'next/config';

// # @get .config
const { serverRuntimeConfig } = getConfig();

// @lib/controller & helper
import { getFetchUrl } from '@lib/controller/API';
import { getFecthHbSpt, submitFormHbSpt } from '@lib/controller/HubSpot';

// @components
import HeadGraphSeo from '@components/Head';

// @forms
import Label from '@components/UI/Form/Label';
import Input from '@components/UI/Form/Input';

// @layouts
import PartnershipLayouts from '@layouts/PartnershipLayouts';

const Sponsor = ({ mode, ipAddress, forms }) => {
  const router = useRouter();
  const [frmSponsor, setFormSponsor] = useState(forms);

  const {
    watch,
    register,
    control,
    formState: { errors, isValid, isSubmitting },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'all',
  });

  // @submit
  const onSubmit = async (data) => {
    const btnOpenGmailSuccess = document.querySelector(
      '#btnSponsorNewsletterMdl2025'
    );

    const d = {
      fields: [
        {
          name: 'firstname',
          value: data?.firstname,
        },
        {
          name: 'lastname',
          value: data?.lastname,
        },
        {
          name: 'email',
          value: data?.email,
        },
      ],
      context: {
        pageUri: 'https://coinfest.asia/get-involved/Sponsor',
        pageName: '2025 Sponsor | Coinfest Asia 2024',
        ipAddress: ipAddress?.ip,
      },
    };

    // const k = '87ad0d27-df80-4c61-9203-f2845e888c56';
    // const rs = await submitFormHbSpt(d, k);

    // @debug
    // console.log(d);

    // if (rs === true) {
    //   reset();
    //   // router.replace('/Sponsor/success');
    // }
  };

  return (
    <>
      {/* @head */}
      <HeadGraphSeo title={`Sponsor`} otherPage={true} />

      {/* @main */}
      <PartnershipLayouts
        title={'COINFEST ASIA 2025 SPONSORSHIP INQUIRY'
          ?.split(' ')
          .map((w, i) =>
            w
              .split('')
              .map((chr, chrI) =>
                ['E', 'Y', 'O', '0'].includes(chr) ? (
                  <span key={`${i}-${chrI}`}>{chr}</span>
                ) : (
                  chr
                )
              )
          )
          .reduce(
            (acc, curr, i) => (i === 0 ? curr : [...acc, ' ', ...curr]),
            []
          )}
        shortDesc={
          'Unlock early access to Coinfest Asia 2025 sponsorships and lock in the best deals before anyone else.'
        }
        mode={mode}
      >
        <form
          id="formSponsor"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
          className="mt-0 flex flex-col space-y-4 sm:mt-8"
        >
          <div className="mb-4 grid-cols-1 gap-x-4 gap-y-4 last:mb-0 supports-grid:grid sm:grid-cols-2">
            <div className="block">
              <Label
                forId={`ca25Form_FirstnameSponsor`}
                label="Firstname"
                required={true}
              />
              <Input
                id={`ca25Form_FirstnameSponsor`}
                type="text"
                name={`firstname`}
                placeholder="Eg: Alexander"
                ariaLabel={`Firstname`}
                disabled={isSubmitting}
                config={{
                  ...register(`firstname`, {
                    required: true,
                    maxLength: 120,
                    pattern: {
                      value: /^[a-zA-Z0-9\s-_]{2,120}$/,
                    },
                  }),
                }}
                errors={errors[`firstname`]}
              />
            </div>
            <div className="block">
              <Label
                forId={`ca25Form_LastnameSponsor`}
                label="Lastname"
                required={true}
              />
              <Input
                id={`ca25Form_LastnameSponsor`}
                type="text"
                name={`lastname`}
                placeholder="Eg: Alexander"
                ariaLabel={`Lastname`}
                disabled={isSubmitting}
                config={{
                  ...register(`lastname`, {
                    required: true,
                    maxLength: 120,
                    pattern: {
                      value: /^[a-zA-Z0-9\s-_]{2,120}$/,
                    },
                  }),
                }}
                errors={errors[`lastname`]}
              />
            </div>
          </div>
          <div className="block">
            <Label
              forId={`ca25Form_EmailSponsor`}
              label="Email"
              required={true}
            />
            <Input
              id={`ca25Form_EmailSponsor`}
              type="email"
              placeholder="Eg: example@email.com"
              ariaLabel={`Email Sponsor`}
              disabled={isSubmitting}
              config={{
                ...register(`email`, {
                  required: true,
                  maxLength: 120,
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  },
                }),
              }}
              errors={errors[`email`]}
            />
          </div>

          {/* @submit */}
          <div className="flex flex-col">
            <button
              id="ca25Submit-SponsorForms"
              type="submit"
              className={`mt-6 flex w-full flex-col items-center justify-center rounded-[14px] bg-black-900 py-6 font-bevietnamPro text-base font-normal text-white outline-none transition duration-[0.3] ease-in-out focus-visible:outline-none`}
              aria-label="Submit Sponsor Forms"
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
                'Submit'
              )}
            </button>
          </div>
        </form>
      </PartnershipLayouts>
    </>
  );
};

Sponsor.getLayout = (page, { pageProps }) => {
  const { mode } = pageProps;
  return page;
};
export const getStaticProps = async () => {
  try {
    const [rsIpAddress, rsForms] = await Promise.all([
      getFetchUrl(
        `https://ipinfo.io/json?token=${serverRuntimeConfig?.ipAddress_token}`
      ),
      getFecthHbSpt(`/forms/v2/forms/${serverRuntimeConfig?.hbSptCheckout}`),
    ]);

    return {
      props: {
        mode: 'light',
        ipAddress: rsIpAddress || [],
        forms: rsForms?.formFieldGroups || [],
      },
      revalidate: 900,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
export default Sponsor;
