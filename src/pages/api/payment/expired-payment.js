//api.xendit.co/invoices/676cd97ad1eb9c5c5403f497/expire!

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
  const { paymentId } = req?.body;
  if (!paymentId) {
    return res?.status(400).json(logErr);
  }

  try {
    const basicAuth = Buffer.from(
      serverRuntimeConfig?.secretXenditToken
    ).toString('base64');

    const rs = await fetch(
      `https://api.xendit.co/invoices/${paymentId}/expire!`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${basicAuth}`,
        },
      }
    );
    const rsExpired = await rs.json();
    res?.status(200).json({ data: rsExpired });
  } catch (error) {
    // console.error('Error creating invoice:', error);
    res?.status(500).json(logErr);
  }
}
