import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// Can be imported from a shared config
const defaultLocale = 'en'
const langs = [  'en','es' , 'pt'] as const;
const locales = langs as unknown as string[];

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();
 
  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});

export const i18n = { defaultLocale, locales, localeDetection: true };
export type Locale = ( typeof langs) [number];