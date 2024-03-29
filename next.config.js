/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
        i18n: {
          locales: ['en','pt','es', 'fr', 'nl'],
          defaultLocale: 'en',
          domains: [
            {
              domain: 'example.com',
              defaultLocale: 'en',
            },
            {
              domain: 'example.nl',
              defaultLocale: 'nl',
            },
            {
              domain: 'example.fr',
              defaultLocale: 'fr',
              // an optional http field can also be used to test
              // locale domains locally with http instead of https
              http: true,
            },
          ],
            }
};


module.exports = nextConfig
