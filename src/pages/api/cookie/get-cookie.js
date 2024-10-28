import { NextResponse } from 'next/server';
import { setCookie } from 'cookies-next';

// @.env
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default async function POST(req, res) {
  // const headersApiKey = req.headers['x-api-key'];

  // // @notification(error)
  // const logErr = [
  //   {
  //     data: null,
  //     error: {
  //       status: 405,
  //       name: 'ForbiddenError',
  //       message: 'Forbidden',
  //     },
  //   },
  // ];

  // if (req.method !== 'POST') {
  //   return res.status(405).json({ message: 'Warning: Method not allowed' });
  // } else if (headersApiKey !== API_KEY) {
  //   return res.status(403).json(logErr);
  // } else {
  // }
  try {
    const d = req.body;

    console.log(d);

    // setCookie('_cart', 'awdaw');
    setCookie('test', 'value', { req, res, maxAge: 60 * 60 * 24 });
  } catch (error) {
    console.warn('[error]: internal Server Error');
    return res.status(500).json({ message: '[error]: internal Server Error' });
  }
}
