import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import getConfig from 'next/config';
import Image from 'next/image';
import Link from 'next/link';

// @get .config
const { publicRuntimeConfig } = getConfig();

// @lib/controller & helper
import { getFetch } from '@lib/controller/API';

// @components
import HeadGraphSeo from '@components/Head';
import Main from '@components/Main';
import Container from '@components/Container';
import Alerts from '@components/UI/Alerts/Alerts';

// @form
import Label from '@components/UI/Form/Label';
import Input from '@components/UI/Form/Input';

const Attendee = ({}) => {
  const router = useRouter();
  // @hook(Alert)
  const [isAlert, setAlert] = useState({
    status: false,
    type: 'default',
    message: '',
  });

  // @handle(Alert)
  const hndleAlert_Change = (model, mess) => {
    setAlert({ status: true, type: model, message: mess });
  };

  // @handle(Close Alert)
  const handleCloseAlert = () =>
    setAlert((prev) => ({ ...prev, status: false }));

  // @form-hook(Checkout)
  const {
    register,
    formState: { errors, isValid, isSubmitting },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'all',
    defaultValues: {},
  });

  // @submit(Checkout)
  const onSubmitForm = async (data) => {
    if (!isValid === false) {
      try {
        const rsAttendee = await getFetch(
          `/api/attendees?filters[attendeeId][$eq]=${data.ticketAttndee}&filters[email][$eq]=${data.emailAttndee}`
        );

        // @check(Attendee)
        if (!rsAttendee?.data?.length > 0) {
          return hndleAlert_Change(
            'error',
            `Sorry, there seems to be an issue with your ticket ID or email!`
          );
        }

        // @get(Key)
        const { key } = await fetch('/api/env/note', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        }).then((res) => res.json());

        // @send(Email)
        const rsEmail = await fetch('/api/email/send-attendee-confrim', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': key,
          },
          body: JSON.stringify({
            to: rsAttendee?.data[0].email,
            id: rsAttendee?.data[0].documentId,
            name: `${rsAttendee?.data[0].firstName} ${rsAttendee?.data[0].lastName}`,
          }),
        }).then((res) => res.json());

        if (rsEmail.message === 'Email sent successfully!') {
          reset();
          hndleAlert_Change(
            'success',
            `<strong>Thanks</strong>, Email sent successfully!`
          );

          setTimeout(() => {
            router.replace(`/attendee/success`);
          }, 6000);
        } else {
          hndleAlert_Change('error', `Sorry, failed to send email!`);
        }
      } catch (error) {
        console.error('[error] processing submission:', error);
      }
    }
  };

  return (
    <>
      {/* @head */}
      <HeadGraphSeo title={`Confirmation Attendee`} otherPage={true} />

      {/* @main */}
      <Main className="fixed inset-x-0 inset-y-0 flex h-svh min-h-svh flex-col items-center justify-center self-center">
        <Container>
          <form
            id="tktCA25Form_AttendeeConfrim"
            method="POST"
            onSubmit={handleSubmit(onSubmitForm)}
            className="relative block w-full"
          >
            <div className="flex w-full flex-col items-center justify-center">
              <div className="flex w-full max-w-[568px] flex-col items-start rounded-2xl border border-solid border-gray-200 bg-gray-100 px-2 pb-2 pt-4 sm:mt-0">
                <div className="mb-4 flex w-full flex-row items-start justify-between px-2 sm:px-4">
                  <div className="block w-max">
                    {/* <span className="text-sm font-light text-gray-500">
                      Confirmation
                    </span> */}
                    <h1 className="text-lg font-medium capitalize leading-initial sm:text-xl">
                      Attendee
                    </h1>
                  </div>
                  <div>
                    <Image
                      className="mx-auto my-auto h-8.5 w-auto"
                      src={'/assets/images/ca2025Brand.svg'}
                      alt={`${publicRuntimeConfig.siteAppName} (Primary Brand - Navbar Checkout)`}
                      height={58}
                      width={170}
                      quality="87"
                      fetchPriority="auto"
                    />
                  </div>
                </div>
                <div className="mb-4 inline-flex w-full flex-col space-y-4 rounded-xl bg-white px-4 py-4">
                  <div className="block">
                    <div className="w-full max-w-full sm:max-w-[391px]">
                      <Label
                        forId={`tktCAForm_TicketAttendeeConfrim`}
                        label="Ticket ID"
                        helpText={`The Ticket ID must match the one on the attendee’s ticket, for example, 'A-12321312'!`}
                      />
                    </div>
                    <Input
                      id={`tktCAForm_TicketAttendeeConfrim`}
                      type="text"
                      placeholder="Eg: A-23423423423"
                      ariaLabel={`Ticket Attendee Confrim`}
                      config={{
                        ...register(`ticketAttndee`, {
                          required: true,
                          maxLength: 14,
                          pattern: {
                            value: /^[A-T]-\d{8,12}$/,
                          },
                        }),
                      }}
                      errors={errors[`ticketAttndee`]}
                    />
                  </div>
                  <div className="block">
                    <Label
                      forId={`tktCAForm_EmailAttendeeConfrim`}
                      label="Email"
                      helpText="The email entered must match the information of the attendee who is attending!"
                    />
                    <Input
                      id={`tktCAForm_EmailAttendeeConfrim`}
                      type="email"
                      placeholder="Eg: example@email.com"
                      ariaLabel={`Email Attendee Confrim`}
                      config={{
                        ...register(`emailAttndee`, {
                          required: true,
                          maxLength: 255,
                          pattern: {
                            value:
                              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          },
                        }),
                      }}
                      errors={errors[`emailAttndee`]}
                    />
                  </div>
                </div>

                <div className="inline-flex w-full items-start justify-between">
                  <Link
                    className="mt-0.5 flex flex-row items-center gap-x-2 text-sm text-black-900 underline transition duration-300 ease-in-out hover:text-primary sm:gap-x-2"
                    href={'/'}
                    title="Button for Back to Home (Attendee Confirmation)"
                  >
                    <svg
                      className="h-4.5 w-4.5 shrink-0"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m12 19-7-7 7-7" />
                      <path d="M19 12H5" />
                    </svg>
                    Back
                    <span className="-ml-1 hidden w-max sm:flex">to Home</span>
                  </Link>
                  <button
                    id="tktCA25Form_SubmitAttendeeConfrim"
                    className={`pointer-events-auto inline-flex w-[199px] cursor-pointer flex-row items-center justify-center rounded-xl bg-primary px-6 py-4 text-base font-normal capitalize leading-inherit text-white disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-black-900`}
                    type="submit"
                    role="button"
                    aria-label="Submit Attendee Confrim for Coinfest Asia 2025"
                    disabled={!isValid || isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex flex-row items-center">
                        <svg
                          className="mr-3 h-5 w-5 animate-spin text-black-900"
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
              </div>
            </div>
          </form>
        </Container>
      </Main>

      {/* @alert */}
      <Alerts
        type={isAlert.type}
        label={isAlert.message}
        visible={isAlert.status}
        onClose={handleCloseAlert}
      />
    </>
  );
};

Attendee.getLayout = function PageLayout(page) {
  return <>{page}</>;
};

export const getServerSideProps = async (context) => {
  if (Object.keys(context.query).length > 0) {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    };
  }

  try {
    return {
      props: {},
    };
  } catch (error) {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    };
  }
};

export default Attendee;
