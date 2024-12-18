import { NextResponse } from 'next/server';
import getConfig from 'next/config';
import nodemailer from 'nodemailer';
import InvoiceCustomer from '@email/Customer/Invoice';
import { render } from '@react-email/render';

// @get .config
const { serverRuntimeConfig } = getConfig();

export default async function handler(req, res) {
  const headersApiKey = req.headers['x-api-key'];
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

  if (req.method !== 'POST') {
    return res.status(405).json(logErr);
  }
  if (
    !headersApiKey ||
    headersApiKey !== serverRuntimeConfig.secretTokenEncrypt
  ) {
    return res.status(405).json(logErr);
  }

  // @gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'dicky@indonesiacrypto.network',
      pass: 'rcnv pdwu wqit xsda',
    },
  });

  // @render(Email)
  const {
    toEmail,
    attId,
    createDate,
    fullname,
    company,
    products,
    subtotal,
    discountAmount,
    total,
  } = req.body;
  const emailHtml = await render(
    <InvoiceCustomer
      customerId={attId}
      date={createDate}
      name={fullname}
      email={toEmail}
      company={company}
      products={products}
      subtotal={subtotal}
      discount={discountAmount}
      total={total}
    />
  );

  try {
    await transporter.sendMail({
      from: '"Ticket | Coinfest Asia" <ticket@coinfest.asia>',
      to: toEmail,
      subject: 'Invoice | Your Order is Complete',
      html: emailHtml,
    });

    res.status(200).json({ message: `Email sent successfully!` });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to send email', error: error.message });
  }
}
