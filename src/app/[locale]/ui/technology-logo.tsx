import { lusitana } from 'src/app/[locale]/ui/fonts';

import { WindowIcon } from '@heroicons/react/24/outline';

export default function TechnologyLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <p className="text-[44px] text-sky-100 hover:text-amber-500 shado focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 ">Web</p>
      <WindowIcon className="h-12 w-12  text-sky-100" />

    </div>
  );
}
