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
      
            
          {children}

      </body>
    </html>
  );
}
// Can be imported from a shared config