import { NextResponse } from 'next/server';
import { hasCookie, getCookie, deleteCookie } from 'cookies-next';

export async function middleware(request) {
  // @checkouts
  if (request.nextUrl.pathname === '/checkout') {
    const hashCokiesCart = hasCookie('_cart', {
      req: request,
    });

    console.log(hashCokiesCart);

    // const authToken = getCookie('_athutkca25', { req: request });

    // if (hashCokiesCart === true) {
    //   const cokiesCart = getCookie('_cart', {
    //     req: request,
    //   });

    //   const isCart =
    //     JSON.parse(cokiesCart).data !== undefined
    //       ? JSON.parse(cokiesCart).data.length > 0
    //       : false;

    //   if (!isCart) {
    //     deleteCookie('_cart', {
    //       req: request,
    //     });
    //     return NextResponse.redirect(new URL('/cart', request.url));
    //   }
    // } else {
    //   deleteCookie('_cart', {
    //     req: request,
    //   });
    //   return NextResponse.redirect(new URL('/cart', request.url));
    // }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/checkout'],
};
