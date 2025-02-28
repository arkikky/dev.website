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
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner-2.svg',
        captions: '2',
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner-3.svg',
        captions: '3',
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner-4.svg',
        captions: '4',
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner-5.svg',
        captions: '5',
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner-6.svg',
        captions: '6',
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner-7.svg',
        captions: '7',
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner-8.svg',
        captions: '8',
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner-9.svg',
        captions: '9',
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner-10.svg',
        captions: '10',
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner-11.svg',
        captions: '11',
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner-12.svg',
        captions: '12',
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner-13.svg',
        captions: '13',
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner-14.svg',
        captions: '14',
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner-15.svg',
        captions: '15',
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner-18.svg',
        captions: '18',
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner-19.svg',
        captions: '19',
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner-22.svg',
        captions: '22',
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner-23.svg',
        captions: '23',
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner-24.png',
        captions: '24',
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner-25.svg',
        captions: '25',
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner-26.png',
        captions: '26',
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner-33.png',
        captions: '33',
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner-34.svg',
        captions: '34',
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner-36.png',
        captions: '36',
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner-40.svg',
        captions: '40',
        openUrl: false,
      },
      {
        url: '/',
        images: '/assets/images/partners/ca25Partner-45.svg',
        captions: '45',
        openUrl: false,
      },
    ],
  };
  res?.status(200).json(rslt);
}
