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
        images: '/assets/images/whats-happening/ca25WhatsHappening_1.jpg',
        captions: 'Conferences',
        openUrl: false,
        comingSoon: false,
      },
      {
        url: '/',
        images: '/assets/images/whats-happening/ca25WhatsHappening_2.jpg',
        captions: 'Hackathons',
        openUrl: false,
        comingSoon: false,
      },
      {
        url: '/',
        images: '/assets/images/whats-happening/ca25WhatsHappening_3.jpg',
        captions: 'Paintball Tournament',
        openUrl: false,
        comingSoon: false,
      },
      {
        url: '/',
        images: '/assets/images/whats-happening/ca25WhatsHappening_4.jpg',
        captions: 'Trading Competitions',
        openUrl: false,
        comingSoon: false,
      },
      {
        url: '/',
        images: '/assets/images/whats-happening/ca25WhatsHappening_5.jpg',
        captions: 'Esport Tournament',
        openUrl: false,
        comingSoon: false,
      },
      {
        url: '/',
        images: '/assets/images/whats-happening/ca25WhatsHappening_6.jpg',
        captions: 'Light Shows',
        openUrl: false,
        comingSoon: false,
      },
      {
        url: '/',
        images: '/assets/images/whats-happening/ca25WhatsHappening_7.jpg',
        captions: 'Soapbox Race',
        openUrl: false,
        comingSoon: false,
      },
      {
        url: '/',
        images: '/assets/images/whats-happening/ca25WhatsHappening_8.jpg',
        captions: 'Collective Markets',
        openUrl: false,
        comingSoon: false,
      },
      {
        url: '/',
        images: '/assets/images/whats-happening/ca25WhatsHappening_9.jpg',
        captions: 'Board Tournament',
        openUrl: false,
        comingSoon: false,
      },
      {
        url: '/',
        images: '/assets/images/whats-happening/ca25WhatsHappening_10.jpg',
        captions: 'After Parties',
        openUrl: false,
        comingSoon: false,
      },
      {
        url: '/',
        images: '/assets/images/whats-happening/ca25WhatsHappening_11.jpg',
        captions: 'Standup Comedy',
        openUrl: false,
        comingSoon: false,
      },
      {
        url: '/',
        images: '/assets/images/whats-happening/ca25WhatsHappening_12.jpg',
        captions: 'Exhibitions',
        openUrl: false,
        comingSoon: false,
      },
    ],
  };
  res?.status(200).json(rslt);
}
