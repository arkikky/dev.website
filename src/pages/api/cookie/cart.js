
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';


import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export default async function POST(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Warning: Method not allowed' });
  } else {
    setCookie('server-key', 'value', { req, res, maxAge: 60 * 60 * 24 });
    getCookie('key', { req, res });
    getCookies({ req, res });
    deleteCookie('key', { req, res });

    return res.status(200).json({ message: 'ok' });
  }
}
