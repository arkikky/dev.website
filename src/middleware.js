import { NextResponse } from 'next/server';

export function middleware(req) {
  const userAgent = req?.headers.get('user-agent');

  const blockedUserAgents = [
    'curl',
    'wget',
    'python-requests',
    'scrapy',
    'bot',
    'crawler',
    'spider',
  ];
  const isBlocked = blockedUserAgents.some((agent) =>
    userAgent.toLowerCase().includes(agent)
  );
  if (isBlocked) {
    return new NextResponse('Access Denied', { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
