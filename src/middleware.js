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
  const allowedBots = [
    'googlebot',
    'bingbot',
    'yahoo',
    'duckduckbot',
    'baiduspider',
    'yandexbot',
  ];

  // @trusted-agent
  if (allowedBots.some((agent) => userAgent.includes(agent))) {
    return NextResponse.next();
  }

  // @block-agent
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
