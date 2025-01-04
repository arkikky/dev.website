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
        images: '/assets/images/get-involved/ca24GetInvolved_1.jpg',
        title: 'Speakers',
      },
      {
        url: '/',
        images: '/assets/images/get-involved/ca24GetInvolved_2.jpg',
        title: 'Sponsors',
      },
      {
        url: '/',
        images: '/assets/images/get-involved/ca24GetInvolved_3.jpg',
        title: 'Co-Host Program',
      },
      {
        url: '/',
        images: '/assets/images/get-involved/ca24GetInvolved_4.jpg',
        title: 'Partner as Media',
      },
    ],
  };
  res?.status(200).json(rslt);
}
