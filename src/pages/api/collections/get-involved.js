import { NextResponse } from 'next/server';

export default function handler(req, res) {
  const logErr = [
    {
      error: {
        status: 405,
        name: 'ForbiddenError',
        message: 'Forbidden',
      },
    },
  ];
  if (req?.method !== 'GET') {
    return res?.status(405).json(logErr);
  }
  const rslt = {
    data: [
      {
        images: '/assets/images/get-involved/ca24GetInvolved_1.jpg',
        title: 'Speakers',
      },
      {
        images: '/assets/images/get-involved/ca24GetInvolved_2.jpg',
        title: 'Sponsors',
      },
      {
        images: '/assets/images/get-involved/ca24GetInvolved_3.jpg',
        title: 'Co-host Program',
      },
      {
        images: '/assets/images/get-involved/ca24GetInvolved_4.jpg',
        title: 'Partner as Media',
      },
    ],
  };

  res?.status(200).json(rslt);
}
