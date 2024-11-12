import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import DOMPurify from 'dompurify';
import dynamic from 'next/dynamic';
import getConfig from 'next/config';

// # @get .config
const { publicRuntimeConfig } = getConfig();

// @lib/controller & helper
import { getFetch, getFetchUrl, updateSubmitData } from '@lib/controller/API';
import { getFecthHbSpt, submitFormHbSpt } from '@lib/controller/HubSpot';

// @script
import PrelineScript from '@components/Script/PrelineScript';

// @style
import 'react-phone-input-2/lib/high-res.css';

// @components
import HeadGraphSeo from '@components/Head';
import Main from '@components/Main';
import Container from '@components/Container';
import Notifications from '@components/UI/Alerts/Notifications';
import Breadcrumb from '@components/UI/Breadcrumb';

// @form
import Checkbox from '@components/UI/Form/Checkbox';

// @layouts
import NavbarCheckout from '@layouts/Navbar/NavbarCheckout';
const AttendeeDetailUpdated = dynamic(
  () => import('@layouts/Attendee/Card/AttendeeDetailUpdated'),
  {
    loading: () => <p>Loading...</p>,
  }
);
const CompanyDetailUpdated = dynamic(
  () => import('@layouts/Attendee/Card/CompanyDetailUpdated'),
  {
    loading: () => <p>Loading...</p>,
  }
);
import Footer from '@layouts/Footer';

