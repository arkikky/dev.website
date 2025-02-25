import { NextResponse } from 'next/server';

export default function handler(req, res) {
  const lgErr = [
    {
      error: {
        status: 405,
        name: 'ForbiddenError',
        message: 'Forbidden',
      },
    },
  ];
  if (req?.method !== 'GET') {
    return res?.status(405).json(lgErr);
  }
  const rslt = {
    data: [
      {
        id: 1,
        attributes: {
          name: 'Coinvestasi',
          url: 'https://coinvestasi.com/',
          rank: 1,
          createdAt: '2025-02-24T08:26:38.889Z',
          updatedAt: '2025-02-24T14:16:45.699Z',
          publishedAt: '2025-02-24T10:52:54.823Z',
          logo: {
            data: {
              id: 2763,
              attributes: {
                name: 'Coinvestasi.svg',
                alternativeText: null,
                caption: null,
                width: 312,
                height: 120,
                formats: null,
                hash: 'Coinvestasi_daee121416',
                ext: '.svg',
                mime: 'image/svg+xml',
                size: 165.83,
                url: '/uploads/Coinvestasi_daee121416.svg',
                previewUrl: null,
                provider: 'local',
                provider_metadata: null,
                createdAt: '2025-02-24T14:16:38.169Z',
                updatedAt: '2025-02-24T14:16:38.169Z',
              },
            },
          },
        },
      },
    ],
  };

  res?.status(200).json(rslt);
}
