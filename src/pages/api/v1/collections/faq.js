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
        title: 'What is Coinfest Asia?',
        shortDesc:
          'Coinfest immerses you directly into adoption, innovation, and emerging markets in Asia. Held in Bali - Indonesia, the event will be rather unique and not structured like a typical conference, giving all participants a platform to engage and network in a casual setting. Coinfest Asia is hosted by Coinvestasi, Indonesia’s #1 crypto media (an Indonesia Crypto Network company). Coinfest Asia is an insight & networking festival, sharing opportunities around Crypto, Blockchain & Web3 and NOT a price-forecasting event.',
      },
      {
        title: 'Who will attend Coinfest Asia 2024?',
        shortDesc:
          'This event is perfect for you who is a founder or C-level of your company, a crypto and Web3 enthusiast, a fund manager, a product manager, an NFT creator, a brand partnership leader, a VC analyst, a program developer, an art & NFT collector, a marketing expert—everyone who is interested in gaining insight & networking in Web3 industry.',
      },
      {
        title: 'Are there any side events happening?',
        shortDesc:
          'Prepare yourself for not only 2 days of Coinfest Asia but also a week full of side events during Coinfest Week.',
      },
    ],
  };

  res?.status(200).json(rslt);
}
