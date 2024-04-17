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

interface RootLayoutProps{
  children: React.ReactNode;
  params: {locale: string};                                      
}

export default function RootLayout({
  children,
  params: {locale},
}: Readonly<RootLayoutProps>){
  return (
    <html lang={locale}>
      <body className={`${inter.className} antialiased`}>
        <div className='flex flex-col min-h-screen max-w-4xl mx-auto'>
          <h1>header</h1>
          <div className='flex-grow mt-20'>
            
          {children}

          </div>
          <h1>Foter</h1>
        </div>
      </body>
    </html>
  );
}
// Can be imported from a shared config