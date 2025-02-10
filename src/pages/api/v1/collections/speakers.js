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
        images: '/assets/images/speakers/as-speaker/ca25Speakers_1.png',
        name: 'Yat Siu',
        position: 'Co-Founder and Executive Chairman of Animoca Brands',
        shortDesc: `Meet Yat Siu, Co-founder and executive chairman of Animoca Brands, a powerhouse in blockchain and gaming pioneering virtual asset property rights.`,
        brandCompany: '/assets/images/speakers/brand/ca25BrandSpeakers_1.svg',
        comingSoon: true,
      },
      {
        url: '/',
        images: '/assets/images/speakers/as-speaker/ca25Speakers_2.png',
        name: 'Yoann Franck Turpin',
        position: 'Co-Founder at Wintermute',
        shortDesc: `Yoann, co-founder of Wintermute, a top crypto market maker. With a background in derivatives trading and 14+ years of entrepreneurship, he's driving Asian growth from Singapore.`,
        brandCompany: '/assets/images/speakers/brand/ca25BrandSpeakers_2.svg',
        comingSoon: true,
      },
      {
        url: '/',
        images: '/assets/images/speakers/as-speaker/ca25Speakers_3.png',
        name: 'Dominic Williams',
        position:
          'Founder & Chief Scientist at DFINITY Foundation (Internet Computer)',
        shortDesc: `Dominic Williams, Founder and Chief Scientist at DFINITY Foundation, is a leading figure in crypto theory and distributed systems. His innovations in Threshold Relay, PSC chains, and Sybil Resistance have advanced blockchain technology significantly.`,
        brandCompany: '/assets/images/speakers/brand/ca25BrandSpeakers_3.svg',
        comingSoon: true,
      },
      {
        url: '/',
        images: '/assets/images/speakers/as-speaker/ca25Speakers_4.png',
        name: 'Eunice Giarta',
        position: 'Co-Founder, COO at MONAD',
        shortDesc: `Eunice is Co-founder of Monad Labs, building the Monad blockchain to usher in a new and efficient design space for EVM developers and users alike.`,
        brandCompany: '/assets/images/speakers/brand/ca25BrandSpeakers_4.svg',
        comingSoon: true,
      },
      {
        url: '/',
        images: '/assets/images/speakers/as-speaker/ca25Speakers_5.png',
        name: 'Bobby Lee',
        position: 'CEO & Founder',
        shortDesc: null,
        brandCompany: '/assets/images/speakers/brand/ca25BrandSpeakers_5.svg',
        comingSoon: true,
      },
      {
        url: '/',
        images: '/assets/images/speakers/as-speaker/ca25Speakers_6.png',
        name: 'John Patrick Mullin',
        position: 'Founder & CEO at MANTRA',
        shortDesc: null,
        brandCompany: '/assets/images/speakers/brand/ca25BrandSpeakers_6.svg',
        comingSoon: true,
      },
      {
        url: '/',
        images: '/assets/images/speakers/as-speaker/ca25Speakers_7.png',
        name: 'Thomas France',
        position: 'Co-Founder',
        shortDesc: null,
        brandCompany: '/assets/images/speakers/brand/ca25BrandSpeakers_7.svg',
        comingSoon: true,
      },
      {
        url: '/',
        images: '/assets/images/speakers/as-speaker/ca25Speakers_8.png',
        name: 'Amy Zhang',
        position: 'Head of APAC',
        shortDesc: null,
        brandCompany: '/assets/images/speakers/brand/ca25BrandSpeakers_8.svg',
        comingSoon: true,
      },
      {
        url: '/',
        images: '/assets/images/speakers/as-speaker/ca25Speakers_9.png',
        name: 'René Michau',
        position: 'Global Head, Digital Assets at Standard',
        shortDesc: null,
        brandCompany: '/assets/images/speakers/brand/ca25BrandSpeakers_9.svg',
        comingSoon: true,
      },
      {
        url: '/',
        images: '/assets/images/speakers/as-speaker/ca25Speakers_10.png',
        name: 'Peter DeMeo',
        position: 'Head of Digital Asset Wallet Infrastructure at IBM',
        shortDesc: null,
        brandCompany: '/assets/images/speakers/brand/ca25BrandSpeakers_10.svg',
        comingSoon: true,
      },
      {
        url: '/',
        images: '/assets/images/speakers/as-speaker/ca25Speakers_11.png',
        name: 'Lennix Lai',
        position: 'CCO of OKX',
        shortDesc: null,
        brandCompany: '/assets/images/speakers/brand/ca25BrandSpeakers_11.svg',
        comingSoon: true,
      },
      {
        url: '/',
        images: '/assets/images/speakers/as-speaker/ca25Speakers_12.png',
        name: 'Nischint S',
        position: 'Head of Digital Currencies, AP at VISA',
        shortDesc: null,
        brandCompany: '/assets/images/speakers/brand/ca25BrandSpeakers_12.svg',
        comingSoon: true,
      },
    ],
  };
  res?.status(200).json(rslt);
}
