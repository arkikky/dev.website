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
    const username =
      process.env.NODE_ENV === 'development'
        ? 'xnd_development_dEnEvDgtjbWIBKv1OJf8llTC2SkTYtaC5ZUWVh34Go7y3cMYlYEMYyC4DNh3a3'
        : 'xnd_production_GyzcroKwO3oIhgzwpW9TFhUEsBM8B6N8CYPMEv8LjP1rtoxdPjXPy1dpso2Df3h';
    // const username = serverRuntimeConfig?.secretTokenEncrypt;
    const basicAuth = Buffer.from(`${username}:`).toString('base64');

    const rsGetWebhook = await fetch(
      `https://api.xendit.co/v2/invoices/${paymentId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${basicAuth}`,
        },
      }
    );
    const rs = await rsGetWebhook.json();
    res?.status(200).json(rs);
  } catch (error) {
    // console.error('Error handling callback:', error);
    res?.status(500).json(logErr);
  }
}
