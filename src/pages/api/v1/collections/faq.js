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
        shortDesc: `Coinfest Asia is a major Web3 and crypto festival in Asia, bringing together industry leaders, developers, investors, and enthusiasts to explore blockchain, DeFi, Web3, and more.`,
      },
      {
        title: 'When and where is Coinfest Asia 2025?',
        shortDesc: `Coinfest Asia 2025 will be held in Bali, Indonesia from August 21st to 22nd. Stay tuned for the venue detail!`,
      },
      {
        title: 'Who should attend?',
        shortDesc: `Everyone who wants to celebrate crypto shall come! Crypto enthusiasts, developers and engineers, investors, web3 and crypto companies, government reps, media and influencers, and YOU!`,
      },
    ],
  };

  res?.status(200).json(rslt);
}
