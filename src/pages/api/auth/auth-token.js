import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

// @.env
const JWT_SECRET = process.env.JWT_SECRET;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default async function POST(req, res) {
  if (req.method !== 'POST') {
    console.warn('[warning]: method not allowed');
    return res.status(405).json({ message: '[warning]: method not allowed' });
  }

  const headersApiKey = req.headers['x-api-key'];
  if (headersApiKey !== API_KEY) {
    return res.status(403).json({ message: '[forbidden]: invalid API Key' });
  }

  try {
    const products = res.req.body;

    const token = jwt.sign(
      { data: products, action: 'addItems-toCart' },
      JWT_SECRET,
      {
        expiresIn: '1h',
      }
    );

    if (token) {
      return res
        .status(200)
        .json({ token, accessCheckout: true, status: true });
    } else {
      return res.status(401).json({
        accessCheckout: false,
        respon: false,
      });
    }
  } catch (error) {
    console.warn('[error]: internal Server Error');
    return res.status(500).json({ message: '[error]: internal Server Error' });
  }
}
