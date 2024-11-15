import { NextResponse } from 'next/server';
// import Cors from 'cors';

// // @cros(configs)
// const cors = Cors({
//   methods: ['GET', 'POST'],
//   origin: ['https://trusted-domain.com'],
// });

export default async function middleware(req) {
  const { pathname } = req.nextUrl;

  // @order-recived
  // if (pathname.startsWith('/checkout/order-received')) {
  // }

  return NextResponse.next();
}

// export const config = {
//   matcher: ['/checkout/:path*'],
// };
