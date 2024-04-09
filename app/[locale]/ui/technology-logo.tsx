import Image from 'next/image';

import { lusitana } from '@/app/[locale]/ui/fonts';
import { WindowIcon } from '@heroicons/react/24/outline';

export default function TechnologyLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <Image
        src="/favicon-500-o.png"
        width={500}
        height={500}
        className="mx-auto h-10 w-auto"
        alt="Your Company"
      />
      <p className="text-[44px] text-amber-600 hover:text-amber-500 shado focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 ">Techno</p>
      <WindowIcon className="h-12 w-12  text-amber-900" />

    </div>
  );
}
