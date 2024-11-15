import {
  Tailwind,
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Row,
  Column,
  Heading,
  Hr,
  Img,
  Button,
  Text,
  Link,
} from '@react-email/components';

const baseUrl = `https://arkikky-dev.vercel.app`;

const AttendeeTicket = ({
  qrCode = '{qrCode}',
  attendeeId = '{attendeeId}',
  name = '{name}',
  email = '{email}',
  company = '{company}',
}) => (
  <Html lang="en" dir="ltr">
    <Head>
      <title>Attendee Confirmation - Coinfest Asia 2025</title>
      <style>
        {`
          .splitColumn2_TextLink a {
            color: #FFFFFF !important;
          }

          @media only screen and (max-width: 640px) {
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
      }}
    >
      <Body className="mx-auto my-auto bg-gray-100 px-2 py-8 font-sans">
        {/* @header(Logo) */}
        <Section className="mb-6 mt-4 px-6 py-2">
          <Img
            className="mx-auto my-auto h-10 w-auto"
            src={`${baseUrl}/emails/ca2025Brand.png`}
            alt={`Coinfest Asia 2025 (Primary Brand)`}
            height={58}
            width={170}
          />
        </Section>

        {/* @main */}
        <Container className="mx-auto max-w-[639px] bg-white px-0 py-0">
          <Section className="mt-4 px-0 py-0">
            <Link
              className="block w-fill bg-[#DEE813] px-4 py-6 text-center text-sm font-semibold uppercase text-black-900 no-underline"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              ADD TO CALENDAR +
            </Link>
          </Section>

          <Row className="splitGridColumn">
            <Column
              align="center"
              className="splitColumn1 bg-white text-black-900"
              style={styles.splitColumn1}
            >
              <Img
                src={
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAYAAABUmhYnAAAAAklEQVR4AewaftIAAALWSURBVO3BQY7DVgwFwX6E7n/ljpdcfUCQ7GQYVsUP1hjFGqVYoxRrlGKNUqxRijVKsUYp1ijFGqVYoxRrlGKNUqxRijVKsUa5eCgJv6TypiR0Kl0SfknliWKNUqxRijXKxctU3pSEkyR0Kl0SOpVO5Q6VNyXhTcUapVijFGuUiy9Lwh0qd6h0SThJQqfyRBLuUPmmYo1SrFGKNcrF/4zKZMUapVijFGuUiz8uCScqXRJOVP6yYo1SrFGKNcrFl6l8k8oTKk+o/JcUa5RijVKsUS5eloRfSkKn0iWhU+mS0KmcJOG/rFijFGuUYo0SPxgsCZ3KZMUapVijFGuUi4eS0Kl0SehUuiR0Kl0SOpWTJNyRhE7ljiR0KidJ6FTeVKxRijVKsUaJHzyQhBOVO5LQqXRJ6FROknCi0iWhU7kjCZ3KSRI6lSeKNUqxRinWKBcvU+mScKLSqXRJ6FROkvCESpeETuWOJHQqncqbijVKsUYp1igX/7IknKg8odIloUvCiUqXhE7lRKVLwonKE8UapVijFGuUi4dUuiR0Kk8koVPpkvCEykkSTpLQqXRJOFF5U7FGKdYoxRrl4mUqb1J5k8qbVLokdCq/VKxRijVKsUaJHzyQhF9SOUnCiUqXhE7lJAknKnckoVN5olijFGuUYo0SP3ggCZ3Km5LQqfxSEjqVLgl3qHxTsUYp1ijFGuXiy5Jwh8odSehU7khCp3KHSpeETuUkCZ3KE8UapVijFGuUiz9O5SQJJypdEjqVLgmdykkSTlTeVKxRijVKsUa5+OOScKLSJeGOJHQqXRLuUOmS0Kk8UaxRijVKsUa5+DKVb1I5ScJJEk5UuiR0KidJ6JLwTcUapVijFGuUi5cl4ZeS8IRKl4QuCSdJ6FQ6lZMkvKlYoxRrlGKNEj9YYxRrlGKNUqxRijVKsUYp1ijFGqVYoxRrlGKNUqxRijVKsUYp1ijFGuUfTbAv5Cb18tsAAAAASUVORK5CYII='
                }
                width="160"
                height="160"
                alt="QR Code"
              />
              <Text className="!mt-0">{attendeeId}</Text>
            </Column>
            <Column
              align="left"
              className="splitColumn2 bg-[#015AFD] text-white"
              style={styles.splitColumn2}
            >
              <Heading
                as="h2"
                className="splitColumn2_Text !mb-2 !mt-0 !text-base !leading-initial"
                style={styles.splitColumn2_Text}
              >
                Ticket Details
              </Heading>
              <Text
                className="splitColumn2_Text !mb-2 !mt-0 !text-[13px] !leading-initial"
                style={styles.splitColumn2_Text}
              >
                Ticket ID : #{attendeeId}
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
            <Heading as="h4" className="!mb-1 !mt-3 text-start text-sm">
              CHECK IN TO COINFEST ASIA 2024
            </Heading>
            <Heading as="h4" className="!mb-1.5 !mt-0 text-start text-sm">
              IMPORTANT NOTE
            </Heading>
            <Hr className="!my-[16px] border-gray-300" />
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
              IDENTIFICATION
            </Heading>
            <Text className="!mb-0 !mt-0 text-xs">
              A Government issued ID matching the name on your ticket will be
              required at check-in due to our event requirements. If the name on
              this ticket does not match your ID, access to the event will be
              prohibited.
            </Text>
            <Heading as="h4" className="!mb-1.5 !mt-3 text-start text-sm">
              Terms and Conditions
            </Heading>
            <Text className="!mb-2 !mt-0 text-xs text-gray-500">
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
            <Text className="!mb-0 !mt-0 text-xs text-gray-500">
              <span className="font-medium">Disclaimer:</span> Coinfest Asia is
              a networking and educational festival focused on Web3, crypto,
              blockchain, NFTs, and the Metaverse. It is not an event for price
              forecasting, and materials presented are for informational
              purposes only, not financial or investment advice. Entry is
              first-come, first-served. NFC cards will be used as Event Passes
              for check-ins, networking, and capturing attendee contact
              information. By attending, you consent to the Organizer, Indonesia
              Crypto Network, and affiliates using and distributing your image,
              contact, and data for event purposes. Attendees assume all risks
              associated with participation and release the Organizer from
              liability for any injury or damages. Passes are non-transferable,
              with no refunds or exchanges. Remember to always conduct your own
              research before making financial decisions.
            </Text>

            <Text className="!my-0 pt-8 text-xs">
              Copyright ©{' '}
              <span className="font-medium text-primary">Coinfest Asia</span>.
              All rights reserved. Coinfest is organized by{' '}
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
          <Section className="!mt-4 bg-primary px-4 py-1 text-center text-white">
            <Text>Coinfest Asia 2025</Text>
          </Section>
        </Container>

        <Section className="mx-auto mt-2 w-full max-w-[353px] text-center">
          <Text className="text-sm text-gray-500">
            The email was sent to{' '}
            <span className="text-primary underline">{email}</span>. To no
            longer receive these emails
          </Text>
        </Section>
      </Body>
    </Tailwind>
  </Html>
);

export default AttendeeTicket;

// @styles
const styles = {
  splitColumn: {
    width: '50%',
  },
  splitColumn1: {
    height: '40px',
    width: '33.333333%',
  },
  splitColumn2: {
    height: '40px',
    width: '66.666667%',
  },

  splitColumn2_Text: {
    paddingLeft: '64px',
  },
};
