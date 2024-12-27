import { NextResponse } from 'next/server';
import getConfig from 'next/config';
// import CryptoJS from 'crypto-js';

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
    // const nonce = CryptoJS.lib.WordArray.random(20).toString(
    //   CryptoJS.enc.Base64
    // );
    res?.setHeader(
      'Content-Security-Policy',
      `default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests`
    );
    res?.status(200).json({ key: secretKey });
  } catch (error) {
    return res?.status(500).json(logErr);
  }
}
