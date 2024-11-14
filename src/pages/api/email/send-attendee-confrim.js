import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import AttendeeConfrim from '@email/attendee/confirm';
import { render } from '@react-email/render';

export default async function handler(req, res) {
  // @notification(Log Error)
  const logErr = [
    {
      data: null,
      error: {
        status: 405,
        name: 'ForbiddenError',
        message: 'Forbidden',
      },
    },
  ];

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'dicky@indonesiacrypto.network',
      pass: 'rcnv pdwu wqit xsda',
    },
  });

  if (req.method !== 'POST') {
    console.warn('[warning]: method not allowed');
    return res.status(405).json(logErr);
  }

  const { to, id, name } = req.body;
  const emailHtml = await render(
    <AttendeeConfrim name={name} email={to} docId={id} />
  );

  try {
    // console.log('awdwad');

    await transporter.sendMail({
      // from: 'dicky@indonesiacrypto.network',
      from: '"Coinfest Asia 2025" <dicky@indonesiacrypto.network>',
      to,
      subject: 'Attendee Confirmation - Coinfest Asia 2025',
      html: emailHtml,
    });

    res.status(200).json({ message: `Email sent successfully!` });
  } catch (error) {
    console.error('Failed to send email:', error);
    res
      .status(500)
      .json({ message: 'Failed to send email', error: error.message });
  }
}
