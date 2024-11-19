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

  // @get(body)
  const { toEmail, attId, fullname, company, productTickets } = req.body;
  const formatDate = (date) =>
    new Date(date).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

  // @invitation(Event)
  const icsTicketProducts = `
BEGIN:VCALENDAR
VERSION:2.0
PRODID:${attId}/ics
CALSCALE:GREGORIAN
METHOD:PUBLISH
X-PUBLISHED-TTL:PT1H
BEGIN:VEVENT
SUMMARY:[Day 1] Coinfest Asia 2025
UID:${Date.now()}@coinfest.asia
SEQUENCE:0
PRIORITY:1
CLASS:PUBLIC
STATUS:CONFIRMED
TRANSP:OPAQUE
DTSTART:20250822T130000Z
DTEND:20250823T210000Z
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
CATEGORIES:Meet Up,Conference
LOCATION:Bali\, Indonesia
GEO:-8.3405;115.0920
DESCRIPTION:This is the largest crypto festival in the world!
URL:https://coinfest.asia
ORGANIZER;CN="hi@ticket.coinfest.asia":MAILTO:hi@ticket.coinfest.asia
CONTACT:Coinfest Asia\, hi@ticket.coinfest.asia
ATTENDEE;RSVP=TRUE;CN=${fullname}:MAILTO:ikky.andreansyah@gmail.com
X-MICROSOFT-CDO-BUSYSTATUS:FREE
END:VEVENT
BEGIN:VEVENT
SUMMARY:[Day 2] Coinfest Asia 2025
UID:${Date.now()}@coinfest.asia
SEQUENCE:0
PRIORITY:1
CLASS:PUBLIC
STATUS:CONFIRMED
TRANSP:OPAQUE
DTSTART:20250822T130000Z
DTEND:20250823T210000Z
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
CATEGORIES:Meet Up,Conference
LOCATION:Bali\, Indonesia
GEO:-8.3405;115.0920
DESCRIPTION:This is the largest crypto festival in the world!
URL:https://coinfest.asia
ORGANIZER;CN="hi@ticket.coinfest.asia":MAILTO:hi@ticket.coinfest.asia
CONTACT:Coinfest Asia\, hi@ticket.coinfest.asia
ATTENDEE;RSVP=TRUE;CN=${fullname}:MAILTO:ikky.andreansyah@gmail.com
X-MICROSOFT-CDO-BUSYSTATUS:FREE
END:VEVENT
END:VCALENDAR

    `;

  // @generate(QrCode) & render(Email)
  const gnrteQrCode = await QRCode.toDataURL(attId);
  const emailHtml = await render(
    <AttendeeTicket
      qrCode={gnrteQrCode}
      attendeeId={attId}
      name={fullname}
      email={toEmail}
      company={company}
      ticket={productTickets}
    />
  );

  try {
    await transporter.sendMail({
      from: '"Coinfest Asia 2025" <dicky@indonesiacrypto.network>',
      to: toEmail,
      subject: `[#${attId}] Ticket Coinfest Asia 2025`,
      html: emailHtml,
      attachments: [
        {
          filename: `${attId}.ics`,
          content: icsTicketProducts,
          contentType: 'text/calendar',
        },
      ],
    });

    res.status(200).json({ message: `Email sent successfully!` });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Failed to send email', error: error.message });
  }
}
