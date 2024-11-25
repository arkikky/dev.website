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

// const baseUrl = `https://arkikky-dev.vercel.app`;

const AttendeeTicket = ({
  qrCode = '{qrCode}',
  attendeeId = '{attendeeId}',
  ticket = '{ticket}',
  name = '{name}',
  email = '{email}',
  company = '{company}',
}) => {
  // @format-dateTime(ISO 8601)
  const startDateTime1 = new Date(`2025-08-22T13:00:00Z`).toISOString();
  const endDateTime1 = new Date(`2025-08-22T19:30:00Z`).toISOString();
  const startDateTime2 = new Date(`2025-08-23T13:00:00Z`).toISOString();
  const endDateTime2 = new Date(`2025-08-23T19:30:00Z`).toISOString();

  // @encode
  const encodedTitle = encodeURIComponent('Coinfest Asia 2025');
  const encodedDescription = encodeURIComponent(
    'This is the largest crypto festival in the world!'
  );
  const encodedLocation = encodeURIComponent('Bali, Indonesia');
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodedTitle}&dates=${startDateTime1}/${endDateTime1},${startDateTime2}/${endDateTime2}&details=${encodedDescription}&location=${encodedLocation}&sf=true&output=xml`;

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

            .splitColumn2_Text {
              padding-left: 28px !important;
            }
          }
        `}
        </style>
      </Head>
      <Preview>
        We are sending you this email to give you access to the participant data
        update page. Please note that you can only update your data once.
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
        }}
      >
        <Body className="mx-auto my-auto bg-gray-100 px-0 py-8 font-sans">
          {/* @header(Logo) */}
          <Section className="mb-6 mt-4 px-6 py-2">
            <Img
              className="mx-auto my-auto h-10 w-auto"
              src={`https://api.coinfest.asia/uploads/ca2025_Brand_a32d2e5691.png`}
              alt={`Coinfest Asia 2025 (Primary Brand)`}
              height={58}
              width={170}
            />
          </Section>

          {/* @main */}
          <Container className="mx-auto max-w-[599px] bg-white px-0 py-0">
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
                        className="m-[0px] text-[12px] text-base font-semibold leading-[14px] text-primary underline"
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
                      <Text className="m-[0px] text-[12px] text-base font-semibold leading-[14px] text-primary underline">
                        22 - 23 August 2025
                      </Text>
                    </span>
                  </Column>
                </Row>
              </Column>
            </Row>

            {/* @calendar */}
            <Section className="px-0 py-0">
              <Link
                className="inline-flex w-fill !items-center !justify-center bg-[#DEE813] px-4 py-5 text-center text-base font-medium uppercase text-primary no-underline"
                href={googleCalendarUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mx-auto inline-flex">
                  Save the date
                  <span className="block w-[46px]">
                    <Img
                      className="h-5.5 mx-auto my-auto mt-0 w-auto"
                      src={`https://api.coinfest.asia/uploads/ca25_Ticket_Save_Date_Icons_03aa2f0b0e.png`}
                      alt={`Coinfest Asia 2025 (Save the Date Event)`}
                      height={96}
                      width={96}
                    />
                  </span>
                </span>
              </Link>
            </Section>

            {/* @ticket(Detail) */}
            <Row className="splitGridColumn">
              <Column
                align="center"
                className="splitColumn1 bg-white pt-2 text-black-900"
                style={styles.splitColumn1}
              >
                <Img
                  src={
                    'https://api.coinfest.asia/uploads/ca25_Ticket_QR_Code_A_000000_16f6e6bf13.png'
                  }
                  width="180"
                  height="180"
                  alt="QR Code"
                />
                <Text className="!mt-0">{attendeeId}</Text>
              </Column>
              <Column
                align="left"
                className="splitColumn2 bg-primary text-white"
                style={styles.splitColumn2}
              >
                <Heading
                  as="h2"
                  className="splitColumn2_Text !mb-2 !mt-0 !pt-2.5 !text-base !leading-initial"
                  style={styles.splitColumn2_Text}
                >
                  Ticket Details
                </Heading>
                <Text
                  className="splitColumn2_Text !mb-2 !mt-0 !text-[13px] !leading-initial"
                  style={styles.splitColumn2_Text}
                >
                  ID Ticket : #{attendeeId}
                </Text>
                <Text
                  className="splitColumn2_Text !mb-6 !mt-0 !text-[13px] !leading-initial"
                  style={styles.splitColumn2_Text}
                >
                  Ticket : {ticket}
                </Text>
                <Text
                  className="splitColumn2_Text !mb-2 !mt-0 !text-[13px] !leading-initial"
                  style={styles.splitColumn2_Text}
                >
                  Name : {name}
                </Text>
                <Text
                  className="splitColumn2_Text splitColumn2_TextLink !mb-2 !mt-0 !text-[13px] !leading-initial prose-a:text-white"
                  style={styles.splitColumn2_Text}
                >
                  Email : {email}
                </Text>
                <Text
                  className="splitColumn2_Text !mb-2 !mt-0 !text-[13px] !leading-initial"
                  style={styles.splitColumn2_Text}
                >
                  Company : {company}
                </Text>
              </Column>
            </Row>

            <Row className="splitGridColumn">
              <Column className="splitColumn" style={styles.splitColumn}>
                <Link
                  className="block w-fill bg-[#7FE6F4] px-4 py-6 text-center text-sm font-semibold uppercase text-black-900 no-underline"
                  href="https://t.me/coinfestasiaofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NETWORK WITH ATTENDEES
                </Link>
              </Column>
              <Column className="splitColumn" style={styles.splitColumn}>
                <Link
                  className="block w-fill bg-[#FD6F5A] px-4 py-6 text-center text-sm font-semibold uppercase text-black-900 no-underline"
                  href="https://twitter.com/CoinfestAsia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FOLLOW US FOR UPDATES
                </Link>
              </Column>
            </Row>

            <Section className="px-6 py-2 text-black-900">
              <Heading as="h4" className="!mb-0 !mt-3 text-start text-sm">
                CHECK IN TO COINFEST ASIA 2025
              </Heading>
              <Heading
                as="h4"
                className="!mb-1.5 !mt-0 !pt-0 text-start text-sm"
              >
                IMPORTANT NOTE
              </Heading>
              <Hr className="!my-3 border-gray-300" />
              <Heading as="h4" className="!mb-1.5 !mt-3 text-start text-sm">
                Attire
              </Heading>
              <Text className="!mb-0 !mt-0 text-xs">
                We recommend you to come wearing relaxed summer clothes.
              </Text>
              <Heading as="h4" className="!mb-1.5 !mt-3 text-start text-sm">
                Weather conditions
              </Heading>
              <Text className="!mb-0 !mt-0 text-xs">
                The event is mostly outdoors and subjected to weather conditions
                which are outside of the organizer's control and may impact your
                event experience. The average temperature is 26°C / 79°F.
              </Text>
              <Heading as="h4" className="!mb-1.5 !mt-3 text-start text-sm">
                Trip Guide
              </Heading>
              <Text className="!mb-0 !mt-0 text-xs">
                For a list of details and recommendations, and to follow updates
                to Indonesia’s guidelines, visit the{' '}
                <Link
                  className="text-primary underline"
                  href="https://www.indonesia.travel/id/en/destinations/bali-nusa-tenggara/bali"
                  title="Coinfest Asia 2025 (Indonesia Travel QnA)"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Indonesia Travel QnA
                </Link>{' '}
                or visit the official government website for official
                information.
              </Text>
              <Heading as="h4" className="!mb-1.5 !mt-3 text-start text-sm">
                HOW TO CHECK-IN
              </Heading>
              <Text className="!mb-0 !mt-0 text-xs">
                Check-in time will be updated on our official channels.
                <ul className="!list-decimal text-balance !pl-6 text-xs">
                  <li>Check-in starts at 1 PM (GMT+8)</li>
                  <li>
                    All attendees checked in on both Day 1 and Day 2 of the
                    event. The name on this ticket must match a
                    government-issued ID to access the event.
                  </li>
                  <li>
                    You may show this QR code on your phone or a print out.
                    Please bring a government-issued proof of ID with you.
                  </li>
                  <li>
                    You will be provided with an ID card to access the event.
                  </li>
                </ul>
              </Text>
              <Heading as="h4" className="!mb-1.5 !mt-3 text-start text-sm">
                IDENTIFICATION
              </Heading>
              <Text className="!mb-0 !mt-0 text-xs">
                A Government issued ID matching the name on your ticket will be
                required at check-in due to our event requirements. If the name
                on this ticket does not match your ID, access to the event will
                be prohibited.
              </Text>
              <Heading as="h4" className="!mb-1.5 !mt-3 text-start text-sm">
                Terms and Conditions
              </Heading>
              <Text className="!mb-2 !mt-0 text-xs text-black-900">
                Please read the full Terms & Conditions{' '}
                <Link
                  className="text-primary underline"
                  href="https://arkikky-dev.vercel.app/terms-and-conditions"
                  title="Coinfest Asia 2025 (Terms & Conditions)"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Here
                </Link>
              </Text>
              <Text className="!mb-0 !mt-0 text-balance text-xs text-black-900">
                <span className="font-medium">Disclaimer:</span> Coinfest Asia
                is a networking and educational festival focused on Web3,
                crypto, blockchain, NFTs, and the Metaverse. It is not an event
                for price forecasting, and materials presented are for
                informational purposes only, not financial or investment advice.
                Entry is first-come, first-served. NFC cards will be used as
                Event Passes for check-ins, networking, and capturing attendee
                contact information. By attending, you consent to the Organizer,
                Indonesia Crypto Network, and affiliates using and distributing
                your image, contact, and data for event purposes. Attendees
                assume all risks associated with participation and release the
                Organizer from liability for any injury or damages. Passes are
                non-transferable, with no refunds or exchanges. Remember to
                always conduct your own research before making financial
                decisions.
              </Text>
            </Section>
            <Section className="!mt-5 bg-primary px-4 py-1 text-center text-white">
              <Text>Coinfest Asia 2025</Text>
            </Section>
          </Container>

          <Section className="mx-auto mt-4 w-full max-w-[413px] text-center">
            <Text className="text-balance text-xs text-gray-500">
              © <span className="font-medium text-primary">Coinfest Asia</span>
              , All rights reserved. Coinfest is organized by{' '}
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

export default AttendeeTicket;

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

  splitColumn2_Text: {
    paddingLeft: '40px',
  },
};
