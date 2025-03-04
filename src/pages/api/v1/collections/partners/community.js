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
          updatedAt: '2025-02-25T04:30:32.409Z',
          publishedAt: '2025-02-24T10:52:54.823Z',
          logo: {
            data: {
              id: 2766,
              attributes: {
                name: 'Coinvestasi.svg',
                alternativeText: null,
                caption: null,
                width: 312,
                height: 120,
                formats: null,
                hash: 'Coinvestasi_4a82c25c7f',
                ext: '.svg',
                mime: 'image/svg+xml',
                size: 26.89,
                url: '/uploads/Coinvestasi_4a82c25c7f.svg',
                previewUrl: null,
                provider: 'local',
                provider_metadata: null,
                createdAt: '2025-02-25T04:29:15.674Z',
                updatedAt: '2025-02-25T04:29:15.674Z',
              },
            },
          },
        },
      },
    ],
  };

  res?.status(200).json(rslt);
}
