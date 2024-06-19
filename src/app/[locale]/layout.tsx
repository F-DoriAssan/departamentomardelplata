import '@/app/[locale]/ui/global.css';

import { Metadata } from 'next';

import { inter } from '@/app/[locale]/ui/fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | Departamento',
    default: 'Departamento Mar del Plata',
  },
  description: 'Alquilar departamento en Mar del Plata | Departamento Mar del Plata | departamentomardelplata.com',
  metadataBase: new URL('https:/departamentomardelplata.com'),
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png'],
  },
  manifest: '/site.webmanifest',
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
   <link rel="icon" href="/favicon.ico" type="/favicon.ico" sizes="any"/>

          {children}

      </body>
    </html>
  );
}
// Can be imported from a shared config