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
        images: '/assets/images/partners/ca25Partner_1.svg',
        captions: '1',
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner_2.svg',
        captions: '2',
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner_3.svg',
        captions: '3',
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner_4.svg',
        captions: '4',
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner_5.svg',
        captions: '5',
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner_6.svg',
        captions: '6',
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner_7.svg',
        captions: '7',
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner_8.svg',
        captions: '8',
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner_9.svg',
        captions: '9',
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner_10.svg',
        captions: '10',
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner_11.svg',
        captions: '11',
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner_12.svg',
        captions: '12',
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner_13.svg',
        captions: '13',
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner_14.svg',
        captions: '14',
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner_15.svg',
        captions: '15',
        openUrl: false,
      },
    ],
  };
  res?.status(200).json(rslt);
}
