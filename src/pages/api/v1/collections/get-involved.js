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
        images: '/assets/images/get-involved/ca25GetInvolved_1.jpg',
        title: 'Speakers',
        position: 'normal',
        comingSoon: false,
      },
      {
        url: '/get-involved/sponsorship/',
        images: '/assets/images/get-involved/ca25GetInvolved_2.jpg',
        title: 'Sponsors',
        position: 'normal',
        comingSoon: false,
      },
      {
        url: '/get-involved',
        images: '/assets/images/get-involved/ca25GetInvolved_3.jpg',
        title: 'Partner as Media',
        position: 'left',
        comingSoon: true,
      },
      {
        url: '/get-involved/become-an-affiliate',
        images: '/assets/images/get-involved/ca25GetInvolved_4.jpg',
        title: 'Become an Affiliate',
        position: 'normal',
        comingSoon: false,
      },
      {
        url: '/get-involved',
        images: '/assets/images/get-involved/ca25GetInvolved_5.jpg',
        title: 'Partner as Community',
        position: 'normal',
        comingSoon: true,
      },
    ],
  };
  res?.status(200).json(rslt);
}
