'use server';

import { cookies } from 'next/headers';
import {
  setCookie,
  deleteCookie,
  hasCookie,
  getCookie,
  getCookies,
} from 'cookies-next';

export async function testAction() {
  console.log(cookies);

  // setCookie('test', 'value', { cookies });
}
