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
      `${baseUrl}/api/products/${decodeData(data)}?fields[0]=id&fields[1]=documentId&fields[2]=name&fields[3]=price&fields[4]=priceSale&fields[5]=description&fields[6]=productId&fields[7]=stock`,
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
    res?.status(200).json(rs?.data);
  } catch (error) {
    return res?.status(500).json(logErr);
  }
}
