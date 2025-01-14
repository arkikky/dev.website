import { NextResponse } from 'next/server';
const XENDIT_CALLBACK_TOKEN = process.env.XENDIT_CALLBACK_TOKEN;

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
    const callbackData = req?.body;
    let message;

    const callbackToken = req?.headers['x-callback-token'];
    console.log('callbackToken');
    console.log(callbackToken);

    if (callbackData?.status === 'PAID') {
      message = 'Payment successful!';
    } else if (callbackData?.status === 'EXPIRED') {
      message = 'Payment expired!';
    } else if (callbackData?.status === 'FAILED') {
      message = 'Payment failed!';
    }
    res?.status(200).json(message);
  } catch (error) {
    res?.status(500).json(logErr);
  }
}
