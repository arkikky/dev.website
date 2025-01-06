import {
  Tailwind,
  Html,
  Head,
  Preview,
  Body,
  Container,
  Row,
  Column,
  Hr,
  Section,
  Heading,
  Img,
  Button,
  Text,
  Link,
} from '@react-email/components';
import dayjs from 'dayjs';
import { currencyConverter } from '@lib/helper/CalculateCartContext';

const InvoiceCustomer = ({
  customerId = '{customerId}',
  date = '{date}',
  name = '{name}',
  email = '{email}',
  products = [
    {
      id: 36,
      documentId: 'g1ukadil4n4a3r0ndly7jl42',
      productId: 'T-FestivalTikets',
      name: 'Festival Tickets',
      price: '2453068',
      priceSale: null,
      quantity: 1,
    },
  ],
  subtotal = 0,
  discount = 0,
  total = 0,
}) => {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Invoice - Coinfest Asia 2025</title>
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

            .ca25CardEmail {
              padding-left: 3px !important;
              padding-right: 3px !important;
            }
            .ca25CardEmailContent {
              padding-left: 16px !important;
              padding-right: 16px !important;
            }
            
            .tableTextLabel {
              font-size: 12px !important;
              line-height: 14px !important;
              padding-right: 22px !important;
            }
            .tableText {
              font-size: 12px !important;
              line-height: 14px !important;
            }

            .orderSummary {
              width: 98px !important;
            }
          }
        `}
        </style>
      </Head>
      <Preview>{`Thank you for choosing to purchase tickets for Coinfest Asia! We are delighted to have you join us at this premier event, where innovation and collaboration shape the future of blockchain and cryptocurrency. Your participation is highly valued, and we look forward to welcoming you. Stay tuned for updates, and get ready for an unforgettable experience!`}</Preview>
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
        <Body className="mx-auto my-auto bg-gray-100 px-1 pb-16 pt-12 font-sans">
          {/* @main */}
          <Container
            className="ca25CardEmail mx-auto max-w-[579px] !py-[3px] bg-gradient-primary"
            style={styles.ca25CardEmail}
          >
            <Section
              className="ca25CardEmailContent bg-white !py-0 pb-1"
              style={styles.ca25CardEmailContent}
            >
              <Section className="!mt-6">
                <Row>
                  <Column>
                    <Heading className="text-black !m-0 text-2xl font-bold">
                      Invoice
                    </Heading>
                    <Text className="!mb-0 !mt-0 text-gray-500">
                      Number : #{customerId}
                    </Text>
                  </Column>
                  <Column align="top-right">
                    <Img
                      className="mb-auto ml-auto h-7.5 w-auto"
                      src={`https://api.coinfest.asia/uploads/ca25_Brand_f3d87b5401.png`}
                      alt={`Coinfest Asia 2025 (Primary Brand)`}
                      height={58}
                      width={170}
                    />
                  </Column>
                </Row>
              </Section>
              <Hr className="!mt-5 !border !border-dashed !border-[#E5E7EB]" />
              <Section className="!my-4 pt-2">
                <div className="overflow-hidden rounded-lg">
                  <Row className="splitGridColumn">
                    <Column className="splitColumn" style={styles.splitColumn}>
                      <span className="my-auto block pb-4 pl-0">
                        <Text className="!mb-1 !mt-[0px] text-[14px] text-sm font-light leading-[20px] text-gray-500">
                          Transaction Date :
                        </Text>
                        <Link
                          className="!mb-[0px] !mt-2 text-[14px] font-medium leading-[14px] text-black-900"
                          href=""
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="block w-max rounded-md bg-transparent px-0 py-1.5 text-black-900">
                            {dayjs(date).format('ddd, MMMM D, YYYY')}
                          </span>
                        </Link>
                      </span>
                    </Column>
                    <Column className="splitColumn" style={styles.splitColumn}>
                      <span className="my-auto block pb-4 pl-0">
                        <Text className="!mb-1 !mt-[0px] text-[14px] text-sm font-light leading-[20px] text-gray-500">
                          Payment Method :
                        </Text>
                        <Text className="!mb-[0px] !mt-2 text-[12px] font-medium leading-[12px]">
                          <span className="block w-max rounded-md bg-black-900 px-2 py-1.5 text-white">
                            {'All Support Payment'}
                          </span>
                        </Text>
                      </span>
                    </Column>
                  </Row>
                  <Row className="splitGridColumn">
                    <Column
                      className="splitColumn align-top"
                      style={styles.splitColumn}
                    >
                      <span className="my-auto block pb-4 pl-0 pt-2">
                        <Text className="!mb-1 !mt-[0px] text-[14px] text-sm font-light leading-[20px] text-gray-500">
                          Bill from :
                        </Text>
                        <Text className="!mb-[0px] !mt-2 text-[14px] font-medium leading-[14px] text-black-900">
                          {'Coinfest Asia 2025'}
                        </Text>
                      </span>
                    </Column>
                    <Column className="splitColumn" style={styles.splitColumn}>
                      <span className="my-auto block pb-4 pl-0 pt-2">
                        <Text className="!mb-1 !mt-[0px] text-[14px] text-sm font-light leading-[20px] text-gray-500">
                          Bill to :
                        </Text>
                        <span className="block">
                          <Text className="!mb-[0px] !mt-2 text-[14px] font-medium leading-[14px] text-black-900">
                            {name}
                          </Text>
                          <Text className="!mb-[0px] !mt-2 text-[13px] font-medium leading-[13px] text-black-900">
                            {email}
                          </Text>
                        </span>
                      </span>
                    </Column>
                  </Row>
                </div>
              </Section>
              {products && (
                <Section>
                  <div className="overflow-hidden rounded-lg border border-solid border-gray-200">
                    <table
                      className="w-full"
                      cellPadding="0"
                      cellSpacing="0"
                      role="presentation"
                    >
                      <thead className="border-b border-solid border-gray-200 bg-gray-100">
                        <tr>
                          <th className="px-2.5 py-2.5 text-left text-sm font-normal text-gray-500">
                            {`Products`}
                          </th>
                          <th className="px-2.5 py-2.5 text-center text-sm font-normal text-gray-500">
                            {`Price`}
                          </th>
                          <th className="tKext-right px-2.5 py-2.5 text-sm font-normal text-gray-500">
                            {`Qty`}
                          </th>
                          <th className="px-2.5 py-2.5 text-right text-sm font-normal text-gray-500">
                            {`Total`}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {products?.slice(0, 3).map((gtRslt, i) => (
                          <tr key={i}>
                            <td
                              className="tableTextLabel px-2.5 py-2.5 font-normal"
                              style={styles.tableText}
                            >
                              {gtRslt.name}
                            </td>
                            <td
                              className="tableText px-2.5 py-2.5 text-center font-normal"
                              style={styles.tableText}
                            >
                              {currencyConverter(
                                gtRslt.priceSale ?? gtRslt.price
                              )}
                            </td>
                            <td
                              className="tableText px-2.5 py-2.5 text-center font-normal"
                              style={styles.tableText}
                            >
                              {gtRslt.quantity}
                            </td>
                            {gtRslt?.documentId ===
                            'sn4ujm0d1ebbc8lme1ihzsa9' ? (
                              <td
                                className="tableText px-2.5 py-2.5 text-right font-normal"
                                style={styles.tableText}
                              >
                                {currencyConverter(
                                  gtRslt.priceSale ?? gtRslt.price
                                )}
                              </td>
                            ) : (
                              <td
                                className="tableText px-2.5 py-2.5 text-right font-normal"
                                style={styles.tableText}
                              >
                                {currencyConverter(
                                  (gtRslt.priceSale ?? gtRslt.price) *
                                    gtRslt.quantity
                                )}
                              </td>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Section>
              )}
              <Section className="mt-5">
                <div className="float-right space-y-2 text-right">
                  <div className="flex justify-end">
                    <Text className="!mb-2 !mt-0 w-32 font-medium text-black-900">
                      Subtotal:
                    </Text>
                    <Text
                      className="orderSummary !my-0 text-right"
                      style={styles.orderSummary}
                    >
                      {currencyConverter(subtotal)}
                    </Text>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-end">
                      <Text className="!mb-2 !mt-0 w-32 font-medium text-black-900">
                        Discount:
                      </Text>
                      <Text
                        className="orderSummary !my-0 text-right text-gray-400"
                        style={styles.orderSummary}
                      >
                        {`-${currencyConverter(discount)}`}
                      </Text>
                    </div>
                  )}
                  <div className="flex justify-end">
                    <Text className="!mb-2 !mt-0 w-32 font-medium text-black-900">
                      Total (inc. Tax):
                    </Text>
                    <Text
                      className="orderSummary !my-0 text-right"
                      style={styles.orderSummary}
                    >
                      {currencyConverter(total)}
                    </Text>
                  </div>
                </div>
              </Section>
              <Section className="!pt-16">
                <Text className="!mb-2 text-sm font-semibold text-black-900">
                  <span className="font-semibold text-black-900">
                    Thank you!
                  </span>
                </Text>
                <Text className="!mt-0 max-w-[437px] text-xs text-black-900">
                  Your payment was successful, and your order is complete! If
                  you have any questions or need further assistance, visit our{' '}
                  <Link
                    className="text-primary underline"
                    href="mailto:support@coinfest.asia"
                    title="Coinfest Asia 2025 FAQ Page"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    FAQ
                  </Link>{' '}
                  page. Alternatively, you can reach out to us at{' '}
                  <Link
                    className="text-primary underline"
                    href="mailto:support@coinfest.asia"
                    title="Link to contact Coinfest Asia 2025 support"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    support@coinfest.asia
                  </Link>
                </Text>
                <Text className="max-w-[417px] text-xs text-black-900">
                  ©{' '}
                  <span className="font-medium text-primary">
                    Coinfest Asia
                  </span>
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

                {/* @footer */}
                <Row className="ca25TableIn_Flexible inline-block pb-5 pt-2">
                  <Column className="inline-block w-full">
                    <span className="float-left block w-max">
                      <ul className="!my-0 inline-flex !list-none flex-row !pl-0 text-xs">
                        <li className="!ml-0">
                          <Link
                            href="http://coinfest.asia"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Img
                              className="mx-auto my-auto mt-0 h-5 w-5"
                              src={`https://api.coinfest.asia/uploads/ca25_Website_b57403f9ec.png`}
                              alt={`Coinfest Asia 2025 (Website)`}
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
};

export default InvoiceCustomer;

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
  ca25CardEmail: {
    paddingLeft: '3px',
    paddingRight: '3px',
  },
  ca25CardEmailContent: {
    paddingLeft: '26px',
    paddingRight: '26px',
  },

  tableText: {
    fontSize: '14px',
    lineHeight: '18px',
  },

  orderSummary: {
    width: '144px',
  },
};
