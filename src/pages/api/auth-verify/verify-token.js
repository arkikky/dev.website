import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export default async function POST(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Warning: Method not allowed' });
  } else {
    const token = res.req.body;

    jwt.verify(token.token, JWT_SECRET, function (err, decoded) {
      if (err) {
        return res.status(401).json({
          accessCheckout: false,
          status: false,
        });
      }

      return res.status(200).json({ accessCheckout: true, status: true });
    });
  }
}
