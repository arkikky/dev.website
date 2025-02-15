import { NextResponse } from 'next/server';

export function middleware(req) {
  const userAgent = req?.headers.get('user-agent')?.toLowerCase() || '';

  const blockedUserAgents = [
    'curl',
    'wget',
    'python-requests',
    'scrapy',
    'bot',
    'crawler',
    'spider',
  ];

  // Daftar bot mesin pencari terpercaya yang tidak akan diblokir
  const allowedBots = [
    'googlebot',
    'bingbot',
    'yahoo',
    'duckduckbot',
    'baiduspider',
    'yandexbot',
  ];

  // Jika user-agent termasuk dalam daftar mesin pencari terpercaya, izinkan
  if (allowedBots.some((agent) => userAgent.includes(agent))) {
    return NextResponse.next();
  }

  // Jika user-agent termasuk dalam daftar terblokir, tolak akses
  const isBlocked = blockedUserAgents.some((agent) =>
    userAgent.includes(agent)
  );
  if (isBlocked) {
    return new NextResponse('Access Denied', { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
