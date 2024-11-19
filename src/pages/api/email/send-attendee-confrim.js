import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import AttendeeConfrim from '@email/Attendee/Confirm';
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

  if (req.method !== 'POST') {
    return res.status(405).json(logErr);
  }

  // @gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'dicky@indonesiacrypto.network',
      pass: 'rcnv pdwu wqit xsda',
    },
  });

  // @render(Email)
  const { to, id, name } = req.body;
  const emailHtml = await render(
    <AttendeeConfrim name={name} email={to} docId={id} />
  );

  try {
    await transporter.sendMail({
      from: '"Coinfest Asia 2025" <dicky@indonesiacrypto.network>',
      to,
      subject: 'Attendee Confirmation',
      html: emailHtml,
    });

    res.status(200).json({ message: `Email sent successfully!` });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to send email', error: error.message });
  }
}
