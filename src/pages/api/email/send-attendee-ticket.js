import { NextResponse } from 'next/server';
import getConfig from 'next/config';
import nodemailer from 'nodemailer';
import AttendeeTickets from '@email/Attendee/Tickets';
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
      user: 'dicky@indonesiacrypto.network',
      pass: 'rcnv pdwu wqit xsda',
    },
  });

  // @get(body)
  const { toEmail, qrCode, docId, attId, fullname, company, productTickets } =
    req?.body;

  // @invitation(Event)
  const icsInvTicketDay = `BEGIN:VCALENDAR
PRODID:-//coinfest.asia//Google Calendar 70.9054//EN
VERSION:2.0
CALSCALE:GREGORIAN
METHOD:REQUEST
BEGIN:VEVENT
DTSTART:20250821T060000Z
DTEND:20250822T060000Z
DTSTAMP:20240910T034339Z
CATEGORIES:Meet Up,Conference
ORGANIZER;CN="Coinfest Asia (hi@ticket.coinfest.asia)":mailto:hi@ticket.coinfest.asia
UID:${Date.now()}@coinfest.asia
SUMMARY:Coinfest Asia 2025
DESCRIPTION:This is the largest crypto festival in the world!
ATTENDEE;CUTYPE=INDIVIDUAL;ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;RSVP=TRUE;X-NUM-GUESTS=0:mailto:${toEmail}
LOCATION:Bali\, Indonesia
SEQUENCE:0
STATUS:CONFIRMED
TRANSP:OPAQUE
BEGIN:VALARM
TRIGGER:-PT25M
ACTION:DISPLAY
DESCRIPTION:Reminder
END:VALARM
END:VEVENT
END:VCALENDAR

      `;

  // @generate(QrCode) & render(Email)
  const emailHtml = await render(
    <AttendeeTickets
      qrCode={qrCode}
      documentId={docId}
      attendeeId={attId}
      name={fullname}
      email={toEmail}
      company={company}
      ticket={productTickets}
    />
  );
  try {
    await transporter.sendMail({
      from: '"Ticket | Coinfest Asia" <ticket@coinfest.asia>',
      to: toEmail,
      subject: `[#${attId}] Ticket Coinfest Asia 2025`,
      html: emailHtml,
      attachments: [
        {
          filename: `${attId}@CoinfestAsia.ics`,
          content: icsInvTicketDay,
          contentType: 'text/calendar',
        },
      ],
    });
    res?.status(200).json({ message: `Email sent successfully!` });
  } catch (error) {
    res?.status(500).json(logErr);
  }
}
