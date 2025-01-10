import { NextResponse } from 'next/server';
import getConfig from 'next/config';

// @get .config
const { serverRuntimeConfig } = getConfig();

export default async function handler(req, res) {
  const headersApiKey = req?.headers['x-api-key'];
  // @notification(Log Error)
  const logErr = [
    {
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
  // @data(body)
  const { extrnlId, amount, payerEmail, fullname, phone, order } = req?.body;
  if (!extrnlId || !amount || !payerEmail || !fullname || !phone || !order) {
    return res?.status(400).json(logErr);
  }
  try {
    const basicAuth = Buffer.from(
      serverRuntimeConfig?.secretXenditToken
    ).toString('base64');
    const Invoice = {
      external_id: `CA25-${extrnlId}`,
      amount: amount,
      payer_email: payerEmail,
      description: `Payment for Order #C-${extrnlId} at Tickets | Coinfest Asia 2025`,
      customer: {
        given_names: fullname,
        surname: fullname,
        email: payerEmail,
        mobile_number: phone,
      },
      callback_url: `${process.env.NEXT_PUBLIC_SITE_URL}/api/payment/webhook-callback`,
      success_redirect_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/order-received?process=${order}`,
      failure_redirect_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/order-received?process=${order}`,
      currency: 'IDR',
      invoice_duration: 900,
      customer_notification_preference: {
        invoice_created: ['email', 'whatsapp'],
        invoice_reminder: ['whatsapp'],
        invoice_paid: ['whatsapp'],
      },
      should_authenticate_credit_card: true,
    };

    const rsInvoice = await fetch('https://api.xendit.co/v2/invoices', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${basicAuth}`,
      },
      body: JSON.stringify(Invoice),
    });
    const rs = await rsInvoice.json();
    res?.status(200).json({ data: rs });
  } catch (error) {
    // console.error('Error creating invoice:', error);
    res?.status(500).json(logErr);
  }
}
