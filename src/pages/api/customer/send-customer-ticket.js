import { NextResponse } from 'next/server';
import getConfig from 'next/config';
import nodemailer from 'nodemailer';
import CustomerTickets from '@email/Customer/Tickets';
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
  const { toEmail, attId, fullname, attendee } = req?.body;
  // @invitation(Event)
  const generateICS = () => {
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
    return icsInvTicketDay;
  };
  // @render(Email)
  const emailHtml = await render(
    <CustomerTickets attendeeId={attId} isAttendee={attendee} />
  );
  const icsInvTickets = generateICS();

  try {
    await transporter.sendMail({
      from: '"Ticket | Coinfest Asia" <ticket@coinfest.asia>',
      to: toEmail,
      subject: `Tickets Coinfest Asia 2025`,
      html: emailHtml,
      attachments: [
        {
          filename: `Ticket${attId}@CoinfestAsia.ics`,
          content: icsInvTickets,
          contentType: 'text/calendar',
        },
      ],
    });
    res?.status(200).json({ message: `Email sent successfully!` });
  } catch (error) {
    res?.status(500).json(logErr);
  }
}
