import React, { useState } from 'react';
import Link from 'next/link';

// @lib/controller & helper
import { getFetch } from '@lib/controller/API';

// @form
import Label from '@components/UI/Form/Label';
import Input from '@components/UI/Form/Input';

// @components
import HeadGraphSeo from '@components/Head';
import Main from '@components/Main';
import Container from '@components/Container';

const Attendee = ({}) => {
  return (
    <>
      {/* @head */}
      <HeadGraphSeo title={`Order Received`} otherPage={true} />

      {/* @main */}
      <Main className="fixed inset-x-0 inset-y-0 flex h-svh min-h-svh flex-col items-center justify-center self-center bg-primary">
        <Container>
          <div className="flex w-full flex-col items-center justify-center">
            <div className="flex w-full max-w-[568px] flex-col items-start rounded-2xl border border-solid border-gray-300 bg-gray-200/80 px-2 pb-2 pt-4 sm:mt-0">
              <div className="mb-4 flex w-full flex-row items-start justify-between px-2 sm:px-4">
                <div className="block w-max">
                  <h1 className="text-xl font-medium capitalize">Attendee</h1>
                </div>
                <div className="flex w-max flex-col items-end">
                  <span className="mb-1 text-sm text-gray-600">Email</span>
                </div>
              </div>
              <div className="mb-4 inline-flex w-full flex-col space-y-7 rounded-xl bg-white px-4 py-4">
                <div className="block">
                  <Label
                    forId={`tktCAForm_EmailAttndeeCheckout`}
                    helpText="The email entered must match the information of the attendee who is attending!"
                  />
                  <Input
                    id={`tktCAForm_EmailAttndeeCheckout`}
                    type="email"
                    placeholder="Eg: example@email.com"
                    ariaLabel={`Email Attendee - Checkout`}
                    // config={{
                    //   ...register(`emailAttndee${arrIndex}`, {
                    //     required: true,
                    //     maxLength: 255,
                    //     pattern: {
                    //       value:
                    //         /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    //     },
                    //   }),
                    // }}
                    // errors={errors[`emailAttndee${arrIndex}`]}
                  />
                </div>
              </div>

              <button
                id="tktCA25Form_SubmitCheckout"
                className={`inline-flex w-full cursor-pointer flex-row items-center justify-center rounded-xl bg-primary px-8 py-5 text-base font-normal capitalize leading-inherit text-white disabled:bg-gray-200 disabled:text-black-900`}
                type="submit"
                role="button"
                aria-label="Submit Checkout for Coinfest Asia 2025"
                // disabled={!isValid}
              >
                {/* {isSubmitting ? (
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
                )} */}
                Submit
              </button>
            </div>
          </div>
        </Container>
      </Main>
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
    // const [rsOrderRecived] = await Promise.all([
    //   // getFetch(
    //   //   `/api/orders/${process}?populate[customer][fields]=*&populate[products][fields][0]=name&populate[products][fields][1]=price&populate[products][fields][2]=priceSale&populate[coupons][fields][0]=couponCode&populate[coupons][fields][1]=amount`
    //   // ),
    // ]);

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
