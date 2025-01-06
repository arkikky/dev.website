import { NextResponse } from 'next/server';
import getConfig from 'next/config';
import nodemailer from 'nodemailer';
import InvoiceCustomer from '@email/Customer/Invoice';
import { render } from '@react-email/render';

// @get .config
const { serverRuntimeConfig } = getConfig();

// @lib/controller & helper
import { getFetch } from '@lib/controller/API';
import {
  getTotalCart,
  calculateDiscount,
  calculateDiscountCheckout,
} from '@lib/helper/CartContext';

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
    const getCoupon = await getFetch(
      `/api/coupons?populate=*&filters[couponCode][$eq]=${coupon?.couponCode}`
    );
    const setCoupon = getCoupon?.data?.length > 0 ? getCoupon?.data[0] : null;
    const checkCoupon =
      setCoupon !== null && setCoupon !== 'null' && setCoupon !== undefined;

    if (checkCoupon) {
      const includedProductIds = setCoupon?.includedProducts?.map(
        (product) => product.documentId
      );
      const validProducts = products?.filter((product) =>
        includedProductIds?.includes(product?.documentId)
      );
      const setPrice = validProducts[0]?.priceSale ?? validProducts[0]?.price;
      const totalDiscount = calculateDiscount(setCoupon, isTotalCart, setPrice);
      const totalAfterDiscount = calculateDiscountCheckout(
        setCoupon,
        isTotalCart,
        setPrice
      );
      
      discntAmount = totalDiscount;
      totalOrder = totalAfterDiscount;
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
