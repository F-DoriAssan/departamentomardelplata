import { lusitana } from '@/app/[locale]/ui/fonts';
import { WindowIcon } from '@heroicons/react/24/outline';

export default function TechnologyLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <WindowIcon className="h-12 w-12 " />
      <p className="text-[44px]">Technology</p>
    </div>
  );
}
