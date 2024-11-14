import { NextResponse } from 'next/server';

export default async function handler(req, res) {
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

  console.log(secretKey);

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
