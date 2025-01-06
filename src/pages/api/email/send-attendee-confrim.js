import { NextResponse } from 'next/server';
import getConfig from 'next/config';
import nodemailer from 'nodemailer';
import AttendeeConfrim from '@email/Attendee/Confirm';
import { render } from '@react-email/render';

// @get .config
const { serverRuntimeConfig } = getConfig();

export default async function handler(req, res) {
  const headersApiKey = req?.headers['x-api-key'];
  // @notification(Log Error)
  const logErr = [
    {
      error: {
        status: 405,
        name: 'ForbiddenError',
        message: 'Forbidden',
      },
    },
  ];
  if (req?.method !== 'POST') {
    return res?.status(405).json(logErr);
  }
  if (
    !headersApiKey ||
    headersApiKey !== serverRuntimeConfig?.secretTokenEncrypt
  ) {
    return res?.status(405).json(logErr);
  }
  // @gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'hi@coinfest.asia',
      pass: 'cnhh xrlu aukn bphz',
    },
  });

  // @render(Email)
  const { to, id, name } = req?.body;
  const emailHtml = await render(
    <AttendeeConfrim name={name} email={to} docId={id} />
  );
  try {
    await transporter.sendMail({
      from: '"Ticket | Coinfest Asia" <ticket@coinfest.asia>',
      to: to,
      subject: '[Attendee Confirmation] Access Coinfest Asia 2025 Updates',
      html: emailHtml,
    });
    res?.status(200).json({ message: `Email sent successfully!` });
  } catch (error) {
    res?.status(500).json(logErr);
  }
}
