import '@/app/[locale]/ui/global.css';

import { Metadata } from 'next';

import { inter } from '@/app/[locale]/ui/fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | Technology Dashboard',
    default: 'Technology Dashboard',
  },
  description: 'This is experience Next.js websites , brought to you by Vercel & ©DoriAss.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,

}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
