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
      user: 'hi@coinfest.asia',
      pass: 'cnhh xrlu aukn bphz',
    },
  });

  // @get(body)
  const { toEmail, attId, fullname, attendee, blobQrCode } = req?.body;
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
SUMMARY:🌕 Coinfest Asia 2025
DESCRIPTION:<strong>Coinfest Asia 2025</strong><br><strong>LOCATION:</strong> <a href='https://coinfest.asia/location'>Check here</a><br><strong>AGENDA:</strong> <a href='https://coinfest.asia/agenda'>Check here</a><br><br><strong>CHECK-IN AT VENUE:</strong><br>Bring ticket & government-issued ID<br><br><strong>IMPORTANT NOTE:</strong><br>👕 Attire: We recommend you to come wearing relaxed summer clothes.<br>☀️ Weather Conditions: The average temperature is 26°C / 79°F.<br>🚗 Traffic: We recommend you to spare 1-2 hours in traveling to the venue as Bali traffic can be unpredictable.
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
    <CustomerTickets
      attendeeId={attId}
      isAttendee={attendee}
      isBloQrCode={blobQrCode}
    />
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
