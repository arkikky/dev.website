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
        label: 'General',
        listQuestions: [
          {
            questions: 'What is Coinfest Asia?',
            answer: `Coinfest Asia is the largest crypto festival in the world, bringing together industry leaders, developers, investors, and enthusiasts to celebrate true crypto culture.`,
          },
          {
            questions: 'When and where is Coinfest Asia 2025?',
            answer: `Coinfest Asia 2025 will be held in Bali, Indonesia from August 21st to 22nd. Stay tuned for the venue detail!`,
          },
          {
            questions: 'Who should attend?',
            answer: `Everyone who wants to celebrate crypto shall come! Crypto enthusiasts, developers and engineers, investors, web3 and crypto companies, government reps, media and influencers, and YOU!`,
          },
        ],
      },
      {
        label: 'Tickets',
        listQuestions: [
          {
            questions: 'How can I register?',
            answer: `Buy your tickets on our <a href='/tickets' title='Coinfest Asia 2025 Tickets'>Ticket page</a>.`,
          },
          {
            questions: 'What tickets are available?',
            answer: `
            <strong>Festival tickets</strong>: Perfect for you who wants to celebrate crypto <br/>
            <strong>Group package tickets</strong>: Perfect for you who wants to bring 5 people <br/>
            <strong>Bull tickets</strong>: Perfect for you who wants to level up your network with key industry players.`,
          },
        ],
      },
      {
        label: 'Get Involved',
        listQuestions: [
          {
            questions: 'How can my company become a sponsor or exhibitor?',
            answer: `Fill in the form on our <a href='/get-involved/sponsorship' title='Coinfest Asia 2025 Request Sponsorship Prospectus'>Request Sponsorship Prospectus</a> and our sponsorship team will get in touch with you.`,
          },
          {
            questions: 'Can I become a speaker?',
            answer: `Yes! Submit your application through our <a href='/get-involved/speakers' title='Coinfest Asia 2025 Speaker Submission'>Speaker Submission</a> page. Our program team will be in touch with you if you passed their review.`,
          },
          {
            questions: 'Can I partner with Coinfest Asia in other ways?',
            answer: `Coinfest Asia welcomes partnerships as media, community, affiliate, travel partner, and more. If you’re interested in collaborating differently, email us at <a href='mailto:partner@coinfest.asia' title='Coinfest Asia 2025 Email' target='_blank'>partner@coinfest.asia.</a>`,
          },
        ],
      },
      {
        label: 'Contact',
        listQuestions: [
          {
            questions: 'How can I stay updated?',
            answer: `Follow us on <a href='mailto:https://x.com/coinfestasia' title='Coinfest Asia 2025 Social Media' target='_blank'>social media</a> and join our <a href='mailto:https://t.me/coinfestasiaofficial' title='Coinfest Asia 2025 Telegram Group' target='_blank'>Telegram group</a> for updates.`,
          },
          {
            questions: 'How can I contact you?',
            answer: `For further inquiries and assistance, reach out to us through <a href='mailto:hi@coinfest.asia' title='Coinfest Asia 2025 Email' target='_blank'>hi@coinfest.asia.</a>`,
          },
        ],
      },
    ],
  };
  res?.status(200).json(rslt);
}
