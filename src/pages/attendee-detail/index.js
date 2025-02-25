import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { twMerge } from 'tailwind-merge';
import { useForm } from 'react-hook-form';
import DOMPurify from 'dompurify';
import getConfig from 'next/config';

// @get .config
const { publicRuntimeConfig, serverRuntimeConfig } = getConfig();

// @lib
import { getFetch, getFetchUrl, updateSubmitData } from '@lib/controller/API';
import { getFecthHbSpt } from '@lib/controller/HubSpot';
import { getJoinString } from '@lib/helper/Configuration';

// @components
import HeadGraphSeo from '@components/Head';
import Main from '@components/Main';
import Container from '@components/Container';

// @layouts
import LayoutDefaults from '@layouts/Layouts';
import Header from '@layouts/Attendee/Update/Header';
import AttendeeDetailUpdate from '@layouts/Attendee/Update/Card/AttendeeDetailUpdate';
import BoardSubmitAttendee from '@layouts/Attendee/Update/Card/BoardSubmitAttendee';

const AttendeeUpdate = ({ ipAddress, attendee, country, formCheckout }) => {
  const router = useRouter();
  const [isAttendee, setAttendee] = useState(attendee ? attendee.data : []);
  const [isFormAttendee, setFormAttendee] = useState({
    isProducts: isAttendee?.product,
    isIpAddress: ipAddress,
    isCountry: country,
    fields: formCheckout,
    selfEdited: isAttendee ? isAttendee?.selfEdited : false,
    message: null,
  });

  console.log(isAttendee);

  // @card(theme)
  const style = {
    rc33x0dgm6tm707jghffuip4: 'bg-primaryDark',
  };

  // @form-hook(attendee)
  const {
    watch,
    register,
    control,
    formState: { errors, isValid, isSubmitting },
    handleSubmit,
    setValue,
    getValues,
  } = useForm({
    mode: 'all',
    defaultValues: {
      phone: '',
      firstnameAttndeeDetail: isAttendee['firstName'],
      lastnameAttndeeDetail: isAttendee['lastName'],
      emailAttndeeDetail: isAttendee['email'],
      'dialcode-phoneAttendeDetail': isAttendee['telephone'],
      phoneAttndeeDetail: isAttendee['telephone'],
      telegramAccountAttndeeDetail: isAttendee['telegramAccount'],
      countryAttndeeDetail: isAttendee['country'],
      whatTypeConnectionNetworkingAttndeeDetail:
        isAttendee[
          'whatTypeOfConnectionsAndNetworkingDoYouHopeToAchieveAtTheEvent'
        ],
      didYouHearAboutAttndeeDetail:
        isAttendee['whereDidYouHearAboutCoinfestAsia2024'],
      haveCompanyAttndeeDetail:
        isAttendee?.customer['company'] === 'N/A' ? false : true,
      companyAttndeeDetail: isAttendee?.customer['company'],
      websiteUrlAttndeeDetail: isAttendee?.customer['websiteUrl'],
      jobPositionAttndeeDetail: isAttendee['position'],
      companyFocusAttndeeDetail: isAttendee['companyFocus'],
      companySizeAttndeeDetail: isAttendee['companySize'],
    },
  });

  // @submit(Sanitize)
  const sntzeFld = (field) => DOMPurify.sanitize(field || '').trim();
  const setAttendeeDetail = (data) => ({
    data: {
      firstName: sntzeFld(data?.firstnameAttndeeDetail),
      lastName: sntzeFld(data?.lastnameAttndeeDetail),
      company: sntzeFld(data?.companyAttndeeDetail),
      // selfEdited: true,
    },
  });

  // @submit(attendee)
  const onSubmitForm = async (data) => {
    if (!isValid === false && isAttendee?.selfEdited === false) {
      try {
        // @get(key)
        const { key } = await fetch('/api/env/note', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', cache: 'no-store' },
        }).then((res) => res.json());
        const [rsAttendee] = await Promise.all([
          updateSubmitData(
            `/api/attendees/${isAttendee?.documentId}?populate=*`,
            setAttendeeDetail(data)
          ),
        ]);
        setFormAttendee({ ...isFormAttendee, selfEdited: true });

        // @send(email)
        const tickets =
          rsAttendee?.data?.product['documentId'] ===
            'sn4ujm0d1ebbc8lme1ihzsa9' ||
          rsAttendee?.data?.product['documentId'] === 'g1ukadil4n4a3r0ndly7jl42'
            ? `Festival Tickets`
            : rsAttendee?.data?.product['name'];
        const rsEmail = await fetch('/api/email/send-attendee-ticket', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': key,
            cache: 'no-store',
          },
          body: JSON.stringify({
            toEmail: rsAttendee?.data['email'],
            qrCode: rsAttendee?.data?.qrCode['url'],
            docId: rsAttendee?.data?.product['documentId'],
            attId: rsAttendee?.data['attendeeId'],
            fullname: `${rsAttendee?.data['firstName']} ${rsAttendee?.data['lastName']}`,
            company: rsAttendee?.data['company'],
            productTickets: tickets,
          }),
        }).then((res) => res.json());
        // router.replace(`/attendee-detail/success`);
      } catch (error) {
        // console.error('[error] processing submission:', error);
        return;
      }
    }
  };

  return (
    <>
      {/* @head */}
      <HeadGraphSeo title={`Attendee Detail`} otherPage={true} />

      {/* @main */}
      <Main className="relative pb-19 pt-6 sm:pb-19 sm:pt-8 lg:pt-10">
        <Container className={'sm:px-auto px-0'}>
          <form
            id="ca25Form_AttendeeDetail"
            className="relative grid-cols-1 gap-x-6 gap-y-2 supports-grid:grid sm:grid-cols-12 sm:gap-y-2 lg:gap-y-20"
            method="POST"
            onSubmit={handleSubmit(onSubmitForm)}
          >
            <div className="order-last col-span-full px-2.5 sm:px-0 xl:order-first xl:col-span-7 xl:pr-10">
              <Header media="xl" />

              <div
                className={`relative mt-6 block w-full space-y-6 ${isFormAttendee?.selfEdited ? 'pointer-events-none select-none' : 'pointer-events-auto select-auto'}`}
              >
                <div
                  className={twMerge(
                    `relative mt-8 flex flex-col items-end rounded-[14px] px-1.5 pb-1.5 transition-[height] duration-300 ease-in-out first:mt-0 sm:rounded-2xl sm:px-2 sm:pb-2 ${isFormAttendee?.selfEdited ? 'pointer-events-none select-none' : 'pointer-events-auto select-auto'}`,
                    style[isFormAttendee?.isProducts?.documentId] ||
                      'bg-regular45'
                  )}
                >
                  <div
                    className={`relative flex w-full flex-col ${isFormAttendee?.selfEdited ? 'pointer-events-none select-none' : 'pointer-events-auto select-auto'}`}
                  >
                    <div
                      id={`ca25StoreProductSticky_${getJoinString(isFormAttendee?.isProducts?.name)}`}
                      className={twMerge(
                        `ca25StoreProductSticky relative inset-x-0 top-0 z-60 mt-1 flex h-[45px] w-full flex-col items-start justify-between transition-[height] duration-300 ease-in-out sm:top-0 sm:h-[59px]`,
                        isFormAttendee?.isProducts?.documentId ===
                          'rc33x0dgm6tm707jghffuip4'
                          ? 'bg-primaryDark'
                          : 'bg-regular45_Sticky'
                      )}
                    >
                      <div className="ca25StoreProductSticky_Cards item-start flex w-full flex-col justify-start text-center">
                        <div className="absolute inset-x-0 -top-0.5 flex flex-col pb-5.5 pt-3 sm:-top-1 sm:pt-4.5">
                          <h2 className="ca25StoreProductSticky_TitleCards mb-2 w-full font-medium capitalize text-white">
                            {isFormAttendee?.isProducts?.name}
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`relative inline-flex w-full flex-col rounded-lg bg-white px-3 py-3 sm:rounded-xl sm:px-4 sm:py-4`}
                    >
                      <div className={`flex flex-col space-y-4`}>
                        <AttendeeDetailUpdate
                          watch={watch(`haveCompanyAttndeeDetail`)}
                          forms={{
                            ipAddress:
                              isFormAttendee?.isIpAddress?.country !== undefined
                                ? isFormAttendee?.isIpAddress?.country.toLowerCase()
                                : 'id',
                            fieldForm: isFormAttendee?.fields,
                            country: isFormAttendee?.isCountry,
                            selfEdited: isFormAttendee?.selfEdited,
                          }}
                          register={register}
                          control={control}
                          setValue={setValue}
                          getValues={getValues}
                          errors={errors}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* @submit(form mobile) */}
              <div
                className={`relative mt-10 block w-full rounded-2xl border border-gray-200 bg-white px-4 py-4 xl:hidden ${
                  isFormAttendee?.selfEdited
                    ? 'pointer-events-none select-none'
                    : 'pointer-events-auto select-auto'
                } sm:px-5 sm:py-5`}
              >
                <BoardSubmitAttendee
                  register={register}
                  setValue={setValue}
                  getValues={getValues}
                  errors={errors}
                />

                <button
                  id="tktCA25Form_SubmitMobileAttendeeDetail"
                  className={`inline-flex w-full cursor-pointer flex-row items-center justify-center rounded-xl bg-primary px-8 py-5 text-base font-normal capitalize leading-inherit text-white disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500`}
                  type="submit"
                  role="button"
                  aria-label="Submit Attendee for Coinfest Asia 2025"
                  disabled={isFormAttendee?.selfEdited || isSubmitting}
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
                      {isFormAttendee?.selfEdited
                        ? 'Attendee has been updated'
                        : 'Update Attendee'}
                    </>
                  )}
                </button>
              </div>
            </div>
            <div className="col-span-full px-4 xl:col-span-5 xl:pl-6">
              <Header media="sm" />

              <div className="mb-4 mt-6 flex w-full flex-col px-0 xl:mt-0">
                <h2 className="text-xl font-semibold capitalize">{`Purchaser Details`}</h2>
                <div className="my-5 flex w-full border-t border-dashed border-gray-200 px-2.5"></div>
                <div className="flex flex-col gap-y-3">
                  <div className="grid-cols-1 items-start gap-y-1 supports-grid:grid sm:grid-cols-3 sm:gap-y-0">
                    <div className="flex flex-col self-center text-start text-sm font-normal text-black-900">
                      {`Name`}
                    </div>
                    <div className="col-span-full flex flex-row items-center pl-0 text-start text-sm font-light sm:col-span-2 sm:text-start xl:pl-8">
                      <span className="mr-2.5 hidden w-max text-black-900 sm:block">
                        :
                      </span>
                      <span className="font-normal text-black-900">
                        {`${isAttendee?.customer['firstName']} ${isAttendee?.customer['lastName']}`}
                      </span>
                    </div>
                  </div>
                  <div className="grid-cols-1 items-start gap-y-1 supports-grid:grid sm:grid-cols-3 sm:gap-y-0">
                    <div className="flex flex-col self-center text-start text-sm font-normal text-black-900">
                      {`Email`}
                    </div>
                    <div className="col-span-full flex flex-row items-center pl-0 text-start text-sm font-light sm:col-span-2 sm:text-start xl:pl-8">
                      <span className="mr-2.5 hidden w-max text-black-900 sm:block">
                        :
                      </span>
                      <span className="font-normal text-black-900">
                        {isAttendee?.customer['email']}
                      </span>
                    </div>
                  </div>
                  <div className="grid-cols-1 items-start gap-y-1 supports-grid:grid sm:grid-cols-3 sm:gap-y-0">
                    <div className="flex flex-col self-center text-start text-sm font-normal text-black-900">
                      {`Phone`}
                    </div>
                    <div className="col-span-full flex flex-row items-center pl-0 text-start text-sm font-light sm:col-span-2 sm:text-start xl:pl-8">
                      <span className="mr-2.5 hidden w-max text-black-900 sm:block">
                        :
                      </span>
                      <span className="font-normal text-black-900">
                        {isAttendee?.customer['phone']}
                      </span>
                    </div>
                  </div>
                  <div className="grid-cols-1 items-start gap-y-1 supports-grid:grid sm:grid-cols-3 sm:gap-y-0">
                    <div className="flex flex-col self-center text-start text-sm font-normal text-black-900">
                      {`Company`}
                    </div>
                    <div className="col-span-full flex flex-row items-center pl-0 text-start text-sm font-light sm:col-span-2 sm:text-start xl:pl-8">
                      <span className="mr-2.5 hidden w-max text-black-900 sm:block">
                        :
                      </span>
                      <span className="font-normal text-black-900">
                        {isAttendee?.customer['company']}
                      </span>
                    </div>
                  </div>
                  <div className="grid-cols-1 items-start gap-y-1 supports-grid:grid sm:grid-cols-3 sm:gap-y-0">
                    <div className="flex flex-col self-center text-start text-sm font-normal text-black-900">
                      {`Website Url`}
                    </div>
                    <div className="col-span-full flex flex-row items-center pl-0 text-start text-sm font-light sm:col-span-2 sm:text-start xl:pl-8">
                      <span className="mr-2.5 hidden w-max text-black-900 sm:block">
                        :
                      </span>
                      <span className="font-normal text-black-900">
                        {isAttendee?.customer['websiteUrl']}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* @submit(Form) */}
              <div
                className={`relative mt-10 hidden w-full rounded-2xl border border-gray-200 bg-white px-4 py-4 xl:block ${
                  isFormAttendee?.selfEdited
                    ? 'pointer-events-none select-none'
                    : 'pointer-events-auto select-auto'
                } sm:px-5 sm:py-5`}
              >
                <BoardSubmitAttendee
                  register={register}
                  setValue={setValue}
                  getValues={getValues}
                  errors={errors}
                />

                <button
                  id="tktCA25Form_SubmitAttendeeDetail"
                  className={`inline-flex w-full cursor-pointer flex-row items-center justify-center rounded-xl bg-primary px-8 py-5 text-base font-normal capitalize leading-inherit text-white disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-500`}
                  type="submit"
                  role="button"
                  aria-label="Submit Attendee for Coinfest Asia 2025"
                  disabled={isFormAttendee?.selfEdited || isSubmitting}
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
                      {isFormAttendee?.selfEdited
                        ? 'Attendee has been updated'
                        : 'Update Attendee'}
                    </>
                  )}
                </button>
              </div>
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
  if (!vw || typeof vw !== 'string') {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    };
  }
  const isValid_Process =
    /^[a-zA-Z0-9]+$/.test(vw.trim()) && vw.trim().length <= 43;
  if (!isValid_Process) {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    };
  }

  try {
    const isLayouts = true;
    const [rsIpAddress, rsAttendee, rsCountry, rsCoupons, rsCheckoutHbSpt] =
      await Promise.all([
        getFetchUrl(
          `https://ipinfo.io/json?token=${serverRuntimeConfig?.ipAddress_token}`
        ),
        getFetch(`/api/attendees/${vw}?sort[0]=createdAt:desc&populate=*`),
        getFetchUrl(`https://restcountries.com/v3.1/all?fields=name,flags`),
        getFetch(`/api/coupons?filters[isPublic][$eq]=true&populate=*`),
        getFecthHbSpt(`/forms/v2/forms/${serverRuntimeConfig?.hbSptCheckout}`),
      ]);
    const sortedCountries = rsCountry.sort((a, b) =>
      a?.name.common.localeCompare(b?.name.common)
    );
    // @check(attendee)
    const isApproved = rsAttendee ? rsAttendee?.data?.isApproved : null;
    if (!rsAttendee && !isApproved) {
      return {
        redirect: {
          destination: '/',
          permanent: true,
        },
      };
    }

    return {
      props: {
        mode: 'light',
        layouts: isLayouts || false,
        withoutNavbar: false,
        ipAddress: rsIpAddress || [],
        country: sortedCountries || [],
        coupons: rsCoupons || [],
        attendee: rsAttendee || [],
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
