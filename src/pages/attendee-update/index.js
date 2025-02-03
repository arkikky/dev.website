import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import DOMPurify from 'dompurify';
import dynamic from 'next/dynamic';
import getConfig from 'next/config';

// # @get .config
const { serverRuntimeConfig } = getConfig();

// @lib/controller & helper
import { getFetch, getFetchUrl, updateSubmitData } from '@lib/controller/API';
import { getFecthHbSpt } from '@lib/controller/HubSpot';

// @style
// import 'react-phone-input-2/lib/high-res.css';

// @components
import HeadGraphSeo from '@components/Head';
import Main from '@components/Main';
import Container from '@components/Container';
import ToastAlerts from '@components/UI/Alerts/ToastAlert';
import Breadcrumb from '@components/UI/Breadcrumb';
import Notifications from '@components/UI/Alerts/Notifications';

// @form
// import Checkbox from '@components/UI/Form/Checkbox';

// @layouts
import LayoutDefaults from '@layouts/Layouts';
// import NavbarTop from '@layouts/Navbar/NavbarTop';
// const AttendeeDetailUpdated = dynamic(
//   () => import('@layouts/Attendee/Card/AttendeeDetailUpdated'),
//   {
//     loading: () => <p>Loading...</p>,
//   }
// );
// const CompanyDetailUpdated = dynamic(
//   () => import('@layouts/Attendee/Card/CompanyDetailUpdated'),
//   {
//     loading: () => <p>Loading...</p>,
//   }
// );
// import Footer from '@layouts/Footer';

const AttendeeUpdate = ({ ipAddress, attendee, country, formCheckout }) => {
  const router = useRouter();
  // const [isAttendee, setAttendee] = useState(attendee ? attendee.data : []);
  // const [isIpAddress, setIpAddress] = useState(ipAddress);
  // const [isCountry, setCountry] = useState(country);
  // const [isFormAttendee, setFormAttendee] = useState({
  //   fields: formCheckout,
  //   selfEdited: isAttendee ? isAttendee.selfEdited : false,
  //   message: null,
  // });

  // // @form-hook(Checkout)
  // const {
  //   register,
  //   control,
  //   formState: { errors, isValid, isSubmitting },
  //   handleSubmit,
  //   setValue,
  //   getValues,
  // } = useForm({
  //   mode: 'onTouched',
  //   defaultValues: {
  //     phone: '',
  //     firstnameAttndee: isAttendee['firstName'],
  //     lastnameAttndee: isAttendee['lastName'],
  //     emailAttndee: isAttendee['email'],

  //     'dialcode-phone': isAttendee['telephone'],
  //     phone: isAttendee['telephone'],
  //     telegramAccountAttndee: isAttendee['telegramAccount'],
  //     countryAttndee: isAttendee['country'],
  //     whatTypeConnectionNetworkingAttndee:
  //       isAttendee[
  //         'whatTypeOfConnectionsAndNetworkingDoYouHopeToAchieveAtTheEvent'
  //       ],
  //     didYouHearAboutAttndee:
  //       isAttendee['whereDidYouHearAboutCoinfestAsia2024'],

  //     companyAttndee: isAttendee['company'],
  //     jobPositionAttndee: isAttendee['position'],
  //     companyFocusAttndee: isAttendee['companyFocus'],
  //     companySizeAttndee: isAttendee['companySize'],
  //   },
  // });

  // // @submit(Sanitize)
  // const sntzeFld = (field) => DOMPurify.sanitize(field || '').trim();

  // const setAttendeeDetail = (data) => ({
  //   data: {
  //     firstName: sntzeFld(data.firstnameAttndee),
  //     lastName: sntzeFld(data.lastnameAttndee),
  //     email: sntzeFld(data.emailAttndee.toLowerCase()),
  //     telephone: sntzeFld(data.phone),
  //     country: sntzeFld(data.countryAttndee),
  //     telegramAccount: sntzeFld(data.telegramAccountAttndee),
  //     whatTypeOfConnectionsAndNetworkingDoYouHopeToAchieveAtTheEvent: sntzeFld(
  //       data.whatTypeConnectionNetworkingAttndee
  //     ),
  //     whereDidYouHearAboutCoinfestAsia2024: sntzeFld(
  //       data.didYouHearAboutAttndee
  //     ),
  //     company: sntzeFld(data.companyAttndee),
  //     companySize: sntzeFld(data.companySizeAttndee),
  //     position: sntzeFld(data.jobPositionAttndee),
  //     companyFocus: sntzeFld(data.companyFocusAttndee),
  //     selfEdited: true,
  //   },
  // });

  // // @submit(Checkout)
  // const onSubmitForm = async (data) => {
  //   if (!isValid === false && isAttendee.selfEdited === false) {
  //     try {
  //       const [rsAttendee] = await Promise.all([
  //         updateSubmitData(
  //           `/api/attendees/${isAttendee.documentId}?populate=*`,
  //           setAttendeeDetail(data)
  //         ),
  //       ]);

  //       setFormAttendee({ ...isFormAttendee, selfEdited: true });
  //     } catch (error) {
  //       console.error('[error] processing submission:', error);
  //     }
  //   }
  // };

  return (
    <>
      {/* @head */}
      <HeadGraphSeo title={`Attendee`} otherPage={true} />

      {/* @main */}
      <Main className="relative pb-19 pt-6 sm:pb-19 sm:pt-8 lg:pt-10">
        <Container className={'sm:px-auto px-0'}>
          <form
            id="ca25Form_AttendeeUpdate"
            className="relative grid-cols-1 gap-x-6 gap-y-12 supports-grid:grid sm:grid-cols-12 sm:gap-y-14 lg:gap-y-20"
            method="POST"
            // onSubmit={handleSubmit(onSubmitForm, onErrorSubmit)}
          >
            <div className="order-last col-span-full px-2.5 sm:px-0 xl:order-first xl:col-span-7 xl:pr-10">
              awdwad
            </div>
            <div className="col-span-full pl-0 xl:col-span-5 xl:pl-6">
              adwad
              {/* @submit(Form) */}
              {/* <button
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
              </button> */}
            </div>
          </form>
        </Container>
      </Main>
    </>
  );
};

