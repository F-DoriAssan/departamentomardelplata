import '@/app/[locale]/ui/global.css';

import { inter } from '@/app/[locale]/ui/fonts';

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
