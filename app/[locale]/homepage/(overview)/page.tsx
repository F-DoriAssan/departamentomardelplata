import { Metadata } from 'next';

import { lusitana } from '@/app/[locale]/ui/fonts';

export const metadata: Metadata = {
  title: 'Homepage',
};

export default async function Page() {

  return (
    <main>
       < div>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Homepage
      </h1>
      </div>
    </main>
  );
}
