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
        url: '/get-involved/speakers',
        images: '/assets/images/get-involved/ca24GetInvolved_1.jpg',
        title: 'Speakers',
        position: 'normal',
        comingSoon: false,
      },
      {
        url: '/get-involved/sponsorship/',
        images: '/assets/images/get-involved/ca24GetInvolved_2.jpg',
        title: 'Sponsors',
        position: 'normal',
        comingSoon: false,
      },
      {
        url: '/get-involved',
        images: '/assets/images/get-involved/ca24GetInvolved_3.jpg',
        title: 'Co-Host Program',
        position: 'normal',
        comingSoon: true,
      },
      {
        url: '/get-involved',
        images: '/assets/images/get-involved/ca24GetInvolved_4.jpg',
        title: 'Partner as Media',
        position: 'left',
        comingSoon: true,
      },
    ],
  };
  res?.status(200).json(rslt);
}
