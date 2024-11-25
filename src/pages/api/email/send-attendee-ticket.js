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

  // @invitation(Event)
  const icsInvTicketDay1 = `BEGIN:VCALENDAR
PRODID:-//coinfest.asia//NONSGML v1.0//EN
VERSION:2.0
CALSCALE:GREGORIAN
METHOD:PUBLISH
X-PUBLISHED-TTL:PT8760H
BEGIN:VTIMEZONE
TZID:Asia/Makassar
LAST-MODIFIED:20240422T053450Z
TZURL:https://www.tzurl.org/zoneinfo-outlook/Asia/Makassar
X-LIC-LOCATION:Asia/Makassar
BEGIN:STANDARD
TZNAME:WITA
TZOFFSETFROM:+0800
TZOFFSETTO:+0800
DTSTART:19700101T000000
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU
END:STANDARD
END:VTIMEZONE
BEGIN:VEVENT
SUMMARY:[Day 1] Coinfest Asia 2025
UID:${Date.now()}-Day1@coinfest.asia
TZID:Asia/Makassar
CLASS:PRIVATE
STATUS:CONFIRMED
TRANSP:OPAQUE
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART:20250822T130000Z
DTEND:20250822T210000Z
CATEGORIES:Meet Up,Conference
LOCATION:Bali\, Indonesia
GEO:-8.3405;115.0920
DESCRIPTION:This is the largest crypto festival in the world!
URL:https://coinfest.asia/
ORGANIZER;CN="Coinfest Asia (hi@ticket.coinfest.asia)":MAILTO:hi@ticket.coinfest.asia
X-MICROSOFT-CDO-BUSYSTATUS:BUSY
ATTENDEE;ROLE=REQ-PARTICIPANT;CN=${fullname}:MAILTO:${toEmail}
BEGIN:VALARM
TRIGGER:-PT25M
ACTION:DISPLAY
DESCRIPTION:Reminder
END:VALARM
END:VEVENT
BEGIN:VEVENT
SUMMARY:[Day 2] Coinfest Asia 2025
UID:${Date.now()}-Day1@coinfest.asia
TZID:Asia/Makassar
CLASS:PRIVATE
STATUS:CONFIRMED
TRANSP:OPAQUE
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART:20250823T130000Z
DTEND:20250823T210000Z
CATEGORIES:Meet Up,Conference
LOCATION:Bali\, Indonesia
GEO:-8.3405;115.0920
DESCRIPTION:This is the largest crypto festival in the world!
URL:https://coinfest.asia/
ORGANIZER;CN="Coinfest Asia (hi@ticket.coinfest.asia)":MAILTO:hi@ticket.coinfest.asia
X-MICROSOFT-CDO-BUSYSTATUS:BUSY
ATTENDEE;ROLE=REQ-PARTICIPANT;CN=${fullname}:MAILTO:${toEmail}
BEGIN:VALARM
TRIGGER:-PT25M
ACTION:DISPLAY
DESCRIPTION:Reminder
END:VALARM
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
          filename: `${attId}@CoinfestAsia.ics`,
          content: icsInvTicketDay1,
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
