import { NextResponse } from 'next/server';
import { hasCookie, getCookie } from 'cookies-next';

export async function middleware(request) {
  // @checkouts
  if (request.nextUrl.pathname === '/checkout') {
    const hashCokiesCart = hasCookie('_cart', {
      req: request,
    });

    // const authToken = getCookie('_athutkca25', { req: request });

    if (hashCokiesCart === true) {
      const cokiesCart = getCookie('_cart', {
        req: request,
      });

      const isCart =
        JSON.parse(cokiesCart).data !== undefined
          ? JSON.parse(cokiesCart).data.length > 0
          : false;

      if (!isCart) {
        return NextResponse.redirect(new URL('/cart', request.url));
      }
    } else {
      return NextResponse.redirect(new URL('/cart', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/checkout'],
};
