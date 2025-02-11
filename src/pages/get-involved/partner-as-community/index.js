import React, { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import getConfig from 'next/config';
import Link from 'next/link';

// # @get .config
const { serverRuntimeConfig } = getConfig();

// @style
import 'react-phone-input-2/lib/high-res.css';

// @lib/controller & helper
import { getFetchUrl } from '@lib/controller/API';
import { getReduceArray } from '@lib/helper/Configuration';
import { getFecthHbSpt, submitFormHbSpt } from '@lib/controller/HubSpot';

// @components
import HeadGraphSeo from '@components/Head';

// @forms
import Label from '@components/UI/Form/Label';
import Input from '@components/UI/Form/Input';
import Textarea from '@components/UI/Form/Textarea';
import SelectCountry from '@components/UI/Form/SelectCountry';

// @layouts
import PartnershipLayouts from '@layouts/PartnershipLayouts';

const PartnerCommunity = ({
  mode,
  groupLabel = 'PartnerAsCommunity',
  ipAddress,
  country,
  forms,
}) => {
  const router = useRouter();
  const [isForms, setForms] = useState({
    ipAddress: ipAddress || [],
    fields: forms || [],
    country: country || [],
  });

  const {
    watch,
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    setValue,
    reset,
  } = useForm({
    mode: 'all',
  });
  const isAgree = watch(
    `coinfest_asia_2025_community_partner_agreement_to_form_submission`
  );

  // @hook(Preline)
  const handleIntzPreline = async () => {
    await import('preline/preline');
    if (window.HSStaticMethods) {
      window.HSStaticMethods.autoInit();
    }
  };
  useEffect(() => {
    handleIntzPreline();
  }, [isAgree]);

  // @submit
  const onSubmit = async (data) => {
    const sntzeFld = (field) => DOMPurify.sanitize(field || '').trim();
    const d = {
      fields: [
        {
          name: 'coinfest_asia_2025_community_partner_agreement_to_form_submission',
          value: sntzeFld(
            data?.coinfest_asia_2025_community_partner_agreement_to_form_submission !==
              ''
              ? data?.coinfest_asia_2025_community_partner_agreement_to_form_submission
              : null
          ),
        },
        {
          name: 'community_submission_ticket_1',
          value: sntzeFld(
            data?.community_submission_ticket_1 !== ''
              ? data?.community_submission_ticket_1
              : '-'
          ),
        },
        {
          name: 'community_submission_ticket_2',
          value: sntzeFld(
            data?.community_submission_ticket_2 !== ''
              ? data?.community_submission_ticket_2
              : '-'
          ),
        },
        {
          name: 'firstname',
          value: sntzeFld(data?.firstname),
        },
        {
          name: 'lastname',
          value: sntzeFld(data?.lastname),
        },
        {
          name: 'email',
          value: sntzeFld(data?.email),
        },
        {
          name: 'telegram_username',
          value: sntzeFld(
            data?.telegram_username !== '' ? data?.telegram_username : '-'
          ),
        },
        {
          name: 'did_your_community_support_coinfest_asia_previously_',
          value: sntzeFld(
            data?.did_your_community_support_coinfest_asia_previously_ !== ''
              ? data?.did_your_community_support_coinfest_asia_previously_
              : '-'
          ),
        },
        {
          name: 'company',
          value: sntzeFld(data?.company !== '' ? data?.company : '-'),
        },
        {
          name: 'country',
          value: sntzeFld(
            data[`country${groupLabel}`] !== ''
              ? data[`country${groupLabel}`]
              : '-'
          ),
        },
        {
          name: 'ca25_community_focus',
          value: sntzeFld(
            data?.ca25_community_focus !== '' ? data?.ca25_community_focus : '-'
          ),
        },
        {
          name: 'describe_your_community_activities_in_bullet_points',
          value: sntzeFld(
            data?.describe_your_community_activities_in_bullet_points !== ''
              ? data?.describe_your_community_activities_in_bullet_points
              : '-'
          ),
        },
        {
          name: 'community_channel_link_s_',
          value: sntzeFld(
            data[`community_channel_link_s_${groupLabel}`] !== ''
              ? data[`community_channel_link_s_${groupLabel}`]
              : '-'
          ),
        },
        {
          name: 'website',
          value: sntzeFld(
            data[`logo_url${groupLabel}`] !== ''
              ? data[`logo_url${groupLabel}`]
              : '-'
          ),
        },
      ],
      context: {
        pageUri: 'https://coinfest.asia/get-involved/partner-as-community',
        pageName: '2025 Partner As Community | Coinfest Asia 2025',
        ipAddress: isForms?.ipAddress?.ip,
      },
    };
    const k = '28116348-7f30-4b66-86c2-59cb28f08190';
    const rs = await submitFormHbSpt(d, k);

    // @debug
    // console.log(d);
    if (rs === true) {
      reset();
      router.replace('/get-involved/partner-as-community/success');
    }
  };

  return (
    <>
      {/* @head */}
      <HeadGraphSeo title={`Partner As Community`} otherPage={true} />

      {/* @main */}
      <PartnershipLayouts
        title={'COINFEST ASIA 2025 PARTNER AS COMMUNITY'
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
          'Connect with leading Web3 industry players, aspiring startups, and communities from 90+ countries.'
        }
        backUrl={`/get-involved`}
        mode={mode}
      >
        <form
          id={`form${groupLabel}`}
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
          className="relative mt-0 flex w-full flex-col"
        >
          <div
            className={`absolute inset-x-0 inset-y-0 bg-white/60 opacity-100 backdrop-blur-[2px] ${
              isSubmitting
                ? 'pointer-events-auto z-[15] select-auto'
                : '!pointer-events-auto -z-px !select-auto'
            }`}
          ></div>

          <div className="block w-full space-y-5">
            <div
              className={`ca25Article_Frmatt ca25Article_FrmattNormal text-base`}
            >
              <p>
                <span>
                  <span>
                    At Coinfest Asia, we believe that crypto should be
                    celebrated by everyone! We welcome all communities—Web3 and
                    beyond—to be part of the largest crypto festival in the
                    world. Check the requirements below and apply today!
                  </span>
                  <br />
                </span>
                <br />
                <span>
                  <span>
                    <strong>TERMS &amp; CONDITIONS</strong>
                  </span>
                  <span>
                    <br />
                  </span>
                  <br />
                </span>
              </p>
              <p>
                <span>
                  <strong>Benefits of Partnering</strong>
                </span>
              </p>
              <ul>
                <li>
                  <span>
                    Receive 2 (two) complimentary tickets to Coinfest Asia.
                  </span>
                </li>
                <li>
                  <span>
                    Get your community featured on the official Coinfest Asia
                    website.
                  </span>
                </li>
                <li>
                  <span>
                    Unlock special rewards based on your community's performance
                    in the Coinfest Asia Zealy Quest.
                  </span>
                </li>
              </ul>
              <p>
                <span>
                  <strong>
                    <br />
                    Ticket Purchase Requirement
                  </strong>
                </span>
              </p>
              <ul>
                <li>
                  <span>
                    Your community must have purchased a minimum of{' '}
                    <strong>two (2) tickets</strong> to Coinfest Asia.
                  </span>
                </li>
                <li>
                  <span>
                    Proof of ticket purchase (e.g., ticket numbers) must be
                    submitted as part of your application.
                  </span>
                </li>
              </ul>
              <p>
                <span>
                  <strong>
                    <br />
                    Community Values Alignment
                  </strong>
                </span>
              </p>
              <ul>
                <li>
                  <span>
                    Your community must align with Coinfest Asia’s values of{' '}
                    <strong>inclusivity, innovation, and respect.</strong>
                  </span>
                </li>
                <li>
                  <span>
                    <strong>
                      <strong>
                        Communities that engage in, promote, or condone the
                        following will not be eligible:
                      </strong>
                    </strong>
                  </span>
                  <ul>
                    <li>
                      <span>
                        Hate speech or discriminatory practices (e.g., racism,
                        sexism, homophobia, etc.).
                      </span>
                    </li>
                    <li>
                      <span>Pornographic or explicit content.</span>
                    </li>
                    <li>
                      <span>Illegal or unethical activities.</span>
                    </li>
                  </ul>
                </li>
              </ul>
              <p>
                <span>
                  <strong>
                    <br />
                    Exclusive Perks Upon Acceptance
                  </strong>
                </span>
              </p>
              <ul>
                <li>
                  <span>
                    Once accepted, your community will gain access to the{' '}
                    <strong>Coinfest Asia Official Quest</strong>, where you can
                    unlock additional rewards, perks, and networking
                    opportunities during the event.
                  </span>
                </li>
              </ul>
            </div>
            <div className="mt-4 flex flex-col last:mb-0">
              <label
                htmlFor={`ca25Form_YesIAGree${groupLabel}`}
                className={`mb-2 mt-3 flex flex-col text-sm font-medium text-black-900`}
              >
                <strong className="block w-full text-start prose-a:text-primary prose-a:underline">
                  I have read, understood, and agree to the Terms & Conditions
                  above and on{' '}
                  <Link
                    href="https://coinfest.asia/"
                    title={`Coinfest Asia 2025`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    the complete terms page.
                  </Link>
                </strong>
              </label>
              <div className="mt-2 grid space-y-3">
                {isForms?.fields[0]?.options?.map((rslt, i) => (
                  <div className="space-y-3" key={i}>
                    <label
                      htmlFor={`radioYesIAGree${groupLabel}${rslt?.name}${i}`}
                      className={`flex w-full cursor-pointer items-center`}
                    >
                      <input
                        id={`radioYesIAGree${groupLabel}${rslt?.name}${i}`}
                        type="radio"
                        className={`boxShadow-none form-radio pointer-events-none mt-px h-4.5 w-4.5 shrink-0 rounded-full border border-solid ${
                          errors[
                            `coinfest_asia_2025_community_partner_agreement_to_form_submission`
                          ]
                            ? 'border-red-500'
                            : 'border-gray-500/20'
                        } bg-transparent text-primary outline-none ring-0 focus:outline-none focus-visible:outline-none`}
                        name={`radioYesIAGree${groupLabel}${rslt?.name}`}
                        value={rslt?.value}
                        {...register(
                          'coinfest_asia_2025_community_partner_agreement_to_form_submission',
                          {
                            required: true,
                          }
                        )}
                      />
                      <span className="ml-3 text-sm font-normal text-black-900">
                        {rslt?.label}
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {isAgree === 'I agree' && (
            <>
              <div className="block w-full space-y-5 pt-4.5">
                <div
                  className={`ca25Article_Frmatt ca25Article_FrmattNormal pt-3 text-base`}
                >
                  <p>
                    <span className="mb-2">
                      <strong>
                        Enter Your Ticket Number
                        <br />
                      </strong>
                    </span>
                    <span>
                      Check your email for your Coinfest Asia ticket. You’ll
                      find a QR code with a series of random numbers and letters
                      below it. Copy and paste those characters into the fields
                      below.
                    </span>
                  </p>
                </div>
                <div className="grid-cols-1 gap-x-4 gap-y-4 last:mb-0 supports-grid:grid sm:grid-cols-2">
                  <div className="block">
                    <Label
                      forId={`ca25Form_Ticket1${groupLabel}`}
                      label="Ticket 1"
                      required={true}
                    />
                    <Input
                      id={`ca25Form_Ticket1${groupLabel}`}
                      type="text"
                      name={`community_submission_ticket_1`}
                      placeholder=""
                      ariaLabel={`Ticket 1`}
                      disabled={isSubmitting}
                      config={{
                        ...register(`community_submission_ticket_1`, {
                          required: true,
                          maxLength: 120,
                          pattern: {
                            value: /^[a-zA-Z0-9\s-_]{2,120}$/,
                          },
                        }),
                      }}
                      errors={errors[`community_submission_ticket_1`]}
                    />
                  </div>
                  <div className="block">
                    <Label
                      forId={`ca25Form_Ticket2${groupLabel}`}
                      label="Ticket 2"
                      required={true}
                    />
                    <Input
                      id={`ca25Form_Ticket2${groupLabel}`}
                      type="text"
                      name={`community_submission_ticket_2`}
                      placeholder=""
                      ariaLabel={`Ticket 2`}
                      disabled={isSubmitting}
                      config={{
                        ...register(`community_submission_ticket_2`, {
                          required: true,
                          maxLength: 120,
                          pattern: {
                            value: /^[a-zA-Z0-9\s-_]{2,120}$/,
                          },
                        }),
                      }}
                      errors={errors[`community_submission_ticket_2`]}
                    />
                  </div>
                </div>
              </div>
              <div className="block w-full space-y-5 pt-3">
                <h2 className="mb-2.5 flex w-max flex-col pt-4 text-xl font-semibold text-black-900 sm:text-[28px] sm:font-bold sm:leading-[34px]">
                  {`Personal Details`}
                </h2>

                <div className="grid-cols-1 gap-x-4 gap-y-4 last:mb-0 supports-grid:grid sm:grid-cols-2">
                  <div className="block">
                    <Label
                      forId={`ca25Form_Firstname${groupLabel}`}
                      label="First name"
                      required={true}
                    />
                    <Input
                      id={`ca25Form_Firstname${groupLabel}`}
                      type="text"
                      name={`firstname`}
                      placeholder=""
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
                      forId={`ca25Form_Lastname${groupLabel}`}
                      label="Last name"
                      required={true}
                    />
                    <Input
                      id={`ca25Form_Lastname${groupLabel}`}
                      type="text"
                      name={`lastname`}
                      placeholder=""
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
                <div className="grid-cols-1 gap-x-4 gap-y-4 last:mb-0 supports-grid:grid sm:grid-cols-2">
                  <div className="block">
                    <Label
                      forId={`ca25Form_Email${groupLabel}`}
                      label="Email"
                      required={true}
                    />
                    <Input
                      id={`ca25Form_Email${groupLabel}`}
                      type="email"
                      placeholder=""
                      ariaLabel={`Email ${groupLabel}`}
                      disabled={isSubmitting}
                      config={{
                        ...register(`email`, {
                          required: true,
                          maxLength: 120,
                          pattern: {
                            value:
                              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          },
                        }),
                      }}
                      errors={errors[`email`]}
                    />
                  </div>
                  <div className="block">
                    <Label
                      forId={`ca25Form_Telegram${groupLabel}`}
                      label="Telegram Username"
                      required={true}
                    />
                    <Input
                      id={`ca25Form_Telegram${groupLabel}`}
                      type="text"
                      name={`telegram_username`}
                      placeholder=""
                      ariaLabel={`Lastname - ${groupLabel}`}
                      config={{
                        ...register(`telegram_username`, {
                          required: true,
                          maxLength: 120,
                          pattern: {
                            value: /^([a-zA-Z][a-zA-Z0-9_\.]{2,55})$/,
                          },
                        }),
                      }}
                      errors={errors[`telegram_username`]}
                    />
                  </div>
                </div>
                <div className="mb-6 flex flex-col last:mb-0">
                  <Label
                    forId={`ca25Form_PreviouslyCoinfestAsia${groupLabel}`}
                    label="Did your community support Coinfest Asia previously?"
                    required={true}
                  />
                  <div className="mt-2 grid space-y-3">
                    {isForms?.fields[1]?.options?.map((rslt, i) => (
                      <div className="space-y-2" key={i}>
                        <label
                          htmlFor={`radioPreviousCoinfestAsia${rslt?.name}_${groupLabel}${i}`}
                          className={`flex w-full cursor-pointer items-center`}
                        >
                          <input
                            id={`radioPreviousCoinfestAsia${rslt?.name}_${groupLabel}${i}`}
                            type="radio"
                            className={`boxShadow-none form-radio pointer-events-none mt-px h-4.5 w-4.5 shrink-0 rounded-full border border-solid ${
                              errors[
                                `did_your_community_support_coinfest_asia_previously_`
                              ]
                                ? 'border-red-500'
                                : 'border-gray-500/20'
                            } bg-transparent text-primary outline-none ring-0 focus:outline-none focus-visible:outline-none`}
                            name={`radioPreviousCoinfestAsia${rslt?.name}_${groupLabel}`}
                            value={rslt?.value}
                            {...register(
                              'did_your_community_support_coinfest_asia_previously_',
                              {
                                required: true,
                              }
                            )}
                          />
                          <span className="ml-3 text-sm font-normal text-black-900">
                            {rslt?.label}
                          </span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="block w-full space-y-5 pt-3">
                <h2 className="mb-2.5 flex w-max flex-col pt-4 text-xl font-semibold text-black-900 sm:text-[28px] sm:font-bold sm:leading-[34px]">
                  {`About Community`}
                </h2>

                <div className="grid-cols-1 gap-x-4 gap-y-4 last:mb-0 supports-grid:grid sm:grid-cols-2">
                  <div className="block">
                    <Label
                      forId={`ca25Form_CommunityName${groupLabel}`}
                      label={`Community name`}
                      required={true}
                    />
                    <Input
                      id={`ca25Form_CommunityName${groupLabel}`}
                      type="text"
                      name={`company`}
                      placeholder=""
                      ariaLabel={`Community Name ${groupLabel}`}
                      disabled={isSubmitting}
                      config={{
                        ...register(`company`, {
                          required: true,
                          maxLength: 120,
                          pattern: {
                            value: /^[a-zA-Z0-9\s-_]{2,120}$/,
                          },
                        }),
                      }}
                      errors={errors[`company`]}
                    />
                  </div>
                  <div
                    className={`"block ${errors[`country${groupLabel}`] && 'error'}`}
                  >
                    <Label
                      forId={`ca25Form_Country${groupLabel}`}
                      label="Country/Region"
                      required={true}
                    />
                    <SelectCountry
                      id={`ca25Form_Country${groupLabel}`}
                      ariaLabel={`Country - ${groupLabel} Forms`}
                      widthPlaceholder={false}
                      listSelect={isForms?.country}
                      withIcons={true}
                      values={`country${groupLabel}`}
                      setValue={setValue}
                      config={{
                        ...register(`country${groupLabel}`, {
                          required: 'Please select a country',
                        }),
                      }}
                    />
                  </div>
                </div>
                <div className="mt-4 flex flex-col last:mb-0">
                  <Label
                    forId={`ca25Form_CommunityFocus${groupLabel}`}
                    label="Community focus"
                    required={true}
                  />
                  <div className="mt-2 grid space-y-3">
                    {isForms?.fields[2]?.options?.map((rslt, i) => (
                      <div className="space-y-3" key={i}>
                        <label
                          htmlFor={`radioCommunityFocus${groupLabel}${rslt?.name}${i}`}
                          className={`flex w-full cursor-pointer items-center`}
                        >
                          <input
                            id={`radioCommunityFocus${groupLabel}${rslt?.name}${i}`}
                            type="radio"
                            className={`boxShadow-none form-radio pointer-events-none mt-px h-4.5 w-4.5 shrink-0 rounded-full border border-solid ${
                              errors[`ca25_community_focus`]
                                ? 'border-red-500'
                                : 'border-gray-500/20'
                            } bg-transparent text-primary outline-none ring-0 focus:outline-none focus-visible:outline-none`}
                            name={`radioCommunityFocus${groupLabel}${rslt?.name}`}
                            value={rslt?.value}
                            {...register('ca25_community_focus', {
                              required: true,
                            })}
                          />
                          <span className="ml-3 text-sm font-normal text-black-900">
                            {rslt?.label}
                          </span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="block">
                  <Label
                    forId={`ca25Form_TellUsAboutYourMission${groupLabel}`}
                    label="Tell us a bit about your community—what you're all about and your mission!"
                    required={true}
                  />
                  <Textarea
                    id={`ca25Form_TellUsAboutYourMission${groupLabel}`}
                    className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    rows="5"
                    placeholder=""
                    config={{
                      ...register(
                        `describe_your_community_activities_in_bullet_points`,
                        {
                          required: true,
                          maxLength: 1000,
                          pattern: {
                           value: /^[a-zA-Z0-9\s\-_,.:?'()]+$/,
                          },
                        }
                      ),
                    }}
                    errors={
                      errors[
                        `describe_your_community_activities_in_bullet_points`
                      ]
                    }
                  />
                </div>
                <div className="mt-4 block">
                  <Label
                    forId={`ca25Form_CommunityChannel${groupLabel}`}
                    label="Community channel(s)"
                    required={true}
                  />
                  <Input
                    id={`ca25Form_CommunityChannel${groupLabel}`}
                    type="url"
                    name={`community_channel_link_s_${groupLabel}`}
                    placeholder={``}
                    ariaLabel={`Community Channel(s) ${groupLabel}`}
                    config={{
                      ...register(`community_channel_link_s_${groupLabel}`, {
                        required: true,
                        maxLength: 255,
                        pattern: {
                          value: /^(https?:\/\/[^\s/$.?#].[^\s]*)$|^N\/A$|^-$/,
                          message: 'Please enter a valid URL',
                        },
                      }),
                    }}
                    errors={errors[`community_channel_link_s_${groupLabel}`]}
                  />
                </div>
                <div className="mt-4 block">
                  <Label
                    forId={`ca25Form_LogoUrl${groupLabel}`}
                    label="Link to your community logo"
                    helpText={`Make sure your logo fits these criteria: <br/> - Minimum size 500x500 px <br/> - Format is SVG and/or PNG`}
                    required={true}
                  />
                  <Input
                    id={`ca25Form_LogoUrl${groupLabel}`}
                    type="url"
                    name={`logo_url${groupLabel}`}
                    placeholder={``}
                    ariaLabel={`Logo Url Link ${groupLabel}`}
                    config={{
                      ...register(`logo_url${groupLabel}`, {
                        required: true,
                        maxLength: 255,
                        pattern: {
                          value: /^(https?:\/\/[^\s/$.?#].[^\s]*)$|^N\/A$|^-$/,
                          message: 'Please enter a valid URL',
                        },
                      }),
                    }}
                    errors={errors[`logo_url${groupLabel}`]}
                  />
                </div>
              </div>

              {/* @submit */}
              <div className="relative z-[18] mt-3 flex flex-col">
                <button
                  id={`ca25Submit-${groupLabel}`}
                  type="submit"
                  className={`group relative mt-6 flex w-full flex-col items-center justify-center overflow-hidden rounded-[14px] bg-primaryRed py-6 text-base font-normal text-white outline-none transition duration-[0.3] ease-in-out focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-black-900`}
                  aria-label={`Submit ${groupLabel} Forms`}
                  disabled={isSubmitting}
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

                  <div className="absolute inset-0 flex h-full w-full justify-center blur-md [transform:skew(-13deg)_translateX(-100%)] group-hover:transition-[transform] group-hover:duration-[1.6s] group-hover:[transform:skew(-13deg)_translateX(100%)]">
                    <div className="relative h-full w-12 bg-white/40"></div>
                  </div>
                </button>
              </div>
            </>
          )}
        </form>
      </PartnershipLayouts>
    </>
  );
};

PartnerCommunity.getLayout = (page, { pageProps }) => {
  const { mode } = pageProps;
  return page;
};
export const getStaticProps = async () => {
  try {
    const [rsIpAddress, rsCountry, rsForms] = await Promise.all([
      getFetchUrl(
        `https://ipinfo.io/json?token=${serverRuntimeConfig?.ipAddress_token}`
      ),
      getFetchUrl(`https://restcountries.com/v3.1/all?fields=name,flags`),
      getFecthHbSpt(`/forms/v2/fields/28116348-7f30-4b66-86c2-59cb28f08190/`),
    ]);
    const reduceForms = getReduceArray(rsForms, [0, 7, 10]);

    return {
      props: {
        mode: 'light',
        ipAddress: rsIpAddress || [],
        country: rsCountry || [],
        forms: reduceForms || [],
      },
      revalidate: 900,
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
export default PartnerCommunity;
