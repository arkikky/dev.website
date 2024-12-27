import { NextResponse } from 'next/server';
const XENDIT_CALLBACK_TOKEN =
  'etsOhRnOhPe8PbuMY66KdubpE4Y9KA5aYa3NZj8jIUbha9Qa';

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

    // if (callbackToken !== XENDIT_CALLBACK_TOKEN) {
    //   return res?.status(403).json(logErr);
    // }

    if (callbackData?.status === 'PAID') {
      message = 'Payment successful!';
    } else if (callbackData?.status === 'EXPIRED') {
      message = 'Payment expired!';
    } else if (callbackData?.status === 'FAILED') {
      message = 'Payment failed!';
    }

    res?.status(200).json(message);
  } catch (error) {
    console.error('Error handling callback:', error);
    res?.status(500).json({ error: 'Failed to handle callback' });
  }
}
