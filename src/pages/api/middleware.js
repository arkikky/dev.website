// import { NextResponse } from 'next/server';

// export default async function middleware(req) {
//   const { pathname } = req.nextUrl;

//   const allowedOrigins = [
//     'https://localhost:3001',
//     'https://coinfest.asia',
//     'https://arkikky-dev0.vercel.app',
//   ];

//   console.log('awdwadawd');
//   const origin = req.headers('origin') || req.headers('referer') || '';
//   console.log(origin);

//   if (!allowedOrigins.includes(origin)) {
//     return NextResponse.json(
//       { error: { status: 403, message: 'Access forbidden' } },
//       { status: 403 }
//     );
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/api/:path*'],
// };