AttendeeUpdate.getLayout = (page, { pageProps }) => {
  const { mode, layouts, withoutNavbar } = pageProps;
  if (layouts) {
    return (
      <LayoutDefaults
        isTheme={mode}
        layoutStore={layouts}
        withNavbar={withoutNavbar}
        isFooterMenu={false}
      >
        {page}
      </LayoutDefaults>
    );
  }
  return page;
};
export async function getServerSideProps(context) {
  const { vw } = context.query;

  console.log(vw);

  // const isValid_Process =
  //   typeof vw === 'string' &&
  //   /^[a-zA-Z0-9]+$/.test(vw.trim()) &&
  //   vw.trim().length <= 43;
  // if (!isValid_Process) {
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: true,
  //     },
  //   };
  // }

  try {
    const isLayouts = true;
    const [rsIpAddress, rsAttendee, rsCountry, rsCoupons, rsCheckoutHbSpt] =
      await Promise.all([
        getFetchUrl(
          `https://ipinfo.io/json?token=${serverRuntimeConfig?.ipAddress_token}`
        ),
        getFetch(`/api/attendees/${vw}?populate=*`),
        getFetchUrl(`https://restcountries.com/v3.1/all?fields=name,flags`),
        getFetch(`/api/coupons?filters[isPublic][$eq]=true&populate=*`),
        getFecthHbSpt(`/forms/v2/forms/${serverRuntimeConfig?.hbSptCheckout}`),
      ]);
    console.log(rsAttendee);
    const sortedCountries = rsCountry.sort((a, b) =>
      a?.name.common.localeCompare(b?.name.common)
    );

    // @check(attendee)
    // if (!rsAttendee) {
    //   return {
    //     redirect: {
    //       destination: '/',
    //       permanent: true,
    //     },
    //   };
    // }

    return {
      props: {
        mode: 'light',
        layouts: isLayouts || false,
        withoutNavbar: false,
        ipAddress: rsIpAddress || [],
        country: sortedCountries || [],
        coupons: rsCoupons || [],
        formCheckout: rsCheckoutHbSpt?.formFieldGroups || [],
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

export default AttendeeUpdate;
