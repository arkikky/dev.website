import { NextResponse } from 'next/server';

export function middleware(req) {
  const userAgent = req?.headers.get('user-agent')?.toLowerCase() || '';

  const blockedUserAgents = [
    'curl',
    'wget',
    'python-requests',
    'scrapy',
    'spider',
  ];

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
