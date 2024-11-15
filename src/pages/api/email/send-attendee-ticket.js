import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import QRCode from 'qrcode';
import AttendeeTicket from '@email/Attendee/Ticket';
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
    return res.status(405).json(logErr);
  }

  const { to, attId, name, company } = req.body;
  const gnrteQrCode = await QRCode.toDataURL(attId);

  const emailHtml = await render(
    <AttendeeTicket
      qrCode={gnrteQrCode}
      attendeeId={attId}
      name={name}
      email={to}
      company={company}
    />
  );

  try {
    await transporter.sendMail({
      from: '"Coinfest Asia 2025" <dicky@indonesiacrypto.network>',
      to,
      subject: `[#${attId}] Ticket Coinfest Asia 2025`,
      html: emailHtml,
    });

    res.status(200).json({ message: `Email sent successfully!` });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to send email', error: error.message });
  }
}
