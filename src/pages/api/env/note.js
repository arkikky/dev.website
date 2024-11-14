import { NextResponse } from 'next/server';

export default async function handler(req, res) {
  // res.setHeader('X-Content-Type-Options', 'nosniff');
  // res.setHeader('X-Frame-Options', 'DENY');
  // res.setHeader('X-XSS-Protection', '1; mode=block');
  // res.setHeader('Referrer-Policy', 'no-referrer');
  // res.setHeader(
  //   'Strict-Transport-Security',
  //   'max-age=31536000; includeSubDomains; preload'
  // );
  // res.setHeader(
  //   'Permissions-Policy',
  //   'geolocation=(), microphone=(), camera=()'
  // );

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
    console.warn('[warning]: method not allowed');
    return res.status(405).json(logErr);
  }

  const secretKey = process.env.SECRET_TOKEN_ENCRYPT;

  if (!secretKey) {
    console.warn('[warning]: secret key is missing');
    return res.status(500).json(logErr);
  }

  try {
    res.status(200).json({ key: secretKey });
  } catch (error) {
    console.warn('[error]: internal Server Error');
    return res.status(500).json({ message: '[error]: internal Server Error' });
  }
}
