import { NextResponse } from 'next/server';
import getConfig from 'next/config';

// @get .config
const { serverRuntimeConfig } = getConfig();

export default async function handler(req, res) {
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
  try {
    const secretKey = serverRuntimeConfig?.secretTokenEncrypt;
    if (!secretKey) {
      return res?.status(500).json(logErr);
    }
    res?.status(200).json({ key: secretKey });
  } catch (error) {
    return res?.status(500).json(logErr);
  }
}
