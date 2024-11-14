import {
  Tailwind,
  Html,
  Head,
  Preview,
  Body,
  Container,
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
            src={`${baseUrl}/assets/images/ca2025Brand.svg`}
            alt={`Coinfest Asia 2025 (Primary Brand)`}
            height={58}
            width={170}
          />
        </Section>

        {/* @main */}
        <Container className="mx-auto max-w-[579px] bg-white px-0 py-0">
          <Section className="mt-4 px-6 py-0">
            <Heading className="text-sm text-black-900">Halo, {name}!</Heading>
            <Text>
              We are sending you this email to give you access to the
              participant data update page. Please note that you can only update
              your data once. Please click the button below to update your data:
            </Text>

            <Button
              className="rounded-xl bg-primary px-5 py-4 text-center text-sm font-semibold text-white hover:underline"
              href={`${baseUrl}/attendee/update?vw=${docId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Update Attendee
            </Button>

            <Text className="text-black text-[14px] leading-[24px]">
              Or copy and paste this URL into your browser: <br />
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
          <Section className="px-6 py-2">
            {/* <Text className="text-xs text-gray-500">
              Disclaimer: Coinfest Asia is a networking and educational festival
              focused on Web3, crypto, blockchain, NFTs, and the Metaverse. It
              is not an event for price forecasting, and materials presented are
              for informational purposes only, not financial or investment
              advice. Entry is first-come, first-served. NFC cards will be used
              as Event Passes for check-ins, networking, and capturing attendee
              contact information. By attending, you consent to the Organizer,
              Indonesia Crypto Network, and affiliates using and distributing
              your image, contact, and data for event purposes. Attendees assume
              all risks associated with participation and release the Organizer
              from liability for any injury or damages. Passes are
              non-transferable, with no refunds or exchanges. Remember to always
              conduct your own research before making financial decisions.
            </Text> */}

            <Text className="text-sm text-gray-500">
              <span className="font-semibold text-black-900">Important:</span>{' '}
              This link can only be used once. Once you access the update page,
              make sure to fill in all the information correctly as you will not
              be able to make any changes after that.
            </Text>
            <Text className="text-sm text-gray-500">
              This message was sent to verify your email address. If you have
              any questions and can’t find the answers on our FAQ page, reach
              out to{' '}
              <Link
                className="text-primary underline"
                href="mailto:support@coinfest.asia"
                target="_blank"
                rel="noopener noreferrer"
              >
                support@coinfest.asia
              </Link>{' '}
              - we’re always happy to help.
            </Text>
            <Text className="text-sm text-gray-500">
              <span className="font-medium text-black-900">Thanks,</span> <br />
              Coinfest Support Team
            </Text>

            <Text className="pt-12 text-sm text-gray-500">
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
          <Section className="mt-1 bg-primary px-4 py-1 text-center text-white">
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

export default AttendeeConfrim;

// Styles
const main = { backgroundColor: '#f6f9fc', padding: '10px' };
const container = {
  backgroundColor: '#ffffff',
  padding: '20px',
  borderRadius: '8px',
};
const h1 = { fontSize: '24px', color: '#333' };
const text = { fontSize: '16px', color: '#555' };
