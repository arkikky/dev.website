import { NextResponse } from 'next/server';
import getConfig from 'next/config';

// @get .config
const { serverRuntimeConfig } = getConfig();

// @lib/controller & helper
import { decodeData } from '@lib/helper/Configuration';

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
    const baseUrl = `https://api.coinfest.asia`;
    const tokenApp = serverRuntimeConfig?.token_api;
    if (!tokenApp) {
      return res?.status(500).json(logErr);
    }
    // @data(body)
    const { data } = req?.body;
    if (!data) {
      return res?.status(400).json(logErr);
    }
    const rs = await fetch(
      `${baseUrl}/api/coupons?populate=*&filters[couponCode][$eqi]=${decodeData(data)}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${tokenApp}`,
        },
        cache: 'no-store',
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch(() => {
        return false;
      });
    res?.status(200).json(rs?.data[0] ?? null);
  } catch (error) {
    return res?.status(500).json(logErr);
  }
}
