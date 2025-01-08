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
        url: '/',
        images: '/assets/images/partners/ca25Partner-1.svg',
        captions: '1',
        mobileSizeUp: true,
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner-2.svg',
        captions: '2',
        mobileSizeUp: true,
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner-3.svg',
        captions: '3',
        mobileSizeUp: true,
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner-4.svg',
        captions: '4',
        mobileSizeUp: true,
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner-5.svg',
        captions: '5',
        mobileSizeUp: true,
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner-6.svg',
        captions: '6',
        mobileSizeUp: true,
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner-7.svg',
        captions: '7',
        mobileSizeUp: false,
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner-8.svg',
        captions: '8',
        mobileSizeUp: false,
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner-9.svg',
        captions: '9',
        mobileSizeUp: false,
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner-10.svg',
        captions: '10',
        mobileSizeUp: false,
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner-11.svg',
        captions: '11',
        mobileSizeUp: false,
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner-12.svg',
        captions: '12',
        mobileSizeUp: false,
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner-13.svg',
        captions: '13',
        mobileSizeUp: false,
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner-14.svg',
        captions: '14',
        mobileSizeUp: false,
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner-15.svg',
        captions: '15',
        mobileSizeUp: false,
        openUrl: false,
      },
    ],
  };
  res?.status(200).json(rslt);
}
