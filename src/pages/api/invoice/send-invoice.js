import { NextResponse } from 'next/server';
import getConfig from 'next/config';
import nodemailer from 'nodemailer';
import InvoiceCustomer from '@email/Customer/Invoice';
import { render } from '@react-email/render';

// @get .config
const { serverRuntimeConfig } = getConfig();

// @lib/controller & helper
import { getFetch } from '@lib/controller/API';
import { getTotalCart } from '@lib/helper/Store';

export default async function handler(req, res) {
  const headersApiKey = req?.headers['x-api-key'];
  // @notification(Log Error)
  const logErr = [
    {
      data: null,
      error: {
        status: 405,
        name: 'ForbiddenError',
        message: 'Forbidden',
      },
    },
  ];

  if (req?.method !== 'POST') {
    return res?.status(405).json(logErr);
  }
  if (
    !headersApiKey ||
    headersApiKey !== serverRuntimeConfig?.secretTokenEncrypt
  ) {
    return res?.status(405).json(logErr);
  }

  // @gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'hi@coinfest.asia',
      pass: 'cnhh xrlu aukn bphz',
    },
  });

  // @data(body)
  const { toEmail, attId, createDate, fullname, company, products, coupon } =
    req?.body;
  const isTotalCart = getTotalCart(products);
  let totalOrder, discntAmount;

  if (isTotalCart) {
    const isDataCoupon = await getFetch(
      `/api/coupons?populate=*&filters[couponCode][$eq]=${coupon?.couponCode}`
    );
    const setCoupon =
      isDataCoupon?.data?.length > 0 ? isDataCoupon?.data[0] : null;
    const checkCoupon =
      setCoupon !== null && setCoupon !== 'null' && setCoupon !== undefined;

    if (checkCoupon) {
      const { type, amount } = setCoupon;
      const includedProductIds = setCoupon?.includedProducts?.map(
        (p) => p.documentId
      );
      const validProducts = products?.filter((product) =>
        includedProductIds?.includes(product?.documentId)
      );

      // @check(valid Product)
      const discntAmounts = parseFloat(amount) || 0;
      const isPrices =
        validProducts[0]?.priceSale ?? validProducts[0]?.price ?? 0;
      let calculatedDiscounts = 0;
      if (type === 'percentage') {
        calculatedDiscounts =
          parseInt(discntAmounts) >= 100
            ? Math.min(isTotalCart, isPrices)
            : isPrices * (discntAmounts / 100);
      } else if (type === 'fix') {
        calculatedDiscounts = Math.min(discntAmounts, isTotalCart);
      } else {
        // @implement logic for non-percentage coupons if needed
      }

      const isTotalOrder = isTotalCart - calculatedDiscounts;
      const taxAmount = Math.floor(isTotalOrder * 0.11);
      const totalWithTax = isTotalOrder + taxAmount;

      discntAmount = calculatedDiscounts;
      totalOrder = totalWithTax;
    } else {
      const setTax_Rate = 0.11;
      const taxAmount = isTotalCart * setTax_Rate;
      const totalWithTax = isTotalCart + taxAmount;
      discntAmount = 0;
      totalOrder = totalWithTax;
    }
  }

  // @render(Email)
  const emailHtml = await render(
    <InvoiceCustomer
      customerId={attId}
      date={createDate}
      name={fullname}
      email={toEmail}
      company={company}
      products={products}
      subtotal={isTotalCart}
      discount={discntAmount}
      total={totalOrder}
    />
  );
  try {
    await transporter.sendMail({
      from: '"Ticket | Coinfest Asia" <ticket@coinfest.asia>',
      to: toEmail,
      subject: 'Invoice | Your Order is Complete',
      html: emailHtml,
    });

    res?.status(200).json({ message: `Email sent successfully!` });
  } catch (error) {
    res?.status(500).json(logErr);
  }
}
