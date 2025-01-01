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
        position: 'Founder',
        brandCompany: '/assets/images/speakers/brand/ca25BrandSpeakers_1.svg',
      },
      {
        url: '/',
        images: '/assets/images/speakers/as-speaker/ca25Speakers_2.png',
        name: 'Yoann Franck Turpin',
        position: 'Co-Founder',
        brandCompany: '/assets/images/speakers/brand/ca25BrandSpeakers_2.svg',
      },
      {
        url: '/',
        images: '/assets/images/speakers/as-speaker/ca25Speakers_3.png',
        name: 'Dominic Williams',
        position: 'CEO & Founder',
        brandCompany: '/assets/images/speakers/brand/ca25BrandSpeakers_3.svg',
      },
      {
        url: '/',
        images: '/assets/images/speakers/as-speaker/ca25Speakers_4.png',
        name: 'Eunice Giarta',
        position: 'Co-Founder',
        brandCompany: '/assets/images/speakers/brand/ca25BrandSpeakers_4.svg',
      },
      {
        url: '/',
        images: '/assets/images/speakers/as-speaker/ca25Speakers_5.png',
        name: 'Bobby Lee',
        position: 'CEO & Founder',
        brandCompany: '/assets/images/speakers/brand/ca25BrandSpeakers_5.svg',
      },
      {
        url: '/',
        images: '/assets/images/speakers/as-speaker/ca25Speakers_6.png',
        name: 'Thomas France',
        position: 'Co-Founder',
        brandCompany: '/assets/images/speakers/brand/ca25BrandSpeakers_6.svg',
      },
      {
        url: '/',
        images: '/assets/images/speakers/as-speaker/ca25Speakers_7.png',
        name: 'Amy Zhang',
        position: 'Head of APAC',
        brandCompany: '/assets/images/speakers/brand/ca25BrandSpeakers_7.svg',
      },
      {
        url: '/',
        images: '/assets/images/speakers/as-speaker/ca25Speakers_8.png',
        name: 'Nitin Jain',
        position: 'Vice President',
        brandCompany: '/assets/images/speakers/brand/ca25BrandSpeakers_8.svg',
      },
    ],
  };
  res?.status(200).json(rslt);
}