const Attendee = ({ attendee, ipAddress, country, formCheckout }) => {
  const router = useRouter();
  const [isAttendee, setAttendee] = useState(attendee ? attendee.data : []);
  const [isIpAddress, setIpAddress] = useState(ipAddress);
  const [isCountry, setCountry] = useState(country);
  const [isFormAttendee, setFormAttendee] = useState({
    fields: formCheckout,
    selfEdited: isAttendee ? isAttendee.selfEdited : false,
    message: null,
  });

  // @form-hook(Checkout)
  const {
    register,
    control,
    formState: { errors, isValid, isSubmitting },
    handleSubmit,
    setValue,
    getValues,
  } = useForm({
    mode: 'onTouched',
    defaultValues: {
      phone: '',
      firstnameAttndee: isAttendee['firstName'],
      lastnameAttndee: isAttendee['lastName'],
      emailAttndee: isAttendee['email'],

      'dialcode-phone': isAttendee['telephone'],
      phone: isAttendee['telephone'],
      telegramAccountAttndee: isAttendee['telegramAccount'],
      countryAttndee: isAttendee['country'],
      whatTypeConnectionNetworkingAttndee:
        isAttendee[
          'whatTypeOfConnectionsAndNetworkingDoYouHopeToAchieveAtTheEvent'
        ],
      didYouHearAboutAttndee:
        isAttendee['whereDidYouHearAboutCoinfestAsia2024'],

      companyAttndee: isAttendee['company'],
      jobPositionAttndee: isAttendee['position'],
      companyFocusAttndee: isAttendee['companyFocus'],
      companySizeAttndee: isAttendee['companySize'],
    },
  });

  // @submit(Sanitize)
  const sntzeFld = (field) => DOMPurify.sanitize(field || '').trim();

  const setAttendeeDetail = (data) => ({
    data: {
      firstName: sntzeFld(data.firstnameAttndee),
      lastName: sntzeFld(data.lastnameAttndee),
      email: sntzeFld(data.emailAttndee.toLowerCase()),
      telephone: sntzeFld(data.phone),
      country: sntzeFld(data.countryAttndee),
      telegramAccount: sntzeFld(data.telegramAccountAttndee),
      whatTypeOfConnectionsAndNetworkingDoYouHopeToAchieveAtTheEvent: sntzeFld(
        data.whatTypeConnectionNetworkingAttndee
      ),
      whereDidYouHearAboutCoinfestAsia2024: sntzeFld(
        data.didYouHearAboutAttndee
      ),
      company: sntzeFld(data.companyAttndee),
      companySize: sntzeFld(data.companySizeAttndee),
      position: sntzeFld(data.jobPositionAttndee),
      companyFocus: sntzeFld(data.companyFocusAttndee),
      selfEdited: true,
    },
  });

  // @submit(Checkout)
  const onSubmitForm = async (data) => {
    if (!isValid === false && isAttendee.selfEdited === false) {
      try {
        const [rsAttendee] = await Promise.all([
          updateSubmitData(
            `/api/attendees/${isAttendee.documentId}?populate=*`,
            setAttendeeDetail(data)
          ),
        ]);

        setFormAttendee({ ...isFormAttendee, selfEdited: true });
      } catch (error) {
        console.error('[error] processing submission:', error);
      }
    }
  };

  return (
    <>
      {/* @head */}
      <HeadGraphSeo title={`Attendee`} otherPage={true} />

      {/* @navbar */}
      <NavbarCheckout progress="last" />

      {/* @main */}
      <Main className="flex flex-col pb-10 pt-[188px] sm:pb-14 sm:pt-[149px]">
        <Container>
          <form
            id="tktCA25Form_AttendeeUpdated"
            method="POST"
            onSubmit={handleSubmit(onSubmitForm)}
            className="relative grid-cols-1 gap-x-6 gap-y-12 supports-grid:grid sm:grid-cols-12 sm:gap-y-20"
          >
            <div className="col-span-full pr-0 xl:col-span-7 xl:pr-10">
              <header className="block w-full">
                <div className="mb-5 block w-full">
                  <h1 className="text-2xl font-semibold text-black-900 sm:text-3xl">
                    Attendee
                  </h1>
                  <div className="mt-2 block">
                    <Breadcrumb
                      theme="dark"
                      listBreadcrumb={[
                        {
                          label: 'Home',
                          url: '/',
                        },
                        {
                          label: 'Attendee',
                          url: '/Attendee',
                        },
                      ]}
                    />
                  </div>
                </div>

                {/* @notification */}
                <Notifications
                  icons={
                    <svg
                      className="mt-0.5 size-4 shrink-0 lg:size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
                      <path d="M12 9v4" />
                      <path d="M12 17h.01" />
                    </svg>
                  }
                  label={`<p><strong>Please Update the Attendee Details</strong> with the correct information of the person attending the event. <strong>Note</strong> that data can only be updated once, so please review all information carefully before submitting.</p>`}
                  type="warning"
                />
              </header>

              {/* @attendee(Details) */}
              <div className="mt-8 flex flex-col items-start rounded-2xl border border-solid border-gray-200 bg-gray-100 px-2 pb-2 pt-4">
                <div className="mb-6 flex w-full flex-col items-start justify-start px-4 sm:mb-4">
                  <h2 className="text-xl font-medium capitalize">
                    {`Attendee Details`}
                  </h2>
                </div>
                <div className="inline-flex w-full flex-col space-y-4 rounded-xl bg-white px-4 py-4">
                  <AttendeeDetailUpdated
                    ipAddress={
                      isIpAddress.country !== undefined
                        ? isIpAddress.country.toLowerCase()
                        : 'id'
                    }
                    fieldForm={isFormAttendee.fields}
                    country={isCountry}
                    register={register}
                    control={control}
                    setValue={setValue}
                    getValues={getValues}
                    edited={isFormAttendee.selfEdited}
                    errors={errors}
                  />
                </div>
                <div className="my-4 flex w-full flex-col items-start justify-between px-4 sm:flex-row">
                  <div className="flex w-full max-w-[399px] flex-col items-start justify-start">
                    <h2 className="text-lg font-medium capitalize">
                      {`Company`}
                    </h2>
                  </div>
                </div>
                <div
                  className={`inline-flex w-full flex-col space-y-4 rounded-xl bg-white px-4 py-4`}
                >
                  <CompanyDetailUpdated
                    fieldForm={isFormAttendee.fields}
                    register={register}
                    setValue={setValue}
                    getValues={getValues}
                    edited={isFormAttendee.selfEdited}
                    errors={errors}
                  />
                </div>
              </div>
            </div>
            <div className="col-span-full pl-0 xl:col-span-5 xl:pl-6">
              <div className="mb-6 block w-full space-y-4">
                <div className="block w-full">
                  <Checkbox
                    label={`I have read and agree to the ticket <a href="/privacy-policy" class="hover:text-primary underline">privacy policy</a> <br/>& <a href="/terms-and-conditions" class="hover:text-primary underline">terms and conditions</a>`}
                    ariaLabel="I have read and agree - Checkout"
                    size="sm"
                    config={{
                      ...register(`i_have_read_and_agree`, {
                        required: true,
                      }),
                    }}
                    errors={errors[`i_have_read_and_agree`]}
                  />
                </div>
              </div>

              {/* @submit(Form) */}
              <button
                id="tktCA25Form_SubmitAttendeeUpdated"
                className={`inline-flex w-full cursor-pointer flex-row items-center justify-center rounded-xl bg-primary px-8 py-5 text-base font-normal capitalize leading-inherit text-white disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500`}
                type="submit"
                role="button"
                aria-label="Submit Attendee for Coinfest Asia 2025"
                disabled={isFormAttendee.selfEdited}
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
                  <>
                    {isFormAttendee.selfEdited
                      ? 'Attendee has been updated'
                      : 'Update Attendee'}
                  </>
                )}
              </button>
            </div>
          </form>
        </Container>
      </Main>

      {/* @footer */}
      <Footer />

      {/* @script */}
      <PrelineScript />
    </>
  );
};

Attendee.getLayout = function PageLayout(page) {
  return <>{page}</>;
};

export async function getServerSideProps(context) {
  const { vw } = context.query;

  const isValid_Process =
    typeof vw === 'string' &&
    /^[a-zA-Z0-9]+$/.test(vw.trim()) &&
    vw.trim().length <= 31;
  if (!isValid_Process) {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    };
  }

  try {
    const [rsAttendee, rsIpAddress, rsCountry, rsCheckoutHbSpt] =
      await Promise.all([
        getFetch(`/api/attendees/${vw}?sort[0]=createdAt:desc&populate=*`),
        getFetchUrl(
          `https://ipinfo.io/json?token=${publicRuntimeConfig.ipAddress_token}`
        ),
        getFetchUrl(`https://restcountries.com/v3.1/all?fields=name,flags`),
        getFecthHbSpt(`/forms/v2/forms/${publicRuntimeConfig.hbSptCheckout}`),
      ]);

    // @check-res(Order Recived)
    if (!rsAttendee) {
      return {
        redirect: {
          destination: '/',
          permanent: true,
        },
      };
    }

    return {
      props: {
        attendee: rsAttendee || [],
        ipAddress: rsIpAddress || [],
        country: rsCountry || [],
        formCheckout: rsCheckoutHbSpt.formFieldGroups || [],
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    };
  }
}

export default Attendee;
