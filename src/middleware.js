import { NextResponse } from 'next/server';
import { getCookie, hasCookie } from 'cookies-next';

export async function middleware(request) {
  // @checkouts
  if (request.nextUrl.pathname === '/checkout') {
    const cokiesCart = getCookie('_cart', {
      req: request,
    });

    const authToken = getCookie('_athutkca25', { req: request });

    // const isCart =
    //   cokiesCart !== undefined ? JSON.parse(cokiesCart).data.length > 0 : false;

    // if (!isCart) {
    //   return NextResponse.redirect(new URL('/cart', request.url));
    // }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/checkout'],
};
