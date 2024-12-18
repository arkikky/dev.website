import {
  Tailwind,
  Html,
  Head,
  Preview,
  Body,
  Container,
  Row,
  Column,
  Section,
  Heading,
  Img,
  Button,
  Text,
  Link,
} from '@react-email/components';
const baseUrl = `https://arkikky-dev.vercel.app`;

const AttendeeConfrim = ({
  name = '{name}',
  email = '{email}',
  docId = '{documentId}',
}) => (
  <Html lang="en" dir="ltr">
    <Head>
      <title>Attendee Confirmation - Coinfest Asia 2025</title>
      <style>
        {`
          .im ,
          div.im {
            color: #000000 !important;
          }

          .gs li {
            margin-left: 6px !important;
          }

          .ca25TableIn_Flexible tbody {
            display: flex !important;
          }
          .ca25TableIn_Flexible.ca25TableIn_FlexibleBetween tbody td {
            justify-content: space-between !important;
          }

          @media only screen and (max-width: 640px) {
            .ca25CardEmail {
              padding-left: 3px !important;
              padding-right: 3px !important;
            }
            .ca25CardEmailContent {
              padding-left: 16px !important;
              padding-right: 16px !important;
            }
          }
        `}
      </style>
    </Head>
    <Preview>
      {`We are pleased to provide you access to the participant data update page.
      Kindly note that updates can only be made once, so please ensure all
      information is accurate before submission.`}
    </Preview>
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              transparent: 'transparent',
              current: 'currentColor',
              primary: '#015AFD',
              secondary: '#FED220',
              success: '#188035',
              danger: '#D64A4A',
              warning: '#F2B124',
              info: '#9CADD3',
              black: {
                50: '#43464D',
                100: '#241B1B',
                300: '#030C1C',
                400: '#585555',
                500: '#222222',
                800: '#282525',
                900: '#000000',
              },
              blue: {
                50: '#F2F5F9',
                100: '#D3D9E3',
                200: '#BBC9E8',
                300: '#9CADD3',
                400: '#2458F4',
              },
              red: {
                50: '#FFEAEA',
                100: '#D64A4A',
              },
              green: {
                50: '#E4FFEC',
                100: '#188035',
              },
              yellow: {
                50: '#FEF7EA',
                100: '#FBD47F',
                200: '#FFBE32',
                300: '#F2B124',
                400: '#E7AB2B',
                500: '#FED220',
                600: '#FFC600',
              },
            },
            lineHeight: {
              initial: 'initial',
              inherit: 'inherit',
              unset: 'unset',
            },
            letterSpacing: {
              wide: '0.015em',
              tight: '-0.03em',
            },
            spacing: {
              4.5: '18px',
              5.5: '22px',
              7.5: '30px',
              8.5: '34px',
              9.5: '38px',
              13: '52px',
              14: '54px',
              15: '56px',
              16: '60px',
              17: '64px',
              18: '68px',
              19: '72px',
              22: '86px',
              34: '136px',
              fill: '-webkit-fill-available',
            },
            zIndex: {
              px: '1',
              0.5: '2',
              60: '60',
              70: '70',
              80: '80',
              90: '90',
              100: '100',
              sm: '500',
              base: '1028',
              lg: '1524',
              xl: '2028',
              primary: '9999',
            },
            container: {
              center: true,
              padding: {
                DEFAULT: '12px',
                sm: '0px',
              },
            },
          },
        },
        plugins: [
          // @utilities
          ({ addUtilities }) => {
            addUtilities({
              '.bg-gradient-primary': {
                backgroundImage:
                  'linear-gradient(to right, #1F1F1F 3%, #005AFF 39%, #A0CCF7 65%, #ED4F35 98% ,#ED4F35 100%)',
              },
            });
          },
        ],
      }}
    >
      <Body className="mx-auto my-auto bg-gray-100 px-2 pb-16 pt-12 font-sans">
        {/* @header(Logo) */}
        <Section className="!mt-0 mb-8 !py-0 px-6">
          <Img
            className="mx-auto my-auto h-10 w-auto"
            src={`https://api.coinfest.asia/uploads/ca2025_Brand_a32d2e5691.png`}
            alt={`Coinfest Asia 2025 (Primary Brand)`}
            height={58}
            width={170}
          />
        </Section>

        {/* @main */}
        <Container
          className="ca25CardEmail mx-auto max-w-[579px] !py-[3px] bg-gradient-primary"
          style={styles.ca25CardEmail}
        >
          <Section
            className="ca25CardEmailContent bg-white !py-0 pb-1"
            style={styles.ca25CardEmailContent}
          >
            <Section className="mt-4 !py-0">
              <Heading className="text-sm text-black-900">Hi {name},</Heading>
              <Text className="!mt-0 text-balance text-sm text-black-900">
                {`Thank you for participating with us at Coinfest Asia. We are
              pleased to provide you access to the participant data update page.
              Kindly note that updates can only be made once, so please ensure
              all information is accurate before submission. Please click the
              button below :`}
              </Text>

              <Button
                className="rounded-xl bg-black-900 px-5 py-4 text-center text-sm font-semibold text-white hover:underline"
                href={`${baseUrl}/attendee/update?vw=${docId}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Update Attendee
              </Button>

              <Text className="text-black !mb-0 text-sm">
                or copy and paste this URL into your browser: <br />
                <Link
                  className="text-primary underline"
                  href={`${baseUrl}/attendee/update?vw=${docId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {`${baseUrl}/attendee/update?vw=${docId}`}
                </Link>
              </Text>
            </Section>
            <Section className="!pb-0 pt-2">
              <Text className="text-sm text-gray-500">
                <span className="font-semibold text-black-900">Important:</span>{' '}
                This link is valid for one-time use only. Please ensure that all
                information is completed accurately on the update page, as
                changes will not be possible once submitted.
              </Text>

              <Text className="text-sm font-semibold text-black-900">
                <span className="font-normal text-black-900">Thanks,</span>{' '}
                <br />
                <span className="text-black-900">Coinfest Support Team</span>
              </Text>
            </Section>
            <Section className="!pt-6">
              <Text className="text-xs text-black-900">
                If you have any questions or need further assistance, please
                visit our FAQ page. Alternatively, feel free to reach out to us
                at{' '}
                <Link
                  className="text-primary underline"
                  href="mailto:support@coinfest.asia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  support@coinfest.asia
                </Link>{' '}
                —our team is always happy to help.
              </Text>
              <Text className="max-w-[417px] text-xs text-black-900">
                ©{' '}
                <span className="font-medium text-primary">Coinfest Asia</span>,
                All rights reserved. Coinfest Asia is organized by{' '}
                <Link
                  className="text-primary underline"
                  href="https://coinvestasi.com/"
                  title="Coinfest Asia 2025 (Coinvestasi)"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Coinvestasi
                </Link>
                , a subsidiary of{' '}
                <Link
                  href="https://indonesiacrypto.network/"
                  title="Coinfest Asia 2025 (Indonesia Crypto Network)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  Indonesia Crypto Network
                </Link>
                .
              </Text>

              {/* @footer */}
              <Row className="ca25TableIn_Flexible inline-block pb-6 pt-2">
                <Column className="inline-block w-full">
                  <span className="float-left block w-max">
                    <Img
                      className="mx-auto my-auto h-7.5 w-auto"
                      src={`https://api.coinfest.asia/uploads/ca2025_Brand_a32d2e5691.png`}
                      alt={`Coinfest Asia 2025 (Primary Brand)`}
                      height={58}
                      width={170}
                    />
                  </span>
                  <span className="float-right !my-0 w-max !pt-[5px] pl-0">
                    <ul className="!my-0 inline-flex !list-none flex-row !pl-0 text-xs">
                      <li className="!ml-1.5">
                        <Link
                          href="https://www.instagram.com/coinfest.asia/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Img
                            className="mx-auto my-auto mt-0 h-5 w-5"
                            src={`https://api.coinfest.asia/uploads/ca2025_Instagram_1c21b62be6.png`}
                            alt={`Coinfest Asia 2025 (Instagram Social Media)`}
                            height={70}
                            width={70}
                          />
                        </Link>
                      </li>
                      <li className="!ml-1.5">
                        <Link
                          href="https://twitter.com/coinfestasia"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Img
                            className="mx-auto my-auto mt-0 h-5 w-5"
                            src={`https://api.coinfest.asia/uploads/ca2025_Twitter_52a4fbb72b.png`}
                            alt={`Coinfest Asia 2025 (Twitter Social Media)`}
                            height={70}
                            width={70}
                          />
                        </Link>
                      </li>
                      <li className="!ml-1.5">
                        <Link
                          href="https://t.me/coinfestasiaofficial"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Img
                            className="mx-auto my-auto mt-0 h-5 w-5"
                            src={`https://api.coinfest.asia/uploads/ca2025_Telegram_62c2e048ed.png`}
                            alt={`Coinfest Asia 2025 (Telegram Social Media)`}
                            height={70}
                            width={70}
                          />
                        </Link>
                      </li>
                      <li className="!ml-1.5">
                        <Link
                          href="https://www.linkedin.com/showcase/coinfest/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Img
                            className="mx-auto my-auto mt-0 h-5 w-5"
                            src={`https://api.coinfest.asia/uploads/ca2025_Linked_In_9480c4dfb0.png`}
                            alt={`Coinfest Asia 2025 (LinkedIn Social Media)`}
                            height={70}
                            width={70}
                          />
                        </Link>
                      </li>
                    </ul>
                  </span>
                </Column>
              </Row>
            </Section>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default AttendeeConfrim;

// @styles
const styles = {
  ca25CardEmail: {
    paddingLeft: '3px',
    paddingRight: '3px',
  },
  ca25CardEmailContent: {
    paddingLeft: '26px',
    paddingRight: '26px',
  },
};
