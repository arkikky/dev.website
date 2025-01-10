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
        images: '/assets/images/about-us/ca25AboutUs-1.jpg',
        title: 'Dive into Emerging Markets',
        shortDesc:
          'Get connected in Southeast Asia; the fastest-growing Web3 region in the world!',
      },
      {
        images: '/assets/images/about-us/ca25AboutUs-2.jpg',
        title: 'Jump Straight to Adoption',
        shortDesc:
          'Foster collaborations directly in Indonesia where there are 22 million users',
      },
      {
        images: '/assets/images/about-us/ca25AboutUs-3.jpg',
        title: 'Unconventionally Engaging',
        shortDesc:
          'Our immersive programming, setting, and sessions leave you with more memory markers than any other event',
      },
    ],
  };

  res?.status(200).json(rslt);
}
