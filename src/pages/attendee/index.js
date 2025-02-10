import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Toaster, toast } from 'sonner';
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
import StarryBackground from '@components/UI/Background/StarryBackground';
import ToastAlerts from '@components/UI/Alerts/ToastAlert';

// @form
import Label from '@components/UI/Form/Label';
import Input from '@components/UI/Form/Input';

const Attendee = ({}) => {
  const router = useRouter();
  const [isSessionAttendee, setSessionAttendee] = useState(false);

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
          toast.custom(
            (t) => (
              <ToastAlerts
                id={t}
                type="info"
                visible={true}
                label={`<strong>Invalid ticket id or email</strong>,<br/> Please check and try again.`}
              />
            ),
            { duration: 5000 }
          );
          return;
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
        if (rsEmail?.message === 'Email sent successfully!') {
          reset();
          setSessionAttendee(true);
          toast.custom(
            (t) => (
              <ToastAlerts
                id={t}
                type="success"
                visible={true}
                label={`<strong>Thanks</strong>, Email sent successfully!`}
              />
            ),
            { duration: 5000 }
          );
          setTimeout(() => {
            setSessionAttendee(false);
            router.replace(`/attendee/success`);
          }, 6000);
          return;
        } else {
          setSessionAttendee(false);
          toast.custom(
            (t) => (
              <ToastAlerts
                id={t}
                type="error"
                visible={true}
                label={`<strong>Sorry</strong>, failed to send email!`}
              />
            ),
            { duration: 5000 }
          );
          return;
        }
      } catch (error) {
        // console.error('[error] processing submission:', error);
        return;
      }
    }
  };

  return (
    <>
      {/* @head */}
      <HeadGraphSeo title={`Confirmation Attendee`} otherPage={true} />

      {/* @main */}
      <Main className="fixed inset-x-0 inset-y-0 flex h-svh min-h-svh flex-col items-center justify-center self-center">
        <div className="pointer-events-none absolute inset-x-0 bottom-auto top-0 -z-px h-full select-none">
          <StarryBackground starCount={115} />
        </div>

        <Container>
          <form
            id="ca25Form_AttendeeConfrim"
            method="POST"
            onSubmit={handleSubmit(onSubmitForm)}
            className="relative block w-full"
          >
            <div className="flex w-full flex-col items-center justify-center">
              <div className="flex w-full max-w-[568px] flex-col items-start rounded-2xl border-[3px] border-solid border-black-700 px-2 pb-2 pt-4 bg-gradient-primary45 sm:mt-0">
                <div className="mb-4 flex w-full flex-row items-start justify-between px-2 sm:px-4">
                  <div className="block w-max">
                    <h1 className="text-lg font-normal capitalize leading-initial text-white sm:text-xl">
                      {`Attendee`}
                    </h1>
                  </div>
                  <div>
                    <Image
                      className="mx-auto my-auto h-8.5 w-auto sm:h-10"
                      src={'/assets/images/ca2025BrandLight.svg'}
                      alt={`${publicRuntimeConfig?.siteAppName} Primary Brand`}
                      height={58}
                      width={170}
                      quality="87"
                      fetchPriority="auto"
                    />
                  </div>
                </div>
                <div className="mb-4 inline-flex w-full flex-col space-y-4 rounded-xl bg-white px-4 py-4">
                  <div className="block">
                    <Label
                      forId={`tktCAForm_TicketAttendeeConfrim`}
                      label="Ticket ID"
                      helpText={`The Ticket ID must match the attendee's ticket!`}
                      required={true}
                    />
                    <Input
                      id={`tktCAForm_TicketAttendeeConfrim`}
                      type="text"
                      placeholder="Eg: 'A-12321312'"
                      ariaLabel={`Ticket ID Attendee Confrim`}
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
                      helpText="The email provided must match the attendee's registration details!"
                      required={true}
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
                    className="ml-0.5 mt-0.5 flex flex-row items-center gap-x-2 text-sm text-black-900 underline transition duration-300 ease-in-out sm:gap-x-2"
                    href={'/'}
                    title="Coinfest Asia 2025 Button for Back to Home"
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
                    id="ca25Form_SubmitAttendeeConfrim"
                    className={`pointer-events-auto inline-flex w-[169px] cursor-pointer flex-row items-center justify-center rounded-xl bg-black-900 px-4 py-4 text-sm font-normal capitalize leading-inherit text-white disabled:cursor-not-allowed disabled:bg-black-900/60 disabled:text-white/50 sm:w-[199px] sm:px-6 sm:py-4 sm:text-base`}
                    type="submit"
                    role="button"
                    tabIndex={-1}
                    aria-label="Submit Attendee Confrim for Coinfest Asia 2025"
                    disabled={!isValid || isSubmitting || isSessionAttendee}
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
              </div>
            </div>
          </form>
        </Container>
      </Main>

      {/* @alert(Toast)  */}
      <Toaster
        position="bottom-left"
        richColors
        expand={false}
        pauseWhenPageIsHidden={true}
        dismissible={false}
        gap="10"
        offset={'24px'}
        toastOptions={{
          className: 'ca25ToastAlert',
        }}
      />
    </>
  );
};

Attendee.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
export const getServerSideProps = async (context) => {
  if (Object.keys(context?.query).length > 0) {
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
