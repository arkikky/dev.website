import { NextResponse } from 'next/server';
import { getCookie, hasCookie } from 'cookies-next';

export async function middleware(request) {
  const url = request.nextUrl.clone();

  // @checkouts
  if (url.pathname === '/checkout') {
    const cokiesCart = getCookie('_cart', {
      req: request,
    });
    const authToken = getCookie('_athutkca25', { req: request });

    const isCart =
      cokiesCart !== undefined ? JSON.parse(cokiesCart).data.length > 0 : false;

    if ((!isCart && !authToken) || !isCart || !authToken) {
      url.pathname = '/cart';
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/checkout'],
};
