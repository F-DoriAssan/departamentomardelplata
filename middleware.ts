import NextAuth from 'next-auth';
import { i18nRouter } from 'next-i18n-router';

import { authConfig } from './auth.config';
import i18nConfig from './i18nConfig';

export default NextAuth(authConfig).auth;


export function middleware(request:any) {
  return i18nRouter(request, i18nConfig);
}

// applies this middleware only to files in the app directory
export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)'
};