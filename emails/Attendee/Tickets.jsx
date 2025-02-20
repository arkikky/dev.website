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
  Hr,
  Heading,
  Img,
  Text,
  Link,
} from '@react-email/components';

const AttendeeTickets = ({
  qrCode,
  documentId = null,
  attendeeId = '{attendeeId}',
  ticket = '{ticket}',
  name = '{name}',
  email = '{email}',
  company = '{company}',
}) => {
  const isQrCode = qrCode
    ? `https://api.coinfest.asia${qrCode}`
    : 'https://api.coinfest.asia/uploads/qr_Code_30174acc7e.png';
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Ticket - Coinfest Asia 2025</title>
        <style>
          {`
          a {
            outline: none;
          }

          .ca25Split_BorderBoard {
            border-left: 1px dashed #E5E7EB;
          }

          .splitColumn2_TextLink a {
            color: #FFFFFF !important;
          }

          @media only screen and (max-width: 640px) {
            .ca25Split_BorderBoard {
              border-left: none;
              border-top: 1px dashed #E5E7EB;
            }

            .splitGridColumn tbody tr {
              display: grid !important;
            }

            .splitColumn {
              width: 100% !important;
            }

            .splitColumn1, .splitColumn2 {
              height: auto !important;
              width: 100% !important;
            }

            .splitColumn2 {
              padding-top: 24px;
              padding-bottom: 24px;
            }

            .splitColumn2_Content {
              padding-top: 22px !important;
              padding-left: 20px !important;
            }

            .ca25CardEmail {
              border-radius: 0px !important;
              padding-top: 3px !important;
              padding-bottom: 3px !important;
              padding-left: 0px !important;
              padding-right: 0px !important;
            }
          }
        `}
        </style>
      </Head>
      <Preview>
        {`Thank you for choosing to purchase tickets for Coinfest Asia! We are delighted to have you join us at this premier event, where innovation and collaboration shape the future of blockchain and cryptocurrency. Your participation is highly valued, and we look forward to welcoming you. Stay tuned for updates, and get ready for an unforgettable experience!`}
      </Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                transparent: 'transparent',
                current: 'currentColor',
                primary: '#2458F1',
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
                '.bg-regular': {
                  backgroundImage: '#005AFF',
                },
                '.bg-vip': {
                  backgroundImage: '#1F1F1F',
                },
              });
            },
          ],
        }}
      >
        <Body className="mx-auto my-auto bg-gray-100 px-0 py-8 font-sans">
          {/* @header(Logo) */}
          <Section className="mb-6 mt-4 px-6 py-2">
            <Img
              className="mx-auto my-auto h-10 w-auto"
              src={`https://api.coinfest.asia/uploads/ca25_Brand_f3d87b5401.png`}
              alt={`Coinfest Asia 2025 (Primary Brand)`}
              height={58}
              width={170}
            />
          </Section>

          {/* @main */}
          <Container
            className="ca25CardEmail mx-auto max-w-[579px] bg-gradient-primary"
            style={styles.ca25CardEmail}
          >
            <Section
              className="ca25CardEmailContent bg-white !py-0 !pb-5"
              style={styles.ca25CardEmailContent}
            >
              <Row className="splitGridColumn !py-3">
                <Column className="splitColumn" style={styles.splitColumn}>
                  <Row className="inline-block py-5 pl-[28px]">
                    <Column className="inline-flex">
                      <span className="block w-[46px]">
                        <Img
                          className="mx-auto my-auto mt-0 h-11 w-auto"
                          src={`https://api.coinfest.asia/uploads/ca25_Ticket_Pin_Location_Icons_99a875fc50.png`}
                          alt={`Coinfest Asia 2025 (Location Board Icons)`}
                          height={120}
                          width={120}
                        />
                      </span>
                      <span className="pl-3">
                        <Text className="m-[0px] text-[14px] text-sm font-light leading-[20px] text-gray-400">
                          Location
                        </Text>
                        <Link
                          className="m-[0px] text-[12px] text-base font-semibold leading-[14px] text-primary"
                          href=""
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Bali, Indonesia
                        </Link>
                      </span>
                    </Column>
                  </Row>
                </Column>
                <Column className="splitColumn" style={styles.splitColumn}>
                  <Row className="ca25Split_BorderBoard inline-block py-5 pl-[28px]">
                    <Column className="inline-flex">
                      <span className="block w-[46px]">
                        <Img
                          className="mx-auto my-auto mt-0 h-11 w-auto"
                          src={`https://api.coinfest.asia/uploads/ca25_Ticket_Calendar_Icons_71bcce3130.png`}
                          alt={`Coinfest Asia 2025 (Calendar Board Icons)`}
                          height={120}
                          width={120}
                        />
                      </span>
                      <span className="pl-3">
                        <Text className="m-[0px] text-[14px] text-sm font-light leading-[20px] text-gray-400">
                          Date
                        </Text>
                        <Text className="m-[0px] text-[12px] text-base font-semibold leading-[14px] text-primary">
                          21 - 22 August, 2025
                        </Text>
                      </span>
                    </Column>
                  </Row>
                </Column>
              </Row>

              {/* @ticket-details */}
              <Section className="px-0 py-0">
                <span className="inline-flex w-fill px-4 py-5 text-center text-base font-semibold uppercase tracking-[0.3px] text-white no-underline bg-gradient-primary">
                  <span className="mx-auto inline-flex">Ticket Details</span>
                </span>
              </Section>

              {/* @ticket(Detail) */}
              <Row className="splitGridColumn">
                <Column
                  align="center"
                  className="splitColumn1 bg-white pb-5 pt-2 text-black-900"
                  style={styles.splitColumn1}
                >
                  <Img src={isQrCode} width="180" height="180" alt="QR Code" />
                  <Text className="!mb-0 !mt-0 leading-initial">
                    {attendeeId}
                  </Text>
                </Column>
                <Column
                  align="left"
                  className={`splitColumn2 splitColumn2_Content ${documentId === 'rc33x0dgm6tm707jghffuip4' ? 'bg-[#111928]' : 'bg-[#005AFF]'} align-top text-white`}
                  style={(styles.splitColumn2, styles.splitColumn2_Content)}
                >
                  <Heading
                    as="h2"
                    className="!mb-3 !mt-0 w-max border-[1.5px] border-dashed border-white px-2.5 py-2.5 !text-base !leading-[20px]"
                  >
                    <span>Ticket ID [{attendeeId}]</span>
                  </Heading>
                  <Text className="!mb-4.5 !mt-0 inline-flex !text-[16px] !leading-initial">
                    <span className="mr-2">
                      <Img
                        className="my-auto mt-0 h-6 w-6"
                        src={`https://api.coinfest.asia/uploads/ca25_Ticket_Icons_16ae30f766.png`}
                        alt={`Coinfest Asia 2025 (Calendar Board Icons)`}
                        height={48}
                        width={48}
                      />
                    </span>
                    <span className="!mt-0.5 font-semibold">{ticket}</span>
                  </Text>
                  <Text className="!mb-1.5 !mt-0 !text-[16px] !leading-initial">
                    Name : {name}
                  </Text>
                  <Text className="!mb-1.5 !mt-0 !text-[16px] !leading-initial">
                    Company : {company}
                  </Text>
                  {/* <Text className="!mb-1.5 !mt-0 max-w-[128px] !text-[14px] !leading-initial">
                    Email : {email}
                  </Text> */}
                </Column>
              </Row>

              <Row className="splitGridColumn">
                <Column className="splitColumn" style={styles.splitColumn}>
                  <Link
                    className="inline-flex w-fill bg-[#1F1F1F] px-4 py-5.5 text-center text-sm font-semibold uppercase text-white no-underline"
                    href="https://twitter.com/CoinfestAsia"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="mx-auto inline-flex">
                      <span className="!mt-0.5 leading-initial">
                        FOLLOW US FOR UPDATES
                      </span>
                      <span className="ml-3.5">
                        <Img
                          className="my-auto mt-0 h-5 w-5"
                          src={`https://api.coinfest.asia/uploads/ca25_Ticket_Follow_Us_26446d201e.png`}
                          alt={`Coinfest Asia 2025 Follow Us Icons`}
                          height={96}
                          width={96}
                        />
                      </span>
                    </span>
                  </Link>
                </Column>
                <Column
                  className="splitColumn align-middle"
                  valign="middle"
                  style={styles.splitColumn}
                >
                  <Link
                    className="inline-flex w-fill bg-[#ED4F35] px-4 py-5.5 text-center align-middle text-sm font-semibold uppercase text-white no-underline"
                    href="https://coinfest.asia/travel"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="mx-auto inline-flex">
                      <span className="!mt-0.5 leading-initial">
                        PREPARE YOUR TRIP
                      </span>
                      <span className="ml-3">
                        <Img
                          className="my-auto mt-0 h-5 w-5"
                          src={`https://api.coinfest.asia/uploads/ca25_Ticket_Trip_Travel_a94d2f84bf.png`}
                          alt={`Coinfest Asia 2025 Travel Trip Icons`}
                          height={96}
                          width={96}
                        />
                      </span>
                    </span>
                  </Link>
                </Column>
              </Row>

              <Section className="px-6 py-2 text-black-900">
                <Heading as="h4" className="!mb-0 !mt-3 text-start text-sm">
                  CHECK IN TO COINFEST ASIA 2025
                </Heading>
                <Hr className="!my-3 !border !border-dashed !border-[#E5E7EB]" />
                <Heading as="h4" className="!mb-0 !mt-3 text-start text-sm">
                  CHECK-IN AT VENUE
                </Heading>
                <Text className="!mb-0 !mt-0 text-xs">
                  <ul className="!list-decimal text-balance !pl-6 text-xs">
                    <li>
                      Check the Agenda page for your check-in time -{' '}
                      <Link
                        className="text-primary underline"
                        href="https://coinfest.asia/agenda"
                        title="Coinfest Asia 2025 Agenda"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        click here
                      </Link>
                    </li>
                    <li>
                      The name on this ticket must match a government-issued ID
                      to access the event.
                    </li>
                    <li>
                      You may show this QR code on your phone or a print out.
                    </li>
                    <li>
                      You will be provided with an Event Pass to access the
                      event.
                    </li>
                  </ul>
                </Text>
                <Heading as="h4" className="!mb-1.5 !mt-3 text-start text-sm">
                  IDENTIFICATION
                </Heading>
                <Text className="!mb-0 !mt-0 text-xs">
                  A Government issued ID matching the name on your ticket will
                  be required at check-in due to our event requirements. If the
                  name on this ticket does not match your ID, access to the
                  event will be prohibited.
                </Text>
                <Heading as="h4" className="!mb-1.5 !mt-3 text-start text-sm">
                  IMPORTANT NOTE
                </Heading>
                <Text className="!mb-0 !mt-0 text-xs">
                  <span className="font-bold">Attire:</span> We recommend you to
                  come wearing relaxed summer clothes.
                </Text>
                <Text className="!mb-0 !mt-0 text-xs">
                  <span className="font-bold">Weather conditions:</span> The
                  event is mostly outdoors and subjected to weather conditions
                  which are outside of the organizer's control and may impact
                  your event experience. The average temperature is 26°C / 79°F.
                </Text>
                <Text className="!mb-0 !mt-0 text-xs">
                  <span className="font-bold">Traffic:</span> We recommend you
                  to spare 1-2 hours in traveling to the venue as Bali traffic
                  can be unpredictable.
                </Text>
                <Text className="!mb-0 !mt-0 text-xs">
                  <span className="font-bold">Visa & Immigration:</span> Find
                  out everything you need to know about entry to Indonesia and
                  Indonesia’s travel guidelines on{' '}
                  <Link
                    className="text-primary underline"
                    href=" https://www.indonesia.travel/id/en/general-information/visa-immigration.html"
                    title="Coinfest Asia 2025 Indonesia Travel page"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Indonesia Travel page.
                  </Link>
                </Text>
                <Heading as="h4" className="!mb-1.5 !mt-3 text-start text-sm">
                  TERMS AND CONDITIONS
                </Heading>
                <Text className="!mb-2 !mt-0 text-xs text-black-900">
                  Read the full Terms and Conditions{' '}
                  <Link
                    className="text-primary underline"
                    href="https://coinfest.asia/terms-and-conditions"
                    title="Coinfest Asia 2025 (Terms & Conditions)"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Here
                  </Link>
                </Text>
                <Text className="!mb-0 !mt-0 text-balance text-xs text-black-900">
                  <span className="font-bold">Disclaimer:</span> Coinfest Asia
                  is an exclusive event focused on education and industry
                  development. Participation is limited to invited guests and
                  registered participants. Materials presented are for
                  informational purposes only and not financial advice. Entry is
                  first-come, first-served. By attending, you consent to the use
                  of your image and data for event purposes. Attendees assume
                  all risks and release the Organizer from liability. No refunds
                  on passes. Always conduct your own research before making
                  financial decisions.
                </Text>
              </Section>
            </Section>
            <Section className="px-4 py-1 text-center font-semibold text-white bg-gradient-primary">
              <Text>Coinfest Asia 2025</Text>
            </Section>
          </Container>

          <Section className="mx-auto mt-4 w-full max-w-[413px] text-center">
            <Text className="text-balance text-xs text-gray-500">
              © <span className="font-medium text-primary">Coinfest Asia</span>
              , All rights reserved. Coinfest Asia is organized by{' '}
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
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default AttendeeTickets;

// @styles
const styles = {
  splitColumn: {
    width: '50%',
  },
  splitColumn1: {
    height: '40px',
    width: '41.666667%',
  },
  splitColumn2: {
    height: '40px',
    width: '58.333333%',
  },

  qrCodeImages: {
    marginBottom: '-12px !important',
  },

  splitColumn2_Content: {
    paddingTop: '32px',
    paddingLeft: '32px',
  },
  ca25CardEmail: {
    borderRadius: '0',
    paddingTop: '3px !important',
    paddingBottom: '3px !important',
    paddingLeft: '3px',
    paddingRight: '3px',
  },
};
